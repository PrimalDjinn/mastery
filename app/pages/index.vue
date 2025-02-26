<template>
	<Landing />
	<div class="absolute bottom-[5%] transform -translate-x-1/2 left-1/2 max-w-[80%] isolate search">
		<Icon name="local:search" class="absolute z-10 left-4 top-1/2 transform -translate-y-1/2" />
		<input
			class="outline-none pl-11 focus:ring-1 backdrop-blur-sm border border-navy h-14 rounded-full"
			style="box-shadow: 0px 0px 10px rgba(0, 75, 120, 0.2); background-color: hsla(182, 80%, 86%, 0.2)"
			placeholder="Search courses..."
		/>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Home",
});
</script>
<style scoped>
.search input {
	width: 700px;
}

@media screen and (max-width: 1366px) {
	.search input {
		height: 40px;
		width: 500px;
	}
}
</style>
