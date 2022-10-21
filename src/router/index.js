import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import services from '@/views/services.vue'
import login from '@/views/login.vue'
import contact from '@/views/contact.vue'
import terms from '@/views/terms.vue'
import write from '@/views/write.vue'
import web from '@/views/web.vue'
import signup from '@/views/signup.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/login',
    name: 'login',
    component:  login
  },
  {
    path: '/contact',
    name: 'contact',
    component:  contact
  },
  {
    path: '/signup',
    name: 'signup',
    component:  signup
  },
  {
    path: '/terms',
    name: 'terms',
    component:  terms
  },
  {
  path: '/write',
  name: 'write',
  component:  write
},
{
  path: '/web',
  name: 'web',
  component:  web
},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
