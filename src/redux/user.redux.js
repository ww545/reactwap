import axios from 'axios'
import Qs from 'qs'
import {getRedirectPath} from '../utils/Redirect'


const AUTH_SCCESS = 'AUTH_SCCESS'
const LOGOUT ='LOGOUT'
const ERROR_MSG = 'ERROR_MSG'
const LOADDATA = 'LOADDATA'
const initState = {
    redirectTo:'',
    isAuth:'',
    msg:'',
    user:'',
    pwd:'',
    type:''
}

export function user(state=initState,action){
    switch(action.type){
        case AUTH_SCCESS:
            return {...state, msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        case LOGOUT:
            return {...initState,redirectTo:'/login'}
        case LOADDATA:
            return {...state, ...action.payload}
        case ERROR_MSG:
            return {...state,msg:action.msg,isAuth:false}
        default:
            return {...state}
    }
}

//公共方法 统一成功返回数据
function authSuccess(data){
    console.log(data)
    return {type:AUTH_SCCESS,payload:data}
}
//返回错误信息  公告错误（1）
function errorMsg(msg){
    return {msg, type:ERROR_MSG}
}
//登出操作
export function logoutSubmit(){
    return {type:LOGOUT}
}
//返回登录后的用户信息  登录（3）
export function loadData(obj){
    const {pwd,...data} = obj
    return {type:LOADDATA,payload:data}
}
//登录验证 请求数据 登录(1)
export function login({user,pwd}){
    if(!user || !pwd){
        return errorMsg('用户名密码必须输入')
    }
    return dispatch=>{
        axios.post(`/user/login`,{user,pwd})
            .then(res=>{
                if (res.status===200&&res.data.code===0) {
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
//注册验证 请求数据 注册(1)
export function register({user,pwd,type,reppwd}){
    console.log()
    if(!user||!pwd||!type){
        return errorMsg('用户密码必须输入')
    }
    if(pwd!==reppwd){
        return errorMsg('两次密码不一致')
    }
    const data = {user,pwd,type}
  return dispatch=>{
      axios.post(`/user/register`,{user,pwd,type})
          .then((res)=>{
              if (res.status===200&&res.data.code===0) {
                console.log(res)
                  dispatch(authSuccess({user,pwd,type}))

              }else{
                  dispatch(errorMsg(res.data.msg))
              }
          })
  }
}

//详细信息
export function updates(data){
    return dispatch=>{
        axios.post(`/user/update`,data)
            .then(res=>{
                if (res.status===200&&res.data.code===0) {
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}