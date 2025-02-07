<script lang="ts" module>
	export async function load() {
		let p = new Promise((resolve) => setTimeout(resolve, 400));
		await p;
		const rooms_remaining = 1 + Math.ceil(Math.random() * 8);
		return { rooms_remaining };
	}
</script>

<script lang="ts">
	import type { ServerIslandsProps } from 'sveltekit-server-islands';

	let { data }: ServerIslandsProps<typeof load> = $props();
</script>

<p
	class="text-white bg-gradient-to-tl from-orange-950/40 to-orange-600/40 border border-orange-600 rounded-lg text-center p-1"
>
	Just <strong class="font-bold text-orange-300"
		>{data?.rooms_remaining} rooms</strong
	>
	left!
</p>
