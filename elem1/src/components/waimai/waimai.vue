<template>
	<div>
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
					<router-link to="/" v-for="(lb11,index) in lb2" :key="index">
						<img :src="`https://fuss10.elemecdn.com${lb11.image_url}`" />
						<p>{{lb11.title}}</p>
					</router-link>
				</div>
				<div class="lb">
					<router-link to="/" v-for="lb11 in lb1" :key="lb11.title">
						<img :src="`https://fuss10.elemecdn.com${lb11.image_url}`" />
						<p>{{lb11.title}}</p>
					</router-link>
				</div>
				<div class="lb">
					<router-link to="/" v-for="lb11 in lb2" :key="lb11.title">
						<img :src="`https://fuss10.elemecdn.com${lb11.image_url}`" />
						<p>{{lb11.title}}</p>
					</router-link>
				</div>
				<div class="lb">
					<router-link to="/" v-for="lb11 in lb1" :key="lb11.title">
						<img :src="`https://fuss10.elemecdn.com${lb11.image_url}`" />
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
						<li v-for="sp in shangpu" class="one11">
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
								<div class="one51">
								<span>保</span>
								<span>准</span>
								<span>票</span>
								</div>
								<div class="one61">
								<div class="one62">蜂鸟专送</div>
								<div class="one63">准时达</div>
								</div>
								</div>
								<div class="one71">
									<span>{{sp.distance}}公里</span>/
									<span>{{sp.order_lead_time}}</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Vue from "vue"
	export default {
		name: "waimai",
		data() {
			return {
				geohash: "",
				cun: "",
				lb1: [],
				lb2: [],
				left1: "",
				startX: 0,
				endX: 0,
				shangpu: [],
				value5: null
			}
		},
		created() {
			if(this.$route.params.geohash) {
				this.geohash = this.$route.params.geohash
				localStorage.setItem("geo", JSON.stringify(this.geohash))
			} else {
				this.geohash = JSON.parse(localStorage.getItem("geo"))
			}
			console.log(this.geohash)
			let api1 = `http://cangdu.org:8001/v2/pois/${this.geohash}`
			Vue.axios.get(api1).then((response) => {
				this.cun = response.data
			});
			let api2 = "http://cangdu.org:8001/v2/index_entry"
			Vue.axios.get(api2).then((response) => {
				console.log(response.data)
				var lb = response.data
				for(let i = 0; i < 8; i++) {
					this.lb1.push(lb[i])
				}
				for(let i = 8; i < 16; i++) {
					this.lb2.push(lb[i])
				}
			});
			let api3 = `http://cangdu.org:8001/shopping/restaurants?latitude=${this.cun.latitude}&longitude=${this.cun.longitude}`
			Vue.axios.get(api3).then((response) => {
				// console.log(response.data)
				this.shangpu = response.data
				this.value5 = this.shangpu[0].rating
			});
		},
		methods: {
			left(ev) {
				console.log(ev.target)
				ev.target.style.background = "red"
				ev.target.parentNode.lastChild.style.backgroundColor = "lightgray"
				sd($('.center'))

				function sd(mark) {
					var b = mark.offset().left
					console.log(b)
					var c = -375
					var d = 20
					var t = 0
					var timer2 = setInterval(function() {
						t++
						var x = b + c / d * t
						mark.css("left", x)
						if(t >= d) {
							clearInterval(timer2)
							if(b <= -750) {
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
					var timer2 = setInterval(function() {
						t++
						var x = b + c / d * t
						mark.css("left", x)
						if(t >= d) {
							clearInterval(timer2)
							if(b >= -375) {
								$('.center').css("left", -750)
								console.log(111)
							}
						}
					}, 20)

				}

			},
			onSwipeLeft() {
				if($('.center').offset().left == -750) {
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
					var timer2 = setInterval(function() {
						t++
						var x = b + c / d * t
						mark.css("left", x)
						if(t >= d) {
							clearInterval(timer2)
							if(b <= -750) {
								$('.center').css("left", -375)
								console.log(111)
							}
						}
					}, 20)
				}
			},
			onSwipeRight() {
				if($('.center').offset().left == -750) {
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
					var timer2 = setInterval(function() {
						t++
						var x = b + c / d * t
						mark.css("left", x)
						if(t >= d) {
							clearInterval(timer2)
							if(b >= -375) {
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
	.head {
		height: 0.51rem;
		background: #3190e8;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
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
	.bottom1{
	width: 96%;
	margin: 0 auto;
}
.fj{
	margin-top: 0.2rem;
	margin-bottom: 0.4rem;

}
.fj span{
	font-size: 0.15rem;
}
</style>
