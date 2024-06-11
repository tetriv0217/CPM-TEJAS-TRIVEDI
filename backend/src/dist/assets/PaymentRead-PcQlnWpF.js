import{a as c,h as R,aq as _,ap as O,ai as g,ah as e,ar as M,aw as k}from"./index-BxX9oQzF.js";import{I as B,a4 as w,V as l,ae as F,al as H,ad as V,a2 as y,af as T,a1 as n,am as W}from"./IdurarOs-CQjgBJE3.js";import"./index-BpvfEvhx.js";import{c as v,b as Y,E as z}from"./selectors-BxGMIojk.js";import{P as q}from"./index-DHqt5pnV.js";import{e as f}from"./actions-DHZEEjAB.js";import{s as d}from"./index-KrFx5yLV.js";import{u as U}from"./useDate-DWLKj03u.js";import{t as G}from"./statusTagColor-DxbKI3gy.js";import{u as J}from"./useMail-DRpQBaff.js";import{T as K}from"./index-If0JhGlO.js";import{S as u}from"./index-8S6ClztB.js";import{D as m}from"./index-C72j0_5_.js";import{C as Q}from"./CloseCircleOutlined-Cqac_gmj.js";import{F as X}from"./FilePdfOutlined-58kC_0XW.js";import"./ErpApp-CWghZTV0.js";var Z={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},ee=function(o,s){return c.createElement(B,R({},o,{ref:s,icon:Z}))};const te=c.forwardRef(ee);function se({config:r,selectedItem:o}){var E;const s=w(),{entity:a,ENTITY_NAME:p}=r,$=_(),{moneyFormatter:i}=U(),{send:C,isLoading:I}=J({entity:a}),x=O(),{result:h}=g(v),N={status:"",client:{name:"",email:"",phone:"",address:""},subTotal:0,taxTotal:0,taxRate:0,total:0,credit:0,number:0,year:0},[t,P]=c.useState(o??N),[j,b]=c.useState({});return c.useEffect(()=>{const A=new AbortController;if(h){const{invoice:L,_id:S,...D}=h;P({...D,...L,_id:S})}return()=>A.abort()},[h]),c.useEffect(()=>{t!=null&&t.client&&b(t.client[t.client.type])},[t]),e.jsxs(e.Fragment,{children:[e.jsx(q,{onBack:()=>{x(`/${a.toLowerCase()}`)},title:`${p} # ${t.number}/${t.year||""}`,ghost:!1,tags:e.jsx(K,{color:(E=G(t.paymentStatus))==null?void 0:E.color,children:t.paymentStatus}),extra:[e.jsx(l,{onClick:()=>{x(`/${a.toLowerCase()}`)},icon:e.jsx(Q,{}),children:s("Close")},`${d.generate()}`),e.jsx(l,{onClick:()=>{window.open(`${F}${a}/${a}-${t._id}.pdf`,"_blank")},icon:e.jsx(X,{}),children:s("Download PDF")},`${d.generate()}`),e.jsx(l,{loading:I,onClick:()=>{C(t._id)},icon:e.jsx(H,{}),children:s("Send by email")},`${d.generate()}`),e.jsx(l,{onClick:()=>{$(f.currentAction({actionType:"update",data:t})),x(`/${a.toLowerCase()}/update/${t._id}`)},type:"primary",icon:e.jsx(V,{}),children:s("Edit")},`${d.generate()}`)],style:{padding:"20px 0px"},children:e.jsxs(y,{children:[e.jsx(u,{title:"Status",value:t.status}),e.jsx(u,{title:s("Paid"),value:i({amount:t.amount,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(u,{title:s("SubTotal"),value:i({amount:t.subTotal,currency_code:t.currency}),style:{margin:"0 32px"}}),e.jsx(u,{title:s("Total"),value:i({amount:t.total,currency_code:t.currency}),style:{margin:"0 32px"}})]})}),e.jsx(T,{dashed:!0}),e.jsxs(m,{title:`${s("Client")} : ${t.client.name}`,children:[e.jsx(m.Item,{label:s("Address"),children:j.address}),e.jsx(m.Item,{label:s("email"),children:j.email}),e.jsx(m.Item,{label:s("Phone"),children:j.phone})]}),e.jsx(T,{}),e.jsxs(y,{children:[e.jsx(n,{sm:24,md:12,children:e.jsxs(W.Title,{level:5,children:[s("Payment Information")," :"]})}),e.jsx(n,{sm:24,md:12,style:{textAlign:"right"},children:e.jsx(l,{icon:e.jsx(te,{}),children:s("Show invoice")})})]}),e.jsx("div",{style:{width:"300px",float:"left",textAlign:"right",fontWeight:"700"},children:e.jsxs(y,{gutter:[12,-5],children:[e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Paid")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:i({amount:t.amount,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:i({amount:t.total,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Paid")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:i({amount:t.credit,currency_code:t.currency})})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsxs("p",{children:[s("Total Remaining")," :"]})}),e.jsx(n,{className:"gutter-row",span:12,children:e.jsx("p",{children:i({amount:t.total-t.credit,currency_code:t.currency})})})]})})]})}function ae({config:r}){const o=_(),{id:s}=M();let a=g(Y(s));c.useEffect(()=>{o(a?f.currentItem({data:a}):f.read({entity:r.entity,id:s}))},[a]);const{result:p}=g(v);return a=p,e.jsx(z,{children:a?e.jsx(se,{config:r,selectedItem:a}):e.jsx(k,{})})}function Ee(){const r=w(),o="payment",s={PANEL_TITLE:r("payment"),DATATABLE_TITLE:r("payment_list"),ADD_NEW_ENTITY:r("add_new_payment"),ENTITY_NAME:r("payment")},a={entity:o,...s};return e.jsx(ae,{config:a})}export{Ee as default};