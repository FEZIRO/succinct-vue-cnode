<template>
  <div class="home-container">
    <div>
      <NavBar
        :shadow="this.currentDevice === 'computer'"
        v-show="this.currentDevice === 'computer'"
      />
      <LinkExchange />
      <DownloadCode />
    </div>
    <TopicList></TopicList>
    
  </div>
</template>

<script>
import TopicList from "@/components/TopicList";
import Loading from "@/components/Loading";
import NavBar from "@/components/NavBar";
import LinkExchange from "@/components/LinkExchange";
import DownloadCode from "@/components/DownloadCode";

import { mapState } from "vuex";

export default {
  name: "Home",
  data () {
    return {
      isShowScrollTopButton: false
    }
  },
  components: {
    NavBar,
    Loading,
    TopicList,
    LinkExchange,
    DownloadCode,
  },
  computed: {
    ...mapState(["currentDevice"])
  },
  methods: {
    
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
$width: 200px;

.home-container {
  display: flex;
  margin-top: 60px;
  padding-top: 20px;
  max-width: 1200px;
  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }

  .navbar-container {
    width: $width;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .link-container {
    width: $width;
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .download-code-container {
    margin-top: 15px;
  }

  .toplist-container {
    float: right;
    width: 80%;
    margin-left: 20px;
    margin-bottom: 20px;
    flex: 1;
    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }
}
</style>



