<template>
    <div>
        <h1>{{$store.state.count}}</h1>
        <button @click="$store.commit('add',2)">add</button>
        <h1>这是页面二</h1>
        <h1>用户名:{{$route.query.username}}</h1>
    </div>
</template>
<script>
export default {
    created() {
        // console.log(this.$route.query.username)
        console.log(this.$store.state.count);
    },
    methods: {
        addHandle(){
            // ++this.$store.state.count
            this.$store.commit('add',2)
        }
    },
}
</script>