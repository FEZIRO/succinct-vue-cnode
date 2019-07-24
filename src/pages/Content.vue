<template>
  <div class="container" v-if="topicData && authorData">
    <main class="content-container" >
      <Article :topic-data="topicData" class="article"></Article>
      <Reply :reply-data="topicData.replies"></Reply>
    </main>
    <div class="user-info-container">
      <AuthorSideBar :author-data="authorData"
        class="author-sidebar"></AuthorSideBar>
    </div>
    
  </div>
</template>

<script>
import { requestTopicContent, requestAuthorData } from '@/utils/requestApi'
import { getDateTime } from '@/utils/formatDate'
import Article from '@/components/Article';
import AuthorSideBar from '@/components/AuthorSideBar';
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
    AuthorSideBar,
    Loading,
    Reply
  },
  methods: {
    getArticle() {
      requestTopicContent(this.$route.query.id)
      .then((res)=>{
          this.topicData = res;
          window.scrollTo(0,0)
        })
    },

    getAuthorData() {
      requestAuthorData(this.$route.query.author).then((res)=>{
          this.authorData = res;
          
        })
    }
  },
  mounted () {
    this.getArticle();
    this.getAuthorData();
   
  },
  watch: {
    '$route.query'(){
      this.getArticle();
      this.getAuthorData();
    }
  },

}
</script>

<style lang="scss" scoped>
.container {
  padding: 80px 15px 20px 15px;
  display: flex;
  .content-container {
    flex-grow: 1;
  }
  .user-info-container {
    width: 250px; 
    margin-left: 20px;
    flex-shrink: 0;
  }
}

@media screen and (max-width: 768px) {
    .container {
      padding: 70px 10px 10px 10px;
      
      .content-container{
        width: 100%;
      }
      .user-info-container{
        display: none;
         width: 0vw;
      }
    }
  }
</style>
