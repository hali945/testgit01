/*
 * @Author: hwj
 * @Date: 2020-06-08 17:26:27
 * @LastEditTime: 2020-06-08 20:38:53
 * @LastEditors: hwj
 * @Description: description
 * @FilePath: \workspaces\testgit01\egg-demo\app\controller\product.js
 */
'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
    async index() {
        const { ctx } = this;
        const res = await ctx.service.product.index();
        ctx.body = res;
    }
    async detail() {
        const { ctx } = this;
        ctx.body = `id=${ctx.query.id}`;
    }
    async detail2() {
        const { ctx } = this;
        ctx.body = `name=${ctx.params.name}`;
    }
    async create() {
        const { ctx } = this;
        const res = await ctx.service.product.create(ctx.request.body);
        ctx.body = res;

    }
    async update() {
        const { ctx } = this;
        const {
            name, weight,
        } = ctx.request.body;
        ctx.body = {
            name, weight,
        };
        // ctx.body = `id=${ctx.params.id}`;
    }
}

module.exports = ProductController;
