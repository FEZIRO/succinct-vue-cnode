import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:tab',
      name: 'articlelist',
      component: () => import('./pages/ArticleList.vue')
    },
    {
      path:'/topic/content',
      name:'articlecontent',
      component: () => import('./pages/ArticleContent.vue')
    }
  ]
})
