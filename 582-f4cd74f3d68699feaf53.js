(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(0)),r=f(n(3)),o=f(n(5)),i=n(8),l=f(n(873)),s=f(n(135)),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(19)),c=f(n(960)),p=n(971),d=f(n(972));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=o.default.bind(c.default),O={onPageChange:r.default.func.isRequired,selectedPage:r.default.number.isRequired,totalCount:r.default.number.isRequired,itemCountPerPage:r.default.number.isRequired,intl:i.intlShape.isRequired},x=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this;var o=(n=!(r=h(t).call(this,e))||"object"!==g(r)&&"function"!=typeof r?v(a):r).props,i=o.selectedPage,l=o.totalCount;return n.state={selectedPage:i&&l?i:void 0,showReducedPaginator:!1},n.handlePageChange=n.handlePageChange.bind(v(n)),n.defaultProgressivePaginator=n.defaultProgressivePaginator.bind(v(n)),n.reducedProgressivePaginator=n.reducedProgressivePaginator.bind(v(n)),n.setPaginator=n.setPaginator.bind(v(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==u.KEY_RETURN&&n.nativeEvent.keyCode!==u.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e),t.setState({selectedPage:e})}}},{key:"defaultProgressivePaginator",value:function(){var e=this.props.intl,t=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,r=1===n?1:n-1,o=n===t?t:n+1;return a.default.createElement("div",{className:P(["paginator","progressive"]),role:"navigation","aria-label":"pagination"},a.default.createElement("div",null,e.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:n,pageNumberTotal:t})),a.default.createElement("div",null,a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.first"}),className:P(["nav-link",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},e.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.previous"}),className:P(["nav-link","previous",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(r),onKeyDown:this.handlePageChange(r)},a.default.createElement("span",{className:P("icon")}),e.formatMessage({id:"Terra.paginator.previous"})),a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.next"}),className:P(["nav-link","next",n===t?"is-disabled":null]),disabled:n===t,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},e.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:P("icon")})),a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.last"}),className:P(["nav-link",n===t?"is-disabled":null]),disabled:n===t,onClick:this.handlePageChange(t),onKeyDown:this.handlePageChange(t)},e.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=this.props.intl,t=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,r=1===n?1:n-1,o=n===t?t:n+1;return a.default.createElement("div",{className:P(["paginator"]),role:"navigation","aria-label":"pagination"},a.default.createElement("div",null,a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.first"}),className:P(["nav-link",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},e.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:e.formatMessage({id:"Terra.paginator.previous"}),className:P(["nav-link","previous","icon-only",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(r),onKeyDown:this.handlePageChange(r)},a.default.createElement(s.default,{text:e.formatMessage({id:"Terra.paginator.previous"})}),a.default.createElement("span",{className:P("icon")}))),a.default.createElement("div",null,e.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:n,pageNumberTotal:t})),a.default.createElement("div",null,a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.next"}),className:P(["nav-link","next","icon-only",n===t?"is-disabled":null]),disabled:n===t,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.default.createElement(s.default,{text:e.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:P("icon")})),a.default.createElement(d.default,{ariaDisabled:n===t,ariaLabel:e.formatMessage({id:"Terra.paginator.last"}),className:P(["nav-link",n===t?"is-disabled":null]),disabled:n===t,onClick:this.handlePageChange(t),onKeyDown:this.handlePageChange(t)},e.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return a.default.createElement(l.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&b(n.prototype,r),o&&b(n,o),t}(a.default.Component);x.propTypes=O;var j=(0,i.injectIntl)(x);t.default=j},2159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),r=s(n(939)),o=s(n(1194)),i=s(n(5)),l=s(n(1192));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=i.default.bind(l.default),g=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},b=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=p(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?d(a):r).state={content:g(),currentPage:1},n.changePages=n.changePages.bind(d(n)),n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return a.default.createElement("div",{className:f("paginator-wrapper")},a.default.createElement(r.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(o.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&c(n.prototype,i),l&&c(n,l),t}(a.default.Component);t.default=b},2938:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(0),r=n.n(a),o=n(275),i=n(970),l=n(2159),s=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function d(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ProgressivePaginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}d.isMDXComponent=!0;var m=n(843),f=n.n(m),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Progressive Paginator Example",description:n,example:r.a.createElement(s.a,null),exampleSrc:r.a.createElement(d,null),isExpanded:a})},b=n(846),h=n.n(b);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=function(){return Object(o.mdx)(h.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page."))}return t.isMDXComponent=!0,t({})}}]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j={};function C(e){var t=e.components,n=x(e,["components"]);return Object(o.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-progressive-paginator"},"Terra Progressive Paginator"),Object(o.mdx)("p",null,"Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",O({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("p",null,Object(o.mdx)("a",O({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-paginator"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(g,{mdxType:"ProgressivePaginatorExample"}),Object(o.mdx)("h2",{id:"progressive-paginator-props"},"Progressive Paginator Props"),Object(o.mdx)(P,{mdxType:"ProgressivePaginatorPropsTable"}))}C.isMDXComponent=!0}}]);
//# sourceMappingURL=582-f4cd74f3d68699feaf53.js.map