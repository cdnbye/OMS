(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b43a9ec2"],{"284a":function(t,a,n){"use strict";n.d(a,"c",(function(){return s})),n.d(a,"d",(function(){return c})),n.d(a,"b",(function(){return r})),n.d(a,"a",(function(){return o})),n.d(a,"e",(function(){return i}));var e=n("b775");function s(){return Object(e["a"])({url:"global/livetime",method:"get"})}function c(){return Object(e["a"])({url:"global/overall",method:"get"})}function r(t,a){var n="global/num?type=".concat(t);return a&&a.country&&(n="".concat(n,"&country=").concat(a.country)),Object(e["a"])({url:n,method:"get"})}function o(t,a){var n="global/channel?page=".concat(t,"&page_size=").concat(a);return Object(e["a"])({url:n,method:"get"})}function i(t){var a="global/channel/split";return Object(e["a"])({url:a,method:"post",data:t})}},"79aaa":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"dashboard-overall-container"},[a("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.max_online_week,desc:"过去七天最高在线人数"}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.bandwidth_p2p_week.num,desc:"过去七天P2P带宽峰值(".concat(t.statis.bandwidth_p2p_week.unit,")")}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t._f("positive")(t.statis.p2p_rate_week),decimals:2,desc:"过去七天P2P分享率(%)"}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.frequency_week,desc:"过去七天服务人数"}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.max_online_month,desc:"近1月最高在线人数"}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.traffic_p2p_month.num,decimals:2,desc:"近1月P2P流量(".concat(t.statis.traffic_p2p_month.unit,")")}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.bandwidth_p2p_month.num,decimals:2,desc:"近1月P2P带宽峰值(".concat(t.statis.bandwidth_p2p_month.unit,")")}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.p2p_rate_month,decimals:2,desc:"近1月P2P分享率(%)"}})],1),a("el-col",{staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[a("card",{attrs:{num:t.statis.frequency_month,desc:"近1月服务人数"}})],1)],1)],1)},s=[],c=(n("c5f6"),n("284a")),r=n("a877"),o=n("6be8"),i=n("12f9"),l={name:"OverallData",components:{Card:i["a"]},data:function(){return{statis:{max_online_week:0,max_online_month:0,p2p_rate_week:0,p2p_rate_month:0,bandwidth_p2p_week:{num:0,unit:"kbps"},bandwidth_p2p_month:{num:0,unit:"kbps"},traffic_p2p_month:{num:0,unit:"KB"},frequency_week:0,frequency_month:0}}},created:function(){this.getData()},destroyed:function(){},methods:{getData:function(){var t=this;Object(c["d"])().then((function(a){var n=a.data;t.statis.max_online_week=n.max_num_7,t.statis.max_online_month=n.max_num_month,t.statis.bandwidth_p2p_week=Object(o["a"])(n.bwp_p2p_7),t.statis.bandwidth_p2p_month=Object(o["a"])(n.bwp_p2p_month),t.statis.p2p_rate_week=Number((100*n.p2p_rate_7).toFixed(2)),t.statis.p2p_rate_month=Number((100*n.p2p_rate_month).toFixed(2)),t.statis.traffic_p2p_month=Object(o["c"])(n.traffic_p2p_30),t.statis.frequency_week=n.api_frequency_7,t.statis.frequency_month=n.api_frequency_30,t.$emit("numChange",n.num_rt)})).catch((function(t){console.log(t)})),Object(r["k"])().then((function(a){t.statis.hostNum=a.data.num}))}}},u=l,d=(n("a70d"),n("2877")),_=Object(d["a"])(u,e,s,!1,null,"67ce85c6",null);a["default"]=_.exports},a70d:function(t,a,n){"use strict";n("ee1d")},ee1d:function(t,a,n){}}]);
//# sourceMappingURL=chunk-b43a9ec2.7d81fefb.js.map