(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ccbb28e"],{"5f1f":function(e,t,n){"use strict";n.r(t);n("7f7f");var a=function(){var e=this,t=e._self._c;return t("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[e._l(e.list,(function(n){return[t("el-col",{key:n.url,staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:4}},[t("div",{staticClass:"card-panel"},[t("div",{staticClass:"card-panel-description"},[t("div",{staticClass:"card-panel-name"},[e._v(e._s(n.name))]),t("span",{staticClass:"card-panel-num"},[e._v(e._s(n.url))]),n.failed?[t("div",{staticClass:"card-panel-text",staticStyle:{color:"red"}},[e._v("failed")])]:[t("div",{staticClass:"card-panel-text",style:{color:0===n.workers?"red":""}},[e._v("workers: "+e._s(n.workers))]),t("div",{staticClass:"card-panel-text"},[e._v("full: "+e._s(n.full))]),t("div",{staticClass:"card-panel-text",style:{color:0===n.bandwidth?"red":""}},[e._v("bandwidth: "+e._s(n.bandwidth))]),t("div",{staticClass:"card-panel-text"},[e._v("currentUplink: "+e._s(n.currentUplink))]),t("div",{staticClass:"card-panel-text"},[e._v("version: "+e._s(n.version))]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.gotoStats(n)}}},[e._v("Stats")])]],2)])])]}))],2)},l=[],r=(n("ac6a"),n("bc3a")),i=n.n(r),s=null,d={name:"Seeder",data:function(){return{list:[{url:"http://43.129.228.44:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"hk",accessToken:"&dfgd$15~",version:""},{url:"http://106.52.254.88:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"gz",accessToken:"&dfgd$15~",version:""},{url:"http://1.117.87.171:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"sh",accessToken:"&dfgd$15~",version:""},{url:"http://62.210.122.93:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"fr",accessToken:"&dfgd$15~",version:""},{url:"http://42.193.53.102:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"cd",accessToken:"&dfgd$15~",version:""},{url:"http://49.233.52.182:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"pk",accessToken:"&dfgd$15~",version:""},{url:"http://43.130.232.206:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"jp",accessToken:"&dfgd5~",version:""},{url:"http://51.15.8.17:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"op-nl-1",version:""},{url:"http://185.192.124.236:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"op-br-1",version:""},{url:"http://63.143.58.48:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"op-us-1",version:""},{url:"http://91.193.182.168:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ru-1",version:""},{url:"http://135.148.67.87:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-1",version:""},{url:"http://51.81.42.244:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-2",version:""},{url:"http://135.148.144.167:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-3",version:""},{url:"http://15.204.49.174:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-4",version:""},{url:"http://51.81.42.243:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-5",version:""},{url:"http://135.148.144.173:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-6",version:""},{url:"http://167.114.90.238:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ca-1",version:""},{url:"http://167.114.90.237:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ca-2",version:""},{url:"http://198.244.144.230:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"uk-1",version:""},{url:"http://51.68.169.109:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ge-1",version:""},{url:"http://50.7.60.52:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"sg-1",version:""}]}},created:function(){this.loopGetData()},beforeDestroy:function(){clearTimeout(s)},methods:{gotoStats:function(e){var t=e.url,n=e.accessToken,a=e.name;this.$router.push({name:"AdminSeederStats",query:{url:t,accessToken:n,name:a}})},fetchData:function(){this.list.forEach((function(e){var t="".concat(e.url,"/ping");i.a.post(t,{},{headers:{"X-Access-Token":e.accessToken||void 0}}).then((function(t){var n=t.data;0===n.ret?(e.failed=!1,e.bandwidth=n.bandwidth,e.currentUplink=Math.round(n.currentUplink),e.workers=n.workers,e.full=n.full||!1,e.version=n.version):e.failed=!0})).catch((function(t){console.error(t),e.failed=!0}))}))},loopGetData:function(){var e=this;this.fetchData(),s=setTimeout((function(){e.loopGetData()}),15e3)}}},u=d,o=(n("be93"),n("2877")),c=Object(o["a"])(u,a,l,!1,null,"0a98ae06",null);t["default"]=c.exports},be93:function(e,t,n){"use strict";n("f702")},f702:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1ccbb28e.04303dc2.js.map