<template>
    <div>
        page7
        <baidu-map center="哈尔滨" class="bm-view" ak="Ge5Yp3G8RWSbedixdZivzYLI3dcZHZhP">
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        </baidu-map>
    </div>
</template>
<script>
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
    // components:{
    //     BaiduMap
    // }
}
</script>
<style scoped>
.bm-view{
    width: 100vw;
    height: 100vh;
}
</style>