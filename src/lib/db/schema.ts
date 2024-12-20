import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const articles = sqliteTable("articles", {
	id: int().primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	slug: text().notNull(),
	description: text().notNull(),
	content: text().notNull(),
	created_at: int({ mode: "timestamp" }).notNull().default(sql`(CURRENT_TIMESTAMP)`),
	updated_at: int({ mode: "timestamp" }),
	ai_generated: int({ mode: "boolean" }),
	sources: text({ mode: "json" }).$type<Array<string>>(),
}, () => []);

export type SelectArticle = typeof articles.$inferSelect;
export type InsertArticle = typeof articles.$inferInsert;

export const readerArticles = sqliteTable("reader_articles", {
	id: int().primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	htmlContent: text().notNull(),
	publishedAt: int({ mode: "timestamp" }).notNull(),
	source: text().notNull(),
}, () => [])

export type SelectReaderArticle = typeof readerArticles.$inferSelect;
export type InsertReaderArticle = typeof readerArticles.$inferInsert;
