let Mock=require('mockjs');//引入mockjs模块
let Random = Mock.Random;


module.exports = function () {
    let data = {
        "test": {
            name: '不支持es6的测试'
        },
        "projectlist": Mock.mock({
            code: 200,
            errno: 0,
            data: {
                // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                'list|1-10': [{
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    "key|+1": 1,
                    'id|+1': 1,
                    'name': "@name",
                    'color': '@color',
                    // 英文标题
                    'title': '@title',
                    // 链接
                    'url': '@url("http")',
                    // 邮箱
                    'email': '@email',
                    // 图片
                  
                    // 时间
                    'date': '@date("yyyy-MM-dd HH:mm:ss")',
                    'date2': '@dateTime',
                    // 汉字
                    'ctitle': '@ctitle(8)',
                    // 汉字姓名
                    'canme': '@cname()',
                    // 地址
                    'cadd': '@province' + '@city' + '@county',
                    // 手机号
                    'phone': /^1[385][1-9]\d{8}/
                }]
            }   
        }) 
    }
    return data;
}