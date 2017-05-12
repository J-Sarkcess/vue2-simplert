/*!
 *  @author: Irfan Maulana 
 *   vue2-simplert v.0.0.7 
 *   https://github.com/mazipan/vue2-simplert  
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Simplert=e():t.Simplert=e()}(this,function(){return function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="../dist/",e(0)}([function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var n=i(6),o=r(n);t.exports=o.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="#068AC9",r="info";e.default={props:{isUseRadius:!1,isUseIcon:!1,simplertData:Object},data:function(){return{isShownData:!1,title:"",message:"",type:r,colorBtn:i}},watch:{simplertData:function(t){var e=this;e.isShownData=!0,"undefined"!=typeof t&&(e.title=t.title,e.message=t.message,"undefined"!=typeof t.type?e.type=t.type:e.type=r,"undefined"!=typeof t.colorBtn?e.colorBtn=t.colorBtn:e.colorBtn=i)}},methods:{overlayClick:function(t){var e=this;"simplert simplert--shown"===t.target.className&&(e.isShownData=!1,e.type=r)},close:function(t){var e=this;t.preventDefault(),e.isShownData=!1,e.type=r},changeShown:function(t){var e=this;e.isShownData=t}}}},function(t,e,i){e=t.exports=i(3)(),e.push([t.id,".simplert[data-v-b7465f3a]{line-height:1.15;font-size:1.3rem}.simplert [data-v-b7465f3a],.simplert [data-v-b7465f3a]:after,.simplert [data-v-b7465f3a]:before{box-sizing:inherit}.simplert[data-v-b7465f3a]{position:fixed;z-index:999;top:0;left:0;overflow:auto;width:100%;height:100%;background-color:#000;background-color:rgba(0,0,0,.4);text-align:center;opacity:0}.simplert--shown[data-v-b7465f3a]{display:flex;align-items:center;opacity:1;animation-duration:1s;animation-fill-mode:both;animation-name:zoomIn}.simplert__header[data-v-b7465f3a]{padding:2em 0 0}.simplert__title[data-v-b7465f3a]{display:block;font-size:30px}.simplert__content[data-v-b7465f3a]{position:relative;width:90%;max-width:400px;margin:0 auto;padding:0;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}@media only screen and (min-width:768px){.simplert__content[data-v-b7465f3a]{width:30%}}.simplert__content--radius[data-v-b7465f3a]{border-radius:.3em}.simplert__icon[data-v-b7465f3a]{margin:10px auto;width:80px;height:80px;position:relative;border-radius:50%}.simplert__icon--info[data-v-b7465f3a]{border:4px solid #c9dae1}.simplert__icon--success[data-v-b7465f3a]{border:4px solid #a5dc86}.simplert__icon--warning[data-v-b7465f3a]{border:4px solid #f8bb86}.simplert__icon--error[data-v-b7465f3a]{border:4px solid #f27474}.simplert__line[data-v-b7465f3a]{height:5px;display:block;border-radius:2px;position:absolute;z-index:2}.simplert__line--info[data-v-b7465f3a]{background-color:#c9dae1;position:absolute;width:7px;height:7px;left:50%;top:19px;border-radius:50%;margin-left:-3px}.simplert__line--info-2[data-v-b7465f3a]{background-color:#c9dae1;position:absolute;width:5px;height:29px;border-radius:2px;margin-left:-2px;left:50%;bottom:15px}.simplert__line--success[data-v-b7465f3a]{background-color:#a5dc86;width:25px;-webkit-transform:rotate(45deg);transform:rotate(45deg);left:6px;top:44px}.simplert__line--success-2[data-v-b7465f3a]{background-color:#a5dc86;width:47px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:6px;top:38px}.simplert__line--warning[data-v-b7465f3a]{position:absolute;width:5px;height:35px;left:50%;top:10px;border-radius:2px;margin-left:-2px;background-color:#f8bb86}.simplert__line--warning-2[data-v-b7465f3a]{position:absolute;width:7px;height:7px;border-radius:50%;margin-left:-3px;left:50%;bottom:10px;background-color:#f8bb86}.simplert__line--error[data-v-b7465f3a]{background-color:#f27474;-webkit-transform:rotate(45deg);transform:rotate(45deg);left:13px;width:47px;top:35px}.simplert__line--error-2[data-v-b7465f3a]{background-color:#f27474;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:13px;width:47px;top:35px}.simplert__footer[data-v-b7465f3a]{padding:1em 0}.simplert__close[data-v-b7465f3a]{display:inline-block;padding:10px 20px;outline:none;border:none;text-align:center;cursor:pointer;background-color:#068ac9;color:#fff;-webkit-appearance:none;-moz-appearance:none}.simplert__close--radius[data-v-b7465f3a]{border-radius:.3em}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<e.length;n++){var s=e[n];"number"==typeof s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(t,e,i){function r(t,e){for(var i=0;i<t.length;i++){var r=t[i],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(p(r.parts[o],e))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(p(r.parts[o],e));u[r.id]={id:r.id,refs:1,parts:s}}}}function n(t){for(var e=[],i={},r=0;r<t.length;r++){var n=t[r],o=n[0],s=n[1],a=n[2],l=n[3],p={css:s,media:a,sourceMap:l};i[o]?i[o].parts.push(p):e.push(i[o]={id:o,parts:[p]})}return e}function o(t,e){var i=v(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?i.insertBefore(e,r.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function p(t,e){var i,r,n;if(e.singleton){var o=h++;i=b||(b=a(e)),r=d.bind(null,i,o,!1),n=d.bind(null,i,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=l(e),r=f.bind(null,i),n=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(e),r=c.bind(null,i),n=function(){s(i)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}function d(t,e,i,r){var n=i?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var o=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function c(t,e){var i=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function f(t,e){var i=e.css,r=e.sourceMap;r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([i],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(n),o&&URL.revokeObjectURL(o)}var u={},_=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=_(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=_(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,h=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=n(t);return r(i,e),function(t){for(var o=[],s=0;s<i.length;s++){var a=i[s],l=u[a.id];l.refs--,o.push(l)}if(t){var p=n(t);r(p,e)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete u[l.id]}}}};var x=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){var r=i(2);"string"==typeof r&&(r=[[t.id,r,""]]);i(4)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,i){function r(t){i(5)}var n=i(7)(i(1),i(8),r,"data-v-b7465f3a",null);t.exports=n.exports},function(t,e){t.exports=function(t,e,i,r,n){var o,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),r&&(l._scopeId=r);var p;if(n?(p=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=p):i&&(p=i),p){var d=l.functional,c=d?l.render:l.beforeCreate;d?l.render=function(t,e){return p.call(e),c(t,e)}:l.beforeCreate=c?[].concat(c,p):[p]}return{esModule:o,exports:s,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simplert",class:t.isShownData?"simplert--shown":"",attrs:{role:"modal"},on:{click:t.overlayClick}},[i("div",{staticClass:"simplert__content",class:t.isUseRadius?"simplert__content--radius":""},[i("div",{staticClass:"simplert__header"},[t.isUseIcon?i("div",["info"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--info"},[i("div",{staticClass:"simplert__line simplert__line--info"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--info-2"})]):t._e(),t._v(" "),"success"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--success"},[i("div",{staticClass:"simplert__line simplert__line--success"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--success-2"})]):t._e(),t._v(" "),"warning"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--warning"},[i("div",{staticClass:"simplert__line simplert__line--warning"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--warning-2"})]):t._e(),t._v(" "),"error"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--error"},[i("div",{staticClass:"simplert__line simplert__line--error"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--error-2"})]):t._e()]):t._e(),t._v(" "),i("b",{staticClass:"simplert__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"simplert__body"},[i("p",[t._v(t._s(t.message))])]),t._v(" "),i("div",{staticClass:"simplert__footer"},[i("button",{staticClass:"simplert__close",class:t.isUseRadius?"simplert__close--radius":"",style:{"background-color":t.colorBtn},on:{click:t.close}},[t._v("\n                Close\n            ")])])])])},staticRenderFns:[]}}])});