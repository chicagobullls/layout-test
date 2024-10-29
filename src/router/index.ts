import { createRouter, createWebHistory, Router } from 'vue-router'
import HomePage from '@/pages/index.vue'
import DocsPage from '@/pages/docs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: DocsPage,
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
