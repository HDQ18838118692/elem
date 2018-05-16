<template>
  <div class="pay">
    <div class="header">
      <router-link to="/vipcard"><</router-link>
      在线支付
    </div>
    <div class="main">
      <p>支付剩余时间</p>
      <p class="ps">
        <span>0{{h}}:</span> <span>{{m}}:</span> <span>{{s}}</span>
      </p>
    </div>
    <div class="way">选择支付方式</div>
    <div class="payinfo">
      <div>
        <img src="./img/zhi.png" alt="">支付宝
        <span class="span1" @click="bian" ref="span1">√</span>
      </div>
      <div>
        <img src="./img/weixin.png" alt="">微信
        <span class="span2" @click="bian" ref="span2">√</span>
      </div>
    </div>
    <div class="btn" @click="tiao">
      <button>确认支付</button>
    </div>
    <div class="warn" ref="tiao1">
      <img src="./img/warn2.png" alt="">
      <p>当前环境无法支付，请打开官方APP进行付款</p>
      <button @click="qre">确认</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pay",
    data() {
      return {
        h: null,
        m: null,
        s: null
      }
    },
    created() {
      this.h = 0;
      this.m = 15;
      this.s = 0;
      var t = setInterval(() => {
        this.s--;
        if (this.s == -1) {
          this.s = 59;
          this.m--;
          if (this.m < 0) {
            clearInterval(t);
            this.m++;
            this.s = 0;
          }
        }

      }, 1000)
    },
    methods: {
      bian(e) {
        $(".span1").css('background',"lightgray")
        $(".span2").css('background',"lightgray")
        e.target.style.background = "#4cd964"

      },
      tiao() {
        this.$refs.tiao1.style.display = "block";

      },
      qre(ev) {
        ev.target.parentNode.style.display = "none";
        this.$router.push({
          name:'dingdan'
        })

      },
    },
    watch:{

    }
  }
</script>

<style scoped>
  .pay {
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
    height: 1.37rem;
    background-color: #fff;
    padding-top: 0.4rem;
    text-align: center;
  }

  .main p:first-child {
    color: #666;
    font-weight: 200;
  }

  .way {
    padding-left: .2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.2rem;
    color: #666;
    font-weight: 200;
  }

  .payinfo {
    height: 2rem;
    background-color: #fff;
  }

  .payinfo > div {
    height: 1rem;
    line-height: 1rem;
    padding-left: 0.2rem;
    border-bottom: 1px solid rgb(245, 245, 245);
    color: #666;
    font-weight: 200;
    overflow: hidden;
  }

  .payinfo img {
    height: 0.55rem;
    width: 0.57rem;
    vertical-align: middle;
    margin-right: 0.1rem;
  }

  .payinfo span {
    display: inline-block;
    width: 0.35rem;
    height: 0.35rem;
    text-align: center;
    line-height: 0.4rem;
    background-color: #4cd964;
    color: white;
    border-radius: 50%;
    float: right;
    margin-right: 0.2rem;
    margin-top: 0.3rem;
  }

  .payinfo .span2 {
    background-color: #ccc;
  }
  .payinfo .span1{
    background-color: #4cd964;
  }
  .btn {
    text-align: center;
    margin-top: 0.3rem;
  }

  button {
    width: 96%;
    height: 0.55rem;
    line-height: 0.55rem;
    background-color: #4cd964;
    color: white;
    border-radius: 0.1rem;
    font-size: 0.2rem;
    font-weight: lighter;
  }

  .main p:last-child {
    margin-top: 0.2rem;
    font-size: 0.45rem;
  }

  .ps span {
    display: inline-block;
    text-align: left;
    width: 0.6rem;

  }
  .warn {
    position: absolute;
    width: 3.5125rem;
    height: 2.3rem;
    top: 2.3rem;
    left: 0.5rem;
    text-align: center;
    background-color: white;
    font-size: 0.25rem;
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
</style>
