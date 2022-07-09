import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '../views/Test.vue';
import Home from '../views/Home.vue';
// import PartnershipsPage from '../views/Partnerships.vue';
import CompanyPage from '../views/Company.vue';
import PressKitPage from '../views/PressKit.vue';
import ForBank from '../views/Bank.vue';
import ForMerchant from '../views/Merchant.vue';
import ForGovernment from '../views/Government.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms.vue';
import Contact from '../views/Contact.vue';
// import TimelinePage from "../views/Timeline.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    name: 'pages.test',
    component: Test,
  },
  {
    path: '/',
    name: 'pages.home',
    component: Home,
  },
  {
    path: '/partnerships/',
    name: 'pages.partnerships',
    component: ForBank,
  },
  {
    path: '/partnerships/for-banks',
    name: 'pages.partnerships.bank',
    component: ForBank,
  },
  {
    path: '/partnerships/for-merchants',
    name: 'pages.partnerships.merchants',
    component: ForMerchant,
  },
  {
    path: '/partnerships/for-government',
    name: 'pages.partnerships.government',
    component: ForGovernment,
  },
  {
    path: '/company',
    name: 'pages.company',
    component: CompanyPage,
  },
  {
    path: '/press-kit',
    name: 'pages.press-kit',
    component: PressKitPage,
  },
  {
    path: '/privacy-policy',
    name: 'pages.privacy-policy',
    component: Privacy,
  },
  {
    path: '/terms-of-use',
    name: 'pages.terms-of-use',
    component: Terms,
  },
  {
    path: '/contact-us',
    name: 'pages.contact-us',
    component: Contact,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
