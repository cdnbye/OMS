<template>
    <div :class="className" :style="{height: height, width: width}"/>
</template>

<script>
    const echarts = require('echarts/lib/echarts');
    require('echarts/lib/component/title');
    require('echarts/lib/component/toolbox');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/visualMap');
    require('echarts/lib/chart/map');
    require('echarts/lib/component/geo');
    require('echarts/theme/macarons') // echarts theme
    import { debounce } from '@/utils'
    import usaJson from '@/assets/USA.json'
    echarts.registerMap('USA', usaJson, {
        Alaska: {
            // 把阿拉斯加移到美国主大陆左下方
            left: -131,
            top: 25,
            width: 15
        },
        Hawaii: {
            left: -110,
            top: 24,
            width: 5
        },
    });

    export default {
        props: {
            className: {
                type: String,
                default: 'chart'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: 'calc(100vh - 84px)'
                // default: '900px'
            },
            autoResize: {
                type: Boolean,
                default: true
            },
            provinceData: {
                type: Array,
                required: true
            },
            total: {
                type: Number,
                required: false
            }
        },
        data() {
            return {
                chart: null,
                data: [],
                province_data: [
                    { name: 'Alabama', value: 0 },
                    { name: 'Alaska', value: 0 },
                    { name: 'Arizona', value: 0 },
                    { name: 'Arkansas', value: 0 },
                    { name: 'California', value: 0 },
                    { name: 'Colorado', value: 0 },
                    { name: 'Connecticut', value: 0 },
                    { name: 'Delaware', value: 0 },
                    { name: 'District of Columbia', value: 0 },
                    { name: 'Florida', value: 0 },
                    { name: 'Georgia', value: 0 },
                    { name: 'Hawaii', value: 0 },
                    { name: 'Idaho', value: 0 },
                    { name: 'Illinois', value: 0 },
                    { name: 'Indiana', value: 0 },
                    { name: 'Iowa', value: 0 },
                    { name: 'Kansas', value: 0 },
                    { name: 'Kentucky', value: 0 },
                    { name: 'Louisiana', value: 0 },
                    { name: 'Maine', value: 0 },
                    { name: 'Maryland', value: 0 },
                    { name: 'Massachusetts', value: 0 },
                    { name: 'Michigan', value: 0 },
                    { name: 'Minnesota', value: 0 },
                    { name: 'Mississippi', value: 0 },
                    { name: 'Missouri', value: 0 },
                    { name: 'Montana', value: 0 },
                    { name: 'Nebraska', value: 0 },
                    { name: 'Nevada', value: 0 },
                    { name: 'New Hampshire', value: 0 },
                    { name: 'New Jersey', value: 0 },
                    { name: 'New Mexico', value: 0 },
                    { name: 'New York', value: 0 },
                    { name: 'North Carolina', value: 0 },
                    { name: 'North Dakota', value: 0 },
                    { name: 'Ohio', value: 0 },
                    { name: 'Oklahoma', value: 0 },
                    { name: 'Oregon', value: 0 },
                    { name: 'Pennsylvania', value: 0 },
                    { name: 'Rhode Island', value: 0 },
                    { name: 'South Carolina', value: 0 },
                    { name: 'South Dakota', value: 0 },
                    { name: 'Tennessee', value: 0 },
                    { name: 'Texas', value: 0 },
                    { name: 'Utah', value: 0 },
                    { name: 'Vermont', value: 0 },
                    { name: 'Virginia', value: 0 },
                    { name: 'Washington', value: 0 },
                    { name: 'West Virginia', value: 0 },
                    { name: 'Wisconsin', value: 0 },
                    { name: 'Wyoming', value: 0 },
                ],
                _total: 0,
                max: 0,
            }
        },
        watch: {
            provinceData: {
                deep: true,
                handler(val) {
                    this.resetProvinceData()
                    const names = this.province_data.map(x=>x.name)
                    val.forEach(item => {
                        const idx = names.indexOf(item.name)
                        // console.warn(`idx ${idx} item.name ${item.name}`)
                        if (idx >= 0) {
                            if (this.max < item.value) this.max = item.value
                            this.province_data[idx].value += item.value
                        }
                    })
                    // this.province_data = val
                    this.setMapOptions()
                    this.setBarOptions()
                }
            },
            total: {
                handler(val) {
                    // console.warn(`val ${val}`)
                    if (!isNaN(val)) this._total = val
                    this.setMapOptions()
                }
            }
        },
        mounted() {
            this.initChart()
            if (this.autoResize) {
                this.__resizeHandler = debounce(() => {
                    if (this.chart) {
                        this.chart.resize()
                    }
                }, 100)
                window.addEventListener('resize', this.__resizeHandler)
            }

            // 监听侧边栏的变化
            const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
            sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            if (this.autoResize) {
                window.removeEventListener('resize', this.__resizeHandler)
            }

            const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
            sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

            this.chart.dispose()
            this.chart = null
        },
        methods: {
          resetProvinceData() {
            this.province_data.forEach(item => {
                item.value = 0
            })
          },
            convertData(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = this.geoCoordMap[data[i].name]
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        })
                    }
                }
                return res
            },
            sidebarResizeHandler(e) {
                if (e.propertyName === 'width') {
                    this.__resizeHandler()
                }
            },
            setMapOptions() {
                let max = this.max ? this.max : 0
                const _this = this
                this.chart.setOption({
                    backgroundColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#0f2c70' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#091732' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    geo: {
                        map: 'usa',
                        show: true,
                        roam: true,
                        label: {
                            normal: {
                                show: true,
                                color: '#fff'
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#091632',
                                borderColor: '#1773c3',
                                shadowColor: '#1773c3',
                                shadowBlur: 20
                            },
                            emphasis: {
                                areaColor: '#082E54'
                            }
                        },
                        scaleLimit: {
                            min: 0.5,
                            max: 3
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            // console.warn(JSON.stringify(params))
                            let desc = ''
                            if(params.value[2]) {
                                desc = params.name + ' : ' + params.value[2] + '<br />' + 'Percent: ' + (params.value[2] / _this._total * 100).toFixed(2) + '%'
                            } else if (params.value > 0) {
                                desc = params.name + ' : ' + params.value + '<br />' + 'Percent: ' + (params.value / _this._total * 100).toFixed(2) + '%'
                            }
                            return desc
                        }
                    },
                    visualMap: {
                        left: 'right',
                        min: 0,
                        max: max,
                        inRange: {
                            color: [
                                '#e0f3f8',
                                '#ffffbf',
                                '#fee090',
                                '#fdae61',
                                '#f46d43',
                                '#d73027',
                                '#a50026'
                            ]
                        },
                        text: ['High', 'Low'],
                        calculable: true
                    },
                    series: [
                        {
                            name: 'USA',
                            type: 'map',
                            roam: true,
                            map: 'USA',
                            emphasis: {
                                label: {
                                    show: true
                                }
                            },
                            data: this.province_data
                        }
                    ]
                })

            },
            setBarOptions() {
                if (!this._total) {
                  this._total = 0
                }
                const data = this.province_data.sort(function (a, b) {
                    return a.value - b.value;
                });
                this.chart.setOption({
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        axisLabel: {
                            rotate: 30
                        },
                        data: data.map(function (item) {
                            return item.name;
                        })
                    },
                    animationDurationUpdate: 1000,
                    series: {
                        type: 'bar',
                        id: 'viewers',
                        data: data.map(function (item) {
                            return item.value >= 0 ? item.value : 0;
                        }),
                        universalTransition: true
                    }
                })
            },
            sidebarResizeHandler(e) {
                if (e.propertyName === 'width') {
                    this.__resizeHandler()
                }
            },
            initChart() {
                this.chart = echarts.init(this.$el, 'macarons')
                this.setMapOptions()

                this.barId = setTimeout(() => {
                    this.setBarOptions();
                }, 5000);
            },
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            if (this.autoResize) {
                window.removeEventListener('resize', this.__resizeHandler)
            }

            const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
            sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

            this.chart.dispose()
            this.chart = null
            clearTimeout(this.barId)
        },
    }
</script>
