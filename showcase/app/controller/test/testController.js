const Controller = require('egg').Controller;
// 文件上传需要引用
const path = require('path');
const fs = require('fs');

// 统一返回值
var R = require('../../utils/responseBean.js');

class TestController extends Controller {
    // 不同的请求方式，但是使用同名的url
    async indexGet() {
        const {ctx} = this;

        ctx.logger.debug('debug info');
        ctx.logger.info('some request data: %j', ctx.request.body);
        ctx.logger.warn('WARNNING!!!!');

        ctx.body = 'hi, test get';
    }
    async indexPost(){
        const {ctx} = this;
        ctx.body = 'hi, test post';
    }
    async indexOptions(){
        const {ctx} = this;
        ctx.body = 'hi, test option';
    }
    async indexDelete(){
        const {ctx} = this;
        ctx.body = 'hi, test delete';
    }

    // 获取不同名字的url参数
    async getQueryParam() {
        const {ctx} = this;
        const queryParam = this.ctx.query;
        ctx.body = queryParam;
    }

    // 获取相同名字的url参数
    async getQueryParams() {
        const {ctx} = this;
        const queryParams = this.ctx.queries;
        ctx.body = queryParams;
    }

    // 获取rest方式入参,url这样定义 /api/test/getRestParams/:id/:name
    async getRestParams() {
        const {ctx} = this;
        const restParam = {
            "id": this.ctx.params.id,
            "name": this.ctx.params.name
        }
        ctx.body = restParam;
    }

    // 获取头部参数
    async getHeaderParams(){
        const {ctx} = this;
        //  ctx.headers这种方式是会获取整个header对象，要获取其中某个值如下  header字段名会全部转成小写
        let header1 = ctx.headers["token"];
        //ctx.get(name)这种方式是指获取一个值
        let header2 = ctx.get("token")
        const headerParams = {
            "header1":header1,
            "header2":header2
        }
        ctx.body = headerParams;
    }
    // 获取 application/json 数据  要先关闭csrf，详细配置在config.default.js
    async getBodyParams(){
        const {ctx} = this;
        // 获取整个对象
        let bodyParams = this.ctx.request.body;
        // 获取单一参数
        let singleParam = this.ctx.request.body.name
        let resultParam = {
            "body":bodyParams,
            "name":singleParam
        }
        ctx.body = resultParam;
    }

    // 单个文件上传
    async getSingleFile() {
        const {ctx} = this;
        let file = ctx.request.files[0];
        try{
            const data = fs.readFileSync(file.filepath);
            let savePath = path.join('./','/app/public/upload/'+file.filename);
            const res = fs.writeFileSync(savePath,data);
            console.log(savePath)
            ctx.body = "http://127.0.0.1:7001/public/upload/"+file.filename;
        }catch(err){
            console.log(err)
        }
    }

    // 多个文件上传
    async getMutilFiles(){
        const {ctx} = this;
        let uploadPath = [];
        for (const file of ctx.request.files) {
            try{
                const data = fs.readFileSync(file.filepath);
                let savePath = path.join('./','/app/public/upload/'+file.filename);
                const res = fs.writeFileSync(savePath,data);
                uploadPath.push("http://127.0.0.1:7001/public/upload/"+file.filename);
            }catch(err){
                console.log(err)
            }
        }
        ctx.body = uploadPath
    }

    // 调用service层
    async useService(){
        const { ctx } = this;
        // 包名写大写也是没有用的，这里写的还是小写
        let id = await ctx.service.test.testService.find(100);
        ctx.body = id;
    }

    // select
    async getSelectData(){
        const {ctx} = this;
        const id = this.ctx.query.id;
        let test = await ctx.service.test.testService.getTestById(id);
        ctx.body = test;
    }

    // 查询orm方式
    async getSelectCondition(){
        const {ctx} = this;
        let tests = await ctx.service.test.testService.getSelectCondition();
        ctx.body = tests;
    }

    // 查询query方法
    async getSelectQuery(){
        const {ctx} = this;
        let tests = await ctx.service.test.testService.getSelectQuery();
        ctx.body = tests;
    }
    //单条新增
    async singleInsert(){
        const {ctx} = this;
        let result = await ctx.service.test.testService.singleInsert();
        ctx.body = result;
    }
    // 多条新增
    async complexInsert(){
        const {ctx} = this;
        let result = await ctx.service.test.testService.complexInsert();
        ctx.body = result;
    }
    // 更新
    async updateData(){
        const {ctx} = this;
        let result = await ctx.service.test.testService.updateData();
        ctx.body = result;
    }
    // 删除
    async deleteData(){
        const {ctx} = this;
        let result = await ctx.service.test.testService.deleteData();
        ctx.body = result;
    }

    // 事务管理
    async transactionData(){
        const {ctx} = this;
        let result = await ctx.service.test.testService.transactionData();
        ctx.body = result;
    }

    // 返回相同格式数据
    async getSameResult(){
        const {ctx} = this;
        let result = R.retrunResult(true,1,1,"")
        ctx.body = result;
    }

    // 通用新增接口
    async currencyInsert(){
        const {ctx} = this;
        // 表名
        let tableName = this.ctx.params.tableName
        // 数据
        let row = this.ctx.request.body;
        let insertResult = await ctx.service.test.testService.currencyInsert(tableName,row);
        let result
        if(insertResult.affectedRows>0) {
            result = R.retrunResult(true, 0, insertResult, "操作成功")
        }else{
            result = R.retrunResult(true, 0, null, "操作失败")
        }
        ctx.body = result;
    }

    // 通用修改接口
    async currencyUpdate(){
        const {ctx} = this;
        // 表名
        let tableName = this.ctx.params.tableName
        // 数据
        let sendData = this.ctx.request.body;
        // 更新的数据
        let row = sendData.row;
        // 更新的条件，这个接口条件只能是等于
        let selection = sendData.selection;
        let updateResult = await ctx.service.test.testService.currencyUpdate(tableName,row,selection);
        let result
        if(updateResult>0) {
            result = R.retrunResult(true, 0, updateResult, "操作成功")
        }else{
            result = R.retrunResult(true, 0, null, "操作失败")
        }
        ctx.body = result;
    }

    // 通用删除接口
    async currencyDelete(){
        const {ctx} = this;
        // 表名
        let tableName = this.ctx.params.tableName
        // 删除的id {"id":1}
        let row = this.ctx.request.body;
        let deleteResult = await ctx.service.test.testService.currencyDelete(tableName,row);
        let result
        if(deleteResult>0) {
            result = R.retrunResult(true, 0, deleteResult, "操作成功")
        }else{
            result = R.retrunResult(true, 0, null, "操作失败")
        }
        ctx.body = result;
}

    // 动态sql
    async dynamicSql() {
        const {ctx} = this;
        const queryParam = this.ctx.query;
        const queryResult = await ctx.service.test.testService.dynamicSql(queryParam);
        ctx.body = queryResult;
    }


}

module.exports = TestController;
