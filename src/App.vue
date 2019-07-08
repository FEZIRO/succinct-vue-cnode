<template>
  <div id="app">
    <Header></Header>
    <transition name="routerview">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'app',
  methods: {
    onResizeChange() {
      window.addEventListener('resize',(e)=>{
        if(document.body.clientWidth<768){
          this.$store.commit('changeDevice','mobile')
        }else{
          this.$store.commit('changeDevice','computer')
        }
      })
    },
  },
  components: {
    Header
  },
  created () {
    if(document.body.clientWidth<768){
        this.$store.commit('changeDevice','mobile')
      }else{
        this.$store.commit('changeDevice','computer')
    }
    this.onResizeChange();
  },
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  
}

.routerview-enter-active {
  animation: fadeIn .2s 
}

.routerview-leave-active {
  animation: fadeIn reverse .2s ;
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

</style>
