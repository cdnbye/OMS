(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a909993"],{"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,a="millisecond",i="second",r="minute",o="hour",s="day",l="week",c="month",u="quarter",p="year",f="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},b={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(a,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var a=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(a,c),r=n-i<0,o=e.clone().add(a+(r?-1:1),c);return+(-(a+(n-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:p,w:l,d:s,D:f,h:o,m:r,s:i,ms:a,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",w={};w[y]=g;var k=function(t){return t instanceof $},S=function t(e,n,a){var i;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();w[r]&&(i=r),n&&(w[r]=n,i=r);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;w[s]=e,i=s}return!a&&i&&(y=i),i||!a&&y},O=function(t,e){if(k(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},M=b;M.l=S,M.i=k,M.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $=function(){function g(t){this.$L=S(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(m);if(a){var i=a[2]-1||0,r=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)):new Date(a[1],i,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return O(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<O(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,a=!!M.u(e)||e,u=M.p(t),d=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return a?i:i.endOf(s)},m=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case p:return a?d(1,0):d(31,11);case c:return a?d(1,g):d(0,g+1);case l:var y=this.$locale().weekStart||0,w=(h<y?h+7:h)-y;return d(a?v-w:v+(6-w),g);case s:case f:return m(b+"Hours",0);case o:return m(b+"Minutes",1);case r:return m(b+"Seconds",2);case i:return m(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,l=M.p(t),u="set"+(this.$u?"UTC":""),d=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[p]=u+"FullYear",n[o]=u+"Hours",n[r]=u+"Minutes",n[i]=u+"Seconds",n[a]=u+"Milliseconds",n)[l],m=l===s?this.$D+(e-this.$W):e;if(l===c||l===p){var h=this.clone().set(f,1);h.$d[d](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(a,u){var f,d=this;a=Number(a);var m=M.p(u),h=function(t){var e=O(d);return M.w(e.date(e.date()+Math.round(t*a)),d)};if(m===c)return this.set(c,this.$M+a);if(m===p)return this.set(p,this.$y+a);if(m===s)return h(1);if(m===l)return h(7);var g=(f={},f[r]=e,f[o]=n,f[i]=t,f)[m]||1,v=this.$d.getTime()+a*g;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),r=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,r){return t&&(t[n]||t(e,a))||i[n].slice(0,r)},p=function(t){return M.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:M.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:p(1),hh:p(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return a.replace(h,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(a,f,d){var m,h=M.p(f),g=O(a),v=(g.utcOffset()-this.utcOffset())*e,b=this-g,y=M.m(this,g);return y=(m={},m[p]=y/12,m[c]=y,m[u]=y/3,m[l]=(b-v)/6048e5,m[s]=(b-v)/864e5,m[o]=b/n,m[r]=b/e,m[i]=b/t,m)[h]||b,d?y:M.a(y)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=S(t,e,!0);return a&&(n.$L=a),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),C=$.prototype;return O.prototype=C,[["$ms",a],["$s",i],["$m",r],["$H",o],["$W",s],["$M",c],["$y",p],["$D",f]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,$,O),t.$i=!0),O},O.locale=S,O.isDayjs=k,O.unix=function(t){return O(1e3*t)},O.en=w[y],O.Ls=w,O.p={},O}))},"8b6c":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return t.show?e("el-row",[e("el-col",{attrs:{xs:20,sm:12,lg:12}},[e("el-input",{attrs:{disabled:!0},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}},[e("template",{slot:"prepend"},[t._v("Token: ")])],2)],1),e("el-col",{attrs:{xs:3,sm:2,lg:1}},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("app.copy")))]),e("el-button",{staticStyle:{padding:"6px 10px"},attrs:{type:"info",plain:""},on:{click:function(e){return t.handleCopy(e)}}},[e("img",{attrs:{src:t.copyImg,alt:"","min-width":"24",height:"24"}})])],1)],1)],1):t._e()},i=[],r=n("f71e"),o=n("78a3"),s=n.n(o),l={name:"CopyToken",props:{token:{type:String,default:"",required:!1}},data:function(){return{copyImg:s.a,show:!0}},methods:{handleCopy:function(){Object(r["a"])(this.token,event)}}},c=l,u=n("2877"),p=Object(u["a"])(c,a,i,!1,null,"7290814c",null);e["a"]=p.exports},9817:function(t,e){t.exports="data:image/png;base64,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"},b446:function(t,e,n){t.exports=n.p+"img/android.13c1935b.png"},f559:function(t,e,n){"use strict";var a=n("5ca1"),i=n("9def"),r=n("d2c8"),o="startsWith",s=""[o];a(a.P+a.F*n("5147")(o),"String",{startsWith:function(t){var e=r(this,t,o),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return s?s.call(e,a,n):e.slice(n,n+a.length)===a}})},f82c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-alert",{attrs:{title:t.$t("app.title"),description:t.$t("app.desc"),type:"info","show-icon":""}}),e("el-row",{staticStyle:{margin:"15px 0"}},[t.hasToken?[e("CopyToken",{attrs:{token:t.inputToken}})]:t._e()],2),e("el-row",{staticStyle:{float:"left"}},[[t.hasToken?e("el-col",{attrs:{xs:10,sm:4,lg:2}},[e("el-button",{staticStyle:{float:"'left'"},attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.$t("app.createFormItem")))])],1):e("el-col",{staticStyle:{margin:"10px 0"},attrs:{xs:10,sm:4,lg:2}},[e("el-button",{staticStyle:{float:"'left'"},attrs:{type:"primary"},on:{click:t.handleCreateToken}},[t._v(t._s(t.$t("app.createToken")))])],1)]],2),t.hasToken?[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:t.$t("app.platform"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{attrs:{src:t.row.img,alt:"","min-width":"50",height:"50"}})]}}],null,!1,849194938)}),e("el-table-column",{attrs:{label:t.$t("app.name"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.app_name))])]}}],null,!1,3849918877)}),e("el-table-column",{attrs:{label:"AppId",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.app_id))])]}}],null,!1,2118519639)}),e("el-table-column",{attrs:{label:t.$t("app.signature"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return"android"===n.row.platform?[e("el-input",{attrs:{type:"textarea"},model:{value:n.row.signature,callback:function(e){t.$set(n.row,"signature",e)},expression:"scope.row.signature"}})]:void 0}}],null,!0)}),e("el-table-column",{attrs:{label:t.$t("app.createTime"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.created_at))])]}}],null,!1,3946749262)}),e("el-table-column",{attrs:{label:t.$t("common.status"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{style:n.row.blocked||n.row.disable_p2p?"color: red":"color: green"},[t._v(t._s(t.formatterStatus(n.row)))])]}}],null,!1,286618791)}),e("el-table-column",{attrs:{label:t.$t("domainTable.operation"),align:"center",width:"300"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{slot:"reference",size:"mini",type:"primary"},on:{click:function(e){return t.handleWatch(n.row)}},slot:"reference"},[t._v(t._s(t.$t("app.watch")))]),"android"===n.row.platform?e("el-popover",{ref:"popover-update-"+n.row.id,attrs:{placement:"top",width:"200",trigger:"manual"}},[e("p",[t._v(t._s(t.$t("common.sureUpdate")))]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.updateClose(n.row.id)}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdateSign(n.row)}}},[t._v(t._s(t.$t("common.ok")))])],1),e("el-button",{style:"mobile"===t.device?"":"margin-left: 10px",attrs:{slot:"reference",size:"mini",type:"warning"},on:{click:function(e){return t.updateShow(n.row.id)}},slot:"reference"},[t._v(t._s(t.$t("app.updateSign")))])],1):t._e(),e("el-popover",{ref:"popover-"+n.row.id,attrs:{placement:"top",width:"200",trigger:"manual"}},[e("p",[t._v(t._s(t.$t("common.sureDelete")))]),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.pClose(n.row.id)}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleDelete(n.row)}}},[t._v(t._s(t.$t("common.ok")))])],1),e("el-button",{style:"mobile"===t.device?"":"margin-left: 10px",attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(e){return t.pShow(n.row.id)}},slot:"reference"},[t._v(t._s(t.$t("common.delete")))])],1)]}}],null,!1,3039577094)})],1),e("div",{staticClass:"pagination-container"},[e("el-pagination",{attrs:{layout:"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":t.tableParam.pageSize,"current-page":t.tableParam.page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]:t._e(),e("el-dialog",{attrs:{visible:t.dialogFormVisible,width:"mobile"===t.device?"85%":""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("div",{attrs:{slot:"title"},slot:"title"},[e("p",[t._v(t._s(t.$t("app.createTitle")))])]),e("el-form",{ref:"createForm",attrs:{model:t.form,"label-position":"left","label-width":"120px"}},[e("el-form-item",{attrs:{prop:"app_name",label:"APP Name","label-width":"100px",required:""}},[e("el-input",{attrs:{placeholder:t.$t("app.appName")},model:{value:t.form.app_name,callback:function(e){t.$set(t.form,"app_name",e)},expression:"form.app_name"}})],1),e("el-form-item",{attrs:{prop:"app_id","label-width":"100px",required:""}},[e("template",{slot:"label"},[e("span",[t._v("APP ID")]),e("PointTip",{staticStyle:{"margin-left":"4px"},attrs:{content:t.$t("app.appID")}})],1),e("el-input",{attrs:{placeholder:t.$t("app.appIdTip")},model:{value:t.form.app_id,callback:function(e){t.$set(t.form,"app_id",e)},expression:"form.app_id"}})],2),e("el-form-item",{attrs:{prop:"play_url","label-width":"160px",required:""}},[e("template",{slot:"label"},[e("span",[t._v("Introduction URL")]),e("PointTip",{staticStyle:{"margin-left":"4px"},attrs:{content:t.$t("app.introTip")}})],1),e("el-input",{attrs:{placeholder:"https://introduction_to_app/index.html"},model:{value:t.form.play_url,callback:function(e){t.$set(t.form,"play_url",e)},expression:"form.play_url"}})],2),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"android"===t.form.platform,expression:"form.platform==='android'"}],attrs:{prop:"signature","label-width":"160px"}},[e("template",{slot:"label"},[e("span",[t._v("App Signature")]),e("PointTip",{staticStyle:{"margin-left":"4px"},attrs:{content:t.$t("app.signatureTip")}})],1),e("el-input",{attrs:{placeholder:"Optional"},model:{value:t.form.signature,callback:function(e){t.$set(t.form,"signature",e)},expression:"form.signature"}})],2),e("el-form-item",{staticStyle:{float:"left"},attrs:{prop:"platform",label:"Platform","label-width":"100px",required:""}},[e("el-select",{attrs:{placeholder:"Select Platform"},model:{value:t.form.platform,callback:function(e){t.$set(t.form,"platform",e)},expression:"form.platform"}},[e("el-option",{attrs:{label:"Android",value:"android"}}),e("el-option",{attrs:{label:"iOS/tvOS/macOS",value:"ios"}}),e("el-option",{attrs:{label:"PC (Electron)",value:"pc"}})],1)],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),e("el-button",{attrs:{type:"primary",loading:t.createItemLoading},on:{click:t.handleCreateItem}},[t._v(t._s(t.$t("common.ok")))])],1)],1)],2)},i=[],r=(n("8e6e"),n("456d"),n("f559"),n("a481"),n("ac6a"),n("75fc")),o=n("bd86"),s=n("b775");function l(t,e,n){return Object(s["a"])({url:"sdk/user_id/".concat(t,"/info?page=").concat(e,"&page_size=").concat(n),method:"get"})}function c(t){return Object(s["a"])({url:"sdk/user_id/".concat(t,"/token"),method:"post"})}function u(t,e){return Object(s["a"])({url:"sdk/user_id/".concat(t,"/app"),method:"post",data:e})}function p(t,e){return Object(s["a"])({url:"sdk/user_id/".concat(t,"/app"),method:"delete",data:e})}function f(t,e){return Object(s["a"])({url:"sdk/user_id/".concat(t,"/signature"),method:"post",data:e})}var d=n("2f62"),m=n("5f87"),h=n("5a0c"),g=n.n(h),v=n("9f52"),b=n("ed08"),y=n("9817"),w=n.n(y),k=n("f90c"),S=n.n(k),O=n("b446"),M=n.n(O),$=n("f71e"),C=n("78a3"),D=n.n(C),I=n("8b6c");function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W={name:"app",data:function(){return{hasToken:!1,inputToken:"none",tableData:[],createItemLoading:!1,tableLoading:!1,tokenLoading:!1,dialogFormVisible:!1,deletePopVisible:!1,form:{app_name:"",app_id:"",platform:"",play_url:"",signature:""},copyImg:D.a,tableParam:{page:1,pageSize:10}}},components:{PointTip:v["a"],CopyToken:I["a"]},computed:_({},Object(d["b"])(["device"])),methods:{pShow:function(t){this.$refs["popover-"+t].doShow()},pClose:function(t){this.$refs["popover-"+t].doClose()},updateShow:function(t){this.$refs["popover-update-"+t].doShow()},updateClose:function(t){this.$refs["popover-update-"+t].doClose()},handleCreateToken:function(){var t=this;this.tokenLoading=!0,c(Object(m["a"])()).then((function(e){t.$notify({title:t.$t("common.success"),message:t.$t("app.createTokenSuccess"),type:"success"}),t.tokenLoading=!1,t.fetchData()})).catch((function(e){t.tokenLoading=!1}))},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize;this.tableLoading=!0,l(Object(m["a"])(),e,n).then((function(e){if(e.data&&(e.data.token?(t.inputToken=e.data.token,t.hasToken=!0):t.hasToken=!1,e.data.app_list)){var n=Object(r["a"])(e.data.app_list);n.forEach((function(t){switch(t.created_at=g()(t.created_at).format("YYYY-MM-DD HH:mm:ss"),t.platform){case"pc":t.img=w.a;break;case"ios":t.img=S.a;break;case"android":t.img=M.a;break;default:break}})),t.tableData=n}t.tableLoading=!1,Object(b["d"])()})).catch((function(e){t.tableLoading=!1}))},handleUpdateSign:function(t){var e=this,n=t.signature;n=n.replace(/\ +/g,"").replace(/[\r\n]/g,"");var a={id:t.id,signature:n};f(Object(m["a"])(),a).then((function(n){e.fetchData(),e.$notify({title:e.$t("common.success"),message:e.$t("app.updateItemSuccess"),type:"success"}),e.updateClose(t.id)})).catch((function(n){e.updateClose(t.id)}))},handleCreateItem:function(){var t=this;this.form.app_name=Object(b["e"])(this.form.app_name),this.form.app_id=Object(b["e"])(this.form.app_id),this.form.play_url=Object(b["e"])(this.form.play_url),this.form.signature=Object(b["e"])(this.form.signature);var e=this.form.app_id;e.startsWith("http://")||e.startsWith("https://")?this.$notify.error({title:this.$t("common.error"),message:this.$t("app.websiteWarn")}):this.$refs.createForm.validate((function(e){if(!e)return!1;t.createItemLoading=!0,u(Object(m["a"])(),t.form).then((function(e){0===e.ret&&(t.dialogFormVisible=!1,t.createItemLoading=!1,t.$notify({title:t.$t("common.success"),message:t.$t("app.createItemSuccess"),type:"success"}),t.fetchData())})).catch((function(e){t.createItemLoading=!1}))}))},handleDelete:function(t){var e=this,n={id:t.id,user_id:Object(m["a"])(),domain_id:t.domain_id};p(Object(m["a"])(),n).then((function(n){e.fetchData(),e.$notify({title:e.$t("common.success"),message:e.$t("app.deleteItemSuccess"),type:"success"}),e.pClose(t.id)})).catch((function(n){e.pClose(t.id),console.log(n)}))},handleWatch:function(t){this.$router.push({name:"UserLiveData",params:{domainInfo:{uid:Object(m["a"])(),id:t.domain_id,domain:t.app_id,isValid:1,native:!0}}})},handleCopy:function(){Object($["a"])(this.inputToken,event)},handleSizeChange:function(t){this.tableParam.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.tableParam.page=t,this.fetchData()},formatterStatus:function(t){return t.blocked?this.$t("app.illegal"):t.disable_p2p?this.$t("common.userClosed"):this.$t("common.available")}},mounted:function(){this.fetchData()}},Y=W,A=n("2877"),U=Object(A["a"])(Y,a,i,!1,null,null,null);e["default"]=U.exports},f90c:function(t,e,n){t.exports=n.p+"img/ios.52949995.png"}}]);
//# sourceMappingURL=chunk-7a909993.72fb1c21.js.map