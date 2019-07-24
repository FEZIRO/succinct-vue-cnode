<template>
<div class="toplist-container">
  <div class="topic-list" v-if="topicListData"> 
    <div class="current-tab-mobile" >{{this.$store.state.tag[this.$route.params.tab]}}</div>
    <TopicItem class="item" 
      :item-data="item"
      v-for="item of topicListData"
      :key="item.id"
    ></TopicItem>
    <Pagination class="pagination"
      @page-change="getCurrentPageData"></Pagination>
  </div>
  <!-- <div class="loading-container" v-else>
    <Loading></Loading>
  </div> -->
</div>
  
</template>

<script>
import { getDate } from '../utils/formatDate';
import { requestTopics } from '@/utils/requestApi';
import TopicItem from '@/components/TopicItem';
import Pagination from '@/components/Pagination';
import Loading from '@/components/Loading';

export default {
  name: 'TopicList',
  components: {
    TopicItem,
    Pagination,
    Loading
  },
  data () {
    return {
      topicListData: null 
    }
  },
  methods: {
    //根据tab的名字获取相应tab的内容
    getData(queryParams) {
      requestTopics(queryParams)
      .then((res)=>{
        this.topicListData = res;
        window.scrollTo(0,0);
      });
     
    },

    //获取当前页数的数据
    getCurrentPageData(currentPage) {
      console.log(currentPage);
      if(currentPage >= 1){
        this.getData({
          tab:this.$route.params.tab,
          page: currentPage,
        })
      }
      
    },
  },
  watch: {
    '$route.params.tab'(newVal){
      //切换路由时同时监听路由参数tab的变化来获取对应的tab的内容
      this.getData({
        tab: newVal,
        page: 1
      });
    },
  },
  mounted () {
    this.getData({
        tab: this.$route.params.tab,
        page: 1
      });
  }
  
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';
.toplist-container{
  position: relative;
 

  .loading-container{
    width: 100%;
    background: #fff;
    position: absolute;
    height: 500px;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .topic-list {
    width: 100%;
    border-radius: 10px;
    box-shadow: $shadow;
    box-sizing: border-box;
    background: #fff;
    
    display: flex;
    flex-direction: column;
    
    .item:hover {
      background: #f5f5f5;
      cursor: pointer;
      transition: all .3s;
    }

    .item:first-child:hover{
      border-radius: 10px 10px 0 0;
    }

    .item:last-child:hover{
      border-radius: 0 0 10px 10px;
    }

    .pagination{
      margin: 20px auto;
    }

    .current-tab-mobile{
      display: none;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: left;
      text-indent: 25px;
      border-bottom: $border;
      color: #000;
      font-weight: bold;
      margin-right: 40px;
    }

    @media screen and (max-width: 768px) {
      .pagination{
        margin: 10px auto;
      }

      .current-tab-mobile{
        display: block
      }
    }
  }
}
  
</style>
