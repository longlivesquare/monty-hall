(this["webpackJsonpmonty-hall"]=this["webpackJsonpmonty-hall"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(7),s=n.n(i),o=(n(14),n(9)),r=n(3),j=n(2),b=n.p+"static/media/door.b10ffbc9.webp",u=n(1),l=function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{src:t.image,alt:"door",onClick:function(){return t.click(t.number)}})})},h=n(8),d=n.p+"static/media/kevin.9a238e51.png",O=n.p+"static/media/car.75437ce3.jpg",f=n.p+"static/media/W.da8c527d.mp3";n(16);var y=function(){var t=Object(c.useState)(0),e=Object(j.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(3),s=Object(j.a)(i,2),y=s[0],m=(s[1],Object(c.useState)(-1)),p=Object(j.a)(m,2),w=p[0],g=p[1],x=Object(c.useState)(0),v=Object(j.a)(x,2),S=v[0],k=v[1],M=Object(c.useState)({switched:0,stayed:0,wins:0,plays:0}),C=Object(j.a)(M,2),F=C[0],T=C[1],W=Object(c.useState)(Array(y).fill(b)),A=Object(j.a)(W,2),B=A[0],E=A[1],I=function(){var t=Object(c.useState)(0),e=Object(j.a)(t,2),n=(e[0],e[1]);return function(){return n((function(t){return t+1}))}}();Object(c.useEffect)((function(){L()}),[]),Object(c.useEffect)((function(){if(1===S){for(var t=w===n?(w+Math.ceil(Math.random()*(y-1)))%y:n,e=0;e<y;e++)e!==t&&e!==n&&e!==w&&(B[e]=d);I()}}),[S]);var D=Object(h.a)(f),J=Object(j.a)(D,1)[0],L=function(){var t=Math.floor(Math.random()*y);a(t)},N=function(t){g(t),k(1)},P=function(t){for(var e=0;e<y;e++)B[e]=e===n?O:d;t===n&&(J(),t===w?(console.log("Stay winner"),T((function(t){return Object(r.a)(Object(r.a)({},t),{},{stayed:t.stayed+1,wins:t.wins+1})}))):(console.log("Switch winner"),T((function(t){return Object(r.a)(Object(r.a)({},t),{},{switched:t.switched+1,wins:t.wins+1})})))),T((function(t){return Object(r.a)(Object(r.a)({},t),{},{plays:t.plays+1})})),g(t),k(2)},H=function(){L(),E(Array(y).fill(b)),g(-1),k(0)};return Object(u.jsxs)("div",{className:"monty-hall-main",children:[Object(u.jsx)("h1",{children:"Welcome to the Monty Hall Show"}),Object(u.jsx)("p",{children:"Behind one of these doors is a car. If you can correctly choose that door, you get it!"}),Object(u.jsx)("div",{className:"doors",children:Object(o.a)(Array(y).keys()).map((function(t){return Object(u.jsx)(l,{number:t,image:B[t],click:0===S?N:1===S?P:H},t)}))}),1===S?Object(u.jsx)("h3",{children:"The host has revealed one of the other doors after selecting. Do you want to switch?"}):null,Object(u.jsx)("button",{onClick:H,children:"Restart"}),Object(u.jsx)("h2",{children:"Stats:"}),"Total plays: ",F.plays,Object(u.jsx)("br",{}),"Total Wins: ",F.wins,Object(u.jsx)("br",{}),"Wins by staying: ",F.stayed,Object(u.jsx)("br",{}),"Wins by switching: ",F.switched]})},m=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.2aef33ce.chunk.js.map