<template>
  <div>
    <div class="header">
      <router-link to="/service"><</router-link>
      {{name}}
    </div>
    <div class="main" v-html="detail"></div>
  </div>
</template>

<script>
  export default {
    name: "questiondetail",
    data() {
      return {
        datail:null,
        name:null
      }
    },
    created() {
        this.detail=this.$route.params.detail;
        this.name=this.$route.params.name;

    }
  }
</script>

<style scoped>


  .header {
    width: 100%;
    height: 0.57rem;
    background-color: #3190e8;
    line-height: 0.57rem;
    text-align: center;
    color: white;
    font-size: 0.22rem;
    position: relative;
  }

  .header a {
    position: absolute;
    left: 0.1rem;
    color: white;
    font-size: 0.3rem;
  }
.main{
  font-size: 0.3rem;
  color: #666;
}
</style>
