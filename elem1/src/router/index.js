import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from "@/components/first/first";
import login from "@/components/login/login";
import city from "@/components/city/city";
import shop from "@/components/shop/shop";
import waimai from "@/components/waimai/waimai";
import search from "@/components/search/search";
import dingdan from "@/components/dingdan/dingdan";
import my from "@/components/my/my";
import usermes from "@/components/usermes/usermes";
import setusername from "@/components/setusername/setusername";

import fenlei from "@/components/fenlei/fenlei";

import address from "@/components/address/address";
import add from "@/components/add/add";

import addDetail from "@/components/addDetail/addDetail";
import jifen from "@/components/jifen/jifen";
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
      path: '/city/:id',
      name: 'city',
      component: city
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      children: [{
        path: '/shop/waimai/',
        name: 'waimai',
        component: waimai

      }, {
        path: "search",
        name: 'search',
        component: search

      }, {
        path: '/dingdan',
        name: 'dingdan',
        component: dingdan
      }, {
        path: '/my',
        name: 'my',
        component: my
      }]
    },
    {
      path: '/usermes/',
      name: 'usermes',
      component: usermes
    },
    {

      path:"/setusername",
      name:'setusername',
      component:setusername
    },
    {
      path:"/fenlei/",
      name:"fenlei",
      component:fenlei},

    { path: "/setusername",
      name: 'setusername',
      component: setusername
    },
    {
      path: "/address",
      name: 'address',
      component: address,

    },
    {
      path: "/add",
      name: 'add',
      component: add

    },
    {
      path:"/addDetail",
      name:'addDetail',
      component:addDetail
    },{
      path:"/jifen",
      name:'jifen',
      component:jifen
    }
  ]
})
