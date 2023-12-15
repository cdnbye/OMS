(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3991afc2"],{f4f2:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{align:"center",label:"域名"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[t("a",{on:{click:function(t){return e.hostClick(a.row.domain)}}},[e._v(e._s(a.row.domain))])])]}}])}),t("el-table-column",{attrs:{align:"center",label:"平台"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.native?"native":"web"))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"未审核"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{slot:"reference",value:a.row.reviewing,"active-color":"red"},on:{change:function(t){return e.reviewingChange(a.row)}},slot:"reference"})]}}])}),t("el-table-column",{attrs:{align:"center",label:"黑名单"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{slot:"reference",value:a.row.blocked,"active-color":"red"},on:{change:function(t){return e.blacklistChange(a.row)}},slot:"reference"})]}}])}),t("el-table-column",{attrs:{align:"center",label:"白名单"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{slot:"reference",value:a.row.whitelist,"active-color":"green"},on:{change:function(t){return e.whiteListChange(a.row)}},slot:"reference"})]}}])}),t("el-table-column",{attrs:{align:"center",label:"联系方式"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[t("a",{on:{click:function(t){return e.onEmailClick(a.row.email)}}},[e._v(e._s(a.row.email))])])]}}])}),t("el-table-column",{attrs:{label:"action",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.reviewClick(a.row.play_url)}}},[e._v("审核")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.checkBeianClick(a.row.domain)}}},[e._v("备案")])]}}])})],1),t("div",{staticClass:"pagination-container"},[t("el-pagination",{attrs:{small:"mobile"===e.device,layout:"mobile"===e.device?"prev, pager, next":"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":e.tableParam.pageSize,"current-page":e.tableParam.page},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},i=[],r=(a("8e6e"),a("456d"),a("ac6a"),a("f559"),a("bd86")),o=a("a877"),c=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{loading:!1,showValid:!0,showWhite:!1,showBlack:!1,showNative:!1,tableData:[],tableParam:{page:1,pageSize:10},searchValue:""}},computed:s({},Object(c["b"])(["device"])),mounted:function(){this.fetchTableData()},methods:{onEmailClick:function(e){this.$router.push({path:"/user/list",query:{email:e}})},hostClick:function(e){window.open("http://".concat(e)),window.open("https://".concat(e))},reviewClick:function(e){e.startsWith("http")||(e="http://"+e),window.open("".concat(e))},blacklistChange:function(e){var t=this;if(!e.whitelist||e.blocked){var a={domain:e.domain,uid:e.uid,blocked:!e.blocked};this.loading=!0,Object(o["b"])(a).then((function(a){t.tableData.forEach((function(t){t.id===e.id&&(t.blocked=!t.blocked)})),t.$message({message:e.blocked?"成功添加至黑名单":"已从黑名单中移除",type:"success"}),t.loading=!1})).catch((function(e){t.loading=!1}))}else this.$message({message:"不能同时添加到白名单和黑名单",type:"error"})},whiteListChange:function(e){var t=this;if(e.whitelist||!e.blocked){var a={domain:e.domain,uid:e.uid,whitelist:!e.whitelist};this.loading=!0,Object(o["t"])(a).then((function(a){t.tableData.forEach((function(t){t.id===e.id&&(t.whitelist=!t.whitelist)})),t.$message({message:e.whitelist?"成功添加至白名单":"已从白名单中移除",type:"success"}),t.loading=!1})).catch((function(e){t.loading=!1}))}else this.$message({message:"不能同时添加到白名单和黑名单",type:"error"})},reviewingChange:function(e){var t=this,a={domain:e.domain,uid:e.uid,reviewing:!e.reviewing};this.loading=!0,Object(o["p"])(a).then((function(a){t.tableData.forEach((function(t){t.id===e.id&&(t.reviewing=!t.reviewing)})),t.$message({message:e.reviewing?"正在审核":"已审核",type:"success"}),t.loading=!1})).catch((function(e){t.loading=!1}))},checkBeianClick:function(e){var t=this;this.loading=!0,Object(o["c"])(e).then((function(e){if(0===e.ret){var a=e.data.beianed;a?t.$message({message:"已备案",type:"success"}):e.data.expired?t.$message({message:"备案API过期",type:"error"}):t.$message({message:"未备案",type:"error"})}else t.$message({message:e.data.msg,type:"error"});t.loading=!1})).catch((function(e){t.loading=!1}))},formatData:function(e){return e.forEach((function(e){})),e},fetchTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize;this.loading=!0,Object(o["j"])(t,a).then((function(t){e.loading=!1,e.tableData=e.formatData(t.data)})).catch((function(t){e.tableData=[],e.loading=!1}))},handleSizeChange:function(e){this.tableParam.pageSize=e,this.fetchTableData()},handleCurrentChange:function(e){this.tableParam.page=e,this.fetchTableData()}}},d=u,h=a("2877"),f=Object(h["a"])(d,n,i,!1,null,null,null);t["default"]=f.exports},f559:function(e,t,a){"use strict";var n=a("5ca1"),i=a("9def"),r=a("d2c8"),o="startsWith",c=""[o];n(n.P+n.F*a("5147")(o),"String",{startsWith:function(e){var t=r(this,e,o),a=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);