(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2916],{18054:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/how-to-use-dropzone-with-form",function(){return o(8191)}])},8191:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return h},meta:function(){return f}});var t=o(85893),r=o(25190);o(67294);var Text=o(54410),s=o(46141),i=o(90991),l=o(44886),c=o(62352),a=o(97179);let d={type:"code",component:function(){let e=(0,a.c)({initialValues:{files:[]}}),n=e.values.files.map((n,o)=>(0,t.jsxs)(Text.x,{children:[(0,t.jsx)("b",{children:n.name})," (",(n.size/1024).toFixed(2)," kb)",(0,t.jsx)(s.P,{size:"xs",onClick:()=>e.setFieldValue("files",e.values.files.filter((e,n)=>n!==o))})]},n.name));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.fh,{h:120,p:0,multiple:!0,accept:[c.LO.png,c.LO.jpeg,c.LO.svg],onDrop:n=>e.setFieldValue("files",n),onReject:()=>e.setFieldError("files","Select images only"),children:(0,t.jsxs)(i.M,{h:120,children:[(0,t.jsx)(l.fh.Idle,{children:"Drop files here"}),(0,t.jsx)(l.fh.Accept,{children:"Drop files here"}),(0,t.jsx)(l.fh.Reject,{children:"Files are invalid"})]})}),e.errors.files&&(0,t.jsx)(Text.x,{c:"red",mt:5,children:e.errors.files}),n.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Text.x,{mb:5,mt:"md",children:"Selected files:"}),n]})]})},code:"\nimport { useForm } from '@mantine/form';\nimport { Dropzone, MIME_TYPES } from '@mantine/dropzone';\nimport { Center, Text, CloseButton } from '@mantine/core';\n\ninterface FormValues {\n  files: File[];\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    initialValues: { files: [] },\n  });\n\n  const selectedFiles = form.values.files.map((file, index) => (\n    <Text key={file.name}>\n      <b>{file.name}</b> ({(file.size / 1024).toFixed(2)} kb)\n      <CloseButton\n        size=\"xs\"\n        onClick={() =>\n          form.setFieldValue(\n            'files',\n            form.values.files.filter((_, i) => i !== index)\n          )\n        }\n      />\n    </Text>\n  ));\n\n  return (\n    <>\n      <Dropzone\n        h={120}\n        p={0}\n        multiple\n        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]}\n        onDrop={(files) => form.setFieldValue('files', files)}\n        onReject={() => form.setFieldError('files', 'Select images only')}\n      >\n        <Center h={120}>\n          <Dropzone.Idle>Drop files here</Dropzone.Idle>\n          <Dropzone.Accept>Drop files here</Dropzone.Accept>\n          <Dropzone.Reject>Files are invalid</Dropzone.Reject>\n        </Center>\n      </Dropzone>\n\n      {form.errors.files && (\n        <Text c=\"red\" mt={5}>\n          {form.errors.files}\n        </Text>\n      )}\n\n      {selectedFiles.length > 0 && (\n        <>\n          <Text mb={5} mt=\"md\">\n            Selected files:\n          </Text>\n          {selectedFiles}\n        </>\n      )}\n    </>\n  );\n}\n"};var u=o(37141);let f={title:"How to use Dropzone with @mantine/form?",description:"Learn how to use Dropzone with @mantine/form to handle file selection state",slug:"how-to-use-dropzone-with-form",category:"forms",tags:["form","@mantine/form","dropzone"],created_at:"December 1, 2023",last_updated_at:"December 1, 2023"},m=(0,u.A)(f);function p(e){let n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://mantine.dev/others/dropzone/",children:"@mantine/dropzone"})," package provides ",(0,t.jsx)(n.code,{children:"Dropzone"}),"\ncomponent which allows to drag and drop files from your computer or select them using\nthe file picker. Its purpose is to handle file selection, it does not store files state,\ndoes not display selected files and does not upload them to the server."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://mantine.dev/form/use-form/",children:"use-form"})," hook handles form state, validation,\nerror messages and form submission. You can integrate any input or React component\nwith ",(0,t.jsx)(n.code,{children:"use-form"})," hook using the following form object properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"form.values.x"})," – value of the input"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"form.errors.x"})," – error message for the input"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"form.setFieldValue('x', value)"})," – function to set input value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"form.setFieldError('x', 'error-message')"})," – function to set input error message"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Using these properties you can integrate ",(0,t.jsx)(n.code,{children:"Dropzone"})," with ",(0,t.jsx)(n.code,{children:"use-form"})," hook:"]}),"\n",(0,t.jsx)(o,{data:d})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(p,{...e})})}},46141:function(e,n,o){"use strict";o.d(n,{P:function(){return h}});var t=o(67294),r=o(88565),s=o(69429),i=o(13637),l=o(90987),c=o(39581),a=o(43362),d=o(91166);let u=(0,t.forwardRef)(({size:e="var(--cb-icon-size, 70%)",style:n,...o},r)=>t.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...n,width:e,height:e},ref:r,...o},t.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})));u.displayName="@mantine/core/CloseIcon";var f={root:"m-86a44da5","root--subtle":"m-220c80f2"};let m={variant:"subtle"},p=(0,i.Z)((e,{size:n,radius:o,iconSize:t})=>({root:{"--cb-size":(0,s.ap)(n,"cb-size"),"--cb-radius":void 0===o?void 0:(0,s.H5)(o),"--cb-icon-size":(0,r.h)(t)}})),h=(0,a.b)((e,n)=>{let o=(0,l.w)("CloseButton",m,e),{iconSize:r,children:s,vars:i,radius:a,className:h,classNames:x,style:v,styles:j,unstyled:g,"data-disabled":b,disabled:w,variant:z,icon:C,...y}=o,D=(0,c.y)({name:"CloseButton",props:o,className:h,style:v,classes:f,classNames:x,styles:j,unstyled:g,vars:i,varsResolver:p});return t.createElement(d.k,{ref:n,...y,unstyled:g,variant:z,disabled:w,mod:{disabled:w||b},...D("root",{variant:z,active:!0})},C||t.createElement(u,null),s)});h.classes=f,h.displayName="@mantine/core/CloseButton"},39151:function(e,n,o){"use strict";o.d(n,{a:function(){return x}});var t=o(67294),r=o(88565),s=o(27045),i=o(69429),l=o(13637),c=o(57187),a=o(90987),d=o(39581),u=o(3468),f=o(43362),m={root:"m-9814e45f"};let p={zIndex:(0,s.w)("modal")},h=(0,l.Z)((e,{gradient:n,color:o,backgroundOpacity:t,blur:s,radius:l,zIndex:a})=>({root:{"--overlay-bg":n||(void 0!==o||void 0!==t)&&(0,c.m)(o||"#000",t??.6)||void 0,"--overlay-filter":s?`blur(${(0,r.h)(s)})`:void 0,"--overlay-radius":void 0===l?void 0:(0,i.H5)(l),"--overlay-z-index":a?.toString()}})),x=(0,f.b)((e,n)=>{let o=(0,a.w)("Overlay",p,e),{classNames:r,className:s,style:i,styles:l,unstyled:c,vars:f,fixed:x,center:v,children:j,radius:g,zIndex:b,gradient:w,blur:z,color:C,backgroundOpacity:y,...D}=o,E=(0,d.y)({name:"Overlay",props:o,classes:m,className:s,style:i,classNames:r,styles:l,unstyled:c,vars:f,varsResolver:h});return t.createElement(u.x,{ref:n,...E("root"),mod:{center:v,fixed:x},...D},j)});x.classes=m,x.displayName="@mantine/core/Overlay"},19784:function(e,n,o){"use strict";o.d(n,{h:function(){return i}}),o(67294);var t=o(65984),r=o(30202),s=o(98489);function i({classNames:e,styles:n,props:o,stylesCtx:i}){let l=(0,t.rZ)();return{resolvedClassNames:(0,r.m)({theme:l,classNames:e,props:o,stylesCtx:i||void 0}),resolvedStyles:(0,s.i)({theme:l,styles:n,props:o,stylesCtx:i||void 0})}}},37113:function(e,n,o){"use strict";o.d(n,{q:function(){return r}});var t=o(67294);function r(e=!1,n){let{onOpen:o,onClose:r}=n||{},[s,i]=(0,t.useState)(e),l=(0,t.useCallback)(()=>{i(e=>e||(o?.(),!0))},[o]),c=(0,t.useCallback)(()=>{i(e=>e?(r?.(),!1):e)},[r]),a=(0,t.useCallback)(()=>{s?c():l()},[c,l,s]);return[s,{open:l,close:c,toggle:a}]}}},function(e){e.O(0,[3671,2546,3455,9774,2888,179],function(){return e(e.s=18054)}),_N_E=e.O()}]);