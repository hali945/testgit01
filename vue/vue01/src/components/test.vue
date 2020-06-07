<!--
 * @Author: hwj
 * @Date: 2020-06-03 23:58:22
 * @LastEditTime: 2020-06-05 23:10:54
 * @LastEditors: hwj
 * @Description: test
 * @FilePath: \workspaces\vue\vue01\src\components\test.vue
-->
<template>
    <div>
        <a-button type="primary" @click="showDrawer">Open</a-button>
        <a-drawer
            title="Basic Drawer"
            placement="right"
            :closable="false"
            :visible="visible"
            :after-visible-change="afterVisibleChange"
            @close="onClose"
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false
        };
    },
    methods: {
        afterVisibleChange(val) {
            console.log("visible", val);
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        }
    }
};
</script>
