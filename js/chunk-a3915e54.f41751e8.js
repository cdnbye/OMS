(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3915e54"],{"140d":function(t,e,n){"use strict";n("8c42")},"2beb":function(t,e,n){"use strict";n.r(e);n("7f7f");var u=function(){var t=this,e=t._self._c;return e("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[t._l(t.list,(function(n){return[e("el-col",{key:n.url,staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-name"},[t._v(t._s(n.name))]),e("span",{staticClass:"card-panel-num",style:{color:-1===n.value?"red":""}},[t._v(t._s(n.value))]),e("div",{staticClass:"card-panel-text"},[t._v(t._s(n.url)+" "+t._s(n.version?" "+n.version:""))]),n.cpu_usage?e("div",{staticClass:"card-panel-text",style:{color:n.cpu_usage>=40?"red":""}},[t._v("cpu: "+t._s(n.cpu_usage))]):t._e(),t._l(n.certs,(function(u){return n.certs.length>0?[e("div",{staticClass:"card-panel-text",style:{color:u.isExpiredSoon?"red":""}},[t._v(t._s(u.name)+" "+t._s(u.expireAt))])]:t._e()}))],2)])])]}))],2)},a=[],r=n("7618"),i=(n("ac6a"),n("bc3a")),s=n.n(i),l=n("5a0c"),o=n.n(l),f=30,c=null,h={name:"Signal",data:function(){return{token:"RF9ix9jkZhdA",list:[{url:"https://signal.cdnbye.com/total_count",value:0,name:"香港"},{url:"https://signalcloud.cdnbye.com/total_count",value:0,name:"法兰克福"},{url:"https://opensignal.cdnbye.com/total_count",value:0,name:"硅谷"},{url:"https://sg.cdnbye.com/total_count",value:0,name:"新加坡"},{url:"https://gz.swarmcloud.net/total_count",value:0,name:"广州"},{url:"https://fr.cdnbye.com/info",value:0,name:"巴黎"},{url:"https://br1.cdnbye.com/info",value:0,name:"圣保罗-tx"},{url:"https://br.peerhub.net:2096/info",value:0,name:"圣保罗"},{url:"https://ru.cdnbye.com/info",value:0,name:"莫斯科"},{url:"https://us.peerhub.net:2096/info",value:0,name:"美国"},{url:"https://za.cdnbye.com/info",value:0,name:"南非"},{url:"https://pk.p2pengine.net:8089/info",value:0,name:"北京"},{url:"http://43.132.190.148/info",value:0,name:"cdnbye-1"},{url:"http://43.134.199.138/info",value:0,name:"cdnbye-2"},{url:"http://43.129.228.44/info",value:0,name:"cdnbye-3"},{url:"http://43.154.211.238/info",value:0,name:"cdnbye-4"},{url:"http://43.154.209.102/info",value:0,name:"cdnbye-5"},{url:"http://43.154.40.235/info",value:0,name:"cdnbye-6"},{url:"http://43.154.49.215/info",value:0,name:"cdnbye-7"},{url:"http://43.154.53.74/info",value:0,name:"cdnbye-8"},{url:"http://43.154.166.99/info",value:0,name:"cdnbye-9"},{url:"http://43.155.116.14/info",value:0,name:"cdnbye-10"},{url:"http://43.154.49.170/info",value:0,name:"cdnbye-11"},{url:"http://43.134.203.230/info",value:0,name:"cdnbye-12"},{url:"http://43.154.120.28/info",value:0,name:"cdnbye-13"},{url:"http://43.154.219.36/info",value:0,name:"cdnbye-14"},{url:"http://43.154.0.207/info",value:0,name:"cdnbye-15"},{url:"http://43.132.227.42/info",value:0,name:"cdnbye-16"},{url:"http://43.129.186.47/info",value:0,name:"cdnbye-17"},{url:"http://119.28.189.230/info",value:0,name:"cdnbye-18"},{url:"http://43.129.25.71/info",value:0,name:"cdnbye-19"},{url:"http://43.157.96.48/info",value:0,name:"eu-1"},{url:"http://43.157.111.101/info",value:0,name:"eu-2"},{url:"http://43.157.7.215/info",value:0,name:"eu-3"},{url:"http://43.131.51.25/info",value:0,name:"eu-4"},{url:"http://43.131.41.92/info",value:0,name:"eu-5"},{url:"http://43.131.34.85/info",value:0,name:"eu-6"},{url:"http://43.131.25.44/info",value:0,name:"eu-7"},{url:"http://162.62.57.166/info",value:0,name:"eu-8"},{url:"http://43.131.19.249/info",value:0,name:"eu-9"},{url:"http://43.131.53.249/info",value:0,name:"eu-10"},{url:"http://43.157.97.162/info",value:0,name:"eu-11"},{url:"http://43.157.105.67/info",value:0,name:"eu-12"},{url:"http://43.131.54.143/info",value:0,name:"eu-13"},{url:"http://43.157.0.236/info",value:0,name:"eu-14"},{url:"http://43.157.95.234/info",value:0,name:"eu-15"},{url:"http://43.157.88.119/info",value:0,name:"eu-16"},{url:"http://43.157.97.174/info",value:0,name:"eu-17"},{url:"http://43.131.16.187/info",value:0,name:"eu-18"},{url:"http://43.157.29.253/info",value:0,name:"eu-19"},{url:"http://162.62.234.142/info",value:0,name:"eu-20"},{url:"http://49.51.232.236/info",value:0,name:"us-1"},{url:"http://49.51.74.179/info",value:0,name:"us-2"},{url:"http://43.135.155.11/info",value:0,name:"us-3"},{url:"http://43.153.50.57/info",value:0,name:"us-4"},{url:"http://43.153.71.95/info",value:0,name:"us-5"},{url:"http://49.51.46.166/info",value:0,name:"us-6"},{url:"http://43.153.77.48/info",value:0,name:"us-7"},{url:"http://170.106.196.173/info",value:0,name:"us-8"},{url:"http://170.106.137.142/info",value:0,name:"us-9"},{url:"http://170.106.82.6/info",value:0,name:"us-10"},{url:"http://170.106.188.223/info",value:0,name:"us-11"},{url:"http://43.153.12.42/info",value:0,name:"us-12"},{url:"http://49.51.52.181/info",value:0,name:"us-13"},{url:"http://43.153.56.28/info",value:0,name:"us-14"},{url:"http://49.51.201.183/info",value:0,name:"us-15"},{url:"http://43.130.41.33/info",value:0,name:"us-16"},{url:"http://170.106.154.167/info",value:0,name:"us-17"},{url:"http://43.153.67.114/info",value:0,name:"us-18"},{url:"http://170.106.193.136/info",value:0,name:"us-19"},{url:"http://170.106.110.95/info",value:0,name:"us-20"},{url:"http://43.159.60.196/info",value:0,name:"sg-1"},{url:"http://124.156.194.246/info",value:0,name:"sg-2"},{url:"http://43.128.71.178/info",value:0,name:"sg-3"},{url:"http://43.156.39.146/info",value:0,name:"sg-4"},{url:"http://43.156.54.151/info",value:0,name:"sg-5"},{url:"http://129.226.212.8/info",value:0,name:"sg-6"},{url:"http://43.134.52.198/info",value:0,name:"sg-7"},{url:"http://43.134.94.188/info",value:0,name:"sg-8"},{url:"http://43.134.52.80/info",value:0,name:"sg-9"},{url:"http://43.156.91.139/info",value:0,name:"sg-10"},{url:"http://43.134.180.241/info",value:0,name:"sg-11"},{url:"http://43.156.54.5/info",value:0,name:"sg-12"},{url:"http://43.134.27.161/info",value:0,name:"sg-13"},{url:"http://43.156.211.68/info",value:0,name:"sg-14"},{url:"http://119.28.122.217/info",value:0,name:"sg-15"},{url:"http://43.134.3.224/info",value:0,name:"sg-16"},{url:"http://43.134.112.106/info",value:0,name:"sg-18"},{url:"http://43.133.61.195/info",value:0,name:"sg-19"},{url:"http://43.134.31.190/info",value:0,name:"sg-20"},{url:"http://106.52.254.88/info",value:0,name:"gz-1"},{url:"http://43.139.190.60/info",value:0,name:"gz-4"},{url:"http://43.138.216.187/info",value:0,name:"gz-7"},{url:"http://175.178.128.46/info",value:0,name:"gz-8"}]}},created:function(){this.loopGetData()},beforeDestroy:function(){clearTimeout(c)},methods:{fetchData:function(){var t=this;this.list.forEach((function(e){var n="".concat(e.url,"?token=").concat(t.token);s.a.get(n).then((function(t){if(e.certs=[],"number"===typeof t.data)e.value=t.data;else if("object"===Object(r["a"])(t.data)){var n=t.data;e.value=n.current_connections,e.version=n.version,e.cpu_usage=n.cpu_usage,n.cert_info?e.certs.push({name:n.cert_info.name,expireAt:o()(n.cert_info.expire_at).format("YY-MM-DD:HH"),isExpiredSoon:o()(n.cert_info.expire_at).diff(o()(),"day")<=f}):n.cert_infos&&n.cert_infos.length>0&&n.cert_infos.forEach((function(t){e.certs.push({name:t.name,expireAt:o()(t.expire_at).format("YY-MM-DD:HH"),isExpiredSoon:o()(t.expire_at).diff(o()(),"day")<=f})}))}})).catch((function(t){console.error(t),e.value=-1}))}))},loopGetData:function(){var t=this;this.fetchData(),c=setTimeout((function(){t.loopGetData()}),15e3)}}},p=h,m=(n("140d"),n("2877")),v=Object(m["a"])(p,u,a,!1,null,"1cb53bb4",null);e["default"]=v.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,u="millisecond",a="second",r="minute",i="hour",s="day",l="week",o="month",f="quarter",c="year",h="date",p="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var u=String(t);return!u||u.length>=e?t:""+Array(e+1-u.length).join(n)+t},g={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),u=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+$(u,2,"0")+":"+$(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var u=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(u,o),r=n-a<0,i=e.clone().add(u+(r?-1:1),o);return+(-(u+(n-a)/(r?a-i:i-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:c,w:l,d:s,D:h,h:i,m:r,s:a,ms:u,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",_={};_[y]=d;var b=function(t){return t instanceof w},D=function t(e,n,u){var a;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();_[r]&&(a=r),n&&(_[r]=n,a=r);var i=e.split("-");if(!a&&i.length>1)return t(i[0])}else{var s=e.name;_[s]=e,a=s}return!u&&a&&(y=a),a||!u&&y},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},S=g;S.l=D,S.i=b,S.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var u=e.match(m);if(u){var a=u[2]-1||0,r=(u[7]||"0").substring(0,3);return n?new Date(Date.UTC(u[1],a,u[3]||1,u[4]||0,u[5]||0,u[6]||0,r)):new Date(u[1],a,u[3]||1,u[4]||0,u[5]||0,u[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return S},$.isValid=function(){return!(this.$d.toString()===p)},$.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return M(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<M(t)},$.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,u=!!S.u(e)||e,f=S.p(t),p=function(t,e){var a=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?a:a.endOf(s)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,d=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case c:return u?p(1,0):p(31,11);case o:return u?p(1,d):p(0,d+1);case l:var y=this.$locale().weekStart||0,_=(v<y?v+7:v)-y;return p(u?$-_:$+(6-_),d);case s:case h:return m(g+"Hours",0);case i:return m(g+"Minutes",1);case r:return m(g+"Seconds",2);case a:return m(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,l=S.p(t),f="set"+(this.$u?"UTC":""),p=(n={},n[s]=f+"Date",n[h]=f+"Date",n[o]=f+"Month",n[c]=f+"FullYear",n[i]=f+"Hours",n[r]=f+"Minutes",n[a]=f+"Seconds",n[u]=f+"Milliseconds",n)[l],m=l===s?this.$D+(e-this.$W):e;if(l===o||l===c){var v=this.clone().set(h,1);v.$d[p](m),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[S.p(t)]()},$.add=function(u,f){var h,p=this;u=Number(u);var m=S.p(f),v=function(t){var e=M(p);return S.w(e.date(e.date()+Math.round(t*u)),p)};if(m===o)return this.set(o,this.$M+u);if(m===c)return this.set(c,this.$y+u);if(m===s)return v(1);if(m===l)return v(7);var d=(h={},h[r]=e,h[i]=n,h[a]=t,h)[m]||1,$=this.$d.getTime()+u*d;return S.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var u=t||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),r=this.$H,i=this.$m,s=this.$M,l=n.weekdays,o=n.months,f=function(t,n,a,r){return t&&(t[n]||t(e,u))||a[n].slice(0,r)},c=function(t){return S.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var u=t<12?"AM":"PM";return n?u.toLowerCase():u},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:S.s(s+1,2,"0"),MMM:f(n.monthsShort,s,o,3),MMMM:f(o,s),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,l,2),ddd:f(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:S.s(r,2,"0"),h:c(1),hh:c(2),a:h(r,i,!0),A:h(r,i,!1),m:String(i),mm:S.s(i,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return u.replace(v,(function(t,e){return e||m[t]||a.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(u,h,p){var m,v=S.p(h),d=M(u),$=(d.utcOffset()-this.utcOffset())*e,g=this-d,y=S.m(this,d);return y=(m={},m[c]=y/12,m[o]=y,m[f]=y/3,m[l]=(g-$)/6048e5,m[s]=(g-$)/864e5,m[i]=g/n,m[r]=g/e,m[a]=g/t,m)[v]||g,p?y:S.a(y)},$.daysInMonth=function(){return this.endOf(o).$D},$.$locale=function(){return _[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),u=D(t,e,!0);return u&&(n.$L=u),n},$.clone=function(){return S.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),x=w.prototype;return M.prototype=x,[["$ms",u],["$s",a],["$m",r],["$H",i],["$W",s],["$M",o],["$y",c],["$D",h]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,w,M),t.$i=!0),M},M.locale=D,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=_[y],M.Ls=_,M.p={},M}))},"8c42":function(t,e,n){}}]);