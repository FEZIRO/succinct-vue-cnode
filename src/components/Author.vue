<template>
  <div class="author-container">
    <div class="title">作者</div>
    <div class="author">
      <div class="avatar">
        <img class="avatar-img" 
          :src="authorData.avatar_url" 
          alt=""/>
      </div>
      {{authorData.loginname}}
    </div>
    <div class="score">积分{{authorData.score}}</div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    authorData: Object
  }
}
</script>

<style lang="scss" scoped>
.author-container {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background: #fff;
  position: relative;
  .title {
    width: 100%;
    padding: 18px;
    font-size: 15px;
    font-weight: bold;
    border-bottom:1px solid rgba(0, 0, 0, .05);
  }
  .author {
    height: 50px;
    padding: 10px;
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
    padding: 10px 15px;
  }
}
</style>
