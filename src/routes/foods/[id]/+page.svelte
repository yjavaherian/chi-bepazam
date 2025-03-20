<script lang="ts">
	import { goto } from '$app/navigation';
	import foods from '$lib/foods.json';
	const { data } = $props();

	const { name, image } = $derived(data);
	const randomFood = () => Math.floor(Math.random() * foods.length);
</script>

<main class="m-4 flex flex-col items-center">
	<div class="border-stone relative rounded-2xl border-t border-r border-l bg-white shadow-xl">
		<h1 class=" text-primary-900 p-4 text-center text-2xl font-bold">
			{name}
		</h1>
		<img src="/{image}" alt="an image of {name}" class="rounded-b-2xl" />
	</div>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button
		class="bg-primary-50 text-primary-600 hover:bg-primary-100 border-stone mt-10 rounded-2xl border px-8 py-2"
		onclick={() => goto('/foods/' + randomFood())}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="56"
			height="56"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-shuffle mx-auto"
			><path d="m18 14 4 4-4 4" /><path d="m18 2 4 4-4 4" /><path
				d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
			/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" /><path
				d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"
			/></svg
		>
	</button>
</main>
