<template>
  <div>
    <div class="container" v-if="topicData">
      <Article :topicData="topicData" class="article"></Article>
      <Author class="author"></Author>
    </div>
    <Loading v-else></Loading>
  </div>
</template>

<script>
import { requestTopicContent } from '@/utils/requestApi'
import { getDate } from '@/utils/formatDate'
import Article from '@/components/Article';
import Author from '@/components/Author';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
export default {
  name: 'ArticleContent',
  data() {
    return {
      topicData: null
    }
  },
  components: {
    Header,
    Article,
    Author,
    Loading
  },
  methods: {
    getArticle() {
      requestTopicContent(this.$route.query.id)
      .then((res)=>{
          this.topicData = res;
          this.topicData.create_at = getDate(res.create_at)
        })
    }
  },
  mounted () {
    this.getArticle()
   //console.log(this.$route)
  },

}
</script>

<style lang="scss" scoped>
.container {
  padding: 60px 30px;
  padding-top: 90px;
  display: flex;
  background: #eee;
  .article {
    flex-grow: 1;
  }
  .author {
    width: 200px;
    height: 300px;
    margin-left: 30px;
    flex-shrink: 0;
    background: #fff;
  }
}
</style>
