import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const articlesSchema = sqliteTable("articles", {
	id: int().primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	slug: text().notNull(),
	description: text().notNull(),
	content: text().notNull(),
	created_at: int({ mode: "timestamp" }).notNull(),
	updated_at: int({ mode: "timestamp" }),
	ai_generated: int({ mode: "boolean" }),
}, () => []);
