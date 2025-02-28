<template>
	<div
		class="bottom-[5%] transform -translate-x-1/2 left-1/2 max-w-[80%] isolate search fixed"
		ref="search"
	>
		<Icon name="local:search" class="absolute z-10 left-4 top-1/2 transform -translate-y-1/2" />
		<input
			class="outline-none pl-11 focus:ring-1 backdrop-blur-sm border border-navy h-14 rounded-full max-w-full bg-white/60 placeholder:text-navy focus:bg-white transition-colors"
			style="box-shadow: 0px 0px 10px rgba(0, 75, 120, 0.2)"
			placeholder="Search courses..."
		/>
	</div>
</template>
<style scoped>
.search {
	z-index: 999999999;
}

.search input {
	width: 700px;
}

@media screen and (max-width: 1366px) {
	.search input {
		height: 40px;
		width: 500px;
		padding-left: 35px;
	}

	.search .icon {
		width: 18px;
		left: 12px;
	}
}
</style>
<script setup lang="ts">
const search = ref<HTMLDivElement | undefined>();
onMounted(() => {
	window.addEventListener(FloatingSearchBarEvent.hide, () => {
		search.value?.classList.add("hidden");
	});

	window.addEventListener(FloatingSearchBarEvent.show, () => {
		search.value?.classList.remove("hidden");
	});
});
</script>
