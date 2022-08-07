<template>
	<div id="home-container">
		<h1>KENJUTSU</h1>
		<div class="box">
			<p>
				<Tooltip
					><b>Kenjutsu</b
					><template #tooltip
						><Vocabulary
							kanji="剣術"
							hiragana="けんじゅつ"
							romaji="kenjutsu"
							translation="Fechtkunst, Schwertkunst"
						></Vocabulary></template
				></Tooltip>
				ist der Oberbegriff aller Formen der japanischen Schwertkunst,
				insbesondere jener Disziplinen, welche vor der Meiji-Zeit
				entstanden. Die heutigen Formen des modernen Kendō und Iaidō, die im
				20. Jahrhundert entstanden, haben ebenfalls ihren Ursprung zu dieser
				Zeit. Praktizierende des Kenjutsu heißen
				<Tooltip
					>Kenshi<template #tooltip
						><Vocabulary
							kanji="剣士"
							hiragana="けんし"
							romaji="kenshi"
							translation="Schwertkämpfer, Schwertmeister, Fechter"
						></Vocabulary></template></Tooltip
				>.
			</p>
			<p>
				<i>Kenjutsu</i> in all seinen ursprünglichen Ausprägungen wurde von
				den feudalen Samurai (früher Bushi), der japanischen Krieger, als
				Disziplinen der Waffenführung begründet. Die Bedeutung des Wortes
				Kenjutsu kann mit &bdquo;Methode oder Technik zur Führung des
				Schwertes&ldquo; übersetzt werden, wobei <i>jutsu</i> sich dezidiert
				auf die technische Anwendung bezieht, im Gegensatz zur Endung
				<i>Dō</i> - wie beispielsweise in Kendō, Iaidō, Judō usw. - die eine
				Kunstfertigkeit mit geistigem Inhalt bezeichnet.
			</p>
			<p>
				Da Kenjutsu eine ganze Gruppe von Disziplinen mit Handhabung des
				Schwertes umschreibt, sind die technischen Anwendungen und die ihnen
				zugrundeliegenden Instrumente, Unterrichtsformen sowie Strategien
				und Taktiken auf dem Schlachtfeld oftmals ebenso grundverschieden.
				In einigen Disziplinen wurden hölzerne Nachbildungen des Schwertes
				verwendet (Bokken, auch Bokutō) und mit Körpertreffern im
				Vollkontakt geübt. Andere Formen unterrichteten gänzlich ohne
				Übungspartner und verwendeten dafür mehrheitlich Kata - stilisierte
				Übungsformen. Da unter der Endung -<i>jutsu</i> alle technischen
				Anwendungen mit dem Schwert gemeint sind, fallen auch ad hoc und
				intuitiv entstandene Formen darunter, denn letztendliche Zielsetzung
				war die Überlegenheit auf dem Schlachtfeld und dienlich dazu war
				auch jeder intuitive taktische Überraschungsmoment.
			</p>
			<p>
				<i
					>Quelle:
					<a href="https://de.wikipedia.org/wiki/Kenjutsu" target="_blank"
						>Wikipedia</a
					></i
				>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import Tooltip from "@/components/general/Tooltip.vue";
import Vocabulary from "../components/general/Vocabulary.vue";
</script>

<style lang="scss">
#home-container {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>