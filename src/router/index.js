import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home'
import ocComponent from '@/view/oc_component.vue'
import ocComponent2 from '@/view/oc_component2.vue'
import ocComponent3 from '@/view/oc_component3.vue'
import header from '@/components/header.vue'
import allHead from '@/components/allHead.vue'
import menu from '@/components/menu.vue'
import popView from '@/components/popup.vue'
import HelloWorld from '@/view/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ocComponent',
      name: 'ocComponent',
      component: ocComponent
    },
    {
      path: '/ocComponent2',
      name: 'ocComponent2',
      component: ocComponent2
    },
    {
      path: '/ocComponent3',
      name: 'ocComponent3',
      component: ocComponent3
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/allHead',
      name: 'allHead',
      component: allHead
    },
    {
      path: '/popView',
      name: 'popView',
      component: popView
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
