(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0923c8a3"],{"225e":function(e,l,t){"use strict";t("58c0")},"58c0":function(e,l,t){},"5f1f":function(e,l,t){"use strict";t.r(l);t("7f7f");var n=function(){var e=this,l=e._self._c;return l("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[e._l(e.list,(function(t){return[l("el-col",{key:t.url,staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:4}},[l("div",{staticClass:"card-panel"},[l("div",{staticClass:"card-panel-description"},[l("div",{staticClass:"card-panel-name"},[e._v(e._s(t.name))]),l("span",{staticClass:"card-panel-num"},[e._v(e._s(t.url))]),t.failed?[l("div",{staticClass:"card-panel-text",staticStyle:{color:"red"}},[e._v("failed")])]:[l("div",{staticClass:"card-panel-text",style:{color:0===t.workers?"red":""}},[e._v("workers: "+e._s(t.workers))]),l("div",{staticClass:"card-panel-text"},[e._v("full: "+e._s(t.full))]),l("div",{staticClass:"card-panel-text",style:{color:0===t.bandwidth?"red":""}},[e._v("bandwidth: "+e._s(t.bandwidth))]),l("div",{staticClass:"card-panel-text"},[e._v("currentUplink: "+e._s(t.currentUplink))]),l("div",{staticClass:"card-panel-text"},[e._v("version: "+e._s(t.version))]),l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){return e.gotoStats(t)}}},[e._v("Stats")])]],2)])])]}))],2)},a=[],r=(t("ac6a"),t("bc3a")),i=t.n(r),s=null,d={name:"Seeder",data:function(){return{list:[{url:"http://43.129.228.44:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"hk",accessToken:"&dfgd$15~",version:""},{url:"http://106.52.254.88:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"gz",accessToken:"&dfgd$15~",version:""},{url:"http://1.117.87.171:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"sh",accessToken:"&dfgd$15~",version:""},{url:"http://62.210.122.93:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"fr",accessToken:"&dfgd$15~",version:""},{url:"http://42.193.53.102:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"cd",accessToken:"&dfgd$15~",version:""},{url:"http://49.233.52.182:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"pk",accessToken:"&dfgd$15~",version:""},{url:"http://51.15.8.17:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"op-nl-1",accessToken:"&dfgd$15~",version:""},{url:"http://208.87.242.157:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"op-us-1",version:""},{url:"http://91.193.182.168:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ru-1",version:""},{url:"http://38.180.105.134:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"tr-1",version:""},{url:"http://195.20.17.176:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"il-1",version:""},{url:"http://135.148.67.87:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-1",version:""},{url:"http://51.81.42.244:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-2",version:""},{url:"http://135.148.144.167:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-3",version:""},{url:"http://15.204.49.174:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-4",version:""},{url:"http://51.81.42.243:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-5",version:""},{url:"http://135.148.144.173:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"us-6",version:""},{url:"http://167.114.90.238:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ca-1",version:""},{url:"http://167.114.90.237:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ca-2",version:""},{url:"http://198.244.144.230:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"uk-1",version:""},{url:"http://51.68.169.109:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ge-1",version:""},{url:"http://50.7.60.70:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"sg-1",version:""},{url:"http://38.180.9.40:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ih-sg-1",version:""},{url:"http://50.7.59.115:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"hk-1",version:""},{url:"http://38.180.37.144:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"kz-1",version:""},{url:"http://78.111.102.162:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"br-1",version:""},{url:"http://176.97.69.27:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ih-au-1",version:""},{url:"http://38.180.95.224:8080",failed:!1,bandwidth:0,uplink:0,workers:0,full:!1,name:"ih-hk-1",version:""}]}},created:function(){this.loopGetData()},beforeDestroy:function(){clearTimeout(s)},methods:{gotoStats:function(e){var l=e.url,t=e.accessToken,n=e.name;this.$router.push({name:"AdminSeederStats",query:{url:l,accessToken:t,name:n}})},fetchData:function(){this.list.forEach((function(e){var l="".concat(e.url,"/ping");i.a.post(l,{},{headers:{"X-Access-Token":e.accessToken||void 0}}).then((function(l){var t=l.data;0===t.ret?(e.failed=!1,e.bandwidth=t.bandwidth,e.currentUplink=Math.round(t.currentUplink),e.workers=t.workers,e.full=t.full||!1,e.version=t.version):e.failed=!0})).catch((function(l){console.error(l),e.failed=!0}))}))},loopGetData:function(){var e=this;this.fetchData(),s=setTimeout((function(){e.loopGetData()}),15e3)}}},u=d,o=(t("225e"),t("2877")),c=Object(o["a"])(u,n,a,!1,null,"1182982b",null);l["default"]=c.exports}}]);