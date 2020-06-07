/*
 * @Author: your name
 * @Date: 2020-06-03 23:30:33
 * @LastEditTime: 2020-06-05 23:13:00
 * @LastEditors: hwj
 * @Description: In User Settings Edit
 * @FilePath: \workspaces\vue\vue01\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/test",
        name: "Test",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/test.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
