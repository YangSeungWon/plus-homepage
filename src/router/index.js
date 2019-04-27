import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'
import Members from '@/components/Members'
import Imprint from '@/components/Imprint'

Vue.use(Router)

export default new Router({
  // base: '/demos/mh-portfolio-vuejs-and-gsap-template/', // --> IF WEBAPP IN SUBFOLDER THEN path/to/subfolder
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/imprint',
      name: 'Imprint',
      component: Imprint
    }
  ]
})