<template>
  <div class="setusername">
    <div class="header">
      <router-link to="/usermes"><</router-link>
      修改用户名
    </div>
    <div class="main">
      <input type="text" placeholder="输入用户名" v-model="val" ref="i1">
      <p ref="p1">用户名只能修改一次 (5-24字符之间)</p>
      <button @click="gai">确认修改</button>
    </div>
  </div>
</template>

<script>
  var arr2 = [];
  export default {
    name: "setusername",
    data() {
      return {
        val: null
      }
    },
    methods: {
      gai() {
        if (this.val != null) {
          if (this.val.length < 5 || this.val.length > 24) {
              this.$refs.p1.innerHTML = "用户名长度在5到24位之间";
              this.$refs.p1.style.color = "red";

              this.$refs.i1.style.border = " 1px solid red";
            } else {
              localStorage.setItem("arr", JSON.stringify(this.val));
              history.go(-1);
            }
        }
      }
    }
  }
</script>

<style scoped>
  .setusername {
    width: 100%;
    height: 8.3375rem;
    background-color: #f5f5f5;
    text-align: center;
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
    text-align: center;
    margin: 0.1rem 0;
    overflow: hidden;
    width: 95%;
    padding-left: 2%;
  }

  .main input {
    width: 98%;
    height: 0.5rem;
    border: 1px solid #ddd;
    background-color: #f5f5f5;
    font-size: 0.22rem;

  }

  .main p {
    float: left;
    height: 0.5rem;
    line-height: 0.5rem;
    margin-bottom: 0.1rem;
    font-size: 0.15rem;
    color: #666;
  }

  button {
    width: 100%;
    height: 0.58rem;
    color: #fff;
    background-color: #3190e8;
    border: none;
    box-shadow: none;
    font-size: 0.2rem;

  }
</style>
