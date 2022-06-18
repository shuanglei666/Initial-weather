import Vue from 'vue'
import VueRouter from 'vue-router'
// import Weather from '../views/weather/Weather.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'newWeather',
  //   component: NewWeather
  // },
  {
    path: '/newWeather',  //  天气气温  路径
    name: 'newWeather',
    component: () => import(/* webpackChunkName: "about" */ '../views/newWeather/NewWeather.vue')
  },
  {
    path: '/weatherEats', //  天气气温echarts图  路径
    name: 'weatherEats',
    component: () => import(/* webpackChunkName: "about" */ '../views/weatherEats/Weather.vue')
  },
  {
    path: '/rate',   // 汇率  路径
    name: 'rate',
    component: () => import(/* webpackChunkName: "about" */ '../views/rate/Rate.vue')
  },
  {
    path: '/newRate',   // 汇率  路径
    name: 'newRate',
    component: () => import(/* webpackChunkName: "about" */ '../views/newRate/newRate.vue')
  },
  {
    path: '/rata',   
    name: 'rata',
    component: () => import(/* webpackChunkName: "about" */ '../views/rata/Rata.vue')
  },
  {
    path: '/day',    //  节假日  路径
    name: 'day',
    component: () => import(/* webpackChunkName: "about" */ '../views/day/Day.vue')
  },
  {
    path: '/news',    //  新闻头条  路径
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/news/News.vue')
  },
  {
    path: '/billboard',    //  热门视频榜单  路径
    name: 'billboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/billboard/Billboard.vue')
  },
  {
    path: '/springTravel',    //  查询出行防疫政策  路径
    name: 'springTravel',
    component: () => import(/* webpackChunkName: "about" */ '../views/springTravel/SpringTravel.vue')
  },
  {
    path: '/gold',    //  黄金  路径
    name: 'gold',
    component: () => import(/* webpackChunkName: "about" */ '../views/gold/Gold.vue')           //     新闻头条   热门视频展示    查询防疫政策    黄金价格柱状图     
  },
  {
    path: '/newGold',    //  
    name: 'newGold',
    component: () => import(/* webpackChunkName: "about" */ '../views/newGold/NewGold.vue')           //     新闻头条   热门视频展示    查询防疫政策    黄金价格柱状图     
  },
  {
    path: '/event',    //  查询出行防疫政策  路径
    name: 'event',
    component: () => import(/* webpackChunkName: "about" */ '../views/event/events.vue')
  },
  {
    path: '/exchange',    //  汇率
    name: 'exchange',
    component: () => import(/* webpackChunkName: "about" */ '../views/exchange/exchange.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
