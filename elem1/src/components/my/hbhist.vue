<template>
  <div class="hb">
    <div class="header">
      <span @click="go"><</span>
      历史红包
    </div>

    <div class="div1" v-for="data in datas">
      <div class="left">
        <p style="font-size: 0.22rem;margin-bottom: 0.2rem;
"> ￥ <span style="font-size: 0.45rem">{{Number(data.amount).toFixed(1)}}</span></p>
        <p v-if="data.description_map.sum_condition ">{{data.description_map.sum_condition }}</p>
      </div>
      <div class="right">
        <p style="font-size: 0.22rem"><span style="color: #666;font-weight: 200">普通红包</span>
          <img src="./img/kou.png" alt="" class="imgk"></p>
        <p class="phone" style="margin-top: 0.1rem">{{data.description_map.validity_periods}}</p>
        <p class="phone" v-if="data.description_map.phone ">{{data.description_map.phone}}</p>
      </div>
      <p v-if="data.limit_map" class="ps">{{data.limit_map.restaurant_flavor_ids}}</p>
    </div>

  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "hbhist",
    data() {
      return {
        nums: "",
        datas: ""
      }
    },
    created() {
      let url = "http://cangdu.org:8001/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0";
      Vue.axios.get(url).then((res) => {
        this.datas = res.data;
        this.nums = this.datas;
        console.log(this.nums)
      })

    },
    methods: {
      go() {
        history.go(-1);
      },
    },
  }
</script>

<style scoped>
  .hb {
    background-color: #f5f5f5;
    position: relative;
  }

  .imgk {
    position: absolute;
    right: 0.3rem;
    z-index: 555;
    width: 0.85rem;

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

  .header span {
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }

  .footer a {
    display: inline-block;
    width: 49%;
    float: left;
  }

  .footer div {
    color: #555;
    font-weight: 200;
    text-align: center;
  }

  .footer div:first-child {
    border-right: 1px solid rgb(245, 245, 245);
  }

  .phone {
    height: 0.25rem;
    line-height: 0.25rem;
  }

  .div1 {
    width: 92%;
    border-radius: 0.1rem;
    overflow: hidden;
    color: #999;
    font-size: 0.15rem;
    font-weight: 100;
    margin: 0.2rem 0 0.2rem 0.2rem;
    background: url("./img/bian.png") repeat-x white;
    background-size: 0.12rem 0.05rem;

  }

  .ps {
    margin-top: 1.5rem;
    background-color: #f9f9f9;
    padding-left: 0.2rem;
    height: 0.43rem;
    line-height: 0.43rem;

  }

  .left {
    float: left;
    height: 1.15rem;
    margin-top: 0.3rem;
    width: 0.9rem;
    padding: 0 0.2rem;
  }

  .right {
    float: left;
    height: 0.925rem;
    margin-top: 0.3rem;
    padding-left: 0.2rem;
    width: 2.8rem;
    border-left: 1px dotted #ccc;
  }

</style>


