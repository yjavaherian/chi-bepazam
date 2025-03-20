<script lang="ts">
	import Header from '$lib/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="relative min-h-screen">
	<Header />
	{@render children()}
	<span
		class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:20px_20px]"
	>
	</span>
</div>
