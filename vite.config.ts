import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['tests/**/*.{js,ts}'],
		setupFiles: [],
		deps: {
			optimizer: {
				web: {
					include: ['@testing-library/svelte']
				}
			}
		}
	}
});
