"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{2470:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(853).Z)("arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]])},576:function(e,t,r){r.d(t,{i:function(){return f}});var n=r(7294),s=r(9429),i=r(3637),o=r(2979),l=r(987),c=r(9581),a=r(5437),h=r(9535),u={root:"m-3eebeb36",label:"m-9e365f20"};let d={orientation:"horizontal"},g=(0,i.Z)((e,{color:t,variant:r,size:n})=>({root:{"--divider-color":t?(0,o.p)(t,e):void 0,"--divider-border-style":r,"--divider-size":(0,s.ap)(n,"divider-size")}})),f=(0,h.d)((e,t)=>{let r=(0,l.w)("Divider",d,e),{classNames:s,className:i,style:o,styles:h,unstyled:f,vars:p,color:m,orientation:y,label:x,labelPosition:v,...M}=r,k=(0,c.y)({name:"Divider",classes:u,props:r,className:i,style:o,classNames:s,styles:h,unstyled:f,vars:p,varsResolver:g});return n.createElement(a.x,{ref:t,mod:{orientation:y,"with-label":!!x},...k("root"),...M,role:"separator"},x&&n.createElement(a.x,{component:"span",mod:{position:v},...k("label")},x))});f.classes=u,f.displayName="@mantine/core/Divider"},7800:function(e,t,r){r.d(t,{p:function(){return g}});var n=r(7294),s=r(9429),i=r(3637),o=r(987),l=r(9581),c=r(5437),a=r(9535),h={root:"m-e9408a47","root--default":"m-84c9523a","root--filled":"m-ef274e49","root--unstyled":"m-eda993d3",legend:"m-90794832","legend--unstyled":"m-74ca27fe"};let u={variant:"default"},d=(0,i.Z)((e,{radius:t})=>({root:{"--fieldset-radius":void 0===t?void 0:(0,s.H5)(t)}})),g=(0,a.d)((e,t)=>{let r=(0,o.w)("Fieldset",u,e),{classNames:s,className:i,style:a,styles:g,unstyled:f,vars:p,legend:m,variant:y,children:x,...v}=r,M=(0,l.y)({name:"Fieldset",classes:h,props:r,className:i,style:a,classNames:s,styles:g,unstyled:f,vars:p,varsResolver:d});return n.createElement(c.x,{component:"fieldset",ref:t,variant:y,...M("root",{variant:y}),...v},m&&n.createElement("legend",{...M("legend",{variant:y})},m),x)});g.classes=h,g.displayName="@mantine/core/Fieldset"},8127:function(e,t,r){r.d(t,{y:function(){return x}});var n=r(7294),s=r(987),i=r(3362),o=r(3637),l=r(9581),c=r(5437),a=r(9535),h=r(1471);function u({color:e,theme:t,defaultShade:r}){let n=(0,h.E)({color:e,theme:t});return n.isThemeColor?void 0===n.shade?`var(--mantine-color-${n.color}-${r})`:`var(${n.variable})`:e}var d={root:"m-bcb3f3c2"};let g={color:"yellow"},f=(0,o.Z)((e,{color:t})=>({root:{"--mark-bg-dark":u({color:t,theme:e,defaultShade:5}),"--mark-bg-light":u({color:t,theme:e,defaultShade:2})}})),p=(0,a.d)((e,t)=>{let r=(0,s.w)("Mark",g,e),{classNames:i,className:o,style:a,styles:h,unstyled:u,vars:p,color:m,variant:y,...x}=r,v=(0,l.y)({name:"Mark",props:r,className:o,style:a,classes:d,classNames:i,styles:h,unstyled:u,vars:p,varsResolver:f});return n.createElement(c.x,{component:"mark",ref:t,variant:y,...v("root"),...x})});p.classes=d,p.displayName="@mantine/core/Mark";var Text=r(4410);function m(e){return e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")}let y={},x=(0,i.b)((e,t)=>{let{unstyled:r,children:i,highlight:o,highlightStyles:l,color:c,...a}=(0,s.w)("Highlight",y,e),h=function(e,t){if(null==t)return[{chunk:e,highlighted:!1}];let r=Array.isArray(t)?t.map(m):m(t),n=Array.isArray(r)?r.filter(e=>e.trim().length>0).length>0:""!==r.trim();if(!n)return[{chunk:e,highlighted:!1}];let s="string"==typeof r?r.trim():r.filter(e=>0!==e.trim().length).map(e=>e.trim()).sort((e,t)=>t.length-e.length).join("|"),i=RegExp(`(${s})`,"gi"),o=e.split(i).map(e=>({chunk:e,highlighted:i.test(e)})).filter(({chunk:e})=>e);return o}(i,o);return n.createElement(Text.x,{unstyled:r,ref:t,...a,__staticSelector:"Highlight"},h.map(({chunk:e,highlighted:t},s)=>t?n.createElement(p,{unstyled:r,key:s,color:c,style:l,"data-highlight":e},e):n.createElement("span",{key:s},e)))});x.classes=Text.x.classes,x.displayName="@mantine/core/Highlight"},3474:function(e,t,r){r.d(t,{M:function(){return v}});var n=r(7294),s=r(987),i=r(9581),o=r(3491),l=r(5437),c=r(9535),a=r(3877),h=r(8626),u=r(9429),d=r(2812);function g(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var f=r(5984),p=r(954);function m({spacing:e,verticalSpacing:t,cols:r,selector:s}){let i=(0,f.rZ)(),o=void 0===t?e:t,l=(0,h.L)({"--sg-spacing-x":(0,u.bG)(g(e)),"--sg-spacing-y":(0,u.bG)(g(o)),"--sg-cols":g(r)?.toString()}),c=(0,a.X)(i.breakpoints).reduce((t,n)=>(t[n]||(t[n]={}),"object"==typeof e&&void 0!==e[n]&&(t[n]["--sg-spacing-x"]=(0,u.bG)(e[n])),"object"==typeof o&&void 0!==o[n]&&(t[n]["--sg-spacing-y"]=(0,u.bG)(o[n])),"object"==typeof r&&void 0!==r[n]&&(t[n]["--sg-cols"]=r[n]),t),{}),m=(0,d.I)((0,a.X)(c),i).filter(e=>(0,a.X)(c[e.value]).length>0),y=m.map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:c[e.value]}));return n.createElement(p.f,{styles:l,media:y,selector:s})}var y={root:"m-2415a157"};let x={cols:1,spacing:"md"},v=(0,c.d)((e,t)=>{let r=(0,s.w)("SimpleGrid",x,e),{classNames:c,className:a,style:h,styles:u,unstyled:d,vars:g,cols:f,verticalSpacing:p,spacing:v,...M}=r,k=(0,i.y)({name:"SimpleGrid",classes:y,props:r,className:a,style:h,classNames:c,styles:u,unstyled:d,vars:g}),b=(0,o.m)();return n.createElement(n.Fragment,null,n.createElement(m,{...r,selector:`.${b}`}),n.createElement(l.x,{ref:t,...k("root",{className:b}),...M}))});v.classes=y,v.displayName="@mantine/core/SimpleGrid"},9386:function(e,t,r){function n(e){return Array.isArray?Array.isArray(e):"[object Array]"===h(e)}r.d(t,{Z:function(){return Q}});let s=1/0;function i(e){return"string"==typeof e}function o(e){return"number"==typeof e}function l(e){return"object"==typeof e}function c(e){return null!=e}function a(e){return!e.trim().length}function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let u=e=>`Invalid value for key ${e}`,d=e=>`Pattern length exceeds max of ${e}.`,g=e=>`Missing ${e} property in key`,f=e=>`Property 'weight' in key '${e}' must be a positive integer`,p=Object.prototype.hasOwnProperty;class m{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let r=y(e);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function y(e){let t=null,r=null,s=null,o=1,l=null;if(i(e)||n(e))s=e,t=x(e),r=v(e);else{if(!p.call(e,"name"))throw Error(g("name"));let n=e.name;if(s=n,p.call(e,"weight")&&(o=e.weight)<=0)throw Error(f(n));t=x(n),r=v(n),l=e.getFn}return{path:t,id:r,weight:o,src:s,getFn:l}}function x(e){return n(e)?e:e.split(".")}function v(e){return n(e)?e.join("."):e}var M={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let r=[],a=!1,u=(e,t,d)=>{if(c(e)){if(t[d]){var g,f;let p=t[d],m=e[p];if(c(m)){if(d===t.length-1&&(i(m)||o(m)||!0===(g=m)||!1===g||l(f=g)&&null!==f&&"[object Boolean]"==h(g)))r.push(null==m?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-s?"-0":t}(m));else if(n(m)){a=!0;for(let e=0,r=m.length;e<r;e+=1)u(m[e],t,d+1)}else t.length&&u(m,t,d+1)}}else r.push(e)}};return u(e,i(t)?t.split("."):t,0),a?r:r[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};let k=/[^ ]+/g;class b{constructor({getFn:e=M.getFn,fieldNormWeight:t=M.fieldNormWeight}={}){this.norm=function(e=1,t=3){let r=new Map,n=Math.pow(10,t);return{get(t){let s=t.match(k).length;if(r.has(s))return r.get(s);let i=1/Math.pow(s,.5*e),o=parseFloat(Math.round(i*n)/n);return r.set(s,o),o},clear(){r.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,i(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){let t=this.size();i(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,r=this.size();t<r;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!c(e)||a(e))return;let r={v:e,i:t,n:this.norm.get(e)};this.records.push(r)}_addObject(e,t){let r={i:t,$:{}};this.keys.forEach((t,s)=>{let o=t.getFn?t.getFn(e):this.getFn(e,t.path);if(c(o)){if(n(o)){let e=[],t=[{nestedArrIndex:-1,value:o}];for(;t.length;){let{nestedArrIndex:r,value:s}=t.pop();if(c(s)){if(i(s)&&!a(s)){let t={v:s,i:r,n:this.norm.get(s)};e.push(t)}else n(s)&&s.forEach((e,r)=>{t.push({nestedArrIndex:r,value:e})})}}r.$[s]=e}else if(i(o)&&!a(o)){let e={v:o,n:this.norm.get(o)};r.$[s]=e}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function _(e,t,{getFn:r=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){let s=new b({getFn:r,fieldNormWeight:n});return s.setKeys(e.map(y)),s.setSources(t),s.create(),s}function E(e,{errors:t=0,currentLocation:r=0,expectedLocation:n=0,distance:s=M.distance,ignoreLocation:i=M.ignoreLocation}={}){let o=t/e.length;if(i)return o;let l=Math.abs(n-r);return s?o+l/s:l?1:o}class ${constructor(e,{location:t=M.location,threshold:r=M.threshold,distance:n=M.distance,includeMatches:s=M.includeMatches,findAllMatches:i=M.findAllMatches,minMatchCharLength:o=M.minMatchCharLength,isCaseSensitive:l=M.isCaseSensitive,ignoreLocation:c=M.ignoreLocation}={}){if(this.options={location:t,threshold:r,distance:n,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let a=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let r=0,n=e.length;r<n;r+=1){let s=e.charAt(r);t[s]=(t[s]||0)|1<<n-r-1}return t}(e),startIndex:t})},h=this.pattern.length;if(h>32){let e=0,t=h%32,r=h-t;for(;e<r;)a(this.pattern.substr(e,32),e),e+=32;if(t){let e=h-32;a(this.pattern.substr(e),e)}}else a(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,includeMatches:r}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:n,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:l,ignoreLocation:c}=this.options,a=[],h=0,u=!1;this.chunks.forEach(({pattern:t,alphabet:g,startIndex:f})=>{let{isMatch:p,score:m,indices:y}=function(e,t,r,{location:n=M.location,distance:s=M.distance,threshold:i=M.threshold,findAllMatches:o=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,includeMatches:c=M.includeMatches,ignoreLocation:a=M.ignoreLocation}={}){let h;if(t.length>32)throw Error(d(32));let u=t.length,g=e.length,f=Math.max(0,Math.min(n,g)),p=i,m=f,y=l>1||c,x=y?Array(g):[];for(;(h=e.indexOf(t,m))>-1;)if(p=Math.min(E(t,{currentLocation:h,expectedLocation:f,distance:s,ignoreLocation:a}),p),m=h+u,y){let e=0;for(;e<u;)x[h+e]=1,e+=1}m=-1;let v=[],k=1,b=u+g,_=1<<u-1;for(let n=0;n<u;n+=1){let i=0,l=b;for(;i<l;){let e=E(t,{errors:n,currentLocation:f+l,expectedLocation:f,distance:s,ignoreLocation:a});e<=p?i=l:b=l,l=Math.floor((b-i)/2+i)}b=l;let c=Math.max(1,f-l+1),h=o?g:Math.min(f+l,g)+u,d=Array(h+2);d[h+1]=(1<<n)-1;for(let i=h;i>=c;i-=1){let o=i-1,l=r[e.charAt(o)];if(y&&(x[o]=+!!l),d[i]=(d[i+1]<<1|1)&l,n&&(d[i]|=(v[i+1]|v[i])<<1|1|v[i+1]),d[i]&_&&(k=E(t,{errors:n,currentLocation:o,expectedLocation:f,distance:s,ignoreLocation:a}))<=p){if(p=k,(m=o)<=f)break;c=Math.max(1,2*f-m)}}let M=E(t,{errors:n+1,currentLocation:f,expectedLocation:f,distance:s,ignoreLocation:a});if(M>p)break;v=d}let $={isMatch:m>=0,score:Math.max(.001,k)};if(y){let e=function(e=[],t=M.minMatchCharLength){let r=[],n=-1,s=-1,i=0;for(let o=e.length;i<o;i+=1){let o=e[i];o&&-1===n?n=i:o||-1===n||((s=i-1)-n+1>=t&&r.push([n,s]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}(x,l);e.length?c&&($.indices=e):$.isMatch=!1}return $}(e,t,g,{location:n+f,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:l,includeMatches:r,ignoreLocation:c});p&&(u=!0),h+=m,p&&y&&(a=[...a,...y])});let g={isMatch:u,score:u?h/this.chunks.length:1};return u&&r&&(g.indices=a),g}}class w{constructor(e){this.pattern=e}static isMultiMatch(e){return A(e,this.multiRegex)}static isSingleMatch(e){return A(e,this.singleRegex)}search(){}}function A(e,t){let r=e.match(t);return r?r[1]:null}class S extends w{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class I extends w{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=e.indexOf(this.pattern),r=-1===t;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class N extends w{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class L extends w{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class R extends w{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class C extends w{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class F extends w{constructor(e,{location:t=M.location,threshold:r=M.threshold,distance:n=M.distance,includeMatches:s=M.includeMatches,findAllMatches:i=M.findAllMatches,minMatchCharLength:o=M.minMatchCharLength,isCaseSensitive:l=M.isCaseSensitive,ignoreLocation:c=M.ignoreLocation}={}){super(e),this._bitapSearch=new $(e,{location:t,threshold:r,distance:n,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class j extends w{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,r=0,n=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,r))>-1;)r=t+s,n.push([t,r-1]);let i=!!n.length;return{isMatch:i,score:i?0:1,indices:n}}}let O=[S,j,N,L,C,R,I,F],W=O.length,P=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,z=new Set([F.type,j.type]);class T{constructor(e,{isCaseSensitive:t=M.isCaseSensitive,includeMatches:r=M.includeMatches,minMatchCharLength:n=M.minMatchCharLength,ignoreLocation:s=M.ignoreLocation,findAllMatches:i=M.findAllMatches,location:o=M.location,threshold:l=M.threshold,distance:c=M.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:r,minMatchCharLength:n,findAllMatches:i,ignoreLocation:s,location:o,threshold:l,distance:c},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map(e=>{let r=e.trim().split(P).filter(e=>e&&!!e.trim()),n=[];for(let e=0,s=r.length;e<s;e+=1){let s=r[e],i=!1,o=-1;for(;!i&&++o<W;){let e=O[o],r=e.isMultiMatch(s);r&&(n.push(new e(r,t)),i=!0)}if(!i)for(o=-1;++o<W;){let e=O[o],r=e.isSingleMatch(s);if(r){n.push(new e(r,t));break}}}return n})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let s=0,i=[],o=0;for(let n=0,l=t.length;n<l;n+=1){let l=t[n];i.length=0,s=0;for(let t=0,n=l.length;t<n;t+=1){let n=l[t],{isMatch:c,indices:a,score:h}=n.search(e);if(c){if(s+=1,o+=h,r){let e=n.constructor.type;z.has(e)?i=[...i,...a]:i.push(a)}}else{o=0,s=0,i.length=0;break}}if(s){let e={isMatch:!0,score:o/s};return r&&(e.indices=i),e}}return{isMatch:!1,score:1}}}let D=[];function G(e,t){for(let r=0,n=D.length;r<n;r+=1){let n=D[r];if(n.condition(e,t))return new n(e,t)}return new $(e,t)}let H={AND:"$and",OR:"$or"},Z={PATH:"$path",PATTERN:"$val"},K=e=>!!(e[H.AND]||e[H.OR]),q=e=>!!e[Z.PATH],J=e=>!n(e)&&l(e)&&!K(e),X=e=>({[H.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function U(e,t,{auto:r=!0}={}){let s=e=>{let o=Object.keys(e),l=q(e);if(!l&&o.length>1&&!K(e))return s(X(e));if(J(e)){let n=l?e[Z.PATH]:o[0],s=l?e[Z.PATTERN]:e[n];if(!i(s))throw Error(u(n));let c={keyId:v(n),pattern:s};return r&&(c.searcher=G(s,t)),c}let c={children:[],operator:o[0]};return o.forEach(t=>{let r=e[t];n(r)&&r.forEach(e=>{c.children.push(s(e))})}),c};return K(e)||(e=X(e)),s(e)}function V(e,t){let r=e.matches;t.matches=[],c(r)&&r.forEach(e=>{if(!c(e.indices)||!e.indices.length)return;let{indices:r,value:n}=e,s={indices:r,value:n};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)})}function B(e,t){t.score=e.score}class Q{constructor(e,t={},r){this.options={...M,...t},this.options.useExtendedSearch,this._keyStore=new m(this.options.keys),this.setCollection(e,r)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof b))throw Error("Incorrect 'index' type");this._myIndex=t||_(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){c(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let r=0,n=this._docs.length;r<n;r+=1){let s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,n-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:r,includeScore:n,shouldSort:s,sortFn:l,ignoreFieldNorm:c}=this.options,a=i(e)?i(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return!function(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){e.forEach(e=>{let r=1;e.matches.forEach(({key:e,norm:n,score:s})=>{let i=e?e.weight:null;r*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(t?1:n))}),e.score=r})}(a,{ignoreFieldNorm:c}),s&&a.sort(l),o(t)&&t>-1&&(a=a.slice(0,t)),function(e,t,{includeMatches:r=M.includeMatches,includeScore:n=M.includeScore}={}){let s=[];return r&&s.push(V),n&&s.push(B),e.map(e=>{let{idx:r}=e,n={item:t[r],refIndex:r};return s.length&&s.forEach(t=>{t(e,n)}),n})}(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){let t=G(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:e,i:r,n:s})=>{if(!c(e))return;let{isMatch:i,score:o,indices:l}=t.searchIn(e);i&&n.push({item:e,idx:r,matches:[{score:o,value:e,norm:s,indices:l}]})}),n}_searchLogical(e){let t=U(e,this.options),r=(e,t,n)=>{if(!e.children){let{keyId:r,searcher:s}=e,i=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:s});return i&&i.length?[{idx:n,item:t,matches:i}]:[]}let s=[];for(let i=0,o=e.children.length;i<o;i+=1){let o=e.children[i],l=r(o,t,n);if(l.length)s.push(...l);else if(e.operator===H.AND)return[]}return s},n=this._myIndex.records,s={},i=[];return n.forEach(({$:e,i:n})=>{if(c(e)){let o=r(t,e,n);o.length&&(s[n]||(s[n]={idx:n,item:e,matches:[]},i.push(s[n])),o.forEach(({matches:e})=>{s[n].matches.push(...e)}))}}),i}_searchObjectList(e){let t=G(e,this.options),{keys:r,records:n}=this._myIndex,s=[];return n.forEach(({$:e,i:n})=>{if(!c(e))return;let i=[];r.forEach((r,n)=>{i.push(...this._findMatches({key:r,value:e[n],searcher:t}))}),i.length&&s.push({idx:n,item:e,matches:i})}),s}_findMatches({key:e,value:t,searcher:r}){if(!c(t))return[];let s=[];if(n(t))t.forEach(({v:t,i:n,n:i})=>{if(!c(t))return;let{isMatch:o,score:l,indices:a}=r.searchIn(t);o&&s.push({score:l,key:e,value:t,idx:n,norm:i,indices:a})});else{let{v:n,n:i}=t,{isMatch:o,score:l,indices:c}=r.searchIn(n);o&&s.push({score:l,key:e,value:n,norm:i,indices:c})}return s}}Q.version="7.0.0",Q.createIndex=_,Q.parseIndex=function(e,{getFn:t=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){let{keys:n,records:s}=e,i=new b({getFn:t,fieldNormWeight:r});return i.setKeys(n),i.setIndexRecords(s),i},Q.config=M,Q.parseQuery=U,function(...e){D.push(...e)}(T)}}]);