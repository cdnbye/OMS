<template>
  <div class="app-container">
    <LineChart :chart-data="data" :option="option" />
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import { fetchIncomeTrend } from '@/api/finance'

const exchangeRate = 7.1884

export default {
  name: "IncomeTrend",
  components: {
    LineChart,
  },
  data() {
    return {
      data: {
        CNY: [],
        USD: [],
        Total: [],
      },
      option: {
        xData: [],
        yName: '收入',
      },
    }
  },
  mounted() {
    fetchIncomeTrend().then(res => {
      const { data } = res
      const incomesCNY = data.incomes_cny
      const incomesUSD = data.incomes_usd
      const formattedIncomesCNY = []
      const formattedIncomesUSD = []
      const formattedIncomesTotal = []
      const formattedMonths = []
      Object.keys(incomesCNY).forEach(year => {
        incomesCNY[year].forEach(item => {
          formattedMonths.push(`${year}-${item.month}`)
          formattedIncomesCNY.push(item.total)
          formattedIncomesTotal.push(item.total)
        })
      })
      let index = 0
      Object.keys(incomesUSD).forEach(year => {
        incomesUSD[year].forEach(item => {
          formattedIncomesUSD.push(item.total)
          formattedIncomesTotal[index] += Math.round(item.total * exchangeRate)
          index ++
        })
      })
      this.data.CNY = formattedIncomesCNY
      this.data.USD = formattedIncomesUSD
      this.data.Total = formattedIncomesTotal
      this.option.xData = formattedMonths
    })
  },
}
</script>

<style scoped>

</style>
