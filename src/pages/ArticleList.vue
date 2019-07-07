<template>
  <div class="container">
    
    <main v-if="isListShow">
      <NavBar :shadow="true" class="nav-bar"
        v-show="this.$store.state.currentDevice === 'computer'"></NavBar>
      <div class="article-container"> 
        <ArticleItem class="item" 
          :item-data="item"
          v-for="item of tabAllData"
          :key="item.id"
          ></ArticleItem>
        <Pagination class="pagination"
          @page-change="getCurrentPageData"></Pagination>
      </div>
    </main>
    <Loading class="loading" v-else></Loading>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem';
import Pagination from '@/components/Pagination';
import Loading from '@/components/Loading';

import NavBar from '@/components/NavBar';
import { requestTopics } from '@/utils/requestApi';

export default {
  name: 'ArticleList',
  data () {
    return {
      tabAllData: [],
      isListShow: false,
      isSmall: false,
    }
  },
  components: {
    ArticleItem,
    Pagination,
    NavBar,
    Loading
  },
  methods: {
    //根据tab的名字获取相应tab的内容
    getData(queryParams) {
      requestTopics(queryParams)
      .then((res)=>{
        this.tabAllData = res;
        this.isListShow = true;
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
  mounted() {
    this.getData({
        tab: this.$route.params.tab,
        page: 1
      });
  },
}
</script>

<style lang="scss" scoped>
.container{
  position: relative;
  main {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    position: absolute;
    top: 60px;
    background: #eee;
    padding: 20px;
    @media screen and (max-width: 768px) {
      padding: 10px
    }

    .nav-bar{
      position: fixed;
    }
    .article-container {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, .06);
      box-sizing: border-box;
      background: #fff;
      margin-left: 240px;
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
  }
}
</style>



