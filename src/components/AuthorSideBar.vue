<template>
  <div>
   <div class="author-container">
    <div class="title">作者</div>
    <div class="author-info" 
      @click="navigateToAuthorPage(authorData.loginname)">
      <div class="avatar">
        <img class="avatar-img" 
          :src="authorData.avatar_url" 
          alt=""/>
      </div>
      {{authorData.loginname}}
      
    </div>
    <div class="score">积分{{authorData.score}}
      <div class="register-time">
        注册于 {{authorData.create_at | getLocalDateTime}}
      </div>
    </div>
  </div>

  <div class="recent-topics-container">
    <div class="title">作者最近的文章</div>
    <ul class="topics-list" v-if="authorData.recent_topics.length !== 0">
      <li class="list-item"
        @click="handleItemClick(item)" 
        v-for="item in authorData.recent_topics"
        :key="item.id">{{item.title}}
        <div class="last-reply-time">
          最后回复于 {{item.last_reply_at | getLocalDateTime}}
        </div>
        </li>
    </ul>
    <div class="content-empty" v-else>空</div>
  </div>

  <div class="recent-replies-container">
    <div class="title">作者最近回复</div>
    <ul class="topics-list" v-if="authorData.recent_replies.length !== 0">
      <li class="list-item"
      @click="handleItemClick(item)"  
        v-for="item in authorData.recent_replies"
        :key="item.id">{{item.title}}
        <div class="last-reply-time">
          最后回复于 {{item.last_reply_at | getLocalDateTime}}
        </div>
        </li>
    </ul>
    <div class="content-empty" v-else>空</div>
  </div>
</div>
 
</template>

<script>
import { requestAuthorData } from '@/utils/requestApi'
import { getDateTime } from '@/utils/formatDate'

export default {
  name: 'AuthorSideBar',
  props: {
    authorData: Object
  },
  filters: {
    getLocalDateTime(dateTime) {
      return getDateTime(dateTime,3)
    }
  },
  methods: {
    handleItemClick(article) {
      
      this.$router.push({
        name:'articlecontent',
        query:{
          id: article.id,
          author: article.author.loginname
        }
      })
    },

    navigateToAuthorPage(loginName) {
      this.$router.push({
        name:'author',
        query:{
          name: loginName
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';

  .author-container {
    border-radius: 10px;
    background: #fff;
    position: relative;
    box-shadow: $shadow;
    overflow: hidden;
    .title {
      width: 100%;
      padding: 18px;
      font-size: 15px;
      font-weight: bold;
      border-bottom: $border;
    }
    .author-info {
      height: 50px;
      padding: 10px;
      padding-left: 20px;
      border-bottom: $border;
      @extend %text-overflow-ellipsis;
      cursor: pointer;
      &:hover {
        background: #eee;
        transition: all .3s;
      }
      .avatar{
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background-size: contain;
        .avatar-img {
          width: 100%;
          border-radius: 50%;
        }
      }
      
    }
    .score {
      line-height: 20px;
      color:rgb(122, 103, 103);
      padding: 12px;
      padding-left: 20px;
      .register-time{
        margin-top: 10px;
        margin-right: 10px;
        line-height: 20px;
        height: 20px;
        color: rgba(0, 0, 0, .6);
        font-weight: bold;
        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }
    }
  }

  .recent-topics-container{
    @extend .author-container;
    margin-top: 15px;
    .topics-list {
      .list-item{
        display: block;
        
        border-bottom: $border;
        line-height: 40px;
        padding: 0 20px;
        @extend %text-overflow-ellipsis;
        cursor: pointer;
        &:hover{
          background: #eeeeee;
          transition: all .3s;
        }
        .last-reply-time{
          float: right;
          margin-right: 10px;
          font-size: 13px;
          line-height: 40px;
          height: 40px;
          color: rgba(0, 0, 0, .4);
          font-weight: bold
        }
      }
    }
    .content-empty{
      height: 50px;
      line-height: 50px;
      font-weight: bold;
      color: #ccc;
      text-align: center;
    }

  }

  .recent-replies-container{
    @extend .recent-topics-container
  }
</style>
