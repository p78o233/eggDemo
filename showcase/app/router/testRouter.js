module.exports = app => {
    // 使用相同的url，不同的请求方式
    app.router.get('/api/test/index', app.controller.test.testController.indexGet);
    app.router.post('/api/test/index', app.controller.test.testController.indexPost);
    app.router.options('/api/test/index', app.controller.test.testController.indexOptions);
    app.router.delete('/api/test/index', app.controller.test.testController.indexDelete);
    // 获取url上面的参数
    app.router.get('/api/test/getQueryParam', app.controller.test.testController.getQueryParam);
    // 获取相同名字的url参数
    app.router.get('/api/test/getQueryParams', app.controller.test.testController.getQueryParams);
    // 获取rest方式传递的参数
    app.router.get('/api/test/getRestParams/:id/:name', app.controller.test.testController.getRestParams);
    // 获取头部参数
    app.router.get('/api/test/getHeaderParams', app.controller.test.testController.getHeaderParams);
    // 获取 application/json 数据
    app.router.post('/api/test/getBodyParams', app.controller.test.testController.getBodyParams);
    // 获取单个上传文件
    app.router.post('/api/test/getSingleFile', app.controller.test.testController.getSingleFile);
    // 获取多个上传文件
    app.router.post('/api/test/getMutilFiles', app.controller.test.testController.getMutilFiles);
    // 使用service
    app.router.get('/api/test/useService', app.controller.test.testController.useService);
    // 数据库操作
    app.router.get('/api/test/getSelectData', app.controller.test.testController.getSelectData);
    app.router.get('/api/test/getSelectCondition', app.controller.test.testController.getSelectCondition);
    app.router.get('/api/test/getSelectQuery', app.controller.test.testController.getSelectQuery);
    app.router.get('/api/test/singleInsert', app.controller.test.testController.singleInsert);
    app.router.get('/api/test/complexInsert', app.controller.test.testController.complexInsert);
    app.router.get('/api/test/updateData', app.controller.test.testController.updateData);
    app.router.get('/api/test/deleteData', app.controller.test.testController.deleteData);
    app.router.get('/api/test/transactionData', app.controller.test.testController.transactionData);
    //返回统一格式
    app.router.get('/api/test/getSameResult', app.controller.test.testController.getSameResult);
    // 统一通用接口
    app.router.post('/api/test/currencyInsert/:tableName', app.controller.test.testController.currencyInsert);
    app.router.post('/api/test/currencyUpdate/:tableName', app.controller.test.testController.currencyUpdate);
    app.router.post('/api/test/currencyDelete/:tableName', app.controller.test.testController.currencyDelete);
    // 动态sql
    app.router.get('/api/test/dynamicSql', app.controller.test.testController.dynamicSql);

    const { io } = app;
    io.of('/').route('socket', io.controller.SocketController);
};
