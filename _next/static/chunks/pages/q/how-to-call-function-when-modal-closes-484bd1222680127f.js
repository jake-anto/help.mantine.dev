(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6614],{694:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/how-to-call-function-when-modal-closes",function(){return t(8710)}])},8710:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},meta:function(){return i}});var s=t(5893),a=t(6635),o=t(5669);let i={title:"How to call a function when Modal/Drawer closes and animation completes?",description:"How to use transitionProps in Modal/Drawer components",slug:"how-to-call-function-when-modal-closes",category:"components",tags:["modal","drawer","close","transition","transitionProps"],created_at:"December 26, 2023",last_updated_at:"December 26, 2023"},r=(0,o.A)(i);function l(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://mantine.dev/core/modal/",children:"Modal"})," and ",(0,s.jsx)(n.a,{href:"https://mantine.dev/core/drawer/",children:"Drawer"})," components\nuse ",(0,s.jsx)(n.a,{href:"https://mantine.dev/core/transition/",children:"Transition"})," component under the hood to animate\npresence. You can use ",(0,s.jsx)(n.code,{children:"transitionProps"})," property to pass props to ",(0,s.jsx)(n.code,{children:"Transition"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\nimport { useDisclosure } from '@mantine/hooks';\n\nfunction Demo() {\n  const [opened, handlers] = useDisclosure();\n\n  return (\n    <Modal\n      title=\"Modal title\"\n      opened={opened}\n      onClose={handlers.close}\n      transitionProps={{\n        onEntered: () => console.log('Modal opened, animation done'),\n        onExited: () => console.log('Modal closed, animation done'),\n      }}\n    >\n      Modal content\n    </Modal>\n  );\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})})}},6635:function(e,n,t){"use strict";t.d(n,{a:function(){return E}});var s=t(5893),a=t(512),o=t(8008),i=t(967),Image=t(929),r=t(6536),l=t(5046),c=t(6283);t(7294);var d=t(3520),u=t(7529),m=t(747),h=t(8543),p=t(9169),x=t.n(p);function _(e){let{yarnScript:n,npmScript:t}=e,[a,o]=(0,d._)({key:"script-tab",defaultValue:0});return(0,s.jsx)(h.Q,{classNames:{root:x().root},activeTab:a,onTabChange:o,code:[{fileName:"yarn",code:n,language:"bash",icon:(0,s.jsx)(u.z,{className:x().icon,size:16})},{fileName:"npm",code:t,language:"bash",icon:(0,s.jsx)(m._,{className:x().icon,size:16})}]})}function f(e){let{packages:n,dev:t}=e;return(0,s.jsx)(_,{yarnScript:"yarn add ".concat(t?"--dev ":"").concat(n),npmScript:"npm install ".concat(t?"--save-dev ":"").concat(n)})}var j=t(359),g=t.n(j);function N(e){let{id:n,children:t,order:i=2,...r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:n,"data-heading":t,"data-order":i,className:g().titleOffset}),(0,s.jsx)(o.D,{order:i,className:g().title,...r,children:(0,s.jsx)("a",{className:(0,a.Z)(g().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let v=e=>n=>(0,s.jsx)(N,{order:e,...n});function k(e){let{children:n}=e;return(0,s.jsx)(c.P,{className:g().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function M(e){return(0,s.jsx)("p",{className:g().paragraph,...e})}function b(e){return(0,s.jsx)("ul",{className:g().ul,...e})}function w(e){return(0,s.jsx)("li",{className:g().li,...e})}function y(e){let{href:n,...t}=e;return(0,s.jsx)(i.e,{className:g().link,href:n,...t})}function E(e){return{img:Image.E,ul:b,li:w,p:M,a:y,code:r.E,h1:v(1),h2:v(2),h3:v(3),h4:v(4),h5:v(5),h6:v(6),pre:k,Demo:l.B,InstallScript:f,...e}}},5669:function(e,n,t){"use strict";t.d(n,{A:function(){return v}});var s=t(5893),a=t(9008),o=t.n(a),i=t(1664),r=t.n(i),l=t(3507),c=t(471),d=t(6247),u=t(3078),m=t(967),h=t(991),p=t(8008),Text=t(4410);t(7294);var x=t(207),_=t.n(x);function f(e){let{icon:n,children:t,link:a}=e,o=a?(0,s.jsxs)("a",{href:a,target:"_blank",className:_().body,rel:"noreferrer",children:[(0,s.jsx)("div",{className:_().icon,children:n}),(0,s.jsx)("div",{className:_().content,children:t})]}):(0,s.jsxs)("div",{className:_().body,children:[(0,s.jsx)("div",{className:_().icon,children:n}),(0,s.jsx)("div",{className:_().content,children:t})]});return(0,s.jsx)("div",{className:_().root,children:o})}var j=t(5372),g=t.n(j);function N(e){let{meta:n,children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{children:(0,s.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,s.jsxs)("article",{children:[(0,s.jsx)("header",{className:g().header,children:(0,s.jsxs)(u.W,{size:"md",children:[(0,s.jsx)(m.e,{component:r(),href:"/",underline:"hover",fz:"sm",children:(0,s.jsxs)(h.M,{inline:!0,component:"span",style:{gap:5},children:[(0,s.jsx)(l.Z,{size:18,stroke:1.5}),(0,s.jsx)("span",{children:"Back to all questions"})]})}),(0,s.jsx)(p.D,{className:g().title,children:n.title}),(0,s.jsxs)("nav",{className:g().links,children:[(0,s.jsx)(f,{icon:(0,s.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,s.jsx)(f,{icon:(0,s.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,s.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,s.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,s.jsx)(u.W,{size:"md",children:t})]})]})}function v(e){return n=>{let{children:t}=n;return(0,s.jsx)(N,{meta:e,children:t})}}},359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},9169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},5372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L"}},207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}}},function(e){e.O(0,[1577,9774,2888,179],function(){return e(e.s=694)}),_N_E=e.O()}]);