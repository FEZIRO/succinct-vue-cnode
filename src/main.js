import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont/iconfont.css';
Vue.config.productionTip = false;

import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false });
import 'nprogress/nprogress.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
