<template>
  <div class="vipcard">
    <div class="header">
      <router-link to="/my"><</router-link>
      会员中心
    </div>
    <div class="main">
      <p class="p2">为账户 <span>{{phone}}</span> 购买会员</p>
      <div class="info1">
        <p class="p1" style="padding-left: 0">
          <span >会员特权</span><span>会员说明 > </span>
        </p>
        <div class="div1">
          <img src="./img/下载2.jpeg" alt="">
          <div>
            <p>减免配送费</p>

            <p>每月减免30单，每日可减免3单，每单最高减4元，蜂鸟专送专享</p>
          </div>
        </div>
        <div class="div1">
          <img src="./img/下载.jpeg" alt="">
          <div><p>减免配送费</p>
            <p>每月减免30单，每日可减免3单，每单最高减4元，蜂鸟专送专享</p>
          </div>
        </div>
      </div>
      <div class="info2">
        <p class="p1" style="border-bottom: 1px solid #f5f5f5 ">开通会员</p>
        <div class="div2">
          <span>1个月 <span style="color: #f50">￥20</span></span>
          <span class="span3" @click="buy">购买</span>
        </div>
      </div>
      <div>
        <p class="p1" style="margin-bottom: 0.2rem"><span>购买会员</span><span>使用卡号卡密 ></span></p>
        <p class="p1"><span>购买记录</span><span>开发票 ></span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vipcard",
    data(){
      return{
        phone:""
      }
    },
    created(){
      if(this.$route.params.phone){
        this.$store.state.val=this.$route.params.phone
      }

      this.phone=this.$store.state.val
    },
    methods:{
      buy(){
       this.$router.push({
         name:'pay'
       })
      }
    },
  }
</script>

<style scoped>
  .vipcard {
    width: 100%;
    height: 8.3375rem;
    background-color: #f5f5f5;
    overflow: hidden;
    font-weight: lighter;
  }

  .header {
    width: 100%;
    height: 0.57rem;
    background-color: #3190e8;
    line-height: 0.57rem;
    text-align: center;
    color: white;
    font-size: 0.22rem;
    position: relative;
  }

  .header a {
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }

  .p2 {
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.18rem;
    font-weight: lighter;

  }

  .p2 span {
    font-weight: bolder;
    color: black;
  }

  .info1 {
    height: 3rem;
    background-color: white;
    padding-left: 0.2rem;
    margin-bottom: 0.2rem;
  }

  .info2 {
    margin-bottom: 0.2rem;
  }

  .p1 {
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: white;
    padding-left: 0.2rem;
    overflow: hidden;

  }

  .p1 span:first-child {
    font-size: 0.2rem;
    color: #333;
  }

  .p1 span:last-child {
    font-size: 0.17rem;
    color: #999;
    float: right;
    margin-right: 0.2rem;
  }

  .div1 {
    border-top: 1px solid #f5f5f5;
    height: 1.2rem;
  }

  .div2 {
    height: 0.75rem;
    line-height: 0.75rem;
    background-color: white;
    padding-left: 0.2rem;
    overflow: hidden;
  }

  .span3 {
    float: right;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0 0.18rem;
    margin-top: 0.2rem;
    margin-right: 0.2rem;
    border: 1px solid #f60;
    border-radius: 0.1rem;
    color: #f60;
    font-weight: lighter;
  }

  .div1 > img {
    width: 0.46rem;
    height: 0.53rem;
    float: left;
    margin-right: 0.2rem;
    margin-top: 0.2rem;
  }

  .div1 p:first-child {
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    color: #333;
    font-size: 0.2rem;
    opacity: 0.87;
  }

  .div1 p:last-child {
    color: #999;
    font-size: .15rem;
    padding-right: 0.4rem;

    font-weight: lighter;
  }
</style>
