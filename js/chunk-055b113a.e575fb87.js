(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-055b113a"],{"0a0d":function(t,e,n){"use strict";n("eeba")},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",a="minute",s="hour",u="day",o="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),a=n-r<0,s=e.clone().add(i+(a?-1:1),c);return+(-(i+(n-r)/(a?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:u,D:h,h:s,m:a,s:r,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=m;var D=function(t){return t instanceof w},M=function t(e,n,i){var r;if(!e)return g;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(r=a),n&&(y[a]=n,r=a);var s=e.split("-");if(!r&&s.length>1)return t(s[0])}else{var u=e.name;y[u]=e,r=u}return!i&&r&&(g=r),r||!i&&g},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},b=_;b.l=M,b.i=D,b.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=M(t.locale,null,!0),this.parse(t)}var $=m.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(v);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return b},$.isValid=function(){return!(this.$d.toString()===d)},$.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return S(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<S(t)},$.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!b.u(e)||e,l=b.p(t),d=function(t,e){var r=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},v=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case f:return i?d(1,0):d(31,11);case c:return i?d(1,m):d(0,m+1);case o:var g=this.$locale().weekStart||0,y=(p<g?p+7:p)-g;return d(i?$-y:$+(6-y),m);case u:case h:return v(_+"Hours",0);case s:return v(_+"Minutes",1);case a:return v(_+"Seconds",2);case r:return v(_+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,o=b.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[u]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[s]=l+"Hours",n[a]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[o],v=o===u?this.$D+(e-this.$W):e;if(o===c||o===f){var p=this.clone().set(h,1);p.$d[d](v),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](v);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[b.p(t)]()},$.add=function(i,l){var h,d=this;i=Number(i);var v=b.p(l),p=function(t){var e=S(d);return b.w(e.date(e.date()+Math.round(t*i)),d)};if(v===c)return this.set(c,this.$M+i);if(v===f)return this.set(f,this.$y+i);if(v===u)return p(1);if(v===o)return p(7);var m=(h={},h[a]=e,h[s]=n,h[r]=t,h)[v]||1,$=this.$d.getTime()+i*m;return b.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),a=this.$H,s=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=function(t,n,r,a){return t&&(t[n]||t(e,i))||r[n].slice(0,a)},f=function(t){return b.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:b.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:b.s(a,2,"0"),h:f(1),hh:f(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:b.s(s,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||v[t]||r.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,h,d){var v,p=b.p(h),m=S(i),$=(m.utcOffset()-this.utcOffset())*e,_=this-m,g=b.m(this,m);return g=(v={},v[f]=g/12,v[c]=g,v[l]=g/3,v[o]=(_-$)/6048e5,v[u]=(_-$)/864e5,v[s]=_/n,v[a]=_/e,v[r]=_/t,v)[p]||_,d?g:b.a(g)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return y[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=M(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return b.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},m}(),O=w.prototype;return S.prototype=O,[["$ms",i],["$s",r],["$m",a],["$H",s],["$W",u],["$M",c],["$y",f],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,w,S),t.$i=!0),S},S.locale=M,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=y[g],S.Ls=y,S.p={},S}))},e4be:function(t,e,n){"use strict";n.r(e);n("7f7f");var i=function(){var t=this,e=t._self._c;return e("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[t._l(t.list,(function(n){return[e("el-col",{key:n.url,staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-name"},[t._v(t._s(n.name))]),e("span",{staticClass:"card-panel-num",style:{color:-1===n.value?"red":""}},[t._v(t._s(n.value))]),e("div",{staticClass:"card-panel-text"},[t._v(t._s(n.url)+" "+t._s(n.version?" "+n.version:""))]),n.cpu_usage?e("div",{staticClass:"card-panel-text",style:{color:n.cpu_usage>=40?"red":""}},[t._v("cpu: "+t._s(n.cpu_usage))]):t._e(),t._l(n.certs,(function(i){return n.certs.length>0?[e("div",{key:i.name,staticClass:"card-panel-text",style:{color:i.isExpiredSoon?"red":""}},[t._v(t._s(i.name)+" "+t._s(i.expireAt))])]:t._e()}))],2)])])]}))],2)},r=[],a=n("7618"),s=(n("ac6a"),n("bc3a")),u=n.n(s),o=n("5a0c"),c=n.n(o),l=15,f=null,h={name:"SignalCustom",data:function(){return{token:"g65ASmli0uy",list:[{url:"https://itvhdsport.peerhub.net:2096/total_count",value:0,name:"法兰克福"},{url:"http://43.131.16.182/info",value:0,name:"itv-1"},{url:"http://162.62.224.104/info",value:0,name:"itv-2"},{url:"http://43.157.45.163/info",value:0,name:"itv-3"},{url:"http://43.157.59.103/info",value:0,name:"itv-4"},{url:"http://43.131.53.216/info",value:0,name:"itv-5"},{url:"http://43.157.4.156/info",value:0,name:"itv-6"},{url:"http://43.157.46.18/info",value:0,name:"itv-7"},{url:"http://43.157.104.201/info",value:0,name:"itv-8"},{url:"http://43.157.52.216/info",value:0,name:"itv-9"},{url:"http://43.157.6.238/info",value:0,name:"itv-10"},{url:"http://43.157.50.63/info",value:0,name:"itv-11"},{url:"http://43.157.83.115/info",value:0,name:"itv-12"},{url:"http://43.157.103.31/info",value:0,name:"itv-13"},{url:"http://49.51.161.207/info",value:0,name:"itv-14"},{url:"http://43.153.43.175/info",value:0,name:"bam-1"},{url:"http://43.153.44.17/info",value:0,name:"bam-2"},{url:"http://43.153.45.2/info",value:0,name:"bam-3"},{url:"http://43.153.117.221/info",value:0,name:"bam-4"},{url:"http://170.106.72.103/info",value:0,name:"bam-5"},{url:"http://49.51.186.121/info",value:0,name:"bam-6"},{url:"http://43.130.41.244/info",value:0,name:"bam-7"},{url:"http://170.106.172.32/info",value:0,name:"bam-8"},{url:"http://43.135.181.23/info",value:0,name:"bam-9"},{url:"http://43.153.94.198/info",value:0,name:"bam-10"},{url:"http://43.153.108.163/info",value:0,name:"bam-11"}]}},created:function(){this.loopGetData()},beforeDestroy:function(){clearTimeout(f)},methods:{fetchData:function(){var t=this;this.list.forEach((function(e){var n="".concat(e.url,"?token=").concat(t.token);u.a.get(n).then((function(t){if(e.certs=[],"number"===typeof t.data)e.value=t.data;else if("object"===Object(a["a"])(t.data)){var n=t.data;e.value=n.current_connections,e.version=n.version,e.cpu_usage=n.cpu_usage,n.cert_info?e.certs.push({name:n.cert_info.name,expireAt:c()(n.cert_info.expire_at).format("YY-MM-DD:HH"),isExpiredSoon:c()(n.cert_info.expire_at).diff(c()(),"day")<=l}):n.cert_infos&&n.cert_infos.length>0&&n.cert_infos.forEach((function(t){e.certs.push({name:t.name,expireAt:c()(t.expire_at).format("YY-MM-DD:HH"),isExpiredSoon:c()(t.expire_at).diff(c()(),"day")<=l})}))}})).catch((function(t){console.error(t),e.value=-1}))}))},loopGetData:function(){var t=this;this.fetchData(),f=setTimeout((function(){t.loopGetData()}),15e3)}}},d=h,v=(n("0a0d"),n("2877")),p=Object(v["a"])(d,i,r,!1,null,"568d6d2b",null);e["default"]=p.exports},eeba:function(t,e,n){}}]);