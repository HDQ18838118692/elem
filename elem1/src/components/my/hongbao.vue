<template>
  <div style="position: relative">
    <div class="main">
      <p class="p1">有 <span style="color: red">3 </span>个红包即将到期 <span>红包说明</span></p>
      <div class="div1" v-for="data in datas">
        <div class="left">
          <p style="color: red;font-size: 0.22rem
"> ￥ <span style="font-size: 0.45rem">{{Number(data.amount).toFixed(1)}}</span></p>
          <p v-if="data.description_map.sum_condition ">{{data.description_map.sum_condition }}</p>
        </div>
        <div class="right">
          <p style="font-size: 0.22rem"><span style="color: #666">分享红包</span>
            <span style="color: red;float: right;margin-right: 0.2rem">{{data.description_map.validity_delta}}</span></p>
          <p class="phone" style="margin-top: 0.1rem">{{data.description_map.validity_periods}}</p>
          <p class="phone" v-if="data.description_map.phone ">{{data.description_map.phone}}</p>
        </div>
        <p v-if="data.limit_map" class="ps">{{data.limit_map.restaurant_flavor_ids}}</p>
      </div>


    </div>
    <router-link to="/hbhist"><p class="last">查看历史红包 ></p></router-link>
    <div class="footer">
      <router-link to="/exchange">
        <div>兑换红包</div>
      </router-link>
      <router-link to="/commend">
        <div>推荐有奖</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

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
      let url = "http://cangdu.org:8001/promotion/v2/users/1/hongbaos?limit=20&offset=0";
      Vue.axios.get(url).then((res) => {
        this.datas = res.data;
        this.nums = this.datas;
        console.log(this.nums)
      })

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
  .last {
    text-align: center;
    margin-top: 0.4rem;
    font-size: 0.15rem;
    color: #999;
    font-weight: 100;
  }

  .footer {
    overflow: hidden;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #fff;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
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

  .div1 {
    width: 92%;
    border-radius: 0.1rem;
    overflow: hidden;
    color: #999;
    font-size: 0.15rem;
    font-weight: 100;
    margin: 0rem 0 0.15rem 0.1rem;
    background: url("./img/bg.png") repeat-x white;
    background-size: 0.12rem 0.05rem;

  }

  .left {
    float: left;
    height: 0.9rem;
    margin-top: 0.3rem;
    width: 0.9rem;
    padding: 0 0.1rem;
  }

  .right {
    float: left;
    height: 0.725rem;
    margin-top: 0.3rem;
    padding-left: 0.2rem;
    width: 2.8rem;
    border-left: 1px dotted #ccc;
  }
  .ps {
    margin-top: 1.5rem;
    background-color: #f9f9f9;
    padding-left: 0.2rem;
    line-height: 0.23rem;
    font-weight: 100;

  }

</style>
