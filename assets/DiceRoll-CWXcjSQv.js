import{_ as g}from"./index-BYGlsAO_.js";import{aA as v,ah as d,o as f,c as D,a as o,U as s,O as p,ay as M,az as U,e as b,F as k,a7 as y,T as R}from"./@vue-qcdcR8MH.js";import"./pinia-B_EXSN9o.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./element-plus-CyXWCmmH.js";import"./lodash-es-iLqVnzBD.js";import"./@vueuse-C2LPeFFK.js";import"./@element-plus-DIObVDyY.js";import"./@popperjs-egqNnATr.js";import"./@ctrl-riLredlm.js";import"./dayjs-s7z1odr8.js";import"./async-validator-D4ewLrP1.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-D61SyGJ0.js";import"./vue-router-h4mGepX0.js";const S=i=>(M("data-v-7e64c8bc"),i=i(),U(),i),$={class:"diceSpace"},w={class:"dice"},z={class:"num"},B=["value"],L=S(()=>o("div",{class:"symbol"},"D",-1)),E={class:"point"},F=["value"],N={__name:"Dice",props:{dice:{},diceModifiers:{},point:{},pointModifiers:{},addDice:{},addDiceModifiers:{},removeDice:{},removeDiceModifiers:{}},emits:["update:dice","update:point","update:addDice","update:removeDice"],setup(i){const a=v(i,"dice"),r=v(i,"point"),u=v(i,"addDice"),m=v(i,"removeDice");return(x,e)=>{const t=d("CirclePlus"),l=d("el-icon"),h=d("Remove");return f(),D("div",$,[o("div",w,[o("div",z,[o("input",{type:"text",value:a.value,onInput:e[0]||(e[0]=n=>a.value=n.target.value)},null,40,B)]),L,o("div",E,[o("input",{type:"text",value:r.value,onInput:e[1]||(e[1]=n=>r.value=n.target.value)},null,40,F)])]),o("div",{class:"add",onClick:e[2]||(e[2]=(...n)=>u.value&&u.value(...n))},[s(l,{size:20},{default:p(()=>[s(t)]),_:1})]),o("div",{class:"remove",onClick:e[3]||(e[3]=(...n)=>m.value&&m.value(...n))},[s(l,{size:20},{default:p(()=>[s(h)]),_:1})])])}}},O=g(N,[["__scopeId","data-v-7e64c8bc"]]),P={class:"container"},V={class:"getResult"},A={class:"result"},T={__name:"DiceRoll",setup(i){const a=b([{num:1,point:6}]),r=b(0),u=()=>{a.value.push({num:1,point:6})},m=()=>{a.value.length!==1&&a.value.pop()},x=()=>{let e=0;a.value.forEach(t=>{if(t.num>=1&&t.point>=1)for(let l=0;l<t.num;l++)e+=Math.floor(Math.random()*t.point)+1}),r.value=e};return(e,t)=>{const l=d("el-scrollbar"),h=d("el-aside"),n=d("el-main"),C=d("el-container");return f(),D("div",P,[s(C,null,{default:p(()=>[s(h,{width:"60%"},{default:p(()=>[s(l,{height:"600px"},{default:p(()=>[(f(!0),D(k,null,y(a.value,(_,I)=>(f(),D("div",{key:I},[s(O,{dice:_.num,"onUpdate:dice":c=>_.num=c,point:_.point,"onUpdate:point":c=>_.point=c,addDice:u,"onUpdate:addDice":t[0]||(t[0]=c=>u=c),removeDice:m,"onUpdate:removeDice":t[1]||(t[1]=c=>m=c)},null,8,["dice","onUpdate:dice","point","onUpdate:point"])]))),128))]),_:1})]),_:1}),s(n,null,{default:p(()=>[o("div",V,[o("div",{class:"roll",onClick:x},"ROLL!"),o("div",A,R(r.value),1)])]),_:1})]),_:1})])}}},se=g(T,[["__scopeId","data-v-909a16bb"]]);export{se as default};
//# sourceMappingURL=DiceRoll-CWXcjSQv.js.map
