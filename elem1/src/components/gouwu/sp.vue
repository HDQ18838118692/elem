<template>
  <div class="sp">
    <div class="left">
      <ul>
        <li v-for="data in datas" @click="bai" class="li1">
          <img :src="`//elm.cangdu.org/img/${data.icon_url}`" alt="">
          {{data.name}}
        </li>
      </ul>
    </div>
    <div class="right">

      <ul v-for="data in datas">
        <div class="divh">
          <span class="span1">{{data.name}}</span>
          <span class="span2">{{data.description}}</span>
          <span class="span3">...</span>
        </div>
        <li v-for="arr in data.foods" class="lis">
          <img :src="`//elm.cangdu.org/img/${arr.image_path}`" alt="">
          <div class="arrs">
            <p>{{arr.name}}</p>
            <p >
              {{arr.description}}
            </p>
            <p>{{arr.tips}}</p>

            <p>
              <span v-if="arr.activity"
                    :style="'color:#'+arr.activity.image_text_color+';border:1px solid #'+arr.activity.icon_color">{{arr.activity.image_text}}</span>
            </p>

            <p></p>
            <p v-for="(ara,index) in arr.specfoods">
              <span v-if="index==0">{{ara.price}}</span>
            </p>
          </div>
        </li>
      </ul>


    </div>


  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "sp",
    data() {
      return {
        id: null,
        datas: []
      }
    },
    created() {
      if (this.$route.params.id) {
        this.id = this.$route.params.id
        localStorage.setItem("id", JSON.stringify(this.id))
      } else {
        this.id = JSON.parse(localStorage.getItem("id"))
      }

      let api1 = "http://cangdu.org:8001/shopping/v2/menu?restaurant_id=" + this.id;
      console.log(api1)
      Vue.axios.get(api1).then((res) => {
        this.datas = res.data;
        console.log(this.datas)
      })
    },
    methods: {
      bai(e) {
        if (e.target.tagName == "LI") {
          $(".li1").css({
            background: "rgb(232,232,232)",
            opacity: 0.6
          });
          e.target.style.backgroundColor = "white";
          e.target.style.opacity = 1;
        }
      }
    }
  }
</script>

<style scoped>
  .sp {
    width: 100%;
    border-top: 1px solid #ededed;
    height: 8.3375rem;
  }

  ul {
    float: left;

  }

  .left {
    float: left;
  }

  .left li {
    height: 0.8rem;
    width: 1rem;
    padding-left: 0.1rem;
    line-height: 0.8rem;
    border-bottom: 0.02rem solid #ededed;
    border-left: 0.02rem solid #f8f8f8;
    opacity: 0.5;
    font-size: 0.17rem;
    background-color: rgb(232, 232, 232);
    overflow: hidden;
  }

  .left li:first-child {
    background-color: white;
    opacity: 1;
    opacity: 1;
  }

  .right {
    width: 76%;
    float: left;
    background-color: white;
  }

  .right ul {
    width: 100%;
  }

  .right .divh {
    height: 0.6rem;
    background-color: rgb(232, 232, 232);
    line-height: 0.6rem;
    width: 100%;
  }

  .right .span1 {
    margin-left: 0.15rem;
    opacity: 0.7;
    font-weight: bolder;

  }

  .right .span2 {
    font-size: 0.15rem;
    opacity: 0.5;
  }

  .right li img {
    width: 0.6rem;
    height: 0.6rem;
  }

  .lis {
    height: 1.8rem;
    /*overflow: hidden;*/
  }

  .lis img {
    float: left;
  }

  .arrs {
    float: left;
  }
</style>
