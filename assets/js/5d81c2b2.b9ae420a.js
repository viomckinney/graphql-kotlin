"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4668],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"optional-undefined-arguments",title:"Optional Undefined Arguments",original_id:"optional-undefined-arguments"},u=void 0,p={unversionedId:"schema-generator/execution/optional-undefined-arguments",id:"version-3.x.x/schema-generator/execution/optional-undefined-arguments",title:"Optional Undefined Arguments",description:"In GraphQL, input types can be optional which means that the client can either:",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/optional-undefined-arguments.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/optional-undefined-arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/optional-undefined-arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/optional-undefined-arguments.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1649793291,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"optional-undefined-arguments",title:"Optional Undefined Arguments",original_id:"optional-undefined-arguments"},sidebar:"version-3.x.x/docs",previous:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions"}},c={},s=[],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In GraphQL, input types can be optional which means that the client can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Not specify a value at all"),(0,o.kt)("li",{parentName:"ul"},"Send null explictly"),(0,o.kt)("li",{parentName:"ul"},"Send the non-null type")),(0,o.kt)("p",null,"Optional input types are represented as nullable parameters in Kotlin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nfun optionalInput(value: String?): String? = value\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'\nquery OptionalInputQuery {\n  undefined: optionalInput\n  null: optionalInput(value: null)\n  foo: optionalInput(value: "foo")\n}\n\n')),(0,o.kt)("p",null,"By default, if an optional input value is not specified, then the execution engine will set the argument in Kotlin to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),".\nThis means that you can not tell, by just the value alone, whether the request did not contain any argument or the client explicitly passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"Instead, you should inspect the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment")," where you can see if the request had the variable defined and even check parent arguments as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nfun optionalInput(value: String?, dataFetchingEnvironment: DataFetchingEnvironment): String =\n    if (dataFetchingEnvironment.containsArgument("value")) {\n        "The value was $value"\n    } else {\n        "The value was undefined"\n    }\n\n')))}m.isMDXComponent=!0}}]);