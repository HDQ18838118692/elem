<template>
  <div class="exc">
    <div class="header">
      <span @click="go"><</span>
      推荐有奖
    </div>
    <div class="main">
      <img src="./img/activity.png" alt="">
    </div>
    <div class="info">
      <div @click="tiao">
        <img src="./img/weixin.png" alt="">
        <p>邀请QQ好友</p>
      </div>
      <div @click="tiao">
        <img src="./img/qq.png" alt="">
        <p>邀请微信好友</p>
      </div>
      <div @click="tiao">
        <img src="./img/mian.png" alt="">
        <p>面对面要求</p>
      </div>
    </div>
    <div class="sy">
      <div>
        <p>累计收益</p>
        <p><span style="color: red;font-size: 0.22rem;">0</span>元</p>
      </div>
      <div>
        <p>成功邀请</p>
        <p><span style="font-size: 0.22rem">0</span>人</p>
      </div>
    </div>
    <div class="mx">
      <p class="p1">-收益明细-</p>
      <img src="./img/qian.png" alt="">
      <p class="p2">还不赶紧去邀请好友</p>
    </div>
    <div class="warn animated bounceIn" ref="tiao1">
      <img src="./img/warn2.png" alt="">
      <p>请在饿了么APP中打开</p>
      <button @click="qre">确认</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commend",
    methods: {
      go() {
        history.go(-1);
      },
      tiao() {
        this.$refs.tiao1.style.display = "block";
      },
      qre(ev) {
        this.$refs.tiao1.style.display = "none";

      },
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
    height: 2.925rem;
  }

  .main img {
    height: 100%;
    width: 100%;
  }

  .info img {
    width: 0.75rem;
    margin-top: 0.3rem;

  }

  .info {
    height: 1.625rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    background-color: #fff;
  }

  .info p {
    font-size: 0.15rem;
    color: #333;
    font-weight: 200;
    margin-top: 0.1rem;
  }

  .sy {
    height: 0.5rem;
    font-size: 0.15rem;
    color: #666;
    font-weight: 200;
    overflow: hidden;
    text-align: center;
    margin-top: 0.25rem;
  }

  .sy > div {
    float: left;
    width: 49%;
  }

  .sy div p:first-child {
    margin-bottom: 0.1rem;
  }

  .sy div:first-child {
    border-right: 1px solid #ddd;
  }
  .mx{
    text-align: center;
    margin-top: 0.25rem;
  }
  .p1{
    font-size: 0.15rem;
    color: #666;
    font-weight: 100;
    margin-bottom: 0.25rem;

  }
  .mx img{
    width: 0.33rem;
    height: 0.42rem;
  }
  .p2{
    margin-top: 0.15rem;
    font-size: 0.15rem;
    color: #666;
    font-weight: 100;

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
    border-radius: .1rem;
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
