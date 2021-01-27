<template>
    <div>
        <h1>这是页面二</h1>
        <h1>用户名:{{$route.query.username}}</h1>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$route.query.username)
    },
}
</script>