(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4fb74ac"],{"31a9":function(t,e,r){"use strict";r("8fff")},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},"504c":function(t,e,r){var s=r("9e1e"),o=r("0d58"),a=r("6821"),i=r("52a7").f;t.exports=function(t){return function(e){var r,n=a(e),c=o(n),h=c.length,u=0,l=[];while(h>u)r=c[u++],s&&!i.call(n,r)||l.push(t?[r,n[r]]:n[r]);return l}}},"663b":function(t,e,r){},"6be8":function(t,e,r){"use strict";r.d(e,"g",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"d",(function(){return n})),r.d(e,"f",(function(){return c})),r.d(e,"c",(function(){return h})),r.d(e,"b",(function(){return u})),r.d(e,"e",(function(){return l}));var s=r("768b"),o=(r("ac6a"),r("ffc1"),r("a481"),r("c5f6"),r("9923"));function a(t){var e=r("6c27").sha256;return e(t)}function i(t){var e,r=1024,s=1048576;return e=t>=s?{num:(t/s).toFixed(2),unit:"gbps"}:t>=r?{num:(t/r).toFixed(2),unit:"mbps"}:{num:t,unit:"kbps"},e.num=Number(e.num),e}function n(t){var e=1024,r=1048576,s=1073741824,o={num:0,unit:"KB"};return o=t>=s?{num:(t/s).toFixed(2),unit:"TB"}:t>=r?{num:(t/r).toFixed(2),unit:"GB"}:t>=e?{num:(t/e).toFixed(2),unit:"MB"}:{num:t,unit:"KB"},o.num=Number(o.num),o}function c(t,e){var r=0,s=1024,o=1048576,a=1073741824;switch(e){case"TB":r=(t/a).toFixed(2);break;case"GB":r=(t/o).toFixed(2);break;case"MB":r=(t/s).toFixed(2);break;default:r=t.toFixed(2);break}return r}function h(t){var e=t.filter((function(t){return t.value>0}));return e}var u=function(t){t<0&&(t=-t);var e={day:Math.floor(t/864e5),hour:Math.floor(t/36e5)%24,minute:Math.floor(t/6e4)%60,second:Math.floor(t/1e3)%60},r={day:"D",hour:"H",minute:"M",second:"S"};return Object.entries(e).filter((function(t){return 0!==t[1]})).map((function(t){var e=Object(s["a"])(t,2),o=e[0],a=e[1];return"".concat(a).concat(r[o])})).join(",")};function l(t){switch(t.payment){case"alipay":return o["a"].t("order.alipay");case"paypal":return"Paypal";case"coinbase":return"Coinbase";case"coinpayments":return"Coinpayments";case"crypto":return"Cryptocurrency";case"stripe":return"Stripe";case"balance":return o["a"].t("order.balance")}}},"6c27":function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t,e){return function(r){return new Sha256(e,!0).update(r)[t]()}},createMethod=function(t){var e=createOutputMethod("hex",t);NODE_JS&&(e=nodeWrap(e,t)),e.create=function(){return new Sha256(t)},e.update=function(t){return e.create().update(t)};for(var r=0;r<OUTPUT_TYPES.length;++r){var s=OUTPUT_TYPES[r];e[s]=createOutputMethod(s,t)}return e},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(t){if("string"===typeof t)return crypto.createHash(algorithm).update(t,"utf8").digest("hex");if(null===t||void 0===t)throw new Error(ERROR);return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod},createHmacOutputMethod=function(t,e){return function(r,s){return new HmacSha256(r,e,!0).update(s)[t]()}},createHmacMethod=function(t){var e=createHmacOutputMethod("hex",t);e.create=function(e){return new HmacSha256(e,t)},e.update=function(t,r){return e.create(t).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var s=OUTPUT_TYPES[r];e[s]=createHmacOutputMethod(s,t)}return e};function Sha256(t,e){e?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function HmacSha256(t,e,r){var s,o=typeof t;if("string"===o){var a,i=[],n=t.length,c=0;for(s=0;s<n;++s)a=t.charCodeAt(s),a<128?i[c++]=a:a<2048?(i[c++]=192|a>>6,i[c++]=128|63&a):a<55296||a>=57344?(i[c++]=224|a>>12,i[c++]=128|a>>6&63,i[c++]=128|63&a):(a=65536+((1023&a)<<10|1023&t.charCodeAt(++s)),i[c++]=240|a>>18,i[c++]=128|a>>12&63,i[c++]=128|a>>6&63,i[c++]=128|63&a);t=i}else{if("object"!==o)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR)}t.length>64&&(t=new Sha256(e,!0).update(t).array());var h=[],u=[];for(s=0;s<64;++s){var l=t[s]||0;h[s]=92^l,u[s]=54^l}Sha256.call(this,e,r),this.update(u),this.oKeyPad=h,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===t)throw new Error(ERROR);if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw new Error(ERROR);e=!0}var s,o,a=0,i=t.length,n=this.blocks;while(a<i){if(this.hashed&&(this.hashed=!1,n[0]=this.block,n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),e)for(o=this.start;a<i&&o<64;++a)n[o>>2]|=t[a]<<SHIFT[3&o++];else for(o=this.start;a<i&&o<64;++a)s=t.charCodeAt(a),s<128?n[o>>2]|=s<<SHIFT[3&o++]:s<2048?(n[o>>2]|=(192|s>>6)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):s<55296||s>=57344?(n[o>>2]|=(224|s>>12)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++a)),n[o>>2]|=(240|s>>18)<<SHIFT[3&o++],n[o>>2]|=(128|s>>12&63)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=n[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=EXTRA[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var t,e,r,s,o,a,i,n,c,h,u,l=this.h0,d=this.h1,p=this.h2,f=this.h3,_=this.h4,H=this.h5,S=this.h6,m=this.h7,A=this.blocks;for(t=16;t<64;++t)o=A[t-15],e=(o>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,o=A[t-2],r=(o>>>17|o<<15)^(o>>>19|o<<13)^o>>>10,A[t]=A[t-16]+e+A[t-7]+r<<0;for(u=d&p,t=0;t<64;t+=4)this.first?(this.is224?(n=300032,o=A[0]-1413257819,m=o-150054599<<0,f=o+24177077<<0):(n=704751109,o=A[0]-210244248,m=o-1521486534<<0,f=o+143694565<<0),this.first=!1):(e=(l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),r=(_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7),n=l&d,s=n^l&p^u,i=_&H^~_&S,o=m+r+i+K[t]+A[t],a=e+s,m=f+o<<0,f=o+a<<0),e=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),r=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7),c=f&l,s=c^f&d^n,i=m&_^~m&H,o=S+r+i+K[t+1]+A[t+1],a=e+s,S=p+o<<0,p=o+a<<0,e=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),r=(S>>>6|S<<26)^(S>>>11|S<<21)^(S>>>25|S<<7),h=p&f,s=h^p&l^c,i=S&m^~S&_,o=H+r+i+K[t+2]+A[t+2],a=e+s,H=d+o<<0,d=o+a<<0,e=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),r=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7),u=d&p,s=u^d&f^h,i=H&S^~H&m,o=_+r+i+K[t+3]+A[t+3],a=e+s,_=l+o<<0,l=o+a<<0;this.h0=this.h0+l<<0,this.h1=this.h1+d<<0,this.h2=this.h2+p<<0,this.h3=this.h3+f<<0,this.h4=this.h4+_<<0,this.h5=this.h5+H<<0,this.h6=this.h6+S<<0,this.h7=this.h7+m<<0},Sha256.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3,o=this.h4,a=this.h5,i=this.h6,n=this.h7,c=HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i];return this.is224||(c+=HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]),c},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3,o=this.h4,a=this.h5,i=this.h6,n=this.h7,c=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,s>>24&255,s>>16&255,s>>8&255,255&s,o>>24&255,o>>16&255,o>>8&255,255&o,a>>24&255,a>>16&255,a>>8&255,255&a,i>>24&255,i>>16&255,i>>8&255,255&i];return this.is224||c.push(n>>24&255,n>>16&255,n>>8&255,255&n),c},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("f28c"),__webpack_require__("c8ba"))},"6de9":function(t,e,r){"use strict";r("663b")},"7b1d":function(t,e,r){"use strict";r("9cef")},"85a9":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var s=r("b775");function o(t){var e="captcha";return t&&(e="".concat(e,"?last=").concat(t)),Object(s["a"])({url:e,method:"get"})}},"8fff":function(t,e,r){},"9cef":function(t,e,r){},"9ed6":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))]),e("lang-select",{staticClass:"set-language"}),e("select-zone",{staticClass:"console"})],1),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container svg-container_login"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),e("el-input",{attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),e("el-form-item",{attrs:{prop:"passwd"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),e("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"passwd","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin.apply(null,arguments)}},model:{value:t.loginForm.passwd,callback:function(e){t.$set(t.loginForm,"passwd",e)},expression:"loginForm.passwd"}}),e("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t.captchaUrl?e("el-form-item",{attrs:{prop:"captcha"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"lock"}})],1),e("el-input",{attrs:{type:"text",placeholder:t.$t("login.code"),name:"captcha"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin.apply(null,arguments)}},model:{value:t.loginForm.captcha_value,callback:function(e){t.$set(t.loginForm,"captcha_value",e)},expression:"loginForm.captcha_value"}})],1):t._e(),e("img",{attrs:{src:t.captchaUrl},on:{click:t.getImage}}),e("el-row",{attrs:{type:"flex",justify:"space-between"}},[e("a",{staticStyle:{color:"#eee"},on:{click:t.goSignup}},[t._v(t._s(t.$t("auth.signup")))]),e("a",{staticStyle:{color:"#eee"},on:{click:t.goFindPwd}},[t._v(t._s(t.$t("auth.resetPasswd")))])]),e("el-button",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin.apply(null,arguments)}}},[t._v(t._s(t.$t("login.logIn")))])],1)],1)},o=[],a=r("61f7"),i=r("1131"),n=r("b811"),c=r("6be8"),h=r("ed08"),u=r("85a9"),l=r("5d2d"),d=r("267e"),p={name:"Login",components:{LangSelect:i["a"],SelectZone:n["a"]},data:function(){var t=this,e=function(e,r,s){if(r=Object(h["e"])(r),Object(a["a"])(r))s();else{var o=t.$t("auth.usernameError");s(new Error(o))}},r=function(e,r,s){if(r.length<6||r.length>64){var o=t.$t("auth.passwdError");s(new Error(o))}else s()};return{loginForm:{username:"",passwd:"",captcha_id:"",captcha_value:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],passwd:[{required:!0,trigger:"blur",validator:r}]},passwordType:"password",loading:!1,redirect:void 0,captchaUrl:""}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},mounted:function(){var t=this,e=this.$route.query,r=e.zone,s=e.email,o=e.visitor_code;r&&Object(l["a"])(d["c"])!==r&&(Object(l["c"])(d["c"],r),location.reload()),r&&s&&o&&setTimeout((function(){t.$store.dispatch("LoginByUsername",{email:s,visitor_code:o}).then((function(){t.$router.push({path:"/"}),t.$message({message:t.$t("login.logInSuccess"),type:"success"}),t.$store.dispatch("getProfile")}))}),50)},methods:{getImage:function(){var t=this;Object(u["a"])(this.loginForm.captcha_id).then((function(e){var r=e.data;r&&(t.loginForm.captcha_id=r.captcha_id,t.captchaUrl=r.captcha_url)}))},formatData:function(t){var e=t.passwd,r=t.username,s=t.captcha_id,o=t.captcha_value;return{passwd:Object(c["g"])(e),email:Object(h["e"])(r),captcha_id:s,captcha_value:o}},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;Object(h["a"])()&&this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0;var r=t.formatData(t.loginForm);t.$store.dispatch("LoginByUsername",r).then((function(){t.loading=!1,t.$router.push({path:t.redirect||"/"});var e=t.$t("login.logInSuccess");t.$message({message:e,type:"success"}),t.$store.dispatch("getProfile")})).catch((function(e){4005!==e.code&&4019!==e.code||t.getImage(),t.loading=!1}))}))},goSignup:function(){this.$router.push({path:"/signup"})},goFindPwd:function(){this.$router.push({path:"/forget_password"})}}},f=p,_=(r("31a9"),r("7b1d"),r("2877")),H=Object(_["a"])(f,s,o,!1,null,"a9739988",null);e["default"]=H.exports},b811:function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;return e("el-dropdown",{attrs:{"hide-on-click":!1},on:{command:t.handleConsoleSelect}},[e("span",{staticClass:"el-dropdown-link",style:!0===t.showRed?{color:"#f56c6c"}:""},[t._v("\n          "+t._s(t.selectedText)),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"p1"}},[t._v(t._s(t.$t("auth.consoleEU")))]),e("el-dropdown-item",{attrs:{command:"p3"}},[t._v(t._s(t.$t("auth.consoleHK")))]),e("el-dropdown-item",{attrs:{command:"p2"}},[t._v(t._s(t.$t("auth.consoleUSA")))]),t.showLocal?e("el-dropdown-item",{attrs:{command:"d1"}},[t._v("Localhost")]):t._e()],1)],1)},o=[],a=r("267e"),i=r("5d2d"),n=r("b775"),c={name:"SelectZone",data:function(){return{selectedZone:"",showRed:!1,showLocal:!1}},mounted:function(){this.checkSelected(),"localhost"===location.hostname&&(this.showLocal=!0)},computed:{selectedText:function(){return this.checkSelected(),this.selectedZone||this.$t("auth.console")}},methods:{checkSelected:function(t){this.showRed=!1,t||(t=Object(i["a"])(a["c"])),"p1"===t?this.selectedZone=this.$t("navbar.currZone")+this.$t("auth.consoleEU"):"p3"===t?this.selectedZone=this.$t("navbar.currZone")+this.$t("auth.consoleHK"):"p2"===t?this.selectedZone=this.$t("navbar.currZone")+this.$t("auth.consoleUSA"):"d1"===t?this.selectedZone=this.$t("navbar.currZone")+"local":this.showRed=!0},handleConsoleSelect:function(t){this.checkSelected(t),n["a"].defaults.baseURL=a["a"][t],Object(i["c"])(a["c"],t)}}},h=c,u=(r("6de9"),r("2877")),l=Object(u["a"])(h,s,o,!1,null,"7d7769b8",null);e["a"]=l.exports},ffc1:function(t,e,r){var s=r("5ca1"),o=r("504c")(!0);s(s.S,"Object",{entries:function(t){return o(t)}})}}]);