<template>
    <div id="app">
      <div class="headtop">
        <span class="jt" @click="fh"><</span>
        <span class="tit">{{this.$route.query.tit}}</span>
      </div>
      <div class="sort">

        <div class="titt" @click="dj">
          <span :class="{xz:orxz}" v-if="!orxz" @click="orshow($event,tit)" style="line-height: 1.478rem">{{this.$route.query.tit}}</span>
          <span v-if="orxz" :class="{xz:orxz}" @click="orshow($event,tit)" style="line-height: 1.478rem">分类</span>
          <span class="el-icon-caret-bottom" :class="{xz:orxz}"></span>
        </div>
        <div class="titt" @click="dj1">
          <span :class="{xz:orz}" style="line-height: 1.478rem"  @click="orshow1">排序</span>
          <span class="el-icon-caret-bottom" :class="{xz:orz}"></span>
        </div>
        <div class="titt" @click="dj2">
          <span :class="{xz:orx}" style="line-height: 1.478rem"  @click="orshow2">筛选</span>
          <span class="el-icon-caret-bottom " :class="{xz:orx}"></span>
        </div>
      </div>
      <!--以下为导航栏-->
<!--食品分类-->
      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box nav">
        <div class="left">
        <ul class="oneul">
          <li v-for="(al,index) in all" class="oneli">
            <img :src="al.image_url" alt="" class="tb" v-if="!index==0">
            <span class="alname" @click="dj3(index,$event)" >{{al.name}}</span>
            <span class="sum">{{al.count}}</span>
            <span class="el-icon-arrow-right"></span>
          </li>
        </ul>
        </div>
        <div class="right">
          <ul class="oneul">
            <li v-for="(al,index) in sz" class="twoli">
              <span class="alname" v-show="index!=0" @click="dj4(al.id,$event)">{{al.name}}</span>
              <!--<span class="alname">{{al.name}}</span>-->
              <span class="cou" v-show="index!=0">{{al.count}}</span>
            </li>
          </ul>
            </div>
          <div class="bo"></div>
        </div>
      </transition>

<!--排序-->
      <transition name="el-zoom-in-top">
      <div class="px  transition-box" v-show="show3">
        <ul class="oneul">
          <li class="ll" id="only" @click="dh($event,index)" v-for="(a,index) in ls">
            <img :src="a.im" class="imgs">
            <span class="texts">{{a.text}}</span>
            <span class="duihao"></span>
          </li>
        </ul>
      </div>
      </transition>
