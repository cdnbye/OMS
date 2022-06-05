<template>
<div class="app-container">
  <el-alert
    :title="$t('app.title')"
    :description="$t('app.desc')"
    type="info"
    show-icon>
  </el-alert>
  <el-row style="margin: 15px 0">
    <template v-if="hasToken">
      <CopyToken :token="inputToken"></CopyToken>
    </template>
  </el-row>

  <el-row style="float: left">
    <template v-if="!hasToken">
      <el-col :xs="10" :sm="4" :lg="2" style="margin: 10px 0">
          <el-popover placement="top" width="200" v-model="popoverVisible">
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
      <el-col :xs="10" :sm="4" :lg="2">
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

      <el-table-column label="AppId" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.app_id }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('app.signature')" align="center">
        <template slot-scope="scope" v-if="scope.row.platform==='android'">
          <!--<span style="margin-left: 10px">{{ scope.row.signature }}</span>-->
          <el-input
                  type="textarea"
                  v-model="scope.row.signature">
          </el-input>
        </template>
      </el-table-column>

      <el-table-column :label="$t('app.createTime')" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('common.status')" align="center">
        <template slot-scope="scope">
          <span :style="scope.row.blocked || scope.row.disable_p2p?'color: red':'color: green'">{{ formatterStatus(scope.row) }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('domainTable.operation')" align="center" width="300">
        <template slot-scope="scope">
          <el-button slot="reference" size="mini" type="primary" @click="handleWatch(scope.row)">{{ $t('app.watch') }}</el-button>

          <el-popover v-if="scope.row.platform==='android'" placement="top" width="200" :ref="'popover-update-' + scope.row.id" trigger="manual">
            <p>{{ $t('common.sureUpdate') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="updateClose(scope.row.id)">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="handleUpdateSign(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <el-button slot="reference" size="mini" type="warning" @click="updateShow(scope.row.id)" :style="device==='mobile'?'':'margin-left: 10px'">{{ $t('app.updateSign') }}</el-button>
          </el-popover>

          <el-popover placement="top" width="200" :ref="'popover-' + scope.row.id" trigger="manual">
            <p>{{ $t('common.sureDelete') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="pClose(scope.row.id)">{{ $t('common.cancel') }}</el-button>
              <el-button type="primary" size="mini" @click="handleDelete(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <el-button slot="reference" size="mini" type="danger" @click="pShow(scope.row.id)" :style="device==='mobile'?'':'margin-left: 10px'">{{ $t('domainTable.delete') }}</el-button>
          </el-popover>

        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination
              layout="sizes, prev, pager, next"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="tableParam.pageSize"
              :current-page="tableParam.page"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange">
      </el-pagination>
    </div>

  </template>

  <el-dialog  :visible.sync="dialogFormVisible" :width="device==='mobile'?'85%':''">
    <div slot="title">
      <p>{{ $t('app.createTitle') }}</p>
      <!--<p style="font-size: 12px">{{ $t('app.createTip') }}</p>-->
    </div>
    <el-form :model="form" label-position="left" label-width="120px" ref="createForm">
      <el-form-item prop="app_name" label="APP Name" label-width="100px" required>
        <el-input v-model="form.app_name" :placeholder="$t('app.appName')"></el-input>
      </el-form-item>

      <el-form-item prop="app_id" label-width="100px" required>
        <template slot="label">
          <span>APP ID</span>
          <PointTip style="margin-left: 4px" :content="$t('app.appID')" />
        </template>
        <el-input v-model="form.app_id" :placeholder="$t('app.appIdTip')"></el-input>
      </el-form-item>

      <el-form-item prop="play_url" label-width="160px" required>
        <template slot="label">
          <span>Introduction URL</span>
          <PointTip style="margin-left: 4px" :content="$t('app.introTip')" />
        </template>
        <el-input v-model="form.play_url" placeholder="https://introduction_to_app/index.html"></el-input>
      </el-form-item>

      <el-form-item v-show="form.platform==='android'" prop="signature" label-width="160px">
        <template slot="label">
          <span>App Signature</span>
          <PointTip style="margin-left: 4px" :content="$t('app.signatureTip')" />
        </template>
        <el-input v-model="form.signature" placeholder="Optional"></el-input>
      </el-form-item>

      <el-form-item prop="platform" label="Platform" label-width="100px" required style="float: left">
        <el-select v-model="form.platform" placeholder="Select Platform">
          <el-option label="Android" value="android"></el-option>
          <el-option label="iOS/tvOS/macOS" value="ios"></el-option>
          <el-option label="PC (Electron)" value="pc"></el-option>
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
  import { fetchList, createToken, createItem, deleteItem, updateSign } from '@/api/user/app'
  import { mapGetters } from 'vuex'
  import { getID } from '@/utils/auth'
  import moment from 'moment'
  import PointTip from '@/components/PointTip'
  import { trim } from '@/utils'
  import pcImg from '@/assets/platform/electron.png'
  import iosImg from '@/assets/platform/ios.png'
  import androidImg from '@/assets/platform/android.png'
  import clip from '@/utils/clipboard'
  import copyImg from '@/assets/copy.png'
  import { fetchAllDomainAndApp } from '@/utils'
  import CopyToken from "@/components/CopyToken";

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
          play_url: '',
          signature: '',
        },
        copyImg,
        tableParam: {
            page: 1,
            pageSize: 10
        },
      }
    },
    components: {
      PointTip,
      CopyToken
    },
    computed: {
      ...mapGetters([
        'device',
      ])
    },
    methods: {
      pShow(id) {
        this.$refs[`popover-` + id].doShow()
      },
      pClose(id) {
          this.$refs[`popover-` + id].doClose()
      },
      updateShow(id) {
          this.$refs[`popover-update-` + id].doShow()
      },
      updateClose(id) {
          this.$refs[`popover-update-` + id].doClose()
      },
      handleCreateToken() {
        this.popoverVisible = true
        this.tokenLoading = true
        createToken(getID())
          .then(res => {
            // this.$message.success(this.$t('app.createTokenSuccess'))
            this.$notify({
                title: this.$t('common.success'),
                message: this.$t('app.createTokenSuccess'),
                type: 'success'
            });
            this.tokenLoading = false
            this.fetchData()
          })
          .catch(err => {
            this.tokenLoading = false
          })
      },
      fetchData(page=this.tableParam.page, pageSize=this.tableParam.pageSize) {
        this.tableLoading = true
        fetchList(getID(), page, pageSize).then(res => {
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
          fetchAllDomainAndApp()
        }).catch(err => {
          this.tableLoading = false
        })
      },
      handleUpdateSign(item) {
          let signature = item.signature
          //去掉空格回车换行
          signature = signature.replace(/\ +/g,"").replace(/[\r\n]/g,"");
          const data = {
              id: item.id,
              signature,
          }
          updateSign(getID(), data)
              .then(res => {
                  this.fetchData()
                  // this.$message.success(this.$t('app.deleteItemSuccess'))
                  this.$notify({
                      title: this.$t('common.success'),
                      message: this.$t('app.updateItemSuccess'),
                      type: 'success'
                  });
                  this.updateClose(item.id)
              })
              .catch(err => {
                  this.updateClose(item.id)
                  // console.log(err)
              })
      },
      handleCreateItem() {
        this.form.app_name = trim(this.form.app_name)
        this.form.app_id = trim(this.form.app_id)
        this.form.play_url = trim(this.form.play_url)
        this.form.signature = trim(this.form.signature)
        this.$refs.createForm.validate(valid => {
          if(valid) {
            this.createItemLoading = true
            createItem(getID(), this.form)
              .then(res => {
                if(res.ret === 0) {
                  this.dialogFormVisible = false
                  this.createItemLoading = false
                  // this.$message.success(this.$t('app.createItemSuccess'))
                  this.$notify({
                      title: this.$t('common.success'),
                      message: this.$t('app.createItemSuccess'),
                      type: 'success'
                  });
                  this.fetchData()
                }
              })
              .catch(err => {
                this.createItemLoading = false
              })
          } else {
            return false
          }
        })
      },
      handleDelete(item) {
        const data = {
          id: item.id,
          user_id: getID(),
          domain_id: item.domain_id
        }
        deleteItem(getID(), data)
          .then(res => {
            this.fetchData()
            // this.$message.success(this.$t('app.deleteItemSuccess'))
            this.$notify({
                title: this.$t('common.success'),
                message: this.$t('app.deleteItemSuccess'),
                type: 'success'
            });
            this.pClose(item.id)
          })
          .catch(err => {
            this.pClose(item.id)
            console.log(err)
          })
      },
      handleWatch(item) {
        this.$router.push({
          name: 'UserLiveData',
          params: {
            // uid: getID(),
            domainInfo: {
                uid: getID(),
                id: item.domain_id,
                domain: item.app_id,
                isValid: 1,
                native: true,
            },
          }
        })
      },
      handleCopy() {
        clip(this.inputToken, event)
      },
      handleSizeChange(pageSize) {
          this.tableParam.pageSize = pageSize
          this.fetchData()
      },
      handleCurrentChange(page) {
          this.tableParam.page = page
          this.fetchData()
      },
      formatterStatus(row) {
          if(row.blocked) {
              return this.$t('app.illegal')
          }
          // if(row.reviewing) {
          //     return this.$t('common.reviewing')
          // }
          if (row.disable_p2p) {
            return this.$t('common.userClosed')
          }
          return this.$t('common.available')
      },
    },
    mounted() {
      this.fetchData()
    },
  }
  </script>
