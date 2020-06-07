/*
 * @Author: hwj
 * @Date: 2020-06-03 23:30:33
 * @LastEditTime: 2020-06-06 01:53:16
 * @LastEditors: hwj
 * @Description: description
 * @FilePath: \workspaces\vue\vue01\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
