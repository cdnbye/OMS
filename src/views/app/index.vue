<template>
<div class="app-container">
  <el-row>
    <template v-if="hasToken">
      <el-col :xs="20" :sm="12" :lg="12">
        <el-input v-model="inputToken" :disabled="true"></el-input>
      </el-col>
      <el-col :xs="3" :sm="2" :lg="1">
        <el-tooltip placement="top">
          <div slot="content">{{ $t('app.copy') }}</div>
          <el-button icon="el-icon-tickets" @click="handleCopy"></el-button>
        </el-tooltip>
      </el-col>
    </template>
  </el-row>

  <el-row>
    <template v-if="!hasToken">
      <el-col :xs="10" :sm="4" :lg="2" style="margin: 10px 0">
          <el-popover placement="top" width="160" v-model="popoverVisible">
            <p>{{ $t('app.sureCreateToken') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="popoverVisible = false">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="handleCreateToken">{{ $t('common.ok') }}</el-button>
            </div>
            <el-button slot="reference" style="float: 'left'" type="primary" @click="popoverVisible=true">{{ $t('app.createToken') }}</el-button>
          </el-popover>
      </el-col>
    </template>

    <template v-if="hasToken">
      <el-col :xs="10" :sm="4" :lg="2" style="margin: 10px 0">
          <el-button style="float: 'left'" type="primary" @click="dialogFormVisible = true">{{ $t('app.createFormItem') }}</el-button>
      </el-col>
    </template>
  </el-row>

  <template v-if="hasToken">
    <el-table :data="tableData" style="width: 100%" v-loading="tableLoading">
      <el-table-column :label="$t('app.platform')" align="center">
        <template slot-scope="scope">
        <img :src="scope.row.img" alt="" min-width="50" height="50">
        </template>
      </el-table-column>

      <el-table-column :label="$t('app.name')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.app_name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="ID" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.app_id }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('app.createTime')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('domainTable.operation')" align="center">
        <template slot-scope="scope">

          <el-popover placement="top" width="160" :ref="'popover-' + scope.row.id" trigger="manual">
            <p>{{ $t('app.sureDelete') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="pClose(scope.row.id)">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="handleDelete(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <el-button slot="reference" size="mini" type="danger" @click="pShow(scope.row.id)">{{ $t('domainTable.delete') }}</el-button>
          </el-popover>

        </template>
      </el-table-column>
    </el-table>
  </template>

  <el-dialog :title="$t('app.createTip')" :visible.sync="dialogFormVisible" :width="device==='mobile'?'85%':''">
    <el-form :model="form" label-position="left" label-width="120px">
      <el-form-item label="name" label-width="100px">
        <el-input v-model="form.app_name"></el-input>
      </el-form-item>

      <el-form-item label="app id" label-width="100px">
        <el-input v-model="form.app_id"></el-input>
      </el-form-item>

      <el-form-item label="platform" label-width="100px">
        <el-select v-model="form.platform" placeholder="请选择平台">
          <el-option label="PC" value="pc"></el-option>
          <el-option label="Android" value="android"></el-option>
          <el-option label="iOS" value="ios"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">{{ $t('common.cancel') }}</el-button>
      <el-button type="primary" @click="handleCreateItem" :loading="createItemLoading">{{ $t('common.ok') }}</el-button>
    </div>
  </el-dialog>
</div>
</template>

  <script>
  import { fetchList, createToken, createItem, deleteItem } from '@/api/user/app'
  import { mapGetters } from 'vuex'
  import store from '@/store'
  import { getID } from '@/utils/auth'
  import moment from 'moment'
  import { copy } from '@/utils'

  import pcImg from '@/assets/logo.png'
  import iosImg from '@/assets/logo.png'
  import androidImg from '@/assets/logo.png'

  export default {
    name: 'app',
    data() {
      return {
        hasToken: false,
        inputToken: 'none',
        tableData: [],
        createItemLoading: false,
        tableLoading: false,
        tokenLoading: false,
        dialogFormVisible: false,
        popoverVisible: false,
        deletePopVisible: false,
        form: {
          app_name: '',
          app_id: '',
          platform : '',
        }
      }
    },
    computed: {
      ...mapGetters([
        'device'
      ])
    },
    methods: {
      copy,
      pShow(id) {
        this.$refs[`popover-` + id].doShow()
      },
      pClose(id) {
        this.$refs[`popover-` + id].doClose()
      },
      handleCreateToken() {
        this.popoverVisible = true
        this.tokenLoading = true
        createToken(getID())
          .then(res => {
            this.$message.success(this.$t('app.createTokenSuccess'))
            this.tokenLoading = false
            this.fetchData()
          })
          .catch(err => {
            this.tokenLoading = false
          })
      },
      fetchData() {
        this.tableLoading = true
        fetchList(getID()).then(res => {
          if(res.data) {
            if(res.data.token) {
              this.inputToken = res.data.token
              this.hasToken = true
            } else {
              this.hasToken = false
            }
            if(res.data.app_list) {
              const table = [...res.data.app_list]
              table.forEach(item => {
                item.created_at = moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')
                switch (item.platform) {
                  case 'pc':
                    item.img = pcImg
                    break;
                  case 'ios':
                    item.img = iosImg
                    break;
                  case 'android':
                    item.img = androidImg
                    break;
                
                  default:
                    break;
                }
              })
              this.tableData = table
            }
          }
          this.tableLoading = false
        }).catch(err => {
          this.tableLoading = false
        })
      },
      handleCreateItem() {
        this.createItemLoading = true
        createItem(getID(), this.form)
          .then(res => {
            if(res.data.success) {
              this.dialogFormVisible = false
              this.createItemLoading = false
              this.$message.success(this.$t('app.createItemSuccess'))
              this.fetchData()
            }
          })
          .catch(err => {
            this.createItemLoading = false
          })
      },
      handleDelete(item) {
        const data = {
          id: item.id,
          user_id: getID(),
          domain_id: item.domain_id
        }
        deleteItem(getID, data)
          .then(res => {
            this.fetchData()
            this.$message.success(this.$t('app.deleteItemSuccess'))
          })
          .catch(err => {
            console.log(err)
          })
      },
      handleCopy() {
        copy(this.inputToken, () => {this.$message.success('success')})
      }
    },
    mounted() {
      this.fetchData()
    }
  }
  </script>

<style lang="scss">
$dark_gray:#889aa4;
$light_gray:#eee;

.show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
</style>

