import{r as n,o as a,c as s,a as t,w as p,b as e,u as o,x as l,S as c,D as i,L as u,y as r,q as k,e as g,d}from"./app.d52f88ac.js";const h=g('',12),m=g('',3),v=e("p",null,[d(" with extra class "),e("b",null,"is-loading"),d(", your icon is able to rotate 360 deg in 2 seconds, you can also override this ")],-1),b={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},y=e("span",{style:{"vertical-align":"middle"}}," Search ",-1),f=g('',2),_={style:{"font-size":"20px"}},q={id:"svg-icons-collection-available-1-0-2-beta-66",tabindex:"-1"},S=d("SVG Icons collection "),I=d("Available >= 1.0.2-beta.66"),T=d(),w=e("a",{class:"header-anchor",href:"#svg-icons-collection-available-1-0-2-beta-66","aria-hidden":"true"},"#",-1),x=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[e("strong",null,"You can use SVG icon in any version"),d(" as long as you install it")]),e("p",null,[e("strong",null,"You can click the icon to copy it")])],-1),V=g('',2),A='{"title":"Icon","description":"","frontmatter":{},"headers":[{"level":2,"title":"SvgIcon Usage","slug":"svgicon-usage"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Using packaging manager","slug":"using-packaging-manager"},{"level":2,"title":"Simple usage","slug":"simple-usage"},{"level":2,"title":"Combined with el-icon","slug":"combined-with-el-icon"},{"level":2,"title":"Using SVG icon directly","slug":"using-svg-icon-directly"},{"level":3,"title":"SVG Icons collection","slug":"svg-icons-collection-available-1-0-2-beta-66"},{"level":3,"title":"SVG Icon Attributes","slug":"svg-icon-attributes"}],"relativePath":"es-ES/component/icon.md","lastUpdated":1632845358939}',G={};const E=Object.assign(G,{setup:function(g){return(g,d)=>{const A=n("ElIcon"),G=n("ElRow"),E=n("ElButton"),P=n("ElTag"),C=n("IconList");return a(),s("div",null,[h,t(G,null,{default:p((()=>[e("div",null,[t(A,{size:30},{default:p((()=>[t(o(l))])),_:1}),t(o(l))])])),_:1}),m,t(G,null,{default:p((()=>[v,e("div",b,[t(A,{size:20},{default:p((()=>[t(o(l))])),_:1}),t(A,{color:"#409EFC",class:"no-inherit"},{default:p((()=>[t(o(c))])),_:1}),t(A,null,{default:p((()=>[t(o(i))])),_:1}),t(A,{class:"is-loading"},{default:p((()=>[t(o(u))])),_:1}),t(E,{type:"primary"},{default:p((()=>[t(A,{style:{"vertical-align":"middle",color:"#fff"}},{default:p((()=>[t(o(r))])),_:1}),y])),_:1})])])),_:1}),f,t(G,null,{default:p((()=>[e("div",_,[k(" Since svg icons do not carry any attributes by default "),k(" You need to provide attributes directly "),t(o(l),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(c),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(i),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(r),{style:{width:"1em",height:"1em","margin-right":"8px"}})])])),_:1}),e("h3",q,[S,t(P,null,{default:p((()=>[I])),_:1}),T,w]),x,t(C),k(' <ul class="icon-list">\n  <li\n    v-for="component in $svgIcons"\n    :key="component"\n    @click="$copySvgIcon(component)">\n    <span class="demo-svg-icon">\n      <el-icon color="#000">\n        <component :is="component" />\n      </el-icon>\n      <span class="icon-name">{{component}}</span>\n    </span>\n  </li>\n</ul> '),V])}}});export{A as __pageData,E as default};
