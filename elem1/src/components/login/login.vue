<template>
    <div class="login">
      <div class="header">
        <router-link to="/"><</router-link>
        密码登录
      </div>
      <form action="">
        <input type="text" placeholder="账号">
        <input type="password" placeholder="密码">
        <input type="text" placeholder="验证码">


      </form>
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <button @click="submit">登录</button>
    </div>
</template>

<script>
  // let apid="http://cangdu.org:8001/v2/login";
  // let apiy="http://cangdu.org:8001/v1/captchas";
    export default {
        name: "login",
      created(){

      }
    }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 8.4rem;
    background-color:#f5f5f5 ;
  }
.header{
  width: 100%;
  height: 45.7px;
  background-color: #3190e8;
  line-height: 45.7px;
  text-align: center;
  color: white;
  font-size: 0.22rem;
  position: relative;
}
  .header a{
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }
  form{
   margin-top: 0.2rem;
    width: 100%;
    height: 1.85rem;


  }
  form input{
    width: 100%;
    height: 0.6rem;
    background-color: white;
    font-size: 0.21rem;
    border-bottom: 1px solid gainsboro;
    padding-left: 0.2rem;

  }
 input::placeholder{
    color:#666;
  }
  p{
    color: red;
    font-size: 0.15rem;
  }
</style>
