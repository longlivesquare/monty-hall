(this["webpackJsonpmonty-hall"]=this["webpackJsonpmonty-hall"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(7),i=c.n(o),s=(c(14),c(9)),r=c(4),b=c(2),j=c.p+"static/media/door.b10ffbc9.webp",d=c(1),h=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{src:e.selected||e.revealed?e.behindImg:j,alt:"door",onClick:function(){return e.click(e.number)}})})},l=c(8),u=c.p+"static/media/kevin.9a238e51.png",O=c.p+"static/media/car.75437ce3.jpg",f=c.p+"static/media/W.da8c527d.mp3";c(16);var m=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(3),i=Object(b.a)(o,2),j=i[0],m=(i[1],Object(n.useState)(-1)),y=Object(b.a)(m,2),g=y[0],w=y[1],p=Object(n.useState)(-1),x=Object(b.a)(p,2),v=x[0],S=x[1],k=Object(n.useState)(0),M=Object(b.a)(k,2),C=M[0],F=M[1],I=Object(n.useState)({switched:0,stayed:0}),W=Object(b.a)(I,2),B=W[0],D=W[1];Object(n.useEffect)((function(){J()}),[]),Object(n.useEffect)((function(){if(1===C)if(g!==c)S(c);else{var e=Math.ceil(Math.random()*(j-1));S((g+e)%j)}}),[g]);var E=Object(l.a)(f),T=Object(b.a)(E,1)[0],J=function(){a(Math.floor(Math.random()*j))},L=function(e){w(e),F(1)},N=function(e){e===c&&(T(),e===g?(console.log("Stay winner"),D((function(e){return Object(r.a)(Object(r.a)({},e),{},{stayed:e.stayed+1})}))):(console.log("Switch winner"),D((function(e){return Object(r.a)(Object(r.a)({},e),{},{switched:e.switched+1})})))),w(e),F(2)},P=function(){window.confirm("Do you want to try again?")&&(J(),S(-1),w(-1),F(0))};return Object(d.jsxs)("div",{className:"monty-hall-main",children:[Object(d.jsx)("h1",{children:"Welcome to the Monty Hall Show"}),Object(d.jsx)("p",{children:"Behind one of these doors is a car. If you can correctly choose that door, you get it!"}),Object(d.jsx)("div",{className:"doors",children:Object(s.a)(Array(j).keys()).map((function(e){return Object(d.jsx)(h,{number:e,click:0===C?L:1===C?N:P,behindImg:e===c?O:u,selected:e===g&&2===C,revealed:e!==v&&e!==g&&C>=1},e)}))}),1===C?Object(d.jsx)("h3",{children:"The host has revealed one of the other doors after selecting. Do you want to switch?"}):null,Object(d.jsx)("button",{onClick:P,children:"Restart"}),Object(d.jsx)("h2",{children:"Stats:"}),"Wins by staying: ",B.stayed,Object(d.jsx)("br",{}),"Wins by switching: ",B.switched]})},y=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.3012065e.chunk.js.map