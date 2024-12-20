// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	server: {
	    port: 3000,
    },
    output: "static",
	integrations: [react(), tailwind({
		applyBaseStyles: false
	})],
	adapter: cloudflare({
		cloudflareModules: false,
		platformProxy: {
			enabled: true,
			configPath: "./wrangler.json",
			persist: true,
		},
	})
});
