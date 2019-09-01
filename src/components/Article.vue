<template>
  <article class="article-container">
    <div class="article-info">
      <h1 class="info-title">
        <span class="tag top-tag" v-if="topicData.top">置顶</span>
        <span class="tag top-tag" v-else-if="topicData.good">精华</span>
        <span class="tag" v-else>{{tag[topicData.tab]}}</span>{{topicData.title}}
      </h1>
      <div class="info-detail">
        <span class="author" @click="navigateToAuthorPage(topicData.author.loginname)">作者 {{topicData.author.loginname}}</span>
        <span class="create-at">发布于 {{topicData.create_at | getLocalDateTime}}</span>
        <span class="visit-count">浏览量 {{topicData.visit_count}}</span>
        <span class="from">来源-{{tag[topicData.tab]}}</span>
      </div>
    </div>
    <div class="markdown-body article-content"
     v-html="topicData.content">
    </div>
  </article>
</template>

<script>
import { getDateTime } from '../utils/formatDate'

export default {
  name: 'Article',
  props:{
    topicData: Object
  },
  data () {
    return {
      createAt:null,
      tag: this.$store.state.tag
    }
  },
  filters: {
    getLocalDateTime(dateTime) {
      return getDateTime(dateTime,3)
    }
  },
  methods: {
    navigateToAuthorPage(loginName) {
      this.$router.push({
        name:'author',
        query:{
          name: loginName
        }
      })
    }
  },
  mounted () {
    
  }
  
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';
@import '../assets/styles/markdown.css';

.article-container {
  background: #fff;
  border-radius: 10px;
  box-shadow: $shadow;
  word-break: break-all;
  
  .article-info {
    padding: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
    .info-title {
      font-size: 25px;
      line-height: 28px;
      font-weight: bold;
      .tag {
        vertical-align: middle;
        //padding: 5px 7px;
        margin-right: 5px;
        text-align: center;
        background: $nodeGreen;
        //border-radius: 5px;
        //color:#fff;
        //font-size: 13px;
        @include tag(13px,5px 7px,5px)
      }
      .top-tag{
         background: $nodeDeepGreen;
      }
    }
    .info-detail {
      padding-top: 20px;
      font-weight: bold;
      line-height: 18px;
      .author{
        margin-right: 10px;
        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }

      
      .create-at,
      .visit-count,
      .from {
        margin-right: 10px;
        color: rgba(0, 0, 0, .5);
        @media screen and (max-width: 768px) {
          display: block;
        }
      }
    }
  }
}

  .article-content{
    padding: 30px;
  }
</style>
