<template>
    <div class="user-container">
        <div class="info-content">
            <span>明星经理：{{usersNum}}人</span>
            <div class="more-btn" @click="showHandle">{{ showList?'关闭':'查看更多' }}</div>
        </div>
        <div v-if="showList" class="list-content">
            <ul>
                <li v-for="(item,index) in usersList" :key="item.jrid" class="users-item">
                    <div>{{index+1}}</div>
                    <div>{{item.jrname}}</div>
                    <div>{{item.jrtel}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { usersByBank } from '@/api/users'
export default {
    data() {
        return {
            usersNum:0,
            usersList:[],
            showList:false
        }
    },
    props:['id'],
    mounted() {
        this.getUsers(this.id)
    },
    methods: {
        // 更多按钮
        showHandle(){
            if(this.usersList.length > 0){
                this.showList = !this.showList
            }
        },
        // 根据地址ID获取职员
        getUsers(id){
            usersByBank({
                searchid:id
            }).then((res)=>{
                console.log(res);
                if(res.data.code == 101 ){
                    this.usersNum = res.data.data.length
                    this.usersList = res.data.data
                }
            })
        }
    },
}
</script>
<style scoped>
    .user-container{
        margin-top: 20px;
    }
    .info-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info-content span{
        font-size: 12px;
        color: #999;
    }
    .info-content .more-btn{
        font-size: 12px;
        border:1px solid #568fe8;
        color: #568fe8;
        border-radius: 3px;
        padding:5px 10px;
        width: 50px;
        text-align: center;
    }
    .list-content{
        margin-top: 10px;
    }
    .users-item{
        display: flex;
        font-size: 12px;
        color: #999;
        justify-content: space-between;
    }
</style>