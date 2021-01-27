<template>
    <div>
        <h1>{{msg}}</h1>
      <h1 class="myh1">测试组件 {{num}}</h1> 
      <button @click="addHandle">add</button> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            num:123
        }
    },
    props:['msg'],
    methods: {
        addHandle(){
            ++this.num
        }
    },
}
</script>
<style scoped>
    h1{
        color: red;
    }
</style>