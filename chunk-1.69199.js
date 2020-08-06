(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{60:function(t,e,n){"use strict";n.r(e);var r=n(58),i=n(0),l=n.n(i);function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"initHeaderAnimation",function(){return a});var f=7,d=7,y=30,v=!1,p=function(t,e){return t+Math.random()*(e-t)},g=function(t){return t[function(t,e){return Math.round(p(t,e))}(0,t.length-1)]},M=function(){function n(t,e){c(this,n),this.pos=t,this.vectors=e}return s(n,[{key:"draw",value:function(t){t.push(),t.noStroke(),t.fill(128,128,128),t.translate(this.pos.x,this.pos.y),t.beginShape();for(var e=0;e<this.vectors.length;e+=1){var n=this.vectors[e];t.vertex(n.x,n.y)}t.endShape(r.CLOSE),t.pop()}},{key:"isVectorInside",value:function(t){for(var e=this.vectors,n=t.x-this.pos.x,r=t.y-this.pos.y,i=!1,o=0,a=e.length-1;o<e.length;a=o++){e[o].y>r!=e[a].y>r&&n<(e[a].x-e[o].x)*(r-e[o].y)/(e[a].y-e[o].y)+e[o].x&&(i=!i)}return i}},{key:"calcArea",value:function(){for(var t=0,e=0,n=this.vectors.length;e<n;e++){t+=this.vectors[e].x*this.vectors[e===this.vectors.length-1?0:e+1].y*.5,t-=this.vectors[e===this.vectors.length-1?0:e+1].x*this.vectors[e].y*.5}return Math.abs(t)}}]),n}(),m=function(){function a(t,e,n,r,i,o){c(this,a),this.pos=t,this.size=e,this.color=n,this.scale=r,this.rotate=o,this.direction=i,this.shift=null,this.animFrame=100*Math.random()}return s(a,[{key:"calc",value:function(t){this.shift||(this.shift=t.createVector(0,0)),this.animFrame+=.1,this.rotate=this.animFrame/50*t.PI,this.shift.x=Math.cos(this.animFrame/10)*Math.sin(this.animFrame/10)*40,this.shift.y=40*Math.sin(this.animFrame/10)}},{key:"draw",value:function(t){t.push(),t.noStroke(),t.fill(this.color),t.translate(this.pos.x,this.pos.y),t.scale(this.scale),t.translate(this.shift.x,this.shift.y),t.rotate(this.rotate*this.direction),t.rect(-this.size/2,-this.size/2,this.size,this.size,5),t.pop()}},{key:"calcArea",value:function(){return this.size*this.size*this.scale}}]),a}();function x(t,e,n,r,i){for(var o=[],a=e/d,c=n/f,s=0;s<=f;s++)for(var h=0;h<=d;h++){var u=t.createVector(p(a*s,a*(s+1)),p(c*h,c*(h+1)));if(!r.isVectorInside(u)){var l=new m(u,p(y/2,y),g(i),p(.5,1),.5<p(0,1)?1:-1,p(0,2*t.PI));o.push(l)}}return o}function w(t,e,n,r,i){for(var o=e.getBoundingClientRect(),a=n.getBoundingClientRect(),c=r.getBoundingClientRect(),s=i.getBoundingClientRect(),h=[t.createVector(a.x,a.y),t.createVector(a.x+a.width,a.y),t.createVector(c.x+c.width,c.y),t.createVector(c.x+c.width,c.y+c.height),t.createVector(s.x+s.width,s.y+s.height),t.createVector(s.x,s.y+s.height),t.createVector(c.x,c.y+c.height),t.createVector(c.x,c.y)],u=0,l=h;u<l.length;u++){var f=l[u];f.x=f.x-o.x,f.y=f.y-o.y}for(var d=Math.min.apply(Math,b(h.map(function(t){return t.x}))),y=Math.max.apply(Math,b(h.map(function(t){return t.x}))),v=Math.min.apply(Math,b(h.map(function(t){return t.y}))),p=d+(y-d)/2,g=v+(Math.max.apply(Math,b(h.map(function(t){return t.y})))-v)/2,m=0,x=h;m<x.length;m++){var w=x[m];w.x-=p,w.x*=1.2,w.x+=p,w.y-=g,w.y*=1.2,w.y+=g}return new M(t.createVector(0,0),h)}function a(){var c=document.querySelector("#header-canvas"),s=document.querySelector("#header-title"),h=document.querySelector("#header-lead"),u=document.querySelector("#header-button");!function(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}(function(){new r(function(r){var i,o=[],a=[];r.setup=function(){var t=c.getBoundingClientRect(),e=t.width,n=t.height;o=[r.color("#017cee"),r.color("#00ad46"),r.color("#0cb6ff"),r.color("#ff7557"),r.color("#e43921"),r.color("#11e1ee"),r.color("#04d659"),r.color("#00c7d4"),r.color("#cbcbcb")],i=w(r,c,s,h,u),a=x(r,e,n,i,o),r.createCanvas(e,n)},r.draw=function(){r.background(255,255,255),v&&i.draw(r),a.forEach(function(t){t.calc(r),t.draw(r)})},r.windowResized=l()(function(){var t=c.getBoundingClientRect(),e=t.width,n=t.height;i=w(r,c,s,h,u),a=x(r,e,n,i,o),r.resizeCanvas(e,n)},500)},document.querySelector("#header-canvas"))})}}}]);