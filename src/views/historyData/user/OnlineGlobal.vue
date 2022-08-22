<template>
    <div class="app-container">
        <el-alert
                :title="$t('domainTable.title')"
                :description="$t('historyData.descGlobal')"
                type="info"
                show-icon>
        </el-alert>
        <DataPicker :date="date" :radio="radio" @selectChange="selectChange" @dataChange="dataChange"></DataPicker>
        <LineChart :chart-data="onlineData" :option="option" />
        <NoBindTip />
        <el-button type="primary" style="float: left">
            <json-excel
                    :fetch = "dataForExcel"
                    type    = "csv"
                    :name    = "excelName">
                Export Excel
            </json-excel>
        </el-button>
    </div>
</template>

<script>
    import moment from 'moment'
    import { fetchNum } from '@/api/user/historyData'
    import DataPicker from '@/components/DataPicker'
    import LineChart from '@/components/LineChart'
    import NoBindTip from '@/components/NoBindTip'
    import JsonExcel from 'vue-json-excel'
    import { getID } from '@/utils/auth'

    export default {
        name: 'OnlineGlobal',
        components: {
            DataPicker,
            LineChart,
            NoBindTip,
            JsonExcel,
        },
        data() {
            return {
                date: [moment().subtract(1, 'hour'), moment()],
                radio: 'hour',
                onlineData: {
                    online: []
                },
                option: {
                    xData: [],
                    yName: 'online',
                },
                excelName: '',
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            dataChange(date) {
                // console.warn(`date[0] ${date[0]} date[1] ${date[1]}`)
                if (!date) return
                this.date[0] = date[0]
                this.date[1] = date[1]
                this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
            },
            selectChange(val) {
                this.date[1] = moment()
                switch (val) {
                    case 'hour':
                        this.date[0] = moment().subtract(1, 'hour')
                        this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
                        break;
                    case 'day':
                        this.date[0] = moment().subtract(1, 'day')
                        this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
                        break;
                    case 'week':
                        this.date[0] = moment().subtract(1, 'week')
                        this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
                        break;
                    case 'month':
                        this.date[0] = moment().subtract(1, 'month')
                        this.getData(this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
                        break;
                    default:
                        break;
                }
            },
            formatData(res) {
                const data = res.data.list
                this.option.xData = []
                this.onlineData.online = []
                data.forEach(item => {
                    this.option.xData.push(moment(item.ts * 1000).format('MM-DD HH:mm'))
                    this.onlineData.online.push(item.value)
                })
            },
            getTimeStamp(date) {
                return moment(date).unix()
            },
            getData(start = this.getTimeStamp(this.date[0]), end = this.getTimeStamp(this.date[1])) {

                fetchNum(getID(), 0, start, end).then(res => {
                    this.formatData(res)
                })
            },
            async dataForExcel() {
                // console.warn(`date[0] ${this.date[0]} date[1] ${this.date[1]}`)
                let res = await fetchNum(getID(), 0, this.getTimeStamp(this.date[0]), this.getTimeStamp(this.date[1]))
                const data = res.data.list
                let peakMap = new Map()
                data.forEach(item => {
                    // 算出每天的峰值
                    let day = moment(item.ts * 1000).format('MM-DD')
                    let peak = peakMap.get(day)
                    if (!peak || peak < item.value) {
                        peakMap.set(day, item.value)
                    }
                })

                let peakArr = []
                let sum = 0;
                let realDays = 0;          // 有人数在线的天数
                for (let [day, peak] of peakMap.entries()) {
                    peakArr.push({"Date":day, "Value":peak})
                    sum += peak
                    if (peak !== 0) {
                        realDays ++;
                    }
                }
                let average = 0
                if (realDays > 0) {
                    average = Math.round(sum/realDays)
                }
                peakArr.push({"Date":"Avg", "Value":average})
                this.excelName = `Online Viewers Statistics.csv`
                return peakArr
            }
        }
    }
</script>
