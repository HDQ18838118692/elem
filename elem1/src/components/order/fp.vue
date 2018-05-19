<template>
    <div>
<div class="fp_head">
  <div class="fp_head1">
  <span class="fp_head2" @click="qu1"><</span>
  <span class="fp_head3">选择发票抬头</span>
  </div>
</div>
    <div class="fp_bg">
    </div>

      <div class="fp_body">
        <div class="fp_body1">
          <span class="fp_body2">不需要开发票</span>
          <span class="fp_body3"><img :src="img22" alt=""></span>
        </div>
      </div>
      <div class="fp_bg1">
      </div>

      <div class="fp_foot">
        <div class="fp_foot1" @click="qu">确定</div>
      </div>


    </div>

</template>

<script>
  import img1 from "./img/8.png"
  import img2 from "./img/9.png"
    export default {
        name: "fp",
      data(){
          return{
          img11:img1,
            img22:img2
        }
      },
      methods:{
qu(){
  this.$router.push({name:'order'})
},
        qu1(){
  history.go(-1)
        }
      }
    }
</script>

<style scoped>
  .fp_foot{
    background: #f5f5f5;
    height: 10rem;
  }
  .fp_foot1{
    width: 94%;
    margin: 0 auto;
    background: #4cd964;
    height: 0.5rem;
    border-radius: 0.05rem;
    text-align: center;
    line-height: 0.5rem;
    color: white;
    padding-top: 0.1rem;
  }
  .fp_body{
    height: 0.7rem;

  }
  .fp_body1{
    width: 94%;
    margin: 0 auto;
    line-height: 0.7rem;
  }
  .fp_body3 img{
    width: 0.25rem;
    height: 0.2rem;

  }
  .fp_body3{

    margin-left: 2.7rem;
    background: gray;
    color: white;
    border-radius: 0.15rem;
  }
  .fp_bg{
    height: 0.1rem;
    background: #f5f5f5;
    margin-top: 0.6rem;
  }
  .fp_bg1{
    height: 0.1rem;
    background: #f5f5f5;

  }
.fp_head{
  height: 0.6rem;
  background: #3190e8;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
  .fp_head1{
    width: 94%;
    margin: 0 auto;
  }
  .fp_head2{
   line-height: 0.6rem;
    color: white;
  }
  .fp_head3{
    font-size: 0.22rem;
    color: white;
    margin-left: 1rem;
  }
</style>
