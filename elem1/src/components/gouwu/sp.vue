<template>

	<div class="sp">

		<div class="left2">
			<div class="left1">
				<ul class="left">
					<li v-for="(data,index) in datas" @click="bai(index,$event)" class="li1" data="index">
						<!--<div class="num" v-show="true">{{num[index]}}</div>-->
						<img :src='`https://fuss10.elemecdn.com/${data.icon_url}.jpeg`' alt=""> {{data.name}}
					</li>
				</ul>
			</div>
		</div>
		<div class="right">

			<ul v-for="(data,index1) in datas" class="uls">
				<div class="divh">
					<span class="span1">{{data.name}}</span>
					<span class="span2">{{data.description}}</span>
					<span class="span3">...</span>
				</div>
				<li v-for="(arr,index) in data.foods" class="lis">
					<div v-for="(arr1,index) in arr.attributes" class="new3">
						<span v-if="arr1.icon_name=='新'
" :style="'border-top: 0.4rem solid #'+arr1.icon_color" class="new1">
<span>{{arr1.icon_name}}品</span>
						</span>
						<span v-if="arr1.icon_name=='招牌'
" :style="'color:#'+arr1.icon_color+';'+'border:1px solid #'+arr1.icon_color" class="new2">{{arr1.icon_name}}</span>
					</div>
					<img :src="`//elm.cangdu.org/img/${arr.image_path}`" alt="">
					<div class="arrs">
						<p class="this1">{{arr.name}}</p>
						<p class="this2">
							{{arr.description}}
						</p>
						<p class="this3">{{arr.tips}}</p>
						<p class="this4">
							<span v-if="arr.activity" :style="'color:#'+arr.activity.image_text_color+';border:1px solid #'+arr.activity.icon_color">{{arr.activity.image_text}}</span>
						</p>
						<p v-for="(ara,index) in arr.specfoods" class="this5">
							<span v-if="index==0">￥{{ara.price}}起</span>
						</p>
					</div>
					<div>
						<div v-if="arr.specfoods.length==1" class="gou2" @click="add1(arr.specfoods[0].price,arr.name,datas.length,data.foods.length,index1,index,$event)">
							<img src="./img/4.png" alt="" />
						</div>
						<div class="gou3" v-if="arr.specfoods.length==1">
							<img src="./img/5.png" alt="" @click="jian1(arr.specfoods[0].price,arr.name,index,$event)" />
							<span class="gou4">{{arr2[index]}}</span>
						</div>
					</div>
					<div style="position: relative;">
						<div v-if="arr.specfoods.length>1" class="gou1" @click="add2(arr.specfoods[0].specs_name
,$event)">
							选规格
						</div>
						<div class="maskx" @click="xiaoshi">
							<div class="mask">
								<div class="mask0">
									<div class="mask2">
										<span>{{arr.name}}</span>
										<div>规格</div>
									</div>
									<div class="mask1">
										<span v-for="(price,index) in arr.specfoods" @click="qian(price.specs_name,price.price,$event)" class="change">
										{{price.specs_name}}
									</span>
									</div>
									<div class="mask4">
										<div><span>￥</span>{{money}}</div>
										<div @click="join(arr.name,index,$event)">加入购物车</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</li>
			</ul>
		</div>
		<div class="footer">
<div class="foot1" style="position: absolute;left: 0;bottom:.6rem">
	<div class="foot11">
		<div class="foot111">
			购物车
		</div>
		<div class="foot112">清空</div>
	</div>
	<ul v-if="arrr.length">
		<li v-for="(aar,index) in arrr" class="foot12">

			<div class="foot13">
				{{aar.name}}
			</div>
			<div class="foot14">
				￥{{aar.price}}
			</div>
			<div class="foot15">
				<div class="foot151"><img src="./img/4.png" alt="" /></div>
				<div class="foot152"><img src="./img/5.png" alt=""/>
							<span>{{arr2[index]}}</span>
				</div>
			</div>
		</li>
	</ul>
