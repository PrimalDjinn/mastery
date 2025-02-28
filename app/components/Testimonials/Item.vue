<script setup lang="ts">
defineProps<{
    title: string,
    body: string,
    foot: string,
    img: string
}>()
</script>
<template>
    <div class="flex gap-2 max-w-full">
        <div class="w-24 h-24 aspect-square max-sm:w-16 max-sm:h-16 mt-0.5">
            <NuxtImg placeholder :src="img" class="object-cover ring-peach ring-1 aspect-square w-full h-full" style="border-radius: 50%;"/>
        </div>
        <article class="text-navy bg-white rounded-lg p-6 w-[450px] flex flex-col" style="max-width: calc(100vw - 100px);">
            <h3 class="uppercase graduation mb-1">{{ title }}</h3>
            <p class="inter"> {{ body }} </p>
            <span class="inria italic mt-2 self-end">~ {{ foot }}</span>
        </article>
    </div>
</template>
<style scoped></style>