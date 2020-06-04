<template>
  <div style="display: inline-block; text-align: left; width: 100%">
    <!--<el-input-->
      <!--style="width: 55%"-->
      <!--:value="currentDomain.domain ? currentDomain.domain : $t('domainTable.none')"-->
      <!--:disabled="true"-->
    <!--&gt;-->
    <!--</el-input>-->

    <el-tag style="font-weight: bold;; font-size: medium; margin: 0px 10px;"
            effect="dark"
            :type="currentDomain.domain ? 'success' : 'danger'">
      <span style="color: #99a9bf">{{$t('domainTable.current')}}</span>{{ currentDomain.domain ? currentDomain.domain : $t('domainTable.none') }}
    </el-tag>
    <el-button size="medium" type="primary" plain @click="selectDomainVisible = true"
               style="font-size: medium;">
      {{ $t('dashboard.switchDomain') }}
    </el-button>

    <el-dialog
      :title="$t('dashboard.switchDomain')"
      :visible.sync="selectDomainVisible"
      :width="device === 'mobile' ? '80%' : '30%'">
      <el-select v-model="selectValue" :placeholder="$t('domainTable.select')" style="width: 80%">
        <template v-for = "value in validDomain">
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
      validDomain: [],
      selectDomainVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'currentDomain',
      'userValidDomain'
    ])
  },
  watch: {
    userValidDomain(val) {
      if(val)
        this.validDomain = JSON.parse(val)
    }
  },
  mounted() {
    if(this.userValidDomain)
      this.validDomain = JSON.parse(this.userValidDomain)
  },
  methods: {
    handleSelect() {
      if(this.selectValue) {
        this.validDomain.forEach(item => {
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
