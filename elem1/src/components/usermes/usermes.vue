<template>
  <div class="usermes">
    <div class="header">
      <router-link to="/my"><</router-link>
      账户信息
    </div>
    <div class="people">
      <div class="div1">
        <span class="span1">头像</span>
        <span class="span3"> ></span>
        <img :src="image_path" alt="">
        <input name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>

      </div>
      <router-link :to="{name:'setusername'}">
        <div class="div2">
          <span class="span1">用户名</span>
          <span class="span3"> ></span>
          <span class="span2">{{phone}}</span>
        </div>
      </router-link>
      <router-link to="/address">
        <div class="div2">
          <span class="span1">收货地址</span>
          <span class="span3">  ></span>
        </div>
      </router-link>
      <p class="p3">账号绑定</p>
      <div class="div2" @click="tiao2">
          <span class="span1" ref="phone">
            <img src="../my/img/bindphone.png" alt="">
            手机</span>

        <span class="span3"> ></span>
      </div>
      <p class="p3">安全设置</p>
      <div class="div2">
        <span class="span1">登录密码</span>
        <span class="span3"> ></span>
        <span class="span2">修改</span>
      </div>
    </div>
    <div class="dbtn">
      <button @click="tiao" class="btn1">
        <span>退出登录</span>
      </button>
    </div>
    <div class="warn animated bounceIn" ref="tiao2">
      <img src="./img/warn2.png" alt="">
      <p>请在手机APP中设置</p>
      <button @click="qre">确认</button>
    </div>
    <div class="warn animated bounceIn" ref="tiao1">
      <img src="./img/warn2.png" alt="">
      <p>是否退出登录</p>
      <button @click="qre">确认</button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "usermes",
    data() {
      return {
        // phone: this.$route.params.phone,
        phone: JSON.parse(localStorage.getItem("arr")),
        image_path: require("../my/img/people.png")
      }
    },
    methods: {
      // 添加请求头
      update(e) {  // 上传照片
        var self = this
        let file = e.target.files[0]
        /* eslint-disable no-undef */
        let param = new FormData() // 创建form对象
        param.append('file', file, file.image_path) // 通过append向form对象添加数据
        param.append('chunk', '0') // 添加form表单中其他数据
        console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }
        // 添加请求头
        this.axios.post('http://cangdu.org:8001/v1/addimg/shop', param, config)
          .then(response => {
            if (response.data.status === 1) {
              self.image_path = "http://images.cangdu.org/" + response.data.image_path;

            }

            console.log(response.data);
            alert("图片上传失败");
          })
      },
      tiao() {
        this.$refs.tiao1.style.display = "block";

      },
      qre(ev) {
        ev.target.parentNode.style.display = "none";
        console.log(1)
        this.axios.get('http://cangdu.org:8001/v2/signout')
          .then(response => {
            console.log(response);
          })
        this.$router.push({name: 'my', params: {username: 1}})
      },
      tiao2() {
        this.$refs.tiao2.style.display = "block";
      },
      tui() {
        let url = "http://cangdu.org:8001/v2/signout";
        Vue.axios.get(url).then((res) => {
          console.log(res)
        })

      }

    }

  }
</script>

<style scoped>
  .usermes {
    width: 100%;
    height: 8.45rem;
    background-color: #f5f5f5;
    position: relative;

  }

  .dbtn {
    width: 100%;
    text-align: center;
    margin-top: 0.4rem;
  }

  .btn1 {
    width: 96%;
    height: 0.45rem;
    background-color: #d8584a;
    border-radius: 5px;
    color: white;
    font-size: 0.18rem;

  }

  .btn1 span {
    opacity: 0.9;
    font-weight: lighter;
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

  .people {
    background-color: white;
    width: 100%;
    margin-top: 0.1rem;
    font-size: 0.18rem;
  }

  .div1 {
    height: 0.9rem;
    line-height: 0.9rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    position: relative;

  }

  .div2 {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
  }

  .span1 {
    padding-left: 0.15rem;
  }

  .span1 img {
    vertical-align: -5px;
    margin-right: 0.02rem;
  }

  .span2 {
    float: right;
    margin-right: 0.1rem;
    color: #999;
    font-size: 0.2rem;
  }

  .span3 {
    float: right;
    margin-right: 0.2rem;
    color: rgb(216, 216, 216);
    font-size: 0.25rem;

  }

  .div1 img {
    width: 0.63rem;
    height: 0.63rem;
    margin: 0.1rem 0.2rem;
    float: right;
  }

  .p3 {
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.15rem;
    background-color: #f5f5f5;
    color: #666;
    border-bottom: 1px solid #ddd;
    padding-left: 0.15rem;
  }

  .div1 input[type="file"] {
    position: absolute;
    width: 100%;
    opacity: 0;
    height: 0.9rem;

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
