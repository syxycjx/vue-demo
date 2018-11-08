import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import INDEX from '@/page/index'
import GOODS from '@/page/shop/goods/goods'
import LOGIN from '@/page/user/login/login'


export default new Router({
  modules: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: INDEX
    },
    {
      path: '/user/login/login',
      name: 'login',
      component: LOGIN
    },
    {
      path: '/shop/goods/goods',
      name: 'goods',
      component: GOODS
    }
  ]
})
