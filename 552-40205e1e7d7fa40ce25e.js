(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{2635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),o=i(n(5)),r=i(n(283)),a=i(n(849));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=o.default.bind(a.default),y=function(e){function t(){var e,n,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(l=c(t).call(this))||"object"!==u(l)&&"function"!=typeof l?s(n):l).state={isInvalid:!1},e.toggleInvalid=e.toggleInvalid.bind(s(e)),e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"render",value:function(){return l.default.createElement("div",{className:p("content-wrapper")},l.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),l.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"select-field",defaultValue:"small",error:"Error message.",help:"Help message.",isInvalid:this.state.isInvalid},l.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),l.default.createElement(r.default.Option,{value:"small",display:"Small"}),l.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),l.default.createElement(r.default.Option,{value:"large",display:"Large"}),l.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"})))}}])&&f(n.prototype,o),a&&f(n,a),t}(l.default.Component);t.default=y},849:function(e,t,n){e.exports={"content-wrapper":"Select-test-module__content-wrapper___1yL5h"}}}]);
//# sourceMappingURL=552-40205e1e7d7fa40ce25e.js.map