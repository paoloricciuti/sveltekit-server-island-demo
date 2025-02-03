<script lang="ts" module>
	import { shuffle } from '$lib';
	import Stars from '$lib/Stars.svelte';
	import capri from '../imgs/capri.avif';
	import iceland from '../imgs/iceland.avif';
	import maldives from '../imgs/maldives.avif';
	import panama from '../imgs/panama.avif';
	import puertoRico from '../imgs/puerto-rico.avif';
	import santorini from '../imgs/santorini.avif';
	import skellig from '../imgs/skellig.avif';
	import turkey from '../imgs/turkey.avif';

	export async function load() {
		let p = new Promise((resolve) => setTimeout(resolve, 800));
		await p;

		const islands = [
			{
				thumbnail: capri,
				alt: 'Rocky outcrops in a still blue sea are framed by palm fronds.',
				tag: 'Best Deal ⭐️',
				title: 'Mediterranean Weekend Break',
				stars: 4,
				discount: '-30%',
				price: '$700',
				was: '$1,000',
			},
			{
				thumbnail: iceland,
				alt: 'Peachy clouds reflect on a tranquil sea. A rocky beach leads to a horizon lined with fir trees.',
				title: 'Volcanic Adventure Tour',
				stars: 3,
				price: '$1,800',
			},
			{
				thumbnail: maldives,
				alt: 'A green atoll, ringed by creamy white beaches in an expanse of calm, blue ocean.',
				title: 'Tropical Dream',
				stars: 5,
				price: '$3,999',
			},
			{
				thumbnail: panama,
				alt: 'A small low-lying, palm tree-covered island sits against a bright blue sea and sky.',
				tag: 'Trending 🔥',
				title: 'Beach Resort',
				stars: 4,
				price: '$1,700',
				cta: 'Just 1 room left',
			},
			{
				thumbnail: puertoRico,
				alt: 'Palm trees frame the sea seen from a sandy beach.',
				title: 'Island Recharge',
				stars: 4,
				discount: '-25%',
				price: '$1,125',
				was: '$1,500',
			},
			{
				thumbnail: santorini,
				alt: 'A blue-domed and white-washed building in front of a sunny sea.',
				title: 'Greek Archipelagos',
				stars: 5,
				price: '$2,200',
			},
			{
				thumbnail: skellig,
				alt: 'A barren rocky islands juts out of the bright blue ocean.',
				title: 'Rugged Retreat',
				stars: 2,
				price: '$650',
			},
			{
				thumbnail: turkey,
				alt: 'Palm trees reflect in the rippling water of a swimming pool.',
				title: 'Galactic Vacations',
				stars: 4,
				price: '$1,300',
				cta: 'Just 1 room left',
			},
		];

		const recommended = shuffle(islands).slice(0, 4);
		return { recommended };
	}
</script>

<script lang="ts">
	import type { ServerIslandProps } from 'sveltekit-islands';

	let { data }: ServerIslandProps<typeof load> = $props();
</script>

<div class="space-y-6">
	<div>
		<div class="text-lg font-medium text-white">
			Recommended trips <span class="text-teal-300">for you</span>
		</div>
		<div class="text-sm text-gray-400">
			Based on your preferences and travel history
		</div>
	</div>
	<div class="grid grid-cols-4 gap-6">
		{#each data?.recommended ?? [] as { thumbnail, alt, tag, title, stars, discount, price, was, cta }}
			<div class="col-span-2 md:col-span-1">
				<div class="group block">
					<div class="space-y-2">
						<div class="relative aspect-square">
							{#if tag}
								<div class="absolute left-2 top-2 z-10 flex">
									<div
										class="rounded bg-gray-950/60 bg-gradient-to-tl from-teal-950/40 to-teal-600/40 border border-teal-600 px-1.5 text-xs font-medium leading-5 text-white"
									>
										{tag}
									</div>
								</div>
							{/if}
							<img
								{alt}
								loading="lazy"
								decoding="async"
								class="rounded-lg group-hover:grayscale-0 group-hover:brightness-100 grayscale-[0.75] brightness-90 object-cover h-full w-full"
								sizes="(min-width: 1024px) 175px, (min-width: 768px) 25vw, 50vw"
								src={thumbnail}
							/>
						</div>
						<div
							class="truncate text-sm font-medium text-white group-hover:text-teal-300"
						>
							{title}
						</div>
						<Stars {stars} />
						<div class="flex gap-x-1.5 items-center">
							{#if discount}
								<div
									class="hidden sm:block px-2 rounded-full text-sm font-bold leading-snug bg-gradient-to-tl from-teal-950/40 to-teal-600/40 border border-teal-600"
								>
									{discount}
								</div>
							{/if}
							<div class="flex">
								<div
									class={[
										'text-lg font-bold leading-snug',
										discount
											? 'text-teal-300'
											: 'text-white',
									]}
								>
									{price}
								</div>
							</div>
							{#if was}
								<div
									class="text-xs self-start leading-snug text-gray-400 line-through"
								>
									{was}
								</div>
							{/if}
						</div>
						{#if cta}
							<div class="text-sm text-teal-300">{cta}</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
