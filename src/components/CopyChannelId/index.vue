<template>
  <div >
    <el-input v-model="url" :placeholder="$t('seeder.inputChannelId')" >
      <template slot="prepend">
        <el-select v-model="type" style="width: 90px">
          <el-option
              key="hls"
              label="HLS"
              value="m3u8">
          </el-option>
          <el-option
              key="dash"
              label="DASH"
              value="mpd">
          </el-option>
        </el-select>
      </template>
      <template slot="append">
        <el-tooltip placement="top">
          <div slot="content" style="display: inline-block">{{ $t('seeder.copy') }}</div>
          <el-button @click="handleCopy($event)" type="info" plain style="padding: 6px 10px; ">
            <img v-bind:src="copyImg" alt="" min-width="24" height="24">
          </el-button>
        </el-tooltip>
      </template>
    </el-input>

  </div>
</template>

<script>
import clip from '@/utils/clipboard'
import copyImg from '@/assets/copy.png'
import { getItem } from "@/utils/storage";
import URLToolkit from 'url-toolkit'

export default {
  name: "CopyChannelId",
  data() {
    return {
      type: 'm3u8',
      copyImg,
      token: '',
      url: '',
    }
  },
  mounted() {
    const profile = getItem('profile')
    if (profile) this.token = profile.token
  },
  methods: {
    handleCopy() {
      let output = []
      this.url.split(' ').filter(item => !!item).forEach(url => {
        url = url.split('?')[0]
        let streamId
        if (url.startsWith('http') && (url.endsWith('.m3u8') || url.endsWith('.mpd'))) {
          const streamParsed = URLToolkit.parseURL(url);
          streamId = streamParsed.netLoc.substr(2) + streamParsed.path.substring(0, streamParsed.path.lastIndexOf('.'));
        } else {
          streamId = `${this.token}-${url}`;
        }
        streamId = `${streamId}|[8]`
        if (this.type === 'mpd') {
          streamId = `${streamId}d`
        }
        output.push(window.btoa(encodeURIComponent(streamId)))
      })
      clip(output.join('\n'), event)
    },
  }
}
</script>

<style scoped>

</style>
