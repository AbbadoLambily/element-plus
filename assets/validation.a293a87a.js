import{_ as e,r as l,o as a,c as o,a as t,w as r,F as d,d as u,b as i,f as m,i as n,v as s}from"./app.d52f88ac.js";const p={data:()=>({labelPosition:"right",formLabelAlign:{name:"",region:"",type:""}})},c=u("Left"),f=u("Right"),b=u("Top"),g=i("div",{style:{margin:"20px"}},null,-1);var y=e(p,[["render",function(e,u,i,m,n,s){const p=l("el-radio-button"),y=l("el-radio-group"),V=l("el-input"),_=l("el-form-item"),F=l("el-form");return a(),o(d,null,[t(y,{modelValue:n.labelPosition,"onUpdate:modelValue":u[0]||(u[0]=e=>n.labelPosition=e),size:"small"},{default:r((()=>[t(p,{label:"left"},{default:r((()=>[c])),_:1}),t(p,{label:"right"},{default:r((()=>[f])),_:1}),t(p,{label:"top"},{default:r((()=>[b])),_:1})])),_:1},8,["modelValue"]),g,t(F,{"label-position":n.labelPosition,"label-width":"100px",model:n.formLabelAlign},{default:r((()=>[t(_,{label:"Name"},{default:r((()=>[t(V,{modelValue:n.formLabelAlign.name,"onUpdate:modelValue":u[1]||(u[1]=e=>n.formLabelAlign.name=e)},null,8,["modelValue"])])),_:1}),t(_,{label:"Activity zone"},{default:r((()=>[t(V,{modelValue:n.formLabelAlign.region,"onUpdate:modelValue":u[2]||(u[2]=e=>n.formLabelAlign.region=e)},null,8,["modelValue"])])),_:1}),t(_,{label:"Activity form"},{default:r((()=>[t(V,{modelValue:n.formLabelAlign.type,"onUpdate:modelValue":u[3]||(u[3]=e=>n.formLabelAlign.type=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["label-position","model"])],64)}]]),V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const _={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}),methods:{onSubmit(){console.log("submit!")}}},F=u("-"),h=u("Create"),v=u("Cancel");var k=e(_,[["render",function(e,o,d,u,i,n){const s=l("el-input"),p=l("el-form-item"),c=l("el-option"),f=l("el-select"),b=l("el-date-picker"),g=l("el-col"),y=l("el-time-picker"),V=l("el-switch"),_=l("el-checkbox"),k=l("el-checkbox-group"),z=l("el-radio"),U=l("el-radio-group"),w=l("el-button"),P=l("el-form");return a(),m(P,{ref:"form",model:i.form,"label-width":"120px"},{default:r((()=>[t(p,{label:"Activity name"},{default:r((()=>[t(s,{modelValue:i.form.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.form.name=e)},null,8,["modelValue"])])),_:1}),t(p,{label:"Activity zone"},{default:r((()=>[t(f,{modelValue:i.form.region,"onUpdate:modelValue":o[1]||(o[1]=e=>i.form.region=e),placeholder:"please select your zone"},{default:r((()=>[t(c,{label:"Zone one",value:"shanghai"}),t(c,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Activity time"},{default:r((()=>[t(g,{span:11},{default:r((()=>[t(b,{modelValue:i.form.date1,"onUpdate:modelValue":o[2]||(o[2]=e=>i.form.date1=e),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),t(g,{class:"line",span:2},{default:r((()=>[F])),_:1}),t(g,{span:11},{default:r((()=>[t(y,{modelValue:i.form.date2,"onUpdate:modelValue":o[3]||(o[3]=e=>i.form.date2=e),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),t(p,{label:"Instant delivery"},{default:r((()=>[t(V,{modelValue:i.form.delivery,"onUpdate:modelValue":o[4]||(o[4]=e=>i.form.delivery=e)},null,8,["modelValue"])])),_:1}),t(p,{label:"Activity type"},{default:r((()=>[t(k,{modelValue:i.form.type,"onUpdate:modelValue":o[5]||(o[5]=e=>i.form.type=e)},{default:r((()=>[t(_,{label:"Online activities",name:"type"}),t(_,{label:"Promotion activities",name:"type"}),t(_,{label:"Offline activities",name:"type"}),t(_,{label:"Simple brand exposure",name:"type"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Resources"},{default:r((()=>[t(U,{modelValue:i.form.resource,"onUpdate:modelValue":o[6]||(o[6]=e=>i.form.resource=e)},{default:r((()=>[t(z,{label:"Sponsor"}),t(z,{label:"Venue"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Activity form"},{default:r((()=>[t(s,{modelValue:i.form.desc,"onUpdate:modelValue":o[7]||(o[7]=e=>i.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),t(p,null,{default:r((()=>[t(w,{type:"primary",onClick:n.onSubmit},{default:r((()=>[h])),_:1},8,["onClick"]),t(w,null,{default:r((()=>[v])),_:1})])),_:1})])),_:1},8,["model"])}]]),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const U={data(){return{ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{validator:(e,l,a)=>{""===l?a(new Error("Please input the password")):(""!==this.ruleForm.checkPass&&this.$refs.ruleForm.validateField("checkPass"),a())},trigger:"blur"}],checkPass:[{validator:(e,l,a)=>{""===l?a(new Error("Please input the password again")):l!==this.ruleForm.pass?a(new Error("Two inputs don't match!")):a()},trigger:"blur"}],age:[{validator:(e,l,a)=>{if(!l)return a(new Error("Please input the age"));setTimeout((()=>{Number.isInteger(l)?l<18?a(new Error("Age must be greater than 18")):a():a(new Error("Please input digits"))}),1e3)},trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm(e){this.$refs[e].resetFields()}}},w=u("Submit"),P=u("Reset");var A=e(U,[["render",function(e,o,d,u,i,n){const s=l("el-input"),p=l("el-form-item"),c=l("el-button"),f=l("el-form");return a(),m(f,{ref:"ruleForm",model:i.ruleForm,"status-icon":"",rules:i.rules,"label-width":"120px",class:"demo-ruleForm"},{default:r((()=>[t(p,{label:"Password",prop:"pass"},{default:r((()=>[t(s,{modelValue:i.ruleForm.pass,"onUpdate:modelValue":o[0]||(o[0]=e=>i.ruleForm.pass=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(p,{label:"Confirm",prop:"checkPass"},{default:r((()=>[t(s,{modelValue:i.ruleForm.checkPass,"onUpdate:modelValue":o[1]||(o[1]=e=>i.ruleForm.checkPass=e),type:"password",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(p,{label:"Age",prop:"age"},{default:r((()=>[t(s,{modelValue:i.ruleForm.age,"onUpdate:modelValue":o[2]||(o[2]=e=>i.ruleForm.age=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),t(p,null,{default:r((()=>[t(c,{type:"primary",onClick:o[3]||(o[3]=e=>n.submitForm("ruleForm"))},{default:r((()=>[w])),_:1}),t(c,{onClick:o[4]||(o[4]=e=>n.resetForm("ruleForm"))},{default:r((()=>[P])),_:1})])),_:1})])),_:1},8,["model","rules"])}]]),S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const C={data:()=>({dynamicValidateForm:{domains:[{key:1,value:""}],email:""}}),methods:{submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm(e){this.$refs[e].resetFields()},removeDomain(e){const l=this.dynamicValidateForm.domains.indexOf(e);-1!==l&&this.dynamicValidateForm.domains.splice(l,1)},addDomain(){this.dynamicValidateForm.domains.push({key:Date.now(),value:""})}}},x=u("Delete"),O=u("Submit"),j=u("New domain"),q=u("Reset");var T=e(C,[["render",function(e,u,i,p,c,f){const b=l("el-input"),g=l("el-form-item"),y=l("el-button"),V=l("el-form");return a(),m(V,{ref:"dynamicValidateForm",model:c.dynamicValidateForm,"label-width":"120px",class:"demo-dynamic"},{default:r((()=>[t(g,{prop:"email",label:"Email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},{default:r((()=>[t(b,{modelValue:c.dynamicValidateForm.email,"onUpdate:modelValue":u[0]||(u[0]=e=>c.dynamicValidateForm.email=e)},null,8,["modelValue"])])),_:1}),(a(!0),o(d,null,n(c.dynamicValidateForm.domains,((e,l)=>(a(),m(g,{key:e.key,label:"Domain"+l,prop:"domains."+l+".value",rules:{required:!0,message:"domain can not be null",trigger:"blur"}},{default:r((()=>[t(b,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l},null,8,["modelValue","onUpdate:modelValue"]),t(y,{onClick:s((l=>f.removeDomain(e)),["prevent"])},{default:r((()=>[x])),_:2},1032,["onClick"])])),_:2},1032,["label","prop"])))),128)),t(g,null,{default:r((()=>[t(y,{type:"primary",onClick:u[1]||(u[1]=e=>f.submitForm("dynamicValidateForm"))},{default:r((()=>[O])),_:1}),t(y,{onClick:f.addDomain},{default:r((()=>[j])),_:1},8,["onClick"]),t(y,{onClick:u[2]||(u[2]=e=>f.resetForm("dynamicValidateForm"))},{default:r((()=>[q])),_:1})])),_:1})])),_:1},8,["model"])}]]),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const M={data:()=>({formInline:{user:"",region:""}}),methods:{onSubmit(){console.log("submit!")}}},I=u("Query");var $=e(M,[["render",function(e,o,d,u,i,n){const s=l("el-input"),p=l("el-form-item"),c=l("el-option"),f=l("el-select"),b=l("el-button"),g=l("el-form");return a(),m(g,{inline:!0,model:i.formInline,class:"demo-form-inline"},{default:r((()=>[t(p,{label:"Approved by"},{default:r((()=>[t(s,{modelValue:i.formInline.user,"onUpdate:modelValue":o[0]||(o[0]=e=>i.formInline.user=e),placeholder:"Approved by"},null,8,["modelValue"])])),_:1}),t(p,{label:"Activity zone"},{default:r((()=>[t(f,{modelValue:i.formInline.region,"onUpdate:modelValue":o[1]||(o[1]=e=>i.formInline.region=e),placeholder:"Activity zone"},{default:r((()=>[t(c,{label:"Zone one",value:"shanghai"}),t(c,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),t(p,null,{default:r((()=>[t(b,{type:"primary",onClick:n.onSubmit},{default:r((()=>[I])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])}]]),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});const Z={data:()=>({numberValidateForm:{age:""}}),methods:{submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm(e){this.$refs[e].resetFields()}}},D=u("Submit"),E=u("Reset");var N=e(Z,[["render",function(e,o,d,u,i,n){const s=l("el-input"),p=l("el-form-item"),c=l("el-button"),f=l("el-form");return a(),m(f,{ref:"numberValidateForm",model:i.numberValidateForm,"label-width":"100px",class:"demo-ruleForm"},{default:r((()=>[t(p,{label:"age",prop:"age",rules:[{required:!0,message:"age is required"},{type:"number",message:"age must be a number"}]},{default:r((()=>[t(s,{modelValue:i.numberValidateForm.age,"onUpdate:modelValue":o[0]||(o[0]=e=>i.numberValidateForm.age=e),modelModifiers:{number:!0},type:"age",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(p,null,{default:r((()=>[t(c,{type:"primary",onClick:o[1]||(o[1]=e=>n.submitForm("numberValidateForm"))},{default:r((()=>[D])),_:1}),t(c,{onClick:o[2]||(o[2]=e=>n.resetForm("numberValidateForm"))},{default:r((()=>[E])),_:1})])),_:1})])),_:1},8,["model"])}]]),Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const B={data:()=>({sizeForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}),methods:{onSubmit(){console.log("submit!")}}},G=u("-"),H=u("Create"),J=u("Cancel");var K=e(B,[["render",function(e,o,d,u,i,n){const s=l("el-input"),p=l("el-form-item"),c=l("el-option"),f=l("el-select"),b=l("el-date-picker"),g=l("el-col"),y=l("el-time-picker"),V=l("el-checkbox-button"),_=l("el-checkbox-group"),F=l("el-radio"),h=l("el-radio-group"),v=l("el-button"),k=l("el-form");return a(),m(k,{ref:"form",model:i.sizeForm,"label-width":"120px",size:"mini"},{default:r((()=>[t(p,{label:"Activity name"},{default:r((()=>[t(s,{modelValue:i.sizeForm.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.sizeForm.name=e)},null,8,["modelValue"])])),_:1}),t(p,{label:"Activity zone"},{default:r((()=>[t(f,{modelValue:i.sizeForm.region,"onUpdate:modelValue":o[1]||(o[1]=e=>i.sizeForm.region=e),placeholder:"please select your zone"},{default:r((()=>[t(c,{label:"Zone one",value:"shanghai"}),t(c,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Activity time"},{default:r((()=>[t(g,{span:11},{default:r((()=>[t(b,{modelValue:i.sizeForm.date1,"onUpdate:modelValue":o[2]||(o[2]=e=>i.sizeForm.date1=e),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),t(g,{class:"line",span:2},{default:r((()=>[G])),_:1}),t(g,{span:11},{default:r((()=>[t(y,{modelValue:i.sizeForm.date2,"onUpdate:modelValue":o[3]||(o[3]=e=>i.sizeForm.date2=e),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),t(p,{label:"Activity type"},{default:r((()=>[t(_,{modelValue:i.sizeForm.type,"onUpdate:modelValue":o[4]||(o[4]=e=>i.sizeForm.type=e)},{default:r((()=>[t(V,{label:"Online activities",name:"type"}),t(V,{label:"Promotion activities",name:"type"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Resources"},{default:r((()=>[t(h,{modelValue:i.sizeForm.resource,"onUpdate:modelValue":o[5]||(o[5]=e=>i.sizeForm.resource=e),size:"medium"},{default:r((()=>[t(F,{border:"",label:"Sponsor"}),t(F,{border:"",label:"Venue"})])),_:1},8,["modelValue"])])),_:1}),t(p,{size:"large"},{default:r((()=>[t(v,{type:"primary",onClick:n.onSubmit},{default:r((()=>[H])),_:1},8,["onClick"]),t(v,null,{default:r((()=>[J])),_:1})])),_:1})])),_:1},8,["model"])}]]),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const X={data:()=>({ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}}),methods:{submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm(e){this.$refs[e].resetFields()}}},Y=u("-"),ee=u("Create"),le=u("Reset");var ae=e(X,[["render",function(e,o,d,u,i,n){const s=l("el-input"),p=l("el-form-item"),c=l("el-option"),f=l("el-select"),b=l("el-date-picker"),g=l("el-col"),y=l("el-time-picker"),V=l("el-switch"),_=l("el-checkbox"),F=l("el-checkbox-group"),h=l("el-radio"),v=l("el-radio-group"),k=l("el-button"),z=l("el-form");return a(),m(z,{ref:"ruleForm",model:i.ruleForm,rules:i.rules,"label-width":"120px",class:"demo-ruleForm"},{default:r((()=>[t(p,{label:"Activity name",prop:"name"},{default:r((()=>[t(s,{modelValue:i.ruleForm.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.ruleForm.name=e)},null,8,["modelValue"])])),_:1}),t(p,{label:"Activity zone",prop:"region"},{default:r((()=>[t(f,{modelValue:i.ruleForm.region,"onUpdate:modelValue":o[1]||(o[1]=e=>i.ruleForm.region=e),placeholder:"Activity zone"},{default:r((()=>[t(c,{label:"Zone one",value:"shanghai"}),t(c,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Activity time",required:""},{default:r((()=>[t(g,{span:11},{default:r((()=>[t(p,{prop:"date1"},{default:r((()=>[t(b,{modelValue:i.ruleForm.date1,"onUpdate:modelValue":o[2]||(o[2]=e=>i.ruleForm.date1=e),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),t(g,{class:"line",span:2},{default:r((()=>[Y])),_:1}),t(g,{span:11},{default:r((()=>[t(p,{prop:"date2"},{default:r((()=>[t(y,{modelValue:i.ruleForm.date2,"onUpdate:modelValue":o[3]||(o[3]=e=>i.ruleForm.date2=e),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(p,{label:"Instant delivery",prop:"delivery"},{default:r((()=>[t(V,{modelValue:i.ruleForm.delivery,"onUpdate:modelValue":o[4]||(o[4]=e=>i.ruleForm.delivery=e)},null,8,["modelValue"])])),_:1}),t(p,{label:"Activity type",prop:"type"},{default:r((()=>[t(F,{modelValue:i.ruleForm.type,"onUpdate:modelValue":o[5]||(o[5]=e=>i.ruleForm.type=e)},{default:r((()=>[t(_,{label:"Online activities",name:"type"}),t(_,{label:"Promotion activities",name:"type"}),t(_,{label:"Offline activities",name:"type"}),t(_,{label:"Simple brand exposure",name:"type"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Resources",prop:"resource"},{default:r((()=>[t(v,{modelValue:i.ruleForm.resource,"onUpdate:modelValue":o[6]||(o[6]=e=>i.ruleForm.resource=e)},{default:r((()=>[t(h,{label:"Sponsorship"}),t(h,{label:"Venue"})])),_:1},8,["modelValue"])])),_:1}),t(p,{label:"Activity form",prop:"desc"},{default:r((()=>[t(s,{modelValue:i.ruleForm.desc,"onUpdate:modelValue":o[7]||(o[7]=e=>i.ruleForm.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),t(p,null,{default:r((()=>[t(k,{type:"primary",onClick:o[8]||(o[8]=e=>n.submitForm("ruleForm"))},{default:r((()=>[ee])),_:1}),t(k,{onClick:o[9]||(o[9]=e=>n.resetForm("ruleForm"))},{default:r((()=>[le])),_:1})])),_:1})])),_:1},8,["model","rules"])}]]),oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae});export{V as _,z as a,S as b,L as c,R as d,Q as e,W as f,oe as g};
