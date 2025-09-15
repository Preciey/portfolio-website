import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../components/About.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../components/Projects.vue'),
    },
  ],
})

export default router
