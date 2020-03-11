(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{2266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(862));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.default.createElement(r.default,{summaryId:"section-table",summary:"This table displays section grouping.",numberOfColumns:3,cellPaddingStyle:"standard",bodyData:[{sectionHeader:{title:"Default Section",id:"default-id",key:"default"},rows:[{key:"row-0",cells:[{key:"cell-0",children:[o.default.createElement("div",{key:"cell-0"},"Lorem ipsum dolor")]},{key:"cell-1",children:[o.default.createElement("div",{key:"cell-1"},"Lorem ipsum dolor")]},{key:"cell-2",children:[o.default.createElement("div",{key:"child"},"Lorem ipsum dolor")]}]}]},{sectionHeader:{title:"Collapsible Section",id:"collapsible-id",key:"collapsible",onToggle:function(){}},rows:[{key:"row-0",cells:[{key:"cell-0",children:[o.default.createElement("div",{key:"cell-0"},"Lorem ipsum dolor")]},{key:"cell-1",children:[o.default.createElement("div",{key:"cell-1"},"Lorem ipsum dolor")]},{key:"cell-2",children:[o.default.createElement("div",{key:"child"},"Lorem ipsum dolor")]}]}]},{sectionHeader:{title:"Collapsed Section",id:"collapsed-id",key:"collapsed",onToggle:function(){},isCollapsed:!0},rows:[{key:"row-0",cells:[{key:"cell-0",children:[o.default.createElement("div",{key:"cell-0"},"Lorem ipsum dolor")]},{key:"cell-1",children:[o.default.createElement("div",{key:"cell-1"},"Lorem ipsum dolor")]},{key:"cell-2",children:[o.default.createElement("div",{key:"child"},"Lorem ipsum dolor")]}]}]}]})};t.default=a},2934:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var o=n(0),r=n.n(o),l=n(275),a=n(974),c=n(2266),d=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function s(e){var t=e.components,n=i(e,["components"]);return Object(l.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\n\nconst TableSectionExample = () => (\n  <Table\n    summaryId=\"section-table\"\n    summary=\"This table displays section grouping.\"\n    numberOfColumns={3}\n    cellPaddingStyle=\"standard\"\n    bodyData={[\n      {\n        sectionHeader: {\n          title: 'Default Section',\n          id: 'default-id',\n          key: 'default',\n        },\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              {\n                key: 'cell-0',\n                children: [\n                  <div key=\"cell-0\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-1',\n                children: [\n                  <div key=\"cell-1\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-2',\n                children: [\n                  <div key=\"child\">Lorem ipsum dolor</div>,\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        sectionHeader: {\n          title: 'Collapsible Section',\n          id: 'collapsible-id',\n          key: 'collapsible',\n          onToggle: () => {},\n        },\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              {\n                key: 'cell-0',\n                children: [\n                  <div key=\"cell-0\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-1',\n                children: [\n                  <div key=\"cell-1\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-2',\n                children: [\n                  <div key=\"child\">Lorem ipsum dolor</div>,\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        sectionHeader: {\n          title: 'Collapsed Section',\n          id: 'collapsed-id',\n          key: 'collapsed',\n          onToggle: () => {},\n          isCollapsed: true,\n        },\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              {\n                key: 'cell-0',\n                children: [\n                  <div key=\"cell-0\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-1',\n                children: [\n                  <div key=\"cell-1\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-2',\n                children: [\n                  <div key=\"child\">Lorem ipsum dolor</div>,\n                ],\n              },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default TableSectionExample;\n\n")))}s.isMDXComponent=!0;var m=n(843),f=n.n(m),_=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.a.createElement(f.a,{title:t||"Section Example",description:n,example:r.a.createElement(d.a,null),exampleSrc:r.a.createElement(s,null),isExpanded:o})},b=n(846),y=n.n(b);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=function(){return Object(l.mdx)(y.a,{rows:[{name:"rows",type:function(){var e={};function t(t){var n=t.components,o=v(t,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"arrayOf"),Object(l.mdx)("pre",null,Object(l.mdx)("code",h({parentName:"pre"},{className:"language-json"}),'{\n "name": "custom",\n "raw": "rowShape"\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=v(t,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The children list items passed to the component."))}return t.isMDXComponent=!0,t({})}},{name:"sectionHeader",type:function(){var e={};function t(t){var n=t.components,o=v(t,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=v(t,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The section header of the provided rows."))}return t.isMDXComponent=!0,t({})}}]})};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T=function(){return Object(l.mdx)(y.a,{rows:[{name:"key",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The react key to apply to the section header."))}return t.isMDXComponent=!0,t({})}},{name:"id",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The id to apply to the header in order to provide structure for assistive technologies."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsed",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the section is collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsible",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the section can be collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The associated metaData to be provided in the onToggle(event, metaData) callback."))}return t.isMDXComponent=!0,t({})}},{name:"onToggle",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback for when the appropriate click or key action is performed to expand or collapse the section.\nCallback contains the javascript event and prop metadata, e.g. onToggle(event, metaData)\nIf present, will enable the interaction of the header."))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback pass-through for the ref of the section header."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Title text to be placed within the section header."))}return t.isMDXComponent=!0,t({})}},{name:"attrs",type:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=O(t,["components"]);return Object(l.mdx)("wrapper",x({},e,o,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Additional attributes to be passed to the section header."))}return t.isMDXComponent=!0,t({})}}]})};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E={};function w(e){var t=e.components,n=k(e,["components"]);return Object(l.mdx)("wrapper",j({},E,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(a.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-table---section"},"Terra Table - Section"),Object(l.mdx)("p",null,"The Terra Table Section is a sub component that creates a section header based on the given props and groups the child rows beneath it. The section has the ability to toggle the display of its child rows given onToggle and isCollapsed props. For a section to be collapsed both isCollapsible and isCollapsed must be true. Each section handles its collapsible and collapsed state."),Object(l.mdx)("h1",{id:"examples"},"Examples"),Object(l.mdx)(_,{mdxType:"SectionExample"}),Object(l.mdx)("h2",{id:"table-section-props"},"Table Section Props"),Object(l.mdx)(g,{mdxType:"SectionProps"}),Object(l.mdx)("h2",{id:"table-section-header-props"},"Table Section Header Props"),Object(l.mdx)(T,{mdxType:"SectionHeaderProps"}))}w.isMDXComponent=!0},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(3)),l=c(n(5)),a=c(n(847));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=l.default.bind(a.default),_={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=u(t).call(this,e))||"object"!==d(r)&&"function"!=typeof r?i(o):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(i(n)),n.handleCodeToggle=n.handleCodeToggle.bind(i(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),s(t,null,[{key:"renderHeader",value:function(e){return e?o.default.createElement("div",{className:f("header")},o.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?o.default.createElement("div",{className:f("description")},e):null}}]),s(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,r=e.exampleSrc,l=e.title,a=e.description,c=this.state,d=c.isExpanded,u=c.isBackgroundTransparent;return o.default.createElement("div",{className:f("template")},t.renderHeader(l),o.default.createElement("div",{className:f("content",{"dynamic-content":u})},t.renderDescription(a),n),r&&o.default.createElement("div",{className:f("footer")},o.default.createElement("div",{className:f("button-container")},o.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:f("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:f("chevron-right")}))),d&&o.default.createElement("div",{className:f("code")},r)))}}]),t}(o.default.Component);b.propTypes=_,b.defaultProps={isExpanded:!1};var y=b;t.default=y},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(3)),l=c(n(5)),a=c(n(845));function c(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(a.default),u={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},i=function(e){var t=e.name,n=e.url,r=e.version;return o.default.createElement("div",{className:d("badge-container")},o.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:d("badge-version")},"v".concat(r))))};i.propTypes=u;var p=i;t.default=p},845:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(3)),l=c(n(5)),a=c(n(848));function c(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(a.default),u={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},i=function(e){var t=e.rows;return o.default.createElement("table",{className:d("table")},o.default.createElement("thead",null,o.default.createElement("tr",{className:d("tr")},o.default.createElement("th",{className:d("th")},"Prop Name"),o.default.createElement("th",{className:d("th")},"Type"),o.default.createElement("th",{className:d("th")},"Is Required"),o.default.createElement("th",{className:d("th")},"Default Value"),o.default.createElement("th",{className:d("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},o.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:d(["td","props-td"])},e.type()),o.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};i.propTypes=u;var p=i;t.default=p},847:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},848:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},974:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),r=n.n(o),l=n(844),a=n.n(l),c=function(e){var t=e.url;return r.a.createElement(a.a,{name:"terra-table",version:"4.4.0",url:t})}}}]);
//# sourceMappingURL=137-fb6117600eadc89ca314.js.map