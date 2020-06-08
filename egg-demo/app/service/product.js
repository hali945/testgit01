/*
 * @Author: hwj
 * @Date: 2020-06-08 20:26:21
 * @LastEditTime: 2020-06-08 22:00:22
 * @LastEditors: hwj
 * @Description: description
 * @FilePath: \workspaces\testgit01\egg-demo\app\service\product.js
 */
'use strict';
const Service = require('egg').Service;

class productService extends Service {
    async index() {
        return {
            name: 'www',
        }
    }
    async create(body) {
        const {
            name, weight
        } = body;
        return {
            name, weight
        }
    }
}

module.exports = productService;
