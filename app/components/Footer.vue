<template>
	<section class="bg-navy h-40 w-full flex p-5 items-end justify-between" ref="footer">
		<div class="text-xl">
			<span class="mr-1 font-bold text-white">M<span class="max-sm:hidden">astery</span></span
			><span class="bg-orange font-bold text-white px-1.5 rounded py-0.5">Hub</span>
		</div>
		<div class="flex items-end gap-2 icons">
			<Icon name="local:youtube-social" />
			<Icon name="local:github-social" />
			<Icon name="local:bsky-social" />
			<Icon name="local:ig-social" />
		</div>
		<div class="font-bold text-white text-xl">
			<span>&copy; </span> 2025
		</div>
	</section>
</template>
<script setup lang="ts">
const footer = ref() as Ref<HTMLElement>;

class CustomIntersectionObserver {
	private readonly observer: IntersectionObserver;
	private callbacks = {
		visible: new Map<Symbol, (id: Symbol, target: IntersectionObserverEntry) => void>(),
		hidden: new Map<Symbol, (id: Symbol, target: IntersectionObserverEntry) => void>(),
	};
	private elements = new Array<Element>();
	constructor() {
		this.observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						this.callbacks.visible
							.entries()
							.forEach(([id, callback]) => callback(id, entry));
					} else {
						this.callbacks.hidden
							.entries()
							.forEach(([id, callback]) => callback(id, entry));
					}
				}
			},
			{
				threshold: 0.05,
			}
		);
	}
	obServe<T extends Element>(element: MaybeRefOrGetter<T>, options?: { immediate?: boolean }) {
		const id = Symbol();
		if (options?.immediate === undefined || options.immediate) {
			this.observer.observe(toValue(element));
		} else {
			this.elements.push(toValue(element));
		}
		return id;
	}
	onVisible(id: Symbol, callback: (id: Symbol, target: IntersectionObserverEntry) => void) {
		this.callbacks.visible.set(id, callback);
	}
	onHidden(id: Symbol, callback: (id: Symbol, target: IntersectionObserverEntry) => void) {
		this.callbacks.hidden.set(id, callback);
	}
	remove(elementId: Symbol) {
		this.callbacks.visible.delete(elementId);
		this.callbacks.hidden.delete(elementId);
	}
	start() {
		this.elements.forEach((el) => {
			this.observer.observe(el);
		});
	}
}

onMounted(() => {
	const observer = new CustomIntersectionObserver();

	const id = observer.obServe(footer);
	observer.onVisible(id, (_id, _) => {
		if (id !== _id) return;
		window.dispatchEvent(new CustomEvent(FloatingSearchBarEvent.hide));
	});
	observer.onHidden(id, (_id, _) => {
		if (id !== _id) return;
		window.dispatchEvent(new CustomEvent(FloatingSearchBarEvent.show));
	});

	onUnmounted(() => {
		observer.remove(id);
	});
});
</script>
