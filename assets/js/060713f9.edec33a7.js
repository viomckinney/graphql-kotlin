"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9742],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(n),u=l,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||r;return n?t.createElement(m,i(i({ref:a},c),{},{components:n})):t.createElement(m,i({ref:a},c))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(7294);function l(e){var a=e.children,n=e.hidden,l=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:l},a)}},9877:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(7462),l=n(7294),r=n(2389),i=n(3725),o=n(6010);const p="tabItem_LplD";function s(e){var a,n,r,s=e.lazy,c=e.block,d=e.defaultValue,g=e.values,u=e.groupId,m=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:h.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,i.lx)(k,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(a=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(r=h[0])?void 0:r.props.value;if(null!==f&&!k.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),b=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,l.useState)(f),q=x[0],G=x[1],L=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var T=b[u];null!=T&&T!==q&&k.some((function(e){return e.value===T}))&&G(T)}var w=function(e){var a=e.currentTarget,n=L.indexOf(a),t=k[n].value;t!==q&&(S(a),G(t),null!=u&&N(u,t))},D=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=L.indexOf(e.currentTarget)+1;n=L[t]||L[0];break;case"ArrowLeft":var l=L.indexOf(e.currentTarget)-1;n=L[l]||L[L.length-1]}null==(a=n)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},m)},k.map((function(e){var a=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:q===a?0:-1,"aria-selected":q===a,key:a,ref:function(e){return L.push(e)},onKeyDown:D,onFocus:w,onClick:w},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":q===a})}),null!=n?n:a)}))),s?(0,l.cloneElement)(h.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==q})}))))}function c(e){var a=(0,r.Z)();return l.createElement(s,(0,t.Z)({key:String(a)},e))}},1321:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var t=n(7462),l=n(3366),r=(n(7294),n(3905)),i=n(9877),o=n(8215),p=["components"],s={id:"gradle-plugin-usage",title:"Gradle Plugin Usage",sidebar_label:"Usage"},c=void 0,d={unversionedId:"plugins/gradle-plugin-usage",id:"plugins/gradle-plugin-usage",title:"Gradle Plugin Usage",description:"Downloading Schema SDL",source:"@site/docs/plugins/gradle-plugin-usage.mdx",sourceDirName:"plugins",slug:"/plugins/gradle-plugin-usage",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-usage",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/gradle-plugin-usage.mdx",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1649793291,formattedLastUpdatedAt:"4/12/2022",frontMatter:{id:"gradle-plugin-usage",title:"Gradle Plugin Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Tasks",permalink:"/graphql-kotlin/docs/plugins/gradle-plugin-tasks"},next:{title:"Goals",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-goals"}},g={},u=[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",level:2},{value:"Introspecting Schema",id:"introspecting-schema",level:2},{value:"Generating Client",id:"generating-client",level:2},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",level:2},{value:"Generating Client using Kotlinx Serialization",id:"generating-client-using-kotlinx-serialization",level:2},{value:"Generating Client using Classpath Schema",id:"generating-client-using-classpath-schema",level:2},{value:"Generating Test Client",id:"generating-test-client",level:2},{value:"Minimal Client Configuration Example",id:"minimal-client-configuration-example",level:2},{value:"Complete Client Configuration Example",id:"complete-client-configuration-example",level:2},{value:"Generating Multiple Clients",id:"generating-multiple-clients",level:2},{value:"Generating SDL Example",id:"generating-sdl-example",level:2},{value:"Generating SDL with Custom Hooks Provider Example",id:"generating-sdl-with-custom-hooks-provider-example",level:2}],m={toc:u};function h(e){var a=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),(0,r.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphqlDownloadSDL")," task requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified and can\nbe executed directly from the command line by explicitly passing ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlDownloadSDL --endpoint="http://localhost:8080/sdl"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n}\n')))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task."))),(0,r.kt)("h2",{id:"introspecting-schema"},"Introspecting Schema"),(0,r.kt)("p",null,"Introspection task requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly passing endpoint parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlIntrospectSchema --endpoint="http://localhost:8080/graphql"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n    endpoint.set("http://localhost:8080/graphql")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlIntrospectSchema {\n    endpoint = "http://localhost:8080/graphql"\n}\n')))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task."))),(0,r.kt)("h2",{id:"generating-client"},"Generating Client"),(0,r.kt)("p",null,"GraphQL Kotlin client code is generated based on the provided queries that will be executed against target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,r.kt)("inlineCode",{parentName:"p"},"packageName"),"."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(file("${project.projectDir}/mySchema.graphql"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = file("${project.projectDir}/mySchema.graphql")\n}\n')))),(0,r.kt)("p",null,"This will process all GraphQL files located under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," and generate corresponding GraphQL Kotlin client\ndata models. Generated classes will be automatically added to the project compile sources."),(0,r.kt)("h2",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),(0,r.kt)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/clients/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),(0,r.kt)("p",null,"For example given following custom scalar in our GraphQL schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar UUID\n")),(0,r.kt)("p",null,"We can create a custom converter to automatically convert this custom scalar to ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.UUID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString()\n    override fun toJson(value: UUID): String = value.toString()\n}\n")),(0,r.kt)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(file("${project.projectDir}/mySchema.graphql"))\n  customScalars.add(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\n\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = file("${project.projectDir}/mySchema.graphql")\n    customScalars.add(new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n')))),(0,r.kt)("h2",{id:"generating-client-using-kotlinx-serialization"},"Generating Client using Kotlinx Serialization"),(0,r.kt)("p",null,"GraphQL Kotlin plugins default to generate client data models that are compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"Jackson"),".\nWe can change this default behavior by explicitly specifying serializer type (in the extension or explicitly in the generate\nclient task) and configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," compiler plugin. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx.serialization documentation"),"\nfor details."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(file("${project.projectDir}/mySchema.graphql"))\n  serializer.set(GraphQLSerializer.KOTLINX)\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    id 'org.jetbrains.kotlin.plugin.serialization' version '$kotlinVersion'\n}\n\ngraphqlGenerateClient {\n    packageName = \"com.example.generated\"\n    schemaFile = file(\"${project.projectDir}/mySchema.graphql\")\n    serializer = GraphQLSerializer.KOTLINX\n}\n")))),(0,r.kt)("h2",{id:"generating-client-using-classpath-schema"},"Generating Client using Classpath Schema"),(0,r.kt)("p",null,"Client generation tasks require ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaFile")," to be provided. Using Gradle we can configure tasks to use local schema file,\nload it from an URI or consume it directly from a classpath. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/dsl/org.gradle.api.resources.TextResourceFactory.html"},"Gradle TextResourceFactory"),"\nfor additional details."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql")," file is provided in a ",(0,r.kt)("inlineCode",{parentName:"p"},"my-lib")," JAR we can configure our generate client task as follows"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  val archive = configurations["compileClasspath"].filter {\n      // filter on the jar name.\n      it.name.startsWith("my-lib")\n  }\n  schemaFile.set(resources.text.fromArchive(archive, "schema.graphql").asFile())\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    val archive = configurations["compileClasspath"].filter {\n        // filter on the jar name.\n        it.name.startsWith("my-lib")\n    }\n    schemaFile = resources.text.fromArchive(archive, "schema.graphql").asFile()\n}\n')))),(0,r.kt)("h2",{id:"generating-test-client"},"Generating Test Client"),(0,r.kt)("p",null,"GraphQL Kotlin test client code is generated based on the provided queries that will be executed against target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,r.kt)("inlineCode",{parentName:"p"},"packageName"),"."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateTestClient by tasks.getting(GraphQLGenerateTestClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(file("${project.projectDir}/mySchema.graphql"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateTestClient {\n    packageName = "com.example.generated"\n    schemaFile = file("${project.projectDir}/mySchema.graphql")\n}\n')))),(0,r.kt)("p",null,"This will process all GraphQL queries located under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/resources")," and generate corresponding GraphQL Kotlin clients.\nGenerated classes will be automatically added to the project test compile sources."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateTestClient")," cannot be configured through the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," extension and has to be explicitly configured."))),(0,r.kt)("h2",{id:"minimal-client-configuration-example"},"Minimal Client Configuration Example"),(0,r.kt)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a\ncorresponding schema. This generated schema is subsequently used to generate GraphQL client code based on the queries\nprovided under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLIntrospectSchemaTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n  endpoint.set("http://localhost:8080/graphql")\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(graphqlIntrospectSchema.outputFile)\n  dependsOn("graphqlIntrospectSchema")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'graphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphqlIntrospectSchema {\n    endpoint = "http://localhost:8080/graphql"\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = graphqlIntrospectSchema.outputFile\n    dependsOn graphqlIntrospectSchema\n}\n')))),(0,r.kt)("h2",{id:"complete-client-configuration-example"},"Complete Client Configuration Example"),(0,r.kt)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client data models using ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," that are based on the provided query."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ngraphql {\n  client {\n    sdlEndpoint = "http://localhost:8080/sdl"\n    packageName = "com.example.generated"\n    // optional configuration\n    allowDeprecatedFields = true\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    headers = mapOf("X-Custom-Header" to "My-Custom-Header")\n    queryFiles = listOf(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    serializer = GraphQLSerializer.KOTLINX\n    timeout {\n        connect = 10_000\n        read = 30_000\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.config.TimeoutConfiguration\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n    headers.put("X-Custom-Header", "My-Custom-Header")\n    timeoutConfig.set(TimeoutConfiguration(connect = 10_000, read = 30_000))\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated")\n    schemaFile.set(graphqlDownloadSDL.outputFile)\n    // optional\n    allowDeprecatedFields.set(true)\n    customScalars.add(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")\n    serializer.set(GraphQLSerializer.KOTLINX)\n\n    dependsOn("graphqlDownloadSDL")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    id \'org.jetbrains.kotlin.plugin.serialization\' version \'$kotlinVersion\'\n}\n\ngraphql {\n    client {\n        sdlEndpoint = "http://localhost:8080/sdl"\n        packageName = "com.example.generated"\n        // optional configuration\n        allowDeprecatedFields = true\n        customScalars = [new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter")]\n        headers = ["X-Custom-Header" : "My-Custom-Header"]\n        queryFiles = [file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")]\n        serializer = GraphQLSerializer.KOTLINX\n        timeout { t ->\n            t.connect = 10000\n            t.read = 30000\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.config.TimeoutConfiguration\n\nplugins {\n    id \'org.jetbrains.kotlin.plugin.serialization\' version \'$kotlinVersion\'\n}\n\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n    headers["X-Custom-Header"] = "My-Custom-Header"\n    timeoutConfig = new TimeoutConfiguration(10000, 30000)\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = graphqlDownloadSDL.outputFile\n    // optional\n    allowDeprecatedFields = true\n    customScalars.add(new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")\n    serializer = GraphQLSerializer.KOTLINX\n\n    dependsOn graphqlDownloadSDL\n}\n')))),(0,r.kt)("h2",{id:"generating-multiple-clients"},"Generating Multiple Clients"),(0,r.kt)("p",null,"GraphQL Kotlin Gradle Plugin registers tasks for generation of a client queries targeting single GraphQL endpoint. You\ncan generate queries targeting additional endpoints by explicitly creating and configuring additional tasks."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated.first")\n    schemaFile.set(graphqlDownloadSDL.outputFile)\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyFirstQuery.graphql")\n    dependsOn("graphqlDownloadSDL")\n}\n\nval graphqlDownloadOtherSDL by tasks.creating(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8081/sdl")\n}\nval graphqlGenerateOtherClient by tasks.creating(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated.second")\n    schemaFile.set(graphqlDownloadOtherSDL.outputFile)\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MySecondQuery.graphql")\n    dependsOn("graphqlDownloadOtherSDL")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated.first"\n    schemaFile = graphqlDownloadSDL.outputFile\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyFirstQuery.graphql")\n\n    dependsOn graphqlDownloadSDL\n}\n\ntask graphqlDownloadOtherSDL(type: GraphQLDownloadSDLTask) {\n    endpoint = "http://localhost:8081/sdl"\n}\ntask graphqlGenerateOtherClient(type: GraphQLGenerateClientTask) {\n    packageName = "com.other.generated.second"\n    schemaFile = graphqlDownloadOtherSDL.outputFile\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MySecondQuery.graphql")\n\n    dependsOn graphqlDownloadOtherSDL\n}\n')))),(0,r.kt)("h2",{id:"generating-sdl-example"},"Generating SDL Example"),(0,r.kt)("p",null,"GraphQL schema can be generated directly from your source code using reflections. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateSDL")," will scan your\nclasspath looking for classes implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," marker interfaces and then generates the\ncorresponding GraphQL schema using ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and default ",(0,r.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". In order to\nlimit the amount of packages to scan, this task requires users to provide a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," that can contain GraphQL\ntypes."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  schema {\n    packages = listOf("com.example")\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateSDLTask\n\nval graphqlGenerateSDL by tasks.getting(GraphQLGenerateSDLTask::class) {\n    packages.set(listOf("com.example"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphql {\n  schema {\n    packages = ["com.example"]\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateSDL {\n    packages = ["com.example"]\n}\n')))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task."))),(0,r.kt)("h2",{id:"generating-sdl-with-custom-hooks-provider-example"},"Generating SDL with Custom Hooks Provider Example"),(0,r.kt)("p",null,"Plugin will default to use ",(0,r.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks")," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider"),"\nservice provider that will be used to create an instance of your custom hooks."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateSDL")," utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  schema {\n    packages = listOf("com.example")\n  }\n}\n\ndependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateSDLTask\n\nval graphqlGenerateSDL by tasks.getting(GraphQLGenerateSDLTask::class) {\n    packages.set(listOf("com.example"))\n}\n\ndependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphql {\n  schema {\n    packages = ["com.example"]\n  }\n}\n\ndependencies {\n    graphqlSDL "com.expediagroup:graphql-kotlin-federated-hooks-provider:$DEFAULT_PLUGIN_VERSION"\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateSDL {\n    packages = ["com.example"]\n}\n\ndependencies {\n    graphqlSDL "com.expediagroup:graphql-kotlin-federated-hooks-provider:$DEFAULT_PLUGIN_VERSION"\n}\n')))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task."))))}h.isMDXComponent=!0}}]);