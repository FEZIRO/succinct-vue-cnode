<template>
  <div class="author-page">
    <AuthorSideBar :author-data="authorData" class="info"/>
  </div>
</template>

<script>
import { requestAuthorData } from '@/utils/requestApi';
import AuthorSideBar from '@/components/AuthorSideBar';
import { getDateTime } from '@/utils/formatDate'

export default {
  name: 'Author',
  data () {
    return {
      authorData:{}
    }
  },
  components: {
    AuthorSideBar 
  },
  methods: {
    getAuthorData() {
      requestAuthorData(this.$route.query.name)
        .then((res)=>{
          this.authorData = res ;
        })
    }
  },
  mounted() {
     this.getAuthorData()
  },
}
</script>

<style lang="scss" scoped>
.author-page{
  width: 100%;
  padding: 80px 15px 20px 15px;
}
</style>
