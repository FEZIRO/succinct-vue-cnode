<template>
  <div>
    <header>
      <router-link 
        to="/all" 
        tag="div" 
        class="header-logo"></router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  background: #fff;
  padding-left:60px;
  z-index: 999;
  .header-logo {
    width: 100px;
    height: 50%;
    background: url('../assets/imgs/cnodejs-logo.svg') no-repeat;
    background-size: contain;
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) {
  header{
    justify-content: center;
    padding:0;
  }
}
</style>

