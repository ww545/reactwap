const mongoose = require('mongoose');
//链接mongo并且使用 api这个集合
const DB_URL = 'mongodb://localhost:27017/api-chat';
mongoose.connect(DB_URL, {useNewUrlParser:true}, function(err){

    if(err){

        console.log('Connection Error:' + err)

    }else{

        console.log('Connection success!') }

})
const models = {
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'type':{type:String,require:true},
        //头像
        'avatar':{type:String},
        //个人简介或职位简介
        'desc':{type:String},
        //职位名
        'title':{type:String},
        //如果你是boss还有两个字段
        'company':{type:String},
        'money':{type:String}
    },
    chat:{
        //聊天功能
    }
}
//批量动态生成
for (let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}