</div>
			<div class="foot2">
				<div>
					<div class="foot5" v-show="xx">{{index}}</div>
					<img src="./img/2.png" alt="" />
				</div>
			</div>
			<div class="foot3">
				<div>￥{{price}}</div>
				<div>配送费￥5</div>
			</div>
			<div class="foot4">
				<router-link to="#">去结算</router-link>
			</div>
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
				datas: [],
				h: 0,
				num: [],
				num1: [],
				price: 0,
				index: 0,
				qian1: 0,
				money: 20,
				index1: 0,
				xx: false,
				arr2: [],
				arr1: 0,
				num2: [],
				arrr: [],
				name: "",
				price1: 0
			}
		},
		created() {
			if(this.$route.params.id) {
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
			bai(index, e) {
				var uls = document.getElementsByClassName("uls")
				if(e.target.tagName == "LI") {
					$(".li1").css({
						background: "rgb(232,232,232)",
						opacity: 0.6
					});
					e.target.style.backgroundColor = "white";
					e.target.style.opacity = 1;
					this.h = 0
					for(var i = 0; i < index; i++) {
						this.h -= uls[i].offsetHeight
					}
					$(".right").css("top", this.h)
				}
			},
			add1(price, name, length1, length, index1, index, e) {
				for(var i = 0; i < length; i++) {
					this.arr2.push(0)
				}

				this.arr2[index]++;
				if(this.arr2[index]) {
					e.target.parentNode.parentNode.lastChild.style.display = "block"
				}
				this.index++
					this.xx = true
				this.name = name
				this.price1 = price
				this.arrr.push({
					name: this.name,
					price: this.price1,

				})
				console.log(this.arr2)
				this.price += this.price1
			},
			add2(name, e) {
				e.target.parentNode.lastChild.style.display = "block";
				this.name = name
				console.log(name)
			},
			jian1(price, name, index, e) {
				this.arr2[index] -= 2
				if(this.arr2[index] <= 0) {
					this.arr2[index] = 0
					e.target.parentNode.style.display = "none"
				}
				this.index -= 2
				if(this.index <= 0) {
					this.index = 0
					this.xx = false
				}
				this.name = name
				this.price1 = price
				this.price -= 2 * this.price1
				if(this.price <= 0) {
					this.price = 0
				}
			},
			xiaoshi(e) {
				if(e.target.className == "maskx") {
					e.target.style.display = "none"
				}
			},
			qian(name, qian, e) {
				var change = document.getElementsByClassName("change")
				this.money = qian
				this.price1 = qian
				//				console.log(name)
				this.name = name

				for(var i = 0; i < change.length; i++) {
					change[i].style.border = "1px solid lightgray"
					change[i].style.color = "black"
				}
				e.target.style.border = "1px solid lightblue"
				e.target.style.color = "lightblue"
				this.qian1 = qian
			},
			join(name, index, e) {
				this.index++
				this.xx = true
				e.target.parentNode.parentNode.parentNode.parentNode.style.display="none"
				console.log(this.price1)
				console.log(this.name)
				this.arrr.push({
					name: this.name,
					price: this.price1,
				})
				console.log(this.arrr)
			}

		}
	}
</script>

