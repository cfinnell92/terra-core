(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{2348:function(e,t,n){e.exports={"responsive-element-wrapper":"FixedSize-module__responsive-element-wrapper___3nxT_"}},2762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),i=l(n(5)),o=l(n(873)),a=l(n(2348));function l(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(a.default),s=function(){return r.default.createElement("div",{id:"fixed-target"},r.default.createElement("div",{className:u("responsive-element-wrapper")},r.default.createElement(o.default,{tiny:r.default.createElement("div",null,"Tiny"),small:r.default.createElement("div",null,"Small"),medium:r.default.createElement("div",null,"Medium"),large:r.default.createElement("div",null,"Large"),huge:r.default.createElement("div",null,"Huge"),enormous:r.default.createElement("div",null,"Enormous")})))};t.default=s},873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var r=u(n(0)),i=u(n(3)),o=u(n(137)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(186));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var m={children:i.default.node,onChange:i.default.func,onResize:i.default.func,tiny:i.default.element,small:i.default.element,medium:i.default.element,large:i.default.element,huge:i.default.element,enormous:i.default.element,responsiveTo:i.default.oneOf(["window","parent"])},h=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(r=f(t).call(this))||"object"!==s(r)&&"function"!=typeof r?c(n):r).state={element:null},e.setContainer=e.setContainer.bind(c(e)),e.handleResize=e.handleResize.bind(c(e)),e.handleWindowResize=e.handleWindowResize.bind(c(e)),e.animationFrameID=null,e}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new o.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,i=t.tiny,o=t.small,l=t.medium,u=t.large,s=t.huge,d=t.enormous;r&&r(e);var f,c=(0,a.activeBreakpointForSize)(e);n&&c!==this.breakpoint&&n(c),this.breakpoint=c,(i||o||l||u||s||d)&&(f=e>=a.default.enormous&&d?"enormous":e>=a.default.huge&&s?"huge":e>=a.default.large&&u?"large":e>=a.default.medium&&l?"medium":e>=a.default.small&&o?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.default.createElement(r.default.Fragment,null,"parent"===n&&!this.container&&r.default.createElement("div",{ref:this.setContainer}),t)}}])&&d(n.prototype,i),l&&d(n,l),t}(r.default.Component);h.propTypes=m,h.defaultProps={responsiveTo:"parent"};var v=h;t.default=v}}]);
//# sourceMappingURL=441-42c19556450e80bc6c5d.js.map