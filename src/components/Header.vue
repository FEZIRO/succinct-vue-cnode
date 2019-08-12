<template>
  <div class="header-container">
    <header>
      <div>
        <div class="header-logo" @click="handleHeaderClick">
          <img class="logo-img" src="../assets/imgs/cnodejs-logo.svg" alt />
        </div>
        <a class="cnode-link" href="https://cnodejs.org">CNode社区官方版入口←</a>
        <button
          class="iconfont nav-icon"
          :class="this.$store.state.isShowMobileNavTab ? 'icon-guanbi' : 'icon-daohanglan'"
          @click="handleNavButtonClick"
        ></button>
      </div>
    </header>
    <transition name="slide">
      <nav
        class="nav-container"
        v-show="this.$store.state.isShowMobileNavTab && this.$store.state.currentDevice === 'mobile'"
      >
        <NavBar></NavBar>
      </nav>
    </transition>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "Header",
  components: {
    NavBar
  },
  data() {
    return {};
  },
  methods: {
    handleNavButtonClick() {
      this.$store.commit("CHNAGE_HEADER_NAV_SHOW");
    },
    hideMobileNavTab(){
      this.$store.commit("COLLAPSE_NAV");
    },
    handleHeaderClick() {
      this.$router.push({
        name: "articlelist",
        params: {
          tab: "all"
        }
      });
    }
  },
  mounted() {
    window.addEventListener('touchmove',()=>{
      this.hideMobileNavTab()
    })
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";
.header-container {
  width: 100%;
  height: 60px;
  background: #fff;
  position: fixed;
  top: 0;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.05);
  z-index: 3;

  .nav-container {
    position: absolute;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    top: 60px;
    width: 100%;
    background: #fff;
    z-index: -1;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  }

  header {
    max-width: 1200px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    background: #fff;
    .header-logo {
      height: 55px;
      line-height: 55px;
      width: 100px;
      float: left;
      margin-left: 50px;
      cursor: pointer;
      .logo-img {
        width: 100%;
        height: 100%;
      }
    }
    .cnode-link {
      display: block;
      width: auto;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #000;
      font-weight: bold;
      float: right;
      margin-right: 5px;
    }

    .nav-icon {
      position: absolute;
      right: 20px;
      line-height: inherit;
      background: #fff;
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    header {
      .header-logo {
        margin: 0 auto;
        margin-left: 20px;
      }
      .cnode-link {
        display: none;
      }

      .nav-icon {
        display: block;
      }
    }
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

  .shadow {
    box-shadow: $shadow;
  }
}
</style>

