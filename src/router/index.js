import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InvestorsPage from "../views/Investors.vue";
import ProductsPage from "../views/Products.vue";
import InsightsPage from "../views/Insights.vue";
// import TimelinePage from "../views/Timeline.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pages.home',
    component: Home
  },
  {
    path: '/investors',
    name: 'pages.investors',
    component: InvestorsPage
  },
  {
    path: '/products',
    name: 'pages.products',
    component: ProductsPage
  },
  {
    path: '/insights',
    name: 'pages.insights',
    component: InsightsPage
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
