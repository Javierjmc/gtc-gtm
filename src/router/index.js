import { createRouter, createWebHistory } from 'vue-router'
import ReusmenView from '@/views/ReusmenView.vue'
import ConexionView from '@/views/ConexionView.vue'
import EstructuraView from '@/views/EstructuraView.vue'
import ConclusionView from '@/views/ConclusionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reusmen',
      component: ReusmenView,
    },
    {
      path: '/estructura',
      name: 'Estructura',
      component: EstructuraView,
    },
    {
      path: '/conexion',
      name: 'Conexion',
      component: ConexionView,
    },
    {
      path: '/conclusion',
      name: 'Conclusión',
      component: ConclusionView,
    }

  ],
})

export default router
