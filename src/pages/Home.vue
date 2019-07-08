<template>
  <div class="home-container">
    <NavBar :shadow="true" class="nav-bar"
      v-show="this.$store.state.currentDevice === 'computer'"></NavBar>
    <TopicList></TopicList>
  </div>
</template>

<script>
import TopicList from '@/components/TopicList';
import Loading from '@/components/Loading';
import NavBar from '@/components/NavBar';

export default {
  name: 'Home',
  components: {
    NavBar,
    Loading,
    TopicList
  }
}
</script>

<style lang="scss" scoped>
.home-container{
  width: 100%;
  display: flex;
  margin-top: 60px;
  
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 10px
  }

  .nav-bar{
    position: fixed;
  }

}
</style>



