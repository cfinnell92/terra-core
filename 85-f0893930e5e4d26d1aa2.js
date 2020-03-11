(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1050:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r),o=n(844),l=n.n(o),d=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-badge",version:"3.32.0",url:t})}},1110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(20));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};d.displayName="IconBookmark",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=d;t.default=i},1598:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(931));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"Default"})," ",r.default.createElement(a.default,{intent:"primary",text:"Primary"})," ",r.default.createElement(a.default,{intent:"secondary",text:"Secondary"})," ",r.default.createElement(a.default,{intent:"positive",text:"Positive"})," ",r.default.createElement(a.default,{intent:"negative",text:"Negative"})," ",r.default.createElement(a.default,{intent:"warning",text:"Warning"})," ",r.default.createElement(a.default,{intent:"info",text:"Info"}))};t.default=l},1599:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(931));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{size:"tiny",text:"Tiny"})," ",r.default.createElement(a.default,{size:"small",text:"Small"})," ",r.default.createElement(a.default,{size:"medium",text:"Medium"})," ",r.default.createElement(a.default,{size:"large",text:"Large"})," ",r.default.createElement(a.default,{size:"huge",text:"Huge"}))};t.default=l},1600:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1110)),o=l(n(931));function l(e){return e&&e.__esModule?e:{default:e}}var d=r.default.createElement(a.default,null),i=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{icon:d,text:"icon"})," ",r.default.createElement(o.default,{icon:d,text:"icon",isReversed:!0})," ",r.default.createElement(o.default,{icon:d}))};t.default=i},1601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(931));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"Low",visuallyHiddenText:"Risk Factor Low"})," ",r.default.createElement(a.default,{text:"Medium",visuallyHiddenText:"Risk Factor Medium"})," ",r.default.createElement(a.default,{text:"High",visuallyHiddenText:"Risk Factor High"})," ",r.default.createElement(a.default,{text:"Critical",visuallyHiddenText:"Risk Factor Critical"}))};t.default=l},2896:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var r=n(0),a=n.n(r),o=n(275),l=n(1050),d=n(1598),i=n.n(d);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function m(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeIntent = () => (\n  <div>\n    <Badge text="Default" />\n    {\' \'}\n    <Badge intent="primary" text="Primary" />\n    {\' \'}\n    <Badge intent="secondary" text="Secondary" />\n    {\' \'}\n    <Badge intent="positive" text="Positive" />\n    {\' \'}\n    <Badge intent="negative" text="Negative" />\n    {\' \'}\n    <Badge intent="warning" text="Warning" />\n    {\' \'}\n    <Badge intent="info" text="Info" />\n  </div>\n);\n\nexport default BadgeIntent;\n\n')))}m.isMDXComponent=!0;var s=n(843),f=n.n(s),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Intent",description:n,example:a.a.createElement(i.a,null),exampleSrc:a.a.createElement(m,null),isExpanded:r})},b=n(1599),g=n.n(b);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function O(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",x({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeSize = () => (\n  <div>\n    <Badge size="tiny" text="Tiny" />\n    {\' \'}\n    <Badge size="small" text="Small" />\n    {\' \'}\n    <Badge size="medium" text="Medium" />\n    {\' \'}\n    <Badge size="large" text="Large" />\n    {\' \'}\n    <Badge size="huge" text="Huge" />\n  </div>\n);\n\nexport default BadgeSize;\n\n')))}O.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Size",description:n,example:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(O,null),isExpanded:r})},h=n(1600),E=n.n(h);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function P(e){var t=e.components,n=N(e,["components"]);return Object(o.mdx)("wrapper",T({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",T({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconBookmark from 'terra-icon/lib/icon/IconBookmark';\nimport Badge from 'terra-badge';\n\nconst Icon = <IconBookmark />;\n\nconst BadgeIcon = () => (\n  <div>\n    <Badge icon={Icon} text=\"icon\" />\n    {' '}\n    <Badge icon={Icon} text=\"icon\" isReversed />\n    {' '}\n    <Badge icon={Icon} />\n  </div>\n);\n\nexport default BadgeIcon;\n\n")))}P.isMDXComponent=!0;var B=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Icon",description:n,example:a.a.createElement(E.a,null),exampleSrc:a.a.createElement(P,null),isExpanded:r})},M=n(1601),D=n.n(M);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={};function I(e){var t=e.components,n=C(e,["components"]);return Object(o.mdx)("wrapper",k({},S,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeVisuallyHiddenText = () => (\n  <div>\n    <Badge text="Low" visuallyHiddenText="Risk Factor Low" />\n    {\' \'}\n    <Badge text="Medium" visuallyHiddenText="Risk Factor Medium" />\n    {\' \'}\n    <Badge text="High" visuallyHiddenText="Risk Factor High" />\n    {\' \'}\n    <Badge text="Critical" visuallyHiddenText="Risk Factor Critical" />\n  </div>\n);\n\nexport default BadgeVisuallyHiddenText;\n\n')))}I.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Visually Hidden Text",description:n,example:a.a.createElement(D.a,null),exampleSrc:a.a.createElement(I,null),isExpanded:r})},R=n(846),L=n.n(R);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q=function(){return Object(o.mdx)(L.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Child Nodes."))}return t.isMDXComponent=!0,t({})}},{name:"icon",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An optional icon. Nested inline with the text when provided."))}return t.isMDXComponent=!0,t({})}},{name:"intent",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",z({parentName:"pre"},{className:"language-json"}),'[\n "default",\n "primary",\n "secondary",\n "info",\n "warning",\n "positive",\n "negative"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'default'",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the badge color scheme. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"default"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"primary"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"secondary"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"positive"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"negative"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"warning"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"info"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isReversed",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Reverses the position of the icon and text."))}return t.isMDXComponent=!0,t({})}},{name:"size",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",z({parentName:"pre"},{className:"language-json"}),'[\n "tiny",\n "small",\n "medium",\n "large",\n "huge"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'small'",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the badge size. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"tiny"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"small"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"medium"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"large"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"huge"),"."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the badge text."))}return t.isMDXComponent=!0,t({})}},{name:"visuallyHiddenText",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",z({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Text that describes the badge to a screen reader. Use this\nfor creating an accessible badge."))}return t.isMDXComponent=!0,t({})}}]})};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F={};function U(e){var t=e.components,n=A(e,["components"]);return Object(o.mdx)("wrapper",V({},F,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-badge"},"Terra Badge"),Object(o.mdx)("p",null,"The badge component displays content classification."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",V({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-badge"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",V({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",V({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",V({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",V({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",V({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",V({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",V({parentName:"pre"},{className:"language-jsx"}),"import Badge from 'terra-badge';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",V({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",V({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",V({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("p",null,Object(o.mdx)("a",V({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-badge"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(_,{title:"Intent",mdxType:"BadgeIntent"}),Object(o.mdx)(j,{title:"Size",mdxType:"BadgeSize"}),Object(o.mdx)(B,{title:"Icon",mdxType:"BadgeIcon"}),Object(o.mdx)(X,{title:"VisuallyHiddenText",mdxType:"BadgeVisuallyHiddenText"}),Object(o.mdx)("h2",{id:"badge-props"},"Badge props"),Object(o.mdx)(q,{mdxType:"BadgePropsTable"}))}U.isMDXComponent=!0},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(3)),o=d(n(5)),l=d(n(847));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(l.default),_={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=u(t).call(this,e))||"object"!==i(a)&&"function"!=typeof a?c(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(c(n)),n.handleCodeToggle=n.handleCodeToggle.bind(c(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,d=this.state,i=d.isExpanded,u=d.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":u})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),i&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);b.propTypes=_,b.defaultProps={isExpanded:!1};var g=b;t.default=g},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(3)),o=d(n(5)),l=d(n(845));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:i("badge-container")},r.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(a))))};c.propTypes=u;var p=c;t.default=p},845:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(3)),o=d(n(5)),l=d(n(848));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:i("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:i("tr")},r.default.createElement("th",{className:i("th")},"Prop Name"),r.default.createElement("th",{className:i("th")},"Type"),r.default.createElement("th",{className:i("th")},"Is Required"),r.default.createElement("th",{className:i("th")},"Default Value"),r.default.createElement("th",{className:i("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:i(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:i(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:i(["td","props-td"])},e.type()),r.default.createElement("td",{className:i(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:i(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:i(["td","props-td"])},e.description()))}))))};c.propTypes=u;var p=c;t.default=p},847:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},848:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},931:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BadgeSize=t.BadgeIntent=t.default=void 0;var r=i(n(0)),a=i(n(3)),o=i(n(5)),l=i(n(135)),d=i(n(944));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.default.bind(d.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var f={children:a.default.node,icon:a.default.element,intent:a.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:a.default.bool,size:a.default.oneOf(["tiny","small","medium","large","huge"]),text:a.default.string,visuallyHiddenText:a.default.string},_={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},b=function(e){var t=e.size,n=e.intent,a=e.isReversed,o=e.text,i=e.icon,u=e.visuallyHiddenText,p=m(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),f=s("badge",{"has-icon":i},{"is-reversed":a},t,n,p.className),_=o?r.default.createElement("span",{className:d.default.text,"aria-hidden":"true"},o):null,b=u?r.default.createElement(l.default,{text:u}):null,g=a?[b,_,i,p.children]:[i,b,_,p.children];return r.default.createElement.apply(r.default,["span",c({},p,{className:f})].concat(g))};b.propTypes=f,b.defaultProps=_;var g=b;t.default=g},944:function(e,t,n){e.exports={badge:"Badge-module__badge___20KZ3","is-reversed":"Badge-module__is-reversed___2z3k1","has-icon":"Badge-module__has-icon___2R0fy",text:"Badge-module__text___2Y8yP",tiny:"Badge-module__tiny___1mem2",small:"Badge-module__small___ow-O5",medium:"Badge-module__medium___1w1TM",large:"Badge-module__large___2dMPP",huge:"Badge-module__huge___29Jcf",default:"Badge-module__default___3JkGW",primary:"Badge-module__primary___WLzak",secondary:"Badge-module__secondary___2Eyvs",positive:"Badge-module__positive___17Lg_",negative:"Badge-module__negative___3GJ0z",warning:"Badge-module__warning___Gqrsa",info:"Badge-module__info___1RQe6"}}}]);
//# sourceMappingURL=85-f0893930e5e4d26d1aa2.js.map