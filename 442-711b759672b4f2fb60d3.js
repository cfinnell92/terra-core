(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{2782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(900));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(o.default,{title:"Closed Section Header",onClick:function(){}})}},900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(0)),o=f(n(3)),i=f(n(5)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(19)),c=f(n(181)),u=f(n(901));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=i.default.bind(u.default),h={title:o.default.string.isRequired,onClick:o.default.func,isOpen:o.default.bool,level:o.default.oneOf([1,2,3,4,5,6]),isTransparent:o.default.bool},j={onClick:void 0,isOpen:!1,isTransparent:!1,level:2},P=function(e){return e.nativeEvent.keyCode===a.KEY_RETURN||e.nativeEvent.keyCode===a.KEY_SPACE},g=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=_(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?v(r):o).state={isActive:!1},n.wrapOnKeyDown=n.wrapOnKeyDown.bind(v(n)),n.wrapOnKeyUp=n.wrapOnKeyUp.bind(v(n)),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(o=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){P(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){P(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.onClick,o=e.isOpen,i=e.isTransparent,a=e.level,u=b(e,["title","onClick","isOpen","isTransparent","level"]),l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);n&&(l.tabIndex="0",l.onKeyDown=this.wrapOnKeyDown(l.onKeyDown),l.onKeyUp=this.wrapOnKeyUp(l.onKeyUp),l.role="button");var f=m(["accordion-icon",{"is-open":n&&o}]),s=r.default.createElement("div",{className:m("accordion-icon-wrapper")},r.default.createElement("span",{className:f})),O=m(["section-header",{"is-interactable":n},{"is-active":this.state.isActive},{"is-transparent":i},u.className]),_="h".concat(a);return r.default.createElement("div",p({},l,{onClick:n,className:O}),r.default.createElement(c.default,{fitStart:n&&s,fill:r.default.createElement(_,{className:m("title")},t)}))}}])&&O(n.prototype,o),i&&O(n,i),t}(r.default.Component);g.propTypes=h,g.defaultProps=j;var S=g;t.default=S},901:function(e,t,n){e.exports={"section-header":"SectionHeader-module__section-header___PT5gM","is-interactable":"SectionHeader-module__is-interactable___3N5_L","is-active":"SectionHeader-module__is-active___1XrZF","is-transparent":"SectionHeader-module__is-transparent___27OCV",title:"SectionHeader-module__title___3SaN6","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___3gLG0","accordion-icon":"SectionHeader-module__accordion-icon___1-oTK","is-open":"SectionHeader-module__is-open___3Bcmi"}}}]);
//# sourceMappingURL=442-711b759672b4f2fb60d3.js.map