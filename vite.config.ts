import { sveltekit } from '@sveltejs/kit/vite';
import { islands } from 'sveltekit-islands/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), islands()],
});
