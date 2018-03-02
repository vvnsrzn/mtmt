import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Signup from './views/Signup.vue'
import Fblogin from './views/Fblogin.vue'
import LookingForRange from './views/Lookingfor.vue'
import QuizzInfo from './views/QuizzInfo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/auth/facebook/callback',
      component: Fblogin
    },
    {
      path: '/lookingfor',
      component: LookingForRange
    },
    {
      path: '/quizz-info',
      component: QuizzInfo
    },
  ]
})