<!--sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-->
<!--配送方式-->
      <transition name="el-zoom-in-top">
      <div class="px transition-box" v-show="show4" >
        <div id="psfs">
         <p >配送方式</p>
         <li id="fn">
        <img src="@/assets/img/bird.png" class="bi">
        <span>蜂鸟专送</span>
        </li>
        </div>
        <p class="sjsx">商家属性(可以多选)</p>
        <div>
          <ul class="yx">
            <li  class="lii"  @click="swwww">
              <span data-v-6cc1fce6="" class="filter_icon" style="color: rgb(63, 189, 230); border-color: rgb(63, 189, 230);">品</span>
              <span class="" ></span>
              <span class="sp">品牌商家</span>
            </li>
            <li class="lii"  @click="swwww" >
              <span data-v-6cc1fce6="" class="filter_icon"
                      style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);">保</span>
              <span class="" ></span>
            <span class="sp">外卖保</span>
            </li>
            <li class="lii"  @click="swwww" >
              <span data-v-6cc1fce6="" class="filter_icon" style="color: rgb(87, 169, 255); border-color: rgb(87, 169, 255);">准</span>
              <span class="" ></span>
              <span class="sp">准时达</span>
            </li>
            <li class="lii"  @click="swwww" >
              <span data-v-6cc1fce6="" class="filter_icon" style="color: rgb(232, 132, 45); border-color: rgb(232, 132, 45);">新</span>
              <span class="" ></span>
              <span class="sp">新店</span>
            </li>
            <li class="lii"  @click="swwww" >
              <span data-v-6cc1fce6="" class="filter_icon" style="color: rgb(255, 78, 0); border-color: rgb(255, 78, 0);">付</span>
              <span class=""></span>
              <span class="sp">在线支付</span>
            </li>
            <li class="lii" @click="swwww" :aaa="false">
              <span data-v-6cc1fce6="" class="filter_icon" style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);">票</span>
              <span class=""></span>
              <span class="sp">开发票</span>
            </li>
          </ul>
        </div>
        <footer data-v-6cc1fce6="" class="confirm_filter">
          <div data-v-6cc1fce6="" class="clear_all filter_button_style">清空</div>
          <div data-v-6cc1fce6="" class="confirm_select filter_button_style">确定
          <span data-v-6cc1fce6="" style="display: none;">(0)</span>
        </div>
        </footer>
      </div>
      </transition>



      <div class="liebiao">
        <ul>
          <li v-for="al in alll" class="sjli" @click="car">
            <img :src="imghf+al.image_path" alt="" class="sj">
            <div class="shopright">
              <header data-v-2df9c5b6="" class="shop_detail_header"><h4 data-v-2df9c5b6="" class="shop_title ellipsis premium"><span class="pp">品牌</span>效果演示</h4>
                <ul data-v-2df9c5b6="" class="shop_detail_ul">
                  <li data-v-2df9c5b6="" class="supports">保</li>
                  <li data-v-2df9c5b6="" class="supports">准</li>
                  <li data-v-2df9c5b6="" class="supports">票</li>
                </ul>
              </header>
              <el-rate class="block"
                       v-model="al.rating"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="{value}">
              </el-rate>
              <span class="ys">月售{{al.recent_order_num
}}单</span>
              <span data-v-2df9c5b6="" class="delivery_style delivery_left">蜂鸟专送</span>
              <span data-v-2df9c5b6="" class="delivery_style delivery_right">准时达</span>
              <h5>
                <p data-v-2df9c5b6="" class="fee">
                  ¥20起送
                  <span data-v-2df9c5b6="" class="segmentation">/</span>
                  配送费约¥5
                </p>
                <p data-v-2df9c5b6="" class="distance_time">
                  <span class="dis">1383.3公里</span>
                  <span data-v-2df9c5b6=""class="segmentation">/</span>
                  <span data-v-2df9c5b6="" class="order_time">21小时4分钟</span>
                </p>
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import user from "@/assets/img/user.png";
    import px from "@/assets/img/znpx.png"
    import jl from "@/assets/img/jlzj.png"
    import xl from "@/assets/img/xl.png"
    import qs from "@/assets/img/qs.png"
    import ps from "@/assets/img/pssd.png"
    import pf from "@/assets/img/pf.png"
    export default {
      name: "all",
      data() {
        return {
          orxz: false,
          orx: false,
          orz: false,
          all: null,
          sz: '',
          jd:this.$route.query.jd,
          wd:this.$route.query.wd,
          tit:this.$route.query.tit,
          index:null,
          show2:false,
          show3:false,
          show4:false,
          duihao:false,
          alll:'',

          imghf:'https://elm.cangdu.org/img/',
          sw:false,
          ls:[
            {
              im:px,
              text:"智能排序"
            },{
            im:jl,
              text:"距离最近"
            },{
            im:xl,
              text:"销量最高"
            },{
            im:qs,
              text:"起送价最低"
            },{
            im:ps,
              text:"配送速度最快"
            },{
            im:pf,
              text:"评分最高"
            }
          ]
        }
      },
      methods: {
          car(){

               this.$router.push({name:'car'})
          },
        dh($event,index){
          var ll =document.getElementById("only")
          if($event.target == ll){
            for(let i = 0;i<$event.target.parentNode.childNodes.length;i++){
              $event.target.parentNode.childNodes[i].childNodes[4].className = "duihao"
            }
            $event.target.parentNode.childNodes[index].childNodes[4].className = "el-icon-check duihao"
          }else{
            for(let i = 0;i<ll.parentNode.childNodes.length;i++){
              ll.parentNode.childNodes[i].childNodes[4].className = "duihao"
            }
            ll.parentNode.childNodes[index].childNodes[4].className = "el-icon-check duihao"
          }
          this.show3=!this.show3
          if(index==0){
            index = 4;
          }else if(index==1){
            index = 3
          }else if(index==2){
            index =5
          }else if(index==3){
            index=6
          }else if(index==4){
            index =1
          }else if(index==5){
            index=2
          }else{
            index=3
          }
          Vue.axios.get(`http://cangdu.org:8001/shopping/restaurants?latitude=${this.jd}&longitude=${this.wd}&order_by=${index}`).then((response)=>{
            //点击食品分类时的数据
            console.log(response.data);
            this.alll=response.data
          })
          },
        dj() {
          this.orxz = !this.orxz;
          this.orx = false;
          this.orz = false
        },
        dj1() {
          this.orz = !this.orz;
          this.orxz = false;
          this.orx = false;
          this.show2=false
        },
        dj2() {
          this.orx = !this.orx;
          this.orxz = false;
          this.orz = false

        },
        dj3(index,$event) {
            for(let i = 0;i<$event.target.parentNode.parentNode.childNodes.length;i++){
              $event.target.parentNode.parentNode.childNodes[i].style="background:#f1f1f1"
            }
            $event.target.parentNode.style="background:white";
             this.sz = this.all[index].sub_categories;

        },
        dj4(index,$event){
          this.show3 =false;
          this.show2 =false;
          console.log(index);
          console.log(this.jd)
          Vue.axios.get(`http://cangdu.org:8001/shopping/restaurants?latitude=${this.jd}&longitude=${this.wd}&restaurant_category_ids[]=${index}`).then((response)=>{
            //点击食品分类时的数据
            console.log(response.data);
            this.alll=response.data
          })

        },
        orshow1(){
         this.show2=false;
         this.show3=!this.show3;
          this.show4 =false
        },
        orshow2(){
          this.show2=false;
          this.show3=false;
          this.show4 =!this.show4;
        },
        orshow($event,tit){
          this.show2=!this.show2;
          this.show3=false
          this.show4=false
          if(tit == "甜品饮品"){
           tit = 8
          }else if(tit =="商超便利"){
            tit = 5
          }else if(tit == "美食"||tit=="简餐"||tit=="新店特惠"||tit=="麻辣烫"||tit=="包子粥店"||tit=="汉堡薯条"){
            tit =1
          }else if(tit == "川湘菜"){
            tit = 4
          }else if(tit == "鲜花蛋糕"){
            tit = 6
          }else if(tit =="日韩料理"||tit=="披萨意面"){
            tit = 0
          }else if(tit =="果蔬生鲜"){
            tit = 3
          }
          var a = $event.target.parentNode.parentNode.nextSibling.nextSibling.childNodes[0].childNodes[0];
          for(let i = 0;i<a.childNodes.length;i++){
            a.childNodes[i].style="background:#f1f1f1"
          }
          a.childNodes[tit].style="background:white";
          this.sz = this.all[tit].sub_categories;
        },
        swwww(e){
          console.log(e)
          console.log("666");
          var lii = document.getElementsByClassName("lii");
             if(e.target.childNodes[2].getAttribute("class")=="el-icon-check"){
               console.log("6")
               e.target.childNodes[2].className="";
               e.target.childNodes[4].style="color:black"
               e.target.childNodes[0].style="display:inline"
             }else{
               console.log("7");
               for(let i = 0;i<lii.length;i++) {
                 lii[i].childNodes[2].className = "";
                 lii[i].childNodes[4].style = "color:black";
                 lii[i].childNodes[0].style = "display:inline"
               }

               e.target.childNodes[0].style="display:none";
               e.target.childNodes[4].style="color:blue";
               e.target.childNodes[2].className="el-icon-check";
               e.target.childNodes[2].style="color:blue";
             }
           console.log(lii[5].getAttribute("class"))
           console.log(e.target.childNodes);

        },
          fh(){
            this.$router.push({name:"home"});
          }
      },
      created() {
        Vue.axios.get(`http://cangdu.org:8001/shopping/v2/restaurant/category`).then((response) => {
          this.all = response.data;
          // console.log(this.all);
          // console.log(this.sz);
          function insert_flg(str, flg, length) {
            var newstr = "";
            var tmp = str.substring(0, 1);
            newstr += tmp + flg;
            var tmp = str.substring(1, 3);
            newstr += tmp + flg;
            var tmp = str.substring(3, length)
            newstr += tmp;
            return newstr;
          }

          function creatsrc(str) {
            var hf = "https://fuss10.elemecdn.com/";
            if (str == null) {
              return 0
            }
            var temp = insert_flg(str, "/", str.length);
            if (str.length == 35) {
              var hz = ".png"
            } else {
              var hz = ".jpeg"
            }
            var newtemp = temp + hz;
            str = hf + newtemp;
            return str;
          }

          for (var i = 0; i < this.all.length; i++) {
            this.all[0].image_url = null;
            this.all[i].image_url = creatsrc(this.all[i].image_url)
            this.all[7].image_url = user;
          }

        });
        Vue.axios.get(`http://cangdu.org:8001/shopping/restaurants?latitude=${this.jd}&longitude=${this.wd}`).then((response)=>{
           this.alll = response.data;
           // console.log(this.alll)
        });

      }
    }
