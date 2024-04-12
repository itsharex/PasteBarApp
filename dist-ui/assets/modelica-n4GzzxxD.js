import{g as _,r as q}from"./index-lZtL9rhT.js";function P(h,g){for(var o=0;o<g.length;o++){const l=g[o];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in h)){const d=Object.getOwnPropertyDescriptor(l,c);d&&Object.defineProperty(h,c,d.get?d:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var W={exports:{}};(function(h,g){(function(o){o(q())})(function(o){o.defineMode("modelica",function(t,r){var u=t.indentUnit,a=r.keywords||{},p=r.builtin||{},k=r.atoms||{},v=/[;=\(:\),{}.*<>+\-\/^\[\]]/,w=/(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/,s=/[0-9]/,b=/[_a-zA-Z]/;function x(n,e){return n.skipToEnd(),e.tokenize=null,"comment"}function E(n,e){for(var i=!1,f;f=n.next();){if(i&&f=="/"){e.tokenize=null;break}i=f=="*"}return"comment"}function S(n,e){for(var i=!1,f;(f=n.next())!=null;){if(f=='"'&&!i){e.tokenize=null,e.sol=!1;break}i=!i&&f=="\\"}return"string"}function I(n,e){for(n.eatWhile(s);n.eat(s)||n.eat(b););var i=n.current();return e.sol&&(i=="package"||i=="model"||i=="when"||i=="connector")?e.level++:e.sol&&i=="end"&&e.level>0&&e.level--,e.tokenize=null,e.sol=!1,a.propertyIsEnumerable(i)?"keyword":p.propertyIsEnumerable(i)?"builtin":k.propertyIsEnumerable(i)?"atom":"variable"}function O(n,e){for(;n.eat(/[^']/););return e.tokenize=null,e.sol=!1,n.eat("'")?"variable":"error"}function D(n,e){return n.eatWhile(s),n.eat(".")&&n.eatWhile(s),(n.eat("e")||n.eat("E"))&&(n.eat("-")||n.eat("+"),n.eatWhile(s)),e.tokenize=null,e.sol=!1,"number"}return{startState:function(){return{tokenize:null,level:0,sol:!0}},token:function(n,e){if(e.tokenize!=null)return e.tokenize(n,e);if(n.sol()&&(e.sol=!0),n.eatSpace())return e.tokenize=null,null;var i=n.next();if(i=="/"&&n.eat("/"))e.tokenize=x;else if(i=="/"&&n.eat("*"))e.tokenize=E;else{if(w.test(i+n.peek()))return n.next(),e.tokenize=null,"operator";if(v.test(i))return e.tokenize=null,"operator";if(b.test(i))e.tokenize=I;else if(i=="'"&&n.peek()&&n.peek()!="'")e.tokenize=O;else if(i=='"')e.tokenize=S;else if(s.test(i))e.tokenize=D;else return e.tokenize=null,"error"}return e.tokenize(n,e)},indent:function(n,e){if(n.tokenize!=null)return o.Pass;var i=n.level;return/(algorithm)/.test(e)&&i--,/(equation)/.test(e)&&i--,/(initial algorithm)/.test(e)&&i--,/(initial equation)/.test(e)&&i--,/(end)/.test(e)&&i--,i>0?u*i:0},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}});function l(t){for(var r={},u=t.split(" "),a=0;a<u.length;++a)r[u[a]]=!0;return r}var c="algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within",d="abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh",y="Real Boolean Integer String";function z(t,r){typeof t=="string"&&(t=[t]);var u=[];function a(k){if(k)for(var v in k)k.hasOwnProperty(v)&&u.push(v)}a(r.keywords),a(r.builtin),a(r.atoms),u.length&&(r.helperType=t[0],o.registerHelper("hintWords",t[0],u));for(var p=0;p<t.length;++p)o.defineMIME(t[p],r)}z(["text/x-modelica"],{name:"modelica",keywords:l(c),builtin:l(d),atoms:l(y)})})})();var m=W.exports;const j=_(m),N=P({__proto__:null,default:j},[m]);export{N as m};
