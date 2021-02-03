<template>
    <div>
        <h1>用户列表</h1>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$emit("nowPage",'users')
    },
}
</script>