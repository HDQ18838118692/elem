<template>
<div class="dingdan">
  <div class="header">
    <router-link to="/"><</router-link>
    订单列表
  </div>
</div>
</template>

<script>
    export default {
        name: "dingdan"
    }
</script>

<style scoped>
  .dingdan {
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
</style>
