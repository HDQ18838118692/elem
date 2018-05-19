<template>
  <div class="benefit">
    <div class="header">
      <router-link to="/my"><</router-link>
      我的优惠
    </div>
    <p class="head">
      <router-link to="/benefit"><span @click="bian" class="span1" style="color: #3190e8"> 红包</span></router-link>
      <router-link to="/quan"><span class="span1" @click="bian"> 商家优惠券</span></router-link>
    </p>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: "benefit",
    data() {
      return {
        datas: '',
        nums: "",
        arrs: []
      }
    },
    created() {

    }, methods: {
      bian(e) {
        $(".span1").css({
          color: "black"
        });
        e.target.style.color = "#3190e8"
      }
    }
  }
</script>

<style scoped>
  .benefit {
    height: 8.3375rem;
    background-color: #f5f5f5;
    position: relative;
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

  .head {
    height: 0.55rem;
    line-height: 0.55rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
    color: #333;
    font-weight: 200;
  }

  .p1 span:first-child {
    color: red;
  }

  .p1 span:last-child {
    float: right;
    margin-right: 0.2rem;
    color: #3190e8;
  }


</style>
