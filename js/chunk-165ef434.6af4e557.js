(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-165ef434"],{"284a":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return u}));var r=n("b775");function o(){return Object(r["a"])({url:"global/livetime",method:"get"})}function a(){return Object(r["a"])({url:"global/overall",method:"get"})}function c(t,e){var n="global/num?type=".concat(t);return e&&e.country&&(n="".concat(n,"&country=").concat(e.country)),Object(r["a"])({url:n,method:"get"})}function i(t,e){var n="global/channel?page=".concat(t,"&page_size=").concat(e);return Object(r["a"])({url:n,method:"get"})}function u(t){var e="global/channel/split";return Object(r["a"])({url:e,method:"post",data:t})}},"417d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"app-container"},[e(t.currentRole,{tag:"component",attrs:{countryData:t.countryData,total:t.total}})],1)},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("bd86")),c=n("2f62"),i=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("vuevectormap",{ref:"jvm",attrs:{width:"100%",height:"850px",zoomButtons:!1,markers:t.markers,markerStyle:t.markerStyle,visualizeData:t.visualizeData},on:{loaded:t.loaded,regionTooltipShow:t.regionTooltipShow}})],1)},u=[],l=(n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("7f7f"),n("c5f6"),n("5d2d")),s=n("267e");function d(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=f(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function f(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p={name:"WorldMap",props:{countryData:{type:Array,required:!0},total:{type:Number,required:!0}},data:function(){return{markerStyle:{initial:{fill:"#ff4551"}},values:{}}},computed:{markers:function(){var t=Object(l["a"])(s["c"]),e="Tracker";return"p1"===t?[{name:e,coords:[50.11,8.682]}]:"p3"===t?[{name:e,coords:[22.319,114.169]}]:"p2"===t?[{name:e,coords:[39.046,-77.49]}]:[]},visualizeData:function(){var t,e=d(this.countryData);try{for(e.s();!(t=e.n()).done;){var n=t.value,r=n.name,o=n.value;this.values[r]=o}}catch(a){e.e(a)}finally{e.f()}return{scale:["#d6dbe2","#0b51d2"],values:this.values}}},mounted:function(){this.map=this.$refs.jvm.map},beforeDestroy:function(){this._map=null,window.removeEventListener("resize",this.resize)},methods:{resize:function(t){this._map&&this._map.updateSize()},loaded:function(t){this._map=t,window.addEventListener("resize",this.resize)},regionTooltipShow:function(t,e,n){if(this.values[n]&&0!==this.total){var r=this.values[n];e.text('<div style="text-align: center"><p>'.concat(e.text(),": ").concat(r,"</p>")+"<p>".concat((r/this.total*100).toFixed(2),"%</p></div>"),!0)}}}},m=p,b=n("2877"),v=Object(b["a"])(m,i,u,!1,null,null,null),y=v.exports,g=n("8595"),O=n("284a"),j=n("5f87");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={name:"World",components:{WorldMap:y},data:function(){return{currentRole:"",loading:!1,countryData:[],total:0}},mounted:function(){this.$route.meta.global||this.$store.dispatch("toggleSwitchDomain",!0),this.fetchData()},beforeDestroy:function(){this.$store.dispatch("toggleSwitchDomain",!1)},watch:{currentDomain:function(){this.currentRole="",this.countryData=[],this.total=0,this.fetchData()}},computed:D({},Object(c["b"])(["roles","currentDomain"])),methods:{fetchData:function(){var t=this;this.loading=!0,this.roles.includes("admin")?Object(O["b"])("country").then((function(e){var n=e.data;n&&(t.total=n.total,t.countryData=n.data,t.loading=!1,t.currentRole="WorldMap")})).catch((function(e){console.log(e),t.loading=!1})):Object(g["b"])(Object(j["a"])(),this.$route.meta.global?0:this.currentDomain.id,"country").then((function(e){var n=e.data;n&&(t.total=n.total,n.data&&(t.countryData=n.data),t.loading=!1,t.currentRole="WorldMap")})).catch((function(e){console.log(e),t.loading=!1}))}}},S=_,z=Object(b["a"])(S,r,o,!1,null,null,null);e["default"]=z.exports},8595:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return i}));var r=n("b775");function o(t,e,n){var o="user/user_id/".concat(t,"/domain/domain_id/").concat(e);return n&&(o="".concat(o,"?host_id=").concat(n)),Object(r["a"])({url:o,method:"get"})}function a(t,e,n,o,a){var c="user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/num?type=").concat(n);return o&&(c="".concat(c,"&host_id=").concat(o)),a&&(c="".concat(c,"&lang=").concat(a)),Object(r["a"])({url:c,method:"get"})}function c(t,e,n,o){var a="user/user_id/".concat(t,"/domain/domain_id/").concat(e,"/num?type=").concat(n);return o&&(a="".concat(a,"&country=").concat(o)),Object(r["a"])({url:a,method:"get"})}function i(t,e,n){var o="user/user_id/".concat(t,"/channel?page=").concat(e,"&page_size=").concat(n);return Object(r["a"])({url:o,method:"get"})}}}]);