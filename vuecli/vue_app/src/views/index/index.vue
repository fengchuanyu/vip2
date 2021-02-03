<template>
    <div class="container">
        <ul>
            <li v-for="item in bankData" :key="item.addressid" class="bank_list">
                <div class="bl_left">
                    <img src="../../assets/bank_logo.jpeg">
                </div>
                <div class="bl_right">
                    <h3>{{item.addressname}}</h3>
                    <div class="bl_user">
                        <User/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { bankList } from '@/api/bank'
import User from './components/user'
export default {
    data() {
        return {
            bankData:[]
        }
    },
    components:{
        User
    },
    mounted() {
        this.getBankList()
    },
    methods: {
        // 获取银行列表
        getBankList(){
            bankList().then((res)=>{
                console.log(res);
                this.bankData = res.data.data
            })
        }
    },
}
</script>
<style scoped>
    .bank_list{
        display: flex;
        background-color: #fff;
        margin:10px 20px;
        border-radius: 5px;
        overflow: hidden;
        padding:20px
    }
    .bank_list img{
        width: 100px;
    }
    .bank_list h3{
        font-size: 18px;
    }
    .bank_list .bl_left{
        margin-right: 10px;
    }
    .bank_list .bl_left,.bank_list .bl_right{
        flex-grow: 1;
    }
</style>