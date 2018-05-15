<template>
  <div class="search">
    <div class="header">
      <router-link to="/"><</router-link>
      搜索
    </div>
    <div class="main">
      <div class="search-box">
        <input type="text" placeholder="请输入商家或美食名称" v-model="val">
        <span ref="cha" @click="cha">×</span>
        <button @click="tijiao">提交</button>
      </div>
      <div class="search-history" ref="story">
        <p class="p1">搜索历史</p>
        <ul>
          <li v-for="arr in arr2">{{arr}}</li>
        </ul>
        <p class="p2" @click="qk">清空搜索历史</p>
      </div>
      <div class="search-jg" ref="jg">
        <p>很抱歉！无搜索结果</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  var arr1 = [];
  var arr = [];
  export default {
    name: "search",
    data() {
      return {
        val: null,
        arr2: []
      }
    },
    created() {
      this.arr2 = JSON.parse(localStorage.getItem("arr1"))
    },
    methods: {
      tijiao() {
        if (this.val) {
          this.$refs.story.style.display = "none";
          this.$refs.jg.style.display = "block";
          this.$refs.cha.style.display = "block"
          arr.push(this.val);
          //数组去重
          for (var i = 0; i < arr.length; i++) {
            var flag = true;
            for (var j = 0; j < arr1.length; j++) {
              if (arr[i] == arr1[j]) {
                flag = false;
              }
              ;
            }
            ;
            if (flag) {
              arr1.push(arr[i]);
            }
            ;
          }
          ;
          localStorage.setItem("arr1", JSON.stringify(arr1))
        }
      },
      cha() {
        this.$refs.story.style.display = "block";
        this.$refs.jg.style.display = "none";
        this.$refs.cha.style.display = "none";
        this.val = "";
      },
      qk() {
        localStorage.removeItem("arr1");
        this.arr2 = [];
        this.$refs.story.style.display = "none";

      }

    },
    watch: {
      val: function (val) {
        this.$refs.cha.style.display = "block"
        if (!val) {
          if (!localStorage.getItem("arr1")) {
            this.arr2 = []
          } else {
            this.arr2 = JSON.parse(localStorage.getItem("arr1"))
            this.$refs.story.style.display = "block";
            this.$refs.jg.style.display = "none";
          }

        }
      }
    }
  }
</script>

<style scoped>

  .search {
    width: 100%;
    height: 7.7675rem;
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
    width: 100%;

  }

  .search-box {
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 0.15rem 0.1rem;
    position: relative;
  }

  .main input {
    background-color: #f5f5f5;
    width: 3.2rem;
    height: 0.45rem;
    padding-left: 0.2rem;
    line-height: 0.4rem;
    border-radius: 0.08rem;
    border: 1px solid #e4e4e4;

  }

  input::placeholder {
    font-size: 0.2rem;
    color: #333;
  }

  .search-box span {
    position: absolute;
    right: 1.4rem;
    top: .25rem;
    font-size: 0.25rem;
    display: none;
  }

  button {
    width: 0.9rem;
    height: 0.45rem;
    background-color: #3190e8;
    color: white;
    border-radius: 0.05rem;
    font-size: 0.17rem;
    border: 1px solid #3190e8;

  }

  .search-history {
    width: 100%;
display: block;
  }

  .search-history ul {

  }

  .search-history li {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 0.01rem solid #e4e4e4;
    background-color: #fff;
    padding-left: 0.05rem;
  }

  .search-history .p1 {
    background-color: #f5f5f5;
    color: #666;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.15rem;

  }

  .search-history .p2 {
    background-color: #fff;
    color: #3190e8;
    height: 0.6rem;
    line-height: 0.6rem;
    width: 100%;
    text-align: center;
  }

  .search-jg {
    display: none;
    margin-top: 0.05rem;
    height: 0.5rem;
    line-height: 0.5rem;
    color: #333;
    background-color: #fff;
    text-align: center;
  }

</style>
