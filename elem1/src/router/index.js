import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from "@/components/first/first";
import login from "@/components/login/login";
import city from "@/components/city/city";
import shop from "@/components/shop/shop";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/city/:id',
      name:'city',
      component:city
    },
    {
      path:'/shop',
      component:shop
    }
  ]
})
