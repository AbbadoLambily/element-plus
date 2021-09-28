import{r as n,o as a,c as s,a as t,w as p,b as e,u as o,x as l,S as c,D as i,L as u,y as r,q as k,e as g,d}from"./app.d52f88ac.js";const h=g('<h1 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h1><p>Element Plus provides a set of common icons.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Element Plus team is replacing all <strong>Font Icon</strong> in the previously built components to <strong>SVG Icon</strong>, please keep you eyes on <a href="/#/en-US/component/changelog">ChangeLog</a>, for getting latest updates, <strong>Font Icon</strong> will be deprecated after the first stable release.</p></div><h2 id="svgicon-usage" tabindex="-1">SvgIcon Usage <a class="header-anchor" href="#svgicon-usage" aria-hidden="true">#</a></h2><ul><li><p>If you want to <strong>use directly</strong> like the example, you need to <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">globally register</a> the components before using it.</p></li><li><p>If you want to see all available SVG icons please check <a href="https://unpkg.com/browse/@element-plus/icons@latest/lib/" target="_blank" rel="noopener noreferrer">@element-plus/icons</a> and the source <a href="https://github.com/element-plus/element-plus-icons" target="_blank" rel="noopener noreferrer">Github/ElementPlus/icons</a> out or <a href="/#/en-US/component/icon#svg-tu-biao-ji-he">SVG icons</a></p></li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>The current icon is only targeted to <a href="https://v3.vuejs.org" target="_blank" rel="noopener noreferrer">Vue3</a>.</p><h2 id="using-packaging-manager" tabindex="-1">Using packaging manager <a class="header-anchor" href="#using-packaging-manager" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons\n<span class="token comment"># or</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons\n</code></pre></div><h2 id="simple-usage" tabindex="-1">Simple usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Because HTML standard has already defined a tag named <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" target="_blank" rel="noopener noreferrer">menu</a>, so you need to use an alias in order to render the icon, if you register <code>Menu</code> directly it will not work.</p></div><div class="language-vue"><pre><code><span class="token comment">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>edit</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>edit</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',12),m=g('<h2 id="combined-with-el-icon" tabindex="-1">Combined with el-icon <a class="header-anchor" href="#combined-with-el-icon" aria-hidden="true">#</a></h2><p><code>el-icon</code> provides extra attributes for raw SVG icon, for more detail, please read to the end.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2\n    seconds, you can also override this\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loading</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',3),v=e("p",null,[d(" with extra class "),e("b",null,"is-loading"),d(", your icon is able to rotate 360 deg in 2 seconds, you can also override this ")],-1),b={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},y=e("span",{style:{"vertical-align":"middle"}}," Search ",-1),f=g('<h2 id="using-svg-icon-directly" tabindex="-1">Using SVG icon directly <a class="header-anchor" href="#using-svg-icon-directly" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- Since svg icons do not carry any attributes by default --&gt;</span>\n    <span class="token comment">&lt;!-- You need to provide attributes directly --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2),_={style:{"font-size":"20px"}},q={id:"svg-icons-collection-available-1-0-2-beta-66",tabindex:"-1"},S=d("SVG Icons collection "),I=d("Available >= 1.0.2-beta.66"),T=d(),w=e("a",{class:"header-anchor",href:"#svg-icons-collection-available-1-0-2-beta-66","aria-hidden":"true"},"#",-1),x=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[e("strong",null,"You can use SVG icon in any version"),d(" as long as you install it")]),e("p",null,[e("strong",null,"You can click the icon to copy it")])],-1),V=g('<h3 id="svg-icon-attributes" tabindex="-1">SVG Icon Attributes <a class="header-anchor" href="#svg-icon-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default</th></tr></thead><tbody><tr><td>color</td><td>SVG tag&#39;s fill attribute</td><td>Pick&lt;CSSProperties, &#39;color&#39;&gt;</td><td>-</td><td>inherit from color</td></tr><tr><td>size</td><td>SVG icon size, size x size</td><td>number</td><td>-</td><td>inherit from font size</td></tr></tbody></table>',2),A='{"title":"Icon","description":"","frontmatter":{},"headers":[{"level":2,"title":"SvgIcon Usage","slug":"svgicon-usage"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Using packaging manager","slug":"using-packaging-manager"},{"level":2,"title":"Simple usage","slug":"simple-usage"},{"level":2,"title":"Combined with el-icon","slug":"combined-with-el-icon"},{"level":2,"title":"Using SVG icon directly","slug":"using-svg-icon-directly"},{"level":3,"title":"SVG Icons collection","slug":"svg-icons-collection-available-1-0-2-beta-66"},{"level":3,"title":"SVG Icon Attributes","slug":"svg-icon-attributes"}],"relativePath":"en-US/component/icon.md","lastUpdated":1632845314886}',G={};const P=Object.assign(G,{setup:function(g){return(g,d)=>{const A=n("ElIcon"),G=n("ElRow"),P=n("ElButton"),C=n("ElTag"),E=n("IconList");return a(),s("div",null,[h,t(G,null,{default:p((()=>[e("div",null,[t(A,{size:30},{default:p((()=>[t(o(l))])),_:1}),t(o(l))])])),_:1}),m,t(G,null,{default:p((()=>[v,e("div",b,[t(A,{size:20},{default:p((()=>[t(o(l))])),_:1}),t(A,{color:"#409EFC",class:"no-inherit"},{default:p((()=>[t(o(c))])),_:1}),t(A,null,{default:p((()=>[t(o(i))])),_:1}),t(A,{class:"is-loading"},{default:p((()=>[t(o(u))])),_:1}),t(P,{type:"primary"},{default:p((()=>[t(A,{style:{"vertical-align":"middle",color:"#fff"}},{default:p((()=>[t(o(r))])),_:1}),y])),_:1})])])),_:1}),f,t(G,null,{default:p((()=>[e("div",_,[k(" Since svg icons do not carry any attributes by default "),k(" You need to provide attributes directly "),t(o(l),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(c),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(i),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(r),{style:{width:"1em",height:"1em","margin-right":"8px"}})])])),_:1}),e("h3",q,[S,t(C,null,{default:p((()=>[I])),_:1}),T,w]),x,t(E),k(' <ul class="icon-list">\n  <li\n    v-for="component in $svgIcons"\n    :key="component"\n    @click="$copySvgIcon(component)">\n    <span class="demo-svg-icon">\n      <el-icon color="#000">\n        <component :is="component" />\n      </el-icon>\n      <span class="icon-name">{{component}}</span>\n    </span>\n  </li>\n</ul> '),V])}}});export{A as __pageData,P as default};
