import axios from 'axios';
import { Toast } from 'antd-mobile';
axios.defaults.withCredentials = true


// //设置默认请求头
axios.defaults.headers = {
	'content-type' : 'application/json',  //传出类型 ）json,form表单
	'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

}

//请求响应 Toast.loading('加载中...',0);
axios.interceptors.request.use(
	function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
     // setTimeoute()
     Toast.hide();
    return Promise.reject(error);
})
//返回响应
axios.interceptors.response.use((data)=>{

     Toast.hide();
    return data;
})