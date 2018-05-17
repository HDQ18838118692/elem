<template>
	<div class="gouwu">
<div style="position: fixed;left: 0;top: 0;right: 0;z-index: 10;">
		<div class="header" :style="'background-image:url('+`//elm.cangdu.org/img/${datas.image_path}`+');'">
      <div class="div1"></div>
			<span @click="go" class="span1"><</span>
			<div class="left">
				<img :src="`//elm.cangdu.org/img/${datas.image_path}`" alt="" />
			</div>
			<div>
				<p class="p1">{{datas.name}}</p>
				<p v-for="val in datas.piecewise_agent_fee" class="p2">商家演示/分钟送达/{{val}}</p>
				<p class="p2">公告：{{datas.promotion_info}}</p>
        <p class="p3" v-for="val in datas.activities"><span :style="'background-color:#'+val.icon_color"> {{val.icon_name}}</span><span>{{val.description}}</span>（APP专享）<span class="span3">1个活动 &nbsp ></span></p>

				<span class="span2">></span>
			</div>
		</div>
		<div class="main">
     <router-link to="/sp"> <div class="mleft" @click="chcolor">商品</div></router-link>
      <router-link to="/sp"> <div class="mright" @click="chcolor">评价</div></router-link>

    </div>
    </div>
    <router-view></router-view>
		<div class="footer"></div>
	</div>
</template>

<script>
	import Vue from "vue";
	export default {
		name: "gouwu",
		data() {
			return {
				id:"",
				datas: {},
			}
		},
		created() {
      if(this.$route.params.id){
        this.id=this.$route.params.id
        localStorage.setItem("id",JSON.stringify(this.id))
      }else{
        this.id=JSON.parse(localStorage.getItem("id"))
      }
			let api1 = "http://cangdu.org:8001/shopping/restaurant/" + this.id;
			// console.log(api1)
			Vue.axios.get(api1).then((res) => {
				this.datas = res.data;
				// console.log(this.datas)
			});
		},
		methods: {
			go() {
				history.go(-1);
			},
      chcolor(e){

			  if( e.target.tagName=="DIV"){
			    $(".main>a>div").css({
            color:'black',
            borderBottom:0
          })
          e.target.style.color="blue";
          e.target.style.borderBottom="3px solid blue";
         }


      }
		}
	}
</script>

<style scoped>
	.header {
		/*width: 375px;*/
		background-size: cover;
		color: white;
		overflow: hidden;
		position: relative;
		height: 1.325rem;
	}
  .div1{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(108,108,108,0.3);
  }
	.header .span1{
		position: absolute;
		left: 0.1rem;
		top: 0.05rem;
		font-size: 0.25rem;
	}
	.span2{
		position: absolute;
		bottom: 0.65rem;
		right: 0.2rem;
		font-size: 0.25rem;
		opacity: 0.75;
	}
	.left {
		margin: .1rem;
	}

	.left img {
		width: 0.85rem;
		height: 0.85rem;
	}

	.p1 {
		font-size: 0.22rem;
		margin: 0.15rem;
    opacity: 0.9;
	}

	.p2 {
		font-size: 0.15rem;
		margin: 0.22rem;
		opacity: 0.75;
	}
  .p3{
    color: #fff;
    font-size: 0.15rem;
    margin-bottom: 0.15rem;
  }
  .p3 span:first-child{
    margin: 0 0.1rem 0 0.1rem;
    font-size: 0.17rem;
    opacity: 1;
  }
  .p3 span:nth-child(2){
    opacity: 0.75;
  }
  .p3 span:last-child{
    float: right;
    margin-right: 0.2rem;
  }
  .main{
   /* width: 375px;*/
    height: 0.7rem;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    border-bottom: 1px solid #e6e6e6;
  }
  .main >div{
    display: inline-block;
  
    padding-bottom: 0.8rem;
    margin-bottom: 0.1rem;
    color: black;
  }
  .mleft{
    color: blue;
    border-bottom:3px solid blue ;
  }
  .main a{
    display: inline-block;
  }
</style>
