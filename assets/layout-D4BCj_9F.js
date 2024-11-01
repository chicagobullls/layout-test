import{_ as r,o as i,c as n,a as t,e as k,f as _,g,n as b,u as e,t as l,b as p,w as f,F as v,h as $,i as B}from"./main-CHgNYoPw.js";const y={},S={class:"products-list"},w={class:"products-list__content"};function C(a,s){return i(),n("div",S,[s[0]||(s[0]=t("h3",{class:"products-list__title"}," Что на прилавке ",-1)),t("div",w,[k(a.$slots,"default",{},void 0)])])}const x=r(y,[["render",C],["__scopeId","data-v-3c94f6f0"]]),o={mainBlock:{id:1,title:"Фестиваль фермерских товаров",url:"#",subtitle:"20-22 сентября",imgSrc:"#",backgroundGradient:"linear-gradient(180deg, rgba(173, 180, 148, 0) 0%, #aeb595 100%)"},asideBlock:{title:"Выставка тыкв",description:"Местные фермеры покажут свои самые большие тыквы. Посоревнуются чья тыква тяжелее и крепче.",imgSrc:"#",url:"#"}},L="/layout-test/assets/patisons-mobile-ybrSXVLu.png",m="/layout-test/assets/patisons-tablet-CmlyeB8G.png",M={class:"main-block"},I={class:"main-block__overlay-wrapper"},V=["srcset"],D=["srcset"],H=["src"],E={class:"main-block__content"},G={class:"main-block__info"},P={class:"main-block__info-subtitle"},A={class:"main-block__info-title"},T=["href"],q=_({__name:"MainBlock",setup(a){const s=g(()=>o.mainBlock.backgroundGradient);return(c,u)=>(i(),n("div",M,[t("div",I,[t("div",{class:"main-block__overlay",style:b({background:s.value})},null,4)]),t("picture",null,[t("source",{media:"(max-width: 768px)",srcset:e(L)},null,8,V),t("source",{media:"(min-width: 769px)",srcset:e(m)},null,8,D),t("img",{src:e(m),alt:"banner-image",class:"main-block__image"},null,8,H)]),t("div",E,[t("div",G,[t("span",P,l(e(o).mainBlock.subtitle),1),t("span",A,l(e(o).mainBlock.title),1)]),t("a",{href:e(o).mainBlock.url,class:"main-block__link"},u[0]||(u[0]=[t("svg",{width:"62",height:"30",viewBox:"0 0 62 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M61.4142 16.4142C62.1953 15.6332 62.1953 14.3668 61.4142 13.5858L48.6863 0.857864C47.9052 0.0768156 46.6389 0.0768156 45.8579 0.857864C45.0768 1.63891 45.0768 2.90524 45.8579 3.68629L57.1716 15L45.8579 26.3137C45.0768 27.0948 45.0768 28.3611 45.8579 29.1421C46.6389 29.9232 47.9052 29.9232 48.6863 29.1421L61.4142 16.4142ZM0 17H60V13H0V17Z",fill:"white"})],-1)]),8,T)])]))}}),z=r(q,[["__scopeId","data-v-7470cd23"]]),F="/layout-test/assets/pumpkin-mobile-CeyiUALs.png",h="/layout-test/assets/pumpkin-tablet-BncOMLWf.png",N={class:"aside-block"},R={class:"aside-block__content"},Z={class:"aside-block__title-container"},j={class:"aside-block__title-container-title"},K={class:"aside-block__description"},O=["href"],U=["srcset"],W=["srcset"],X=["src"],J=_({__name:"AsideBlock",setup(a){return(s,c)=>(i(),n("div",N,[t("div",R,[t("div",Z,[c[0]||(c[0]=t("span",{class:"aside-block__title-container-subtitle"},"А также:",-1)),t("span",j,l(e(o).asideBlock.title),1)]),t("p",K,l(e(o).asideBlock.description),1),t("a",{class:"aside-block__link",href:e(o).asideBlock.url},"еще о выставке",8,O)]),t("picture",null,[t("source",{media:"(max-width: 768px)",srcset:e(F)},null,8,U),t("source",{media:"(min-width: 769px)",srcset:e(h)},null,8,W),t("img",{src:e(h),alt:"banner-image",class:"aside-block__image"},null,8,X)])]))}}),Q=r(J,[["__scopeId","data-v-37ce65c3"]]),Y={class:"head-banner"},tt=_({__name:"HeadBanner",setup(a){return(s,c)=>(i(),n("div",Y,[p(z),p(Q)]))}}),st=r(tt,[["__scopeId","data-v-e80c2f7b"]]),et={class:"product-card"},ct={class:"product-card__content"},it=["src","alt"],ot={class:"product-card__info"},nt={class:"product-card__title"},at={class:"product-card__price"},lt=_({__name:"ProductCard",props:{title:{},price:{},imgSrc:{}},setup(a){return(s,c)=>(i(),n("article",et,[t("div",ct,[c[0]||(c[0]=t("a",{class:"product-card__link",href:"#"},null,-1)),t("img",{class:"product-card__image",src:s.imgSrc,alt:s.title},null,8,it),t("div",ot,[t("h3",nt,l(s.title),1),t("p",at,l(s.price)+" ₽",1)])])]))}}),rt=r(lt,[["__scopeId","data-v-70b786f3"]]),_t="/layout-test/assets/product-1-i1DyEq0K.png",dt="/layout-test/assets/product-2-BPTz_Eiq.png",pt="/layout-test/assets/product-3-DdjVLgRi.png",ut="/layout-test/assets/product-4-D1H8_Mw_.png",mt="/layout-test/assets/product-5-pE7af7pR.png",ht={products:[{id:1,title:"Тыква",price:500,imgSrc:_t},{id:2,title:"Цветная капуста",price:350,imgSrc:dt},{id:3,title:"Мята",price:150,imgSrc:pt},{id:4,title:"Базилик",price:450,imgSrc:ut},{id:5,title:"Кабачок",price:50,imgSrc:mt}]},gt={class:"container"},kt=_({__name:"layout",setup(a){const s=g(()=>ht.products);return(c,u)=>(i(),n("div",gt,[p(st),p(x,null,{default:f(()=>[(i(!0),n(v,null,$(s.value,d=>(i(),B(rt,{key:d.id,title:d.title,price:d.price,imgSrc:d.imgSrc},null,8,["title","price","imgSrc"]))),128))]),_:1})]))}}),ft=r(kt,[["__scopeId","data-v-691704a1"]]);export{ft as default};
