<template>
  <div class="add">
    <div class="header">
      <router-link to="/address"><</router-link>
      新增地址
    </div>
    <div class="main">
      <input type="text" placeholder="请填写你的姓名" v-model="namee">
      <router-link to="/addDetail">
        <input type="text" placeholder="小区/写字楼/学校等" v-model="name"></router-link>
      <input type="text" placeholder="请填写详细送餐地址" v-model="vadress">
      <input type="number" placeholder="请填写能够联系到您的手机号" v-model="vphone" maxlength="11"
             onkeyup="value=value.replace(/[^\d]/g,'')">
      <input type="text" placeholder="备用联系电话（选填）">

    </div>
    <router-link :to="{path:'/address',name:'address1',query:{phone:this.vphone,dress:this.vadress}}">
      <div class="btn">
        <button @click="zeng">新增地址</button>
      </div>
    </router-link>
  </div>
</template>

<script>
  var arr = []
  export default {
    name: "add",
    data() {
      return {
        name: this.$route.query.name,
        vadress: null,
        vphone: null,
        namee:null

      }

    },
    created() {
      this.namee=this.$store.state.count;
    },
    computed: {
    },
    methods: {
      zeng() {
        arr.push({adress: this.vadress, phone: this.vphone});
        console.log(this.arr)
        localStorage.setItem("arr3", JSON.stringify(arr));

      }
    },
    watch:{
      namee(val){
        this.$store.state.count=val;
      }
    }
  }
</script>

<style scoped>
  .add {
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

  .main {
    background-color: white;
    text-align: center;
    margin-top: 0.1rem;
  }

  .main input {
    width: 88%;
    height: 0.26rem;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-top: 0.1rem;
    background-color: #f2f2f2;
    font-size: 0.16rem;
    padding: 0.1rem;
  }

  .main input:last-child {
    margin-bottom: 0.1rem;
  }

  .btn {
    width: 100%;
    text-align: center;
    margin-top: 0.15rem;
  }

  .btn button {
    width: 93%;
    height: 0.52rem;
    line-height: 0.52rem;
    background-color: #4cd964;
    border-radius: 3px;
    color: white;
    opacity: 0.8;
    font-size: 0.18rem;
    font-weight: 700;
  }
</style>
