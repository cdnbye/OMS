(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac5b4df2"],{"284a":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return u}));var r=n("b775");function o(){return Object(r["a"])({url:"global/livetime",method:"get"})}function a(){return Object(r["a"])({url:"global/overall",method:"get"})}function i(t,e){var n="global/num?type=".concat(t);return e&&e.country&&(n="".concat(n,"&country=").concat(e.country)),Object(r["a"])({url:n,method:"get"})}function c(t,e){var n="global/channel?page=".concat(t,"&page_size=").concat(e);return Object(r["a"])({url:n,method:"get"})}function u(t){var e="global/channel/split";return Object(r["a"])({url:e,method:"post",data:t})}},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return L}});var r=n(279),o=n.n(r),a=n(370),i=n.n(a),c=n(817),u=n.n(c);function l(t){try{return document.execCommand(t)}catch(e){return!1}}var s=function(t){var e=u()(t);return l("cut"),e},f=s;function d(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}var p=function(t,e){var n=d(t);e.container.appendChild(n);var r=u()(n);return l("copy"),n.remove(),r},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"===typeof t?n=p(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=p(t.value,e):(n=u()(t),l("copy")),n},h=y;function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,a=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==b(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return a?h(a,{container:r}):o?"cut"===n?f(o):h(o,{container:r}):void 0},g=m;function v(t){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e,n){return e&&S(t.prototype,e),n&&S(t,n),t}function x(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}function j(t,e){return j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},j(t,e)}function E(t){var e=C();return function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function P(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var A=function(t){x(n,t);var e=E(n);function n(t,r){var o;return w(this,n),o=e.call(this),o.resolveOptions(r),o.listenClick(t),o}return O(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===v(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=i()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=g({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return P("action",t)}},{key:"defaultTarget",value:function(t){var e=P("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return P("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return h(t,e)}},{key:"cut",value:function(t){return f(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(o()),L=A},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var a=i.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}function a(t,e,n,r,a){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,a)})))}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=a},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),o=n(438);function a(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return i(t,e,n);if(r.nodeList(t))return c(t,e,n);if(r.string(t))return u(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function u(t,e,n){return o(document.body,t,e,n)}t.exports=a},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var a=0,i=r.length;a<i;a++)r[a].fn!==e&&r[a].fn._!==e&&o.push(r[a]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},e6f6:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{style:"mobile"===t.device?"":"padding: 30px 120px"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.tableData}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-form",{attrs:{inline:"",align:"left"}},[e("el-form-item",{attrs:{label:"users"}},[e("span",[t._v(t._s(n.row.users.join(" ")))])])],1),e("el-form",{attrs:{inline:"",align:"left"}},[e("el-form-item",{attrs:{label:"channel"}},[e("span",[t._v(t._s(n.row.channel))])])],1),n.row.columns.length>1?e("el-form",{attrs:{inline:"",align:"left"}},[e("el-form-item",{attrs:{label:"columns"}},[e("span",[t._v(t._s(n.row.columns.join("+")))])])],1):t._e()]}}])}),e("el-table-column",{attrs:{align:"center",width:"50",type:"index",index:t.indexMethod}}),e("el-table-column",{attrs:{align:"center",prop:"channel_id",label:t.$t("hotChannels.content")}}),e("el-table-column",{attrs:{align:"center",width:"100",prop:"num",label:t.$t("hotChannels.num")}}),e("el-table-column",{attrs:{align:"center",width:"100",prop:"columns.length",label:"槽数"}}),e("el-table-column",{attrs:{align:"center",width:"100",prop:"live",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.live?"直播":"点播")+"\n          ")]}}])}),e("el-table-column",{attrs:{align:"center",width:"200",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCopy(n.row.channel_id)}}},[t._v("Copy")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.splitChannel(n.row.channel_id)}}},[t._v("拆分")])]}}])})],1),e("div",{staticClass:"pagination-container"},[e("el-pagination",{attrs:{layout:"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":t.tableParam.pageSize,"current-page":t.tableParam.page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("284a"),c=n("2f62"),u=n("f71e");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"hotChannel",data:function(){return{loading:!1,tableData:[],tableParam:{page:1,pageSize:10}}},computed:s({},Object(c["b"])(["device"])),mounted:function(){this.fetchTableData()},methods:{handleCopy:function(t){Object(u["a"])(t,event)},fetchTableData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize;this.loading=!0,Object(i["a"])(e,n).then((function(e){e.data&&(t.tableData=e.data),t.loading=!1,window.clearTimeout(t.timer),t.timer=window.setTimeout((function(){t.fetchTableData()}),2e4)})).catch((function(e){t.loading=!1,console.log(e)}))},handleSizeChange:function(t){this.tableParam.pageSize=t,this.fetchTableData()},handleCurrentChange:function(t){this.tableParam.page=t,this.fetchTableData()},indexMethod:function(t){return t+(this.tableParam.page-1)*this.tableParam.pageSize+1},splitChannel:function(t){var e=this;Object(i["e"])({channel_id:t}).then((function(t){var n=t.data,r=n.columns;e.$notify({title:e.$t("common.success"),message:"当前槽数：".concat(r),type:"success"})}))}},beforeDestroy:function(){window.clearTimeout(this.timer)}},d=f,p=n("2877"),y=Object(p["a"])(d,r,o,!1,null,null,null);e["default"]=y.exports},f71e:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("2b0e"),o=n("b311"),a=n.n(o);function i(){r["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})}function c(){r["default"].prototype.$message({message:"Copy failed",type:"error"})}function u(t,e){var n=new a.a(e.target,{text:function(){return t}});n.on("success",(function(){i(),n.destroy()})),n.on("error",(function(){c(),n.destroy()})),n.onClick(e)}}}]);
//# sourceMappingURL=chunk-ac5b4df2.c24c97cc.js.map