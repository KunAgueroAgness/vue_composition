import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
history: createWebHistory(),
	routes: [
		{
			path: '/dashboard',
			component: () => import('@/pages/dashboard/index.vue'),
		},
		{
			path: '/posts',
			component: () => import('@/pages/posts/posts.vue'),
		},
	]
})

export default router