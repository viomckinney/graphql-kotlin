"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(h,s(s({ref:t},m),{},{components:n})):r.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7790:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>c,toc:()=>l,default:()=>p});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"nested-arguments",title:"Nested Resolvers and Shared Arguments"},c={unversionedId:"schema-generator/writing-schemas/nested-arguments",id:"schema-generator/writing-schemas/nested-arguments",isDocsHomePage:!1,title:"Nested Resolvers and Shared Arguments",description:"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:",source:"@site/docs/schema-generator/writing-schemas/nested-arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/nested-arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nested-arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/nested-arguments.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1645380339,formattedLastUpdatedAt:"2/20/2022",frontMatter:{id:"nested-arguments",title:"Nested Resolvers and Shared Arguments"},sidebar:"docs",previous:{title:"Unions",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/unions"},next:{title:"Annotations",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/annotations"}},l=[{value:"DataFetchingEnvironment",id:"datafetchingenvironment",children:[]},{value:"GraphQL Context Object (Deprecated)",id:"graphql-context-object-deprecated",children:[]},{value:"Excluding Arguments from the Schema",id:"excluding-arguments-from-the-schema",children:[]},{value:"Spring Integration",id:"spring-integration",children:[]}],m={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a few ways in which shared arguments can be accessed from different resolver levels. Say we have the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  findUser(id: String!): User\n}\n\ntype User {\n  photos(numberOfPhotos: Int!): [Photo!]!\n}\n\ntype Photo {\n  url: String!\n}\n")),(0,o.kt)("p",null,"In Kotlin code, when we are resolving  ",(0,o.kt)("inlineCode",{parentName:"p"},"photos"),", if we want access to the parent field ",(0,o.kt)("inlineCode",{parentName:"p"},"findUser")," and its arguments there\nare a couple ways we can access it,"),(0,o.kt)("h2",{id:"datafetchingenvironment"},"DataFetchingEnvironment"),(0,o.kt)("p",null,"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," as an argument. This class will be ignored by the schema generator and will allow\nyou to view the entire query sent to the server. See more in the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class User {\n    fun photos(environment: DataFetchingEnvironment, numberOfPhotos: Int): List<Photo> {\n      val username = environment.executionStepInfo.parent.arguments["id"]\n      return getPhotosFromDataSource(username, numberOfPhotos)\n    }\n}\n')),(0,o.kt)("h2",{id:"graphql-context-object-deprecated"},"GraphQL Context Object (Deprecated)"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Support for custom GraphQL context object is deprecated and will be removed in future releases. Please migrate to use\ngeneric GraphQL context map."))),(0,o.kt)("p",null,"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," as an argument. This class will be ignored by the schema generator and will allow you to\nview the context object you set up in the data fetchers. See more in the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/contextual-data"},"GraphQLContext documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User {\n    fun photos(context: MyContextObject, numberOfPhotos: Int): List<Photo> {\n      val userId = context.getDataFromMyCustomFunction()\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n")),(0,o.kt)("h2",{id:"excluding-arguments-from-the-schema"},"Excluding Arguments from the Schema"),(0,o.kt)("p",null,"You can construct the child objects by passing down arguments as non-public fields or annotate the argument with ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"},"@GraphQLIgnore")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User(private val userId: String) {\n\n    fun photosProperty(numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n\n    fun photosIgnore(@GraphQLIgnore userId: String, numberOfPhotos: Int): List<Photo> {\n      return getPhotosFromDataSource(userId, numberOfPhotos)\n    }\n}\n")),(0,o.kt)("h2",{id:"spring-integration"},"Spring Integration"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-schema"},"Writing Schemas with Spring")," for integration details."))}p.isMDXComponent=!0}}]);