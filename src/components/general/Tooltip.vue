<template>
	<em
		ref="trigger"
		class="trigger"
		@mouseenter="mouseEnter($event, 0)"
		@mouseleave="mouseLeave($event, 400)"
	>
		<slot></slot>
	</em>
	<teleport to="body">
		<Transition>
			<div
				class="tooltip"
				v-show="hover"
				:style="{
					left: 'calc(' + tooltip.x + 'px + ' + tooltip.offset.x + 'rem)',
					top: 'calc(' + tooltip.y + 'px + ' + tooltip.offset.y + 'rem)',
				}"
				@mouseenter="mouseEnter($event, 0, false)"
				@mouseleave="mouseLeave($event, 400)"
			>
				<div class="arrow"></div>
				<slot class="content" name="tooltip"></slot>
			</div>
		</Transition>
	</teleport>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const tooltip = reactive<{
	x: number;
	y: number;
	offset: {
		x: number;
		y: number;
	};
}>({
	x: 0,
	y: 0,
	offset: {
		x: -2.5,
		y: 0.5,
	},
});

const trigger = ref();
const hover = ref<boolean>(false);
let timer: number;

function mouseEnter(
	event: MouseEvent,
	delay: number = 0,
	updatePosition: boolean = true
) {
	clearTimeout(timer);
	timer = setTimeout(() => {
		hover.value = true;
	}, delay);

	if (!hover.value && updatePosition) {
		tooltip.x = event.clientX;
		let triggerElement = trigger.value.getBoundingClientRect();
		tooltip.y = triggerElement.y + triggerElement.height;
	}
}

function mouseLeave(event: MouseEvent, delay: number = 0) {
	clearTimeout(timer);
	timer = setTimeout(() => {
		hover.value = false;
	}, delay);
}
</script>

<style lang="scss" scoped>
.trigger {
	text-decoration: underline;

	&:hover {
		cursor: help;
	}
}

.tooltip {
	position: fixed;
	z-index: 1;

	background-color: $color-base;
	//border: 0.2rem solid $color-dark;
	box-shadow: rgba(0, 0, 0, 0.7) 0 0 1.5rem 0.8rem;
	color: rgb(240, 240, 240);
	//text-shadow: black 1px 1px 3px;
	transition: background-color 0.3s ease;
	padding: 1rem;
	max-width: 20rem;
	min-width: 3rem;

	font-size: 1.2rem;
	text-align: justify;

	.arrow {
		position: absolute;
		top: -0.5rem;
		left: 2rem;
		width: 0; 
		height: 0; 
		border-left: 0.5rem solid transparent;
		border-right: 0.5rem solid transparent;
		
		border-bottom: 0.5rem solid $color-base;
	}

}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
	transform: translateY(1rem);
}
</style>