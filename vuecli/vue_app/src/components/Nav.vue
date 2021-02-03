<template>
    <div class="nav-content">
        <div class="nav-header">
            {{title}}
        </div>
        <div class="nav-tab">
            <div class="tab-btn" @click="changeTab('index')">
                <div v-if="activeTab == 'index'" class="active">
                    <img src="../assets/indexs.png">
                    <span>首页</span>
                </div>
                <div v-else>
                    <img src="../assets/index.png">
                    <span>首页</span>
                </div>
            </div>
            <div class="tab-btn" @click="changeTab('users')">
                <div v-if="activeTab == 'users'" class="active">
                    <img src="../assets/users.png">
                    <span>职员</span>
                </div>
                <div v-else>
                    <img src="../assets/user.png">
                    <span>职员</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeTab:'index',
            title:"银行列表"
        }
    },
    mounted() {
        console.log(location);
    },
    methods: {
        changeTab(type){
            let _path = type=='index'? '/' : '/users';
            this.activeTab = type;
            this.$router.push(_path)
        }
    },
}
</script>
<style scoped>
    .nav-content .nav-header{
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        background-color: #fff;
        color: #333;
        text-align: center;
        font-size: 24px;
    }
    .nav-content .nav-tab{
        display: flex;
        height: 1rem;
        background-color: #fff;
        width: 100%;
        font-size: 13px;
        position: fixed;
        left: 0;
        bottom: 0;
        color: #aaa;
    }
    .nav-content .nav-tab .tab-btn{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-content .nav-tab .tab-btn div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-content .nav-tab img{
        width: 25px;
    }
    .nav-content .nav-tab .active{
        color: #333;
    }
</style>