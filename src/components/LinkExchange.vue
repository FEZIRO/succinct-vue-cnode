<template>
  <div class="link-container">
    <h3>{{title}}</h3>
    <a :href="item.link" class="link" v-for="item in links" :key="item.id">
      <img :src="item.logoUrl" class="link-logo"/>
    </a>
  </div>
</template>

<script>
export default {
  name:'LinkExchange',
  data () {
    return {
      title:'友情社区',
      links:[
        {
          id:'ruby-china',
          logoUrl:'https://static2.cnodejs.org/public/images/ruby-china-20150529.png',
          link:'https://ruby-china.org'
        },{
          id:'golangtc',
          logoUrl:'https://static2.cnodejs.org/public/images/golangtc-logo.png',
          link:'https://golangtc.com'
        },{
          id:'learnku',
          logoUrl:'https://static2.cnodejs.org/public/images/phphub-logo.png',
          link:'https://learnku.com/laravel'
        },{
          id:'testerhome',
          logoUrl:'https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK',
          link:'https://testerhome.com'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

  .link-container{
    width: 250px;
    background: #fff;
    border-radius: 10px;
    box-shadow: $shadow;
    > h3{
      padding: 18px;
      text-align: left;
      font-size: 15px;
      font-weight: bold;
      border-bottom: $border;
    }
    > a {
      padding: 5px 0;
      display: block;
      height: 50px;
      margin-left: 20px;
      width: 100px;
      > img{
        width: 100%;
      }
    }
  }
</style>
