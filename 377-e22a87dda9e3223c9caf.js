(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{2548:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),o=a(n(866));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){return l.default.createElement(o.default,{id:"hidden",labelText:"can you see me?",isLabelHidden:!0})};t.default=i},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(0)),o=d(n(3)),a=d(n(5)),i=d(n(918)),r=d(n(919));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=a.default.bind(i.default),p={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.node.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},h={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},m=function(e){var t=e.checked,n=e.defaultChecked,o=e.inputAttrs,a=e.id,i=e.disabled,d=e.isInline,p=e.isLabelHidden,h=e.labelText,m=e.labelTextAttrs,_=e.name,v=e.onBlur,x=e.onChange,O=e.onFocus,k=e.value,y=b(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),g=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o);void 0!==t?g.checked=t:g.defaultChecked=n;var w=f(["checkbox",{"is-inline":d},y.className]),C=f(["label",{"is-disabled":i},{"is-mobile":r.default.isConsideredMobileDevice()},m.className]),j=f(["native-input",o.className]),P=f(["label-text",{"is-hidden":p},{"is-mobile":r.default.isConsideredMobileDevice()}]),D=null;return p?(g["aria-label"]=h,D=l.default.createElement("span",u({},m,{className:P}))):D=l.default.createElement("span",u({},m,{className:P}),h),l.default.createElement("div",u({},y,{className:w}),l.default.createElement("label",{htmlFor:a,className:C},l.default.createElement("input",u({},g,{type:"checkbox",id:a,disabled:i,name:_,value:k,onChange:x,onFocus:O,onBlur:v,className:j})),D))};m.propTypes=p,m.defaultProps=h,m.isCheckbox=!0;var _=m;t.default=_},918:function(e,t,n){e.exports={checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},919:function(e,t,n){"use strict";var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=l}}]);
//# sourceMappingURL=377-e22a87dda9e3223c9caf.js.map