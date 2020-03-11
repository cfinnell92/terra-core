(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1043:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(844),l=n.n(o),u=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-action-footer",version:"2.36.0",url:t})}},1044:function(e,t,n){e.exports={"content-wrapper":"ExampleTemplate__content-wrapper___4Jde5"}},1555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(281)),o=u(n(976)),l=u(n(962));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,null,r.default.createElement(o.default,{center:r.default.createElement(a.default,{href:"#"},"A link")}))}},1556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(53)),o=c(n(282)),l=c(n(976)),u=c(n(962));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(u.default,null,r.default.createElement(l.default,{center:r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,{isInlineBlock:!0,marginRight:"medium"},r.default.createElement(a.default,{text:"Action One"})),r.default.createElement(a.default,{text:"Action Two"}))}))}},2925:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(0),a=n.n(r),o=n(275),l=n(1043),u=n(1555),c=n.n(u);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function s(e){var t=e.components,n=i(e,["components"]);return Object(o.mdx)("wrapper",d({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={<Hyperlink href=\"#\">A link</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n\n")))}s.isMDXComponent=!0;var m=n(843),f=n.n(m),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Single Action",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})},b=n(1556),g=n.n(b);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function x(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",v({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Action One\" />\n          </Spacer>\n          <Button text=\"Action Two\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n\n")))}x.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Multiple Actions",description:n,example:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(x,null),isExpanded:r})},E=n(846),T=n.n(E);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=function(){return Object(o.mdx)(T.a,{rows:[{name:"center",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Actions to be displayed in the center socket"))}return t.isMDXComponent=!0,t({})}}]})};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={};function A(e){var t=e.components,n=k(e,["components"]);return Object(o.mdx)("wrapper",N({},C,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-centered-action-footer"},"Terra Centered Action Footer"),Object(o.mdx)("p",null,"The centered action footer component is a footer bar that contains a single, centered socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",N({parentName:"pre"},{className:"language-jsx"}),"import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\n")),Object(o.mdx)("p",null,Object(o.mdx)("a",N({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(_,{title:"Single Action",mdxType:"SingleActionExample"}),Object(o.mdx)(O,{title:"Multiple Actions",mdxType:"MultipleActionsExample"}),Object(o.mdx)("h2",{id:"centered-action-footer-props"},"Centered Action Footer Props"),Object(o.mdx)(w,{mdxType:"CenteredActionFooterPropsTable"}))}A.isMDXComponent=!0},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(3)),o=u(n(5)),l=u(n(847));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(l.default),_={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=d(t).call(this,e))||"object"!==c(a)&&"function"!=typeof a?i(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(i(n)),n.handleCodeToggle=n.handleCodeToggle.bind(i(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),s(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),s(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,u=this.state,c=u.isExpanded,d=u.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":d})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),c&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);b.propTypes=_,b.defaultProps={isExpanded:!1};var g=b;t.default=g},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(3)),o=u(n(5)),l=u(n(845));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),d={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},i=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:c("badge-container")},r.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(a))))};i.propTypes=d;var p=i;t.default=p},845:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(3)),o=u(n(5)),l=u(n(848));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),d={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},i=function(e){var t=e.rows;return r.default.createElement("table",{className:c("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:c("tr")},r.default.createElement("th",{className:c("th")},"Prop Name"),r.default.createElement("th",{className:c("th")},"Type"),r.default.createElement("th",{className:c("th")},"Is Required"),r.default.createElement("th",{className:c("th")},"Default Value"),r.default.createElement("th",{className:c("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:c(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:c(["td","props-td"])},e.type()),r.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};i.propTypes=d;var p=i;t.default=p},847:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},848:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},962:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(5)),o=u(n(3)),l=u(n(1044));function u(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(l.default),d={children:o.default.node.isRequired},i=function(e){var t=e.children;return r.default.createElement("div",{className:c("content-wrapper")},t)};i.propTypes=d;var p=i;t.default=p},976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(290)),u=c(n(991));function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(u.default),s={center:a.default.node},m={center:void 0},f=function(e){var t=e.center,n=i(e,["center"]),a=p(["centered-action-footer",n.className]);return r.default.createElement(l.default,d({},n,{className:a}),t)};f.propTypes=s,f.defaultProps=m;var _=f;t.default=_},991:function(e,t,n){e.exports={"centered-action-footer":"CenteredActionFooter-module__centered-action-footer___3J56e"}}}]);
//# sourceMappingURL=84-bf4ecf33d187f0155515.js.map