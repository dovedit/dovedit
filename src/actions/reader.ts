import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Readability } from "@mozilla/readability";
import { parseHTML } from "linkedom";
import { readerArticles } from "@/lib/db/schema";
import { eq, or } from "drizzle-orm";

export const reader = {
	getArticle: defineAction({
		accept: "form",
		input: z.object({
			url: z.string().url()
		}),
		handler: async (input, ctx) => {
			const db = ctx.locals.db;
			const urlToFetch = input.url;

			const response = await fetch(urlToFetch, {
				method: "GET",
				headers: {
					"Content-Type": "text/html",
					"Accept": "text/html"
				}
			})

			const parsedDocument = parseHTML(await response.text());

			const article = new Readability(parsedDocument.document).parse();

			if (!article) {
				return {
					error: "Article not found"
				}
			}

			const check = await db.select().from(readerArticles)
				.where(or(
					eq(readerArticles.source, urlToFetch),
					eq(readerArticles.htmlContent, article.content),
				))
				.get();

			if (!!check) {
				return {
					id: check.id
				}
			}

			const insertResult = await db.insert(readerArticles).values({
				title: article?.title,
				htmlContent: article?.content,
				publishedAt: new Date(article?.publishedTime),
				source: urlToFetch
			}).returning();

			if (!insertResult[0]) {
				return {
					error: "Article not found"
				}
			}

			return {
				id: insertResult[0].id
			}
		}
	})
}
