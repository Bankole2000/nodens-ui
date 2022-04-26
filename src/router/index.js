import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PartnershipsPage from "../views/Partnerships.vue";
import CompanyPage from "../views/Company.vue";
import PressKitPage from "../views/PressKit.vue";
// import TimelinePage from "../views/Timeline.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pages.home',
    component: Home
  },
  {
    path: '/partnerships',
    name: 'pages.partnerships',
    component: PartnershipsPage
  },
  {
    path: '/company',
    name: 'pages.company',
    component: CompanyPage
  },
  {
    path: '/press-kit',
    name: 'pages.press-kit',
    component: PressKitPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
