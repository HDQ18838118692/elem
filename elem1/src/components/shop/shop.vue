<template>
  <div>
    <router-view></router-view>

      <ul class="footer">
        <router-link to="/shop/waimai">
          <li><img src="" alt=""><span>外卖</span></li>
        </router-link>
        <router-link to="/shop/search">
          <li><img src="" alt=""><span>搜索</span></li>
        </router-link>
        <router-link to="/dingdan">
          <li><img src="" alt=""><span>订单</span></li>
        </router-link>
        <router-link to="/my">
          <li><img src="" alt=""><span>我的</span></li>
          </router-link>
      </ul>




</div>

</template>

<script>
  export default {
    name: "shop"
  }
</script>

<style scoped>


  .footer{
    width: 100%;
    height: 0.57rem;
    line-height: 0.57rem;
    position: fixed;
    z-index: 10;
    bottom: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-top: 0.5px solid #f5f5f5;
  }

  a {
    display: block;
    float: left;
    color: #666;

  }
  li{

  }
  li span{
    font-size: 0.15rem;
    color: #666;
  }
</style>
