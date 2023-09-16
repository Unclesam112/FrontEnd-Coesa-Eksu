import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },

    {
      path: '/workshop',
      name: 'workshop',
      component: () => import('../views/WorkshopView.vue')
    },

    
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },

    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue')
    },

    {
      path: '/user',
      name: 'user',
      component: () => import('../views/Account/HomePage.vue')
    },

    {
      path: '/user/gpa-calculator',
      name: 'gpa',
      component: () => import('../views/Account/Gpa/index.vue')
    },




  ]
})

export default router
