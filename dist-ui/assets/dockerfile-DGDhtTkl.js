import{g as d,c as f,b as m}from"./index-DIOMjnvC.js";function y(o,s){for(var e=0;e<s.length;e++){const t=s[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in o)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(o,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(o,s){(function(e){e(f,m())})(function(e){var t="from",r=new RegExp("^(\\s*)\\b("+t+")\\b","i"),n=["run","cmd","entrypoint","shell"],u=new RegExp("^(\\s*)("+n.join("|")+")(\\s+\\[)","i"),l="expose",i=new RegExp("^(\\s*)("+l+")(\\s+)","i"),a=["arg","from","maintainer","label","env","add","copy","volume","user","workdir","onbuild","stopsignal","healthcheck","shell"],k=[t,l].concat(n).concat(a),x="("+k.join("|")+")",c=new RegExp("^(\\s*)"+x+"(\\s*)(#.*)?$","i"),p=new RegExp("^(\\s*)"+x+"(\\s+)","i");e.defineSimpleMode("dockerfile",{start:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:r,token:[null,"keyword"],sol:!0,next:"from"},{regex:c,token:[null,"keyword",null,"error"],sol:!0},{regex:u,token:[null,"keyword",null],sol:!0,next:"array"},{regex:i,token:[null,"keyword",null],sol:!0,next:"expose"},{regex:p,token:[null,"keyword",null],sol:!0,next:"arguments"},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:"start"},{regex:/(\s*)(#.*)$/,token:[null,"error"],next:"start"},{regex:/(\s*\S+\s+)(as)/i,token:[null,"keyword"],next:"start"},{token:null,next:"start"}],single:[{regex:/(?:[^\\']|\\.)/,token:"string"},{regex:/'/,token:"string",pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:"string"},{regex:/"/,token:"string",pop:!0}],array:[{regex:/\]/,token:null,next:"start"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"}],expose:[{regex:/\d+$/,token:"number",next:"start"},{regex:/[^\d]+$/,token:null,next:"start"},{regex:/\d+/,token:"number"},{regex:/[^\d]+/,token:null},{token:null,next:"start"}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:/"(?:[^\\"]|\\.)*"?$/,token:"string",next:"start"},{regex:/"/,token:"string",push:"double"},{regex:/'(?:[^\\']|\\.)*'?$/,token:"string",next:"start"},{regex:/'/,token:"string",push:"single"},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:"start"},{regex:/[^#"']+/,token:null},{token:null,next:"start"}],meta:{lineComment:"#"}}),e.defineMIME("text/x-dockerfile","dockerfile")})})();var g=b.exports;const v=d(g),$=y({__proto__:null,default:v},[g]);export{$ as d};
