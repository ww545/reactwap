import axios from 'axios';
import { Toast } from 'antd-mobile';
//请求响应
axios.interceptors.request.use((data)=>{
    Toast.loading('加载中...',0);
    return data;
})
//返回响应
axios.interceptors.response.use((data)=>{
     Toast.hide();
    return data;
})