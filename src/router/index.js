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
    path: '/account/properties',
    name: 'MyProperties',
    component: () => import('../views/MyProperties.vue')
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
    component: () => import('../views/MyProperty.vue')
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
