<template>
  <div class="mine">
    <div class="header">
      <span @click="go"><</span>
      我的
    </div>
    <router-link :to="url">
      <div class="phone">
        <img :src="imgs" alt="" class="img5">
        <p class="p1">{{phone}}</p>
        <p class="p2"><img src="./img/手机.png" alt="" class="img6">暂无绑定手机号</p>
        <span> ></span>
      </div>
    </router-link>
    <ul class="my">
      <router-link to="/balance">
        <li>
          <p><span class="span1">0.00</span>元</p>
          <span>我的余额</span>
        </li>
      </router-link>
      <router-link to="/benefit">
        <li>
          <p><span class="span2">3</span>个</p>
          <span>我的优惠</span>
        </li>
      </router-link>
      <router-link to="/points">
        <li>
          <p><span class="span3">0</span>分</p>
          <span>我的积分</span>
        </li>
      </router-link>
    </ul>
    <ul class="yh">
      <router-link to="/dingdan">
        <li>
          <img src="./img/订单.png" alt="">
          <p><span>我的订单</span><span>
          >
        </span></p>
        </li>
      </router-link>
      <router-link to="/jifen">
        <li>
          <img src="./img/积分.png" alt="">
          <p><span>积分商城</span><span>
          ></span>
          </p>
        </li>
      </router-link>
      <router-link :to="{name:'vipcard',params:{
      phone:this.phone
      }
      }">
        <li>
          <img src="./img/huiyuan.png" alt="">
          <p><span>饿了么会员卡</span>
            <span>
          >
          </span></p>
        </li>
      </router-link>
    </ul>
    <ul class="yh">
      <router-link to="/service">
        <li><img src="./img/服务.png" alt="">
          <p><span>服务中心</span>
            <span>
          >
          </span>
          </p></li>
      </router-link>
      <li>
        <img src="./img/elmlogo.jpeg" alt="">
        <p @click="tiao"><span>下载饿了么APP</span>
          <span>
          >
          </span></p></li>
    </ul>

    <div class="warn" ref="tiao1">
      <img src="./img/warn2.png" alt="">
      <p>IOS用户请前往AppStore下载</p>
      <button @click="qre">确认</button>
    </div>
  </div>
</template>

<script>
  var arr1 = [];
  export default {
    name: "my",
    data() {
      return {
        phone: '登录/注册',
        imgs: require("./img/people.png"),
        url: "/usermes"

      }
    },
    created() {
//       if (JSON.parse(localStorage.getItem("arr"))) {
//         this.phone = JSON.parse(localStorage.getItem("arr"))
//       }
      console.log(this.$route.params.username)
      if (this.$route.params.username) {
        this.phone = this.$route.params.username
        localStorage.setItem("arr", JSON.stringify(this.phone));
//       console.log(this.phone)
        if (this.phone == 1 || this.phone == '登录/注册') {
          this.url = "/login"
          this.phone = '登录/注册'
        }
      } else {
        this.phone = JSON.parse(localStorage.getItem("arr"));
//       console.log(this.phone)
        if (this.phone == 1 || this.phone == '登录/注册') {
          this.url = "/login"
          this.phone = '登录/注册'
        }
      }
    },
    methods: {
      tiao() {
        this.$refs.tiao1.style.display = "block";
      },
      qre(ev) {
        this.$refs.tiao1.style.display = "none";

      },
      go(){
        history.go(-1);
      }
    }
  }
</script>

<style scoped>
  .mine {
    width: 100%;
    height: 7.96rem;
    background-color: #f5f5f5;
    position: relative;
  }

  .img6 {
    width: 0.28rem;
    height: 0.3rem;
  }

  .warn {
    position: absolute;
    width: 3.5125rem;
    height: 2.3rem;
    top: 2.3rem;
    left: 0.5rem;
    text-align: center;
    background-color: white;
    font-size: 0.22rem;
    color: #666;
    border: 0px solid;
    display: none;
  }

  .warn img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
  }

  .warn p {
    margin-bottom: 0.2rem;
  }

  .warn button {
    background-color: #4cd964;
    height: 0.5rem;
    width: 100%;
    line-height: 0.5rem;
    color: white;
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

  .phone {
    width: 100%;
    height: 1.1rem;
    color: #fff;
    background-color: #3190e8;
    overflow: hidden;
  }

  .phone .img5 {
    width: 0.73rem;
    height: 0.73rem;
    margin: 0.1rem 0.2rem;
    float: left;

  }

  .phone .p1 {
    font-size: 0.22rem;
    margin-top: 0.2rem;
  }

  .phone .p2 {
    font-size: 0.15rem;
    margin-top: 0.1rem;
  }

  .p2 img {
    vertical-align: middle;
    margin-right: 0.1rem;
  }

  .phone span {
    float: right;
    margin: -0.5rem 0.15rem;
    font-size: 0.3rem;
  }

  .my {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
    text-align: center;
    background-color: white;
    color: #666;
    font-size: 0.18rem;
  }

  .my li {
    float: left;
    width: 33%;
    height: 1.1rem;
    border-left: 1px solid #f1f1f1;
  }

  .my p {
    margin: 0.25rem 0 0.15rem;
  }

  .span1 {
    color: #f90;
    font-size: 0.35rem;
  }

  .span2 {
    color: #ff5f3e;
    font-size: 0.35rem;
  }

  .span3 {
    color: #6ac20b;
    font-size: 0.35rem;
  }

  .yh {
    margin-top: 0.13rem;
    width: 100%;
    background-color: white;
    color: rgb(51, 51, 51);

  }

  .yh p {
    display: inline-block;
    width: 85%;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
  }

  .yh p span:nth-child(2) {
    float: right;
    color: rgb(187, 187, 187);
  }

  .yh li {
    height: 0.5625rem;
    line-height: 0.5625rem;
  }

  .yh li img {
    vertical-align: 0.17rem;
    margin: 0 0.02rem 0 0.2rem;
    width: 0.22rem;
    height: 0.25rem;
  }
</style>
