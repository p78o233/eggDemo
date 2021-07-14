// 定时任务 一定要写在schedule文件夹里面
const Subscription = require('egg').Subscription;
class TestTask extends Subscription {
    constructor(props) {
        super(props);
        this.count = 0;
    }

    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            // cron: `0 0 0 0 0 ? 2013-2014`,//这个是cron方式
            interval: '1000m',//5000,// 数字型单位是毫秒 字符串型如'5s'就是5秒
            type: 'all',
            // immediate: false,
            // disable: process.env.RUN_ENV != 'EWS', // 本地开发环境不执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        const { ctx } = this;
        //执行数据处理业务
        // console.log(new Date());
        // 调用service
        // await ctx.service.test.testService.singleInsert();
    }
}

module.exports = TestTask
