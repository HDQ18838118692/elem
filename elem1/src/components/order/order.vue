<template>
  <div>
    <div class="or_head">
      <div class="or_head1">
        <div @click="shop1"><</div>
        <div>确认订单</div>
        <div>
          <router-link to="#">登录|注册</router-link>
        </div>
      </div>
    </div>
    <div class="or_head2">
      <router-link to="#">
        <div class="or_head3">
          <img src="./img/1.png" alt="">
          <span>请添加一个收货地址</span>
          <span class="or_head4"> ></span>
        </div>

      </router-link>
      <div class="or_head5"></div>
    </div>
    <div class="or_head6"></div>

    <div class="or_head7">
      <div class="or_head71"></div>
      <div class="or_head72">
        <div class="or_head721">送达时间</div>
        <div class="or_head722">
          <div class="or_head723">尽快送达|预计22：19</div>
          <div class="or_head724">
            蜂鸟专送
          </div>
        </div>
      </div>
    </div>
    <div class="or_body1"></div>
    <div class="or_body2">
      <div class="or_body3">
        <span>支付方式</span>
        <span>在线支付&nbsp></span>
      </div>
      <div class="or_body4">
        <span>红包</span>
        <span>暂时只在饿了吗APP中支持</span>
      </div>
    </div>

    <div class="or_body5">

    </div>

    <div class="or_foot1">
        <div class="or_foot2">
          <div class="or_foot3">
            <img src="//elm.cangdu.org/img/16018a5c08533.jpeg" alt="">
            <span>效果演示</span>
          </div>
        </div>
    </div>
        <div>
          <ul>
            <li>
              <span>1-12</span>
              <span>x&nbsp1</span>
              <span>￥21</span>
            </li>
            <li>
              <span>1-12</span>
              <span>x&nbsp1</span>
              <span>￥21</span>
            </li>
            <li>
              <span>1-12</span>
              <span>x&nbsp1</span>
              <span>￥21</span>
            </li>
            <li>
              <span>餐盒</span>
              <span style="margin-left: 3.1rem">￥12146</span>
            </li>
            <li>
              <span>配送费</span>
              <span style="margin-left: 3.1rem">￥4</span>
            </li>
            <li>
            <span>订单￥12211</span>
            <span>待支付</span>
          </li>
            <li class="li11">
              <span>￥12211</span>
            </li>
          </ul>

      </div>
    <div class="or_foot4">

    </div>
    <div class="or_foot11">
      <div class="or_foot12">
        <router-link :to="{name:'beizhu'}">
        <span>订单备注</span>
        <span>口味、偏好等&nbsp&nbsp></span>
        </router-link>
      </div>
    </div>
    <div class="or_foot21">
      <div  class="or_foot22">
        <router-link :to="{name:'fp'}">
       <span>发票抬头</span>
        <span>不需要开发票&nbsp></span>
        </router-link>
      </div>
    </div>
    <div class="last">

    </div>
    <div class="last1">
      <div class="last2">
        <span>待支付￥12211</span>
      </div>
      <div class="last3">
        确认下单
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "order",
    created(){

    },
    methods:{
      shop1(){
        this.$router.push({
          name:"sp"
        })
      }
    }
  }
</script>

