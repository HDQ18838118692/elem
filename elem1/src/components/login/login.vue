<template>
    <div class="login">
      <div class="header">
        <router-link to="/"><</router-link>
        密码登录
      </div>
      <form >
        <input type="text" placeholder="账号">
        <input type="password" placeholder="密码">
        <input type="text" placeholder="验证码">
      </form>
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
     <div class="btn"> <button @click="submit">登录</button></div>
      <div class="reset">
        <a href="">重置密码?</a>
      </div>
    </div>
</template>

<script>
  // let apid="http://cangdu.org:8001/v2/login";
  // let apiy="http://cangdu.org:8001/v1/captchas";
    export default {
        name: "login",
      created(){

      },
      methods:{
          submit(){

          }
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
    border-bottom: 1px solid #f1f1f1;
    padding-left: 0.2rem;

  }
 input::placeholder{
    color:#666;
  }
  p{
    color: red;
    font-size: 0.15rem;
    padding: 0.1rem 0.2rem;
  }
  .btn{
    width: 100%;
    text-align: center;

  }
  button{
    width:95%;
    height: 0.6rem;
    background-color:#4cd964;
    color: white;
    font-size: 0.2rem;
    border-radius: 0.05rem;
  }
  .reset{
    width: 100%;
    overflow: hidden;
    margin-top: 0.2rem;
  }
  .reset a{
    float: right;
    margin-right: 0.2rem;
    font-size:0.2rem ;
    color:#3b95e9 ;
  }
</style>
