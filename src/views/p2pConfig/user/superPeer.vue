<template>
  <div class="app-container">
    <el-row type="flex" style="margin-bottom: 10px; width: 100%;" :gutter="5">
      <el-col :span="3">
        <el-button style="float: left" type="primary" @click="dialogFormVisible = true">{{ $t('seeder.create') }}</el-button>
      </el-col>
      <el-col :span="24">
        <CopyChannelId v-if="device !== 'mobile'" :token="'fsdgdsgsd'"></CopyChannelId>
      </el-col>
    </el-row>

    <el-table border :data="tableData" v-loading="loading">
      <el-table-column align="center" prop="url" :label="$t('seeder.addr')" min-width="100" ></el-table-column>
      <el-table-column align="center" :label="$t('p2pConfig.status')" width="100">
        <template slot-scope="scope">
          <span :style="!scope.row.running ? 'color: red':'color: green'">
            {{ scope.row.running ? $t('seeder.running') : $t('seeder.stopped') }}
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('p2pConfig.signalManage.switch')" align="center"  min-width="30" width="100">
        <template slot-scope="scope">
          <el-switch :value="!scope.row.disabled" active-color="#13ce66" inactive-color="#ff4949" @change="value => disabledChange(scope.row, value)"> </el-switch>
        </template>
      </el-table-column>
      <el-table-column :label="$t('seeder.auto')" align="center"  min-width="30" width="100">
        <template slot-scope="scope">
          <el-switch :value="scope.row.auto" active-color="#13ce66" inactive-color="#ff4949" @change="value => autoChange(scope.row, value)"> </el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="bandwidth" :label="$t('seeder.bandwidth')" min-width="30" width="150"></el-table-column>
      <el-table-column align="center" prop="remarks" :label="$t('seeder.remarks')" min-width="30" width="150"></el-table-column>
      <el-table-column :label="$t('domainTable.operation')" align="center" min-width="50" width="350">
        <template slot-scope="scope">
          <el-button size="small" :disabled="scope.row.disabled" :loading="loading" type="primary" @click.native.prevent="handlePing(scope.row)">Ping</el-button>
          <el-button size="small" :disabled="scope.row.disabled" :loading="loading" type="primary" @click.native.prevent="seedingClick(scope.row)">{{ $t('seeder.seed') }}</el-button>
          <el-button size="small" :loading="loading" type="primary" @click.native.prevent="handleStats(scope.row)">{{ $t('app.watch') }}</el-button>
          <el-popover placement="top" width="200" :ref="'popover-' + scope.row.id" trigger="manual">
            <p>{{ $t('common.sureDelete') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="small" type="text" @click="pClose(scope.row.id)">{{ $t('common.cancel') }}</el-button>
              <el-button size="small" type="primary" :loading="loading" @click.native.prevent="handleDelete(scope.row)">{{ $t('common.ok') }}</el-button>
            </div>
            <el-button slot="reference" size="small" type="danger" @click="pShow(scope.row.id)" :style="device==='mobile'?'':'margin-left: 10px'">{{ $t('common.delete') }}</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog  :visible.sync="dialogFormVisible" :width="device==='mobile'?'85%':''">
      <div slot="title">
        <p>{{ $t('seeder.createTitle') }}</p>
      </div>
      <el-form :model="form" label-position="left" label-width="120px">
        <el-form-item prop="url" label="Server URL" label-width="100px" required>
          <el-input v-model="form.url" placeholder="http://ip:port"></el-input>
        </el-form-item>
        <el-form-item prop="bandwidth" label="Bandwidth" label-width="100px">
          <el-input v-model="form.bandwidth" type="number">
            <template slot="append">Mbps</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="remarks" label="Remarks" label-width="100px">
          <el-input v-model="form.remarks" placeholder="Optional"></el-input>
        </el-form-item>
        <el-form-item prop="accessToken" label="AccessToken" label-width="100px">
          <el-input v-model="form.accessToken" placeholder="Optional"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="handleCreateItem" :loading="loading">{{ $t('common.ok') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog  :visible.sync="dialogSeedVisible" :width="device==='mobile'?'85%':''">
      <div slot="title">
        <p>{{ $t('seeder.seedTitle') }}</p>
      </div>
      <el-form :model="seedForm" label-position="left" label-width="120px">
        <el-form-item prop="channelId" label="Channel ID" label-width="100px" required>
          <el-input v-model="seedForm.channelId" type="textarea" autosize placeholder="base64"></el-input>
        </el-form-item>
        <el-form-item prop="live" label="Type" label-width="100px">
          <el-select v-model="seedForm.live" style="width: 150px; float: left">
            <el-option key="live" label="Live" :value="true"></el-option>
            <el-option key="vod" label="VOD" :value="false">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="priority" label="Priority" label-width="100px">
          <el-input v-model="seedForm.priority" type="number" style="width: 150px; float: left"></el-input>
        </el-form-item>
        <el-form-item prop="keepAlive" label="KeepAlive" label-width="100px">
          <el-select v-model="seedForm.keepAlive" style="width: 150px; float: left">
            <el-option key="false" label="false" :value="false"></el-option>
            <el-option key="true" label="true" :value="true"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSeedVisible = false">{{ $t('common.cancel') }}</el-button>
        <el-button type="primary" @click="handleSeeding" :loading="loading">{{ $t('common.ok') }}</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { createSeeder, getSeeders, deleteSeeder, updateSeeder, actionSeeder } from '@/api/user/seeder'
import { mapGetters } from 'vuex'
import { trim } from '@/utils'
import { getID } from '@/utils/auth'
import CopyChannelId from "@/components/CopyChannelId";

export default {
  name: "superPeer",
  components: {
    CopyChannelId,
  },
  data() {
    return {
      loading: false,
      dialogFormVisible: false,
      dialogSeedVisible: false,
      form: {},
      seedForm: {},
      tableData: [],
    }
  },
  mounted() {
    this.resetForm();
    this.resetSeedForm();
    this.fetchTableData()
  },
  methods: {
    handleStats(item) {
      this.$router.push({
        name: 'SeederStats',
        query: {
          sid: item.id,
        }
      })
    },
    seedingClick(item) {
      this.dialogSeedVisible = true
      this.seedForm.id = item.id
    },
    handleSeeding() {
      this.formatSeedForm()
      if (!this.seedForm.channelId) return
      this.processChannelId()
      this.loading = true
      this.action(this.seedForm.id, {
        action: 'seed',
        ...this.seedForm,
      }).then(() => {
        this.resetSeedForm()
        this.dialogSeedVisible = false
      }).finally(() => {
        this.loading = false
      })
    },
    processChannelId() {
      const arr = this.seedForm.channelId.split('\n').filter(item=>!!item)
      if (arr.length <= 1) return
      delete this.seedForm.channelId
      this.seedForm.channelIds = arr
    },
    handlePing(item) {
      this.loading = true
      this.action(item.id, {
        action: 'ping',
      }).then(() => {
        this.fetchTableData()
      }).finally(() => {
        this.loading = false
      })
    },
    handleDelete(item) {
      this.loading = true
      deleteSeeder(getID(), item.id).then(() => {
        this.$notify({
          title: this.$t('common.success'),
          type: 'success'
        });
        this.fetchTableData()
      }).finally(() => {
        this.loading = false
        this.pClose(item.id)
      })
    },
    disabledChange(item, value) {
      item.disabled = !value
      this.update(item)
    },
    autoChange(item, value) {
      item.auto = value
      this.update(item)
    },
    action(sid, data) {
      return new Promise((resolve, reject) => {
        actionSeeder(getID(), sid, data).then(resp => {
          this.$notify({
            title: this.$t('common.success'),
            type: 'success'
          });
          resolve(resp)
        }).catch(e => {
          reject(e)
        })
      })
    },
    update(item) {
      this.loading = true
      updateSeeder(getID(), item.id, item).then(() => {
        this.$notify({
          title: this.$t('common.success'),
          type: 'success'
        });
        this.fetchTableData()
      }).finally(() => {
        this.loading = false
      })
    },
    fetchTableData() {
      this.loading = true
      getSeeders(getID()).then(res => {
        if (res.data) {
          this.tableData = res.data
        }
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    handleCreateItem() {
      this.formatForm()
      if (!this.form.url) return
      this.loading = true
      createSeeder(getID(), this.form).then(res => {
        if(res.ret === 0) {
          this.dialogFormVisible = false
          this.$notify({
            title: this.$t('common.success'),
            message: this.$t('app.createItemSuccess'),
            type: 'success'
          });
          this.resetForm();
          this.fetchTableData()
        }
      }).catch(err => {
          console.error(err)
        }).finally(() => {
          this.loading = false
      })
    },
    pShow(id) {
      this.$refs[`popover-` + id].doShow()
    },
    pClose(id) {
      this.$refs[`popover-` + id].doClose()
    },
    formatForm() {
      const { form } = this;
      form.url = trim(form.url)
      form.bandwidth = Number(form.bandwidth)
      form.accessToken = trim(form.accessToken)
    },
    formatSeedForm() {
      const { seedForm } = this;
      seedForm.channelId = trim(seedForm.channelId)
      seedForm.priority = Number(seedForm.priority)
    },
    resetForm() {
      this.form = {
        url: '',
        bandwidth: 1000,
        accessToken: '',
        remarks: '',
      }
    },
    resetSeedForm() {
      this.seedForm = {
        channelId: '',
        live: true,
        priority: 100,
        keepAlive: false,
      }
    }
  },
  computed: {
    ...mapGetters([
      'device',
    ])
  },
}
</script>

<style scoped>

</style>
