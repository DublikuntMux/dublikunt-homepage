(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2890:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(5897)}])},4458:function(e,r,n){"use strict";n.d(r,{Z:function(){return f}});var t=n(5893),a=(n(7294),n(949)),l=n(8527),i=n(5113),s=n(1664),o=n(7735),d=n(5934),u=n(9876),c=function(){var e=(0,a.If)(),r=e.colorMode,n=e.toggleColorMode;return(0,t.jsx)(i.hU,{"aria-label":"Toggle dark mode",icon:"dark"===r?(0,t.jsx)(u.NW,{}):(0,t.jsx)(u.kL,{}),onClick:n,color:{light:"black",dark:"white"}[r]})};function p(){var e,r,n=(e=["\n        position: sticky;\n        z-index: 10;\n        top: 0;\n        backdrop-filter: saturate(180%) blur(20px);\n        transition: height .5s, line-height .5s;\n        "],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return p=function(){return n},n}var f=function(e){var r=e.children,n=(0,a.If)().colorMode,u={light:"white",dark:"#171717"},f={light:"gray.300",dark:"gray.800"},m=(0,d.Z)(l.kC)(p());return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",maxWidth:"700px",width:"100%",bg:u[n],as:"nav",px:[2,6,6],py:2,mt:8,mb:[0,0,8],mx:"auto",children:[(0,t.jsxs)(l.xu,{children:[(0,t.jsx)(i.zx,{leftIcon:(0,t.jsx)(o.U4P,{}),as:"a",size:"sm",variant:"outline",p:[1,2,4],_hover:{backgroundColor:f[n]},children:(0,t.jsx)(s.default,{href:"/",passHref:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043a\u0430"})}),(0,t.jsx)(i.zx,{leftIcon:(0,t.jsx)(o.Gq2,{}),as:"a",size:"sm",variant:"outline",p:[1,2,4],_hover:{backgroundColor:f[n]},children:(0,t.jsx)(s.default,{href:"/blog",passHref:!0,children:"\u0411\u043b\u043e\u0433"})}),(0,t.jsx)(i.zx,{leftIcon:(0,t.jsx)(o.Bcg,{}),as:"a",size:"sm",variant:"outline",p:[1,2,4],_hover:{backgroundColor:f[n]},children:(0,t.jsx)(s.default,{href:"/social",passHref:!0,children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"})})]}),(0,t.jsx)(s.default,{href:"https://github.com/DublikuntMux/dublikunt-homepage",passHref:!0,children:(0,t.jsx)(i.zx,{target:"_blank",size:"xs",leftIcon:(0,t.jsx)(o.pZu,{}),as:"a",variant:"outline",p:[1,2,4],_hover:{backgroundColor:f[n]},children:"Sorce"})}),(0,t.jsx)(c,{})]}),(0,t.jsx)(l.kC,{as:"main",justifyContent:"center",flexDirection:"column",bg:u[n],color:{light:"black",dark:"white"}[n],px:[0,4,4],mt:[4,8,8],children:r})]})}},5897:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return ne},default:function(){return te}});var t=n(5893),a=n(7294),l=n(9008),i=n(7375),s=n(6052),o=n(5031),d=n(6450),u=n(894);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(this,arguments)}function p(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],m=["getRootProps","htmlProps"],h=(0,d.kr)({strict:!1,name:"FormControlContext"}),v=h[0],x=h[1];var b=(0,s.Gp)((function(e,r){var n=(0,s.jC)("Form",e),t=function(e){var r=e.id,n=e.isRequired,t=e.isInvalid,l=e.isDisabled,s=e.isReadOnly,u=p(e,f),m=(0,i.Me)(),h=r||"field-"+m,v=h+"-label",x=h+"-feedback",b=h+"-helptext",g=a.useState(!1),y=g[0],j=g[1],_=a.useState(!1),k=_[0],I=_[1],N=(0,i.kt)(),E=N[0],C=N[1],R=a.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({id:b},e,{ref:(0,d.lq)(r,(function(e){e&&I(!0)}))})}),[b]),O=a.useCallback((function(e,r){var n,a;return void 0===e&&(e={}),void 0===r&&(r=null),c({},e,{ref:r,"data-focus":(0,o.PB)(E),"data-disabled":(0,o.PB)(l),"data-invalid":(0,o.PB)(t),"data-readonly":(0,o.PB)(s),id:null!=(n=e.id)?n:v,htmlFor:null!=(a=e.htmlFor)?a:h})}),[h,l,E,t,s,v]),w=a.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({id:x},e,{ref:(0,d.lq)(r,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[x]),P=a.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({},e,u,{ref:r,role:"group"})}),[u]),T=a.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!s,isDisabled:!!l,isFocused:!!E,onFocus:C.on,onBlur:C.off,hasFeedbackText:y,setHasFeedbackText:j,hasHelpText:k,setHasHelpText:I,id:h,labelId:v,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:R,getErrorMessageProps:w,getRootProps:P,getLabelProps:O,getRequiredIndicatorProps:T}}((0,s.Lr)(e)),l=t.getRootProps;t.htmlProps;var u=p(t,m),h=(0,o.cx)("chakra-form-control",e.className);return a.createElement(v,{value:u},a.createElement(s.Fo,{value:n},a.createElement(s.m$.div,c({},l({},r),{className:h,__css:n.container}))))}));o.Ts&&(b.displayName="FormControl");var g=(0,s.Gp)((function(e,r){var n=x(),t=(0,s.yK)(),l=(0,o.cx)("chakra-form__helper-text",e.className);return a.createElement(s.m$.div,c({},null==n?void 0:n.getHelpTextProps(e,r),{__css:t.helperText,className:l}))}));o.Ts&&(g.displayName="FormHelperText");var y=["isDisabled","isInvalid","isReadOnly","isRequired"],j=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function _(e){var r=function(e){var r,n,t,a=x(),l=e.id,i=e.disabled,s=e.readOnly,d=e.required,u=e.isRequired,f=e.isInvalid,m=e.isReadOnly,h=e.isDisabled,v=e.onFocus,b=e.onBlur,g=p(e,j),y=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&y.push(a.feedbackId);null!=a&&a.hasHelpText&&y.push(a.helpTextId);return c({},g,{"aria-describedby":y.join(" ")||void 0,id:null!=l?l:null==a?void 0:a.id,isDisabled:null!=(r=null!=i?i:h)?r:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=s?s:m)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(t=null!=d?d:u)?t:null==a?void 0:a.isRequired,isInvalid:null!=f?f:null==a?void 0:a.isInvalid,onFocus:(0,o.v0)(null==a?void 0:a.onFocus,v),onBlur:(0,o.v0)(null==a?void 0:a.onBlur,b)})}(e),n=r.isDisabled,t=r.isInvalid,a=r.isReadOnly,l=r.isRequired;return c({},p(r,y),{disabled:n,readOnly:a,required:l,"aria-invalid":(0,o.Qm)(t),"aria-required":(0,o.Qm)(l),"aria-readonly":(0,o.Qm)(a)})}var k=(0,s.Gp)((function(e,r){var n=(0,s.jC)("FormError",e),t=(0,s.Lr)(e),l=x();return null!=l&&l.isInvalid?a.createElement(s.Fo,{value:n},a.createElement(s.m$.div,c({},null==l?void 0:l.getErrorMessageProps(t,r),{className:(0,o.cx)("chakra-form__error-message",e.className),__css:c({display:"flex",alignItems:"center"},n.text)}))):null}));o.Ts&&(k.displayName="FormErrorMessage");var I=(0,s.Gp)((function(e,r){var n=(0,s.yK)(),t=x();if(null==t||!t.isInvalid)return null;var l=(0,o.cx)("chakra-form__error-icon",e.className);return a.createElement(u.ZP,c({ref:r,"aria-hidden":!0},e,{__css:n.icon,className:l}),a.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));o.Ts&&(I.displayName="FormErrorIcon");var N=["className","children","requiredIndicator"],E=(0,s.Gp)((function(e,r){var n,t=(0,s.mq)("FormLabel",e),l=(0,s.Lr)(e);l.className;var i=l.children,d=l.requiredIndicator,u=void 0===d?a.createElement(C,null):d,f=p(l,N),m=x(),h=null!=(n=null==m?void 0:m.getLabelProps(f,r))?n:c({ref:r},f);return a.createElement(s.m$.label,c({},h,{className:(0,o.cx)("chakra-form__label",l.className),__css:c({display:"block",textAlign:"start"},t)}),i,null!=m&&m.isRequired?u:null)}));o.Ts&&(E.displayName="FormLabel");var C=(0,s.Gp)((function(e,r){var n=x(),t=(0,s.yK)();if(null==n||!n.isRequired)return null;var l=(0,o.cx)("chakra-form__required-indicator",e.className);return a.createElement(s.m$.span,c({},null==n?void 0:n.getRequiredIndicatorProps(e,r),{__css:t.requiredIndicator,className:l}))}));function R(){return R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},R.apply(this,arguments)}function O(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}o.Ts&&(C.displayName="RequiredIndicator");var w=["htmlSize"],P=(0,s.Gp)((function(e,r){var n=e.htmlSize,t=O(e,w),l=(0,s.jC)("Input",t),i=_((0,s.Lr)(t)),d=(0,o.cx)("chakra-input",e.className);return a.createElement(s.m$.input,R({size:n},i,{__css:l.field,ref:r,className:d}))}));o.Ts&&(P.displayName="Input"),P.id="Input";var T=["placement"],q={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},F=(0,s.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),S=(0,s.Gp)((function(e,r){var n,t=e.placement,l=void 0===t?"left":t,i=O(e,T),o=null!=(n=q[l])?n:{},d=(0,s.yK)();return a.createElement(F,R({ref:r},i,{__css:R({},d.addon,o)}))}));o.Ts&&(S.displayName="InputAddon");var z=(0,s.Gp)((function(e,r){return a.createElement(S,R({ref:r,placement:"left"},e,{className:(0,o.cx)("chakra-input__left-addon",e.className)}))}));o.Ts&&(z.displayName="InputLeftAddon"),z.id="InputLeftAddon";var D=(0,s.Gp)((function(e,r){return a.createElement(S,R({ref:r,placement:"right"},e,{className:(0,o.cx)("chakra-input__right-addon",e.className)}))}));o.Ts&&(D.displayName="InputRightAddon"),D.id="InputRightAddon";var L=["children","className"],G=(0,s.Gp)((function(e,r){var n=(0,s.jC)("Input",e),t=(0,s.Lr)(e),l=t.children,i=t.className,u=O(t,L),c=(0,o.cx)("chakra-input__group",i),p={},f=(0,d.WR)(l),m=n.field;f.forEach((function(e){if(n){var r,t;if(m&&"InputLeftElement"===e.type.id)p.paddingStart=null!=(r=m.height)?r:m.h;if(m&&"InputRightElement"===e.type.id)p.paddingEnd=null!=(t=m.height)?t:m.h;"InputRightAddon"===e.type.id&&(p.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(p.borderStartRadius=0)}}));var h=f.map((function(r){var n,t,l=(0,o.YU)({size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant});return"Input"!==r.type.id?a.cloneElement(r,l):a.cloneElement(r,Object.assign(l,p,r.props))}));return a.createElement(s.m$.div,R({className:c,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},u),a.createElement(s.Fo,{value:n},h))}));o.Ts&&(G.displayName="InputGroup");var M=["placement"],A=["className"],H=["className"],B=(0,s.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Z=(0,s.Gp)((function(e,r){var n,t,l,i=e.placement,o=void 0===i?"left":i,d=O(e,M),u=(0,s.yK)(),c=u.field,p=R(((l={})["left"===o?"insetStart":"insetEnd"]="0",l.width=null!=(n=null==c?void 0:c.height)?n:null==c?void 0:c.h,l.height=null!=(t=null==c?void 0:c.height)?t:null==c?void 0:c.h,l.fontSize=null==c?void 0:c.fontSize,l),u.element);return a.createElement(B,R({ref:r,__css:p},d))}));Z.id="InputElement",o.Ts&&(Z.displayName="InputElement");var $=(0,s.Gp)((function(e,r){var n=e.className,t=O(e,A),l=(0,o.cx)("chakra-input__left-element",n);return a.createElement(Z,R({ref:r,placement:"left",className:l},t))}));$.id="InputLeftElement",o.Ts&&($.displayName="InputLeftElement");var W=(0,s.Gp)((function(e,r){var n=e.className,t=O(e,H),l=(0,o.cx)("chakra-input__right-element",n);return a.createElement(Z,R({ref:r,placement:"right",className:l},t))}));W.id="InputRightElement",o.Ts&&(W.displayName="InputRightElement");var K=n(8527),U=n(4458),X=n(1664),Q=n(949),Y=n(5313),J=n(8420),V=function(e){var r=e.title,n=e.publishedAt,a=e.summary,l=e.slug,i=(0,Q.If)().colorMode;return(0,t.jsx)(X.default,{href:"blog/".concat(l),passHref:!0,children:(0,t.jsx)(K.rU,{w:"100%",_hover:{textDecoration:"none"},children:(0,t.jsxs)(K.xu,{mb:10,display:"block",width:"100%",children:[(0,t.jsxs)(K.kC,{width:"100%",align:"flex-start",justifyContent:"space-between",flexDirection:["column","row"],children:[(0,t.jsx)(K.kC,{flexDirection:"column",align:"flex-start",justifyContent:"start",width:"100%",children:(0,t.jsx)(K.X6,{size:"md",as:"h3",mb:1,fontWeight:"medium",children:r})}),(0,t.jsx)(K.xv,{color:"gray.500",minWidth:"140px",textAlign:["left","right"],mb:[4,0],children:(0,Y.Z)((0,J.Z)(n),"MMMM dd, yyyy")})]}),(0,t.jsx)(K.xv,{color:{light:"gray.700",dark:"gray.400"}[i],children:a})]})})})},ee=n(9876);function re(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var ne=!0;function te(e){var r=e.posts,n=(0,a.useState)(""),i=n[0],s=n[1],o=r.sort((function(e,r){return Number(new Date(r.publishedAt))-Number(new Date(e.publishedAt))})).filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{children:(0,t.jsx)("title",{children:"Blog - DublikuntMax"})}),(0,t.jsx)(U.Z,{children:(0,t.jsx)(K.Kq,{as:"main",spacing:8,justifyContent:"center",alignItems:"flex-start",m:"0 auto 4rem auto",maxWidth:"700px",children:(0,t.jsxs)(K.kC,{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",maxWidth:"700px",px:4,children:[(0,t.jsxs)(K.X6,{letterSpacing:"tight",mb:4,as:"h1",size:"2xl",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e (",r.length," \u043f\u043e\u0441\u0442\u043e\u0432)"]}),(0,t.jsxs)(G,{mb:4,mr:4,w:"100%",children:[(0,t.jsx)(P,{"aria-label":"Search by title",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043c\u0435\u043d\u0438",onChange:function(e){return s(e.target.value)}}),(0,t.jsx)(W,{children:(0,t.jsx)(ee.W1,{color:"gray.300"})})]}),!o.length&&"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e :(",o.map((function(e){return(0,t.jsx)(V,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){re(e,r,n[r])}))}return e}({},e),e.title)}))]})})})]})}}},function(e){e.O(0,[415,493,494,774,888,179],(function(){return r=2890,e(e.s=r);var r}));var r=e.O();_N_E=r}]);