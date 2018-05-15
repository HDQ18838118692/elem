// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import vueAxios from "vue-axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {Plugin1} from "../static/js/plugin1";

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(ElementUI);
Vue.use(vueAxios,axios);
Vue.use(Plugin1);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
