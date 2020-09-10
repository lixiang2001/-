import Vue from "vue";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 

import App from "./App.vue";

import router from "./router";
import store from "./store";

Vue.use(ElementUI);       //引入ElementUI 插件

//阻止启动生产消息，常用作指令
Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log( process.env.NODE_ENV);   //development
//生产环境 == production    开发环境 == development


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
