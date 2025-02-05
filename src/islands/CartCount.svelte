<script lang="ts" module>
	import type { RequestEvent } from '@sveltejs/kit';

	export function load({ cookies }: RequestEvent) {
		const count = +(cookies.get('cart') ?? '0');
		return { count };
	}
</script>

<script lang="ts">
	import type { ServerIslandProps } from 'sveltekit-islands';
	import type {} from 'svelte/elements';

	let { data }: ServerIslandProps<typeof load> = $props();

	let writable_count = $derived.by(() => {
		let count = $state({ current: data?.count });
		return count;
	});
</script>

<svelte:window
	oncart={() => {
		console.log('working?');
		if (!writable_count.current) {
			writable_count.current = 0;
		}
		writable_count.current++;
	}}
/>

<span class="sr-only">Cart</span>
<span
	id="cart-count"
	hidden={writable_count.current === 0}
	class={[
		'[&[hidden]]:hidden',
		'flex h-4 min-w-4 px-1 items-center justify-center rounded-full text-xs font-bold text-white',
		'bg-gradient-to-tl from-orange-950 to-orange-700 border border-orange-600',
	]}>{writable_count.current}</span
>
