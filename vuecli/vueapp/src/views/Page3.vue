<template>
    <div>
        <h1>这是页面三</h1>
        <h1>用户名:{{$route.params.username}}</h1>
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.$route);
        console.log(this.$router);
    },
}
</script>