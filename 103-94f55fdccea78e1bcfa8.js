(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(3)),o=n(8),l=d(n(277)),i=d(n(287)),u=d(n(72)),c=d(n(58));function d(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={children:a.default.node,label:a.default.node.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,intl:o.intlShape.isRequired,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,isTouchAccessible:a.default.bool,labelAttrs:a.default.object,maxSelectionCount:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},f={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},b=function(e){var t,n=e.children,a=e.defaultValue,o=e.disabled,u=e.error,c=e.help,d=e.hideRequired,m=e.intl,f=e.isIncomplete,b=e.isInline,x=e.isInvalid,v=e.isLabelHidden,y=e.isTouchAccessible,_=e.label,h=e.labelAttrs,O=e.maxSelectionCount,g=e.maxWidth,j=e.onChange,T=e.placeholder,E=e.required,M=e.selectAttrs,w=e.selectId,S=e.showOptional,D=e.value,X=s(e,["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]),C=c;if(void 0!==O&&O>=2){var N=m.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:O});C=c?r.default.createElement("span",null,N," ",c):N}return c&&u&&x?t="".concat(w,"-error ").concat(w,"-help"):(c&&(t="".concat(w,"-help")),u&&x&&(t="".concat(w,"-error"))),r.default.createElement(l.default,p({},X,{label:_,labelAttrs:h,error:u,help:C,hideRequired:d,required:E,showOptional:S,isInvalid:x,isInline:b,isLabelHidden:v,htmlFor:w,maxWidth:g}),r.default.createElement(i.default,p({},M,{ariaLabel:_,"aria-describedby":t,disabled:M.disabled||o,inputId:w,isIncomplete:f,isInvalid:x,isTouchAccessible:y,defaultValue:a,maxSelectionCount:void 0!==O&&O<2?void 0:O,onChange:j,placeholder:T,required:E,value:D}),n))};b.propTypes=m,b.defaultProps=f,b.Option=c.default,b.OptGroup=u.default;var x=(0,o.injectIntl)(b);t.default=x},1991:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1186)),o=i(n(5)),l=i(n(850));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),c=function(){return r.default.createElement(a.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:u("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1186)),o=i(n(5)),l=i(n(850));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),c=function(){return r.default.createElement(a.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:u("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},1993:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1186)),o=i(n(5)),l=i(n(850));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),c=function(){return r.default.createElement(a.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:u("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=c},2915:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n(0),a=n.n(r),o=n(275),l=n(888),i=n(1991),u=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function s(e){var t=e.components,n=d(e,["components"]);return Object(o.mdx)("wrapper",c({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}s.isMDXComponent=!0;var m=n(843),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Tag Select Field",description:n,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})},x=n(1992),v=n.n(x);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function O(e){var t=e.components,n=_(e,["components"]);return Object(o.mdx)("wrapper",y({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}O.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Required Tag Select Field",description:n,example:a.a.createElement(v.a,null),exampleSrc:a.a.createElement(O,null),isExpanded:r})},j=n(1993),T=n.n(j);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function S(e){var t=e.components,n=M(e,["components"]);return Object(o.mdx)("wrapper",E({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",E({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}S.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Incomplete Tag Select Field",description:n,example:a.a.createElement(T.a,null),exampleSrc:a.a.createElement(S,null),isExpanded:r})},X=n(846),C=n.n(X);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P=function(){return Object(o.mdx)(C.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select options."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The field label."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",N({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Error message displayed when the select is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Help message to display with the select."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(o.mdx)("em",{parentName:"p"},"(usage note: ",Object(o.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return t.isMDXComponent=!0,t({})}},{name:"isTouchAccessible",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Ensure accessibility on touch devices. Will render the dropdown menu in\nnormal DOM flow with position absolute. By default, the menu renders in a\nportal, which is inaccessible on touch devices."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxSelectionCount",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The maximum number of options that can be selected. A value less than 2 will be ignored."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Set the max-width of a field using ",Object(o.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(o.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Placeholder text."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"selectAttrs",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the select."))}return t.isMDXComponent=!0,t({})}},{name:"selectId",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",N({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=L(t,["components"]);return Object(o.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}}]})};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I={};function k(e){var t=e.components,n=F(e,["components"]);return Object(o.mdx)("wrapper",q({},I,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-form-tag-select-field"},"Terra Form Tag Select Field"),Object(o.mdx)("p",null,"A convenience wrapper assembling a ",Object(o.mdx)("a",q({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select/src/TagSelect.jsx"}),"terra-form-select TagSelect")," within a ",Object(o.mdx)("a",q({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-field"}),"terra-form-field"),"."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",q({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(o.mdx)("p",null,Object(o.mdx)("a",q({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{title:"Tag Select Field Example",mdxType:"TagSelectFieldExample"}),Object(o.mdx)(g,{title:"Required Tag Select Field Example",mdxType:"RequiredTagSelectFieldExample"}),Object(o.mdx)(D,{title:"Incomplete Tag Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteTagSelectFieldExample"}),Object(o.mdx)("h2",{id:"tag-select-field-props"},"Tag Select Field Props"),Object(o.mdx)(P,{mdxType:"TagSelectFieldPropsTable"}))}k.isMDXComponent=!0},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(3)),o=i(n(5)),l=i(n(847));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(l.default),b={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},x=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=c(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?d(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),s(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),s(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,i=this.state,u=i.isExpanded,c=i.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":c})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),u&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);x.propTypes=b,x.defaultProps={isExpanded:!1};var v=x;t.default=v},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(3)),o=i(n(5)),l=i(n(845));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),c={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},d=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:u("badge-container")},r.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(a))))};d.propTypes=c;var p=d;t.default=p},845:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(3)),o=i(n(5)),l=i(n(848));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),c={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},d=function(e){var t=e.rows;return r.default.createElement("table",{className:u("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};d.propTypes=c;var p=d;t.default=p},847:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},848:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},850:function(e,t,n){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3HVkD"}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(844),l=n.n(o),i=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-form-select",version:"5.44.0",url:t})}}}]);
//# sourceMappingURL=103-94f55fdccea78e1bcfa8.js.map