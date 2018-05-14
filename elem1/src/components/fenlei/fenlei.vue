<template>
<div>
  <div>
    <span><</span>
    <span>甜品饮品</span>
  </div>
  <div>

  </div>


  <div class="two">
    <ul>

      <li v-for="sp in shangpu" class="one10">
        <router-link to="/" class="one11">
          <div class="one12">
            <img :src="`//elm.cangdu.org/img/${sp.image_path}`" alt="" style="width: 0.8rem;" />
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
</template>

<script>
  const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
  import Vue from "vue"
    export default {
        name: "fenlei",
        data(){
          return{
            title:this.$route.query.title,
            latitude:this.$route.query.latitude,
            longitude:this.$route.query.longitude,
            shangpu:[]
          }

        },
      created(){

        let api3 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}`
        let api4=API_PROXY+'http://v.juhe.cn/toutiao/index?type=top&key=c1c99a91ba4e27505f67f4969cec9a02'
        Vue.axios.get(api3).then((response) => {
          console.log(response.data)
this.shangpu= response.data
        });
        Vue.axios.get(api4).then((response) => {
          console.log(response.data)

        });

      }
    }
</script>

<style scoped>
  .one12 img {
    width: 0.8rem;
    height: 0.8rem;
  }
  .one11{
    display: flex;
    justify-content: space-between;
    color: black;
  }
  .one21{
    width:2rem;
    margin-left: 0.1rem;
  }
  .one22 span:nth-child(1){
    font-size: 0.15rem;
    font-weight: bolder;
    background: #ffd930;
  }
  .one31{
    display: flex;
    justify-content: left;
  }
  .one31 div {
    transform: scale(0.6);
    margin-left: -0.3rem ;
    margin-top: 0.15rem;
  }
  .one31 span{
    font-size: 0.12rem;
    margin-top: 0.2rem;
    margin-left: -0.25rem;
  }
  .one41{
    font-size: 0.12rem;
    margin: 0.2rem 0;
  }
  .one51 span{
    font-size: 0.12rem;
    margin-left: 0.05rem;
    border: 1px solid lightgray;
    color: #999;
  }
  .one51{
    float: right;
  }
  .one61 span{
    font-size: 0.12rem;
    border: 1px solid #3190e8;
    color: #3190e8;
    border-radius: 0.03rem;
  }
  .one61 span:nth-child(1){
    background: #3190e8;
    color: white;
  }
  .one61{
    float: right;
    margin: 0.2rem 0;
  }

  .one91{
    overflow: hidden;
  }
  .one71{
    font-size: 0.12rem;
    margin-left: 0.2rem;
  }
  .one10{
    border-bottom: 1px solid #eee;
    margin-top: 0.2rem;
  }
  .two{
    width: 96%;
    margin: 0 auto;
  }
</style>
