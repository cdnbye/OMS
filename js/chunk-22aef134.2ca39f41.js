(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22aef134"],{2940:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c}));var a=n("b775");function r(t,e){return Object(a["a"])({url:"global/num?start_ts=".concat(t,"&end_ts=").concat(e,"&gran=5"),method:"get"})}function i(t,e,n){return n||(n=1440),Object(a["a"])({url:"global/p2p?start_ts=".concat(t,"&end_ts=").concat(e,"&gran=").concat(n),method:"get"})}function o(t,e,n){return n||(n=1440),Object(a["a"])({url:"global/http?start_ts=".concat(t,"&end_ts=").concat(e,"&gran=").concat(n),method:"get"})}function c(t,e,n){return n||(n=1440),Object(a["a"])({url:"global/share?start_ts=".concat(t,"&end_ts=").concat(e,"&gran=").concat(n),method:"get"})}},"44e8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e(t.currentRole,{tag:"component"})},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("bd86")),o=n("2f62"),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("DataPicker",{attrs:{date:t.date,radio:t.radio},on:{selectChange:t.selectChange,dataChange:t.dataChange}}),e("LineChart",{attrs:{"chart-data":t.onlineData,option:t.option}})],1)},s=[],u=n("5a0c"),h=n.n(u),f=n("2940"),l=n("f87d"),d=n("e702"),p={name:"Online",components:{DataPicker:l["a"],LineChart:d["a"]},data:function(){return{date:[h()().subtract(1,"hour"),h()()],radio:"hour",onlineData:{online:[]},option:{xData:[],yName:"在线人数"}}},mounted:function(){this.getData()},methods:{dataChange:function(t){this.getData(this.getTimeStamp(t[0]),this.getTimeStamp(t[1]))},selectChange:function(t){switch(t){case"hour":this.getData(this.getTimeStamp(h()().subtract(1,"hour")),this.getTimeStamp(h()()));break;case"day":this.getData(this.getTimeStamp(h()().subtract(1,"day")),this.getTimeStamp(h()()));break;case"week":this.getData(this.getTimeStamp(h()().subtract(1,"week")),this.getTimeStamp(h()()));break;case"month":this.getData(this.getTimeStamp(h()().subtract(1,"month")),this.getTimeStamp(h()()));break;default:break}},formatData:function(t){var e=this,n=t.data.list;this.option.xData=[],this.onlineData.online=[],n.forEach((function(t){e.option.xData.push(h()(1e3*t.ts).format("MM-DD HH:mm")),e.onlineData.online.push(t.value)}))},getTimeStamp:function(t){return h()(t).unix()},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getTimeStamp(this.date[0]),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getTimeStamp(this.date[1]);Object(f["b"])(e,n).then((function(e){t.formatData(e)}))}}},m=p,g=n("2877"),b=Object(g["a"])(m,c,s,!1,null,null,null),v=b.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[e("DataPicker",{attrs:{date:t.date,radio:t.radio},on:{selectChange:t.selectChange,dataChange:t.dataChange}}),e("LineChart",{attrs:{"chart-data":t.onlineData,option:t.option}}),e("NoBindTip"),e("el-button",{staticStyle:{float:"left"},attrs:{type:"primary"}},[e("json-excel",{attrs:{fetch:t.dataForExcel,type:"csv",name:t.excelName}},[t._v("\n      Export Excel\n    ")])],1)],1)},y=[],O=(n("ac4d"),n("8a81"),n("1c4c"),n("7f7f"),n("6b54"),n("768b")),_=(n("5df3"),n("f400"),n("96cf"),n("3b8d")),w=n("19f1"),S=n("9a09"),j=n("f2d9");function k(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=T(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function T(t,e){if(t){if("string"===typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P={name:"Online",components:{DataPicker:l["a"],LineChart:d["a"],NoBindTip:S["a"],JsonExcel:j["a"]},data:function(){return{date:[h()().subtract(1,"hour"),h()()],radio:"hour",onlineData:{online:[]},option:{xData:[],yName:"online"},excelName:""}},computed:E({},Object(o["b"])(["currentDomain"])),mounted:function(){this.$store.dispatch("toggleSwitchDomain",!0),this.currentDomain.id&&this.getData()},beforeDestroy:function(){this.$store.dispatch("toggleSwitchDomain",!1)},watch:{currentDomain:function(){this.getData()}},methods:{dataChange:function(t){t&&(this.date[0]=t[0],this.date[1]=t[1],this.getData(this.getTimeStamp(this.date[0]),this.getTimeStamp(this.date[1])))},selectChange:function(t){switch(this.date[1]=h()(),t){case"hour":this.date[0]=h()().subtract(1,"hour"),this.getData(this.getTimeStamp(this.date[0]),this.getTimeStamp(this.date[1]));break;case"day":this.date[0]=h()().subtract(1,"day"),this.getData(this.getTimeStamp(this.date[0]),this.getTimeStamp(this.date[1]));break;case"week":this.date[0]=h()().subtract(1,"week"),this.getData(this.getTimeStamp(this.date[0]),this.getTimeStamp(this.date[1]));break;case"month":this.date[0]=h()().subtract(1,"month"),this.getData(this.getTimeStamp(this.date[0]),this.getTimeStamp(this.date[1]));break;default:break}},formatData:function(t){var e=this,n=t.data.list;this.option.xData=[],this.onlineData.online=[],n.forEach((function(t){e.option.xData.push(h()(1e3*t.ts).format("MM-DD HH:mm")),e.onlineData.online.push(t.value)}))},getTimeStamp:function(t){return h()(t).unix()},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getTimeStamp(this.date[0]),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getTimeStamp(this.date[1]);Object(w["b"])(this.currentDomain.uid,this.currentDomain.id,e,n).then((function(e){t.formatData(e)}))},dataForExcel:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r,i,o,c,s,u,f,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["b"])(this.currentDomain.uid,this.currentDomain.id,this.getTimeStamp(this.date[0]),this.getTimeStamp(this.date[1]));case 2:e=t.sent,n=e.data.list,a=new Map,n.forEach((function(t){var e=h()(1e3*t.ts).format("MM-DD"),n=a.get(e);(!n||n<t.value)&&a.set(e,t.value)})),r=[],i=0,o=0,c=k(a.entries());try{for(c.s();!(s=c.n()).done;)u=Object(O["a"])(s.value,2),f=u[0],l=u[1],r.push({Date:f,Value:l}),i+=l,0!==l&&o++}catch(p){c.e(p)}finally{c.f()}return d=0,o>0&&(d=Math.round(i/o)),r.push({Date:"Avg",Value:d}),this.excelName="Online Viewers Statistics.csv",t.abrupt("return",r);case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},M=P,N=Object(g["a"])(M,D,y,!1,null,null,null),A=N.exports;function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var H={name:"Online",components:{adminOnline:v,userOnline:A},data:function(){return{currentRole:"adminOnline"}},computed:R({},Object(o["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="userOnline")}},I=H,L=Object(g["a"])(I,a,r,!1,null,null,null);e["default"]=L.exports},b39a:function(t,e,n){var a=n("d3f4");t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,n){"use strict";var a=n("86cc").f,r=n("2aeb"),i=n("dcbc"),o=n("9b43"),c=n("f605"),s=n("4a59"),u=n("01f9"),h=n("d53b"),f=n("7a56"),l=n("9e1e"),d=n("67ab").fastKey,p=n("b39a"),m=l?"_s":"size",g=function(t,e){var n,a=d(e);if("F"!==a)return t._i[a];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var h=t((function(t,a){c(t,h,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=a&&s(a,n,t[u],t)}));return i(h.prototype,{clear:function(){for(var t=p(this,e),n=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=p(this,e),a=g(n,t);if(a){var r=a.n,i=a.p;delete n._i[a.i],a.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==a&&(n._f=r),n._l==a&&(n._l=i),n[m]--}return!!a},forEach:function(t){p(this,e);var n,a=o(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){a(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!g(p(this,e),t)}}),l&&a(h.prototype,"size",{get:function(){return p(this,e)[m]}}),h},def:function(t,e,n){var a,r,i=g(t,e);return i?i.v=n:(t._l=i={i:r=d(e,!0),k:e,v:n,p:a=t._l,n:void 0,r:!1},t._f||(t._f=i),a&&(a.n=i),t[m]++,"F"!==r&&(t._i[r]=i)),t},getEntry:g,setStrong:function(t,e,n){u(t,e,(function(t,n){this._t=p(t,e),this._k=n,this._l=void 0}),(function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?h(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,h(1))}),n?"entries":"values",!n,!0),f(e)}}},e0b8:function(t,e,n){"use strict";var a=n("7726"),r=n("5ca1"),i=n("2aba"),o=n("dcbc"),c=n("67ab"),s=n("4a59"),u=n("f605"),h=n("d3f4"),f=n("79e5"),l=n("5cc5"),d=n("7f20"),p=n("5dbc");t.exports=function(t,e,n,m,g,b){var v=a[t],D=v,y=g?"set":"add",O=D&&D.prototype,_={},w=function(t){var e=O[t];i(O,t,"delete"==t||"has"==t?function(t){return!(b&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!h(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof D&&(b||O.forEach&&!f((function(){(new D).entries().next()})))){var S=new D,j=S[y](b?{}:-0,1)!=S,k=f((function(){S.has(1)})),T=l((function(t){new D(t)})),x=!b&&f((function(){var t=new D,e=5;while(e--)t[y](e,e);return!t.has(-0)}));T||(D=e((function(e,n){u(e,D,t);var a=p(new v,e,D);return void 0!=n&&s(n,g,a[y],a),a})),D.prototype=O,O.constructor=D),(k||x)&&(w("delete"),w("has"),g&&w("get")),(x||j)&&w(y),b&&O.clear&&delete O.clear}else D=m.getConstructor(e,t,g,y),o(D.prototype,n),c.NEED=!0;return d(D,t),_[t]=D,r(r.G+r.W+r.F*(D!=v),_),b||m.setStrong(D,t,g),D}},f400:function(t,e,n){"use strict";var a=n("c26b"),r=n("b39a"),i="Map";t.exports=n("e0b8")(i,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=a.getEntry(r(this,i),t);return e&&e.v},set:function(t,e){return a.def(r(this,i),0===t?0:t,e)}},a,!0)}}]);
//# sourceMappingURL=chunk-22aef134.2ca39f41.js.map