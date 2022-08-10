<template>
  <div style="display: inline-block; text-align: center; width: 100%; ">
    <el-tag style="font-weight: bold;; font-size: medium; margin: 0px;"
            effect="dark"
            :type="currentDomain.domain ? 'success' : 'danger'"
            v-show="switchDomainVisible">
      {{ currentDomain.domain ? currentDomain.domain : $t('domainTable.none') }}
      <el-button size="mini" type="primary" plain @click="selectDomainVisible = true"
                 style="font-size: medium; margin-right: -10px;">
        {{ $t('dashboard.switchDomain') }}
      </el-button>
    </el-tag>


    <el-dialog
      :title="$t('dashboard.switchDomain')"
      :visible.sync="selectDomainVisible"
      :width="device === 'mobile' ? '80%' : '30%'">
      <el-select v-model="selectValue" :placeholder="$t('domainTable.select')" style="width: 80%">
        <template v-for = "value in userValidDomain">
          <el-option
            v-if="value.isValid === 1"
            :key="value.domain"
            :label="value.domain"
            :value="value.domain">
          </el-option>
        </template>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="selectDomainVisible = false">{{ $t('common.cancel')}}</el-button>
        <el-button type="primary" @click="handleSelect">{{ $t('common.ok')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { fetchAllDomainAndApp } from '@/utils'

export default {
  name: 'SwitchDomain',
  props: {
    pcWidth: {
      type: String,
      default: '30%'
    },
    mobileWidth: {
      type: String,
      default: '60%'
    },
    finishSelect: {
      type: Function,
      required: false
    }
  },
  data() {
    return {
      selectValue: '',
      selectDomainVisible: false,
      visible: false,
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'currentDomain',
      'userValidDomain',
      'switchDomainVisible',
    ])
  },
  watch: {
    currentDomain: {
      handler: function (val) {
        if (val) {
          this.selectValue = val.domain
        }
      },
      deep: true,
    }
  },
  mounted() {
      fetchAllDomainAndApp()
  },
  methods: {
    handleSelect() {
      if(this.selectValue) {
        this.userValidDomain.forEach(item => {
          if(item.domain === this.selectValue) {
            store.dispatch('setCurrentDomain', item).then(() => {
              this.selectDomainVisible = false
            })
          }
        })
        if(this.finishSelect)
          this.finishSelect(this.currentDomain.uid, this.currentDomain.id)
      }
    }
  }

}
</script>

<style>
.el-button--mini {
  padding: 6px 15px;
}
</style>
