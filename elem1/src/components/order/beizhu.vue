<template>
<div>
  <div class="bz_head">
    <div class="bz_head1">
      <span @click="exit1"><</span>
      <span>订单备注</span>
    </div>
  </div>
  <div class="bz_bg"></div>
  <div class="bz_head2">
    <div class="bz_head3">
      <div class="bz_head4">快速备注</div>
      <div class="bz_head5">
        <div class="bz_head6">
          <input type="radio" name="sex" id="sex1" style="display: none"><label for="sex1">不要辣</label><input type="radio" name="sex" id="sex2" style="display: none"><label for="sex2">少点辣</label><input type="radio" name="sex" id="sex3" style="display: none"><label for="sex3">多点辣</label>
        </div>
      <div class="bz_head7" @click="xz">
        不要香菜
      </div>
        <div class="bz_head8" @click="xz">
          不要洋葱
        </div>
        <div class="bz_head9" @click="xz">
          多点醋
        </div>
        <div class="bz_head10" @click="xz">
          多点葱
        </div>
        <div class="bz_head11">
          <input type="radio" name="to" id="to" style="display:none;"><label for="to">去冰</label><input type="radio" name="to" id="in" style="display:none;"><label for="in">少冰</label>
        </div >
      </div>

    </div>
    <div class="bz_bg"></div>

  </div>
  <div class="bz_head21">
    <div class="bz_head22">其他备注</div>
    <div class="bz_head23">
      <textarea name="" id="" cols="41" rows="6" placeholder="请输入备注内容（可不填）"></textarea>
    </div>
  </div>
  <div class="bz_head33">
    <div class="bz_head44" @click="qued">
      确定
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "beizhu",
      methods:{
          xz(e){
            if (e.target.style.background=="rgb(49, 144, 232)"){
              e.target.style.background="white"
            }else{
              e.target.style.background="#3190e8"
            }


          },
        qued(){
this.$router.push({name:'order'})
        },
        exit1(){
            history.go(-1)
        }
      }
    }
</script>

<style scoped>
  .bz_head33{
    width: 94%;
    margin: 0 auto;
  }
  .bz_head44{
    height: 0.5rem;
    background: #4cd964;
    font-size: 0.22rem;
    color: white;
    text-align: center;
    line-height: 0.5rem;
    font-weight: 100;
    border-radius: 0.05rem;
    margin-top: 0.3rem;
  }
  .bz_head22{
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
  }
  .bz_head23 textarea{
    background: #f5f5f5;
    padding: 0.2rem 0 0 0.2rem;
    border: 0;
font-size: 0.2rem;
  }
.bz_head21{
  width: 94%;
  margin: 0 auto;
}
  .bz_head4{
    width: 94%;
    margin: 0 auto;
  }
  .bz_head11{
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }
  .bz_head11 label{
    display: inline-block;
    /*vertical-align: 0;*/
    border: 1px solid #3190e8;
    border-right: 0;
    padding: 0.1rem 0.15rem 0.1rem 0.15rem;
    font-size: 0.18rem;
  }
  .bz_head11 label:nth-child(2){
    border-radius: 0.1rem 0 0 0.1rem;
  }
  .bz_head11 label:nth-child(4){
    border-right: 1px solid #3190e8;
    border-radius: 0 0.1rem 0.1rem 0;
  }
  .bz_head7,.bz_head8,.bz_head9,.bz_head10{
    padding: 0.1rem 0.15rem 0.1rem 0.15rem;
    font-size: 0.18rem;
    border: 1px solid #3190e8;
    border-radius: 0.1rem;
    display: inline-block;
    color: black;
  }
  .bz_head8,.bz_head9,.bz_head10{
    margin-top: 0.2rem;
  }
  .bz_head7{
    margin-left:0.1rem;
  }
  input[type="radio"]:checked+label {
    background: #3190e8;
  }
  .bz_head6{
display: inline-block;

  }
  .bz_head6 label{
    display: inline-block;
    /*vertical-align: 0;*/
    border: 1px solid #3190e8;
    border-right: 0;
    padding: 0.1rem 0.15rem 0.1rem 0.15rem;
    font-size: 0.18rem;
  }
  .bz_head6 label:nth-child(2){
    border-radius: 0.1rem 0 0 0.1rem;
  }
  .bz_head6 label:nth-child(6){
    border-right: 1px solid #3190e8;
    border-radius: 0 0.1rem 0.1rem 0;
  }

  .bz_head4{
    margin: 0.2rem 0;
  }
  .bz_head3{
    width: 94%;
    margin: 0 auto;
  }
  .bz_bg{
    height: 0.1rem;
    background: #f5f5f5;
  }
.bz_head{
  width: 100%;
  height: 0.6rem;
  background: #3190e8;
}
  .bz_head1{
    width: 94%;
    margin: 0 auto;
    line-height: 0.6rem;
  }
.bz_head1 span:nth-child(1){
  font-size: 0.22rem;
  color: white;
}
  .bz_head1 span:nth-child(2){
    margin-left: 1.5rem;
    font-size: 0.22rem;
    color: white;
  }
</style>
