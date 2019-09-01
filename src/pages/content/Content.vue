<template>
  <div>
    <div class="content-container" v-if="topicData && authorData">
      <main class="content-main">
        <Article :topic-data="topicData" class="article" />
        <Reply :reply-data="topicData.replies" />
      </main>
      <div class="user-info-container">
        <AuthorSideBar :author-data="authorData" class="author-sidebar" />
      </div>
      
    </div>
    <div class="loading-container" v-else>
      <Loading/>
    </div>
  </div>
</template>

<script>
import { requestTopicContent, requestAuthorData } from "@/utils/requestApi";
import { getDateTime } from "@/utils/formatDate";
import Article from "@/components/Article";
import AuthorSideBar from "@/components/AuthorSideBar";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Reply from "@/components/Reply";
export default {
  name: "Content",
  data() {
    return {
      topicData: null,
      authorData: null
    };
  },
  components: {
    Header,
    Article,
    AuthorSideBar,
    Loading,
    Reply
  },
  methods: {
    getArticle() {
      requestTopicContent(this.$route.query.id).then(res => {
        this.topicData = res;
        window.scrollTo(0, 0);
      });
    },

    getAuthorData() {
      requestAuthorData(this.$route.query.author).then(res => {
        this.authorData = res;
      });
    }
  },
  mounted() {
    this.getArticle();
    this.getAuthorData();
  },
  watch: {
    "$route.query"() {
      this.getArticle();
      this.getAuthorData();
    }
  }
};
</script>

<style lang="scss" scoped>
  .content-container {
    display: flex;
    padding-bottom: 15px;
    .content-main {
      flex-grow: 1;
    }
    .user-info-container {
      width: 250px;
      margin-left: 20px;
      flex-shrink: 0;
    }
  }

  .loading-container{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .content-container {
      padding: 10px 10px 10px 10px;

      .content-main {
        width: 100%;
      }
      
      .user-info-container {
          display: none;
        }
    }
  }
</style>
