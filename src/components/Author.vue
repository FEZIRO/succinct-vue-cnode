<template>
  <div class="container">
    <div class="title">作者</div>
    <div class="author">
      <div class="avatar">
        <img class="avatat-img"  alt=""/>
      </div>
    </div>
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
.container {
  padding: 10px;
  border-radius: 10px;
  
  .title {
    font-size: 18px;
    font-weight: bold;
    border-bottom:1px solid rgba(0, 0, 0, .05);
  }
  .author {
    .avatar{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: red;
      .avatar-img {
        width: 100%
      }
    }
  }
}
</style>
