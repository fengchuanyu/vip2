import request from '@/utils/request'

// 根据地址获取职员
export function usersByBank(data){
    return request({
        url:'/searchaddressid',
        method:'post',
        data
    })
}
// 获取职员列表
export function usersList(){
    return request({
        url:'/showMessage',
        method:'get',
    })
}