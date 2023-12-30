(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6314],{483:function(e,n,t){"use strict";t.d(n,{a:function(){return O}});var r=t(5893),s=t(512),a=t(8008),i=t(967),Image=t(929),o=t(6536),l=t(5046),c=t(6283),Text=t(4410),d=t(7631),u=t.n(d);function m(e){let{error:n}=e;return(0,r.jsxs)("div",{className:u().wrapper,children:[(0,r.jsx)(Text.x,{className:u().label,children:"Error message:"}),(0,r.jsx)(Text.x,{className:u().error,children:n})]})}t(7294);var h=t(3520),p=t(7529),x=t(747),_=t(8543),f=t(9169),g=t.n(f);function j(e){let{yarnScript:n,npmScript:t}=e,[s,a]=(0,h._)({key:"script-tab",defaultValue:0});return(0,r.jsx)(_.Q,{classNames:{root:g().root},activeTab:s,onTabChange:a,code:[{fileName:"yarn",code:n,language:"bash",icon:(0,r.jsx)(p.z,{className:g().icon,size:16})},{fileName:"npm",code:t,language:"bash",icon:(0,r.jsx)(x._,{className:g().icon,size:16})}]})}function v(e){let{packages:n,dev:t}=e;return(0,r.jsx)(j,{yarnScript:"yarn add ".concat(t?"--dev ":"").concat(n),npmScript:"npm install ".concat(t?"--save-dev ":"").concat(n)})}var N=t(359),k=t.n(N);function b(e){let{id:n,children:t,order:i=2,...o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:n,"data-heading":t,"data-order":i,className:k().titleOffset}),(0,r.jsx)(a.D,{order:i,className:k().title,...o,children:(0,r.jsx)("a",{className:(0,s.Z)(k().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let y=e=>n=>(0,r.jsx)(b,{order:e,...n});function M(e){let{children:n}=e;return(0,r.jsx)(c.P,{className:k().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function w(e){return(0,r.jsx)("p",{className:k().paragraph,...e})}function E(e){return(0,r.jsx)("ul",{className:k().ul,...e})}function C(e){return(0,r.jsx)("li",{className:k().li,...e})}function L(e){let{href:n,...t}=e;return(0,r.jsx)(i.e,{className:k().link,href:n,...t})}function O(e){return{img:Image.E,ul:E,li:C,p:w,a:L,code:o.E,h1:y(1),h2:y(2),h3:y(3),h4:y(4),h5:y(5),h6:y(6),pre:M,Demo:l.B,InstallScript:v,ErrorMessage:m,...e}}},7141:function(e,n,t){"use strict";t.d(n,{A:function(){return z}});var r=t(5893),s=t(9008),a=t.n(s),i=t(1664),o=t.n(i),l=t(3507),c=t(471),d=t(6247),u=t(3078),m=t(967),h=t(991),p=t(8008),Text=t(4410),x=t(7294),_=t(207),f=t.n(_);function g(e){let{icon:n,children:t,link:s}=e,a=s?(0,r.jsxs)("a",{href:s,target:"_blank",className:f().body,rel:"noreferrer",children:[(0,r.jsx)("div",{className:f().icon,children:n}),(0,r.jsx)("div",{className:f().content,children:t})]}):(0,r.jsxs)("div",{className:f().body,children:[(0,r.jsx)("div",{className:f().icon,children:n}),(0,r.jsx)("div",{className:f().content,children:t})]});return(0,r.jsx)("div",{className:f().root,children:a})}var j=t(1163),v=t(4342),N=t(5437),k=t(8565),b=t(6721),y=t(1379),M=t.n(y);function w(e){if(0===e.length)return -1;let n=e.reduce((e,n,t)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:t,position:n.y},{index:0,position:e[0].y});return n.index}function E(){let[e,n]=(0,x.useState)(0),[t,s]=(0,x.useState)([]),a=(0,x.useRef)([]),i=(0,j.useRouter)(),o=t.filter(e=>e.depth>1),l=()=>{n(w(a.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,x.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let t=0;t<e.length;t+=1){let r=e[t];r.id&&n.push({depth:parseInt(r.getAttribute("data-order"),10),content:r.getAttribute("data-heading")||"",id:r.id,getNode:()=>document.getElementById(r.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return a.current=e,s(e),n(w(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),0===o.length)return null;let c=o.map((n,t)=>(0,r.jsx)(Text.x,{component:"a",fz:"sm",className:M().link,mod:{active:e===t},href:"#".concat(n.id),__vars:{"--toc-link-offset":"".concat(n.depth-1)},onClick:e=>{e.preventDefault(),i.replace("".concat(i.pathname,"#").concat(n.id))},children:n.content},n.id));return(0,r.jsx)(N.x,{component:"nav",className:M().wrapper,children:(0,r.jsx)("div",{className:M().inner,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:M().header,children:[(0,r.jsx)(v.Z,{style:{width:(0,k.h)(20),height:(0,k.h)(20)},stroke:1.5}),(0,r.jsx)(Text.x,{className:M().title,children:"Table of contents"})]}),(0,r.jsx)(b.x.Autosize,{mah:"calc(100vh - ".concat((0,k.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,r.jsx)("div",{className:M().items,children:c})})]})})})}var C=t(5372),L=t.n(C);function O(e){let{meta:n,children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,r.jsxs)("article",{children:[(0,r.jsx)("header",{className:L().header,children:(0,r.jsxs)(u.W,{size:"md",children:[(0,r.jsx)(m.e,{component:o(),href:"/",underline:"hover",fz:"sm",children:(0,r.jsxs)(h.M,{inline:!0,component:"span",style:{gap:5},children:[(0,r.jsx)(l.Z,{size:18,stroke:1.5}),(0,r.jsx)("span",{children:"Back to all questions"})]})}),(0,r.jsx)(p.D,{className:L().title,children:n.title}),(0,r.jsxs)("nav",{className:L().links,children:[(0,r.jsx)(g,{icon:(0,r.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,r.jsx)(g,{icon:(0,r.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,r.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,r.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,r.jsxs)(u.W,{size:"md",className:L().inner,children:[(0,r.jsx)("div",{className:L().content,id:"mdx",children:t}),(0,r.jsx)(E,{})]})]})]})}function z(e){return n=>{let{children:t}=n;return(0,r.jsx)(O,{meta:e,children:t})}}},2927:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(7294),a=t(1929),i=t(4920),o=t(7113);let l={type:"code",component:function(){let[e,{open:n,close:t}]=(0,o.q)(),[l,c]=(0,s.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.u,{opened:e,onClose:l?()=>{}:t,withCloseButton:!l,title:"Modal with async operation",children:(0,r.jsx)(i.z,{loading:l,onClick:()=>{c(!0),new Promise(e=>{setTimeout(e,5e3)}).then(()=>c(!1))},fullWidth:!0,children:"Perform heavy operation"})}),(0,r.jsx)(i.z,{onClick:n,children:"Open modal"})]})},code:"\nimport { useState } from 'react';\nimport { useDisclosure } from '@mantine/hooks';\nimport { Button, Modal } from '@mantine/core';\n\nfunction operation() {\n  return new Promise((resolve) => {\n    setTimeout(resolve, 5000);\n  });\n}\n\nfunction Demo() {\n  const [opened, { open, close }] = useDisclosure();\n  const [loading, setLoading] = useState(false);\n\n  const performOperation = () => {\n    setLoading(true);\n    operation().then(() => setLoading(false));\n  };\n\n  return (\n    <>\n      <Modal\n        opened={opened}\n        onClose={loading ? () => {} : close}\n        withCloseButton={!loading}\n        title=\"Modal with async operation\"\n      >\n        <Button loading={loading} onClick={performOperation} fullWidth>\n          Perform heavy operation\n        </Button>\n      </Modal>\n      <Button onClick={open}>Open modal</Button>\n    </>\n  );\n}\n",centered:!0}},359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},7631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},9169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},5372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},1379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}}}]);