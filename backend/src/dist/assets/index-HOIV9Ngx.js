import{ah as o}from"./index-Ceshqiaz.js";import{C as n}from"./CrudModule-C2i2S8E0.js";import{D as t}from"./index-ELsmxZzu.js";import{c}from"./color-DHucoY0N.js";import{a4 as l}from"./IdurarOs-QiO0mqNX.js";import"./actions-DV9m3Jzf.js";import"./index-C8m0D0Z9.js";import"./index-BauFKgOT.js";import"./ErpApp-HOQT9QP8.js";import"./helpers-CitMCYcM.js";import"./index-D_7TLVDS.js";import"./fade-BJUQsMWl.js";import"./countryList-CoadF6pq.js";import"./index-KrFx5yLV.js";import"./index-Y7wTz0MG.js";import"./useDate-DhPwrpth.js";import"./useDebounce-CMrmrAVz.js";import"./DeleteOutlined-LIb_-jeR.js";import"./ArrowRightOutlined-zWlOlZvh.js";import"./Table-BaNNn-lR.js";import"./PlusOutlined-DgQpfvsa.js";import"./index-BRPSdnqE.js";import"./index-DEN0yfq5.js";import"./useFetch-zry2Bn3b.js";import"./index-Hbyzj37N.js";const r={name:{type:"stringWithColor",required:!0},description:{type:"textarea",required:!0},color:{type:"color",options:[...c],required:!0},enabled:{type:"boolean",required:!0}};function R(){const e=l(),i="expensecategory",p={displayLabels:["name"],searchFields:"name"},a=["name"],m={PANEL_TITLE:e("Expense_Category"),DATATABLE_TITLE:e("Expense_Category_list"),ADD_NEW_ENTITY:e("add_new_Expense_Category"),ENTITY_NAME:e("Expense_Category")},s={...{entity:i,...m},fields:r,searchConfig:p,deleteModalLabels:a};return o.jsx(n,{createForm:o.jsx(t,{fields:r}),updateForm:o.jsx(t,{fields:r}),config:s})}export{R as default};