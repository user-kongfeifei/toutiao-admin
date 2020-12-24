/*
 *基于axios封装的请求模块
*/
import axios from 'axios'

//创建一个axios实例，
//我们通过这个实例去发动请求，
const request = axios.create({
    baseURL:'http://123.57.27.103:15535/' //请求的基础路径
})


//请求拦截器

//响应拦截器


// 导出请求方法
export default request


//谁用就要谁来加载request模块

// import request from 'request.js'

// request.xxx

// request({
//     method:,
//     url:''
// })