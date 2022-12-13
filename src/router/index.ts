import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/home/index.vue';
import NotFound from '@/views/not-found/index.vue';

const baseUrl = '/';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PathForNotFound',
    redirect: '/404'
  },
];

const router = createRouter({
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
  history: createWebHistory(baseUrl),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
});

export default router;
