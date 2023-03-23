<template>
  <div class="app-container">
    <vue-json-pretty
        showIcon
        showLineNumber
        :showDoubleQuotes="false"
        :data="jsonData" />
  </div>
</template>

<script>
import { actionSeeder } from '@/api/user/seeder'
import { getID } from '@/utils/auth'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  name: "seederStats",
  components: {
    VueJsonPretty,
  },
  mounted() {

  },
  data() {
    return {
      jsonData: {

      }
    }
  }
}
</script>

<style scoped>

</style>
