import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
Vue.prototype.$axios = axios


Vue.config.productionTip = false

// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts 


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import  jquery from  'jquery'
Vue.prototype.$jquery = jquery

import 'babel-polyfill';  //  ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

// 引入视频组件 
// import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
