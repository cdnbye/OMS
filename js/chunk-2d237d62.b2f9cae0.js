(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237d62"],{fd8f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"app-container"},[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("el-input",{staticStyle:{width:"350px","margin-right":"5px"},attrs:{placeholder:"worker pid, url or number"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e("template",{slot:"prepend"},[e("el-select",{staticStyle:{width:"110px"},attrs:{slot:"prepend",placeholder:"Select"},slot:"prepend",model:{value:t.action,callback:function(e){t.action=e},expression:"action"}},[e("el-option",{attrs:{label:"Restart",value:"restart"}}),e("el-option",{attrs:{label:"RestartAll",value:"restart_all"}}),e("el-option",{attrs:{label:"Stop",value:"stop"}}),e("el-option",{attrs:{label:"StopAll",value:"stop_all"}}),e("el-option",{attrs:{label:"Workers",value:"ping"}})],1)],1)],2),e("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.doAction()}}},[t._v(t._s(t.$t("common.ok")))])],1),e("vue-json-pretty",{attrs:{showIcon:"",showLineNumber:"",showDoubleQuotes:!1,data:t.jsonData}})],1)},o=[],r=(a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("456d"),a("ac6a"),a("c5f6"),a("28a5"),a("bc3a")),i=a.n(r),s=a("6be8"),l=a("76f1"),c=a.n(l);a("8a0d");function u(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=d(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return i=t.done,t},e:function(t){s=!0,r=t},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw r}}}}function d(t,e){if(t){if("string"===typeof t)return f(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var p={name:"AdminSeederStats",components:{VueJsonPretty:c.a},data:function(){return{loading:!1,url:"",accessToken:"",jsonData:{},action:"",value:""}},mounted:function(){var t=this,e=this.$route.query,a=e.url,n=e.accessToken;this.url=a,this.accessToken=n,this.getStats(),this.timer=setInterval((function(){t.getStats()}),2e4)},methods:{doAction:function(){var t=this;if(this.loading=!0,"restart"===this.action||"stop"===this.action){var e,a=this.value.split(" ").filter((function(t){return!!t})).map((function(t){return Number(t)})),n=u(a);try{for(n.s();!(e=n.n()).done;){var o=e.value;i.a.post("".concat(this.url,"/").concat(this.action,"/").concat(o),{},{headers:{"X-Access-Token":this.accessToken||void 0}}).finally((function(){t.loading=!1}))}}catch(r){n.e(r)}finally{n.f()}}else"ping"===this.action?i.a.post("".concat(this.url,"/").concat(this.action),{workers:Number(this.value)},{headers:{"X-Access-Token":this.accessToken||void 0}}).finally((function(){t.loading=!1})):"restart_all"!==this.action&&"stop_all"!==this.action||i.a.post("".concat(this.url,"/").concat(this.action),{},{headers:{"X-Access-Token":this.accessToken||void 0}}).finally((function(){t.loading=!1}));this.value="",this.action=""},getStats:function(){var t=this;this.loading=!0,i.a.get(this.url+"/stats",{headers:{"X-Access-Token":this.accessToken||void 0}}).then((function(e){var a=e.data,n=a.master,o=a.workers;n.memory=t.formatValue(n.memory),n.averageUplink&&(n.averageUplink="".concat(Math.round(n.averageUplink),"Mbps")),o&&Object.keys(o).forEach((function(e){var a=o[e];a.seedFrom&&(a.seedFrom=new Date(a.seedFrom),a.uploaded=t.formatValue(a.uploaded),a.downloaded=t.formatValue(a.downloaded)),a.averageUplink&&(a.averageUplink="".concat(Math.round(a.averageUplink),"Mbps")),a.diskCacheSize&&(a.diskCacheSize=t.formatValue(a.diskCacheSize)),a.memory&&(a.memory=t.formatValue(a.memory))})),t.jsonData=a})).finally((function(){t.loading=!1}))},formatValue:function(t){var e=Object(s["c"])(t);return"".concat(e.num).concat(e.unit)}},beforeDestroy:function(){clearInterval(this.timer)}},h=p,v=a("2877"),m=Object(v["a"])(h,n,o,!1,null,"02c8db6d",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d237d62.b2f9cae0.js.map