(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83028a52"],{"14b9":function(t,e,a){var n=a("5ca1");n(n.P,"String",{repeat:a("9744")})},"7a42":function(t,e,a){"use strict";a("cee6")},9744:function(t,e,a){"use strict";var n=a("4588"),i=a("be13");t.exports=function(t){var e=String(i(this)),a="",o=n(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},b602:function(t,e,a){},c9cc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-global-container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.checkResultLoading,expression:"checkResultLoading"}],attrs:{"element-loading-text":t.$t("package.checkResultLoadingTip")}},[e("el-alert",{attrs:{title:t.$t("domainTable.title"),description:t.$t("dashboard.descGlobal"),type:"info","show-icon":""}}),e("el-row",{staticStyle:{"text-align":"left"},attrs:{gutter:20}},[e("el-col",{attrs:{xs:20,sm:6}},[e("Carousel")],1)],1),e("LiveTime",{attrs:{statis:t.statis,global:!0}}),e("DistributionGlobal",{attrs:{data:t.disData}}),e("NoBindTip")],1)])},i=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),c=a("2f62"),s=a("5f87"),r=a("8595"),l=a("284a"),u=a("66e6"),d=a("b775");function f(t){return Object(d["a"])({url:"user/user_id/".concat(t,"/global/domains"),method:"get"})}function h(t){return Object(d["a"])({url:"global/user/user_id/".concat(t,"/global/domains"),method:"get"})}var p=a("6be8"),m=a("9a09"),b=function(){var t=this,e=t._self._c;return e("div",[e("el-carousel",{attrs:{height:"30px","indicator-position":"none",interval:5e3,arrow:"never"}},[t.showCheckin?e("el-carousel-item",[e("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"font-size":"medium"},attrs:{size:"mini",type:"success"},on:{click:t.handleCheckin}},[t._v("\n        "+t._s(t.$t("dashboard.checkin"))+"\n      ")])],1):t._e(),e("el-carousel-item",[e("el-button",{staticStyle:{"font-size":"medium"},attrs:{size:"mini",type:"primary"},on:{click:t.handleInvite}},[t._v("\n        "+t._s(t.$t("dashboard.invite"))+"\n      ")])],1),""===t.profile.mobile?e("el-carousel-item",[e("el-button",{staticStyle:{"font-size":"medium"},attrs:{size:"mini"},on:{click:t.handleBonus}},[t._v("\n        "+t._s(t.$t("dashboard.bonus"))+"\n      ")])],1):t._e()],1)],1)},g=[],y=(a("14b9"),a("5d2d"));function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O={name:"Carousel",data:function(){return{loading:!1,showCheckin:!0}},mounted:function(){Object(y["a"])("checkin")&&(this.showCheckin=!1)},computed:D({},Object(c["b"])(["currentDomain","profile"])),methods:{handleBonus:function(){this.$router.push("/user/edit")},handleInvite:function(){this.$router.push("/user/commission")},handleCheckin:function(){var t=this;void 0!==this.currentDomain.id?(this.loading=!0,Object(u["a"])(this.currentDomain.uid,{user_id:this.currentDomain.uid}).then((function(e){e.data.repeat?t.$messageBox.alert(t.$t("dashboard.haveChecked"),{confirmButtonText:t.$t("common.ok")}):t.$messageBox.confirm(t.$t("dashboard.checkinSuccess"),{type:"success",confirmButtonText:t.$t("common.ok"),showCancelButton:!1}),t.loading=!1,Object(y["d"])("checkin",1,432e5),t.showCheckin=!1})).catch((function(e){t.$messageBox.confirm(t.$t("dashboard.checkinFail"),{type:"error",confirmButtonText:t.$t("common.ok"),showCancelButton:!1}),t.loading=!1,console.log(e)}))):this.$messageBox.confirm(this.$t("dashboard.tip"),{confirmButtonText:this.$t("common.ok"),cancelButtonText:this.$t("common.cancel")}).then((function(){t.$router.push("/user/domain")})).catch((function(){}))}}},k=O,w=a("2877"),_=Object(w["a"])(k,b,g,!1,null,"29f5e012",null),$=_.exports,j=a("b352"),x=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.domainDis"),data:t.data.domainData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.versionDis"),data:t.data.versionData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.terminalDis"),data:t.data.deviceData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.liveDis"),data:t.data.liveData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.netDis"),data:t.data.netTypeData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.ispDis"),data:t.data.ispData}})],1)],1)},B=[],C=a("d9d8"),T={name:"DistributionGlobal",components:{PieCard:C["a"]},props:{data:{type:Object,required:!0,default:{domainData:[],versionData:[],deviceData:[],liveData:[],netTypeData:[],ispData:[]}}}},P=T,R=(a("7a42"),Object(w["a"])(P,x,B,!1,null,"6ed40a62",null)),L=R.exports;function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?S(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var G=void 0,q={name:"liveDataGlobal",components:{NoBindTip:m["a"],LiveTime:j["a"],DistributionGlobal:L,Carousel:$},data:function(){return{checkResultLoading:!1,checkinLoading:!1,remainTrafficFlag:!0,statis:{whiteList:!1,type:{product_type:0,time:""},online:0,traffic_p2p:{num:0,unit:"KB"},traffic_http:{num:0,unit:"KB"},frequency_day:0,num_max:0,rebuffer_ratio:-1,flow:{remain:0,daily_remain:0,totalRemain:0,free:{num:0,unit:"KB"},utc:0},clock:null,traffic_p2p_day:0,traffic_http_day:0},disData:{domainData:[],versionData:[],deviceData:[],liveData:[],netTypeData:[],ispData:[]}}},computed:I({},Object(c["b"])(["currentDomain","device","language"])),created:function(){this.checkPayResult()},mounted:function(){var t=this.$route.params,e=t.domainInfo;if(e&&e.uid)this.loopGetData(e.uid,!0),this.getDisData(e.uid,!0);else{var a=Object(s["a"])();this.loopGetData(a,0),this.getDisData(a)}},beforeDestroy:function(){clearInterval(G)},methods:{getDisData:function(t,e){var a,n,i=this;a=e?function(e){return Object(l["e"])(t,0,e)}:function(e,a){return Object(r["a"])(t,0,e,a)},n=e?function(t){return h(t)}:function(t){return f(t)},n(t).then((function(t){var e=t.data;i.disData.domainData=e?Object(p["c"])(e):[]})),a("version").then((function(t){var e=t.data.data;i.disData.versionData=e?Object(p["c"])(e):[]})),a("device").then((function(t){var e=t.data.data;i.disData.deviceData=e?Object(p["c"])(e):[]})),a("live").then((function(t){var e=t.data.data;i.disData.liveData=e?Object(p["c"])(e):[]})),a("netType").then((function(t){var e=t.data.data;i.disData.netTypeData=e?Object(p["c"])(e):[]})),a("isp","en"===this.language?"en":"").then((function(t){var e=t.data.data;i.disData.ispData=e?Object(p["c"])(e):[]}))},formatTraffic:p["d"],getData:function(t,e){var a,n=this;a=e?function(){return Object(l["f"])(t,0)}:function(){return Object(r["c"])(t,0)},a().then((function(t){var e=t.data;n.statis.online=e.num_rt,n.statis.traffic_p2p_day=e.traffic_p2p_day,n.statis.traffic_http_day=e.traffic_http_day,n.statis.traffic_p2p=Object(p["d"])(e.traffic_p2p_day),n.statis.traffic_http=Object(p["d"])(e.traffic_http_day),n.statis.frequency_day=e.api_frequency_day,n.statis.num_max=e.num_max,n.statis.flow.remain=e.flow.remain,n.statis.flow.daily_remain=e.flow.daily_remain,n.statis.flow.totalRemain=e.flow.daily_remain+e.flow.remain,n.statis.flow.free=Object(p["d"])(e.flow.free),n.statis.flow.utc=e.flow.utc,n.statis.whiteList=e.whitelist,n.statis.type.product_type=e.flow.product_type,n.statis.type.time=e.flow.duetime,n.statis.clock=e.clock,0===e.flow.free&&0===e.flow.remain&&0===e.flow.daily_remain&&n.remainTrafficFlag&&void 0===n.$route.query.payment&&!e.whitelist&&(n.$messageBox.confirm(n.$t("dashboard.trafficUseOut"),{distinguishCancelAndClose:!0,confirmButtonText:n.$t("package.buyFlow"),cancelButtonText:n.$t("package.buyMonthly")}).then((function(){n.$router.push("/shopping/package")})).catch((function(t){"cancel"===t?n.$router.push("/shopping/monthly_package"):console.log("-")})),n.remainTrafficFlag=!1)})).catch((function(t){console.log(t)}))},loopGetData:function(t,e){var a=this;a.getData(t,e),G=setInterval((function(){a.getData(t,e)}),2e4)},showPaymentResult:function(t){var e=this;this.checkResultLoading=!1,t.is_payed?this.$messageBox.confirm(this.$t("package.paySuccess"),{type:"success",confirmButtonText:this.$t("common.ok"),showCancelButton:!1}).then((function(){e.$router.replace("/")})):t.processing?this.$messageBox.confirm(this.$t("package.payPending"),{type:"info",confirmButtonText:this.$t("common.ok"),showCancelButton:!1}):this.$messageBox.confirm(this.$t("package.payFail"),{type:"error",confirmButtonText:this.$t("common.ok"),showCancelButton:!1})},checkPayResult:function(){var t=this,e=this.$route.query;if(e.cancel)this.$messageBox.confirm(this.$t("package.paySuspended"),{type:"error",confirmButtonText:this.$t("common.ok"),showCancelButton:!1});else if(e.is_payed&&this.$messageBox.confirm(this.$t("package.paySuccess"),{type:"success",confirmButtonText:this.$t("common.ok"),showCancelButton:!1}),e.payment)switch(this.checkResultLoading=!0,e.payment){case"alipay":Object(u["b"])("alipay",e.out_trade_no).then((function(e){var a=e.data;t.showPaymentResult(a)})).catch((function(e){t.checkResultLoading=!1,console.log(e)}));break;case"paypal":Object(u["b"])("paypal",e.orderId).then((function(e){var a=e.data;t.showPaymentResult(a)})).catch((function(e){t.checkResultLoading=!1,console.log(e)}));break;case"crypto":Object(u["j"])({uid:parseInt(Object(s["a"])()),order_id:e.orderId,processing:!0}).then((function(){t.checkResultLoading=!1,t.$messageBox.confirm(t.$t("package.payPending"),{type:"info",confirmButtonText:t.$t("common.ok"),showCancelButton:!1})})).catch((function(e){t.checkResultLoading=!1,console.log(e)}));break;case"stripe":Object(u["b"])("stripe",e.orderId).then((function(e){var a=e.data;t.showPaymentResult(a)})).catch((function(e){t.checkResultLoading=!1,console.log(e)}));break;default:this.checkResultLoading=!1;break}}}},z=q,F=(a("e6cf"),Object(w["a"])(z,n,i,!1,null,null,null));e["default"]=F.exports},cee6:function(t,e,a){},e6cf:function(t,e,a){"use strict";a("b602")}}]);