<style scoped>
	.foot1{
		width: 100%;
	}
	.foot11{
		width: 92%;
		margin: 0 auto;
		display: flex;
	}
	.foot111{

	}
	.foot112{
		margin-left: 3.2rem;
	}

	.foot151 img{
		width: 0.25rem;
	}
	.foot152 img{
		width: 0.25rem;
	}
	.foot15{
	display: flex;
	}
	.foot12{
		display: flex;
	}
	.mask0 {
		width: 92%;
		margin: 0 auto;
	}

	.maskx {
		width: 4.7rem;
		height: 8.3rem;
		background: rgba(0, 0, 0, 0.2);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100000;
		display: none;
	}

	.mask1 {
		overflow: hidden;
		text-align: left;
	}

	.mask1 span {
		display: inline-block;
		font-size: 0.15rem;
		border: 1px solid lightgray;
		padding: 0.1rem 0.1rem;
		border-radius: 0.1rem;
		margin-left: 0.1rem;
		margin-top: 0.1rem;
	}

	.mask1 span:nth-child(1) {
		border: 1px solid lightblue;
		color: lightblue;
	}

	.mask2 {
		margin-top: 0.1rem;
		font-size: 0.2rem;
		text-align: center;
	}

	.mask2 div {
		width: 0.4rem;
		font-size: 0.18rem;
	}

	.mask4 {
		overflow: hidden;
		margin-top: 0.2rem;
		height: 0.6rem;
	}

	.mask4 div:nth-child(1) {
		float: left;
		font-size: 0.2rem;
		line-height: 0.5rem;
		color: orange;
	}

	.mask4 div:nth-child(1) span {
		font-size: 0.1rem;
	}

	.mask4 div:nth-child(2) {
		float: right;
		font-size: 0.18rem;
		background: lightblue;
		padding: 0.05rem 0.1rem;
		border-radius: 0.05rem;
	}

	.mask {
		position: absolute;
		width: 3rem;
		left: 0.8rem;
		z-index: 22222;
		background: yellow;
		top: 4rem;
	}

	.gou4 {
		position: absolute;
		right: 0.50rem;
		top: 0.52rem;
	}

	.gou1 {
		width: 0.7rem;
		height: 0.3rem;
		background: lightblue;
		font-size: 0.1rem;
		line-height: 0.3rem;
		text-align: center;
		position: absolute;
		right: 0.2rem;
		top: 0.5rem;
	}

	.gou3 {
		display: none;
	}
	.gou2 img{
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		right: 0.2rem;
		top: 0.5rem;
	}
	.lis .gou2 img {
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		right: 0.2rem;
		top: 0.5rem;
	}

	.lis .gou3 img {
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		right: 0.7rem;
		top: 0.5rem;
	}

	.footer {
		width: 375px;
		height: 0.6rem;
		background: black;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
	}

	.foot2 {
		width: 0.7rem;
		height: 0.7rem;
		background: black;
		position: absolute;
		left: 0.2rem;
		bottom: 0.15rem;
		z-index: 2222;
		border-radius: 0.35rem;
	}

	.foot2 div {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 0.3rem;
		background: blue;
		margin: 0 auto;
		margin-top: 0.05rem;
	}

	.foot2 .foot5 {
		position: absolute;
		width: 0.2rem;
		height: 0.2rem;
		text-align: center;
		color: white;
		font-weight: 100;
		font-size: 0.18rem;
		line-height: 0.2rem;
		background: red;
		top: 0;
		right: 0;
	}

	.foot2 img {
		width: 0.5rem;
		margin-top: 0.05rem;
		margin-left: 0.03rem;
	}

	.foot3 div {
		color: white;
		margin-top: 0.1rem;
		margin-left: 1.1rem;
	}

	.foot3 div:nth-child(1) {
		font-size: 0.23rem;
	}

	.foot3 div:nth-child(2) {
		font-size: 0.15rem;
		font-weight: 100;
	}

	.foot4 {
		width: 1.5rem;
		height: 0.6rem;
		background: greenyellow;
		text-align: center;
		line-height: 0.6rem;
	}

	.foot4 a {
		display: inline-block;
		width: 1.5rem;
		height: 0.6rem;
		color: white;
	}

	.new3 {
		position: relative;
	}

	.new1 {
		display: block;
		width: 0rem;
		height: 0rem;
		position: absolute;
		left: -0.12rem;
		top: -0.2rem;
		text-align: center;
		border-right: 0.4rem solid transparent;
	}

	.new1 span {
		display: inline-block;
		position: absolute;
		font-size: 0.05rem;
		transform: rotateZ(-45deg);
		width: 0.5rem;
		height: 0.2rem;
		top: -0.33rem;
		left: -0.1rem;
	}

	.new2 {
		position: absolute;
		right: 0.2rem;
		font-size: 0.1rem;
		border-radius: 0.1rem;
	}

	.num {
		position: absolute;
		top: 0.1rem;
		right: 0.1rem;
		width: 0.2rem;
		height: 0.2rem;
		background: red;
		line-height: 0.22rem;
		text-align: center;
		border-radius: 0.1rem;
		color: white;
	}

	.sp {
		width: 100%;
		border-top: 1px solid #ededed;
		height: 8.3375rem;
	}

	ul {
		float: left;
	}

	.left1 {
		height: 6rem;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.left1::-webkit-scrollbar {
		display: none
	}

	.left {
		position: absolute;
		top: 0;
	}

	.left2 {
		overflow: hidden;
		width: 1.1rem;
		position: fixed;
		top: 2rem;
		left: 0;
		height: 6rem;
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
	}

	.right {
		width: 76%;
		background-color: white;
		margin-top: 2rem;
		position: absolute;
		right: 0;
	}

	.right ul {
		width: 100%;
		/*  margin-left:0.1rem;*/
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

	.li1 img {
		width: 0.15rem;
	}

	.li1 {
		position: relative;
	}

	.right li img {
		width: 0.6rem;
		height: 0.6rem;
	}

	.lis {
		height: 1.65rem;
		border-bottom: 1px solid #e6e6e6;
		margin-top: 0.2rem;
		margin-left: 0.1rem;
		position: relative;
		overflow: hidden;
	}

	.lis img {
		float: left;
	}

	.arrs {
		float: left;
		margin-left: 0.1rem;
	}

	.this1 {}

	.arrs .this2 {
		font-size: 0.12rem;
		color: #b6b6b6;
		margin-top: 0.1rem;
	}

	.this3 {
		font-size: 0.15rem;
		margin-top: 0.1rem;
	}

	.this4 {
		font-size: 0.1rem;
		margin-top: 0.15rem;
		width: 2.7rem;
		overflow: hidden;
	}

	.this4 span {
		display: inline-block;
		border-radius: 0.1rem;
		/*overflow: hidden;*/
	}

	.this5 span {
		color: rgb(241, 136, 79);
	}

	.this5 {
		margin-top: 0.2rem;
	}
</style>
