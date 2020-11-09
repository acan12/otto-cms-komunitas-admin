/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import VueCookies from 'vue-cookies'

// router setup
import router from './routes/router';

// Vuex as State management
import { store } from './otto/store/index'

// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueCookies)

// expire time day
Vue.$cookies.config('1d')

Vue.prototype.$authPage = function(){
    const isLoginCookie = this.$cookies.get('isLogin')
    if(isLoginCookie != "true") this.$router.push({name: "login"})
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
});