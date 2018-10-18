<template>
  <el-card :body-style="{ padding: '30px' }">
    <Table />
  </el-card>
</template>

<script>
import Table from './components/DomainTable'

export default {
  name: 'UserData',
  components: {
    Table
  }
}
</script>
