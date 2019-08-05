<template>
  <div class="download-code-container">
    <h3>官方客户端下载</h3>
    <div class="qrcode">
      <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

  .download-code-container{
    width: 200px;
    background: #fff;
    border-radius: 10px;
    box-shadow: $shadow;

    @media screen and (max-width: 768px) {
      display: none;
    }
    > h3 {
      padding: 18px;
      font-size: 15px;
      font-weight: bold;
      border-bottom: $border
    }
    > .qrcode {
      padding: 20px;
      >img {
        width: 100%
      }
    }

  }
</style>

