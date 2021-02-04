<template>
    <div class="users-container">
        <ul>
            <li v-for="item in usersData" :key="item.jrid" class="users-list">
                <div class="ul-left">
                    <img v-if="formatUrl(item.tcoin)" :src="item.tcoin" alt="">
                    <img v-else src="../../assets/bank_logo.jpeg">
                </div>
                <div class="ul-right">
                    <div class="line-one">
                        <span class="users-name">{{item.jrname}}</span>
                        <span class="users-level">{{item.levelname}}</span>
                    </div>
                    <div class="line-two">
                        <span class="users-bank">{{item.addressname}}</span>
                    </div>
                    <div class="line-three">
                        <span class="users-tel">电话：{{item.jrtel}}</span>
                        <div class="users-weixin">查看微信</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {usersList} from '@/api/users'
export default {
    data() {
        return {
            usersData:[]
        }
    },
    mounted() {
        this.$emit("nowPage",'users');
        this.getUsersList();
    },
    methods: {
        formatUrl(url){
            if(url){
                return url.includes('http')
            }else{
                return false
            }
        },
        // 获取职员列表
        getUsersList(){
            usersList().then((res)=>{
                console.log(res);
                this.usersData = res.data.data
            })
        }
    },
}
</script>
<style scoped>
    .users-list{
        display: flex;
        background-color: #fff;
        margin: 10px 20px;
        padding: 10px;
        border-radius: 5px;
    }
    .ul-left{
        flex-grow: 2;
    }
    .ul-left img{
        width: 100px;
    }
    .ul-right{
        flex-grow: 3;
        font-size: 12px;
    }
    .line-one{
        margin: 10px 0;
        display: flex;
        align-items: center;
    }
    .line-one .users-name{
        font-size: 20px;
        font-weight: bolder;
        margin-right: 10px;
    }
    .line-one .users-level{
        font-size: 14px;
        color: #333;
    }
    .line-two .users-bank{
        font-size: 14px;
        color: #666;
    }
    .line-three{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:10px;
    }
    .users-tel{
        color: #666;
        font-size: 14px;
    }
    .users-weixin{
        color: #568fe8;
        border:1px solid #568fe8;
        border-radius: 3px;
        padding: 5px 10px;
    }
</style>