<template>
  <div class="container">
    <LineChart />
  </div>
</template>

<script>
import LineChart from './components/LineChart'

export default {
  name: 'Test',
  components: {
    LineChart
  },
  data() {
    return {
      
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
  .container {
    padding: 50px 20px;
  }
</style>
