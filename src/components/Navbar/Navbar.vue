<template>
	<div id="navbar-container">
		<h2>{{ route.meta.name }}</h2>
		<ul>
			<li v-for="(name, key, index) in routes" :key="index">
				<router-link
					:class="{ active: route.name == key }"
					:to="{ name: key }"
					>{{ name }}</router-link
				>
			</li>
		</ul>
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
$background: #330e0e;
$active: #570b01;
$hover: #240400;

#navbar-container {
	//font-family: "Kaushan Script", cursive;
	background-color: $background;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;

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

			a {
				display: block;
				color: white;
				text-align: center;
				padding: 0.75rem;
				width: 6rem;
				text-decoration: none;

				&:hover {
					background-color: $hover;
				}
			}
		}

		.active {
			background-color: $active;
		}
	}
}
</style>