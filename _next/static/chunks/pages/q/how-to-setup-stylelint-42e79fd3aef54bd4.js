(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3119],{1494:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/how-to-setup-stylelint",function(){return t(8547)}])},8547:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c},meta:function(){return a}});var s=t(5893),l=t(6635),i=t(5669);let a={title:"How can I lint CSS files?",description:"Learn how to setup Stylelint for Mantine postcss syntax",slug:"how-to-setup-stylelint",category:"tooling",tags:["stylelint","lint","postcss"],created_at:"December 27, 2023",last_updated_at:"December 27, 2023"},o=(0,i.A)(a);function r(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...n.components},{InstallScript:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("InstallScript",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://stylelint.io/",children:"Stylelint"})," is a tool to lint CSS and CSS like files.\nTo get started install ",(0,s.jsx)(e.code,{children:"stylelint"})," and ",(0,s.jsx)(e.code,{children:"stylelint-config-standard-scss"})," packages:"]}),"\n",(0,s.jsx)(t,{packages:"stylelint stylelint-config-standard-scss"}),"\n",(0,s.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(e.p,{children:["Create ",(0,s.jsx)(e.code,{children:".stylelintrc.json"})," file at your project root with the following content:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "extends": ["stylelint-config-standard-scss"],\n  "rules": {\n    "scss/no-duplicate-mixins": null,\n    "scss/at-mixin-pattern": null,\n    "scss/at-rule-no-unknown": null,\n    "selector-pseudo-class-no-unknown": [\n      true,\n      {\n        "ignorePseudoClasses": ["global"]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"The rules above are required to make Stylelint work with Mantine components."}),"\n",(0,s.jsx)(e.h2,{id:"mantine-stylelint-config",children:"Mantine Stylelint config"}),"\n",(0,s.jsxs)(e.p,{children:["If you want to have the same Stylelint configuration as Mantine, change ",(0,s.jsx)(e.code,{children:".stylelintrc.json"})," content to the following:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "extends": ["stylelint-config-standard-scss"],\n  "rules": {\n    "custom-property-pattern": null,\n    "selector-class-pattern": null,\n    "scss/no-duplicate-mixins": null,\n    "declaration-empty-line-before": null,\n    "declaration-block-no-redundant-longhand-properties": null,\n    "alpha-value-notation": null,\n    "custom-property-empty-line-before": null,\n    "property-no-vendor-prefix": null,\n    "color-function-notation": null,\n    "length-zero-no-unit": null,\n    "selector-not-notation": null,\n    "no-descending-specificity": null,\n    "comment-empty-line-before": null,\n    "scss/at-mixin-pattern": null,\n    "scss/at-rule-no-unknown": null,\n    "value-keyword-case": null,\n    "media-feature-range-notation": null,\n    "selector-pseudo-class-no-unknown": [\n      true,\n      {\n        "ignorePseudoClasses": ["global"]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"additional-tools",children:"Additional tools"}),"\n",(0,s.jsxs)(e.p,{children:["Add npm script to your ",(0,s.jsx)(e.code,{children:"package.json"})," to lint all css files in your project:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "scripts": {\n    "stylelint": "stylelint \'**/*.css\' --cache"\n  }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["To enable linting in your editor, install ",(0,s.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",children:"stylelint VSCode extension"}),"."]})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,{...n,children:(0,s.jsx)(r,{...n})})}},6635:function(n,e,t){"use strict";t.d(e,{a:function(){return E}});var s=t(5893),l=t(512),i=t(8008),a=t(967),Image=t(929),o=t(6536),r=t(5046),c=t(6283);t(7294);var d=t(3520),u=t(7529),h=t(747),p=t(8543),x=t(9169),m=t.n(x);function f(n){let{yarnScript:e,npmScript:t}=n,[l,i]=(0,d._)({key:"script-tab",defaultValue:0});return(0,s.jsx)(p.Q,{classNames:{root:m().root},activeTab:l,onTabChange:i,code:[{fileName:"yarn",code:e,language:"bash",icon:(0,s.jsx)(u.z,{className:m().icon,size:16})},{fileName:"npm",code:t,language:"bash",icon:(0,s.jsx)(h._,{className:m().icon,size:16})}]})}function j(n){let{packages:e,dev:t}=n;return(0,s.jsx)(f,{yarnScript:"yarn add ".concat(t?"--dev ":"").concat(e),npmScript:"npm install ".concat(t?"--save-dev ":"").concat(e)})}var _=t(359),g=t.n(_);function y(n){let{id:e,children:t,order:a=2,...o}=n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:e,"data-heading":t,"data-order":a,className:g().titleOffset}),(0,s.jsx)(i.D,{order:a,className:g().title,...o,children:(0,s.jsx)("a",{className:(0,l.Z)(g().titleLink,"mantine-focus-auto"),href:"#".concat(e),children:t})})]})}let k=n=>e=>(0,s.jsx)(y,{order:n,...e});function v(n){let{children:e}=n;return(0,s.jsx)(c.P,{className:g().code,code:e.props.children,language:function(n){let e=(n.props.className||"").match(RegExp("language-(?<lang>.*)"));return e&&e.groups&&e.groups.lang?e.groups.lang:"tsx"}(e)})}function N(n){return(0,s.jsx)("p",{className:g().paragraph,...n})}function b(n){return(0,s.jsx)("ul",{className:g().ul,...n})}function w(n){return(0,s.jsx)("li",{className:g().li,...n})}function M(n){let{href:e,...t}=n;return(0,s.jsx)(a.e,{className:g().link,href:e,...t})}function E(n){return{img:Image.E,ul:b,li:w,p:N,a:M,code:o.E,h1:k(1),h2:k(2),h3:k(3),h4:k(4),h5:k(5),h6:k(6),pre:v,Demo:r.B,InstallScript:j,...n}}},5669:function(n,e,t){"use strict";t.d(e,{A:function(){return k}});var s=t(5893),l=t(9008),i=t.n(l),a=t(1664),o=t.n(a),r=t(3507),c=t(471),d=t(6247),u=t(3078),h=t(967),p=t(991),x=t(8008),Text=t(4410);t(7294);var m=t(207),f=t.n(m);function j(n){let{icon:e,children:t,link:l}=n,i=l?(0,s.jsxs)("a",{href:l,target:"_blank",className:f().body,rel:"noreferrer",children:[(0,s.jsx)("div",{className:f().icon,children:e}),(0,s.jsx)("div",{className:f().content,children:t})]}):(0,s.jsxs)("div",{className:f().body,children:[(0,s.jsx)("div",{className:f().icon,children:e}),(0,s.jsx)("div",{className:f().content,children:t})]});return(0,s.jsx)("div",{className:f().root,children:i})}var _=t(5372),g=t.n(_);function y(n){let{meta:e,children:t}=n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i(),{children:(0,s.jsx)("title",{children:"".concat(e.title," | Mantine")})}),(0,s.jsxs)("article",{children:[(0,s.jsx)("header",{className:g().header,children:(0,s.jsxs)(u.W,{size:"md",children:[(0,s.jsx)(h.e,{component:o(),href:"/",underline:"hover",fz:"sm",children:(0,s.jsxs)(p.M,{inline:!0,component:"span",style:{gap:5},children:[(0,s.jsx)(r.Z,{size:18,stroke:1.5}),(0,s.jsx)("span",{children:"Back to all questions"})]})}),(0,s.jsx)(x.D,{className:g().title,children:e.title}),(0,s.jsxs)("nav",{className:g().links,children:[(0,s.jsx)(j,{icon:(0,s.jsx)(c.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/blob/master/src/pages/q/".concat(e.slug,".mdx"),children:"Edit this page on GitHub"}),(0,s.jsx)(j,{icon:(0,s.jsx)(d.Z,{size:18,stroke:1.5}),link:"https://github.com/mantinedev/help.mantine.dev/issues/new?template=article_report.yml&title=".concat(encodeURIComponent("Issue with article ".concat(e.title))),children:"Report issue with the article"})]}),(0,s.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,s.jsx)(Text.x,{component:"time",dateTime:new Date(e.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:e.last_updated_at})]})]})}),(0,s.jsx)(u.W,{size:"md",children:t})]})]})}function k(n){return e=>{let{children:t}=e;return(0,s.jsx)(y,{meta:n,children:t})}}},359:function(n){n.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},9169:function(n){n.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},5372:function(n){n.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L"}},207:function(n){n.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}}},function(n){n.O(0,[1577,9774,2888,179],function(){return n(n.s=1494)}),_N_E=n.O()}]);