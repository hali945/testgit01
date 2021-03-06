/*
 * @Author: hwj
 * @Date: 2020-06-08 17:26:27
 * @LastEditTime: 2020-06-08 20:03:27
 * @LastEditors: hwj
 * @Description: description
 * @FilePath: \workspaces\testgit01\egg-demo\config\config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591608286496_2269';

  // add your middleware config here
  config.middleware = [];
  exports.security = {
    csrf: {
      enable: false,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
