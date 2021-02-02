import request from '@/utils/request'

// 获取信息列表
export function messageList(){
    return request({
        url:'/showMessage',
        method:'get'
    })
}
// 添加信息
export function messageAdd(data){
    return request({
        url:'/insertAllMessage',
        method:'post',
        data
    })
}
// 根据地址筛选
export function messageByAddress(data){
    return request({
        url:'/searchaddressid',
        method:'post',
        data
    })
}