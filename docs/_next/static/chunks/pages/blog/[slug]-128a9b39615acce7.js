(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{3905:function(e,r,n){"use strict";n.r(r),n.d(r,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return p},useMDXComponents:function(){return f},withMDXComponents:function(){return u}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){return function(r){var n=f(r.components);return t.createElement(e,o({},r,{components:n}))}},f=function(e){var r=t.useContext(s),n=r;return e&&(n="function"===typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=f(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=f(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?t.createElement(h,l(l({ref:r},s),{},{components:n})):t.createElement(h,l({ref:r},s))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4693:function(e,r,n){n(5139);var t=n(7294),a=n(3905);e.exports=function(e,r){var n=e.compiledSource,o=e.renderedOutput,i=e.scope||{},l=r&&r.components||{},c=r&&r.provider,s=t.useState(t.createElement("div",{dangerouslySetInnerHTML:{__html:o}})),u=s[0],f=s[1];return"undefined"===typeof window?u:(t.useEffect((function(){var e=window.requestIdleCallback((function(){var r=Object.assign({mdx:a.mdx},l,i),o=Object.keys(r),c=Object.values(r),s=Reflect.construct(Function,["React"].concat(o).concat(n+"\nreturn React.createElement(MDXContent, {});")),u=s.apply(s,[t].concat(c)),d=t.createElement(a.MDXProvider,{components:l},u);f(d),window.cancelIdleCallback(e)}))}),[n]),c?t.createElement(c.component,c.props||{},u):u)}},5139:function(){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var r=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-r))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},4163:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(133)}])},4458:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var t=n(5893),a=(n(7294),n(949)),o=n(8527),i=n(5113),l=n(1664),c=n(7735),s=n(5934),u=n(9876),f=function(){var e=(0,a.If)(),r=e.colorMode,n=e.toggleColorMode;return(0,t.jsx)(i.hU,{"aria-label":"Toggle dark mode",icon:"dark"===r?(0,t.jsx)(u.NW,{}):(0,t.jsx)(u.kL,{}),onClick:n,color:{light:"black",dark:"white"}[r]})};function d(){var e,r,n=(e=["\n        position: sticky;\n        z-index: 10;\n        top: 0;\n        backdrop-filter: saturate(180%) blur(20px);\n        transition: height .5s, line-height .5s;\n        "],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return d=function(){return n},n}var m=function(e){var r=e.children,n=(0,a.If)().colorMode,u={light:"white",dark:"#171717"},m={light:"gray.300",dark:"gray.800"},h=(0,s.Z)(o.kC)(d());return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(h,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",maxWidth:"1000px",minWidth:"456px",width:"100%",bg:u[n],as:"nav",px:[2,6,6],py:2,mt:8,mb:[0,0,8],mx:"auto",children:[(0,t.jsxs)(o.xu,{children:[(0,t.jsx)(l.default,{href:"/",passHref:!0,children:(0,t.jsx)(i.zx,{leftIcon:(0,t.jsx)(c.U4P,{}),as:"a",variant:"outline",p:[1,2,4],_hover:{backgroundColor:m[n]},children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0430"})}),(0,t.jsx)(l.default,{href:"/blog",passHref:!0,children:(0,t.jsx)(i.zx,{leftIcon:(0,t.jsx)(c.Gq2,{}),as:"a",variant:"outline",p:[1,2,4],_hover:{backgroundColor:m[n]},children:"\u0411\u043b\u043e\u0433"})}),(0,t.jsx)(l.default,{href:"/social",passHref:!0,children:(0,t.jsx)(i.zx,{leftIcon:(0,t.jsx)(c.Bcg,{}),as:"a",variant:"outline",p:[1,2,4],_hover:{backgroundColor:m[n]},children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"})})]}),(0,t.jsx)(l.default,{href:"https://github.com/DublikuntMux/dublikunt-homepage",passHref:!0,children:(0,t.jsx)(i.zx,{leftIcon:(0,t.jsx)(c.pZu,{}),as:"a",variant:"outline",p:[1,2,4],_hover:{backgroundColor:m[n]},children:"Sorce"})}),(0,t.jsx)(f,{})]}),(0,t.jsx)(o.kC,{as:"main",justifyContent:"center",flexDirection:"column",bg:u[n],color:{light:"black",dark:"white"}[n],px:[0,4,4],mt:[4,8,8],children:r})]})}},133:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return Q},default:function(){return V}});var t=n(5893),a=n(4693),o=n.n(a),i=n(7294),l=n(9008),c=n(5313),s=n(8420),u=n(949),f=n(8527),d=n(6052),m=n(5031),h=n(1561);function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function g(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}function b(e){var r=e.loading,n=e.src,t=e.srcSet,a=e.onLoad,o=e.onError,l=e.crossOrigin,c=e.sizes,s=e.ignoreFallback,u=(0,i.useState)("pending"),f=u[0],d=u[1];(0,i.useEffect)((function(){d(n?"loading":"pending")}),[n]);var m=(0,i.useRef)(),p=(0,i.useCallback)((function(){if(n){g();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=function(e){g(),d("loaded"),null==a||a(e)},e.onerror=function(e){g(),d("failed"),null==o||o(e)},m.current=e}}),[n,l,t,c,a,o,r]),g=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,h.a)((function(){if(!s)return"loading"===f&&p(),function(){g()}}),[f,p,s]),s?"loaded":f}var v=["htmlWidth","htmlHeight","alt"],x=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],y=i.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,a=e.alt,o=g(e,v);return i.createElement("img",p({width:n,height:t,ref:r,alt:a},o))})),j=(0,d.Gp)((function(e,r){var n=e.fallbackSrc,t=e.fallback,a=e.src,o=e.srcSet,l=e.align,c=e.fit,s=e.loading,u=e.ignoreFallback,f=e.crossOrigin,h=g(e,x),v=null!=s||u||void 0===n&&void 0===t,j=b(p({},e,{ignoreFallback:v})),w=p({ref:r,objectFit:c,objectPosition:l},v?h:(0,m.CE)(h,["onError","onLoad"]));return"loaded"!==j?t||i.createElement(d.m$.img,p({as:y,className:"chakra-image__placeholder",src:n},w)):i.createElement(d.m$.img,p({as:y,src:a,srcSet:o,crossOrigin:f,loading:s,className:"chakra-image"},w))}));m.Ts&&(j.displayName="Image");var w=n(6450);function k(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}function O(){return O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},O.apply(this,arguments)}var E=["name","getInitials"],C=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],_=(0,d.Gp)((function(e,r){var n=O({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,d.yK)().badge);return i.createElement(d.m$.div,O({ref:r},e,{className:(0,m.cx)("chakra-avatar__badge",e.className),__css:n}))}));function S(e){var r=e.split(" "),n=r[0],t=r[1];return n&&t?""+n.charAt(0)+t.charAt(0):n.charAt(0)}m.Ts&&(_.displayName="AvatarBadge");var M=function(e){var r=e.name,n=e.getInitials,t=k(e,E),a=(0,d.yK)();return i.createElement(d.m$.div,O({role:"img","aria-label":r},t,{__css:a.label}),r?null==n?void 0:n(r):null)},I=function(e){return i.createElement(d.m$.svg,O({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),i.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),i.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},N={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},P=(0,d.Gp)((function(e,r){var n=(0,d.jC)("Avatar",e),t=(0,d.Lr)(e),a=t.src,o=t.srcSet,l=t.name,c=t.showBorder,s=t.borderRadius,u=void 0===s?"full":s,f=t.onError,h=t.getInitials,p=void 0===h?S:h,g=t.icon,b=void 0===g?i.createElement(I,null):g,v=t.iconLabel,x=void 0===v?" avatar":v,y=t.loading,j=t.children,w=t.borderColor,E=t.ignoreFallback,_=k(t,C),M=O({borderRadius:u,borderWidth:c?"2px":void 0},N,n.container);return w&&(M.borderColor=w),i.createElement(d.m$.span,O({ref:r},_,{className:(0,m.cx)("chakra-avatar",e.className),__css:M}),i.createElement(d.Fo,{value:n},i.createElement(A,{src:a,srcSet:o,loading:y,onError:f,getInitials:p,name:l,borderRadius:u,icon:b,iconLabel:x,ignoreFallback:E}),j))}));m.Ts&&(P.displayName="Avatar");var A=function(e){var r=e.src,n=e.srcSet,t=e.onError,a=e.getInitials,o=e.name,l=e.borderRadius,c=e.loading,s=e.iconLabel,u=e.icon,f=void 0===u?i.createElement(I,null):u,m=b({src:r,onError:t,ignoreFallback:e.ignoreFallback});return!r||!("loaded"===m)?o?i.createElement(M,{className:"chakra-avatar__initials",getInitials:a,name:o}):i.cloneElement(f,{role:"img","aria-label":s}):i.createElement(d.m$.img,{src:r,srcSet:n,alt:o,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:l}})};m.Ts&&(A.displayName="AvatarImage");var T=["children","borderColor","max","spacing","borderRadius"],z=(0,d.Gp)((function(e,r){var n=(0,d.jC)("Avatar",e),t=(0,d.Lr)(e),a=t.children,o=t.borderColor,l=t.max,c=t.spacing,s=void 0===c?"-0.75rem":c,u=t.borderRadius,f=void 0===u?"full":u,h=k(t,T),p=(0,w.WR)(a),g=l?p.slice(0,l):p,b=null!=l&&p.length-l,v=g.reverse().map((function(r,n){var t,a={marginEnd:0===n?0:s,size:e.size,borderColor:null!=(t=r.props.borderColor)?t:o,showBorder:!0};return i.cloneElement(r,(0,m.YU)(a))})),x=O({borderRadius:f,marginStart:s},N,n.excessLabel);return i.createElement(d.m$.div,O({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},h,{className:(0,m.cx)("chakra-avatar__group",e.className)}),b>0&&i.createElement(d.m$.span,{className:"chakra-avatar__excess",__css:x},"+"+b),v)}));m.Ts&&(z.displayName="AvatarGroup");var D=n(1163),W=n(4458);function R(e){var r=e.children,n=e.frontMatter,a=(0,u.If)().colorMode,o=(0,D.useRouter)().asPath.replace("/blog","");return(0,t.jsxs)(W.Z,{children:[(0,t.jsx)(l.default,{children:(0,t.jsxs)("title",{children:["$",o," - Blog - Dublikunt Max"]})}),(0,t.jsxs)(f.Kq,{as:"article",spacing:8,justifyContent:"center",alignItems:"flex-start",m:"0 auto 4rem auto",maxWidth:"700px",w:"100%",px:2,children:[(0,t.jsxs)(f.kC,{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",maxWidth:"700px",w:"100%",children:[(0,t.jsx)(f.X6,{letterSpacing:"tight",mb:2,as:"h1",size:"2xl",children:n.title}),(0,t.jsxs)(f.kC,{justify:"space-between",align:["initial","center"],direction:["column","row"],mt:2,w:"100%",mb:4,children:[(0,t.jsxs)(f.kC,{align:"center",children:[(0,t.jsx)(P,{size:"xs",name:"Dublikunt Max",src:"https://avatars.githubusercontent.com/u/73074789?v=4",mr:2}),(0,t.jsxs)(f.xv,{fontSize:"sm",color:{light:"gray.700",dark:"gray.400"}[a],children:[n.by,"Dublikunt Max / ",(0,c.Z)((0,s.Z)(n.publishedAt),"MMMM dd, yyyy")]})]}),(0,t.jsx)(f.xv,{fontSize:"sm",color:"gray.500",minWidth:"100px",mt:[2,0],children:n.readingTime.text})]})]}),r]})]})}var L=n(894);function F(){return F=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},F.apply(this,arguments)}var Z=function(e){return i.createElement(L.JO,F({viewBox:"0 0 24 24"},e),i.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))},X=["status"],$={info:{icon:function(e){return i.createElement(L.JO,F({viewBox:"0 0 24 24"},e),i.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"}))},colorScheme:"blue"},warning:{icon:Z,colorScheme:"orange"},success:{icon:function(e){return i.createElement(L.JO,F({viewBox:"0 0 24 24"},e),i.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}))},colorScheme:"green"},error:{icon:Z,colorScheme:"red"}},B=(0,w.kr)({name:"AlertContext",errorMessage:"useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"}),H=B[0],G=(B[1],(0,d.Gp)((function(e,r){var n,t=(0,d.Lr)(e),a=t.status,o=void 0===a?"info":a,l=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(t,X),c=null!=(n=e.colorScheme)?n:$[o].colorScheme,s=(0,d.jC)("Alert",F({},e,{colorScheme:c})),u=F({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},s.container);return i.createElement(H,{value:{status:o}},i.createElement(d.Fo,{value:s},i.createElement(d.m$.div,F({role:"alert",ref:r},l,{className:(0,m.cx)("chakra-alert",e.className),__css:u}))))}))),q=n(1664);function U(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function K(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){U(e,r,n[r])}))}return e}var J=function(e){return(0,t.jsx)(f.X6,K({css:{scrollMarginTop:"100px",scrollSnapMargin:"100px","&[id]":{pointerEvents:"none"},"&[id]:before":{display:"block",height:" 6rem",marginTop:"-6rem",visibility:"hidden",content:'""'},"&[id]:hover a":{opacity:1}}},e,{mb:"1em",mt:"2em",children:(0,t.jsxs)(f.xu,{pointerEvents:"auto",children:[e.children,e.id&&(0,t.jsx)(f.xu,{"aria-label":"anchor",as:"a",color:"blue.500",fontWeight:"normal",outline:"none",_focus:{opacity:1,boxShadow:"outline"},opacity:"0",ml:"0.375rem",href:"#".concat(e.id),children:"#"})]})}))},Y={h1:function(e){return(0,t.jsx)(f.X6,K({as:"h1",size:"xl",my:4},e))},h2:function(e){return(0,t.jsx)(J,K({as:"h2",size:"lg",fontWeight:"bold"},e))},h3:function(e){return(0,t.jsx)(J,K({as:"h3",size:"md",fontWeight:"bold"},e))},h4:function(e){return(0,t.jsx)(J,K({as:"h4",size:"sm",fontWeight:"bold"},e))},h5:function(e){return(0,t.jsx)(J,K({as:"h5",size:"sm",fontWeight:"bold"},e))},h6:function(e){return(0,t.jsx)(J,K({as:"h6",size:"xs",fontWeight:"bold"},e))},inlineCode:function(e){return(0,t.jsx)(f.EK,K({colorScheme:"yellow",fontSize:"0.84em"},e))},br:function(e){return(0,t.jsx)(f.xu,K({height:"24px"},e))},hr:function(){var e=(0,u.If)().colorMode;return(0,t.jsx)(f.iz,{borderColor:{light:"gray.200",dark:"gray.600"}[e],my:4,w:"100%"})},a:function(e){var r=(0,u.If)().colorMode,n={light:"blue.500",dark:"blue.500"},a=e.href;return a&&(a.startsWith("/")||a.startsWith("#"))?(0,t.jsx)(q.default,{href:a,passHref:!0,children:(0,t.jsx)(f.rU,K({color:n[r]},e))}):(0,t.jsx)(f.rU,K({color:n[r],isExternal:!0},e))},p:function(e){return(0,t.jsx)(f.xv,K({as:"p",mt:0,lineHeight:"tall"},e))},ul:function(e){return(0,t.jsx)(f.xu,K({as:"ul",pt:2,pl:4,ml:2},e))},ol:function(e){return(0,t.jsx)(f.xu,K({as:"ol",pt:2,pl:4,ml:2},e))},li:function(e){return(0,t.jsx)(f.xu,K({as:"li",pb:1},e))},blockquote:function(e){var r=(0,u.If)().colorMode;return(0,t.jsx)(G,K({mt:4,w:"98%",bg:{light:"blue.50",dark:"blue.900"}[r],variant:"left-accent",status:"info",css:{"> *:first-of-type":{marginTop:0,marginLeft:8}}},e))}},Q=!0;function V(e){var r=e.mdxSource,n=e.frontMatter,a=o()(r,{components:Y});return(0,t.jsx)(R,{frontMatter:n,children:a})}},1163:function(e,r,n){e.exports=n(387)}},function(e){e.O(0,[415,493,494,774,888,179],(function(){return r=4163,e(e.s=r);var r}));var r=e.O();_N_E=r}]);