<style scoped>

  .last1{
    height: 0.6rem;
    background: black;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .last2{
    float: left;
    line-height: 0.6rem;
    margin-left: 0.2rem;
  }
  .last2 span{
    color: white;
  }
  .last3{
    width: 1.6rem;
    float: right;
    background: #56d176;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.22rem;
    color: white;
  }
  .last{
    height: 0.9rem;
    background: #f5f5f5;
  }
  .or_foot11,.or_foot21{
    width: 100%;
  }
  .or_foot12,.or_foot22{
    width: 92%;
    margin: 0 auto;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .or_foot12 span:nth-child(1){
font-size: 0.22rem;
  }
  .or_foot12 span:nth-child(2){
    margin-left: 2rem;
    font-size: 0.18rem;
    color: lightgray;
  }
  .or_foot22 span:nth-child(1){
    font-size: 0.22rem;
  }
  .or_foot22 span:nth-child(2){
    margin-left: 2rem;
    font-size: 0.18rem;
    color: lightgray;
  }
  .or_foot4{
    height: .1rem;
    width: 100%;
    background: #f5f5f5;
  }
  .li11 span{
    margin-left: 3.5rem;
    color: orange;
  }

  li{
    width: 92%;
    margin: 0 auto;
    margin-top: 0.3rem;
  }
  li span:nth-child(2){
margin-left: 2.4rem;
    color: orange;
  }
  li span:nth-child(3){
    margin-left: 0.7rem;
  }
  .or_foot1{
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
  }
  .or_foot2{
    width: 92%;
    margin: 0 auto;
  }
  .or_foot3 img{
    width: 0.4rem;
    height: 0.4rem;
    vertical-align: -0.1rem;
  }
  .or_foot3{
   height: 1rem;
    line-height: 1rem;
  }
  .or_foot3 span{
    margin-left: 0.1rem;
    font-size: 0.22rem;
  }
  .or_body5{
    height: .1rem;
    width: 100%;
    background: #f5f5f5;
  }
  .or_body2 {
    width: 94%;
    margin: 0 auto;
  }

  .or_body3 span:nth-child(1) {
    float: left;
    color: #333333;
  }

  .or_body3 span:nth-child(2) {
    float: right;
    font-size: 0.18rem;
    color: lightgray;
    font-weight: 100;
  }

  .or_body3 {
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
    padding: 0.2rem 0;
  }

  .or_body4 span:nth-child(1) {
    color: lightgray;
    font-size: 0.18rem;
    float: left;
  }

  .or_body4 span:nth-child(2) {
    color: lightgray;
    font-size: 0.18rem;
    float: right;
    font-weight: 100;
  }

  .or_body4 {
    overflow: hidden;
    padding: 0.2rem 0;

  }

  .or_body1 {
    height: 0.1rem;
    width: 100%;
    background: #f5f5f5;
  }

  .or_head71 {
    height: 1.2rem;
    background: blue;
    width: 0.08rem;
    display: inline-block;
  }

  .or_head72 {
    display: flex;
  }

  .or_head721 {
    margin-left: 0.3rem;
    font-size: 0.22rem;
    font-weight: 800;
    line-height: 1.2rem;
  }

  .or_head722 {
    margin-left: 1.4rem;
    margin-top: 0.3rem;
  }

  .or_head724 {
    margin-top: 0.25rem;
    font-size: 0.16rem;
    margin-left: 1.15rem;
    background: #3190e8;
    padding: 0.05rem;
    color: white;
    font-weight: 100;
  }

  .or_head723 {
    color: #3190e8;
  }

  .or_head7 {
    display: flex;
  }

  .or_head2 a {
    display: block;
    width: 94%;
    height: 1rem;
    border-bottom: ;
  }

  .or_head3 img {
    width: 0.25rem;
    vertical-align: -0.05rem;
  }

  .or_head4 {
    margin-left: 2.1rem;
  }

  .or_head3 {
    line-height: 1rem;
  }

  .or_head5 {
    background: url("./img/2.png");
    height: 0.02rem;
    background-size: 0.3rem;
  }

  .or_head6 {
    height: 0.1rem;
    background: #f5f5f5;
  }

  .or_head {
    height: 0.6rem;
    background: #3190e8;
  }

  .or_head1 {
    width: 94%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .or_head1 div {
    line-height: 0.6rem;
    font-size: 0.22rem;
    color: white;
  }

  .or_head1 div:nth-child(3) {
    font-size: 0.18rem;
  }

  .or_head1 div:nth-child(3) a {
    color: white;
  }
</style>
