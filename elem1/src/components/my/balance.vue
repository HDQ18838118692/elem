<template>
  <div class="balance">
    <div class="header">
      <router-link to="/my"><</router-link>
      我的余额
    </div>
    <div class="main">
      <div>
        <p class="p1"><span class="span1">当前余额</span><span class="span2">余额说明</span></p>
        <p class="p2"><span class="span3">0.00</span>元</p>
        <div class="btn">
          <button>提现</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="p3">交易明细</p>
    </div>

    <div class="img">
      <img src="./img/ren.png" alt="">
      <p>暂无明细记录</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "balance"
  }
</script>

<style scoped>
  .balance {
    height: 8.45rem;
    background-color: #f5f5f5;
    font-weight: 100;
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

  .main {
    height: 2.1rem;
    background-color: #3190e8;
    text-align: center;

  }

  .main > div {
    display: inline-block;
    margin-top: 0.1rem;
    width: 95%;
    height: 1.9rem;
    background-color: white;
    border-radius: 2%;
  }

  .span1 {
    float: left;
    padding-left: 0.15rem;
    color: #666;

  }

  .span2 {
    float: right;
    padding-right: 0.15rem;
    color: #3190e8;
  }

  .p1 {
    margin-top: 0.2rem;
    overflow: hidden;
    font-size: 0.17rem;
    font-weight: 100;
  }

  .p2, .p3 {
    float: left;
    padding-left: 0.15rem;
    margin-top: 0.2rem;
    color:#ccc ;
  }

  .p2 .span3 {
    font-size: 0.5rem;

    color: black;
  }

  .btn {
    text-align: center;
    margin-top: 0.85rem;

  }

  button {
    width: 96%;
    height: 0.58rem;
    background-color: #ccc;
    color: white;
    border-radius: 3%;
    font-size: 0.2rem;
  }
  .img{
    text-align: center;
    margin-top: 1rem;

  }
  .img img{
    width: 2.33rem;
    height:1.47rem;
  }
  .img p{
    margin-top: 0.2rem;
    color: #666;
    font-weight: 200;
  }
</style>
