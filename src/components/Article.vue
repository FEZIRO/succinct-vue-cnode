<template>
  <article class="article-container">
    <div class="article-info">
      <h1 class="info-title">
        <span class="tag top-tag" v-if="topicData.top">置顶</span>
        <span class="tag top-tag" v-else-if="topicData.good">精华</span>
        <span class="tag" v-else>{{tag[topicData.tab]}}</span>{{topicData.title}}
      </h1>
      <div class="info-detail">
        <span class="author">作者 {{topicData.author.loginname}}</span>
        <span class="create-at">发布于 {{topicData.create_at}}</span>
        <span class="visit-count">浏览量 {{topicData.visit_count}}</span>
        <span class="from">来源-{{tag[topicData.tab]}}</span>
      </div>
    </div>
    <div v-html="topicData.content" 
      class="markdown-body article-content">
    </div>
  </article>
</template>

<script>
import { getDate } from '../utils/formatDate'

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
  methods: {
    
  },
  mounted () {
   
  }
  
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

.article-container {
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, .06);
  .article-info {
    padding: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
    .info-title {
      font-size: 25px;
      line-height: 28px;
      font-weight: bold;
      .tag {
        vertical-align: middle;
        padding: 5px 7px;
        margin-right: 5px;
        text-align: center;
        background: rgb(197,225,15);
        border-radius: 10px;
        color:#fff;
        font-size: 13px;
      }
      .top-tag{
        background: rgb(108,194,74);
      }
    }
    .info-detail {
      padding-top: 20px;
      font-weight: bold;
      line-height: 18px;
      .author{
        margin-right: 10px;
      }
      .create-at,
      .visit-count,
      .from {
        @extend .author;
        color: rgba(0, 0, 0, .5)
      }
    }
  }
}

.markdown-body {
      box-sizing: border-box;
      word-wrap: break-word;
      word-break: break-all;
      margin: 0 auto;
      padding: 30px;
      padding-top: 20px;
    }

  @media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
  }
</style>
