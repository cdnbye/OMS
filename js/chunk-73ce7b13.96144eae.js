(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73ce7b13"],{1945:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("el-alert",{attrs:{description:t.$t("invitation.tip"),"show-icon":""}}),e("el-row",{staticStyle:{float:"left","margin-top":"10px"}},[[e("el-col",{attrs:{xs:10,sm:4,lg:2}},[e("el-button",{staticStyle:{float:"'left'"},attrs:{type:"primary"},on:{click:function(e){return t.handleCopy(e)}}},[t._v(t._s(t.$t("invitation.copy")))])],1)]],2),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:t.$t("invitation.date"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.created_at))])]}}])}),e("el-table-column",{attrs:{label:t.$t("invitation.from"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.from))])]}}])}),e("el-table-column",{attrs:{label:t.$t("invitation.price"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.original_price))])]}}])}),e("el-table-column",{attrs:{label:t.$t("order.currency"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.currency))])]}}])}),e("el-table-column",{attrs:{label:t.$t("invitation.status"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-tag",{key:n.row.id,attrs:{size:"small",type:"success",effect:"plain"}},[t._v("\n          "+t._s(t.$t("invitation.done"))+"\n        ")])]}}])}),e("el-table-column",{attrs:{label:t.$t("invitation.commission"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.row.amount))])]}}])})],1),e("div",{staticClass:"pagination-container"},[e("el-pagination",{attrs:{layout:"sizes, prev, pager, next","page-sizes":[10,20,50,100],"page-size":t.tableParam.pageSize,"current-page":t.tableParam.page},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],i=(n("ac6a"),n("9f52")),a=n("b775");function u(t,e,n){return Object(a["a"])({url:"user/user_id/".concat(t,"/invite_records?page=").concat(e,"&page_size=").concat(n),method:"get"})}var c=n("5f87"),s=n("f71e"),l=n("5d2d"),f=n("267e"),d=n("5a0c"),h=n.n(d),p={name:"Invitation",components:{PointTip:i["a"]},data:function(){return{loading:!1,tableData:[],tableParam:{page:1,pageSize:10}}},mounted:function(){this.fetchTableData()},methods:{fetchTableData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableParam.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableParam.pageSize;this.loading=!0,u(Object(c["a"])(),e,n).then((function(e){var n=e.data;if(n){var r=e.data;r.forEach((function(t){t.created_at=h()(t.created_at).format("YYYY-MM-DD HH:mm")})),t.tableData=r}else t.tableData=[];t.loading=!1})).catch((function(e){t.tableData=[],t.loading=!1,console.log(e)}))},handleCopy:function(){var t=location.origin+location.pathname+"#/signup",e=Object(l["a"])("profile");if(e){var n="".concat(t,"?zone=").concat(Object(l["a"])(f["b"]),"&inviter=").concat(encodeURIComponent(e.email));Object(s["a"])(n,event)}},handleSizeChange:function(t){this.tableParam.pageSize=t,this.fetchTableData()},handleCurrentChange:function(t){this.tableParam.page=t,this.fetchTableData()}}},y=p,v=n("2877"),m=Object(v["a"])(y,r,o,!1,null,"2badcedb",null);e["default"]=m.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",u="day",c="week",s="month",l="quarter",f="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,s),i=n-o<0,a=e.clone().add(r+(i?-1:1),s);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:f,w:c,d:u,D:d,h:a,m:i,s:o,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",$={};$[b]=v;var S=function(t){return t instanceof x},w=function t(e,n,r){var o;if(!e)return b;if("string"==typeof e){var i=e.toLowerCase();$[i]&&(o=i),n&&($[i]=n,o=i);var a=e.split("-");if(!o&&a.length>1)return t(a[0])}else{var u=e.name;$[u]=e,o=u}return!r&&o&&(b=o),o||!r&&b},_=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},M=g;M.l=w,M.i=S,M.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function v(t){this.$L=w(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return _(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<_(t)},m.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!M.u(e)||e,l=M.p(t),h=function(t,e){var o=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(u)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,v=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case s:return r?h(1,v):h(0,v+1);case c:var b=this.$locale().weekStart||0,$=(y<b?y+7:y)-b;return h(r?m-$:m+(6-$),v);case u:case d:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case i:return p(g+"Seconds",2);case o:return p(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,c=M.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[u]=l+"Date",n[d]=l+"Date",n[s]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[o]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===u?this.$D+(e-this.$W):e;if(c===s||c===f){var y=this.clone().set(d,1);y.$d[h](p),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[M.p(t)]()},m.add=function(r,l){var d,h=this;r=Number(r);var p=M.p(l),y=function(t){var e=_(h);return M.w(e.date(e.date()+Math.round(t*r)),h)};if(p===s)return this.set(s,this.$M+r);if(p===f)return this.set(f,this.$y+r);if(p===u)return y(1);if(p===c)return y(7);var v=(d={},d[i]=e,d[a]=n,d[o]=t,d)[p]||1,m=this.$d.getTime()+r*v;return M.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=M.z(this),i=this.$H,a=this.$m,u=this.$M,c=n.weekdays,s=n.months,l=function(t,n,o,i){return t&&(t[n]||t(e,r))||o[n].slice(0,i)},f=function(t){return M.s(i%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:M.s(u+1,2,"0"),MMM:l(n.monthsShort,u,s,3),MMMM:l(s,u),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:M.s(i,2,"0"),h:f(1),hh:f(2),a:d(i,a,!0),A:d(i,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:o};return r.replace(y,(function(t,e){return e||p[t]||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,h){var p,y=M.p(d),v=_(r),m=(v.utcOffset()-this.utcOffset())*e,g=this-v,b=M.m(this,v);return b=(p={},p[f]=b/12,p[s]=b,p[l]=b/3,p[c]=(g-m)/6048e5,p[u]=(g-m)/864e5,p[a]=g/n,p[i]=g/e,p[o]=g/t,p)[y]||g,h?b:M.a(b)},m.daysInMonth=function(){return this.endOf(s).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),D=x.prototype;return _.prototype=D,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",u],["$M",s],["$y",f],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,x,_),t.$i=!0),_},_.locale=w,_.isDayjs=S,_.unix=function(t){return _(1e3*t)},_.en=$[b],_.Ls=$,_.p={},_}))},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return A}});var r=n(279),o=n.n(r),i=n(370),a=n.n(i),u=n(817),c=n.n(u);function s(t){try{return document.execCommand(t)}catch(e){return!1}}var l=function(t){var e=c()(t);return s("cut"),e},f=l;function d(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}var h=function(t,e){var n=d(t);e.container.appendChild(n);var r=c()(n);return s("copy"),n.remove(),r},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"===typeof t?n=h(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=h(t.value,e):(n=c()(t),s("copy")),n},y=p;function v(t){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}var m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==v(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?y(i,{container:r}):o?"cut"===n?f(o):y(o,{container:r}):void 0},g=m;function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function $(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&S(t.prototype,e),n&&S(t,n),t}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}function M(t,e){return M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},M(t,e)}function x(t){var e=T();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D(this,n)}}function D(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function k(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var C=function(t){_(n,t);var e=x(n);function n(t,r){var o;return $(this,n),o=e.call(this),o.resolveOptions(r),o.listenClick(t),o}return w(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===b(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=g({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return k("action",t)}},{key:"defaultTarget",value:function(t){var e=k("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return k("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return y(t,e)}},{key:"cut",value:function(t){return f(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(o()),A=C},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var i=a.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),o=n(438);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return u(t,e,n);if(r.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function u(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function c(t,e,n){return o(document.body,t,e,n)}t.exports=i},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},f71e:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("2b0e"),o=n("b311"),i=n.n(o);function a(){r["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})}function u(){r["default"].prototype.$message({message:"Copy failed",type:"error"})}function c(t,e){var n=new i.a(e.target,{text:function(){return t}});n.on("success",(function(){a(),n.destroy()})),n.on("error",(function(){u(),n.destroy()})),n.onClick(e)}}}]);
//# sourceMappingURL=chunk-73ce7b13.96144eae.js.map