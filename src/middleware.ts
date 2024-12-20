import { defineMiddleware } from "astro:middleware";
import { getDb } from "./lib/db";

export const onRequest = defineMiddleware((ctx, next) => {
	ctx.locals.db = getDb(ctx.locals.runtime.env);

	return next();
})
