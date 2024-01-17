(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{19722:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/select-autocomplete-difference",function(){return t(93607)}])},93607:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m},meta:function(){return d}});var a=t(85893),l=t(25190);t(67294);var r=t(16143);let o={type:"code",component:function(){return(0,a.jsx)(r.F,{label:"Your city",placeholder:"Your city",data:["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"]})},code:"\nimport { Autocomplete } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Autocomplete\n      label=\"Your city\"\n      placeholder=\"Your city\"\n      data={[\n        'New York',\n        'Los Angeles',\n        'Chicago',\n        'Houston',\n        'Phoenix',\n        'Philadelphia',\n        'San Antonio',\n        'San Diego',\n        'Dallas',\n        'San Jose',\n      ]}\n    />\n  );\n}\n",centered:!0,maxWidth:340,defaultExpanded:!1};var s=t(35802);let i={type:"code",component:function(){return(0,a.jsx)(s.P,{label:"Your country",placeholder:"Select country",searchable:!0,data:[{value:"ca",label:"Canada"},{value:"br",label:"Brazil"},{value:"in",label:"India"},{value:"mx",label:"Mexico"},{value:"au",label:"Australia"},{value:"kr",label:"South Korea"},{value:"id",label:"Indonesia"},{value:"tr",label:"Turkey"},{value:"nl",label:"Netherlands"},{value:"ch",label:"Switzerland"},{value:"sa",label:"Saudi Arabia"},{value:"se",label:"Sweden"},{value:"pl",label:"Poland"},{value:"ar",label:"Argentina"},{value:"be",label:"Belgium"},{value:"th",label:"Thailand"},{value:"at",label:"Austria"},{value:"ae",label:"United Arab Emirates"},{value:"dk",label:"Denmark"},{value:"sg",label:"Singapore"},{value:"my",label:"Malaysia"},{value:"no",label:"Norway"},{value:"ng",label:"Nigeria"},{value:"cz",label:"Czech Republic"},{value:"za",label:"South Africa"},{value:"ro",label:"Romania"}]})},code:"\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Select\n      label=\"Your country\"\n      placeholder=\"Select country\"\n      searchable\n      data={[\n        { value: 'ca', label: 'Canada' },\n        { value: 'br', label: 'Brazil' },\n        { value: 'in', label: 'India' },\n        { value: 'mx', label: 'Mexico' },\n        { value: 'au', label: 'Australia' },\n        { value: 'kr', label: 'South Korea' },\n        { value: 'id', label: 'Indonesia' },\n        { value: 'tr', label: 'Turkey' },\n        { value: 'nl', label: 'Netherlands' },\n        { value: 'ch', label: 'Switzerland' },\n        { value: 'sa', label: 'Saudi Arabia' },\n        { value: 'se', label: 'Sweden' },\n        { value: 'pl', label: 'Poland' },\n        { value: 'ar', label: 'Argentina' },\n        { value: 'be', label: 'Belgium' },\n        { value: 'th', label: 'Thailand' },\n        { value: 'at', label: 'Austria' },\n        { value: 'ae', label: 'United Arab Emirates' },\n        { value: 'hk', label: 'Hong Kong' },\n        { value: 'dk', label: 'Denmark' },\n        { value: 'sg', label: 'Singapore' },\n        { value: 'my', label: 'Malaysia' },\n        { value: 'no', label: 'Norway' },\n        { value: 'ng', label: 'Nigeria' },\n        { value: 'cz', label: 'Czech Republic' },\n        { value: 'za', label: 'South Africa' },\n        { value: 'ro', label: 'Romania' },\n      ]}\n    />\n  );\n}\n",centered:!0,maxWidth:340,defaultExpanded:!1};var c=t(37141);let d={title:"What is the difference between searchable Select and Autocomplete?",description:"Searchable Select and Autocomplete are similar components, but they serve different purposes.",slug:"select-autocomplete-difference",category:"components",tags:["select","autocomplete","searchable","combobox"],created_at:"December 26, 2023",last_updated_at:"December 26, 2023"},u=(0,c.A)(d);function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"searchable-select",children:"Searchable select"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.a,{href:"https://mantine.dev/core/select/",children:"Select"})," component in the following cases:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You want to restrict user to a list of predefined options"}),"\n",(0,a.jsx)(n.li,{children:"You want to display all available options to the user and allow searching through them"}),"\n",(0,a.jsx)(n.li,{children:"You want to discard user input on blur if option was not selected from the dropdown"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"value"})," and ",(0,a.jsx)(n.code,{children:"label"})," of the option are not the same, for example, ",(0,a.jsx)(n.code,{children:"{ value: 'US', label: 'United States' }"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, you can use ",(0,a.jsx)(n.a,{href:"https://mantine.dev/core/select/",children:"Select"})," to select country from the list of all countries:"]}),"\n",(0,a.jsx)(t,{data:i}),"\n",(0,a.jsx)(n.p,{children:"In the example above, the user can select country from the list of all countries, but cannot enter any other value."}),"\n",(0,a.jsx)(n.h2,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.a,{href:"https://mantine.dev/core/autocomplete/",children:"Autocomplete"})," component in the following cases:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You want to allow user to enter any value"}),"\n",(0,a.jsx)(n.li,{children:"You want to display suggestions to the user based on the input value"}),"\n",(0,a.jsx)(n.li,{children:"You want to preserve user input on blur if option was not selected from the dropdown"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"value"})," and ",(0,a.jsx)(n.code,{children:"label"})," of the option are the same, for example, ",(0,a.jsx)(n.code,{children:"'United States'"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, you can use ",(0,a.jsx)(n.a,{href:"https://mantine.dev/core/autocomplete/",children:"Autocomplete"})," to ask user to enter city:"]}),"\n",(0,a.jsx)(t,{data:o}),"\n",(0,a.jsx)(n.p,{children:"In the example above, suggestions are based on the input value,\nbut the user can enter any value and it will be preserved on blur."})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...e,children:(0,a.jsx)(h,{...e})})}},25190:function(e,n,t){"use strict";t.d(n,{a:function(){return B}});var a=t(85893),l=t(90512),r=t(28008),o=t(60967),Image=t(80929),s=t(26536),i=t(2971),c=t(42677),Text=t(54410),d=t(97631),u=t.n(d);function h(e){let{error:n}=e;return(0,a.jsxs)("div",{className:u().wrapper,children:[(0,a.jsx)(Text.x,{className:u().label,children:"Error message:"}),(0,a.jsx)(Text.x,{className:u().error,children:n})]})}t(67294);var m=t(17010),p=t(65984),x=t(93043),b=t(57187),f=t(14251),v=t.n(f);function _(e){let{className:n,...t}=e,r=(0,p.rZ)();return(0,a.jsx)(x.V,{className:(0,l.Z)(v().root,n),icon:(0,a.jsx)(m.Z,{className:v().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,b.m)(r.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,b.m)(r.colors.blue[4],.2)},...t})}var g=t(3520),j=t(47529),y=t(20747),N=t(78543),w=t(19169),k=t.n(w);function S(e){let{yarnScript:n,npmScript:t}=e,[l,r]=(0,g._)({key:"script-tab",defaultValue:0});return(0,a.jsx)(N.Q,{classNames:{root:k().root},activeTab:l,onTabChange:r,code:[{fileName:"yarn",code:n,language:"bash",icon:(0,a.jsx)(j.z,{className:k().icon,size:16})},{fileName:"npm",code:t,language:"bash",icon:(0,a.jsx)(y._,{className:k().icon,size:16})}]})}function E(e){let{packages:n,dev:t}=e;return(0,a.jsx)(S,{yarnScript:"yarn add ".concat(t?"--dev ":"").concat(n),npmScript:"npm install ".concat(t?"--save-dev ":"").concat(n)})}var C=t(50359),M=t.n(C);function A(e){let{id:n,children:t,order:o=2,...s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:n,"data-heading":t,"data-order":o,className:M().titleOffset}),(0,a.jsx)(r.D,{order:o,className:M().title,...s,children:(0,a.jsx)("a",{className:(0,l.Z)(M().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:t})})]})}let z=e=>n=>(0,a.jsx)(A,{order:e,...n});function L(e){let{children:n}=e;return(0,a.jsx)(c.P,{className:M().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function D(e){return(0,a.jsx)("p",{className:M().paragraph,...e})}function T(e){return(0,a.jsx)("ul",{className:M().ul,...e})}function P(e){return(0,a.jsx)("li",{className:M().li,...e})}function I(e){let{href:n,...t}=e;return(0,a.jsx)(o.e,{className:M().link,href:n,...t})}function B(e){return{img:Image.E,ul:T,li:P,p:D,a:I,code:s.E,h1:z(1),h2:z(2),h3:z(3),h4:z(4),h5:z(5),h6:z(6),pre:L,Demo:i.B,InstallScript:E,ErrorMessage:h,blockquote:_,...e}}},37141:function(e,n,t){"use strict";t.d(n,{A:function(){return z}});var a=t(85893),l=t(9008),r=t.n(l),o=t(41664),s=t.n(o),i=t(33507),c=t(30471),d=t(36247),u=t(43078),h=t(60967),m=t(90991),p=t(28008),Text=t(54410),x=t(67294),b=t(80207),f=t.n(b);function v(e){let{icon:n,children:t,link:l}=e,r=l?(0,a.jsxs)("a",{href:l,target:"_blank",className:f().body,rel:"noreferrer",children:[(0,a.jsx)("div",{className:f().icon,children:n}),(0,a.jsx)("div",{className:f().content,children:t})]}):(0,a.jsxs)("div",{className:f().body,children:[(0,a.jsx)("div",{className:f().icon,children:n}),(0,a.jsx)("div",{className:f().content,children:t})]});return(0,a.jsx)("div",{className:f().root,children:r})}var _=t(11163),g=t(94342),j=t(3468),y=t(88565),N=t(96721),w=t(31379),k=t.n(w);function S(e){if(0===e.length)return -1;let n=e.reduce((e,n,t)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:t,position:n.y},{index:0,position:e[0].y});return n.index}function E(){let[e,n]=(0,x.useState)(0),[t,l]=(0,x.useState)([]),r=(0,x.useRef)([]),o=(0,_.useRouter)(),s=t.filter(e=>e.depth>1),i=()=>{n(S(r.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,x.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let t=0;t<e.length;t+=1){let a=e[t];a.id&&n.push({depth:parseInt(a.getAttribute("data-order"),10),content:a.getAttribute("data-heading")||"",id:a.id,getNode:()=>document.getElementById(a.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return r.current=e,l(e),n(S(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),0===s.length)return null;let c=s.map((n,t)=>(0,a.jsx)(Text.x,{component:"a",fz:"sm",className:k().link,mod:{active:e===t},href:"#".concat(n.id),__vars:{"--toc-link-offset":"".concat(n.depth-1)},onClick:e=>{e.preventDefault(),o.replace("".concat(o.pathname,"#").concat(n.id))},children:n.content},n.id));return(0,a.jsx)(j.x,{component:"nav",className:k().wrapper,children:(0,a.jsx)("div",{className:k().inner,children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:k().header,children:[(0,a.jsx)(g.Z,{style:{width:(0,y.h)(20),height:(0,y.h)(20)},stroke:1.5}),(0,a.jsx)(Text.x,{className:k().title,children:"Table of contents"})]}),(0,a.jsx)(N.x.Autosize,{mah:"calc(100vh - ".concat((0,y.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,a.jsx)("div",{className:k().items,children:c})})]})})})}var C=t(95372),M=t.n(C);function A(e){let{meta:n,children:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:"".concat(n.title," | Mantine")})}),(0,a.jsxs)("article",{children:[(0,a.jsx)("header",{className:M().header,children:(0,a.jsxs)(u.W,{size:"md",children:[(0,a.jsx)(h.e,{component:s(),href:"/",underline:"hover",fz:"sm",children:(0,a.jsxs)(m.M,{inline:!0,component:"span",style:{gap:5},children:[(0,a.jsx)(i.Z,{size:18,stroke:1.5}),(0,a.jsx)("span",{children:"Back to all questions"})]})}),(0,a.jsx)(p.D,{className:M().title,children:n.title}),(0,a.jsxs)("nav",{className:M().links,children:[(0,a.jsx)(v,{icon:(0,a.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(n.slug,".mdx"),children:"Edit this page on GitHub"}),(0,a.jsx)(v,{icon:(0,a.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(n.title))),children:"Report issue with the article"})]}),(0,a.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,a.jsx)(Text.x,{component:"time",dateTime:new Date(n.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:n.last_updated_at})]})]})}),(0,a.jsxs)(u.W,{size:"md",className:M().inner,children:[(0,a.jsx)("div",{className:M().content,id:"mdx",children:t}),(0,a.jsx)(E,{})]})]})]})}function z(e){return n=>{let{children:t}=n;return(0,a.jsx)(A,{meta:e,children:t})}}},50359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},97631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},14251:function(e){e.exports={root:"MdxInfo_root___n6Nr",icon:"MdxInfo_icon__9t9jJ"}},19169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},95372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},80207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},31379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}},46141:function(e,n,t){"use strict";t.d(n,{P:function(){return x}});var a=t(67294),l=t(88565),r=t(69429),o=t(13637),s=t(90987),i=t(39581),c=t(43362),d=t(91166);let u=(0,a.forwardRef)(({size:e="var(--cb-icon-size, 70%)",style:n,...t},l)=>a.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...n,width:e,height:e},ref:l,...t},a.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})));u.displayName="@mantine/core/CloseIcon";var h={root:"m-86a44da5","root--subtle":"m-220c80f2"};let m={variant:"subtle"},p=(0,o.Z)((e,{size:n,radius:t,iconSize:a})=>({root:{"--cb-size":(0,r.ap)(n,"cb-size"),"--cb-radius":void 0===t?void 0:(0,r.H5)(t),"--cb-icon-size":(0,l.h)(a)}})),x=(0,c.b)((e,n)=>{let t=(0,s.w)("CloseButton",m,e),{iconSize:l,children:r,vars:o,radius:c,className:x,classNames:b,style:f,styles:v,unstyled:_,"data-disabled":g,disabled:j,variant:y,icon:N,...w}=t,k=(0,i.y)({name:"CloseButton",props:t,className:x,style:f,classes:h,classNames:b,styles:v,unstyled:_,vars:o,varsResolver:p});return a.createElement(d.k,{ref:n,...w,unstyled:_,variant:y,disabled:j,mod:{disabled:j||g},...k("root",{variant:y,active:!0})},N||a.createElement(u,null),r)});x.classes=h,x.displayName="@mantine/core/CloseButton"},19784:function(e,n,t){"use strict";t.d(n,{h:function(){return o}}),t(67294);var a=t(65984),l=t(30202),r=t(98489);function o({classNames:e,styles:n,props:t,stylesCtx:o}){let s=(0,a.rZ)();return{resolvedClassNames:(0,l.m)({theme:s,classNames:e,props:t,stylesCtx:o||void 0}),resolvedStyles:(0,r.i)({theme:s,styles:n,props:t,stylesCtx:o||void 0})}}}},function(e){e.O(0,[3671,2358,9774,2888,179],function(){return e(e.s=19722)}),_N_E=e.O()}]);