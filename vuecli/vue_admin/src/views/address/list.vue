<template>
    <div class="app-container">
        <el-table
      :data="addressData"
      style="width: 100%">
      <el-table-column
      type="index"
      width="150"
      label="序号"
      >
    </el-table-column>
      <el-table-column
        prop="addressname"
        label="地址"
        >
      </el-table-column>
      <el-table-column
        prop="latitude"
        label="经度"
        >
      </el-table-column>
      <el-table-column
        prop="longitude"
        label="纬度">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>
<script>
import { addressList } from '@/api/address'
export default {
    data() {
        return {
            addressData:[]
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList(){
            addressList().then((res)=>{
                console.log(res);
                this.addressData = res.data.data
            })
        }
    },
}
</script>