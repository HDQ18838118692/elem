<template>
  <div class="jifen">
    <div class="main">
    <h2>请重新进入</h2>
    <p>请返回后重新进入积分商城~</p>
    <img src="./img/download.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "jifen"
  }
</script>

<style scoped>
  .jifen {
    width: 100%;
    height: 8.3375rem;
    background-color: #f5f5f5;
    overflow: hidden;
  }

  .main {
    width: 100%;
    height: 3.1rem;
    text-align: center;
    margin-top: 2.5rem;
  }

  h2 {
    color: #0d7fd5;
    margin-bottom: 0.22rem;

  }

  p {
    font-size: 0.2rem;
    margin-bottom: 0.2rem;
    color: #666;
  }
  img{
    width: 2.1rem;
  }
</style>
