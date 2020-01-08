import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Browse from './views/Browse.vue'
import Contact from './views/Contact.vue'
import Display from './views/Display.vue'
import Add from './views/Submit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
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
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path: '/display/:id',
      name: 'display',
      component: Display
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/submit',
      name: 'submit',
      component: Add
    }
  ]
})
