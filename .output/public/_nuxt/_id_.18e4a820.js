import k from"./Icon.d58d7b62.js";import{_ as S,r as d,q as I,f as P,g as m,c as n,h as _,i as h,a as t,t as s,F as T,j as $,o as r,b as q,p as L,e as N}from"./entry.1e52db8c.js";import{u as j}from"./index.8d1ae631.js";import"./index.b8fe2cb5.js";const f=c=>(L("data-v-0b807f60"),c=c(),N(),c),B={class:"p-[6%] sm:my-10 my-16"},F={key:0},M=f(()=>t("div",{class:"loader my-6"},null,-1)),V=[M],z={class:"flex items-center justify-center"},E={class:"px-[45px] py-10 w-full border-separate border-spacing-y-2"},U={class:"primary bg-[#091E3A] text-white font-bold"},A={class:"noMobile p-3"},D={class:"p-3"},R={class:"p-3"},Z={class:"sm:p-3 p-2"},G=f(()=>t("th",{class:"sm:p-3 p-2"},"Карзинка",-1)),H={class:""},J={class:"p-3"},K={class:"noMobile p-3"},O={class:"p-3"},Q={class:"p-3"},W=["onClick"],X={__name:"[id]",setup(c){const y=j(),i=d(""),l=d([]),b=I(),p=d(!0);P(async()=>{try{p.value=!0;const o=await(await fetch("https://admin.bigmetall.uz/api/products")).json();i.value=b.params.id.toLowerCase(),l.value=[...o]}catch{}finally{p.value=!1}});const v=m(()=>i.value!==""?l.value.filter(e=>e.name.toLowerCase()===i.value.toLowerCase()):l.value.map(e=>({...e,primary:!1})));m(()=>[...[...new Set(l.value.map(o=>o.name))]]);const g=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"UZS"}).format(e),w=e=>{y.addToCart(e)},x=d(!1);return(e,o)=>{const C=k;return r(),n("div",B,[_(p)?(r(),n("div",F,V)):h("",!0),t("div",z,[t("table",E,[t("thead",U,[t("tr",null,[t("th",A,s(e.$t("ProductTopth1")),1),t("th",D,s(e.$t("ProductTopth2")),1),t("th",R,s(e.$t("ProductTopth4")),1),t("th",Z,s(e.$t("ProductTopth5")),1),G])]),t("tbody",H,[(r(!0),n(T,null,$(_(v),a=>(r(),n("tr",{key:a.id,class:"text-center font-medium sm:hover:bg-secondary sm:hover:text-white cursor-pointer border-b-4 border-t-4 bg-neutral-100"},[t("td",J,s(a.name),1),t("td",K,s(a.category),1),t("td",O,s(a.qalinligi),1),t("td",Q,s(g(a.price)),1),t("td",{onClick:o[0]||(o[0]=(...u)=>e.handle&&e.handle(...u)),class:"p-1"},[_(x)?h("",!0):(r(),n("div",{key:0,onClick:u=>w(a),class:"block w-[32px] h-[32px] md:w-[48px] md:h-[48px] p-6 relative lg:left-20 left-4 2xl:left-18 rounded-[4px] bg-[#323750] hover:bg-[#4b4f63] text-white text-center"},[q(C,{name:"mdi:shopping-cart",size:"1.5rem",class:"-mx-3 -mt-5"})],8,W))])]))),128))])])])])}}},oe=S(X,[["__scopeId","data-v-0b807f60"]]);export{oe as default};