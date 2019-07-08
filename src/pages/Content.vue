<template>
  <div class="container" v-if="topicData && authorData">
    <main class="content-container" >
      <Article :topic-data="topicData" class="article"></Article>
      <Reply></Reply>
    </main>
    <div class="user-info-container">
      <Author :author-data="authorData"></Author>
    </div>
    <!-- <Loading v-else></Loading> -->
  </div>
</template>

<script>
import { requestTopicContent, requestAuthorData } from '@/utils/requestApi'
import { getDate } from '@/utils/formatDate'
import Article from '@/components/Article';
import Author from '@/components/Author';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Reply from '@/components/Reply';
export default {
  name: 'Content',
  data() {
    return {
      topicData: null,
      authorData: null
    }
  },
  components: {
    Header,
    Article,
    Author,
    Loading,
    Reply
  },
  methods: {
    getArticle() {
      requestTopicContent(this.$route.query.id)
      .then((res)=>{
          this.topicData = res;
          this.topicData.create_at = getDate(res.create_at)
        })
    },

    getAuthorData() {
      requestAuthorData(this.$route.query.author).then((res)=>{
          this.authorData = res;
          //this..create_at = getDate(res.create_at)
        })
    }
  },
  mounted () {
    this.getArticle();
    this.getAuthorData();
   //console.log(this.$route)
  },

}
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 20px 20px 20px;
  display: flex;
  .content-container {
    flex-grow: 1;
    .article {
      background: #fff;
    }
  }
  .user-info-container {
    margin-left: 20px;
    flex-shrink: 0;
  }

}
</style>
