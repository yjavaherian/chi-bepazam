<script>
	import foods from '$lib/foods.json';
	const food = Math.floor(Math.random() * foods.length);
</script>

<main class="ltr m-4 flex flex-col items-center justify-center">
	<img src="favicon.svg" alt="logo" class="h-56" />
	<p class="mt-8 text-xl" dir="rtl">
		این یک برنامه ی ساده است که یک مشکل خیلی معمول رو حل میکنه، چی بپزم؟
	</p>
	<a
		href="/foods/{food}"
		class="bg-primary-100 hover:bg-primary-200 active:bg-primary-300 text-primary-800 border-stone mt-8 rounded-lg border px-8 py-4 text-3xl font-semibold"
		>چی بپزم؟</a
	>
</main>
