(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6956"],{"1e7c":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e._self._c;return n("div",{staticStyle:{"margin-top":"15px","margin-left":"15px","max-width":"600px"}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入peerId"},model:{value:e.peerId,callback:function(n){e.peerId=n},expression:"peerId"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.onSearch},slot:"append"})],1),n("div",{staticStyle:{margin:"20px"}}),n("el-form",{staticStyle:{"margin-left":"15px"},attrs:{inline:!0,"label-position":"left","label-width":"100px",model:e.peerInfo}},[n("el-form-item",{attrs:{label:"host"}},[n("el-input",{model:{value:e.peerInfo.host,callback:function(n){e.$set(e.peerInfo,"host",n)},expression:"peerInfo.host"}})],1),n("el-form-item",{attrs:{label:"conns"}},[n("el-input",{model:{value:e.peerInfo.conns,callback:function(n){e.$set(e.peerInfo,"conns",n)},expression:"peerInfo.conns"}})],1),n("el-form-item",{attrs:{label:"fail_conns"}},[n("el-input",{model:{value:e.peerInfo.fail_conns,callback:function(n){e.$set(e.peerInfo,"fail_conns",n)},expression:"peerInfo.fail_conns"}})],1),n("el-form-item",{attrs:{label:"join"}},[n("el-input",{model:{value:e.peerInfo.join,callback:function(n){e.$set(e.peerInfo,"join",n)},expression:"peerInfo.join"}})],1),n("el-form-item",{attrs:{label:"tag"}},[n("el-input",{model:{value:e.peerInfo.tag,callback:function(n){e.$set(e.peerInfo,"tag",n)},expression:"peerInfo.tag"}})],1),n("el-form-item",{attrs:{label:"version"}},[n("el-input",{model:{value:e.peerInfo.version,callback:function(n){e.$set(e.peerInfo,"version",n)},expression:"peerInfo.version"}})],1),n("el-form-item",{attrs:{label:"live"}},[n("el-input",{model:{value:e.peerInfo.live,callback:function(n){e.$set(e.peerInfo,"live",n)},expression:"peerInfo.live"}})],1),n("el-form-item",{attrs:{label:"dev"}},[n("el-input",{model:{value:e.peerInfo.dev,callback:function(n){e.$set(e.peerInfo,"dev",n)},expression:"peerInfo.dev"}})],1),n("el-form-item",{attrs:{label:"net_type"}},[n("el-input",{model:{value:e.peerInfo.net_type,callback:function(n){e.$set(e.peerInfo,"net_type",n)},expression:"peerInfo.net_type"}})],1),n("el-form-item",{attrs:{label:"city"}},[n("el-input",{model:{value:e.peerInfo.city,callback:function(n){e.$set(e.peerInfo,"city",n)},expression:"peerInfo.city"}})],1),n("el-form-item",{attrs:{label:"province"}},[n("el-input",{model:{value:e.peerInfo.province,callback:function(n){e.$set(e.peerInfo,"province",n)},expression:"peerInfo.province"}})],1),n("el-form-item",{attrs:{label:"country"}},[n("el-input",{model:{value:e.peerInfo.country,callback:function(n){e.$set(e.peerInfo,"country",n)},expression:"peerInfo.country"}})],1),n("el-form-item",{attrs:{label:"nat"}},[n("el-input",{model:{value:e.peerInfo.nat,callback:function(n){e.$set(e.peerInfo,"nat",n)},expression:"peerInfo.nat"}})],1),n("el-form-item",{attrs:{label:"isp"}},[n("el-input",{model:{value:e.peerInfo.isp,callback:function(n){e.$set(e.peerInfo,"isp",n)},expression:"peerInfo.isp"}})],1),n("el-form-item",{attrs:{label:"token"}},[n("el-input",{model:{value:e.peerInfo.token,callback:function(n){e.$set(e.peerInfo,"token",n)},expression:"peerInfo.token"}})],1),n("el-form-item",{attrs:{label:"ip"}},[n("el-input",{model:{value:e.peerInfo.ip,callback:function(n){e.$set(e.peerInfo,"ip",n)},expression:"peerInfo.ip"}})],1),n("el-form-item",{attrs:{label:"column"}},[n("el-input",{model:{value:e.peerInfo.column,callback:function(n){e.$set(e.peerInfo,"column",n)},expression:"peerInfo.column"}})],1),n("el-form-item",{attrs:{label:"abr"}},[n("el-input",{model:{value:e.peerInfo.abr,callback:function(n){e.$set(e.peerInfo,"abr",n)},expression:"peerInfo.abr"}})],1),n("el-form-item",{attrs:{label:"player_hooked"}},[n("el-input",{model:{value:e.peerInfo.player_hooked,callback:function(n){e.$set(e.peerInfo,"player_hooked",n)},expression:"peerInfo.player_hooked"}})],1),n("el-form-item",{attrs:{label:"seed"}},[n("el-input",{model:{value:e.peerInfo.seed,callback:function(n){e.$set(e.peerInfo,"seed",n)},expression:"peerInfo.seed"}})],1)],1)],1)},l=[],r=(o("a481"),o("b775"));function a(e){return Object(r["a"])({url:"inspect/peer/".concat(e),method:"get"})}var p={name:"peerInfo",data:function(){return{peerId:"",peerInfo:{host:"",conns:"",fail_conns:"",join:"",tag:"",version:"",live:"",dev:"",net_type:"",city:"",province:"",country:"",nat:"",isp:"",token:"",ip:"",column:"",abr:"",player_hooked:"",seed:""}}},methods:{onSearch:function(){var e=this;a(this.peerId).then((function(n){e.peerInfo=n.data,e.peerInfo.join=new Date(1e3*parseInt(e.peerInfo.join)).toLocaleString().replace(/:\d{1,2}$/," ")}))}}},i=p,s=o("2877"),c=Object(s["a"])(i,t,l,!1,null,"03b8d821",null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b6956.881c5574.js.map