<template>
  <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <div class="card-panel">
      <slot></slot>
      <div class="card-panel-description">
        <span class="card-panel-num" :style="{color: color}">{{ num }}</span>
        <div class="card-panel-text">
          {{ desc }}
          <slot name="footer"></slot>
        </div>

      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    num: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '',
    }
  },
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
