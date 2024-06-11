import{ag as M,aq as N,ai as F,a as m,ah as e}from"./index-BxX9oQzF.js";import{c as f}from"./actions-DEpyQxvL.js";import{a as D,C as ae}from"./index-BpvfEvhx.js";import{ai as Y,a4 as k,ak as U,V as O,a3 as X,e as le,C as ce,a2 as z,a1 as A,S as re,ac as ie,ad as ee,a6 as de,aj as ue,a7 as pe}from"./IdurarOs-CQjgBJE3.js";import{d as P,P as xe}from"./index-DHqt5pnV.js";import{v as te,R as me}from"./helpers-D4BobF0Y.js";import{M as he}from"./index-DxAM6omY.js";import{S as fe,c as je}from"./countryList-gEXmdXv6.js";import{s as J}from"./index-KrFx5yLV.js";import{c as be}from"./color-DHucoY0N.js";import{T as E}from"./index-If0JhGlO.js";import{a as se,u as Se}from"./useDate-DWLKj03u.js";import{u as Ce}from"./useDebounce-Bp03-dRO.js";import{g as ge,S as Q,m as ye,D as Te,E as Ie,r as Be}from"./ErpApp-CWghZTV0.js";import{D as ne}from"./DeleteOutlined-V_cXazmM.js";import{A as De,a as ve}from"./ArrowRightOutlined-DuWjr1U7.js";import{F as we}from"./Table-Dumz0gRW.js";import{P as Ee}from"./PlusOutlined-BN2tvqNR.js";function Ae(){return ge()}const Le={useBreakpoint:Ae},R=n=>n.crud,oe=M([R],n=>n.current),Fe=M([R],n=>n.list),Oe=M([R],n=>n.create),_e=M([R],n=>n.update);M([R],n=>n.read);const Pe=M([R],n=>n.delete),Ye=M([R],n=>n.search);function Me({config:n,formElements:t,withUpload:r=!1}){let{entity:c}=n;const i=N(),{isLoading:o,isSuccess:s}=F(Oe),{crudContextAction:d}=D(),{panel:h,collapsedBox:j,readBox:S}=d,[p]=Y.useForm(),a=k(),l=x=>{x.file&&r&&(x.file=x.file[0].originFileObj),i(f.create({entity:c,jsonData:x,withUpload:r}))};return m.useEffect(()=>{s&&(S.open(),j.open(),h.open(),p.resetFields(),i(f.resetAction({actionType:"create"})),i(f.list({entity:c})))},[s]),e.jsx(U,{isLoading:o,children:e.jsxs(Y,{form:p,layout:"vertical",onFinish:l,children:[t,e.jsx(Y.Item,{children:e.jsx(O,{type:"primary",htmlType:"submit",children:a("Submit")})})]})})}function Ne({config:n,formElements:t,withUpload:r=!1}){let{entity:c}=n;const i=k(),o=N(),{current:s,isLoading:d,isSuccess:h}=F(_e),{state:j,crudContextAction:S}=D(),{panel:p,collapsedBox:a,readBox:l}=S,x=()=>{l.open()},[g]=Y.useForm(),y=u=>{const L=s._id;u.file&&r&&(u.file=u.file[0].originFileObj),o(f.update({entity:c,id:L,jsonData:u,withUpload:r}))};m.useEffect(()=>{if(s){let u={...s};u.birthday&&(u={...u,birthday:P(u.birthday).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),u.date&&(u={...u,date:P(u.date).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),u.expiredDate&&(u={...u,expiredDate:P(u.expiredDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),u.created&&(u={...u,created:P(u.created).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),u.updated&&(u={...u,updated:P(u.updated).format("YYYY-MM-DDTHH:mm:ss.SSSZ")}),g.resetFields(),g.setFieldsValue(u)}},[s]),m.useEffect(()=>{h&&(l.open(),a.open(),p.open(),g.resetFields(),o(f.resetAction({actionType:"update"})),o(f.list({entity:c})))},[h]);const{isEditBoxOpen:C}=j,I=C?{display:"block",opacity:1}:{display:"none",opacity:0};return e.jsx("div",{style:I,children:e.jsx(U,{isLoading:d,children:e.jsxs(Y,{form:g,layout:"vertical",onFinish:y,children:[t,e.jsx(Y.Item,{style:{display:"inline-block",paddingRight:"5px"},children:e.jsx(O,{type:"primary",htmlType:"submit",children:i("Save")})}),e.jsx(Y.Item,{style:{display:"inline-block",paddingLeft:"5px"},children:e.jsx(O,{onClick:x,children:i("Cancel")})})]})})})}function Re({config:n}){const t=k();let{entity:r,deleteModalLabels:c,deleteMessage:i=t("are_you_sure_you_want_to_delete"),modalTitle:o=t("delete_confirmation")}=n;const s=N(),{current:d,isLoading:h,isSuccess:j}=F(Pe),{state:S,crudContextAction:p}=D(),{appContextAction:a}=X(),{panel:l,readBox:x}=p,{navMenu:g}=a,{isModalOpen:y}=S,{modal:C}=p,[I,u]=m.useState("");m.useEffect(()=>{if(j&&(console.log("🚀 ~ useEffect ~ DeleteModal isSuccess:",j),C.close(),s(f.list({entity:r}))),d){let w=c.map(W=>te(d,W)).join(" ");u(w)}},[j,d]);const L=()=>{const w=d._id;s(f.delete({entity:r,id:w})),x.close(),C.close(),l.close(),g.collapse()},v=()=>{h||C.close()};return e.jsx(he,{title:o,open:y,onOk:L,onCancel:v,confirmLoading:h,children:e.jsxs("p",{children:[i,I]})})}const He=({fields:n,translate:t})=>{let r=[];return Object.keys(n).forEach(c=>{let i=n[c];r.push({title:i.label?i.label:c,dataIndex:i.dataIndex?i.dataIndex.join("."):c,isDate:i.type==="date"})}),r};function ke({fields:n,translate:t,moneyFormatter:r,dateFormat:c}){let i=[];return Object.keys(n).forEach(o=>{let s=n[o];const d=s.dataIndex?s.dataIndex:[o],h={boolean:{title:s.label?t(s.label):t(o),dataIndex:d,onCell:()=>({props:{style:{width:"60px"}}}),render:(p,a)=>e.jsx(fe,{checked:a[o],checkedChildren:e.jsx(le,{}),unCheckedChildren:e.jsx(ce,{})})},date:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>{const l=P(a[o]).format(c);return e.jsx(E,{bordered:!1,color:s.color,children:l})}},currency:{title:s.label?t(s.label):t(o),dataIndex:d,onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap"}}),render:(p,a)=>r({amount:a[o],currency_code:a.currency})},async:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>{var l;return e.jsx(E,{bordered:!1,color:s.color||((l=a[o])==null?void 0:l.color)||a.color,children:p})}},color:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>{var l;return e.jsx(E,{bordered:!1,color:p,children:(l=be.find(x=>x.value===p))==null?void 0:l.label})}},stringWithColor:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>e.jsx(E,{bordered:!1,color:a.color||s.color,children:p})},tag:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>e.jsx(E,{bordered:!1,color:s.color,children:a[o]&&a[o]})},selectWithFeedback:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>{if(s.renderAsTag){const l=s.options.find(x=>x.value===a[o]);return e.jsx(E,{bordered:!1,color:l==null?void 0:l.color,children:a[o]&&t(a[o])})}else return a[o]&&t(a[o])}},select:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>{if(s.renderAsTag){const l=s.options.find(x=>x.value===a[o]);return e.jsx(E,{bordered:!1,color:l==null?void 0:l.color,children:a[o]&&a[o]})}else return a[o]&&a[o]}},selectWithTranslation:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>{if(s.renderAsTag){const l=s.options.find(x=>x.value===a[o]);return e.jsx(E,{bordered:!1,color:l==null?void 0:l.color,children:a[o]&&t(a[o])})}else return a[o]&&t(a[o])}},array:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>a[o].map(l=>e.jsx(E,{bordered:!1,color:s.colors[l],children:l},`${J.generate()}`))},country:{title:s.label?t(s.label):t(o),dataIndex:d,render:(p,a)=>{const l=je.find(x=>x.value===a[o]);return e.jsxs(E,{bordered:!1,color:s.color||void 0,children:[(l==null?void 0:l.icon)&&(l==null?void 0:l.icon)+" ",(l==null?void 0:l.label)&&t(l.label)]})}}},j={title:s.label?t(s.label):t(o),dataIndex:d},S=s.type;s.disableForTable||(Object.keys(h).includes(S)?i.push(h[S]):i.push(j))}),i}function We({config:n}){const{dateFormat:t}=se();let{readColumns:r,fields:c}=n;const i=k(),{result:o}=F(oe),{state:s}=D(),{isReadBoxOpen:d}=s,[h,j]=m.useState([]);c&&(r=[...He({fields:c,translate:i})]),m.useEffect(()=>{const a=[];r.map(l=>{const x=l.dataIndex,g=l.title,y=l.isDate||!1;let C=te(o,x);C=y?P(C).format(t):C,a.push({propsKey:x,label:g,value:C})}),j(a)},[o]);const S=d?{display:"block",opacity:1}:{display:"none",opacity:0},p=h.map(a=>e.jsxs(z,{gutter:12,children:[e.jsx(A,{className:"gutter-row",span:8,children:e.jsx("p",{children:a.label})}),e.jsx(A,{className:"gutter-row",span:2,children:e.jsx("p",{children:" : "})}),e.jsx(A,{className:"gutter-row",span:14,children:e.jsx("p",{children:a.value})})]},a.propsKey));return e.jsx("div",{style:S,children:p})}function Ze({config:n,onRerender:t}){let{entity:r,searchConfig:c}=n;const{displayLabels:i,searchFields:o,outputValue:s="_id"}=c,d=N(),{crudContextAction:h}=D(),{panel:j,collapsedBox:S,readBox:p}=h,{result:a,isLoading:l,isSuccess:x}=F(Ye),[g,y]=m.useState([]),[C,I]=m.useState(void 0),u=m.useRef(!1),[L,v]=m.useState(!1),[w,W]=m.useState(""),[Z,K]=m.useState(""),[,V]=Ce(()=>{K(w)},500,[w]),B=T=>i.map(H=>T[H]).join(" ");m.useEffect(()=>{if(Z!=""){const T={q:Z,fields:o};d(f.search({entity:r,options:T}))}return()=>{V()}},[Z]);const q=T=>{T&&T!=""&&(u.current=!0,v(!0),y([]),I(void 0),W(T))},G=T=>{const H=a.find(b=>b[s]===T);d(f.currentItem({data:H})),j.open(),S.open(),p.open(),t()};return m.useEffect(()=>{u.current&&(x?y(a):(v(!1),I(void 0),y([])))},[x,a]),e.jsx(Q,{loading:l,showSearch:!0,allowClear:!0,placeholder:e.jsx(re,{style:{float:"right",padding:"8px 0"}}),defaultActiveFirstOption:!1,filterOption:!1,notFoundContent:L?"... Searching":e.jsx(ye,{}),value:C,onSearch:q,style:{width:"100%"},onSelect:G,children:g.map(T=>e.jsx(Q.Option,{value:T[s],children:B(T)},T[s]))})}function $e({config:n}){const[t,r]=m.useState([0]),c=()=>{r([t+1])};return t.map(i=>e.jsx(Ze,{config:n,onRerender:c},i))}function ze({config:n}){const{crudContextAction:t}=D(),{collapsedBox:r,panel:c}=t,{ADD_NEW_ENTITY:i}=n,o=()=>{c.open(),r.close()};return e.jsx(O,{onClick:o,type:"primary",children:i})}function qe({config:n,extra:t=[]}){let{entity:r,dataTableColumns:c,DATATABLE_TITLE:i,fields:o,searchConfig:s}=n;const{crudContextAction:d}=D(),{panel:h,collapsedBox:j,modal:S,readBox:p,editBox:a,advancedBox:l}=d,x=k(),{moneyFormatter:g}=Se(),{dateFormat:y}=se(),C=[{label:x("Show"),key:"read",icon:e.jsx(ie,{})},{label:x("Edit"),key:"edit",icon:e.jsx(ee,{})},...t,{type:"divider"},{label:x("Delete"),key:"delete",icon:e.jsx(ne,{})}],I=b=>{B(f.currentItem({data:b})),h.open(),j.open(),p.open()};function u(b){B(f.currentItem({data:b})),B(f.currentAction({actionType:"update",data:b})),a.open(),h.open(),j.open()}function L(b){B(f.currentAction({actionType:"delete",data:b})),S.open()}function v(b){B(f.currentItem({data:b})),B(f.currentAction({actionType:"update",data:b})),l.open(),h.open(),j.open()}let w=[];o?w=[...ke({fields:o,translate:x,moneyFormatter:g,dateFormat:y})]:w=[...c],c=[...w,{title:"",key:"action",fixed:"right",render:(b,_)=>e.jsx(Te,{menu:{items:C,onClick:({key:$})=>{switch($){case"read":I(_);break;case"edit":u(_);break;case"delete":L(_);break;case"updatePassword":v(_);break}}},trigger:["click"],children:e.jsx(Ie,{style:{cursor:"pointer",fontSize:"24px"},onClick:$=>$.preventDefault()})})}];const{result:W,isLoading:Z}=F(Fe),{pagination:K,items:V}=W,B=N(),q=m.useCallback(b=>{const _={page:b.current||1,items:b.pageSize||10};B(f.list({entity:r,options:_}))},[]),G=b=>{const $={q:b.target.value,fields:(s==null?void 0:s.searchFields)||""};B(f.list({entity:r,options:$}))},T=()=>{B(f.list({entity:r}))};m.useEffect(()=>{const b=new AbortController;return T(),()=>{b.abort()}},[]);const H=F(de);return e.jsxs(e.Fragment,{children:[e.jsx(xe,{onBack:()=>window.history.back(),backIcon:H==="rtl"?e.jsx(De,{}):e.jsx(ve,{}),title:i,ghost:!1,extra:[e.jsx(ue,{onChange:G,placeholder:x("search"),allowClear:!0},"searchFilterDataTable}"),e.jsx(O,{onClick:q,icon:e.jsx(me,{}),children:x("Refresh")},`${J.generate()}`),e.jsx(ze,{config:n},`${J.generate()}`)],style:{padding:"20px 0px",direction:H}}),e.jsx(we,{columns:c,rowKey:b=>b._id,dataSource:V,pagination:K,loading:Z,onChange:q,scroll:{x:!0}})]})}function Ke({children:n}){return e.jsx(ae,{children:n})}const Ve=({onChange:n,title:t})=>e.jsx("div",{className:"collapseBoxHeader",onClick:n,children:t}),Ge=({isOpen:n,children:t})=>{const r=n?{display:"block",opacity:1}:{display:"none",opacity:0};return e.jsx("div",{className:"TopCollapseBox",children:e.jsx("div",{style:r,children:e.jsx(z,{children:e.jsxs(A,{span:24,children:[" ",t]})})})})},Je=({isOpen:n,children:t})=>{const r=n?{display:"none",opacity:0}:{display:"block",opacity:1};return e.jsx("div",{className:"BottomCollapseBox",children:e.jsx("div",{style:r,children:e.jsx(z,{children:e.jsxs(A,{span:24,children:[" ",t]})})})})};function Qe({topContent:n,bottomContent:t,buttonTitle:r,isCollapsed:c,onCollapse:i}){const o=c?"collapsed":"";return e.jsxs(e.Fragment,{children:[e.jsx(Ge,{isOpen:c,children:n}),e.jsxs("div",{className:"collapseBox "+o,children:[e.jsx(Ve,{title:r,onChange:i}),e.jsx("div",{className:"whiteBg"}),e.jsx(Je,{isOpen:c,children:t})]})]})}const{useBreakpoint:Ue}=Le;function Xe({config:n,topContent:t,bottomContent:r,fixHeaderPanel:c}){Ue();const{ADD_NEW_ENTITY:i}=n,{state:o,crudContextAction:s}=D(),{isPanelClose:d,isBoxCollapsed:h}=o,{panel:j,collapsedBox:S}=s,[p,a]=m.useState(d),[l,x]=m.useState("-1px"),[g,y]=m.useState(0),[C,I]=m.useState("20px");m.useEffect(()=>{let v=[];return d?(y(0),I("20px"),v=setTimeout(()=>{x("-1px"),a(d)},200)):(a(d),x(0),v=setTimeout(()=>{y(1),I(0)},200)),()=>clearTimeout(v)},[d]);const u=()=>{j.collapse()},L=()=>{S.collapse()};return e.jsx(Be,{title:n.PANEL_TITLE,placement:"right",onClose:u,open:!d,width:450,children:e.jsxs("div",{className:"sidePanelContent",style:{opacity:g,paddingTop:C},children:[c,e.jsx(Qe,{buttonTitle:i,isCollapsed:h,onCollapse:L,topContent:t,bottomContent:r})]})})}const{Content:et}=pe,tt=({children:n})=>{const{state:t,crudContextAction:r}=D();X();const{isPanelClose:c}=t,[i,o]=m.useState(c);return m.useEffect(()=>{let s=[];return c?s=setTimeout(()=>{o(c)},200):o(c),()=>clearTimeout(s)},[c]),e.jsx(et,{className:"whiteBox shadow layoutPadding",style:{margin:"30px auto",width:"100%",maxWidth:"100%",flex:"none"},children:n})};function st({children:n,config:t,sidePanelTopContent:r,sidePanelBottomContent:c,fixHeaderPanel:i}){return e.jsx(e.Fragment,{children:e.jsxs(Ke,{children:[e.jsx(Xe,{config:t,topContent:r,bottomContent:c,fixHeaderPanel:i}),e.jsxs(tt,{children:[" ",n]})]})})}function nt({config:n,formElements:t,withUpload:r}){const c=k(),{crudContextAction:i,state:o}=D(),{deleteModalLabels:s}=n,{modal:d,editBox:h}=i,{isReadBoxOpen:j,isEditBoxOpen:S}=o,{result:p}=F(oe),a=N(),[l,x]=m.useState("");m.useEffect(()=>{if(p){const I=s.map(u=>p[u]).join(" ");x(I)}},[p]);const g=()=>{a(f.currentAction({actionType:"delete",data:p})),d.open()},y=()=>{a(f.currentAction({actionType:"update",data:p})),h.open()},C=j||S?{opacity:1}:{opacity:0};return e.jsxs(e.Fragment,{children:[e.jsxs(z,{style:C,gutter:24,children:[e.jsx(A,{span:10,children:e.jsx("p",{style:{marginBottom:"10px"},children:l})}),e.jsxs(A,{span:14,children:[e.jsx(O,{onClick:g,type:"text",icon:e.jsx(ne,{}),size:"small",style:{float:"right",marginLeft:"5px",marginTop:"10px"},children:c("remove")}),e.jsx(O,{onClick:y,type:"text",icon:e.jsx(ee,{}),size:"small",style:{float:"right",marginLeft:"0px",marginTop:"10px"},children:c("edit")})]}),e.jsx(A,{span:24,children:e.jsx("div",{className:"line"})}),e.jsx("div",{className:"space10"})]}),e.jsx(We,{config:n}),e.jsx(Ne,{config:n,formElements:t,withUpload:r})]})}function ot({config:n}){const{crudContextAction:t}=D(),{collapsedBox:r}=t,c=()=>{r.close()};return e.jsxs(z,{gutter:8,children:[e.jsx(A,{className:"gutter-row",span:21,children:e.jsx($e,{config:n})}),e.jsx(A,{className:"gutter-row",span:3,children:e.jsx(O,{onClick:c,block:!0,icon:e.jsx(Ee,{})})})]})}function Tt({config:n,createForm:t,updateForm:r,withUpload:c=!1}){const i=N();return m.useLayoutEffect(()=>{i(f.resetState())},[]),e.jsxs(st,{config:n,fixHeaderPanel:e.jsx(ot,{config:n}),sidePanelBottomContent:e.jsx(Me,{config:n,formElements:t,withUpload:c}),sidePanelTopContent:e.jsx(nt,{config:n,formElements:r,withUpload:c}),children:[e.jsx(qe,{config:n}),e.jsx(Re,{config:n})]})}export{Tt as C,oe as s};