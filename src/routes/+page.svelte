<script lang="ts">
	import AddToCart from '$lib/AddToCart.svelte';
	import Stars from '$lib/Stars.svelte';
	import mainProductImg from '../imgs/thailand.avif';
	import CartCount from '../islands/CartCount.svelte';
	import CustomerReviews from '../islands/CustomerReviews.svelte';
	import RecommendedProducts from '../islands/RecommendedProducts.svelte';
	import RoomAvailability from '../islands/RoomAvailability.svelte';
</script>

<header
	class="fixed top-0 z-20 flex w-full flex-col border-b border-white/20 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r shadow-xl shadow-black/20"
>
	<div class="flex h-14 items-center px-4 py-4 lg:h-auto">
		<div class="group flex w-full items-center gap-x-2.5">
			<div class="h-7 w-7">
				<svg
					viewBox="0 0 256 308"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid"
					><path
						d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
						fill="#FF3E00"
					/><path
						d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
						fill="#FFF"
					/></svg
				>
			</div>
			<h3 class="text-white">Server Islands</h3>
		</div>
	</div>
	<div class="overflow-y-auto lg:static lg:block hidden">
		<div
			class="prose prose-sm prose-invert prose-p:my-2 prose-hr:my-6 max-w-none space-y-6 px-4 pb-20"
		>
			<div>
				<p>
					<a
						href="https://astro.build/blog/future-of-astro-server-islands/"
						><span class="font-bold">Server islands</span></a
					>
					make it easy to combine high performance static HTML and dynamic
					server-generated components.
				</p>

				<p>How it works:</p>

				<ul>
					<li>
						Static HTML, which can be cached on a CDN, loads first
						and fast.
					</li>
					<li>
						This HTML shell shows placeholders for dynamic islands
						of content.
					</li>
					<li>
						When it is ready, the content for the islands loads in.
					</li>
				</ul>

				<p>
					This approach means you can get the majority of your content
					in front of users as fast as possible and then load
					personalized details once they are ready.
				</p>

				<hr />

				<p class="text-gray-400">
					In this example, the <span class="font-bold text-orange-300"
						>pulsing dots</span
					> highlight artificially delayed responses to demonstrate the
					technique:
				</p>

				<ul class="text-gray-400">
					<li>Room availability → 400ms</li>
					<li>Recommended trips → 800ms</li>
					<li>Reviews → 1000ms</li>
				</ul>
			</div>
			<p class="text-gray-400">
				Try refreshing the page to restart the demo.
			</p>
			<p class="text-gray-400">
				This demo is inspired by the Next.js <a
					href="https://www.partialprerendering.com/"
					>Partial Prerendering</a
				>
				demo and completely stolen and adapted from Astro
				<a href="https://server-islands.com/">Server Island</a>.
			</p>
		</div>
	</div>
