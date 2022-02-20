"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4715:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>l,toc:()=>c,default:()=>m});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],o={id:"interfaces",title:"Interfaces"},l={unversionedId:"schema-generator/writing-schemas/interfaces",id:"version-5.x.x/schema-generator/writing-schemas/interfaces",isDocsHomePage:!1,title:"Interfaces",description:"Any Kotlin interfaces will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface and a union type, Kotlin interfaces need to specify at least",source:"@site/versioned_docs/version-5.x.x/schema-generator/writing-schemas/interfaces.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/interfaces",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/interfaces",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/writing-schemas/interfaces.md",version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1645380339,formattedLastUpdatedAt:"2/20/2022",frontMatter:{id:"interfaces",title:"Interfaces"},sidebar:"version-5.x.x/docs",previous:{title:"Lists",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/lists"},next:{title:"Unions",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/unions"}},c=[{value:"Abstract and Sealed Classes",id:"abstract-and-sealed-classes",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Any Kotlin interfaces will be mapped to a GraphQL interface. Due to the GraphQL distinction between interface and a ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/unions"},"union type"),", Kotlin interfaces need to specify at least\none common field (property or a function)."),(0,i.kt)("p",null,"Abstract and sealed classes will also be converted to a GraphQL interface."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Interfaces"},"The GraphQL spec")," does not allow interfaces to be used as input.\nThis means that while it is valid Kotlin code to have an interface as an argument, upon schema generation, an exception will be thrown."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface Animal {\n    val type: AnimalType\n    fun sound(): String\n}\n\nenum class AnimalType {\n    CAT,\n    DOG\n}\n\nclass Dog : Animal {\n    override val type = AnimalType.DOG\n\n    override fun sound() = "bark"\n\n    fun barkAtEveryone(): String = "bark at everyone"\n}\n\nclass Cat : Animal {\n    override val type = AnimalType.CAT\n\n    override fun sound() = "meow"\n\n    fun ignoreEveryone(): String = "ignore everyone"\n}\n\nclass PolymorphicQuery {\n\n    fun animal(type: AnimalType): Animal? = when (type) {\n        AnimalType.CAT -> Cat()\n        AnimalType.DOG -> Dog()\n        else -> null\n    }\n}\n')),(0,i.kt)("p",null,"The above code will produce the following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Animal {\n  type: AnimalType!\n  sound: String!\n}\n\nenum AnimalType {\n  CAT\n  DOG\n}\n\ntype Cat implements Animal {\n  type: AnimalType!\n  ignoreEveryone: String!\n  sound: String!\n}\n\ntype Dog implements Animal {\n  type: AnimalType!\n  barkAtEveryone: String!\n  sound: String!\n}\n\ntype TopLevelQuery {\n  animal(type: AnimalType!): Animal\n}\n")),(0,i.kt)("h2",{id:"abstract-and-sealed-classes"},"Abstract and Sealed Classes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/classes.html#abstract-classes"},"Abstract")," and ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/sealed-classes.html"},"sealed")," classes can also be used for GraphQL interface types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract class Shape(val area: Double)\nclass Circle(radius: Double) : Shape(PI * radius * radius)\nclass Square(sideLength: Double) : Shape(sideLength * sideLength)\n\nsealed class Pet(val name: String) {\n    class Dog(name: String, val goodBoysReceived: Int) : Pet(name)\n    class Cat(name: String, val livesRemaining: Int) : Pet(name)\n}\n")))}m.isMDXComponent=!0}}]);