(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{2793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=a(n(890));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=[i.default.createElement("p",{key:"lorem1"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem2"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem3"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem4"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem5"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem6"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem7"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem8"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem9"},"Lorem ipsum dolor sit amet consectetur adipiscing elit."),i.default.createElement("p",{key:"lorem10"},"Lorem ipsum dolor sit amet consectetur adipiscing elit.")],h=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(o=l(t).call(this,e))||"object"!==r(o)&&"function"!=typeof o?u(i):o).state={isOpen:!1},n.toggleShowHide=n.toggleShowHide.bind(u(n)),n}var n,a,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(a=[{key:"toggleShowHide",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e="";return e=this.state.isOpen?"Hide ".concat(f.length-3," Sentences"):"Show ".concat(f.length-3," More Sentences"),i.default.createElement(o.default,{preview:[f[0],f[1],f[2]],onChange:this.toggleShowHide,isOpen:this.state.isOpen,buttonText:e},f)}}])&&s(n.prototype,a),h&&s(n,h),t}(i.default.Component);t.default=h},851:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=u(n(0)),s=u(n(3)),l=u(n(279));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!n.length)return e;for(var o={},a=Object.keys(e),r=0;r<a.length;r++){var s=a[r];-1===n.indexOf(s)&&(o[s]=e[s])}return o}function p(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function m(e){return!isNaN(parseFloat(e))&&isFinite(e)}function y(e){return"string"==typeof e&&e.search("%")===e.length-1&&m(e.substr(0,e.length-1))}function g(e,t){e&&"function"==typeof e&&e(t)}var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var i="auto",a="visible";m(e.height)?(i=e.height<0||"0"===e.height?0:e.height,a="hidden"):y(e.height)&&(i="0%"===e.height?0:e.height,a="hidden"),n.animationStateClasses=o({},f,e.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:a,shouldUseTransitions:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,i,o=this,a=this.props,r=a.delay,s=a.duration,u=a.height,f=a.onAnimationEnd,h=a.onAnimationStart;if(this.contentElement&&u!==e.height){var d;this.showContent(t.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=s+r,_=null,w={height:null,overflow:"hidden"},O="auto"===t.height;m(u)?(_=u<0||"0"===u?0:u,w.height=_):y(u)?(_="0%"===u?0:u,w.height=_):(_=b,w.height="auto",w.overflow=null),O&&(w.height=_,_=b);var S=(0,l.default)((c(d={},this.animationStateClasses.animating,!0),c(d,this.animationStateClasses.animatingUp,"auto"===e.height||u<e.height),c(d,this.animationStateClasses.animatingDown,"auto"===u||u>e.height),c(d,this.animationStateClasses.animatingToHeightZero,0===w.height),c(d,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(d,this.animationStateClasses.animatingToHeightSpecific,w.height>0),d)),C=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:S,height:_,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(w.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(w),g(h,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:C,shouldUseTransitions:!1}),o.hideContent(w.height),g(f,{newHeight:w.height})}),v)):(g(h,{newHeight:_}),this.timeoutID=setTimeout((function(){w.animationStateClasses=C,w.shouldUseTransitions=!1,o.setState(w),"auto"!==u&&o.hideContent(_),g(f,{newHeight:_})}),v))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,l.default)((c(t={},this.animationStateClasses.static,!0),c(t,this.animationStateClasses.staticHeightZero,0===e),c(t,this.animationStateClasses.staticHeightSpecific,e>0),c(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,s=n.children,u=n.className,f=n.contentClassName,p=n.duration,m=n.easing,y=n.delay,g=n.style,b=this.state,v=b.height,_=b.overflow,w=b.animationStateClasses,O=b.shouldUseTransitions,S=o({},g,{height:v,overflow:_||g.overflow});O&&a&&(S.transition="height "+p+"ms "+m+" "+y+"ms",g.transition&&(S.transition=g.transition+", "+S.transition),S.WebkitTransition=S.transition);var C={};i&&(C.transition="opacity "+p+"ms "+m+" "+y+"ms",C.WebkitTransition=C.transition,0===v&&(C.opacity=0));var E=(0,l.default)((c(e={},w,!0),c(e,u,u),e));return r.default.createElement("div",o({},d.apply(void 0,[this.props].concat(h)),{"aria-hidden":0===v,className:E,style:S}),r.default.createElement("div",{className:f,style:C,ref:function(e){return t.contentElement=e}},s))}}]),t}(r.default.Component);b.propTypes={animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,duration:s.default.number,delay:s.default.number,easing:s.default.string,height:function(e,t,n){var o=e[t];return"number"==typeof o&&o>=0||y(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=b},852:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),o=l(n(3)),a=l(n(5)),r=l(n(851)),s=l(n(853));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=a.default.bind(s.default),h={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},d=function(e){var t,n=e.isAnimated,o=e.isOpen,a=e.children,s=c(e,["isAnimated","isOpen","children"]),l=o?"auto":0;return t=n?i.default.createElement(r.default,{duration:250,height:l},a):o&&a,i.default.createElement("div",u({},s,{className:f("toggle",s.className),"aria-hidden":!o}),t)};d.propTypes=h,d.defaultProps={isAnimated:!1,isOpen:!1};var p=d;t.default=p},853:function(e,t,n){e.exports={toggle:"Toggle-module__toggle___3Y29L"}},890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n(0)),o=c(n(3)),a=c(n(852)),r=n(8),s=c(n(5)),l=c(n(907)),u=c(n(908));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=s.default.bind(l.default),d={children:o.default.node.isRequired,intl:r.intlShape.isRequired,onChange:o.default.func.isRequired,buttonAlign:o.default.string,buttonText:o.default.string,isOpen:o.default.bool,preview:o.default.node},p={buttonAlign:"start",isOpen:!1,preview:void 0},m=function(e){var t=e.buttonAlign,n=e.buttonText,o=e.children,r=e.onChange,s=e.preview,l=e.intl,c=e.isOpen,d=f(e,["buttonAlign","buttonText","children","onChange","preview","intl","isOpen"]),p=h(["show-hide","button",t,d.className]),m="";return n||(m=c?l.formatMessage({id:"Terra.showhide.hide"}):l.formatMessage({id:"Terra.showhide.showmore"})),i.default.createElement("div",d,!c&&s,i.default.createElement(a.default,{isOpen:c},o),i.default.createElement("div",{className:h("show-hide")},i.default.createElement(u.default,{"aria-expanded":c,text:n||m,onClick:r,className:p})))};m.propTypes=d,m.defaultProps=p;var y=(0,r.injectIntl)(m);t.default=y},907:function(e,t,n){e.exports={"show-hide":"ShowHide-module__show-hide___1gRh1",start:"ShowHide-module__start___2xANP",center:"ShowHide-module__center___2PZhE",end:"ShowHide-module__end___1KB6q"}},908:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(0)),o=u(n(3)),a=u(n(5)),r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(19)),s=u(n(909));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=a.default.bind(s.default),b={onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyDown:o.default.func,onKeyUp:o.default.func,refCallback:o.default.func,text:o.default.string.isRequired},v={refCallback:void 0},_=function(e){function t(e){var n,i,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(o=p(t).call(this,e))||"object"!==c(o)&&"function"!=typeof o?m(i):o).state={active:!1,focused:!1},n.handleKeyDown=n.handleKeyDown.bind(m(n)),n.handleKeyUp=n.handleKeyUp.bind(m(n)),n.handleOnBlur=n.handleOnBlur.bind(m(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===r.KEY_SPACE?(this.setState({active:!0}),this.setState({focused:!0})):e.nativeEvent.keyCode===r.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===r.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===r.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,o=(e.onBlur,e.onFocus),a=(e.onKeyDown,e.onKeyUp,e.refCallback),r=h(e,["text","onClick","onBlur","onFocus","onKeyDown","onKeyUp","refCallback"]),s=g(["button",{"is-active":this.state.active},{"is-focused":this.state.focused},r.className]);return i.default.createElement("button",f({},r,{className:s,type:"button",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:n,onFocus:o,ref:a}),i.default.createElement("span",{className:g("inner")},i.default.createElement("span",{className:g("text")},t),i.default.createElement("span",{className:g("icon-holder")},i.default.createElement("span",{className:g("icon")}))))}}])&&d(n.prototype,o),a&&d(n,a),t}(i.default.Component);_.propTypes=b,_.defaultProps=v;var w=_;t.default=w},909:function(e,t,n){e.exports={button:"_ShowHideButton-module__button___2fLNi",icon:"_ShowHideButton-module__icon___1pwkV","is-focused":"_ShowHideButton-module__is-focused___1zXGX","is-hovered":"_ShowHideButton-module__is-hovered___LmXOs",inner:"_ShowHideButton-module__inner___2vpG7",text:"_ShowHideButton-module__text___1gaph","icon-holder":"_ShowHideButton-module__icon-holder___2RxYy"}}}]);
//# sourceMappingURL=147-694b0a97bf887c967bcf.js.map