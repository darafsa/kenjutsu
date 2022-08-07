<template>
	<div id="navbar-container">
		<h2>{{ route.meta.name }}</h2>
		<ul>
			<li v-for="(name, key, index) in routes" :key="index">
				<router-link
					:class="{ active: route.name == key }"
					:to="{ name: key }"
					role="button"
					>{{ name }}</router-link
				>
			</li>
		</ul>
		<div class="placeholder"></div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const routes = {
	Home: "Start",
	About: "Über",
};
</script>

<style lang="scss" scoped>
#navbar-container {
	//font-family: "Kaushan Script", cursive;
	background-color: $color-base;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	z-index: 1;

	h2 {
		margin: 0;
		padding: 0.5rem;
	}

	ul {
		margin: 0;
		list-style-type: none;
		padding: 0;
		overflow: hidden;

		li {
			float: left;
			border: none;

			a {
				display: block;
				color: white;
				text-align: center;
				padding: 0.75rem;
				width: 6rem;
				text-decoration: none;
				outline: none;
				font-family: $font-fancy;

				&:hover:not(.active), &:focus:not(.active) {
					background-color: $color-light;
				}

				&.active {
					background-color: $color-dark;
				}
			}
		}
	}

	.placeholder {
		height: 0.5rem;
		background-color: $color-dark;
	}
}
</style>