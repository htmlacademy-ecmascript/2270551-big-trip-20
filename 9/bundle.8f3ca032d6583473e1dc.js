(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);s&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",o="day",a="week",l="month",u="quarter",c="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,l),r=n-i<0,o=t.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:a,d:o,D:d,h:r,m:i,s,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=p;var $=function(e){return e instanceof C},M=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(i=r),n&&(g[r]=n,i=r);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var a=t.name;g[a]=t,i=a}return!s&&i&&(y=i),i||!s&&y},b=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},E=_;E.l=M,E.i=$,E.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function p(e){this.$L=M(e.locale,null,!0),this.parse(e)}var v=p.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return E},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return b(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<b(e)},v.$g=function(e,t,n){return E.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,u=!!E.u(t)||t,h=E.p(e),f=function(e,t){var s=E.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?s:s.endOf(o)},m=function(e,t){return E.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case c:return u?f(1,0):f(31,11);case l:return u?f(1,v):f(0,v+1);case a:var g=this.$locale().weekStart||0,$=(p<g?p+7:p)-g;return f(u?_-$:_+(6-$),v);case o:case d:return m(y+"Hours",0);case r:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case s:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var a,u=E.p(e),h="set"+(this.$u?"UTC":""),f=(a={},a[o]=h+"Date",a[d]=h+"Date",a[l]=h+"Month",a[c]=h+"FullYear",a[r]=h+"Hours",a[i]=h+"Minutes",a[s]=h+"Seconds",a[n]=h+"Milliseconds",a)[u],m=u===o?this.$D+(t-this.$W):t;if(u===l||u===c){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[E.p(e)]()},v.add=function(n,u){var d,h=this;n=Number(n);var f=E.p(u),m=function(e){var t=b(h);return E.w(t.date(t.date()+Math.round(e*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===o)return m(1);if(f===a)return m(7);var p=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[f]||1,v=this.$d.getTime()+n*p;return E.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},d=function(e){return E.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:E.s(a+1,2,"0"),MMM:c(n.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:E.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:E.s(o,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:i};return s.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var f,m=E.p(d),p=b(n),v=(p.utcOffset()-this.utcOffset())*e,_=this-p,y=E.m(this,p);return y=(f={},f[c]=y/12,f[l]=y,f[u]=y/3,f[a]=(_-v)/6048e5,f[o]=(_-v)/864e5,f[r]=_/t,f[i]=_/e,f[s]=_/1e3,f)[m]||_,h?y:E.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return g[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=M(e,t,!0);return s&&(n.$L=s),n},v.clone=function(){return E.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),w=C.prototype;return b.prototype=w,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",o],["$M",l],["$y",c],["$D",d]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,C,b),e.$i=!0),b},b.locale=M,b.isDayjs=$,b.unix=function(e){return b(1e3*e)},b.en=g[y],b.Ls=g,b.p={},b}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},h=function(e,t,n){return new y(e,n,t.$l)},f=function(e){return t.p(e)+"s"},m=function(e){return e<0},p=function(e){return m(e)?Math.ceil(e):Math.floor(e)},v=function(e){return Math.abs(e)},_=function(e,t){return e?m(e)?{negative:!0,format:""+v(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function m(e,t,n){var s=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*c[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(u);if(i){var r=i.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=m.prototype;return v.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=p(e/a),e%=a,this.$d.months=p(e/l),e%=l,this.$d.days=p(e/r),e%=r,this.$d.hours=p(e/i),e%=i,this.$d.minutes=p(e/s),e%=s,this.$d.seconds=p(e/n),e%=n,this.$d.milliseconds=e},v.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=e.negative||t.negative||s.negative||i.negative||r.negative||a.negative,u=i.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+e.format+t.format+s.format+u+i.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(e,t){return t||String(s[e])}))},v.as=function(e){return this.$ms/c[f(e)]},v.get=function(e){var t=this.$ms,n=f(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?p(t/c[n]):this.$d[n],0===t?0:t},v.add=function(e,t,n){var s;return s=t?e*c[f(t)]:d(e)?e.$ms:h(e,this).$ms,h(this.$ms+s*(n?-1:1),this)},v.subtract=function(e,t){return this.add(e,t,!0)},v.locale=function(e){var t=this.clone();return t.$l=e,t},v.clone=function(){return h(this.$ms,this)},v.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},m}();return function(n,s,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return h(e,{$l:n},t)},i.isDuration=d;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},s.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),o.bind(this)(e,t)}}}()},212:function(e){e.exports=function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}}()},412:function(e){e.exports=function(){"use strict";return function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],u=s.base?l[0]+s.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var h=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var m=i(f,s);s.byIndex=a,t.splice(a,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=n(r[o]);t[a].references--}for(var l=s(e,i),u=0;u<r.length;u++){var c=n(r[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],t=["day","event","time","price","offers"],s={DAY:"default",TIME:"time",PRICE:"price"},i={FOR_FORM:"DD/MM/YY h:mm",FULL:"YYYY-MM-DDTHH:mm",DAY_MACHINE:"YYYY-MM-DD",DAY_HUMAN:"D MMMM",TIME:"h:mm"},r="DD[D] HH[H] mm[M]",o="HH[H] mm[M]",a="mm[M]",l={type:e[0],destination:"",basePrice:0,dateFrom:new Date,dateTo:new Date,offers:[],isFavorite:!1};var u=n(484),c=n.n(u),d=n(646),h=n.n(d);function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(t+1-e)+e)}function m(e){return e[f(0,e.length-1)]}function p(e,t){return c()(e).format(t)}function v(e,t){return c().duration(c()(t).diff(e))}function _(e){return e[0].toUpperCase()+e.substring(1)}function y(e,t){const n=v(e.dateFrom,e.dateTo).asMinutes();return v(t.dateFrom,t.dateTo).asMinutes()-n}function g(e,t){return t.basePrice-e.basePrice}function $(e,t){return new Map([...e].sort(((e,n)=>t(e[1],n[1]))))}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e.length)return new Map;const n=new Map;return e.forEach((e=>{n.set(e,t.includes(e))})),n}c().extend(h());const b=["Antalya","Amsterdam","Krasnodar","Rostov-on-Done","New York","Moscow"],E=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Aliquam erat volutpat.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],C=["Lorem ipsum dolor sit amet","Cras aliquet varius magna","Nullam nunc ex","Aliquam erat","Nunc fermentum tortor"],w=[{src:`https://loremflickr.com/248/152?random=${f(1,30)}`,description:m(C)},{src:`https://loremflickr.com/248/152?random=${f(1,30)}`,description:m(C)},{src:`https://loremflickr.com/248/152?random=${f(1,30)}`,description:m(C)},{src:`https://loremflickr.com/248/152?random=${f(1,30)}`,description:m(C)},{src:`https://loremflickr.com/248/152?random=${f(1,30)}`,description:m(C)}];const S=[{type:m(e),destination:m(b),basePrice:700,dateFrom:new Date("2023-03-13T03:20:00"),dateTo:new Date("2023-03-13T04:20:00"),offers:[1,3,5],isFavorite:m([!0,!1])},{type:m(e),destination:m(b),basePrice:130,dateFrom:new Date("2023-06-17T12:00:00"),dateTo:new Date("2023-06-18T12:30:00"),offers:[1,2],isFavorite:m([!0,!1])},{type:m(e),destination:m(b),basePrice:270,dateFrom:new Date("2023-06-03T19:45:00"),dateTo:new Date("2023-06-04T00:00:00"),offers:[2,3,4],isFavorite:m([!0,!1])},{type:m(e),destination:m(b),basePrice:2530,dateFrom:new Date("2023-06-30T15:15:00"),dateTo:new Date("2023-06-30T16:45:00"),offers:[1,2,3,4,5],isFavorite:m([!0,!1])},{type:m(e),destination:m(b),basePrice:13,dateFrom:new Date("2023-07-02T17:20:00"),dateTo:new Date("2023-07-02T18:00:00"),offers:[],isFavorite:m([!0,!1])}];function k(){return{id:crypto.randomUUID(),...m(S)}}class D{#e=Array.from({length:7},k);get events(){return this.#e}}const A=["Upgrade","Downgrade class","Get cold drink","Get hot drink","Get blanket","Get sandwich"],F=[100,13,75,40,5,66];class T{#t=function(){const t=new Map;return e.forEach((e=>t.set(e,function(){const e=new Map;for(let t=1;t<=6;t++)e.set(t,{id:String(t),title:m(A),price:m(F)});return e}()))),t}();get offers(){return this.#t}}class O{#n=function(){const e=new Map;return b.forEach((t=>e.set(t,{description:m(E),pictures:Array.from({length:4},(()=>m(w)))}))),e}();get destinations(){return this.#n}}const H={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function x(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H.BEFOREEND;if(!(e instanceof K))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function L(e,t){if(!(e instanceof K&&t instanceof K))throw new Error("Can replace only components");const n=e.element,s=t.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}function N(e){if(null!==e){if(!(e instanceof K))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}var I=n(379),Y=n.n(I),B=n(795),P=n.n(B),R=n(569),q=n.n(R),j=n(565),U=n.n(j),W=n(216),z=n.n(W),Z=n(589),G=n.n(Z),J=n(10),V={};V.styleTagTransform=G(),V.setAttributes=U(),V.insert=q().bind(null,"head"),V.domAPI=P(),V.insertStyleElement=z(),Y()(J.Z,V),J.Z&&J.Z.locals&&J.Z.locals;const X="shake";class K{#s=null;constructor(){if(new.target===K)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#s||(this.#s=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#s}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#s=null}shake(e){this.element.classList.add(X),setTimeout((()=>{this.element.classList.remove(X),e?.()}),600)}}class Q extends K{get template(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n  '}}class ee extends K{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>'}}class te extends K{#s=null;get template(){return'<ul class="trip-events__list">'}removeElement(){this.element=null}}class ne extends K{#i=null;constructor(e){let{onSortingClick:t}=e;super(),this.#i=t,this.element.addEventListener("click",this.#r)}get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">${t.map((e=>function(e){const t=s[e.toUpperCase()];return`<div class="trip-sort__item  trip-sort__item--${e}">\n            <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" ${t?`data-sort-type=${t}`:"disabled"}>\n            <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n          </div>`}(e))).join("")}</form>`}#r=e=>{e.target.dataset.sortType&&this.#i(e.target.dataset.sortType)}}class se extends K{#o=null;#a=null;#l=null;#u=null;#c=null;constructor(e){let{event:t,typeOffers:n,destinationName:s,onFormOpen:i,onFavoriteClick:r}=e;super(),this.#o=t,this.#a=n,this.#l=s,this.#u=i,this.#c=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#d),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#h)}get template(){return function(e){let{event:t,typeOffers:n,destinationName:s}=e;const{type:l,basePrice:u,isFavorite:c,offers:d,dateFrom:h,dateTo:f}=t,m=d.length?function(e){let{typeOffers:t,offers:n}=e;const s=function(e,t){return t.map((t=>e.get(t)))}(t,n).map((e=>function(e){let{title:t,price:n}=e;return`<li class="event__offer">\n            <span class="event__offer-title">${t}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${n}</span>\n          </li>`}(e))).join("");return`<h4 class="visually-hidden">Offers:</h4>\n          <ul class="event__selected-offers">${s}</ul>`}({typeOffers:n,offers:d}):"",_=c?"event__favorite-btn--active":"",y=function(e,t){const n=v(e,t),s=Boolean(n.days()),i=Boolean(n.hours());let l;switch(!0){case s:l=r;break;case i:l=o;break;default:l=a}return n.format(l)}(h,f);return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date"\n                  datetime="${p(h,i.DAY_MACHINE)}">\n                  ${p(h,i.DAY_HUMAN)}\n                </time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${l}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${l} ${s}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time"\n                      datetime="${p(h,i.FULL)}">\n                      ${p(h,i.TIME)}\n                    </time>\n                    &mdash;\n                    <time class="event__end-time"\n                      datetime="${p(f,i.FULL)}">\n                      ${p(f,i.TIME)}\n                    </time>\n                  </p>\n                  <p class="event__duration">${y}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${u}</span>\n                </p>\n                  ${m}\n                <button class="event__favorite-btn ${_}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}({event:this.#o,typeOffers:this.#a,destinationName:this.#l})}#d=e=>{e.preventDefault(),this.#u()};#h=e=>{e.preventDefault(),this.#c()}}class ie extends K{_state={};updateElement(e){e&&(this._setState(e),this.#f())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(e){this._state=structuredClone({...this._state,...e})}#f(){const e=this.element,t=e.parentElement;this.removeElement();const n=this.element;t.replaceChild(n,e),this._restoreHandlers()}}class re extends ie{#m=null;#p=null;#t=null;#n=null;#v=null;#_=null;#y=null;#g=null;constructor(e){let{event:t=l,offersModel:n,destinationsModel:s,onFormClose:i,onFormSubmit:r,onFormReset:o}=e;super(),this.#m=n,this.#t=new Map(this.#m.offers),this.#p=s,this.#n=new Map(this.#p.destinations),this.#v=new Map(Array.from(this.#n.values()).map((e=>{let{id:t,name:n}=e;return[n,t]}))),this._setState(re.parseEventToState({event:t,offers:this.#t,destinations:this.#n})),this.#_=i,this.#y=r,this.#g=o,this._restoreHandlers()}_restoreHandlers(){this.element.querySelector("form").addEventListener("submit",this.#$),this.element.querySelector(".event__reset-btn").addEventListener("click",this.#M),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#b),this.element.querySelector(".event__input--destination").addEventListener("change",this.#E),this.element.querySelector(".event__type-group").addEventListener("change",this.#C),this._state.typeOffers.size&&this.element.querySelector(".event__available-offers").addEventListener("change",this.#w)}get template(){return function(t){let{event:n,destinationsNames:s}=t;const{type:r,dateFrom:o,dateTo:a,basePrice:l,typeOffers:u,offersSelection:c,destinationInfo:d}=n,h=Array.from(s.keys()).map((e=>`<option value='${e}'></option>`)).join(""),f=e.map((e=>function(e){return`<div class="event__type-item">\n            <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n            <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">\n              ${_(e)}\n            </label>\n          </div>`}(e))).join(""),m=u.size?function(e){let{typeOffers:t,offersSelection:n}=e,s="";return t.forEach((e=>{s+=function(e){let{offer:t,isSelected:n}=e;const{title:s,price:i,id:r}=t;return`<div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${r}-1" type="checkbox"\n              name="event-offer-${r}" ${n?"checked":""} data-offer-id="${r}">\n            <label class="event__offer-label" for="event-offer-${r}-1">\n              <span class="event__offer-title">${s}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${i}</span>\n            </label>\n          </div>`}({offer:e,isSelected:n.get(e.id)})})),`<section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">${s}<div>\n          </section>`}({typeOffers:u,offersSelection:c}):"",v=d.description?function(e){const{description:t,pictures:n}=e,s=n?function(e){return`<div class="event__photos-container">\n            <div class="event__photos-tape">\n              ${e.map((e=>{let{src:t,description:n}=e;return`<img class="event__photo" src="${t}" alt="${n}">`})).join("")}\n            </div>\n          </div>`}(n):"";return`<section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${t}</p>\n            ${s}\n          </section>`}(d):"";return`<li class="trip-events__item">\n            <form class="event event--edit" action="#" method="post">\n              <header class="event__header">\n                <div class="event__type-wrapper">\n                  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                    <span class="visually-hidden">Choose event type</span>\n                    <img class="event__type-icon" width="17" height="17" src="img/icons/${r}.png" alt="Event type icon">\n                  </label>\n                  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n                  <div class="event__type-list">\n                    <fieldset class="event__type-group">\n                      <legend class="visually-hidden">Event type</legend>\n                      ${f}\n                    </fieldset>\n                  </div>\n                </div>\n                <div class="event__field-group  event__field-group--destination">\n                  <label class="event__label  event__type-output" for="event-destination-1">\n                    ${_(r)}\n                  </label>\n                  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"\n                    value="${d.name}" list="destination-list-1">\n                  <datalist id="destination-list-1">${h}</datalist>\n                </div>\n\n                <div class="event__field-group  event__field-group--time">\n                  <label class="visually-hidden" for="event-start-time-1">From</label>\n                  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"\n                    value="${p(o,i.FOR_FORM)}">\n                  &mdash;\n                  <label class="visually-hidden" for="event-end-time-1">To</label>\n                  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"\n                    value="${p(a,i.FOR_FORM)}">\n                </div>\n\n                <div class="event__field-group  event__field-group--price">\n                  <label class="event__label" for="event-price-1">\n                    <span class="visually-hidden">Price</span>\n                    &euro;\n                  </label>\n                  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${l}">\n                </div>\n\n                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                <button class="event__reset-btn" type="reset">Delete</button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </header>\n              <section class="event__details">\n                ${m}\n                ${v}\n              </section>\n            </form>\n          </li>`}({event:this._state,destinationsNames:this.#v})}static parseEventToState(e){let{event:t,offers:n,destinations:s}=e;const i={...t};return i.typeOffers=new Map(n.get(i.type)),i.offersSelection=M(Array.from(i.typeOffers.keys()),i.offers),i.destinationInfo=s.get(i.destination),i}static parseStateToEvent(e){const t={...e};return t.destination=t.destinationInfo.id,t.offers=[],t.offersSelection.forEach(((e,n)=>{e&&t.offers.push(n)})),delete t.typeOffers,delete t.offersSelection,delete t.destinationInfo,t}reset(e){this.updateElement(re.parseEventToState({event:e,offers:this.#t,destinations:this.#n}))}#$=e=>{e.preventDefault(),this.#y(re.parseStateToEvent(this._state))};#M=e=>{e.preventDefault(),this.#g()};#b=e=>{e.preventDefault(),this.#g(),this.#_()};#E=e=>{e.preventDefault(),this.#v.has(e.target.value)&&e.target.value!==this._state.destinationInfo.name&&this.updateElement({destinationInfo:this.#n.get(this.#v.get(e.target.value))})};#C=e=>{e.preventDefault(),e.target.value!==this._state.type&&this.updateElement({type:e.target.value,typeOffers:this.#t.get(e.target.value),offersSelection:M(Array.from(this._state.typeOffers.keys()))})};#w=e=>{e.preventDefault();const t=e.target.dataset.offerId;this._setState({offersSelection:this._state.offersSelection.set(t,!this._state.offersSelection.get(t))})}}const oe="DEFAULT",ae="EDITING";class le{#S=null;#o=null;#k=oe;#D=null;#A=null;#m=null;#p=null;#F=null;#T=null;constructor(e){let{container:t,offersModel:n,destinationsModel:s,onEventChange:i,onModeChange:r}=e;this.#S=t,this.#m=n,this.#p=s,this.#F=i,this.#T=r}init(e){this.#o=e;const t=this.#m.offers.get(e.type),n=this.#D,s=this.#A;this.#D=new se({event:this.#o,typeOffers:t,destinationName:e.destination,onFormOpen:this.#O,onFavoriteClick:this.#c}),this.#A=new re({event:this.#o,offersModel:this.#m,destinationsModel:this.#p,container:this.#S,onFormClose:this.#H,onFormSubmit:this.#y,onFormReset:this.#g}),null!==n&&null!==s?(this.#k===oe&&L(this.#D,n),this.#k===ae&&L(this.#A,s),N(n),N(s)):x(this.#D,this.#S)}destroy(){N(this.#D),N(this.#A)}resetView(){this.#k!==oe&&(this.#g(),this.#H())}#x(){L(this.#A,this.#D),this.#T(),this.#k=ae}#L(){L(this.#D,this.#A),this.#k=oe}#N=e=>{(function(e){return"Escape"===e.key})(e)&&(e.preventDefault(),this.#g(),this.#H())};#O=()=>{this.#x(),document.addEventListener("keydown",this.#N)};#H=()=>{this.#L(),document.removeEventListener("keydown",this.#N)};#y=e=>{this.#F(e),this.#H()};#g=()=>{this.#A.reset(this.#o)};#c=()=>{this.#F({...this.#o,isFavorite:!this.#o.isFavorite})}}class ue{#S=null;#I=new te;#Y=null;#B=null;#m=null;#p=null;#e=null;#P=null;#t=null;#n=null;#R=new Map;#q=s.DAY;constructor(e){let{container:t,eventsModel:n,offersModel:s,destinationsModel:i}=e;this.#S=t,this.#B=n,this.#m=s,this.#p=i}init(){this.#e=new Map(this.#B.events.map((e=>[e.id,e]))),this.#P=new Map(this.#e),this.#t=this.#m.offers,this.#n=this.#p.destinations,this.#j(),this.#U()}#W(){this.#R.forEach((e=>e.destroy())),this.#R.clear()}#U(){x(this.#I,this.#S),this.#e.size?this.#z():x(new ee({message:"Click New Event to create your first point"}),this.#I.element)}#z(){this.#e.forEach((e=>this.#Z(e)))}#Z(e){const t=new le({container:this.#I.element,offersModel:this.#m,destinationsModel:this.#p,onEventChange:this.#F,onModeChange:this.#T});t.init(e),this.#R.set(e.id,t)}#j(){this.#Y=new ne({onSortingClick:this.#i}),x(this.#Y,this.#I.element)}#G(e){switch(this.#q=e,e){case s.TIME:this.#e=$(this.#P,y);break;case s.PRICE:this.#e=$(this.#P,g);break;default:this.#e=new Map(this.#P)}}#i=e=>{e!==this.#q&&(this.#G(e),this.#W(),this.#z())};#F=e=>{this.#e.set(e.id,e),this.#P.set(e.id,e),this.#R.get(e.id).init(e)};#T=()=>{this.#R.forEach((e=>e.resetView()))}}var ce=n(212),de=n.n(ce),he=n(412),fe=n.n(he);c().extend(de()),c().extend(fe());const me={everything:e=>e,future:e=>e.filter((e=>{let{dateFrom:t}=e;return c()(t).isAfter(c()(),"day")})),present:e=>e.filter((e=>{let{dateFrom:t,dateTo:n}=e;return c()(t).isSameOrBefore(c()(),"day")&&c()(n).isSameOrAfter(c()(),"day")})),past:e=>e.filter((e=>{let{dateTo:t}=e;return c()(t).isBefore(c()(),"day")}))};class pe extends K{#J=null;constructor(e){let{filters:t}=e;super(),this.#J=t}get template(){return`<form class="trip-filters" action="#" method="get">\n            <button class="visually-hidden" type="submit">Accept filter</button>\n            ${this.#J.map(((e,t)=>function(e,t){let{name:n,isActive:s}=e;return`<div class="trip-filters__filter">\n            <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${0===t?"checked":""} ${s?"":"disabled"}>\n            <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n          </div>`}(e,t))).join("")}\n          </form>`}}class ve{#S=null;#V=null;constructor(e){let{container:t,filters:n}=e;this.#S=t,this.#V=new pe({filters:n})}init(){x(this.#V,this.#S)}}class _e extends K{#X=null;constructor(e){let{onClick:t}=e;super(),this.#X=t,this.element.addEventListener("click",this.#K)}get template(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'}#K=e=>{e.preventDefault(),this.#X()}}const ye=document.querySelector(".trip-main"),ge=ye.querySelector(".trip-controls__filters"),$e=document.querySelector(".trip-events"),Me=new class{#Q=null;#ee=null;#te=null;#ne=null;#V=null;#se=null;#B=new D;#m=new T;#p=new O;#J=function(e){return Object.entries(me).map((t=>{let[n,s]=t;return{name:n,isActive:Boolean(s(e).length)}}))}(this.#B.events);constructor(e){let{tripMainElement:t,filtersElement:n,siteMainElement:s}=e;this.#Q=t,this.#ee=n,this.#te=s}init(){this.#ie(),this.#re(),this.#U(),this.#oe()}#ie(){x(new Q,this.#Q,H.AFTERBEGIN)}#oe(e){this.#ne=new _e({disabled:e}),x(this.#ne,this.#Q)}#re(){this.#V=new ve({container:this.#ee,filters:this.#J}),this.#V.init()}#U(){this.#se=new ue({container:this.#te,eventsModel:this.#B,offersModel:this.#m,destinationsModel:this.#p}),this.#se.init()}}({tripMainElement:ye,filtersElement:ge,siteMainElement:$e});Me.init()})()})();
//# sourceMappingURL=bundle.8f3ca032d6583473e1dc.js.map