(window.webpackJsonp=window.webpackJsonp||[]).push([[712],{2778:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=u(n(280));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=i(t).call(this,e))||"object"!==a(r)&&"function"!=typeof r?l(o):r).onChange=n.onChange.bind(l(n)),n.state={searchText:"",callCount:0},n}var n,u,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(u=[{key:"onChange",value:function(e,t){var n=t;t&&t.length>0&&/\d/.test(t)&&(n=t.substring(0,t.length-1)),this.setState((function(e){return{searchText:n,callCount:e.callCount+1}}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("p",{id:"searchOnChangeCallCount"},this.state.callCount),o.default.createElement("p",{id:"searchOnChangeText"},this.state.searchText),o.default.createElement(r.default,{id:"searchfield",onChange:this.onChange,value:this.state.searchText}))}}])&&c(n.prototype,u),s&&c(n,s),t}(o.default.Component);t.default=s}}]);
//# sourceMappingURL=712-420856c5430a0ea64471.js.map