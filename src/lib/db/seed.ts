import { drizzle } from "drizzle-orm/better-sqlite3";
import { getLocalD1DB } from "drizzle-dev.config.ts";
import { seed, reset } from "drizzle-seed";
import * as schema from "./schema";

async function main() {
	const db = drizzle(getLocalD1DB());

	await reset(db, schema);

	await seed(db, schema, {
		count: 10
	}).refine((f) => ({
		articles: {
			columns: {
				id: f.intPrimaryKey(),
				title: f.string(),
				slug: f.string(),
				description: f.loremIpsum({ sentencesCount: 2 }),
				content: f.loremIpsum({ sentencesCount: 10 }),
				created_at: f.timestamp(),
				updated_at: f.timestamp(),
				ai_generated: f.boolean(),
				sources: f.default({ defaultValue: ["https://example.com"] })
			},
			count: 10
		}
	}))
}

main();
