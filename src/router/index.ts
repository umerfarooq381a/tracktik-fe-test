import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list-view',
      component: ListView
    },
    {
      path: '/:id',
      name: 'detail-view',
      component: () => import('../views/DetailView.vue')
    }
  ]
})

export default router
