(this.webpackJsonpcubosflix=this.webpackJsonpcubosflix||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(11),r=s.n(c),i=s(10),o=s(8),l=s(2),d=s.n(l),j=s(12),u=s(6),b=s(3),h=(s(7),s(18),s(0));var p=function(e){var t=e.filmes,s=e.addFilmesSacola;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsxs)("div",{className:"card-movie",style:{background:"linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url(".concat(e.poster_path,") no-repeat center / cover")},children:[Object(h.jsxs)("div",{className:"card-info",children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsxs)("div",{className:"card-star",children:[Object(h.jsx)("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z",fill:"#FBCD6E"})}),e.vote_average]})]}),Object(h.jsxs)("button",{className:"btn btn-roxo",onClick:function(){return s(1,e.id)},children:["Sacola ",Object(h.jsxs)("span",{children:["R$ ",e.price]})]})]},e.id)}))})},m=(s(20),s.p+"static/media/user-icon.a3782081.jpg");var x=function(e){var t=e.pesquisarFilmes,s=e.pesquisa,n=e.setPesquisa;return Object(h.jsxs)("nav",{children:[Object(h.jsxs)("svg",{width:"32",height:"36",viewBox:"0 0 32 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M0.84523 21.3983L22.5309 8.74064C23.0166 8.45862 23.6384 8.48562 24.0931 8.81864C26.1534 10.3217 27.9941 11.8458 29.2222 13.1269C29.2222 13.1269 30.2802 14.1529 30.7381 14.8039C31.4774 15.692 31.8332 16.853 31.8332 17.9811C31.8332 19.2472 31.4434 20.4442 30.6669 21.4013C30.4906 21.5723 29.8193 22.3253 29.1851 22.9403C25.4852 26.7685 15.8272 33.0929 10.7476 35.01C10.0083 35.319 8.03461 35.964 7.01065 36C6.02381 36 5.071 35.796 4.15531 35.349C3.02927 34.7339 2.14761 33.7799 1.65264 32.6488C1.33401 31.8628 0.842137 29.5047 0.842137 29.4357C0.523502 27.7526 0.2853 25.3885 0.167746 22.6283C0.146091 22.1333 0.409042 21.6533 0.84523 21.3983Z",fill:"#FCBDEB"}),Object(h.jsx)("path",{opacity:"0.4",d:"M2.29534 14.5806C1.33944 15.1416 0.136051 14.4246 0.182454 13.3475C0.296915 10.8214 0.494901 8.59529 0.736197 6.9392C0.773319 6.9032 1.26519 3.96605 1.83131 2.973C2.81815 1.12791 4.7547 -0.000145912 6.83665 -0.000145912H7.00989C8.35248 0.032855 11.2078 1.16091 11.2078 1.22991C12.6463 1.79694 14.5241 2.75699 16.5442 3.91205C17.4537 4.43408 17.4753 5.71514 16.5658 6.24617L2.29534 14.5806Z",fill:"#F089D3"})]}),Object(h.jsxs)("form",{onSubmit:t,className:"search-container",children:[Object(h.jsx)("input",{type:"text",className:"nav-search",placeholder:"Pesquise filmes...",value:s,onChange:function(e){return n(e.target.value)}}),Object(h.jsxs)("svg",{onClick:t,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("circle",{cx:"6.84448",cy:"6.84448",r:"5.99243",stroke:"white",strokeWidth:"1.00001",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{opacity:"0.4",d:"M11.0122 11.3232L13.3616 13.6665",stroke:"white",strokeWidth:"1.00001",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Object(h.jsxs)("div",{className:"user-info",children:["Bem vinda, Stef!",Object(h.jsx)("img",{src:m,alt:"Imagem do usu\xe1rio"})]})]})},O=(s(21),s.p+"static/media/person-illustration.624d0311.svg"),f=s.p+"static/media/plus-icon.53e515a2.svg",v=s.p+"static/media/minus-icon.6a22578b.svg",g=s.p+"static/media/trash-icon.d7e9e93e.svg";function w(e){var t=e.filme,s=e.addFilmesSacola;return Object(h.jsxs)("div",{className:"item-container",children:[Object(h.jsx)("img",{src:t.poster_path,alt:"Poster do filme ".concat(t.title)}),Object(h.jsx)("p",{className:"item-title",children:t.title}),Object(h.jsxs)("p",{children:["R$ ",t.price]}),Object(h.jsxs)("div",{className:"item-button",children:[Object(h.jsx)("button",{className:"item-btn add",onClick:function(){return s(1,t.id)},children:Object(h.jsx)("img",{src:f,alt:"Icone de adi\xe7\xe3o na sacola"})}),t.qtd_bag,Object(h.jsxs)("button",{className:"item-btn minus",onClick:function(){return s(-1,t.id)},children:[1===t.qtd_bag&&Object(h.jsx)("img",{src:g,alt:"Icone de remover item da sacola"}),t.qtd_bag>1&&Object(h.jsx)("img",{src:v,alt:"Icone de subtra\xe7\xe3o na sacola"})]})]})]})}var k=function(e){var t=e.filmes,s=e.addFilmesSacola,n=e.total;return Object(h.jsxs)("div",{className:"bag-container",children:[Object(h.jsxs)("div",{className:"bag-title",children:[Object(h.jsxs)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.7348 35.8354L11.0955 30.2701C7.55479 28.2259 5.57683 25.3787 9.32017 20.6769L14.246 14.2198C16.2045 11.9261 18.4102 11.889 19.8477 12.7189L31.6008 19.5046C33.0593 20.3467 33.9922 22.2945 33.1017 25.1062L29.9727 32.6006C27.9918 37.5449 24.2755 37.8796 20.7348 35.8354Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{opacity:"0.4",d:"M30.8278 18.72C32.4185 15.9648 31.4745 12.4417 28.7193 10.851V10.851C27.3958 10.0794 25.8194 9.86674 24.3388 10.2601C22.8582 10.6535 21.5952 11.6205 20.8292 12.9473V12.9473",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M26.261 23.0168L26.2082 22.9863",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M19.5286 19.1296L19.4757 19.0991",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(h.jsx)("h2",{children:"Sacola"})]}),Object(h.jsxs)("div",{className:"bag-content",children:[0===t.length&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Sua sacola est\xe1 vazia"}),Object(h.jsx)("p",{children:"Adicione filmes agora"}),Object(h.jsx)("img",{src:O,alt:"Ilustra\xe7\xe3o de uma pessoa se enconstado em um celular com o logo da Cubos Flix"})]}),t.length>0&&Object(h.jsxs)(h.Fragment,{children:[t.map((function(e){return Object(h.jsx)(w,{filme:e,addFilmesSacola:s},e.id)})),Object(h.jsxs)("button",{className:"btn btn-rosa",children:["Confirme os seus dados ",Object(h.jsxs)("span",{children:["R$ ",n]})]})]})]})]})};var C=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)([]),r=Object(b.a)(c,2),l=r[0],m=r[1],O=Object(n.useState)([]),f=Object(b.a)(O,2),v=f[0],g=f[1],w=Object(n.useState)(""),C=Object(b.a)(w,2),L=C[0],N=C[1],S=Object(n.useState)(!0),F=Object(b.a)(S,2),y=F[0],_=F[1],q=Object(n.useState)(""),B=Object(b.a)(q,2),M=B[0],I=B[1],E=Object(n.useState)(!0),R=Object(b.a)(E,2),W=R[0],D=R[1],P=Object(n.useState)(0),Z=Object(b.a)(P,2),H=Z[0],$=Z[1];function J(){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(d.a.mark((function e(){var t,s,n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,n=s.results,a=[],c=Object(j.a)(n);try{for(c.s();!(r=c.n()).done;)i=r.value,a.push({id:i.id,title:i.title,poster_path:i.poster_path,vote_average:i.vote_average,price:i.price})}catch(o){c.e(o)}finally{c.f()}return _(!1),e.abrupt("return",a);case 16:return e.prev=16,e.t0=e.catch(1),_(!1),e.abrupt("return",I(M.message));case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function V(){return(V=Object(u.a)(d.a.mark((function e(){var t,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:if(t=e.sent,!M){e.next=5;break}return e.abrupt("return");case 5:a(t),s=(s=Object(o.a)(t).sort((function(e,t){return t.vote_average-e.vote_average}))).splice(0,5),g(s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(d.a.mark((function e(t,n){var a,c,r,j;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(o.a)(l),c=s.findIndex((function(e){return e.id===n})),-1===(r=a.findIndex((function(e){return e.id===n})))&&(a.push(Object(i.a)(Object(i.a)({},s[c]),{},{qtd_bag:0})),r=a.length-1),(j=H+t*a[r].price)<0&&(j=0),a[r].qtd_bag+=t,0===a[r].qtd_bag&&a.splice(r,1),m(Object(o.a)(a)),$(j);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(u.a)(d.a.mark((function e(t){var s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,J();case 3:if(s=e.sent,L){e.next=8;break}return D(!0),a(s),e.abrupt("return");case 8:n=s.filter((function(e){return e.title.toLowerCase().includes(L.toLowerCase())})),a(n),D(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){V.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(x,{pesquisarFilmes:function(e){return G.apply(this,arguments)},pesquisa:L,setPesquisa:N}),Object(h.jsxs)("div",{className:"container",children:[M&&Object(h.jsxs)("p",{className:"error",children:[Object(h.jsx)("span",{children:"Error:"})," ",M]}),y&&Object(h.jsx)("p",{className:"loading"}),!y&&!M&&Object(h.jsxs)("div",{children:[W&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Top Filmes"}),Object(h.jsx)("div",{className:"container-filmes",children:Object(h.jsx)(p,{filmes:v,addFilmesSacola:z})})]}),Object(h.jsx)("h2",{children:"Filmes"}),Object(h.jsx)("div",{className:"container-filmes",children:Object(h.jsx)(p,{filmes:s,addFilmesSacola:z})})]}),Object(h.jsx)(k,{filmes:l,addFilmesSacola:z,total:H})]})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))},7:function(e,t,s){}},[[22,1,2]]]);
//# sourceMappingURL=main.579d9efb.chunk.js.map