<template>
  <div class="benefit">
    <div class="header">
      <router-link to="/"><</router-link>
      我的优惠
    </div>
    <p class="head"><span> 红包</span><span>商家优惠券</span></p>
    <div class="main">
      <p class="p1">有 <span>3</span>个红包即将到期 <span>红包说明</span></p>
      <div class="div1" v-for="data in datas">
        <div class="left">
          <p style="color: red;font-size: 0.22rem
"> ￥ <span style="font-size: 0.45rem">{{Number(data.amount).toFixed(1)}}</span></p>
          <p v-if="data.description_map.sum_condition ">{{data.description_map.sum_condition }}</p>
        </div>
        <div class="right">
          <p style="font-size: 0.22rem"><span style="color: #666">分享红包</span>
            <span style="color: red;float: right;margin-right: 0.2rem">{{data.description_map.validity_delta

}}</span></p>
          <p class="phone" style="margin-top: 0.1rem">{{data.description_map.validity_periods}}</p>
          <p class="phone" v-if="data.description_map.phone " >{{data.description_map.phone}}</p>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "benefit",
    data(){
      return{
        datas:''
      }
    },
    created(){
      let url ="http://cangdu.org:8001/promotion/v2/users/1/hongbaos?limit=20&offset=0";
      Vue.axios.get(url).then((res)=>{
        console.log(res.data)
        this.datas= res.data;
      })
    }
  }
</script>

<style scoped>
  .benefit {
    height: 8.3375rem;
    background-color: #f5f5f5;
  }

  .phone {
    height: 0.25rem;
    line-height: 0.25rem;
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

  .main {
    padding-left: 0.2rem;
  }

  .p1 {
    height: 0.55rem;
    line-height: 0.55rem;
    font-size: 0.15rem;
    color: #666;
    font-weight: 100;
  }

  .p1 span:first-child {
    color: red;
  }

  .p1 span:last-child {
    float: right;
    margin-right: 0.2rem;
    color: #3190e8;
  }

  .div1 {
    height: 1.25rem;
    width: 96%;
    background-color: white;
    border-radius: 0.1rem;
    border-top: 1px solid red;
    overflow: hidden;
    color: #999;
    font-size: 0.15rem;
    font-weight: 100;
    margin-top: 0.1rem;
  }

  .left {
    float: left;
    height: 0.725rem;
    margin-top: 0.3rem;
    width: 1rem;
    border-right: 1px dotted #ccc;
    padding-left: 0.2rem;
  }

  .right {
    float: left;
    height: 0.725rem;
    margin-top: 0.3rem;
    padding-left: 0.2rem;
    width: 2.8rem;
  }
</style>
