import{ah as t}from"./index-BxX9oQzF.js";import{C as m}from"./CrudModule-Ck03uK17.js";import{D as o}from"./index-1UFWy5ja.js";import{a4 as c}from"./IdurarOs-CQjgBJE3.js";import"./actions-DEpyQxvL.js";import"./index-BpvfEvhx.js";import"./index-DHqt5pnV.js";import"./ErpApp-CWghZTV0.js";import"./helpers-D4BobF0Y.js";import"./index-DxAM6omY.js";import"./fade-UwVswCAG.js";import"./countryList-gEXmdXv6.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-If0JhGlO.js";import"./useDate-DWLKj03u.js";import"./useDebounce-Bp03-dRO.js";import"./DeleteOutlined-V_cXazmM.js";import"./ArrowRightOutlined-DuWjr1U7.js";import"./Table-Dumz0gRW.js";import"./PlusOutlined-BN2tvqNR.js";import"./index-BVX6ArLJ.js";import"./index-B2NWdkGn.js";import"./useFetch-BCiAZt0D.js";import"./index-B4EGPytm.js";const r={name:{type:"string",required:!0},expenseCategory:{type:"async",label:"Expense Category",displayLabels:["expenseCategory","name"],dataIndex:["expenseCategory","name"],entity:"expensecategory",required:!0},total:{type:"currency",required:!0},description:{type:"textarea"},ref:{type:"string"}};function R(){const e=c(),p="expense",i={displayLabels:["name"],searchFields:"name"},s=["name"],a={PANEL_TITLE:e("Expense"),DATATABLE_TITLE:e("Expense_list"),ADD_NEW_ENTITY:e("add_new_Expense"),ENTITY_NAME:e("Expense")},n={...{entity:p,...a},fields:r,searchConfig:i,deleteModalLabels:s};return t.jsx(m,{createForm:t.jsx(o,{fields:r}),updateForm:t.jsx(o,{fields:r}),config:n})}export{R as default};