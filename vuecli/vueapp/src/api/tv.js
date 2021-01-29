import request from '@/utils/request'

export function getDetail(id){
    return request({
        url:"/tv/"+id,
        method:'get',
    })
}

export function getList(start){
    return request({
        url:"/subject_collection/tv_domestic/items",
        method:'get',
        params:{
            start,
            count:5
        }
    })
}