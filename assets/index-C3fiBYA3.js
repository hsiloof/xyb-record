const __vite__fileDeps=["./LayoutPage-CQ6EMugs.js","./@vue-qcdcR8MH.js","./pinia-B_EXSN9o.js","./pinia-plugin-persistedstate-RV7uh3T-.js","./element-plus-CyXWCmmH.js","./lodash-es-iLqVnzBD.js","./@vueuse-C2LPeFFK.js","./@element-plus-DIObVDyY.js","./@popperjs-egqNnATr.js","./@ctrl-riLredlm.js","./dayjs-s7z1odr8.js","./async-validator-D4ewLrP1.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-B6fDCfyv.js","./@floating-ui-D61SyGJ0.js","./element-plus-CxwE4qr4.css","./vue-router-h4mGepX0.js","./LayoutPage-DiiE-Uva.css","./PartyEx-BcFy30Hq.js","./PartyEx-CP6_wjTG.css","./22Y7M-DO_J6wap.js","./22Y7M-CzIox9-U.css","./Scribble-DB4ulAqy.js","./AssistTool-BIDy9HFr.js","./AssistTool-CGPKhPYJ.css","./Translate-DFQEKaqh.js","./Translate-DaA80rS8.css","./DiceRoll-7EERZvT_.js","./DiceRoll-C8Tx5qgl.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ah as x,o as g,M as O,e as v,k as E,c as P,a as c,P as h,ak as L,V as S,ay as k,az as A,j as V,U as $,at as T}from"./@vue-qcdcR8MH.js";import{c as B}from"./pinia-B_EXSN9o.js";import{s as C}from"./pinia-plugin-persistedstate-RV7uh3T-.js";import{i as D}from"./element-plus-CyXWCmmH.js";import{Q as U}from"./@element-plus-DIObVDyY.js";import{u as M,c as q,a as N}from"./vue-router-h4mGepX0.js";import"./lodash-es-iLqVnzBD.js";import"./@vueuse-C2LPeFFK.js";import"./@popperjs-egqNnATr.js";import"./@ctrl-riLredlm.js";import"./dayjs-s7z1odr8.js";import"./async-validator-D4ewLrP1.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-D61SyGJ0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const y=(n,r)=>{const e=n.__vccOpts||n;for(const[a,t]of r)e[a]=t;return e},j={};function F(n,r){const e=x("router-view");return g(),O(e)}const z=y(j,[["render",F]]),H="modulepreload",W=function(n,r){return new URL(n,r).href},b={},u=function(r,e,a){let t=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),f=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));t=Promise.all(e.map(i=>{if(i=W(i,a),i in b)return;b[i]=!0;const l=i.endsWith(".css"),R=l?'[rel="stylesheet"]':"";if(!!a)for(let p=o.length-1;p>=0;p--){const _=o[p];if(_.href===i&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${R}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":H,l||(m.as="script",m.crossOrigin=""),m.href=i,f&&m.setAttribute("nonce",f),document.head.appendChild(m),l)return new Promise((p,_)=>{m.addEventListener("load",p),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${i}`)))})}))}return t.then(()=>r()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},w=n=>(k("data-v-f2f4e9da"),n=n(),A(),n),Y={class:"login"},K=w(()=>c("h1",null,"xyb.for.record",-1)),Q={class:"input-box"},G={class:"input-box"},J=w(()=>c("div",{class:"info"},[c("p",null,"输入姓名缩写，若无法登录可能有以下原因："),c("p",null,"1、代码没写好；2、无查看权限")],-1)),X={__name:"LoginForm",setup(n){const r=M(),e=v(""),a=v(""),t=E(()=>e.value.match(/^xyb$/)),o=E(()=>e.value.toLowerCase().match(/^zxq$|^syd$|^pmd$|^fy$/)),s=()=>{o.value?(localStorage.setItem("token","traveller"),localStorage.setItem("name",e.value.toUpperCase()),r.push({name:"PartyEx"})):t.value&&a.value.match("112358")?(localStorage.setItem("token","admin"),localStorage.setItem("name",e.value.toUpperCase()),r.push({name:"PartyEx"})):window.alert("无法登录"),e.value="",a.value=""};return(f,i)=>(g(),P("div",Y,[K,c("div",Q,[h(c("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>e.value=l),type:"text",placeholder:"Traveller"},null,512),[[L,e.value]])]),h(c("div",G,[h(c("input",{"onUpdate:modelValue":i[1]||(i[1]=l=>a.value=l),type:"password",placeholder:"Password"},null,512),[[L,a.value]])],512),[[S,t.value]]),c("button",{class:"btn",onClick:s},"Login"),J]))}},Z=y(X,[["__scopeId","data-v-f2f4e9da"]]),ee={class:"wrapper"},te=["src"],oe={__name:"Login",setup(n){const r=v(null),e=Math.floor(Math.random()*10+1),a=()=>{r.value=`./img/background/${e}.jpg`};return V(()=>{a()}),(t,o)=>(g(),P("div",ee,[c("img",{src:r.value},null,8,te),$(Z)]))}},re=y(oe,[["__scopeId","data-v-7ab7951a"]]),I=q({history:N("./"),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:re},{path:"/home",component:()=>u(()=>import("./LayoutPage-CQ6EMugs.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url),redirect:"/home/partyEx",children:[{path:"/home/partyEx",name:"PartyEx",component:()=>u(()=>import("./PartyEx-BcFy30Hq.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19]),import.meta.url),children:[{path:"/home/partyEx/22Y7M",name:"22Y7M",component:()=>u(()=>import("./22Y7M-DO_J6wap.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,21]),import.meta.url)}]},{path:"/home/scribble",name:"Scribble",component:()=>u(()=>import("./Scribble-DB4ulAqy.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url)},{path:"/home/tool",name:"AssistTool",component:()=>u(()=>import("./AssistTool-BIDy9HFr.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,24]),import.meta.url),children:[{path:"/home/tool/translate",name:"translate",component:()=>u(()=>import("./Translate-DFQEKaqh.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,26]),import.meta.url)},{path:"/home/tool/diceRoll",name:"diceRoll",component:()=>u(()=>import("./DiceRoll-7EERZvT_.js"),__vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,28]),import.meta.url)}]}]}]});I.beforeEach((n,r,e)=>{n.name!=="Login"?localStorage.getItem("token")?e():e({name:"Login"}):e()});const d=T(z);for(const[n,r]of Object.entries(U))d.component(n,r);d.use(B().use(C));d.use(I);d.use(D);d.mount("#app");export{y as _,I as r};
//# sourceMappingURL=index-C3fiBYA3.js.map
