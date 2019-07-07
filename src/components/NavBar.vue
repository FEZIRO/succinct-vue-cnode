<template>
  <div>
    <nav :class="{'nav-shadow': shadow}">
      <ul>
        <li :class="$route.params.tab === item.id ? 'nav-item item-selected' : 'nav-item'"
          v-for="item of navBarTab"
          :key="item.id"
          @click="handleTabClick(item.id)">
          <i class="iconfont icon" 
            v-html="item.icon"></i>
            {{item.name}}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    shadow: Boolean
  },
  data () {
    return {
      navBarTab:[{
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
        }],
      currentTab: 'all',
    }
  },
  mounted() {
    //this.handleTabClick(this.currentTab)
  },
  methods: {
    handleTabClick(tabId) {
      this.$router.push({
        name:'articlelist',
        params:{ tab:tabId },
      })
      this.currentTab = tabId
      window.scrollTo(0,0);
      this.$store.commit('changeHeaderNavShow')
    }
  },
  watch: {
    '$route.params.id' (newVal){
      this.currentTab = newVal
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';
nav {
  width: 200px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  .nav-item {
    line-height: 50px;
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    text-align: center;
    color: $nodeBlack;
    font-weight: bold;
    margin-top: 5px;
    &:first-child {
      
    }
    .icon {
      margin-right: 5px;
    }
    &:hover {
      color: #fff;
      cursor: pointer;
      background: $nodeGreen;
      opacity: .8;
    }
  }

  .item-selected {
    color: #fff;
    cursor: pointer;
    background: $nodeGreen;
    opacity: .8;
  }
}

.nav-shadow {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .06);
}

/* @media screen and (max-width: 768px) {
  nav {
    display: none;
  }
} */
</style>

