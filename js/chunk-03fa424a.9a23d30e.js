(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03fa424a"],{"18dc":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"dashboard-realtime-container"},[a("el-alert",{attrs:{title:t.$t("domainTable.title"),description:t.$t("dashboard.descPerApp"),type:"info","show-icon":""}}),a("LiveTime",{attrs:{statis:t.statis}}),a("Dis",{attrs:{data:t.disData,showDomainData:t.showDomainData}}),a("NoBindTip")],1)},r=[],n=(e("8e6e"),e("ac6a"),e("456d"),e("f559"),e("bd86")),s=e("4360"),o=e("2f62"),c=e("8595"),d=e("284a"),l=e("fe08"),f=e("6be8"),u=e("9a09"),p=e("2774"),h=e("b352");function D(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function m(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?D(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var b=void 0,y={name:"liveData",components:{Dis:p["a"],NoBindTip:u["a"],LiveTime:h["a"]},data:function(){return{remainTrafficFlag:!0,showDomainData:!1,statis:{whiteList:!1,type:{product_type:0,time:""},online:0,traffic_p2p:{num:0,unit:"KB"},traffic_http:{num:0,unit:"KB"},traffic_share:{num:0,unit:"KB"},frequency_day:0,num_max:0,rebuffer_ratio:-1,flow:{remain:0,daily_remain:0,totalRemain:0,free:{num:0,unit:"KB"},utc:0},clock:null,traffic_p2p_day:0,traffic_http_day:0},disData:{versionData:[],tagData:[],deviceData:[],liveData:[],netTypeData:[],domainData:[],natTypeData:[]}}},computed:m({},Object(o["b"])(["currentDomain","device","language"])),watch:{currentDomain:function(){"undefined"===typeof this.$route.params.hostId&&(clearInterval(b),this.getUserDomain())}},mounted:function(){this.$store.dispatch("toggleSwitchDomain",!0);var t=this.$route.params,a=t.domainInfo;a&&a.id&&a.uid?(this.loopGetData(a.uid,a.id,t.hostId),this.getDisData(a,t.hostId,!0),s["a"].dispatch("setCurrentDomain",a)):this.getUserDomain()},beforeDestroy:function(){clearInterval(b),this.$store.dispatch("toggleSwitchDomain",!1)},methods:{formatTraffic:f["d"],getData:function(t,a,e){var i,r=this;i=e>=0?function(){return Object(d["f"])(t,e)}:function(){return Object(c["c"])(t,a)},i().then((function(t){var a=t.data;r.statis.online=a.num_rt,r.statis.traffic_p2p_day=a.traffic_p2p_day,r.statis.traffic_http_day=a.traffic_http_day,r.statis.traffic_p2p=Object(f["d"])(a.traffic_p2p_day),r.statis.traffic_http=Object(f["d"])(a.traffic_http_day),r.statis.traffic_share=Object(f["d"])(a.traffic_share_day),r.statis.frequency_day=a.api_frequency_day,0!==a.total_rebuffers&&0!==a.total_media_requests?r.statis.rebuffer_ratio=a.total_rebuffers/a.total_media_requests:r.statis.rebuffer_ratio=-1,r.statis.num_max=a.num_max,r.statis.flow.remain=a.flow.remain,r.statis.flow.daily_remain=a.flow.daily_remain,r.statis.flow.totalRemain=a.flow.daily_remain+a.flow.remain,r.statis.flow.free=Object(f["d"])(a.flow.free),r.statis.flow.utc=a.flow.utc,r.statis.whiteList=a.whitelist,r.statis.type.product_type=a.flow.product_type,r.statis.type.time=a.flow.duetime,r.statis.clock=a.clock,0===a.flow.free&&0===a.flow.remain&&0===a.flow.daily_remain&&r.remainTrafficFlag&&!a.whitelist&&(r.$messageBox.confirm(r.$t("dashboard.trafficUseOut"),{distinguishCancelAndClose:!0,confirmButtonText:r.$t("package.buyFlow"),cancelButtonText:r.$t("package.buyMonthly")}).then((function(){r.$router.push("/shopping/package")})).catch((function(t){"cancel"===t?r.$router.push("/shopping/monthly_package"):console.log("-")})),r.remainTrafficFlag=!1)})).catch((function(t){console.log(t)}))},getDisData:function(t,a){var e,i,r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=t.uid,o=t.id;(e=a>=0?function(t){return Object(d["e"])(s,a,t)}:function(t){return Object(c["a"])(s,o,t)},e("version").then((function(t){var a=t.data.data;r.disData.versionData=a?Object(f["c"])(a):[]})),e("tag").then((function(t){var a=t.data.data;r.disData.tagData=a?Object(f["c"])(a):[]})),e("device").then((function(t){var a=t.data.data;r.disData.deviceData=a?Object(f["c"])(a):[]})),e("live").then((function(t){var a=t.data.data;r.disData.liveData=a?Object(f["c"])(a):[]})),e("netType").then((function(t){var a=t.data.data;r.disData.netTypeData=a?Object(f["c"])(a):[]})),e("nat").then((function(t){var a=t.data.data;r.disData.natTypeData=a?Object(f["c"])(a):[]})),t.domain.startsWith("shadow@"))?(this.showDomainData=!0,i=n?function(t){return Object(l["d"])(t)}:function(t){return Object(l["b"])(t)},i(s).then((function(t){var a=t.data;r.disData.domainData=a?Object(f["c"])(a):[]}))):(this.disData.domainData=[],this.showDomainData=!1)},loopGetData:function(t,a,e){var i=this;this.getData(t,a,e),clearInterval(b),b=setInterval((function(){i.getData(t,a,e)}),2e4)},getUserDomain:function(){this.currentDomain.id&&(this.loopGetData(this.currentDomain.uid,this.currentDomain.id),this.getDisData(this.currentDomain))}}},g=y,v=(e("d6e1"),e("2877")),O=Object(v["a"])(g,i,r,!1,null,null,null);a["default"]=O.exports},2774:function(t,a,e){"use strict";var i=function(){var t=this,a=t._self._c;return a("el-row",{attrs:{gutter:20}},[t.showDomainData?a("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[a("pie-card",{attrs:{title:t.$t("dashboard.domainDis"),data:t.data.domainData}})],1):t._e(),a("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[a("pie-card",{attrs:{title:t.$t("dashboard.versionDis"),data:t.data.versionData}})],1),a("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[a("pie-card",{attrs:{title:t.$t("dashboard.tagDis"),data:t.data.tagData}})],1),!1===t.currentDomain.native?a("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[a("pie-card",{attrs:{title:t.$t("dashboard.terminalDis"),data:t.data.deviceData}})],1):t._e(),a("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[a("pie-card",{attrs:{title:t.$t("dashboard.liveDis"),data:t.data.liveData}})],1),a("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[a("pie-card",{attrs:{title:t.$t("dashboard.netDis"),data:t.data.netTypeData}})],1),t.currentDomain.native?a("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[a("pie-card",{attrs:{title:t.$t("dashboard.natDis"),data:t.data.natTypeData}})],1):t._e()],1)},r=[],n=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),s=e("d9d8"),o=e("2f62");function c(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function d(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var l={name:"Distribution",components:{PieCard:s["a"]},computed:d({},Object(o["b"])(["currentDomain"])),props:{showDomainData:{type:Boolean,default:!1},data:{type:Object,required:!0,default:{versionData:[],tagData:[],deviceData:[],liveData:[],netTypeData:[],domainData:[],natTypeData:[]}}}},f=l,u=(e("e4a5"),e("2877")),p=Object(u["a"])(f,i,r,!1,null,"16bded79",null);a["a"]=p.exports},a6b7:function(t,a,e){},b655:function(t,a,e){},d6e1:function(t,a,e){"use strict";e("b655")},e4a5:function(t,a,e){"use strict";e("a6b7")},f559:function(t,a,e){"use strict";var i=e("5ca1"),r=e("9def"),n=e("d2c8"),s="startsWith",o=""[s];i(i.P+i.F*e("5147")(s),"String",{startsWith:function(t){var a=n(this,t,s),e=r(Math.min(arguments.length>1?arguments[1]:void 0,a.length)),i=String(t);return o?o.call(a,i,e):a.slice(e,e+i.length)===i}})}}]);