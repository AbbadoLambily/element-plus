import{g as e,l as a,_ as r,r as t,o as l,f as d,w as n,b as o,m as s,j as u,c as p,a as i,F as c}from"./app.d52f88ac.js";const h=(e,a,r,t=1,l="node")=>{let d=0;return new Array(r).fill(t).map((()=>{const r=t===e?0:Math.round(Math.random()*a),n=((e,a)=>`${e}-${a}`)(l,++d);return{id:n,label:n,children:r?h(e,a,r,t+1,n):void 0}}))};var f=r(e({setup:()=>({data:h(4,30,40),props:a({id:"id",label:"label",children:"children"})})}),[["render",function(e,a,r,n,o,s){const u=t("el-tree-v2");return l(),d(u,{data:e.data,props:e.props,height:208},null,8,["data","props"])}]]),b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const _=(e,a,r,t=1,l="node")=>{let d=0;return new Array(r).fill(t).map((()=>{const r=t===e?0:Math.round(Math.random()*a),n=((e,a)=>`${e}-${a}`)(l,++d);return{id:n,label:n,children:r?_(e,a,r,t+1,n):void 0}}))};var m=r(e({setup:()=>({data:_(4,30,40),props:a({id:"id",label:"label",children:"children"})})}),[["render",function(e,a,r,p,i,c){const h=t("el-tree-v2");return l(),d(h,{data:e.data,props:e.props,height:208},{default:n((({node:e})=>[o("span",{class:s(["prefix",{"is-leaf":e.isLeaf}])},"[ElementPlus]",2),o("span",null,u(e.label),1)])),_:1},8,["data","props"])}],["__scopeId","data-v-401a5262"]]),y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m});const g=(e,a,r,t=1,l="node")=>{let d=0;return new Array(r).fill(t).map((()=>{const r=t===e?0:Math.round(Math.random()*a),n=((e,a)=>`${e}-${a}`)(l,++d);return{id:n,label:n,children:r?g(e,a,r,t+1,n):void 0}}))};var M=r(e({setup(){const e=g(4,30,40),r=[],t=[];for(let a=0;a<e.length;++a){const l=e[a].children;if(l){t.push(e[a].id),r.push(l[0].id);break}}return{data:e,props:a({id:"id",label:"label",children:"children"}),defaultCheckedKeys:r,defaultExpandedKeys:t}}}),[["render",function(e,a,r,n,o,s){const u=t("el-tree-v2");return l(),d(u,{data:e.data,height:208,props:e.props,"show-checkbox":"","default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":e.defaultExpandedKeys},null,8,["data","props","default-checked-keys","default-expanded-keys"])}]]),v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const k=(e,a,r,t=1,l="node")=>{let d=0;return new Array(r).fill(t).map((()=>{const r=t===e?0:Math.round(Math.random()*a),n=((e,a)=>`${e}-${a}`)(l,++d);return{id:n,label:n,disabled:Math.random()>.6,children:r?k(e,a,r,t+1,n):void 0}}))};var S=r(e({setup:()=>({data:k(4,30,40),props:a({id:"id",label:"label",children:"children",disabled:"disabled"})})}),[["render",function(e,a,r,n,o,s){const u=t("el-tree-v2");return l(),d(u,{data:e.data,props:e.props,"show-checkbox":"",height:208},null,8,["data","props"])}]]),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const w=(e,a,r,t=1,l="node")=>{let d=0;return new Array(r).fill(t).map((()=>{const r=t===e?0:Math.round(Math.random()*a),n=((e,a)=>`${e}-${a}`)(l,++d);return{id:n,label:n,children:r?w(e,a,r,t+1,n):void 0}}))};var x=r(e({setup(){const e=a(null);return{treeRef:e,data:w(4,30,5),query:a(""),props:a({id:"id",label:"label",children:"children"}),onQueryChanged(a){const r=e.value;null==r||r.filter(a)},filterMethod:(e,a)=>-1!==a.label.indexOf(e)}}}),[["render",function(e,a,r,d,n,o){const s=t("el-input"),u=t("el-tree-v2");return l(),p(c,null,[i(s,{modelValue:e.query,"onUpdate:modelValue":a[0]||(a[0]=a=>e.query=a),placeholder:"Please enter keyword",onInput:e.onQueryChanged},null,8,["modelValue","onInput"]),i(u,{ref:"treeRef",data:e.data,props:e.props,"filter-method":e.filterMethod,height:208},null,8,["data","props","filter-method"])],64)}]]),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const O=(e,a,r,t=1,l="node")=>{let d=0;return new Array(r).fill(t).map((()=>{const r=t===e?0:Math.round(Math.random()*a),n=((e,a)=>`${e}-${a}`)(l,++d);return{id:n,label:n,children:r?O(e,a,r,t+1,n):void 0}}))};var z=r(e({setup:()=>({data:O(4,30,40),props:a({id:"id",label:"label",children:"children"})})}),[["render",function(e,a,r,n,o,s){const u=t("el-tree-v2");return l(),d(u,{data:e.data,props:e.props,"show-checkbox":"",height:208},null,8,["data","props"])}]]),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});export{b as _,y as a,v as b,$ as c,j as d,A as e};
