(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{1085:function(e,d,t){"use strict";t.d(d,"a",(function(){return c}));var n=t(0),a=t.n(n),l=t(844),m=t.n(l),c=function(e){var d=e.url;return a.a.createElement(m.a,{name:"terra-i18n",version:"4.25.0",url:d})}},2992:function(e,d,t){"use strict";t.r(d),t.d(d,"default",(function(){return o}));t(0);var n=t(275),a=t(1085);function l(){return(l=Object.assign||function(e){for(var d=1;d<arguments.length;d++){var t=arguments[d];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e,d){if(null==e)return{};var t,n,a=function(e,d){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],d.indexOf(t)>=0||(a[t]=e[t]);return a}(e,d);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],d.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={};function r(e){var d=e.components,t=m(e,["components"]);return Object(n.mdx)("wrapper",l({},c,t,{components:d,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"changelog"},"ChangeLog"),Object(n.mdx)("h2",{id:"unreleased"},"Unreleased"),Object(n.mdx)("h2",{id:"4250---march-10-2020"},"4.25.0 - (March 10, 2020)"),Object(n.mdx)("h3",{id:"changed"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax.")),Object(n.mdx)("h2",{id:"4240---february-18-2020"},"4.24.0 - (February 18, 2020)"),Object(n.mdx)("h3",{id:"added"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added generated-themes to .npmignore")),Object(n.mdx)("h3",{id:"changes"},"Changes"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Be the most explicit when checking when checking if Intl, Intl.DateTimeFormat and Int.NumberFormat by checking against expected type instead of check for undefined. Addresses: ",Object(n.mdx)("a",l({parentName:"li"},{href:"https://github.com/cerner/terra-core/issues/2841"}),"https://github.com/cerner/terra-core/issues/2841"))),Object(n.mdx)("h2",{id:"4230---february-13-2020"},"4.23.0 - (February 13, 2020)"),Object(n.mdx)("h3",{id:"changes-1"},"Changes"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Be explicit when checking when checking if Intl, Intl.DateTimeFormat and Int.NumberFormat are available on the browser.")),Object(n.mdx)("h2",{id:"4220---february-11-2020"},"4.22.0 - (February 11, 2020)"),Object(n.mdx)("h3",{id:"fixed"},"Fixed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Add try-catch blocks around the Intl check to ensure errors are correctly handled if an error is thrown. Fixes ",Object(n.mdx)("a",l({parentName:"li"},{href:"https://github.com/cerner/terra-core/issues/2820"}),"https://github.com/cerner/terra-core/issues/2820"),".")),Object(n.mdx)("h2",{id:"4210---january-7-2020"},"4.21.0 - (January 7, 2020)"),Object(n.mdx)("h3",{id:"removed"},"Removed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed yarn reference in docs")),Object(n.mdx)("h2",{id:"4200---december-3-2019"},"4.20.0 - (December 3, 2019)"),Object(n.mdx)("h3",{id:"added-1"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},'Added reference wdio screenshots for "orion-fusion-theme".')),Object(n.mdx)("h3",{id:"fixed-1"},"Fixed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Fix Intl data loading logic. Locale data was only loading the initial locale data but did not load locale data for the new local when the locale was switched. This issue was discovered when running in IE 10.")),Object(n.mdx)("h2",{id:"4190---october-30-2019"},"4.19.0 - (October 30, 2019)"),Object(n.mdx)("h3",{id:"changed-1"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"4180---october-14-2019"},"4.18.0 - (October 14, 2019)"),Object(n.mdx)("h3",{id:"changed-2"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h3",{id:"fixed-2"},"Fixed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Fix Intl Loading and conditionally add the ",Object(n.mdx)("inlineCode",{parentName:"li"},"intl")," polyfill when Intl is not provided by the browser. This issue was discovered when running in IE 10.")),Object(n.mdx)("h2",{id:"4170---october-3-2019"},"4.17.0 - (October 3, 2019)"),Object(n.mdx)("h3",{id:"changed-3"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"4160---september-26-2019"},"4.16.0 - (September 26, 2019)"),Object(n.mdx)("h3",{id:"removed-1"},"Removed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed the Finnish example since we don't officially support Finnish")),Object(n.mdx)("h2",{id:"4150---september-19-2019"},"4.15.0 - (September 19, 2019)"),Object(n.mdx)("h3",{id:"changed-4"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed ",Object(n.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site.")),Object(n.mdx)("h3",{id:"added-2"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added en-CA translations.")),Object(n.mdx)("h2",{id:"4140---september-6-2019"},"4.14.0 - (September 6, 2019)"),Object(n.mdx)("h3",{id:"added-3"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Props table markdown file import added to doc site page")),Object(n.mdx)("h2",{id:"4130---august-21-2019"},"4.13.0 - (August 21, 2019)"),Object(n.mdx)("h3",{id:"changed-5"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Import for package version from package.json added to doc page"),Object(n.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")),Object(n.mdx)("h2",{id:"4120---august-14-2019"},"4.12.0 - (August 14, 2019)"),Object(n.mdx)("h3",{id:"changed-6"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"updated package.json test scripts"),Object(n.mdx)("li",{parentName:"ul"},"Update tests for dev-site v6")),Object(n.mdx)("h2",{id:"4110---july-30-2019"},"4.11.0 - (July 30, 2019)"),Object(n.mdx)("h3",{id:"changed-7"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"4100---july-24-2019"},"4.10.0 - (July 24, 2019)"),Object(n.mdx)("h3",{id:"changed-8"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"490---july-16-2019"},"4.9.0 - (July 16, 2019)"),Object(n.mdx)("h3",{id:"added-4"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added documentation on required peerDependencies")),Object(n.mdx)("h2",{id:"480----july-11-2019"},"4.8.0  - (July 11, 2019)"),Object(n.mdx)("h3",{id:"changed-9"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Update tests to use ",Object(n.mdx)("inlineCode",{parentName:"li"},"Terra.describeViewports")," for setting viewports and use ",Object(n.mdx)("inlineCode",{parentName:"li"},"Terra.it.validatesElement"))),Object(n.mdx)("h2",{id:"470---june-28-2019"},"4.7.0 - (June 28, 2019)"),Object(n.mdx)("h3",{id:"added-5"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added more information to upgrade guide around Jest testing")),Object(n.mdx)("h3",{id:"changed-10"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed all inline styles from Dev-site components and implemented the same styles using external css.")),Object(n.mdx)("h2",{id:"460---june-18-2019"},"4.6.0 - (June 18, 2019)"),Object(n.mdx)("h3",{id:"changed-11"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency bump")),Object(n.mdx)("h2",{id:"450---june-11-2019"},"4.5.0 - (June 11, 2019)"),Object(n.mdx)("h3",{id:"removed-2"},"Removed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore")),Object(n.mdx)("h3",{id:"changed-12"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Made required updates to consume terra-toolkit v5 and terra-dev-site v5"),Object(n.mdx)("li",{parentName:"ul"},"Changed modules to export")),Object(n.mdx)("h2",{id:"440---may-21-2019"},"4.4.0 - (May 21, 2019)"),Object(n.mdx)("h3",{id:"changed-13"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"430---may-1-2019"},"4.3.0 - (May 1, 2019)"),Object(n.mdx)("h3",{id:"changed-14"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h3",{id:"added-6"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added Upgrade Guide to doc site")),Object(n.mdx)("h2",{id:"420---april-16-2019"},"4.2.0 - (April 16, 2019)"),Object(n.mdx)("h3",{id:"changed-15"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"410---april-9-2019"},"4.1.0 - (April 9, 2019)"),Object(n.mdx)("h3",{id:"fixed-3"},"Fixed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Update the intl polyfill to be more robust for IE10")),Object(n.mdx)("h2",{id:"400---march-27-2019"},"4.0.0 - (March 27, 2019)"),Object(n.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed post-install script which wrote default intl and translation loaders"),Object(n.mdx)("li",{parentName:"ul"},"Removed aggregate-translations pre-build tool/script"),Object(n.mdx)("li",{parentName:"ul"},"Removed ",Object(n.mdx)("inlineCode",{parentName:"li"},"src/defaultIntlLoaders.js")),Object(n.mdx)("li",{parentName:"ul"},"Removed ",Object(n.mdx)("inlineCode",{parentName:"li"},"src/defaultTranslationsLoaders.js")),Object(n.mdx)("li",{parentName:"ul"},"Removed ",Object(n.mdx)("inlineCode",{parentName:"li"},"require.ensure")," syntax for loading Intl polyfill"),Object(n.mdx)("li",{parentName:"ul"},"This package no longer provides the ",Object(n.mdx)("inlineCode",{parentName:"li"},"injectIntl"),", ",Object(n.mdx)("inlineCode",{parentName:"li"},"intlShape"),", ",Object(n.mdx)("inlineCode",{parentName:"li"},"FormattedMessage"),", ",Object(n.mdx)("inlineCode",{parentName:"li"},"IntlProvider")," exports from react-intl"),Object(n.mdx)("li",{parentName:"ul"},"Removed div that wrapped children passed into the I18nProvider component. The I18nProvider component now uses a ",Object(n.mdx)("inlineCode",{parentName:"li"},"<React.Fragment>")," wrapper around children"),Object(n.mdx)("li",{parentName:"ul"},"Removed run time check for supported locales. This is provided at build time with terra-toolkit's aggregate-translations script")),Object(n.mdx)("h2",{id:"350---march-26-2019"},"3.5.0 - (March 26, 2019)"),Object(n.mdx)("h3",{id:"changed-16"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release")),Object(n.mdx)("h2",{id:"340---march-21-2019"},"3.4.0 - (March 21, 2019)"),Object(n.mdx)("h3",{id:"changed-17"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"330---february-26-2019"},"3.3.0 - (February 26, 2019)"),Object(n.mdx)("h3",{id:"changed-18"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h3",{id:"added-7"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added en-AU translations")),Object(n.mdx)("h2",{id:"320---february-12-2019"},"3.2.0 - (February 12, 2019)"),Object(n.mdx)("h3",{id:"changed-19"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"310---february-5-2019"},"3.1.0 - (February 5, 2019)"),Object(n.mdx)("h3",{id:"changed-20"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"300---january-22-2019"},"3.0.0 - (January 22, 2019)"),Object(n.mdx)("h3",{id:"changed-21"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Updated theme variables")),Object(n.mdx)("h2",{id:"2310---january-22-2019"},"2.31.0 - (January 22, 2019)"),Object(n.mdx)("h3",{id:"changed-22"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Updated dependencies to fix major version bump issues")),Object(n.mdx)("h2",{id:"2300---january-8-2019"},"2.30.0 - (January 8, 2019)"),Object(n.mdx)("h3",{id:"changed-23"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2290---january-2-2019"},"2.29.0 - (January 2, 2019)"),Object(n.mdx)("h3",{id:"added-8"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added missing ar translations.")),Object(n.mdx)("h3",{id:"changed-24"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Updated site examples to be more accessible.")),Object(n.mdx)("h2",{id:"2280---november-19-2018"},"2.28.0 - (November 19, 2018)"),Object(n.mdx)("h3",{id:"changed-25"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2270---november-13-2018"},"2.27.0 - (November 13, 2018)"),Object(n.mdx)("h3",{id:"changed-26"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2260---november-9-2018"},"2.26.0 - (November 9, 2018)"),Object(n.mdx)("h3",{id:"added-9"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Add full list of locales to terra-i18n translation fixtures")),Object(n.mdx)("h2",{id:"2250---october-24-2018"},"2.25.0 - (October 24, 2018)"),Object(n.mdx)("h3",{id:"changed-27"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2240---october-16-2018"},"2.24.0 - (October 16, 2018)"),Object(n.mdx)("h3",{id:"changed-28"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2230---october-8-2018"},"2.23.0 - (October 8, 2018)"),Object(n.mdx)("h3",{id:"changed-29"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Updated fs-extra dependency to latest stable release (^7.0.0)")),Object(n.mdx)("h2",{id:"2220---october-2-2018"},"2.22.0 - (October 2, 2018)"),Object(n.mdx)("h3",{id:"added-10"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Export IntlProvider from react-intl")),Object(n.mdx)("h2",{id:"2210---september-25-2018"},"2.21.0 - (September 25, 2018)"),Object(n.mdx)("h3",{id:"changed-30"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2203---september-13-2018"},"2.20.3 - (September 13, 2018)"),Object(n.mdx)("h3",{id:"fix"},"Fix"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Add post-install script which writes default loaders")),Object(n.mdx)("h2",{id:"2202---september-12-2018"},"2.20.2 - (September 12, 2018)"),Object(n.mdx)("h3",{id:"fix-1"},"Fix"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Remove post-install script which wrote default loaders")),Object(n.mdx)("h2",{id:"2201---september-6-2018"},"2.20.1 - (September 6, 2018)"),Object(n.mdx)("h3",{id:"changed-31"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Patch dependency version bump")),Object(n.mdx)("h2",{id:"2200---september-5-2018"},"2.20.0 - (September 5, 2018)"),Object(n.mdx)("h3",{id:"changed-32"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),Object(n.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")),Object(n.mdx)("h2",{id:"2190---september-4-2018"},"2.19.0 - (September 4, 2018)"),Object(n.mdx)("h3",{id:"changed-33"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2180---august-29-2018"},"2.18.0 - (August 29, 2018)"),Object(n.mdx)("h3",{id:"changed-34"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2170---august-1-2018"},"2.17.0 - (August 1, 2018)"),Object(n.mdx)("h3",{id:"changed-35"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump"),Object(n.mdx)("li",{parentName:"ul"},"Updated translations")),Object(n.mdx)("h2",{id:"2160---july-25-2018"},"2.16.0 - (July 25, 2018)"),Object(n.mdx)("h3",{id:"added-11"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Add sv and sv-SE translations")),Object(n.mdx)("h2",{id:"2150---july-17-2018"},"2.15.0 - (July 17, 2018)"),Object(n.mdx)("h3",{id:"changed-36"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump"),Object(n.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v4 update")),Object(n.mdx)("h2",{id:"2140---july-10-2018"},"2.14.0 - (July 10, 2018)"),Object(n.mdx)("h3",{id:"changed-37"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"2130---june-28-2018"},"2.13.0 - (June 28, 2018)"),Object(n.mdx)("h3",{id:"changed-38"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h3",{id:"added-12"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added change log to the documentation on terra-dev-site")),Object(n.mdx)("h2",{id:"2120---june-22-2018"},"2.12.0 - (June 22, 2018)"),Object(n.mdx)("h3",{id:"changed-39"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Major dependency version bump for ",Object(n.mdx)("inlineCode",{parentName:"li"},"fs-extra"))),Object(n.mdx)("h2",{id:"2110---june-12-2018"},"2.11.0 - (June 12, 2018)"),Object(n.mdx)("h3",{id:"changed-40"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},'Updated "test:jest" script to work on windows.')),Object(n.mdx)("h2",{id:"2100---may-30-2018"},"2.10.0 - (May 30, 2018)"),Object(n.mdx)("h3",{id:"changed-41"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Updated structure to match terra-dev-site 1.0 and moved doc examples internal.")),Object(n.mdx)("h2",{id:"290---may-23-2018"},"2.9.0 - (May 23, 2018)"),Object(n.mdx)("h3",{id:"changed-42"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"280---may-9-2018"},"2.8.0 - (May 9, 2018)"),Object(n.mdx)("h3",{id:"changed-43"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"270---may-2-2018"},"2.7.0 - (May 2, 2018)"),Object(n.mdx)("h3",{id:"changed-44"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h3",{id:"changed-45"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Export FormattedMessage from react-intl")),Object(n.mdx)("h2",{id:"260---april-20-2018"},"2.6.0 - (April 20, 2018)"),Object(n.mdx)("h3",{id:"added-13"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Added support for nl and nl-BE locales")),Object(n.mdx)("h2",{id:"250---april-15-2018"},"2.5.0 - (April 15, 2018)"),Object(n.mdx)("h3",{id:"changed-46"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"240---april-5-2018"},"2.4.0 - (April 5, 2018)"),Object(n.mdx)("h3",{id:"fixed-4"},"Fixed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Transpile defaultIntlLoaders and defaultTranslationsLoaders.")),Object(n.mdx)("h2",{id:"230---march-30-2018"},"2.3.0 - (March 30, 2018)"),Object(n.mdx)("h3",{id:"added-14"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Implement locale fallback strategy in translations and locale loaders. Fallback strategy will be first try the regional locale, then try the base locale, then try 'en' english base locale, and lastly throw an error if 'en' is not provided."),Object(n.mdx)("li",{parentName:"ul"},"Aggregate-translations pre-build tool to aggregate translations and build dynamic intlLoader and translationLoader modules that are configured for the specified locales. This tool is offered as a CLI script and as a setup function.")),Object(n.mdx)("h3",{id:"changed-47"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Open up the i18nLoader restrictions such that non-terra-supported locales will load.")),Object(n.mdx)("h3",{id:"fixed-5"},"Fixed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Only load the specified aggregated-translation locales.")),Object(n.mdx)("h3",{id:"added-15"},"Added"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Exported react-intl's injectIntl and intlShape")),Object(n.mdx)("h2",{id:"220---march-6-2018"},"2.2.0 - (March 6, 2018)"),Object(n.mdx)("h3",{id:"removed-3"},"Removed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed props-table script from package.json")),Object(n.mdx)("h2",{id:"210---february-26-2018"},"2.1.0 - (February 26, 2018)"),Object(n.mdx)("h3",{id:"changed-48"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"200---february-12-2018"},"2.0.0 - (February 12, 2018)"),Object(n.mdx)("h3",{id:"changed-49"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Updated to use React 16")),Object(n.mdx)("h2",{id:"1140---february-1-2018"},"1.14.0 - (February 1, 2018)"),Object(n.mdx)("h3",{id:"changed-50"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"1130---january-18-2018"},"1.13.0 - (January 18, 2018)"),Object(n.mdx)("h3",{id:"changed-51"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"1120---november-28-2017"},"1.12.0 - (November 28, 2017)"),Object(n.mdx)("h3",{id:"changed-52"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"1110---november-16-2017"},"1.11.0 - (November 16, 2017)"),Object(n.mdx)("h3",{id:"changed-53"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"1100---october-6-2017"},"1.10.0 - (October 6, 2017)"),Object(n.mdx)("h3",{id:"changed-54"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Spread customProps onto div.")),Object(n.mdx)("h2",{id:"190---september-26-2017"},"1.9.0 - (September 26, 2017)"),Object(n.mdx)("h3",{id:"changed-55"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"180---september-19-2017"},"1.8.0 - (September 19, 2017)"),Object(n.mdx)("h3",{id:"changed-56"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"170---september-12-2017"},"1.7.0 - (September 12, 2017)"),Object(n.mdx)("h3",{id:"changed-57"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"160---september-7-2017"},"1.6.0 - (September 7, 2017)"),Object(n.mdx)("h3",{id:"changed-58"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"150---september-5-2017"},"1.5.0 - (September 5, 2017)"),Object(n.mdx)("h3",{id:"changed-59"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Update nightwatch tests and test scripts.")),Object(n.mdx)("h2",{id:"140---august-31-2017"},"1.4.0 - (August 31, 2017)"),Object(n.mdx)("h3",{id:"changed-60"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Improved terra-i18n example in README.md")),Object(n.mdx)("h2",{id:"130---august-8-2017"},"1.3.0 - (August 8, 2017)"),Object(n.mdx)("h3",{id:"changed-61"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"120---august-1-2017"},"1.2.0 - (August 1, 2017)"),Object(n.mdx)("h3",{id:"changed-62"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")),Object(n.mdx)("h2",{id:"110---july-18-2017"},"1.1.0 - (July 18, 2017)"),Object(n.mdx)("h3",{id:"changed-63"},"Changed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Updated nightwatch test scripts")),Object(n.mdx)("h3",{id:"removed-4"},"Removed"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Removed nightwatch.config file")),Object(n.mdx)("h2",{id:"100---june-28-2017"},"1.0.0 - (June 28, 2017)"),Object(n.mdx)("p",null,"Initial stable release"))}function i(){return(i=Object.assign||function(e){for(var d=1;d<arguments.length;d++){var t=arguments[d];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,d){if(null==e)return{};var t,n,a=function(e,d){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],d.indexOf(t)>=0||(a[t]=e[t]);return a}(e,d);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],d.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}r.isMDXComponent=!0;var u={};function o(e){var d=e.components,t=b(e,["components"]);return Object(n.mdx)("wrapper",i({},u,t,{components:d,mdxType:"MDXLayout"}),Object(n.mdx)(a.a,{mdxType:"Badge"}),Object(n.mdx)(r,{mdxType:"ChangeLog"}))}o.isMDXComponent=!0},844:function(e,d,t){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var n=c(t(0)),a=c(t(3)),l=c(t(5)),m=c(t(845));function c(e){return e&&e.__esModule?e:{default:e}}var r=l.default.bind(m.default),i={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},b=function(e){var d=e.name,t=e.url,a=e.version;return n.default.createElement("div",{className:r("badge-container")},n.default.createElement("a",{className:r("badge"),href:t||"https://www.npmjs.org/package/".concat(d,"/v/").concat(a)},n.default.createElement("span",{className:r("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:r("badge-version")},"v".concat(a))))};b.propTypes=i;var u=b;d.default=u},845:function(e,d,t){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}}}]);
//# sourceMappingURL=331-1c945ad15f4bf77818c8.js.map