<template>
    <div class="topic-item-container" @click="getContent">
      <section class="title">
        <span class="tag top-tag" v-if="itemData.top">置顶</span>
        <span class="tag " v-else-if="itemData.good">精华</span>
        <span class="tag" v-else>{{tag[itemData.tab]}}</span>
        <h1>{{itemData.title}}</h1>
      </section>
      <section class="author">
        <div class="avator">
          <img class="avator-img" 
            :src="itemData.author.avatar_url" 
            :alt="itemData.author.loginname" />
          <div class="author-name">{{itemData.author.loginname}}</div>
        </div>
        <div class="create-at">发表于{{createAt}}</div>
      </section>
      <section class="count">
        <div class="visit-conut">{{itemData.visit_count}} 阅读量</div>
        <div class="reply-count">{{itemData.reply_count}} 回复</div>
      </section>
    </div>
</template> 

<script>
import { getDate,getDateTime } from '../utils/formatDate'

export default {
  name: 'TopicItem',
  props:{
    itemData: Object
  },
  data() {
    return {
      tag: this.$store.state.tag,
      createAt: ''
    }
  },
  methods: {
    getContent(){
      //console.log(this.itemData);
      this.$router.push({
        name:'articlecontent',
        params:{
          tab: this.$route.params.tab
        },
        query:{
          id: this.itemData.id,
          author: this.itemData.author.loginname
        }
      })
    }
    
  },
  mounted() {
    this.createAt = getDateTime(this.itemData.create_at,1)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';

.topic-item-container {
  min-height: 120px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  .title,
  .author,
  .count {
    display: flex;
    align-items: center;
  }

  .title {
    align-items: flex-start;
    line-height: 25px;
    .tag {
      width: 50px;
      height: 25px;
      line-height: 25px;
      margin-right: 5px;
      text-align: center;
      /* background: rgb(197,225,15); */
      background: $nodeGreen;
      border-radius: 10px;
      color:#fff;
      font-size: 13px;
      flex-shrink: 0;
    }
    .top-tag{
      /* background: rgb(108,194,74); */
      background: $nodeDeepGreen;
    }
    h1 {
      font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .author {
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    .avator {
      display: flex;
      align-items: center;
      margin-right: 5px;
      .avator-img{
        width: 20px;
        height: 20px;
        background-size: contain;
        border-radius: 50%;
      }
      .author-name{
        line-height: 20px;
        
        margin-left: 5px;
      }
    }

    .create-at {
      text-align: right;
      font-size: 13px;
      color:rgba(0, 0, 0, .5)
    }
  }

  .count {
    color: rgba(0, 0, 0, .5);
     font-weight: bold;
     justify-content: space-between;
    .visit-conut {
     
    }
    .reply-count {
      
    }
  }
}

@media screen and (max-width: 350px) {
  .author{
    .author-name { 
      width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

</style>
