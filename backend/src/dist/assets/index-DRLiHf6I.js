import{ah as o}from"./index-BxX9oQzF.js";import{d as i}from"./index-DHqt5pnV.js";import{t as u}from"./statusTagColor-DxbKI3gy.js";import"./index-BpvfEvhx.js";import{a4 as f}from"./IdurarOs-CQjgBJE3.js";import{E as x}from"./selectors-BxGMIojk.js";import{E as T}from"./index-CU8gxF2M.js";import{a as g,u as y}from"./useDate-DWLKj03u.js";import{T as E}from"./index-If0JhGlO.js";import"./ErpApp-CWghZTV0.js";import"./index-BVX6ArLJ.js";import"./useDebounce-Bp03-dRO.js";import"./actions-DHZEEjAB.js";import"./index-KrFx5yLV.js";import"./Table-Dumz0gRW.js";import"./FilePdfOutlined-58kC_0XW.js";import"./DeleteOutlined-V_cXazmM.js";import"./ArrowRightOutlined-DuWjr1U7.js";import"./helpers-D4BobF0Y.js";import"./PlusOutlined-BN2tvqNR.js";import"./index-DxAM6omY.js";import"./fade-UwVswCAG.js";function b({config:t}){return o.jsx(x,{children:o.jsx(T,{config:t})})}function G(){const t=f(),{dateFormat:a}=g(),m="quote",{moneyFormatter:n}=y(),l={entity:"client",displayLabels:["name"],searchFields:"name"},s=["number","client.name"],c=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(a)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(a)},{title:t("Sub Total"),dataIndex:"subTotal",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Status"),dataIndex:"status",render:e=>{let r=u(e);return o.jsx(E,{color:r.color,children:e&&t(r.label)})}}],d={PANEL_TITLE:t("proforma invoice"),DATATABLE_TITLE:t("proforma invoice_list"),ADD_NEW_ENTITY:t("add_new_proforma invoice"),ENTITY_NAME:t("proforma invoice")},p={...{entity:m,...d},dataTableColumns:c,searchConfig:l,deleteModalLabels:s};return o.jsx(b,{config:p})}export{G as default};
