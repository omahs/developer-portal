"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9057],{13366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>m,toc:()=>f});var o=a(83117),n=(a(67294),a(3905)),i=a(99565),s=a(80663),l=(a(74903),a(11955)),r=a(46794),c=a(8437),d=(a(32712),a(28802));const h={id:"create-election",title:"Create an election",description:"It creates an election on the Vochain.",sidebar_label:"Create an election",hide_title:!0,hide_table_of_contents:!0,api:{description:'It creates an election on the Vochain. \n\nRequires `txPayload`, a client side protobuff signed transaction. The transaction will include metadata, the \nroot of the census and [dozens of flags](https://github.com/vocdoni/dvote-solidity#types-and-values) that allow \nto run processes with powerful features.\n\nThe `metadata` field is a **base64 encoded** JSON containing all election data that will be saved on the storage \n(IPFS on our case). For example: \n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "hello", "en": "hello", "es": "hola"},\n  "description": {"default": "hello", "en": "hello", "es": "hola"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "hello", "en": "hello", "es": "hola"},\n          "value": 0\n        } \n      ], \n      "description": {"default": "hello", "en": "hello", "es": "hola"},\n      "title": {"default": "hello", "en": "hello", "es": "hola"}\n    }\n  ]\n}\n```\n\nNote that the metadata hashed URI present on the `txPayload` have to be the same of `metadata` field hash. \n\nIf metadataURL is returned empty, means that there is some issue with the storage provider.\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',operationId:"createElection",tags:["Elections"],requestBody:{description:"Uses `txPayload` protobuff signed transaction, and the `metadata` JSON object base64 encoded",required:!0,content:{"application/json":{schema:{type:"object",required:["txPayload"],properties:{txPayload:{type:"string",example:"Base64 string of NewProcessTx transaction bytes"},metadata:{type:"string",example:"optional: base64 string of election metadata JSON object"}}}}}},responses:{200:{description:"It return txId, electionId and the metadataURL for the newly created election. If metadataURL is returned \nempty, means that there is some issue with the storage provider.",content:{"application/json":{schema:{type:"object",properties:{txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/elections",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"Base64 string of NewProcessTx transaction bytes",metadata:"optional: base64 string of election metadata JSON object"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Create an election",description:{content:'It creates an election on the Vochain. \n\nRequires `txPayload`, a client side protobuff signed transaction. The transaction will include metadata, the \nroot of the census and [dozens of flags](https://github.com/vocdoni/dvote-solidity#types-and-values) that allow \nto run processes with powerful features.\n\nThe `metadata` field is a **base64 encoded** JSON containing all election data that will be saved on the storage \n(IPFS on our case). For example: \n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "hello", "en": "hello", "es": "hola"},\n  "description": {"default": "hello", "en": "hello", "es": "hola"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "hello", "en": "hello", "es": "hola"},\n          "value": 0\n        } \n      ], \n      "description": {"default": "hello", "en": "hello", "es": "hola"},\n      "title": {"default": "hello", "en": "hello", "es": "hola"}\n    }\n  ]\n}\n```\n\nNote that the metadata hashed URI present on the `txPayload` have to be the same of `metadata` field hash. \n\nIf metadataURL is returned empty, means that there is some issue with the storage provider.\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',type:"text/plain"},url:{path:["elections"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},p=void 0,m={unversionedId:"vocdoni-api/create-election",id:"vocdoni-api/create-election",title:"Create an election",description:"It creates an election on the Vochain.",source:"@site/docs/vocdoni-api/create-election.api.mdx",sourceDirName:"vocdoni-api",slug:"/vocdoni-api/create-election",permalink:"/vocdoni-api/create-election",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-election",title:"Create an election",description:"It creates an election on the Vochain.",sidebar_label:"Create an election",hide_title:!0,hide_table_of_contents:!0,api:{description:'It creates an election on the Vochain. \n\nRequires `txPayload`, a client side protobuff signed transaction. The transaction will include metadata, the \nroot of the census and [dozens of flags](https://github.com/vocdoni/dvote-solidity#types-and-values) that allow \nto run processes with powerful features.\n\nThe `metadata` field is a **base64 encoded** JSON containing all election data that will be saved on the storage \n(IPFS on our case). For example: \n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "hello", "en": "hello", "es": "hola"},\n  "description": {"default": "hello", "en": "hello", "es": "hola"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "hello", "en": "hello", "es": "hola"},\n          "value": 0\n        } \n      ], \n      "description": {"default": "hello", "en": "hello", "es": "hola"},\n      "title": {"default": "hello", "en": "hello", "es": "hola"}\n    }\n  ]\n}\n```\n\nNote that the metadata hashed URI present on the `txPayload` have to be the same of `metadata` field hash. \n\nIf metadataURL is returned empty, means that there is some issue with the storage provider.\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',operationId:"createElection",tags:["Elections"],requestBody:{description:"Uses `txPayload` protobuff signed transaction, and the `metadata` JSON object base64 encoded",required:!0,content:{"application/json":{schema:{type:"object",required:["txPayload"],properties:{txPayload:{type:"string",example:"Base64 string of NewProcessTx transaction bytes"},metadata:{type:"string",example:"optional: base64 string of election metadata JSON object"}}}}}},responses:{200:{description:"It return txId, electionId and the metadataURL for the newly created election. If metadataURL is returned \nempty, means that there is some issue with the storage provider.",content:{"application/json":{schema:{type:"object",properties:{txHash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},electionID:{type:"string",example:"0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845"},metadataURL:{type:"string",example:"ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"}}}}}}},method:"post",path:"/elections",servers:[{url:"https://api-dev.vocdoni.net/v2/"}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},jsonRequestBodyExample:{txPayload:"Base64 string of NewProcessTx transaction bytes",metadata:"optional: base64 string of election metadata JSON object"},info:{version:"2.0.0",title:"Vocdoni API",description:"The Vocdoni API is a REST API that substitutes the previous RPCs in order to make it easier for  developers/integrators to build on top of the voting protocol. This API facilitates creating votings using Vocdoni,  without the hassle of learning a complex blockchain platform, allowing to perform all the features that enable the  voting protocol such as creating an account, entity, voting process, census & vote, abstracting as much as possible  the complexity and offering simple and straightforward methods to perform those actions. \nYou can review the API endpoints documentation in this section, the main entities are:\n- [**Chain**](chain): The Vocdoni blockchain is named Vochain. It is a Byzantine fault-tolerant network based on Tendermint that  executes the Vocdoni Protocol logic represented as a state machine. Its main purpose is to register votes in a  decentralized and verifiable format. In those endpoints, you can consult the state of the chain, transactions costs,  list organizations and get more Vochain info.\n- [**Accounts**](accounts): Identified by an Ethereum like address. An account can create and manage elections, transfer tokens,  give power to other accounts on his behalf (delegates) and manage its metadata.\n- [**Elections**](elections): Is a rule-set of options and requirements for creating a process in which people vote a series of  options. To know more about the params of an election and its lifecycle go [here](../get-started/intro#23-elections).  In this section you will find all information related to an election as its information, election keys, submitted  votes & how to create a new election.\n- [**Censuses**](censuses): The census is a key component of any voting process. It specifies the set of users (identified by a  public key or address) eligible for participating in an election. To understand more about the Censuses you can  check [here](../get-started/intro#21-the-census). Here you will be able to get censuses information like the Merkle  root, total weight & size, import/export the censuses and create new ones.\n- [**Votes**](votes): All the information related to the vote issued by a participant in a vote, you can check the validity of  the vote, consult your information and send a vote."},postman:{name:"Create an election",description:{content:'It creates an election on the Vochain. \n\nRequires `txPayload`, a client side protobuff signed transaction. The transaction will include metadata, the \nroot of the census and [dozens of flags](https://github.com/vocdoni/dvote-solidity#types-and-values) that allow \nto run processes with powerful features.\n\nThe `metadata` field is a **base64 encoded** JSON containing all election data that will be saved on the storage \n(IPFS on our case). For example: \n\n```json\n{\n  "version": "1.0",\n  "title": {"default": "hello", "en": "hello", "es": "hola"},\n  "description": {"default": "hello", "en": "hello", "es": "hola"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "hello", "en": "hello", "es": "hola"},\n          "value": 0\n        } \n      ], \n      "description": {"default": "hello", "en": "hello", "es": "hola"},\n      "title": {"default": "hello", "en": "hello", "es": "hola"}\n    }\n  ]\n}\n```\n\nNote that the metadata hashed URI present on the `txPayload` have to be the same of `metadata` field hash. \n\nIf metadataURL is returned empty, means that there is some issue with the storage provider.\n\n[Read more about process creation](https://docs.vocdoni.io/architecture/process-overview.html#process-creation)',type:"text/plain"},url:{path:["elections"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"vocdoni-api/vocdoni-api",custom_edit_url:null},sidebar:"vocdoniApi",previous:{title:"Count election votes",permalink:"/vocdoni-api/election-votes-count"},next:{title:"Censuses",permalink:"/vocdoni-api/censuses"}},u={},f=[{value:"Create an election",id:"create-an-election",level:2}],v={toc:f};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-an-election"},"Create an election"),(0,n.kt)("p",null,"It creates an election on the Vochain. "),(0,n.kt)("p",null,"Requires ",(0,n.kt)("inlineCode",{parentName:"p"},"txPayload"),", a client side protobuff signed transaction. The transaction will include metadata, the\nroot of the census and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vocdoni/dvote-solidity#types-and-values"},"dozens of flags")," that allow\nto run processes with powerful features."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata")," field is a ",(0,n.kt)("strong",{parentName:"p"},"base64 encoded")," JSON containing all election data that will be saved on the storage\n(IPFS on our case). For example: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.0",\n  "title": {"default": "hello", "en": "hello", "es": "hola"},\n  "description": {"default": "hello", "en": "hello", "es": "hola"},\n  // Following fields are optional\n  "media": {\n    "header": "url to an image"\n    "streamUri": "url to a stream resource"\n  },\n  "questions": [\n    {\n      "choices": [ \n        { \n          "title": {"default": "hello", "en": "hello", "es": "hola"},\n          "value": 0\n        } \n      ], \n      "description": {"default": "hello", "en": "hello", "es": "hola"},\n      "title": {"default": "hello", "en": "hello", "es": "hola"}\n    }\n  ]\n}\n')),(0,n.kt)("p",null,"Note that the metadata hashed URI present on the ",(0,n.kt)("inlineCode",{parentName:"p"},"txPayload")," have to be the same of ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata")," field hash. "),(0,n.kt)("p",null,"If metadataURL is returned empty, means that there is some issue with the storage provider."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.vocdoni.io/architecture/process-overview.html#process-creation"},"Read more about process creation")),(0,n.kt)(s.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"Uses ",(0,n.kt)("inlineCode",{parentName:"p"},"txPayload")," protobuff signed transaction, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata")," JSON object base64 encoded"))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"txPayload",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"metadata",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"It return txId, electionId and the metadataURL for the newly created election. If metadataURL is returned\nempty, means that there is some issue with the storage provider.")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"txHash",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"electionID",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"metadataURL",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "txHash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n  "electionID": "0xcfc47afa95bc60bc32ef4ff214df79ea8f53881640094d0ce63817bf6e867845",\n  "metadataURL": "ipfs://QmXxgLNRSeK6jtFkJ9TsL8nYxFnJ8RKa2xXHUFKGankX6k"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);