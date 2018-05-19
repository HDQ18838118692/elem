<template>
  <div class="waimai">
    <div class="mb">
      <div class="animated bounce infinite">
        <img :src="img" alt="">
      </div>
    </div>
    <div class="head">
      <div class="head1">
        <router-link to="/" class="a">
          <i class="el-icon-search"></i>
        </router-link>
        <router-link to="/">{{cun.name}}</router-link>
        <router-link to="/">
          <i class="el-icon-star-on"></i>
        </router-link>
      </div>
    </div>
    <div class="mask">
      <v-touch v-on:swipeleft="onSwipeLeft" @swiperight="onSwipeRight" class="center">
        <div class="lb">
          <router-link :to="{name:'fenlei',query:{latitude:cun.latitude,longitude:cun.longitude,title:lb11.title}}"
                       v-for="(lb11,index) in lb2" :key="index">
            <img :src="`https://fuss10.elemecdn.com${lb11.image_url}`"/>
            <p>{{lb11.title}}</p>
          </router-link>
        </div>
        <div class="lb">
          <router-link :to="{name:'fenlei',query:{latitude:cun.latitude,longitude:cun.longitude,title:lb11.title}}"
                       v-for="lb11 in lb1" :key="lb11.title">
            <img :src="`https://fuss10.elemecdn.com${lb11.image_url}`"/>
            <p>{{lb11.title}}</p>
          </router-link>
        </div>
        <div class="lb">
          <router-link :to="{name:'fenlei',query:{latitude:cun.latitude,longitude:cun.longitude,title:lb11.title}}"
                       v-for="lb11 in lb2" :key="lb11.title">
            <img :src="`https://fuss10.elemecdn.com${lb11.image_url}`"/>
            <p>{{lb11.title}}</p>
          </router-link>
        </div>
        <div class="lb">
          <router-link :to="{name:'fenlei',query:{latitude:cun.latitude,longitude:cun.longitude,title:lb11.title}}"
                       v-for="lb11 in lb1" :key="lb11.title">
            <img :src="`https://fuss10.elemecdn.com${lb11.image_url}`"/>
            <p>{{lb11.title}}</p>
          </router-link>
        </div>
      </v-touch>
      <div class="dian">
        <div @click="left" class="tu1"></div>
        <div @click="right" class="tu2"></div>
      </div>
    </div>
    <div class="zhong"></div>
    <div>
      <div class="bottom1">
        <div class="fj">
          <i class="el-icon-loading"></i>
          <span>附近商家</span>
        </div>
        <div>
          <ul>

            <li v-for="sp in shangpu" class="one10">
              <router-link :to="{name:'sp',params:{id:sp.id}}" class="one11">
                <div class="one12">
                  <img :src="`//elm.cangdu.org/img/${sp.image_path}`" alt="" style="width: 0.8rem;"/>
                </div>
                <div class="one21">
                  <div class="one22">
                    <span>品牌</span>
                    <span>{{sp.name}}</span>
                  </div>
                  <div>
                    <div class="one31">
                      <el-rate v-model=sp.rating disabled show-score text-color="#ff9900" score-template="{value}">
                      </el-rate>
                      <span>月售{{sp.recent_order_num}}</span>
                    </div>
                    <div class="one41">
                      ￥20起送/配送费约￥5
                    </div>
                  </div>
                </div>
                <div class="one81">
                  <div class="one91">
                    <div class="one51">
                      <span>保</span>
                      <span>准</span>
                      <span>票</span>
                    </div>
                    <div class="one61">
                      <span class="one62">蜂鸟专送</span>
                      <span class="one63">准时达</span>
                    </div>
                  </div>
                  <div class="one71">
                    <span>{{sp.distance}}公里</span>/
                    <span>{{sp.order_lead_time}}</span>
                  </div>
                </div>
              </router-link>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from "vue";
  import img1 from "./img/懒羊羊.jpg";
  import img2 from "./img/懒羊羊2.jpg";
  import img3 from "./img/懒羊羊3.jpg";

  export default {
    name: "waimai",
    data() {
      return {
        geohash: "",
        cun: {},
        lb1: [],
        lb2: [],
        left1: "",
        startX: 0,
        endX: 0,
        shangpu: [],
        value5: null,
        imgs:[img1,img2,img3],
        img:"",


      }
    },
    created() {
      if (this.$route.params.geohash) {
        this.geohash = this.$route.params.geohash
        localStorage.setItem("geo", JSON.stringify(this.geohash))
      } else {
        this.geohash = JSON.parse(localStorage.getItem("geo"))
      }
      var index=0;


      setInterval(()=>{
        index++
        this.img=this.imgs[index];
        if(index>=2){
          index=-1
        }
      },1000);
      let api1 = `http://cangdu.org:8001/v2/pois/${this.geohash}`
      Vue.axios.get(api1).then((response) => {
        this.cun = response.data

      });
      let api2 = "http://cangdu.org:8001/v2/index_entry"
      Vue.axios.get(api2).then((response) => {

        var lb = response.data
        for (let i = 0; i < 8; i++) {
          this.lb1.push(lb[i])
        }
        for (let i = 8; i < 16; i++) {
          this.lb2.push(lb[i])
        }
      });
      let api3 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.cun.latitude}&longitude=${this.cun.longitude}`
      Vue.axios.get(api3).then((response) => {
        console.log(response.data)
        if (response.data) {

          $(".mb").css("display", "none");


        }
        this.shangpu = response.data;

      });
    },
    methods: {
      left(ev) {
        9
        ev.target.style.background = "red"
        ev.target.parentNode.lastChild.style.backgroundColor = "lightgray"
        sd($('.center'))

        function sd(mark) {
          var b = mark.offset().left
          console.log(b)
          var c = -375
          var d = 20
          var t = 0
          var timer2 = setInterval(function () {
            t++
            var x = b + c / d * t
            mark.css("left", x)
            if (t >= d) {
              clearInterval(timer2)
              if (b <= -750) {
                $('.center').css("left", -375)
                console.log(111)
              }
            }
          }, 20)
        }
      },
      right(ev) {
        ev.target.style.background = "red"
        ev.target.parentNode.firstChild.style.backgroundColor = "lightgray"
        sd($('.center'))

        function sd(mark) {
          var b = mark.offset().left
          console.log(b)
          var c = 375
          var d = 20
          var t = 0
          var timer2 = setInterval(function () {
            t++
            var x = b + c / d * t
            mark.css("left", x)
            if (t >= d) {
              clearInterval(timer2)
              if (b >= -375) {
                $('.center').css("left", -750)
                console.log(111)
              }
            }
          }, 20)

        }

      },
      onSwipeLeft() {
        if ($('.center').offset().left == -750) {
          $(".tu1").css('background-color', "red")
          $(".tu2").css('background-color', "lightgray")
        } else {
          $(".tu2").css('background-color', "red")
          $(".tu1").css('background-color', "lightgray")
        }
        sd($('.center'))

        function sd(mark) {
          var b = mark.offset().left
          console.log(b)
          var c = -375
          var d = 20
          var t = 0
          var timer2 = setInterval(function () {
            t++
            var x = b + c / d * t
            mark.css("left", x)
            if (t >= d) {
              clearInterval(timer2)
              if (b <= -750) {
                $('.center').css("left", -375)
                console.log(111)
              }
            }
          }, 20)
        }
      },
      onSwipeRight() {
        if ($('.center').offset().left == -750) {
          $(".tu1").css('background-color', "red")
          $(".tu2").css('background-color', "lightgray")
        } else {
          $(".tu2").css('background-color', "red")
          $(".tu1").css('background-color', "lightgray")
        }
        sd($('.center'))

        function sd(mark) {
          var b = mark.offset().left
          console.log(b)
          var c = 375
          var d = 20
          var t = 0
          var timer2 = setInterval(function () {
            t++
            var x = b + c / d * t
            mark.css("left", x)
            if (t >= d) {
              clearInterval(timer2)
              if (b >= -375) {
                $('.center').css("left", -750)
                console.log(111)
              }
            }
          }, 20)
        }
      }
    }
  }
</script>

<style scoped>
  .waimai {
    position: relative;
  }

  .mb {
    position: absolute;
    width: 100%;
    height: 8.3375rem;
    background-color: white;
    opacity: 0.7;
    left: 0;
    top: 0;
    z-index: 111111;
    text-align: center;
    padding-top: 3.2rem;
    /*display: none;*/

  }
.mb>div{
  animate-iteration-count: infinite;
}
  .mb img {
    width: 1rem;
    height: 1rem;


  }

  .head {
    height: 0.51rem;
    background: #3190e8;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 3;
  }

  .head1 {
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .head a {
    display: inline-block;
    line-height: 0.51rem;
    color: white;
  }

  .head a:nth-child(2) {
    width: 2.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.23rem;
  }

  .head a i {
    display: inline-block;
  }

  .lb a {
    display: inline-block;
    width: 25%;
    height: 0.25rem;
  }

  .lb a img {
    width: 0.5rem;
    margin: 0.2rem 0;
  }

  .mask {
    width: 100%;
    margin-top: 0.4rem;
    overflow: hidden;
    position: relative;
    height: 2.5rem;
  }

  .center {
    width: 400%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: -4.6875rem;
  }

  .lb {
    text-align: center;
    float: left;
    width: 25%;
  }

  .lb a p {
    display: block;
    font-size: 0.17rem;
    color: black;
    margin-bottom: 0.2rem;
  }

  .dian div {
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 0.5rem;
    background: lightgray;
    margin-left: 0.15rem;
  }

  .dian {
    display: flex;
    position: absolute;
    bottom: 0.1rem;
    left: 2rem;
  }

  .dian div:nth-child(1) {
    background: red;
  }

  .zhong {
    background: #EEEEEE;
    height: 0.12rem;
    border: 0.0125rem solid #e4e4e4;
  }

  .bottom1 {
    width: 96%;
    margin: 0 auto;

  }

  .fj {

    margin-top: 0.1rem;
    margin-bottom: 0.3rem;

    margin-top: 0.2rem;
    margin-bottom: 0.4rem;

  }

  .fj span {
    font-size: 0.16rem;
    color: #aaa;
  }

  .one12 img {
    width: 0.8rem;
    height: 0.8rem;
  }

  .one11 {
    display: flex;
    justify-content: space-between;
    color: black;
  }

  .one21 {
    width: 2rem;
    margin-left: 0.1rem;
  }

  .one22 span:nth-child(1) {
    font-size: 0.15rem;
    font-weight: bolder;
    background: #ffd930;
  }
  .one22 span:nth-child(2){
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 1.4rem;
    vertical-align: -0.05rem;
  }

  .one31 {
    display: flex;
    justify-content: left;
  }

  .one31 div {
    transform: scale(0.6);
    margin-left: -0.3rem;
    margin-top: 0.15rem;
  }

  .one31 span {
    font-size: 0.12rem;
    margin-top: 0.2rem;
    margin-left: -0.25rem;
  }

  .one41 {
    font-size: 0.12rem;
    margin: 0.2rem 0;
  }

  .one51 span {
    font-size: 0.12rem;
    margin-left: 0.05rem;
    border: 1px solid lightgray;
    color: #999;
  }

  .one51 {
    float: right;
  }

  .one61 span {
    font-size: 0.12rem;
    border: 1px solid #3190e8;
    color: #3190e8;
    border-radius: 0.03rem;
  }

  .one61 span:nth-child(1) {
    background: #3190e8;
    color: white;
  }

  .one61 {
    float: right;
    margin: 0.2rem 0;
  }

  .one91 {
    overflow: hidden;
  }

  .one71 {
    font-size: 0.12rem;
    margin-left: 0.2rem;
  }

  .one10 {
    border-bottom: 1px solid #eee;
    margin-top: 0.2rem;
  }

</style>
