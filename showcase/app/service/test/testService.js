const Service = require('egg').Service;

class TestService extends Service{
    async find(uid) {
        return uid;
    }

    async getTestById(id){
        //get 只支持单个的相同查询
        const test = await this.app.mysql.get('test',{id:id});
        return {test}
    }

    async getSelectCondition(){
        const tests = await  this.app.mysql.select('test',{
            // 使用select方法只用通过where设置条件只能支持等于 和 in两种方式，其他的要用query方法
            where:{name:'吴翰文',cdNum:[1,123]},//where条件  前面的是= 后面的是 in
            columns:['id','name','cdNum'],//要查询的字段
            order:[['id','desc']],//排序方式
            limit:10,//查询的数据量
            offset:0//从哪个字段开始
        })
        // 执行的sql如下
        // 'SELECT `id`, `name`, `cdNum` FROM `test` WHERE `name` = \'吴翰文\' AND `cdNum` IN (1, 123) LIMIT 0, 10'
        return {tests}
    }

    async getSelectQuery(){
        // 这种模式下其实是可以写任意的sql语句，不止select 其他操作也可以在这个函数里面写
        const tests = await this.app.mysql.query('select * from test where name like ?',['%78%'])
        return {tests}
    }

    async singleInsert(){
        // 插入
        //第一个参数是表名，第二个参数是字段和值
        const result = await this.app.mysql.insert('test',{name:'新插入2',cdNum: 999,createTime:new Date()});
        // 判断是否插入成功

        const insertSuccess = result.affectedRows
        return insertSuccess
    }

    async complexInsert(){
        //第一个参数是表名，第二个参数是字段和值
        const result = await this.app.mysql.insert('test',[{name:'新插入3',cdNum: 999,createTime:new Date()},
            {name:'新插入4',cdNum: 999,createTime:new Date()}]);
        // 判断是否插入成功
        // 多条插入的话，返回的主键id是第一条的id
        console.log('插入的主键id'+result.insertId)
        const insertSuccess = result.affectedRows
        return insertSuccess
    }

    async updateData(){
        // 修改两种方式
        // 方式一 修改数据，将会根据主键 ID 查找，并更新
        // const row = {
        //     id:33,
        //     name:'新修改'
        // }
        // const result = await this.app.mysql.update('test', row);
        // 执行的sql语句
        // 'UPDATE `test` SET `id` = 33, `name` = \'新修改\' WHERE `id` = 33'
        // 方式二  条件数据分开写
        const row = {
            name:'新修改2'
        }
        const options = {
            where: {
                id: 33
            }
        };
        const result = await this.app.mysql.update('test', row, options);
        // 执行的sql语句
        // 'UPDATE `test` SET `name` = \'新修改2\' WHERE `id` = 33'
        // 判断更新成功
        const updateSuccess = result.affectedRows;
        return updateSuccess
    }

    async deleteData(){
        const result = await this.app.mysql.delete('test', {
            id: 33
        });
        // 执行的sql语句 DELETE FROM `test` WHERE `id` = 33'
        return result.affectedRows
    }

    async transactionData(){
        //初始化事务
        const conn = await this.app.mysql.beginTransaction();
        try {
            await conn.insert('test', [{name:'新插入3',cdNum: 999,createTime:new Date()},
                {name:'新插入4',cdNum: 999,createTime:new Date()}]);  // 第一步操作
            await conn.update('test', {
                id:33,
                name:'新修改'
            });  // 第二步操作
            await conn.commit(); // 提交事务
            return 1
        } catch (err) {
            // error, rollback
            await conn.rollback(); // 一定记得捕获异常后回滚事务！！
            throw err;
            return 0
        }
    }

    // 通用新增，第一个参数是表名称  第二个是插入的参数单个插入用{} 批量插入用[]
    async currencyInsert(tableName,row){
        const result = await this.app.mysql.insert(tableName,row);
        let insertResult = {
            "insertId":result.insertId,
            "affectedRows":result.affectedRows
        }
        return insertResult
    }

    // 通用更新，第一个参数是表名称，第二个参数是更新的字段，第三个参数是筛选条件
    async currencyUpdate(tableName,row,selection){
        const options = {
            where: selection
        };
        const result = await this.app.mysql.update(tableName, row, options);
        // 影响的行数
        const updateSuccess = result.affectedRows;
        return updateSuccess
    }

    // 根据id通用物理删除，第一个参数表名称，第二个参数id对象
    async currencyDelete(tableName,row){
        const result = await this.app.mysql.delete(tableName,row);
        return result.affectedRows
    }

    // 动态sql
    async dynamicSql(row){
        let sql = 'select * from test where 1=1'
        if(row.name != ""&&row.name!=null&&row.name!=undefined){
            sql += ' and name like \'%'+row.name+'%\''
        }
        const tests = await this.app.mysql.query(sql)
        return {tests}
    }
}
module.exports = TestService;
