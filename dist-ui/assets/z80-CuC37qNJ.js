import{g as h,c as z}from"./index-CQwUtl0p.js";function v(c,f){for(var n=0;n<f.length;n++){const l=f[n];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in c)){const o=Object.getOwnPropertyDescriptor(l,i);o&&Object.defineProperty(c,i,o.get?o:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var g={exports:{}};(function(c,f){(function(n){n(z)})(function(n){n.defineMode("z80",function(l,i){var o=i.ez80,u,d;o?(u=/^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i,d=/^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i):(u=/^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i,d=/^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i);var x=/^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i,p=/^(n?[zc]|p[oe]?|m)\b/i,b=/^([hl][xy]|i[xy][hl]|slia|sll)\b/i,s=/^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;return{startState:function(){return{context:0}},token:function(e,r){if(e.column()||(r.context=0),e.eatSpace())return null;var t;if(e.eatWhile(/\w/))if(o&&e.eat(".")&&e.eatWhile(/\w/),t=e.current(),e.indentation()){if((r.context==1||r.context==4)&&x.test(t))return r.context=4,"var2";if(r.context==2&&p.test(t))return r.context=4,"var3";if(u.test(t))return r.context=1,"keyword";if(d.test(t))return r.context=2,"keyword";if(r.context==4&&s.test(t))return"number";if(b.test(t))return"error"}else return e.match(s)?"number":null;else{if(e.eat(";"))return e.skipToEnd(),"comment";if(e.eat('"')){for(;(t=e.next())&&t!='"';)t=="\\"&&e.next();return"string"}else if(e.eat("'")){if(e.match(/\\?.'/))return"number"}else if(e.eat(".")||e.sol()&&e.eat("#")){if(r.context=5,e.eatWhile(/\w/))return"def"}else if(e.eat("$")){if(e.eatWhile(/[\da-f]/i))return"number"}else if(e.eat("%")){if(e.eatWhile(/[01]/))return"number"}else e.next()}return null}}}),n.defineMIME("text/x-z80","z80"),n.defineMIME("text/x-ez80",{name:"z80",ez80:!0})})})();var a=g.exports;const y=h(a),w=v({__proto__:null,default:y},[a]);export{w as z};