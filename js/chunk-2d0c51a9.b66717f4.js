(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c51a9"],{"3e56":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("el-card",{attrs:{"body-style":{padding:"30px"}}},[t("Table")],1)},n=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[t("el-col",{attrs:{xs:24,sm:12,lg:6}},[t("el-input",{staticClass:"filter-item",attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入域名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1),t("el-col",{attrs:{xs:12,sm:6,lg:3}},[t("el-select",{staticClass:"filter-item",on:{change:e.selectChange},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},e._l(e.selectOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-col",{attrs:{xs:12,sm:6,lg:3}},[t("el-select",{staticClass:"filter-item",on:{change:e.selectChange},model:{value:e.platformValue,callback:function(t){e.platformValue=t},expression:"platformValue"}},e._l(e.platformOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-col",{attrs:{xs:8,sm:12,lg:2}},[t("el-checkbox",{on:{change:e.showValidChange},model:{value:e.showValid,callback:function(t){e.showValid=t},expression:"showValid"}},[e._v("已绑定")])],1),t("el-col",{attrs:{xs:8,sm:12,lg:2}},[t("el-checkbox",{on:{change:e.showWhitelistChange},model:{value:e.showWhite,callback:function(t){e.showWhite=t},expression:"showWhite"}},[e._v("白名单")])],1),t("el-col",{attrs:{xs:8,sm:12,lg:2}},[t("el-checkbox",{on:{change:e.showBlacklistChange},model:{value:e.showBlack,callback:function(t){e.showBlack=t},expression:"showBlack"}},[e._v("黑名单")])],1),t("el-col",{attrs:{xs:8,sm:12,lg:2}},[t("el-checkbox",{on:{change:e.showDebugChange},model:{value:e.showDebug,callback:function(t){e.showDebug=t},expression:"showDebug"}},[e._v("Debug")])],1),t("el-col",{attrs:{xs:8,sm:12,lg:4}},[t("el-checkbox",{on:{change:e.showNativeChange},model:{value:e.showNative,callback:function(t){e.showNative=t},expression:"showNative"}},[e._v("Native")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"filter-change":e.tableFilter}},[t("el-table-column",{attrs:{align:"center",label:"域名"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[t("a",{on:{click:function(t){return e.hostClick(a.row.host)}}},[e._v(e._s(a.row.host))])])]}}])}),t("el-table-column",{attrs:{align:"center",prop:"num",label:"人数"}}),t("el-table-column",{attrs:{align:"center",prop:"max_num",label:"最大人数"}}),t("el-table-column",{attrs:{align:"center",label:"邮箱"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[t("a",{on:{click:function(t){return e.onEmailClick(a.row.email)}}},[e._v(e._s(a.row.email))])])]}}])}),t("el-table-column",{attrs:{align:"center",label:"是否绑定"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.isvalid?"已绑定":"未绑定"))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"黑名单"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{ref:"popover-"+a.row.host_id,attrs:{trigger:"manual",placement:"top",width:"160"}},[t("p",[e._v(e._s(a.row.blocked?"确认从黑名单中移除吗？":"确定加入黑名单吗？"))]),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.pClose(a.row.host_id)}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.blacklistChange(a.row)}}},[e._v(e._s(e.$t("common.ok")))])],1),t("el-switch",{attrs:{slot:"reference",value:a.row.blocked,"active-color":"red"},on:{change:function(t){return e.pShow(a.row.host_id)}},slot:"reference"})],1)]}}])}),t("el-table-column",{attrs:{align:"center",label:"白名单"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{ref:"popover-"+a.row.host,attrs:{trigger:"manual",placement:"top",width:"160"}},[t("p",[e._v(e._s(a.row.whitelist?"确认从白名单中移除吗？":"确定加入白名单吗？"))]),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.pClose(a.row.host)}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.whiteListChange(a.row)}}},[e._v(e._s(e.$t("common.ok")))])],1),t("el-switch",{attrs:{slot:"reference",value:a.row.whitelist,"active-color":"green"},on:{change:function(t){return e.pShow(a.row.host)}},slot:"reference"})],1)]}}])}),t("el-table-column",{attrs:{align:"center",label:"Debug"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{slot:"reference",value:a.row.debug,"active-color":"green"},on:{change:function(t){return e.debugChange(a.row)}},slot:"reference"})]}}])}),t("el-table-column",{attrs:{label:"action",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleCheckDetail(a.row)}}},[e._v("详情")])]}}])})],1),t("div",{staticClass:"pagination-container"},[t("el-pagination",{attrs:{small:"mobile"===e.device,layout:"mobile"===e.device?"prev, pager, next":"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":e.tableParam.pageSize,"current-page":e.tableParam.page},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},i=[],s=(a("8e6e"),a("456d"),a("75fc")),c=(a("7f7f"),a("ac6a"),a("bd86")),r=a("a877"),u=a("2f62"),h=a("5f87");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={data:function(){return{loading:!1,showValid:!0,showWhite:!1,showBlack:!1,showDebug:!1,showNative:!1,tableData:[],tableParam:{page:1,pageSize:10},filters:[{name:"isvalid",value:!0},{name:"blocked",value:!1},{name:"whitelist",value:!1},{name:"native",value:!1},{name:"debug",value:!1}],searchValue:"",selectValue:"num",selectOptions:[{label:"id",value:"id"},{label:"最大人数",value:"max_num"},{label:"人数",value:"num"},{label:"近一月p2p流量",value:"p2p_month"},{label:"近一月http流量",value:"http_month"}],platformValue:void 0,platformOptions:[{label:"all platform",value:void 0},{label:"android",value:"android"},{label:"ios",value:"ios"},{label:"pc",value:"pc"}]}},computed:f({},Object(u["b"])(["device"])),mounted:function(){this.fetchTableData()},methods:{onEmailClick:function(e){this.$router.push({path:"/user/list",query:{email:e}})},pShow:function(e){this.$refs["popover-"+e].doShow()},pClose:function(e){this.$refs["popover-"+e].doClose()},hostClick:function(e){window.open("http://".concat(e)),window.open("https://".concat(e))},blacklistChange:function(e){var t=this;if(e.whitelist&&!e.blocked)return this.pClose(e.host_id),void this.$message({message:"不能同时添加到白名单和黑名单",type:"error"});var a={domain:e.host,uid:e.uid,blocked:!e.blocked};this.loading=!0,Object(r["b"])(a).then((function(a){t.pClose(e.host_id),t.tableData.forEach((function(t){t.host_id===e.host_id&&(t.blocked=!t.blocked)})),t.$message({message:e.blocked?"成功添加至黑名单":"已从黑名单中移除",type:"success"}),t.loading=!1})).catch((function(e){t.loading=!1}))},whiteListChange:function(e){var t=this;if(!e.whitelist&&e.blocked)return this.pClose(e.host),void this.$message({message:"不能同时添加到白名单和黑名单",type:"error"});var a={domain:e.host,uid:e.uid,whitelist:!e.whitelist};this.loading=!0,Object(r["s"])(a).then((function(a){t.pClose(e.host),t.tableData.forEach((function(t){t.host_id===e.host_id&&(t.whitelist=!t.whitelist)})),t.$message({message:e.whitelist?"成功添加至白名单":"已从白名单中移除",type:"success"}),t.loading=!1})).catch((function(e){t.loading=!1}))},debugChange:function(e){var t=this,a={domain:e.host,uid:e.uid,debug:!e.debug};this.loading=!0,Object(r["f"])(a).then((function(a){t.tableData.forEach((function(t){t.host_id===e.host_id&&(t.debug=!t.debug)})),t.$message({message:e.debug?"开启debug":"关闭debug",type:"success"}),t.loading=!1})).catch((function(e){t.loading=!1}))},tableFilter:function(e){this.fetchTableData()},showValidChange:function(e){this.filters.forEach((function(t){"isvalid"===t.name&&(t.value=e)})),this.fetchTableData()},showWhitelistChange:function(e){this.filters.forEach((function(t){"whitelist"===t.name&&(t.value=e)})),this.fetchTableData()},showBlacklistChange:function(e){this.filters.forEach((function(t){"blocked"===t.name&&(t.value=e)})),this.fetchTableData()},showDebugChange:function(e){this.filters.forEach((function(t){"debug"===t.name&&(t.value=e)})),this.fetchTableData()},showNativeChange:function(e){this.filters.forEach((function(t){"native"===t.name&&(t.value=e)})),this.fetchTableData()},formatData:function(e){return e.forEach((function(e){e.p2p_month&&(e.p2p_month=(e.p2p_month/1024/1024).toFixed(2)),e.http_month&&(e.http_month=(e.http_month/1024/1024).toFixed(2)),e.p2p_rt&&(e.p2p_rt=(e.p2p_rt/1024).toFixed(2)),e.http_rt&&(e.http_rt=(e.http_rt/1024).toFixed(2))})),e},fetchTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.selectValue,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.filters,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.platformValue;this.loading=!0,Object(r["i"])(t,a,l,n,o).then((function(t){e.loading=!1,e.tableData=e.formatData(t.data)})).catch((function(t){e.tableData=[],e.loading=!1}))},handleSizeChange:function(e){this.tableParam.pageSize=e,this.fetchTableData()},handleCurrentChange:function(e){this.tableParam.page=e,this.fetchTableData()},selectChange:function(e){this.fetchTableData()},handleSearch:function(e){var t=this,a=e.target.value.trim();a?Object(r["p"])(a).then((function(e){t.showValid?t.tableData=e.data.filter((function(e){return e.isvalid})):t.tableData=Object(s["a"])(e.data)})):this.fetchTableData()},handleCheckDetail:function(e){this.$router.push({name:"UserLiveData",params:{hostId:e.host_id,domainInfo:{uid:Object(h["a"])(),id:-1,native:e.native,domain:e.host}}})}},beforeDestroy:function(){clearInterval(this.timmer)}},b=p,g=a("2877"),m=Object(g["a"])(b,o,i,!1,null,null,null),v=m.exports,w={name:"UserData",components:{Table:v}},_=w,k=Object(g["a"])(_,l,n,!1,null,null,null);t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0c51a9.b66717f4.js.map