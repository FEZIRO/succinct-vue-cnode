<template>
  <div id="app">
    <Header></Header>
    <transition name="routerview">
      <router-view class="router-view"></router-view>
    </transition>
    <ScrollTop :show="isShowScrollTopButton" />
  </div>
</template>

<script>
import ScrollTop from "@/components/ScrollTop";
import Header from "@/components/Header";
export default {
  name: "app",
  data() {
    return {
      isShowScrollTopButton: false
    };
  },
  components: {
    Header,
    ScrollTop
  },
  methods: {
    onResizeChange() {
      window.addEventListener("resize", () => {
        this.checkDevice();
      });
    },

    checkDevice() {
      let clientWidth =
        document.documentElement.clientWidth || document.body.clientHeight;
      if (clientWidth < 768) {
        this.$store.commit("CHANGE_DEVICE", "mobile");
      } else {
        this.$store.commit("CHANGE_DEVICE", "computer");
      }
    },

    onScrollChange() {
      window.addEventListener("scroll", () => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 700) {
          this.isShowScrollTopButton = true;
        } else {
          this.isShowScrollTopButton = false;
        }
      });
    }
  },

  created() {
    this.checkDevice();
  },

  mounted() {
    this.onResizeChange();
    this.onScrollChange();
  }
};
</script>

<style lang="scss" scoped>
#app {
  .router-view {
    max-width: 1200px;
    margin: 0 auto;
    margin-top:80px;
    @media screen and (max-width: 768px){
      margin-top:60px;
    }
  }

  .routerview-enter-active {
    animation: fadeIn 0.2s;
  }

  .routerview-leave-active {
    animation: fadeIn reverse 0.2s;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }

    to {
      transform: translateY(0);

      opacity: 100;
    }
  }
}
</style>
