(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e3829e2"],{"284a":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return u}));var r=n("b775");function o(){return Object(r["a"])({url:"global/livetime",method:"get"})}function a(){return Object(r["a"])({url:"global/overall",method:"get"})}function c(t,e){var n="global/num?type=".concat(t);return e&&e.country&&(n="".concat(n,"&country=").concat(e.country)),Object(r["a"])({url:n,method:"get"})}function i(t,e){var n="global/channel?page=".concat(t,"&page_size=").concat(e);return Object(r["a"])({url:n,method:"get"})}function u(t){var e="global/channel/split";return Object(r["a"])({url:e,method:"post",data:t})}},"6e84":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e(t.currentRole,{tag:"component"})},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("bd86")),c=n("2f62"),i=function(){var t=this,e=t._self._c;return e("china-map",{attrs:{chartData:t.cityData,provinceData:t.provinceData,total:t.total}})},u=[],s=n("d9cd"),l=n("284a"),p={name:"ChinaDis",data:function(){return{cityData:[],provinceData:[],total:0}},components:{ChinaMap:s["a"]},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(l["b"])("city",{country:"china"}).then((function(e){var n=e.data;n&&(t.cityData=n.data)})).catch((function(t){console.log(t)})),Object(l["b"])("province",{country:"china"}).then((function(e){var n=e.data;n&&(t.provinceData=n.data,t.total=n.total)})).catch((function(t){console.log(t)}))}}},f=p,b=n("2877"),h=Object(b["a"])(f,i,u,!1,null,null,null),d=h.exports,O=function(){var t=this,e=t._self._c;return e("div",[e("china-map",{attrs:{chartData:t.cityData,provinceData:t.provinceData,total:t.total}}),e("NoBindTip")],1)},m=[],v=n("9a09"),j=n("8595");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={name:"ChinaDis",data:function(){return{cityData:[],provinceData:[],total:0}},components:{ChinaMap:s["a"],NoBindTip:v["a"]},computed:D({},Object(c["b"])(["currentDomain"])),watch:{currentDomain:function(){this.fetchData()}},mounted:function(){this.$store.dispatch("toggleSwitchDomain",!0),this.currentDomain.id&&this.fetchData()},beforeDestroy:function(){this.$store.dispatch("toggleSwitchDomain",!1)},methods:{fetchData:function(){var t=this;Object(j["b"])(this.currentDomain.uid,this.currentDomain.id,"city","china").then((function(e){var n=e.data;n&&(t.cityData=n.data.filter((function(t){return t.value>0})))})).catch((function(t){console.log(t)})),Object(j["b"])(this.currentDomain.uid,this.currentDomain.id,"province","china").then((function(e){var n=e.data;n&&(t.provinceData=n.data,t.total=n.total)})).catch((function(t){console.log(t)}))}}},w=g,P=Object(b["a"])(w,O,m,!1,null,null,null),_=P.exports;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S={name:"China",components:{adminChina:d,userChina:_},data:function(){return{currentRole:"adminChina"}},computed:k({},Object(c["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="userChina")}},V=S,$=Object(b["a"])(V,r,o,!1,null,null,null);e["default"]=$.exports},"9a09":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{visible:t.tipVisible,width:"mobile"===t.device?"80%":"30%"},on:{"update:visible":function(e){t.tipVisible=e}}},[e("span",[t._v(t._s(t.$t("dashboard.tip")))]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.tipVisible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleGoApp}},[t._v(t._s(t.$t("dashboard.goApp")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.handlePush}},[t._v(t._s(t.$t("dashboard.goBind")))])],1)])},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),c=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={name:"NoBindTip",data:function(){return{tipVisible:!1}},watch:{currentDomain:function(t){void 0!==t.id&&(this.tipVisible=!1)}},mounted:function(){var t=this;setTimeout((function(){t.roles.indexOf("user")>-1&&void 0===t.currentDomain.id&&(t.tipVisible=!0)}),5e3)},computed:u({},Object(c["b"])(["device","currentDomain","roles"])),methods:{handlePush:function(){this.tipVisible=!1,this.$router.push("/user/domain")},handleGoApp:function(){this.tipVisible=!1,this.$router.push("/app/app")}}},l=s,p=n("2877"),f=Object(p["a"])(l,r,o,!1,null,null,null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-0e3829e2.48118af6.js.map