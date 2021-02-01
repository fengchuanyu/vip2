import request from '@/utils/request'

export function levelList(){
    return request({
        url:'/showLevel',
        method:'get',
    })
}