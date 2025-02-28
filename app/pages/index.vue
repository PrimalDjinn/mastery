<template>
	<main>
		<Body class="overflow-x-hidden" />
		<Landing class="landing" />
		<LandingSearch />
		<TestimonialsBlob />
		<Testimonials />
		<Presentation />
		<Footer />
	</main>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Home",
});
</script>
<style scoped>
.landing {
	height: calc(100vh - 100px);
}
</style>
