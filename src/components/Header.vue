<template>
  <div class="container">
    <header>
      <div class="header-logo"
        @click="handleHeaderClick">
        <img class="logo-img" src="../assets/imgs/cnodejs-logo.svg" alt="">
      </div>
      <button class="iconfont nav-icon " 
        :class="this.$store.state.isShowNavTab ? 'icon-guanbi' : 'icon-daohanglan'"
        @click="handleNavButtonClick"></button>
      <transition name="slide">
        <nav class="nav-container" 
          v-show="this.$store.state.isShowNavTab && this.$store.state.currentDevice === 'mobile'">
          <NavBar></NavBar>
        </nav>
      </transition>
    </header>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Header',
  components: {
    NavBar
  },
  data() {
    return {
    }
  },
  methods: {
    handleNavButtonClick() {
      //console.log(this.$store.state)
      this.$store.commit('changeHeaderNavShow')
    },
    handleHeaderClick() {
      this.$router.push({
        name: 'articlelist',
        params:{
          tab:'all'
        }
      })
    }
  },
  
}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index: 999;
    .header-logo {
      position: absolute;
      left: 60px;
      height: 50px;
      line-height: 50px;
      width: 100px;
      cursor: pointer;
      .logo-img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-icon {
      position: absolute;
      right: 20px;
      line-height: inherit;
      background: #fff;
      display: none;
    }
    .nav-container {
      position: absolute;
      display: flex;
      justify-content: center;
      padding: 20px 0;
      top:60px;
      width: 100%;
      
      box-shadow: 0 3px 5px 0 #eee;
      background: #fff;
    }
    .slide-enter-active {
      animation: slide-down 0.4s ease-in-out;
    }
    .slide-leave-active {
      animation: slide-down 0.4s reverse ease-in-out;
    }
  
    @keyframes slide-down {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
  
@media screen and (max-width: 768px) {
  header{
    .header-logo{
      left: 50%;
      margin-left: -50px;
    }

    .nav-icon{
      display: block;
    }
  }
}

  
</style>

