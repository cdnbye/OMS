(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cc69642"],{"52d4":function(e,t,n){"use strict";n("cbcc")},"663b":function(e,t,n){},"6c97":function(e,t,n){},"6ddc":function(e,t,n){"use strict";n("6c97")},"6de9":function(e,t,n){"use strict";n("663b")},"85a9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n("b775");function o(e){var t="captcha";return e&&(t="".concat(t,"?last=").concat(e)),Object(s["a"])({url:t,method:"get"})}},"87de":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"signupForm",staticClass:"login-form",attrs:{model:e.signupForm,rules:e.signupRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v(e._s(e.$t("signup.title")))]),t("lang-select",{staticClass:"set-language"}),t("select-zone",{staticClass:"console"})],1),t("el-form-item",{attrs:{prop:"email"}},[t("span",{staticClass:"svg-container svg-container_login"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),t("el-input",{attrs:{placeholder:e.$t("signup.email"),name:"email",type:"text","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSendCode.apply(null,arguments)}},model:{value:e.signupForm.email,callback:function(t){e.$set(e.signupForm,"email",t)},expression:"signupForm.email"}})],1),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{id:"sendButton",loading:e.sendLoading,disabled:e.sendDisabled,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.onSendCode.apply(null,arguments)}}},[e._v(e._s(e.$t("signup.send")))]),t("el-form-item",{attrs:{prop:"vcode"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{attrs:{placeholder:e.$t("signup.vcode"),name:"vcode","auto-complete":"on"},model:{value:e.signupForm.vcode,callback:function(t){e.$set(e.signupForm,"vcode",t)},expression:"signupForm.vcode"}})],1),t("el-form-item",{attrs:{prop:"passwd"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"passwd","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSignup.apply(null,arguments)}},model:{value:e.signupForm.passwd,callback:function(t){e.$set(e.signupForm,"passwd",t)},expression:"signupForm.passwd"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t("el-form-item",{attrs:{prop:"confirm_passwd"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),t("el-input",{attrs:{type:e.passwordType,placeholder:e.$t("signup.confirm_password"),name:"confirm_passwd","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSignup.apply(null,arguments)}},model:{value:e.signupForm.confirm_passwd,callback:function(t){e.$set(e.signupForm,"confirm_passwd",t)},expression:"signupForm.confirm_passwd"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showInviter,expression:"showInviter"}],attrs:{prop:"inviter"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"invitation"}})],1),t("el-input",{attrs:{type:"text",placeholder:e.$t("signup.inviter"),name:"inviter"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSignup.apply(null,arguments)}},model:{value:e.signupForm.inviter,callback:function(t){e.$set(e.signupForm,"inviter",t)},expression:"signupForm.inviter"}})],1),e.captchaUrl?t("el-form-item",{attrs:{prop:"captcha"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"lock"}})],1),t("el-input",{attrs:{type:"text",placeholder:e.$t("login.code"),name:"captcha"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSignup.apply(null,arguments)}},model:{value:e.signupForm.captcha_value,callback:function(t){e.$set(e.signupForm,"captcha_value",t)},expression:"signupForm.captcha_value"}})],1):e._e(),t("img",{attrs:{src:e.captchaUrl},on:{click:e.getImage}}),t("el-row",{staticStyle:{"margin-bottom":"14px"},attrs:{type:"flex",justify:"space-between"}},["en"===e.language?t("el-checkbox",{staticStyle:{color:"#eee"},model:{value:e.contractChecked,callback:function(t){e.contractChecked=t},expression:"contractChecked"}},[e._v(e._s(e.$t("signup.contract"))+"《"),t("a",{staticStyle:{color:"dodgerblue"},attrs:{target:"view_window",href:"https://www.cdnbye.com/en/views/contract.html"}},[e._v(e._s(e.$t("signup.contractName")))]),e._v("》")]):t("el-checkbox",{staticStyle:{color:"#eee"},model:{value:e.contractChecked,callback:function(t){e.contractChecked=t},expression:"contractChecked"}},[e._v(e._s(e.$t("signup.contract"))+"《"),t("a",{staticStyle:{color:"dodgerblue"},attrs:{target:"view_window",href:"https://www.cdnbye.com/cn/views/contract.html"}},[e._v(e._s(e.$t("signup.contractName")))]),e._v("》")])],1),t("el-row",{attrs:{type:"flex",justify:"space-between"}},[t("a",{staticStyle:{color:"#eee"},on:{click:e.goLogin}},[e._v(e._s(e.$t("auth.login")))]),t("a",{staticStyle:{color:"#eee"},on:{click:e.goFindPwd}},[e._v(e._s(e.$t("auth.resetPasswd")))])]),t("el-button",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{loading:e.signupLoading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleSignup.apply(null,arguments)}}},[e._v(e._s(e.$t("signup.signUp")))])],1)],1)},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("1131"),r=n("61f7"),c=n("3786"),l=n("2f62"),u=n("b811"),p=n("ed08"),d=n("85a9"),h=n("5d2d"),g=n("267e");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"Signup",components:{LangSelect:i["a"],SelectZone:u["a"]},data:function(){var e=this,t=function(t,n,s){if(Object(r["a"])(n))s();else{var o=e.$t("auth.mailError");s(new Error(o))}},n=function(t,n,s){if(n.length<6||n.length>64){var o=e.$t("auth.passwdError");s(new Error(o))}else s()},s=function(t,n,s){if(n.length<4){var o=e.$t("auth.vcodeError");s(new Error(o))}else s()},o=function(t,n,s){var o=e.signupForm.passwd;if(n!==o){var a=e.$t("signup.confirm_password_error");s(new Error(a))}else s()};return{showInviter:!0,signupForm:{email:"",vcode:"",passwd:"",confirm_passwd:"",captcha_id:"",captcha_value:"",inviter:""},signupRules:{email:[{required:!0,trigger:"blur",validator:t}],vcode:[{required:!0,trigger:"blur",validator:s}],passwd:[{required:!0,trigger:"blur",validator:n}],confirm_passwd:[{required:!0,trigger:"blur",validator:o}]},passwordType:"password",signupLoading:!1,sendLoading:!1,sendDisabled:!1,redirect:void 0,int:void 0,contractChecked:!0,captchaUrl:""}},mounted:function(){var e=this.$route.query,t=e.zone,n=e.inviter;t&&Object(h["a"])(g["b"])!==t&&(Object(h["c"])(g["b"],t),location.reload()),n&&(this.signupForm.inviter=n,this.showInviter=!1)},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{getImage:function(){var e=this;Object(d["a"])(this.signupForm.captcha_id).then((function(t){var n=t.data;n&&(e.signupForm.captcha_id=n.captcha_id,e.captchaUrl=n.captcha_url)}))},showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleSignup:function(){var e=this;Object(p["a"])()&&(this.contractChecked?this.signupForm.email!==this.signupForm.inviter?this.$refs.signupForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.signupLoading=!0;var n=(new Date).getTimezoneOffset()/60*-1;-12===n&&(n=12),e.signupForm.utc=Math.round(n),e.$store.dispatch("signup",e.signupForm).then((function(){e.signupLoading=!1,e.$router.push({path:e.redirect||"/"});var t=e.$t("signup.signUpSuccess");e.$message({message:t,type:"success"}),e.$store.dispatch("getProfile")})).catch((function(t){e.signupLoading=!1,4005!==t.code&&4019!==t.code||e.getImage()}))})):this.$messageBox.alert("inviter email is invalid",{distinguishCancelAndClose:!0,confirmButtonText:this.$t("common.ok")}):this.$messageBox.alert(this.$t("signup.confirmContract"),{distinguishCancelAndClose:!0,confirmButtonText:this.$t("common.ok")}))},onSendCode:function(){var e=this;if(Object(p["a"])()){var t=this.signupForm.email;if(t)if(Object(r["a"])(t)){var n={email:t,action:"signup"};this.sendLoading=!0,Object(c["c"])(n).then((function(t){e.sendLoading=!1,e.$message({message:"发送成功",type:"success"}),e.sendButtonEnable()})).catch((function(t){e.sendLoading=!1,console.log(t)}))}else{var s=this.$t("auth.mailError");this.$message.error(s)}else{var o=this.$t("auth.email");this.$message.error(o)}}},goLogin:function(){this.$router.push({path:"/login"})},goFindPwd:function(){this.$router.push({path:"/forget_password"})},sendButtonEnable:function(){var e=300,t=document.getElementById("sendButton"),n=this;n.int=setInterval((function(){n.sendDisabled=!0,e--,e>0?t.innerHTML=e+" S":(t.innerHTML=n.$t("signup.send"),n.sendDisabled=!1,clearInterval(n.int),n.int=void 0)}),1e3)}},computed:v({},Object(l["b"])(["language"]))},w=f,b=(n("6ddc"),n("52d4"),n("2877")),y=Object(b["a"])(w,s,o,!1,null,"02498568",null);t["default"]=y.exports},b811:function(e,t,n){"use strict";var s=function(){var e=this,t=e._self._c;return t("el-dropdown",{attrs:{"hide-on-click":!1},on:{command:e.handleConsoleSelect}},[t("span",{staticClass:"el-dropdown-link",style:!0===e.showRed?{color:"#f56c6c"}:""},[e._v("\n          "+e._s(e.selectedText)),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"p1"}},[e._v(e._s(e.$t("auth.consoleEU")))]),t("el-dropdown-item",{attrs:{command:"p3"}},[e._v(e._s(e.$t("auth.consoleHK")))]),t("el-dropdown-item",{attrs:{command:"p2"}},[e._v(e._s(e.$t("auth.consoleUSA")))]),e.showLocal?t("el-dropdown-item",{attrs:{command:"d1"}},[e._v("Localhost")]):e._e()],1)],1)},o=[],a=n("267e"),i=n("5d2d"),r=n("b775"),c={name:"SelectZone",data:function(){return{selectedZone:"",showRed:!1,showLocal:!1}},mounted:function(){this.checkSelected(),"localhost"===location.hostname&&(this.showLocal=!0)},computed:{selectedText:function(){return this.checkSelected(),this.selectedZone||this.$t("auth.console")}},methods:{checkSelected:function(e){this.showRed=!1,e||(e=Object(i["a"])(a["b"])),"p1"===e?this.selectedZone=this.$t("navbar.currZone")+this.$t("auth.consoleEU"):"p3"===e?this.selectedZone=this.$t("navbar.currZone")+this.$t("auth.consoleHK"):"p2"===e?this.selectedZone=this.$t("navbar.currZone")+this.$t("auth.consoleUSA"):"d1"===e?this.selectedZone=this.$t("navbar.currZone")+"local":this.showRed=!0},handleConsoleSelect:function(e){this.checkSelected(e),r["a"].defaults.baseURL=a["a"][e],Object(i["c"])(a["b"],e)}}},l=c,u=(n("6de9"),n("2877")),p=Object(u["a"])(l,s,o,!1,null,"7d7769b8",null);t["a"]=p.exports},cbcc:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2cc69642.6a98a8d2.js.map