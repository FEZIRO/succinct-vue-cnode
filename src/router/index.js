import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
// import NProgress from 'nprogress'
// NProgress.configure({ showSpinner: false });

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: {
        path: "/all"
      }
    },
    {
      path: "*",
      redirect: {
        path: "/all"
      }
    },
    {
      path: "/:tab",
      name: "articlelist",
      component: () => import("../pages/home/Home.vue")
    },
    {
      path: "/topic/content",
      name: "articlecontent",
      component: () => import("../pages/content/Content.vue")
    },
    {
      path: "/topic/author",
      name: "author",
      component: () => import("../pages/author/Author.vue")
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   //${to and from are Route Object,next() must be called to resolve the hook}
//   NProgress.start();
//   next()
// })

// router.afterEach( route => {
//   NProgress.done()
// })

export default router;
