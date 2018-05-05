<template>
	<div class="quan">
		<div class="head">
			<div class="head1">
				<div class="left">
					<router-link to="/">
						<</router-link>
				</div>
				<div class="center">{{city.name}}</div>
				<div class="right">

					<router-link to="/">切换城市</router-link>
				</div>
			</div>
		</div>

		<div class="body">
			<div class="body1">
				<input type="text" placeholder="输入学校、商务楼、地址" v-model="val" autocomplete="out">
				<div class="body2" @click="submit">提交</div>
			</div>
		</div>
		<div class="foot">
			<div class="foot1">
				搜索历史
			</div>
			<div v-if="count.length">
				<div v-for="ls in count" class="one">
					<router-link :to="{path:'shop',name:'shop',params:{geohash:ls.geohash}}">
						<div class="one1">{{ls.name}}</div>
						<div class="one2">{{ls.address}}</div>

					</router-link>

				</div>
				<div class="clear" @click="clear">
					清除历史记录
				</div>
			</div>
		</div>

		<div v-if="search.length" class="show">

			<div v-for=" sss in search" class="show1" @click="jl(sss.geohash)">
				<router-link :to="{path:'shop',name:'shop',params:{geohash:sss.geohash}}">
					<h1>{{sss.name}}</h1>
					<div>{{sss.address}}</div>

				</router-link>

			</div>

		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	var list = []
	var list1 = []
	// var api1="http://cangdu.org:8001/v1/cities/:id"
	export default {
		name: "city",
		data() {
			return {
				city: {},
				val: '',
				id: "",
				search: [],
				lshl: [],
				count: [],
			}
		},
		created() {
			if(!JSON.parse(localStorage.getItem("lst"))) {
				this.count = []
			} else {
				this.count = JSON.parse(localStorage.getItem("lst"));
				//    console.log(JSON.parse(localStorage.getItem("lst")))
			}
			this.id = this.$route.params.id;

			var api1 = "http://cangdu.org:8001/v1/cities/" + this.id;
			console.log(api1);
			Vue.axios.get(api1).then((response) => {
				//      console.log(response.data)
				this.city = response.data
			});

		},
		methods: {
			submit() {
				var api2 = "http://cangdu.org:8001/v1/pois?city_id=" + this.id + "&keyword=" + this.val + "&type=search"
				Vue.axios.get(api2).then((response) => {
					//        console.log(response.data)
					this.search = response.data
				});
			},
			jl(ppp) {
				var api3 = `http://cangdu.org:8001/v2/pois/${ppp}`
				Vue.axios.get(api3).then((response) => {
					console.log(response.data)
					if(!JSON.parse(localStorage.getItem("lst"))) {
						list1.push(response.data)
					} else {
						list1 = JSON.parse(localStorage.getItem("lst"))
						list1.push(response.data)
					}
					for(var i = 0; i < list1.length; i++) {　　
						var flag = true;　　
						for(var j = 0; j < list.length; j++) {　　　　
							if(list1[i].geohash== list[j].geohash) {　　　　　　
								flag = false;　　　　
							};　　
						};　　
						if(flag) {　　　　
							list.push(list1[i]);　　
						};
					};

					localStorage.setItem("lst", JSON.stringify(list));
				});
			},
			clear() {
				localStorage.removeItem("lst");
				this.count = []
			}
		},
		// computed(){
		//   count(){
		//     return this.$store.state.count
		//   }
		// }
	}
</script>

<style scoped>
	.quan {
		background: lightgray;
		position: relative;
	}
	
	.head {
		height: 0.62rem;
		background: #3190e8;
	}
	
	.head1 {
		width: 96%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		line-height: 0.62rem;
	}
	
	.left a,
	.center,
	.right a {
		color: white;
		font-size: 0.2rem;
	}
	
	.center,
	.left a {
		font-size: 0.25rem;
	}
	
	.left,
	.center,
	.right {
		width: 0.8rem;
	}
	
	.body {
		height: 1.35rem;
		margin-top: 0.1rem;
		background: white;
	}
	
	.body1 {
		width: 90%;
		margin: 0 auto;
	}
	
	.body1 input {
		width: 100%;
		height: 0.4rem;
		border: 1px solid lightgray;
		margin-top: 0.2rem;
		font-size: 0.2rem;
		padding-left: 0.1rem;
	}
	
	.body2 {
		width: 100%;
		background: #3190e8;
		margin-top: 0.2rem;
		height: 0.4rem;
		text-align: center;
		line-height: 0.4rem;
		color: white;
	}
	
	.foot {
		height: 0.25rem;
		font-size: 0.17rem;
	}
	
	.foot1 {
		width: 96%;
		margin: 0 auto;
		line-height: 0.25rem;
	}
	
	.show {
		position: absolute;
		left: 0;
		top: 2.1rem;
		background: white;
		border-bottom: 2px solid lightgray;
		width: 100%;
	}
	
	.show1 {
		height: 0.8rem;
		padding-left: 0.22rem;
		border-bottom: 1px solid lightgray;
	}
	
	.show1 a {
		display: block;
	}
	
	.show1 a h1 {
		font-size: 0.22rem;
		color: black;
		margin-top: 0.3rem;
	}
	
	.show1 a div {
		font-size: 0.17rem;
		color: lightgray;
		margin-top: 0.2rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.one {
		height: 0.7rem;
		padding-left: 0.22rem;
		border-bottom: 1px solid lightgray;
	}
	
	.one1 {
		font-size: 0.22rem;
		color: black;
		margin-top: 0.3rem;
	}
	
	.one2 {
		font-size: 0.17rem;
		color: lightgray;
		margin-top: 0.2rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.clear {
		text-align: center;
		margin-top: 0.2rem;
		font-size: 0.2rem;
	}
</style>