(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44e23536"],{3618:function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"n",(function(){return l})),n.d(e,"i",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"o",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"m",(function(){return p})),n.d(e,"j",(function(){return b})),n.d(e,"d",(function(){return g})),n.d(e,"p",(function(){return h})),n.d(e,"k",(function(){return k})),n.d(e,"e",(function(){return v})),n.d(e,"q",(function(){return O}));var r=n("b775");function o(){return Object(r["a"])({url:"tracker/config",method:"get"})}function a(t){return Object(r["a"])({url:"tracker/config",method:"post",data:t})}function c(){return Object(r["a"])({url:"/tracker/announces",method:"get"})}function i(t){return Object(r["a"])({url:"/tracker/announces",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/tracker/announces",method:"delete",data:t})}function u(){return Object(r["a"])({url:"/tracker/block_ips",method:"get"})}function s(t){return Object(r["a"])({url:"/tracker/block_ips",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/tracker/block_ips",method:"delete",data:t})}function f(){return Object(r["a"])({url:"/tracker/allow_ips",method:"get"})}function m(t){return Object(r["a"])({url:"/tracker/allow_ips",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/tracker/allow_ips",method:"delete",data:t})}function b(){return Object(r["a"])({url:"/tracker/block_origins",method:"get"})}function g(t){return Object(r["a"])({url:"/tracker/block_origins",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/tracker/block_origins",method:"delete",data:t})}function k(){return Object(r["a"])({url:"/tracker/signal_token",method:"get"})}function v(t){return Object(r["a"])({url:"/tracker/signal_token",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/tracker/signal_token",method:"delete",data:t})}},"7d3c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-row",{staticStyle:{float:"left"}},[[e("el-col",{staticStyle:{margin:"10px 0"},attrs:{xs:10,sm:4,lg:2}},[e("el-button",{staticStyle:{float:"'left'"},attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("新增信令token")])],1)]],2),[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:"url",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.url))])]}}])}),e("el-table-column",{attrs:{label:"token",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.token))])]}}])}),e("el-table-column",{attrs:{label:t.$t("domainTable.operation"),align:"center",width:"300"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-popover",{ref:"popover-"+n.row.url,attrs:{placement:"top",width:"160",trigger:"manual"}},[e("p",[t._v(t._s(t.$t("common.sureDelete")))]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.pClose(n.row.url)}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDelete(n.row)}}},[t._v(t._s(t.$t("common.ok")))])],1),e("el-button",{style:"mobile"===t.device?"":"margin-left: 10px",attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(e){return t.pShow(n.row.url)}},slot:"reference"},[t._v(t._s(t.$t("common.delete")))])],1)]}}])})],1)],e("el-dialog",{attrs:{visible:t.dialogFormVisible,width:"mobile"===t.device?"85%":""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("div",{attrs:{slot:"title"},slot:"title"},[e("p",[t._v("新增信令token")])]),e("el-form",{ref:"createForm",attrs:{model:t.form,"label-position":"left","label-width":"120px"}},[e("el-form-item",{attrs:{prop:"url",label:"信令URL","label-width":"100px",required:""}},[e("el-input",{attrs:{placeholder:"wss://"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),e("el-form-item",{attrs:{prop:"token","label-width":"100px",required:""}},[e("template",{slot:"label"},[e("span",[t._v("token")])]),e("el-input",{model:{value:t.form.token,callback:function(e){t.$set(t.form,"token",e)},expression:"form.token"}})],2)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary",loading:t.createItemLoading},on:{click:t.handleCreateItem}},[t._v(t._s(t.$t("common.ok")))])],1)],1)],2)},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),c=n("3618"),i=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={name:"signalToken",data:function(){return{tableData:[],createItemLoading:!1,tableLoading:!1,dialogFormVisible:!1,popoverVisible:!1,deletePopVisible:!1,form:{url:"",token:""}}},computed:u({},Object(i["b"])(["device"])),methods:{pShow:function(t){this.$refs["popover-"+t].doShow()},pClose:function(t){this.$refs["popover-"+t].doClose()},fetchData:function(){var t=this;this.tableLoading=!0,Object(c["k"])().then((function(e){e.data&&e.data.items&&(t.tableData=e.data.items),t.tableLoading=!1})).catch((function(e){t.tableLoading=!1}))},handleCreateItem:function(){var t=this;this.$refs.createForm.validate((function(e){if(!e)return!1;t.createItemLoading=!0,Object(c["e"])(t.form).then((function(e){0===e.ret&&(t.dialogFormVisible=!1,t.createItemLoading=!1,t.$notify({title:t.$t("common.success"),message:t.$t("app.createItemSuccess"),type:"success"}),t.fetchData())})).catch((function(e){t.createItemLoading=!1}))}))},handleDelete:function(t){var e=this,n={url:t.url};Object(c["q"])(n).then((function(n){e.fetchData(),e.$notify({title:e.$t("common.success"),message:e.$t("app.deleteItemSuccess"),type:"success"}),e.pClose(t.url)})).catch((function(n){e.pClose(t.url),console.log(n)}))}},mounted:function(){this.fetchData()}},d=s,f=n("2877"),m=Object(f["a"])(d,r,o,!1,null,"2ce935ac",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-44e23536.ae27729f.js.map