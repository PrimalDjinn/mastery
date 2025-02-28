<template>
	<section class="presentation grid">
		<div class="grid place-items-center m-auto relative">
			<div class="backdrop"></div>
			<PlayerYouTube video_id="d_IFKP1Ofq0" class="w-5/6 max-sm:w-full" />
		</div>
	</section>
</template>
<style scoped>
.presentation {
	width: 100vw;
	width: 100dvw;
	height: 80vh;
	height: 80dvh;
	background-image: url(/presentation-bg.png);
	overflow: hidden;
}

.backdrop {
	width: 70vw;
	margin-left: 50px;
	margin-top: 50px;
	height: auto;
	aspect-ratio: 16/9;
	position: absolute;
	background: #b9f1f3;
	box-shadow: 0px 0px 250px #b9f1f3, 0px 0px 250px #b9f1f3, 0px 0px 173.376px #b9f1f3,
		0px 0px 86.688px #b9f1f3;
}

@media screen and (max-width: 768px) {
	.presentation {
		height: 350px;
		height: 350px;
	}
}
</style>
