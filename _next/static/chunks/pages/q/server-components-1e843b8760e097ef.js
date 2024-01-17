(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{51600:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/server-components",function(){return o(19851)}])},19851:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return a},meta:function(){return i}});var t=o(85893),r=o(25190),s=o(37141);let i={title:"Can I use Mantine components as server components?",description:"Learn about use client directive and server components usage",slug:"server-components",category:"next.js",tags:["server components","use client","next.js","rsc","react server components"],created_at:"December 30, 2023",last_updated_at:"December 30, 2023"},c=(0,s.A)(i);function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ErrorMessage:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ErrorMessage",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"difference-between-server-and-client-components",children:"Difference between server and client components"}),"\n",(0,t.jsxs)(n.p,{children:["Server components are rendered ",(0,t.jsx)(n.strong,{children:"only on the server"}),", their code is not included in the client bundle.\nIn server components you cannot use hooks (",(0,t.jsx)(n.code,{children:"useState"}),", ",(0,t.jsx)(n.code,{children:"useEffect"}),", ",(0,t.jsx)(n.code,{children:"useRef"}),", custom hooks, for example ",(0,t.jsx)(n.a,{href:"https://mantine.dev/hooks/use-disclosure/",children:"useDisclosure"}),"),\ncompound components (",(0,t.jsx)(n.code,{children:"<Tabs.Tab />"}),", ",(0,t.jsx)(n.code,{children:"<Popover.Dropdown />"}),", etc.), callback functions\nas children (",(0,t.jsx)(n.a,{href:"https://mantine.dev/core/copy-button/#usage",children:"CopyButton example"}),"),\nreference ",(0,t.jsx)(n.code,{children:"window"})," object or add any other client-side logic."]}),"\n",(0,t.jsxs)(n.p,{children:["Client components are rendered ",(0,t.jsx)(n.strong,{children:"both on the server and on the client"}),". They are included in the client bundle and\ncan use all the features, including hooks, compound components, callback functions as children, etc."]}),"\n",(0,t.jsx)(n.h2,{id:"can-i-use-mantine-components-as-server-components",children:"Can I use Mantine components as server components?"}),"\n",(0,t.jsxs)(n.p,{children:["No, all Mantine components are client components and cannot be used as server components.\nIt means that components render ",(0,t.jsx)(n.strong,{children:"both on the server and on the client, not only on client."})]}),"\n",(0,t.jsx)(n.h2,{id:"should-i-add-use-client-directive-to-all-files",children:"Should I add 'use client' directive to all files?"}),"\n",(0,t.jsxs)(n.p,{children:["No, all Mantine components already include ",(0,t.jsx)(n.code,{children:"'use client';"})," directive. You need to add it\nonly to the files where you use hooks, compound components, callback functions as children or any other client-side logic."]}),"\n",(0,t.jsx)(n.h2,{id:"does-use-client-directive-affect-seo",children:"Does 'use client' directive affect SEO?"}),"\n",(0,t.jsxs)(n.p,{children:["No, ",(0,t.jsx)(n.code,{children:"'use client';"})," directive does not affect SEO. Client components are rendered on the server the\nsame way as server components, the only difference is that client components are also included in the client bundle."]}),"\n",(0,t.jsx)(n.h2,{id:"error-hook-is-not-a-function",children:"Error: hook is not a function"}),"\n",(0,t.jsx)(o,{error:"Error: (0 , _barrel_optimize_names_useDisclosure_mantine_hooks__WEBPACK_IMPORTED_MODULE_1__.useDisclosure) is not a function or its return value is not iterable"}),"\n",(0,t.jsxs)(n.p,{children:["This error happens when you try to use hooks in server components. In the example above you are trying to use\n",(0,t.jsx)(n.code,{children:"useDisclosure"})," hook without ",(0,t.jsx)(n.code,{children:"'use client';"})," directive. To fix it, add ",(0,t.jsx)(n.code,{children:"'use client';"})," directive to the top of the file."]}),"\n",(0,t.jsx)(n.p,{children:"Example of code that will throw this error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ❌ This will throw an error\nimport { useDisclosure } from '@mantine/hooks';\n\nfunction Demo() {\n  const { opened, toggle } = useDisclosure();\n  return (\n    <button onClick={toggle}>{opened ? 'Opened' : 'Closed'}</button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example of code that will work:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ✅ No error\n'use client';\n\nimport { useDisclosure } from '@mantine/hooks';\n\nfunction Demo() {\n  const { opened, toggle } = useDisclosure();\n  return (\n    <button onClick={toggle}>{opened ? 'Opened' : 'Closed'}</button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"error-function-cannot-be-passed-as-children",children:"Error: function cannot be passed as children"}),"\n",(0,t.jsx)(o,{error:"Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with 'use server'."}),"\n",(0,t.jsxs)(n.p,{children:["This error happens when you try to pass callback function as children to server component.\nIf you need to pass callback function as children, you need to add ",(0,t.jsx)(n.code,{children:"'use client';"})," to the top of the file."]}),"\n",(0,t.jsx)(n.p,{children:"Example of code that will throw this error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ❌ This will throw an error\nimport { CopyButton } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <CopyButton value=\"https://mantine.dev\">\n      {({ copied, copy }) => (\n        <button color={copied ? 'teal' : 'blue'} onClick={copy}>\n          {copied ? 'Copied url' : 'Copy url'}\n        </button>\n      )}\n    </CopyButton>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example of code that will work:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ✅ No error\n'use client';\n\nimport { CopyButton } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <CopyButton value=\"https://mantine.dev\">\n      {({ copied, copy }) => (\n        <button color={copied ? 'teal' : 'blue'} onClick={copy}>\n          {copied ? 'Copied url' : 'Copy url'}\n        </button>\n      )}\n    </CopyButton>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"error-hook-usage-in-server-component",children:"Error: hook usage in server component"}),"\n",(0,t.jsx)(o,{error:"You're importing a component that needs useRef. It only works in a Client Component but none of its parents are marked with 'use client', so they're Server Components by default."}),"\n",(0,t.jsxs)(n.p,{children:["The error above occurs when you try to use hook (",(0,t.jsx)(n.code,{children:"useState"}),", ",(0,t.jsx)(n.code,{children:"useRef"}),", ",(0,t.jsx)(n.code,{children:"useReducer"}),", ",(0,t.jsx)(n.code,{children:"useEffect"}),", any other hook) in server component.\nTo fix it, add ",(0,t.jsx)(n.code,{children:"'use client';"})," directive to the top of the file."]}),"\n",(0,t.jsx)(n.p,{children:"Example of code that will throw this error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ❌ This will throw an error\nimport { useRef } from 'react';\n\nfunction Demo() {\n  const ref = useRef();\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example of code that will work:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ✅ No error\n'use client';\n\nimport { useRef } from 'react';\n\nfunction Demo() {\n  const ref = useRef();\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"error-compound-components-in-server-component",children:"Error: compound components in server component"}),"\n",(0,t.jsx)(o,{error:"Could not find the module 'x/node_modules/@mantine/core/esm/components/Popover/Popover.mjs#Popover#Target' in the React Client Manifest. This is probably a bug in the React Server Components bundler."}),"\n",(0,t.jsxs)(n.p,{children:["The error above occurs when you try to use compound component (",(0,t.jsx)(n.code,{children:"<Tabs.Tab />"}),", ",(0,t.jsx)(n.code,{children:"<Popover.Dropdown />"}),", etc.) in server component.\nTo fix it, add ",(0,t.jsx)(n.code,{children:"'use client';"})," directive to the top of the file or replace compound components with regular components (",(0,t.jsx)(n.code,{children:"TabsTab"}),", ",(0,t.jsx)(n.code,{children:"PopoverDropdown"}),", etc.)."]}),"\n",(0,t.jsx)(n.p,{children:"Example of code that will throw this error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ❌ This will throw an error\nimport { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover>\n      <Popover.Target>\n        <button>Toggle popover</button>\n      </Popover.Target>\n    </Popover>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Solution 1: add ",(0,t.jsx)(n.code,{children:"'use client';"})," directive to the top of the file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ✅ No error\n'use client';\n\nimport { Popover } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover>\n      <Popover.Target>\n        <button>Toggle popover</button>\n      </Popover.Target>\n    </Popover>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Solution 2: replace compound components with regular components:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// ✅ No error, 'use client' directive is not required\nimport { Popover, PopoverTarget } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Popover>\n      <PopoverTarget>\n        <button>Toggle popover</button>\n      </PopoverTarget>\n    </Popover>\n  );\n}\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(c,{...e,children:(0,t.jsx)(l,{...e})})}},25190:function(e,n,o){"use strict";o.d(n,{a:function(){return B}});var t=o(85893),r=o(90512),s=o(28008),i=o(60967),Image=o(80929),c=o(26536),l=o(2971),a=o(42677),Text=o(54410),d=o(97631),u=o.n(d);function h(e){let{error:n}=e;return(0,t.jsxs)("div",{className:u().wrapper,children:[(0,t.jsx)(Text.x,{className:u().label,children:"Error message:"}),(0,t.jsx)(Text.x,{className:u().error,children:n})]})}o(67294);var p=o(17010),m=o(65984),x=o(93043),f=o(57187),j=o(14251),_=o.n(j);function g(e){let{className:n,...o}=e,s=(0,m.rZ)();return(0,t.jsx)(x.V,{className:(0,r.Z)(_().root,n),icon:(0,t.jsx)(p.Z,{className:_().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,f.m)(s.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,f.m)(s.colors.blue[4],.2)},...o})}var v=o(3520),b=o(47529),y=o(20747),k=o(78543),N=o(19169),w=o.n(N);function E(e){let{yarnScript:n,npmScript:o}=e,[r,s]=(0,v._)({key:"script-tab",defaultValue:0});return(0,t.jsx)(k.Q,{classNames:{root:w().root},activeTab:r,onTabChange:s,code:[{fileName:"yarn",code:n,language:"bash",icon:(0,t.jsx)(b.z,{className:w().icon,size:16})},{fileName:"npm",code:o,language:"bash",icon:(0,t.jsx)(y._,{className:w().icon,size:16})}]})}function T(e){let{packages:n,dev:o}=e;return(0,t.jsx)(E,{yarnScript:"yarn add ".concat(o?"--dev ":"").concat(n),npmScript:"npm install ".concat(o?"--save-dev ":"").concat(n)})}var C=o(50359),M=o.n(C);function D(e){let{id:n,children:o,order:i=2,...c}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{id:n,"data-heading":o,"data-order":i,className:M().titleOffset}),(0,t.jsx)(s.D,{order:i,className:M().title,...c,children:(0,t.jsx)("a",{className:(0,r.Z)(M().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:o})})]})}let P=e=>n=>(0,t.jsx)(D,{order:e,...n});function S(e){let{children:n}=e;return(0,t.jsx)(a.P,{className:M().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function O(e){return(0,t.jsx)("p",{className:M().paragraph,...e})}function I(e){return(0,t.jsx)("ul",{className:M().ul,...e})}function L(e){return(0,t.jsx)("li",{className:M().li,...e})}function R(e){let{href:n,...o}=e;return(0,t.jsx)(i.e,{className:M().link,href:n,...o})}function B(e){return{img:Image.E,ul:I,li:L,p:O,a:R,code:c.E,h1:P(1),h2:P(2),h3:P(3),h4:P(4),h5:P(5),h6:P(6),pre:S,Demo:l.B,InstallScript:T,ErrorMessage:h,blockquote:g,...e}}},37141:function(e,n,o){"use strict";o.d(n,{A:function(){return P}});var t=o(85893),r=o(9008),s=o.n(r),i=o(41664),c=o.n(i),l=o(33507),a=o(30471),d=o(36247),u=o(43078),h=o(60967),p=o(90991),m=o(28008),Text=o(54410),x=o(67294),f=o(80207),j=o.n(f);function _(e){let{icon:n,children:o,link:r}=e,s=r?(0,t.jsxs)("a",{href:r,target:"_blank",className:j().body,rel:"noreferrer",children:[(0,t.jsx)("div",{className:j().icon,children:n}),(0,t.jsx)("div",{className:j().content,children:o})]}):(0,t.jsxs)("div",{className:j().body,children:[(0,t.jsx)("div",{className:j().icon,children:n}),(0,t.jsx)("div",{className:j().content,children:o})]});return(0,t.jsx)("div",{className:j().root,children:s})}var g=o(11163),v=o(94342),b=o(3468),y=o(88565),k=o(96721),N=o(31379),w=o.n(N);function E(e){if(0===e.length)return -1;let n=e.reduce((e,n,o)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:o,position:n.y},{index:0,position:e[0].y});return n.index}function T(){let[e,n]=(0,x.useState)(0),[o,r]=(0,x.useState)([]),s=(0,x.useRef)([]),i=(0,g.useRouter)(),c=o.filter(e=>e.depth>1),l=()=>{n(E(s.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,x.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let o=0;o<e.length;o+=1){let t=e[o];t.id&&n.push({depth:parseInt(t.getAttribute("data-order"),10),content:t.getAttribute("data-heading")||"",id:t.id,getNode:()=>document.getElementById(t.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return s.current=e,r(e),n(E(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),0===c.length)return null;let a=c.map((n,o)=>(0,t.jsx)(Text.x,{component:"a",fz:"sm",className:w().link,mod:{active:e===o},href:"#".concat(n.id),__vars:{"--toc-link-offset":"".concat(n.depth-1)},onClick:e=>{e.preventDefault(),i.replace("".concat(i.pathname,"#").concat(n.id))},children:n.content},n.id));return(0,t.jsx)(b.x,{component:"nav",className:w().wrapper,children:(0,t.jsx)("div",{className:w().inner,children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:w().header,children:[(0,t.jsx)(v.Z,{style:{width:(0,y.h)(20),height:(0,y.h)(20)},stroke:1.5}),(0,t.jsx)(Text.x,{className:w().title,children:"Table of contents"})]}),(0,t.jsx)(k.x.Autosize,{mah:"calc(100vh - ".concat((0,y.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,t.jsx)("div",{className:w().items,children:a})})]})})})}var C=o(95372),M=o.n(C);function D(e){let{meta:n,children:o}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s(),{children:(0,t.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,t.jsxs)("article",{children:[(0,t.jsx)("header",{className:M().header,children:(0,t.jsxs)(u.W,{size:"md",children:[(0,t.jsx)(h.e,{component:c(),href:"/",underline:"hover",fz:"sm",children:(0,t.jsxs)(p.M,{inline:!0,component:"span",style:{gap:5},children:[(0,t.jsx)(l.Z,{size:18,stroke:1.5}),(0,t.jsx)("span",{children:"Back to all questions"})]})}),(0,t.jsx)(m.D,{className:M().title,children:n.title}),(0,t.jsxs)("nav",{className:M().links,children:[(0,t.jsx)(_,{icon:(0,t.jsx)(a.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,t.jsx)(_,{icon:(0,t.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,t.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,t.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,t.jsxs)(u.W,{size:"md",className:M().inner,children:[(0,t.jsx)("div",{className:M().content,id:"mdx",children:o}),(0,t.jsx)(T,{})]})]})]})}function P(e){return n=>{let{children:o}=n;return(0,t.jsx)(D,{meta:e,children:o})}}},50359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},97631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},14251:function(e){e.exports={root:"MdxInfo_root___n6Nr",icon:"MdxInfo_icon__9t9jJ"}},19169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},95372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},80207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},31379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}}},function(e){e.O(0,[3671,9774,2888,179],function(){return e(e.s=51600)}),_N_E=e.O()}]);