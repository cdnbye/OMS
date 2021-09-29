<template>
    <u-s-a-map :provinceData="provinceData" :total="total" />
</template>

<script>
    import USAMap from '@/components/USAMap'
    import { fetchLiveData } from '@/api/liveData'

    export default {
        name: 'USADis',
        data() {
            return {
                provinceData: [],
                total: 0
            }
        },
        components: {
            USAMap
        },
        mounted() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                fetchLiveData('province', {country: 'usa'}).then(res => {
                    const data = res.data
                    if(data) {
                        this.provinceData = data.data
                        this.total = data.total
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
