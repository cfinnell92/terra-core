(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{2554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(866)),a=i(n(987));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=s(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?c(r):o).state={selectedAnswers:[]},n.handleOnChange=n.handleOnChange.bind(c(n)),n}var n,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(i=[{key:"handleOnChange",value:function(e){var t=this.state.selectedAnswers;e.currentTarget.checked?t.push(e.currentTarget.value):t.splice(t.indexOf(e.currentTarget.value),1),this.setState({selectedAnswers:t})}},{key:"render",value:function(){return r.default.createElement(a.default,{id:"testing-checkbox-field",legend:"What departments are you looking to work for?",help:"These are the core areas we need for graphic designers",isInvalid:this.state.selectedAnswers.length<=0,error:"You must be willing to work in one of these departments",isInline:!0,required:!0,hideRequired:!0},r.default.createElement(o.default,{id:"ux-dept",name:"dept[]",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),r.default.createElement(o.default,{id:"magazine-dept",name:"dept[]",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),r.default.createElement(o.default,{id:"website-dept",name:"dept[]",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),r.default.createElement(o.default,{id:"events-dept",name:"dept[]",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&u(n.prototype,i),f&&u(n,f),t}(r.default.Component);t.default=f}}]);
//# sourceMappingURL=675-01ef8184ce96a457e334.js.map