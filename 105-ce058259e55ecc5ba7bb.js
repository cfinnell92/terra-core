(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{2140:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(78)),l=d(n(859)),c=d(n(5)),u=d(n(905));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}var s=c.default.bind(u.default),p=function(){return a.default.createElement(o.default,{role:"listbox","aria-label":"example-label"},a.default.createElement(o.Item,{key:"default"},a.default.createElement(l.default,{title:"Default ListItem",className:s("placeholder")})),a.default.createElement(o.Item,{key:"chevron",hasChevron:!0},a.default.createElement(l.default,{title:"Chevron ListItem",className:s("placeholder")})),a.default.createElement(o.Item,{key:"selectable",isSelectable:!0},a.default.createElement(l.default,{title:"Selectable ListItem",className:s("placeholder")})),a.default.createElement(o.Item,{key:"selected",isSelectable:!0,isSelected:!0},a.default.createElement(l.default,{title:"Selected ListItem",className:s("placeholder")})))};t.default=p},2947:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var r=n(0),a=n.n(r),o=n(275),l=n(884),c=n(2140),u=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function p(e){var t=e.components,n=d(e,["components"]);return Object(o.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List role="listbox" aria-label="example-label">\n    <Item\n      key="default"\n    >\n      <Placeholder title="Default ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="chevron"\n      hasChevron\n    >\n      <Placeholder title="Chevron ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selectable"\n      isSelectable\n    >\n      <Placeholder title="Selectable ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selected"\n      isSelectable\n      isSelected\n    >\n      <Placeholder title="Selected ListItem" className={cx(\'placeholder\')} />\n    </Item>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}p.isMDXComponent=!0;var m=n(843),f=n.n(m),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"List Item",description:n,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})},b=n(846),h=n.n(b);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=function(){return Object(o.mdx)(h.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The content element to be placed inside the list item for display."))}return t.isMDXComponent=!0,t({})}},{name:"hasChevron",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the list item has a disclosure indicator presented."))}return t.isMDXComponent=!0,t({})}},{name:"isSelected",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the list item should have selection styles applied."))}return t.isMDXComponent=!0,t({})}},{name:"isSelectable",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the list item should have styles to indicate the item is selectable."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for the ref of the li."))}return t.isMDXComponent=!0,t({})}}]})};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function T(e){var t=e.components,n=O(e,["components"]);return Object(o.mdx)("wrapper",x({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"list-item"},"List Item"),Object(o.mdx)("p",null,"The list item provides a pattern for selection/selectability for li surrounded child content. Whenever, the list item has a prop ",Object(o.mdx)("inlineCode",{parentName:"p"},"isSelectable=true")," then ",Object(o.mdx)("inlineCode",{parentName:"p"},"aria-label")," must be provided to List for accessibility.  The onSelect event is the primary means for interaction, as it yields the associated metaData when valid selection occurs, though individual onClick and onKeyDown events can be applied through the use of customProps if greater granularity is required."),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),"import List, { Item } from 'terra-list/lib/List';\n")),Object(o.mdx)("p",null,Object(o.mdx)("a",x({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-list"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(_,{mdxType:"ListItemExample"}),Object(o.mdx)("h2",{id:"list-item-props"},"List Item Props"),Object(o.mdx)(g,{mdxType:"ListItemPropsTable"}))}T.isMDXComponent=!0},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(847));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(l.default),_={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=i(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?d(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),p(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),p(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,c=this.state,u=c.isExpanded,i=c.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":i})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),u&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);b.propTypes=_,b.defaultProps={isExpanded:!1};var h=b;t.default=h},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(845));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),i={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},d=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:u("badge-container")},r.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(a))))};d.propTypes=i;var s=d;t.default=s},845:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(848));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),i={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},d=function(e){var t=e.rows;return r.default.createElement("table",{className:u("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};d.propTypes=i;var s=d;t.default=s},847:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},848:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(867));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.default.bind(l.default),s={variant:a.default.oneOf(["light","dark"]),title:a.default.string},p=function(e){var t=e.variant,n=e.title,a=i(e,["variant","title"]),o=d(["placeholder",a.className]),l=d(["inner","is-".concat(t)]);return r.default.createElement("div",u({},a,{className:o}),r.default.createElement("div",{className:l},r.default.createElement("h2",null,n)))};p.propTypes=s,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},867:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},884:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(844),l=n.n(o),c=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-list",version:"4.27.0",url:t})}},905:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=105-ce058259e55ecc5ba7bb.js.map