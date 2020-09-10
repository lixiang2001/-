import request from '@/utile/request'       //@ 默认指向src 文件

// request.get('db.json').then(response =>{
//     console.log(response.data);
// });

// 测试2  ，以对象的方式进行指定请求方式。
// request({
//     method:'get',
//     url:'/db.json'
// }).then(response=>{
//     console.log("get2"+response.data);
// })



export default{
    getList(){
        const req = request({
            method:'get',
            url:'/db.json'
        });
        return req;
    }
}