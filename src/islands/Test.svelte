<script module lang="ts">
	import { read } from '$app/server';
	import type { RequestEvent } from '@sveltejs/kit';
	import type { ServerIslandProps } from 'sveltekit-islands';
	import test from '$lib/test.txt';

	export async function load(event: RequestEvent) {
		const text = await read(test).text();
		console.log(event);
		return {
			text,
		};
	}
</script>

<script lang="ts">
	const { name, data }: ServerIslandProps<typeof load, { name: string }> =
		$props();
</script>

<p>
	Date server rendered for {name}: {new Date().toISOString()}
</p>

<code>{data?.text}</code>

<style>
	p {
		color: red;
	}
</style>
