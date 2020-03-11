(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{title:"Item 0",key:"unique-0"},{title:"Item 1",key:"unique-1"},{title:"Item 2",key:"unique-2"},{title:"Item 3",key:"unique-3"},{title:"Item 4",key:"unique-4"}];t.default=a},2146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var r=a?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(n,l,r):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(78)),r=d(n(859)),i=d(n(5)),o=d(n(1191)),s=d(n(905));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=i.default.bind(s.default),y=function(e){function t(e){var n,a,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(l=p(t).call(this,e))||"object"!==u(l)&&"function"!=typeof l?f(a):l).createListItem=n.createListItem.bind(f(n)),n.handleItemSelection=n.handleItemSelection.bind(f(n)),n.state={selectedKeys:[]},n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(i=[{key:"handleItemSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{selectedKeys:l.Utils.updatedMultiSelectedKeys(e.selectedKeys,t.key)}}))}},{key:"createListItem",value:function(e){return a.default.createElement(l.Item,{key:e.key,isSelectable:l.Utils.shouldBeMultiSelectable(3,this.state.selectedKeys,e.key),isSelected:this.state.selectedKeys.indexOf(e.key)>=0,metaData:{key:e.key},onSelect:this.handleItemSelection},a.default.createElement(r.default,{title:e.title,className:b("placeholder")}))}},{key:"createListItems",value:function(e){var t=this;return e.map((function(e){return t.createListItem(e)}))}},{key:"render",value:function(){return a.default.createElement(l.default,{dividerStyle:"standard",role:"listbox","aria-multiselectable":!0,"aria-label":"MultiSelectList-label"},this.createListItems(o.default))}}])&&m(n.prototype,i),s&&m(n,s),t}(a.default.Component);t.default=y},2953:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(0),l=n.n(a),r=n(275),i=n(884),o=n(2146),s=n.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={};function m(e){var t=e.components,n=d(e,["components"]);return Object(r.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport List, { Item, Utils } from 'terra-list/lib/index';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-select';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst maxSectionCount = 3;\n\nclass MutliSelectList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createListItem = this.createListItem.bind(this);\n    this.handleItemSelection = this.handleItemSelection.bind(this);\n    this.state = { selectedKeys: [] };\n  }\n\n  handleItemSelection(event, metaData) {\n    event.preventDefault();\n    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n\n  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n        isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder title={itemData.title} className={cx('placeholder')} />\n      </Item>\n    );\n  }\n\n  createListItems(data) {\n    return data.map(childItem => this.createListItem(childItem));\n  }\n\n  render() {\n    return (\n      <List\n        dividerStyle=\"standard\"\n        role=\"listbox\"\n        aria-multiselectable\n        aria-label=\"MultiSelectList-label\"\n      >\n        {this.createListItems(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default MutliSelectList;\n\n")))}m.isMDXComponent=!0;var p=n(843),f=n.n(p),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(f.a,{title:t||"Multi Select List",description:n,example:l.a.createElement(s.a,null),exampleSrc:l.a.createElement(m,null),isExpanded:a})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g={};function _(e){var t=e.components,n=y(e,["components"]);return Object(r.mdx)("wrapper",b({},g,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(i.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-list---implementing-a-multi-select-list"},"Terra List - Implementing a Multi Select List"),Object(r.mdx)("p",null,"The terra-list implementation requires controlled state if selections are required. As a result, selections are applied when child items are generated from HOC state. The following guide will show you how to implement that state within a multiple items selection variant of list, as well as implement the additional narrowing requirements of a max selection for items."),Object(r.mdx)("h2",{id:"state-management"},"State Management"),Object(r.mdx)("p",null,"The state of selection needs to be managed for the list in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC."),Object(r.mdx)("p",null,"First defaulting our state to an empty array in the constructor. "),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+   this.state = { selectedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),Object(r.mdx)("p",null,"Next creating an event handler callback method to pass to the list item's ",Object(r.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(r.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each listItem."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleItemSelection = this.handleItemSelection.bind(this)\n  }\n  \n+  handleItemSelection(event, metaData) {\n+\n+  }\n")),Object(r.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  handleItemSelection(event, metaData) {\n+   event.preventDefault();\n  }\n")),Object(r.mdx)("p",null,"Terra list comes with additional helpers to manage state. In this case, we want to determine if the selection has selected or unselected the list item key in our state. So we use the utility method ",Object(r.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which returns an array of the keys following the addition or removing of the key passed. We then set this as our state."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  handleItemSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),Object(r.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our list items with the updated ",Object(r.mdx)("inlineCode",{parentName:"p"},"isSelected")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"isSelectable")," props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.\n",Object(r.mdx)("a",b({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createListItem = this.createListItem.bind(this)\n  }\n  ...\n+  createListItem(itemData) {\n+   return (\n+     <Item\n+       key={itemData.key}\n+     >\n+       <Placeholder />\n+     </Item>\n+   );\n+ }\n")),Object(r.mdx)("p",null,"Next we need to set up our ",Object(r.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",Object(r.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       metaData={{ key: itemData.key }}\n+       onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(r.mdx)("p",null,"For multi-select lists we need to set selectability based upon whether or not we have reached our max selection count.  Terra List provides a helper for this, namely ",Object(r.mdx)("inlineCode",{parentName:"p"},"shouldBeMultiSelectable"),", by providing our count, the currently selected key, and the key of the associated item."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(r.mdx)("p",null,"Finally we need to check if the item is selected. As we support IE10 & 11, we cannot use ",Object(r.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(r.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n+       isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(r.mdx)("p",null,"Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the aria role of ",Object(r.mdx)("inlineCode",{parentName:"p"},'"listbox"')," and a string to ",Object(r.mdx)("inlineCode",{parentName:"p"},"aria-label")," for the list, as it is required for accessibility with selectable list options. In addition, we need to assign the aria role for multiple selections, ",Object(r.mdx)("inlineCode",{parentName:"p"},"aria-multiselectable"),"."),Object(r.mdx)("pre",null,Object(r.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n    this.createListItem = this.createListItem.bind(this)\n+   this.createListItems = this.createListItems.bind(this)\n  }\n  ...\n+ createListItems(data) {\n+   return data.map(childItem => this.createListItem(childItem));\n+ }\n\n  render() {\n    return (\n+     <List\n+       dividerStyle="standard"\n+       role="listbox"\n+       aria-multiselectable\n+       aria-label="MultiSelectList-label"\n+     >\n+       {this.createListItems(mockData)}\n+     </List>\n+   );\n+ }\n')),Object(r.mdx)("p",null,"  Using these steps we get the following example."),Object(r.mdx)("h2",{id:"examples"},"Examples"),Object(r.mdx)(h,{mdxType:"MultiSelectList"}))}_.isMDXComponent=!0},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(3)),r=o(n(5)),i=o(n(847));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=r.default.bind(i.default),h={example:l.default.element,exampleSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},b=function(e){function t(e){var n,a,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(l=c(t).call(this,e))||"object"!==s(l)&&"function"!=typeof l?d(a):l).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:f("header")},a.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:f("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,l=e.exampleSrc,r=e.title,i=e.description,o=this.state,s=o.isExpanded,c=o.isBackgroundTransparent;return a.default.createElement("div",{className:f("template")},t.renderHeader(r),a.default.createElement("div",{className:f("content",{"dynamic-content":c})},t.renderDescription(i),n),l&&a.default.createElement("div",{className:f("footer")},a.default.createElement("div",{className:f("button-container")},a.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:f("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:f("chevron-right")}))),s&&a.default.createElement("div",{className:f("code")},l)))}}]),t}(a.default.Component);b.propTypes=h,b.defaultProps={isExpanded:!1};var y=b;t.default=y},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(3)),r=o(n(5)),i=o(n(845));function o(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(i.default),c={name:l.default.string.isRequired,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.name,n=e.url,l=e.version;return a.default.createElement("div",{className:s("badge-container")},a.default.createElement("a",{className:s("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},a.default.createElement("span",{className:s("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(l))))};d.propTypes=c;var u=d;t.default=u},845:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},847:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(3)),r=o(n(5)),i=o(n(867));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.default.bind(i.default),u={variant:l.default.oneOf(["light","dark"]),title:l.default.string},m=function(e){var t=e.variant,n=e.title,l=c(e,["variant","title"]),r=d(["placeholder",l.className]),i=d(["inner","is-".concat(t)]);return a.default.createElement("div",s({},l,{className:r}),a.default.createElement("div",{className:i},a.default.createElement("h2",null,n)))};m.propTypes=u,m.defaultProps={variant:"dark",title:""};var p=m;t.default=p},867:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},884:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),l=n.n(a),r=n(844),i=n.n(r),o=function(e){var t=e.url;return l.a.createElement(i.a,{name:"terra-list",version:"4.27.0",url:t})}},905:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=120-be9753ccabb78c520b21.js.map