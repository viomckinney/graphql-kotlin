"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(g,o(o({ref:t},s),{},{components:a})):r.createElement(g,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"spring-beans",title:"Automatically Created Beans",original_id:"spring-beans"},p=void 0,d={unversionedId:"spring-server/spring-beans",id:"version-3.x.x/spring-server/spring-beans",title:"Automatically Created Beans",description:"graphql-kotlin-spring-server automatically creates all the necessary beans to start GraphQL web server. Many of the beans are conditionally created and default behavior",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-beans.md",sourceDirName:"spring-server",slug:"/spring-server/spring-beans",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-beans",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-beans.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1649793291,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"spring-beans",title:"Automatically Created Beans",original_id:"spring-beans"},sidebar:"version-3.x.x/docs",previous:{title:"Spring Server Overview",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"},next:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-properties"}},s={},c=[{value:"Schema Generation",id:"schema-generation",level:2},{value:"Execution",id:"execution",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," automatically creates all the necessary beans to start GraphQL web server. Many of the beans are conditionally created and default behavior\ncan be customized by providing custom beans in your application context. See sections below for the information about all automatically created beans."),(0,i.kt)("h2",{id:"schema-generation"},"Schema Generation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Bean"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"FederatedSchemaGeneratorHooks"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Schema generator hooks used to build federated schema.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Created only if federation is enabled"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"FederatedSchemaGeneratorConfig"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Federated schema generator configuration information. You can customize the configuration by providing ",(0,i.kt)("inlineCode",{parentName:"td"},"TopLevelNames"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"FederatedSchemaGeneratorHooks")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"KotlinDataFetcherFactoryProvider")," beans.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Created instead of default ",(0,i.kt)("inlineCode",{parentName:"em"},"SchemaGeneratorConfig")," if federation is enabled"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"FederatedTypeRegistry"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Default type registry without any resolvers. See ",(0,i.kt)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/federated/type-resolution"},"Federated Type Resolution")," for more details.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Created only if federation is enabled. You should register your custom type registry bean whenever implementing federated GraphQL schema with extended types"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GraphQLSchema"),(0,i.kt)("td",{parentName:"tr",align:"left"},"GraphQL schema generated based on the schema generator configuration and  ",(0,i.kt)("inlineCode",{parentName:"td"},"Query"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Mutation")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Subscription")," objects available in the application context.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"KotlinDataFetcherFactoryProvider"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Factory used during schema construction to obtain ",(0,i.kt)("inlineCode",{parentName:"td"},"DataFetcherFactory")," that should be used for target function (using Spring aware ",(0,i.kt)("inlineCode",{parentName:"td"},"SpringDataFetcher"),") and property resolution.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SchemaGeneratorConfig"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Schema generator configuration information, see ",(0,i.kt)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"Schema Generator Configuration")," for details. Can be customized by providing ",(0,i.kt)("inlineCode",{parentName:"td"},"TopLevelNames"),", ",(0,i.kt)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"SchemaGeneratorHooks")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"KotlinDataFetcherFactoryProvider")," beans.")))),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Bean"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ContextWebFilter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Default web filter that populates GraphQL context in the reactor subscriber context.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DataFetcherExceptionHandler"),(0,i.kt)("td",{parentName:"tr",align:"left"},"GraphQL exception handler used from the various execution strategies, defaults to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/exception/KotlinDataFetcherExceptionHandler.kt"},"KotlinDataFetcherExceptionHandler"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DataLoaderRegistryFactory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Factory used to create DataLoaderRegistry instance per query execution. See ",(0,i.kt)("a",{parentName:"td",href:"https://www.graphql-java.com/documentation/v14/batching/"},"graphql-java documentation")," for more details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GraphQL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"GraphQL query execution engine generated using ",(0,i.kt)("inlineCode",{parentName:"td"},"GraphQLSchema")," with default async execution strategies. GraphQL engine can be customized by optionally providing a list of ",(0,i.kt)("a",{parentName:"td",href:"https://www.graphql-java.com/documentation/v14/instrumentation/"},"Instrumentation")," beans (which can be ordered by implementing Spring Ordered interface), ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/graphql-java/graphql-java/blob/3.x.x/src/main/java/graphql/execution/ExecutionIdProvider.java"},"ExecutionIdProvider")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/graphql-java/graphql-java/blob/3.x.x/src/main/java/graphql/execution/preparsed/PreparsedDocumentProvider.java"},"PreparsedDocumentProvider")," in the application context.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GraphQLContextFactory"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Factory used by context WebFilter to generate GraphQL context based on the incoming request. GraphQL context can be any object. Defaults to empty ",(0,i.kt)("a",{parentName:"td",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},"GraphQLContext"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"QueryHandler"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Handler invoked from GraphQL query route that executes the incoming request, defaults to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/QueryHandler.kt"},"SimpleQueryHandler"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SubscriptionHandler"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Web socket handler for executing GraphQL subscriptions, defaults to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/SubscriptionHandler.kt#L49"},"SimpleSubscriptionHandler"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Created only if ",(0,i.kt)("inlineCode",{parentName:"em"},"Subscription")," bean is available in the context."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"WebSocketHandlerAdapter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/socket/server/support/WebSocketHandlerAdapter.html"},"Spring documentation"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Created only if ",(0,i.kt)("inlineCode",{parentName:"em"},"Subscription")," bean is available in the context."))))),(0,i.kt)("p",null,"The following beans are currently automatically created and cannot be disabled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default routes for GraphQL queries/mutations and SDL endpoint"),(0,i.kt)("li",{parentName:"ul"},"Default route for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prisma-labs/graphql-playground"},"Prisma Labs Playground"),", created only if playground is enabled"),(0,i.kt)("li",{parentName:"ul"},"Default ",(0,i.kt)("inlineCode",{parentName:"li"},"ApolloSubscriptionProtocolHandler")," for handling GraphQL subscriptions, created only if ",(0,i.kt)("inlineCode",{parentName:"li"},"Subscription")," bean is available in the context"),(0,i.kt)("li",{parentName:"ul"},"Default ",(0,i.kt)("inlineCode",{parentName:"li"},"SubscriptionWebSocketHandler")," that utilizes above subscription protocol handler, created only if ",(0,i.kt)("inlineCode",{parentName:"li"},"Subscription")," bean is available in the context"),(0,i.kt)("li",{parentName:"ul"},"Default subscription handler mapping, created only if ",(0,i.kt)("inlineCode",{parentName:"li"},"Subscription")," bean is available in the context")))}u.isMDXComponent=!0}}]);