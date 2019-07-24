import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{
        path:'/all'
      }
    },
    {
      path: '/:tab',
      name: 'articlelist',
      component: () => import('./pages/Home.vue')
    },
    {
      path:'/topic/content',
      name:'articlecontent',
      component: () => import('./pages/Content.vue')
    },
    {
      path:'/topic/author',
      name:'author',
      component: () => import('./pages/Author.vue')
    }
  ]
})
