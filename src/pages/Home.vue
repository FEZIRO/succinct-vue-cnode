<template>
  <div class="home-container">
    <NavBar :shadow="true" class="nav-bar" v-show="this.$store.state.currentDevice === 'computer'"></NavBar>
    <TopicList class="tl"></TopicList>
  </div>
</template>

<script>
import TopicList from "@/components/TopicList";
import Loading from "@/components/Loading";
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar,
    Loading,
    TopicList
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  margin-top: 60px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }

  .nav-bar {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .tl {
    margin-left: 20px;
    flex: 1;
    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }
  
}
</style>



