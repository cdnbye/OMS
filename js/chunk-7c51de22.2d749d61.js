(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c51de22"],{"876d":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var a=n("b775");function r(e,t){return Object(a["a"])({url:"seeder/user_id/".concat(e),method:"post",data:t})}function o(e){return Object(a["a"])({url:"seeder/user_id/".concat(e),method:"get"})}function i(e,t){return Object(a["a"])({url:"seeder/user_id/".concat(e,"/seeder_id/").concat(t),method:"delete"})}function l(e,t,n){return Object(a["a"])({url:"seeder/user_id/".concat(e,"/seeder_id/").concat(t),method:"put",data:n})}function s(e,t,n){return Object(a["a"])({url:"seeder/user_id/".concat(e,"/seeder_id/").concat(t),method:"post",data:n})}function c(e,t){return Object(a["a"])({url:"seeder/user_id/".concat(e,"/copy"),method:"post",data:t})}},"8b4c":function(e,t,n){(function(t){var n=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,a=/^(?=([^\/?#]*))\1([^]*)$/,r=/(?:\/|^)\.(?=\/)/g,o=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,i={buildAbsoluteURL:function(e,t,n){if(n=n||{},e=e.trim(),t=t.trim(),!t){if(!n.alwaysNormalize)return e;var r=i.parseURL(e);if(!r)throw new Error("Error trying to parse base URL.");return r.path=i.normalizePath(r.path),i.buildURLFromParts(r)}var o=i.parseURL(t);if(!o)throw new Error("Error trying to parse relative URL.");if(o.scheme)return n.alwaysNormalize?(o.path=i.normalizePath(o.path),i.buildURLFromParts(o)):t;var l=i.parseURL(e);if(!l)throw new Error("Error trying to parse base URL.");if(!l.netLoc&&l.path&&"/"!==l.path[0]){var s=a.exec(l.path);l.netLoc=s[1],l.path=s[2]}l.netLoc&&!l.path&&(l.path="/");var c={scheme:l.scheme,netLoc:o.netLoc,path:null,params:o.params,query:o.query,fragment:o.fragment};if(!o.netLoc&&(c.netLoc=l.netLoc,"/"!==o.path[0]))if(o.path){var d=l.path,u=d.substring(0,d.lastIndexOf("/")+1)+o.path;c.path=i.normalizePath(u)}else c.path=l.path,o.params||(c.params=l.params,o.query||(c.query=l.query));return null===c.path&&(c.path=n.alwaysNormalize?i.normalizePath(o.path):o.path),i.buildURLFromParts(c)},parseURL:function(e){var t=n.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){e=e.split("").reverse().join("").replace(r,"");while(e.length!==(e=e.replace(o,"")).length);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}};e.exports=i})()},"9ec0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:e.$t("seeder.desc")}}),t("el-row",{staticStyle:{"margin-bottom":"10px",width:"100%"},attrs:{type:"flex",gutter:5}},[t("el-col",{attrs:{span:3}},[t("el-button",{staticStyle:{float:"left"},attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v(e._s(e.$t("seeder.create")))])],1),t("el-col",{attrs:{span:24}},["mobile"!==e.device?t("CopyChannelId",{attrs:{token:"fsdgdsgsd"}}):e._e()],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"",data:e.tableData}},[t("el-table-column",{attrs:{align:"center",prop:"url",label:e.$t("seeder.addr"),"min-width":"100"}}),t("el-table-column",{attrs:{align:"center",label:e.$t("p2pConfig.status"),width:"100"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("span",{style:n.row.running?"color: green":"color: red"},[e._v("\n          "+e._s(n.row.running?e.$t("seeder.running"):e.$t("seeder.stopped"))+"\n        ")])]}}])}),t("el-table-column",{attrs:{label:e.$t("p2pConfig.signalManage.switch"),align:"center","min-width":"30",width:"100"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-switch",{attrs:{value:!n.row.disabled,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(t){return e.disabledChange(n.row,t)}}})]}}])}),t("el-table-column",{attrs:{label:e.$t("seeder.auto"),align:"center","min-width":"30",width:"100"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-switch",{attrs:{value:n.row.auto,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(t){return e.autoChange(n.row,t)}}})]}}])}),t("el-table-column",{attrs:{align:"center",prop:"bandwidth",label:e.$t("seeder.bandwidth"),"min-width":"30",width:"150"}}),t("el-table-column",{attrs:{align:"center",prop:"remarks",label:e.$t("seeder.remarks"),"min-width":"30",width:"150"}}),t("el-table-column",{attrs:{label:e.$t("domainTable.operation"),align:"center","min-width":"50",width:"350"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{size:"small",disabled:n.row.disabled,loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handlePing(n.row)}}},[e._v("Ping")]),t("el-button",{attrs:{size:"small",disabled:n.row.disabled||!n.row.running,loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.seedingClick(n.row)}}},[e._v(e._s(e.$t("seeder.seed")))]),t("el-button",{attrs:{size:"small",disabled:n.row.disabled||!n.row.running,loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleStats(n.row)}}},[e._v(e._s(e.$t("app.watch")))]),t("el-popover",{ref:"popover-"+n.row.id,attrs:{placement:"top",width:"200",trigger:"manual"}},[t("p",[e._v(e._s(e.$t("common.sureDelete")))]),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return e.pClose(n.row.id)}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{size:"small",type:"primary",loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleDelete(n.row)}}},[e._v(e._s(e.$t("common.ok")))])],1),t("el-button",{style:"mobile"===e.device?"":"margin-left: 10px",attrs:{slot:"reference",size:"small",type:"danger"},on:{click:function(t){return e.pShow(n.row.id)}},slot:"reference"},[e._v(e._s(e.$t("common.delete")))])],1)]}}])})],1),t("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"mobile"===e.device?"85%":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("p",[e._v(e._s(e.$t("seeder.createTitle")))])]),t("el-form",{attrs:{model:e.form,"label-position":"left","label-width":"120px"}},[t("el-form-item",{attrs:{prop:"url",label:"Server URL","label-width":"100px",required:""}},[t("el-input",{attrs:{placeholder:"http://ip:port"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),t("el-form-item",{attrs:{prop:"bandwidth",label:"Bandwidth","label-width":"100px"}},[t("el-input",{attrs:{type:"number"},model:{value:e.form.bandwidth,callback:function(t){e.$set(e.form,"bandwidth",t)},expression:"form.bandwidth"}},[t("template",{slot:"append"},[e._v("Mbps")])],2)],1),t("el-form-item",{attrs:{prop:"accessToken",label:"AccessToken","label-width":"100px"}},[t("el-input",{attrs:{placeholder:"Optional"},model:{value:e.form.accessToken,callback:function(t){e.$set(e.form,"accessToken",t)},expression:"form.accessToken"}})],1),t("el-form-item",{attrs:{prop:"remarks",label:"Remarks","label-width":"100px"}},[t("el-input",{attrs:{placeholder:"Optional"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleCreateItem}},[e._v(e._s(e.$t("common.ok")))])],1)],1),t("el-dialog",{attrs:{visible:e.dialogSeedVisible,width:"mobile"===e.device?"85%":""},on:{"update:visible":function(t){e.dialogSeedVisible=t}}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("p",[e._v(e._s(e.$t("seeder.seedTitle")))])]),t("el-form",{attrs:{model:e.seedForm,"label-position":"left","label-width":"120px"}},[t("el-form-item",{attrs:{prop:"channelId",label:"Channel ID","label-width":"100px",required:""}},[t("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"base64"},model:{value:e.seedForm.channelId,callback:function(t){e.$set(e.seedForm,"channelId",t)},expression:"seedForm.channelId"}})],1),t("el-form-item",{attrs:{prop:"live",label:"Type","label-width":"100px"}},[t("el-select",{staticStyle:{width:"150px",float:"left"},model:{value:e.seedForm.live,callback:function(t){e.$set(e.seedForm,"live",t)},expression:"seedForm.live"}},[t("el-option",{key:"live",attrs:{label:"Live",value:!0}}),t("el-option",{key:"vod",attrs:{label:"VOD",value:!1}})],1)],1),t("el-form-item",{attrs:{prop:"priority",label:"Priority","label-width":"100px"}},[t("el-input",{staticStyle:{width:"150px",float:"left"},attrs:{type:"number"},model:{value:e.seedForm.priority,callback:function(t){e.$set(e.seedForm,"priority",t)},expression:"seedForm.priority"}})],1),t("el-form-item",{attrs:{prop:"keepAlive","label-width":"100px"}},[t("template",{slot:"label"},[t("span",[e._v("KeepAlive")]),t("PointTip",{staticStyle:{"margin-left":"4px"},attrs:{content:e.$t("seeder.keepAliveTip")}})],1),t("el-select",{staticStyle:{width:"150px",float:"left"},model:{value:e.seedForm.keepAlive,callback:function(t){e.$set(e.seedForm,"keepAlive",t)},expression:"seedForm.keepAlive"}},[t("el-option",{key:"false",attrs:{label:"false",value:!1}}),t("el-option",{key:"true",attrs:{label:"true",value:!0}})],1)],2)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogSeedVisible=!1}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSeeding}},[e._v(e._s(e.$t("common.ok")))])],1)],1)],1)},r=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("c5f6"),n("28a5"),n("bd86")),i=n("876d"),l=n("2f62"),s=n("ed08"),c=n("5f87"),d=function(){var e=this,t=e._self._c;return t("div",[t("el-input",{attrs:{placeholder:e.$t("seeder.inputChannelId")},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},[t("template",{slot:"prepend"},[t("el-select",{staticStyle:{width:"90px"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[t("el-option",{key:"hls",attrs:{label:"HLS",value:"m3u8"}}),t("el-option",{key:"dash",attrs:{label:"DASH",value:"mpd"}})],1)],1),t("template",{slot:"append"},[t("el-tooltip",{attrs:{placement:"top"}},[t("div",{staticStyle:{display:"inline-block"},attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.$t("seeder.copy")))]),t("el-button",{staticStyle:{padding:"6px 10px"},attrs:{type:"info",plain:""},on:{click:function(t){return e.handleCopy(t)}}},[t("img",{attrs:{src:e.copyImg,alt:"","min-width":"24",height:"24"}})])],1)],1)],2)],1)},u=[],p=(n("aef6"),n("f559"),n("f71e")),f=n("78a3"),m=n.n(f),h=n("5d2d"),b=n("8b4c"),v=n.n(b),g={name:"CopyChannelId",data:function(){return{type:"m3u8",copyImg:m.a,token:"",url:""}},mounted:function(){var e=Object(h["a"])("profile");e&&(this.token=e.token)},methods:{handleCopy:function(){var e=this,t=[];this.url.split(" ").filter((function(e){return!!e})).forEach((function(n){var a;if(n=n.split("?")[0],n.startsWith("http")&&(n.endsWith(".m3u8")||n.endsWith(".mpd"))){var r=v.a.parseURL(n);a=r.netLoc.substr(2)+r.path.substring(0,r.path.lastIndexOf("."))}else a="".concat(e.token,"-").concat(n);a="".concat(a,"|[8]"),"mpd"===e.type&&(a="".concat(a,"d")),t.push(window.btoa(encodeURIComponent(a)))})),Object(p["a"])(t.join("\n"),event)}}},y=g,w=n("2877"),k=Object(w["a"])(y,d,u,!1,null,"6f41f0ce",null),O=k.exports,_=n("9f52");function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={name:"superPeer",components:{CopyChannelId:O,PointTip:_["a"]},data:function(){return{loading:!1,dialogFormVisible:!1,dialogSeedVisible:!1,form:{},seedForm:{},tableData:[]}},created:function(){this.resetForm(),this.resetSeedForm(),this.fetchTableData()},methods:{handleStats:function(e){this.$router.push({name:"SeederStats",query:{sid:e.id,remarks:e.remarks}})},seedingClick:function(e){this.dialogSeedVisible=!0,this.seedForm.id=e.id},handleSeeding:function(){var e=this;this.formatSeedForm(),this.seedForm.channelId&&(this.processChannelId(),this.loading=!0,this.action(this.seedForm.id,F({action:"seed"},this.seedForm)).then((function(){e.resetSeedForm(),e.dialogSeedVisible=!1})).finally((function(){e.loading=!1})))},processChannelId:function(){var e=this.seedForm.channelId.split("\n").filter((function(e){return!!e}));e.length<=1||(delete this.seedForm.channelId,this.seedForm.channelIds=e)},handlePing:function(e){var t=this;this.loading=!0,this.action(e.id,{action:"ping"}).then((function(){})).finally((function(){t.loading=!1,t.fetchTableData()}))},handleDelete:function(e){var t=this;this.loading=!0,Object(i["d"])(Object(c["a"])(),e.id).then((function(){t.$notify({title:t.$t("common.success"),type:"success"}),t.fetchTableData()})).finally((function(){t.loading=!1,t.pClose(e.id)}))},disabledChange:function(e,t){e.disabled=!t,this.update(e)},autoChange:function(e,t){e.auto=t,this.update(e)},action:function(e,t){var n=this;return new Promise((function(a,r){Object(i["a"])(Object(c["a"])(),e,t).then((function(e){n.$notify({title:n.$t("common.success"),type:"success"}),a(e)})).catch((function(e){r(e)}))}))},update:function(e){var t=this;this.loading=!0,Object(i["f"])(Object(c["a"])(),e.id,e).then((function(){t.$notify({title:t.$t("common.success"),type:"success"}),t.fetchTableData()})).finally((function(){t.loading=!1}))},fetchTableData:function(){var e=this;this.loading=!0,Object(i["e"])(Object(c["a"])()).then((function(t){t.data&&(e.tableData=t.data)})).catch((function(e){console.error(e)})).finally((function(){e.loading=!1}))},handleCreateItem:function(){var e=this;this.formatForm(),this.form.url&&(this.loading=!0,Object(i["c"])(Object(c["a"])(),this.form).then((function(t){0===t.ret&&(e.dialogFormVisible=!1,e.$notify({title:e.$t("common.success"),message:e.$t("app.createItemSuccess"),type:"success"}),e.resetForm(),e.fetchTableData())})).catch((function(e){console.error(e)})).finally((function(){e.loading=!1})))},pShow:function(e){this.$refs["popover-"+e].doShow()},pClose:function(e){this.$refs["popover-"+e].doClose()},formatForm:function(){var e=this.form;e.url=Object(s["e"])(e.url),e.bandwidth=Number(e.bandwidth),e.accessToken=Object(s["e"])(e.accessToken)},formatSeedForm:function(){var e=this.seedForm;e.channelId=Object(s["e"])(e.channelId),e.priority=Number(e.priority)},resetForm:function(){this.form={url:"",bandwidth:1e3,accessToken:"",remarks:""}},resetSeedForm:function(){this.seedForm={channelId:"",live:!0,priority:100,keepAlive:!1}}},computed:F({},Object(l["b"])(["device"]))},x=S,j=Object(w["a"])(x,a,r,!1,null,"ee026b80",null);t["default"]=j.exports},aef6:function(e,t,n){"use strict";var a=n("5ca1"),r=n("9def"),o=n("d2c8"),i="endsWith",l=""[i];a(a.P+a.F*n("5147")(i),"String",{endsWith:function(e){var t=o(this,e,i),n=arguments.length>1?arguments[1]:void 0,a=r(t.length),s=void 0===n?a:Math.min(r(n),a),c=String(e);return l?l.call(t,c,s):t.slice(s-c.length,s)===c}})},f559:function(e,t,n){"use strict";var a=n("5ca1"),r=n("9def"),o=n("d2c8"),i="startsWith",l=""[i];a(a.P+a.F*n("5147")(i),"String",{startsWith:function(e){var t=o(this,e,i),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return l?l.call(t,a,n):t.slice(n,n+a.length)===a}})}}]);
//# sourceMappingURL=chunk-7c51de22.2d749d61.js.map