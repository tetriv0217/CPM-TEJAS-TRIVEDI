import{ah as e}from"./index-Ceshqiaz.js";import{C as s}from"./CrudModule-C2i2S8E0.js";import{D as r}from"./index-ELsmxZzu.js";import{a4 as c}from"./IdurarOs-QiO0mqNX.js";import"./actions-DV9m3Jzf.js";import"./index-C8m0D0Z9.js";import"./index-BauFKgOT.js";import"./ErpApp-HOQT9QP8.js";import"./helpers-CitMCYcM.js";import"./index-D_7TLVDS.js";import"./fade-BJUQsMWl.js";import"./countryList-CoadF6pq.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-Y7wTz0MG.js";import"./useDate-DhPwrpth.js";import"./useDebounce-CMrmrAVz.js";import"./DeleteOutlined-LIb_-jeR.js";import"./ArrowRightOutlined-zWlOlZvh.js";import"./Table-BaNNn-lR.js";import"./PlusOutlined-DgQpfvsa.js";import"./index-BRPSdnqE.js";import"./index-DEN0yfq5.js";import"./useFetch-zry2Bn3b.js";import"./index-Hbyzj37N.js";const o={name:{type:"string",required:!0},mainContact:{type:"search",renderAsTag:!0,label:"Contact",entity:"people",redirectLabel:"Add New Person",withRedirect:!0,urlToRedirect:"/people",displayLabels:["firstname","lastname"],searchFields:"firstname,lastname",dataIndex:["mainContact","firstname"]},country:{type:"country"},phone:{type:"phone"},email:{type:"email",required:!0},website:{type:"url"}};function B(){const t=c(),a="company",i={displayLabels:["name"],searchFields:"name,phone,eamil"},m=["name"],n={PANEL_TITLE:t("company"),DATATABLE_TITLE:t("company_list"),ADD_NEW_ENTITY:t("add_new_company"),ENTITY_NAME:t("company")},p={...{entity:a,...n},fields:o,searchConfig:i,deleteModalLabels:m};return e.jsx(s,{createForm:e.jsx(r,{fields:o}),updateForm:e.jsx(r,{fields:o}),config:p})}export{B as default};