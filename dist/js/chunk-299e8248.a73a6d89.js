(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-299e8248"],{"19d1":function(t,e,c){"use strict";c("87a0")},"5dbc":function(t,e,c){var a=c("d3f4"),n=c("8b97").set;t.exports=function(t,e,c){var r,i=e.constructor;return i!==c&&"function"==typeof i&&(r=i.prototype)!==c.prototype&&a(r)&&n&&n(t,r),t}},"66e6":function(t,e,c){"use strict";c.d(e,"g",(function(){return n})),c.d(e,"f",(function(){return r})),c.d(e,"e",(function(){return i})),c.d(e,"j",(function(){return o})),c.d(e,"h",(function(){return s})),c.d(e,"a",(function(){return u})),c.d(e,"c",(function(){return l})),c.d(e,"b",(function(){return p})),c.d(e,"i",(function(){return d})),c.d(e,"d",(function(){return f}));var a=c("b775");function n(t){var e="goods/flow_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(a["a"])({url:e,method:"get"})}function r(t){var e="goods/monthly_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(a["a"])({url:e,method:"get"})}function i(t,e){return Object(a["a"])({url:"order/user_id/".concat(t),method:"post",data:e})}function o(t){return Object(a["a"])({url:"charge/crypto/trade",method:"post",data:t})}function s(t,e,c){var n=location.origin+location.pathname,r="mobile"===c?"&mobile=true":"";return Object(a["a"])({url:"charge/".concat(t,"/pay?origin=").concat(n,"&order_id=").concat(e).concat(r),method:"get"})}function u(t){return Object(a["a"])({url:"charge/alipay/query?order_id=".concat(t),method:"get"})}function l(t,e,c){return Object(a["a"])({url:"charge/paypal/query?order_id=".concat(t,"&payment_id=").concat(e,"&payer_id=").concat(c),method:"get"})}function p(t,e){return Object(a["a"])({url:"user/user_id/".concat(t,"/checkin"),method:"post",data:e})}function d(t){return Object(a["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"get"})}function f(t,e){return Object(a["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"post",data:e})}},"87a0":function(t,e,c){},"8b97":function(t,e,c){var a=c("d3f4"),n=c("cb7c"),r=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=c("9b43")(Function.call,c("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,c){return r(t,c),e?t.__proto__=c:a(t,c),t}}({},!1):void 0),check:r}},"9f54":function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"package",style:"mobile"===t.device?{}:{padding:"30px 120px"}},[e("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"info","show-icon":"",title:t.$t("package.packageSubTitle"),description:t.$t("package.packageSub")}}),t._l(t.packages,(function(c,a){return[e("el-row",{key:c.subject,style:a==t.packages.length-1?{"margin-bottom":"20px",visibility:"hidden"}:{"margin-bottom":"20px"}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"never","body-style":"mobile"===t.device?"padding: 20px 10px":""}},["CNY"===t.currency?[e("div",{staticClass:"container"},[e("div",{staticClass:"item-desc"},[e("em",{staticClass:"shop-card-em"},[t._v(t._s(c.traffic)+"TB")]),e("span",{staticClass:"shop-card-tips",style:c.original_price-c.price>0?{display:"inline-block"}:{display:"none"}},[t._v("\n                  立减 ￥ "+t._s((c.original_price-c.price).toFixed(2))+"\n                ")]),e("span",{staticClass:"shop-card-txt"},[t._v(t._s(c.customized?c.subject:"永久有效"))])]),e("div",{staticClass:"item-price"},[e("span",{staticClass:"price"},[e("span",[t._v("￥")]),e("em",[t._v(t._s(c.price))]),c.price!==c.original_price?e("s",[t._v("￥"+t._s(c.original_price))]):t._e()])]),e("div",{staticClass:"count"},[e("el-input-number",{attrs:{"controls-position":"right",size:"small",min:0},on:{change:function(e){return t.selectCountChange(e,c)}},model:{value:t.selectPackage.cn[a].amount,callback:function(e){t.$set(t.selectPackage.cn[a],"amount",e)},expression:"selectPackage.cn[index].amount"}})],1)])]:[e("div",{staticClass:"container"},[e("div",{staticClass:"item-desc"},[e("em",{staticClass:"shop-card-em"},[t._v(t._s(c.traffic)+"TB")]),e("span",{staticClass:"shop-card-tips",style:c.original_price-c.price>0?{display:"inline-block"}:{display:"none"}},[t._v("\n                  "+t._s(((c.original_price-c.price)/c.original_price*100).toFixed(1))+"% off\n                ")]),e("span",{staticClass:"shop-card-txt"})]),e("div",{staticClass:"item-price"},[e("span",{staticClass:"price"},[e("span",[t._v("$")]),e("em",[t._v(t._s(c.price))]),c.price!==c.original_price?e("s",[t._v("$"+t._s(c.original_price))]):t._e()])]),e("div",{staticClass:"count"},[e("el-input-number",{attrs:{"controls-position":"right",size:"small",min:0},on:{change:function(e){return t.selectCountChange(e,c)}},model:{value:t.selectPackage.en[a].amount,callback:function(e){t.$set(t.selectPackage.en[a],"amount",e)},expression:"selectPackage.en[index].amount"}})],1)])]],2)],1)],1)]})),e("div",{staticClass:"create-order"},[e("div",{staticClass:"buy"},[e("div",{staticClass:"total"},[e("div",{staticClass:"tip"},[t._v("\n          "+t._s(t.$t("package.totalTraffic"))+"\n        ")]),e("div",{staticClass:"total-traffic"},[e("em",[t._v(t._s(t.totalTraffic)+" "),e("span",{staticClass:"unit"},[t._v("TB")])])])]),e("div",{staticClass:"total"},[e("div",{staticClass:"tip"},[t._v("\n          "+t._s(t.$t("package.totalPrice"))+"\n        ")]),e("div",{staticClass:"total-price"},[e("em",[t._v(t._s(t.totalPrice)+" "),e("span",{staticClass:"unit"},[t._v(t._s("CNY"===t.currency?"RMB":"USD"))])])])])]),e("el-button",{attrs:{disabled:0==t.totalPrice,type:"warning"},on:{click:t.handleBuyClick}},[t._v(t._s(t.$t("package.createOrder")))])],1)],2)},n=[],r=(c("8e6e"),c("456d"),c("c5f6"),c("ac6a"),c("75fc")),i=c("bd86"),o=c("66e6"),s=c("2f62"),u=c("5f87");function l(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,a)}return c}function p(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?l(Object(c),!0).forEach((function(e){Object(i["a"])(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}var d={name:"Package",data:function(){return{currency:"",totalPrice:0,totalTraffic:0,packages:[],selectPackage:{cn:[],en:[]}}},mounted:function(){this.getPackageData()},computed:p({},Object(s["b"])(["device","language"])),methods:{getPackageData:function(){var t=this;Object(o["g"])(Object(u["a"])()).then((function(e){"zh"===t.language?(t.currency="CNY",t.packages=Object(r["a"])(e.data.list_cn),t.packages.push(p(p({},e.data.list_cn[0]),{},{subject:"hide"})),t.packages.forEach((function(e){t.selectPackage.cn.push(p(p({},e),{},{amount:0}))}))):(t.currency="USD",t.packages=Object(r["a"])(e.data.list_en),t.packages.push(p(p({},e.data.list_en[0]),{},{subject:"hide"})),t.packages.forEach((function(e){t.selectPackage.en.push(p(p({},e),{},{amount:0}))})))})).catch((function(t){console.log(t)}))},dialogClose:function(){this.$router.push("/")},selectCountChange:function(t,e){this.getTotalPrice()},getTotalPrice:function(){var t=0,e=0;this.selectPackage.cn.length>0?this.selectPackage.cn.forEach((function(c){c.amount>0&&(t+=c.price*c.amount,e+=c.traffic*c.amount)})):this.selectPackage.en.forEach((function(c){c.amount>0&&(t+=c.price*c.amount,e+=c.traffic*c.amount)})),this.totalPrice=t,this.totalTraffic=e},handleCreateOrder:function(){var t=this,e={price:Number(this.totalPrice),currency:this.currency,goods:[],goods_type:"CNY"===this.currency?"flow_packet_cn":"flow_packet_en",customized:!1},c="CNY"===this.currency?this.selectPackage.cn:this.selectPackage.en;e.goods=c.filter((function(t){return t.amount>0})),e.customized=e.goods.every((function(t){return t.customized})),Object(o["e"])(Object(u["a"])(),e).then((function(c){t.$router.push({name:"OrderDetail",query:{currency:t.currency,orderID:c.data.order_id,totalPrice:t.totalPrice,buyData:JSON.stringify(e.goods)}})})).catch((function(t){console.log(t)}))},handleBuyClick:function(){var t=this;this.$messageBox.confirm(this.$t("package.comfirmCreate"),{type:"info",distinguishCancelAndClose:!0,confirmButtonText:this.$t("common.ok"),cancelButtonText:this.$t("common.cancel")}).then((function(){t.handleCreateOrder()}))}}},f=d,g=(c("19d1"),c("2877")),h=Object(g["a"])(f,a,n,!1,null,"917d60da",null);e["default"]=h.exports},aa77:function(t,e,c){var a=c("5ca1"),n=c("be13"),r=c("79e5"),i=c("fdef"),o="["+i+"]",s="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),p=function(t,e,c){var n={},o=r((function(){return!!i[t]()||s[t]()!=s})),u=n[t]=o?e(d):i[t];c&&(n[c]=u),a(a.P+a.F*o,"String",n)},d=p.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},c5f6:function(t,e,c){"use strict";var a=c("7726"),n=c("69a8"),r=c("2d95"),i=c("5dbc"),o=c("6a99"),s=c("79e5"),u=c("9093").f,l=c("11e9").f,p=c("86cc").f,d=c("aa77").trim,f="Number",g=a[f],h=g,_=g.prototype,m=r(c("2aeb")(_))==f,b="trim"in String.prototype,v=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var c,a,n,r=e.charCodeAt(0);if(43===r||45===r){if(c=e.charCodeAt(2),88===c||120===c)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var i,s=e.slice(2),u=0,l=s.length;u<l;u++)if(i=s.charCodeAt(u),i<48||i>n)return NaN;return parseInt(s,a)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,c=this;return c instanceof g&&(m?s((function(){_.valueOf.call(c)})):r(c)!=f)?i(new h(v(e)),c,g):v(e)};for(var y,k=c("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)n(h,y=k[C])&&!n(g,y)&&p(g,y,l(h,y));g.prototype=_,_.constructor=g,c("2aba")(a,f,g)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-299e8248.a73a6d89.js.map