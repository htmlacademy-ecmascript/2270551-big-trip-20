(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);s&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",o="day",a="week",l="month",u="quarter",c="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,l),r=n-i<0,o=t.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:a,d:o,D:d,h:r,m:i,s,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",$={};$[_]=m;var g=function(e){return e instanceof w},b=function e(t,n,s){var i;if(!t)return _;if("string"==typeof t){var r=t.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var a=t.name;$[a]=t,i=a}return!s&&i&&(_=i),i||!s&&_},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},E=y;E.l=b,E.i=g,E.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=b(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(h);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return E},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return M(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<M(e)},v.$g=function(e,t,n){return E.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,u=!!E.u(t)||t,f=E.p(e),h=function(e,t){var s=E.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?s:s.endOf(o)},p=function(e,t){return E.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case c:return u?h(1,0):h(31,11);case l:return u?h(1,v):h(0,v+1);case a:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return h(u?y-g:y+(6-g),v);case o:case d:return p(_+"Hours",0);case r:return p(_+"Minutes",1);case i:return p(_+"Seconds",2);case s:return p(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var a,u=E.p(e),f="set"+(this.$u?"UTC":""),h=(a={},a[o]=f+"Date",a[d]=f+"Date",a[l]=f+"Month",a[c]=f+"FullYear",a[r]=f+"Hours",a[i]=f+"Minutes",a[s]=f+"Seconds",a[n]=f+"Milliseconds",a)[u],p=u===o?this.$D+(t-this.$W):t;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[E.p(e)]()},v.add=function(n,u){var d,f=this;n=Number(n);var h=E.p(u),p=function(e){var t=M(f);return E.w(t.date(t.date()+Math.round(e*n)),f)};if(h===l)return this.set(l,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===o)return p(1);if(h===a)return p(7);var m=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return E.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},d=function(e){return E.s(r%12||12,e,"0")},h=n.meridiem||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:E.s(a+1,2,"0"),MMM:c(n.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:E.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:E.s(o,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:i};return s.replace(p,(function(e,t){return t||m[e]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var h,p=E.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*e,y=this-m,_=E.m(this,m);return _=(h={},h[c]=_/12,h[l]=_,h[u]=_/3,h[a]=(y-v)/6048e5,h[o]=(y-v)/864e5,h[r]=y/t,h[i]=y/e,h[s]=y/1e3,h)[p]||y,f?_:E.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=b(e,t,!0);return s&&(n.$L=s),n},v.clone=function(){return E.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=w.prototype;return M.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",o],["$M",l],["$y",c],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=$[_],M.Ls=$,M.p={},M}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof _},f=function(e,t,n){return new _(e,n,t.$l)},h=function(e){return t.p(e)+"s"},p=function(e){return e<0},m=function(e){return p(e)?Math.ceil(e):Math.floor(e)},v=function(e){return Math.abs(e)},y=function(e,t){return e?p(e)?{negative:!0,format:""+v(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function p(e,t,n){var s=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return f(e*c[h(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[h(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(u);if(i){var r=i.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=m(e/a),e%=a,this.$d.months=m(e/l),e%=l,this.$d.days=m(e/r),e%=r,this.$d.hours=m(e/i),e%=i,this.$d.minutes=m(e/s),e%=s,this.$d.seconds=m(e/n),e%=n,this.$d.milliseconds=e},v.toISOString=function(){var e=y(this.$d.years,"Y"),t=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=y(n,"D"),i=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=y(o,"S"),l=e.negative||t.negative||s.negative||i.negative||r.negative||a.negative,u=i.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+e.format+t.format+s.format+u+i.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(e,t){return t||String(s[e])}))},v.as=function(e){return this.$ms/c[h(e)]},v.get=function(e){var t=this.$ms,n=h(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?m(t/c[n]):this.$d[n],0===t?0:t},v.add=function(e,t,n){var s;return s=t?e*c[h(t)]:d(e)?e.$ms:f(e,this).$ms,f(this.$ms+s*(n?-1:1),this)},v.subtract=function(e,t){return this.add(e,t,!0)},v.locale=function(e){var t=this.clone();return t.$l=e,t},v.clone=function(){return f(this.$ms,this)},v.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}();return function(n,s,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return f(e,{$l:n},t)},i.isDuration=d;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},s.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),o.bind(this)(e,t)}}}()},212:function(e){e.exports=function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}}()},412:function(e){e.exports=function(){"use strict";return function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],u=s.base?l[0]+s.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var f=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var p=i(h,s);s.byIndex=a,t.splice(a,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=n(r[o]);t[a].references--}for(var l=s(e,i),u=0;u<r.length;u++){var c=n(r[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],t=["day","event","time","price","offers"],s={DAY:"default",TIME:"time",PRICE:"price"},i={FOR_FORM:"DD/MM/YY h:mm",FULL:"YYYY-MM-DDTHH:mm",DAY_MACHINE:"YYYY-MM-DD",DAY_HUMAN:"D MMMM",TIME:"h:mm"},r="DD[D] HH[H] mm[M]",o="HH[H] mm[M]",a="mm[M]",l={type:e[0],destination:"",basePrice:0,dateFrom:new Date,dateTo:new Date,offers:[],isFavorite:!1};var u=n(484),c=n.n(u),d=n(646),f=n.n(d);function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(t+1-e)+e)}function p(e){return e[h(0,e.length-1)]}function m(e,t){return c()(e).format(t)}function v(e,t){return c().duration(c()(t).diff(e))}function y(e){return e[0].toUpperCase()+e.substring(1)}function _(e,t){const n=v(e.dateFrom,e.dateTo).asMinutes();return v(t.dateFrom,t.dateTo).asMinutes()-n}function $(e,t){return t.basePrice-e.basePrice}function g(e,t){return new Map([...e].sort(((e,n)=>t(e[1],n[1]))))}c().extend(f());const b=["Antalya","Amsterdam","Krasnodar","Rostov-on-Done","New York","Moscow"],M=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Aliquam erat volutpat.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],E=["Lorem ipsum dolor sit amet","Cras aliquet varius magna","Nullam nunc ex","Aliquam erat","Nunc fermentum tortor"],w=[{src:`https://loremflickr.com/248/152?random=${h(1,30)}`,description:p(E)},{src:`https://loremflickr.com/248/152?random=${h(1,30)}`,description:p(E)},{src:`https://loremflickr.com/248/152?random=${h(1,30)}`,description:p(E)},{src:`https://loremflickr.com/248/152?random=${h(1,30)}`,description:p(E)},{src:`https://loremflickr.com/248/152?random=${h(1,30)}`,description:p(E)}];const S=[{type:p(e),destination:p(b),basePrice:700,dateFrom:new Date("2023-03-13T03:20:00"),dateTo:new Date("2023-03-13T04:20:00"),offers:[1,3,5],isFavorite:p([!0,!1])},{type:p(e),destination:p(b),basePrice:130,dateFrom:new Date("2023-06-17T12:00:00"),dateTo:new Date("2023-06-18T12:30:00"),offers:[1,2],isFavorite:p([!0,!1])},{type:p(e),destination:p(b),basePrice:270,dateFrom:new Date("2023-06-03T19:45:00"),dateTo:new Date("2023-06-04T00:00:00"),offers:[2,3,4],isFavorite:p([!0,!1])},{type:p(e),destination:p(b),basePrice:2530,dateFrom:new Date("2023-06-30T15:15:00"),dateTo:new Date("2023-06-30T16:45:00"),offers:[1,2,3,4,5],isFavorite:p([!0,!1])},{type:p(e),destination:p(b),basePrice:13,dateFrom:new Date("2023-07-02T17:20:00"),dateTo:new Date("2023-07-02T18:00:00"),offers:[],isFavorite:p([!0,!1])}];function D(){return p(S)}class A{#e=Array.from({length:7},D);get events(){return this.#e}}const C=["Upgrade","Downgrade class","Get cold drink","Get hot drink","Get blanket","Get sandwich"],k=[100,13,75,40,5,66];class O{#t=function(){const t=new Map;return e.forEach((e=>t.set(e,function(){const e=new Map;for(let t=1;t<=6;t++)e.set(t,{title:p(C),price:p(k)});return e}()))),t}();get offers(){return this.#t}}class T{#n=function(){const e=new Map;return b.forEach((t=>e.set(t,{description:p(M),pictures:Array.from({length:4},(()=>p(w)))}))),e}();get destinations(){return this.#n}}const x={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function F(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x.BEFOREEND;if(!(e instanceof X))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function Y(e,t){if(!(e instanceof X&&t instanceof X))throw new Error("Can replace only components");const n=e.element,s=t.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}var H=n(379),L=n.n(H),I=n(795),B=n.n(I),N=n(569),P=n.n(N),q=n(565),j=n.n(q),R=n(216),U=n.n(R),W=n(589),Z=n.n(W),z=n(10),G={};G.styleTagTransform=Z(),G.setAttributes=j(),G.insert=P().bind(null,"head"),G.domAPI=B(),G.insertStyleElement=U(),L()(z.Z,G),z.Z&&z.Z.locals&&z.Z.locals;const J="shake";class X{#s=null;constructor(){if(new.target===X)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#s||(this.#s=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#s}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#s=null}shake(e){this.element.classList.add(J),setTimeout((()=>{this.element.classList.remove(J),e?.()}),600)}}class V extends X{get template(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n  '}}class K extends X{#s=null;get template(){return'<ul class="trip-events__list">'}removeElement(){this.element=null}}class Q extends X{#i=null;#r=null;#o=null;constructor(e){let{event:t,typeOffers:n,onEditBtnClick:s}=e;super(),this.#i=t,this.#r=n,this.#o=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a)}get template(){return function(e,t){const{type:n,destination:s,basePrice:l,isFavorite:u,offers:c,dateFrom:d,dateTo:f}=e,h=c.length?function(e){let{typeOffers:t,offers:n}=e;const s=function(e,t){return t.map((t=>e.get(t)))}(t,n).map((e=>function(e){let{title:t,price:n}=e;return`<li class="event__offer">\n            <span class="event__offer-title">${t}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${n}</span>\n          </li>`}(e))).join("");return`<h4 class="visually-hidden">Offers:</h4>\n          <ul class="event__selected-offers">${s}</ul>`}({typeOffers:t,offers:c}):"",p=u?"event__favorite-btn--active":"",y=function(e,t){const n=v(e,t),s=Boolean(n.days()),i=Boolean(n.hours());let l;switch(!0){case s:l=r;break;case i:l=o;break;default:l=a}return n.format(l)}(d,f);return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date"\n                  datetime="${m(d,i.DAY_MACHINE)}">\n                  ${m(d,i.DAY_HUMAN)}\n                </time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${n} ${s}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time"\n                      datetime="${m(d,i.FULL)}">\n                      ${m(d,i.TIME)}\n                    </time>\n                    &mdash;\n                    <time class="event__end-time"\n                      datetime="${m(f,i.FULL)}">\n                      ${m(f,i.TIME)}\n                    </time>\n                  </p>\n                  <p class="event__duration">${y}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${l}</span>\n                </p>\n                  ${h}\n                <button class="event__favorite-btn ${p}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.#i,this.#r)}#a=e=>{e.preventDefault(),this.#o()}}class ee extends X{#l=null;constructor(e){let{onSortingClick:t}=e;super(),this.#l=t,this.element.addEventListener("click",this.#u)}get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">${t.map((e=>function(e){const t=s[e.toUpperCase()];return`<div class="trip-sort__item  trip-sort__item--${e}">\n            <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" ${t?`data-sort-type=${t}`:"disabled"}>\n            <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n          </div>`}(e))).join("")}</form>`}#u=e=>{e.target.dataset.sortType&&this.#l(e.target.dataset.sortType)}}class te extends X{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>'}}function ne(e){let{offerId:t,offerInfo:n,isSelected:s}=e;const{title:i,price:r}=n;return`<div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-1" type="checkbox" name="event-offer-${t}" ${s?"checked":""}>\n            <label class="event__offer-label" for="event-offer-${t}-1">\n              <span class="event__offer-title">${i}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${r}</span>\n            </label>\n          </div>`}class se extends X{#i=null;#r=null;#n=null;#c=null;constructor(e){let{event:t,typeOffers:n,destinations:s,closeForm:i}=e;super(),this.#i=t,this.#r=n,this.#n=s,this.#c=i,this.element.querySelector("form").addEventListener("submit",this.#d),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#f)}get template(){return function(t){let{event:n=l,typeOffers:s=[],destinations:r}=t;const{type:o,destination:a,dateFrom:u,dateTo:c,basePrice:d,offers:f}=n,h=Array.from(r.keys()).map((e=>function(e){return`<option value='${e}'></option>`}(e))).join(""),p=e.map((e=>function(e){return`<div class="event__type-item">\n            <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n            <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">\n              ${y(e)}\n            </label>\n\n          </div>`}(e))).join(""),v=s.size?function(e){let{allOffers:t,selectedOffersIds:n}=e,s="";for(const[e,i]of t.entries())s+=ne({offerId:e,offerInfo:i,isSelected:n.includes(e)});return`<section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">${s}<div>\n          </section>`}({allOffers:s,selectedOffersIds:f}):"",_=r.get(a),$=_?function(e){const{description:t,pictures:n}=e,s=n?function(e){const t=e.map((e=>{let{src:t,description:n}=e;return`<img class="event__photo" src="${t}" alt="${n}">`})).join("");return`<div class="event__photos-container">\n            <div class="event__photos-tape">\n              ${t}\n            </div>\n          </div>`}(n):"";return`<section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${t}</p>\n            ${s}\n          </section>`}(_):"";return`<li class="trip-events__item">\n            <form class="event event--edit" action="#" method="post">\n              <header class="event__header">\n                <div class="event__type-wrapper">\n                  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                    <span class="visually-hidden">Choose event type</span>\n                    <img class="event__type-icon" width="17" height="17" src="img/icons/${o}.png" alt="Event type icon">\n                  </label>\n                  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n                  <div class="event__type-list">\n                    <fieldset class="event__type-group">\n                      <legend class="visually-hidden">Event type</legend>\n                      ${p}\n                    </fieldset>\n                  </div>\n                </div>\n                <div class="event__field-group  event__field-group--destination">\n                  <label class="event__label  event__type-output" for="event-destination-1">\n                    ${y(o)}\n                  </label>\n                  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${a}" list="destination-list-1">\n                  <datalist id="destination-list-1">${h}</datalist>\n                </div>\n\n                <div class="event__field-group  event__field-group--time">\n                  <label class="visually-hidden" for="event-start-time-1">From</label>\n                  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"\n                    value="${m(u,i.FOR_FORM)}">\n                  &mdash;\n                  <label class="visually-hidden" for="event-end-time-1">To</label>\n                  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"\n                    value="${m(c,i.FOR_FORM)}">\n                </div>\n\n                <div class="event__field-group  event__field-group--price">\n                  <label class="event__label" for="event-price-1">\n                    <span class="visually-hidden">Price</span>\n                    &euro;\n                  </label>\n                  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${d}">\n                </div>\n\n                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                <button class="event__reset-btn" type="reset">Delete</button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </header>\n              <section class="event__details">\n                ${v}\n                ${$}\n              </section>\n            </form>\n          </li>`}({event:this.#i,typeOffers:this.#r,destinations:this.#n})}#d=e=>{e.preventDefault(),this.#c()};#f=e=>{e.preventDefault(),this.#c()}}class ie{#h=null;#p=null;#m=new K;#v=null;#y=null;#_=null;#e=[];#t=null;#n=null;#$=null;#g=new Map;#b=s.DAY;constructor(e){let{container:t,eventsModel:n,offersModel:s,destinationsModel:i}=e;this.#h=t,this.#v=n,this.#y=s,this.#_=i}init(){this.#e=[...this.#v.events],this.#t=this.#y.offers,this.#n=this.#_.destinations,this.#$=new Map(this.#e),this.#M(),this.#E()}#w(){this.#g.forEach((e=>e.destroy())),this.#g.clear()}#M(){this.#p=new ee({onSortingClick:this.#l}),F(this.#p,this.#m.element)}#E(){F(this.#m,this.#h),this.#e.length?this.#e.forEach((e=>this.#S(e))):F(new te({message:"Click New Event to create your first point"}),this.#m.element)}#D(e){switch(this.#b=e,e){case s.TIME:this.#e=g(this.#$,_);break;case s.PRICE:this.#e=g(this.#$,$);break;default:this.#e=new Map(this.#$)}}#l=e=>{e!==this.#b&&(this.#D(e),this.#w(),this.#E())};#S=e=>{const t=this.#t.get(e.type),n=new Q({event:e,typeOffers:t,destinations:this.#n,onEditBtnClick:()=>{Y(s,n),document.addEventListener("keydown",r)}}),s=new se({event:e,typeOffers:t,destinations:this.#n,container:this.#m.element,onSubmitClick:function(){i(),document.removeEventListener("keydown",r)},closeForm:()=>{i(),document.removeEventListener("keydown",r)}});function i(){Y(n,s)}function r(e){(function(e){return"Escape"===e.key})(e)&&(e.preventDefault(),i(),document.removeEventListener("keydown",r))}F(n,this.#m.element)}}var re=n(212),oe=n.n(re),ae=n(412),le=n.n(ae);c().extend(oe()),c().extend(le());const ue={everything:e=>e,future:e=>e.filter((e=>{let{dateFrom:t}=e;return c()(t).isAfter(c()(),"day")})),present:e=>e.filter((e=>{let{dateFrom:t,dateTo:n}=e;return c()(t).isSameOrBefore(c()(),"day")&&c()(n).isSameOrAfter(c()(),"day")})),past:e=>e.filter((e=>{let{dateTo:t}=e;return c()(t).isBefore(c()(),"day")}))};class ce extends X{#A=null;constructor(e){let{filters:t}=e;super(),this.#A=t}get template(){return`<form class="trip-filters" action="#" method="get">\n            <button class="visually-hidden" type="submit">Accept filter</button>\n            ${this.#A.map(((e,t)=>function(e,t){let{name:n,isActive:s}=e;return`<div class="trip-filters__filter">\n            <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${0===t?"checked":""} ${s?"":"disabled"}>\n            <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n          </div>`}(e,t))).join("")}\n          </form>`}}class de{#h=null;#C=null;constructor(e){let{container:t,filters:n}=e;this.#h=t,this.#C=new ce({filters:n})}init(){F(this.#C,this.#h)}}class fe extends X{get template(){return' <div class="trip-main">\n     <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>\n    </div>\n  '}}const he=document.querySelector(".trip-main"),pe=he.querySelector(".trip-controls__filters"),me=document.querySelector(".trip-events"),ve=new class{#k=null;#O=null;#T=null;#C=null;#x=null;#v=new A;#y=new O;#_=new T;#A=function(e){return Object.entries(ue).map((t=>{let[n,s]=t;return{name:n,isActive:Boolean(s(e).length)}}))}(this.#v.events);constructor(e){let{tripMainElement:t,filtersElement:n,siteMainElement:s}=e;this.#k=t,this.#O=n,this.#T=s}init(){this.#F(),this.#Y(),this.#H(),this.#L()}#F(){F(new V,this.#k,x.AFTERBEGIN)}#L(){F(new fe,this.#k)}#Y(){this.#C=new de({container:this.#O,filters:this.#A}),this.#C.init()}#H(){this.#x=new ie({container:this.#T,eventsModel:this.#v,offersModel:this.#y,destinationsModel:this.#_}),this.#x.init()}}({tripMainElement:he,filtersElement:pe,siteMainElement:me});ve.init()})()})();
//# sourceMappingURL=bundle.cfa913bf98284f8cbb0b.js.map