</header>
<div class="lg:pl-72">
	<div class="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
		<div
			class="border border-white/20 shadow-xl shadow-black/20 bg-black p-3.5 lg:p-6"
		>
			<div class="space-y-10">
				<aside
					class="flex items-center justify-between gap-x-3 border-b border-gray-700 px-1 pb-3.5 lg:pb-6"
				>
					<div class="flex gap-x-3 items-center">
						<div class="h-7 w-7">
							<svg
								viewBox="0 0 256 308"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="xMidYMid"
								><path
									d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
									fill="#FF3E00"
								/><path
									d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
									fill="#FFF"
								/></svg
							>
						</div>
						<div class="relative flex-1">
							<div
								class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									aria-hidden="true"
									class="h-5 w-5 fill-gray-300"
								>
									<path
										fill-rule="evenodd"
										d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<input
								disabled
								aria-label="Search"
								placeholder="Search"
								type="search"
								id="search"
								class="block w-full rounded-full border bg-gray-900 border-gray-700 pl-10 text-gray-200"
								autocomplete="off"
								name="search"
							/>
						</div>
					</div>
					<div class="flex shrink-0 gap-x-3">
						<div
							class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-gray-800 border-gray-700 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
								fill="currentColor"
								aria-hidden="true"
								class="w-6"
							>
								<path
									d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"
								></path>
							</svg>
							<div
								class="absolute right-1 top-0.5 translate-x-1/2 -translate-y-1/2"
							>
								<CartCount>
									{#snippet fallback()}
										<span></span>
									{/snippet}
								</CartCount>
							</div>
						</div>
						<svg
							viewBox="0 0 256 308"
							width="40"
							height="40"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid"
							><path
								d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
								fill="#FF3E00"
							/><path
								d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
								fill="#FFF"
							/></svg
						>
					</div>
				</aside>
				<main class="space-y-8 lg:space-y-14">
					<div class="grid grid-cols-4 md:grid-cols-3 gap-6">
						<div class="col-span-2 md:order-1 md:col-span-1">
							<div
								class="space-y-0.5 grayscale-[0.75] brightness-90"
							>
								<img
									alt="Birds-eye view of an archipelago of small islands"
									fetchpriority="high"
									decoding="async"
									loading="eager"
									class="block rounded-t-lg object-cover aspect-square bg-[linear-gradient(117deg,#00b3db,#ced0ce)]"
									sizes="(min-width: 900px) 250px, (min-width: 768px) 30vw, 50vw"
									src={mainProductImg}
								/>
								<div class="grid grid-cols-3 gap-x-0.5">
									{#each Array(3), i}
										<img
											alt=""
											fetchpriority="high"
											decoding="async"
											loading="eager"
											class={[
												'aspect-square bg-[linear-gradient(117deg,#00b3db,#ced0ce)]',
												{
													'rounded-bl-lg': i === 0,
													'rounded-br-lg': i === 2,
												},
											]}
											sizes="(min-width: 768px) 75px, 16.66vw"
											src={mainProductImg}
										/>
									{/each}
								</div>
							</div>
						</div>
						<div class="col-span-2 md:order-3 md:col-span-1">
							<div class="space-y-4 rounded-lg bg-gray-900 p-3">
								<div class="flex">
									<div
										class="rounded bg-gray-600 px-1.5 text-xs font-medium leading-5 text-white"
									>
										Summer offer ☀️
									</div>
								</div>
								<div class="flex gap-x-1.5 items-center">
									<div
										class="hidden sm:block px-2 rounded-full text-sm font-bold leading-snug bg-gray-600"
									>
										-15%
									</div>
									<div class="flex">
										<div
											class="text-lg font-bold leading-snug text-white"
										>
											$1,700
										</div>
									</div>
									<div
										class="text-xs self-start leading-snug text-gray-400 line-through"
									>
										$2,000
									</div>
								</div>
								<div class="relative">
									<div class="absolute -left-[17px] top-2">
										<span class="flex h-[11px] w-[11px]">
											<span
												class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
											></span>
											<span
												class="relative inline-flex h-[11px] w-[11px] rounded-full bg-orange-400"
											></span>
										</span>
									</div>
								</div>
								<div class="text-sm">
									<RoomAvailability>
										{#snippet fallback()}
											<div
												class="text-sm text-center border border-transparent p-1 text-orange-300"
											>
												<span class="space-x-0.5">
													<span
														class="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full"
														>•</span
													>
													<span
														class="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full"
														>•</span
													>
													<span
														class="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full"
														>•</span
													>
												</span>
											</div>
										{/snippet}
									</RoomAvailability>
								</div>
								<AddToCart />
							</div>
						</div>
						<div
							class="col-span-full space-y-2 md:order-2 md:col-span-1"
						>
							<h1
								class="truncate text-xl font-medium text-white lg:text-2xl leading-none"
							>
								Luxury Island Getaway
							</h1>
							<Stars stars={5} />
							<div class="space-y-4 text-sm text-gray-400">
								<p>
									Whether you're looking for a romantic
									getaway, a party weekend, or a place to make
									family memories, you'll find what you're
									looking for at Luxury Island Retreat!
								</p>
								<p>
									We provide the basics of a great vacation:
									spectacular rooms, multiple dining options,
									and a stunning beach. Combine that with your
									own personalized activities and excursions
									for the trip of your dreams.
								</p>
							</div>
						</div>
					</div>
				</main>
				<footer class="space-y-10">
					<div class="py-4 border-y border-gray-700">
						<div class="relative">
							<div class="absolute -left-4 top-2">
								<span class="flex h-[11px] w-[11px]"
									><span
										class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
									></span><span
										class="relative inline-flex h-[11px] w-[11px] rounded-full bg-orange-400"
									></span></span
								>
							</div>
						</div>
						<RecommendedProducts>
							{#snippet fallback()}
								<div class="space-y-6 pb-[5px]">
									<div class="space-y-2">
										<div
											class="h-6 w-1/3 rounded-lg bg-gray-900 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
										></div>
										<div
											class="h-4 w-1/2 rounded-lg bg-gray-900 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
										></div>
									</div>
									<div class="grid grid-cols-4 gap-6">
										<div
											class="col-span-4 space-y-4 lg:col-span-1"
										>
											<div
												class="relative h-[167px] rounded-xl bg-gray-900 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-6 w-1/3 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-4/6 rounded-lg bg-gray-900"
											></div>
										</div>
										<div
											class="col-span-4 space-y-4 lg:col-span-1"
										>
											<div
												class="relative h-[167px] rounded-xl bg-gray-900 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-6 w-1/3 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-4/6 rounded-lg bg-gray-900"
											></div>
										</div>
										<div
											class="col-span-4 space-y-4 lg:col-span-1"
										>
											<div
												class="relative h-[167px] rounded-xl bg-gray-900 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-6 w-1/3 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-4/6 rounded-lg bg-gray-900"
											></div>
										</div>
										<div
											class="col-span-4 space-y-4 lg:col-span-1"
										>
											<div
												class="relative h-[167px] rounded-xl bg-gray-900 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-6 w-1/3 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-4/6 rounded-lg bg-gray-900"
											></div>
										</div>
									</div>
								</div>
							{/snippet}
						</RecommendedProducts>
					</div>
					<div>
						<div class="relative">
							<div class="absolute -left-4 top-2">
								<span class="flex h-[11px] w-[11px]"
									><span
										class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
									></span><span
										class="relative inline-flex h-[11px] w-[11px] rounded-full bg-orange-400"
									></span></span
								>
							</div>
						</div>
						<CustomerReviews>
							{#snippet fallback()}
								<div class="space-y-6">
									<div
										class="h-7 w-2/5 rounded-lg bg-gray-900 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
									></div>
									<div class="space-y-8">
										<div class="space-y-4">
											<div
												class="h-6 w-2/6 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-1/6 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-4/6 rounded-lg bg-gray-900"
											></div>
										</div>
										<div class="space-y-4">
											<div
												class="h-6 w-2/6 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-1/6 rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-full rounded-lg bg-gray-900"
											></div>
											<div
												class="h-4 w-4/6 rounded-lg bg-gray-900"
											></div>
										</div>
									</div>
								</div>
							{/snippet}
						</CustomerReviews>
					</div>
				</footer>
			</div>
		</div>
	</div>
</div>
