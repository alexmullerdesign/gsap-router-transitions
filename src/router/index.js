import { createRouter, createWebHistory } from 'vue-router';
import Boxes from '../views/BoxesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'boxes',
      component: Boxes,
    },
    {
      path: '/scroll',
      name: 'scroll',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ScrollView.vue'),
    },
    {
      path: '/layers',
      name: 'layers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LayersView.vue'),
    },
  ],
});

export default router;
