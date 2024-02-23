(()=>{"use strict";var e,t,r,n,o={426:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),c=r.n(a)()(o());c.push([e.id,"",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);n&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},654:(e,t,r)=>{var n=r(379),o=r.n(n),a=r(795),c=r.n(a),i=r(569),s=r.n(i),u=r(565),p=r.n(u),l=r(216),f=r.n(l),d=r(589),v=r.n(d),m=r(426),y={};y.styleTagTransform=v(),y.setAttributes=p(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=f(),o()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=n.base?s[0]+n.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var f=r(l),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var v=o(d,n);n.byIndex=i,t.splice(i,0,{identifier:l,updater:v,references:1})}c.push(l)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var s=n(e,o),u=0;u<a.length;u++){var p=r(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},138:(e,t,r)=>{r.a(e,(async(e,t)=>{try{async function o(e){const t=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5898a6f5ccf4851aa9151936241002&q=${e}&days=3`,{mode:"cors"});return!!t.ok&&await t.json()}r(654);const a=(n=o,function(...e){return n(...e).catch((function(e){console.log("YOUR STUPID, HERES WHY:",e)}))});console.log(await a("London"));const c=document.createElement("input");document.body.append(c),c.addEventListener("keypress",(e=>{clearTimeout(c._timer),c._timer=setTimeout((async()=>{if(!1===await a(c.value))c.style.backgroundColor="red";else{const e=await a(c.value);console.log(e),c.style.backgroundColor="white"}}),1e3)})),t()}catch(i){t(i)}var n}),1)}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,exports:{}};return o[e](r,r.exports,c),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,a,c)=>{var i;c&&((i=[]).d=-1);var s,u,p,l=new Set,f=o.exports,d=new Promise(((e,t)=>{p=t,u=e}));d[t]=f,d[e]=e=>(i&&e(i),l.forEach(e),d.catch((e=>{}))),o.exports=d,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{c[t]=e,n(a)}),(e=>{c[r]=e,n(a)}));var c={};return c[e]=e=>e(a),c}}var i={};return i[e]=e=>{},i[t]=o,i})))(o);var c=()=>s.map((e=>{if(e[r])throw e[r];return e[t]})),u=new Promise((t=>{(a=()=>t(c)).r=0;var r=e=>e!==i&&!l.has(e)&&(l.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((t=>t[e](r)))}));return a.r?u:c()}),(e=>(e?p(d[r]=e):u(f),n(i)))),i&&i.d<0&&(i.d=0)},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.nc=void 0,c(138)})();