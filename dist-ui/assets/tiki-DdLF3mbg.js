import{g as A,r as C}from"./index-lZtL9rhT.js";function q(k,x){for(var a=0;a<x.length;a++){const l=x[a];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in k)){const f=Object.getOwnPropertyDescriptor(l,i);f&&Object.defineProperty(k,i,f.get?f:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var E={exports:{}};(function(k,x){(function(a){a(C())})(function(a){a.defineMode("tiki",function(l){function i(e,t,n){return function(o,g){for(;!o.eol();){if(o.match(t)){g.tokenize=c;break}o.next()}return n&&(g.tokenize=n),e}}function f(e){return function(t,n){for(;!t.eol();)t.next();return n.tokenize=c,e}}function c(e,t){function n(P){return t.tokenize=P,P(e,t)}var o=e.sol(),g=e.next();switch(g){case"{":return e.eat("/"),e.eatSpace(),e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=b,"tag";case"_":if(e.eat("_"))return n(i("strong","__",c));break;case"'":if(e.eat("'"))return n(i("em","''",c));break;case"(":if(e.eat("("))return n(i("variable-2","))",c));break;case"[":return n(i("variable-3","]",c));case"|":if(e.eat("|"))return n(i("comment","||"));break;case"-":if(e.eat("="))return n(i("header string","=-",c));if(e.eat("-"))return n(i("error tw-deleted","--",c));break;case"=":if(e.match("=="))return n(i("tw-underline","===",c));break;case":":if(e.eat(":"))return n(i("comment","::"));break;case"^":return n(i("tw-box","^"));case"~":if(e.match("np~"))return n(i("meta","~/np~"));break}if(o)switch(g){case"!":return e.match("!!!!!")||e.match("!!!!")||e.match("!!!")||e.match("!!"),n(f("header string"));case"*":case"#":case"+":return n(f("tw-listitem bracket"))}return null}var _=l.indentUnit,h,p;function b(e,t){var n=e.next(),o=e.peek();return n=="}"?(t.tokenize=c,"tag"):n=="("||n==")"?"bracket":n=="="?(p="equals",o==">"&&(e.next(),o=e.peek()),/[\'\"]/.test(o)||(t.tokenize=L()),"operator"):/[\'\"]/.test(n)?(t.tokenize=N(n),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function N(e){return function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=b;break}return"string"}}function L(){return function(e,t){for(;!e.eol();){var n=e.next(),o=e.peek();if(n==" "||n==","||/[ )}]/.test(o)){t.tokenize=b;break}}return"string"}}var r,s;function d(){for(var e=arguments.length-1;e>=0;e--)r.cc.push(arguments[e])}function u(){return d.apply(null,arguments),!0}function w(e,t){var n=r.context&&r.context.noIndent;r.context={prev:r.context,pluginName:e,indent:r.indented,startOfLine:t,noIndent:n}}function z(){r.context&&(r.context=r.context.prev)}function S(e){if(e=="openPlugin")return r.pluginName=h,u(v,j(r.startOfLine));if(e=="closePlugin"){var t=!1;return r.context?(t=r.context.pluginName!=h,z()):t=!0,t&&(s="error"),u(I(t))}else return e=="string"&&((!r.context||r.context.name!="!cdata")&&w("!cdata"),r.tokenize==c&&z()),u()}function j(e){return function(t){return t=="selfclosePlugin"||t=="endPlugin"||t=="endPlugin"&&w(r.pluginName,e),u()}}function I(e){return function(t){return e&&(s="error"),t=="endPlugin"?u():d()}}function v(e){return e=="keyword"?(s="attribute",u(v)):e=="equals"?u(m,v):d()}function m(e){return e=="keyword"?(s="string",u()):e=="string"?u(O):d()}function O(e){return e=="string"?u(O):d()}return{startState:function(){return{tokenize:c,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;s=p=h=null;var n=t.tokenize(e,t);if((n||p)&&n!="comment")for(r=t;;){var o=t.cc.pop()||S;if(o(p||n))break}return t.startOfLine=!1,s||n},indent:function(e,t){var n=e.context;if(n&&n.noIndent)return 0;for(n&&/^{\//.test(t)&&(n=n.prev);n&&!n.startOfLine;)n=n.prev;return n?n.indent+_:0},electricChars:"/"}}),a.defineMIME("text/tiki","tiki")})})();var y=E.exports;const M=A(y),U=q({__proto__:null,default:M},[y]);export{U as t};
