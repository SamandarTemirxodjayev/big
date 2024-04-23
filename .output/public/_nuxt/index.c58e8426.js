import F from"./Icon.758ea97c.js";import{_ as C}from"./nuxt-link.12376b77.js";import{_ as P}from"./Loader.58b42ff6.js";import{r as u,f as L,h as p,c as b,a as e,t as d,k as _,v as x,l as h,d as c,b as i,w as N,o as y}from"./entry.946f4788.js";import{S as f}from"./sweetalert2.all.08fa0926.js";import{a as V}from"./axios.28bc18a3.js";import"./index.b8fe2cb5.js";const I={key:0},$={class:"container mx-auto px-4 my-32"},q={class:"flex items-center justify-around sm:flex-row flex-col sm:gap-0 gap-20 flex-wrap mt-8 py-12 border-y border-y-[#f2f2f2] border-t border-t-[#f2f2f2]"},B={class:"font-medium text-3xl"},S=["placeholder"],H=["placeholder"],M=["placeholder"],R={type:"submit",class:"sm:max-w-[490px] max-w-[300px] sm:mx-3 mx-2 w-full bg-[#1950DD] py-2 rounded text-white font-medium transition-transform scale-105"},U={class:"bg-[#323750] h-[384px] p-16 px-10 relative mt-10 sm:w-[492px] w-full"},T=e("div",{class:"w-[60px] h-[60px] bg-[#F4F7F8] absolute top-0 left-0 -mx-8 -mt-8"},null,-1),j={class:"font-semibold text-2xl text-white",style:{"font-family":"'Libre Franklin', sans-serif"}},z={class:"font-semibold text-lg text-white my-8"},E={href:"https://www.instagram.com/big.metall/",class:"flex gap-3 items-center",style:{"font-family":"'Libre Franklin', sans-serif"}},A={class:"font-semibold text-lg text-white sm:my-6 my-12 flex gap-3 items-center",style:{"font-family":"'Libre Franklin', sans-serif"}},G={class:"font-semibold text-lg text-white sm:my-6 my-12 flex gap-3 items-center",style:{"font-family":"'Libre Franklin', sans-serif"}},J={class:"font-semibold text-lg text-white sm:my-6 my-12 flex gap-3 items-center",style:{"font-family":"'Libre Franklin', sans-serif"}},K={key:1},oe={__name:"index",setup(O){let a=u(""),t=u(""),l=u(""),r=u(!0);const g=()=>{t.value=t.value.replace(/[^0-9]/g,"")},v=o=>/^[0-9]{7,}$/.test(o),w=async o=>{if(r.value=!0,o.preventDefault(),!a.value.trim()||!t.value.trim()||!l.value.trim()){await f.fire({icon:"error",title:"Илтимос, исмингиз, телефон рақамингиз ва хабарингизни киритинг."}),r.value=!1;return}if(t.value.length<7||!v(t.value)){await f.fire({icon:"error",title:"Илтимос, телефон рақамингизни дуруст ва камида 7 та рақамдан иборат киритинг."}),r.value=!1;return}try{await V.post("https://ts-express.vercel.app/sendMessage",{name:a.value,phone:t.value,message:l.value}),await f.fire({icon:"success",title:"Сўровнома муваффақиятли юборилди"}),a.value="",t.value="",l.value="",r.value=!1}catch{f.fire({icon:"error",title:"Сўровнома муваффақиятли юборилди"})}};return L(()=>{r.value=!1}),(o,s)=>{const m=F,k=C,D=P;return p(r)?(y(),b("div",K,[i(D)])):(y(),b("div",I,[e("div",$,[e("section",q,[e("form",{class:"sm:min-w-[512px] min-w-[312px] mt-10",onSubmit:w},[e("h3",B,d(o.$t("ContactPageH3")),1),_(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>h(a)?a.value=n:a=n),class:"outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1",required:"",type:"text",placeholder:o.$t("ContactPageInput")},null,8,S),[[x,p(a)]]),_(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>h(t)?t.value=n:t=n),inputmode:"numeric",class:"outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1",required:"",type:"text",onInput:g,placeholder:o.$t("ContactPageInput2")},null,40,H),[[x,p(t)]]),_(e("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>h(l)?l.value=n:l=n),class:"outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1",required:"",type:"text",placeholder:o.$t("ContactPageInput3")},null,8,M),[[x,p(l)]]),e("button",R,[c(d(o.$t("ContactPageButton"))+" ",1),i(m,{name:"fluent:send-16-filled",class:"ml-2"})])],32),e("div",U,[T,e("h4",j,d(o.$t("ConatctPageH4")),1),e("div",null,[e("h6",z,[e("a",E,[i(m,{name:"teenyicons:instagram-outline"}),c(" big.metall ")])])]),i(k,{to:"tel:+998991549999"},{default:N(()=>[e("h6",A,[i(m,{name:"carbon:phone"}),c(" +998 99 154 99 99 ")])]),_:1}),e("h6",G,[i(m,{name:"bytesize:location"}),c(d(o.$t("ContactPageH6")),1)]),e("h6",J,[i(m,{name:"quill:clock"}),c(" 9:00 - 18:00 ")])])])])]))}}};export{oe as default};