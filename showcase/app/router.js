'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// 这个是主路由配置文件，router文件夹里面的是每个模块的分路由配置文件
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 引入test的路由
  require('./router/testRouter')(app);
};
