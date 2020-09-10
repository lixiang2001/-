//1. 导入axios
import axios from 'axios'
// axios.get('/db.json').then(response => {
//     const data = response.data
//     console.log(data);
// });


//创建axios 实例
const request = axios.create({
    baseURL:'/',   //基础路径
    timeout:5000,        // 请求超时 5000毫秒

});

//请求拦截
request.interceptors.request.use(config=>{
    //请求拦截
    return config
},error=>{
    //出现异常
    return Promise.reject(error);
});

// 响应拦截
request.interceptors.response.use(response=>{
    // response.data
    return response
},error=>{
    return Promise.reject(error);
})

// request.get('/db.json').then(response => {
//     const data = response.data
//     console.log(data);
// });

export default request   //导出创建的 axios实例对象