(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cbb106a"],{"6a94":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"app-container"},[a("LineChart",{attrs:{"chart-data":t.data,option:t.option}})],1)},i=[],o=(n("456d"),n("ac6a"),n("e702")),s=n("cd05"),r=7,c={name:"IncomeTrend",components:{LineChart:o["a"]},data:function(){return{data:{CNY:[],USD:[],Total:[]},option:{xData:[],yName:"收入"}}},mounted:function(){var t=this;Object(s["a"])().then((function(a){var n=a.data,e=n.incomes_cny,i=n.incomes_usd,o=[],s=[],c=[],u=[];Object.keys(e).forEach((function(t){e[t].forEach((function(a){u.push("".concat(t,"-").concat(a.month)),o.push(a.total),c.push(a.total)}))}));var d=0;Object.keys(i).forEach((function(t){i[t].forEach((function(t){s.push(t.total),c[d]+=Math.round(t.total*r),d++}))})),t.data.CNY=o,t.data.USD=s,t.data.Total=c,t.option.xData=u}))}},u=c,d=n("2877"),h=Object(d["a"])(u,e,i,!1,null,"2b5d5a62",null);a["default"]=h.exports},cd05:function(t,a,n){"use strict";n.d(a,"d",(function(){return i})),n.d(a,"b",(function(){return o})),n.d(a,"e",(function(){return s})),n.d(a,"a",(function(){return r})),n.d(a,"c",(function(){return c}));n("7f7f"),n("ac6a");var e=n("b775");function i(){return Object(e["a"])({url:"finance/global",method:"get"})}function o(){return Object(e["a"])({url:"finance/invoices",method:"get"})}function s(t){return Object(e["a"])({url:"finance/invoice_finish",method:"post",data:t})}function r(){return Object(e["a"])({url:"finance/income_trend",method:"get"})}function c(t,a,n){var i="finance/trades?page=".concat(t,"&page_size=").concat(a);return n.forEach((function(t){t.value&&(i+="&".concat(t.name,"=").concat(t.value))})),Object(e["a"])({url:i,method:"get"})}},e702:function(t,a,n){"use strict";var e=function(){var t=this,a=t._self._c;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},i=[],o=(n("28a5"),n("456d"),n("ac6a"),n("ed08")),s=n("3eba");n("817d");var r={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0},secondChartData:{type:Object,required:!1},option:{type:Object,required:!0},showSecondYAxis:{type:Boolean}},data:function(){return{chart:null,optionData:{xData:[],unit:""},data:{},secondData:{}}},watch:{secondChartData:{deep:!0,handler:function(t){this.secondData=t,this.setOptions()}},chartData:{deep:!0,handler:function(t){this.data=t,this.setOptions()}},option:{deep:!0,handler:function(t){this.optionData=t,this.setOptions()}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(o["b"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler));var a=document.getElementsByClassName("sidebar-container")[0];a.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){if(this.chart){this.autoResize&&window.removeEventListener("resize",this.__resizeHandler);var t=document.getElementsByClassName("sidebar-container")[0];t&&t.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null}},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=this,a=[],n=[],e=["#3888fa","#FF005A"];Object.keys(this.data).forEach((function(i,o){n.push(i),a.push({name:i,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},itemStyle:{normal:{color:e[o],lineStyle:{color:e[o],width:2}}},smooth:!0,type:"line",data:t.data[i],animationDuration:2800,animationEasing:"cubicInOut"})})),Object.keys(this.secondData).forEach((function(e,i){n.push(e),a.push({name:e,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},yAxisIndex:1,smooth:!0,type:"line",data:t.secondData[e],animationDuration:2800,animationEasing:"cubicInOut"})}));var i={xAxis:{data:this.optionData.xData,boundaryGap:!1,axisLabel:{formatter:function(t){if(t)return t.split(" ").join("\n")}},axisTick:{show:!1}},grid:{left:10,right:30,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",padding:[5,10],axisPointer:{type:"cross"},textStyle:{align:"left"}},yAxis:[{name:this.optionData.unit?"".concat(this.optionData.yName,"(").concat(this.optionData.unit,")"):"".concat(this.optionData.yName),axisTick:{show:!1}}],legend:{data:n},series:a};this.showSecondYAxis&&i.yAxis.push({name:"P2P Ratio",max:100,min:0,axisTick:{show:!1},position:"right",axisLabel:{formatter:"{value} %"}}),this.chart.setOption(i)},initChart:function(){this.chart=s.init(this.$el,"macarons"),this.setOptions()}}},c=r,u=n("2877"),d=Object(u["a"])(c,e,i,!1,null,null,null);a["a"]=d.exports}}]);