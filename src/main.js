// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from "vuex"
import App from './App'
import router from './router'
import store from "./store"
import lodash from "lodash"

Vue.use(vuex)
Vue.use(lodash)

Vue.config.productionTip = false

Vue.config.keyCodes.f2 = 113

//beforeEach 全局前置导航守卫，应用所有路由变化都会触发，接受to，from，next三个参数
router.beforeEach(function(to,from,next){
	console.log("全局前置导航守卫，beforeEach");
	next();
});

//beforeEach 全局后置导航守卫
router.afterEach(function(to,from){
	console.log("全局后置导航守卫，afterEach");
});

import "bootstrap/dist/css/bootstrap.min.css"
import "./style/style.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
