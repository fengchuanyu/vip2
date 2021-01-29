<template>
    <div>
        <h1>这是页面三</h1>
        <h1>用户名:{{$route.params.username}}</h1>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            dataList:[]
        }
    },
    created() {
        // console.log(this.$route);
        // console.log(this.$router);
        axios.get("https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=0&count=18")
        .then((res)=>{
            console.log(res);
        })
    },
}
</script>