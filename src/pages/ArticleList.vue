<template>
  <div>
    <Header></Header>
    <main>
      <NavBar></NavBar>
      <section >
        <div class="article-container" v-if="isListShow"> 
          <ArticleItem class="item" 
            :itemData="item"
            v-for="item of tabAllData"
            :key="item.id"></ArticleItem>
        </div>
        <Pagination @page-change="getCurrentPageData"></Pagination>
      </section>
    </main>
  </div>
</template>

<script>
import ArticleItem from '../components/ArticleItem';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { requestTopics } from '../utils/requestApi';

export default {
  name: 'ArticleList',
  data () {
    return {
      tabAllData: [],
      isListShow: false,
      defaultTab: 'all',
      isSmall: false
    }
  },
  components: {
    ArticleItem,
    Pagination,
    Header,
    NavBar
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

    //监听变化
    onResizeChange() {
      window.addEventListener('resize',(e)=>{
        console.log(document.body.clientWidth);
        if(document.body.clientWidth<768){
          this.isSmall = true
        }else{
          this.isSmall = false;
        }
      })
    },
    
    //获取当前分页器的页数
    getCurrentPageData(currentPage) {
      console.log(currentPage);
      // this.getData({
      //   tab:this.$route.params.tab,
      //   page:currentPage
      // })
    }
  },
  mounted() {
    this.getData({
      tab:this.$route.params.tab,
      page:1 
    });
    this.onResizeChange();
  },
  watch: {
    '$route.params.tab' (newVal){
      //切换路由时同时监听路由参数tab的变化来获取对应的tab的内容
      this.getData({
        tab: newVal,
        page:1
      });
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 320px;
    background: #eee;
    padding: 10px;
    .article-container {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, .06);
      box-sizing: border-box;
      background: #fff;
      
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
    
    }

    .pagination{
      padding: 15px;
    }
  }
}
</style>



