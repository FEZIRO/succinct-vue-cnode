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
      // let timerId = null;
      // timerId = requestAnimationFrame(function toTop() {
      //   let top = document.documentElement.scrollTop || document.body.scrollTop;
      //   if (top > 0) {
      //     document.documentElement.scrollTop -= 100;
      //     timerId = requestAnimationFrame(toTop);
      //   } else {   
      //     cancelAnimationFrame(timerId);
      //   }
      // });
      window.scrollTo(0,0)
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
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #ccc;
  font-size: 20px;
  color: #555;
  background: #fff;
  text-align: center;
  cursor: pointer;
}
</style>
