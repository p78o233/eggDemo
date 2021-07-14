// 统一返回值
var R = require('../utils/responseBean.js');
module.exports = (options,app)=>{
    return async function auth(ctx, next) {
        // 请求路径
       // console.log(ctx.request.url)
        // token
        // console.log(ctx.headers["token"])
        // 调用service查询数据库鉴权
        // let test = await ctx.service.test.testService.getTestById(1);
       // 这样子转一次才能获取到对应对象里面的属性
       //  var dataString = JSON.stringify(test);
       //  var data = JSON.parse(dataString);
        // console.log(data.test.id)
        // if(1){
        //     ctx.body = R.retrunResult(true, 0, test, "操作成功")
        // }
        // else {
            // 继续往下执行
            await next();
        // }
    };
}
