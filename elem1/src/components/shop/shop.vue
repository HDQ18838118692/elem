<template>
  <div>
    <transition name="slide-fade">
    <router-view></router-view>
    </transition>

    <ul class="footer">
      <router-link to="/shop/waimai">
        <li class="li1" @click="bian">

          <img src="./img/1.png" alt="" class="img1" style="display: none">
          <img src="./img1/1.png" alt="" class="img2" style="display: block">
          <span>外卖</span>
        </li>
      </router-link>
      <router-link to="/shop/search">
        <li class="li1" @click="bian">
          <img src="./img/2.png" alt="" class="img1">
          <img src="./img1/2.png" alt="" class="img2">
          <span>搜索</span></li>
      </router-link>
      <router-link to="/dingdan">
        <li class="li1" @click="bian">
          <img src="./img/3.png" alt="" class="img1">
          <img src="./img1/3.png" alt="" class="img2">
          <span>订单</span></li>
      </router-link>
      <router-link to="/my">
        <li class="li1" @click="bian">
          <img src="./img/4.png" alt="" class="img1">
          <img src="./img1/4.png" alt="" class="img2">
          <span>我的</span>
        </li>
      </router-link>
    </ul>


  </div>

</template>

<script>
  export default {
    name: "shop",
    data() {
      return {
        src1: ""
      }
    },
    methods: {
      bian(e) {
        $(".img2").css("display", 'none');
        $(".img1").css("display", 'block');
        e.currentTarget.children[0].style.display = "none"
        e.currentTarget.children[1].style.display = "block"

      }
    }
  }
</script>

<style scoped>
  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {

    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    /*transform: translateX(50px);*/
    opacity: 0;
  }
  .footer {
    width: 100%;
    height: 0.57rem;
    position: fixed;
    /*text-align: center;*/
    z-index: 10;
    bottom: 0;
    overflow: hidden;
    background-color: white;
    border-top: 0.5px solid #f5f5f5;
  }

  li {
    width: 25%;
    text-align: center;
    float: left;

  }

  li span {
    font-size: 0.15rem;
    color: #666;
    display: block;
    padding-top: 0.01rem;
    margin-left: -0.02rem;
    height: 0.2rem;
    line-height: 0.22rem;
    font-weight: 200;

  }

  li img {
    text-align: center;
    height: 0.25rem;
    margin-top: 0.1rem;
    margin-left:0.45rem;
    display: block;
  }

  li .img2 {
    display: none;
  }
</style>
