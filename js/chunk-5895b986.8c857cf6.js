(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5895b986"],{"016d":function(t,e,a){"use strict";a("f6ce")},"14b9":function(t,e,a){var n=a("5ca1");n(n.P,"String",{repeat:a("9744")})},"66e6":function(t,e,a){"use strict";a.d(e,"g",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return i})),a.d(e,"j",(function(){return r})),a.d(e,"h",(function(){return s})),a.d(e,"a",(function(){return u})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return d})),a.d(e,"i",(function(){return f})),a.d(e,"d",(function(){return h}));var n=a("b775");function o(t){var e="goods/flow_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(n["a"])({url:e,method:"get"})}function c(t){var e="goods/monthly_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(n["a"])({url:e,method:"get"})}function i(t,e){return Object(n["a"])({url:"order/user_id/".concat(t),method:"post",data:e})}function r(t){return Object(n["a"])({url:"charge/crypto/trade",method:"post",data:t})}function s(t,e,a){var o=location.origin+location.pathname,c="mobile"===a?"&mobile=true":"";return Object(n["a"])({url:"charge/".concat(t,"/pay?origin=").concat(o,"&order_id=").concat(e).concat(c),method:"get"})}function u(t){return Object(n["a"])({url:"charge/alipay/query?order_id=".concat(t),method:"get"})}function l(t,e,a){return Object(n["a"])({url:"charge/paypal/query?order_id=".concat(t,"&payment_id=").concat(e,"&payer_id=").concat(a),method:"get"})}function d(t,e){return Object(n["a"])({url:"user/user_id/".concat(t,"/checkin"),method:"post",data:e})}function f(t){return Object(n["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"get"})}function h(t,e){return Object(n["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"post",data:e})}},"7a42":function(t,e,a){"use strict";a("cee6")},9744:function(t,e,a){"use strict";var n=a("4588"),o=a("be13");t.exports=function(t){var e=String(o(this)),a="",c=n(t);if(c<0||c==1/0)throw RangeError("Count can't be negative");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(a+=e);return a}},c9cc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-global-container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.checkResultLoading,expression:"checkResultLoading"}],attrs:{"element-loading-text":t.$t("package.checkResultLoadingTip")}},[e("el-alert",{attrs:{title:t.$t("domainTable.title"),description:t.$t("dashboard.descGlobal"),type:"info","show-icon":""}}),e("el-row",{staticStyle:{"text-align":"left"},attrs:{gutter:20}},[e("el-col",{attrs:{xs:20,sm:6}},[e("Carousel")],1)],1),e("LiveTime",{attrs:{statis:t.statis,global:!0}}),e("DistributionGlobal",{attrs:{data:t.disData}}),e("NoBindTip")],1)])},o=[],c=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),i=a("2f62"),r=a("5f87"),s=a("8595"),u=a("66e6"),l=a("b775");function d(t){return Object(l["a"])({url:"user/user_id/".concat(t,"/global/domains"),method:"get"})}var f=a("6be8"),h=a("9a09"),p=function(){var t=this,e=t._self._c;return e("div",[e("el-carousel",{attrs:{height:"30px","indicator-position":"none",interval:5e3,arrow:"never"}},[t.showCheckin?e("el-carousel-item",[e("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"font-size":"medium"},attrs:{size:"mini",type:"success"},on:{click:t.handleCheckin}},[t._v("\n        "+t._s(t.$t("dashboard.checkin"))+"\n      ")])],1):t._e(),e("el-carousel-item",[e("el-button",{staticStyle:{"font-size":"medium"},attrs:{size:"mini",type:"primary"},on:{click:t.handleInvite}},[t._v("\n        "+t._s(t.$t("dashboard.invite"))+"\n      ")])],1),""===t.profile.mobile?e("el-carousel-item",[e("el-button",{staticStyle:{"font-size":"medium"},attrs:{size:"mini"},on:{click:t.handleBonus}},[t._v("\n        "+t._s(t.$t("dashboard.bonus"))+"\n      ")])],1):t._e()],1)],1)},m=[],b=(a("14b9"),a("5d2d"));function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v={name:"Carousel",data:function(){return{loading:!1,showCheckin:!0}},mounted:function(){Object(b["a"])("checkin")&&(this.showCheckin=!1)},computed:y({},Object(i["b"])(["currentDomain","profile"])),methods:{handleBonus:function(){this.$router.push("/user/edit")},handleInvite:function(){this.$router.push("/user/commission")},handleCheckin:function(){var t=this;void 0!==this.currentDomain.id?(this.loading=!0,Object(u["b"])(this.currentDomain.uid,{user_id:this.currentDomain.uid}).then((function(e){e.data.repeat?t.$messageBox.alert(t.$t("dashboard.haveChecked"),{confirmButtonText:t.$t("common.ok")}):t.$messageBox.confirm(t.$t("dashboard.checkinSuccess"),{type:"success",confirmButtonText:t.$t("common.ok"),showCancelButton:!1}),t.loading=!1,Object(b["d"])("checkin",1,432e5),t.showCheckin=!1})).catch((function(e){t.$messageBox.confirm(t.$t("dashboard.checkinFail"),{type:"error",confirmButtonText:t.$t("common.ok"),showCancelButton:!1}),t.loading=!1,console.log(e)}))):this.$messageBox.confirm(this.$t("dashboard.tip"),{confirmButtonText:this.$t("common.ok"),cancelButtonText:this.$t("common.cancel")}).then((function(){t.$router.push("/user/domain")})).catch((function(){}))}}},O=v,_=a("2877"),k=Object(_["a"])(O,p,m,!1,null,"29f5e012",null),D=k.exports,j=a("b352"),w=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{gutter:20}},[e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.domainDis"),data:t.data.domainData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.versionDis"),data:t.data.versionData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.terminalDis"),data:t.data.deviceData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.liveDis"),data:t.data.liveData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.netDis"),data:t.data.netTypeData}})],1),e("el-col",{staticClass:"chart-col",attrs:{xs:24,sm:12,lg:8}},[e("pie-card",{attrs:{title:t.$t("dashboard.ispDis"),data:t.data.ispData}})],1)],1)},$=[],x=a("d9d8"),B={name:"DistributionGlobal",components:{PieCard:x["a"]},props:{data:{type:Object,required:!0,default:{domainData:[],versionData:[],deviceData:[],liveData:[],netTypeData:[],ispData:[]}}}},C=B,T=(a("7a42"),Object(_["a"])(C,w,$,!1,null,"6ed40a62",null)),P=T.exports;function L(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function R(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?L(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S=void 0,I={name:"liveDataGlobal",components:{NoBindTip:h["a"],LiveTime:j["a"],DistributionGlobal:P,Carousel:D},data:function(){return{checkResultLoading:!1,checkinLoading:!1,remainTrafficFlag:!0,statis:{whiteList:!1,type:{product_type:0,time:""},online:0,traffic_p2p:{num:0,unit:"KB"},traffic_http:{num:0,unit:"KB"},frequency_day:0,num_max:0,rebuffer_ratio:-1,flow:{remain:0,daily_remain:0,totalRemain:0,free:{num:0,unit:"KB"},utc:0},clock:null,traffic_p2p_day:0,traffic_http_day:0},disData:{domainData:[],versionData:[],deviceData:[],liveData:[],netTypeData:[],ispData:[]}}},computed:R({},Object(i["b"])(["currentDomain","device","language"])),created:function(){var t=Object(r["a"])();this.loopGetData(t,0),this.getDisData(t),this.checkPayResult()},beforeDestroy:function(){clearInterval(S)},methods:{getDisData:function(t){var e=this;d(t).then((function(t){var a=t.data;e.disData.domainData=a?Object(f["b"])(a):[]})),Object(s["a"])(t,0,"version").then((function(t){var a=t.data.data;e.disData.versionData=a?Object(f["b"])(a):[]})),Object(s["a"])(t,0,"device").then((function(t){var a=t.data.data;e.disData.deviceData=a?Object(f["b"])(a):[]})),Object(s["a"])(t,0,"live").then((function(t){var a=t.data.data;e.disData.liveData=a?Object(f["b"])(a):[]})),Object(s["a"])(t,0,"netType").then((function(t){var a=t.data.data;e.disData.netTypeData=a?Object(f["b"])(a):[]})),Object(s["a"])(t,0,"isp",void 0,"en"===this.language?"en":"").then((function(t){var a=t.data.data;e.disData.ispData=a?Object(f["b"])(a):[]}))},formatTraffic:f["c"],getData:function(t,e){var a=this;Object(s["c"])(t,e).then((function(t){var e=t.data;a.statis.online=e.num_rt,a.statis.traffic_p2p_day=e.traffic_p2p_day,a.statis.traffic_http_day=e.traffic_http_day,a.statis.traffic_p2p=Object(f["c"])(e.traffic_p2p_day),a.statis.traffic_http=Object(f["c"])(e.traffic_http_day),a.statis.frequency_day=e.api_frequency_day,a.statis.num_max=e.num_max,a.statis.flow.remain=e.flow.remain,a.statis.flow.daily_remain=e.flow.daily_remain,a.statis.flow.totalRemain=e.flow.daily_remain+e.flow.remain,a.statis.flow.free=Object(f["c"])(e.flow.free),a.statis.flow.utc=e.flow.utc,a.statis.whiteList=e.whitelist,a.statis.type.product_type=e.flow.product_type,a.statis.type.time=e.flow.duetime,a.statis.clock=e.clock,0===e.flow.free&&0===e.flow.remain&&0===e.flow.daily_remain&&a.remainTrafficFlag&&void 0===a.$route.query.payment&&!e.whitelist&&(a.$messageBox.confirm(a.$t("dashboard.trafficUseOut"),{distinguishCancelAndClose:!0,confirmButtonText:a.$t("package.buyFlow"),cancelButtonText:a.$t("package.buyMonthly")}).then((function(){a.$router.push("/shopping/package")})).catch((function(t){"cancel"===t?a.$router.push("/shopping/monthly_package"):console.log("-")})),a.remainTrafficFlag=!1)})).catch((function(t){console.log(t)}))},loopGetData:function(t,e){var a=this;a.getData(t,e),S=setInterval((function(){a.getData(t,e)}),2e4)},checkPayResult:function(){var t=this,e=this.$route.query;if(e.cancel)this.$messageBox.confirm(this.$t("package.paySuspended"),{type:"error",confirmButtonText:this.$t("common.ok"),showCancelButton:!1});else if(e.is_payed&&this.$messageBox.confirm(this.$t("package.paySuccess"),{type:"success",confirmButtonText:this.$t("common.ok"),showCancelButton:!1}),e.payment)switch(this.checkResultLoading=!0,e.payment){case"alipay":Object(u["a"])(e.out_trade_no).then((function(e){t.checkResultLoading=!1,e.data.is_payed?t.$messageBox.confirm(t.$t("package.paySuccess"),{type:"success",confirmButtonText:t.$t("common.ok"),showCancelButton:!1}).then((function(){t.$router.replace("/")})):t.$messageBox.confirm(t.$t("package.payFail"),{type:"error",confirmButtonText:t.$t("common.ok"),showCancelButton:!1})})).catch((function(e){t.checkResultLoading=!1,console.log(e)}));break;case"paypal":e.paymentId&&e.PayerID&&Object(u["c"])(e.orderId,e.paymentId,e.PayerID).then((function(e){e.data.is_payed?(t.checkResultLoading=!1,t.$messageBox.confirm(t.$t("package.paySuccess"),{type:"success",confirmButtonText:t.$t("common.ok"),showCancelButton:!1}).then((function(){t.$router.replace("/")}))):t.$messageBox.confirm(t.$t("package.payFail"),{type:"error",confirmButtonText:t.$t("common.ok"),showCancelButton:!1})})).catch((function(e){t.checkResultLoading=!1,console.log(e)}));break;case"crypto":Object(u["j"])({uid:parseInt(Object(r["a"])()),order_id:e.orderId,processing:!0}).then((function(){t.checkResultLoading=!1,t.$messageBox.confirm(t.$t("package.payPending"),{type:"info",confirmButtonText:t.$t("common.ok"),showCancelButton:!1})})).catch((function(e){t.checkResultLoading=!1,console.log(e)}));break;default:this.checkResultLoading=!1;break}}}},q=I,F=(a("016d"),Object(_["a"])(q,n,o,!1,null,null,null));e["default"]=F.exports},cee6:function(t,e,a){},f6ce:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5895b986.8c857cf6.js.map