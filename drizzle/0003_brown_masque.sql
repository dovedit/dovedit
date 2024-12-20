CREATE TABLE `reader_articles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`htmlContent` text NOT NULL,
	`publishedAt` integer NOT NULL,
	`source` text NOT NULL
);
