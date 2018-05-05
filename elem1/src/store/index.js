import Vue from 'vue'
import Vuex from "vuex";
import state from "./state";
// import getters from "./getters";
// import actions from "./actions"
// import mutations from "./mutations";
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  //调用时必须:this.commit
  //add出发后，参数一默认就是state，参数二，参数3...是附加参数
  // mutations,
  // //类似计算属性
  // getters,
  // actions
})
