<template>
  <div class="login">
    <div class="header">
      <router-link to="/"><</router-link>
      密码登录
    </div>
    <form>
      <input type="text" placeholder="账号" v-model="v1">
      <input type="password" placeholder="密码" v-model="v2">
      <div class="circle" @click="chcolor"></div>
      <span class="a1">abc...</span>
      <input type="text" placeholder="验证码" v-model="v3">
      <div class="yz"><img :src="imgs"></div>
      <span class="yz1" @click="hqyz">看不清</span>
      <span class="yz2" @click="hqyz">换一张</span>

    </form>
    <p>温馨提示：未注册过的账号，登录时将自动注册</p>
    <p>注册过的用户可凭账号密码登录</p>
    <div class=" btn">
      <button @click="submitA">登录</button>
    </div>
    <div class="reset">
      <a href="">重置密码?</a>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";


  export default {
    name: "login",
    data() {
      return {
        imgs: null,
        v1: null,
        v2: null,
        v3: null

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
      submitA() {
        let data = {
          username: this.v1,
          password: this.v2,
          captcha_code: this.v3
        }
        let url = "https://elm.cangdu.org/v2/login";
        Vue.postLogin(url, data, (res) => {
          console.log(res);
          if (res.status != 0) {
            this.$router.push({
              name: 'my',
              params: res
            })
          }else{
            alert(res.message);
          }


        })
      },
      chcolor() {
        var span1 = document.getElementsByTagName("span")[0];
        var div1 = document.getElementsByClassName("circle")[0];
        var input2 = document.getElementsByTagName("input")[1];
        if (div1.offsetLeft <= 315) {
          div1.style.right = "0.1rem";
          span1.style.backgroundColor = "#4cd964";
          input2.type = "text";
        } else {
          div1.style.right = "0.4rem";
          span1.style.backgroundColor = "gainsboro";
          input2.type = "password";
        }

      },
      hqyz() {
        Vue.axios.post(apiy).then((res) => {
          console.log(res.data);
          this.imgs = res.data.code;
        })
      }
    }
  }
</script>

<style scoped>
  .login {
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
  }

  .header a {
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }

  form {
    margin-top: 0.2rem;
    width: 100%;
    height: 1.85rem;
    position: relative;

  }

  form input {
    width: 100%;
    height: 0.6rem;
    background-color: white;
    font-size: 0.21rem;
    border-bottom: 1px solid #f1f1f1;
    padding-left: 0.2rem;

  }

  input::placeholder {
    color: #666;
  }

  p {
    color: red;
    font-size: 0.15rem;
    padding: 0.1rem 0.2rem;
  }

  .btn {
    width: 100%;
    text-align: center;

  }

  button {
    width: 95%;
    height: 0.6rem;
    background-color: #4cd964;
    color: white;
    font-size: 0.2rem;
    border-radius: 0.05rem;
  }

  .reset {
    width: 100%;
    overflow: hidden;
    margin-top: 0.2rem;
  }

  .reset a {
    float: right;
    margin-right: 0.2rem;
    font-size: 0.2rem;
    color: #3b95e9;
  }

  form .a1 {
    position: absolute;
    right: 0.1rem;
    bottom: 0.8rem;
    width: 0.5rem;
    padding: 0.02rem 0.05rem;
    background-color: gainsboro;
    border-radius: 0.3rem;
    color: white;

  }

  form .circle {
    width: 0.35rem;
    height: 0.35rem;
    background-color: #f1f1f1;
    border-radius: 50%;
    position: absolute;
    right: 0.4rem;
    bottom: 0.75rem;
    z-index: 1;
    transition: all 0.3s;
  }

  form .yz1 {
    position: absolute;
    right: 0.1rem;
    font-size: 0.2rem;
    bottom: 0.35rem;
  }

  form .yz2 {
    position: absolute;
    right: 0.1rem;
    bottom: 0rem;
    font-size: 0.2rem;
    color: #3b95e9;

  }

  .yz {
    position: absolute;
    right: 0.8rem;
    bottom: 0.1rem;
  }

</style>
