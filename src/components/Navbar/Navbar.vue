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
	"Home": "Start",
	"About": "Über"
}
</script>

<style lang="scss" scoped>
#navbar-container {
	//font-family: "Kaushan Script", cursive;
	background-color: #333;
	
	h2 {
		margin: 0;
		padding: 0.5rem;
	}

	ul {
		margin: 0;
		list-style-type: none;
		padding: 0;
		overflow: hidden;
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;

		li {
			float: left;

			a {
				display: block;
				color: white;
				text-align: center;
				padding: 0.75rem 2rem;
				text-decoration: none;

				&:hover {
					background-color: #111;
				}
			}
		}

		.active {
			background-color: #570b01;
		}
	}
}
</style>