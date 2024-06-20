import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
    base: './',
    resolve: {
        alias: {
            '@typings': resolve("./src/typings"),
            '@stores': resolve("./src/stores"),
            "@components": resolve("./src/components"),
        }
    },
});
