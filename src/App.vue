<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  mounted () {
    this.$router.push({
      name:'articlelist',
      params:{ tab: this.defaultTab } 
    })
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>
