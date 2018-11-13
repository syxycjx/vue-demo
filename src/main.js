// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
Vue.prototype.$http = axios

// 写入原型方法  因为axios不是插件

Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// 冻结对象示例   不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。
let app = Object.freeze({
  name: 'My App',
  log(data) {
    console.log(data)
  }
})

// 全局初始化方法
window.$init = function (callback) {
  // 首先获取url后面参数 如果是reload 清除本地数据
  if(ajax.getQueryString('wscinit') == 'reload'){
    localStorage.clear()        // 清除全部数据
  }
  // 获得本地默认数据
  ajax.getDefaultData()
}