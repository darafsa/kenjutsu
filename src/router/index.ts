import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

declare module 'vue-router' {
	interface RouteMeta {
		title: string;
		name: string;
	}
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				title: "Kenjutsu Jena",
				name: "KENJUTSU - Jena"
			}
		},
		{
			path: '/about',
			name: 'About',
			component: About,
			meta: {
				title: "Über | Kenjutsu Jena",
				name: "KENJUTSU - Über uns"
			}
		}
	]
});

router.beforeEach((to, from) => {
	document.title = to.meta.title
})

export default router;