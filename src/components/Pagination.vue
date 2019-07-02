<template>
  <div>
    <ul class="pagination">
      <li class="prev-page"
        :class="{disable: this.currentPage === 1}"
        @click="handlePrevClick(1) ">{{prevPage.icon}}</li>
      <li :class="currentPage === item ? 'page page-selected' : 'page'"
        v-for="(item,index) of pages"
        :key="index"
        @click="handlePageClick(item,index)">{{item}}</li>
      <li class="next-page"
        @click="handleNextClick(1)">{{nextPage.icon}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name:'Pagination',
  data () {
    return {
      prevPage: {
        icon:'<',
        name:'上一页'
      },
      nextPage: {
        icon:'>',
        name:'下一页'
      },
      pages: [1,2,3,4,5,6,7,'...'],
      currentPage: 1,
      isShowPrev: false,
      isShowNext: true,
      isClick: true
    }
  },
  methods: {
    //选择页数
    handlePageClick(currentPage,index) {
        if(currentPage >= 7 && currentPage !== '...'){  
          this.currentPage = currentPage;
          this.pages = [
            1,
            '...',
            currentPage-2,
            currentPage-1,
            currentPage,
            currentPage+1,
            currentPage+2,
            '...',
          ];
        }else if(currentPage >= 1 && currentPage !== '...'){
          this.currentPage = currentPage;
          this.pages = [1,2,3,4,5,6,7,'...'];
        }else if(index === 1){
          //上5页
          this.handlePrevClick(5);
        }else if(index === 7){
          //下5页
          this.handleNextClick(5);
        }
    },

    //上页 可设置页数
    handlePrevClick(pageSize) {
      let page = this.currentPage; 
      page = page - pageSize;
      if(page > 1 && page <= 7){
        this.pages = [1,2,3,4,5,6,7,'...'];
      }else if(page > 7){
        this.pages = [
            1,
            '...',
            page-2,
            page-1,
            page,
            page+1,
            page+2,
            '...',
          ]
      }
      
      this.currentPage = page;
    },
    
    //下页 可设置页数
    handleNextClick(pageSize) {
      let page = this.currentPage; 
      page = page + pageSize;
      if(page > 1 && page <= 7){
        this.pages = [1,2,3,4,5,6,7,'...'];
      }else if(page > 7){
        this.pages = [
            1,
            '...',
            page-2,
            page-1,
            page,
            page+1,
            page+2,
            '...',
          ]
      }
      
      this.currentPage = page;
    }
  },
  watch: {
    currentPage (newVal,oldVal){
      if(newVal !== oldVal){
        this.$emit('page-change',this.currentPage);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';
.pagination {
    height: 30px;
    margin-top: 15px;
    box-shadow: rgba(0, 0, 0, .06);

    .prev-page,
    .next-page,
    .page {
      display: inline-block;
      line-height: 30px;
      width: 30px;
      text-align: center;
      background: #fff;
      cursor: pointer;
      &:first-child {
        border-radius: 10px 0 0 10px;
      }
      &:last-child {
        border-radius: 0 10px 10px 0;
      }
    }

    .page-selected {
      color: $nodeGreen
    }

    .disable {
      color:#eee;
    }

    
  }

</style>
