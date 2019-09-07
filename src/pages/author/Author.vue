<template>
  <div class="author-page">
    <AuthorSideBar :author-data="authorData" class="info" v-if="authorData" />
    <Loading v-else />
  </div>
</template>

<script>
import { requestAuthorData } from "@/utils/requestApi";
import AuthorSideBar from "@/components/AuthorSideBar";
import { getDateTime } from "@/utils/formatDate";
import Loading from "@/components/Loading";

export default {
  name: "Author",
  data() {
    return {
      authorData: null
    };
  },
  components: {
    AuthorSideBar,
    Loading
  },
  methods: {
    getAuthorData() {
      requestAuthorData(this.$route.query.name).then(res => {
        this.authorData = res;
      });
    }
  },
  mounted() {
    this.getAuthorData();
  }
};
</script>

<style lang="scss" scoped>
.author-page {
  padding: 10px;
  margin: 0 auto;

  .loading {
    margin: 100px auto;
  }
}
</style>
