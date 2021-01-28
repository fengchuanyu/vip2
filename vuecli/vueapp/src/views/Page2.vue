<template>
    <div>
        <h1>getter:{{$store.getters.sum}}</h1>
        <h1>{{$store.state.count}}</h1>
        <button @click="addHandle">add</button>
        <button @click="reduceHandle">reduce</button>
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
            this.$store.commit('add',{a:1,b:2})
        },
        reduceHandle(){
            
            this.$store.dispatch('reduceAction',2);
        }
    },
}
</script>