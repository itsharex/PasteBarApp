import{g as S,r as T}from"./index-lZtL9rhT.js";function A(O,a){for(var E=0;E<a.length;E++){const n=a[E];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in O)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(O,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}))}var L={exports:{}};(function(O,a){(function(E){E(T())})(function(E){function n(f){var r=[];return f.split(" ").forEach(function(e){r.push({name:e})}),r}var i=n("INVERT AND OR XOR	 2* 2/ LSHIFT RSHIFT	 0= = 0< < > U< MIN MAX	 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP	 >R R> R@	 + - 1+ 1- ABS NEGATE	 S>D * M* UM*	 FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD	 HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2!	 ALIGN ALIGNED +! ALLOT	 CHAR [CHAR] [ ] BL	 FIND EXECUTE IMMEDIATE COUNT LITERAL STATE	 ; DOES> >BODY	 EVALUATE	 SOURCE >IN	 <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL	 FILL MOVE	 . CR EMIT SPACE SPACES TYPE U. .R U.R	 ACCEPT	 TRUE FALSE	 <> U> 0<> 0>	 NIP TUCK ROLL PICK	 2>R 2R@ 2R>	 WITHIN UNUSED MARKER	 I J	 TO	 COMPILE, [COMPILE]	 SAVE-INPUT RESTORE-INPUT	 PAD ERASE	 2LITERAL DNEGATE	 D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS	 M+ M*/ D. D.R 2ROT DU<	 CATCH THROW	 FREE RESIZE ALLOCATE	 CS-PICK CS-ROLL	 GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER	 PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER	 -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL"),o=n("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");E.defineMode("forth",function(){function f(r,e){var t;for(t=r.length-1;t>=0;t--)if(r[t].name===e.toUpperCase())return r[t]}return{startState:function(){return{state:"",base:10,coreWordList:i,immediateWordList:o,wordList:[]}},token:function(r,e){var t;if(r.eatSpace())return null;if(e.state===""){if(r.match(/^(\]|:NONAME)(\s|$)/i))return e.state=" compilation","builtin compilation";if(t=r.match(/^(\:)\s+(\S+)(\s|$)+/),t)return e.wordList.push({name:t[2].toUpperCase()}),e.state=" compilation","def"+e.state;if(t=r.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i),t)return e.wordList.push({name:t[2].toUpperCase()}),"def"+e.state;if(t=r.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/),t)return"builtin"+e.state}else{if(r.match(/^(\;|\[)(\s)/))return e.state="",r.backUp(1),"builtin compilation";if(r.match(/^(\;|\[)($)/))return e.state="","builtin compilation";if(r.match(/^(POSTPONE)\s+\S+(\s|$)+/))return"builtin"}if(t=r.match(/^(\S+)(\s+|$)/),t)return f(e.wordList,t[1])!==void 0?"variable"+e.state:t[1]==="\\"?(r.skipToEnd(),"comment"+e.state):f(e.coreWordList,t[1])!==void 0?"builtin"+e.state:f(e.immediateWordList,t[1])!==void 0?"keyword"+e.state:t[1]==="("?(r.eatWhile(function(R){return R!==")"}),r.eat(")"),"comment"+e.state):t[1]===".("?(r.eatWhile(function(R){return R!==")"}),r.eat(")"),"string"+e.state):t[1]==='S"'||t[1]==='."'||t[1]==='C"'?(r.eatWhile(function(R){return R!=='"'}),r.eat('"'),"string"+e.state):t[1]-68719476735?"number"+e.state:"atom"+e.state}}}),E.defineMIME("text/x-forth","forth")})})();var u=L.exports;const D=S(u),c=A({__proto__:null,default:D},[u]);export{c as f};
