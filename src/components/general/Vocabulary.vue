<template>
	<div>
		<div v-if="kanji" class="kanji">{{ kanji }}</div>
		<div class="hiragana-container">
			<div class="hiragana" :class="{ small: kanji != null }">
				{{ hiragana }}
			</div>
			<div class="romaji small">
				{{ romaji }}
			</div>
		</div>
		<div class="translation">
			{{ translation }}
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	kanji?: string;
	hiragana: string;
	romaji: string;
	translation: string;
}>();
</script>

<style lang="scss" scoped>
.kanji {
	font-size: 1.4rem;
	margin-bottom: 0.4rem;
}

.hiragana-container {
	margin-bottom: 1rem;

	.romaji {
		margin-top: 0;
		line-height: 0.8rem;
	}
}

.small {
	font-size: 0.8rem;
	font-style: italic;
}
</style>