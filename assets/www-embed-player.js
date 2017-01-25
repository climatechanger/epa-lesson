(function(){var k,m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&Object.prototype.hasOwnProperty.call(c,d)?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function ba(){}
function ca(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){return"array"==da(a)}
function ga(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function t(a){return"string"==typeof a}
function ha(a){return"function"==da(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ja(a){return a[ka]||(a[ka]=++na)}
var ka="closure_uid_"+(1E9*Math.random()>>>0),na=0;function oa(a,b,c){return a.call.apply(a.bind,arguments)}
function pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oa:pa;return u.apply(null,arguments)}
function qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function ra(a,b){for(var c in b)a[c]=b[c]}
var v=Date.now||function(){return+new Date};
function w(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function sa(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
sa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ta(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(ua,Error);ua.prototype.name="CustomError";function va(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function wa(a){var b=xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ya(){var a=za,b;for(b in a)return!1;return!0}
function Aa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ba(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ea=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Fa(a,b){return a<b?-1:a>b?1:0}
function Ga(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ha=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Ha,void 0);var Ia=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",Ia,void 0);function Ja(a,b){return a in Ha?Ha[a]:b}
function x(a,b){ha(a)&&(a=Ka(a));return window.setTimeout(a,b)}
function Ka(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){y(b)}}:a}
function y(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=Ja("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),La("ERRORS",c))}
function Ma(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var Na=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Oa="Microsoft Internet Explorer"==navigator.appName;
function La(a){Ma(Ha,arguments)}
;function Pa(a){a&&(a.dataset?a.dataset[Qa("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ra(a,b){return a?a.dataset?a.dataset[Qa(b)]:a.getAttribute("data-"+b):null}
var Sa={};function Qa(a){return Sa[a]||(Sa[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function z(){this.f=this.f;this.G=this.G}
z.prototype.f=!1;z.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function Ta(a,b){a.f?p(void 0)?b.call(void 0):b():(a.G||(a.G=[]),a.G.push(p(void 0)?u(b,void 0):b))}
z.prototype.o=function(){if(this.G)for(;this.G.length;)this.G.shift()()};
function Ua(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Va(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ga(d)?Va.apply(null,d):Ua(d)}}
;var A;a:{var Wa=m.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){A=Xa;break a}}A=""}function C(a){return-1!=A.indexOf(a)}
;function D(a){Ma(Ha,arguments)}
function E(a,b){return a in Ha?Ha[a]:b}
;var Ya=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function $a(a,b){var c;a:{c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function ab(a,b){var c=Ya(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function db(a,b,c,d){return Array.prototype.splice.apply(a,eb(arguments,1))}
function eb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function fb(){this.f=this.b=null}
var hb=new sa(function(){return new gb},function(a){a.reset()},100);
fb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function gb(){this.next=this.scope=this.b=null}
gb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
gb.prototype.reset=function(){this.next=this.scope=this.b=null};function ib(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):x(a,b||0)}
;function jb(){this.b="";this.f=kb}
jb.prototype.la=!0;jb.prototype.ka=function(){return this.b};
var kb={};function lb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
;function mb(a){m.setTimeout(function(){throw a;},0)}
var nb;
function ob(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ta;c.ta=null;a()}};
return function(a){d.next={ta:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function pb(){this.b="";this.f=qb}
pb.prototype.la=!0;pb.prototype.ka=function(){return this.b};
function rb(a){return a instanceof pb&&a.constructor===pb&&a.f===qb?a.b:"type_error:SafeUrl"}
var sb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function tb(a){if(a instanceof pb)return a;a=a.la?a.ka():String(a);sb.test(a)||(a="about:invalid#zClosurez");return ub(a)}
var qb={};function ub(a){var b=new pb;b.b=a;return b}
ub("about:blank");function vb(a,b){wb||xb();yb||(wb(),yb=!0);var c=zb,d=hb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var wb;function xb(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);wb=function(){a.then(Ab)}}else wb=function(){var a=Ab;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(nb||(nb=ob()),nb(a)):m.setImmediate(a)}}
var yb=!1,zb=new fb;function Ab(){for(var a;a=zb.remove();){try{a.b.call(a.scope)}catch(b){mb(b)}ta(hb,a)}yb=!1}
;function Bb(){this.b=""}
Bb.prototype.la=!0;Bb.prototype.ka=function(){return this.b};
function Cb(a){var b=new Bb;b.b=a;return b}
Cb("<!DOCTYPE html>");Cb("");Cb("<br>");function Db(a,b){var c;c=b instanceof pb?b:tb(b);a.href=rb(c)}
function Eb(a,b){a.rel="stylesheet";a.href=b instanceof jb&&b.constructor===jb&&b.f===kb?b.b:"type_error:TrustedResourceUrl"}
;function G(a){z.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
w(G,z);k=G.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function Fb(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=$a(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=ba):(c&&ab(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.W=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Gb(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.L(c)}}return 0!=e}return!1};
function Gb(a,b,c){vb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.o=function(){G.B.o.call(this);this.clear();this.i.length=0};var Hb=r("yt.pubsub.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.L;G.prototype.publish=G.prototype.W;G.prototype.clear=G.prototype.clear;q("yt.pubsub.instance_",Hb,void 0);var Ib=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Ib,void 0);var Jb=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Jb,void 0);var Kb=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Kb,void 0);
var Lb=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Lb,void 0);function Mb(a,b){var c=Nb();if(c){var d=c.subscribe(a,function(){if(!Lb||Lb!=d){var c=arguments,f;f=function(){Ib[d]&&b.apply(window,c)};
try{Kb[a]?f():x(f,0)}catch(g){y(g)}}},void 0);
Ib[d]=!0;Jb[a]||(Jb[a]=[]);Jb[a].push(d);return d}return 0}
function Ob(a){var b=Nb();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),F(a,function(a){b.unsubscribeByKey(a);delete Ib[a]}))}
function Pb(a,b){var c=Nb();return c?c.publish.apply(c,arguments):!1}
function Qb(a){Jb[a]&&(a=Jb[a],F(a,function(a){Ib[a]&&delete Ib[a]}),a.length=0)}
function Rb(a){var b=Nb();if(b)if(b.clear(a),a)Qb(a);else for(var c in Jb)Qb(c)}
function Nb(){return r("yt.pubsub.instance_")}
;function Sb(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Tb,""),c=c.replace(Ub,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Vb(a,b)}
function Vb(a,b){var c=Wb(a),d=document.getElementById(c),e=d&&Ra(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Mb(c,b),g=""+ja(b);Xb[g]=e}f||(d=Yb(a,c,function(){Ra(d,"loaded")||(Pa(d),Pb(c),x(qa(Rb,c),0))}))}}
function Yb(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Zb(a,b){if(a&&b){var c=""+ja(b);(c=Xb[c])&&Ob(c)}}
function Wb(a){var b=document.createElement("a");Db(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ga(a)}
var Tb=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ub=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Xb={};var $b=null;function ac(){var a=E("BG_I",null),b=E("BG_IU",null),c=E("BG_P",void 0);b?Sb(b,function(){$b=new botguard.bg(c)}):a&&(eval(a),$b=new botguard.bg(c))}
function bc(){return null!=$b}
function cc(){return $b?$b.invoke():null}
;var dc=[],ec=!1;function fc(){function a(){ec=!0;"google_ad_status"in window?D("DCLKSTAT",1):D("DCLKSTAT",2)}
Sb("//static.doubleclick.net/instream/ad_status.js",a);dc.push(ib(function(){ec||"google_ad_status"in window||(Zb("//static.doubleclick.net/instream/ad_status.js",a),D("DCLKSTAT",3))},5E3))}
function gc(){return parseInt(E("DCLKSTAT",0),10)}
;function hc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function ic(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;B=n=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],l=e[4],n,I,c=0;80>c;c++)40>c?20>c?(n=h^d&(f^h),I=1518500249):(n=d^f^h,I=1859775393):60>c?(n=d&f|h&(d|f),I=2400959708):(n=d^f^h,I=3395469782),n=((a<<5|a>>>27)&4294967295)+n+l+I+b[c]&4294967295,l=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64;for(;d<c;)if(f[n++]=a[d++],B++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64}
function d(){var a=[],d=8*B;56>n?c(h,56-n):c(h,64-(n-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var n,B;a();return{reset:a,update:c,digest:d,Ha:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var jc=window,kc=document,lc=jc.location;function mc(){}
var nc=/\[native code\]/;function H(a,b,c){return a[b]=a[b]||c}
function oc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function pc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function J(){var a;if((a=Object.create)&&nc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var qc=H(jc,"gapi",{});function rc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function sc(a){a=String(a);if(rc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function tc(a){return eval("("+a+")")}
function uc(a){var b=[];vc(new wc,a,b);return b.join("")}
function wc(){}
function vc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],vc(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),xc(d,c),c.push(":"),vc(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":xc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function xc(a,b){b.push('"',a.replace(zc,function(a){var b=yc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),yc[a]=b);return b}),'"')}
;function Ac(a,b){this.width=a;this.height=b}
k=Ac.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Bc(a){this.b=a||{cookie:""}}
var Cc=/\s*;\s*/;k=Bc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(v()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Cc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(Cc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Dc=new Bc("undefined"==typeof document?null:document);Dc.f=3950;function Ec(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Fc(a,b){var c=Gc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Hc(){}
;function Ic(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Jc||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Ic.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ic.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ic.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Jc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Lc(a,b,c){this.b=a;this.g=b;this.f=c}
var Mc=1;function Nc(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Oc=null;"undefined"!=typeof XMLHttpRequest?Oc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Oc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Pc(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Qc(a){this.b=a}
Qc.prototype.set=function(a,b){p(b)?this.b.set(a,uc(b)):this.b.remove(a)};
Qc.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return sc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qc.prototype.remove=function(a){this.b.remove(a)};var K;K=H(jc,"___jsl",J());H(K,"I",0);H(K,"hel",10);function Rc(){var a=lc.href,b;if(K.dpo)b=K.h;else{b=K.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Sc(a){var b=H(K,"PQ",[]);K.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Tc(a){return H(H(K,"H",J()),a,J())}
;function Uc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function Vc(a){this.b=a}
w(Vc,Qc);function Wc(a){this.data=a}
function Xc(a){return!p(a)||a instanceof Wc?a:new Wc(a)}
Vc.prototype.set=function(a,b){Vc.B.set.call(this,a,Xc(b))};
Vc.prototype.f=function(a){a=Vc.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Vc.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var Yc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match(Yc)}
function Zc(a){return a?decodeURI(a):a}
function $c(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function ad(a,b,c){if(ea(b))for(var d=0;d<b.length;d++)ad(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function bd(a,b,c){for(c=c||0;c<b.length;c+=2)ad(b[c],b[c+1],a);return a}
function cd(a,b){for(var c in b)ad(c,b[c],a);return a}
function dd(a){a=cd([],a);a[0]="";return a.join("")}
function ed(a,b){return $c(2==arguments.length?bd([a],arguments[1],0):bd([a],arguments,1))}
;function M(a){return E("EXPERIMENT_FLAGS",{})[a]}
;function fd(){return{apiaryHost:E("APIARY_HOST",void 0),Fa:E("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:E("GAPI_HINT_OVERRIDE"),gapiHintParams:E("GAPI_HINT_PARAMS",void 0),innertubeApiKey:E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:E("INNERTUBE_API_VERSION",void 0),Oa:E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Qa:E("INNERTUBE_CONTEXT_HL",void 0),Pa:E("INNERTUBE_CONTEXT_GL",void 0),mb:E("XHR_APIARY_HOST",void 0)}}
function gd(a){a={client:{hl:a.Qa,gl:a.Pa,clientName:a.Oa,clientVersion:a.innertubeContextClientVersion}};E("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:E("DELEGATED_SESSION_ID")});return a}
;function hd(a,b,c){var d=[],e=[];if(1==(ea(c)?2:1))return e=[b,a],F(d,function(a){e.push(a)}),id(e.join(" "));
var f=[],g=[];F(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(a){e.push(a)});
a=id(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function id(a){var b=ic();b.update(a);return b.Ha().toLowerCase()}
;var jd=H(K,"perf",J());H(jd,"g",J());var kd=H(jd,"i",J());H(jd,"r",[]);J();J();function ld(a,b,c){b&&0<b.length&&(b=md(b),c&&0<c.length&&(b+="___"+md(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=H(kd,"_p",J()),H(b,c,J())[a]=(new Date).getTime(),b=jd.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function md(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function nd(a){this.b=a}
w(nd,Vc);nd.prototype.set=function(a,b,c){if(b=Xc(b)){if(c){if(c<v()){nd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=v()}nd.B.set.call(this,a,b)};
nd.prototype.f=function(a,b){var c=nd.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<v()||!!d&&d>v()}if(d)nd.prototype.remove.call(this,a);else return c}};function od(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ea(b[f])?cb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function pd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=od(d[1]||""),e;for(e in b)d[e]=b[e];return $c(cd([a],d))+c}
;var qd=J(),rd=[];function N(a){throw Error("Bad hint"+(a?": "+a:""));}
rd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?K[b]=H(K,b,[]).concat(c):H(K,b,c)}if(b=a.u)a=H(K,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var sd=/^(\/[a-zA-Z0-9_\-]+)+$/,td=[/\/amp\//,/\/amp$/,/^\/amp$/],ud=/^[a-zA-Z0-9\-_\.,!]+$/,vd=/^gapi\.loaded_[0-9]+$/,wd=/^[a-zA-Z0-9,._-]+$/;function xd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=qd[f],h=null;g?h=g(e,b,c,d):N("no hint processor for: "+f);h||N("failed to generate load url");b=h;c=b.match(yd);(d=b.match(zd))&&1===d.length&&Ad.test(b)&&c&&1===c.length||N("failed sanity: "+a);return h}
function Bd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Cd(a);vd.test(c)||N("invalid_callback");b=Dd(b);d=d&&d.length?Dd(d):null;return[encodeURIComponent(a.$a).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.sa?"/am="+e(a.sa):"",a.za?"/rs="+e(a.za):"",a.Da?"/t="+e(a.Da):"","/cb=",e(c)].join("")}
function Cd(a){"/"!==a.charAt(0)&&N("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))N("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");sd.test(b)||N("invalid_prefix");c=0;for(d=td.length;c<d;++c)td[c].test(b)&&N("invalid_prefix");c=Ed(a,
"k",!0);d=Ed(a,"am");e=Ed(a,"rs");a=Ed(a,"t");return{$a:b,version:c,sa:d,za:e,Da:a}}
function Dd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");wd.test(e)&&b.push(e)}return b.join(",")}
function Ed(a,b,c){a=a[b];!a&&c&&N("missing: "+b);if(a){if(ud.test(a))return a;N("invalid: "+b)}return null}
var Ad=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,zd=/\/cb=/g,yd=/\/\//g;function Fd(){var a=Rc();if(!a)throw Error("Bad hint");return a}
qd.m=function(a,b,c,d){(a=a[0])||N("missing_hint");return"https://apis.google.com"+Bd(a,b,c,d)};
var Gd=decodeURI("%73cript"),Hd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Id(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>oc.call(b,e)&&c.push(e)}return c}
function Jd(){var a=K.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Hd)?a:K.nonce=null;var b=H(K,"us",[]);if(!b||!b.length)return K.nonce=null;for(var c=kc.getElementsByTagName(Gd),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Hd))return K.nonce=a}}return null}
function Kd(a){if("loading"!=kc.readyState)Ld(a);else{var b=Jd(),c="";null!==b&&(c=' nonce="'+b+'"');kc.write("<"+Gd+' src="'+encodeURI(a)+'"'+c+"></"+Gd+">")}}
function Ld(a){var b=kc.createElement(Gd);b.setAttribute("src",a);a=Jd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=kc.getElementsByTagName(Gd)[0])?a.parentNode.insertBefore(b,a):(kc.head||kc.body||kc.documentElement).appendChild(b)}
function Md(a,b){var c=b&&b._c;if(c)for(var d=0;d<rd.length;d++){var e=rd[d][0],f=rd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Nd(a,b,c){Od(function(){var c;c=b===Rc()?H(qc,"_",J()):J();c=H(Tc(b),"_",c);a(c)},c)}
function Pd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Md(a,c);var d=a?a.split(":"):[],e=c.h||Fd(),f=H(K,"ah",J());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g.length&&g[g.length-1]||null,B=n;n&&n.hint==l||(B={hint:l,features:[]},g.push(B));B.features.push(h)}var I=g.length;if(1<I){var fa=c.callback;fa&&(c.callback=function(){0==--I&&fa()})}for(;d=g.shift();)Qd(d.features,c,d.hint)}else Qd(d||[],c,e)}
function Qd(a,b,c){function d(a,b){if(I)return 0;jc.clearTimeout(B);fa.push.apply(fa,aa);var d=((qc||{}).config||{}).update;d?d(f):f&&H(K,"cu",[]).push(f);if(b){ld("me0",a,Z);try{Nd(b,c,n)}finally{ld("me1",a,Z)}}return 1}
a=pc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var B=null,I=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=H(Tc(c),"r",[]).sort(),fa=H(Tc(c),"L",[]).sort(),Z=[].concat(l);0<g&&(B=jc.setTimeout(function(){I=!0;h()},g));
var aa=Id(a,fa);if(aa.length){var aa=Id(a,l),la=H(K,"CP",[]),ma=la.length;la[ma]=function(a){function b(){var a=la[ma+1];a&&a()}
function c(b){la[ma]=null;d(aa,a)&&Sc(function(){e&&e();b()})}
if(!a)return 0;ld("ml1",aa,Z);0<ma&&la[ma-1]?la[ma]=function(){c(b)}:c(b)};
if(aa.length){var Kc="loaded_"+K.I++;qc[Kc]=function(a){la[ma](a);qc[Kc]=null};
a=xd(c,aa,"gapi."+Kc,l);l.push.apply(l,aa);ld("ml0",aa,Z);b.sync||jc.___gapisync?Kd(a):Ld(a)}else la[ma](mc)}else d(aa)&&e&&e()}
function Od(a,b){if(K.hee&&0<K.hel)try{return a()}catch(c){b&&b(c),K.hel--,Pd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
qc.load=function(a,b){return Od(function(){return Pd(a,b)})};var Rd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Sd(){}
Sd.prototype.next=function(){throw Rd;};
Sd.prototype.ca=function(){return this};
function Td(a){if(a instanceof Sd)return a;if("function"==typeof a.ca)return a.ca(!1);if(ga(a)){var b=0,c=new Sd;c.next=function(){for(;;){if(b>=a.length)throw Rd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ud(a,b){if(ga(a))try{F(a,b,void 0)}catch(c){if(c!==Rd)throw c;}else{a=Td(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Rd)throw c;}}}
function Vd(a){if(ga(a))return bb(a);a=Td(a);var b=[];Ud(a,function(a){b.push(a)});
return b}
;function Wd(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Wd.prototype.equals=function(a){return a instanceof Wd&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Wd.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Wd.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Wd.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};var Xd=C("Opera"),O=C("Trident")||C("MSIE"),Yd=C("Edge"),Zd=C("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),$d=-1!=A.toLowerCase().indexOf("webkit")&&!C("Edge"),ae=C("Macintosh"),be=C("Windows"),ce=C("Android"),de=Uc(),ee=C("iPad"),fe=C("iPod");function ge(){var a=m.document;return a?a.documentMode:void 0}
var he;a:{var ie="",je=function(){var a=A;if(Zd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Yd)return/Edge\/([\d\.]+)/.exec(a);if(O)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($d)return/WebKit\/(\S+)/.exec(a);if(Xd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
je&&(ie=je?je[1]:"");if(O){var ke=ge();if(null!=ke&&ke>parseFloat(ie)){he=String(ke);break a}}he=ie}var le=he,Gc={};
function P(a){return Fc(a,function(){for(var b=0,c=Ea(String(le)).split("."),d=Ea(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Fa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Fa(0==g[2].length,0==h[2].length)||Fa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var me;var ne=m.document;me=ne&&O?ge()||("CSS1Compat"==ne.compatMode?parseInt(le,10):5):void 0;!Zd&&!O||O&&9<=Number(me)||Zd&&P("1.9.1");O&&P("9");function oe(a){this.b=a}
w(oe,nd);function pe(){}
w(pe,Hc);pe.prototype.clear=function(){var a=Vd(this.ca(!0)),b=this;F(a,function(a){b.remove(a)})};var qe=C("Firefox"),re=Uc()||C("iPod"),se=C("iPad"),te=C("Android")&&!(lb()||C("Firefox")||C("Opera")||C("Silk")),ue=lb(),ve=C("Safari")&&!(lb()||C("Coast")||C("Opera")||C("Edge")||C("Silk")||C("Android"))&&!(Uc()||C("iPad")||C("iPod"));function we(a){xe();var b=new jb;b.b=a;return b}
var xe=ba;function Q(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=ba)try{var c=this;a.call(b,function(a){ye(c,2,a)},function(a){ye(c,3,a)})}catch(d){ye(this,3,d)}}
function ze(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
ze.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Ae=new sa(function(){return new ze},function(a){a.reset()},100);
function Be(a,b,c){var d=Ae.get();d.g=a;d.f=b;d.context=c;return d}
function Ce(a){if(a instanceof Q)return a;var b=new Q(ba);ye(b,2,a);return b}
function De(a){return new Q(function(b,c){c(a)})}
Q.prototype.then=function(a,b,c){return Ee(this,ha(a)?a:null,ha(b)?b:null,c)};
Ec(Q);Q.prototype.cancel=function(a){0==this.b&&vb(function(){var b=new Fe(a);Ge(this,b)},this)};
function Ge(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ge(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):He(c),Ie(c,e,3,b)))}a.g=null}else ye(a,3,b)}
function Je(a,b){a.f||2!=a.b&&3!=a.b||Ke(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Ee(a,b,c,d){var e=Be(null,null,null);e.b=new Q(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Fe?g(b):a(e)}catch(n){g(n)}}:g});
e.b.g=a;Je(a,e);return e.b}
Q.prototype.C=function(a){this.b=0;ye(this,2,a)};
Q.prototype.G=function(a){this.b=0;ye(this,3,a)};
function ye(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,g=a.G;if(e instanceof Q)Je(e,Be(f||ba,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(ia(e))try{var l=e.then;if(ha(l)){Le(e,l,f,g,a);d=!0;break a}}catch(n){g.call(a,n);d=!0;break a}d=!1}}}d||(a.w=c,a.b=b,a.g=null,Ke(a),3!=b||c instanceof Fe||Me(a,c))}}
function Le(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ke(a){a.l||(a.l=!0,vb(a.D,a))}
function He(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Q.prototype.D=function(){for(var a;a=He(this);)Ie(this,a,this.b,this.w);this.l=!1};
function Ie(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Ne(b,c,d);else try{b.i?b.g.call(b.context):Ne(b,c,d)}catch(e){Oe.call(null,e)}ta(Ae,b)}
function Ne(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Me(a,b){a.j=!0;vb(function(){a.j&&Oe.call(null,b)})}
var Oe=mb;function Fe(a){ua.call(this,a)}
w(Fe,ua);Fe.prototype.name="cancel";function Pe(a){this.b=a}
w(Pe,pe);k=Pe.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.ca=function(a){var b=0,c=this.b,d=new Sd;d.next=function(){if(b>=c.length)throw Rd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Qe(a){var b=document;return t(a)?b.getElementById(a):a}
function Re(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Se(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Te(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ue(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(Ue,Pe);function Ve(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(Ve,Pe);function We(a){this.b=a||fd();Xe||(Xe=Ye(this.b))}
var Xe=null;function Ye(a){return(new Q(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ha(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Da(d,{_c:{jsl:{h:E("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||E("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=od(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&Da(d,{_c:{jsl:{h:h}}})}Pd("client",d)}catch(l){y(l)}})).then(function(){})}
We.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",E("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
We.prototype.f=function(){return{context:gd(this.b)}};
We.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=x(function(){e||(e=!0,c.N&&c.N())},c.timeout));
Ze(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function Ze(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":E("VISITOR_DATA")},method:"POST",body:uc(c)},f=u(a.i,a);Xe.then(function(){f();r("gapi.client.request")(e).execute(d||ba)})}
;var $e=r("yt.dom.getNextId_");if(!$e){$e=function(){return++af};
q("yt.dom.getNextId_",$e,void 0);var af=0};var bf={log_event:"events",log_interaction:"interactions"},cf={},df={},ef=0,za=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",za,void 0);function ff(a,b){za[a.endpoint]=za[a.endpoint]||[];var c=za[a.endpoint];c.push(a.wa);df[a.endpoint]=b;c.length>=(Number(M("web_logging_max_batch")||0)||20)?gf():hf()}
function gf(){window.clearTimeout(ef);if(!ya()){for(var a in za){var b=cf[a];if(!b){b=df[a];if(!b)continue;b=new b;cf[a]=b}var c=b.f();c.requestTimeMs=Math.round(Na());c[bf[a]]=za[a];b.g(a,c,{});delete za[a]}ya()||hf()}}
function hf(){window.clearTimeout(ef);ef=x(gf,E("LOGGING_BATCH_TIMEOUT",1E4))}
;function jf(){if(!kf&&!lf||!window.JSON)return null;var a;try{a=kf.get("yt-player-two-stage-token")}catch(b){}if(!t(a))try{a=lf.get("yt-player-two-stage-token")}catch(b){}if(!t(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var lf,mf=new Ue;lf=mf.isAvailable()?new oe(mf):null;var kf,nf=new Ve;kf=nf.isAvailable()?new oe(nf):null;var xa=r("yt.events.listeners_")||{};q("yt.events.listeners_",xa,void 0);var of=r("yt.events.counter_")||{count:0};q("yt.events.counter_",of,void 0);function pf(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return wa(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function qf(a,b,c){if(!a||!a.addEventListener&&!a.attachEvent)return"";var d=pf(a,b,c);if(d)return d;var d=++of.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new Ic(d);if(!Te(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Ic(b);
b.currentTarget=a;return c.call(a,b)};
f=Ka(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);xa[d]=[a,b,c,f,!1];return d}
function rf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(a){if(a in xa){var b=xa[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete xa[a]}}))}
;function sf(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Ka(b)(l)}
var l=Oc&&Oc();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=tf(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function tf(a,b){b=b||{};var c;c||(c=window.location.href);var d=L(a)[1]||null,e=Zc(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Zc(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in uf){if((e=d=E(uf[f]))&&!(e=c)){var e=f,g=E("CORS_HEADER_WHITELIST")||{},h=Zc(L(a)[3]||null);e=h?(g=g[h])?0<=Ya(g,e):!1:!0}e&&(b[f]=d)}return b}
function vf(a,b){b.method="POST";b.A||(b.A={});wf(a,b)}
function xf(a,b){var c=E("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.qb&&(!Zc(L(a)[3]||null)||b.withCredentials||Zc(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.A&&b.A[c])}
function wf(a,b){var c=b.format||"JSON";b.Na&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=E("XSRF_FIELD_NAME",void 0),e=E("XSRF_TOKEN",void 0),f=b.oa;f&&(f[d]&&delete f[d],a=pd(a,f||{}));var g=b.postBody||"",f=b.A;xf(a,b)&&(f||(f={}),f[d]=e);f&&t(g)&&(d=od(g),Da(d,f),g=b.xa&&"JSON"==b.xa?JSON.stringify(d):dd(d));var h=!1,l,n=sf(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=Pc(a),e=null;if(d||400<=a.status&&
500>a.status)e=yf(c,a,b.pb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.na&&b.na.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.N&&0<b.timeout&&(l=x(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.N.call(b.context||m,n))},b.timeout))}
function yf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=tc(a));break;case "XML":if(b=(b=b.responseXML)?zf(b):null)d={},F(b.getElementsByTagName("*"),function(a){d[a.tagName]=Af(a)})}c&&Bf(d);
return d}
function Bf(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Cb(a[b]);a[c]=d}else Bf(a[b])}}
function zf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Af(a){var b="";F(a.childNodes,function(a){b+=a.nodeValue});
return b}
var uf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Cf={},Df=0;function Ef(){this.b=fd()}
Ef.prototype.f=function(){return{context:gd(this.b)}};
Ef.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":E("VISITOR_DATA")},A:b,xa:"JSON",N:c.N,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=hc(String(m.location.href)),e=m.__OVERRIDE_SID;null==e&&(e=(new Bc(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==d&&(d=(new Bc(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(m.location.href);
c=f&&d&&e?[e,hd(hc(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=E("SESSION_INDEX",0));vf("//"+this.b.mb+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function Ff(){if(null==r("_lact",window)){var a=parseInt(E("LACT"),10),a=isFinite(a)?v()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Gf();qf(document,"keydown",Gf);qf(document,"keyup",Gf);qf(document,"mousedown",Gf);qf(document,"mouseup",Gf);Mb("page-mouse",Gf);Mb("page-scroll",Gf);Mb("page-resize",Gf)}}
function Gf(){null==r("_lact",window)&&(Ff(),r("_lact",window));var a=v();q("_lact",a,window);Pb("USER_ACTIVE")}
function Hf(){var a=r("_lact",window);return null==a?-1:Math.max(v()-a,0)}
;function If(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||Na());e[a]=b;M("web_gel_lact")&&(e.context={lastActivityMs:Hf()});ff({endpoint:"log_event",wa:e},c)}
;function Jf(a,b,c){Kf(Lf(),{attachChild:{csn:a,parentVisualElement:Nc(b),visualElements:[Nc(c)]}},void 0)}
function Mf(a,b){var c=Lf(),d=Za(b,function(a){return Nc(a)});
Kf(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function Kf(a,b,c){b.eventTimeMs=Math.round(Na());b.lactMs=Hf();c&&(b.clientData=Nf(c));ff({endpoint:"log_interaction",wa:b},a)}
function Nf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Za(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Lf(){return M("enable_youtubei_innertube")?Ef:We}
;function Of(){var a=E("ROOT_VE_TYPE",void 0);return a?new Lc(void 0,a,void 0):null}
function Pf(){var a=E("client-screen-nonce",void 0);a||(a=E("EVENT_ID",void 0));return a}
;var Qf=v().toString();function Rf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Ja("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=E("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Zc(L(window.location.href)[3]||null);f&&e.push(f);f=Zc(L(d)[3]||null);if(0<=Ya(e,f)||!f&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(e=document.createElement("a"),Db(e,d),d=e.href),d){var f=L(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Pf();d="ST-"+Ga(d).toString(36);e=b?dd(b):"";Dc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Lc(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h,l;h=void 0===h?{}:h;l=void 0===l?"":l;c=window.location;a=$c(cd([a],h))+l;a=a instanceof pb?a:tb(a);c.href=rb(a)}return!0}
;function Sf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ba(Tf);this.assets=a.assets||{};this.attrs=a.attrs||Ba(Uf);this.params=a.params||Ba(Vf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Tf={enablejsapi:1},Uf={},Vf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Wf(a){a instanceof Sf||(a=new Sf(a));return a}
function Xf(a){var b=new Sf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==da(d)?Ba(d):d}return b}
;function Yf(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,l,n;if(Oa)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(B){g=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),g=l.appendChild(n);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(B){h=""}l&&n&&l.removeChild(n);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ca(Yf);function Zf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function $f(){z.call(this);this.b=new G;Ta(this,qa(Ua,this.b))}
w($f,z);$f.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
$f.prototype.L=function(a){return this.f?!1:this.b.L(a)};
$f.prototype.j=function(a,b){this.f||this.b.W.apply(this.b,arguments)};function ag(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function bg(a,b,c,d){z.call(this);this.i=b||null;this.D="*";this.j=c||null;this.b=null;this.channel=d||null;this.J=!!a;this.C=u(this.K,this);window.addEventListener("message",this.C)}
w(bg,z);bg.prototype.K=function(a){if(!("*"!=this.j&&a.origin!=this.j||this.i&&a.source!=this.i)&&t(a.data)){var b;try{b=sc(a.data)}catch(c){return}if(!(null==b||this.J&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.j=this.D=a.origin:y(Error("MessageEvent origin is null"),"WARNING");this.i=a.source;this.b=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.l&&(this.w&&!(0<=Ya(this.w,b.func))||this.l(b.func,b.args))}}};
bg.prototype.sendMessage=function(a,b){var c=b||this.i;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=uc(a);c.postMessage(d,this.D)}catch(e){y(e,"WARNING")}}};
bg.prototype.o=function(){window.removeEventListener("message",this.C);bg.B.o.call(this)};function cg(a,b,c){bg.call(this,a,b,c||E("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.w=this.g=this.l=null}
w(cg,bg);function dg(a){if(window.spf){var b=a.match(eg);spf.style.load(a,b?b[1]:"",void 0)}else fg(a)}
function fg(a){var b=gg(a),c=document.getElementById(b),d=c&&Ra(c,"loaded");d||c&&!d||(c=hg(a,b,function(){Ra(c,"loaded")||(Pa(c),Pb(b),x(qa(Rb,b),0))}))}
function hg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=we(a);Eb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function gg(a){var b=document.createElement("a");Db(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ga(a)}
var eg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var ig={},jg=0;function kg(a,b){a&&(E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?sf(a,b):lg(a,b))}
function lg(a,b){var c=new Image,d=""+jg++;ig[d]=c;c.onload=c.onerror=function(){b&&ig[d]&&b();delete ig[d]};
c.src=a}
;function mg(){var a=Ba(ng);return new Q(function(b,c){a.F=function(a){Pc(a)?b(a):c(new og("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new og("Unknown request error","net.unknown"))};
a.N=function(){c(new og("Request timed out","net.timeout"))};
wf("//googleads.g.doubleclick.net/pagead/id",a)})}
function og(a,b){ua.call(this,a+", errorCode="+b);this.errorCode=b}
w(og,ua);og.prototype.name="PromiseAjaxError";var pg;var qg=A,qg=qg.toLowerCase();if(-1!=qg.indexOf("android")){var rg=qg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(rg)pg=Number(rg[1]);else{var sg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},tg=[],ug=0,vg;for(vg in sg)tg[ug++]=vg;var wg=qg.match("("+tg.join("|")+")");pg=wg?sg[wg[0]]:0}}else pg=void 0;var xg=A,yg=xg.match(/\((BB10|PlayBook|BlackBerry);/);!yg||2>yg.length||xg.match(/Version\/(\d+\.\d+)/);A.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var zg;var Ag=A,Bg=Ag.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Bg||2>Bg.length)zg=void 0;else{var Cg=Ag.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);zg=Cg&&6==Cg.length?Number(Cg[5].replace("_",".")):0}0<=zg&&0<=A.search("Safari")&&A.search("Version");var Dg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Eg=['audio/mp4; codecs="mp4a.40.2"'];O&&P("9");!$d||P("528");Zd&&P("1.9b")||O&&P("8")||Xd&&P("9.5")||$d&&P("528");Zd&&!P("8")||O&&P("9");function Fg(a){z.call(this);this.b=[];this.g=a||this}
w(Fg,z);function Gg(a,b,c,d){d=Ka(u(d,a.g));d={target:b,name:c,ha:d};b.addEventListener(c,d.ha,void 0);a.b.push(d)}
function Hg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ha)}}
Fg.prototype.o=function(){Hg(this);Fg.B.o.call(this)};function R(a,b){this.version=a;this.args=b}
function Ig(a){if(!a.Ba){var b={};a.call(b);a.Ba=b.version}return a.Ba}
function Jg(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Ig(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var Kg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Lg(a){R.call(this,1,arguments)}
w(Lg,R);var Mg=new S("timing-sent",Lg);var Ng=r("yt.pubsub2.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.L;G.prototype.publish=G.prototype.W;G.prototype.clear=G.prototype.clear;q("yt.pubsub2.instance_",Ng,void 0);var Og=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Og,void 0);var Pg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Pg,void 0);var Qg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Qg,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=Rg();c&&c.publish.call(c,a.toString(),a,b)}
function U(a,b){var c=Rg();if(!c)return 0;var d=c.subscribe(a.toString(),function(c,f){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=d){var e=function(){if(Og[d])try{if(f&&a instanceof S&&a!=c)try{f=Jg(a.b,f)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(window,f)}catch(h){y(h)}};
Qg[a.toString()]?r("yt.scheduler.instance")?ib(e,void 0):x(e,0):e()}});
Og[d]=!0;Pg[a.toString()]||(Pg[a.toString()]=[]);Pg[a.toString()].push(d);return d}
function Sg(a){var b=Rg();b&&("number"==typeof a&&(a=[a]),F(a,function(a){b.unsubscribeByKey(a);delete Og[a]}))}
function Rg(){return r("yt.pubsub2.instance_")}
;function Tg(a,b,c){z.call(this);this.b=a;this.j=b||0;this.g=c;this.i=u(this.Ia,this)}
w(Tg,z);k=Tg.prototype;k.V=0;k.o=function(){Tg.B.o.call(this);this.stop();delete this.b;delete this.g};
k.start=function(a){this.stop();var b=this.i;a=p(a)?a:this.j;if(!ha(b))if(b&&"function"==typeof b.handleEvent)b=u(b.handleEvent,b);else throw Error("Invalid listener argument");this.V=2147483647<Number(a)?-1:m.setTimeout(b,a||0)};
k.stop=function(){this.isActive()&&m.clearTimeout(this.V);this.V=0};
k.isActive=function(){return 0!=this.V};
k.Ia=function(){this.V=0;this.b&&this.b.call(this.g)};var Ug={vc:!0},Vg={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},Wg="ap c cver ei yt_fss yt_li".split(" "),Xg=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Yg=u(Kg.clearResourceTimings||Kg.webkitClearResourceTimings||Kg.mozClearResourceTimings||Kg.msClearResourceTimings||Kg.oClearResourceTimings||ba,Kg);
function Zg(a,b){if(!b&&"_"!=a[0]){var c=a;Kg.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Kg.mark(c))}var c=$g(),d=b||Na();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(ah()["tick_"+a]=b)||Na();M("csi_on_gel")?(c=bh(),"_start"==a?If("latencyActionBaselined",{clientActionNonce:c},Ef,b):If("latencyActionTicked",{tickName:a,clientActionNonce:c},Ef,b),c=!0):c=!1;if(c=!c)c=!r("yt.timing.pingSent_");if(c&&(d=E("TIMING_ACTION",void 0),c=$g(),r("yt.timing.ready_")&&d&&c._start&&ch())){var d=
!0,e=E("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&dh()}}
function eh(){var a=fh().info.yt_lt="hot_bg";ah().info_yt_lt=a;if(M("csi_on_gel"))if("yt_lt"in Vg){var b={},c=Vg.yt_lt;0<=Ya(Xg,c)&&(a=!!a);b[c]=a;a=bh();b.clientActionNonce=a;If("latencyActionInfo",b,Ef)}else"yt_lt"in Wg||y(Error("Unknown label yt_lt logged with GEL CSI."))}
function ch(){var a=$g();if(a.aft)return a.aft;for(var b=E("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function dh(){if(!M("csi_on_gel")){var a=$g(),b=fh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ea(a[d])){var e=d.slice(1);if(e in Ug){var f=Za(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))gh(f,e),hh(),Yg(),ih(!1,void 0),D("PREVIOUS_ACTION",E("TIMING_ACTION")),D("TIMING_ACTION","")}else{var g=E("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:E("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+r("ytplayer.config.assets.js");(l=Kg.getEntriesByName?Kg.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):delete b.h5jse}a.aft=
ch();jh()&&"youtube"==g&&(eh(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=Na();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,n.push(d+"."+g));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);gh(f,e,void 0);T(Mg,new Lg(b.aft+(h||0)))}}}
function gh(a,b,c){if(M("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||kg(a,void 0)}catch(f){kg(a,void 0)}else kg(a);ih(!0,c)}
function bh(){var a=fh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=v();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Qf)for(c=1,d=0;d<Qf.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Qf.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");fh().nonce=a}return a}
function $g(){return fh().tick}
function ah(){var a=fh();"gel"in a||(a.gel={});return a.gel}
function fh(){return r("ytcsi.data_")||hh()}
function hh(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function ih(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function jh(){var a=$g(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==fh().info.yt_pvis}
;new Tg(kh,1E3);function kh(){Zg("vptl",0);Zg("vpl",0)}
;var lh={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function mh(a,b){z.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.$=this.S=null;this.U=new G;Ta(this,qa(Ua,this.U));this.j={};this.J=this.aa=this.i=this.ga=this.b=null;this.X=!1;this.K=this.D=this.P=this.R=null;this.ba={};this.Ea=["onReady"];this.Y=new Fg(this);Ta(this,qa(Ua,this.Y));this.ea=null;this.qa=NaN;this.Z={};nh(this);this.H("onDetailedError",u(this.Ua,this));this.H("onTabOrderChange",u(this.Ga,this));this.H("onTabAnnounce",u(this.ra,this));this.H("WATCH_LATER_VIDEO_ADDED",
u(this.Va,this));this.H("WATCH_LATER_VIDEO_REMOVED",u(this.Wa,this));qe||(this.H("onMouseWheelCapture",u(this.Sa,this)),this.H("onMouseWheelRelease",u(this.Ta,this)));this.H("onAdAnnounce",u(this.ra,this));this.M=new Fg(this);Ta(this,qa(Ua,this.M));this.fa=!1;this.da=null}
w(mh,z);var oh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=mh.prototype;k.pa=function(a,b){this.f||(ph(this,a),qh(this,b),this.C&&rh(this))};
function ph(a,b){a.ga=b;a.b=Xf(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.aa||(a.aa=sh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=ag(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=ag(Number(c)||c)}
k.Ka=function(){return this.ga};
function rh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function th(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Zf(Yf.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function uh(a,b){if((!b||(5!=(lh[b.errorCode]||5)?0:-1!=oh.indexOf(b.errorCode)))&&th(a)){var c=vh(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Wf(c));d.args.autoplay=1;d.args.html5_unavailable="1";ph(a,d);qh(a,"flash")}}
function qh(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&th(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==pg)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Dg:Eg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=wh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?th(a)?"flash":"unsupported":"html5"}("flash"==b?a.kb:a.lb).call(a)}}
function wh(a){var b=!0,c=vh(a);c&&a.b&&(a=a.b,b=Ra(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
k.lb=function(){if(!this.X){var a=wh(this);a&&"html5"==xh(this)?(this.J="html5",this.C||this.O()):(yh(this),this.J="html5",a&&this.P?(this.l.appendChild(this.P),this.O()):(this.b.loaded=!0,this.R=u(function(){var a=this.l,c=Xf(this.b);r("yt.player.Application.create")(a,c);this.O()},this),this.X=!0,a?this.R():(Sb(this.b.assets.js,this.R),dg(this.b.assets.css))))}};
k.kb=function(){var a=Xf(this.b);if(!this.D){var b=vh(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,Gg(this.Y,this.D,"focus",this.ua),this.K=document.createElement("SPAN"),this.K.tabIndex=0,Gg(this.Y,this.K,"focus",this.ua),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.K,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==xh(this))this.J="flash",this.C||this.O();else{yh(this);this.J=
"flash";this.b.loaded=!0;var b=Yf.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Zf(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=t(b)?Qe(b):b,d=Ba(a.attrs);d.tabindex=0;var e=Ba(a.params);e.flashvars=dd(a.args);if(Oa){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.O()}};
k.ua=function(){vh(this).focus()};
function vh(a){var b=Qe(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
k.O=function(){if(!this.f){var a=vh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.X=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))uh(this);else{nh(this);this.C=!0;a=vh(this);a.addEventListener&&(this.S=zh(this,a,"addEventListener"));a.removeEventListener&&(this.$=zh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=zh(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);rh(this);this.aa&&this.aa(this.g);this.U.W("onReady",this.g)}else this.qa=x(u(this.O,this),50)}};
function zh(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ea=e,y(e,"WARNING"))}}}
function nh(a){a.C=!1;if(a.$)for(var b in a.j)a.$(b,a.j[b]);for(var c in a.Z)window.clearTimeout(parseInt(c,10));a.Z={};a.S=null;a.$=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=u(a.H,a);a.g.removeEventListener=u(a.bb,a);a.g.destroy=u(a.dispose,a);a.g.getLastError=u(a.La,a);a.g.getPlayerType=u(a.Ma,a);a.g.getCurrentVideoConfig=u(a.Ka,a);a.g.loadNewVideoConfig=u(a.pa,a);a.g.isReady=u(a.nb,a)}
k.nb=function(){return this.C};
k.H=function(a,b){if(!this.f){var c=sh(this,b);if(c){if(!(0<=Ya(this.Ea,a)||this.j[a])){var d=Ah(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&x(qa(c,this.g),0)}}};
k.bb=function(a,b){if(!this.f){var c=sh(this,b);c&&Fb(this.U,a,c)}};
function sh(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.ba[b]=c}return c?c:null}
function Ah(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;m[c]=function(c){var d=x(function(){if(!a.f){a.U.W(b,c);var e=a.Z,g=String(d);g in e&&delete e[g]}},0);
Aa(a.Z,String(d))};
return c}
k.Ga=function(a){a=a?Se:Re;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.K||(b.focus(),b!=document.activeElement));)b=a(b)};
k.ra=function(a){Pb("a11y-announce",a)};
k.Ua=function(a){uh(this,a)};
k.Va=function(a){Pb("WATCH_LATER_VIDEO_ADDED",a)};
k.Wa=function(a){Pb("WATCH_LATER_VIDEO_REMOVED",a)};
k.Sa=function(){if(!this.fa){if(ue){var a=document,b=a.scrollingElement?a.scrollingElement:$d||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.da=O&&P("10")&&a.pageYOffset!=b.scrollTop?new Wd(b.scrollLeft,b.scrollTop):new Wd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Gg(this.M,window,"scroll",this.Za);Gg(this.M,this.l,"touchmove",this.Ya)}else Gg(this.M,this.l,"mousewheel",this.va),Gg(this.M,this.l,"wheel",this.va);this.fa=!0}};
k.Ta=function(){Hg(this.M);this.fa=!1};
k.va=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Za=function(){window.scrollTo(this.da.b,this.da.f)};
k.Ya=function(a){a.preventDefault()};
k.Ma=function(){return this.J||xh(this)};
k.La=function(){return this.ea};
function xh(a){return(a=vh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function yh(a){Zg("dcp");a.cancel();nh(a);a.J=null;a.b&&(a.b.loaded=!1);var b=vh(a);"html5"==xh(a)?a.P=b:b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Hg(a.Y);a.D=null;a.K=null}
k.cancel=function(){this.R&&Zb(this.b.assets.js,this.R);window.clearTimeout(this.qa);this.X=!1};
k.o=function(){yh(this);if(this.P&&this.b)try{this.P.destroy()}catch(b){y(b)}this.ba=null;for(var a in this.j)m[this.j[a]]=null;this.ga=this.b=this.g=null;delete this.l;delete this.w;mh.B.o.call(this)};var Bh={},Ch="player_uid_"+(1E9*Math.random()>>>0);function Dh(a,b){a=t(a)?Qe(a):a;b=Wf(b);var c=Ch+"_"+ja(a),d=Bh[c];if(d)return d.pa(b),d.g;d=new mh(a,c);Bh[c]=d;Pb("player-added",d.g);Ta(d,qa(Eh,d));x(function(){d.pa(b)},0);
return d.g}
function Eh(a){Bh[a.T]=null}
function Fh(a){a=Qe(a);if(!a)return null;var b=Ch+"_"+ja(a),c=Bh[b];c||(c=new mh(a,b),Bh[b]=c);return c.g}
;var Gh=r("yt.abuse.botguardInitialized")||bc;q("yt.abuse.botguardInitialized",Gh,void 0);var Hh=r("yt.abuse.invokeBotguard")||cc;q("yt.abuse.invokeBotguard",Hh,void 0);var Ih=r("yt.abuse.dclkstatus.checkDclkStatus")||gc;q("yt.abuse.dclkstatus.checkDclkStatus",Ih,void 0);var Jh=r("yt.player.exports.navigate")||Rf;q("yt.player.exports.navigate",Jh,void 0);var Kh=r("yt.player.embed")||Dh;q("yt.player.embed",Kh,void 0);var Lh=r("yt.player.getPlayerByElement")||Fh;q("yt.player.getPlayerByElement",Lh,void 0);
var Mh=r("yt.util.activity.init")||Ff;q("yt.util.activity.init",Mh,void 0);var Nh=r("yt.util.activity.getTimeSinceActive")||Hf;q("yt.util.activity.getTimeSinceActive",Nh,void 0);var Oh=r("yt.util.activity.setTimestamp")||Gf;q("yt.util.activity.setTimestamp",Oh,void 0);function Ph(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Qh(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Rh(a)}
function Rh(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Sh(a,b,c,d){if(ia(a)&&!ea(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Th(a){var b=a.video_id||a.videoId;if(t(b)){var c=jf()||{},d=jf()||{};p(void 0)?d[b]=void 0:delete d[b];var e=v()+3E5,f=lf;if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function Uh(a){R.call(this,1,arguments);this.b=a}
w(Uh,R);function V(a){R.call(this,1,arguments);this.b=a}
w(V,R);function Vh(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
w(Vh,R);function Wh(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
w(Wh,R);function Xh(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
w(Xh,R);function Yh(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.i=e||null;this.g=f||null;this.source=g||null}
w(Yh,R);
var Zh=new S("subscription-batch-subscribe",Uh),$h=new S("subscription-batch-unsubscribe",Uh),ai=new S("subscription-subscribe",Wh),bi=new S("subscription-subscribe-loading",V),ci=new S("subscription-subscribe-loaded",V),di=new S("subscription-subscribe-success",Xh),ei=new S("subscription-subscribe-external",Wh),fi=new S("subscription-unsubscribe",Yh),gi=new S("subscription-unsubscirbe-loading",V),hi=new S("subscription-unsubscribe-loaded",V),ii=new S("subscription-unsubscribe-success",V),ji=new S("subscription-external-unsubscribe",
Yh),ki=new S("subscription-enable-ypc",V),li=new S("subscription-prefs",Vh),mi=new S("subscription-prefs-success",Vh),ni=new S("subscription-prefs-failure",Vh);function oi(a){var b=ed("/signin?context=popup","next",document.location.protocol+"//"+document.domain+"/post_login"),b=ed(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Mb("LOGGED_IN",function(b){Ob(E("LOGGED_IN_PUBSUB_KEY",void 0));D("LOGGED_IN",!0);a(b)});
D("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",Pb,void 0);var W=null,pi=[];function qi(a){return{externalChannelId:a.externalChannelId,Ra:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function ri(a){a&&a.externalChannelId&&si(qi(a))}
function si(a){var b=E("PLAYER_CONFIG");b&&b.args&&void 0!==b.args.authuser||E("SESSION_INDEX")||E("LOGGED_IN")?(T(ai,new Wh(a.externalChannelId,a.Ra?{itemType:"U",itemId:a.externalChannelId}:null)),a=dd({event:"subscribe",source:a.source}),kg("/gen_204?"+a,void 0)):ti(a)}
function ti(a){oi(function(b){b.subscription_ajax&&si(a)})}
function ui(a){a=qi(a);T(fi,new Yh(a.externalChannelId,a.subscriptionId,null));a=dd({event:"unsubscribe",source:a.source});kg("/gen_204?"+a,void 0)}
function vi(a){W&&W.channelSubscribed(a.b,a.subscriptionId)}
function wi(a){W&&W.channelUnsubscribed(a.b)}
;function xi(a){z.call(this);this.g=a;this.g.subscribe("command",this.ya,this);this.i={};this.j=!1}
w(xi,z);k=xi.prototype;k.start=function(){this.j||this.f||(this.j=!0,yi(this.g,"RECEIVING"))};
k.ya=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(t(c.event)&&(c=c.event,!(c in this.i))){var d=u(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":t(c.event)&&zi(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Ai(a,b||{}),c=this.b[a].apply(this.b,c),(c=Bi(a,c))&&this.j&&!this.f&&yi(this.g,a,c))}}};
k.eb=function(a,b){this.j&&!this.f&&yi(this.g,a,this.ia(a,b))};
k.ia=function(a,b){if(null!=b)return{value:b}};
function zi(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
k.o=function(){var a=this.g;a.f||Fb(a.b,"command",this.ya,this);this.g=null;for(var b in this.i)zi(this,b);xi.B.o.call(this)};function Ci(a,b,c){$f.call(this);this.g=a;this.i=b;this.l=c}
w(Ci,$f);function yi(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.l,command:b},c&&(a.data=c),d.b.postMessage(uc(a),d.i))}}
Ci.prototype.o=function(){this.i=this.g=null;Ci.B.o.call(this)};new G;function Di(){var a=this.f=new cg(!!E("WIDGET_ID_ENFORCE")),b=u(this.ab,this);a.l=b;a.w=null;this.f.channel="widget";if(a=E("WIDGET_ID"))this.f.b=a;this.i=[];this.l=!1;this.j={}}
k=Di.prototype;k.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,Ei(this,c)),this.j[c]=!0)}else this.Ca(a,b)};
k.Ca=function(){};
function Ei(a,b){return u(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.Ja=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");F(this.i,this.Aa,this);this.i=[]};
k.ja=function(){return null};
function Fi(a,b){a.sendMessage("infoDelivery",b)}
k.Aa=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Gi(a,b,c){z.call(this);this.b=a;this.i=c;this.j=qf(window,"message",u(this.l,this));this.g=new Ci(this,a,b);Ta(this,qa(Ua,this.g))}
w(Gi,z);Gi.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,t(a))){try{a=sc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.j("command",a.command,a.data))}};
Gi.prototype.o=function(){rf(this.j);this.b=null;Gi.B.o.call(this)};function Hi(a,b){xi.call(this,b);this.b=a;this.start()}
w(Hi,xi);Hi.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Hi.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Ai(a,b){switch(a){case "loadVideoById":return b=Rh(b),Th(b),[b];case "cueVideoById":return b=Rh(b),Th(b),[b];case "loadVideoByPlayerVars":return Th(b),[b];case "cueVideoByPlayerVars":return Th(b),[b];case "loadPlaylist":return b=Sh(b),Th(b),[b];case "cuePlaylist":return b=Sh(b),Th(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Bi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Hi.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Hi.B.ia.call(this,a,b)};
Hi.prototype.o=function(){Hi.B.o.call(this);delete this.b};function Ii(a){Di.call(this);this.b=a;this.g=[];this.addEventListener("onReady",u(this.Xa,this));this.addEventListener("onVideoProgress",u(this.ib,this));this.addEventListener("onVolumeChange",u(this.jb,this));this.addEventListener("onApiChange",u(this.cb,this));this.addEventListener("onPlaybackQualityChange",u(this.fb,this));this.addEventListener("onPlaybackRateChange",u(this.gb,this));this.addEventListener("onStateChange",u(this.hb,this))}
w(Ii,Di);k=Ii.prototype;k.Ca=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Ph(a)){var c;c=b;if(ia(c[0])&&!ea(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Rh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Qh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Sh.apply(window,c)}c=d}Th(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Ph(a)&&Fi(this,this.ja())}};
k.Xa=function(){var a=u(this.Ja,this);this.f.g=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ja=function(){if(!this.b)return null;var a=this.b.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=v()/1E3;return b};
k.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Fi(this,a)};
k.fb=function(a){Fi(this,{playbackQuality:a})};
k.gb=function(a){Fi(this,{playbackRate:a})};
k.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],n=this.b.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
k.jb=function(){Fi(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Fi(this,a)};
k.dispose=function(){Ii.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var Ji=document,X=window;var Ki=!1,Li="";function Mi(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Ki=!0,a.description)){Li=Mi(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Ki=!0;Li="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Ki=!(!a||!a.enabledPlugin))){Li=Mi(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Ki=!0;Li=Mi(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Ki=!0;Li="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Ki=!0,Li=Mi(b.GetVariable("$version"))}catch(c){}})();
var Ni=Ki,Oi=Li;(function(){var a;return be?(a=/Windows NT ([0-9.]+)/,(a=a.exec(A))?a[1]:"0"):ae?(a=/10[_.][0-9_.]+/,(a=a.exec(A))?a[0].replace(/_/g,"."):"10"):ce?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(A))?a[1]:""):de||ee||fe?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(A))?a[1].replace(/_/g,"."):""):""})();function Pi(a){return(a=a.exec(A))?a[1]:""}
(function(){if(qe)return Pi(/Firefox\/([0-9.]+)/);if(O||Yd||Xd)return le;if(ue)return Pi(/Chrome\/([0-9.]+)/);if(ve&&!(Uc()||C("iPad")||C("iPod")))return Pi(/Version\/([0-9.]+)/);if(re||se){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(A);if(a)return a[1]+"."+a[2]}else if(te)return(a=Pi(/Android\s+([0-9.]+)/))?a:Pi(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
m.addEventListener("test",null,b)}catch(c){}return a})();var Qi=(new Date).getTime();function Ri(a){ua.call(this,a.message||a.description||a.name);this.b=a instanceof Fe}
w(Ri,ua);Ri.prototype.name="BiscottiError";function Si(a,b){this.f=a;this.b=b}
Si.prototype.then=function(a,b,c){try{if(p(this.f))return a?Ce(a.call(c,this.f)):Ce(this.f);if(p(this.b)){if(!b)return De(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?De(this.b):Ce(d)}throw Error("Invalid Result_ state");}catch(e){return De(e)}};
Ec(Si);var ng={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ti=null;function Ui(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Vi(""),Ti=new Si(""),"";a=JSON.parse(a.substr(4)).id;Vi(a);Ti=new Si(a);Wi(18E5,2);return a}
function Xi(a,b){var c=new Ri(b);Vi("");Ti=new Si(void 0,c);0<a&&Wi(12E4,a-1);throw c;}
function Wi(a,b){x(function(){var a=u(Xi,m,b),a=mg().then(Ui,a);Ee(a,null,ba,void 0)},a)}
function Vi(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Yi(){}
function Zi(){try{var a;try{var b=r("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!Ti){var d=u(Xi,m,2);Ti=mg().then(Ui,d)}c=Ti}a=c}catch(e){a=De(e)}a.then($i,Yi);x(Zi,18E5)}catch(e){y(e)}}
function $i(a){var b;a:{try{b=window.top.location.href}catch(Z){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Qi,flash:Oi||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=X.history.length}catch(Z){c=0}b.u_his=c;b.u_java=!!X.navigator&&"unknown"!==typeof X.navigator.javaEnabled&&!!X.navigator.javaEnabled&&X.navigator.javaEnabled();X.screen&&(b.u_h=X.screen.height,b.u_w=X.screen.width,b.u_ah=X.screen.availHeight,b.u_aw=X.screen.availWidth,b.u_cd=X.screen.colorDepth);
X.navigator&&X.navigator.plugins&&(b.u_nplug=X.navigator.plugins.length);X.navigator&&X.navigator.mimeTypes&&(b.u_nmime=X.navigator.mimeTypes.length);b.bid=a;b.ca_type=Ni?"flash":"image";if(M("enable_server_side_search_pyv")||M("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(Z){}try{var f=a.outerWidth,g=a.outerHeight}catch(Z){}try{var h=a.innerWidth,l=a.innerHeight}catch(Z){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,h,l];var n;e=window.top||X;try{var B;if(e.document&&!e.document.body)B=new Ac(-1,-1);else{var I=(e||window).document,fa="CSS1Compat"==I.compatMode?I.documentElement:I.body;B=(new Ac(fa.clientWidth,fa.clientHeight)).round()}n=B}catch(Z){n=new Ac(-12245933,-12245933)}B=0;window.SVGElement&&document.createElementNS&&(B|=1);ra(b,{bc:B,bih:n.height,biw:n.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Ji.webkitVisibilityState||Ji.mozVisibilityState||Ji.visibilityState||""]||
0,wgl:!!X.WebGLRenderingContext})}vf("//www.youtube.com/ad_data_204",{Na:!1,A:b})}
;function aj(){this.b=E("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Dc.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
ca(aj);var Y=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Y,void 0);function bj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function dj(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
aj.prototype.get=function(a,b){cj(a);bj(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
aj.prototype.set=function(a,b){cj(a);bj(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
aj.prototype.remove=function(a){cj(a);bj(a);delete Y[a]};
aj.prototype.clear=function(){Y={}};function ej(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&kg(c.data.follow_on_url)}}
;function fj(a){R.call(this,1,arguments);this.ha=a}
w(fj,R);function gj(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
w(gj,R);function hj(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(hj,R);function ij(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
w(ij,R);function jj(a){R.call(this,1,arguments)}
w(jj,R);var kj=new S("ypc-core-load",fj),lj=new S("ypc-guide-sync-success",gj),mj=new S("ypc-purchase-success",hj),nj=new S("ypc-subscription-cancel",jj),oj=new S("ypc-subscription-cancel-success",ij),pj=new S("ypc-init-subscription",jj);var qj=!1,rj=[],sj=[];function tj(a){a.b?qj?T(ei,a):T(kj,new fj(function(){T(pj,new jj(a.b))})):uj(a.f,a.i,a.g,a.source)}
function vj(a){a.b?qj?T(ji,a):T(kj,new fj(function(){T(nj,new jj(a.b))})):wj(a.f,a.subscriptionId,a.i,a.g,a.source)}
function xj(a){yj(bb(a.b))}
function zj(a){Aj(bb(a.b))}
function Bj(a){Cj(a.g,a.f,a.b)}
function Dj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(di,new Xh(b,c,a.b.channelInfo))}
function Ej(a){var b=a.b;va(a.f,function(a,d){T(di,new Xh(d,a,b[d]))})}
function Fj(a){T(ii,new V(a.f.itemId));a.b&&a.b.length&&(Gj(a.b,ii),Gj(a.b,ki))}
function uj(a,b,c,d){var e=new V(a);T(bi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=E("PLAYBACK_ID"))&&(c.plid=d);(d=E("EVENT_ID"))&&(c.ei=d);b&&Hj(b,c);wf("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",oa:f,A:c,F:function(b,c){var d=c.response;T(di,new Xh(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Pb("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&ej(d.actions)},
na:function(){T(ci,e)}})}
function wj(a,b,c,d,e){var f=new V(a);T(gi,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=E("PLAYBACK_ID"))&&(d.plid=a);(a=E("EVENT_ID"))&&(d.ei=a);c&&Hj(c,d);wf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",oa:g,A:d,F:function(a,b){var c=b.response;T(ii,f);c.actions&&ej(c.actions)},
na:function(){T(hi,f)}})}
function Cj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Vh(a,b,c);wf("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",A:d,onError:function(){T(ni,e)},
F:function(){T(mi,e)}})}}
function yj(a){if(a.length){var b=db(a,0,40);T("subscription-batch-subscribe-loading");Gj(b,bi);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");Gj(b,ci)};
wf("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",A:c,F:function(c,f){d();var e=f.response,h=e.id;if(ea(h)&&h.length==b.length){var l=e.channel_info_map;F(h,function(a,c){var d=b[c];T(di,new Xh(d,a,l[d]))});
a.length?yj(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Aj(a){if(a.length){var b=db(a,0,40);T("subscription-batch-unsubscribe-loading");Gj(b,gi);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");Gj(b,hi)};
wf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",A:c,F:function(){d();Gj(b,ii);a.length&&Aj(a)},
onError:function(){d()}})}}
function Gj(a,b){F(a,function(a){T(b,new V(a))})}
function Hj(a,b){var c=od(a);ra(b,c)}
;var Ij=null,Jj=null,Kj=null,Lj={};function Mj(a){If(a.payload_name,a.payload,M("enable_youtubei_innertube")?Ef:We,void 0)}
function Nj(a){var b=a.id;a=a.ve_type;var c=Mc++;a=new Lc(void 0,a,c);Lj[b]=a;b=Pf();c=Of();b&&c&&Jf(b,c,a)}
function Oj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(D("client-screen-nonce",b),D("ROOT_VE_TYPE",a),a=Of()))for(var c in Lj)Jf(b,a,Lj[c])}
function Pj(a){Lj[a.id]=new Lc(a.tracking_params)}
function Qj(a){var b=Pf();a=Lj[a.id];b&&a&&Kf(Lf(),{click:{csn:b,visualElement:Nc(a)}},void 0)}
function Rj(a){a=a.ids;var b=Pf();if(b){for(var c=[],d=0;d<a.length;d++){var e=Lj[a[d]];e&&c.push(e)}c.length&&Mf(b,c)}}
function Sj(){var a=Ij;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",D,void 0);q("yt.setMsg",function(a){Ma(Ia,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||E("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Df)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,l=!1;try{g=a.lineNumber||a.line||"Not available"}catch(I){g="Not available",l=!0}try{h=a.fileName||a.filename||a.sourceURL||
m.$googDebugFname||f}catch(I){h="Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Cf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={oa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},A:{url:E("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.A.stack=e);for(var n in c)b.A["client."+n]=c[n];if(n=Ja("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var B in n)b.A[B]=n[B];wf("/error_204",b);Cf[a.message]=!0;Df++}}},void 0);
q("writeEmbed",function(){var a=Ja("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Zi();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=E("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);E("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Th(a.args);Ij=a=Dh("player",a);a.addEventListener("onScreenChanged",Oj);a.addEventListener("onLogClientVeCreated",Nj);a.addEventListener("onLogServerVeCreated",Pj);a.addEventListener("onLogToGel",
Mj);a.addEventListener("onLogVeClicked",Qj);a.addEventListener("onLogVesShown",Rj);a.addEventListener("onReady",Sj);b=E("POST_MESSAGE_ID","player");E("ENABLE_JS_API")?Kj=new Ii(a):E("ENABLE_POST_API")&&t(b)&&t(c)&&(Jj=new Gi(window.parent,b,c),Kj=new Hi(a,Jj.g));E("BG_P")&&(E("BG_I")||E("BG_IU"))&&ac();fc();W=a;W.addEventListener("SUBSCRIBE",ri);W.addEventListener("UNSUBSCRIBE",ui);pi.push(U(di,vi),U(ii,wi))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){kg(a+"mac_204?action_fcts=1");return!0},void 0);
var Tj=Ka(function(){Zg("ol");qj=!0;sj.push(U(ai,tj),U(fi,vj));qj||sj.push(U(ei,tj),U(ji,vj),U(Zh,xj),U($h,zj),U(li,Bj),U(mj,Dj),U(oj,Fj),U(lj,Ej));var a=aj.getInstance(),b=1<window.devicePixelRatio;if(!!((dj("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=dj(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Y[c]:Y[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Y)b.push(e+"="+escape(Y[e]));Dc.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),Uj=Ka(function(){var a=
Ij;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();E("PL_ATT")&&($b=null);for(var a=0,b=dc.length;a<b;a++){var c=dc[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}dc.length=0;a=Wb("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Rb(a),b.parentNode.removeChild(b);ec=!1;D("DCLKSTAT",0);Ob(rj);rj.length=0;Sg(sj);sj.length=0;qj=!1;W&&(W.removeEventListener("SUBSCRIBE",si),W.removeEventListener("UNSUBSCRIBE",ui));W=null;Sg(pi);
pi.length=0;Va(Kj,Jj);if(a=Ij)a.removeEventListener("onScreenChanged",Oj),a.removeEventListener("onLogClientVeCreated",Nj),a.removeEventListener("onLogServerVeCreated",Pj),a.removeEventListener("onLogToGel",Mj),a.removeEventListener("onLogVeClicked",Qj),a.removeEventListener("onLogVesShown",Rj),a.removeEventListener("onReady",Sj),a.destroy();Lj={}});
window.addEventListener?(window.addEventListener("load",Tj),window.addEventListener("unload",Uj)):window.attachEvent&&(window.attachEvent("onload",Tj),window.attachEvent("onunload",Uj));}).call(this);