</script>

<style scoped>
  /* 筛选 */
  .clear_all {
    background-color: #fff;
    margin-right: .5rem;
    border: .025rem solid #fff;
    text-align: center;
    align-items: center;
  }
  .confirm_select{
    background-color: #56d176;
    color: #fff;
    border: .025rem solid #56d176;
    text-align: center;
    align-items: center;
  }
  .filter_button_style{
    width: 47%;
    height: 1.8rem;
    font-size: .8rem;
    line-height: 1.8rem;
    border-radius: .2rem;
  }
.confirm_filter{
    display: -ms-flexbox;
    display: flex;
    background-color: #f1f1f1;
    width: 100%;
    padding: .3rem .2rem;
  }
  .yx{
    display: flex;
    flex-wrap: wrap;
    padding: 0 .5rem;
    background-color: #fff;
    padding-left: 1.347rem;
  }
  .lii{
    display: flex;
    align-items: center;
    border: .025rem solid #eee;
    -ms-flex-align: center;
    width: 3.7rem;
    height: 1.4rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
  }
  .sp{
    font-size: .4rem;
    color: #333;}
  .bi{
    width: 1rem;
    height: 1rem;
  }
  #psfs{
    width: 100%;
    background: white;
    padding-left:0.5rem ;
  }
  #fn{
    width: 30%;
    border: 0.1rem solid #f5f5f5;
  }
  .sjsx{
    width: 100%;
    font-size: .4rem;
    color: #333;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .5rem;
    background-color: #fff;
  }
  .filter_icon {
    width: .8rem;
    height: .8rem;
    font-size: .5rem;
    border: .025rem solid #e4e4e4;
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    text-align: center;
  }
  /*排序*/
  .imgs{
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 .3rem 0 .8rem;
  }
  .duihao{
    font-size: 0.869rem;
    color: deepskyblue;
    position: absolute;
    right: 1rem;

  }
  .ll{
    height: 2.5rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    color: #666;
    background: white;
    font-size: 0.3rem;
  }
  .px{
    position: fixed;
    height: 8rem;
    z-index: 102;
    top: 3.39rem;
    left: 0;
    right: 0;
    flex-direction: column;
    -ms-flex-align: start;
    align-items: flex-start;
    background-color: #f1f1f1;
  }
  /*end*/
  .bo{
    width: 100%;
    height:35.30rem;
    margin-top: 16.0rem;
    background: #b2b2b2;
    opacity: 0.5;
  }
  .liebiao{
    margin-top: 3.78rem;
  }
