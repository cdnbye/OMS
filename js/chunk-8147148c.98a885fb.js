(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8147148c"],{"5f1f":function(e,t,n){"use strict";n.r(t);n("7f7f");var a=function(){var e=this,t=e._self._c;return t("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[e._l(e.list,(function(n){return[t("el-col",{key:n.url,staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:4}},[t("div",{staticClass:"card-panel"},[t("div",{staticClass:"card-panel-description"},[t("div",{staticClass:"card-panel-name"},[e._v(e._s(n.name))]),t("span",{staticClass:"card-panel-num"},[e._v(e._s(n.url))]),n.failed?[t("div",{staticClass:"card-panel-text",staticStyle:{color:"red"}},[e._v("failed")])]:[t("div",{staticClass:"card-panel-text",style:{color:0===n.workers?"red":""}},[e._v("workers: "+e._s(n.workers))]),t("div",{staticClass:"card-panel-text"},[e._v("full: "+e._s(n.full))]),t("div",{staticClass:"card-panel-text",style:{color:0===n.bandwidth?"red":""}},[e._v("bandwidth: "+e._s(n.bandwidth))]),t("div",{staticClass:"card-panel-text"},[e._v("currentUplink: "+e._s(n.currentUplink))]),t("div",{staticClass:"card-panel-text"},[e._v("version: "+e._s(n.version))]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.gotoStats(n)}}},[e._v("Stats")])]],2)])])]}))],2)},l=[],r=(n("ac6a"),n("bc3a")),s=n.n(r),i=null,d={name:"Seeder",data:function(){return{list:[{url:"http://43.129.228.44:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"hk",accessToken:"&dfgd$15~",version:""},{url:"http://106.52.254.88:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"gz",accessToken:"&dfgd$15~",version:""},{url:"http://62.210.122.93:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"fr",accessToken:"&dfgd$15~",version:""},{url:"http://42.193.53.102:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"cd",accessToken:"&dfgd$15~",version:""},{url:"http://49.233.52.182:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"pk",accessToken:"&dfgd$15~",version:""},{url:"http://208.87.242.157:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"op-us-1",version:""},{url:"http://91.193.182.168:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ru-1",version:""},{url:"http://45.95.201.27:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ru-2",version:""},{url:"http://195.20.17.176:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"il-1",version:""},{url:"http://184.174.96.109:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-1",version:""},{url:"http://184.174.96.147:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-2",version:""},{url:"http://180.131.145.88:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-3",version:""},{url:"http://184.174.96.108:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-4",version:""},{url:"http://184.174.96.142:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-5",version:""},{url:"http://184.174.96.141:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-6",version:""},{url:"http://83.147.18.210:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"uk-1",version:""},{url:"http://146.103.40.11:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ge-1",version:""}]}},created:function(){this.loopGetData()},beforeDestroy:function(){clearTimeout(i)},methods:{gotoStats:function(e){var t=e.url,n=e.accessToken,a=e.name;this.$router.push({name:"AdminSeederStats",query:{url:t,accessToken:n,name:a}})},fetchData:function(){this.list.forEach((function(e){var t="".concat(e.url,"/ping");s.a.post(t,{},{headers:{"X-Access-Token":e.accessToken||void 0}}).then((function(t){var n=t.data;0===n.ret?(e.failed=!1,e.bandwidth=n.bandwidth,e.currentUplink=Math.round(n.currentUplink),e.workers=n.workers,e.full=n.full||!1,e.version=n.version):e.failed=!0})).catch((function(t){console.error(t),e.failed=!0}))}))},loopGetData:function(){var e=this;this.fetchData(),i=setTimeout((function(){e.loopGetData()}),15e3)}}},u=d,o=(n("cd4f"),n("2877")),c=Object(o["a"])(u,a,l,!1,null,"78f46b86",null);t["default"]=c.exports},"61b1":function(e,t,n){},cd4f:function(e,t,n){"use strict";n("61b1")}}]);