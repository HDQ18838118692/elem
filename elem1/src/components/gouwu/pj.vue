<template>
  <div class="pj_one">
<div class="pj_one1">
  <div class="pj_one11">
    <div class="pj_one12">{{val1}}</div>
    <div class="pj_one13">综合评价</div>
    <div class="pj_one14">
      <span>
      高于周边商家{{Number(xj.compare_rating*100).toFixed(1)+'%'}}
    </span>
    </div>
  </div>
  <div class="pj_one22">
<div class="pj_one121">
  服务态度：<el-rate
  v-model="value5"
  disabled
  text-color="#ff9900"
  >
</el-rate>
  <span>{{value5}}</span>
</div>
    <div class="pj_one122">
      菜品评价：<el-rate
        v-model="value6"
        disabled

        text-color="#ff9900"
        score-template="{value}">
      </el-rate>
      <span>{{value6}}</span>
    </div>
    <div class="pj_one123">
      送达时间：<span>{{xj.deliver_time}}分钟</span>
    </div>
  </div>
</div>
 <div class="fl_one">
   <div style="width: 96%;margin: 0 auto">
   <span v-for=" fl1 in fl" @click="blue(fl1._id,$event)" class="blue1">
{{fl1.name}}({{fl1.count}})
   </span>
   </div>
 </div>
  <div class="xx_one">
    <ul>
      <li v-for="xx1 in xx" class="xx_one1">
        <div class="xx_one2">
          <img src="./img/5.png" alt="">
        </div>

        <div class="xx_one3">
          <div class="xx_one4">
            <span>{{xx1.username}}</span>
            <span>{{xx1.rated_at}}</span>
          </div>
          <div class="xx_one5">
            <el-rate
            v-model="xx1.rating_star"
            disabled
            text-color="#ff9900"
            score-template="{value}">
            </el-rate>
            <span>{{xx1.time_spent_desc}}</span>
          </div>
          <div v-for="xx2 in xx1.item_ratings
" class="xx_one6">
            <div class="xx_one7">
            <img :src='`https://fuss10.elemecdn.com/${xx2.image_hash}.jpeg`' alt="">

            </div>
            <div class="xx_one8">
              <span>{{xx2.food_name}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  export default {
    name: "pj",
    data() {
      return {
        id: this.$route.query.id,
        xj:{},
        fl:[],
        xx:[],
        value5:0,
        value6:0,
        val1:0

      }
    },
    methods:{
      blue(id,e){
        $(".blue1").css("background","#ebf5ff")

var blue1=document.getElementsByClassName("blue1")[2]
        blue1.style.background="#f5f5f5"
        e.target.style.background="#3190e8"
      }
    },
    created() {

      console.log(this.id)
      this.axios.get(`http://cangdu.org:8001/ugc/v2/restaurants/${this.id}/ratings/scores`).then((res) => {
        console.log(res.data);
        this.xj=res.data
        this.value5=Number(this.xj.service_score.toFixed(1))
        console.log(this.value5)
        this.value6=Number(this.xj.food_score.toFixed(1))
        this.val1=this.xj.overall_score.toFixed(1)
      });

      this.axios.get(`http://cangdu.org:8001/ugc/v2/restaurants/${this.id}/ratings/tags
`).then((res) => {
        console.log(res.data);
        this.fl=res.data
      });
      this.axios.get(`http://cangdu.org:8001/ugc/v2/restaurants/${this.id}/ratings?offset=0&limit=10
`).then((res) => {
        console.log(res.data);
        this.xx=res.data
      });
    }
  }
</script>

<style scoped>
  .blue1:nth-child(1){
    background: #3190e8;
  }
.xx_one{
  width: 100%;
  background: white;

}
.xx_one1{
  width: 96%;
  margin: 0 auto;
  display: flex;
 padding-top: 0.2rem;
}
.xx_one2 img{
  width: 0.25rem;
}
.xx_one3{
  margin-left: 0.2rem;
  width: 4rem;
}
.xx_one5{
  position: relative;
  margin: 0.1rem 0;
}
.xx_one4{
overflow: hidden;
}
.xx_one4 span:nth-child(2){
  float: right;
  font-size: 0.15rem;
}
.xx_one5 .el-rate {
  position: absolute;
  left: -0.2rem;
  transform: scale(0.6);
}
.xx_one6{
  /*display: flex;*/
  display: inline-block;
}
.xx_one7 img{
  width: 1rem;
  margin-right: 0.1rem;
}
.xx_one8{
  width: 0.5rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size: 0.15rem;
  border: 1px solid silver;
  padding: 0.1rem;
  border-radius: 0.05rem;
  margin-right: 0.1rem;
  margin-top: 0.1rem;
}
.xx_one5 span{
  margin-left: 0.7rem;
  font-size: 0.15rem;
}
.fl_one{

    margin: 0 auto;
    padding-top: 0.1rem;
    margin-top: 0.05rem;
    background: white;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .fl_one span:nth-child(3){
    background: #f5f5f5;
  }

  .fl_one span{
    background: #ebf5ff;
    display: inline-block;
    padding: 0.15rem 0.1rem;
    margin-top: 0.05rem;
    margin-left: 0.1rem;
    font-size: 0.16rem;
    border-radius: 0.05rem;
  }
.pj_one{
  position: absolute;
  left: 0;
  top: 2.02rem;
  right: 0;
  background: lightgray;

}
.pj_one1{
  display: flex;
  background: white;
margin-bottom: 0.1rem;
  padding-bottom: 0.2rem;
}

  .pj_one11{
margin-left: 0.3rem;
    width: 2rem;
    text-align: center;
  }
  .pj_one12{
    font-size: 0.4rem;
    color: orange;
    margin-top: 0.3rem;
    padding-bottom: 0.05rem;
  }
  .pj_one14{
    font-size: 0.05rem;
    color: lightgray;
    margin-top: 0.05rem;
  }
  .pj_one22{
/*margin-left: 0.5rem;*/
    width: 2.5rem;
    color: gray;
  }
  .pj_one121{
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
    position: relative;

  }
.pj_one121 span,.pj_one122 span{
  color: orange;
  margin-left: 0.5rem;
}
.pj_one122{
  position: relative;
  width: 3rem;
}

  .pj_one123{
    margin-top: 0.1rem;

  }
.pj_one123 span{
  font-size: 0.1rem;
}
.el-rate{
  position: absolute;
  transform: scale(0.5);
  letter-spacing: -0.1rem;
  left:0.7rem;
  top: -0.01rem;
}


</style>
