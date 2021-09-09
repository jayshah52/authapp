import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import ForgotPassword from "../views/ForgotPassword";
import Activate from "../views/Activate";
import ForgotPasswordConfirm from "../views/ForgotPasswordConfirm";
import ChangePassword from "../views/ChangePassword";
import MainPage from "../views/MainPage";

Vue.use(VueRouter)

const routes = [
    {
    path: '/login',
    name: 'Login',
    component: Login
  },

    {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
    {
    path: '/forgotpass',
    name: 'ForgotPass',
    component: ForgotPassword
  },
    {
    path: '/activate/:uid/:token',
    name: 'activate',
    component: Activate
  },
    {
    path: '/reset_password/:uid/:token',
    name: 'ForgotPassConfirm',
    component: ForgotPasswordConfirm
  },

    {
    path: '/changepass',
    name: 'change-pass',
    component: ChangePassword,
    meta: {
      requireLogin: true
    }
  },
    {
    path: '/home',
    name: 'home',
    component: MainPage,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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
router.beforeEach((to, from, next) => {
  if (!(localStorage.getItem('token')) && to.matched.some(record => record.meta.requireLogin)) {
    // alert("Hello", this.$store.state.isAuthenticated)
    // console.log("Hello", store.state.isAuthenticated)
    // console.log("Bye bye", localStorage.getItem('token'))
  } else {
    next()
  }
})
export default router

