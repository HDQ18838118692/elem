<template>
  <div class="setuaername">
    <div class="header">
      <router-link to="/"><</router-link>
      密码登录
    </div>
    </div>
</template>

<script>
    export default {
        name: "setusername"
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
</style>
