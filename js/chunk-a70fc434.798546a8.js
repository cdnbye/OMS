(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a70fc434"],{"9b3b":function(e,t,a){},aef6:function(e,t,a){"use strict";var n=a("5ca1"),i=a("9def"),o=a("d2c8"),l="endsWith",r=""[l];n(n.P+n.F*a("5147")(l),"String",{endsWith:function(e){var t=o(this,e,l),a=arguments.length>1?arguments[1]:void 0,n=i(t.length),c=void 0===a?n:Math.min(i(a),n),s=String(e);return r?r.call(t,s,c):t.slice(c-s.length,c)===s}})},c456:function(e,t,a){"use strict";a("9b3b")},ddec:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("Table")},i=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("el-alert",{attrs:{title:e.$t("domainTable.title"),description:e.$t("domainTable.desc"),type:"info","show-icon":""}}),t("div",{staticClass:"tool-container"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(e._s(e.$t("domainTable.bindDomain")))]),t("el-tooltip",{attrs:{content:e.$t("domainTable.tokenOnly"),placement:"top"}},[t("el-switch",{attrs:{"active-text":"Token Only","active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:e.shadowChanged},model:{value:e.shadowEnabled,callback:function(t){e.shadowEnabled=t},expression:"shadowEnabled"}})],1)],1),t("el-row",[t("CopyToken",{attrs:{token:e.profile.token}})],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"10px"},attrs:{border:"",data:e.tableData}},[t("el-table-column",{attrs:{align:"center",prop:"domain",label:e.$t("domainTable.domain")}}),t("el-table-column",{attrs:{align:"center",label:e.$t("domainTable.status")},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{style:a.row.blocked||!a.row.isValid||a.row.disable_p2p?"color: red":"color: green"},[e._v("\n          "+e._s(e.formatterStatus(a.row))+"\n        ")])]}}])}),t("el-table-column",{attrs:{label:e.$t("domainTable.operation"),align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return[[1!==a.row.isValid?t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleCheck(a.row)}}},[e._v(e._s(e.$t("domainTable.certification")))]):e._e(),t("el-popover",{ref:"popover-"+a.row.id,style:"mobile"===e.device?"":"margin-left: 10px",attrs:{trigger:"manual",placement:"top",width:"200"}},[t("p",[e._v(e._s(e.$t("common.sureDelete")))]),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.pClose(a.row.id)}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleDeleteDomain(a.row)}}},[e._v(e._s(e.$t("common.ok")))])],1),t("el-button",{attrs:{slot:"reference",disabled:a.row.shadow,type:"danger",size:"mini"},on:{click:function(t){return e.pShow(a.row.id)}},slot:"reference"},[e._v(e._s(e.$t("common.delete")))])],1)]]}}])})],1),t("div",{staticClass:"pagination-container"},[t("el-pagination",{attrs:{layout:"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":e.tableParam.pageSize,"current-page":e.tableParam.page},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:e.$t("domainTable.verifyDomain"),visible:e.checkDialogVisible,width:"mobile"===e.device?"90%":"30%"},on:{"update:visible":function(t){e.checkDialogVisible=t}}},[t("el-alert",{staticStyle:{"text-align":"left"},attrs:{title:"",type:"warning",description:e.$t("domainTable.certificationTip"),closable:!1}}),t("el-form",[t("el-form-item",{attrs:{label:e.$t("domainTable.userVerifyDomain.verifyWay")}},[t("el-radio",{attrs:{label:"dns"},model:{value:e.checkSelect,callback:function(t){e.checkSelect=t},expression:"checkSelect"}},[e._v(e._s(e.$t("domainTable.userVerifyDomain.DNSVerify")))]),t("el-radio",{attrs:{label:"file"},model:{value:e.checkSelect,callback:function(t){e.checkSelect=t},expression:"checkSelect"}},[e._v(e._s(e.$t("domainTable.userVerifyDomain.fileVerify")))])],1)],1),"dns"===e.checkSelect?[t("div",[t("ol",[t("li",[t("div",{staticClass:"pv-content"},[t("h4",[e._v(e._s(e.$t("domainTable.userVerifyDomain.verifyTipHead"))+e._s(e.checkDomainData.domain)+e._s(e.$t("domainTable.userVerifyDomain.verifyTipEnd")))]),t("h4",[e._v(e._s(e.checkDomainData.text))])])]),t("li",[t("div",{staticClass:"pv-content pv-content-last"},[t("h4",[e._v(e._s(e.$t("domainTable.doneTip")))])])])])])]:[t("div",[t("ol",[t("li",[t("div",{staticClass:"pv-content"},[t("h4",[e._v(e._s(e.$t("domainTable.userVerifyDomain.downloadFileHead"))),t("a",{on:{click:e.saveFile}},[e._v(e._s(e.$t("domainTable.userVerifyDomain.downloadFileEnd")))])])])]),t("li",[t("div",{staticClass:"pv-content"},[t("h4",[e._v(e._s(e.$t("domainTable.userVerifyDomain.uploadFile"))+"http://"+e._s(e.checkDomainData.domain)+"/ or https://"+e._s(e.checkDomainData.domain)+"/")]),t("h4",[e._v(e._s(e.$t("domainTable.userVerifyDomain.fileName")))])])]),t("li",[t("div",{staticClass:"pv-content"},[t("h4",[e._v(e._s(e.$t("domainTable.userVerifyDomain.navVisitHead"))+"http(s)://"+e._s(e.checkDomainData.domain)+"/auth.txt"+e._s(e.$t("domainTable.userVerifyDomain.navVisitEnd")))])])]),t("li",[t("div",{staticClass:"pv-content pv-content-last"},[t("h4",[e._v(e._s(e.$t("domainTable.doneTip")))])])])])])],t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.checkDialogVisible=!1}}},[e._v(e._s(e.$t("domainTable.verifyLater")))]),t("el-button",{attrs:{loading:e.checkDomainLoading,type:"primary"},on:{click:e.handleCheckDomain}},[e._v(e._s(e.$t("domainTable.verifyNow")))])],1)],2),t("el-dialog",{attrs:{title:e.$t("domainTable.bindDomain"),visible:e.dialogVisible,width:"mobile"===e.device?"90%":"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"domainForm",attrs:{model:e.domainFormData,rules:e.domainRules}},[t("el-form-item",{attrs:{prop:"domain"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},placeholder:e.$t("domainTable.bindDomainTip")},model:{value:e.domainFormData.domain,callback:function(t){e.$set(e.domainFormData,"domain",t)},expression:"domainFormData.domain"}}),t("br")],1),t("el-form-item",{attrs:{prop:"playUrl"}},[t("el-input",{attrs:{type:"textarea",rows:"2",placeholder:e.$t("domainTable.playUrlTip")},model:{value:e.domainFormData.playUrl,callback:function(t){e.$set(e.domainFormData,"playUrl",t)},expression:"domainFormData.playUrl"}})],1)],1),t("div",{staticClass:"bind-warning",style:"mobile"===e.device?"padding: 0px 8px 5px;":"padding: 0px 20px 20px;"},[e._v(e._s(e.$t("domainTable.bindWarning")))]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{type:"primary"},on:{click:e.addDomainSubmit}},[e._v(e._s(e.$t("common.ok")))])],1)],1)],1)},l=[],r=(a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("8e6e"),a("456d"),a("75fc")),c=a("bd86"),s=(a("aef6"),a("ac6a"),a("28a5"),a("a877")),d=a("61f7"),m=a("ed08"),u=a("2f62"),f=a("8b6c");function h(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=b(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,r=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){r=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(r)throw o}}}}function b(e,t){if(e){if("string"===typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={name:"UserDomain",components:{CopyToken:f["a"]},data:function(){var e=this,t=function(t,a,n){var i=a.split("\n").map((function(e){return Object(m["e"])(e)})).filter((function(e){return""!==e}));i.length>50&&n(new Error("too many domains")),i.forEach((function(t){if(t.endsWith(".superpeer"))n();else if(Object(d["c"])(t))n();else{var a=e.$t("domainTable.bindDomainTError");n(new Error(a))}}))};return{loading:!1,showCopyToken:!1,tableData:[],tableParam:{page:1,pageSize:10},dialogVisible:!1,shadowEnabled:!1,checkDialogVisible:!1,checkSelect:"dns",checkDomainLoading:!1,checkDomainData:{domain:"",text:"",id:0},domainFormData:{domain:"",playUrl:""},domainRules:{domain:[{required:!0,trigger:"blur",validator:t}],playUrl:[{required:!0,trigger:"blur"}]}}},computed:g({},Object(u["b"])(["device","profile"])),watch:{profile:{handler:function(e){e.token&&this.shadowEnabled&&(this.showCopyToken=!0)},immediate:!0,deep:!0}},methods:{shadowChanged:function(){var e=this;Object(s["q"])({enabled:this.shadowEnabled}).then((function(){e.fetchTableData(),e.$notify({title:e.$t("common.success"),type:"success"})})).catch((function(t){e.$notify.error({title:e.$t("common.error"),message:t}),e.shadowEnabled=!e.shadowEnabled}))},pClose:function(e){this.$refs["popover-"+e].doClose()},pShow:function(e){this.$refs["popover-"+e].doShow()},fetchTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize;this.loading=!0,Object(s["l"])(t,a,{web:!0}).then((function(t){t.data&&(e.tableData=Object(r["a"])(t.data)),e.loading=!1,Object(m["d"])().then((function(t){var a,n=!1,i=h(t);try{for(i.s();!(a=i.n()).done;){var o=a.value;o.shadow&&(n=!0)}}catch(l){i.e(l)}finally{i.f()}e.shadowEnabled=n,e.profile.token?e.showCopyToken=e.shadowEnabled:e.$store.dispatch("getProfile")}))})).catch((function(t){e.loading=!1,console.log(t)}))},handleSizeChange:function(e){this.tableParam.pageSize=e,this.fetchTableData()},handleCurrentChange:function(e){this.tableParam.page=e,this.fetchTableData()},handleCheck:function(e){this.checkDomainData=g({},e),this.checkDialogVisible=!0},handleCheckDomain:function(){var e=this;this.checkDomainLoading=!0,Object(s["d"])(this.checkDomainData.id).then((function(t){e.fetchTableData(),e.$notify({title:e.$t("common.success"),message:e.$t("domainTable.verifySuccess"),type:"success"}),e.checkDomainLoading=!1,e.checkDialogVisible=!1})).catch((function(t){e.checkDomainLoading=!1,console.log(t)}))},handleDeleteDomain:function(e){var t=this;Object(s["g"])(e.id).then((function(a){t.$notify({title:t.$t("common.success"),message:t.$t("common.deleteSuccess"),type:"success"}),t.pClose(e.id),t.fetchTableData()})).catch((function(a){t.pClose(e.id),console.log(a)}))},addDomainSubmit:function(){var e=this;this.domainFormData.domain=Object(m["e"])(this.domainFormData.domain),this.domainFormData.playUrl=Object(m["e"])(this.domainFormData.playUrl),this.$refs.domainForm.validate((function(t){if(!t)return!1;var a=e.domainFormData.domain.split("\n").map((function(e){return e.endsWith(".localhost")||e.endsWith(".superpeer")?Object(m["e"])(e):Object(m["e"])(e).toLowerCase()})).filter((function(e){return""!==e})),n={play_url:e.domainFormData.playUrl};1===a.length?n.domain=a[0]:n.domains=a,Object(s["a"])(n).then((function(t){e.dialogVisible=!1,e.fetchTableData()})).catch((function(e){console.log(e)}))}))},formatterStatus:function(e){return e.blocked?this.$t("domainTable.illegal"):e.disable_p2p?this.$t("common.userClosed"):0===e.isValid?this.$t("domainTable.unavailable"):this.$t("common.available")},saveFile:function(){Object(m["c"])(this.checkDomainData.text,"auth.txt")}},mounted:function(){this.fetchTableData()}},D=y,w=(a("c456"),a("2877")),k=Object(w["a"])(D,o,l,!1,null,"3c6b8dec",null),_=k.exports,T={name:"Domain",components:{Table:_}},$=T,O=Object(w["a"])($,n,i,!1,null,null,null);t["default"]=O.exports}}]);
//# sourceMappingURL=chunk-a70fc434.798546a8.js.map