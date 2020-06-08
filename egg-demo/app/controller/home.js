/*
 * @Author: hwj
 * @Date: 2020-06-08 17:26:27
 * @LastEditTime: 2020-06-08 17:33:27
 * @LastEditors: hwj
 * @Description: description
 * @FilePath: \workspaces\testgit01\egg-demo\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello, egg';
  }
}

module.exports = HomeController;
