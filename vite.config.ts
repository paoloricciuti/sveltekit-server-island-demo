import { sveltekit } from '@sveltejs/kit/vite';
import { islands } from 'sveltekit-server-islands/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), islands()],
});
