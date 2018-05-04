<template>
  <div class="quan">
    <div class="head">
      <div class="head1">
        <div class="left">
          <router-link to="/"><</router-link>
        </div>
        <div class="center">{{city.name}}</div>
        <div class="right">
          <router-link to="/">切换城市</router-link>
        </div>
      </div>
    </div>


    <div class="body">
      <div class="body1">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="val">
        <div class="body2" @click="submit">提交</div>
      </div>
    </div>
    <div class="foot">
      <div class="foot1">
      搜索历史
      </div>
    </div>

    <div v-if="search.length">
<div v-for=" sss in search">
  <router-link :to="{path:'',name:'',params}"></router-link>
  <h1>{{sss.name}}</h1>
  <div>{{sss.address}}</div>
</div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  // var api1="http://cangdu.org:8001/v1/cities/:id"
  export default {
    name: "city",
    data() {
      return {
        city: {},
        val:'',
        id:"",
        search:[]
      }
    },
    created() {
      this.id = this.$route.params.id;
      // console.log(id)
      var api1 = "http://cangdu.org:8001/v1/cities/" + this.id;
      console.log(api1);
      Vue.axios.get(api1).then((response) => {
        console.log(response.data)
        this.city = response.data
      });
    },
    methods:{
      submit(){
var api2="http://cangdu.org:8001/v1/pois?city_id="+this.id+"&keyword="+this.val+"&type=search"
        Vue.axios.get(api2).then((response) => {
          console.log(response.data)
          this.search=response.data
        });
      }
    }
  }
</script>

<style scoped>
  .quan{
    background: lightgray;
  }
.head{
  height: 0.62rem;
  background:#3190e8 ;

}
  .head1{
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    line-height: 0.62rem;
  }

  .left a,.center,.right a{
    color: white;
    font-size: 0.2rem;
  }
  .center,.left a{
    font-size: 0.25rem;
  }
  .left,.center,.right{
    width: 0.8rem;
  }

.body{
  height: 1.35rem;
  margin-top: 0.1rem;
  background: white;
}
  .body1{
    width: 90%;
    margin: 0 auto;
  }
  .body1 input{
    width: 100%;
    height: 0.4rem;
    border: 1px solid lightgray;
    margin-top: 0.2rem;
    font-size: 0.2rem;
    padding-left: 0.1rem;
  }
  .body2{
    width: 100%;
    background:#3190e8;
    margin-top: 0.2rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    color: white;
  }
  .foot{
    height: 0.25rem;
    font-size: 0.17rem;
  }
  .foot1{
    width: 96%;
    margin: 0 auto;
    line-height: 0.25rem;
  }
</style>
