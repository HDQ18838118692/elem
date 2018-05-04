<template>
  <div class="body">
    <div class="head">
      <div class="head1">
        <div class="logo">
          <router-link to="/">ele.me</router-link></div>
        <div class="login">
          <router-link to="/login">登录</router-link>
          <span>|</span>
          <router-link to="/login">注册</router-link>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="three">
      <div class="three1">
      <div class="dw">
        <div class="one">
          <div class="one1">
            当前定位城市：
          </div>
          <div class="one2">
            定位不准时，请在城市列表中选择
          </div>
        </div>
        <div class="two">
          <router-link to="/shop">
            {{guess.name}}
            <span>
    >
  </span>
          </router-link>
          <!--<router-link :to="{path:'city',name:'city',params:{id:guess.id}}">-->
            <!--{{guess.name}}-->
            <!--<span>-->
    <!--&gt;-->
  <!--</span>-->
          <!--</router-link>-->
        </div>
      </div>
      </div>
    </div>

      <div class="hot">
        <div class="hot1">
        <div class="hot2">热门城市</div>
        <div class="hot3">
          <ul style="overflow: hidden">
            <li v-for="city in hotCity" style="float: left;width: 24.7%">
              <router-link :to="{path:'city',name:'city',params:{id:city.id}}">{{city.name}}</router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>


        <div class="five">
          <div class="five1">
            <div class="five2">(按字母排序)</div>
          <div v-for="(value,key) in groupCity" class="five4">
            <div class="five3">{{key}}</div>
            <ul style="overflow: hidden">
              <li v-for="group in value" style="float: left;width: 24.7%; white-space: nowrap;overflow: hidden;text-overflow :ellipsis;">
                <router-link :to="{path:'city',name:'city',params:{id:group.id}}">{{group.name}}</router-link>
              </li>
            </ul>
          </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from "vue"

  var api1 = "http://cangdu.org:8001/v1/cities?type=guess"
  var api2 = "http://cangdu.org:8001/v1/cities?type=hot"
  var api3 = "http://cangdu.org:8001/v1/cities?type=group"
  export default {
    name: "first",
    data() {
      return {
        guess: {},
        hotCity: [],
        groupCity: {}
      }
    },
    created() {
      Vue.axios.get(api1).then((response) => {
        console.log(response.data)
        this.guess = response.data
      });
      Vue.axios.get(api2).then((response) => {
        console.log(response.data)
        this.hotCity = response.data
      });
      Vue.axios.get(api3).then((response) => {
        //console.log(response.data)
        this.groupCity = response.data
        this.groupCity = objKeySort(this.groupCity)

        function objKeySort(obj) {//排序的函数
          var newkey = Object.keys(obj).sort();
          var newObj = {};
          for (var i = 0; i < newkey.length; i++) {
            newObj[newkey[i]] = obj[newkey[i]];
          }
          return newObj;
        }


      })
    }
  }
</script>

<style scoped>

  .head {
    width: 100%;
    height: 0.575rem;
    background: #3190e8;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .head1 {
    width: 96%;
    margin: 0 auto;
  }

  .logo {
    color: white;
    line-height: 0.575rem;
    float: left;
  }

  .login {
    float: right;
    line-height: 0.575rem;
    color: white;
    letter-spacing: -0.025rem;
  }

  .login a {
    color: white;
  }

  .foot {
    background: #eee;
  }
  .three{
    width: 100%;
    background: white;
  }
  .three1{
    width: 96%;
    margin: 0 auto;
  }

  .one {
    height: 0.3rem;
    background: white;
    border-bottom: 1px solid #e4e4e4;
    margin-top: 0.8rem;
  }

  .one1 {
    font-size: 0.17rem;
    float: left;
    line-height: 0.3rem;
  }

  .one2 {
    font-size: 0.16rem;
    float: right;
    line-height: 0.3rem;
    color: #9f9f9f;
  }
  .two{
    background: white;
    height: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 0.15rem;
  }
  .two a{
    color: #3190e8;
    font-size: 0.24rem;
    line-height:0.5rem;
    overflow: hidden;
  }
  .two a span{
    float: right;
    color: lightgray;
  }
  .hot{
    background: white;
  }
  .hot1{
    margin: 0 auto;
  }
  .hot2{
    font-size: 0.17rem;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 96%;
    margin: 0 auto;
  }
  .hot3 ul{
    border-bottom:1.1px solid #e4e4e4 ;
  }
  .hot3 ul li{
    height: 0.5rem;
    border-left: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
    text-align: center;
    line-height: 0.5rem;
  }
  .hot3 ul li a{
    color: #3190e8;
  }
  .five{
    margin-top: 0.15rem;
  }
  .five2{
position: absolute;
    left: 0.4rem;
    top: 0.1rem;
    font-size: 0.16rem;
    line-height: 0.2rem;
    color: #c9c9c9;
  }
  .five1{
    position: relative;

  }
  .five3{
    width: 96%;
    margin: 0 auto;
    height: 0.4rem;
    line-height: .4rem;

  }
  .five4{
    border-top: 1px solid #c9c9c9;
    margin-bottom: 0.2rem;
    background: white;
  }
  .five4 ul{
    border-top:1.1px solid #e4e4e4 ;
  }
  .five4 ul li{
    height: 0.5rem;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.18rem;

  }
  .five4 ul li a{
    color: #666;
  }
</style>
