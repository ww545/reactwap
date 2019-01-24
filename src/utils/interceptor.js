import axios from 'axios';
import { Toast } from 'antd-mobile';
axios.defaults.withCredentials = true


// //设置默认请求头
axios.defaults.headers = {
	'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
}


//请求响应
axios.interceptors.request.use(
	 config=> {
         Toast.loading('加载中...',0);
        return config;
  },  err=> {
     Toast.hide();
    return Promise.reject(err);
})
//返回响应
axios.interceptors.response.use((data)=>{

     Toast.hide();
    return data;
})