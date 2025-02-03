<script lang="ts" module>
	import type { RequestEvent } from '@sveltejs/kit';

	export function load({ cookies }: RequestEvent) {
		const count = +(cookies.get('cart') ?? '0');
		return { count };
	}
</script>

<script lang="ts">
	import type { ServerIslandProps } from 'sveltekit-islands';

	let { data }: ServerIslandProps<typeof load> = $props();
</script>

<span class="sr-only">Cart</span>
<span
	id="cart-count"
	hidden={data?.count === 0}
	class:list={[
		'[&[hidden]]:hidden',
		'flex h-4 min-w-4 px-1 items-center justify-center rounded-full text-xs font-bold text-white',
		'bg-gradient-to-tl from-teal-950 to-teal-700 border border-teal-600',
	]}>{data?.count}</span
>
