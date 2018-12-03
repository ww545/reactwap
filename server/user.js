const express = require('express');
const utility = require('utility');
const Router = express.Router();
const models = require('./model');
const User = models.getModel('user')
const _filter = {'pwd':0,'__v':0}
//获取用户列表
Router.get('/list',function(req, res){
    const { type } = req.query
    // User.remove({type},function(e,d){})
    User.find({type},{pwd:0},function(err,doc){
        return res.json({code:0,data:doc})
    })
})
Router.post('/update',function(req,res){
    const userid = req.cookies.userid
    if (!userid) {
        return json.dumps({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({code:0,data})
    })
})
//POST请求登录
Router.post('/login', function(req,res){
    const {user, pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if (!doc) {
            return res.json({code:1,msg:'用户名或者密码错误'})
        }
        res.cookie('userid', doc._id)
        return res.json({code:0,data:doc})
    })
})
//POST请求注册
//403已存在 404 不存在 500 服务器错误 200 成功
Router.post('/register', function(req, res){
    const {user, pwd, type} = req.body
    User.findOne({user},function(err,doc){
        if (doc) {
            return res.json({code:1,msg:'用户名重复'})
        }

        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(function(e,d){
            if (e) {
                return res.json({code:1,msg:'后端出错了'})
            }
            const {user, type, _id} = d
            res.cookie('userid', _id)
            return res.json({code:0,data:{user, type, _id}})
        })
    })
})
//获取用户信息
Router.get('/info',function(req, res){
    const userid = req.cookies.userid
    if (!userid) {
        return res.json({code:1})
    }
    User.findOne({_id:userid} ,_filter , function(err,doc){
        if (err) {
            return res.json({code:1, msg:'后端出错了'})
        }
        if (doc) {
            return res.json({code:0,data:doc})
        }
    })
    // 用户有没有cookie

})
//创建MD5加密
function md5Pwd(pwd){
    const salt = 'muxiaobai_is_show_time_3137@$#!jk$*(~~'
    return utility.md5(utility.md5(pwd+salt))
}
module.exports = Router;