import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowNavTab: false,
    currentDevice: '',
    isComputer: '',
    isMobile:'',
    navTab:[{
      id:'all',
      icon:'&#xe6ef;',
      name:'全部'
    },{
      id:'good',
      icon:'&#xe66e;',
      name:'精华'
    },{
      id:'share',
      icon:'&#xe604;',
      name:'分享'
    },{
      id:'ask',
      icon:'&#xe603;',
      name:'问答'
    },{
      id:'job',
      icon:'&#xe600;',
      name:'招聘'
    },{
      id:'dev',
      icon:'&#xe600;',
      name:'客户端测试'
    }],
    tag:{
      all:'全部',
      share:'分享',
      ask:'问答',
      good:'精华',
      job:'工作',
      dev:'测试'
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
