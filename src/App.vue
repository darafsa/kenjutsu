<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from "@/components/navbar/Navbar.vue";
</script>

<template>
  <Navbar />
	<router-view></router-view>
</template>

<style lang="scss">
body {
	font-family: $font-standard;
}

h1, h2 {
	font-family: $font-fancy;
}
</style>
