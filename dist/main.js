(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(698),t.b),l=i()(o()),u=s()(d);l.push([n.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nnav ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 16vw;\n    padding-bottom: 0.4rem;\n}\n\nnav hr {\n    width: 80%;\n    border: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.5);\n    margin-bottom: 0.4rem;\n}\n\nnav ul li {\n    list-style-type: none; \n}\n\nnav a {\n    text-decoration: none;\n    font-size: 1.5rem;\n    color: white;\n}\n\nnav a:hover {\n    color: rgba(255, 255, 255, 0.596);\n    cursor: pointer;\n}\n\nheader div {\n    top: 25%;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    padding: 2rem 4rem;\n    border-radius: 1rem;\n}\n\nheader h1 {\n    font-size: 3rem;\n    font-weight: 400;\n}\n\nheader {\n    position: relative;\n    min-height: 50vh;\n    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${u});\n    background-position: center;\n    background-size: cover;\n}\n\nnav {\n    min-height: 6vh;\n    position: absolute;\n    bottom: 0;\n    justify-self: end;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\nfooter {\n    width: 100%;\n    background-color: rgb(43, 43, 43);\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 8vh;\n}\n\nmain {\n    padding: 3rem 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\n\n.horizontal-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.horizontal-container q, .horizontal-container p {\n    font-size: 1.1rem;\n    letter-spacing: 1px;\n    word-spacing: 0.2rem;\n    margin: 1rem;\n}\n\n.horizontal-container p {\n    font-weight: bold;\n    font-size: 1rem;\n}\n\n.horizontal-container img {\n    width: 400px;\n    border-radius: 2rem;\n}\n\n.book-btn {\n    border: none;\n    color: white;\n    background-color: rgb(49, 49, 49);\n    border-radius: 0.8rem;\n    padding: 0.6rem 3rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n.book-btn:hover {\n    transition: 0.2s;\n    background-color: rgb(75, 75, 75);\n    cursor: pointer;\n}\n\n.menu-card {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    width: clamp(360px, 40vw, 550px);\n    background-color: rgb(233, 232, 232);\n    border-radius: 2rem;\n    padding: 1.5rem 3rem;\n    font-size: 1.2rem;\n}\n\n.menu-card img {\n    align-self: center;\n    width: clamp(360px, 100%, 350px);\n}\n\n@media (max-width: 800px) {\n    .horizontal-container {\n      flex-direction: column;\n    }\n\n    .horizontal-container img {\n        width: 80vw;\n        min-width: 350px;\n    }\n\n    .menu-card {\n        padding: 1rem 1rem;\n    }\n  }`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},698:(n,e,t)=>{n.exports=t.p+"3abfdea8a3989dd0859d.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"6e4c14f70c68e2990689.png";function e(){return document.createElement("div")}function r(n){let e=document.createElement("li"),t=document.createElement("a");return e.appendChild(t),t.setAttribute("id",n),n=n.charAt(0).toUpperCase()+n.slice(1),t.textContent=n,e}const o=t.p+"59d067e3abc1eac02b5a.jpg",a=t.p+"8e3a8fbbca748e6e8c97.jpg",i=t.p+"2881a4d5378a6494345a.jpg";function c(n,e,t){const r=document.createElement("div"),o=document.createElement("h3"),a=document.createElement("p"),i=new Image;return i.src=e,r.setAttribute("class","menu-card"),o.textContent=n,a.textContent=t,r.appendChild(o),r.appendChild(i),r.appendChild(a),r}var s=t(379),d=t.n(s),l=t(795),u=t.n(l),p=t(569),m=t.n(p),h=t(565),f=t.n(h),g=t(216),b=t.n(g),v=t(589),y=t.n(v),C=t(426),x={};x.styleTagTransform=y(),x.setAttributes=f(),x.insert=m().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=b(),d()(C.Z,x),C.Z&&C.Z.locals&&C.Z.locals,function(){const t=document.querySelector(".content");!function(n){const t=document.createElement("header"),o=e(),a=document.createElement("h1");a.textContent="Sushi restaurant",o.appendChild(a),t.append(o);const i=document.createElement("nav"),c=document.createElement("hr");i.appendChild(c);const s=document.createElement("ul");s.appendChild(r("home")),s.appendChild(r("menu")),s.appendChild(r("contact")),i.appendChild(s),t.appendChild(i),n.appendChild(t)}(t),function(t){const r=document.createElement("main"),o=document.createElement("h2");o.textContent="Welcome to sushi restaurant!",r.appendChild(o);const a=e();a.setAttribute("class","horizontal-container");const i=new Image;i.src=n,a.appendChild(i);const c=e();c.setAttribute("class","quote");const s=document.createElement("q");s.textContent="Sushi is not just food; it's an art form, an experience.";const d=document.createElement("p");d.textContent=" - Francis Mallmann",c.appendChild(s),c.appendChild(d),a.appendChild(c);const l=document.createElement("button");l.textContent="Book your experience",l.setAttribute("class","book-btn"),r.appendChild(a),r.appendChild(l),t.appendChild(r)}(t),function(n){const e=document.createElement("footer");e.textContent="Copyright © Sushi restaurant (this is fake)",n.appendChild(e)}(t)}();const w=document.querySelector("#home"),E=document.querySelector("#menu"),S=document.querySelector("#contact");E.addEventListener("click",(()=>function(){const n=document.querySelector("main");n.innerHTML="",n.appendChild(c("Maki rolls",o,"Traditional sushi roll that consists of fish, vegetables, rice and rolled up in a seaweed.")),n.appendChild(c("California rolls",a,"California roll, a type of inside-out sushi roll (uramaki) in which vinegared rice (rather than nori, an edible seaweed) forms the outside of the roll, usually encompassing cucumber, crab (or imitation crab), and avocado.")),n.appendChild(c("Nigiri",i,"Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top."))}())),w.addEventListener("click",(()=>function(){const t=document.querySelector("main");t.innerHTML="";const r=document.createElement("h2");r.textContent="Welcome to sushi restaurant!",t.appendChild(r);const o=e();o.setAttribute("class","horizontal-container");const a=new Image;a.src=n,o.appendChild(a);const i=e();i.setAttribute("class","quote");const c=document.createElement("q");c.textContent="Sushi is not just food; it's an art form, an experience.";const s=document.createElement("p");s.textContent=" - Francis Mallmann",i.appendChild(c),i.appendChild(s),o.appendChild(i);const d=document.createElement("button");d.textContent="Book your experience",d.setAttribute("class","book-btn"),t.appendChild(o),t.appendChild(d)}())),S.addEventListener("click",(()=>function(){const n=document.querySelector("main");n.innerHTML="";const e=document.createElement("h2"),t=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p");e.textContent="Get in touch.",t.textContent="Call us or send us email at:",r.textContent="Phone: 012 234 123",o.textContent="Email: help@sushirest.com",n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(o)}()))})()})();