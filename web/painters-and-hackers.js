!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ph=e():t.ph=e()}(this,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class i{constructor(t){this._DEFAULT_CAPACITY=10,this._size=0,this._capacity=t||this._DEFAULT_CAPACITY,this._elem=new Array(t)}get(t){if(t>=this._size||t<0)throw new Error("array index out of bounds");return this._elem[t]}put(t,e){if(t>=this._size||t<0)throw new Error("array index out of bounds");this._elem[t]=e}append(t){this._expand(),this._elem[this._size]=t,this._size++}insert(t,e){if(t>=this._size||t<0)throw new Error("array index out of bounds");this._expand();for(let e=t;e<this._size;e++)this._elem[e+1]=this._elem[e];this._elem[t]=e,this._size++}remove(t){if(t>=this._size||t<0)throw new Error("array index out of bounds");this._shrink();const e=this._elem[t];for(let e=t;e<this._size;e++)this._elem[e]=this._elem[e+1];return this._size--,e}size(){return this._size}toString(){this._elem.toString()}_expand(){if(this._size<this._capacity)return;this._capacity=Math.max(this._DEFAULT_CAPACITY,this._capacity);const t=new Array(this._capacity<<=1);for(let e=0;e<this._size;e++)t[e]=this._elem[e];this._elem=t}_shrink(){if(this._capacity<this._DEFAULT_CAPACITY<<1)return;if(this._sise<<2>this._capacity)return;const t=new Array(this._capacity>>=1);for(let e=0;e<this._size;e++)t[e]=this._elem[e];this._elem=t}}var n=function(t,e,r){let i,n,o,s;return t>e?(i=e/r,o=r,s=Math.ceil(t/e)*o,n=t/s):(n=t/r,s=r,o=e/t*s,i=e/o),{cellCol:s,cellRow:o,cellWidth:n,cellHeight:i}},o=[{namspace:"vector",frameRate:30,frames(t,e,r){const{cellRow:o,cellCol:s}=n(e,r,20),l=e=>{const r=4*((e=>(e/s|0)*(t.height/o)|0)(e)*t.width+(e=>e%s*(t.width/s)|0)(e));return[t.data[r],t.data[r+1],t.data[r+2],t.data[r+3]]},c=new i;return function(){const t=o*s;let e=0;const r=[];for(;e<t;){const i=30*Math.random(),n=Math.min(t-c.size(),i);e+=n;for(let t=0;t<n;t++){const t=()=>{const t=c.size();return c.append(l(t+1)),c};r.push(t)}}return r}()},layout(t,e,r){const{cellRow:i,cellCol:o,cellHeight:s,cellWidth:l}=n(e,r,20),c=[{x:0,y:0,width:e,height:r,color:"#fff"}],h=[];for(let t=0;t<i;t++)for(let e=0;e<o;e++)h.push({x:e*l,y:t*s,width:l,height:s,color:"#eee"});const a=[];for(let e=0;e<t._capacity;e++){const t=e%o,r=e/o|0;a.push({x:t*l,y:r*s,width:l,height:s,color:"#000"})}const u=[];for(let e=0;e<t.size();e++){const r=e%o,i=e/o|0,[n,c,h,a]=t.get(e),f=.299*n+.587*c+.114*h|0;u.push({x:r*l+1,y:i*s+1,width:l-2,height:s-2,color:`rgba(${f}, ${f}, ${f}, ${a})`})}return{background:c,grids:h,capacities:a,elements:u}},stroke:{background(t,e){t.fillStyle=e.color,t.fillRect(e.x,e.y,e.width,e.height)},grids(t,e){t.strokeStyle=e.color,t.strokeRect(e.x,e.y,e.width,e.height)},capacities(t,e){t.strokeStyle=e.color,t.strokeRect(e.x,e.y,e.width,e.height)},elements(t,e){t.fillStyle=e.color,t.fillRect(e.x,e.y,e.width,e.height)}}}];e.default={hacker:function(){let t=[300,150],e=30,r=null,i=null,n="",s=()=>{},l={},c=o;return l.canvas=function(t){return arguments.length?(r=t,l):r},l.size=function(e){return arguments.length?(t=e,l):t},l.imageData=function(t){return arguments.length?(i=t,l):i},l.end=function(t){return arguments.length?(s=t,l):s},l.frameRate=function(t){return arguments.length?(e=t,l):e},l.style=function(t){return arguments.length?(n=t,l):n},l.start=function(){const[e,o]=t;r.width=2*e,r.height=2*o;const h=r.getContext("2d");h.save(),h.scale(2,2);const{frames:a,stroke:u,frameRate:f,layout:d}=c.find(t=>t.namspace===n),_=a(i,e,o);let p=0;return setInterval(y,1e3/f),y(),l;function y(){if(p>=_.length)return clearInterval(null),h.restore(),void s();const t=(0,_[p++])(),r=d(t,e,o);Object.keys(r).forEach(t=>{const e=u[t],i=r[t];e&&i.forEach(t=>e(h,t))})}},l},painter:function(){}}}]).default}));