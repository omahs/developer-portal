"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),i=n(86010),o=n(53438),c=n(39960),a=n(13919),l=n(95999);const s="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function d(e){let{href:t,icon:n,title:o,description:c}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:c},c))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const c=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},31545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(87462),i=(n(67294),n(3905)),o=n(52991),c=n(53438);const a={id:"elections",title:"Elections",description:"Elections",custom_edit_url:null},l=void 0,s={unversionedId:"vocdoni-api/elections",id:"vocdoni-api/elections",title:"Elections",description:"Elections",source:"@site/docs/vocdoni-api/elections.tag.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/elections",permalink:"/vocdoni-api/elections",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"elections",title:"Elections",description:"Elections",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Treasurer address",permalink:"/vocdoni-api/treasurer-address"},next:{title:"Election information",permalink:"/vocdoni-api/election-by-id"}},u={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create, manage and get information about elections"),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);