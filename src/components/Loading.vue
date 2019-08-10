<template>
    <div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading',
  props:{
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

  .loading {
    width: 50px;
    height: 50px;
    border: 5px solid $nodeGreen;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotation .5s infinite linear;  
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg)
    }

    to {
      transform: rotate(360deg)
    }  
  }
/* } */
</style>
