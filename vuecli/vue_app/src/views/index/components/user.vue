<template>
    <div class="user-container">
        <div class="info-content">
            <span>明星经理：2人</span>
            <div class="more-btn">查看更多</div>
        </div>
        <div class="list-content"></div>
    </div>
</template>
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
    }
</style>