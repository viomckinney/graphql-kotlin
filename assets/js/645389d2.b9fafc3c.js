"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||p;return r?a.createElement(h,o(o({ref:t},m),{},{components:r})):a.createElement(h,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<p;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8019:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>s,default:()=>c});var a=r(7462),n=r(3366),p=(r(7294),r(3905)),o=["components"],l={id:"examples",title:"Examples"},i={unversionedId:"examples",id:"version-4.x.x/examples",isDocsHomePage:!1,title:"Examples",description:"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the examples module.",source:"@site/versioned_docs/version-4.x.x/examples.md",sourceDirName:".",slug:"/examples",permalink:"/graphql-kotlin/docs/4.x.x/examples",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/examples.md",version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1645380339,formattedLastUpdatedAt:"2/20/2022",frontMatter:{id:"examples",title:"Examples"},sidebar:"version-4.x.x/docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/4.x.x/"},next:{title:"GraphQL Frameworks Comparison",permalink:"/graphql-kotlin/docs/4.x.x/framework-comparison"}},s=[{value:"Client Example",id:"client-example",children:[]},{value:"Federation Example",id:"federation-example",children:[]},{value:"Server Examples",id:"server-examples",children:[{value:"Ktor Server Example",id:"ktor-server-example",children:[]},{value:"Spring Server Example",id:"spring-server-example",children:[]}]}],m={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"A collection of example apps that use graphql-kotlin libraries to test and demonstrate usages can be found in the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples"},"examples module"),"."),(0,p.kt)("h2",{id:"client-example"},"Client Example"),(0,p.kt)("p",null,"A ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," can be generated by using the provided Maven or Gradle. Example integration using Maven and\nGradle plugins can be found under the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"examples/client"),"\nfolder."),(0,p.kt)("h2",{id:"federation-example"},"Federation Example"),(0,p.kt)("p",null,"There is also an example of ",(0,p.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation"),"\nwith two Spring Boot apps using ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," and an Apollo Gateway app in Nodejs that exposes a single\nfederated schema in ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/federation"},"examples/federation"),"\nproject. Please refer to the README files for details on how to run each application."),(0,p.kt)("h2",{id:"server-examples"},"Server Examples"),(0,p.kt)("p",null,"Example integrations of ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," with number of popular application frameworks can be found under\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server"},"examples/server")," folder."),(0,p.kt)("p",null,"These examples also demonstrates how to include ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/java-dataloader"},(0,p.kt)("inlineCode",{parentName:"a"},"DataLoaders"))," in your query execution."),(0,p.kt)("h3",{id:"ktor-server-example"},"Ktor Server Example"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"http://ktor.io/"},"Ktor")," is an asynchronous framework for creating microservices, web applications, and more. Example\nintegration can be found at ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/ktor-server"},"examples/server/ktor-server")),(0,p.kt)("h3",{id:"spring-server-example"},"Spring Server Example"),(0,p.kt)("p",null,"One way to run a GraphQL server is with ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot"},"Spring Boot"),". A sample Spring\nBoot app that uses ",(0,p.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Spring\nWebflux")," together with\n",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/prisma/graphql-playground"},"graphql-playground")," is provided as\na ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server"},"examples/server/spring-server"),".\nAll the examples used in this documentation should be available in this sample app."),(0,p.kt)("p",null,"In order to run it you can run\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/Application.kt"},"Application.kt"),"\ndirectly from your IDE. Alternatively you can also use the Spring Boot plugin from the command line."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\n./gradlew bootRun\n\n")),(0,p.kt)("p",null,"Once the app has started you can explore the example schema by opening Playground endpoint at\nhttp:."))}c.isMDXComponent=!0}}]);