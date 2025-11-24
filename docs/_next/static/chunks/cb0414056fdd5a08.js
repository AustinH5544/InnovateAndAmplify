(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={assign:function(){return l},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return s}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});function n(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,a(e));else t.set(r,a(o));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,o=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||a.test(o))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),i=i.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${o}${c}${i}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let o=e.r(71645);function i(e,t){let r=(0,o.useRef)(null),i=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,o)),t&&(i.current=n(t,o))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return n},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...o)=>(r||(r=!0,t=e(...o)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&f(r))return o;if(!o)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let o=e.r(18967),i=e.r(52817);function n(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return v},useLinkStatus:function(){return x}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=e.r(90809),a=e.r(43476),s=n._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(91949),m=e.r(73668),h=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function v(t){var r;let o,i,n,[l,v]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),x=(0,s.useRef)(null),{href:y,as:_,children:w,prefetch:k=null,passHref:S,replace:R,shallow:E,scroll:z,onClick:U,onMouseEnter:A,onTouchStart:B,legacyBehavior:j=!1,onNavigate:P,ref:O,unstable_dynamicOnHover:T,...V}=t;o=w,j&&("string"==typeof o||"number"==typeof o)&&(o=(0,a.jsx)("a",{children:o}));let C=s.default.useContext(c.AppRouterContext),M=!1!==k,L=!1!==k?null===(r=k)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:N,as:I}=s.default.useMemo(()=>{let e=g(y);return{href:e,as:_?g(_):e}},[y,_]);if(j){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=s.default.Children.only(o)}let F=j?i&&"object"==typeof i&&i.ref:O,W=s.default.useCallback(e=>(null!==C&&(x.current=(0,p.mountLinkInstance)(e,N,C,L,M,v)),()=>{x.current&&((0,p.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,p.unmountPrefetchableInstance)(e)}),[M,N,C,L,v]),D={ref:(0,u.useMergedRef)(W,F),onClick(t){j||"function"!=typeof U||U(t),j&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!C||t.defaultPrevented||function(t,r,o,i,n,a,l){if("undefined"!=typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(o||r,n?"replace":"push",a??!0,i.current)})}}(t,N,I,x,R,z,P)},onMouseEnter(e){j||"function"!=typeof A||A(e),j&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),C&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){j||"function"!=typeof B||B(e),j&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),C&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,d.isAbsoluteUrl)(I)?D.href=I:j&&!S&&("a"!==i.type||"href"in i.props)||(D.href=(0,f.addBasePath)(I)),n=j?s.default.cloneElement(i,D):(0,a.jsx)("a",{...V,...D,children:o}),(0,a.jsx)(b.Provider,{value:l,children:n})}e.r(84508);let b=(0,s.createContext)(p.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},13474,75254,47163,62770,91918,67881,e=>{"use strict";let t,r;var o=e.i(43476),i=e.i(22016),n=e.i(18566),a=e.i(71645);let s=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:n,iconNode:c,...u},d)=>(0,a.createElement)("svg",{ref:d,...l,width:t,height:t,stroke:e,strokeWidth:o?24*Number(r)/Number(t):r,className:s("lucide",i),...u},[...c.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(n)?n:[n]])),u=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...o},i)=>(0,a.createElement)(c,{ref:i,iconNode:t,className:s(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...o}));return r.displayName=`${e}`,r};e.s(["default",()=>u],75254);let d=u("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),f=u("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function p(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,o,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(o=e(t[r]))&&(i&&(i+=" "),i+=o)}else for(o in t)t[o]&&(i&&(i+=" "),i+=o);return i}(e))&&(o&&(o+=" "),o+=t);return o}let m=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),h=[],g=(e,t,r)=>{if(0==e.length-t)return r.classGroupId;let o=e[t],i=r.nextPart.get(o);if(i){let r=g(e,t+1,i);if(r)return r}let n=r.validators;if(null===n)return;let a=0===t?e.join("-"):e.slice(t).join("-"),s=n.length;for(let e=0;e<s;e++){let t=n[e];if(t.validator(a))return t.classGroupId}},v=(e,t)=>{let r=m();for(let o in e)b(e[o],r,o,t);return r},b=(e,t,r,o)=>{let i=e.length;for(let n=0;n<i;n++)x(e[n],t,r,o)},x=(e,t,r,o)=>{"string"==typeof e?y(e,t,r):"function"==typeof e?_(e,t,r,o):w(e,t,r,o)},y=(e,t,r)=>{(""===e?t:k(t,e)).classGroupId=r},_=(e,t,r,o)=>{S(e)?b(e(o),t,r,o):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:r,validator:e}))},w=(e,t,r,o)=>{let i=Object.entries(e),n=i.length;for(let e=0;e<n;e++){let[n,a]=i[e];b(a,k(t,n),r,o)}},k=(e,t)=>{let r=e,o=t.split("-"),i=o.length;for(let e=0;e<i;e++){let t=o[e],i=r.nextPart.get(t);i||(i=m(),r.nextPart.set(t,i)),r=i}return r},S=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,R=[],E=(e,t,r,o,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:o,isExternal:i}),z=/\s+/,U=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=U(e[o]))&&(r&&(r+=" "),r+=t);return r},A=[],B=e=>{let t=t=>t[e]||A;return t.isThemeGetter=!0,t},j=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,P=/^\((?:(\w[\w-]*):)?(.+)\)$/i,O=/^\d+\/\d+$/,T=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,V=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,M=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,L=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,N=e=>O.test(e),I=e=>!!e&&!Number.isNaN(Number(e)),F=e=>!!e&&Number.isInteger(Number(e)),W=e=>e.endsWith("%")&&I(e.slice(0,-1)),D=e=>T.test(e),$=()=>!0,H=e=>V.test(e)&&!C.test(e),G=()=>!1,X=e=>M.test(e),Y=e=>L.test(e),q=e=>!Q(e)&&!eo(e),K=e=>eu(e,em,G),Q=e=>j.test(e),Z=e=>eu(e,eh,H),J=e=>eu(e,eg,I),ee=e=>eu(e,ef,G),et=e=>eu(e,ep,Y),er=e=>eu(e,eb,X),eo=e=>P.test(e),ei=e=>ed(e,eh),en=e=>ed(e,ev),ea=e=>ed(e,ef),es=e=>ed(e,em),el=e=>ed(e,ep),ec=e=>ed(e,eb,!0),eu=(e,t,r)=>{let o=j.exec(e);return!!o&&(o[1]?t(o[1]):r(o[2]))},ed=(e,t,r=!1)=>{let o=P.exec(e);return!!o&&(o[1]?t(o[1]):r)},ef=e=>"position"===e||"percentage"===e,ep=e=>"image"===e||"url"===e,em=e=>"length"===e||"size"===e||"bg-size"===e,eh=e=>"length"===e,eg=e=>"number"===e,ev=e=>"family-name"===e,eb=e=>"shadow"===e,ex=((e,...t)=>{let r,o,i,n,a=e=>{let t=o(e);if(t)return t;let n=((e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:i,sortModifiers:n}=t,a=[],s=e.trim().split(z),l="";for(let e=s.length-1;e>=0;e-=1){let t=s[e],{isExternal:c,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=r(t);if(c){l=t+(l.length>0?" "+l:l);continue}let m=!!p,h=o(m?f.substring(0,p):f);if(!h){if(!m||!(h=o(f))){l=t+(l.length>0?" "+l:l);continue}m=!1}let g=0===u.length?"":1===u.length?u[0]:n(u).join(":"),v=d?g+"!":g,b=v+h;if(a.indexOf(b)>-1)continue;a.push(b);let x=i(h,m);for(let e=0;e<x.length;++e){let t=x[e];a.push(v+t)}l=t+(l.length>0?" "+l:l)}return l})(e,r);return i(e,n),n};return n=s=>{var l;let c;return o=(r={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=Object.create(null),o=Object.create(null),i=(i,n)=>{r[i]=n,++t>e&&(t=0,o=r,r=Object.create(null))};return{get(e){let t=r[e];return void 0!==t?t:void 0!==(t=o[e])?(i(e,t),t):void 0},set(e,t){e in r?r[e]=t:i(e,t)}}})((l=t.reduce((e,t)=>t(e),e())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:r}=e,o=e=>{let t,r=[],o=0,i=0,n=0,a=e.length;for(let s=0;s<a;s++){let a=e[s];if(0===o&&0===i){if(":"===a){r.push(e.slice(n,s)),n=s+1;continue}if("/"===a){t=s;continue}}"["===a?o++:"]"===a?o--:"("===a?i++:")"===a&&i--}let s=0===r.length?e:e.slice(n),l=s,c=!1;return s.endsWith("!")?(l=s.slice(0,-1),c=!0):s.startsWith("!")&&(l=s.slice(1),c=!0),E(r,c,l,t&&t>n?t-n:void 0)};if(t){let e=t+":",r=o;o=t=>t.startsWith(e)?r(t.slice(e.length)):E(R,!1,t,void 0,!0)}if(r){let e=o;o=t=>r({className:t,parseClassName:e})}return o})(l),sortModifiers:(c=new Map,l.orderSensitiveModifiers.forEach((e,t)=>{c.set(e,1e6+t)}),e=>{let t=[],r=[];for(let o=0;o<e.length;o++){let i=e[o],n="["===i[0],a=c.has(i);n||a?(r.length>0&&(r.sort(),t.push(...r),r=[]),t.push(i)):r.push(i)}return r.length>0&&(r.sort(),t.push(...r)),t}),...(e=>{let t=(e=>{let{theme:t,classGroups:r}=e;return v(r,t)})(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var r;let t,o,i;return -1===(r=e).slice(1,-1).indexOf(":")?void 0:(o=(t=r.slice(1,-1)).indexOf(":"),(i=t.slice(0,o))?"arbitrary.."+i:void 0)}let o=e.split("-"),i=+(""===o[0]&&o.length>1);return g(o,i,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=o[e],i=r[e];if(t){if(i){let e=Array(i.length+t.length);for(let t=0;t<i.length;t++)e[t]=i[t];for(let r=0;r<t.length;r++)e[i.length+r]=t[r];return e}return t}return i||h}return r[e]||h}}})(l)}).cache.get,i=r.cache.set,n=a,a(s)},(...e)=>n(((...e)=>{let t,r,o=0,i="";for(;o<e.length;)(t=e[o++])&&(r=U(t))&&(i&&(i+=" "),i+=r);return i})(...e))})(()=>{let e=B("color"),t=B("font"),r=B("text"),o=B("font-weight"),i=B("tracking"),n=B("leading"),a=B("breakpoint"),s=B("container"),l=B("spacing"),c=B("radius"),u=B("shadow"),d=B("inset-shadow"),f=B("text-shadow"),p=B("drop-shadow"),m=B("blur"),h=B("perspective"),g=B("aspect"),v=B("ease"),b=B("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],_=()=>[...y(),eo,Q],w=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],S=()=>[eo,Q,l],R=()=>[N,"full","auto",...S()],E=()=>[F,"none","subgrid",eo,Q],z=()=>["auto",{span:["full",F,eo,Q]},F,eo,Q],U=()=>[F,"auto",eo,Q],A=()=>["auto","min","max","fr",eo,Q],j=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],P=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...S()],T=()=>[N,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...S()],V=()=>[e,eo,Q],C=()=>[...y(),ea,ee,{position:[eo,Q]}],M=()=>["no-repeat",{repeat:["","x","y","space","round"]}],L=()=>["auto","cover","contain",es,K,{size:[eo,Q]}],H=()=>[W,ei,Z],G=()=>["","none","full",c,eo,Q],X=()=>["",I,ei,Z],Y=()=>["solid","dashed","dotted","double"],eu=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ed=()=>[I,W,ea,ee],ef=()=>["","none",m,eo,Q],ep=()=>["none",I,eo,Q],em=()=>["none",I,eo,Q],eh=()=>[I,eo,Q],eg=()=>[N,"full",...S()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[D],breakpoint:[D],color:[$],container:[D],"drop-shadow":[D],ease:["in","out","in-out"],font:[q],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[D],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[D],shadow:[D],spacing:["px",I],text:[D],"text-shadow":[D],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",N,Q,eo,g]}],container:["container"],columns:[{columns:[I,Q,eo,s]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:_()}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:R()}],"inset-x":[{"inset-x":R()}],"inset-y":[{"inset-y":R()}],start:[{start:R()}],end:[{end:R()}],top:[{top:R()}],right:[{right:R()}],bottom:[{bottom:R()}],left:[{left:R()}],visibility:["visible","invisible","collapse"],z:[{z:[F,"auto",eo,Q]}],basis:[{basis:[N,"full","auto",s,...S()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[I,N,"auto","initial","none",Q]}],grow:[{grow:["",I,eo,Q]}],shrink:[{shrink:["",I,eo,Q]}],order:[{order:[F,"first","last","none",eo,Q]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:z()}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:z()}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":A()}],"auto-rows":[{"auto-rows":A()}],gap:[{gap:S()}],"gap-x":[{"gap-x":S()}],"gap-y":[{"gap-y":S()}],"justify-content":[{justify:[...j(),"normal"]}],"justify-items":[{"justify-items":[...P(),"normal"]}],"justify-self":[{"justify-self":["auto",...P()]}],"align-content":[{content:["normal",...j()]}],"align-items":[{items:[...P(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...P(),{baseline:["","last"]}]}],"place-content":[{"place-content":j()}],"place-items":[{"place-items":[...P(),"baseline"]}],"place-self":[{"place-self":["auto",...P()]}],p:[{p:S()}],px:[{px:S()}],py:[{py:S()}],ps:[{ps:S()}],pe:[{pe:S()}],pt:[{pt:S()}],pr:[{pr:S()}],pb:[{pb:S()}],pl:[{pl:S()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":S()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":S()}],"space-y-reverse":["space-y-reverse"],size:[{size:T()}],w:[{w:[s,"screen",...T()]}],"min-w":[{"min-w":[s,"screen","none",...T()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[a]},...T()]}],h:[{h:["screen","lh",...T()]}],"min-h":[{"min-h":["screen","lh","none",...T()]}],"max-h":[{"max-h":["screen","lh",...T()]}],"font-size":[{text:["base",r,ei,Z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,eo,J]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",W,Q]}],"font-family":[{font:[en,Q,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,eo,Q]}],"line-clamp":[{"line-clamp":[I,"none",eo,J]}],leading:[{leading:[n,...S()]}],"list-image":[{"list-image":["none",eo,Q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",eo,Q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:V()}],"text-color":[{text:V()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Y(),"wavy"]}],"text-decoration-thickness":[{decoration:[I,"from-font","auto",eo,Z]}],"text-decoration-color":[{decoration:V()}],"underline-offset":[{"underline-offset":[I,"auto",eo,Q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",eo,Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",eo,Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:C()}],"bg-repeat":[{bg:M()}],"bg-size":[{bg:L()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},F,eo,Q],radial:["",eo,Q],conic:[F,eo,Q]},el,et]}],"bg-color":[{bg:V()}],"gradient-from-pos":[{from:H()}],"gradient-via-pos":[{via:H()}],"gradient-to-pos":[{to:H()}],"gradient-from":[{from:V()}],"gradient-via":[{via:V()}],"gradient-to":[{to:V()}],rounded:[{rounded:G()}],"rounded-s":[{"rounded-s":G()}],"rounded-e":[{"rounded-e":G()}],"rounded-t":[{"rounded-t":G()}],"rounded-r":[{"rounded-r":G()}],"rounded-b":[{"rounded-b":G()}],"rounded-l":[{"rounded-l":G()}],"rounded-ss":[{"rounded-ss":G()}],"rounded-se":[{"rounded-se":G()}],"rounded-ee":[{"rounded-ee":G()}],"rounded-es":[{"rounded-es":G()}],"rounded-tl":[{"rounded-tl":G()}],"rounded-tr":[{"rounded-tr":G()}],"rounded-br":[{"rounded-br":G()}],"rounded-bl":[{"rounded-bl":G()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Y(),"hidden","none"]}],"divide-style":[{divide:[...Y(),"hidden","none"]}],"border-color":[{border:V()}],"border-color-x":[{"border-x":V()}],"border-color-y":[{"border-y":V()}],"border-color-s":[{"border-s":V()}],"border-color-e":[{"border-e":V()}],"border-color-t":[{"border-t":V()}],"border-color-r":[{"border-r":V()}],"border-color-b":[{"border-b":V()}],"border-color-l":[{"border-l":V()}],"divide-color":[{divide:V()}],"outline-style":[{outline:[...Y(),"none","hidden"]}],"outline-offset":[{"outline-offset":[I,eo,Q]}],"outline-w":[{outline:["",I,ei,Z]}],"outline-color":[{outline:V()}],shadow:[{shadow:["","none",u,ec,er]}],"shadow-color":[{shadow:V()}],"inset-shadow":[{"inset-shadow":["none",d,ec,er]}],"inset-shadow-color":[{"inset-shadow":V()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:V()}],"ring-offset-w":[{"ring-offset":[I,Z]}],"ring-offset-color":[{"ring-offset":V()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":V()}],"text-shadow":[{"text-shadow":["none",f,ec,er]}],"text-shadow-color":[{"text-shadow":V()}],opacity:[{opacity:[I,eo,Q]}],"mix-blend":[{"mix-blend":[...eu(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":eu()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[I]}],"mask-image-linear-from-pos":[{"mask-linear-from":ed()}],"mask-image-linear-to-pos":[{"mask-linear-to":ed()}],"mask-image-linear-from-color":[{"mask-linear-from":V()}],"mask-image-linear-to-color":[{"mask-linear-to":V()}],"mask-image-t-from-pos":[{"mask-t-from":ed()}],"mask-image-t-to-pos":[{"mask-t-to":ed()}],"mask-image-t-from-color":[{"mask-t-from":V()}],"mask-image-t-to-color":[{"mask-t-to":V()}],"mask-image-r-from-pos":[{"mask-r-from":ed()}],"mask-image-r-to-pos":[{"mask-r-to":ed()}],"mask-image-r-from-color":[{"mask-r-from":V()}],"mask-image-r-to-color":[{"mask-r-to":V()}],"mask-image-b-from-pos":[{"mask-b-from":ed()}],"mask-image-b-to-pos":[{"mask-b-to":ed()}],"mask-image-b-from-color":[{"mask-b-from":V()}],"mask-image-b-to-color":[{"mask-b-to":V()}],"mask-image-l-from-pos":[{"mask-l-from":ed()}],"mask-image-l-to-pos":[{"mask-l-to":ed()}],"mask-image-l-from-color":[{"mask-l-from":V()}],"mask-image-l-to-color":[{"mask-l-to":V()}],"mask-image-x-from-pos":[{"mask-x-from":ed()}],"mask-image-x-to-pos":[{"mask-x-to":ed()}],"mask-image-x-from-color":[{"mask-x-from":V()}],"mask-image-x-to-color":[{"mask-x-to":V()}],"mask-image-y-from-pos":[{"mask-y-from":ed()}],"mask-image-y-to-pos":[{"mask-y-to":ed()}],"mask-image-y-from-color":[{"mask-y-from":V()}],"mask-image-y-to-color":[{"mask-y-to":V()}],"mask-image-radial":[{"mask-radial":[eo,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":ed()}],"mask-image-radial-to-pos":[{"mask-radial-to":ed()}],"mask-image-radial-from-color":[{"mask-radial-from":V()}],"mask-image-radial-to-color":[{"mask-radial-to":V()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[I]}],"mask-image-conic-from-pos":[{"mask-conic-from":ed()}],"mask-image-conic-to-pos":[{"mask-conic-to":ed()}],"mask-image-conic-from-color":[{"mask-conic-from":V()}],"mask-image-conic-to-color":[{"mask-conic-to":V()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:C()}],"mask-repeat":[{mask:M()}],"mask-size":[{mask:L()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",eo,Q]}],filter:[{filter:["","none",eo,Q]}],blur:[{blur:ef()}],brightness:[{brightness:[I,eo,Q]}],contrast:[{contrast:[I,eo,Q]}],"drop-shadow":[{"drop-shadow":["","none",p,ec,er]}],"drop-shadow-color":[{"drop-shadow":V()}],grayscale:[{grayscale:["",I,eo,Q]}],"hue-rotate":[{"hue-rotate":[I,eo,Q]}],invert:[{invert:["",I,eo,Q]}],saturate:[{saturate:[I,eo,Q]}],sepia:[{sepia:["",I,eo,Q]}],"backdrop-filter":[{"backdrop-filter":["","none",eo,Q]}],"backdrop-blur":[{"backdrop-blur":ef()}],"backdrop-brightness":[{"backdrop-brightness":[I,eo,Q]}],"backdrop-contrast":[{"backdrop-contrast":[I,eo,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",I,eo,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[I,eo,Q]}],"backdrop-invert":[{"backdrop-invert":["",I,eo,Q]}],"backdrop-opacity":[{"backdrop-opacity":[I,eo,Q]}],"backdrop-saturate":[{"backdrop-saturate":[I,eo,Q]}],"backdrop-sepia":[{"backdrop-sepia":["",I,eo,Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":S()}],"border-spacing-x":[{"border-spacing-x":S()}],"border-spacing-y":[{"border-spacing-y":S()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",eo,Q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[I,"initial",eo,Q]}],ease:[{ease:["linear","initial",v,eo,Q]}],delay:[{delay:[I,eo,Q]}],animate:[{animate:["none",b,eo,Q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[h,eo,Q]}],"perspective-origin":[{"perspective-origin":_()}],rotate:[{rotate:ep()}],"rotate-x":[{"rotate-x":ep()}],"rotate-y":[{"rotate-y":ep()}],"rotate-z":[{"rotate-z":ep()}],scale:[{scale:em()}],"scale-x":[{"scale-x":em()}],"scale-y":[{"scale-y":em()}],"scale-z":[{"scale-z":em()}],"scale-3d":["scale-3d"],skew:[{skew:eh()}],"skew-x":[{"skew-x":eh()}],"skew-y":[{"skew-y":eh()}],transform:[{transform:[eo,Q,"","none","gpu","cpu"]}],"transform-origin":[{origin:_()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eg()}],"translate-x":[{"translate-x":eg()}],"translate-y":[{"translate-y":eg()}],"translate-z":[{"translate-z":eg()}],"translate-none":["translate-none"],accent:[{accent:V()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:V()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",eo,Q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",eo,Q]}],fill:[{fill:["none",...V()]}],"stroke-w":[{stroke:[I,ei,Z,J]}],stroke:[{stroke:["none",...V()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function ey(...e){return ex(p(e))}e.s(["cn",()=>ey],47163);let e_=[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/portfolio",label:"Portfolio"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];function ew(){let e=(0,n.usePathname)(),[t,r]=(0,a.useState)(!1);return(0,o.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border",children:(0,o.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,o.jsx)(i.default,{href:"/",className:"flex items-center space-x-2",children:(0,o.jsxs)("div",{className:"text-2xl font-bold",children:[(0,o.jsx)("span",{className:"text-foreground",children:"Innovate"}),(0,o.jsx)("span",{className:"text-primary",children:" & "}),(0,o.jsx)("span",{className:"text-secondary",children:"Amplify"})]})}),(0,o.jsx)("div",{className:"hidden md:flex items-center gap-8",children:e_.map(t=>(0,o.jsx)(i.default,{href:t.href,className:ey("text-sm font-medium transition-colors hover:text-primary relative",e===t.href?"text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary":"text-muted-foreground"),children:t.label},t.href))}),(0,o.jsx)("button",{className:"md:hidden p-2 text-foreground hover:text-primary transition-colors",onClick:()=>r(!t),"aria-label":"Toggle menu",children:t?(0,o.jsx)(f,{size:24}):(0,o.jsx)(d,{size:24})})]}),t&&(0,o.jsx)("div",{className:"md:hidden py-4 space-y-4",children:e_.map(t=>(0,o.jsx)(i.default,{href:t.href,className:ey("block text-sm font-medium transition-colors hover:text-primary px-2 py-1",e===t.href?"text-primary":"text-muted-foreground"),onClick:()=>r(!1),children:t.label},t.href))})]})})}e.s(["default",()=>ew],13474);let ek=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;

uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_objectHelperBox;

out vec2 v_responsiveUV;
out vec2 v_responsiveBoxSize;
out vec2 v_responsiveHelperBox;
out vec2 v_responsiveBoxGivenSize;

out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_patternHelperBox;

out vec2 v_imageUV;

// #define ADD_HELPERS

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================
  // Sizing api for graphic objects with fixed ratio
  // (currently supports only ratio = 1)

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  #ifdef ADD_HELPERS
  v_objectHelperBox = uv;
  v_objectHelperBox *= objectWorldScale;
  v_objectHelperBox += boxOrigin * (objectWorldScale - 1.);
  #endif

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;


  // ===================================================


  // ===================================================
  // Sizing api for graphic objects with either givenBoxSize ratio or canvas ratio.
  // Full-screen mode available with u_worldWidth = u_worldHeight = 0

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  v_responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / v_responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================


  // ===================================================
  // Sizing api for patterns
  // (treating graphics as a image u_worldWidth x u_worldHeight size)

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  #ifdef ADD_HELPERS
  v_patternHelperBox = uv;
  v_patternHelperBox *= patternBoxScale;
  v_patternHelperBox += boxOrigin * (patternBoxScale - 1.);
  #endif

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================


  // ===================================================
  // Sizing api for images

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  #ifdef ADD_HELPERS
  vec2 imageHelperBox = uv;
  imageHelperBox *= imageBoxScale;
  imageHelperBox += boxOrigin * (imageBoxScale - 1.);
  #endif

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;

  // ===================================================

}`,eS=8294400;class eR{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;constructor(e,t,r,o,i=0,n=0,a=2,s=eS,l=[]){if(e instanceof HTMLElement)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const e=document.createElement("style");e.innerHTML=ez,e.setAttribute("data-paper-shader",""),document.head.prepend(e)}const c=document.createElement("canvas");this.canvasElement=c,this.parentElement.prepend(c),this.fragmentShader=t,this.providedUniforms=r,this.mipmaps=l,this.currentFrame=n,this.minPixelRatio=a,this.maxPixelCount=s;const u=c.getContext("webgl2",o);if(!u)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=u,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(i),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,t,r){let o=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=o?o.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),r=r.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let n=eE(e,e.VERTEX_SHADER,t),a=eE(e,e.FRAGMENT_SHADER,r);if(!n||!a)return null;let s=e.createProgram();return s?(e.attachShader(s,n),e.attachShader(s,a),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS))?(e.detachShader(s,n),e.detachShader(s,a),e.deleteShader(n),e.deleteShader(a),s):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(n),e.deleteShader(a),null):null}(this.gl,ek,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([t,r])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),r instanceof HTMLImageElement){let r=`${t}AspectRatio`;e[r]=this.gl.getUniformLocation(this.program,r)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];void 0!==t&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,r=Math.max(1,window.devicePixelRatio),o=visualViewport?.scale??1;if(this.devicePixelsSupported){let i=Math.max(1,this.minPixelRatio/r);e=this.parentDevicePixelWidth*i*o,t=this.parentDevicePixelHeight*i*o}else{let i,n,a=Math.max(r,this.minPixelRatio)*o;this.isSafari&&(a*=Math.max(1,(n=Math.round(100*(i=outerWidth/((visualViewport?.scale??1)*(visualViewport?.width??window.innerWidth)+(window.innerWidth-document.documentElement.clientWidth)))))%5==0?n/100:33===n?1/3:67===n?2/3:133===n?4/3:i)),e=Math.round(this.parentWidth)*a,t=Math.round(this.parentHeight)*a}let i=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t)),n=Math.round(e*i),a=Math.round(t*i),s=n/Math.round(this.parentWidth);(this.canvasElement.width!==n||this.canvasElement.height!==a||this.renderScale!==s)&&(this.renderScale=s,this.canvasElement.width=n,this.canvasElement.height=a,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let t=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||0===t.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let r=this.textures.get(e);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let o=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+o);let i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let n=this.gl.getError();if(n!==this.gl.NO_ERROR||null===i)return void console.error("Paper Shaders: WebGL error when uploading texture:",n);this.textures.set(e,i);let a=this.uniformLocations[e];if(a){this.gl.uniform1i(a,o);let r=`${e}AspectRatio`,i=this.uniformLocations[r];if(i){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(i,e)}}};areUniformValuesEqual=(e,t)=>e===t||!!(Array.isArray(e)&&Array.isArray(t))&&e.length===t.length&&e.every((e,r)=>this.areUniformValuesEqual(e,t[r]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let r=t;if(t instanceof HTMLImageElement&&(r=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],r))return;this.uniformCache[e]=r;let o=this.uniformLocations[e];if(!o)return void console.warn(`Uniform location for ${e} not found`);if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let r=null,i=null;if(void 0!==t[0]&&Array.isArray(t[0])){let o=t[0].length;if(!t.every(e=>e.length===o))return void console.warn(`All child arrays must be the same length for ${e}`);r=t.flat(),i=o}else i=(r=t).length;switch(i){case 2:this.gl.uniform2fv(o,r);break;case 3:this.gl.uniform3fv(o,r);break;case 4:this.gl.uniform4fv(o,r);break;case 9:this.gl.uniformMatrix3fv(o,!1,r);break;case 16:this.gl.uniformMatrix4fv(o,!1,r);break;default:console.warn(`Unsupported uniform array length: ${i}`)}}else"number"==typeof t?this.gl.uniform1f(o,t):"boolean"==typeof t?this.gl.uniform1i(o,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(document.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=eS)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(document.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function eE(e,t,r){let o=e.createShader(t);return o?(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(o)),e.deleteShader(o),null):null}let ez=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;async function eU(e){let t={},r=[];return Object.entries(e).forEach(([e,o])=>{if("string"==typeof o){if(!o){t[e]=function(){if("undefined"==typeof window)return void console.warn("Paper Shaders: can’t create an image on the server");let e=new Image;return e.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",e}();return}if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch{return!1}})(o))return void console.warn(`Uniform "${e}" has invalid URL "${o}". Skipping image loading.`);let i=new Promise((r,i)=>{let n=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}})(o)&&(n.crossOrigin="anonymous"),n.onload=()=>{t[e]=n,r()},n.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${o}`),i()},n.src=o});r.push(i)}else t[e]=o}),await Promise.all(r),t}let eA=(0,a.forwardRef)(function({fragmentShader:e,uniforms:t,webGlContextAttributes:r,speed:i=0,frame:n=0,width:s,height:l,minPixelRatio:c,maxPixelCount:u,mipmaps:d,style:f,...p},m){var h;let g,v,[b,x]=(0,a.useState)(!1),y=(0,a.useRef)(null),_=(0,a.useRef)(null),w=(0,a.useRef)(r);(0,a.useEffect)(()=>((async()=>{let r=await eU(t);y.current&&!_.current&&(_.current=new eR(y.current,e,r,w.current,i,n,c,u,d),x(!0))})(),()=>{_.current?.dispose(),_.current=null}),[e]),(0,a.useEffect)(()=>{let e=!1;return(async()=>{let r=await eU(t);e||_.current?.setUniforms(r)})(),()=>{e=!0}},[t,b]),(0,a.useEffect)(()=>{_.current?.setSpeed(i)},[i,b]),(0,a.useEffect)(()=>{_.current?.setMaxPixelCount(u)},[u,b]),(0,a.useEffect)(()=>{_.current?.setMinPixelRatio(c)},[c,b]),(0,a.useEffect)(()=>{_.current?.setFrame(n)},[n,b]);let k=(h=[y,m],g=a.useRef(void 0),v=a.useCallback(e=>{let t=h.map(t=>{if(null!=t){if("function"==typeof t){let r=t(e);return"function"==typeof r?r:()=>{t(null)}}return t.current=e,()=>{t.current=null}}});return()=>{t.forEach(e=>e?.())}},h),a.useMemo(()=>h.every(e=>null==e)?null:e=>{g.current&&(g.current(),g.current=void 0),null!=e&&(g.current=v(e))},h));return(0,o.jsx)("div",{ref:k,style:void 0!==s||void 0!==l?{width:"string"==typeof s&&!1===isNaN(+s)?+s:s,height:"string"==typeof l&&!1===isNaN(+l)?+l:l,...f}:f,...p})});eA.displayName="ShaderMount";let eB=`
in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_patternUV;
in vec2 v_imageUV;`,ej=`
in vec2 v_objectBoxSize;
in vec2 v_objectHelperBox;
in vec2 v_responsiveBoxSize;
in vec2 v_responsiveHelperBox;
in vec2 v_patternBoxSize;
in vec2 v_patternHelperBox;`,eP=`
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;`,eO={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},eT={none:0,contain:1,cover:2};function eV(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:eM;if("string"!=typeof e)return eM;let t,r,o,i=1;if(e.startsWith("#")){var n;[t,r,o,i]=(3===(n=(n=e).replace(/^#/,"")).length&&(n=n.split("").map(e=>e+e).join("")),6===n.length&&(n+="ff"),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255,parseInt(n.slice(6,8),16)/255])}else if(e.startsWith("rgb")){let n;[t,r,o,i]=(n=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0")/255,parseInt(n[2]??"0")/255,parseInt(n[3]??"0")/255,void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1]}else{let n;if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),eM;[t,r,o,i]=function(e){let t,r,o,[i,n,a,s]=e,l=i/360,c=n/100,u=a/100;if(0===n)t=r=o=u;else{let e=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e,i=u<.5?u*(1+c):u+c-u*c,n=2*u-i;t=e(n,i,l+1/3),r=e(n,i,l),o=e(n,i,l-1/3)}return[t,r,o,s]}((n=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0"),parseInt(n[2]??"0"),parseInt(n[3]??"0"),void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1])}return[eC(t,0,1),eC(r,0,1),eC(o,0,1),eC(i,0,1)]}let eC=(e,t,r)=>Math.min(Math.max(e,t),r),eM=[0,0,0,1],eL=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,eN=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,eI=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,eF=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[10];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

${eB}
${ej}
${eP}

out vec4 fragColor;

${eL}
${eN}
${eI}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 shape_uv = v_objectUV;
  shape_uv += .5;

  vec2 grainUV = v_objectUV;
  // apply inverse transform to grain_uv so it respects the originXY
  float grainUVRot = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(grainUVRot), sin(grainUVRot), -sin(grainUVRot), cos(grainUVRot));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);
  grainUV = transpose(graphicRotation) * grainUV;
  grainUV *= u_scale;
  grainUV *= .7;
  grainUV -= graphicOffset;
  grainUV *= v_objectBoxSize;
  
  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(shape_uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    shape_uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., shape_uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., shape_uv.y));
    shape_uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., shape_uv.x));
  }

  vec2 uvRotated = shape_uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < 10; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  float rr = noise(rotate(grainUV, 1.), vec2(3.));
  float gg = noise(rotate(grainUV, 2.) + 10., vec2(-1.));
  float bb = noise(grainUV - 2., vec2(5.));
  vec3 grainColor = vec3(rr, gg, bb);
  color = mix(color, grainColor, .01 + .3 * u_grainOverlay);
  
  fragColor = vec4(color, opacity);
}
`,eW={name:"Default",params:{...eO,speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}},eD=(0,a.memo)(function({speed:e=eW.params.speed,frame:t=eW.params.frame,colors:r=eW.params.colors,distortion:i=eW.params.distortion,swirl:n=eW.params.swirl,grainMixer:a=eW.params.grainMixer,grainOverlay:s=eW.params.grainOverlay,fit:l=eW.params.fit,rotation:c=eW.params.rotation,scale:u=eW.params.scale,originX:d=eW.params.originX,originY:f=eW.params.originY,offsetX:p=eW.params.offsetX,offsetY:m=eW.params.offsetY,worldWidth:h=eW.params.worldWidth,worldHeight:g=eW.params.worldHeight,...v}){let b={u_colors:r.map(eV),u_colorsCount:r.length,u_distortion:i,u_swirl:n,u_grainMixer:a,u_grainOverlay:s,u_fit:eT[l],u_rotation:c,u_scale:u,u_offsetX:p,u_offsetY:m,u_originX:d,u_originY:f,u_worldWidth:h,u_worldHeight:g};return(0,o.jsx)(eA,{...v,speed:e,frame:t,fragmentShader:eF,uniforms:b})},function(e,t){for(let r in e){if("colors"===r){let r=Array.isArray(e.colors),o=Array.isArray(t.colors);if(!r||!o){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,r)=>e===t.colors?.[r]))return!1;continue}if(!1===Object.is(e[r],t[r]))return!1}return!0});function e$({children:e}){let t=(0,a.useRef)(null),[r,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>i(!0),r=()=>i(!1),o=t.current;return o&&(o.addEventListener("mouseenter",e),o.addEventListener("mouseleave",r)),()=>{o&&(o.removeEventListener("mouseenter",e),o.removeEventListener("mouseleave",r))}},[]),(0,o.jsxs)("div",{ref:t,className:"min-h-screen bg-black relative overflow-hidden",children:[(0,o.jsx)("svg",{className:"absolute inset-0 w-0 h-0",children:(0,o.jsxs)("defs",{children:[(0,o.jsxs)("filter",{id:"glass-effect",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,o.jsx)("feTurbulence",{baseFrequency:"0.005",numOctaves:"1",result:"noise"}),(0,o.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"0.3"}),(0,o.jsx)("feColorMatrix",{type:"matrix",values:"1 0 0 0 0.02   0 1 0 0 0.02   0 0 1 0 0.05   0 0 0 0.9 0",result:"tint"})]}),(0,o.jsxs)("filter",{id:"gooey-filter",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,o.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"4",result:"blur"}),(0,o.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"gooey"}),(0,o.jsx)("feComposite",{in:"SourceGraphic",in2:"gooey",operator:"atop"})]})]})}),(0,o.jsx)(eD,{className:"absolute inset-0 w-full h-full",colors:["#000000","#8b5cf6","#ffffff","#1e1b4b","#4c1d95"],speed:.3}),(0,o.jsx)(eD,{className:"absolute inset-0 w-full h-full opacity-60",colors:["#000000","#ffffff","#8b5cf6","#000000"],speed:.2}),e]})}function eH(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}e.s(["default",()=>e$],62770);var eG=a.forwardRef((e,t)=>{let{children:r,...i}=e,n=a.Children.toArray(r),s=n.find(eq);if(s){let e=s.props.children,r=n.map(t=>t!==s?t:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,o.jsx)(eX,{...i,ref:t,children:a.isValidElement(e)?a.cloneElement(e,void 0,r):null})}return(0,o.jsx)(eX,{...i,ref:t,children:r})});eG.displayName="Slot";var eX=a.forwardRef((e,t)=>{let{children:r,...o}=e;if(a.isValidElement(r)){var i;let e,n,s=(i=r,(n=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(n=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref);return a.cloneElement(r,{...function(e,t){let r={...t};for(let o in t){let i=e[o],n=t[o];/^on[A-Z]/.test(o)?i&&n?r[o]=(...e)=>{n(...e),i(...e)}:i&&(r[o]=i):"style"===o?r[o]={...i,...n}:"className"===o&&(r[o]=[i,n].filter(Boolean).join(" "))}return{...e,...r}}(o,r.props),ref:t?function(...e){return t=>{let r=!1,o=e.map(e=>{let o=eH(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():eH(e[t],null)}}}}(t,s):s})}return a.Children.count(r)>1?a.Children.only(null):null});eX.displayName="SlotClone";var eY=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function eq(e){return a.isValidElement(e)&&e.type===eY}e.s(["Slot",()=>eG],91918);let eK=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,eQ=(t="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var o;if((null==r?void 0:r.variants)==null)return p(t,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:i,defaultVariants:n}=r,a=Object.keys(i).map(t=>{let r=null==e?void 0:e[t],o=null==n?void 0:n[t];if(null===r)return null;let a=eK(r)||eK(o);return i[t][a]}),s=e&&Object.entries(e).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return p(t,a,null==r||null==(o=r.compoundVariants)?void 0:o.reduce((e,t)=>{let{class:r,className:o,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...n,...s}[t]):({...n,...s})[t]===r})?[...e,r,o]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function eZ({className:e,variant:t,size:r,asChild:i=!1,...n}){let a=i?eG:"button";return(0,o.jsx)(a,{"data-slot":"button",className:ey(eQ({variant:t,size:r,className:e})),...n})}e.s(["Button",()=>eZ],67881)}]);