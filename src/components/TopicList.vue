<template>
  <div class="topic-list" v-if="topicListData"> 
    <TopicItem class="item" 
      :item-data="item"
      v-for="item of topicListData"
      :key="item.id"
    ></TopicItem>
    <Pagination class="pagination"
      @page-change="getCurrentPageData"></Pagination>
  </div>
</template>

<script>
import { getDate } from '../utils/formatDate';
import { requestTopics } from '@/utils/requestApi';
import TopicItem from '@/components/TopicItem';
import Pagination from '@/components/Pagination';

export default {
  name: 'TopicList',
  components: {
    TopicItem,
    Pagination
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
 .topic-list {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, .06);
      box-sizing: border-box;
      background: #fff;
      margin-left: 220px;
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

      @media screen and (max-width: 760px) {
         margin-left: 0;
         .pagination{
          margin: 10px auto;
        }
      }
    }
</style>
