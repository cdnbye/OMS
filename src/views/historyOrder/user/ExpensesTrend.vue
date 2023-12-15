<template>
  <div class="app-container">
    <LineChart :chart-data="data" :option="option" />
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import { fetchExpensesTrend } from '@/api/user/order'
import { getID } from '@/utils/auth'

export default {
  name: "ExpensesTrend",
  components: {
    LineChart,
  },
  data() {
    return {
      data: {
        expense: [],
      },
      option: {
        xData: [],
        yName: 'Expense',
      },
    }
  },
  mounted() {
    fetchExpensesTrend(getID()).then(res => {
      const { data } = res
      const formattedMonths = []
      const formattedExpenses = []
      Object.keys(data).forEach(year => {
        data[year].forEach(item => {
          formattedMonths.push(`${year}-${item.month}`)
          formattedExpenses.push(item.total)
        })
      })
      this.data.expense = formattedExpenses
      this.option.xData = formattedMonths
    })
  },
}
</script>

<style scoped>

</style>
