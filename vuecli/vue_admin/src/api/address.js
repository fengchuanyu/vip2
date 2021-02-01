import request from '@/utils/request'

// 获取地址列表
export function addressList(){
    return request({
        url:'/showAddresses',
        method:'get'
    })
}
// 添加地址
export function addAddress(data){
    return request({
        url:'/insertOneAddress',
        method:'post',
        data
    })
}