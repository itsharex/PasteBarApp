import{g,c as v}from"./index-DIOMjnvC.js";import{a as b}from"./yaml-CTprmGVM.js";function k(f,u){for(var n=0;n<u.length;n++){const a=u[n];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in f)){const o=Object.getOwnPropertyDescriptor(a,r);o&&Object.defineProperty(f,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}};(function(f,u){(function(n){n(v,b)})(function(n){var a=0,r=1,o=2;n.defineMode("yaml-frontmatter",function(s,p){var l=n.getMode(s,"yaml"),m=n.getMode(s,p&&p.base||"gfm");function c(t){return t.state==r?{mode:l,state:t.yaml}:{mode:m,state:t.inner}}return{startState:function(){return{state:a,yaml:null,inner:n.startState(m)}},copyState:function(t){return{state:t.state,yaml:t.yaml&&n.copyState(l,t.yaml),inner:n.copyState(m,t.inner)}},token:function(t,e){if(e.state==a)return t.match("---",!1)?(e.state=r,e.yaml=n.startState(l),l.token(t,e.yaml)):(e.state=o,m.token(t,e.inner));if(e.state==r){var y=t.sol()&&t.match(/(---|\.\.\.)/,!1),i=l.token(t,e.yaml);return y&&(e.state=o,e.yaml=null),i}else return m.token(t,e.inner)},innerMode:c,indent:function(t,e,y){var i=c(t);return i.mode.indent?i.mode.indent(i.state,e,y):n.Pass},blankLine:function(t){var e=c(t);if(e.mode.blankLine)return e.mode.blankLine(e.state)}}})})})();var d=S.exports;const x=g(d),T=k({__proto__:null,default:x},[d]);export{T as y};
