import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExpertiseView from "../views/ExpertiseView.vue"
import AboutView from "../views/AboutView.vue"
import PortfolioView from "../views/PortfolioView.vue"
import ContactView from "../views/ContactView.vue"
import TestimonialsView from "../views/TestimonialsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/expertise',
      name: 'ExpertiseView',
      component: ExpertiseView,
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView,
    },
    {
      path: '/portfolio',
      name: 'PortfolioView',
      component: PortfolioView,
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView,
    },
    {
      path: '/testimonials',
      name: 'TestimonialsView',
      component: TestimonialsView,
    },
  ]
})

export default router
