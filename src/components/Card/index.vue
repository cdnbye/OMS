<template>
  <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <div class="card-panel">
      <slot></slot>
      <div class="card-panel-description">
        <span v-if="infinite" class="card-panel-num" :style="{color: color}">+∞</span>
        <count-to
            v-else
            class="card-panel-num"
            :style="{color: color}"
            :startVal="startVal"
            :endVal="num"
            :decimals="decimals"
            :duration="duration"
            >
        </count-to>
        <div class="card-panel-text">
          {{ desc }}
          <slot name="footer"></slot>
        </div>

      </div>
    </div>
  </el-card>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  name: "Card",
  components: {
    countTo
  },
  props: {
    num: {
      type: Number,
      default: 0,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    decimals: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      default: '',
      required: true
    },
    color: {
      type: String,
      default: '',
    },
    infinite: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      startVal: 0,
    }
  },
  watch: {
    num: {
      handler: function(newValue, oldValue) {
        this.startVal = oldValue
      },
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.card-panel {
  height: 108px;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
  border-color: rgba(0, 0, 0, .05);
  .card-panel-description {
    text-align: right;
    line-height: 42px;
    font-weight: bold;
    margin: 26px 26px 0 26px;
    margin-left: 0;
    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
    }
    .card-panel-num {
      font-size: 24px;
    }
  }
}
</style>
