<template>
  <div class="reply-container">
    <div class="reply-count">{{replyData.length}} 回复</div>
    <ul class="reply-list" v-if="replyData.length!==0">
      <li v-for="(item,index) in replyData"
        :key="item.id">
        <div class="answerer-info">
          <div class="avatar">
            <img :src="item.author.avatar_url"/>
          </div>
          <div class="login-name">{{item.author.loginname}}</div>
          <div class="floor-count">{{index+1}}楼</div>
          <div class="reply-time">回复于 {{item.create_at | getLocalDateTime}}
          </div>
        </div>
        <p class="markdown-body" v-html="item.content"></p>
      </li>
    </ul>
    <div class="content-empty" v-else>空</div>
  </div>
</template>

<script>
import { getDateTime } from '@/utils/formatDate'

export default {
  name: 'Reply',
  props:{
    replyData: Array
  },
  data() {
    return {
      createAt: ''
    }
  },
  filters: {
    getLocalDateTime(dateTime) {
      return getDateTime(dateTime,3)
    }
  },
  methods: {
    
  }
  
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/markdown.css';
@import '@/assets/styles/common.scss';
.reply-container {
  margin-top: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: $shadow;
  .reply-count {
    padding: 20px 30px;
    font-weight: bold;
    font-size: 20px;
    border-bottom: $border;
  }

  .reply-list li{
    padding: 15px 20px 0px 20px;
    border-bottom: $border;
    .answerer-info {
      height: 40px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 15px;
      .login-name{ 
        font-weight: bold;
      }
      
      .avatar {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        img{
          width: 100%;
          border-radius: 50%;
        }
      }

      .reply-time,
      .floor-count{
        
        font-size: 13px;
        margin-left: 10px;
      }

      .reply-time{
        margin-left: 40px
      }

      .floor-count{
        font-size: 12px;
        background: $nodeGreen;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
      }

    }

    P {
      margin-top: 10px;
      margin-left: 40px;
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

@media screen and (max-width: 768px) {
  .reply-container{
    margin-top: 10px;
  }
}
</style>



