!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=54)}([function(t,e,r){var m=r(1),w=r(14),g=r(15),E=Math.max,x=Math.min;t.exports=function(n,r,t){var o,i,a,s,c,u,f=0,l=!1,d=!1,e=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function p(t){var e=o,r=i;return o=i=void 0,f=t,s=n.apply(r,e)}function h(t){var e=t-u;return void 0===u||r<=e||e<0||d&&a<=t-f}function y(){var t=w();if(h(t))return b(t);c=setTimeout(y,function(t){var e=r-(t-u);return d?x(e,a-(t-f)):e}(t))}function b(t){return c=void 0,e&&o?p(t):(o=i=void 0,s)}function v(){var t=w(),e=h(t);if(o=arguments,i=this,u=t,e){if(void 0===c)return function(t){return f=t,c=setTimeout(y,r),l?p(t):s}(u);if(d)return clearTimeout(c),c=setTimeout(y,r),p(u)}return void 0===c&&(c=setTimeout(y,r)),s}return r=g(r)||0,m(t)&&(l=!!t.leading,a=(d="maxWait"in t)?E(g(t.maxWait)||0,r):a,e="trailing"in t?!!t.trailing:e),v.cancel=function(){void 0!==c&&clearTimeout(c),o=u=i=c=void(f=0)},v.flush=function(){return void 0===c?s:b(w())},v}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var n=r(8),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},function(t,e,r){var n=r(6),o=r(17),i=r(18),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){!function(s){"use strict";var c={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(c.arrayBuffer)var e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))};function n(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function o(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return c.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function f(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:c.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:c.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():c.arrayBuffer&&c.blob&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=n(t),e=o(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},u.prototype.delete=function(t){delete this.map[n(t)]},u.prototype.get=function(t){return t=n(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(n(t))},u.prototype.set=function(t,e){this.map[n(t)]=o(e)},u.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},u.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},u.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},c.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var p=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function h(t,e){var r=(e=e||{}).body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=function(t){var e=t.toUpperCase();return-1<p.indexOf(e)?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function b(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},d.call(h.prototype),d.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];b.redirect=function(t,e){if(-1===v.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},s.DOMException=self.DOMException;try{new s.DOMException}catch(t){s.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},s.DOMException.prototype=Object.create(Error.prototype),s.DOMException.prototype.constructor=s.DOMException}function m(i,a){return new Promise(function(r,t){var e=new h(i,a);if(e.signal&&e.signal.aborted)return t(new s.DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function o(){n.abort()}n.onload=function(){var t={status:n.status,statusText:n.statusText,headers:function(t){var o=new u;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();o.append(r,n)}}),o}(n.getAllResponseHeaders()||"")};t.url="responseURL"in n?n.responseURL:t.headers.get("X-Request-URL");var e="response"in n?n.response:n.responseText;r(new b(e,t))},n.onerror=function(){t(new TypeError("Network request failed"))},n.ontimeout=function(){t(new TypeError("Network request failed"))},n.onabort=function(){t(new s.DOMException("Aborted","AbortError"))},n.open(e.method,e.url,!0),"include"===e.credentials?n.withCredentials=!0:"omit"===e.credentials&&(n.withCredentials=!1),"responseType"in n&&c.blob&&(n.responseType="blob"),e.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",o),n.onreadystatechange=function(){4===n.readyState&&e.signal.removeEventListener("abort",o)}),n.send(void 0===e._bodyInit?null:e._bodyInit)})}m.polyfill=!0,self.fetch||(self.fetch=m,self.Headers=u,self.Request=h,self.Response=b),s.Headers=u,s.Request=h,s.Response=b,s.fetch=m,Object.defineProperty(s,"__esModule",{value:!0})}(e),t.exports=self.fetch},function(t,e,r){var n=r(2).Symbol;t.exports=n},function(t,e,r){"use strict";function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(e,"a",function(){return n});function h(t){var e=0<t.indexOf("-"),r=0<t.indexOf("+");if(e&&r){var n=p(t.split("-",2),2),o=n[0],i=p(n[1].split("+",2),2);return[o,i[0],i[1]]}if(e){var a=p(t.split("-",2),2);return[a[0],a[1],null]}if(r){var s=p(t.split("+",2),2);return[s[0],null,s[1]]}return[t,null,null]}function y(t,e){return t&&e?t.localeCompare(e):t||e?t?-1:1:0}var n=function(t,e){var r=p(h(t),3),n=r[0],o=r[1],i=r[2],a=p(h(e),3),s=a[0],c=a[1],u=a[2],f=function(t,e){for(var r=t.split("."),n=e.split("."),o=0;o<Math.min(r.length,n.length);o++){var i=r[o]-n[o];if(0!=i)return Math.max(-1,Math.min(i,1))}var a=r.length-n.length;return Math.max(-1,Math.min(a,1))}(n,s),l=y(o,c),d=y(i,u);return 0!==f?f:0!==l?l:d}},function(r,t,e){(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;r.exports=e}).call(this,e(9))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){window.addEventListener("scroll",function(){0<window.scrollY&&window.document.querySelector(".js-navbar-scroll").classList.add("navbar--box-shadow")})},function(t,e){window.document.querySelector("#navbar-toggle-button").addEventListener("click",function(){var t=window.document.querySelector("#navbar-drawer"),e=window.document.querySelector("#hamburger-icon"),r=window.document.querySelector("#close-icon");t.classList.toggle("navbar__drawer--open"),e.classList.toggle("visible"),r.classList.toggle("visible")})},function(t,e){!function(){var t=window.document.querySelector("#content-drawer"),e=window.document.querySelector("#content-navbar"),r=window.document.querySelector("#content-open-button"),n=window.document.querySelector("#content-close-button");if(t&&r&&n&&e){function o(){t.classList.toggle("content-drawer-container--open"),e.classList.toggle("navbar--hidden")}r.addEventListener("click",o),n.addEventListener("click",o)}}()},function(t,e,r){"use strict";var n=r(0),o=r.n(n);!function(){var t=document.querySelector(".wy-nav-side-toc");if(t){var e=Array.from(t.querySelectorAll("li")).map(function(t){var e=t.querySelector("a").hash.substr(1);return{navElement:t,targetElement:e?document.querySelector("#".concat(e)):document.body}}),r=window.document.querySelector("header > nav").offsetHeight,n=function(){var t;e.sort(function(t,e){return t.targetElement.offsetTop-e.targetElement.offsetTop}),t=e[0].targetElement.offsetTop+r>window.scrollY?0:e[e.length-1].targetElement.offsetTop+r<window.scrollY?e.length-1:e.findIndex(function(t){return t.targetElement.offsetTop+r>window.scrollY})-1,e.forEach(function(t){return t.navElement.classList.remove("current")}),e[t].navElement.classList.add("current")};window.addEventListener("scroll",o()(n,10)),window.addEventListener("resize",o()(n,10)),n()}}()},function(t,e,r){var n=r(2);t.exports=function(){return n.Date.now()}},function(t,e,r){var n=r(1),o=r(16),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=s.test(t);return r||c.test(t)?u(t.slice(2),r?2:8):a.test(t)?NaN:+t}},function(t,e,r){var n=r(3),o=r(4);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},function(t,e,r){var n=r(6),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),r=t[s];try{var n=!(t[s]=void 0)}catch(t){}var o=a.call(t);return n&&(e?t[s]=r:delete t[s]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e){!function(){var e=window.document.querySelector(".rating");if(e){function t(t){e.querySelector("#rate-star-".concat(t)).addEventListener("click",function(){!function(t){if("function"==typeof ga){var e={command:"send",hitType:"event",category:"Helpful",action:"click",label:window.location.pathname,value:t};ga(e.command,e.hitType,e.category,e.action,e.label,e.value)}}(t),e.innerHTML="<p class='bodytext__medium--brownish-grey font-weight-500 mb-0'>Thank you!</p>"})}for(var r=1;r<=5;r++)t(r)}}()},function(t,e){var r=window.document.querySelector(".rst-content");!function(){if(r){var t=r.querySelectorAll("table");t&&0!==t.length&&t.forEach(function(t){if(!t.parentNode.classList.contains("wy-table-responsive")){var e=document.createElement("div");e.classList.add("wy-table-responsive"),t.parentNode.insertBefore(e,t),e.appendChild(t)}})}}()},function(t,e,n){"use strict";(function(t){var i=n(7);function r(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(){var t=r(document.location.pathname.split("/")),e=t[2];return{currentVersion:t[3],currentPackageName:e,pagePath:t.slice(4).join("/")}}var a;(a=window.document.querySelectorAll(".docs-version-selector"))&&0!==a.length&&t("/_gen/packages-metadata.json").then(function(t){return t.json()}).then(function(t){var e=f().currentPackageName,r=t.find(function(t){return t["package-name"]===e});if(r){console.log("currentPackageInfo=",r);var n=r["all-versions"].sort(i.a).reverse(),o=r["stable-version"];a.forEach(function(t){return function(t,e,r){console.log("updateVersionSelector:",{versionSelector:t,packageAllVersions:e,stableVersion:r});var n=t.querySelector("#version-item-template").innerText,o=document.createElement("div");function i(t,e){var r=o.cloneNode(!0),n="/docs/".concat(t,"/").concat(c,"/").concat(u);r.setAttribute("href",n),r.innerText=e,a.appendChild(r)}o.innerHTML=n,o=o.firstElementChild;var a=t.querySelector(".dropdown-menu"),s=f(),c=s.currentPackageName,u=s.pagePath;i("stable","Stable (".concat(r,")")),e.forEach(function(t){return i(t,t)})}(t,n,o)})}else console.error("Unable to find package info for ".concat(e))})}).call(this,n(5))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e);r(10),r(11),r(12),r(13),r(19),r(20),r(55),r(21)},function(t,e){Array.from(document.querySelectorAll(".toctree ul")).forEach(function(t){Array.from(t.parentNode.children).filter(function(t){return"A"===t.tagName}).forEach(function(t){var e=document.createElement("span");e.classList.add("toctree-expand"),t.insertBefore(e,t.firstChild)})})}]);