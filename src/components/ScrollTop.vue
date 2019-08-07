<template>
  <div class="scroll-top-tag" 
    @click="srcollToTop"
    :style="{'display': show ? 'block' :'none'}">↑</div>
</template>

<script>
export default {
  name: "ScrollTop",
  props:{
    show:{
      type:Boolean,
      default: false
    }
  },
  methods: {
    srcollToTop() {
      let timerId = null;
      timerId = requestAnimationFrame(function toTop() {
        let top = document.documentElement.scrollTop;
        if (top > 0) {
          document.documentElement.scrollTop -= 100;
          timerId = requestAnimationFrame(toTop);
        } else {   
          cancelAnimationFrame(timerId);
        }
      });
    },
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/styles/common.scss";
.scroll-top-tag {
  position: fixed;
  right: 30px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  box-shadow: $shadow;
  font-size: 20px;
  color: #555;
  background: #fff;
  text-align: center;
  cursor: pointer;
}
</style>
