<template>
  <div>
    <div class="header">
      <router-link to="/my"><</router-link>
      服务中心
    </div>
    <div class="main">
      <div>
        <img src="./img/客服.png" alt=""><br>
        <span>在线客服</span></div>
      <div>
        <img src="./img/dianhua-2.png" alt=""><br>
        <span>在线客服</span>
      </div>
      <p class="p1">热门问题</p>
      <ul v-for="data in datas ">
        <router-link :to="{name:'questiondetail',params:{detail:data.des,name:data.name}}">
        <li  class="li1">

            {{data.name}}
            <span class="span1"> > </span>

        </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "service",
    data() {
      return {
        datas: {}
      }
    },
    created() {
      Vue.axios.get("http://cangdu.org:8001/v3/profile/explain").then((res) => {

        this.datas = res.data;
        this.datas = dealjson(this.datas)
        console.log(this.datas)

        function dealjson(obj) {
          var arr = []
          var Jsonarr = []
          let object = {}
          for (var key in obj) {
            arr.push(obj[key]); //属性
          }
          for (let i = 0; i < arr.length; i++) {
            if (i % 2 != 0) {
              object.name = arr[i]
              Jsonarr.push(object)
              object = {}
            } else {
              object.des = arr[i]
              object.id = i
            }
          }
          var one = Jsonarr.slice(0, 13)
          var two = Jsonarr.slice(13, 23)
          for (let j = 0; j < two.length; j++) {
            [two[j].des, two[j].name] = [two[j].name, two[j].des]
          }
          var three = one.concat(two)
          three.splice(12, 1)
          three.splice(4, 1)
          return three
        }

      })
    }
  }
</script>

<style scoped>


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
    width: 100%;
  }

  .main > div {
    height: 1.1625rem;
    width: 49%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    display: inline-block;
    border-left: 1px solid #f5f5f5;
    font-size: 0.17rem;
    color: #666;
  }

  .main img {
    width: 0.32rem;
    height: 0.32rem;
    margin-top: 0.22rem;
    margin-bottom: 0.15rem;
  }

  .p1 {
    width: 100%;
    height: 0.87rem;
    line-height: 0.8788rem;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    color: #666;
    font-size: 0.22rem;
    padding-left: 0.2rem;

  }

  .li1 {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    color: #666;
    font-size: 0.18rem;
    padding-left: 0.2rem;
    opacity: 0.8;
    border-bottom: 1px solid #f5f5f5;
    position: relative;
  }

  .span1 {
    position: absolute;
    right: 0.4rem;
    font-size: 0.25rem;
  }
</style>
