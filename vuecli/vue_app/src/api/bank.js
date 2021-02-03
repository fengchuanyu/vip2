import request from '@/utils/request'

// 银行列表
export function bankList(){
    return request({
        url:'/showAddresses',
        method:'get'
    })
}