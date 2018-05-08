<template>
  <div class="mine">
    <div class="header">
      <router-link to="/"><</router-link>
      我的
    </div>
    <router-link to="/usermes"><div class="phone">
      <img :src= "imgs" alt="" class="img1">
      <p class="p1">{{phone}}</p>
      <p class="p2"><img src="./img/bindphone.png" alt="" class="img2">暂无绑定手机号</p>
      <span> ></span>
    </div>
    </router-link>
    <ul class="my">
      <li>
        <p><span class="span1">0.00</span>元</p>
        <span>我的余额</span>
      </li>
      <li>
        <p><span class="span2">3</span>个</p>
        <span>我的优惠</span>
      </li>
      <li>
        <p><span class="span3">0</span>分</p>
        <span>我的积分</span>
      </li>
    </ul>
    <ul class="yh">
      <li>
        <img src="./img/订单.png" alt="">
        <p><span>我的订单</span><span>
          >
        </span></p>
      </li>
      <li>
        <img src="./img/积分.png" alt="">
        <p><span>积分商城</span><span>
          ></span>
        </p>
      </li>
      <li>
        <img src="./img/huiyuan.png" alt="">
        <p><span>饿了么会员卡</span>
          <span>
          >
          </span></p>
      </li>
    </ul>
    <ul class="yh">
      <li><img src="./img/服务.png" alt="">
        <p><span>服务中心</span>
          <span>
          >
          </span>
        </p></li>
      <li>
        <img src="./img/elmlogo.jpeg" alt="">
        <p><span>下载饿了么APP</span>
          <span>
          >
          </span></p></li>
    </ul>

  </div>
</template>

<script>
  var arr1=[];
  export default {
    name: "my",
    data(){
      return{
        phone:15518983573,
        imgs:require("./img/people.png")

      }
    },
    created(){
      // arr1.push({phone:15518983573});
      if(JSON.parse(localStorage.getItem("arr"))){
        this.phone=JSON.parse(localStorage.getItem("arr"))
      }
      localStorage.setItem("arr",JSON.stringify(this.phone));
    }
  }
</script>

<style scoped>
  .mine {
    width: 100%;
    height: 7.7675rem;
    background-color: #f5f5f5;
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

  .phone {
    width: 100%;
    height: 1.1rem;
    color: #fff;
    background-color: #3190e8;
    overflow: hidden;
  }

  .phone .img1 {
    width: 0.73rem;
    height: 0.73rem;
    margin: 0.1rem 0.2rem;
    float: left;

  }

  .phone .p1 {
    font-size: 0.22rem;
    margin-top: 0.2rem;
  }

  .phone .p2 {
    font-size: 0.15rem;
    margin-top: 0.1rem;
  }

  .p2 img {
    vertical-align: middle;
    margin-right: 0.1rem;
  }

  .phone span {
    float: right;
    margin: -0.5rem 0.15rem;
    font-size: 0.3rem;
  }

  .my {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
    text-align: center;
    background-color: white;
    color: #666;
    font-size: 0.18rem;
  }

  .my li {
    float: left;
    width: 33%;
    height: 1.1rem;
    border-left: 1px solid #f1f1f1;
  }

  .my p {
    margin: 0.25rem 0 0.15rem;
  }

  .span1 {
    color: #f90;
    font-size: 0.35rem;
  }

  .span2 {
    color: #ff5f3e;
    font-size: 0.35rem;
  }

  .span3 {
    color: #6ac20b;
    font-size: 0.35rem;
  }

  .yh {
    margin-top: 0.13rem;
    width: 100%;
    background-color: white;
    color: rgb(51,51,51);

  }

  .yh p {
    display: inline-block;
    width: 85%;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
  }

  .yh p span:nth-child(2) {
    float: right;
    color: rgb(187, 187, 187);
  }

  .yh li {
    height: 0.5625rem;
    line-height: 0.5625rem;
  }

  .yh li img {
    vertical-align: 0.17rem;
    margin: 0 0.02rem 0 0.2rem;
    width: 0.22rem;
    height: 0.25rem;
  }
</style>
