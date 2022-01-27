<template>
  <div style="margin-top: 15px; margin-left: 15px; max-width: 600px;">
    <el-input v-model="peerId" class="input-with-select" placeholder="请输入peerId">
      <el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
    </el-input>
    <div style="margin: 20px" ></div>
    <el-form :inline="true" label-position="left" label-width="100px" :model="peerInfo" style="margin-left: 15px;">
      <el-form-item label="host">
        <el-input v-model="peerInfo.host"></el-input>
      </el-form-item>
      <el-form-item label="conns">
        <el-input v-model="peerInfo.conns"></el-input>
      </el-form-item>
      <el-form-item label="fail_conns">
        <el-input v-model="peerInfo.fail_conns"></el-input>
      </el-form-item>
      <el-form-item label="join">
        <el-input v-model="peerInfo.join"></el-input>
      </el-form-item>
      <el-form-item label="tag">
        <el-input v-model="peerInfo.tag"></el-input>
      </el-form-item>
      <el-form-item label="version">
        <el-input v-model="peerInfo.version"></el-input>
      </el-form-item>
      <el-form-item label="live">
        <el-input v-model="peerInfo.live"></el-input>
      </el-form-item>
      <el-form-item label="dev">
        <el-input v-model="peerInfo.dev"></el-input>
      </el-form-item>
      <el-form-item label="net_type">
      <el-input v-model="peerInfo.net_type"></el-input>
      </el-form-item>
      <el-form-item label="city">
      <el-input v-model="peerInfo.city"></el-input>
      </el-form-item>
      <el-form-item label="province">
        <el-input v-model="peerInfo.province"></el-input>
      </el-form-item>
      <el-form-item label="country">
        <el-input v-model="peerInfo.country"></el-input>
      </el-form-item>
      <el-form-item label="nat">
        <el-input v-model="peerInfo.nat"></el-input>
      </el-form-item>
      <el-form-item label="isp">
        <el-input v-model="peerInfo.isp"></el-input>
      </el-form-item>
      <el-form-item label="token">
        <el-input v-model="peerInfo.token"></el-input>
      </el-form-item>
      <el-form-item label="ip">
      <el-input v-model="peerInfo.ip"></el-input>
       </el-form-item>
      <el-form-item label="column">
      <el-input v-model="peerInfo.column"></el-input>
      </el-form-item>
      <el-form-item label="abr">
        <el-input v-model="peerInfo.abr"></el-input>
      </el-form-item>
      <el-form-item label="player_hooked">
        <el-input v-model="peerInfo.player_hooked"></el-input>
      </el-form-item>



    </el-form>
  </div>
</template>

<script>
import { fetchPeerInfo } from  '@/api/inspect'
export default {
  name: "peerInfo",
  data() {
    return {
      peerId: '',
      peerInfo: {
        host: "",
        conns: "",
        fail_conns: "",
        join: "",
        tag: "",
        version: "",
        live: "",
        dev: "",
        net_type: "",
        city: "",
        province: "",
        country: "",
        nat: "",
        isp: "",
        token: "",
        ip: "",
        column: "",
        abr: "",
        player_hooked: "",
      },
    }
  },
  methods: {
    onSearch() {
      fetchPeerInfo(this.peerId).then(resp => {
          this.peerInfo = resp.data
          this.peerInfo.join = new Date(parseInt(this.peerInfo.join)*1000).toLocaleString().replace(/:\d{1,2}$/,' ')
      })
    },
  }
}
</script>

<style scoped>

</style>
