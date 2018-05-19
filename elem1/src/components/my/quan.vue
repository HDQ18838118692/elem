<template>
  <div>
    <p class="p1"><span class="span1">
      <img src="./img/qiu.png" alt="">
      商家代金券说明</span></p>
    <div class="main">
      <img src="./img/zzz.png" alt="">
      <p>无法使用代金券</p>
      <p>非客户端或客户端过低</p>
      <button @click="tiao">下载或升级客户端</button>
    </div>
    <div class="warn animated bounceIn" ref="tiao1">
      <img src="./img/warn2.png" alt="">
      <p>IOS用户请前往AppStore下载</p>
      <button @click="qre">确认</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "quan",
    methods:{
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
  .p1 {
    height: 0.6rem;
    line-height: 0.6rem;
    overflow: hidden;
    font-size: 0.15rem;

  }

  .p1 .span1 {
    float: right;
    margin-right: 0.2rem;
    color: #3190e8;
  }

  .span1 img {
    width: 0.2rem;
    height: 0.2rem;
    vertical-align: text-bottom;
  }

  .main {
    text-align: center;
    margin-top: 1.5rem;
  }

  .main img {
    width: 1.8rem;
    height: 1rem;
  }

  .main :nth-child(2) {
    color: #666;
    font-weight: 200;
    margin-top: 0.15rem;
  }

  .main :nth-child(3) {
    color:#999;
    font-size: 0.15rem;
    font-weight: 100;
    margin-top: 0.1rem;
  }
  button{
    margin-top: 0.1rem;
    background-color: #56d176;
    color: white;
    padding: 0.1rem 0.15rem;
    font-size: 0.2rem;
    font-weight: 200;
    border-radius:0.05rem;
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

</style>
