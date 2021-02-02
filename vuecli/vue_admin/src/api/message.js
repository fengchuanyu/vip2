import request from '@/utils/request'

// 获取信息列表
export function messageList(){
    return request({
        url:'/showMessage',
        method:'get'
    })
}