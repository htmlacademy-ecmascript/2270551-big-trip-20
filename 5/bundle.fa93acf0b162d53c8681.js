(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);s&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,a=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var b=function(t){return t instanceof E},g=function t(e,n,s){var i;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;$[o]=e,i=o}return!s&&i&&(y=i),i||!s&&y},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},w=_;w.l=g,w.i=b,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function m(t){this.$L=g(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!w.u(e)||e,f=w.p(t),p=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?s:s.endOf(a)},h=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case c:return u?p(1,0):p(31,11);case l:return u?p(1,v):p(0,v+1);case o:var $=this.$locale().weekStart||0,b=(m<$?m+7:m)-$;return p(u?_-b:_+(6-b),v);case a:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,u=w.p(t),f="set"+(this.$u?"UTC":""),p=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[c]=f+"FullYear",o[r]=f+"Hours",o[i]=f+"Minutes",o[s]=f+"Seconds",o[n]=f+"Milliseconds",o)[u],h=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[p](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,u){var d,f=this;n=Number(n);var p=w.p(u),h=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===a)return h(1);if(p===o)return h(7);var m=(d={},d[i]=t,d[r]=e,d[s]=1e3,d)[p]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return s.replace(h,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var p,h=w.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=w.m(this,m);return y=(p={},p[c]=y/12,p[l]=y,p[u]=y/3,p[o]=(_-v)/6048e5,p[a]=(_-v)/864e5,p[r]=_/e,p[i]=_/t,p[s]=_/1e3,p)[h]||_,f?y:w.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=g(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),D=E.prototype;return M.prototype=D,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,E,M),t.$i=!0),M},M.locale=g,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:o,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},f=function(t,e,n){return new y(t,n,e.$l)},p=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*c[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(u);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/o),t%=o,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||o.negative,u=i.format||r.format||o.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+s.format+u+i.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(s[t])}))},v.as=function(t){return this.$ms/c[p(t)]},v.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var s;return s=e?t*c[p(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+s*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return f(t,{$l:n},e)},i.isDuration=d;var r=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},a=[],o=0;o<t.length;o++){var l=t[o],u=s.base?l[0]+s.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=i(p,s);s.byIndex=o,e.splice(o,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=n(r[a]);e[o].references--}for(var l=s(t,i),u=0;u<r.length;u++){var c=n(r[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],e={FOR_FORM:"DD/MM/YY h:mm",FULL:"YYYY-MM-DDTHH:mm",DAY_MACHINE:"YYYY-MM-DD",DAY_HUMAN:"D MMMM",TIME:"h:mm"},s={type:t[0],destination:"",basePrice:0,dateFrom:new Date,dateTo:new Date,offers:[],isFavorite:!1};var i=n(484),r=n.n(i),a=n(646),o=n.n(a);function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(e+1-t)+t)}function u(t){return t[l(0,t.length-1)]}function c(t,e){return r()(t).format(e)}function d(t){return t[0].toUpperCase()+t.substring(1)}r().extend(o());const f=["Antalya","Amsterdam","Krasnodar","Rostov-on-Done","New York","Moscow"],p=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Aliquam erat volutpat.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],h=["Lorem ipsum dolor sit amet","Cras aliquet varius magna","Nullam nunc ex","Aliquam erat","Nunc fermentum tortor"],m=[{src:`https://loremflickr.com/248/152?random=${l(1,30)}`,description:u(h)},{src:`https://loremflickr.com/248/152?random=${l(1,30)}`,description:u(h)},{src:`https://loremflickr.com/248/152?random=${l(1,30)}`,description:u(h)},{src:`https://loremflickr.com/248/152?random=${l(1,30)}`,description:u(h)},{src:`https://loremflickr.com/248/152?random=${l(1,30)}`,description:u(h)}];const v=[{type:u(t),destination:u(f),basePrice:700,dateFrom:new Date("2023-03-13T03:20:00"),dateTo:new Date("2023-03-13T04:20:00"),offers:[1,3,5],isFavorite:u([!0,!1])},{type:u(t),destination:u(f),basePrice:130,dateFrom:new Date("2023-06-17T12:00:00"),dateTo:new Date("2023-06-18T12:30:00"),offers:[1,2],isFavorite:u([!0,!1])},{type:u(t),destination:u(f),basePrice:270,dateFrom:new Date("2023-06-03T19:45:00"),dateTo:new Date("2023-06-04T00:00:00"),offers:[2,3,4],isFavorite:u([!0,!1])},{type:u(t),destination:u(f),basePrice:2530,dateFrom:new Date("2023-06-30T15:15:00"),dateTo:new Date("2023-06-30T16:45:00"),offers:[1,2,3,4,5],isFavorite:u([!0,!1])},{type:u(t),destination:u(f),basePrice:13,dateFrom:new Date("2023-07-02T17:20:00"),dateTo:new Date("2023-07-02T18:00:00"),offers:[],isFavorite:u([!0,!1])}];function _(){return u(v)}class y{events=Array.from({length:7},_);getEvents(){return this.events}}const $=["Upgrade","Downgrade class","Get cold drink","Get hot drink","Get blanket","Get sandwich"],b=[100,13,75,40,5,66];class g{offers=function(){const e=new Map;return t.forEach((t=>e.set(t,function(){const t=new Map;for(let e=1;e<=6;e++)t.set(e,{title:u($),price:u(b)});return t}()))),e}();getOffers(){return this.offers}}class M{destinations=function(){const t=new Map;return f.forEach((e=>t.set(e,{description:u(p),pictures:Array.from({length:4},(()=>u(m)))}))),t}();getDestinations(){return this.destinations}}const w={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function E(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.BEFOREEND;if(!(t instanceof q))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function D(t,e){if(!(t instanceof q&&e instanceof q))throw new Error("Can replace only components");const n=t.element,s=e.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}var A=n(379),S=n.n(A),k=n(795),C=n.n(k),O=n(569),x=n.n(O),T=n(565),F=n.n(T),Y=n(216),H=n.n(Y),L=n(589),I=n.n(L),N=n(10),B={};B.styleTagTransform=I(),B.setAttributes=F(),B.insert=x().bind(null,"head"),B.domAPI=C(),B.insertStyleElement=H(),S()(N.Z,B),N.Z&&N.Z.locals&&N.Z.locals;const P="shake";class q{#t=null;constructor(){if(new.target===q)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(P),setTimeout((()=>{this.element.classList.remove(P),t?.()}),600)}}class j extends q{get template(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n  '}}class R extends q{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}class U{#e=null;constructor(t){let{container:e}=t;this.#e=e}init(){E(new R,this.#e)}}class W extends q{get template(){return' <div class="trip-main">\n     <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>\n    </div>\n  '}}class Z{#e=null;constructor(t){let{container:e}=t;this.#e=e}init(){E(new W,this.#e)}}class z extends q{#t=null;get template(){return'<ul class="trip-events__list">'}removeElement(){this.element=null}}class G extends q{#n=null;#s=null;#i=null;constructor(t){let{event:e,typeOffers:n,onEditBtnClick:s}=t;super(),this.#n=e,this.#s=n,this.#i=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return function(t,n){const{type:s,destination:i,basePrice:a,isFavorite:o,offers:l,dateFrom:u,dateTo:d}=t,f=l.length?function(t){let{typeOffers:e,offers:n}=t;const s=function(t,e){return e.map((e=>t.get(e)))}(e,n).map((t=>function(t){let{title:e,price:n}=t;return`<li class="event__offer">\n            <span class="event__offer-title">${e}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${n}</span>\n          </li>`}(t))).join("");return`<h4 class="visually-hidden">Offers:</h4>\n          <ul class="event__selected-offers">${s}</ul>`}({typeOffers:n,offers:l}):"",p=o?"event__favorite-btn--active":"",h=function(t,e){const n=r().duration(r()(e).diff(t));let s=n.days();s=s?`${r()(s).format("DD[D]")} `:"";let i=n.hours();return i=i||s?`${r()(i).format("HH[H]")} `:"",s+i+r()(n.minutes()).format("MM[M]")}(u,d);return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date"\n                  datetime="${c(u,e.DAY_MACHINE)}">\n                  ${c(u,e.DAY_HUMAN)}\n                </time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${s} ${i}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time"\n                      datetime="${c(u,e.FULL)}">\n                      ${c(u,e.TIME)}\n                    </time>\n                    &mdash;\n                    <time class="event__end-time"\n                      datetime="${c(d,e.FULL)}">\n                      ${c(d,e.TIME)}\n                    </time>\n                  </p>\n                  <p class="event__duration">${h}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${a}</span>\n                </p>\n                  ${f}\n                <button class="event__favorite-btn ${p}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.#n,this.#s)}#r=t=>{t.preventDefault(),this.#i()}}class J extends q{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>'}}function X(t){let{offerId:e,offerInfo:n,isSelected:s}=t;const{title:i,price:r}=n;return`<div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}" ${s?"checked":""}>\n            <label class="event__offer-label" for="event-offer-${e}-1">\n              <span class="event__offer-title">${i}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${r}</span>\n            </label>\n          </div>`}class V extends q{#n=null;#s=null;#a=null;#o=null;constructor(t){let{event:e,typeOffers:n,destinations:s,closeForm:i}=t;super(),this.#n=e,this.#s=n,this.#a=s,this.#o=i,this.element.querySelector("form").addEventListener("submit",this.#l),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#u)}get template(){return function(n){let{event:i=s,typeOffers:r=[],destinations:a}=n;const{type:o,destination:l,dateFrom:u,dateTo:f,basePrice:p,offers:h}=i,m=Array.from(a.keys()).map((t=>function(t){return`<option value='${t}'></option>`}(t))).join(""),v=t.map((t=>function(t){return`<div class="event__type-item">\n            <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n            <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">\n              ${d(t)}\n            </label>\n\n          </div>`}(t))).join(""),_=r.size?function(t){let{allOffers:e,selectedOffersIds:n}=t,s="";for(const[t,i]of e.entries())s+=X({offerId:t,offerInfo:i,isSelected:n.includes(t)});return`<section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">${s}<div>\n          </section>`}({allOffers:r,selectedOffersIds:h}):"",y=a.get(l),$=y?function(t){const{description:e,pictures:n}=t,s=n?function(t){const e=t.map((t=>{let{src:e,description:n}=t;return`<img class="event__photo" src="${e}" alt="${n}">`})).join("");return`<div class="event__photos-container">\n            <div class="event__photos-tape">\n              ${e}\n            </div>\n          </div>`}(n):"";return`<section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${e}</p>\n            ${s}\n          </section>`}(y):"";return`<li class="trip-events__item">\n            <form class="event event--edit" action="#" method="post">\n              <header class="event__header">\n                <div class="event__type-wrapper">\n                  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                    <span class="visually-hidden">Choose event type</span>\n                    <img class="event__type-icon" width="17" height="17" src="img/icons/${o}.png" alt="Event type icon">\n                  </label>\n                  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n                  <div class="event__type-list">\n                    <fieldset class="event__type-group">\n                      <legend class="visually-hidden">Event type</legend>\n                      ${v}\n                    </fieldset>\n                  </div>\n                </div>\n                <div class="event__field-group  event__field-group--destination">\n                  <label class="event__label  event__type-output" for="event-destination-1">\n                    ${d(o)}\n                  </label>\n                  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${l}" list="destination-list-1">\n                  <datalist id="destination-list-1">${m}</datalist>\n                </div>\n\n                <div class="event__field-group  event__field-group--time">\n                  <label class="visually-hidden" for="event-start-time-1">From</label>\n                  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"\n                    value="${c(u,e.FOR_FORM)}">\n                  &mdash;\n                  <label class="visually-hidden" for="event-end-time-1">To</label>\n                  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"\n                    value="${c(f,e.FOR_FORM)}">\n                </div>\n\n                <div class="event__field-group  event__field-group--price">\n                  <label class="event__label" for="event-price-1">\n                    <span class="visually-hidden">Price</span>\n                    &euro;\n                  </label>\n                  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${p}">\n                </div>\n\n                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                <button class="event__reset-btn" type="reset">Delete</button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </header>\n              <section class="event__details">\n                ${_}\n                ${$}\n              </section>\n            </form>\n          </li>`}({event:this.#n,typeOffers:this.#s,destinations:this.#a})}#l=t=>{t.preventDefault(),this.#o()};#u=t=>{t.preventDefault(),this.#o()}}class K{#e=null;#c=new z;#d=null;#f=null;#p=null;#h=[];#m=null;#a=null;constructor(t){let{container:e,eventsModel:n,offersModel:s,destinationsModel:i}=t;this.#e=e,this.#d=n,this.#f=s,this.#p=i}init(){this.#h=[...this.#d.events],this.#m=this.#f.offers,this.#a=this.#p.destinations,this.#v()}#v(){E(this.#c,this.#e),this.#h.length?this.#h.forEach((t=>this.#_(t))):E(new J({message:"Click New Event to create your first point"}),this.#c.element)}#_=t=>{const e=this.#m.get(t.type),n=new G({event:t,typeOffers:e,destinations:this.#a,onEditBtnClick:()=>{D(s,n),document.addEventListener("keydown",r)}}),s=new V({event:t,typeOffers:e,destinations:this.#a,container:this.#c.element,closeForm:()=>{i(),document.removeEventListener("keydown",r)}});function i(){D(n,s)}function r(t){(function(t){return"Escape"===t.key})(t)&&(t.preventDefault(),i(),document.removeEventListener("keydown",r))}E(n,this.#c.element)}}class Q extends q{get template(){return'\n\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}}const tt=document.querySelector(".trip-main"),et=tt.querySelector(".trip-controls__filters"),nt=document.querySelector(".trip-events"),st=new class{#e=null;constructor(t){let{container:e}=t;this.#e=e}init(){E(new Q,this.#e)}}({container:et}),it=new class{eventsModel=new y;offersModel=new g;destinationsModel=new M;constructor(t){let{tripMainElement:e,filtersElement:n,siteMainElement:s}=t;this.tripMainElement=e,this.filtersElement=n,this.siteMainElement=s}init(){this.sortingComponent=new U({container:this.siteMainElement}),this.buttonComponent=new Z({container:this.tripMainElement}),this.eventsComponent=new K({container:this.siteMainElement,eventsModel:this.eventsModel,offersModel:this.offersModel,destinationsModel:this.destinationsModel}),E(new j,this.tripMainElement,w.AFTERBEGIN),this.sortingComponent.init(),this.eventsComponent.init(),this.buttonComponent.init()}}({tripMainElement:tt,filtersElement:et,siteMainElement:nt});it.init(),st.init()})()})();
//# sourceMappingURL=bundle.fa93acf0b162d53c8681.js.map