<script lang="ts" module>
	export async function load() {
		let p = new Promise((resolve) => setTimeout(resolve, 400));
		await p;
		const rooms_remaining = 1 + Math.ceil(Math.random() * 8);
		return { rooms_remaining };
	}
</script>

<script lang="ts">
	import type { ServerIslandProps } from 'sveltekit-islands';

	let { data }: ServerIslandProps<typeof load> = $props();
</script>

<p
	class="text-white bg-gradient-to-tl from-teal-950/40 to-teal-600/40 border border-teal-600 rounded-lg text-center p-1"
>
	Just <strong class="font-bold text-teal-300"
		>{data?.rooms_remaining} rooms</strong
	>
	left!
</p>
