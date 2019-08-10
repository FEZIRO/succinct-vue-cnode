<template>
  <nav :class="{'nav-shadow': shadow}" class="navbar-container">
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
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    shadow: Boolean
  },
  data () {
    return {
      navBarTab:this.$store.state.navTab,
      currentTab: this.$route.params.tab ? this.$route.params.tab : 'all',
    }
  },
  methods: {
    handleTabClick(tabId) {
      this.$router.push({
        name:'articlelist',
        params:{ tab:tabId },
      })
      this.currentTab = tabId
      window.scrollTo(0,0)
      this.$store.commit('CHNAGE_HEADER_NAV_SHOW')
    }
  },
  watch: {
    '$route.params.id' (newVal){
      if (!newValue) return
      this.currentTab = newVal
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
nav {
  
  width: 250px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  .nav-item {
    line-height: 50px;
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    color: $nodeBlack;
    font-weight: bold;
    margin-top: 5px;
    .icon {
      margin-right: 5px;
    }
    &:hover {
      color: #fff;
      cursor: pointer;
      background: $nodeGreen;
      transition: all .3s;
    }
  }

  .item-selected {
    color: #fff;
    cursor: pointer;
    background: $nodeGreen;
  }
}

.nav-shadow {
  box-shadow: $shadow;
}


</style>

