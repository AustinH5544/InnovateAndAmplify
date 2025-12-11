(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,r)=>{t.exports=e.r(76562)},88143,(e,t,r)=>{"use strict";function o({widthInt:e,heightInt:t,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:n}){let a=r?40*r:e,s=o?40*o:t,l=a&&s?`viewBox='0 0 ${a} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return o}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return a}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(33525);let o=e.r(88143),i=e.r(87690),n=["-moz-initial","fill","none","scale-down",void 0];function a(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:r=!1,priority:l=!1,preload:c=!1,loading:d,className:u,quality:f,width:p,height:m,fill:h=!1,style:g,overrideSrc:v,onLoad:b,onLoadingComplete:x,placeholder:y="empty",blurDataURL:_,fetchPriority:w,decoding:S="async",layout:k,objectFit:R,objectPosition:z,lazyBoundary:E,lazyRoot:j,...U},P){var A;let B,O,C,{imgConf:V,showAltText:M,blurComplete:T,defaultLoader:I}=P,L=V||i.imageConfigDefault;if("allSizes"in L)B=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),r=L.qualities?.sort((e,t)=>e-t);B={...L,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===I)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let N=U.loader||I;delete U.loader,delete U.srcSet;let D="__next_img_default"in N;if(D){if("custom"===B.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=N;N=t=>{let{config:r,...o}=t;return e(o)}}if(k){"fill"===k&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(g={...g,...e});let r={responsive:"100vw",fill:"100vw"}[k];r&&!t&&(t=r)}let F="",W=s(p),H=s(m);if((A=e)&&"object"==typeof A&&(a(A)||void 0!==A.src)){let t=a(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(O=t.blurWidth,C=t.blurHeight,_=_||t.blurDataURL,F=t.src,!h)if(W||H){if(W&&!H){let e=W/t.width;H=Math.round(t.height*e)}else if(!W&&H){let e=H/t.height;W=Math.round(t.width*e)}}else W=t.width,H=t.height}let $=!l&&!c&&("lazy"===d||void 0===d);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,$=!1),B.unoptimized&&(r=!0),D&&!B.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let G=s(f),X=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:z}:{},M?{}:{color:"transparent"},g),q=T||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:W,heightInt:H,blurWidth:O,blurHeight:C,blurDataURL:_||"",objectFit:X.objectFit})}")`:`url("${y}")`,Y=n.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,K=q?{backgroundSize:Y,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Q=function({config:e,src:t,unoptimized:r,width:o,quality:i,sizes:n,loader:a}){if(r)return{src:t,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function({deviceSizes:e,allSizes:t},r,o){if(o){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(o);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,n),c=s.length-1;return{sizes:n||"w"!==l?n:"100vw",srcSet:s.map((r,o)=>`${a({config:e,src:t,quality:i,width:r})} ${"w"===l?r:o+1}${l}`).join(", "),src:a({config:e,src:t,quality:i,width:s[c]})}}({config:B,src:e,unoptimized:r,width:W,quality:G,sizes:t,loader:N}),J=$?"lazy":d;return{props:{...U,loading:J,fetchPriority:w,width:W,height:H,decoding:S,className:u,style:{...X,...K},sizes:Q.sizes,srcSet:Q.srcSet,src:v||Q.src},meta:{unoptimized:r,preload:c||l,placeholder:y,fill:h}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let o=e.r(71645),i="undefined"==typeof window,n=i?()=>{}:o.useLayoutEffect,a=i?()=>{}:o.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return h},defaultHead:function(){return u}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=e.r(55682),a=e.r(90809),s=e.r(43476),l=a._(e.r(71645)),c=n._(e.r(98879)),d=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,o,i;return e.reduce(f,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,o=new Set,i={},e=>{let n=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)o.has(r)?n=!1:o.add(r);else{let t=e.props[r],o=i[r]||new Set;("name"!==r||!a)&&o.has(t)?n=!1:(o.add(t),i[r]=o)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let o=e.r(55682)._(e.r(71645)),i=e.r(87690),n=o.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return o}});let o=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function o(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return o}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let o=e.r(70965);function i({config:e,src:t,width:r,quality:i}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let n=(0,o.findClosestQuality)(i,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${n}${t.startsWith("/_next/static/media/"),""}`}i.__next_img_default=!0;let n=i},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let o=e.r(55682),i=e.r(90809),n=e.r(43476),a=i._(e.r(71645)),s=o._(e.r(74080)),l=o._(e.r(25633)),c=e.r(8927),d=e.r(87690),u=e.r(18556);e.r(33525);let f=e.r(65856),p=o._(e.r(1948)),m=e.r(18581),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,o,i,n,a){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}o?.current&&o.current(e)}}))}function v(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:o,width:i,decoding:s,className:l,style:c,fetchPriority:d,placeholder:u,loading:f,unoptimized:p,fill:h,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:_,sizesInput:w,onLoad:S,onError:k,...R},z)=>{let E=(0,a.useCallback)(e=>{e&&(k&&(e.src=e.src),e.complete&&g(e,u,b,x,y,p,w))},[e,u,b,x,y,k,p,w]),j=(0,m.useMergedRef)(z,E);return(0,n.jsx)("img",{...R,...v(d),loading:f,width:i,height:o,decoding:s,"data-nimg":h?"fill":"1",className:l,style:c,sizes:r,srcSet:t,src:e,ref:j,onLoad:e=>{g(e.currentTarget,u,b,x,y,p,w)},onError:e=>{_(!0),"empty"!==u&&y(!0),k&&k(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),o=(0,a.useContext)(u.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=h||o||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"undefined"==typeof window?o?.localPatterns:e.localPatterns}},[o]),{onLoad:s,onLoadingComplete:l}=e,m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[v,y]=(0,a.useState)(!1),[_,w]=(0,a.useState)(!1),{props:S,meta:k}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:_});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...S,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),k.preload?(0,n.jsx)(x,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return d},getImageProps:function(){return c}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=e.r(55682),a=e.r(8927),s=e.r(5500),l=n._(e.r(1948));function c(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},13474,47163,62770,91918,67881,e=>{"use strict";let t,r;var o=e.i(43476),i=e.i(22016),n=e.i(18566),a=e.i(92161),s=e.i(37727),l=e.i(71645);function c(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,o,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(o=e(t[r]))&&(i&&(i+=" "),i+=o)}else for(o in t)t[o]&&(i&&(i+=" "),i+=o);return i}(e))&&(o&&(o+=" "),o+=t);return o}let d=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),u=[],f=(e,t,r)=>{if(0==e.length-t)return r.classGroupId;let o=e[t],i=r.nextPart.get(o);if(i){let r=f(e,t+1,i);if(r)return r}let n=r.validators;if(null===n)return;let a=0===t?e.join("-"):e.slice(t).join("-"),s=n.length;for(let e=0;e<s;e++){let t=n[e];if(t.validator(a))return t.classGroupId}},p=(e,t)=>{let r=d();for(let o in e)m(e[o],r,o,t);return r},m=(e,t,r,o)=>{let i=e.length;for(let n=0;n<i;n++)h(e[n],t,r,o)},h=(e,t,r,o)=>{"string"==typeof e?g(e,t,r):"function"==typeof e?v(e,t,r,o):b(e,t,r,o)},g=(e,t,r)=>{(""===e?t:x(t,e)).classGroupId=r},v=(e,t,r,o)=>{y(e)?m(e(o),t,r,o):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:r,validator:e}))},b=(e,t,r,o)=>{let i=Object.entries(e),n=i.length;for(let e=0;e<n;e++){let[n,a]=i[e];m(a,x(t,n),r,o)}},x=(e,t)=>{let r=e,o=t.split("-"),i=o.length;for(let e=0;e<i;e++){let t=o[e],i=r.nextPart.get(t);i||(i=d(),r.nextPart.set(t,i)),r=i}return r},y=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,_=[],w=(e,t,r,o,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:o,isExternal:i}),S=/\s+/,k=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=k(e[o]))&&(r&&(r+=" "),r+=t);return r},R=[],z=e=>{let t=t=>t[e]||R;return t.isThemeGetter=!0,t},E=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,j=/^\((?:(\w[\w-]*):)?(.+)\)$/i,U=/^\d+\/\d+$/,P=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,A=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,B=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,O=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,V=e=>U.test(e),M=e=>!!e&&!Number.isNaN(Number(e)),T=e=>!!e&&Number.isInteger(Number(e)),I=e=>e.endsWith("%")&&M(e.slice(0,-1)),L=e=>P.test(e),N=()=>!0,D=e=>A.test(e)&&!B.test(e),F=()=>!1,W=e=>O.test(e),H=e=>C.test(e),$=e=>!X(e)&&!Z(e),G=e=>ea(e,ed,F),X=e=>E.test(e),q=e=>ea(e,eu,D),Y=e=>ea(e,ef,M),K=e=>ea(e,el,F),Q=e=>ea(e,ec,H),J=e=>ea(e,em,W),Z=e=>j.test(e),ee=e=>es(e,eu),et=e=>es(e,ep),er=e=>es(e,el),eo=e=>es(e,ed),ei=e=>es(e,ec),en=e=>es(e,em,!0),ea=(e,t,r)=>{let o=E.exec(e);return!!o&&(o[1]?t(o[1]):r(o[2]))},es=(e,t,r=!1)=>{let o=j.exec(e);return!!o&&(o[1]?t(o[1]):r)},el=e=>"position"===e||"percentage"===e,ec=e=>"image"===e||"url"===e,ed=e=>"length"===e||"size"===e||"bg-size"===e,eu=e=>"length"===e,ef=e=>"number"===e,ep=e=>"family-name"===e,em=e=>"shadow"===e,eh=((e,...t)=>{let r,o,i,n,a=e=>{let t=o(e);if(t)return t;let n=((e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:i,sortModifiers:n}=t,a=[],s=e.trim().split(S),l="";for(let e=s.length-1;e>=0;e-=1){let t=s[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=r(t);if(c){l=t+(l.length>0?" "+l:l);continue}let m=!!p,h=o(m?f.substring(0,p):f);if(!h){if(!m||!(h=o(f))){l=t+(l.length>0?" "+l:l);continue}m=!1}let g=0===d.length?"":1===d.length?d[0]:n(d).join(":"),v=u?g+"!":g,b=v+h;if(a.indexOf(b)>-1)continue;a.push(b);let x=i(h,m);for(let e=0;e<x.length;++e){let t=x[e];a.push(v+t)}l=t+(l.length>0?" "+l:l)}return l})(e,r);return i(e,n),n};return n=s=>{var l;let c;return o=(r={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=Object.create(null),o=Object.create(null),i=(i,n)=>{r[i]=n,++t>e&&(t=0,o=r,r=Object.create(null))};return{get(e){let t=r[e];return void 0!==t?t:void 0!==(t=o[e])?(i(e,t),t):void 0},set(e,t){e in r?r[e]=t:i(e,t)}}})((l=t.reduce((e,t)=>t(e),e())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:r}=e,o=e=>{let t,r=[],o=0,i=0,n=0,a=e.length;for(let s=0;s<a;s++){let a=e[s];if(0===o&&0===i){if(":"===a){r.push(e.slice(n,s)),n=s+1;continue}if("/"===a){t=s;continue}}"["===a?o++:"]"===a?o--:"("===a?i++:")"===a&&i--}let s=0===r.length?e:e.slice(n),l=s,c=!1;return s.endsWith("!")?(l=s.slice(0,-1),c=!0):s.startsWith("!")&&(l=s.slice(1),c=!0),w(r,c,l,t&&t>n?t-n:void 0)};if(t){let e=t+":",r=o;o=t=>t.startsWith(e)?r(t.slice(e.length)):w(_,!1,t,void 0,!0)}if(r){let e=o;o=t=>r({className:t,parseClassName:e})}return o})(l),sortModifiers:(c=new Map,l.orderSensitiveModifiers.forEach((e,t)=>{c.set(e,1e6+t)}),e=>{let t=[],r=[];for(let o=0;o<e.length;o++){let i=e[o],n="["===i[0],a=c.has(i);n||a?(r.length>0&&(r.sort(),t.push(...r),r=[]),t.push(i)):r.push(i)}return r.length>0&&(r.sort(),t.push(...r)),t}),...(e=>{let t=(e=>{let{theme:t,classGroups:r}=e;return p(r,t)})(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var r;let t,o,i;return -1===(r=e).slice(1,-1).indexOf(":")?void 0:(o=(t=r.slice(1,-1)).indexOf(":"),(i=t.slice(0,o))?"arbitrary.."+i:void 0)}let o=e.split("-"),i=+(""===o[0]&&o.length>1);return f(o,i,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=o[e],i=r[e];if(t){if(i){let e=Array(i.length+t.length);for(let t=0;t<i.length;t++)e[t]=i[t];for(let r=0;r<t.length;r++)e[i.length+r]=t[r];return e}return t}return i||u}return r[e]||u}}})(l)}).cache.get,i=r.cache.set,n=a,a(s)},(...e)=>n(((...e)=>{let t,r,o=0,i="";for(;o<e.length;)(t=e[o++])&&(r=k(t))&&(i&&(i+=" "),i+=r);return i})(...e))})(()=>{let e=z("color"),t=z("font"),r=z("text"),o=z("font-weight"),i=z("tracking"),n=z("leading"),a=z("breakpoint"),s=z("container"),l=z("spacing"),c=z("radius"),d=z("shadow"),u=z("inset-shadow"),f=z("text-shadow"),p=z("drop-shadow"),m=z("blur"),h=z("perspective"),g=z("aspect"),v=z("ease"),b=z("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],_=()=>[...y(),Z,X],w=()=>["auto","hidden","clip","visible","scroll"],S=()=>["auto","contain","none"],k=()=>[Z,X,l],R=()=>[V,"full","auto",...k()],E=()=>[T,"none","subgrid",Z,X],j=()=>["auto",{span:["full",T,Z,X]},T,Z,X],U=()=>[T,"auto",Z,X],P=()=>["auto","min","max","fr",Z,X],A=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],B=()=>["start","end","center","stretch","center-safe","end-safe"],O=()=>["auto",...k()],C=()=>[V,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...k()],D=()=>[e,Z,X],F=()=>[...y(),er,K,{position:[Z,X]}],W=()=>["no-repeat",{repeat:["","x","y","space","round"]}],H=()=>["auto","cover","contain",eo,G,{size:[Z,X]}],ea=()=>[I,ee,q],es=()=>["","none","full",c,Z,X],el=()=>["",M,ee,q],ec=()=>["solid","dashed","dotted","double"],ed=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],eu=()=>[M,I,er,K],ef=()=>["","none",m,Z,X],ep=()=>["none",M,Z,X],em=()=>["none",M,Z,X],eh=()=>[M,Z,X],eg=()=>[V,"full",...k()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[L],breakpoint:[L],color:[N],container:[L],"drop-shadow":[L],ease:["in","out","in-out"],font:[$],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[L],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[L],shadow:[L],spacing:["px",M],text:[L],"text-shadow":[L],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",V,X,Z,g]}],container:["container"],columns:[{columns:[M,X,Z,s]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:_()}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:S()}],"overscroll-x":[{"overscroll-x":S()}],"overscroll-y":[{"overscroll-y":S()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:R()}],"inset-x":[{"inset-x":R()}],"inset-y":[{"inset-y":R()}],start:[{start:R()}],end:[{end:R()}],top:[{top:R()}],right:[{right:R()}],bottom:[{bottom:R()}],left:[{left:R()}],visibility:["visible","invisible","collapse"],z:[{z:[T,"auto",Z,X]}],basis:[{basis:[V,"full","auto",s,...k()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[M,V,"auto","initial","none",X]}],grow:[{grow:["",M,Z,X]}],shrink:[{shrink:["",M,Z,X]}],order:[{order:[T,"first","last","none",Z,X]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":P()}],"auto-rows":[{"auto-rows":P()}],gap:[{gap:k()}],"gap-x":[{"gap-x":k()}],"gap-y":[{"gap-y":k()}],"justify-content":[{justify:[...A(),"normal"]}],"justify-items":[{"justify-items":[...B(),"normal"]}],"justify-self":[{"justify-self":["auto",...B()]}],"align-content":[{content:["normal",...A()]}],"align-items":[{items:[...B(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...B(),{baseline:["","last"]}]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...B(),"baseline"]}],"place-self":[{"place-self":["auto",...B()]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:O()}],mx:[{mx:O()}],my:[{my:O()}],ms:[{ms:O()}],me:[{me:O()}],mt:[{mt:O()}],mr:[{mr:O()}],mb:[{mb:O()}],ml:[{ml:O()}],"space-x":[{"space-x":k()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":k()}],"space-y-reverse":["space-y-reverse"],size:[{size:C()}],w:[{w:[s,"screen",...C()]}],"min-w":[{"min-w":[s,"screen","none",...C()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[a]},...C()]}],h:[{h:["screen","lh",...C()]}],"min-h":[{"min-h":["screen","lh","none",...C()]}],"max-h":[{"max-h":["screen","lh",...C()]}],"font-size":[{text:["base",r,ee,q]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,Z,Y]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",I,X]}],"font-family":[{font:[et,X,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,Z,X]}],"line-clamp":[{"line-clamp":[M,"none",Z,Y]}],leading:[{leading:[n,...k()]}],"list-image":[{"list-image":["none",Z,X]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,X]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ec(),"wavy"]}],"text-decoration-thickness":[{decoration:[M,"from-font","auto",Z,q]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[M,"auto",Z,X]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:F()}],"bg-repeat":[{bg:W()}],"bg-size":[{bg:H()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},T,Z,X],radial:["",Z,X],conic:[T,Z,X]},ei,Q]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:ea()}],"gradient-via-pos":[{via:ea()}],"gradient-to-pos":[{to:ea()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:es()}],"rounded-s":[{"rounded-s":es()}],"rounded-e":[{"rounded-e":es()}],"rounded-t":[{"rounded-t":es()}],"rounded-r":[{"rounded-r":es()}],"rounded-b":[{"rounded-b":es()}],"rounded-l":[{"rounded-l":es()}],"rounded-ss":[{"rounded-ss":es()}],"rounded-se":[{"rounded-se":es()}],"rounded-ee":[{"rounded-ee":es()}],"rounded-es":[{"rounded-es":es()}],"rounded-tl":[{"rounded-tl":es()}],"rounded-tr":[{"rounded-tr":es()}],"rounded-br":[{"rounded-br":es()}],"rounded-bl":[{"rounded-bl":es()}],"border-w":[{border:el()}],"border-w-x":[{"border-x":el()}],"border-w-y":[{"border-y":el()}],"border-w-s":[{"border-s":el()}],"border-w-e":[{"border-e":el()}],"border-w-t":[{"border-t":el()}],"border-w-r":[{"border-r":el()}],"border-w-b":[{"border-b":el()}],"border-w-l":[{"border-l":el()}],"divide-x":[{"divide-x":el()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":el()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ec(),"hidden","none"]}],"divide-style":[{divide:[...ec(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...ec(),"none","hidden"]}],"outline-offset":[{"outline-offset":[M,Z,X]}],"outline-w":[{outline:["",M,ee,q]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",d,en,J]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",u,en,J]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:el()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[M,q]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":el()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",f,en,J]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[M,Z,X]}],"mix-blend":[{"mix-blend":[...ed(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ed()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[M]}],"mask-image-linear-from-pos":[{"mask-linear-from":eu()}],"mask-image-linear-to-pos":[{"mask-linear-to":eu()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":eu()}],"mask-image-t-to-pos":[{"mask-t-to":eu()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":eu()}],"mask-image-r-to-pos":[{"mask-r-to":eu()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":eu()}],"mask-image-b-to-pos":[{"mask-b-to":eu()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":eu()}],"mask-image-l-to-pos":[{"mask-l-to":eu()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":eu()}],"mask-image-x-to-pos":[{"mask-x-to":eu()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":eu()}],"mask-image-y-to-pos":[{"mask-y-to":eu()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[Z,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":eu()}],"mask-image-radial-to-pos":[{"mask-radial-to":eu()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[M]}],"mask-image-conic-from-pos":[{"mask-conic-from":eu()}],"mask-image-conic-to-pos":[{"mask-conic-to":eu()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:F()}],"mask-repeat":[{mask:W()}],"mask-size":[{mask:H()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Z,X]}],filter:[{filter:["","none",Z,X]}],blur:[{blur:ef()}],brightness:[{brightness:[M,Z,X]}],contrast:[{contrast:[M,Z,X]}],"drop-shadow":[{"drop-shadow":["","none",p,en,J]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",M,Z,X]}],"hue-rotate":[{"hue-rotate":[M,Z,X]}],invert:[{invert:["",M,Z,X]}],saturate:[{saturate:[M,Z,X]}],sepia:[{sepia:["",M,Z,X]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,X]}],"backdrop-blur":[{"backdrop-blur":ef()}],"backdrop-brightness":[{"backdrop-brightness":[M,Z,X]}],"backdrop-contrast":[{"backdrop-contrast":[M,Z,X]}],"backdrop-grayscale":[{"backdrop-grayscale":["",M,Z,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[M,Z,X]}],"backdrop-invert":[{"backdrop-invert":["",M,Z,X]}],"backdrop-opacity":[{"backdrop-opacity":[M,Z,X]}],"backdrop-saturate":[{"backdrop-saturate":[M,Z,X]}],"backdrop-sepia":[{"backdrop-sepia":["",M,Z,X]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":k()}],"border-spacing-x":[{"border-spacing-x":k()}],"border-spacing-y":[{"border-spacing-y":k()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,X]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[M,"initial",Z,X]}],ease:[{ease:["linear","initial",v,Z,X]}],delay:[{delay:[M,Z,X]}],animate:[{animate:["none",b,Z,X]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[h,Z,X]}],"perspective-origin":[{"perspective-origin":_()}],rotate:[{rotate:ep()}],"rotate-x":[{"rotate-x":ep()}],"rotate-y":[{"rotate-y":ep()}],"rotate-z":[{"rotate-z":ep()}],scale:[{scale:em()}],"scale-x":[{"scale-x":em()}],"scale-y":[{"scale-y":em()}],"scale-z":[{"scale-z":em()}],"scale-3d":["scale-3d"],skew:[{skew:eh()}],"skew-x":[{"skew-x":eh()}],"skew-y":[{"skew-y":eh()}],transform:[{transform:[Z,X,"","none","gpu","cpu"]}],"transform-origin":[{origin:_()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eg()}],"translate-x":[{"translate-x":eg()}],"translate-y":[{"translate-y":eg()}],"translate-z":[{"translate-z":eg()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,X]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,X]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[M,ee,q,Y]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function eg(...e){return eh(c(e))}e.s(["cn",()=>eg],47163);var ev=e.i(57688);let eb=[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/portfolio",label:"Portfolio"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];function ex(){let e=(0,n.usePathname)(),[t,r]=(0,l.useState)(!1);return(0,o.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border",children:(0,o.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,o.jsxs)(i.default,{href:"/",className:"flex items-center gap-3",children:[(0,o.jsx)(ev.default,{src:"/logo.png",alt:"Innovate & Amplify Logo",width:40,height:40,className:"w-10 h-10"}),(0,o.jsxs)("div",{className:"text-xl font-bold",children:[(0,o.jsx)("span",{className:"text-foreground",children:"Innovate"}),(0,o.jsx)("span",{className:"text-primary",children:" & "}),(0,o.jsx)("span",{className:"subtext",children:"Amplify"})]})]}),(0,o.jsx)("div",{className:"hidden md:flex items-center gap-8",children:eb.map(t=>(0,o.jsx)(i.default,{href:t.href,className:eg("text-sm font-medium transition-colors hover:text-primary relative",e===t.href?"text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary":"text-muted-foreground"),children:t.label},t.href))}),(0,o.jsx)("button",{className:"md:hidden p-2 text-foreground hover:text-primary transition-colors",onClick:()=>r(!t),"aria-label":"Toggle menu",children:t?(0,o.jsx)(s.X,{size:24}):(0,o.jsx)(a.Menu,{size:24})})]}),t&&(0,o.jsx)("div",{className:"md:hidden py-4 space-y-4",children:eb.map(t=>(0,o.jsx)(i.default,{href:t.href,className:eg("block text-sm font-medium transition-colors hover:text-primary px-2 py-1",e===t.href?"text-primary":"text-muted-foreground"),onClick:()=>r(!1),children:t.label},t.href))})]})})}e.s(["default",()=>ex],13474);let ey=`#version 300 es
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

}`,e_=8294400;class ew{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;constructor(e,t,r,o,i=0,n=0,a=2,s=e_,l=[]){if(e instanceof HTMLElement)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const e=document.createElement("style");e.innerHTML=ek,e.setAttribute("data-paper-shader",""),document.head.prepend(e)}const c=document.createElement("canvas");this.canvasElement=c,this.parentElement.prepend(c),this.fragmentShader=t,this.providedUniforms=r,this.mipmaps=l,this.currentFrame=n,this.minPixelRatio=a,this.maxPixelCount=s;const d=c.getContext("webgl2",o);if(!d)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=d,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(i),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,t,r){let o=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=o?o.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),r=r.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let n=eS(e,e.VERTEX_SHADER,t),a=eS(e,e.FRAGMENT_SHADER,r);if(!n||!a)return null;let s=e.createProgram();return s?(e.attachShader(s,n),e.attachShader(s,a),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS))?(e.detachShader(s,n),e.detachShader(s,a),e.deleteShader(n),e.deleteShader(a),s):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(n),e.deleteShader(a),null):null}(this.gl,ey,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([t,r])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),r instanceof HTMLImageElement){let r=`${t}AspectRatio`;e[r]=this.gl.getUniformLocation(this.program,r)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];void 0!==t&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,r=Math.max(1,window.devicePixelRatio),o=visualViewport?.scale??1;if(this.devicePixelsSupported){let i=Math.max(1,this.minPixelRatio/r);e=this.parentDevicePixelWidth*i*o,t=this.parentDevicePixelHeight*i*o}else{let i,n,a=Math.max(r,this.minPixelRatio)*o;this.isSafari&&(a*=Math.max(1,(n=Math.round(100*(i=outerWidth/((visualViewport?.scale??1)*(visualViewport?.width??window.innerWidth)+(window.innerWidth-document.documentElement.clientWidth)))))%5==0?n/100:33===n?1/3:67===n?2/3:133===n?4/3:i)),e=Math.round(this.parentWidth)*a,t=Math.round(this.parentHeight)*a}let i=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t)),n=Math.round(e*i),a=Math.round(t*i),s=n/Math.round(this.parentWidth);(this.canvasElement.width!==n||this.canvasElement.height!==a||this.renderScale!==s)&&(this.renderScale=s,this.canvasElement.width=n,this.canvasElement.height=a,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let t=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||0===t.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let r=this.textures.get(e);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let o=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+o);let i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let n=this.gl.getError();if(n!==this.gl.NO_ERROR||null===i)return void console.error("Paper Shaders: WebGL error when uploading texture:",n);this.textures.set(e,i);let a=this.uniformLocations[e];if(a){this.gl.uniform1i(a,o);let r=`${e}AspectRatio`,i=this.uniformLocations[r];if(i){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(i,e)}}};areUniformValuesEqual=(e,t)=>e===t||!!(Array.isArray(e)&&Array.isArray(t))&&e.length===t.length&&e.every((e,r)=>this.areUniformValuesEqual(e,t[r]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let r=t;if(t instanceof HTMLImageElement&&(r=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],r))return;this.uniformCache[e]=r;let o=this.uniformLocations[e];if(!o)return void console.warn(`Uniform location for ${e} not found`);if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let r=null,i=null;if(void 0!==t[0]&&Array.isArray(t[0])){let o=t[0].length;if(!t.every(e=>e.length===o))return void console.warn(`All child arrays must be the same length for ${e}`);r=t.flat(),i=o}else i=(r=t).length;switch(i){case 2:this.gl.uniform2fv(o,r);break;case 3:this.gl.uniform3fv(o,r);break;case 4:this.gl.uniform4fv(o,r);break;case 9:this.gl.uniformMatrix3fv(o,!1,r);break;case 16:this.gl.uniformMatrix4fv(o,!1,r);break;default:console.warn(`Unsupported uniform array length: ${i}`)}}else"number"==typeof t?this.gl.uniform1f(o,t):"boolean"==typeof t?this.gl.uniform1i(o,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(document.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=e_)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(document.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function eS(e,t,r){let o=e.createShader(t);return o?(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(o)),e.deleteShader(o),null):null}let ek=`@layer paper-shaders {
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
}`;async function eR(e){let t={},r=[];return Object.entries(e).forEach(([e,o])=>{if("string"==typeof o){if(!o){t[e]=function(){if("undefined"==typeof window)return void console.warn("Paper Shaders: can’t create an image on the server");let e=new Image;return e.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",e}();return}if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch{return!1}})(o))return void console.warn(`Uniform "${e}" has invalid URL "${o}". Skipping image loading.`);let i=new Promise((r,i)=>{let n=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}})(o)&&(n.crossOrigin="anonymous"),n.onload=()=>{t[e]=n,r()},n.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${o}`),i()},n.src=o});r.push(i)}else t[e]=o}),await Promise.all(r),t}let ez=(0,l.forwardRef)(function({fragmentShader:e,uniforms:t,webGlContextAttributes:r,speed:i=0,frame:n=0,width:a,height:s,minPixelRatio:c,maxPixelCount:d,mipmaps:u,style:f,...p},m){var h;let g,v,[b,x]=(0,l.useState)(!1),y=(0,l.useRef)(null),_=(0,l.useRef)(null),w=(0,l.useRef)(r);(0,l.useEffect)(()=>((async()=>{let r=await eR(t);y.current&&!_.current&&(_.current=new ew(y.current,e,r,w.current,i,n,c,d,u),x(!0))})(),()=>{_.current?.dispose(),_.current=null}),[e]),(0,l.useEffect)(()=>{let e=!1;return(async()=>{let r=await eR(t);e||_.current?.setUniforms(r)})(),()=>{e=!0}},[t,b]),(0,l.useEffect)(()=>{_.current?.setSpeed(i)},[i,b]),(0,l.useEffect)(()=>{_.current?.setMaxPixelCount(d)},[d,b]),(0,l.useEffect)(()=>{_.current?.setMinPixelRatio(c)},[c,b]),(0,l.useEffect)(()=>{_.current?.setFrame(n)},[n,b]);let S=(h=[y,m],g=l.useRef(void 0),v=l.useCallback(e=>{let t=h.map(t=>{if(null!=t){if("function"==typeof t){let r=t(e);return"function"==typeof r?r:()=>{t(null)}}return t.current=e,()=>{t.current=null}}});return()=>{t.forEach(e=>e?.())}},h),l.useMemo(()=>h.every(e=>null==e)?null:e=>{g.current&&(g.current(),g.current=void 0),null!=e&&(g.current=v(e))},h));return(0,o.jsx)("div",{ref:S,style:void 0!==a||void 0!==s?{width:"string"==typeof a&&!1===isNaN(+a)?+a:a,height:"string"==typeof s&&!1===isNaN(+s)?+s:s,...f}:f,...p})});ez.displayName="ShaderMount";let eE=`
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
in vec2 v_patternHelperBox;`,eU=`
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;`,eP={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},eA={none:0,contain:1,cover:2};function eB(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:eC;if("string"!=typeof e)return eC;let t,r,o,i=1;if(e.startsWith("#")){var n;[t,r,o,i]=(3===(n=(n=e).replace(/^#/,"")).length&&(n=n.split("").map(e=>e+e).join("")),6===n.length&&(n+="ff"),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255,parseInt(n.slice(6,8),16)/255])}else if(e.startsWith("rgb")){let n;[t,r,o,i]=(n=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0")/255,parseInt(n[2]??"0")/255,parseInt(n[3]??"0")/255,void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1]}else{let n;if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),eC;[t,r,o,i]=function(e){let t,r,o,[i,n,a,s]=e,l=i/360,c=n/100,d=a/100;if(0===n)t=r=o=d;else{let e=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e,i=d<.5?d*(1+c):d+c-d*c,n=2*d-i;t=e(n,i,l+1/3),r=e(n,i,l),o=e(n,i,l-1/3)}return[t,r,o,s]}((n=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0"),parseInt(n[2]??"0"),parseInt(n[3]??"0"),void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1])}return[eO(t,0,1),eO(r,0,1),eO(o,0,1),eO(i,0,1)]}let eO=(e,t,r)=>Math.min(Math.max(e,t),r),eC=[0,0,0,1],eV=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,eM=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,eT=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,eI=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[10];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

${eE}
${ej}
${eU}

out vec4 fragColor;

${eV}
${eM}
${eT}

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
`,eL={name:"Default",params:{...eP,speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}},eN=(0,l.memo)(function({speed:e=eL.params.speed,frame:t=eL.params.frame,colors:r=eL.params.colors,distortion:i=eL.params.distortion,swirl:n=eL.params.swirl,grainMixer:a=eL.params.grainMixer,grainOverlay:s=eL.params.grainOverlay,fit:l=eL.params.fit,rotation:c=eL.params.rotation,scale:d=eL.params.scale,originX:u=eL.params.originX,originY:f=eL.params.originY,offsetX:p=eL.params.offsetX,offsetY:m=eL.params.offsetY,worldWidth:h=eL.params.worldWidth,worldHeight:g=eL.params.worldHeight,...v}){let b={u_colors:r.map(eB),u_colorsCount:r.length,u_distortion:i,u_swirl:n,u_grainMixer:a,u_grainOverlay:s,u_fit:eA[l],u_rotation:c,u_scale:d,u_offsetX:p,u_offsetY:m,u_originX:u,u_originY:f,u_worldWidth:h,u_worldHeight:g};return(0,o.jsx)(ez,{...v,speed:e,frame:t,fragmentShader:eI,uniforms:b})},function(e,t){for(let r in e){if("colors"===r){let r=Array.isArray(e.colors),o=Array.isArray(t.colors);if(!r||!o){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,r)=>e===t.colors?.[r]))return!1;continue}if(!1===Object.is(e[r],t[r]))return!1}return!0});function eD({children:e}){let t=(0,l.useRef)(null),[r,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>i(!0),r=()=>i(!1),o=t.current;return o&&(o.addEventListener("mouseenter",e),o.addEventListener("mouseleave",r)),()=>{o&&(o.removeEventListener("mouseenter",e),o.removeEventListener("mouseleave",r))}},[]),(0,o.jsxs)("div",{ref:t,className:"min-h-screen bg-black relative overflow-hidden",children:[(0,o.jsx)("svg",{className:"absolute inset-0 w-0 h-0",children:(0,o.jsxs)("defs",{children:[(0,o.jsxs)("filter",{id:"glass-effect",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,o.jsx)("feTurbulence",{baseFrequency:"0.005",numOctaves:"1",result:"noise"}),(0,o.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"0.3"}),(0,o.jsx)("feColorMatrix",{type:"matrix",values:"1 0 0 0 0.02   0 1 0 0 0.02   0 0 1 0 0.05   0 0 0 0.9 0",result:"tint"})]}),(0,o.jsxs)("filter",{id:"gooey-filter",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,o.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"4",result:"blur"}),(0,o.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"gooey"}),(0,o.jsx)("feComposite",{in:"SourceGraphic",in2:"gooey",operator:"atop"})]})]})}),(0,o.jsx)(eN,{className:"absolute inset-0 w-full h-full",colors:["#000000","#8b5cf6","#ffffff","#1e1b4b","#4c1d95"],speed:.3}),(0,o.jsx)(eN,{className:"absolute inset-0 w-full h-full opacity-60",colors:["#000000","#ffffff","#8b5cf6","#000000"],speed:.2}),e]})}function eF(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}e.s(["default",()=>eD],62770);var eW=l.forwardRef((e,t)=>{let{children:r,...i}=e,n=l.Children.toArray(r),a=n.find(eG);if(a){let e=a.props.children,r=n.map(t=>t!==a?t:l.Children.count(e)>1?l.Children.only(null):l.isValidElement(e)?e.props.children:null);return(0,o.jsx)(eH,{...i,ref:t,children:l.isValidElement(e)?l.cloneElement(e,void 0,r):null})}return(0,o.jsx)(eH,{...i,ref:t,children:r})});eW.displayName="Slot";var eH=l.forwardRef((e,t)=>{let{children:r,...o}=e;if(l.isValidElement(r)){var i;let e,n,a=(i=r,(n=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(n=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref);return l.cloneElement(r,{...function(e,t){let r={...t};for(let o in t){let i=e[o],n=t[o];/^on[A-Z]/.test(o)?i&&n?r[o]=(...e)=>{n(...e),i(...e)}:i&&(r[o]=i):"style"===o?r[o]={...i,...n}:"className"===o&&(r[o]=[i,n].filter(Boolean).join(" "))}return{...e,...r}}(o,r.props),ref:t?function(...e){return t=>{let r=!1,o=e.map(e=>{let o=eF(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():eF(e[t],null)}}}}(t,a):a})}return l.Children.count(r)>1?l.Children.only(null):null});eH.displayName="SlotClone";var e$=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function eG(e){return l.isValidElement(e)&&e.type===e$}e.s(["Slot",()=>eW],91918);let eX=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,eq=(t="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var o;if((null==r?void 0:r.variants)==null)return c(t,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:i,defaultVariants:n}=r,a=Object.keys(i).map(t=>{let r=null==e?void 0:e[t],o=null==n?void 0:n[t];if(null===r)return null;let a=eX(r)||eX(o);return i[t][a]}),s=e&&Object.entries(e).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return c(t,a,null==r||null==(o=r.compoundVariants)?void 0:o.reduce((e,t)=>{let{class:r,className:o,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...n,...s}[t]):({...n,...s})[t]===r})?[...e,r,o]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function eY({className:e,variant:t,size:r,asChild:i=!1,...n}){let a=i?eW:"button";return(0,o.jsx)(a,{"data-slot":"button",className:eg(eq({variant:t,size:r,className:e})),...n})}e.s(["Button",()=>eY],67881)}]);