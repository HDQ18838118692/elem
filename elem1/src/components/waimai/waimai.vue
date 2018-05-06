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
				lb1:[],
				lb2:[]
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
				var lb=response.data
				for (let i=0;i<8;i++) {
					this.lb1.push(lb[i])
				}
				
				for (let i=8;i<16;i++) {
					this.lb2.push(lb[i])
				}
			});
		}
	}
</script>

<style scoped>
	.head {
		height: 0.51rem;
		background: #3190e8;
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
</style>