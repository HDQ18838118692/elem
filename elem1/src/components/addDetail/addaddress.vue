<template>
  <div class="adda">
    <div class="header">
      <span @click="go"><</span>
      添加地址
    </div>
    <div class="main">
      <div class="main1">
        <span>联系人</span>
        <div class="right">
          <input type="text" placeholder="你的名字">
          <div style="height:0.725rem ;line-height: 0.725rem">
            <input type="radio" name="sex" checked><label>先生</label>
            <input type="radio" name="sex"><label>女士</label>
          </div>
        </div>
      </div>
      <div class="main1">
        <span>联系电话</span>
        <div class="right">
          <input type="text" placeholder="你的电话号">

          <input type="text" placeholder="备用电话" class="i1">
        </div>
      </div>
      <div class="main1">
        <span>送餐地址</span>
        <div class="right">
          <input type="text" placeholder="小区/写字楼/学校等">
          <input type="text" placeholder="详细地址（如门牌号等）">
        </div>
      </div>
      <div class="main1">
        <span>标签</span>
        <div class="right">
          <input type="text" placeholder="无/家/学校/公司">
        </div>
      </div>
    </div>
    <div class="btn">
      <button>确定</button>
    </div>
    <img src="./加号.png" alt="" class="jia" @click="jia">
  </div>

</template>

<script>
  import Vue from "vue";

  export default {
    name: "addaddress",
    data() {
      return {}
    },
    methods: {
      go() {
        history.go(-1);
      },
      jia() {
        $(".i1").css({
          display: "block"
        })
      }
    }
  }
</script>

<style scoped>
  .adda {
    background-color: #f5f5f5;
    position: relative;
    height: 8.3325rem;
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

  .i1 {
    display: none;
  }

  .main {
    background-color: #fff;
    padding-left: 0.2rem;
    overflow: hidden;
  }

  .main span {
    display: inline-block;
    width: 1.1rem;
    line-height: 0.65rem;
    color: #333;
    height: 0.725rem;
    float: left;
    font-weight: 200;
  }

  .right {
    float: left;
    width: 3.05rem;
  }

  .main input[type=text] {
    height: 0.725rem;
    width: 3.05rem;
    border-bottom: 1px solid #f5f5f5;
  }

  .main1 {
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
    width: 94%;

  }

  input::placeholder {
    font-size: 0.2rem;
    color: #999;
    font-weight: 200;
  }

  .jia {
    position: absolute;
    right: 0.4rem;
    width: 0.3rem;
    top: 2.28rem;
  }
  .btn{
    text-align: center;
    margin-top: 0.2rem;

  }
  button{
    width: 95%;
    background-color: #4cd964;
    color: white;
    height: 0.5rem;
    border-radius: .1rem;
    font-size: 0.2rem;
    font-weight: 100;
  }
</style>
