(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea687690"],{"1c1b":function(e,t,a){},"1f85":function(e,t,a){"use strict";a("1c1b")},a9d0:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"package",style:"mobile"===e.device?{}:{padding:"30px 120px"}},[t("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"info","show-icon":"",title:e.$t("package.packageSubTitle"),description:e.$t("package.monthlyPackageSub")}}),t("el-dialog",{attrs:{title:e.$t("package.confirmCreate"),visible:e.dialogVisible,width:"mobile"===e.device?"80%":"40%",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.subject.upgrade?e._e():[t("p",[e._v(e._s(e.$t("order.packageName"))+": "+e._s(e.subject.subject))]),t("p",[e._v(e._s(e.$t("package.totalMonths"))+": "+e._s(e.subject.amount))]),t("p",[e._v(e._s(e.$t("package.totalPrice"))+": "+e._s(e.totalPriceDisplay))])],e.balance>0?t("el-checkbox",{attrs:{disabled:0===e.totalPrice},model:{value:e.useBalance,callback:function(t){e.useBalance=t},expression:"useBalance"}},[e._v("\n      "+e._s(e.$t("package.useBalance"))+" ("+e._s(e.balance)+")\n    ")]):e._e(),t("el-checkbox",{model:{value:e.autoRenew,callback:function(t){e.autoRenew=t},expression:"autoRenew"}},[e._v("\n      "+e._s(e.$t("package.autoRenew"))+"\n    ")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(e._s(e.$t("common.cancel")))]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleBuy}},[e._v(e._s(this.$t("common.ok")))])],1)],2),e._l(e.packages,(function(a){return[t("el-row",{key:a.subject,style:{"margin-bottom":"20px"}},[t("el-col",{attrs:{span:24}},[t("el-card",{attrs:{shadow:"never","body-style":"mobile"===e.device?"padding: 20px 10px":""}},["CNY"===e.currency?[t("div",{staticClass:"container"},[t("div",{staticClass:"item-desc"},[t("em",{staticClass:"shop-card-em",style:"mobile"===e.device?{fontSize:"16px"}:{fontSize:"20px"}},[e._v(e._s(a.subject))]),t("span",{staticClass:"shop-card-tips",style:a.original_price-a.price>0?{display:"inline-block"}:{display:"none"}},[e._v("\n                  立减 ￥ "+e._s((a.original_price-a.price).toFixed(2))+"\n                ")]),t("span",{staticClass:"shop-card-txt"},[e._v(e._s(a.leftDays)+"天有效")])]),t("div",{staticClass:"item-price"},[t("span",{staticClass:"price"},[a.upgrade?t("span",[t("strong",[e._v("+")])]):e._e(),t("span",[e._v("￥")]),t("em",[e._v(e._s(a.price))]),a.price!==a.original_price?t("s",[e._v("￥"+e._s(a.original_price))]):e._e()])]),t("div",{staticClass:"count"},[a.upgrade?e._e():t("el-input-number",{staticStyle:{"margin-right":"10px"},attrs:{"controls-position":"right",size:"small",min:0,max:"monthly_500GB"===a.type?1:12},model:{value:a.amount,callback:function(t){e.$set(a,"amount",t)},expression:"item.amount"}}),t("el-button",{attrs:{disabled:0===a.amount,type:"warning"},on:{click:function(t){return e.showDialog(a)}}},[e._v(e._s(a.upgrade?"升級":"購買"))])],1)])]:[t("div",{staticClass:"container"},[t("div",{staticClass:"item-desc"},[t("em",{staticClass:"shop-card-em",style:"mobile"===e.device?{fontSize:"16px"}:{fontSize:"20px"}},[e._v(e._s(a.subject))]),t("span",{staticClass:"shop-card-tips",style:a.original_price-a.price>0?{display:"inline-block"}:{display:"none"}},[e._v("\n                  "+e._s(((a.original_price-a.price)/a.original_price*100).toFixed(1))+"% off\n                ")]),t("span",{staticClass:"shop-card-txt"},[e._v(e._s(a.leftDays)+" days period")])]),t("div",{staticClass:"item-price"},[t("span",{staticClass:"price"},[a.upgrade?t("span",[t("strong",[e._v("+")])]):e._e(),t("span",[e._v("$")]),t("em",[e._v(e._s(a.price))]),a.price!==a.original_price?t("s",[e._v("$"+e._s(a.original_price))]):e._e()])]),t("div",{staticClass:"count"},[a.upgrade?e._e():t("el-input-number",{staticStyle:{"margin-right":"10px"},attrs:{"controls-position":"right",size:"small",min:0,max:"monthly_500GB"===a.type?1:12},model:{value:a.amount,callback:function(t){e.$set(a,"amount",t)},expression:"item.amount"}}),t("el-button",{attrs:{disabled:0===a.amount,type:"warning"},on:{click:function(t){return e.showDialog(a)}}},[e._v(e._s(a.upgrade?"Upgrade":"Buy"))])],1)])]],2)],1)],1)]}))],2)},s=[],c=(a("8e6e"),a("456d"),a("ac6a"),a("75fc")),n=(a("f559"),a("c5f6"),a("bd86")),o=a("66e6"),r=a("2f62"),l=a("5f87");a("ed91");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"Package",data:function(){return{loading:!1,dialogVisible:!1,currency:"",packages:[],selectPackage:{cn:[],en:[]},subject:{},useBalance:!1,autoRenew:!1,balance:0,totalPrice:0}},mounted:function(){this.getPackageData()},computed:p(p({},Object(r["b"])(["device","language"])),{},{totalPriceDisplay:function(){return this.useBalance?this.balance>=this.totalPrice?0:Number((this.totalPrice-this.balance).toFixed(1)):this.totalPrice}}),methods:{getPackageData:function(){var e=this;Object(o["e"])(Object(l["a"])()).then((function(t){var a=t.data,i=function(e){e.upgrade?(e.leftDays=a.left_days,e.amount=1):e.type.toLowerCase().startsWith("annual")?e.leftDays=365:e.leftDays=30};"zh"===e.language?(e.currency="CNY",e.balance=a.balance_cny,e.packages=Object(c["a"])(a.list_cn),e.packages.forEach((function(t){i(t),e.selectPackage.cn.push(p({},t))}))):(e.currency="USD",e.balance=a.balance_usd,e.packages=Object(c["a"])(a.list_en),e.packages.forEach((function(t){i(t),e.selectPackage.en.push(p({},t))})))})).catch((function(e){console.log(e)}))},dialogClose:function(){this.$router.push("/")},handleCreateOrder:function(e,t){var a=this;this.loading=!0,Object(o["d"])(Object(l["a"])(),e).then((function(i){a.loading=!1,i.data.finished?a.$router.push({path:"/",query:{is_payed:!0}}):a.$router.push({name:"OrderDetail",query:{currency:a.currency,orderID:i.data.order_id,totalPrice:t,buyData:JSON.stringify(e.goods)}})})).catch((function(e){a.loading=!1,console.log(e)}))},showDialog:function(e){this.dialogVisible=!0,this.subject=e,this.totalPrice=Number(e.price)*e.amount},handleBuy:function(){var e=this.totalPrice;this.useBalance&&(e=this.balance>=this.totalPrice?0:Number((this.totalPrice-this.balance).toFixed(1)));var t={price:this.totalPrice,currency:this.currency,goods:[this.subject],goods_type:"CNY"===this.currency?"monthly_packet_cn":"monthly_packet_en",customized:this.subject.customized,upgrade:this.subject.upgrade,balance_used:Number((this.totalPrice-e).toFixed(1)),auto_renew:this.autoRenew};this.handleCreateOrder(t,e)}},beforeDestroy:function(){clearTimeout(this.timer)}},g=d,b=(a("1f85"),a("2877")),h=Object(b["a"])(g,i,s,!1,null,"3de0e3d8",null);t["default"]=h.exports},f559:function(e,t,a){"use strict";var i=a("5ca1"),s=a("9def"),c=a("d2c8"),n="startsWith",o=""[n];i(i.P+i.F*a("5147")(n),"String",{startsWith:function(e){var t=c(this,e,n),a=s(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return o?o.call(t,i,a):t.slice(a,a+i.length)===i}})}}]);