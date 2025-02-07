<script lang="ts" module>
	import type {
		ServerIslandsEvent,
		ServerIslandsProps,
	} from 'sveltekit-server-islands';

	export function load(event: ServerIslandsEvent) {
		const count = +(event.cookies.get('cart') ?? '0');
		return { count };
	}
</script>

<script lang="ts">
	import type {} from 'svelte/elements';

	let { data }: ServerIslandsProps<typeof load> = $props();

	let writable_count = $derived.by(() => {
		let count = $state({ current: data?.count });
		return count;
	});
</script>

<svelte:window
	oncart={() => {
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
