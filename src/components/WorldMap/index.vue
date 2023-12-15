<template>
  <div style="display: flex; justify-content: center;">
    <vuevectormap
        ref="jvm"
        width="100%"
        height="850px"
        :zoomButtons="false"
        :markers="markers"
        :markerStyle="markerStyle"
        :visualizeData="visualizeData"
        @loaded="loaded"
        @regionTooltipShow="regionTooltipShow">
    </vuevectormap>
  </div>
</template>

<script>
import { getItem } from "@/utils/storage";
import { LOCATION } from '@/constant';

export default {
  name: 'WorldMap',
  props: {
    countryData: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    markerStyle: {
      initial: { fill: '#ff4551' }
    },
    values: {},
  }),
  computed: {
    markers() {
      const loc = getItem(LOCATION)
      const name = 'Tracker'
      if (loc === 'p1') {
        return [
          { name, coords: [50.110, 8.682] },
        ]
      }
      if (loc === 'p3') {
        return [
          { name, coords: [22.319, 114.169] },
        ]
      }
      if (loc === 'p2') {
        return [
          { name, coords: [39.046, -77.490] },
        ]
      }
      return []
    },
    visualizeData() {
      for (let { name, value } of this.countryData) {
        this.values[name] = value
      }
      return {
        scale: ['#d6dbe2', '#0b51d2'],
        values: this.values,
      }
    },
  },
  mounted() {
    this.map = this.$refs.jvm.map;
  },
  beforeDestroy() {
    this._map = null
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize(map) {
      if (this._map){
        this._map.updateSize()
      }
    },
    loaded(map) {
      this._map = map
      window.addEventListener('resize', this.resize)
    },
    regionTooltipShow(event, tooltip, code) {
      if (!this.values[code] || this.total === 0) return
      const value = this.values[code]
      tooltip.text(
          `<div style="text-align: center"><p>${tooltip.text()}: ${value}</p>` +
          `<p>${(value/this.total*100).toFixed(2)}%</p></div>`,
          true
      )
    },
  }
}
</script>
