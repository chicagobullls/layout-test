import { createRouter, createWebHistory, Router } from 'vue-router'
import HomePage from '@/pages/index.vue'
import LayoutPage from '@/pages/layout.vue'
import DocsPage from '@/pages/docs.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/layout',
    name: 'Layout',
    component: LayoutPage,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: DocsPage,
  },
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
