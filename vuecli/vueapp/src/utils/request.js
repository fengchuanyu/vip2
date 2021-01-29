import axios from 'axios'

const service = axios.create({
    baseURL:"https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2"
});

export default service