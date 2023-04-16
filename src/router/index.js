import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Cookies from 'js-cookie'
import store from '../store'

axios.defaults.baseURL = process.env.VUE_APP_API;

if (Cookies.get('PROMIS_TOKEN')) {
  console.log('logged in')

  const datum = JSON.parse(Cookies.get('PROMIS_TOKEN')).auth.token;
  let Authorization = "Bearer " + datum
  console.log(Authorization)
  axios.defaults.headers.common['Authorization'] = Authorization;
} else {
  
  axios.defaults.headers.common['Authorization'] = 'outside';
  console.log('!Authorization')

}
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

console.log('out index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/enquire',
    name: 'Enquire',
    component: () => import('../views/enquire.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/book.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/properties',
    name: 'Properties',
    component: () => import('../views/properties/ViewAllProperties.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/blog/dongo-kundu-bypass',
    name: 'dongoKunduBlog',
    component: () => import('../views/dongoKunduBlog.vue')
  },
  {
    path: '/blog/land-as-a-hedge-against-inflation',
    name: 'LandAndInflationBlog',
    component: () => import('../views/LandAndInflationBlog.vue')
  },
  {
    path: '/blog/why-land-location-matters',
    name: 'landLocationBlog',
    component: () => import('../views/landLocationBlog.vue')
  },
  {
    path: '/blog/red-flags',
    name: 'redFlagBlog',
    component: () => import('../views/redFlagBlog.vue')
  },
  {
    path: '/blog/process-of-buying-land',
    name: 'howtoBuy',
    component: () => import('../views/howtoBuy.vue')
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import('../views/Faqs.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/account/units',
    name: 'MyUnits',
    component: () => import('../views/MyUnits.vue')
  },
  {
    path: '/view/property/:id',
    name: 'ViewProperty',
    component: () => import('../views/ViewProperty.vue')
  },
  {
    path: '/view/unit/:id',
    name: 'ViewUnit',
    component: () => import('../views/ViewUnit.vue')
  },
  {
    path: '/property/:id',
    name: 'MyProperty',
    component: () => import('../views/properties/View.vue')
  },
  {
    path: '/add_property',
    name: 'AddProperty',
    component: () => import('../views/AddProperty.vue')
  },
  {
    path: '/account/edit',
    name: 'EditAccount',
    component: () => import('../views/dashboard/EditAccount')
  },
  {
    path: '/account/onsale',
    name: 'OnSale',
    component: () => import('../views/Onsale')
  },
  {
    path: '/account/enquiries',
    name: 'Enquiries',
    component: () => import('../views/Enquiries')
  },
  {
    path: '/account/logs',
    name: 'Logs',
    component: () => import('../views/Logs')
  },
  {
    path: '/account/bookings',
    name: 'Bookings',
    component: () => import('../views/Bookings')
  },
  {
    path: '/account/land',
    name: 'Land',
    component: () => import('../views/Land')
  },
  {
    path: '/account/vacancies',
    name: 'Vacancies',
    component: () => import('../views/Vacancies')
  },
  {
    path: '/add_property_for_sale',
    name: 'AddPropertyForSale',
    component: () => import('../views/AddPropertyForSale')
  },
  {
    path: '/add_land',
    name: 'AddLand',
    component: () => import('../views/AddLand')
  },
   {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '*',
    name: 'AddLand',
    component: () => import('../views/AddLand')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
