"use strict";(globalThis.webpackChunk_N_E=globalThis.webpackChunk_N_E||[]).push([[7059],{43805:(e,t,r)=>{r.d(t,{Z:()=>n});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(78030).Z)("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]])},87138:(e,t,r)=>{r.d(t,{default:()=>i.a});var n=r(231),i=r.n(n)},34492:(e,t,r)=>{/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,d=n[1];return u(function(){i.value=r,i.getSnapshot=t,s(i)&&d({inst:i})},[e,r,t]),o(function(){return s(i)&&d({inst:i}),e(function(){s(i)&&d({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d},10554:(e,t,r)=>{e.exports=r(34492)},23791:(e,t,r)=>{r.d(t,{$l:()=>o,BN:()=>x,DY:()=>E,Fs:()=>F,J$:()=>J,JN:()=>m,LI:()=>V,MA:()=>H,PM:()=>s,UG:()=>z,W6:()=>k,i_:()=>a,ko:()=>X,kw:()=>L,mf:()=>l,o8:()=>u,qC:()=>D,s6:()=>Q,sj:()=>I,u3:()=>A,u_:()=>W,w6:()=>S,xD:()=>ee});var n=r(2265);let i=()=>{},a=i(),o=Object,u=e=>e===a,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),d=e=>l(e.then),c=new WeakMap,f=0,g=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(o(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=c.get(e))return t;if(t=++f+"~",c.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=g(e[r])+",";c.set(e,t)}if(i==o){t="#";let n=o.keys(e).sort();for(;!u(r=n.pop());)u(e[r])||(t+=r+":"+g(e[r])+",");c.set(e,t)}}return t},E=new WeakMap,h={},w={},v="undefined",p=typeof window!=v,y=typeof document!=v,_=()=>p&&typeof window.requestAnimationFrame!=v,m=(e,t)=>{let r=E.get(e);return[()=>!u(t)&&e.get(t)||h,n=>{if(!u(t)){let i=e.get(t);t in w||(w[t]=i),r[5](t,s(i,n),i||h)}},r[6],()=>!u(t)&&t in w?w[t]:!u(t)&&e.get(t)||h]},R=!0,[b,T]=p&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],O={initFocus:e=>(y&&document.addEventListener("visibilitychange",e),b("focus",e),()=>{y&&document.removeEventListener("visibilitychange",e),T("focus",e)}),initReconnect:e=>{let t=()=>{R=!0,e()},r=()=>{R=!1};return b("online",t),b("offline",r),()=>{T("online",t),T("offline",r)}}},S=!n.useId,k=!p||"Deno"in window,L=e=>_()?window.requestAnimationFrame(e):setTimeout(e,1),V=k?n.useEffect:n.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,N=!k&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),D=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t]},M=0,A=()=>++M;var I={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function x(...e){let[t,r,n,i]=e,o=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),c=o.populateCache,f=o.rollbackOnError,g=o.optimisticData,h=e=>"function"==typeof f?f(e):!1!==f,w=o.throwOnError;if(l(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(v))}return v(r);async function v(r){let i;let[s]=D(r);if(!s)return;let[f,v]=m(t,s),[p,y,_,R]=E.get(t),b=()=>{let e=p[s];return(l(o.revalidate)?o.revalidate(f().data,r):!1!==o.revalidate)&&(delete _[s],delete R[s],e&&e[0])?e[0](2).then(()=>f().data):f().data};if(e.length<3)return b();let T=n,O=A();y[s]=[O,0];let S=!u(g),k=f(),L=k.data,V=k._c,C=u(V)?L:V;if(S&&v({data:g=l(g)?g(C,L):g,_c:C}),l(T))try{T=T(C)}catch(e){i=e}if(T&&d(T)){if(T=await T.catch(e=>{i=e}),O!==y[s][0]){if(i)throw i;return T}i&&S&&h(i)&&(c=!0,v({data:C,_c:a}))}if(c&&!i&&(l(c)?v({data:c(T,C),error:a,_c:a}):v({data:T,error:a,_c:a})),y[s][1]=A(),Promise.resolve(b()).then(()=>{v({_c:a})}),i){if(w)throw i;return}return T}}let P=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},j=(e,t)=>{if(!E.has(e)){let r=s(O,t),n={},o=x.bind(a,e),u=i,l={},d=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!E.has(e)&&(E.set(e,[n,{},{},{},o,c,d]),!k)){let t=r.initFocus(setTimeout.bind(a,P.bind(a,n,0))),i=r.initReconnect(setTimeout.bind(a,P.bind(a,n,1)));u=()=>{t&&t(),i&&i(),E.delete(e)}}};return f(),[e,o,f,u]}return[e,E.get(e)[4]]},[F,q]=j(new Map),W=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,o=i.retryCount,l=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;(u(a)||!(o>a))&&setTimeout(n,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:(e,t)=>g(e)==g(t),isPaused:()=>!1,cache:F,mutate:q,fallback:{}},{isOnline:()=>R,isVisible:()=>{let e=y&&document.visibilityState;return u(e)||"hidden"!==e}}),$=(e,t)=>{let r=s(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:o}=t;n&&a&&(r.use=n.concat(a)),i&&o&&(r.fallback=s(i,o))}return r},U=(0,n.createContext)({}),J=e=>{let{value:t}=e,r=(0,n.useContext)(U),i=l(t),o=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),u=(0,n.useMemo)(()=>i?o:$(r,o),[i,r,o]),d=o&&o.provider,c=(0,n.useRef)(a);d&&!c.current&&(c.current=j(d(u.cache||F),o));let f=c.current;return f&&(u.cache=f[0],u.mutate=f[1]),V(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,n.createElement)(U.Provider,s(e,{value:u}))},z="$inf$",Z=p&&window.__SWR_DEVTOOLS_USE__,B=Z?window.__SWR_DEVTOOLS_USE__:[],Y=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],G=()=>s(W,(0,n.useContext)(U)),H=(e,t)=>{let[r,n]=D(e),[,,,i]=E.get(F);if(i[r])return i[r];let a=t(n);return i[r]=a,a},K=B.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=D(t),[,,,i]=E.get(F);if(n.startsWith(z))return r(...e);let a=i[n];return u(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),Q=e=>function(...t){let r=G(),[n,i,a]=Y(t),o=$(r,a),u=e,{use:l}=o,s=(l||[]).concat(K);for(let e=s.length;e--;)u=s[e](u);return u(n,i||o.fetcher||null,o)},X=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},ee=(e,t)=>(...r)=>{let[n,i,a]=Y(r),o=(a.use||[]).concat(t);return e(n,i,{...a,use:o})};Z&&(window.__SWR_DEVTOOLS_REACT__=n)},91617:(e,t,r)=>{r.d(t,{MA:()=>a.MA,ZP:()=>l});var n=r(2265),i=r(10554),a=r(23791);let o=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),u={dedupe:!0};a.$l.defineProperty(a.J$,"defaultValue",{value:a.u_});let l=(0,a.s6)((e,t,r)=>{let{cache:l,compare:s,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:h,refreshWhenOffline:w,keepPreviousData:v}=r,[p,y,_,m]=a.DY.get(l),[R,b]=(0,a.qC)(e),T=(0,n.useRef)(!1),O=(0,n.useRef)(!1),S=(0,n.useRef)(R),k=(0,n.useRef)(t),L=(0,n.useRef)(r),V=()=>L.current,C=()=>V().isVisible()&&V().isOnline(),[N,D,M,A]=(0,a.JN)(l,R),I=(0,n.useRef)({}).current,x=(0,a.o8)(c)?r.fallback[R]:c,P=(e,t)=>{for(let r in I)if("data"===r){if(!s(e[r],t[r])&&(!(0,a.o8)(e[r])||!s(Z,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},j=(0,n.useMemo)(()=>{let e=!!R&&!!t&&((0,a.o8)(f)?!V().isPaused()&&!d&&(!!(0,a.o8)(g)||g):f),r=t=>{let r=(0,a.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=N(),i=A(),o=r(n),u=n===i?o:r(i),l=o;return[()=>{let e=r(N());return P(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>u]},[l,R]),F=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>M(R,(t,r)=>{P(r,t)||e()}),[l,R]),j[0],j[1]),q=!T.current,W=p[R]&&p[R].length>0,$=F.data,U=(0,a.o8)($)?x:$,J=F.error,z=(0,n.useRef)(U),Z=v?(0,a.o8)($)?z.current:$:U,B=(!W||!!(0,a.o8)(J))&&(q&&!(0,a.o8)(f)?f:!V().isPaused()&&(d?!(0,a.o8)(U)&&g:(0,a.o8)(U)||g)),Y=!!(R&&t&&q&&B),G=(0,a.o8)(F.isValidating)?Y:F.isValidating,H=(0,a.o8)(F.isLoading)?Y:F.isLoading,K=(0,n.useCallback)(async e=>{let t,n;let i=k.current;if(!R||!i||O.current||V().isPaused())return!1;let o=!0,u=e||{},l=!_[R]||!u.dedupe,d=()=>a.w6?!O.current&&R===S.current&&T.current:R===S.current,c={isValidating:!1,isLoading:!1},f=()=>{D(c)},g=()=>{let e=_[R];e&&e[1]===n&&delete _[R]},E={isValidating:!0};(0,a.o8)(N().data)&&(E.isLoading=!0);try{if(l&&(D(E),r.loadingTimeout&&(0,a.o8)(N().data)&&setTimeout(()=>{o&&d()&&V().onLoadingSlow(R,r)},r.loadingTimeout),_[R]=[i(b),(0,a.u3)()]),[t,n]=_[R],t=await t,l&&setTimeout(g,r.dedupingInterval),!_[R]||_[R][1]!==n)return l&&d()&&V().onDiscarded(R),!1;c.error=a.i_;let e=y[R];if(!(0,a.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),l&&d()&&V().onDiscarded(R),!1;let u=N().data;c.data=s(u,t)?u:t,l&&d()&&V().onSuccess(t,R,r)}catch(r){g();let e=V(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,l&&d()&&(e.onError(r,R,e),(!0===t||(0,a.mf)(t)&&t(r))&&(!V().revalidateOnFocus||!V().revalidateOnReconnect||C())&&e.onErrorRetry(r,R,e,e=>{let t=p[R];t&&t[0]&&t[0](a.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return o=!1,f(),!0},[R,l]),Q=(0,n.useCallback)((...e)=>(0,a.BN)(l,S.current,...e),[]);if((0,a.LI)(()=>{k.current=t,L.current=r,(0,a.o8)($)||(z.current=$)}),(0,a.LI)(()=>{if(!R)return;let e=K.bind(a.i_,u),t=0,r=(0,a.ko)(R,p,(r,n={})=>{if(r==a.sj.FOCUS_EVENT){let r=Date.now();V().revalidateOnFocus&&r>t&&C()&&(t=r+V().focusThrottleInterval,e())}else if(r==a.sj.RECONNECT_EVENT)V().revalidateOnReconnect&&C()&&e();else if(r==a.sj.MUTATE_EVENT)return K();else if(r==a.sj.ERROR_REVALIDATE_EVENT)return K(n)});return O.current=!1,S.current=R,T.current=!0,D({_k:b}),B&&((0,a.o8)(U)||a.W6?e():(0,a.kw)(e)),()=>{O.current=!0,r()}},[R]),(0,a.LI)(()=>{let e;function t(){let t=(0,a.mf)(E)?E(N().data):E;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(h||V().isVisible())&&(w||V().isOnline())?K(u).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[E,h,w,R]),(0,n.useDebugValue)(Z),d&&(0,a.o8)(U)&&R){if(!a.w6&&a.W6)throw Error("Fallback data is required when using suspense in SSR.");k.current=t,L.current=r,O.current=!1;let e=m[R];if((0,a.o8)(e)||o(Q(e)),(0,a.o8)(J)){let e=K(u);(0,a.o8)(Z)||(e.status="fulfilled",e.value=!0),o(e)}else throw J}return{mutate:Q,get data(){return I.data=!0,Z},get error(){return I.error=!0,J},get isValidating(){return I.isValidating=!0,G},get isLoading(){return I.isLoading=!0,H}}})}}]);
//# sourceMappingURL=7059-3e9d45d48fdacf68.js.map