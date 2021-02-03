import axios from 'axios';

const service = axios.create({
    baseURL:"http://47.92.82.13:4000"
});

export default service