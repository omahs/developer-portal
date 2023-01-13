"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={custom_edit_url:null},c=void 0,l={unversionedId:"sdk/VoteCore",id:"sdk/VoteCore",title:"VoteCore",description:"Methods",source:"@site/docs/sdk/VoteCore.mdx",sourceDirName:"sdk",slug:"/sdk/VoteCore",permalink:"/sdk/VoteCore",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"sdk",previous:{title:"TransactionCore",permalink:"/sdk/TransactionCore"},next:{title:"Account",permalink:"/sdk/Account"}},i={},s=[{value:"constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"packageSignedProof",id:"packageSignedProof",level:3}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class VoteCore\n")),(0,a.kt)("div",null),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row mb-2"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("strong",null,"Methods"))),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("a",{href:"#packageSignedProof"},"packageSignedProof"),(0,a.kt)("span",{className:"badge badge--info margin-left--sm"},"static")))),(0,a.kt)("h2",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new VoteCore()\n")),(0,a.kt)("div",null),(0,a.kt)("p",null,"Cannot be constructed."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"packageSignedProof"},"packageSignedProof"),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"static")),(0,a.kt)("p",null,"Packages the given parameters into a proof that can be submitted to the Vochain"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),": Proof"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"processId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"type"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CensusType"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"censusProof"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"CensusProof"},"CensusProof")),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);