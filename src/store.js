import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowNavTab: false,
    currentDevice: '',
    isComputer: '',
    isMobile:'',
    tag:{
      all:'全部',
      share:'分享',
      ask:'问答',
      good:'精华',
      job:'工作'
    },
  },
  mutations: {
    changeHeaderNavShow(state) {
      state.isShowNavTab = !state.isShowNavTab
    },

    changeDevice(state,device){
      state.currentDevice = device
    }
  },
  actions: {

  }
})
