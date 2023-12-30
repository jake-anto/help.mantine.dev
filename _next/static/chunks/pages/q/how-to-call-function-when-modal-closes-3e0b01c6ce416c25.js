(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6614],{694:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/how-to-call-function-when-modal-closes",function(){return t(8710)}])},8710:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},meta:function(){return o}});var r=t(5893),s=t(483),a=t(7141);let o={title:"How to call a function when Modal/Drawer closes and animation completes?",description:"How to use transitionProps in Modal/Drawer components",slug:"how-to-call-function-when-modal-closes",category:"components",tags:["modal","drawer","close","transition","transitionProps"],created_at:"December 26, 2023",last_updated_at:"December 26, 2023"},i=(0,a.A)(o);function l(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://mantine.dev/core/modal/",children:"Modal"})," and ",(0,r.jsx)(n.a,{href:"https://mantine.dev/core/drawer/",children:"Drawer"})," components\nuse ",(0,r.jsx)(n.a,{href:"https://mantine.dev/core/transition/",children:"Transition"})," component under the hood to animate\npresence. You can use ",(0,r.jsx)(n.code,{children:"transitionProps"})," property to pass props to ",(0,r.jsx)(n.code,{children:"Transition"})," component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\nimport { useDisclosure } from '@mantine/hooks';\n\nfunction Demo() {\n  const [opened, handlers] = useDisclosure();\n\n  return (\n    <Modal\n      title=\"Modal title\"\n      opened={opened}\n      onClose={handlers.close}\n      transitionProps={{\n        onEntered: () => console.log('Modal opened, animation done'),\n        onExited: () => console.log('Modal closed, animation done'),\n      }}\n    >\n      Modal content\n    </Modal>\n  );\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})})}},483:function(e,n,t){"use strict";t.d(n,{a:function(){return L}});var r=t(5893),s=t(512),a=t(8008),o=t(967),Image=t(929),i=t(6536),l=t(5046),c=t(6283),Text=t(4410),d=t(7631),u=t.n(d);function h(e){let{error:n}=e;return(0,r.jsxs)("div",{className:u().wrapper,children:[(0,r.jsx)(Text.x,{className:u().label,children:"Error message:"}),(0,r.jsx)(Text.x,{className:u().error,children:n})]})}t(7294);var m=t(3520),p=t(7529),x=t(747),_=t(8543),f=t(9169),g=t.n(f);function j(e){let{yarnScript:n,npmScript:t}=e,[s,a]=(0,m._)({key:"script-tab",defaultValue:0});return(0,r.jsx)(_.Q,{classNames:{root:g().root},activeTab:s,onTabChange:a,code:[{fileName:"yarn",code:n,language:"bash",icon:(0,r.jsx)(p.z,{className:g().icon,size:16})},{fileName:"npm",code:t,language:"bash",icon:(0,r.jsx)(x._,{className:g().icon,size:16})}]})}function N(e){let{packages:n,dev:t}=e;return(0,r.jsx)(j,{yarnScript:"yarn add ".concat(t?"--dev ":"").concat(n),npmScript:"npm install ".concat(t?"--save-dev ":"").concat(n)})}var v=t(359),b=t.n(v);function M(e){let{id:n,children:t,order:o=2,...i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:n,"data-heading":t,"data-order":o,className:b().titleOffset}),(0,r.jsx)(a.D,{order:o,className:b().title,...i,children:(0,r.jsx)("a",{className:(0,s.Z)(b().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let k=e=>n=>(0,r.jsx)(M,{order:e,...n});function w(e){let{children:n}=e;return(0,r.jsx)(c.P,{className:b().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function y(e){return(0,r.jsx)("p",{className:b().paragraph,...e})}function E(e){return(0,r.jsx)("ul",{className:b().ul,...e})}function T(e){return(0,r.jsx)("li",{className:b().li,...e})}function D(e){let{href:n,...t}=e;return(0,r.jsx)(o.e,{className:b().link,href:n,...t})}function L(e){return{img:Image.E,ul:E,li:T,p:y,a:D,code:i.E,h1:k(1),h2:k(2),h3:k(3),h4:k(4),h5:k(5),h6:k(6),pre:w,Demo:l.B,InstallScript:N,ErrorMessage:h,...e}}},7141:function(e,n,t){"use strict";t.d(n,{A:function(){return O}});var r=t(5893),s=t(9008),a=t.n(s),o=t(1664),i=t.n(o),l=t(3507),c=t(471),d=t(6247),u=t(3078),h=t(967),m=t(991),p=t(8008),Text=t(4410),x=t(7294),_=t(207),f=t.n(_);function g(e){let{icon:n,children:t,link:s}=e,a=s?(0,r.jsxs)("a",{href:s,target:"_blank",className:f().body,rel:"noreferrer",children:[(0,r.jsx)("div",{className:f().icon,children:n}),(0,r.jsx)("div",{className:f().content,children:t})]}):(0,r.jsxs)("div",{className:f().body,children:[(0,r.jsx)("div",{className:f().icon,children:n}),(0,r.jsx)("div",{className:f().content,children:t})]});return(0,r.jsx)("div",{className:f().root,children:a})}var j=t(1163),N=t(4342),v=t(5437),b=t(8565),M=t(6721),k=t(1379),w=t.n(k);function y(e){if(0===e.length)return -1;let n=e.reduce((e,n,t)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:t,position:n.y},{index:0,position:e[0].y});return n.index}function E(){let[e,n]=(0,x.useState)(0),[t,s]=(0,x.useState)([]),a=(0,x.useRef)([]),o=(0,j.useRouter)(),i=t.filter(e=>e.depth>1),l=()=>{n(y(a.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,x.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let t=0;t<e.length;t+=1){let r=e[t];r.id&&n.push({depth:parseInt(r.getAttribute("data-order"),10),content:r.getAttribute("data-heading")||"",id:r.id,getNode:()=>document.getElementById(r.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return a.current=e,s(e),n(y(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),0===i.length)return null;let c=i.map((n,t)=>(0,r.jsx)(Text.x,{component:"a",fz:"sm",className:w().link,mod:{active:e===t},href:"#".concat(n.id),__vars:{"--toc-link-offset":"".concat(n.depth-1)},onClick:e=>{e.preventDefault(),o.replace("".concat(o.pathname,"#").concat(n.id))},children:n.content},n.id));return(0,r.jsx)(v.x,{component:"nav",className:w().wrapper,children:(0,r.jsx)("div",{className:w().inner,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:w().header,children:[(0,r.jsx)(N.Z,{style:{width:(0,b.h)(20),height:(0,b.h)(20)},stroke:1.5}),(0,r.jsx)(Text.x,{className:w().title,children:"Table of contents"})]}),(0,r.jsx)(M.x.Autosize,{mah:"calc(100vh - ".concat((0,b.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,r.jsx)("div",{className:w().items,children:c})})]})})})}var T=t(5372),D=t.n(T);function L(e){let{meta:n,children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,r.jsxs)("article",{children:[(0,r.jsx)("header",{className:D().header,children:(0,r.jsxs)(u.W,{size:"md",children:[(0,r.jsx)(h.e,{component:i(),href:"/",underline:"hover",fz:"sm",children:(0,r.jsxs)(m.M,{inline:!0,component:"span",style:{gap:5},children:[(0,r.jsx)(l.Z,{size:18,stroke:1.5}),(0,r.jsx)("span",{children:"Back to all questions"})]})}),(0,r.jsx)(p.D,{className:D().title,children:n.title}),(0,r.jsxs)("nav",{className:D().links,children:[(0,r.jsx)(g,{icon:(0,r.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,r.jsx)(g,{icon:(0,r.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,r.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,r.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,r.jsxs)(u.W,{size:"md",className:D().inner,children:[(0,r.jsx)("div",{className:D().content,id:"mdx",children:t}),(0,r.jsx)(E,{})]})]})]})}function O(e){return n=>{let{children:t}=n;return(0,r.jsx)(L,{meta:e,children:t})}}},359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},7631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},9169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},5372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},1379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}}},function(e){e.O(0,[5470,9774,2888,179],function(){return e(e.s=694)}),_N_E=e.O()}]);