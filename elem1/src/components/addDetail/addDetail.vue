<template>
  <div class="addDetail">
    <div class="header">
      <router-link to="/add"><</router-link>
      搜索地址
    </div>
    <div class="main">
      <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="val">
      <button @click="srh">确认</button>
    </div>
    <div class="jg">
      <p>为了满足商家的送餐要求，建议您从列表中进行地址</p>
      <ul>
        <li v-for="(arr,index) in arr1">
          <router-link :to="{name:'add',query:{name:arr.name}}" :key="index">
            <p class="p1">{{arr.name}}</p>
            <p class="p1">{{arr.address}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "add-detail",
    data() {
      return {
        val: null,
        api: "",
        arr1: []
      }
    },
    methods: {
      srh() {
        let api = "http://cangdu.org:8001/v1/pois?city_id=32&keyword=" + this.val + "&type=search";
        Vue.axios.get(api).then((res) => {
          this.arr1 = res.data;
          // console.log(this.arr1)
        })
      }
    }
  }
</script>

<style scoped>
  .addDetail {
    width: 100%;
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

  .main {
    width: 100%;
    height: 0.8rem;
    background-color: white;
  }

  .main input {
    margin-top: 0.15rem;
    width: 70%;
    height: 0.5rem;
    background-color: #f5f5f5;
    margin-left: 0.2rem;
    padding-left: 0.1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 0.2rem;
  }

  .main button {
    height: 0.5rem;
    margin-top: 0.15rem;
    width: 20%;
    background-color: #3199e8;
    color: #fff;
    border-radius: 5px;

  }

  .jg {
    width: 100%;
    text-align: center;
  }

  .jg > p {
    background-color: #fff6e4;
    height: 0.375rem;
    line-height: 0.375rem;
    color: #ff883f;
    font-size: .16rem;
    margin-bottom: 0.1rem;
  }

  .p1 {
    text-align: left;
    color: #969696;
    height: 0.25rem;
    padding-left: 0.2rem;
    margin-bottom: 0.1rem;
    line-height: 0.25rem;
    font-size: .18rem;
  }
</style>