.headtop{
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
.nav{
  position: fixed;
  left: 0;
  right: 0;
  top: 3.39rem;
  z-index: 102;

}
.jt{
  font-size:1.4rem ;
  color: white;
}
  .tit{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
  }
  .sort{
    display: flex;
    justify-content: space-around;
    justify-items: center;
    flex-direction: row;
    border-bottom: .025rem solid #f1f1f1;
    background: rgba(255,255,255,1);
    position: fixed;
    z-index: 101;
    left: 0;
    right: 0;
    top: 1.95rem;
    width: 100%;
    height: 4%;

  }
  .titt{
    border-right: .025rem solid #f1f1f1;
    vertical-align: center;
    padding-bottom: 0.434rem;
    text-align: center;
  }
  .titt:last-child{
    border: 0;
  }
  .el-icon-caret-bottom{
    transition: all 0.5s;
  }
  .xz{
    color: deepskyblue;
    transform: rotateZ(180deg);
    transition: all 0.5s;
  }
  .tb{
    width: .8rem;
    height: .8rem;
    vertical-align: middle;
    margin-right: .2rem;
  }
  .alname{
    font-size: .5rem;
    color: #666;
    line-height: 1.8rem;
  }
  .ha{

  }
  .left{
    width: 50%;
    height: 31%;
    background: #f1f1f1;
   margin-top: 0;
      position: absolute;
      left: 0;
  }
  .right{
    background: white;
    width: 50%;
    height: 16.08rem;
    overflow-x: hidden;
  }
.right::-webkit-scrollbar {display:none}
  .sum{
    display: inline-block;
    background-color: #ccc;
    font-size: .4rem;
    color: #fff;
    padding: 0 .1rem;
    border: .025rem solid #ccc;
    border-radius: .8rem;
    vertical-align: middle;
    margin-left: 1.17rem;
  }
  .el-icon-arrow-right{
    color: #cfcfcf;
  }
  .oneli{
    padding-left: 0.3rem;
  }
  .twoli{
    border-bottom: 1px solid whitesmoke;
    margin-left: 1.17rem;
  }
  .cou{
    display: inline-block;
    font-size: .4rem;
    color: black;
    vertical-align: middle;
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
.sjli{
  display: flex;
  border-bottom: .025rem solid #f1f1f1;
  padding: .7rem .4rem;
}
.sj{
  width: 2.7rem;
  height: 2.7rem;
  display: block;
  margin-right: .4rem;
}
.shop_detail_header{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.shop_title {
  width: 8.5rem;
  color: #333;
  padding-top: .01rem;
  font: .65rem/.65rem PingFangSC-Regular;
  font-weight: 700;
}
.shop_detail_ul {
  display: -ms-flexbox;
  display: flex;
  transform: scale(.8);
  margin-right: -.3rem;
}
.shopright{
  position: relative;
}
.supports{
  font-size: .5rem;
  color: #999;
  border: .025rem solid #f1f1f1;
  padding: 0 .04rem;
  border-radius: .08rem;
  margin-left: .05rem;

}
.pp{
  content: "\54C1\724C";
  display: inline-block;
  font-size: .5rem;
  line-height: .6rem;
  color: #333;
  background-color: #ffd930;
  padding: 0 .1rem;
  border-radius: .1rem;
  margin-right: .2rem;
}
.block{
  transform: scale(0.6);
  position: absolute;
  display: -ms-flexbox;
  display: flex;
  top: 1rem;
  left: -0.8rem;
}
.ys{
  transform: scale(.8);
  display: inline-block;
  margin-left: 4rem;
  line-height: 3;
  font-size: .3rem;
  color: #666;
}
.delivery_left{
  display: inline-block;
  transform: scale(0.6);
  font-size: .1rem;
  color: #fff;
  background-color: #3190e8;
  border: .025rem solid #3190e8;
  margin-left: 0.826rem;
}
.delivery_right{
  display: inline-block;
  transform: scale(0.6);
  font-size: .1rem;
  color: #3190e8;
  border: .025rem solid #3190e8;
  margin-left: -0.826rem;
}
.fee{
  transform: scale(.7);
  font-size: .5rem;
  color: #666;
  margin-left: -1rem;
}
.distance_time{
  transform: scale(.7);
  position: absolute;
  right: -1.30rem;
  top: 2.13rem;
}
.dis{
  color: #999;
}
.order_time{
  color: #3190e8;
}
</style>
