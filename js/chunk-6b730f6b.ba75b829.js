(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b730f6b"],{"040d":function(t,e,a){},"5dbc":function(t,e,a){var c=a("d3f4"),n=a("8b97").set;t.exports=function(t,e,a){var r,i=e.constructor;return i!==a&&"function"==typeof i&&(r=i.prototype)!==a.prototype&&c(r)&&n&&n(t,r),t}},"66e6":function(t,e,a){"use strict";a.d(e,"g",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"e",(function(){return i})),a.d(e,"j",(function(){return o})),a.d(e,"h",(function(){return s})),a.d(e,"a",(function(){return u})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return p})),a.d(e,"i",(function(){return d})),a.d(e,"d",(function(){return f}));var c=a("b775");function n(t){var e="goods/flow_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(c["a"])({url:e,method:"get"})}function r(t){var e="goods/monthly_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(c["a"])({url:e,method:"get"})}function i(t,e){return Object(c["a"])({url:"order/user_id/".concat(t),method:"post",data:e})}function o(t){return Object(c["a"])({url:"charge/crypto/trade",method:"post",data:t})}function s(t,e,a){var n=location.origin+location.pathname,r="mobile"===a?"&mobile=true":"";return Object(c["a"])({url:"charge/".concat(t,"/pay?origin=").concat(n,"&order_id=").concat(e).concat(r),method:"get"})}function u(t){return Object(c["a"])({url:"charge/alipay/query?order_id=".concat(t),method:"get"})}function l(t,e,a){return Object(c["a"])({url:"charge/paypal/query?order_id=".concat(t,"&payment_id=").concat(e,"&payer_id=").concat(a),method:"get"})}function p(t,e){return Object(c["a"])({url:"user/user_id/".concat(t,"/checkin"),method:"post",data:e})}function d(t){return Object(c["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"get"})}function f(t,e){return Object(c["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"post",data:e})}},"8b97":function(t,e,a){var c=a("d3f4"),n=a("cb7c"),r=function(t,e){if(n(t),!c(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,c){try{c=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),c(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return r(t,a),e?t.__proto__=a:c(t,a),t}}({},!1):void 0),check:r}},"9f54":function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"package",style:"mobile"===t.device?{}:{padding:"30px 120px"}},[e("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"info","show-icon":"",title:t.$t("package.packageSubTitle"),description:t.$t("package.packageSub")}}),t._l(t.packages,(function(a,c){return[e("el-row",{key:a.subject,style:c==t.packages.length-1?{"margin-bottom":"20px",visibility:"hidden"}:{"margin-bottom":"20px"}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"never","body-style":"mobile"===t.device?"padding: 20px 10px":""}},["CNY"===t.currency?[e("div",{staticClass:"container"},[e("div",{staticClass:"item-desc"},[e("em",{staticClass:"shop-card-em"},[t._v(t._s(a.traffic)+"TB")]),e("span",{staticClass:"shop-card-tips",style:a.original_price-a.price>0?{display:"inline-block"}:{display:"none"}},[t._v("\n                  立减 ￥ "+t._s((a.original_price-a.price).toFixed(2))+"\n                ")]),e("span",{staticClass:"shop-card-txt"},[t._v(t._s(a.customized?a.subject:"永久有效"))])]),e("div",{staticClass:"item-price"},[e("span",{staticClass:"price"},[e("span",[t._v("￥")]),e("em",[t._v(t._s(a.price))]),a.price!==a.original_price?e("s",[t._v("￥"+t._s(a.original_price))]):t._e()])]),e("div",{staticClass:"count"},[e("el-input-number",{attrs:{"controls-position":"right",size:"small",min:0},on:{change:function(e){return t.selectCountChange(e,a)}},model:{value:t.selectPackage.cn[c].amount,callback:function(e){t.$set(t.selectPackage.cn[c],"amount",e)},expression:"selectPackage.cn[index].amount"}})],1)])]:[e("div",{staticClass:"container"},[e("div",{staticClass:"item-desc"},[e("em",{staticClass:"shop-card-em"},[t._v(t._s(a.traffic)+"TB")]),e("span",{staticClass:"shop-card-tips",style:a.original_price-a.price>0?{display:"inline-block"}:{display:"none"}},[t._v("\n                  "+t._s(((a.original_price-a.price)/a.original_price*100).toFixed(1))+"% off\n                ")]),e("span",{staticClass:"shop-card-txt"})]),e("div",{staticClass:"item-price"},[e("span",{staticClass:"price"},[e("span",[t._v("$")]),e("em",[t._v(t._s(a.price))]),a.price!==a.original_price?e("s",[t._v("$"+t._s(a.original_price))]):t._e()])]),e("div",{staticClass:"count"},[e("el-input-number",{attrs:{"controls-position":"right",size:"small",min:0},on:{change:function(e){return t.selectCountChange(e,a)}},model:{value:t.selectPackage.en[c].amount,callback:function(e){t.$set(t.selectPackage.en[c],"amount",e)},expression:"selectPackage.en[index].amount"}})],1)])]],2)],1)],1)]})),e("div",{staticClass:"create-order"},[e("div",{staticClass:"buy"},[e("div",{staticClass:"total"},[e("div",{staticClass:"tip"},[t._v("\n          "+t._s(t.$t("package.totalTraffic"))+"\n        ")]),e("div",{staticClass:"total-traffic"},[e("em",[t._v(t._s(t.totalTraffic)+" "),e("span",{staticClass:"unit"},[t._v("TB")])])])]),e("div",{staticClass:"total"},[e("div",{staticClass:"tip"},[t._v("\n          "+t._s(t.$t("package.totalPrice"))+"\n        ")]),e("div",{staticClass:"total-price"},[e("em",[t._v(t._s(t.realPrice)+" "),e("span",{staticClass:"unit"},[t._v(t._s("CNY"===t.currency?"RMB":"USD"))])])])])]),e("el-button",{attrs:{disabled:0===t.totalPrice,type:"warning"},on:{click:t.handleBuyClick}},[t._v(t._s(t.$t("package.createOrder")))]),t.balance>0?e("el-checkbox",{staticStyle:{"margin-left":"10px"},attrs:{disabled:0===t.totalPrice},on:{change:t.useBalanceChanged},model:{value:t.useBalance,callback:function(e){t.useBalance=e},expression:"useBalance"}},[t._v("\n      "+t._s(t.$t("package.useBalance"))+" ("+t._s(t.balance)+")\n    ")]):t._e()],1)],2)},n=[],r=(a("8e6e"),a("456d"),a("ac6a"),a("75fc")),i=(a("c5f6"),a("bd86")),o=a("66e6"),s=a("2f62"),u=a("5f87");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,c)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"Package",data:function(){return{useBalance:!1,realPrice:0,balance:0,currency:"",totalPrice:0,totalTraffic:0,packages:[],selectPackage:{cn:[],en:[]}}},mounted:function(){this.getPackageData()},computed:p({},Object(s["b"])(["device","language"])),methods:{useBalanceChanged:function(){this.useBalance?this.balance>=this.totalPrice?this.realPrice=0:this.realPrice=Number((this.totalPrice-this.balance).toFixed(1)):this.realPrice=this.totalPrice},getPackageData:function(){var t=this;Object(o["g"])(Object(u["a"])()).then((function(e){var a=e.data;"zh"===t.language?(t.currency="CNY",t.balance=a.balance_cny,t.packages=Object(r["a"])(a.list_cn),t.packages.push(p(p({},a.list_cn[0]),{},{subject:"hide"})),t.packages.forEach((function(e){t.selectPackage.cn.push(p(p({},e),{},{amount:0}))}))):(t.currency="USD",t.balance=a.balance_usd,t.packages=Object(r["a"])(a.list_en),t.packages.push(p(p({},a.list_en[0]),{},{subject:"hide"})),t.packages.forEach((function(e){t.selectPackage.en.push(p(p({},e),{},{amount:0}))})))})).catch((function(t){console.log(t)}))},dialogClose:function(){this.$router.push("/")},selectCountChange:function(t,e){this.getTotalPrice()},getTotalPrice:function(){var t=0,e=0;this.selectPackage.cn.length>0?this.selectPackage.cn.forEach((function(a){a.amount>0&&(t+=a.price*a.amount,e+=a.traffic*a.amount)})):this.selectPackage.en.forEach((function(a){a.amount>0&&(t+=a.price*a.amount,e+=a.traffic*a.amount)})),this.totalPrice=t,this.realPrice=t,this.totalTraffic=e},handleCreateOrder:function(){var t=this,e={price:Number(this.totalPrice),currency:this.currency,goods:[],goods_type:"CNY"===this.currency?"flow_packet_cn":"flow_packet_en",customized:!1,balance_used:this.totalPrice-this.realPrice},a="CNY"===this.currency?this.selectPackage.cn:this.selectPackage.en;e.goods=a.filter((function(t){return t.amount>0})),e.customized=e.goods.every((function(t){return t.customized})),Object(o["e"])(Object(u["a"])(),e).then((function(a){a.data.finished?t.$router.push({path:"/",query:{is_payed:!0}}):t.$router.push({name:"OrderDetail",query:{currency:t.currency,orderID:a.data.order_id,totalPrice:t.realPrice,buyData:JSON.stringify(e.goods)}})})).catch((function(t){console.log(t)}))},handleBuyClick:function(){var t=this;this.$messageBox.confirm(this.$t("package.comfirmCreate"),{type:"info",distinguishCancelAndClose:!0,confirmButtonText:this.$t("common.ok"),cancelButtonText:this.$t("common.cancel")}).then((function(){t.handleCreateOrder()}))}}},f=d,h=(a("b5da"),a("2877")),g=Object(h["a"])(f,c,n,!1,null,"d3bd5e74",null);e["default"]=g.exports},aa77:function(t,e,a){var c=a("5ca1"),n=a("be13"),r=a("79e5"),i=a("fdef"),o="["+i+"]",s="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),p=function(t,e,a){var n={},o=r((function(){return!!i[t]()||s[t]()!=s})),u=n[t]=o?e(d):i[t];a&&(n[a]=u),c(c.P+c.F*o,"String",n)},d=p.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},b5da:function(t,e,a){"use strict";a("040d")},c5f6:function(t,e,a){"use strict";var c=a("7726"),n=a("69a8"),r=a("2d95"),i=a("5dbc"),o=a("6a99"),s=a("79e5"),u=a("9093").f,l=a("11e9").f,p=a("86cc").f,d=a("aa77").trim,f="Number",h=c[f],g=h,b=h.prototype,_=r(a("2aeb")(b))==f,m="trim"in String.prototype,v=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():d(e,3);var a,c,n,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:c=2,n=49;break;case 79:case 111:c=8,n=55;break;default:return+e}for(var i,s=e.slice(2),u=0,l=s.length;u<l;u++)if(i=s.charCodeAt(u),i<48||i>n)return NaN;return parseInt(s,c)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof h&&(_?s((function(){b.valueOf.call(a)})):r(a)!=f)?i(new g(v(e)),a,h):v(e)};for(var y,k=a("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)n(g,y=k[C])&&!n(h,y)&&p(h,y,l(g,y));h.prototype=b,b.constructor=h,a("2aba")(c,f,h)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-6b730f6b.ba75b829.js.map