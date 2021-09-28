import{_ as e,r as a,o as t,c as l,a as n,w as s,F as u,d as o,i,f as r,j as d,M as g,b as c}from"./app.d52f88ac.js";const p={},f=o("Tag 1"),_=o("Tag 2"),y=o("Tag 3"),m=o("Tag 4"),T=o("Tag 5");var h=e(p,[["render",function(e,o){const i=a("el-tag");return t(),l(u,null,[n(i,null,{default:s((()=>[f])),_:1}),n(i,{type:"success"},{default:s((()=>[_])),_:1}),n(i,{type:"info"},{default:s((()=>[y])),_:1}),n(i,{type:"warning"},{default:s((()=>[m])),_:1}),n(i,{type:"danger"},{default:s((()=>[T])),_:1})],64)}]]),b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h});const k={data:()=>({checked:!1}),methods:{onChange(e){this.checked=e}}},C=o("Checked"),S=o("Toggle me");var V=e(k,[["render",function(e,u,o,i,r,d){const g=a("el-check-tag");return t(),l("div",null,[n(g,{checked:"",style:{"margin-right":"8px"}},{default:s((()=>[C])),_:1}),n(g,{checked:r.checked,onChange:d.onChange},{default:s((()=>[S])),_:1},8,["checked","onChange"])])}]]),v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const z={data:()=>({dynamicTags:["Tag 1","Tag 2","Tag 3"],inputVisible:!1,inputValue:""}),methods:{handleClose(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput(){this.inputVisible=!0,this.$nextTick((e=>{this.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm(){const e=this.inputValue;e&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue=""}}},w=o("+ New Tag");var M=e(z,[["render",function(e,n,c,p,f,_){const y=a("el-tag"),m=a("el-input"),T=a("el-button");return t(),l(u,null,[(t(!0),l(u,null,i(f.dynamicTags,(e=>(t(),r(y,{key:e,closable:"","disable-transitions":!1,onClose:a=>_.handleClose(e)},{default:s((()=>[o(d(e),1)])),_:2},1032,["onClose"])))),128)),f.inputVisible?(t(),r(m,{key:0,ref:"saveTagInput",modelValue:f.inputValue,"onUpdate:modelValue":n[0]||(n[0]=e=>f.inputValue=e),class:"input-new-tag",size:"mini",onKeyup:g(_.handleInputConfirm,["enter"]),onBlur:_.handleInputConfirm},null,8,["modelValue","onKeyup","onBlur"])):(t(),r(T,{key:1,class:"button-new-tag",size:"small",onClick:_.showInput},{default:s((()=>[w])),_:1},8,["onClick"]))],64)}]]),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});var I=e({data:()=>({tags:[{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}]})},[["render",function(e,n,g,c,p,f){const _=a("el-tag");return t(!0),l(u,null,i(p.tags,(e=>(t(),r(_,{key:e.name,closable:"",type:e.type},{default:s((()=>[o(d(e.name),1)])),_:2},1032,["type"])))),128)}]]),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const x={},$=o("Default"),B=o("Medium"),D=o("Small"),K=o("Mini");var F=e(x,[["render",function(e,o){const i=a("el-tag");return t(),l(u,null,[n(i,null,{default:s((()=>[$])),_:1}),n(i,{size:"medium"},{default:s((()=>[B])),_:1}),n(i,{size:"small"},{default:s((()=>[D])),_:1}),n(i,{size:"mini"},{default:s((()=>[K])),_:1})],64)}]]),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const P={data:()=>({items:[{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}]})},U={class:"tag-group"},q=c("span",{class:"tag-group__title"},"Dark",-1),A={class:"tag-group"},E=c("span",{class:"tag-group__title"},"Plain",-1);var G=e(P,[["render",function(e,n,g,p,f,_){const y=a("el-tag");return t(),l(u,null,[c("div",U,[q,(t(!0),l(u,null,i(f.items,(e=>(t(),r(y,{key:e.label,type:e.type,effect:"dark"},{default:s((()=>[o(d(e.label),1)])),_:2},1032,["type"])))),128))]),c("div",A,[E,(t(!0),l(u,null,i(f.items,(e=>(t(),r(y,{key:e.label,type:e.type,effect:"plain"},{default:s((()=>[o(d(e.label),1)])),_:2},1032,["type"])))),128))])],64)}]]),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});export{b as _,v as a,j as b,O as c,N as d,H as e};
