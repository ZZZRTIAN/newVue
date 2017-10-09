import Vue from 'vue'
import Router from 'vue-router'
import Stress from '../components/Stress.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stress',
      name: '首页',
      hidden: true,
      component: Stress
    },

  ]
})
