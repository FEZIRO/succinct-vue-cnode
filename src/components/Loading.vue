<template>
  <div class="loading-container">
    <div class="loading"></div>
  </div>
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

.loading-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  
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
}
</style>
