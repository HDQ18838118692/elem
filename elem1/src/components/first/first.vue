<template>
    <div>
    <div class="head">
      <div>ele.me</div>
      <div>
        <router-link to="/">登录</router-link>
        <span>|</span>
        <router-link to="/">注册</router-link>
      </div>
    </div>
      <div>
    <div>
      <div>
        当前定位城市：
      </div>
      <div>
        定位不准时，请在城市列表中选择
      </div>
    </div>
        <div>
<router-link to="/">
  郑州
</router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from "vue"
  var api1="http://cangdu.org:8001/v1/pois"
    export default {
        name: "first",
      data(){
          return{

          }
      },
      created(){
        Vue.axios.get(api1).then((response) => {
          console.log(response.data)

        })
      }
    }
</script>

<style scoped>
.head{
  width: 100%;
  height: 45.7px;
  background:#3190e8;
}
</style>
