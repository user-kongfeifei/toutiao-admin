import request from '@/utils/request'
export const http_login = (params) =>{
    return request({
        method:'GET',
        url:"/User/GetToken",
        params
    })
}
// export function login(){

// }