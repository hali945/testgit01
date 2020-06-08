/*
 * @Author: hwj
 * @Date: 2020-06-08 17:26:27
 * @LastEditTime: 2020-06-08 20:19:03
 * @LastEditors: hwj
 * @Description: description
 * @FilePath: \workspaces\testgit01\egg-demo\app\router.js
 */
'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail2/:name', controller.product.detail2);
  router.post('/product/create', controller.product.create);
  router.put('/product/update/:id', controller.product.update);
};
