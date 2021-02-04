<template>
    <div class="mosk" v-if="isShow">
        <div class="dialog-content">
            <p class="users-name">{{userName}}的微信</p>
            <img v-if="userImg" :src="userImg" alt="">
            <img v-else src="../../../assets/bank_logo.jpeg">
            <div class="close-btn" @click="closeHandle">X</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userImg:"",
            userName:"",
        }
    },
    methods: {
        // 关闭弹框
        closeHandle(){
            // this.$emit('closeDialog');
            this.$emit("update:isShow",false)
        }
    },
    props:['isShow','items'],
    watch:{
        items(val){
            this.userName = val.jrname;
            if(val.weixin){
                let baseUrl = val.weixin.includes('http')? '' : 'http://47.92.82.13:4000';
                this.userImg = baseUrl+val.weixin;
            }
        }
    }
}
</script>
<style scoped>
    .dialog-content{
        font-size: 20px;
        text-align: center;
    }
    .dialog-content img{
        width:200px;
    }
    .mosk{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
    }
    .users-name{
        color: #fff;
        margin:10px 0;
    }
    .close-btn{
        background-color: #fff;
        border-radius: 50%;
        padding:5px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin:0 auto;
    }
</style>