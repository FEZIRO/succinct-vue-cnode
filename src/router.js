import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from './pages/ArticleList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:tab',
      name: 'articlelist',
      params:{
        tab: 'all'
      },
      component: ArticleList
    }
  ]
})
