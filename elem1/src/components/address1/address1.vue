<template>
  <div class="address1">
    <div class="header">
      <router-link to="/usermes"><</router-link>
      编辑地址
      <span @click="bianji">编辑</span>

    </div>
    <div class="main">
      <ul class="ul1">
        <li v-for="(ar,index) in arr">
          <span @click="xiao(index,$event)" ref="xioa" class="span1">✘</span>
          <p>{{ar.adress}}</p>
          <p>{{ar.phone}}</p>

        </li>
      </ul>
      <!--//query要用path来引入，params要用name来引入-->
      <router-link :to="{path:'/add',name:'add'}">
        <p> &nbsp新增地址 <span> > </span></p>
      </router-link>

    </div>

  </div>
</template>

<script>

  export default {
    name: "address1",
    data() {
      return {
        dress: "",
        phone: "",
        arr: [],
        falg: false
      }
    },
    created() {
      this.arr = JSON.parse(localStorage.getItem("arr3"));
    },
    methods: {
      bianji(e) {
        if (this.flag == false) {
          e.target.innerHTML = "完成";
          $(".span1").css("display", "block");
          this.flag = true;
        } else {
          e.target.innerHTML = "编辑";
          $(".span1").css("display", "none");
          this.flag = false;
        }


      },
      xiao(index, e) {
        this.arr.splice(index, 1);
        localStorage.setItem("arr3", JSON.stringify(this.arr));


      }
    }

  }
</script>

<style scoped>
  .address1 {
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
    margin-bottom: 0.15rem;
  }

  .header a {
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }

  .header span {
    position: absolute;
    right: .2rem;
    font-size: .2rem;

  }

  .main li {
    height: 0.75rem;
    background-color: white;
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
    font-size: 0.15rem;
    line-height: 0.51rem;

  }

  .main ul {
    margin-bottom: 0.12rem;

    background-color: #fff8c3;
  }

  .main ul li p {
    height: 0.36rem;
    line-height: 0.36rem;
  }

  .main p {
    height: 0.51rem;
    line-height: 0.51rem;
    background-color: white;
    overflow: hidden;
  }

  .main p span {
    float: right;
    margin-right: 0.2rem;
  }

  .ul1 span {
    float: right;
    line-height: 0.75rem;
    margin-right: 0.3rem;
    font-size: 0.2rem;
    display: none;
  }
</style>
