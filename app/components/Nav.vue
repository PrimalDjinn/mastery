<template>
	<nav class="w-full flex justify-between px-10 py-4 items-center inter shadow relative">
		<NuxtLink class="text-lg"
			><span class="mr-1 font-bold">M<span class="max-sm:hidden">astery</span></span
			><span class="bg-orange font-bold text-white px-1.5 rounded py-0.5">Hub</span>
		</NuxtLink>
		<div class="dropdown">
			<ul class="flex gap-6 items-center">
				<li><NuxtLink class="font-bold">Pricing</NuxtLink></li>
				<li>
					<button class="bg-orange text-white font-bold inter sm:px-5 py-1 rounded-sm sign-in">Sign In</button>
				</li>
			</ul>
		</div>
		<Icon name="material-symbols:menu-rounded" class="sm:hidden z-10" />
	</nav>
</template>
<style scoped>
@media screen and (max-width: 768px) {
	.dropdown {
		position: absolute;
		background-color: #014C78;
		width: 50%;
		left: 50%;
		top: 100%;
		z-index: 100;
		color: white;
		padding: 1rem 0rem;
		height: calc(100vh - 100%);
	}

	.dropdown ul {
		display: flex;
		flex-direction: column;
	}

	.dropdown ul li {
		width: 100%;
		padding: 0.2rem 1rem;
		border-radius: 5px;
		position: relative;
	}

	.dropdown ul li::after{
		width: 100%;
		height: 1px;
		background: white;
		position: absolute;
		content: '';
		left: 0;
		bottom: 3em;
	}

	.sign-in {
		background-color: unset;
	}
}
</style>
