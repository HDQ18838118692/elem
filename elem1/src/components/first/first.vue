<template>
    <div>
    <div class="head">
      <div>ele.me</div>
      <div>
        <router-link to="/">登录</router-link>
        <span>|</span>
        <router-link to="/">注册</router-link>
      </div>
    </div>
      <div>
    <div>
      <div>
        当前定位城市：
      </div>
      <div>
        定位不准时，请在城市列表中选择
      </div>
    </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "first"
    }
</script>

<style scoped>
.head{
  width: 100%;
  height: 45.7px;
  background:#3190e8;
}
</style>
