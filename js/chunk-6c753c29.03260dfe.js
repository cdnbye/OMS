(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c753c29"],{"38eb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{style:"mobile"===t.device?"":"padding: 30px 120px"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.tableData}},[e("el-table-column",{attrs:{align:"center",prop:"domain",label:t.$t("p2pConfig.name"),"min-width":"150"}}),e("el-table-column",{attrs:{align:"center",formatter:t.formatterStatus,label:t.$t("p2pConfig.status"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{style:a.row.blocked?"color: red":""},[t._v("\n          "+t._s(t.formatterStatus(a.row))+"\n        ")])]}}])}),e("el-table-column",{attrs:{label:t.$t("domainTable.operation"),align:"center","min-width":"50",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.blocked?t._e():e("el-switch",{attrs:{value:!a.row.disable_p2p,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(e){return t.switchChange(a.row,e)}}})]}}])}),e("el-table-column",{attrs:{label:t.$t("domainTable.operationMobile"),align:"center","min-width":"50",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.blocked?t._e():e("el-switch",{attrs:{value:!a.row.disable_mobile,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(e){return t.switchMobileChange(a.row,e)}}})]}}])})],1),e("div",{staticClass:"pagination-container"},[e("el-pagination",{attrs:{layout:"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":t.tableParam.pageSize,"current-page":t.tableParam.page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},i=[],o=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),r=a("a877"),l=a("c11e"),c=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u="*Apply To All*",b={name:"p2pSwitch",data:function(){return{loading:!1,tableData:[],tableParam:{page:1,pageSize:10},applyAll:{id:0,domain:u,blocked:!1,disable_p2p:!1,disable_mobile:!1}}},computed:s({},Object(c["b"])(["device"])),created:function(){this.fetchTableData()},methods:{formatterStatus:function(t){return t.blocked?this.$t("common.illegal"):t.disable_p2p?this.$t("p2pConfig.close"):this.$t("p2pConfig.open")},fetchTableData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize;this.loading=!0,Object(r["l"])(e,a,{isvalid:!0}).then((function(e){e.data&&(t.tableData=e.data,t.tableData.length>1&&(t.applyAll.uid=t.tableData[0].uid,t.applyAll.disable_p2p=t.tableData[0].disable_p2p,t.applyAll.disable_mobile=t.tableData[0].disable_mobile,t.tableData.unshift(t.applyAll))),t.loading=!1})).catch((function(){t.loading=!1}))},handleP2PConfig:function(t,e,a){var n=this;this.loading=!0,Object(l["a"])(t,e,a).then((function(t){t.data.succeed?(n.$notify({title:n.$t("common.success"),message:n.$t("p2pConfig.configSuccess"),type:"success"}),0===e&&n.fetchTableData(),n.tableData.forEach((function(t){t.id===e&&(t.disable_p2p=a.disable,t.disable_mobile=a.disable_mobile)}))):n.$notify.error({title:n.$t("common.error"),message:n.$t("p2pConfig.configFail")}),n.loading=!1})).catch((function(){n.loading=!1}))},switchChange:function(t,e){var a={disable:!e,disable_mobile:t.disable_mobile};this.handleP2PConfig(t.uid,t.id,a)},switchMobileChange:function(t,e){var a={disable:t.disable_p2p,disable_mobile:!e};this.handleP2PConfig(t.uid,t.id,a)},handleSizeChange:function(t){this.tableParam.pageSize=t,this.fetchTableData()},handleCurrentChange:function(t){this.tableParam.page=t,this.fetchTableData()}}},p=b,f=a("2877"),h=Object(f["a"])(p,n,i,!1,null,null,null);e["default"]=h.exports},c11e:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return d}));var n=a("b775");function i(t,e,a){return Object(n["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control"),method:"post",data:a})}function o(t,e,a){return Object(n["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control/wifi_only"),method:"post",data:a})}function r(t,e,a){return Object(n["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control/ratio"),method:"post",data:a})}function l(t,e,a){return Object(n["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control/urgent_ratio"),method:"post",data:a})}function c(t,e,a){return Object(n["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control/signal"),method:"post",data:a})}function d(t,e,a){return Object(n["a"])({url:"user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/control/stun"),method:"post",data:a})}}}]);