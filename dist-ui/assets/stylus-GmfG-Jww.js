import{g as ye,c as ze}from"./index-BLHgoTgd.js";function je(K,O){for(var w=0;w<O.length;w++){const y=O[w];if(typeof y!="string"&&!Array.isArray(y)){for(const v in y)if(v!=="default"&&!(v in K)){const C=Object.getOwnPropertyDescriptor(y,v);C&&Object.defineProperty(K,v,C.get?C:{enumerable:!0,get:()=>y[v]})}}}return Object.freeze(Object.defineProperty(K,Symbol.toStringTag,{value:"Module"}))}var qe={exports:{}};(function(K,O){(function(w){w(ze)})(function(w){w.defineMode("stylus",function(g){for(var c=g.indentUnit,x="",te=p(y),B=/^(a|b|i|s|col|em)$/i,ae=p(W),le=p(I),ce=p(U),se=p(N),de=p(v),ue=Z(v),fe=p(R),pe=p(C),he=p(T),ge=/^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/,be=Z(F),me=p(X),A=new RegExp(/^\-(moz|ms|o|webkit)-/i),ke=p(Y),E="",s={},b,z,D,t;x.length<c;)x+=" ";function we(i,e){if(E=i.string.match(/(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/),e.context.line.firstWord=E?E[0].replace(/^\s*/,""):"",e.context.line.indent=i.indentation(),b=i.peek(),i.match("//"))return i.skipToEnd(),["comment","comment"];if(i.match("/*"))return e.tokenize=M,M(i,e);if(b=='"'||b=="'")return i.next(),e.tokenize=V(b),e.tokenize(i,e);if(b=="@")return i.next(),i.eatWhile(/[\w\\-]/),["def",i.current()];if(b=="#"){if(i.next(),i.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i))return["atom","atom"];if(i.match(/^[a-z][\w-]*/i))return["builtin","hash"]}return i.match(A)?["meta","vendor-prefixes"]:i.match(/^-?[0-9]?\.?[0-9]/)?(i.eatWhile(/[a-z%]/i),["number","unit"]):b=="!"?(i.next(),[i.match(/^(important|optional)/i)?"keyword":"operator","important"]):b=="."&&i.match(/^\.[a-z][\w-]*/i)?["qualifier","qualifier"]:i.match(ue)?(i.peek()=="("&&(e.tokenize=ve),["property","word"]):i.match(/^[a-z][\w-]*\(/i)?(i.backUp(1),["keyword","mixin"]):i.match(/^(\+|-)[a-z][\w-]*\(/i)?(i.backUp(1),["keyword","block-mixin"]):i.string.match(/^\s*&/)&&i.match(/^[-_]+[a-z][\w-]*/)?["qualifier","qualifier"]:i.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)?(i.backUp(1),["variable-3","reference"]):i.match(/^&{1}\s*$/)?["variable-3","reference"]:i.match(be)?["operator","operator"]:i.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)?i.match(/^(\.|\[)[\w-\'\"\]]+/i,!1)&&!m(i.current())?(i.match("."),["variable-2","variable-name"]):["variable-2","word"]:i.match(ge)?["operator",i.current()]:/[:;,{}\[\]\(\)]/.test(b)?(i.next(),[null,b]):(i.next(),[null,null])}function M(i,e){for(var r=!1,n;(n=i.next())!=null;){if(r&&n=="/"){e.tokenize=null;break}r=n=="*"}return["comment","comment"]}function V(i){return function(e,r){for(var n=!1,l;(l=e.next())!=null;){if(l==i&&!n){i==")"&&e.backUp(1);break}n=!n&&l=="\\"}return(l==i||!n&&i!=")")&&(r.tokenize=null),["string","string"]}}function ve(i,e){return i.next(),i.match(/\s*[\"\')]/,!1)?e.tokenize=null:e.tokenize=V(")"),[null,"("]}function H(i,e,r,n){this.type=i,this.indent=e,this.prev=r,this.line=n||{firstWord:"",indent:0}}function o(i,e,r,n){return n=n>=0?n:c,i.context=new H(r,e.indentation()+n,i.context),r}function j(i,e){var r=i.context.indent-c;return e=e||!1,i.context=i.context.prev,e&&(i.context.indent=r),i.context.type}function xe(i,e,r){return s[r.context.type](i,e,r)}function S(i,e,r,n){for(var l=n||1;l>0;l--)r.context=r.context.prev;return xe(i,e,r)}function m(i){return i.toLowerCase()in te}function q(i){return i=i.toLowerCase(),i in ae||i in he}function $(i){return i.toLowerCase()in me}function G(i){return i.toLowerCase().match(A)}function _(i){var e=i.toLowerCase(),r="variable-2";return m(i)?r="tag":$(i)?r="block-keyword":q(i)?r="property":e in ce||e in ke?r="atom":e=="return"||e in se?r="keyword":i.match(/^[A-Z]/)&&(r="string"),r}function J(i,e){return a(e)&&(i=="{"||i=="]"||i=="hash"||i=="qualifier")||i=="block-mixin"}function Q(i,e){return i=="{"&&e.match(/^\s*\$?[\w-]+/i,!1)}function ee(i,e){return i==":"&&e.match(/^[a-z-]+/,!1)}function P(i){return i.sol()||i.string.match(new RegExp("^\\s*"+ne(i.current())))}function a(i){return i.eol()||i.match(/^\s*$/,!1)}function d(i){var e=/^\s*[-_]*[a-z0-9]+[\w-]*/i,r=typeof i=="string"?i.match(e):i.string.match(e);return r?r[0].replace(/^\s*/,""):""}return s.block=function(i,e,r){if(i=="comment"&&P(e)||i==","&&a(e)||i=="mixin")return o(r,e,"block",0);if(Q(i,e))return o(r,e,"interpolation");if(a(e)&&i=="]"&&!/^\s*(\.|#|:|\[|\*|&)/.test(e.string)&&!m(d(e)))return o(r,e,"block",0);if(J(i,e))return o(r,e,"block");if(i=="}"&&a(e))return o(r,e,"block",0);if(i=="variable-name")return e.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)||$(d(e))?o(r,e,"variableName"):o(r,e,"variableName",0);if(i=="=")return!a(e)&&!$(d(e))?o(r,e,"block",0):o(r,e,"block");if(i=="*"&&(a(e)||e.match(/\s*(,|\.|#|\[|:|{)/,!1)))return t="tag",o(r,e,"block");if(ee(i,e))return o(r,e,"pseudo");if(/@(font-face|media|supports|(-moz-)?document)/.test(i))return o(r,e,a(e)?"block":"atBlock");if(/@(-(moz|ms|o|webkit)-)?keyframes$/.test(i))return o(r,e,"keyframes");if(/@extends?/.test(i))return o(r,e,"extend",0);if(i&&i.charAt(0)=="@")return e.indentation()>0&&q(e.current().slice(1))?(t="variable-2","block"):/(@import|@require|@charset)/.test(i)?o(r,e,"block",0):o(r,e,"block");if(i=="reference"&&a(e))return o(r,e,"block");if(i=="(")return o(r,e,"parens");if(i=="vendor-prefixes")return o(r,e,"vendorPrefixes");if(i=="word"){var n=e.current();if(t=_(n),t=="property")return P(e)?o(r,e,"block",0):(t="atom","block");if(t=="tag"){if(/embed|menu|pre|progress|sub|table/.test(n)&&q(d(e))||e.string.match(new RegExp("\\[\\s*"+n+"|"+n+"\\s*\\]")))return t="atom","block";if(B.test(n)&&(P(e)&&e.string.match(/=/)||!P(e)&&!e.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/)&&!m(d(e))))return t="variable-2",$(d(e))?"block":o(r,e,"block",0);if(a(e))return o(r,e,"block")}if(t=="block-keyword")return t="keyword",e.current(/(if|unless)/)&&!P(e)?"block":o(r,e,"block");if(n=="return")return o(r,e,"block",0);if(t=="variable-2"&&e.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/))return o(r,e,"block")}return r.context.type},s.parens=function(i,e,r){if(i=="(")return o(r,e,"parens");if(i==")")return r.context.prev.type=="parens"?j(r):e.string.match(/^[a-z][\w-]*\(/i)&&a(e)||$(d(e))||/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(d(e))||!e.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/)&&m(d(e))?o(r,e,"block"):e.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/)||e.string.match(/^\s*(\(|\)|[0-9])/)||e.string.match(/^\s+[a-z][\w-]*\(/i)||e.string.match(/^\s+[\$-]?[a-z]/i)?o(r,e,"block",0):a(e)?o(r,e,"block"):o(r,e,"block",0);if(i&&i.charAt(0)=="@"&&q(e.current().slice(1))&&(t="variable-2"),i=="word"){var n=e.current();t=_(n),t=="tag"&&B.test(n)&&(t="variable-2"),(t=="property"||n=="to")&&(t="atom")}return i=="variable-name"?o(r,e,"variableName"):ee(i,e)?o(r,e,"pseudo"):r.context.type},s.vendorPrefixes=function(i,e,r){return i=="word"?(t="property",o(r,e,"block",0)):j(r)},s.pseudo=function(i,e,r){return q(d(e.string))?S(i,e,r):(e.match(/^[a-z-]+/),t="variable-3",a(e)?o(r,e,"block"):j(r))},s.atBlock=function(i,e,r){if(i=="(")return o(r,e,"atBlock_parens");if(J(i,e))return o(r,e,"block");if(Q(i,e))return o(r,e,"interpolation");if(i=="word"){var n=e.current().toLowerCase();if(/^(only|not|and|or)$/.test(n)?t="keyword":de.hasOwnProperty(n)?t="tag":pe.hasOwnProperty(n)?t="attribute":fe.hasOwnProperty(n)?t="property":le.hasOwnProperty(n)?t="string-2":t=_(e.current()),t=="tag"&&a(e))return o(r,e,"block")}return i=="operator"&&/^(not|and|or)$/.test(e.current())&&(t="keyword"),r.context.type},s.atBlock_parens=function(i,e,r){if(i=="{"||i=="}")return r.context.type;if(i==")")return a(e)?o(r,e,"block"):o(r,e,"atBlock");if(i=="word"){var n=e.current().toLowerCase();return t=_(n),/^(max|min)/.test(n)&&(t="property"),t=="tag"&&(B.test(n)?t="variable-2":t="atom"),r.context.type}return s.atBlock(i,e,r)},s.keyframes=function(i,e,r){return e.indentation()=="0"&&(i=="}"&&P(e)||i=="]"||i=="hash"||i=="qualifier"||m(e.current()))?S(i,e,r):i=="{"?o(r,e,"keyframes"):i=="}"?P(e)?j(r,!0):o(r,e,"keyframes"):i=="unit"&&/^[0-9]+\%$/.test(e.current())?o(r,e,"keyframes"):i=="word"&&(t=_(e.current()),t=="block-keyword")?(t="keyword",o(r,e,"keyframes")):/@(font-face|media|supports|(-moz-)?document)/.test(i)?o(r,e,a(e)?"block":"atBlock"):i=="mixin"?o(r,e,"block",0):r.context.type},s.interpolation=function(i,e,r){return i=="{"&&j(r)&&o(r,e,"block"),i=="}"?e.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i)||e.string.match(/^\s*[a-z]/i)&&m(d(e))?o(r,e,"block"):!e.string.match(/^(\{|\s*\&)/)||e.match(/\s*[\w-]/,!1)?o(r,e,"block",0):o(r,e,"block"):i=="variable-name"?o(r,e,"variableName",0):(i=="word"&&(t=_(e.current()),t=="tag"&&(t="atom")),r.context.type)},s.extend=function(i,e,r){return i=="["||i=="="?"extend":i=="]"?j(r):i=="word"?(t=_(e.current()),"extend"):j(r)},s.variableName=function(i,e,r){return i=="string"||i=="["||i=="]"||e.current().match(/^(\.|\$)/)?(e.current().match(/^\.[\w-]+/i)&&(t="variable-2"),"variableName"):S(i,e,r)},{startState:function(i){return{tokenize:null,state:"block",context:new H("block",i||0,null)}},token:function(i,e){return!e.tokenize&&i.eatSpace()?null:(z=(e.tokenize||we)(i,e),z&&typeof z=="object"&&(D=z[1],z=z[0]),t=z,e.state=s[e.state](D,i,e),t)},indent:function(i,e,r){var n=i.context,l=e&&e.charAt(0),h=n.indent,L=d(e),k=r.match(/^\s*/)[0].replace(/\t/g,x).length,u=i.context.prev?i.context.prev.line.firstWord:"",f=i.context.prev?i.context.prev.line.indent:k;return n.prev&&(l=="}"&&(n.type=="block"||n.type=="atBlock"||n.type=="keyframes")||l==")"&&(n.type=="parens"||n.type=="atBlock_parens")||l=="{"&&n.type=="at")?h=n.indent-c:/(\})/.test(l)||(/@|\$|\d/.test(l)||/^\{/.test(e)||/^\s*\/(\/|\*)/.test(e)||/^\s*\/\*/.test(u)||/^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(e)||/^(\+|-)?[a-z][\w-]*\(/i.test(e)||/^return/.test(e)||$(L)?h=k:/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(l)||m(L)?/\,\s*$/.test(u)?h=f:/^\s+/.test(r)&&(/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(u)||m(u))?h=k<=f?f:f+c:h=k:!/,\s*$/.test(r)&&(G(L)||q(L))&&($(u)?h=k<=f?f:f+c:/^\{/.test(u)?h=k<=f?k:f+c:G(u)||q(u)?h=k>=f?f:k:/^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(u)||/=\s*$/.test(u)||m(u)||/^\$[\w-\.\[\]\'\"]/.test(u)?h=f+c:h=k)),h},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:"//",fold:"indent"}});var y=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","bgsound","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video"],v=["domain","regexp","url-prefix","url"],C=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],R=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","dynamic-range","video-dynamic-range"],W=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-position","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode","font-smoothing","osx-font-smoothing"],I=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],T=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],N=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],U=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","column","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","dashed","decimal","decimal-leading-zero","default","default-button","destination-atop","destination-in","destination-out","destination-over","devanagari","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","footnotes","forwards","from","geometricPrecision","georgian","graytext","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hebrew","help","hidden","hide","high","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","malayalam","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row-resize","rtl","run-in","running","s-resize","sans-serif","scale","scale3d","scaleX","scaleY","scaleZ","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","solid","somali","source-atop","source-in","source-out","source-over","space","spell-out","square","square-button","standard","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","x-large","x-small","xor","xx-large","xx-small","bicubic","optimizespeed","grayscale","row","row-reverse","wrap","wrap-reverse","column-reverse","flex-start","flex-end","space-between","space-around","unset"],F=["in","and","or","not","is not","is a","is","isnt","defined","if unless"],X=["for","if","else","unless","from","to"],Y=["null","true","false","href","title","type","not-allowed","readonly","disabled"],re=["@font-face","@keyframes","@media","@viewport","@page","@host","@supports","@block","@css"],oe=y.concat(v,C,R,W,I,N,U,T,F,X,Y,re);function Z(g){return g=g.sort(function(c,x){return x>c}),new RegExp("^(("+g.join(")|(")+"))\\b")}function p(g){for(var c={},x=0;x<g.length;++x)c[g[x]]=!0;return c}function ne(g){return g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}w.registerHelper("hintWords","stylus",oe),w.defineMIME("text/x-styl","stylus")})})();var ie=qe.exports;const $e=ye(ie),Pe=je({__proto__:null,default:$e},[ie]);export{ie as a,Pe as s};
