import{g as u,c}from"./index-BLHgoTgd.js";function s(r,f){for(var o=0;o<f.length;o++){const i=f[o];if(typeof i!="string"&&!Array.isArray(i)){for(const e in i)if(e!=="default"&&!(e in r)){const n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:()=>i[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(r,f){(function(o){o(c)})(function(o){o.defineMode("properties",function(){return{token:function(i,e){var n=i.sol()||e.afterSection,p=i.eol();if(e.afterSection=!1,n&&(e.nextMultiline?(e.inMultiline=!0,e.nextMultiline=!1):e.position="def"),p&&!e.nextMultiline&&(e.inMultiline=!1,e.position="def"),n)for(;i.eatSpace(););var t=i.next();return n&&(t==="#"||t==="!"||t===";")?(e.position="comment",i.skipToEnd(),"comment"):n&&t==="["?(e.afterSection=!0,i.skipTo("]"),i.eat("]"),"header"):t==="="||t===":"?(e.position="quote",null):(t==="\\"&&e.position==="quote"&&i.eol()&&(e.nextMultiline=!0),e.position)},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}}),o.defineMIME("text/x-properties","properties"),o.defineMIME("text/x-ini","properties")})})();var l=x.exports;const d=u(l),M=s({__proto__:null,default:d},[l]);export{M as p};
