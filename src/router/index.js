import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/components/Template.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/config',
        name: 'Config',
        component: () => import('@/views/Config.vue')
      },
      {
        path: '/person',
        name: 'Person',
        component: () => import('@/views/Person.vue')
      },
      {
        path: '/restaurant',
        name: 'Restaurant',
        component: () => import('@/views/Restaurant.vue')
      },
      {
        path: '/vote',
        name: 'Vote',
        component: () => import('@/views/Vote.vue')
      },
      {
          path: '*',
          redirect: '/home'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
