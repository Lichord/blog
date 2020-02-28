<template>
  <div class="user">
    <div class="table">
      <el-table 
      :data="tableData"
      border
      ref="filterTable">
        <el-table-column
        type="selection"
        width="55"
        @selection-change="handleSelectionChange">
        </el-table-column>
        <el-table-column
        prop="id"
        label="ID">
        </el-table-column>
        <el-table-column
        prop="nickname"
        label="用户名">
        </el-table-column>
        <el-table-column
        prop="password"
        label="密码">
        </el-table-column>
        <el-table-column
        prop="ban"
        label="状态"
        width="100px"
        align="center"
        :filters="[{ text: '正常', value: false }, { text: '禁言', value: true }]"
        :filter-method="filterState">
          <template slot-scope="scope"> 
          <el-tag
            v-if="!scope.row.ban"
            type="success"
            disable-transitions>正常
          </el-tag>
          <el-tag v-else type="danger">禁言</el-tag>
        </template>
        </el-table-column>
        <el-table-column
        label="操作" width="150px" align="center">
        <template slot-scope="scope">
                          <el-button
                              type="success"
                              circle
                              icon="el-icon-edit"
                              @click="handleEdit(scope.$index, scope.row)"
                          ></el-button>
                          <el-button
                              type="danger"
                              circle
                              icon="el-icon-delete"
                              @click="handleDelete(scope.$index, scope.row)"
                          ></el-button>
                      </template>
        </el-table-column>
      </el-table>
    </div>
    

  <div>
    <!-- 编辑对话框 -->
    <!-- <el-dialog title="编辑" :visible.sync="editVisible">
      <el-form>
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog> -->
        <el-dialog title="编辑" :visible.sync="editVisible">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="用户名：">
                    <el-input v-model="form.nickname"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                 <el-form-item label="禁言：">
                    <el-radio v-model="form.ban" label="1">是</el-radio>
                    <el-radio v-model="form.ban" label="2">否</el-radio>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
  </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      tableData:[{
        id:'1',
        nickname:'lll',
        password:'www',
        ban:true
        },{
        id:'1',
        nickname:'lll',
        password:'www',
        ban:false
        }
      ],
      editVisible:false,
      form:{},
      multipleSelection:[]
    }
  },
  methods:{
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    filterState(value,row){
      return row.ban===value;
    },
    handleEdit(index, row) {
        this.editVisible=true;
        this.form.nickname=row.nickname;
        this.form.password=row.password;
        if(row.ban)
          this.form.ban='1';
        else
          this.form.ban='2';
    },
    handleDelete(index, row) {
      this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
    },
    saveEdit(){
      this.editVisible=false;
      this.$message.success(`修改成功`);
      // 向后台发送请求
    }
  }
}
</script>

<style>
.user{
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.table {
    width: 100%;
    font-size: 10px;
}
.red {
    color: #ff0000;
}
</style>