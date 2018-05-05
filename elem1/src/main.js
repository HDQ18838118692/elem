// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import vueAxios from "vue-axios";
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
Vue.use(vueAxios,axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
