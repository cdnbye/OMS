(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4333a68"],{"22bf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.payLoading,expression:"payLoading"}],style:"mobile"===t.device?{}:{padding:"30px 250px"},attrs:{"element-loading-text":t.$t("package.payLoadingTip")}},[e("el-table",{attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{align:"left",prop:"subject",label:t.$t("package.packageInfo")}}),e("el-table-column",{attrs:{align:"left",prop:"price",label:t.$t("package.unitPrice")}}),e("el-table-column",{attrs:{align:"left",prop:"amount",label:t.$t("package.quantity")}}),e("el-table-column",{attrs:{align:"left",prop:"total",label:t.$t("package.expense")}})],1),e("div",{staticClass:"pay-submit"},[e("el-card",{attrs:{shadow:"never"}},[e("div",[e("div",{staticClass:"cost"},[e("span",[t._v(t._s(t.$t("package.total")))]),e("span",{staticClass:"price"},[e("em",[t._v(" "+t._s(t.totalPrice))]),e("span",[t._v(t._s("CNY"===t.currency?" ￥":" $"))])])]),e("div",{staticClass:"payMethod"},["CNY"===t.currency?e("img",{attrs:{src:t.payImg.ali},on:{click:t.alipayClick}}):t._e(),"CNY"!==t.currency?e("img",{attrs:{src:t.payImg.paypal},on:{click:t.paypalClick}}):t._e(),"CNY"!==t.currency&&t.showCrypto?e("img",{attrs:{src:t.payImg.coinbase},on:{click:t.coinbaseClick}}):t._e()])])])],1),e("el-dialog",{attrs:{visible:t.cantBuyVisible,width:"mobile"===t.device?"80%":"30%"},on:{"update:visible":function(e){t.cantBuyVisible=e}}},[e("span",[t._v(t._s(t.$t("package.systemError")))]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.cantBuyVisible=!1}}},[t._v(t._s(t.$t("common.ok")))])],1)])],1)},n=[],c=(a("8e6e"),a("456d"),a("ac6a"),a("75fc")),o=a("bd86"),i=a("2f62"),u=a("66e6");a("5d2d"),a("267e");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"OrderDetail",data:function(){return{showCrypto:!0,payImg:{ali:a("2d67"),paypal:a("9a25"),coinbase:a("d615")},payLoading:!1,cantBuyVisible:!1,tableData:[],currency:"",totalPrice:0,orderID:0}},computed:s({},Object(i["b"])(["device"])),mounted:function(){this.$route.query.currency?this.formatData():this.$router.push("/shopping/package")},methods:{formatData:function(){try{this.tableData=Object(c["a"])(JSON.parse(this.$route.query.buyData)),this.tableData.forEach((function(t){t.total=t.amount?(t.amount*t.price).toFixed(2):t.price.toFixed(2),t.amount||(t.amount=1)}))}catch(t){console.error(t),this.$router.push("/")}this.currency=this.$route.query.currency,this.totalPrice=this.$route.query.totalPrice,this.orderID=this.$route.query.orderID},paypalClick:function(){this.handleFetchPayUrl("paypal")},alipayClick:function(){this.handleFetchPayUrl("alipay")},coinbaseClick:function(){this.handleFetchPayUrl("crypto")},handleFetchPayUrl:function(t){var e=this;this.payLoading=!0,Object(u["h"])(t,this.orderID,this.device).then((function(t){t.data.available?window.location.href="".concat(t.data.pay_url):(e.payLoading=!1,e.cantBuyVisible=!0)})).catch((function(t){e.payLoading=!1,console.log(t)}))}}},d=p,y=(a("77c8"),a("2877")),b=Object(y["a"])(d,r,n,!1,null,"5fda63af",null);e["default"]=b.exports},"2d67":function(t,e,a){t.exports=a.p+"img/ali_pay.546a525b.png"},"66e6":function(t,e,a){"use strict";a.d(e,"g",(function(){return n})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return o})),a.d(e,"j",(function(){return i})),a.d(e,"h",(function(){return u})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return p})),a.d(e,"i",(function(){return d})),a.d(e,"d",(function(){return y}));var r=a("b775");function n(t){var e="goods/flow_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(r["a"])({url:e,method:"get"})}function c(t){var e="goods/monthly_packet";return t&&(e="".concat(e,"?uid=").concat(t)),Object(r["a"])({url:e,method:"get"})}function o(t,e){return Object(r["a"])({url:"order/user_id/".concat(t),method:"post",data:e})}function i(t){return Object(r["a"])({url:"charge/crypto/trade",method:"post",data:t})}function u(t,e,a){var n=location.origin+location.pathname,c="mobile"===a?"&mobile=true":"";return Object(r["a"])({url:"charge/".concat(t,"/pay?origin=").concat(n,"&order_id=").concat(e).concat(c),method:"get"})}function l(t){return Object(r["a"])({url:"charge/alipay/query?order_id=".concat(t),method:"get"})}function s(t,e,a){return Object(r["a"])({url:"charge/paypal/query?order_id=".concat(t,"&payment_id=").concat(e,"&payer_id=").concat(a),method:"get"})}function p(t,e){return Object(r["a"])({url:"user/user_id/".concat(t,"/checkin"),method:"post",data:e})}function d(t){return Object(r["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"get"})}function y(t,e){return Object(r["a"])({url:"user/user_id/".concat(t,"/invoice"),method:"post",data:e})}},"77c8":function(t,e,a){"use strict";a("9303")},9303:function(t,e,a){},"9a25":function(t,e,a){t.exports=a.p+"img/paypal.413b73aa.jpeg"},d615:function(t,e,a){t.exports=a.p+"img/coinbase.68854eb4.png"}}]);
//# sourceMappingURL=chunk-b4333a68.feaa0673.js.map