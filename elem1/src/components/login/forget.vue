<template>
  <div class="forget">
    <div class="header">
      <router-link to="/my"><</router-link>
      重置密码
    </div>
    <div class="main">
      <form >
      <input type="text" placeholder="账号" v-model="v1">
      <input type="password" placeholder="旧密码" v-model="v2">
      <input type="password" placeholder="请输入新密码" v-model="v3">
      <input type="password" placeholder="请确认密码" v-model="v4">
      <input type="text" placeholder="验证码" v-model="v5">
      <div class="yz"><img :src="imgs"></div>
      <span class="yz1" @click="hqyz">看不清</span>
      <span class="yz2" @click="hqyz">换一张</span>
      </form>
    </div>
    <div class="btn">
      <button @click="xiu">确认修改</button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "forget",
    data() {
      return {
        imgs: "",
        data:{},
        v1: null,
        v2: null,
        v3: null,
        v4: null,
        v5: null
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
      hqyz() {
        let url = "https://elm.cangdu.org/v1/captchas";
        var data = {}
        Vue.postLogin(url, data, res => {
          // console.log(res.data);
          this.imgs = res.data.code;
        })
      },
      xiu() {
        let url = "http://cangdu.org:8001/v2/changepassword";
        this.data = {
          username: this.v1,
          oldpassWord: this.v2,
          newpassword: this.v3,
          confirmpassword: this.v4,
          captcha_code: this.v5
        }
        Vue.postLogin(url,this.data,(res)=>{
          console.log(res)
          if(res.status== 0){
            alert(res.message)
          }
        });
      }
    }
  }
</script>

<style scoped>
  .forget {
    width: 100%;
    height: 8.3375rem;
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
    margin-bottom: 0.2rem;
  }

  .header a {
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }

  .main {
    position: relative;
  }

  .main input {
    width: 95%;
    height: 0.6rem;
    background-color: white;
    font-size: 0.2rem;
    border-bottom: 1px solid #f1f1f1;
    padding-left: 0.2rem;

  }

  input::placeholder {
    color: #666;
    font-weight: 200;
  }

  .btn {
    text-align: center;
    margin-top: 0.3rem;
  }

  button {
    width: 95%;
    height: 0.6rem;
    background-color: #4cd964;
    color: white;
    font-size: 0.2rem;
    font-weight: 100;
    border-radius: 0.05rem;
  }

  .yz1 {
    position: absolute;
    right: 0.1rem;
    font-size: 0.2rem;
    bottom: 0.35rem;
    font-weight: 200;
  }

  .yz2 {
    position: absolute;
    right: 0.1rem;
    bottom: 0rem;
    font-size: 0.2rem;
    color: #3b95e9;
    font-weight: 200;
  }

  .yz {
    position: absolute;
    right: 0.8rem;
    bottom: 0.1rem;
  }
</style>
