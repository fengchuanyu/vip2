import request from '@/utils/request'

// 根据地址获取职员
export function usersByBank(data){
    return request({
        url:'/searchaddressid',
        method:'post',
        data
    })
}