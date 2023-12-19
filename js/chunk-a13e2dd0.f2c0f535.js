(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a13e2dd0"],{"1b59":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-row",{staticStyle:{"margin-bottom":"20px"},attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:12,lg:6}},[e("el-select",{staticClass:"filter-item",on:{change:t.selectChange},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},t._l(t.selectOptions,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-col",{attrs:{xs:8,sm:12,lg:4}},[e("el-checkbox",{on:{change:t.showAdminUser},model:{value:t.showAdmin,callback:function(e){t.showAdmin=e},expression:"showAdmin"}},[t._v("显示管理员")])],1),e("el-col",{attrs:{xs:8,sm:12,lg:4}},[e("el-checkbox",{on:{change:t.showWhitelistUser},model:{value:t.showWhitelist,callback:function(e){t.showWhitelist=e},expression:"showWhitelist"}},[t._v("白名单用户")])],1),e("el-col",{attrs:{xs:8,sm:12,lg:4}},[e("el-checkbox",{on:{change:t.showTrustedUser},model:{value:t.showWhitelist,callback:function(e){t.showWhitelist=e},expression:"showWhitelist"}},[t._v("Trusted用户")])],1),e("el-col",{attrs:{xs:12,sm:6,lg:3}},[e("el-input",{staticClass:"filter-item",attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入UID"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.uidChange.apply(null,arguments)}},model:{value:t.searchUid,callback:function(e){t.searchUid=e},expression:"searchUid"}})],1),e("el-col",{attrs:{xs:24,sm:12,lg:6}},[e("el-input",{staticClass:"filter-item",attrs:{"prefix-icon":"el-icon-search",placeholder:"请输入邮箱"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:function(e){t.keywordsChange(e.target.value.trim())}.apply(null,arguments)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{align:"center",prop:"uid",width:"50",label:"ID"}}),e("el-table-column",{attrs:{align:"center",prop:"email",width:"150",label:"邮箱"}}),e("el-table-column",{attrs:{align:"center",prop:"reg_date",width:"70",label:"注册时间"}}),e("el-table-column",{attrs:{align:"center",prop:"domain",label:"域名",width:"60"}}),e("el-table-column",{attrs:{align:"center",prop:"debug",width:"60",label:"debug"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-switch",{attrs:{slot:"reference",value:n.row.debug,"active-color":"#42b983"},on:{change:function(e){return t.handleDebugUser(n.row)}},slot:"reference"})]}}])}),e("el-table-column",{attrs:{align:"center",prop:"whitelist",width:"60",label:"白名单"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-switch",{attrs:{slot:"reference",value:n.row.whitelist,"active-color":"#42b983"},on:{change:function(e){return t.handleWhitelistUser(n.row)}},slot:"reference"})]}}])}),e("el-table-column",{attrs:{align:"center",prop:"trusted",width:"60",label:"免审核"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-switch",{attrs:{slot:"reference",value:n.row.trusted,"active-color":"#42b983"},on:{change:function(e){return t.handleTrustUser(n.row)}},slot:"reference"})]}}])}),e("el-table-column",{attrs:{align:"center",label:"禁用状态",width:"60"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-popover",{ref:"popover-"+n.row.username,attrs:{trigger:"manual",placement:"top",width:"160"}},[e("p",[t._v(t._s(n.row.enable?"确认禁用该用户？":"取消禁用该用户？"))]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.pClose(n.row.username)}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleFrozenUser(n.row)}}},[t._v(t._s(t.$t("common.ok")))])],1),e("el-switch",{attrs:{slot:"reference",value:0===n.row.enable,"active-color":"red"},on:{change:function(e){return t.pShow(n.row.username)}},slot:"reference"})],1)]}}])}),e("el-table-column",{attrs:{align:"center",width:"60",label:"管理员权限"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-popover",{ref:"popover-"+n.row.uid,attrs:{trigger:"manual",placement:"top",width:"160"}},[e("p",[t._v(t._s(n.row.admin?"确认取消该用户的管理员权限吗？":"确定将该用户设置为管理员吗？"))]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.pClose(n.row.uid)}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleAdminUser(n.row)}}},[t._v(t._s(t.$t("common.ok")))])],1),e("el-switch",{attrs:{slot:"reference",value:n.row.admin,"active-color":"#42b983"},on:{change:function(e){return t.pShow(n.row.uid)}},slot:"reference"})],1)]}}])}),e("el-table-column",{attrs:{align:"center",label:"人民币"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-row",{attrs:{gutter:4}},[e("el-col",{attrs:{span:50}},[e("el-input",{model:{value:n.row.balance_cny,callback:function(e){t.$set(n.row,"balance_cny",e)},expression:"scope.row.balance_cny"}})],1),e("el-col",{attrs:{span:8}},[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.changeBalance(n.row.balance_cny,"CNY",n.row.uid)}}},[t._v("修改")])],1)],1)]}}])}),e("el-table-column",{attrs:{align:"center",label:"美元"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-row",{attrs:{gutter:4}},[e("el-col",{attrs:{span:50}},[e("el-input",{model:{value:n.row.balance_usd,callback:function(e){t.$set(n.row,"balance_usd",e)},expression:"scope.row.balance_usd"}})],1),e("el-col",{attrs:{span:8}},[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.changeBalance(n.row.balance_usd,"USD",n.row.uid)}}},[t._v("修改")])],1)],1)]}}])}),e("el-table-column",{attrs:{align:"center",width:"50",label:"发票"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-row",{attrs:{gutter:3}},[e("el-col",{attrs:{span:8}},[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.changeInvoiceIssued(n.row.invoice_await,n.row.uid)}}},[t._v("修改")])],1)],1)]}}])}),e("el-table-column",{attrs:{align:"center",label:"流量更新(TB)"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-row",{attrs:{gutter:4}},[e("el-col",{attrs:{span:50}},[e("el-input",{model:{value:n.row.flow.remain,callback:function(e){t.$set(n.row.flow,"remain",e)},expression:"scope.row.flow.remain"}})],1),e("el-col",{attrs:{span:8}},[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.handleEditRemain(n.row)}}},[t._v("修改")])],1)],1)]}}])}),e("el-table-column",{attrs:{align:"center",label:"套餐更新"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-row",{attrs:{gutter:4}},[e("el-col",{attrs:{span:50}},[e("el-select",{staticClass:"filter-item",staticStyle:{float:"left"},model:{value:n.row.flow.product_type,callback:function(e){t.$set(n.row.flow,"product_type",e)},expression:"scope.row.flow.product_type"}},t._l(t.planSelectOptions,(function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(n.value))]),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(n.label))])])})),1)],1),e("el-col",{attrs:{span:15}},[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.handleEditPlan(n.row,!0)}}},[t._v("修改")]),e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.handleEditPlan(n.row)}}},[t._v("更新")])],1)],1)]}}])}),e("el-table-column",{attrs:{align:"center",width:"60",label:"套餐定制"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-row",{attrs:{gutter:4}},[n.row.custom_plan?e("el-col",{attrs:{span:50}},[t._v("\n            "+t._s(t.formatCustomPlan(n.row.custom_plan))+"\n          ")]):t._e(),e("el-col",{attrs:{span:8}},[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.handleCustomPlan(n.row)}}},[t._v("修改")])],1)],1)]}}])}),e("el-table-column",{attrs:{align:"center",width:"60",label:"邀请人"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-row",{attrs:{gutter:4}},[e("el-col",{attrs:{span:50}},[t._v("\n            "+t._s(n.row.flow.inviter)+"\n          ")]),e("el-col",{attrs:{span:8}},[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.handleCommission(n.row.flow)}}},[t._v("修改")])],1)],1)]}}])}),e("el-table-column",{attrs:{label:"passwd",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.copyPassword(n.row.raw_pass,e)}}},[t._v("Copy")])]}}])})],1),e("el-dialog",{attrs:{title:"定制套餐",visible:t.dialogVisible,width:"mobile"===t.device?"90%":"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-form",{attrs:{model:t.selectedCustomPlan,size:"small"}},[e("el-form-item",{attrs:{label:"Subject"}},[e("el-input",{model:{value:t.selectedCustomPlan.subject,callback:function(e){t.$set(t.selectedCustomPlan,"subject",e)},expression:"selectedCustomPlan.subject"}})],1),e("el-form-item",{attrs:{label:"Type"}},[e("el-select",{staticClass:"filter-item",staticStyle:{float:"left"},model:{value:t.selectedCustomPlan.type,callback:function(e){t.$set(t.selectedCustomPlan,"type",e)},expression:"selectedCustomPlan.type"}},t._l(t.planSelectOptions,(function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(n.value))]),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(n.label))])])})),1)],1),e("el-form-item",{attrs:{label:"Traffic"}},[e("el-input-number",{model:{value:t.selectedCustomPlan.traffic,callback:function(e){t.$set(t.selectedCustomPlan,"traffic",t._n(e))},expression:"selectedCustomPlan.traffic"}}),t._v("   TB\n      ")],1),e("el-form-item",{attrs:{label:"Price"}},[e("el-input-number",{model:{value:t.selectedCustomPlan.price,callback:function(e){t.$set(t.selectedCustomPlan,"price",t._n(e))},expression:"selectedCustomPlan.price"}})],1),e("el-form-item",{attrs:{label:"Currency"}},[e("el-select",{staticClass:"filter-item",staticStyle:{float:"left"},model:{value:t.selectedCustomPlan.currency,callback:function(e){t.$set(t.selectedCustomPlan,"currency",e)},expression:"selectedCustomPlan.currency"}},t._l(t.currencyOptions,(function(n){return e("el-option",{key:n,attrs:{value:n}},[e("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[t._v(t._s(n))])])})),1)],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.submitResetPlan}},[t._v("重置")]),e("el-button",{attrs:{type:"primary"},on:{click:t.submitCustomPlan}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"邀请人",visible:t.commissionVisible,width:"mobile"===t.device?"90%":"30%"},on:{"update:visible":function(e){t.commissionVisible=e}}},[e("el-form",{attrs:{model:t.selectedInviterInfo,size:"small"}},[e("el-form-item",{attrs:{label:"email"}},[e("el-input",{attrs:{type:"email"},model:{value:t.selectedInviterInfo.inviter,callback:function(e){t.$set(t.selectedInviterInfo,"inviter",e)},expression:"selectedInviterInfo.inviter"}})],1),e("el-form-item",{attrs:{label:"佣金比例"}},[e("el-input",{attrs:{type:"number"},model:{value:t.selectedInviterInfo.rate,callback:function(e){t.$set(t.selectedInviterInfo,"rate",t._n(e))},expression:"selectedInviterInfo.rate"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.commissionVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.submitCommission}},[t._v("确 定")])],1)],1),e("div",{staticClass:"pagination-container"},[e("el-pagination",{attrs:{layout:"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":t.tableParam.pageSize,"current-page":t.tableParam.page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],a=(n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("8e6e"),n("456d"),n("75fc")),i=(n("7f7f"),n("ac6a"),n("9aab"),n("9627"),n("3e95")),l=n.n(i),s=(n("c5f6"),n("bd86")),c=n("a877"),u=n("c24f"),f=n("cd05"),d=n("f71e"),h=n("5a0c"),m=n.n(h),p=(n("ed08"),n("2f62")),b=n("61f7");function v(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=y(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function y(t,e){if(t){if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S={data:function(){return{loading:!1,dialogVisible:!1,commissionVisible:!1,selectedCustomPlan:{uid:0,subject:"VIP Plan",type:0,traffic:0,price:0,currency:"USD"},selectedInviterInfo:{inviter:"",rate:0},tableData:[],tableParam:{page:1,pageSize:10},showAdmin:!1,showWhitelist:!1,searchValue:"",searchUid:"",selectValue:"updated_at",selectOptions:[{label:"更新时间",value:"updated_at"},{label:"邮箱",value:"email"},{label:"用户名",value:"username"},{label:"注册时间",value:"reg_date"},{label:"域名",value:"domain"},{label:"禁用状态",value:"enable"}],planSelectOptions:[{value:"0",label:"flow_packet"},{value:"99",label:"monthly_custom"},{value:"7",label:"monthly_1TB"},{value:"9",label:"monthly_5TB"},{value:"1",label:"monthly_10TB"},{value:"2",label:"monthly_20TB"},{value:"12",label:"monthly_25TB"},{value:"10",label:"monthly_50TB"},{value:"11",label:"monthly_100TB"},{value:"3",label:"monthly_unlimited"},{value:"8",label:"annual_1TB"},{value:"4",label:"annual_10TB"},{value:"5",label:"annual_20TB"},{value:"6",label:"annual_unlimited"},{value:"13",label:"monthly_250TB"},{value:"14",label:"annual_5TB"},{value:"15",label:"monthly_2TB"},{value:"16",label:"monthly_500TB"},{value:"17",label:"monthly_1000TB"},{value:"18",label:"monthly_500GB"}],currencyOptions:["USD","CNY"]}},mounted:function(){this.resetFilters();var t=this.$route.query.email;t?(this.searchValue=t,this.keywordsChange(t)):this.fetchTableData()},computed:_({},Object(p["b"])(["device"])),methods:{changeInvoiceIssued:function(t,e){var n=this;this.$messageBox.prompt("","已开金额",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var r=t.value;Object(f["e"])({uid:e,value:Number(r)}).then((function(t){0===t.ret&&(n.$message({type:"success",message:"操作成功"}),n.fetchTableData())}))}))},pShow:function(t){this.$refs["popover-"+t].doShow()},pClose:function(t){this.$refs["popover-"+t].doClose()},changeBalance:function(t,e,n){var r=this;l.a.confirm("更新".concat(e,"至").concat(t,"吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){Object(u["k"])({uid:n,balance:Number(t),currency:e}).then((function(t){0===t.ret&&(r.$message({type:"success",message:"操作成功"}),r.fetchTableData())}))}))},handleEditRemain:function(t){var e=this;l.a.confirm("更新流量至".concat(t.flow.remain,"TB吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.flowSubmit(t)}))},flowSubmit:function(t){var e=this,n={uid:t.uid,remain_traffic:Math.floor(1024*t.flow.remain*1024*1024)};Object(u["m"])(n).then((function(t){0===t.ret&&(e.$message({type:"success",message:"操作成功"}),e.fetchTableData())}))},showAdminUser:function(t){console.warn(t),this.loading=!0,this.filters.forEach((function(e){"admin"===e.name&&(e.value=t)})),this.fetchTableData()},showWhitelistUser:function(t){this.loading=!0,this.filters.forEach((function(e){"whitelist"===e.name&&(e.value=t)})),this.fetchTableData()},showTrustedUser:function(t){this.loading=!0,this.filters.forEach((function(e){"trusted"===e.name&&(e.value=t)})),this.fetchTableData()},uidChange:function(t){var e=t.target.value.trim();isNaN(Number(e))||this.filters.forEach((function(t){"uid"===t.name&&(t.value=e)})),this.fetchTableData()},keywordsChange:function(t){this.filters.forEach((function(e){"keywords"===e.name&&(e.value=t||!1)})),this.fetchTableData()},formatData:function(t){var e=Object(a["a"])(t);return e.forEach((function(t){t.reg_date=m()(1e3*t.reg_date).format("YYYY-MM-DD HH:mm"),t.checkin=m()(t.checkin).format("YYYY-MM-DD HH:mm"),t.flow.remain=(t.flow.remain/1024/1024/1024).toFixed(3)})),e},fetchTableData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.selectValue,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.filters;this.loading=!0,Object(c["m"])(e,n,r,o).then((function(e){e.data&&(t.tableData=t.formatData(e.data)),t.loading=!1,t.resetFilters()})).catch((function(e){t.tableData=[],t.loading=!1,console.log(e),t.resetFilters()}))},handleFrozenUser:function(t){var e=this,n={uid:t.uid,frozen:!!t.enable};this.loading=!0,Object(u["i"])(n).then((function(r){e.pClose(t.username),e.loading=!1,e.$message({type:"success",message:"操作成功"}),e.tableData.forEach((function(t){t.uid===n.uid&&(t.enable=n.frozen?0:1)}))})).catch((function(t){e.loading=!1,console.log(t)}))},handleAdminUser:function(t){var e=this;this.loading=!0,Object(u["a"])({uid:t.uid,admin:!t.admin}).then((function(n){e.pClose(t.uid),e.loading=!1,e.$message({type:"success",message:"操作成功"}),e.tableData.forEach((function(e){e.uid===t.uid&&(e.admin=!e.admin)}))})).catch((function(t){e.loading=!1,console.log(t)}))},handleDebugUser:function(t){var e=this;this.loading=!0,Object(u["g"])({uid:t.uid,debug:!t.debug}).then((function(n){e.loading=!1,e.$message({type:"success",message:"操作成功"}),e.tableData.forEach((function(e){e.uid===t.uid&&(e.debug=!e.debug)}))})).catch((function(t){e.loading=!1,console.log(t)}))},handleWhitelistUser:function(t){var e=this;this.loading=!0,Object(u["n"])({uid:t.uid,whitelist:!t.whitelist}).then((function(n){e.loading=!1,e.$message({type:"success",message:"操作成功"}),e.tableData.forEach((function(e){e.uid===t.uid&&(e.whitelist=!e.whitelist)}))})).catch((function(t){e.loading=!1,console.log(t)}))},handleTrustUser:function(t){var e=this;this.loading=!0,Object(u["j"])({uid:t.uid,trusted:!t.trusted}).then((function(n){e.loading=!1,e.$message({type:"success",message:"操作成功"}),e.tableData.forEach((function(e){e.uid===t.uid&&(e.trusted=!e.trusted)}))})).catch((function(t){e.loading=!1,console.log(t)}))},handleSizeChange:function(t){this.tableParam.pageSize=t,this.fetchTableData()},handleCurrentChange:function(t){this.tableParam.page=t,this.fetchTableData()},selectChange:function(){this.fetchTableData()},copyPassword:function(t,e){Object(d["a"])(t,e)},handleEditPlan:function(t,e){var n=this,r=this.getPlanLabel(t.flow.product_type);r&&l.a.confirm("".concat(e?"修改":"更新","套餐至").concat(r,"吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){var r={uid:t.uid,product_type:Number(t.flow.product_type),keep_due_time:e};Object(c["p"])(r).then((function(t){0===t.ret&&(n.$message({type:"success",message:"操作成功"}),n.fetchTableData())}))}))},handleCommission:function(t){this.selectedInviterInfo={uid:t.uid,inviter:t.inviter,rate:t.commission_rate},this.commissionVisible=!0},submitCommission:function(){var t=this;!Object(b["a"])(this.selectedInviterInfo.inviter)||this.selectedInviterInfo.rate>=1?this.$message({type:"error",message:"格式错误"}):Object(u["l"])(this.selectedInviterInfo).then((function(e){0===e.ret&&(t.$message({type:"success",message:"操作成功"}),t.fetchTableData()),t.commissionVisible=!1}))},handleCustomPlan:function(t){t.custom_plan&&(this.selectedCustomPlan=JSON.parse(t.custom_plan)),this.selectedCustomPlan.uid=t.uid,this.dialogVisible=!0},submitCustomPlan:function(){var t=this;l.a.confirm("确定更新吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t.selectedCustomPlan.type=Number(t.selectedCustomPlan.type),Object(c["e"])(t.selectedCustomPlan).then((function(e){0===e.ret&&(t.$message({type:"success",message:"操作成功"}),t.fetchTableData()),t.dialogVisible=!1}))}))},submitResetPlan:function(){var t=this;l.a.confirm("确定重置吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t.selectedCustomPlan.type=-1,Object(c["e"])(t.selectedCustomPlan).then((function(e){0===e.ret&&(t.$message({type:"success",message:"操作成功"}),t.fetchTableData()),t.dialogVisible=!1}))}))},getPlanLabel:function(t){var e,n=v(this.planSelectOptions);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(t===r.value)return r.label}}catch(o){n.e(o)}finally{n.f()}},formatCustomPlan:function(t){var e=JSON.parse(t);return"\n          ".concat(e.subject,"  类型: ").concat(e.type,"  流量: ").concat(e.traffic,"TB  价格: ").concat(e.price,"  币种: ").concat(e.currency,"\n          ")},resetFilters:function(){this.filters=[{name:"whitelist",value:!1},{name:"frozen",value:!1},{name:"admin",value:!1},{name:"trusted",value:!1},{name:"keywords",value:!1},{name:"uid",value:!1}]}}},$=S,k=n("2877"),x=Object(k["a"])($,r,o,!1,null,null,null);e["default"]=x.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",a="minute",i="hour",l="day",s="week",c="month",u="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,c),a=n-o<0,i=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-o)/(a?o-i:i-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:s,d:l,D:d,h:i,m:a,s:o,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",w={};w[g]=b;var _=function(t){return t instanceof x},S=function t(e,n,r){var o;if(!e)return g;if("string"==typeof e){var a=e.toLowerCase();w[a]&&(o=a),n&&(w[a]=n,o=a);var i=e.split("-");if(!o&&i.length>1)return t(i[0])}else{var l=e.name;w[l]=e,o=l}return!r&&o&&(g=o),o||!r&&g},$=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},k=y;k.l=S,k.i=_,k.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function b(t){this.$L=S(t.locale,null,!0),this.parse(t)}var v=b.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var o=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return k},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return $(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<$(t)},v.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!k.u(e)||e,u=k.p(t),h=function(t,e){var o=k.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(l)},m=function(t,e){return k.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,b=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case f:return r?h(1,0):h(31,11);case c:return r?h(1,b):h(0,b+1);case s:var g=this.$locale().weekStart||0,w=(p<g?p+7:p)-g;return h(r?v-w:v+(6-w),b);case l:case d:return m(y+"Hours",0);case i:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,s=k.p(t),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[f]=u+"FullYear",n[i]=u+"Hours",n[a]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],m=s===l?this.$D+(e-this.$W):e;if(s===c||s===f){var p=this.clone().set(d,1);p.$d[h](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[k.p(t)]()},v.add=function(r,u){var d,h=this;r=Number(r);var m=k.p(u),p=function(t){var e=$(h);return k.w(e.date(e.date()+Math.round(t*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===l)return p(1);if(m===s)return p(7);var b=(d={},d[a]=e,d[i]=n,d[o]=t,d)[m]||1,v=this.$d.getTime()+r*b;return k.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),a=this.$H,i=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=function(t,n,o,a){return t&&(t[n]||t(e,r))||o[n].slice(0,a)},f=function(t){return k.s(a%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:k.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,s,2),ddd:u(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(a),HH:k.s(a,2,"0"),h:f(1),hh:f(2),a:d(a,i,!0),A:d(a,i,!1),m:String(i),mm:k.s(i,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:o};return r.replace(p,(function(t,e){return e||m[t]||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,h){var m,p=k.p(d),b=$(r),v=(b.utcOffset()-this.utcOffset())*e,y=this-b,g=k.m(this,b);return g=(m={},m[f]=g/12,m[c]=g,m[u]=g/3,m[s]=(y-v)/6048e5,m[l]=(y-v)/864e5,m[i]=y/n,m[a]=y/e,m[o]=y/t,m)[p]||y,h?g:k.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return k.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},b}(),O=x.prototype;return $.prototype=O,[["$ms",r],["$s",o],["$m",a],["$H",i],["$W",l],["$M",c],["$y",f],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t.$i||(t(e,x,$),t.$i=!0),$},$.locale=S,$.isDayjs=_,$.unix=function(t){return $(1e3*t)},$.en=w[g],$.Ls=w,$.p={},$}))},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return M}});var r=n(279),o=n.n(r),a=n(370),i=n.n(a),l=n(817),s=n.n(l);function c(t){try{return document.execCommand(t)}catch(e){return!1}}var u=function(t){var e=s()(t);return c("cut"),e},f=u;function d(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}var h=function(t,e){var n=d(t);e.container.appendChild(n);var r=s()(n);return c("copy"),n.remove(),r},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"===typeof t?n=h(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=h(t.value,e):(n=s()(t),c("copy")),n},p=m;function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,a=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==b(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return a?p(a,{container:r}):o?"cut"===n?f(o):p(o,{container:r}):void 0},y=v;function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),t}function $(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function x(t){var e=C();return function(){var n,r=D(t);if(e){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==g(e)&&"function"!==typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}function P(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var j=function(t){$(n,t);var e=x(n);function n(t,r){var o;return w(this,n),o=e.call(this),o.resolveOptions(r),o.listenClick(t),o}return S(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===g(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=i()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=y({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return P("action",t)}},{key:"defaultTarget",value:function(t){var e=P("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return P("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return p(t,e)}},{key:"cut",value:function(t){return f(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(o()),M=j},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var a=i.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}function a(t,e,n,r,a){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,a)})))}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=a},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),o=n(438);function a(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return i(t,e,n);if(r.nodeList(t))return l(t,e,n);if(r.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function l(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function s(t,e,n){return o(document.body,t,e,n)}t.exports=a},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var a=0,i=r.length;a<i;a++)r[a].fn!==e&&r[a].fn._!==e&&o.push(r[a]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},cd05:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return s}));var r=n("b775");function o(){return Object(r["a"])({url:"finance/global",method:"get"})}function a(){return Object(r["a"])({url:"finance/invoices",method:"get"})}function i(t){return Object(r["a"])({url:"finance/invoice_finish",method:"post",data:t})}function l(t){return Object(r["a"])({url:"finance/invoice_update",method:"post",data:t})}function s(){return Object(r["a"])({url:"finance/income_trend",method:"get"})}},f71e:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("2b0e"),o=n("b311"),a=n.n(o);function i(){r["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})}function l(){r["default"].prototype.$message({message:"Copy failed",type:"error"})}function s(t,e){var n=new a.a(e.target,{text:function(){return t}});n.on("success",(function(){i(),n.destroy()})),n.on("error",(function(){l(),n.destroy()})),n.onClick(e)}}}]);