import Vue from 'vue'
import Router from 'vue-router'
import shakeDemo from '@/components/shakeDemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'shakeDemo',
      component: shakeDemo
    },
    {
      path: '/audio-demo',
      name: 'audioDemo',
      component: resolve => require(['../pages/audioTest'], resolve)
    }
  ]
})
