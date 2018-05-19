<template>
  <div class="exc">
    <div class="header">
      <span @click="go"><</span>
      兑换红包
    </div>
    <div class="main">
      <input type="text" placeholder="请输入兑换码">
      <input type="text" placeholder="验证码">
      <div class="yz"><img :src="imgs"></div>
      <span class="yz1" @click="hqyz">看不清</span>
      <span class="yz2" @click="hqyz">换一张</span>
    </div>
    <button>兑换</button>
  </div>

</template>

<script>
  import Vue from "vue";

  export default {
    name: "exchange",
    data() {
      return {
        imgs: ''
      }
    },

    created() {
      let url = "https://elm.cangdu.org/v1/captchas";

      var data = {}
      Vue.postLogin(url, data, res => {

        this.imgs = res.code;
      })
    },

    methods: {
      go() {
        history.go(-1);
      },
      hqyz() {
        let url = "https://elm.cangdu.org/v1/captchas";
        Vue.axios.post(url).then((res) => {
          console.log(res.data);
          this.imgs = res.data.code;
        })
      }
    }
  }
</script>

<style scoped>
  .exc {
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

  .header span {
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }

  .main {
    text-align: center;
    position: relative;

  }

  .main input:first-child {
    margin-top: 0.2rem;
    border-radius: 0.1rem;
    width: 90%;
    font-size: 0.18rem;
    background-color: white;
    height: 0.61rem;
    padding-left: 0.2rem;
  }

  .main :nth-child(2) {
    width: 55%;
    font-size: 0.18rem;
    background-color: white;
    height: 0.61rem;
    padding-left: 0.2rem;
    float: left;
    margin-left: 0.15rem;
    border-radius: 0.1rem;
    margin-top: 0.2rem;
  }

  button {
    display: block;
    position: absolute;
    top: 2.4rem;
    width: 92%;
    left: 0.2rem;
    height: 0.5rem;
    font-size: 0.22rem;
    color: white;
    border-radius: 0.1rem;
  }

  .yz1 {
    position: absolute;
    right: 0.1rem;
    font-size: 0.2rem;
    bottom: -.5rem;
  }

  .yz2 {
    position: absolute;
    right: 0.1rem;
    bottom: -.8rem;
    font-size: 0.2rem;
    color: #3b95e9;

  }

  .yz {
    position: absolute;
    right: 0.7rem;
    bottom: -.7rem;
  }
</style>
