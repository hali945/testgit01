<!--
 * @Author: hwj
 * @Date: 2020-06-03 23:30:33
 * @LastEditTime: 2020-06-04 00:10:21
 * @LastEditors: hwj
 * @Description: description
 * @FilePath: \workspaces\vue\vue01\src\App.vue
-->
<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
