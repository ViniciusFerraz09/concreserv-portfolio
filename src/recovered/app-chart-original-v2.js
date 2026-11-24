import {createDemoClient} from '../localClient.mjs';
const __vite__mapDeps=()=>[];
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(d){if(d.ep)return;d.ep=!0;const h=r(d);fetch(d.href,h)}})();var K_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var yc={exports:{}},ar={};var Qm;function vg(){if(Qm)return ar;Qm=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(l,d,h){var f=null;if(h!==void 0&&(f=""+h),d.key!==void 0&&(f=""+d.key),"key"in d){h={};for(var p in d)p!=="key"&&(h[p]=d[p])}else h=d;return d=h.ref,{$$typeof:i,type:l,key:f,ref:d!==void 0?d:null,props:h}}return ar.Fragment=n,ar.jsx=r,ar.jsxs=r,ar}var Xm;function yg(){return Xm||(Xm=1,yc.exports=vg()),yc.exports}var o=yg(),gc={exports:{}},_e={};var Jm;function gg(){if(Jm)return _e;Jm=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),S=Symbol.iterator;function w(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,B={};function T(x,H,te){this.props=x,this.context=H,this.refs=B,this.updater=te||k}T.prototype.isReactComponent={},T.prototype.setState=function(x,H){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,H,"setState")},T.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function C(){}C.prototype=T.prototype;function L(x,H,te){this.props=x,this.context=H,this.refs=B,this.updater=te||k}var X=L.prototype=new C;X.constructor=L,O(X,T.prototype),X.isPureReactComponent=!0;var G=Array.isArray;function z(){}var I={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ie(x,H,te){var ae=te.ref;return{$$typeof:i,type:x,key:H,ref:ae!==void 0?ae:null,props:te}}function Te(x,H){return ie(x.type,H,x.props)}function M(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function se(x){var H={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(te){return H[te]})}var re=/\/+/g;function F(x,H){return typeof x=="object"&&x!==null&&x.key!=null?se(""+x.key):H.toString(36)}function ge(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(z,z):(x.status="pending",x.then(function(H){x.status==="pending"&&(x.status="fulfilled",x.value=H)},function(H){x.status==="pending"&&(x.status="rejected",x.reason=H)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function $(x,H,te,ae,be){var de=typeof x;(de==="undefined"||de==="boolean")&&(x=null);var De=!1;if(x===null)De=!0;else switch(de){case"bigint":case"string":case"number":De=!0;break;case"object":switch(x.$$typeof){case i:case n:De=!0;break;case _:return De=x._init,$(De(x._payload),H,te,ae,be)}}if(De)return be=be(x),De=ae===""?"."+F(x,0):ae,G(be)?(te="",De!=null&&(te=De.replace(re,"$&/")+"/"),$(be,H,te,"",function(ze){return ze})):be!=null&&(M(be)&&(be=Te(be,te+(be.key==null||x&&x.key===be.key?"":(""+be.key).replace(re,"$&/")+"/")+De)),H.push(be)),1;De=0;var W=ae===""?".":ae+":";if(G(x))for(var Ne=0;Ne<x.length;Ne++)ae=x[Ne],de=W+F(ae,Ne),De+=$(ae,H,te,de,be);else if(Ne=w(x),typeof Ne=="function")for(x=Ne.call(x),Ne=0;!(ae=x.next()).done;)ae=ae.value,de=W+F(ae,Ne++),De+=$(ae,H,te,de,be);else if(de==="object"){if(typeof x.then=="function")return $(ge(x),H,te,ae,be);throw H=String(x),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return De}function ee(x,H,te){if(x==null)return x;var ae=[],be=0;return $(x,ae,"","",function(de){return H.call(te,de,be++)}),ae}function oe(x){if(x._status===-1){var H=x._result;H=H(),H.then(function(te){(x._status===0||x._status===-1)&&(x._status=1,x._result=te)},function(te){(x._status===0||x._status===-1)&&(x._status=2,x._result=te)}),x._status===-1&&(x._status=0,x._result=H)}if(x._status===1)return x._result.default;throw x._result}var Se=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},P={map:ee,forEach:function(x,H,te){ee(x,function(){H.apply(this,arguments)},te)},count:function(x){var H=0;return ee(x,function(){H++}),H},toArray:function(x){return ee(x,function(H){return H})||[]},only:function(x){if(!M(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return _e.Activity=j,_e.Children=P,_e.Component=T,_e.Fragment=r,_e.Profiler=d,_e.PureComponent=L,_e.StrictMode=l,_e.Suspense=v,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,_e.__COMPILER_RUNTIME={__proto__:null,c:function(x){return I.H.useMemoCache(x)}},_e.cache=function(x){return function(){return x.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(x,H,te){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var ae=O({},x.props),be=x.key;if(H!=null)for(de in H.key!==void 0&&(be=""+H.key),H)!Y.call(H,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&H.ref===void 0||(ae[de]=H[de]);var de=arguments.length-2;if(de===1)ae.children=te;else if(1<de){for(var De=Array(de),W=0;W<de;W++)De[W]=arguments[W+2];ae.children=De}return ie(x.type,be,ae)},_e.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:h,_context:x},x},_e.createElement=function(x,H,te){var ae,be={},de=null;if(H!=null)for(ae in H.key!==void 0&&(de=""+H.key),H)Y.call(H,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(be[ae]=H[ae]);var De=arguments.length-2;if(De===1)be.children=te;else if(1<De){for(var W=Array(De),Ne=0;Ne<De;Ne++)W[Ne]=arguments[Ne+2];be.children=W}if(x&&x.defaultProps)for(ae in De=x.defaultProps,De)be[ae]===void 0&&(be[ae]=De[ae]);return ie(x,de,be)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(x){return{$$typeof:p,render:x}},_e.isValidElement=M,_e.lazy=function(x){return{$$typeof:_,_payload:{_status:-1,_result:x},_init:oe}},_e.memo=function(x,H){return{$$typeof:y,type:x,compare:H===void 0?null:H}},_e.startTransition=function(x){var H=I.T,te={};I.T=te;try{var ae=x(),be=I.S;be!==null&&be(te,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(z,Se)}catch(de){Se(de)}finally{H!==null&&te.types!==null&&(H.types=te.types),I.T=H}},_e.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},_e.use=function(x){return I.H.use(x)},_e.useActionState=function(x,H,te){return I.H.useActionState(x,H,te)},_e.useCallback=function(x,H){return I.H.useCallback(x,H)},_e.useContext=function(x){return I.H.useContext(x)},_e.useDebugValue=function(){},_e.useDeferredValue=function(x,H){return I.H.useDeferredValue(x,H)},_e.useEffect=function(x,H){return I.H.useEffect(x,H)},_e.useEffectEvent=function(x){return I.H.useEffectEvent(x)},_e.useId=function(){return I.H.useId()},_e.useImperativeHandle=function(x,H,te){return I.H.useImperativeHandle(x,H,te)},_e.useInsertionEffect=function(x,H){return I.H.useInsertionEffect(x,H)},_e.useLayoutEffect=function(x,H){return I.H.useLayoutEffect(x,H)},_e.useMemo=function(x,H){return I.H.useMemo(x,H)},_e.useOptimistic=function(x,H){return I.H.useOptimistic(x,H)},_e.useReducer=function(x,H,te){return I.H.useReducer(x,H,te)},_e.useRef=function(x){return I.H.useRef(x)},_e.useState=function(x){return I.H.useState(x)},_e.useSyncExternalStore=function(x,H,te){return I.H.useSyncExternalStore(x,H,te)},_e.useTransition=function(){return I.H.useTransition()},_e.version="19.2.0",_e}var Pm;function Pc(){return Pm||(Pm=1,gc.exports=gg()),gc.exports}var K=Pc();const bg=pg(K);var bc={exports:{}},nr={},_c={exports:{}},xc={};var Zm;function _g(){return Zm||(Zm=1,(function(i){function n($,ee){var oe=$.length;$.push(ee);e:for(;0<oe;){var Se=oe-1>>>1,P=$[Se];if(0<d(P,ee))$[Se]=ee,$[oe]=P,oe=Se;else break e}}function r($){return $.length===0?null:$[0]}function l($){if($.length===0)return null;var ee=$[0],oe=$.pop();if(oe!==ee){$[0]=oe;e:for(var Se=0,P=$.length,x=P>>>1;Se<x;){var H=2*(Se+1)-1,te=$[H],ae=H+1,be=$[ae];if(0>d(te,oe))ae<P&&0>d(be,te)?($[Se]=be,$[ae]=oe,Se=ae):($[Se]=te,$[H]=oe,Se=H);else if(ae<P&&0>d(be,oe))$[Se]=be,$[ae]=oe,Se=ae;else break e}}return ee}function d($,ee){var oe=$.sortIndex-ee.sortIndex;return oe!==0?oe:$.id-ee.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,p=f.now();i.unstable_now=function(){return f.now()-p}}var v=[],y=[],_=1,j=null,S=3,w=!1,k=!1,O=!1,B=!1,T=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function X($){for(var ee=r(y);ee!==null;){if(ee.callback===null)l(y);else if(ee.startTime<=$)l(y),ee.sortIndex=ee.expirationTime,n(v,ee);else break;ee=r(y)}}function G($){if(O=!1,X($),!k)if(r(v)!==null)k=!0,z||(z=!0,se());else{var ee=r(y);ee!==null&&ge(G,ee.startTime-$)}}var z=!1,I=-1,Y=5,ie=-1;function Te(){return B?!0:!(i.unstable_now()-ie<Y)}function M(){if(B=!1,z){var $=i.unstable_now();ie=$;var ee=!0;try{e:{k=!1,O&&(O=!1,C(I),I=-1),w=!0;var oe=S;try{t:{for(X($),j=r(v);j!==null&&!(j.expirationTime>$&&Te());){var Se=j.callback;if(typeof Se=="function"){j.callback=null,S=j.priorityLevel;var P=Se(j.expirationTime<=$);if($=i.unstable_now(),typeof P=="function"){j.callback=P,X($),ee=!0;break t}j===r(v)&&l(v),X($)}else l(v);j=r(v)}if(j!==null)ee=!0;else{var x=r(y);x!==null&&ge(G,x.startTime-$),ee=!1}}break e}finally{j=null,S=oe,w=!1}ee=void 0}}finally{ee?se():z=!1}}}var se;if(typeof L=="function")se=function(){L(M)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,F=re.port2;re.port1.onmessage=M,se=function(){F.postMessage(null)}}else se=function(){T(M,0)};function ge($,ee){I=T(function(){$(i.unstable_now())},ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function($){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var oe=S;S=ee;try{return $()}finally{S=oe}},i.unstable_requestPaint=function(){B=!0},i.unstable_runWithPriority=function($,ee){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var oe=S;S=$;try{return ee()}finally{S=oe}},i.unstable_scheduleCallback=function($,ee,oe){var Se=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Se+oe:Se):oe=Se,$){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=oe+P,$={id:_++,callback:ee,priorityLevel:$,startTime:oe,expirationTime:P,sortIndex:-1},oe>Se?($.sortIndex=oe,n(y,$),r(v)===null&&$===r(y)&&(O?(C(I),I=-1):O=!0,ge(G,oe-Se))):($.sortIndex=P,n(v,$),k||w||(k=!0,z||(z=!0,se()))),$},i.unstable_shouldYield=Te,i.unstable_wrapCallback=function($){var ee=S;return function(){var oe=S;S=ee;try{return $.apply(this,arguments)}finally{S=oe}}}})(xc)),xc}var Im;function xg(){return Im||(Im=1,_c.exports=_g()),_c.exports}var jc={exports:{}},At={};var Fm;function jg(){if(Fm)return At;Fm=1;var i=Pc();function n(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(v,y,_){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:v,containerInfo:y,implementation:_}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,At.createPortal=function(v,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return h(v,y,null,_)},At.flushSync=function(v){var y=f.T,_=l.p;try{if(f.T=null,l.p=2,v)return v()}finally{f.T=y,l.p=_,l.d.f()}},At.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,l.d.C(v,y))},At.prefetchDNS=function(v){typeof v=="string"&&l.d.D(v)},At.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var _=y.as,j=p(_,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?l.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:j,integrity:S,fetchPriority:w}):_==="script"&&l.d.X(v,{crossOrigin:j,integrity:S,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},At.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=p(y.as,y.crossOrigin);l.d.M(v,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&l.d.M(v)},At.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,j=p(_,y.crossOrigin);l.d.L(v,_,{crossOrigin:j,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},At.preloadModule=function(v,y){if(typeof v=="string")if(y){var _=p(y.as,y.crossOrigin);l.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else l.d.m(v)},At.requestFormReset=function(v){l.d.r(v)},At.unstable_batchedUpdates=function(v,y){return v(y)},At.useFormState=function(v,y,_){return f.H.useFormState(v,y,_)},At.useFormStatus=function(){return f.H.useHostTransitionStatus()},At.version="19.2.0",At}var Wm;function Sg(){if(Wm)return jc.exports;Wm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),jc.exports=jg(),jc.exports}var ep;function wg(){if(ep)return nr;ep=1;var i=xg(),n=Pc(),r=Sg();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(l(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,s=t;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return v(u),e;if(c===s)return v(u),t;c=c.sibling}throw Error(l(188))}if(a.return!==s.return)a=u,s=c;else{for(var m=!1,g=u.child;g;){if(g===a){m=!0,a=u,s=c;break}if(g===s){m=!0,s=u,a=c;break}g=g.sibling}if(!m){for(g=c.child;g;){if(g===a){m=!0,a=c,s=u;break}if(g===s){m=!0,s=c,a=u;break}g=g.sibling}if(!m)throw Error(l(189))}}if(a.alternate!==s)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function F(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case T:return"Profiler";case B:return"StrictMode";case G:return"Suspense";case z:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:F(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return F(e(t))}catch{}}return null}var ge=Array.isArray,$=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Se=[],P=-1;function x(e){return{current:e}}function H(e){0>P||(e.current=Se[P],Se[P]=null,P--)}function te(e,t){P++,Se[P]=e.current,e.current=t}var ae=x(null),be=x(null),de=x(null),De=x(null);function W(e,t){switch(te(de,t),te(be,e),te(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pm(t),e=vm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(ae),te(ae,e)}function Ne(){H(ae),H(be),H(de)}function ze(e){e.memoizedState!==null&&te(De,e);var t=ae.current,a=vm(t,e.type);t!==a&&(te(be,e),te(ae,a))}function zt(e){be.current===e&&(H(ae),H(be)),De.current===e&&(H(De),Fi._currentValue=oe)}var Cn,kn;function wt(e){if(Cn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Cn=t&&t[1]||"",kn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cn+e+kn}var ta=!1;function ma(e,t){if(!e||ta)return"";ta=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(V){var U=V}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(V){U=V}e.call(Z.prototype)}}else{try{throw Error()}catch(V){U=V}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(V){if(V&&U&&typeof V.stack=="string")return[V.stack,U.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),m=c[0],g=c[1];if(m&&g){var E=m.split(`
`),q=g.split(`
`);for(u=s=0;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;for(;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;if(s===E.length||u===q.length)for(s=E.length-1,u=q.length-1;1<=s&&0<=u&&E[s]!==q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(E[s]!==q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||E[s]!==q[u]){var Q=`
`+E[s].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=s&&0<=u);break}}}finally{ta=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wt(a):""}function os(e,t){switch(e.tag){case 26:case 27:case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return e.child!==t&&t!==null?wt("Suspense Fallback"):wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return ma(e.type,!1);case 11:return ma(e.type.render,!1);case 1:return ma(e.type,!0);case 31:return wt("Activity");default:return""}}function _r(e){try{var t="",a=null;do t+=os(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var tn=Object.prototype.hasOwnProperty,Dt=i.unstable_scheduleCallback,Vt=i.unstable_cancelCallback,io=i.unstable_shouldYield,di=i.unstable_requestPaint,Qe=i.unstable_now,ro=i.unstable_getCurrentPriorityLevel,pa=i.unstable_ImmediatePriority,Gt=i.unstable_UserBlockingPriority,Ra=i.unstable_NormalPriority,lo=i.unstable_LowPriority,Rn=i.unstable_IdlePriority,va=i.log,hi=i.unstable_setDisableYieldValue,Ke=null,Et=null;function Kt(e){if(typeof va=="function"&&hi(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Ke,e)}catch{}}var ht=Math.clz32?Math.clz32:cs,xr=Math.log,us=Math.LN2;function cs(e){return e>>>=0,e===0?32:31-(xr(e)/us|0)|0}var an=256,ds=262144,zn=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hs(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var g=s&134217727;return g!==0?(s=g&~c,s!==0?u=wa(s):(m&=g,m!==0?u=wa(m):a||(a=g&~e,a!==0&&(u=wa(a))))):(g=s&~c,g!==0?u=wa(g):m!==0?u=wa(m):a||(a=s&~e,a!==0&&(u=wa(a)))),u===0?0:t!==0&&t!==u&&(t&c)===0&&(c=u&-u,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:u}function Dn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function fs(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fi(){var e=zn;return zn<<=1,(zn&62914560)===0&&(zn=4194304),e}function Ea(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function oo(e,t,a,s,u,c){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,E=e.expirationTimes,q=e.hiddenUpdates;for(a=m&~a;0<a;){var Q=31-ht(a),Z=1<<Q;g[Q]=0,E[Q]=-1;var U=q[Q];if(U!==null)for(q[Q]=null,Q=0;Q<U.length;Q++){var V=U[Q];V!==null&&(V.lane&=-536870913)}a&=~Z}s!==0&&jr(e,s,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function jr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-ht(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function qn(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-ht(a),u=1<<s;u&t|e[s]&t&&(e[s]|=t),a&=~u}}function Un(e,t){var a=t&-t;return a=(a&42)!==0?1:za(a),(a&(e.suspendedLanes|t))!==0?0:a}function za(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nn(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:Bm(e.type))}function Sr(e,t){var a=ee.p;try{return ee.p=e,t()}finally{ee.p=a}}var aa=Math.random().toString(36).slice(2),He="__reactFiber$"+aa,b="__reactProps$"+aa,A="__reactContainer$"+aa,ne="__reactEvents$"+aa,ue="__reactListeners$"+aa,Xe="__reactHandles$"+aa,et="__reactResources$"+aa,Ot="__reactMarker$"+aa;function Nt(e){delete e[He],delete e[b],delete e[ne],delete e[ue],delete e[Xe]}function Ze(e){var t=e[He];if(t)return t;for(var a=e.parentNode;a;){if(t=a[A]||a[He]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Sm(e);e!==null;){if(a=e[He])return a;e=Sm(e)}return t}e=a,a=e.parentNode}return null}function Ct(e){if(e=e[He]||e[A]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function na(e){var t=e[et];return t||(t=e[et]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pt(e){e[Ot]=!0}var ad=new Set,nd={};function Mn(e,t){ms(e,t),ms(e+"Capture",t)}function ms(e,t){for(nd[e]=t,e=0;e<t.length;e++)ad.add(t[e])}var rv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sd={},id={};function lv(e){return tn.call(id,e)?!0:tn.call(sd,e)?!1:rv.test(e)?id[e]=!0:(sd[e]=!0,!1)}function wr(e,t,a){if(lv(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Er(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Da(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+s)}}function sa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ov(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(m){a=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){if(!e._valueTracker){var t=rd(e)?"checked":"value";e._valueTracker=ov(e,t,""+e[t])}}function ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=rd(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var uv=/[\n"\\]/g;function ia(e){return e.replace(uv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function co(e,t,a,s,u,c,m,g){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+sa(t)):e.value!==""+sa(t)&&(e.value=""+sa(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ho(e,m,sa(t)):a!=null?ho(e,m,sa(a)):s!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+sa(g):e.removeAttribute("name")}function od(e,t,a,s,u,c,m,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){uo(e);return}a=a!=null?""+sa(a):"",t=t!=null?""+sa(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=g?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),uo(e)}function ho(e,t,a){t==="number"&&Tr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ps(e,t,a,s){if(e=e.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=t.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+sa(a),t=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function ud(e,t,a){if(t!=null&&(t=""+sa(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+sa(a):""}function cd(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(l(92));if(ge(s)){if(1<s.length)throw Error(l(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=sa(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),uo(e)}function vs(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var cv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dd(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||cv.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hd(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in t)s=t[u],t.hasOwnProperty(u)&&a[u]!==s&&dd(e,u,s)}else for(var c in t)t.hasOwnProperty(c)&&dd(e,c,t[c])}function fo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ar(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qa(){}var mo=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,gs=null;function fd(e){var t=Ct(e);if(t&&(e=t.stateNode)){var a=e[b]||null;e:switch(e=t.stateNode,t.type){case"input":if(co(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ia(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var u=s[b]||null;if(!u)throw Error(l(90));co(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&ld(s)}break e;case"textarea":ud(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ps(e,!!a.multiple,t,!1)}}}var vo=!1;function md(e,t,a){if(vo)return e(t,a);vo=!0;try{var s=e(t);return s}finally{if(vo=!1,(ys!==null||gs!==null)&&(ml(),ys&&(t=ys,e=gs,gs=ys=null,fd(t),e)))for(t=0;t<e.length;t++)fd(e[t])}}function pi(e,t){var a=e.stateNode;if(a===null)return null;var s=a[b]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var Ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yo=!1;if(Ua)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){yo=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{yo=!1}var sn=null,go=null,Or=null;function pd(){if(Or)return Or;var e,t=go,a=t.length,s,u="value"in sn?sn.value:sn.textContent,c=u.length;for(e=0;e<a&&t[e]===u[e];e++);var m=a-e;for(s=1;s<=m&&t[a-s]===u[c-s];s++);return Or=u.slice(e,1<s?1-s:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function vd(){return!1}function qt(e){function t(a,s,u,c,m){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Cr:vd,this.isPropagationStopped=vd,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kr=qt(Ln),yi=j({},Ln,{view:0,detail:0}),fv=qt(yi),bo,_o,gi,Rr=j({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(bo=e.screenX-gi.screenX,_o=e.screenY-gi.screenY):_o=bo=0,gi=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),yd=qt(Rr),mv=j({},Rr,{dataTransfer:0}),pv=qt(mv),vv=j({},yi,{relatedTarget:0}),xo=qt(vv),yv=j({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=qt(yv),bv=j({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_v=qt(bv),xv=j({},Ln,{data:0}),gd=qt(xv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wv[e])?!!t[e]:!1}function jo(){return Ev}var Tv=j({},yi,{key:function(e){if(e.key){var t=jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jo,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Av=qt(Tv),Ov=j({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=qt(Ov),Nv=j({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jo}),Cv=qt(Nv),kv=j({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=qt(kv),zv=j({},Rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=qt(zv),qv=j({},Ln,{newState:0,oldState:0}),Uv=qt(qv),Mv=[9,13,27,32],So=Ua&&"CompositionEvent"in window,bi=null;Ua&&"documentMode"in document&&(bi=document.documentMode);var Lv=Ua&&"TextEvent"in window&&!bi,_d=Ua&&(!So||bi&&8<bi&&11>=bi),xd=" ",jd=!1;function Sd(e,t){switch(e){case"keyup":return Mv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bs=!1;function Bv(e,t){switch(e){case"compositionend":return wd(t);case"keypress":return t.which!==32?null:(jd=!0,xd);case"textInput":return e=t.data,e===xd&&jd?null:e;default:return null}}function Hv(e,t){if(bs)return e==="compositionend"||!So&&Sd(e,t)?(e=pd(),Or=go=sn=null,bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _d&&t.locale!=="ko"?null:t.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$v[e.type]:t==="textarea"}function Td(e,t,a,s){ys?gs?gs.push(s):gs=[s]:ys=s,t=xl(t,"onChange"),0<t.length&&(a=new kr("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var _i=null,xi=null;function Vv(e){um(e,0)}function zr(e){var t=kt(e);if(ld(t))return e}function Ad(e,t){if(e==="change")return t}var Od=!1;if(Ua){var wo;if(Ua){var Eo="oninput"in document;if(!Eo){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Eo=typeof Nd.oninput=="function"}wo=Eo}else wo=!1;Od=wo&&(!document.documentMode||9<document.documentMode)}function Cd(){_i&&(_i.detachEvent("onpropertychange",kd),xi=_i=null)}function kd(e){if(e.propertyName==="value"&&zr(xi)){var t=[];Td(t,xi,e,po(e)),md(Vv,t)}}function Gv(e,t,a){e==="focusin"?(Cd(),_i=t,xi=a,_i.attachEvent("onpropertychange",kd)):e==="focusout"&&Cd()}function Kv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zr(xi)}function Yv(e,t){if(e==="click")return zr(t)}function Qv(e,t){if(e==="input"||e==="change")return zr(t)}function Xv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:Xv;function ji(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!tn.call(t,u)||!Yt(e[u],t[u]))return!1}return!0}function Rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var a=Rd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rd(a)}}function Dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Tr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Tr(e.document)}return t}function To(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jv=Ua&&"documentMode"in document&&11>=document.documentMode,_s=null,Ao=null,Si=null,Oo=!1;function Ud(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oo||_s==null||_s!==Tr(s)||(s=_s,"selectionStart"in s&&To(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Si&&ji(Si,s)||(Si=s,s=xl(Ao,"onSelect"),0<s.length&&(t=new kr("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=_s)))}function Bn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var xs={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionrun:Bn("Transition","TransitionRun"),transitionstart:Bn("Transition","TransitionStart"),transitioncancel:Bn("Transition","TransitionCancel"),transitionend:Bn("Transition","TransitionEnd")},No={},Md={};Ua&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Hn(e){if(No[e])return No[e];if(!xs[e])return e;var t=xs[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Md)return No[e]=t[a];return e}var Ld=Hn("animationend"),Bd=Hn("animationiteration"),Hd=Hn("animationstart"),Pv=Hn("transitionrun"),Zv=Hn("transitionstart"),Iv=Hn("transitioncancel"),$d=Hn("transitionend"),Vd=new Map,Co="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Co.push("scrollEnd");function ya(e,t){Vd.set(e,t),Mn(t,[e])}var Dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ra=[],js=0,ko=0;function qr(){for(var e=js,t=ko=js=0;t<e;){var a=ra[t];ra[t++]=null;var s=ra[t];ra[t++]=null;var u=ra[t];ra[t++]=null;var c=ra[t];if(ra[t++]=null,s!==null&&u!==null){var m=s.pending;m===null?u.next=u:(u.next=m.next,m.next=u),s.pending=u}c!==0&&Gd(a,u,c)}}function Ur(e,t,a,s){ra[js++]=e,ra[js++]=t,ra[js++]=a,ra[js++]=s,ko|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Ro(e,t,a,s){return Ur(e,t,a,s),Mr(e)}function $n(e,t){return Ur(e,null,null,t),Mr(e)}function Gd(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=e.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&t!==null&&(u=31-ht(a),e=c.hiddenUpdates,s=e[u],s===null?e[u]=[t]:s.push(t),t.lane=a|536870912),c):null}function Mr(e){if(50<Yi)throw Yi=0,$u=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ss={};function Fv(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,a,s){return new Fv(e,t,a,s)}function zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,t){var a=e.alternate;return a===null?(a=Qt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Lr(e,t,a,s,u,c){var m=0;if(s=e,typeof e=="function")zo(e)&&(m=1);else if(typeof e=="string")m=ng(e,a,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Qt(31,a,t,u),e.elementType=ie,e.lanes=c,e;case O:return Vn(a.children,u,c,t);case B:m=8,u|=24;break;case T:return e=Qt(12,a,t,u|2),e.elementType=T,e.lanes=c,e;case G:return e=Qt(13,a,t,u),e.elementType=G,e.lanes=c,e;case z:return e=Qt(19,a,t,u),e.elementType=z,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:m=10;break e;case C:m=9;break e;case X:m=11;break e;case I:m=14;break e;case Y:m=16,s=null;break e}m=29,a=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=Qt(m,a,t,u),t.elementType=e,t.type=s,t.lanes=c,t}function Vn(e,t,a,s){return e=Qt(7,e,s,t),e.lanes=a,e}function Do(e,t,a){return e=Qt(6,e,null,t),e.lanes=a,e}function Yd(e){var t=Qt(18,null,null,0);return t.stateNode=e,t}function qo(e,t,a){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qd=new WeakMap;function la(e,t){if(typeof e=="object"&&e!==null){var a=Qd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:_r(t)},Qd.set(e,t),t)}return{value:e,source:t,stack:_r(t)}}var ws=[],Es=0,Br=null,wi=0,oa=[],ua=0,rn=null,Ta=1,Aa="";function La(e,t){ws[Es++]=wi,ws[Es++]=Br,Br=e,wi=t}function Xd(e,t,a){oa[ua++]=Ta,oa[ua++]=Aa,oa[ua++]=rn,rn=e;var s=Ta;e=Aa;var u=32-ht(s)-1;s&=~(1<<u),a+=1;var c=32-ht(t)+u;if(30<c){var m=u-u%5;c=(s&(1<<m)-1).toString(32),s>>=m,u-=m,Ta=1<<32-ht(t)+u|a<<u|s,Aa=c+e}else Ta=1<<c|a<<u|s,Aa=e}function Uo(e){e.return!==null&&(La(e,1),Xd(e,1,0))}function Mo(e){for(;e===Br;)Br=ws[--Es],ws[Es]=null,wi=ws[--Es],ws[Es]=null;for(;e===rn;)rn=oa[--ua],oa[ua]=null,Aa=oa[--ua],oa[ua]=null,Ta=oa[--ua],oa[ua]=null}function Jd(e,t){oa[ua++]=Ta,oa[ua++]=Aa,oa[ua++]=rn,Ta=t.id,Aa=t.overflow,rn=e}var gt=null,Ie=null,Re=!1,ln=null,ca=!1,Lo=Error(l(519));function on(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ei(la(t,e)),Lo}function Pd(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[He]=e,t[b]=s,a){case"dialog":Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":case"embed":Oe("load",t);break;case"video":case"audio":for(a=0;a<Xi.length;a++)Oe(Xi[a],t);break;case"source":Oe("error",t);break;case"img":case"image":case"link":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"input":Oe("invalid",t),od(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Oe("invalid",t);break;case"textarea":Oe("invalid",t),cd(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||fm(t.textContent,a)?(s.popover!=null&&(Oe("beforetoggle",t),Oe("toggle",t)),s.onScroll!=null&&Oe("scroll",t),s.onScrollEnd!=null&&Oe("scrollend",t),s.onClick!=null&&(t.onclick=qa),t=!0):t=!1,t||on(e,!0)}function Zd(e){for(gt=e.return;gt;)switch(gt.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:gt=gt.return}}function Ts(e){if(e!==gt)return!1;if(!Re)return Zd(e),Re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ac(e.type,e.memoizedProps)),a=!a),a&&Ie&&on(e),Zd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ie=jm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ie=jm(e)}else t===27?(t=Ie,jn(e.type)?(e=lc,lc=null,Ie=e):Ie=t):Ie=gt?ha(e.stateNode.nextSibling):null;return!0}function Gn(){Ie=gt=null,Re=!1}function Bo(){var e=ln;return e!==null&&(Bt===null?Bt=e:Bt.push.apply(Bt,e),ln=null),e}function Ei(e){ln===null?ln=[e]:ln.push(e)}var Ho=x(null),Kn=null,Ba=null;function un(e,t,a){te(Ho,t._currentValue),t._currentValue=a}function Ha(e){e._currentValue=Ho.current,H(Ho)}function $o(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function Vo(e,t,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var m=u.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=u;for(var E=0;E<t.length;E++)if(g.context===t[E]){c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),$o(c.return,a,e),s||(m=null);break e}c=g.next}}else if(u.tag===18){if(m=u.return,m===null)throw Error(l(341));m.lanes|=a,c=m.alternate,c!==null&&(c.lanes|=a),$o(m,a,e),m=null}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===e){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}}function As(e,t,a,s){e=null;for(var u=t,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var m=u.alternate;if(m===null)throw Error(l(387));if(m=m.memoizedProps,m!==null){var g=u.type;Yt(u.pendingProps.value,m.value)||(e!==null?e.push(g):e=[g])}}else if(u===De.current){if(m=u.alternate,m===null)throw Error(l(387));m.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fi):e=[Fi])}u=u.return}e!==null&&Vo(t,e,a,s),t.flags|=262144}function Hr(e){for(e=e.firstContext;e!==null;){if(!Yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yn(e){Kn=e,Ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bt(e){return Id(Kn,e)}function $r(e,t){return Kn===null&&Yn(e),Id(e,t)}function Id(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ba===null){if(e===null)throw Error(l(308));Ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ba=Ba.next=t;return a}var Wv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ey=i.unstable_scheduleCallback,ty=i.unstable_NormalPriority,rt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Go(){return{controller:new Wv,data:new Map,refCount:0}}function Ti(e){e.refCount--,e.refCount===0&&ey(ty,function(){e.controller.abort()})}var Ai=null,Ko=0,Os=0,Ns=null;function ay(e,t){if(Ai===null){var a=Ai=[];Ko=0,Os=Xu(),Ns={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Ko++,t.then(Fd,Fd),t}function Fd(){if(--Ko===0&&Ai!==null){Ns!==null&&(Ns.status="fulfilled");var e=Ai;Ai=null,Os=0,Ns=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ny(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Wd=$.S;$.S=function(e,t){Mf=Qe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ay(e,t),Wd!==null&&Wd(e,t)};var Qn=x(null);function Yo(){var e=Qn.current;return e!==null?e:Ye.pooledCache}function Vr(e,t){t===null?te(Qn,Qn.current):te(Qn,t.pool)}function eh(){var e=Yo();return e===null?null:{parent:rt._currentValue,pool:e}}var Cs=Error(l(460)),Qo=Error(l(474)),Gr=Error(l(542)),Kr={then:function(){}};function th(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ah(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qa,qa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e;default:if(typeof t.status=="string")t.then(qa,qa);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=s}},function(s){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e}throw Jn=t,Cs}}function Xn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Jn=a,Cs):a}}var Jn=null;function nh(){if(Jn===null)throw Error(l(459));var e=Jn;return Jn=null,e}function sh(e){if(e===Cs||e===Gr)throw Error(l(483))}var ks=null,Oi=0;function Yr(e){var t=Oi;return Oi+=1,ks===null&&(ks=[]),ah(ks,e,t)}function Ni(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qr(e,t){throw t.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ih(e){function t(R,N){if(e){var D=R.deletions;D===null?(R.deletions=[N],R.flags|=16):D.push(N)}}function a(R,N){if(!e)return null;for(;N!==null;)t(R,N),N=N.sibling;return null}function s(R){for(var N=new Map;R!==null;)R.key!==null?N.set(R.key,R):N.set(R.index,R),R=R.sibling;return N}function u(R,N){return R=Ma(R,N),R.index=0,R.sibling=null,R}function c(R,N,D){return R.index=D,e?(D=R.alternate,D!==null?(D=D.index,D<N?(R.flags|=67108866,N):D):(R.flags|=67108866,N)):(R.flags|=1048576,N)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function g(R,N,D,J){return N===null||N.tag!==6?(N=Do(D,R.mode,J),N.return=R,N):(N=u(N,D),N.return=R,N)}function E(R,N,D,J){var me=D.type;return me===O?Q(R,N,D.props.children,J,D.key):N!==null&&(N.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Y&&Xn(me)===N.type)?(N=u(N,D.props),Ni(N,D),N.return=R,N):(N=Lr(D.type,D.key,D.props,null,R.mode,J),Ni(N,D),N.return=R,N)}function q(R,N,D,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==D.containerInfo||N.stateNode.implementation!==D.implementation?(N=qo(D,R.mode,J),N.return=R,N):(N=u(N,D.children||[]),N.return=R,N)}function Q(R,N,D,J,me){return N===null||N.tag!==7?(N=Vn(D,R.mode,J,me),N.return=R,N):(N=u(N,D),N.return=R,N)}function Z(R,N,D){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Do(""+N,R.mode,D),N.return=R,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case w:return D=Lr(N.type,N.key,N.props,null,R.mode,D),Ni(D,N),D.return=R,D;case k:return N=qo(N,R.mode,D),N.return=R,N;case Y:return N=Xn(N),Z(R,N,D)}if(ge(N)||se(N))return N=Vn(N,R.mode,D,null),N.return=R,N;if(typeof N.then=="function")return Z(R,Yr(N),D);if(N.$$typeof===L)return Z(R,$r(R,N),D);Qr(R,N)}return null}function U(R,N,D,J){var me=N!==null?N.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return me!==null?null:g(R,N,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case w:return D.key===me?E(R,N,D,J):null;case k:return D.key===me?q(R,N,D,J):null;case Y:return D=Xn(D),U(R,N,D,J)}if(ge(D)||se(D))return me!==null?null:Q(R,N,D,J,null);if(typeof D.then=="function")return U(R,N,Yr(D),J);if(D.$$typeof===L)return U(R,N,$r(R,D),J);Qr(R,D)}return null}function V(R,N,D,J,me){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return R=R.get(D)||null,g(N,R,""+J,me);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return R=R.get(J.key===null?D:J.key)||null,E(N,R,J,me);case k:return R=R.get(J.key===null?D:J.key)||null,q(N,R,J,me);case Y:return J=Xn(J),V(R,N,D,J,me)}if(ge(J)||se(J))return R=R.get(D)||null,Q(N,R,J,me,null);if(typeof J.then=="function")return V(R,N,D,Yr(J),me);if(J.$$typeof===L)return V(R,N,D,$r(N,J),me);Qr(N,J)}return null}function le(R,N,D,J){for(var me=null,qe=null,ce=N,we=N=0,ke=null;ce!==null&&we<D.length;we++){ce.index>we?(ke=ce,ce=null):ke=ce.sibling;var Ue=U(R,ce,D[we],J);if(Ue===null){ce===null&&(ce=ke);break}e&&ce&&Ue.alternate===null&&t(R,ce),N=c(Ue,N,we),qe===null?me=Ue:qe.sibling=Ue,qe=Ue,ce=ke}if(we===D.length)return a(R,ce),Re&&La(R,we),me;if(ce===null){for(;we<D.length;we++)ce=Z(R,D[we],J),ce!==null&&(N=c(ce,N,we),qe===null?me=ce:qe.sibling=ce,qe=ce);return Re&&La(R,we),me}for(ce=s(ce);we<D.length;we++)ke=V(ce,R,we,D[we],J),ke!==null&&(e&&ke.alternate!==null&&ce.delete(ke.key===null?we:ke.key),N=c(ke,N,we),qe===null?me=ke:qe.sibling=ke,qe=ke);return e&&ce.forEach(function(An){return t(R,An)}),Re&&La(R,we),me}function pe(R,N,D,J){if(D==null)throw Error(l(151));for(var me=null,qe=null,ce=N,we=N=0,ke=null,Ue=D.next();ce!==null&&!Ue.done;we++,Ue=D.next()){ce.index>we?(ke=ce,ce=null):ke=ce.sibling;var An=U(R,ce,Ue.value,J);if(An===null){ce===null&&(ce=ke);break}e&&ce&&An.alternate===null&&t(R,ce),N=c(An,N,we),qe===null?me=An:qe.sibling=An,qe=An,ce=ke}if(Ue.done)return a(R,ce),Re&&La(R,we),me;if(ce===null){for(;!Ue.done;we++,Ue=D.next())Ue=Z(R,Ue.value,J),Ue!==null&&(N=c(Ue,N,we),qe===null?me=Ue:qe.sibling=Ue,qe=Ue);return Re&&La(R,we),me}for(ce=s(ce);!Ue.done;we++,Ue=D.next())Ue=V(ce,R,we,Ue.value,J),Ue!==null&&(e&&Ue.alternate!==null&&ce.delete(Ue.key===null?we:Ue.key),N=c(Ue,N,we),qe===null?me=Ue:qe.sibling=Ue,qe=Ue);return e&&ce.forEach(function(mg){return t(R,mg)}),Re&&La(R,we),me}function Ge(R,N,D,J){if(typeof D=="object"&&D!==null&&D.type===O&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case w:e:{for(var me=D.key;N!==null;){if(N.key===me){if(me=D.type,me===O){if(N.tag===7){a(R,N.sibling),J=u(N,D.props.children),J.return=R,R=J;break e}}else if(N.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Y&&Xn(me)===N.type){a(R,N.sibling),J=u(N,D.props),Ni(J,D),J.return=R,R=J;break e}a(R,N);break}else t(R,N);N=N.sibling}D.type===O?(J=Vn(D.props.children,R.mode,J,D.key),J.return=R,R=J):(J=Lr(D.type,D.key,D.props,null,R.mode,J),Ni(J,D),J.return=R,R=J)}return m(R);case k:e:{for(me=D.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===D.containerInfo&&N.stateNode.implementation===D.implementation){a(R,N.sibling),J=u(N,D.children||[]),J.return=R,R=J;break e}else{a(R,N);break}else t(R,N);N=N.sibling}J=qo(D,R.mode,J),J.return=R,R=J}return m(R);case Y:return D=Xn(D),Ge(R,N,D,J)}if(ge(D))return le(R,N,D,J);if(se(D)){if(me=se(D),typeof me!="function")throw Error(l(150));return D=me.call(D),pe(R,N,D,J)}if(typeof D.then=="function")return Ge(R,N,Yr(D),J);if(D.$$typeof===L)return Ge(R,N,$r(R,D),J);Qr(R,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,N!==null&&N.tag===6?(a(R,N.sibling),J=u(N,D),J.return=R,R=J):(a(R,N),J=Do(D,R.mode,J),J.return=R,R=J),m(R)):a(R,N)}return function(R,N,D,J){try{Oi=0;var me=Ge(R,N,D,J);return ks=null,me}catch(ce){if(ce===Cs||ce===Gr)throw ce;var qe=Qt(29,ce,null,R.mode);return qe.lanes=J,qe.return=R,qe}finally{}}}var Pn=ih(!0),rh=ih(!1),cn=!1;function Xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Me&2)!==0){var u=s.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),s.pending=t,t=Mr(e),Gd(e,null,a),t}return Ur(e,s,t,a),Mr(e)}function Ci(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,qn(e,a)}}function Po(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=m:c=c.next=m,a=a.next}while(a!==null);c===null?u=c=t:c=c.next=t}else u=c=t;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Zo=!1;function ki(){if(Zo){var e=Ns;if(e!==null)throw e}}function Ri(e,t,a,s){Zo=!1;var u=e.updateQueue;cn=!1;var c=u.firstBaseUpdate,m=u.lastBaseUpdate,g=u.shared.pending;if(g!==null){u.shared.pending=null;var E=g,q=E.next;E.next=null,m===null?c=q:m.next=q,m=E;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,g=Q.lastBaseUpdate,g!==m&&(g===null?Q.firstBaseUpdate=q:g.next=q,Q.lastBaseUpdate=E))}if(c!==null){var Z=u.baseState;m=0,Q=q=E=null,g=c;do{var U=g.lane&-536870913,V=U!==g.lane;if(V?(Ce&U)===U:(s&U)===U){U!==0&&U===Os&&(Zo=!0),Q!==null&&(Q=Q.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var le=e,pe=g;U=t;var Ge=a;switch(pe.tag){case 1:if(le=pe.payload,typeof le=="function"){Z=le.call(Ge,Z,U);break e}Z=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=pe.payload,U=typeof le=="function"?le.call(Ge,Z,U):le,U==null)break e;Z=j({},Z,U);break e;case 2:cn=!0}}U=g.callback,U!==null&&(e.flags|=64,V&&(e.flags|=8192),V=u.callbacks,V===null?u.callbacks=[U]:V.push(U))}else V={lane:U,tag:g.tag,payload:g.payload,callback:g.callback,next:null},Q===null?(q=Q=V,E=Z):Q=Q.next=V,m|=U;if(g=g.next,g===null){if(g=u.shared.pending,g===null)break;V=g,g=V.next,V.next=null,u.lastBaseUpdate=V,u.shared.pending=null}}while(!0);Q===null&&(E=Z),u.baseState=E,u.firstBaseUpdate=q,u.lastBaseUpdate=Q,c===null&&(u.shared.lanes=0),yn|=m,e.lanes=m,e.memoizedState=Z}}function lh(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function oh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)lh(a[e],t)}var Rs=x(null),Xr=x(0);function uh(e,t){e=Pa,te(Xr,e),te(Rs,t),Pa=e|t.baseLanes}function Io(){te(Xr,Pa),te(Rs,Rs.current)}function Fo(){Pa=Xr.current,H(Rs),H(Xr)}var Xt=x(null),da=null;function fn(e){var t=e.alternate;te(st,st.current&1),te(Xt,e),da===null&&(t===null||Rs.current!==null||t.memoizedState!==null)&&(da=e)}function Wo(e){te(st,st.current),te(Xt,e),da===null&&(da=e)}function ch(e){e.tag===22?(te(st,st.current),te(Xt,e),da===null&&(da=e)):mn()}function mn(){te(st,st.current),te(Xt,Xt.current)}function Jt(e){H(Xt),da===e&&(da=null),H(st)}var st=x(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ic(a)||rc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=0,je=null,$e=null,lt=null,Pr=!1,zs=!1,Zn=!1,Zr=0,zi=0,Ds=null,sy=0;function tt(){throw Error(l(321))}function eu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Yt(e[a],t[a]))return!1;return!0}function tu(e,t,a,s,u,c){return $a=c,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$.H=e===null||e.memoizedState===null?Xh:vu,Zn=!1,c=a(s,u),Zn=!1,zs&&(c=hh(t,a,s,u)),dh(e),c}function dh(e){$.H=Ui;var t=$e!==null&&$e.next!==null;if($a=0,lt=$e=je=null,Pr=!1,zi=0,Ds=null,t)throw Error(l(300));e===null||ot||(e=e.dependencies,e!==null&&Hr(e)&&(ot=!0))}function hh(e,t,a,s){je=e;var u=0;do{if(zs&&(Ds=null),zi=0,zs=!1,25<=u)throw Error(l(301));if(u+=1,lt=$e=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}$.H=Jh,c=t(a,s)}while(zs);return c}function iy(){var e=$.H,t=e.useState()[0];return t=typeof t.then=="function"?Di(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(je.flags|=1024),t}function au(){var e=Zr!==0;return Zr=0,e}function nu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function su(e){if(Pr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pr=!1}$a=0,lt=$e=je=null,zs=!1,zi=Zr=0,Ds=null}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?je.memoizedState=lt=e:lt=lt.next=e,lt}function it(){if($e===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=lt===null?je.memoizedState:lt.next;if(t!==null)lt=t,$e=e;else{if(e===null)throw je.alternate===null?Error(l(467)):Error(l(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},lt===null?je.memoizedState=lt=e:lt=lt.next=e}return lt}function Ir(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Di(e){var t=zi;return zi+=1,Ds===null&&(Ds=[]),e=ah(Ds,e,t),t=je,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,$.H=t===null||t.memoizedState===null?Xh:vu),e}function Fr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Di(e);if(e.$$typeof===L)return bt(e)}throw Error(l(438,String(e)))}function iu(e){var t=null,a=je.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=je.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ir(),je.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=Te;return t.index++,a}function Va(e,t){return typeof t=="function"?t(e):t}function Wr(e){var t=it();return ru(t,$e,e)}function ru(e,t,a){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=a;var u=e.baseQueue,c=s.pending;if(c!==null){if(u!==null){var m=u.next;u.next=c.next,c.next=m}t.baseQueue=u=c,s.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{t=u.next;var g=m=null,E=null,q=t,Q=!1;do{var Z=q.lane&-536870913;if(Z!==q.lane?(Ce&Z)===Z:($a&Z)===Z){var U=q.revertLane;if(U===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Z===Os&&(Q=!0);else if(($a&U)===U){q=q.next,U===Os&&(Q=!0);continue}else Z={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},E===null?(g=E=Z,m=c):E=E.next=Z,je.lanes|=U,yn|=U;Z=q.action,Zn&&a(c,Z),c=q.hasEagerState?q.eagerState:a(c,Z)}else U={lane:Z,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},E===null?(g=E=U,m=c):E=E.next=U,je.lanes|=Z,yn|=Z;q=q.next}while(q!==null&&q!==t);if(E===null?m=c:E.next=g,!Yt(c,e.memoizedState)&&(ot=!0,Q&&(a=Ns,a!==null)))throw a;e.memoizedState=c,e.baseState=m,e.baseQueue=E,s.lastRenderedState=c}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function lu(e){var t=it(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,c=t.memoizedState;if(u!==null){a.pending=null;var m=u=u.next;do c=e(c,m.action),m=m.next;while(m!==u);Yt(c,t.memoizedState)||(ot=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,s]}function fh(e,t,a){var s=je,u=it(),c=Re;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=t();var m=!Yt(($e||u).memoizedState,a);if(m&&(u.memoizedState=a,ot=!0),u=u.queue,cu(vh.bind(null,s,u,e),[e]),u.getSnapshot!==t||m||lt!==null&&lt.memoizedState.tag&1){if(s.flags|=2048,qs(9,{destroy:void 0},ph.bind(null,s,u,a,t),null),Ye===null)throw Error(l(349));c||($a&127)!==0||mh(s,t,a)}return a}function mh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=je.updateQueue,t===null?(t=Ir(),je.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ph(e,t,a,s){t.value=a,t.getSnapshot=s,yh(t)&&gh(e)}function vh(e,t,a){return a(function(){yh(t)&&gh(e)})}function yh(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Yt(e,a)}catch{return!0}}function gh(e){var t=$n(e,2);t!==null&&Ht(t,e,2)}function ou(e){var t=Rt();if(typeof e=="function"){var a=e;if(e=a(),Zn){Kt(!0);try{a()}finally{Kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},t}function bh(e,t,a,s){return e.baseState=a,ru(e,$e,typeof s=="function"?s:Va)}function ry(e,t,a,s,u){if(al(e))throw Error(l(485));if(e=t.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};$.T!==null?a(!0):c.isTransition=!1,s(c),a=t.pending,a===null?(c.next=t.pending=c,_h(t,c)):(c.next=a.next,t.pending=a.next=c)}}function _h(e,t){var a=t.action,s=t.payload,u=e.state;if(t.isTransition){var c=$.T,m={};$.T=m;try{var g=a(u,s),E=$.S;E!==null&&E(m,g),xh(e,t,g)}catch(q){uu(e,t,q)}finally{c!==null&&m.types!==null&&(c.types=m.types),$.T=c}}else try{c=a(u,s),xh(e,t,c)}catch(q){uu(e,t,q)}}function xh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){jh(e,t,s)},function(s){return uu(e,t,s)}):jh(e,t,a)}function jh(e,t,a){t.status="fulfilled",t.value=a,Sh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,_h(e,a)))}function uu(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,Sh(t),t=t.next;while(t!==s)}e.action=null}function Sh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wh(e,t){return t}function Eh(e,t){if(Re){var a=Ye.formState;if(a!==null){e:{var s=je;if(Re){if(Ie){t:{for(var u=Ie,c=ca;u.nodeType!==8;){if(!c){u=null;break t}if(u=ha(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ie=ha(u.nextSibling),s=u.data==="F!";break e}}on(s)}s=!1}s&&(t=a[0])}}return a=Rt(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wh,lastRenderedState:t},a.queue=s,a=Kh.bind(null,je,s),s.dispatch=a,s=ou(!1),c=pu.bind(null,je,!1,s.queue),s=Rt(),u={state:t,dispatch:null,action:e,pending:null},s.queue=u,a=ry.bind(null,je,u,c,a),u.dispatch=a,s.memoizedState=e,[t,a,!1]}function Th(e){var t=it();return Ah(t,$e,e)}function Ah(e,t,a){if(t=ru(e,t,wh)[0],e=Wr(Va)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Di(t)}catch(m){throw m===Cs?Gr:m}else s=t;t=it();var u=t.queue,c=u.dispatch;return a!==t.memoizedState&&(je.flags|=2048,qs(9,{destroy:void 0},ly.bind(null,u,a),null)),[s,c,e]}function ly(e,t){e.action=t}function Oh(e){var t=it(),a=$e;if(a!==null)return Ah(t,a,e);it(),t=t.memoizedState,a=it();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function qs(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=je.updateQueue,t===null&&(t=Ir(),je.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function Nh(){return it().memoizedState}function el(e,t,a,s){var u=Rt();je.flags|=e,u.memoizedState=qs(1|t,{destroy:void 0},a,s===void 0?null:s)}function tl(e,t,a,s){var u=it();s=s===void 0?null:s;var c=u.memoizedState.inst;$e!==null&&s!==null&&eu(s,$e.memoizedState.deps)?u.memoizedState=qs(t,c,a,s):(je.flags|=e,u.memoizedState=qs(1|t,c,a,s))}function Ch(e,t){el(8390656,8,e,t)}function cu(e,t){tl(2048,8,e,t)}function oy(e){je.flags|=4;var t=je.updateQueue;if(t===null)t=Ir(),je.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function kh(e){var t=it().memoizedState;return oy({ref:t,nextImpl:e}),function(){if((Me&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Rh(e,t){return tl(4,2,e,t)}function zh(e,t){return tl(4,4,e,t)}function Dh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qh(e,t,a){a=a!=null?a.concat([e]):null,tl(4,4,Dh.bind(null,t,e),a)}function du(){}function Uh(e,t){var a=it();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&eu(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function Mh(e,t){var a=it();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&eu(t,s[1]))return s[0];if(s=e(),Zn){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[s,t],s}function hu(e,t,a){return a===void 0||($a&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Bf(),je.lanes|=e,yn|=e,a)}function Lh(e,t,a,s){return Yt(a,t)?a:Rs.current!==null?(e=hu(e,a,s),Yt(e,t)||(ot=!0),e):($a&42)===0||($a&1073741824)!==0&&(Ce&261930)===0?(ot=!0,e.memoizedState=a):(e=Bf(),je.lanes|=e,yn|=e,t)}function Bh(e,t,a,s,u){var c=ee.p;ee.p=c!==0&&8>c?c:8;var m=$.T,g={};$.T=g,pu(e,!1,t,a);try{var E=u(),q=$.S;if(q!==null&&q(g,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var Q=ny(E,s);qi(e,t,Q,It(e))}else qi(e,t,s,It(e))}catch(Z){qi(e,t,{then:function(){},status:"rejected",reason:Z},It())}finally{ee.p=c,m!==null&&g.types!==null&&(m.types=g.types),$.T=m}}function uy(){}function fu(e,t,a,s){if(e.tag!==5)throw Error(l(476));var u=Hh(e).queue;Bh(e,u,t,oe,a===null?uy:function(){return $h(e),a(s)})}function Hh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:oe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $h(e){var t=Hh(e);t.next===null&&(t=e.alternate.memoizedState),qi(e,t.next.queue,{},It())}function mu(){return bt(Fi)}function Vh(){return it().memoizedState}function Gh(){return it().memoizedState}function cy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=It();e=dn(a);var s=hn(t,e,a);s!==null&&(Ht(s,t,a),Ci(s,t,a)),t={cache:Go()},e.payload=t;return}t=t.return}}function dy(e,t,a){var s=It();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},al(e)?Yh(t,a):(a=Ro(e,t,a,s),a!==null&&(Ht(a,e,s),Qh(a,t,s)))}function Kh(e,t,a){var s=It();qi(e,t,a,s)}function qi(e,t,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(al(e))Yh(t,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,g=c(m,a);if(u.hasEagerState=!0,u.eagerState=g,Yt(g,m))return Ur(e,t,u,0),Ye===null&&qr(),!1}catch{}finally{}if(a=Ro(e,t,u,s),a!==null)return Ht(a,e,s),Qh(a,t,s),!0}return!1}function pu(e,t,a,s){if(s={lane:2,revertLane:Xu(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},al(e)){if(t)throw Error(l(479))}else t=Ro(e,a,s,2),t!==null&&Ht(t,e,2)}function al(e){var t=e.alternate;return e===je||t!==null&&t===je}function Yh(e,t){zs=Pr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Qh(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,qn(e,a)}}var Ui={readContext:bt,use:Fr,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};Ui.useEffectEvent=tt;var Xh={readContext:bt,use:Fr,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Ch,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,el(4194308,4,Dh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){el(4,2,e,t)},useMemo:function(e,t){var a=Rt();t=t===void 0?null:t;var s=e();if(Zn){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=Rt();if(a!==void 0){var u=a(t);if(Zn){Kt(!0);try{a(t)}finally{Kt(!1)}}}else u=t;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=dy.bind(null,je,e),[s.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:function(e){e=ou(e);var t=e.queue,a=Kh.bind(null,je,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:du,useDeferredValue:function(e,t){var a=Rt();return hu(a,e,t)},useTransition:function(){var e=ou(!1);return e=Bh.bind(null,je,e.queue,!0,!1),Rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=je,u=Rt();if(Re){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),Ye===null)throw Error(l(349));(Ce&127)!==0||mh(s,t,a)}u.memoizedState=a;var c={value:a,getSnapshot:t};return u.queue=c,Ch(vh.bind(null,s,c,e),[e]),s.flags|=2048,qs(9,{destroy:void 0},ph.bind(null,s,c,a,t),null),a},useId:function(){var e=Rt(),t=Ye.identifierPrefix;if(Re){var a=Aa,s=Ta;a=(s&~(1<<32-ht(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Zr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=sy++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:mu,useFormState:Eh,useActionState:Eh,useOptimistic:function(e){var t=Rt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=pu.bind(null,je,!0,a),a.dispatch=t,[e,t]},useMemoCache:iu,useCacheRefresh:function(){return Rt().memoizedState=cy.bind(null,je)},useEffectEvent:function(e){var t=Rt(),a={impl:e};return t.memoizedState=a,function(){if((Me&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},vu={readContext:bt,use:Fr,useCallback:Uh,useContext:bt,useEffect:cu,useImperativeHandle:qh,useInsertionEffect:Rh,useLayoutEffect:zh,useMemo:Mh,useReducer:Wr,useRef:Nh,useState:function(){return Wr(Va)},useDebugValue:du,useDeferredValue:function(e,t){var a=it();return Lh(a,$e.memoizedState,e,t)},useTransition:function(){var e=Wr(Va)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Di(e),t]},useSyncExternalStore:fh,useId:Vh,useHostTransitionStatus:mu,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var a=it();return bh(a,$e,e,t)},useMemoCache:iu,useCacheRefresh:Gh};vu.useEffectEvent=kh;var Jh={readContext:bt,use:Fr,useCallback:Uh,useContext:bt,useEffect:cu,useImperativeHandle:qh,useInsertionEffect:Rh,useLayoutEffect:zh,useMemo:Mh,useReducer:lu,useRef:Nh,useState:function(){return lu(Va)},useDebugValue:du,useDeferredValue:function(e,t){var a=it();return $e===null?hu(a,e,t):Lh(a,$e.memoizedState,e,t)},useTransition:function(){var e=lu(Va)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Di(e),t]},useSyncExternalStore:fh,useId:Vh,useHostTransitionStatus:mu,useFormState:Oh,useActionState:Oh,useOptimistic:function(e,t){var a=it();return $e!==null?bh(a,$e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:iu,useCacheRefresh:Gh};Jh.useEffectEvent=kh;function yu(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gu={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=It(),u=dn(s);u.payload=t,a!=null&&(u.callback=a),t=hn(e,u,s),t!==null&&(Ht(t,e,s),Ci(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=It(),u=dn(s);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=hn(e,u,s),t!==null&&(Ht(t,e,s),Ci(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=It(),s=dn(a);s.tag=2,t!=null&&(s.callback=t),t=hn(e,s,a),t!==null&&(Ht(t,e,a),Ci(t,e,a))}};function Ph(e,t,a,s,u,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,m):t.prototype&&t.prototype.isPureReactComponent?!ji(a,s)||!ji(u,c):!0}function Zh(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&gu.enqueueReplaceState(t,t.state,null)}function In(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Ih(e){Dr(e)}function Fh(e){console.error(e)}function Wh(e){Dr(e)}function nl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function ef(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bu(e,t,a){return a=dn(a),a.tag=3,a.payload={element:null},a.callback=function(){nl(e,t)},a}function tf(e){return e=dn(e),e.tag=3,e}function af(e,t,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;e.payload=function(){return u(c)},e.callback=function(){ef(t,a,s)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){ef(t,a,s),typeof u!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var g=s.stack;this.componentDidCatch(s.value,{componentStack:g!==null?g:""})})}function hy(e,t,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&As(t,a,u,!0),a=Xt.current,a!==null){switch(a.tag){case 31:case 13:return da===null?pl():a.alternate===null&&at===0&&(at=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Kr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),Ku(e,s,u)),!1;case 22:return a.flags|=65536,s===Kr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),Ku(e,s,u)),!1}throw Error(l(435,a.tag))}return Ku(e,s,u),pl(),!1}if(Re)return t=Xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,s!==Lo&&(e=Error(l(422),{cause:s}),Ei(la(e,a)))):(s!==Lo&&(t=Error(l(423),{cause:s}),Ei(la(t,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=la(s,a),u=bu(e.stateNode,s,u),Po(e,u),at!==4&&(at=2)),!1;var c=Error(l(520),{cause:s});if(c=la(c,a),Ki===null?Ki=[c]:Ki.push(c),at!==4&&(at=2),t===null)return!0;s=la(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bu(a.stateNode,s,e),Po(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(gn===null||!gn.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tf(u),af(u,e,a,s),Po(a,u),!1}a=a.return}while(a!==null);return!1}var _u=Error(l(461)),ot=!1;function _t(e,t,a,s){t.child=e===null?rh(t,null,a,s):Pn(t,e.child,a,s)}function nf(e,t,a,s,u){a=a.render;var c=t.ref;if("ref"in s){var m={};for(var g in s)g!=="ref"&&(m[g]=s[g])}else m=s;return Yn(t),s=tu(e,t,a,m,c,u),g=au(),e!==null&&!ot?(nu(e,t,u),Ga(e,t,u)):(Re&&g&&Uo(t),t.flags|=1,_t(e,t,s,u),t.child)}function sf(e,t,a,s,u){if(e===null){var c=a.type;return typeof c=="function"&&!zo(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,rf(e,t,c,s,u)):(e=Lr(a.type,null,s,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Ou(e,u)){var m=c.memoizedProps;if(a=a.compare,a=a!==null?a:ji,a(m,s)&&e.ref===t.ref)return Ga(e,t,u)}return t.flags|=1,e=Ma(c,s),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,a,s,u){if(e!==null){var c=e.memoizedProps;if(ji(c,s)&&e.ref===t.ref)if(ot=!1,t.pendingProps=s=c,Ou(e,u))(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Ga(e,t,u)}return xu(e,t,a,s,u)}function lf(e,t,a,s){var u=s.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(s=t.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,t.child=null;return of(e,t,c,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vr(t,c!==null?c.cachePool:null),c!==null?uh(t,c):Io(),ch(t);else return s=t.lanes=536870912,of(e,t,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Vr(t,c.cachePool),uh(t,c),mn(),t.memoizedState=null):(e!==null&&Vr(t,null),Io(),mn());return _t(e,t,u,a),t.child}function Mi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function of(e,t,a,s,u){var c=Yo();return c=c===null?null:{parent:rt._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&Vr(t,null),Io(),ch(t),e!==null&&As(e,t,s,!0),t.childLanes=u,null}function sl(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uf(e,t,a){return Pn(t,e.child,null,a),e=sl(t,t.pendingProps),e.flags|=2,Jt(t),t.memoizedState=null,e}function fy(e,t,a){var s=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Re){if(s.mode==="hidden")return e=sl(t,s),t.lanes=536870912,Mi(null,e);if(Wo(t),(e=Ie)?(e=xm(e,ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rn!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},a=Yd(e),a.return=t,t.child=a,gt=t,Ie=null)):e=null,e===null)throw on(t);return t.lanes=536870912,null}return sl(t,s)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(Wo(t),u)if(t.flags&256)t.flags&=-257,t=uf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(ot||As(e,t,a,!1),u=(a&e.childLanes)!==0,ot||u){if(s=Ye,s!==null&&(m=Un(s,a),m!==0&&m!==c.retryLane))throw c.retryLane=m,$n(e,m),Ht(s,e,m),_u;pl(),t=uf(e,t,a)}else e=c.treeContext,Ie=ha(m.nextSibling),gt=t,Re=!0,ln=null,ca=!1,e!==null&&Jd(t,e),t=sl(t,s),t.flags|=4096;return t}return e=Ma(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function il(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function xu(e,t,a,s,u){return Yn(t),a=tu(e,t,a,s,void 0,u),s=au(),e!==null&&!ot?(nu(e,t,u),Ga(e,t,u)):(Re&&s&&Uo(t),t.flags|=1,_t(e,t,a,u),t.child)}function cf(e,t,a,s,u,c){return Yn(t),t.updateQueue=null,a=hh(t,s,a,u),dh(e),s=au(),e!==null&&!ot?(nu(e,t,c),Ga(e,t,c)):(Re&&s&&Uo(t),t.flags|=1,_t(e,t,a,c),t.child)}function df(e,t,a,s,u){if(Yn(t),t.stateNode===null){var c=Ss,m=a.contextType;typeof m=="object"&&m!==null&&(c=bt(m)),c=new a(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=gu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},Xo(t),m=a.contextType,c.context=typeof m=="object"&&m!==null?bt(m):Ss,c.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(yu(t,a,m,s),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&gu.enqueueReplaceState(c,c.state,null),Ri(t,s,c,u),ki(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var g=t.memoizedProps,E=In(a,g);c.props=E;var q=c.context,Q=a.contextType;m=Ss,typeof Q=="object"&&Q!==null&&(m=bt(Q));var Z=a.getDerivedStateFromProps;Q=typeof Z=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,Q||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||q!==m)&&Zh(t,c,s,m),cn=!1;var U=t.memoizedState;c.state=U,Ri(t,s,c,u),ki(),q=t.memoizedState,g||U!==q||cn?(typeof Z=="function"&&(yu(t,a,Z,s),q=t.memoizedState),(E=cn||Ph(t,a,E,s,U,q,m))?(Q||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=q),c.props=s,c.state=q,c.context=m,s=E):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,Jo(e,t),m=t.memoizedProps,Q=In(a,m),c.props=Q,Z=t.pendingProps,U=c.context,q=a.contextType,E=Ss,typeof q=="object"&&q!==null&&(E=bt(q)),g=a.getDerivedStateFromProps,(q=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==Z||U!==E)&&Zh(t,c,s,E),cn=!1,U=t.memoizedState,c.state=U,Ri(t,s,c,u),ki();var V=t.memoizedState;m!==Z||U!==V||cn||e!==null&&e.dependencies!==null&&Hr(e.dependencies)?(typeof g=="function"&&(yu(t,a,g,s),V=t.memoizedState),(Q=cn||Ph(t,a,Q,s,U,V,E)||e!==null&&e.dependencies!==null&&Hr(e.dependencies))?(q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,V,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,V,E)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=V),c.props=s,c.state=V,c.context=E,s=Q):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,il(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=Pn(t,e.child,null,u),t.child=Pn(t,null,a,u)):_t(e,t,a,u),t.memoizedState=c.state,e=t.child):e=Ga(e,t,u),e}function hf(e,t,a,s){return Gn(),t.flags|=256,_t(e,t,a,s),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Su(e){return{baseLanes:e,cachePool:eh()}}function wu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Zt),e}function ff(e,t,a){var s=t.pendingProps,u=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(st.current&2)!==0),m&&(u=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(u?fn(t):mn(),(e=Ie)?(e=xm(e,ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:rn!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},a=Yd(e),a.return=t,t.child=a,gt=t,Ie=null)):e=null,e===null)throw on(t);return rc(e)?t.lanes=32:t.lanes=536870912,null}var g=s.children;return s=s.fallback,u?(mn(),u=t.mode,g=rl({mode:"hidden",children:g},u),s=Vn(s,u,a,null),g.return=t,s.return=t,g.sibling=s,t.child=g,s=t.child,s.memoizedState=Su(a),s.childLanes=wu(e,m,a),t.memoizedState=ju,Mi(null,s)):(fn(t),Eu(t,g))}var E=e.memoizedState;if(E!==null&&(g=E.dehydrated,g!==null)){if(c)t.flags&256?(fn(t),t.flags&=-257,t=Tu(e,t,a)):t.memoizedState!==null?(mn(),t.child=e.child,t.flags|=128,t=null):(mn(),g=s.fallback,u=t.mode,s=rl({mode:"visible",children:s.children},u),g=Vn(g,u,a,null),g.flags|=2,s.return=t,g.return=t,s.sibling=g,t.child=s,Pn(t,e.child,null,a),s=t.child,s.memoizedState=Su(a),s.childLanes=wu(e,m,a),t.memoizedState=ju,t=Mi(null,s));else if(fn(t),rc(g)){if(m=g.nextSibling&&g.nextSibling.dataset,m)var q=m.dgst;m=q,s=Error(l(419)),s.stack="",s.digest=m,Ei({value:s,source:null,stack:null}),t=Tu(e,t,a)}else if(ot||As(e,t,a,!1),m=(a&e.childLanes)!==0,ot||m){if(m=Ye,m!==null&&(s=Un(m,a),s!==0&&s!==E.retryLane))throw E.retryLane=s,$n(e,s),Ht(m,e,s),_u;ic(g)||pl(),t=Tu(e,t,a)}else ic(g)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Ie=ha(g.nextSibling),gt=t,Re=!0,ln=null,ca=!1,e!==null&&Jd(t,e),t=Eu(t,s.children),t.flags|=4096);return t}return u?(mn(),g=s.fallback,u=t.mode,E=e.child,q=E.sibling,s=Ma(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&65011712,q!==null?g=Ma(q,g):(g=Vn(g,u,a,null),g.flags|=2),g.return=t,s.return=t,s.sibling=g,t.child=s,Mi(null,s),s=t.child,g=e.child.memoizedState,g===null?g=Su(a):(u=g.cachePool,u!==null?(E=rt._currentValue,u=u.parent!==E?{parent:E,pool:E}:u):u=eh(),g={baseLanes:g.baseLanes|a,cachePool:u}),s.memoizedState=g,s.childLanes=wu(e,m,a),t.memoizedState=ju,Mi(e.child,s)):(fn(t),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function Eu(e,t){return t=rl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=Qt(22,e,null,t),e.lanes=0,e}function Tu(e,t,a){return Pn(t,e.child,null,a),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),$o(e.return,t,a)}function Au(e,t,a,s,u,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=u,m.treeForkCount=c)}function pf(e,t,a){var s=t.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var m=st.current,g=(m&2)!==0;if(g?(m=m&1|2,t.flags|=128):m&=1,te(st,m),_t(e,t,s,a),s=Re?wi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mf(e,a,t);else if(e.tag===19)mf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=t.child,u=null;a!==null;)e=a.alternate,e!==null&&Jr(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),Au(t,!1,u,a,c,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Jr(e)===null){t.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Au(t,!0,a,null,c,s);break;case"together":Au(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function Ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(As(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=Ma(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ou(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hr(e)))}function my(e,t,a){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),un(t,rt,e.memoizedState.cache),Gn();break;case 27:case 5:ze(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Wo(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(fn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ff(e,t,a):(fn(t),e=Ga(e,t,a),e!==null?e.sibling:null);fn(t);break;case 19:var u=(e.flags&128)!==0;if(s=(a&t.childLanes)!==0,s||(As(e,t,a,!1),s=(a&t.childLanes)!==0),u){if(s)return pf(e,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),te(st,st.current),s)break;return null;case 22:return t.lanes=0,lf(e,t,a,t.pendingProps);case 24:un(t,rt,e.memoizedState.cache)}return Ga(e,t,a)}function vf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ot=!0;else{if(!Ou(e,a)&&(t.flags&128)===0)return ot=!1,my(e,t,a);ot=(e.flags&131072)!==0}else ot=!1,Re&&(t.flags&1048576)!==0&&Xd(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Xn(t.elementType),t.type=e,typeof e=="function")zo(e)?(s=In(e,s),t.tag=1,t=df(null,t,e,s,a)):(t.tag=0,t=xu(null,t,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===X){t.tag=11,t=nf(null,t,e,s,a);break e}else if(u===I){t.tag=14,t=sf(null,t,e,s,a);break e}}throw t=F(e)||e,Error(l(306,t,""))}}return t;case 0:return xu(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,u=In(s,t.pendingProps),df(e,t,s,u,a);case 3:e:{if(W(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var c=t.memoizedState;u=c.element,Jo(e,t),Ri(t,s,null,a);var m=t.memoizedState;if(s=m.cache,un(t,rt,s),s!==c.cache&&Vo(t,[rt],a,!0),ki(),s=m.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=hf(e,t,s,a);break e}else if(s!==u){u=la(Error(l(424)),t),Ei(u),t=hf(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ie=ha(e.firstChild),gt=t,Re=!0,ln=null,ca=!0,a=rh(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gn(),s===u){t=Ga(e,t,a);break e}_t(e,t,s,a)}t=t.child}return t;case 26:return il(e,t),e===null?(a=Am(t.type,null,t.pendingProps,null))?t.memoizedState=a:Re||(a=t.type,e=t.pendingProps,s=jl(de.current).createElement(a),s[He]=t,s[b]=e,xt(s,a,e),pt(s),t.stateNode=s):t.memoizedState=Am(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ze(t),e===null&&Re&&(s=t.stateNode=wm(t.type,t.pendingProps,de.current),gt=t,ca=!0,u=Ie,jn(t.type)?(lc=u,Ie=ha(s.firstChild)):Ie=u),_t(e,t,t.pendingProps.children,a),il(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((u=s=Ie)&&(s=Ky(s,t.type,t.pendingProps,ca),s!==null?(t.stateNode=s,gt=t,Ie=ha(s.firstChild),ca=!1,u=!0):u=!1),u||on(t)),ze(t),u=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,s=c.children,ac(u,c)?s=null:m!==null&&ac(u,m)&&(t.flags|=32),t.memoizedState!==null&&(u=tu(e,t,iy,null,null,a),Fi._currentValue=u),il(e,t),_t(e,t,s,a),t.child;case 6:return e===null&&Re&&((e=a=Ie)&&(a=Yy(a,t.pendingProps,ca),a!==null?(t.stateNode=a,gt=t,Ie=null,e=!0):e=!1),e||on(t)),null;case 13:return ff(e,t,a);case 4:return W(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Pn(t,null,s,a):_t(e,t,s,a),t.child;case 11:return nf(e,t,t.type,t.pendingProps,a);case 7:return _t(e,t,t.pendingProps,a),t.child;case 8:return _t(e,t,t.pendingProps.children,a),t.child;case 12:return _t(e,t,t.pendingProps.children,a),t.child;case 10:return s=t.pendingProps,un(t,t.type,s.value),_t(e,t,s.children,a),t.child;case 9:return u=t.type._context,s=t.pendingProps.children,Yn(t),u=bt(u),s=s(u),t.flags|=1,_t(e,t,s,a),t.child;case 14:return sf(e,t,t.type,t.pendingProps,a);case 15:return rf(e,t,t.type,t.pendingProps,a);case 19:return pf(e,t,a);case 31:return fy(e,t,a);case 22:return lf(e,t,a,t.pendingProps);case 24:return Yn(t),s=bt(rt),e===null?(u=Yo(),u===null&&(u=Ye,c=Go(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),t.memoizedState={parent:s,cache:u},Xo(t),un(t,rt,u)):((e.lanes&a)!==0&&(Jo(e,t),Ri(t,null,null,a),ki()),u=e.memoizedState,c=t.memoizedState,u.parent!==s?(u={parent:s,cache:s},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),un(t,rt,s)):(s=c.cache,un(t,rt,s),s!==u.cache&&Vo(t,[rt],a,!0))),_t(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Ka(e){e.flags|=4}function Nu(e,t,a,s,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Gf())e.flags|=8192;else throw Jn=Kr,Qo}else e.flags&=-16777217}function yf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rm(t))if(Gf())e.flags|=8192;else throw Jn=Kr,Qo}function ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fi():536870912,e.lanes|=t,Bs|=t)}function Li(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function py(e,t,a){var s=t.pendingProps;switch(Mo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Ha(rt),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ts(t)?Ka(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bo())),Fe(t),null;case 26:var u=t.type,c=t.memoizedState;return e===null?(Ka(t),c!==null?(Fe(t),yf(t,c)):(Fe(t),Nu(t,u,null,s,a))):c?c!==e.memoizedState?(Ka(t),Fe(t),yf(t,c)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ka(t),Fe(t),Nu(t,u,e,s,a)),null;case 27:if(zt(t),a=de.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Ka(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Fe(t),null}e=ae.current,Ts(t)?Pd(t):(e=wm(u,s,a),t.stateNode=e,Ka(t))}return Fe(t),null;case 5:if(zt(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Ka(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Fe(t),null}if(c=ae.current,Ts(t))Pd(t);else{var m=jl(de.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?m.createElement(u,{is:s.is}):m.createElement(u)}}c[He]=t,c[b]=s;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=c;e:switch(xt(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Ka(t)}}return Fe(t),Nu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Ka(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=de.current,Ts(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,u=gt,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[He]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||fm(e.nodeValue,a)),e||on(t,!0)}else e=jl(e).createTextNode(s),e[He]=t,t.stateNode=e}return Fe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=Ts(t),a!==null){if(e===null){if(!s)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[He]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else a=Bo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Jt(t),t):(Jt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Fe(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ts(t),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[He]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),u=!1}else u=Bo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Jt(t),t):(Jt(t),null)}return Jt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ll(t,t.updateQueue),Fe(t),null);case 4:return Ne(),e===null&&Iu(t.stateNode.containerInfo),Fe(t),null;case 10:return Ha(t.type),Fe(t),null;case 19:if(H(st),s=t.memoizedState,s===null)return Fe(t),null;if(u=(t.flags&128)!==0,c=s.rendering,c===null)if(u)Li(s,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Jr(e),c!==null){for(t.flags|=128,Li(s,!1),e=c.updateQueue,t.updateQueue=e,ll(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Kd(a,e),a=a.sibling;return te(st,st.current&1|2),Re&&La(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Qe()>hl&&(t.flags|=128,u=!0,Li(s,!1),t.lanes=4194304)}else{if(!u)if(e=Jr(c),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,ll(t,e),Li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Re)return Fe(t),null}else 2*Qe()-s.renderingStartTime>hl&&a!==536870912&&(t.flags|=128,u=!0,Li(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(e=s.last,e!==null?e.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,a=st.current,te(st,u?a&1|2:a&1),Re&&La(t,s.treeForkCount),e):(Fe(t),null);case 22:case 23:return Jt(t),Fo(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),a=t.updateQueue,a!==null&&ll(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&H(Qn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ha(rt),Fe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function vy(e,t){switch(Mo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ha(rt),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zt(t),null;case 31:if(t.memoizedState!==null){if(Jt(t),t.alternate===null)throw Error(l(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(st),null;case 4:return Ne(),null;case 10:return Ha(t.type),null;case 22:case 23:return Jt(t),Fo(),e!==null&&H(Qn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ha(rt),null;case 25:return null;default:return null}}function gf(e,t){switch(Mo(t),t.tag){case 3:Ha(rt),Ne();break;case 26:case 27:case 5:zt(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Jt(t);break;case 13:Jt(t);break;case 19:H(st);break;case 10:Ha(t.type);break;case 22:case 23:Jt(t),Fo(),e!==null&&H(Qn);break;case 24:Ha(rt)}}function Bi(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var c=a.create,m=a.inst;s=c(),m.destroy=s}a=a.next}while(a!==u)}}catch(g){Be(t,t.return,g)}}function pn(e,t,a){try{var s=t.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&e)===e){var m=s.inst,g=m.destroy;if(g!==void 0){m.destroy=void 0,u=t;var E=a,q=g;try{q()}catch(Q){Be(u,E,Q)}}}s=s.next}while(s!==c)}}catch(Q){Be(t,t.return,Q)}}function bf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{oh(t,a)}catch(s){Be(e,e.return,s)}}}function _f(e,t,a){a.props=In(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Be(e,t,s)}}function Hi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Be(e,t,u)}}function Oa(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,t,u)}else a.current=null}function xf(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Cu(e,t,a){try{var s=e.stateNode;Ly(s,e.type,a,t),s[b]=t}catch(u){Be(e,e.return,u)}}function jf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ru(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qa));else if(s!==4&&(s===27&&jn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ru(e,t,a),e=e.sibling;e!==null;)Ru(e,t,a),e=e.sibling}function ol(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(s!==4&&(s===27&&jn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ol(e,t,a),e=e.sibling;e!==null;)ol(e,t,a),e=e.sibling}function Sf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);xt(t,s,a),t[He]=e,t[b]=a}catch(c){Be(e,e.return,c)}}var Ya=!1,ut=!1,zu=!1,wf=typeof WeakSet=="function"?WeakSet:Set,vt=null;function yy(e,t){if(e=e.containerInfo,ec=Nl,e=qd(e),To(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var m=0,g=-1,E=-1,q=0,Q=0,Z=e,U=null;t:for(;;){for(var V;Z!==a||u!==0&&Z.nodeType!==3||(g=m+u),Z!==c||s!==0&&Z.nodeType!==3||(E=m+s),Z.nodeType===3&&(m+=Z.nodeValue.length),(V=Z.firstChild)!==null;)U=Z,Z=V;for(;;){if(Z===e)break t;if(U===a&&++q===u&&(g=m),U===c&&++Q===s&&(E=m),(V=Z.nextSibling)!==null)break;Z=U,U=Z.parentNode}Z=V}a=g===-1||E===-1?null:{start:g,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(tc={focusedElem:e,selectionRange:a},Nl=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,u=c.memoizedProps,c=c.memoizedState,s=a.stateNode;try{var le=In(a.type,u);e=s.getSnapshotBeforeUpdate(le,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(pe){Be(a,a.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)sc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Ef(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Xa(e,a),s&4&&Bi(5,a);break;case 1:if(Xa(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Be(a,a.return,m)}else{var u=In(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Be(a,a.return,m)}}s&64&&bf(a),s&512&&Hi(a,a.return);break;case 3:if(Xa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{oh(e,t)}catch(m){Be(a,a.return,m)}}break;case 27:t===null&&s&4&&Sf(a);case 26:case 5:Xa(e,a),t===null&&s&4&&xf(a),s&512&&Hi(a,a.return);break;case 12:Xa(e,a);break;case 31:Xa(e,a),s&4&&Of(e,a);break;case 13:Xa(e,a),s&4&&Nf(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ty.bind(null,a),Qy(e,a))));break;case 22:if(s=a.memoizedState!==null||Ya,!s){t=t!==null&&t.memoizedState!==null||ut,u=Ya;var c=ut;Ya=s,(ut=t)&&!c?Ja(e,a,(a.subtreeFlags&8772)!==0):Xa(e,a),Ya=u,ut=c}break;case 30:break;default:Xa(e,a)}}function Tf(e){var t=e.alternate;t!==null&&(e.alternate=null,Tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Ut=!1;function Qa(e,t,a){for(a=a.child;a!==null;)Af(e,t,a),a=a.sibling}function Af(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:ut||Oa(a,t),Qa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ut||Oa(a,t);var s=We,u=Ut;jn(a.type)&&(We=a.stateNode,Ut=!1),Qa(e,t,a),Pi(a.stateNode),We=s,Ut=u;break;case 5:ut||Oa(a,t);case 6:if(s=We,u=Ut,We=null,Qa(e,t,a),We=s,Ut=u,We!==null)if(Ut)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(c){Be(a,t,c)}else try{We.removeChild(a.stateNode)}catch(c){Be(a,t,c)}break;case 18:We!==null&&(Ut?(e=We,bm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Xs(e)):bm(We,a.stateNode));break;case 4:s=We,u=Ut,We=a.stateNode.containerInfo,Ut=!0,Qa(e,t,a),We=s,Ut=u;break;case 0:case 11:case 14:case 15:pn(2,a,t),ut||pn(4,a,t),Qa(e,t,a);break;case 1:ut||(Oa(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&_f(a,t,s)),Qa(e,t,a);break;case 21:Qa(e,t,a);break;case 22:ut=(s=ut)||a.memoizedState!==null,Qa(e,t,a),ut=s;break;default:Qa(e,t,a)}}function Of(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xs(e)}catch(a){Be(t,t.return,a)}}}function Nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xs(e)}catch(a){Be(t,t.return,a)}}function gy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wf),t;default:throw Error(l(435,e.tag))}}function ul(e,t){var a=gy(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var u=Ay.bind(null,e,s);s.then(u,u)}})}function Mt(e,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],c=e,m=t,g=m;e:for(;g!==null;){switch(g.tag){case 27:if(jn(g.type)){We=g.stateNode,Ut=!1;break e}break;case 5:We=g.stateNode,Ut=!1;break e;case 3:case 4:We=g.stateNode.containerInfo,Ut=!0;break e}g=g.return}if(We===null)throw Error(l(160));Af(c,m,u),We=null,Ut=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}var ga=null;function Cf(e,t){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mt(t,e),Lt(e),s&4&&(pn(3,e,e.return),Bi(3,e),pn(5,e,e.return));break;case 1:Mt(t,e),Lt(e),s&512&&(ut||a===null||Oa(a,a.return)),s&64&&Ya&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ga;if(Mt(t,e),Lt(e),s&512&&(ut||a===null||Oa(a,a.return)),s&4){var c=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":c=u.getElementsByTagName("title")[0],(!c||c[Ot]||c[He]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(s),u.head.insertBefore(c,u.querySelector("head > title"))),xt(c,s,a),c[He]=e,pt(c),s=c;break e;case"link":var m=Cm("link","href",u).get(s+(a.href||""));if(m){for(var g=0;g<m.length;g++)if(c=m[g],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(g,1);break t}}c=u.createElement(s),xt(c,s,a),u.head.appendChild(c);break;case"meta":if(m=Cm("meta","content",u).get(s+(a.content||""))){for(g=0;g<m.length;g++)if(c=m[g],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(g,1);break t}}c=u.createElement(s),xt(c,s,a),u.head.appendChild(c);break;default:throw Error(l(468,s))}c[He]=e,pt(c),s=c}e.stateNode=s}else km(u,e.type,e.stateNode);else e.stateNode=Nm(u,s,e.memoizedProps);else c!==s?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,s===null?km(u,e.type,e.stateNode):Nm(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Cu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Mt(t,e),Lt(e),s&512&&(ut||a===null||Oa(a,a.return)),a!==null&&s&4&&Cu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Mt(t,e),Lt(e),s&512&&(ut||a===null||Oa(a,a.return)),e.flags&32){u=e.stateNode;try{vs(u,"")}catch(le){Be(e,e.return,le)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Cu(e,u,a!==null?a.memoizedProps:u)),s&1024&&(zu=!0);break;case 6:if(Mt(t,e),Lt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(le){Be(e,e.return,le)}}break;case 3:if(El=null,u=ga,ga=Sl(t.containerInfo),Mt(t,e),ga=u,Lt(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Xs(t.containerInfo)}catch(le){Be(e,e.return,le)}zu&&(zu=!1,kf(e));break;case 4:s=ga,ga=Sl(e.stateNode.containerInfo),Mt(t,e),Lt(e),ga=s;break;case 12:Mt(t,e),Lt(e);break;case 31:Mt(t,e),Lt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ul(e,s)));break;case 13:Mt(t,e),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(dl=Qe()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ul(e,s)));break;case 22:u=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,q=Ya,Q=ut;if(Ya=q||u,ut=Q||E,Mt(t,e),ut=Q,Ya=q,Lt(e),s&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(a===null||E||Ya||ut||Fn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){E=a=t;try{if(c=E.stateNode,u)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{g=E.stateNode;var Z=E.memoizedProps.style,U=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;g.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(le){Be(E,E.return,le)}}}else if(t.tag===6){if(a===null){E=t;try{E.stateNode.nodeValue=u?"":E.memoizedProps}catch(le){Be(E,E.return,le)}}}else if(t.tag===18){if(a===null){E=t;try{var V=E.stateNode;u?_m(V,!0):_m(E.stateNode,!1)}catch(le){Be(E,E.return,le)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ul(e,a))));break;case 19:Mt(t,e),Lt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ul(e,s)));break;case 30:break;case 21:break;default:Mt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(jf(s)){a=s;break}s=s.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var u=a.stateNode,c=ku(e);ol(e,c,u);break;case 5:var m=a.stateNode;a.flags&32&&(vs(m,""),a.flags&=-33);var g=ku(e);ol(e,g,m);break;case 3:case 4:var E=a.stateNode.containerInfo,q=ku(e);Ru(e,q,E);break;default:throw Error(l(161))}}catch(Q){Be(e,e.return,Q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ef(e,t.alternate,t),t=t.sibling}function Fn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:pn(4,t,t.return),Fn(t);break;case 1:Oa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&_f(t,t.return,a),Fn(t);break;case 27:Pi(t.stateNode);case 26:case 5:Oa(t,t.return),Fn(t);break;case 22:t.memoizedState===null&&Fn(t);break;case 30:Fn(t);break;default:Fn(t)}e=e.sibling}}function Ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,u=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:Ja(u,c,a),Bi(4,c);break;case 1:if(Ja(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(q){Be(s,s.return,q)}if(s=c,u=s.updateQueue,u!==null){var g=s.stateNode;try{var E=u.shared.hiddenCallbacks;if(E!==null)for(u.shared.hiddenCallbacks=null,u=0;u<E.length;u++)lh(E[u],g)}catch(q){Be(s,s.return,q)}}a&&m&64&&bf(c),Hi(c,c.return);break;case 27:Sf(c);case 26:case 5:Ja(u,c,a),a&&s===null&&m&4&&xf(c),Hi(c,c.return);break;case 12:Ja(u,c,a);break;case 31:Ja(u,c,a),a&&m&4&&Of(u,c);break;case 13:Ja(u,c,a),a&&m&4&&Nf(u,c);break;case 22:c.memoizedState===null&&Ja(u,c,a),Hi(c,c.return);break;case 30:break;default:Ja(u,c,a)}t=t.sibling}}function Du(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ti(a))}function qu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ti(e))}function ba(e,t,a,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rf(e,t,a,s),t=t.sibling}function Rf(e,t,a,s){var u=t.flags;switch(t.tag){case 0:case 11:case 15:ba(e,t,a,s),u&2048&&Bi(9,t);break;case 1:ba(e,t,a,s);break;case 3:ba(e,t,a,s),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ti(e)));break;case 12:if(u&2048){ba(e,t,a,s),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,g=c.onPostCommit;typeof g=="function"&&g(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Be(t,t.return,E)}}else ba(e,t,a,s);break;case 31:ba(e,t,a,s);break;case 13:ba(e,t,a,s);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?ba(e,t,a,s):$i(e,t):c._visibility&2?ba(e,t,a,s):(c._visibility|=2,Us(e,t,a,s,(t.subtreeFlags&10256)!==0||!1)),u&2048&&Du(m,t);break;case 24:ba(e,t,a,s),u&2048&&qu(t.alternate,t);break;default:ba(e,t,a,s)}}function Us(e,t,a,s,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,m=t,g=a,E=s,q=m.flags;switch(m.tag){case 0:case 11:case 15:Us(c,m,g,E,u),Bi(8,m);break;case 23:break;case 22:var Q=m.stateNode;m.memoizedState!==null?Q._visibility&2?Us(c,m,g,E,u):$i(c,m):(Q._visibility|=2,Us(c,m,g,E,u)),u&&q&2048&&Du(m.alternate,m);break;case 24:Us(c,m,g,E,u),u&&q&2048&&qu(m.alternate,m);break;default:Us(c,m,g,E,u)}t=t.sibling}}function $i(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,u=s.flags;switch(s.tag){case 22:$i(a,s),u&2048&&Du(s.alternate,s);break;case 24:$i(a,s),u&2048&&qu(s.alternate,s);break;default:$i(a,s)}t=t.sibling}}var Vi=8192;function Ms(e,t,a){if(e.subtreeFlags&Vi)for(e=e.child;e!==null;)zf(e,t,a),e=e.sibling}function zf(e,t,a){switch(e.tag){case 26:Ms(e,t,a),e.flags&Vi&&e.memoizedState!==null&&sg(a,ga,e.memoizedState,e.memoizedProps);break;case 5:Ms(e,t,a);break;case 3:case 4:var s=ga;ga=Sl(e.stateNode.containerInfo),Ms(e,t,a),ga=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Vi,Vi=16777216,Ms(e,t,a),Vi=s):Ms(e,t,a));break;default:Ms(e,t,a)}}function Df(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];vt=s,Uf(s,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qf(e),e=e.sibling}function qf(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&pn(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,cl(e)):Gi(e);break;default:Gi(e)}}function cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];vt=s,Uf(s,e)}Df(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pn(8,t,t.return),cl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,cl(t));break;default:cl(t)}e=e.sibling}}function Uf(e,t){for(;vt!==null;){var a=vt;switch(a.tag){case 0:case 11:case 15:pn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ti(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vt=s;else e:for(a=e;vt!==null;){s=vt;var u=s.sibling,c=s.return;if(Tf(s),s===a){vt=null;break e}if(u!==null){u.return=c,vt=u;break e}vt=c}}}var by={getCacheForType:function(e){var t=bt(rt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return bt(rt).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ye=null,Ae=null,Ce=0,Le=0,Pt=null,vn=!1,Ls=!1,Uu=!1,Pa=0,at=0,yn=0,Wn=0,Mu=0,Zt=0,Bs=0,Ki=null,Bt=null,Lu=!1,dl=0,Mf=0,hl=1/0,fl=null,gn=null,ft=0,bn=null,Hs=null,Za=0,Bu=0,Hu=null,Lf=null,Yi=0,$u=null;function It(){return(Me&2)!==0&&Ce!==0?Ce&-Ce:$.T!==null?Xu():nn()}function Bf(){if(Zt===0)if((Ce&536870912)===0||Re){var e=ds;ds<<=1,(ds&3932160)===0&&(ds=262144),Zt=e}else Zt=536870912;return e=Xt.current,e!==null&&(e.flags|=32),Zt}function Ht(e,t,a){(e===Ye&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&($s(e,0),_n(e,Ce,Zt,!1)),Tt(e,a),((Me&2)===0||e!==Ye)&&(e===Ye&&((Me&2)===0&&(Wn|=a),at===4&&_n(e,Ce,Zt,!1)),Na(e))}function Hf(e,t,a){if((Me&6)!==0)throw Error(l(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Dn(e,t),u=s?Sy(e,t):Gu(e,t,!0),c=s;do{if(u===0){Ls&&!s&&_n(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!xy(a)){u=Gu(e,t,!1),c=!1;continue}if(u===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var g=e;u=Ki;var E=g.current.memoizedState.isDehydrated;if(E&&($s(g,m).flags|=256),m=Gu(g,m,!1),m!==2){if(Uu&&!E){g.errorRecoveryDisabledLanes|=c,Wn|=c,u=4;break e}c=Bt,Bt=u,c!==null&&(Bt===null?Bt=c:Bt.push.apply(Bt,c))}u=m}if(c=!1,u!==2)continue}}if(u===1){$s(e,0),_n(e,t,0,!0);break}e:{switch(s=e,c=u,c){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:_n(s,t,Zt,!vn);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(u=dl+300-Qe(),10<u)){if(_n(s,t,Zt,!vn),hs(s,0,!0)!==0)break e;Za=t,s.timeoutHandle=ym($f.bind(null,s,a,Bt,fl,Lu,t,Zt,Wn,Bs,vn,c,"Throttled",-0,0),u);break e}$f(s,a,Bt,fl,Lu,t,Zt,Wn,Bs,vn,c,null,-0,0)}}break}while(!0);Na(e)}function $f(e,t,a,s,u,c,m,g,E,q,Q,Z,U,V){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qa},zf(t,c,Z);var le=(c&62914560)===c?dl-Qe():(c&4194048)===c?Mf-Qe():0;if(le=ig(Z,le),le!==null){Za=c,e.cancelPendingCommit=le(Pf.bind(null,e,t,c,a,s,u,m,g,E,Q,Z,null,U,V)),_n(e,c,m,!q);return}}Pf(e,t,c,a,s,u,m,g,E)}function xy(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!Yt(c(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t,a,s){t&=~Mu,t&=~Wn,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var u=t;0<u;){var c=31-ht(u),m=1<<c;s[c]=-1,u&=~m}a!==0&&jr(e,a,t)}function ml(){return(Me&6)===0?(Qi(0),!1):!0}function Vu(){if(Ae!==null){if(Le===0)var e=Ae.return;else e=Ae,Ba=Kn=null,su(e),ks=null,Oi=0,e=Ae;for(;e!==null;)gf(e.alternate,e),e=e.return;Ae=null}}function $s(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$y(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Za=0,Vu(),Ye=e,Ae=a=Ma(e.current,null),Ce=t,Le=0,Pt=null,vn=!1,Ls=Dn(e,t),Uu=!1,Bs=Zt=Mu=Wn=yn=at=0,Bt=Ki=null,Lu=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var u=31-ht(s),c=1<<u;t|=e[u],s&=~c}return Pa=t,qr(),a}function Vf(e,t){je=null,$.H=Ui,t===Cs||t===Gr?(t=nh(),Le=3):t===Qo?(t=nh(),Le=4):Le=t===_u?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pt=t,Ae===null&&(at=1,nl(e,la(t,e.current)))}function Gf(){var e=Xt.current;return e===null?!0:(Ce&4194048)===Ce?da===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===da:!1}function Kf(){var e=$.H;return $.H=Ui,e===null?Ui:e}function Yf(){var e=$.A;return $.A=by,e}function pl(){at=4,vn||(Ce&4194048)!==Ce&&Xt.current!==null||(Ls=!0),(yn&134217727)===0&&(Wn&134217727)===0||Ye===null||_n(Ye,Ce,Zt,!1)}function Gu(e,t,a){var s=Me;Me|=2;var u=Kf(),c=Yf();(Ye!==e||Ce!==t)&&(fl=null,$s(e,t)),t=!1;var m=at;e:do try{if(Le!==0&&Ae!==null){var g=Ae,E=Pt;switch(Le){case 8:Vu(),m=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(t=!0);var q=Le;if(Le=0,Pt=null,Vs(e,g,E,q),a&&Ls){m=0;break e}break;default:q=Le,Le=0,Pt=null,Vs(e,g,E,q)}}jy(),m=at;break}catch(Q){Vf(e,Q)}while(!0);return t&&e.shellSuspendCounter++,Ba=Kn=null,Me=s,$.H=u,$.A=c,Ae===null&&(Ye=null,Ce=0,qr()),m}function jy(){for(;Ae!==null;)Qf(Ae)}function Sy(e,t){var a=Me;Me|=2;var s=Kf(),u=Yf();Ye!==e||Ce!==t?(fl=null,hl=Qe()+500,$s(e,t)):Ls=Dn(e,t);e:do try{if(Le!==0&&Ae!==null){t=Ae;var c=Pt;t:switch(Le){case 1:Le=0,Pt=null,Vs(e,t,c,1);break;case 2:case 9:if(th(c)){Le=0,Pt=null,Xf(t);break}t=function(){Le!==2&&Le!==9||Ye!==e||(Le=7),Na(e)},c.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:th(c)?(Le=0,Pt=null,Xf(t)):(Le=0,Pt=null,Vs(e,t,c,7));break;case 5:var m=null;switch(Ae.tag){case 26:m=Ae.memoizedState;case 5:case 27:var g=Ae;if(m?Rm(m):g.stateNode.complete){Le=0,Pt=null;var E=g.sibling;if(E!==null)Ae=E;else{var q=g.return;q!==null?(Ae=q,vl(q)):Ae=null}break t}}Le=0,Pt=null,Vs(e,t,c,5);break;case 6:Le=0,Pt=null,Vs(e,t,c,6);break;case 8:Vu(),at=6;break e;default:throw Error(l(462))}}wy();break}catch(Q){Vf(e,Q)}while(!0);return Ba=Kn=null,$.H=s,$.A=u,Me=a,Ae!==null?0:(Ye=null,Ce=0,qr(),at)}function wy(){for(;Ae!==null&&!io();)Qf(Ae)}function Qf(e){var t=vf(e.alternate,e,Pa);e.memoizedProps=e.pendingProps,t===null?vl(e):Ae=t}function Xf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=cf(a,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=cf(a,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:su(t);default:gf(a,t),t=Ae=Kd(t,Pa),t=vf(a,t,Pa)}e.memoizedProps=e.pendingProps,t===null?vl(e):Ae=t}function Vs(e,t,a,s){Ba=Kn=null,su(t),ks=null,Oi=0;var u=t.return;try{if(hy(e,u,t,a,Ce)){at=1,nl(e,la(a,e.current)),Ae=null;return}}catch(c){if(u!==null)throw Ae=u,c;at=1,nl(e,la(a,e.current)),Ae=null;return}t.flags&32768?(Re||s===1?e=!0:Ls||(Ce&536870912)!==0?e=!1:(vn=e=!0,(s===2||s===9||s===3||s===6)&&(s=Xt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Jf(t,e)):vl(t)}function vl(e){var t=e;do{if((t.flags&32768)!==0){Jf(t,vn);return}e=t.return;var a=py(t.alternate,t,Pa);if(a!==null){Ae=a;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);at===0&&(at=5)}function Jf(e,t){do{var a=vy(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);at=6,Ae=null}function Pf(e,t,a,s,u,c,m,g,E){e.cancelPendingCommit=null;do yl();while(ft!==0);if((Me&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(c=t.lanes|t.childLanes,c|=ko,oo(e,a,c,m,g,E),e===Ye&&(Ae=Ye=null,Ce=0),Hs=t,bn=e,Za=a,Bu=c,Hu=u,Lf=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Oy(Ra,function(){return em(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=$.T,$.T=null,u=ee.p,ee.p=2,m=Me,Me|=4;try{yy(e,t,a)}finally{Me=m,ee.p=u,$.T=s}}ft=1,Zf(),If(),Ff()}}function Zf(){if(ft===1){ft=0;var e=bn,t=Hs,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=$.T,$.T=null;var s=ee.p;ee.p=2;var u=Me;Me|=4;try{Cf(t,e);var c=tc,m=qd(e.containerInfo),g=c.focusedElem,E=c.selectionRange;if(m!==g&&g&&g.ownerDocument&&Dd(g.ownerDocument.documentElement,g)){if(E!==null&&To(g)){var q=E.start,Q=E.end;if(Q===void 0&&(Q=q),"selectionStart"in g)g.selectionStart=q,g.selectionEnd=Math.min(Q,g.value.length);else{var Z=g.ownerDocument||document,U=Z&&Z.defaultView||window;if(U.getSelection){var V=U.getSelection(),le=g.textContent.length,pe=Math.min(E.start,le),Ge=E.end===void 0?pe:Math.min(E.end,le);!V.extend&&pe>Ge&&(m=Ge,Ge=pe,pe=m);var R=zd(g,pe),N=zd(g,Ge);if(R&&N&&(V.rangeCount!==1||V.anchorNode!==R.node||V.anchorOffset!==R.offset||V.focusNode!==N.node||V.focusOffset!==N.offset)){var D=Z.createRange();D.setStart(R.node,R.offset),V.removeAllRanges(),pe>Ge?(V.addRange(D),V.extend(N.node,N.offset)):(D.setEnd(N.node,N.offset),V.addRange(D))}}}}for(Z=[],V=g;V=V.parentNode;)V.nodeType===1&&Z.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<Z.length;g++){var J=Z[g];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Nl=!!ec,tc=ec=null}finally{Me=u,ee.p=s,$.T=a}}e.current=t,ft=2}}function If(){if(ft===2){ft=0;var e=bn,t=Hs,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=$.T,$.T=null;var s=ee.p;ee.p=2;var u=Me;Me|=4;try{Ef(e,t.alternate,t)}finally{Me=u,ee.p=s,$.T=a}}ft=3}}function Ff(){if(ft===4||ft===3){ft=0,di();var e=bn,t=Hs,a=Za,s=Lf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ft=5:(ft=0,Hs=bn=null,Wf(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(gn=null),mi(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=$.T,u=ee.p,ee.p=2,$.T=null;try{for(var c=e.onRecoverableError,m=0;m<s.length;m++){var g=s[m];c(g.value,{componentStack:g.stack})}}finally{$.T=t,ee.p=u}}(Za&3)!==0&&yl(),Na(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===$u?Yi++:(Yi=0,$u=e):Yi=0,Qi(0)}}function Wf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ti(t)))}function yl(){return Zf(),If(),Ff(),em()}function em(){if(ft!==5)return!1;var e=bn,t=Bu;Bu=0;var a=mi(Za),s=$.T,u=ee.p;try{ee.p=32>a?32:a,$.T=null,a=Hu,Hu=null;var c=bn,m=Za;if(ft=0,Hs=bn=null,Za=0,(Me&6)!==0)throw Error(l(331));var g=Me;if(Me|=4,qf(c.current),Rf(c,c.current,m,a),Me=g,Qi(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ke,c)}catch{}return!0}finally{ee.p=u,$.T=s,Wf(e,t)}}function tm(e,t,a){t=la(a,t),t=bu(e.stateNode,t,2),e=hn(e,t,2),e!==null&&(Tt(e,2),Na(e))}function Be(e,t,a){if(e.tag===3)tm(e,e,a);else for(;t!==null;){if(t.tag===3){tm(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(gn===null||!gn.has(s))){e=la(a,e),a=tf(2),s=hn(t,a,2),s!==null&&(af(a,s,t,e),Tt(s,2),Na(s));break}}t=t.return}}function Ku(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new _y;var u=new Set;s.set(t,u)}else u=s.get(t),u===void 0&&(u=new Set,s.set(t,u));u.has(a)||(Uu=!0,u.add(a),e=Ey.bind(null,e,t,a),t.then(e,e))}function Ey(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Ce&a)===a&&(at===4||at===3&&(Ce&62914560)===Ce&&300>Qe()-dl?(Me&2)===0&&$s(e,0):Mu|=a,Bs===Ce&&(Bs=0)),Na(e)}function am(e,t){t===0&&(t=fi()),e=$n(e,t),e!==null&&(Tt(e,t),Na(e))}function Ty(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),am(e,a)}function Ay(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),am(e,a)}function Oy(e,t){return Dt(e,t)}var gl=null,Gs=null,Yu=!1,bl=!1,Qu=!1,xn=0;function Na(e){e!==Gs&&e.next===null&&(Gs===null?gl=Gs=e:Gs=Gs.next=e),bl=!0,Yu||(Yu=!0,Cy())}function Qi(e,t){if(!Qu&&bl){Qu=!0;do for(var a=!1,s=gl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var m=s.suspendedLanes,g=s.pingedLanes;c=(1<<31-ht(42|e)+1)-1,c&=u&~(m&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,rm(s,c))}else c=Ce,c=hs(s,s===Ye?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Dn(s,c)||(a=!0,rm(s,c));s=s.next}while(a);Qu=!1}}function Ny(){nm()}function nm(){bl=Yu=!1;var e=0;xn!==0&&Hy()&&(e=xn);for(var t=Qe(),a=null,s=gl;s!==null;){var u=s.next,c=sm(s,t);c===0?(s.next=null,a===null?gl=u:a.next=u,u===null&&(Gs=a)):(a=s,(e!==0||(c&3)!==0)&&(bl=!0)),s=u}ft!==0&&ft!==5||Qi(e),xn!==0&&(xn=0)}function sm(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-ht(c),g=1<<m,E=u[m];E===-1?((g&a)===0||(g&s)!==0)&&(u[m]=fs(g,t)):E<=t&&(e.expiredLanes|=g),c&=~g}if(t=Ye,a=Ce,a=hs(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Vt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&Vt(s),mi(a)){case 2:case 8:a=Gt;break;case 32:a=Ra;break;case 268435456:a=Rn;break;default:a=Ra}return s=im.bind(null,e),a=Dt(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&Vt(s),e.callbackPriority=2,e.callbackNode=null,2}function im(e,t){if(ft!==0&&ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(yl()&&e.callbackNode!==a)return null;var s=Ce;return s=hs(e,e===Ye?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Hf(e,s,t),sm(e,Qe()),e.callbackNode!=null&&e.callbackNode===a?im.bind(null,e):null)}function rm(e,t){if(yl())return null;Hf(e,t,!0)}function Cy(){Vy(function(){(Me&6)!==0?Dt(pa,Ny):nm()})}function Xu(){if(xn===0){var e=Os;e===0&&(e=an,an<<=1,(an&261888)===0&&(an=256)),xn=e}return xn}function lm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ar(""+e)}function om(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ky(e,t,a,s,u){if(t==="submit"&&a&&a.stateNode===u){var c=lm((u[b]||null).action),m=s.submitter;m&&(t=(t=m[b]||null)?lm(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var g=new kr("action","action",null,s,u);e.push({event:g,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(xn!==0){var E=m?om(u,m):new FormData(u);fu(a,{pending:!0,data:E,method:u.method,action:c},null,E)}}else typeof c=="function"&&(g.preventDefault(),E=m?om(u,m):new FormData(u),fu(a,{pending:!0,data:E,method:u.method,action:c},c,E))},currentTarget:u}]})}}for(var Ju=0;Ju<Co.length;Ju++){var Pu=Co[Ju],Ry=Pu.toLowerCase(),zy=Pu[0].toUpperCase()+Pu.slice(1);ya(Ry,"on"+zy)}ya(Ld,"onAnimationEnd"),ya(Bd,"onAnimationIteration"),ya(Hd,"onAnimationStart"),ya("dblclick","onDoubleClick"),ya("focusin","onFocus"),ya("focusout","onBlur"),ya(Pv,"onTransitionRun"),ya(Zv,"onTransitionStart"),ya(Iv,"onTransitionCancel"),ya($d,"onTransitionEnd"),ms("onMouseEnter",["mouseout","mouseover"]),ms("onMouseLeave",["mouseout","mouseover"]),ms("onPointerEnter",["pointerout","pointerover"]),ms("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function um(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var m=s.length-1;0<=m;m--){var g=s[m],E=g.instance,q=g.currentTarget;if(g=g.listener,E!==c&&u.isPropagationStopped())break e;c=g,u.currentTarget=q;try{c(u)}catch(Q){Dr(Q)}u.currentTarget=null,c=E}else for(m=0;m<s.length;m++){if(g=s[m],E=g.instance,q=g.currentTarget,g=g.listener,E!==c&&u.isPropagationStopped())break e;c=g,u.currentTarget=q;try{c(u)}catch(Q){Dr(Q)}u.currentTarget=null,c=E}}}}function Oe(e,t){var a=t[ne];a===void 0&&(a=t[ne]=new Set);var s=e+"__bubble";a.has(s)||(cm(t,e,2,!1),a.add(s))}function Zu(e,t,a){var s=0;t&&(s|=4),cm(a,e,s,t)}var _l="_reactListening"+Math.random().toString(36).slice(2);function Iu(e){if(!e[_l]){e[_l]=!0,ad.forEach(function(a){a!=="selectionchange"&&(Dy.has(a)||Zu(a,!1,e),Zu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_l]||(t[_l]=!0,Zu("selectionchange",!1,t))}}function cm(e,t,a,s){switch(Bm(t)){case 2:var u=og;break;case 8:u=ug;break;default:u=hc}a=u.bind(null,t,a,e),u=void 0,!yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(t,a,{capture:!0,passive:u}):e.addEventListener(t,a,!0):u!==void 0?e.addEventListener(t,a,{passive:u}):e.addEventListener(t,a,!1)}function Fu(e,t,a,s,u){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var g=s.stateNode.containerInfo;if(g===u)break;if(m===4)for(m=s.return;m!==null;){var E=m.tag;if((E===3||E===4)&&m.stateNode.containerInfo===u)return;m=m.return}for(;g!==null;){if(m=Ze(g),m===null)return;if(E=m.tag,E===5||E===6||E===26||E===27){s=c=m;continue e}g=g.parentNode}}s=s.return}md(function(){var q=c,Q=po(a),Z=[];e:{var U=Vd.get(e);if(U!==void 0){var V=kr,le=e;switch(e){case"keypress":if(Nr(a)===0)break e;case"keydown":case"keyup":V=Av;break;case"focusin":le="focus",V=xo;break;case"focusout":le="blur",V=xo;break;case"beforeblur":case"afterblur":V=xo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Cv;break;case Ld:case Bd:case Hd:V=gv;break;case $d:V=Rv;break;case"scroll":case"scrollend":V=fv;break;case"wheel":V=Dv;break;case"copy":case"cut":case"paste":V=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=bd;break;case"toggle":case"beforetoggle":V=Uv}var pe=(t&4)!==0,Ge=!pe&&(e==="scroll"||e==="scrollend"),R=pe?U!==null?U+"Capture":null:U;pe=[];for(var N=q,D;N!==null;){var J=N;if(D=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||D===null||R===null||(J=pi(N,R),J!=null&&pe.push(Ji(N,J,D))),Ge)break;N=N.return}0<pe.length&&(U=new V(U,le,null,a,Q),Z.push({event:U,listeners:pe}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",U&&a!==mo&&(le=a.relatedTarget||a.fromElement)&&(Ze(le)||le[A]))break e;if((V||U)&&(U=Q.window===Q?Q:(U=Q.ownerDocument)?U.defaultView||U.parentWindow:window,V?(le=a.relatedTarget||a.toElement,V=q,le=le?Ze(le):null,le!==null&&(Ge=h(le),pe=le.tag,le!==Ge||pe!==5&&pe!==27&&pe!==6)&&(le=null)):(V=null,le=q),V!==le)){if(pe=yd,J="onMouseLeave",R="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(pe=bd,J="onPointerLeave",R="onPointerEnter",N="pointer"),Ge=V==null?U:kt(V),D=le==null?U:kt(le),U=new pe(J,N+"leave",V,a,Q),U.target=Ge,U.relatedTarget=D,J=null,Ze(Q)===q&&(pe=new pe(R,N+"enter",le,a,Q),pe.target=D,pe.relatedTarget=Ge,J=pe),Ge=J,V&&le)t:{for(pe=qy,R=V,N=le,D=0,J=R;J;J=pe(J))D++;J=0;for(var me=N;me;me=pe(me))J++;for(;0<D-J;)R=pe(R),D--;for(;0<J-D;)N=pe(N),J--;for(;D--;){if(R===N||N!==null&&R===N.alternate){pe=R;break t}R=pe(R),N=pe(N)}pe=null}else pe=null;V!==null&&dm(Z,U,V,pe,!1),le!==null&&Ge!==null&&dm(Z,Ge,le,pe,!0)}}e:{if(U=q?kt(q):window,V=U.nodeName&&U.nodeName.toLowerCase(),V==="select"||V==="input"&&U.type==="file")var qe=Ad;else if(Ed(U))if(Od)qe=Qv;else{qe=Kv;var ce=Gv}else V=U.nodeName,!V||V.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?q&&fo(q.elementType)&&(qe=Ad):qe=Yv;if(qe&&(qe=qe(e,q))){Td(Z,qe,a,Q);break e}ce&&ce(e,U,q),e==="focusout"&&q&&U.type==="number"&&q.memoizedProps.value!=null&&ho(U,"number",U.value)}switch(ce=q?kt(q):window,e){case"focusin":(Ed(ce)||ce.contentEditable==="true")&&(_s=ce,Ao=q,Si=null);break;case"focusout":Si=Ao=_s=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Ud(Z,a,Q);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":Ud(Z,a,Q)}var we;if(So)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else bs?Sd(e,a)&&(ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(_d&&a.locale!=="ko"&&(bs||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&bs&&(we=pd()):(sn=Q,go="value"in sn?sn.value:sn.textContent,bs=!0)),ce=xl(q,ke),0<ce.length&&(ke=new gd(ke,e,null,a,Q),Z.push({event:ke,listeners:ce}),we?ke.data=we:(we=wd(a),we!==null&&(ke.data=we)))),(we=Lv?Bv(e,a):Hv(e,a))&&(ke=xl(q,"onBeforeInput"),0<ke.length&&(ce=new gd("onBeforeInput","beforeinput",null,a,Q),Z.push({event:ce,listeners:ke}),ce.data=we)),ky(Z,e,q,a,Q)}um(Z,t)})}function Ji(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xl(e,t){for(var a=t+"Capture",s=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=pi(e,a),u!=null&&s.unshift(Ji(e,u,c)),u=pi(e,t),u!=null&&s.push(Ji(e,u,c))),e.tag===3)return s;e=e.return}return[]}function qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dm(e,t,a,s,u){for(var c=t._reactName,m=[];a!==null&&a!==s;){var g=a,E=g.alternate,q=g.stateNode;if(g=g.tag,E!==null&&E===s)break;g!==5&&g!==26&&g!==27||q===null||(E=q,u?(q=pi(a,c),q!=null&&m.unshift(Ji(a,q,E))):u||(q=pi(a,c),q!=null&&m.push(Ji(a,q,E)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var Uy=/\r\n?/g,My=/\u0000|\uFFFD/g;function hm(e){return(typeof e=="string"?e:""+e).replace(Uy,`
`).replace(My,"")}function fm(e,t){return t=hm(t),hm(e)===t}function Ve(e,t,a,s,u,c){switch(a){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||vs(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&vs(e,""+s);break;case"className":Er(e,"class",s);break;case"tabIndex":Er(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Er(e,a,s);break;case"style":hd(e,s,c);break;case"data":if(t!=="object"){Er(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ar(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&Ve(e,t,"name",u.name,u,null),Ve(e,t,"formEncType",u.formEncType,u,null),Ve(e,t,"formMethod",u.formMethod,u,null),Ve(e,t,"formTarget",u.formTarget,u,null)):(Ve(e,t,"encType",u.encType,u,null),Ve(e,t,"method",u.method,u,null),Ve(e,t,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ar(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=qa);break;case"onScroll":s!=null&&Oe("scroll",e);break;case"onScrollEnd":s!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ar(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),wr(e,"popover",s);break;case"xlinkActuate":Da(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Da(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Da(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Da(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Da(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Da(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Da(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Da(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Da(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wr(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,wr(e,a,s))}}function Wu(e,t,a,s,u,c){switch(a){case"style":hd(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof s=="string"?vs(e,s):(typeof s=="number"||typeof s=="bigint")&&vs(e,""+s);break;case"onScroll":s!=null&&Oe("scroll",e);break;case"onScrollEnd":s!=null&&Oe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=qa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),t=a.slice(2,u?a.length-7:void 0),c=e[b]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,u),typeof s=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,s,u);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):wr(e,a,s)}}}function xt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var m=a[c];if(m!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,c,m,a,null)}}u&&Ve(e,t,"srcSet",a.srcSet,a,null),s&&Ve(e,t,"src",a.src,a,null);return;case"input":Oe("invalid",e);var g=c=m=u=null,E=null,q=null;for(s in a)if(a.hasOwnProperty(s)){var Q=a[s];if(Q!=null)switch(s){case"name":u=Q;break;case"type":m=Q;break;case"checked":E=Q;break;case"defaultChecked":q=Q;break;case"value":c=Q;break;case"defaultValue":g=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(l(137,t));break;default:Ve(e,t,s,Q,a,null)}}od(e,c,g,E,q,m,u,!1);return;case"select":Oe("invalid",e),s=m=c=null;for(u in a)if(a.hasOwnProperty(u)&&(g=a[u],g!=null))switch(u){case"value":c=g;break;case"defaultValue":m=g;break;case"multiple":s=g;default:Ve(e,t,u,g,a,null)}t=c,a=m,e.multiple=!!s,t!=null?ps(e,!!s,t,!1):a!=null&&ps(e,!!s,a,!0);return;case"textarea":Oe("invalid",e),c=u=s=null;for(m in a)if(a.hasOwnProperty(m)&&(g=a[m],g!=null))switch(m){case"value":s=g;break;case"defaultValue":u=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(l(91));break;default:Ve(e,t,m,g,a,null)}cd(e,s,u,c);return;case"option":for(E in a)if(a.hasOwnProperty(E)&&(s=a[E],s!=null))switch(E){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ve(e,t,E,s,a,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(s=0;s<Xi.length;s++)Oe(Xi[s],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(s=a[q],s!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ve(e,t,q,s,a,null)}return;default:if(fo(t)){for(Q in a)a.hasOwnProperty(Q)&&(s=a[Q],s!==void 0&&Wu(e,t,Q,s,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(s=a[g],s!=null&&Ve(e,t,g,s,a,null))}function Ly(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,m=null,g=null,E=null,q=null,Q=null;for(V in a){var Z=a[V];if(a.hasOwnProperty(V)&&Z!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":E=Z;default:s.hasOwnProperty(V)||Ve(e,t,V,null,s,Z)}}for(var U in s){var V=s[U];if(Z=a[U],s.hasOwnProperty(U)&&(V!=null||Z!=null))switch(U){case"type":c=V;break;case"name":u=V;break;case"checked":q=V;break;case"defaultChecked":Q=V;break;case"value":m=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,t));break;default:V!==Z&&Ve(e,t,U,V,s,Z)}}co(e,m,g,E,q,Q,c,u);return;case"select":V=m=g=U=null;for(c in a)if(E=a[c],a.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":V=E;default:s.hasOwnProperty(c)||Ve(e,t,c,null,s,E)}for(u in s)if(c=s[u],E=a[u],s.hasOwnProperty(u)&&(c!=null||E!=null))switch(u){case"value":U=c;break;case"defaultValue":g=c;break;case"multiple":m=c;default:c!==E&&Ve(e,t,u,c,s,E)}t=g,a=m,s=V,U!=null?ps(e,!!a,U,!1):!!s!=!!a&&(t!=null?ps(e,!!a,t,!0):ps(e,!!a,a?[]:"",!1));return;case"textarea":V=U=null;for(g in a)if(u=a[g],a.hasOwnProperty(g)&&u!=null&&!s.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ve(e,t,g,null,s,u)}for(m in s)if(u=s[m],c=a[m],s.hasOwnProperty(m)&&(u!=null||c!=null))switch(m){case"value":U=u;break;case"defaultValue":V=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==c&&Ve(e,t,m,u,s,c)}ud(e,U,V);return;case"option":for(var le in a)if(U=a[le],a.hasOwnProperty(le)&&U!=null&&!s.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:Ve(e,t,le,null,s,U)}for(E in s)if(U=s[E],V=a[E],s.hasOwnProperty(E)&&U!==V&&(U!=null||V!=null))switch(E){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Ve(e,t,E,U,s,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)U=a[pe],a.hasOwnProperty(pe)&&U!=null&&!s.hasOwnProperty(pe)&&Ve(e,t,pe,null,s,U);for(q in s)if(U=s[q],V=a[q],s.hasOwnProperty(q)&&U!==V&&(U!=null||V!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:Ve(e,t,q,U,s,V)}return;default:if(fo(t)){for(var Ge in a)U=a[Ge],a.hasOwnProperty(Ge)&&U!==void 0&&!s.hasOwnProperty(Ge)&&Wu(e,t,Ge,void 0,s,U);for(Q in s)U=s[Q],V=a[Q],!s.hasOwnProperty(Q)||U===V||U===void 0&&V===void 0||Wu(e,t,Q,U,s,V);return}}for(var R in a)U=a[R],a.hasOwnProperty(R)&&U!=null&&!s.hasOwnProperty(R)&&Ve(e,t,R,null,s,U);for(Z in s)U=s[Z],V=a[Z],!s.hasOwnProperty(Z)||U===V||U==null&&V==null||Ve(e,t,Z,U,s,V)}function mm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function By(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,m=u.initiatorType,g=u.duration;if(c&&g&&mm(m)){for(m=0,g=u.responseEnd,s+=1;s<a.length;s++){var E=a[s],q=E.startTime;if(q>g)break;var Q=E.transferSize,Z=E.initiatorType;Q&&mm(Z)&&(E=E.responseEnd,m+=Q*(E<g?1:(g-q)/(E-q)))}if(--s,t+=8*(c+m)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ec=null,tc=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function pm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nc=null;function Hy(){var e=window.event;return e&&e.type==="popstate"?e===nc?!1:(nc=e,!0):(nc=null,!1)}var ym=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(e){return gm.resolve(null).then(e).catch(Gy)}:ym;function Gy(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function bm(e,t){var a=t,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),Xs(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Pi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pi(a);for(var c=a.firstChild;c;){var m=c.nextSibling,g=c.nodeName;c[Ot]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=m}}else a==="body"&&Pi(e.ownerDocument.body);a=u}while(a);Xs(t)}function _m(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function sc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sc(a),Nt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ky(e,t,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ot])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=ha(e.nextSibling),e===null)break}return null}function Yy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ha(e.nextSibling),e===null))return null;return e}function xm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ha(e.nextSibling),e===null))return null;return e}function ic(e){return e.data==="$?"||e.data==="$~"}function rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Qy(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ha(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var lc=null;function jm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ha(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Sm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function wm(e,t,a){switch(t=jl(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Pi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nt(e)}var fa=new Map,Em=new Set;function Sl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ia=ee.d;ee.d={f:Xy,r:Jy,D:Py,C:Zy,L:Iy,m:Fy,X:eg,S:Wy,M:tg};function Xy(){var e=Ia.f(),t=ml();return e||t}function Jy(e){var t=Ct(e);t!==null&&t.tag===5&&t.type==="form"?$h(t):Ia.r(e)}var Ks=typeof document>"u"?null:document;function Tm(e,t,a){var s=Ks;if(s&&typeof t=="string"&&t){var u=ia(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Em.has(u)||(Em.add(u),e={rel:e,crossOrigin:a,href:t},s.querySelector(u)===null&&(t=s.createElement("link"),xt(t,"link",e),pt(t),s.head.appendChild(t)))}}function Py(e){Ia.D(e),Tm("dns-prefetch",e,null)}function Zy(e,t){Ia.C(e,t),Tm("preconnect",e,t)}function Iy(e,t,a){Ia.L(e,t,a);var s=Ks;if(s&&e&&t){var u='link[rel="preload"][as="'+ia(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ia(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ia(a.imageSizes)+'"]')):u+='[href="'+ia(e)+'"]';var c=u;switch(t){case"style":c=Ys(e);break;case"script":c=Qs(e)}fa.has(c)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),fa.set(c,e),s.querySelector(u)!==null||t==="style"&&s.querySelector(Zi(c))||t==="script"&&s.querySelector(Ii(c))||(t=s.createElement("link"),xt(t,"link",e),pt(t),s.head.appendChild(t)))}}function Fy(e,t){Ia.m(e,t);var a=Ks;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+ia(s)+'"][href="'+ia(e)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Qs(e)}if(!fa.has(c)&&(e=j({rel:"modulepreload",href:e},t),fa.set(c,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ii(c)))return}s=a.createElement("link"),xt(s,"link",e),pt(s),a.head.appendChild(s)}}}function Wy(e,t,a){Ia.S(e,t,a);var s=Ks;if(s&&e){var u=na(s).hoistableStyles,c=Ys(e);t=t||"default";var m=u.get(c);if(!m){var g={loading:0,preload:null};if(m=s.querySelector(Zi(c)))g.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=fa.get(c))&&oc(e,a);var E=m=s.createElement("link");pt(E),xt(E,"link",e),E._p=new Promise(function(q,Q){E.onload=q,E.onerror=Q}),E.addEventListener("load",function(){g.loading|=1}),E.addEventListener("error",function(){g.loading|=2}),g.loading|=4,wl(m,t,s)}m={type:"stylesheet",instance:m,count:1,state:g},u.set(c,m)}}}function eg(e,t){Ia.X(e,t);var a=Ks;if(a&&e){var s=na(a).hoistableScripts,u=Qs(e),c=s.get(u);c||(c=a.querySelector(Ii(u)),c||(e=j({src:e,async:!0},t),(t=fa.get(u))&&uc(e,t),c=a.createElement("script"),pt(c),xt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function tg(e,t){Ia.M(e,t);var a=Ks;if(a&&e){var s=na(a).hoistableScripts,u=Qs(e),c=s.get(u);c||(c=a.querySelector(Ii(u)),c||(e=j({src:e,async:!0,type:"module"},t),(t=fa.get(u))&&uc(e,t),c=a.createElement("script"),pt(c),xt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function Am(e,t,a,s){var u=(u=de.current)?Sl(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ys(a.href),a=na(u).hoistableStyles,s=a.get(t),s||(s={type:"style",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ys(a.href);var c=na(u).hoistableStyles,m=c.get(e);if(m||(u=u.ownerDocument||u,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=u.querySelector(Zi(e)))&&!c._p&&(m.instance=c,m.state.loading=5),fa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fa.set(e,a),c||ag(u,e,a,m.state))),t&&s===null)throw Error(l(528,""));return m}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qs(a),a=na(u).hoistableScripts,s=a.get(t),s||(s={type:"script",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ys(e){return'href="'+ia(e)+'"'}function Zi(e){return'link[rel="stylesheet"]['+e+"]"}function Om(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function ag(e,t,a,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),xt(t,"link",a),pt(t),e.head.appendChild(t))}function Qs(e){return'[src="'+ia(e)+'"]'}function Ii(e){return"script[async]"+e}function Nm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+ia(a.href)+'"]');if(s)return t.instance=s,pt(s),s;var u=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),pt(s),xt(s,"style",u),wl(s,a.precedence,e),t.instance=s;case"stylesheet":u=Ys(a.href);var c=e.querySelector(Zi(u));if(c)return t.state.loading|=4,t.instance=c,pt(c),c;s=Om(a),(u=fa.get(u))&&oc(s,u),c=(e.ownerDocument||e).createElement("link"),pt(c);var m=c;return m._p=new Promise(function(g,E){m.onload=g,m.onerror=E}),xt(c,"link",s),t.state.loading|=4,wl(c,a.precedence,e),t.instance=c;case"script":return c=Qs(a.src),(u=e.querySelector(Ii(c)))?(t.instance=u,pt(u),u):(s=a,(u=fa.get(c))&&(s=j({},a),uc(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),pt(u),xt(u,"link",s),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,wl(s,a.precedence,e));return t.instance}function wl(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,m=0;m<s.length;m++){var g=s[m];if(g.dataset.precedence===t)c=g;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var El=null;function Cm(e,t,a){if(El===null){var s=new Map,u=El=new Map;u.set(a,s)}else u=El,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var c=a[u];if(!(c[Ot]||c[He]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var g=s.get(m);g?g.push(c):s.set(m,[c])}}return s}function km(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ng(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sg(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ys(s.href),c=t.querySelector(Zi(u));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Tl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,pt(c);return}c=t.ownerDocument||t,s=Om(s),(u=fa.get(u))&&oc(s,u),c=c.createElement("link"),pt(c);var m=c;m._p=new Promise(function(g,E){m.onload=g,m.onerror=E}),xt(c,"link",s),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Tl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var cc=0;function ig(e,t){return e.stylesheets&&e.count===0&&Ol(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Ol(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&cc===0&&(cc=62500*By());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ol(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>cc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Tl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ol(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Al=null;function Ol(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Al=new Map,t.forEach(rg,e),Al=null,Tl.call(e))}function rg(e,t){if(!(t.state.loading&4)){var a=Al.get(e);if(a)var s=a.get(null);else{a=new Map,Al.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var m=u[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),s=m)}s&&a.set(null,s)}u=t.instance,m=u.getAttribute("data-precedence"),c=a.get(m)||s,c===s&&a.set(null,u),a.set(m,u),this.count++,s=Tl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Fi={$$typeof:L,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function lg(e,t,a,s,u,c,m,g,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ea(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.hiddenUpdates=Ea(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function zm(e,t,a,s,u,c,m,g,E,q,Q,Z){return e=new lg(e,t,a,m,E,q,Q,Z,g),t=1,c===!0&&(t|=24),c=Qt(3,null,null,t),e.current=c,c.stateNode=e,t=Go(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:t},Xo(c),e}function Dm(e){return e?(e=Ss,e):Ss}function qm(e,t,a,s,u,c){u=Dm(u),s.context===null?s.context=u:s.pendingContext=u,s=dn(t),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=hn(e,s,t),a!==null&&(Ht(a,e,t),Ci(a,e,t))}function Um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function dc(e,t){Um(e,t),(e=e.alternate)&&Um(e,t)}function Mm(e){if(e.tag===13||e.tag===31){var t=$n(e,67108864);t!==null&&Ht(t,e,67108864),dc(e,67108864)}}function Lm(e){if(e.tag===13||e.tag===31){var t=It();t=za(t);var a=$n(e,t);a!==null&&Ht(a,e,t),dc(e,t)}}var Nl=!0;function og(e,t,a,s){var u=$.T;$.T=null;var c=ee.p;try{ee.p=2,hc(e,t,a,s)}finally{ee.p=c,$.T=u}}function ug(e,t,a,s){var u=$.T;$.T=null;var c=ee.p;try{ee.p=8,hc(e,t,a,s)}finally{ee.p=c,$.T=u}}function hc(e,t,a,s){if(Nl){var u=fc(s);if(u===null)Fu(e,t,s,Cl,a),Hm(e,s);else if(dg(u,e,t,a,s))s.stopPropagation();else if(Hm(e,s),t&4&&-1<cg.indexOf(e)){for(;u!==null;){var c=Ct(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=wa(c.pendingLanes);if(m!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;m;){var E=1<<31-ht(m);g.entanglements[1]|=E,m&=~E}Na(c),(Me&6)===0&&(hl=Qe()+500,Qi(0))}}break;case 31:case 13:g=$n(c,2),g!==null&&Ht(g,c,2),ml(),dc(c,2)}if(c=fc(s),c===null&&Fu(e,t,s,Cl,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else Fu(e,t,s,null,a)}}function fc(e){return e=po(e),mc(e)}var Cl=null;function mc(e){if(Cl=null,e=Ze(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cl=e,null}function Bm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ro()){case pa:return 2;case Gt:return 8;case Ra:case lo:return 32;case Rn:return 268435456;default:return 32}default:return 32}}var pc=!1,Sn=null,wn=null,En=null,Wi=new Map,er=new Map,Tn=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hm(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function tr(e,t,a,s,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},t!==null&&(t=Ct(t),t!==null&&Mm(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function dg(e,t,a,s,u){switch(t){case"focusin":return Sn=tr(Sn,e,t,a,s,u),!0;case"dragenter":return wn=tr(wn,e,t,a,s,u),!0;case"mouseover":return En=tr(En,e,t,a,s,u),!0;case"pointerover":var c=u.pointerId;return Wi.set(c,tr(Wi.get(c)||null,e,t,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,er.set(c,tr(er.get(c)||null,e,t,a,s,u)),!0}return!1}function $m(e){var t=Ze(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,Sr(e.priority,function(){Lm(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,Sr(e.priority,function(){Lm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=fc(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);mo=s,a.target.dispatchEvent(s),mo=null}else return t=Ct(a),t!==null&&Mm(t),e.blockedOn=a,!1;t.shift()}return!0}function Vm(e,t,a){kl(e)&&a.delete(t)}function hg(){pc=!1,Sn!==null&&kl(Sn)&&(Sn=null),wn!==null&&kl(wn)&&(wn=null),En!==null&&kl(En)&&(En=null),Wi.forEach(Vm),er.forEach(Vm)}function Rl(e,t){e.blockedOn===t&&(e.blockedOn=null,pc||(pc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,hg)))}var zl=null;function Gm(e){zl!==e&&(zl=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){zl===e&&(zl=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],u=e[t+2];if(typeof s!="function"){if(mc(s||a)===null)continue;break}var c=Ct(a);c!==null&&(e.splice(t,3),t-=3,fu(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Xs(e){function t(E){return Rl(E,e)}Sn!==null&&Rl(Sn,e),wn!==null&&Rl(wn,e),En!==null&&Rl(En,e),Wi.forEach(t),er.forEach(t);for(var a=0;a<Tn.length;a++){var s=Tn[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Tn.length&&(a=Tn[0],a.blockedOn===null);)$m(a),a.blockedOn===null&&Tn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],m=u[b]||null;if(typeof c=="function")m||Gm(a);else if(m){var g=null;if(c&&c.hasAttribute("formAction")){if(u=c,m=c[b]||null)g=m.formAction;else if(mc(u)!==null)continue}else g=m.action;typeof g=="function"?a[s+1]=g:(a.splice(s,3),s-=3),Gm(a)}}}function Km(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return u=m})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function vc(e){this._internalRoot=e}Dl.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,s=It();qm(a,s,e,t,null,null)},Dl.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qm(e.current,2,null,e,null,null),ml(),t[A]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=nn();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Tn.length&&t!==0&&t<Tn[a].priority;a++);Tn.splice(a,0,e),a===0&&$m(e)}};var Ym=n.version;if(Ym!=="19.2.0")throw Error(l(527,Ym,"19.2.0"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=y(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var fg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Ke=ql.inject(fg),Et=ql}catch{}}return nr.createRoot=function(e,t){if(!d(e))throw Error(l(299));var a=!1,s="",u=Ih,c=Fh,m=Wh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=zm(e,1,!1,null,null,a,s,null,u,c,m,Km),e[A]=t.current,Iu(e),new vc(t)},nr.hydrateRoot=function(e,t,a){if(!d(e))throw Error(l(299));var s=!1,u="",c=Ih,m=Fh,g=Wh,E=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),t=zm(e,1,!0,t,a??null,s,u,E,c,m,g,Km),t.context=Dm(null),a=t.current,s=It(),s=za(s),u=dn(s),u.callback=null,hn(a,u,s),a=s,t.current.lanes=a,Tt(t,a),Na(t),e[A]=t.current,Iu(e),new Dl(t)},nr.version="19.2.0",nr}var tp;function Eg(){if(tp)return bc.exports;tp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),bc.exports=wg(),bc.exports}var Tg=Eg();const Ag="modulepreload",Og=function(i){return"/"+i},ap={},ir=function(n,r,l){let d=Promise.resolve();if(r&&r.length>0){let v=function(y){return Promise.all(y.map(_=>Promise.resolve(_).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=f?.nonce||f?.getAttribute("nonce");d=v(r.map(y=>{if(y=Og(y),y in ap)return;ap[y]=!0;const _=y.endsWith(".css"),j=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${j}`))return;const S=document.createElement("link");if(S.rel=_?"stylesheet":Ag,_||(S.as="script"),S.crossOrigin="",S.href=y,p&&S.setAttribute("nonce",p),document.head.appendChild(S),_)return new Promise((w,k)=>{S.addEventListener("load",w),S.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${y}`)))})}))}function h(f){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=f,window.dispatchEvent(p),!p.defaultPrevented)throw f}return d.then(f=>{for(const p of f||[])p.status==="rejected"&&h(p.reason);return n().catch(h)})};const Ng=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rp=(...i)=>i.filter((n,r,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===r).join(" ").trim();var Cg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const kg=K.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:d="",children:h,iconNode:f,...p},v)=>K.createElement("svg",{ref:v,...Cg,width:n,height:n,stroke:i,strokeWidth:l?Number(r)*24/Number(n):r,className:Rp("lucide",d),...p},[...f.map(([y,_])=>K.createElement(y,_)),...Array.isArray(h)?h:[h]]));const xe=(i,n)=>{const r=K.forwardRef(({className:l,...d},h)=>K.createElement(kg,{ref:h,iconNode:n,className:Rp(`lucide-${Ng(i)}`,l),...d}));return r.displayName=`${i}`,r};const dt=xe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const Rg=xe("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);const rr=xe("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const ei=xe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);const Gl=xe("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);const np=xe("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);const zp=xe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const cr=xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const zg=xe("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);const ka=xe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);const ui=xe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Dg=xe("ClipboardPlus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);const qg=xe("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);const es=xe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const Fl=xe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);const ls=xe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const Zc=xe("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);const Dp=xe("FileChartColumn",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);const Ug=xe("HardHat",[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]);const qp=xe("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);const Mg=xe("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);const Dc=xe("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const Lg=xe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);const yt=xe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);const qc=xe("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);const Bg=xe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);const Ic=xe("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);const Up=xe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const Hg=xe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const $g=xe("MoveHorizontal",[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]]);const Vg=xe("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);const Yl=xe("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);const sp=xe("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);const Wa=xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const ip=xe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Gg=xe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const li=xe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Kg=xe("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const Mp=xe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Yg=xe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);const Qg=xe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);const Xg=xe("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);const Lp=xe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const Uc=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Wl(i,n){var r={};for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&n.indexOf(l)<0&&(r[l]=i[l]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(i);d<l.length;d++)n.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(i,l[d])&&(r[l[d]]=i[l[d]]);return r}function Jg(i,n,r,l){function d(h){return h instanceof r?h:new r(function(f){f(h)})}return new(r||(r=Promise))(function(h,f){function p(_){try{y(l.next(_))}catch(j){f(j)}}function v(_){try{y(l.throw(_))}catch(j){f(j)}}function y(_){_.done?h(_.value):d(_.value).then(p,v)}y((l=l.apply(i,n||[])).next())})}const Pg=i=>i?(...n)=>i(...n):(...n)=>fetch(...n);class Fc extends Error{constructor(n,r="FunctionsError",l){super(n),this.name=r,this.context=l}}class Zg extends Fc{constructor(n){super("Failed to send a request to the Edge Function","FunctionsFetchError",n)}}class rp extends Fc{constructor(n){super("Relay Error invoking the Edge Function","FunctionsRelayError",n)}}class lp extends Fc{constructor(n){super("Edge Function returned a non-2xx status code","FunctionsHttpError",n)}}var Mc;(function(i){i.Any="any",i.ApNortheast1="ap-northeast-1",i.ApNortheast2="ap-northeast-2",i.ApSouth1="ap-south-1",i.ApSoutheast1="ap-southeast-1",i.ApSoutheast2="ap-southeast-2",i.CaCentral1="ca-central-1",i.EuCentral1="eu-central-1",i.EuWest1="eu-west-1",i.EuWest2="eu-west-2",i.EuWest3="eu-west-3",i.SaEast1="sa-east-1",i.UsEast1="us-east-1",i.UsWest1="us-west-1",i.UsWest2="us-west-2"})(Mc||(Mc={}));class Ig{constructor(n,{headers:r={},customFetch:l,region:d=Mc.Any}={}){this.url=n,this.headers=r,this.region=d,this.fetch=Pg(l)}setAuth(n){this.headers.Authorization=`Bearer ${n}`}invoke(n){return Jg(this,arguments,void 0,function*(r,l={}){var d;let h,f;try{const{headers:p,method:v,body:y,signal:_,timeout:j}=l;let S={},{region:w}=l;w||(w=this.region);const k=new URL(`${this.url}/${r}`);w&&w!=="any"&&(S["x-region"]=w,k.searchParams.set("forceFunctionRegion",w));let O;y&&(p&&!Object.prototype.hasOwnProperty.call(p,"Content-Type")||!p)?typeof Blob<"u"&&y instanceof Blob||y instanceof ArrayBuffer?(S["Content-Type"]="application/octet-stream",O=y):typeof y=="string"?(S["Content-Type"]="text/plain",O=y):typeof FormData<"u"&&y instanceof FormData?O=y:(S["Content-Type"]="application/json",O=JSON.stringify(y)):y&&typeof y!="string"&&!(typeof Blob<"u"&&y instanceof Blob)&&!(y instanceof ArrayBuffer)&&!(typeof FormData<"u"&&y instanceof FormData)?O=JSON.stringify(y):O=y;let B=_;j&&(f=new AbortController,h=setTimeout(()=>f.abort(),j),_?(B=f.signal,_.addEventListener("abort",()=>f.abort())):B=f.signal);const T=yield this.fetch(k.toString(),{method:v||"POST",headers:Object.assign(Object.assign(Object.assign({},S),this.headers),p),body:O,signal:B}).catch(G=>{throw new Zg(G)}),C=T.headers.get("x-relay-error");if(C&&C==="true")throw new rp(T);if(!T.ok)throw new lp(T);let L=((d=T.headers.get("Content-Type"))!==null&&d!==void 0?d:"text/plain").split(";")[0].trim(),X;return L==="application/json"?X=yield T.json():L==="application/octet-stream"||L==="application/pdf"?X=yield T.blob():L==="text/event-stream"?X=T:L==="multipart/form-data"?X=yield T.formData():X=yield T.text(),{data:X,error:null,response:T}}catch(p){return{data:null,error:p,response:p instanceof lp||p instanceof rp?p.context:void 0}}finally{h&&clearTimeout(h)}})}}var Fg=class extends Error{constructor(i){super(i.message),this.name="PostgrestError",this.details=i.details,this.hint=i.hint,this.code=i.code}},Wg=class{constructor(i){var n,r,l;this.shouldThrowOnError=!1,this.method=i.method,this.url=i.url,this.headers=new Headers(i.headers),this.schema=i.schema,this.body=i.body,this.shouldThrowOnError=(n=i.shouldThrowOnError)!==null&&n!==void 0?n:!1,this.signal=i.signal,this.isMaybeSingle=(r=i.isMaybeSingle)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(l=i.urlLengthLimit)!==null&&l!==void 0?l:8e3,i.fetch?this.fetch=i.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(i,n){return this.headers=new Headers(this.headers),this.headers.set(i,n),this}then(i,n){var r=this;this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const l=this.fetch;let d=l(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async h=>{let f=null,p=null,v=null,y=h.status,_=h.statusText;if(h.ok){var j,S;if(r.method!=="HEAD"){var w;const T=await h.text();T===""||(r.headers.get("Accept")==="text/csv"||r.headers.get("Accept")&&(!((w=r.headers.get("Accept"))===null||w===void 0)&&w.includes("application/vnd.pgrst.plan+text"))?p=T:p=JSON.parse(T))}const O=(j=r.headers.get("Prefer"))===null||j===void 0?void 0:j.match(/count=(exact|planned|estimated)/),B=(S=h.headers.get("content-range"))===null||S===void 0?void 0:S.split("/");O&&B&&B.length>1&&(v=parseInt(B[1])),r.isMaybeSingle&&r.method==="GET"&&Array.isArray(p)&&(p.length>1?(f={code:"PGRST116",details:`Results contain ${p.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},p=null,v=null,y=406,_="Not Acceptable"):p.length===1?p=p[0]:p=null)}else{var k;const O=await h.text();try{f=JSON.parse(O),Array.isArray(f)&&h.status===404&&(p=[],f=null,y=200,_="OK")}catch{h.status===404&&O===""?(y=204,_="No Content"):f={message:O}}if(f&&r.isMaybeSingle&&(!(f==null||(k=f.details)===null||k===void 0)&&k.includes("0 rows"))&&(f=null,y=200,_="OK"),f&&r.shouldThrowOnError)throw new Fg(f)}return{error:f,data:p,count:v,status:y,statusText:_}});return this.shouldThrowOnError||(d=d.catch(h=>{var f;let p="",v="",y="";const _=h?.cause;if(_){var j,S,w,k;const T=(j=_?.message)!==null&&j!==void 0?j:"",C=(S=_?.code)!==null&&S!==void 0?S:"";p=`${(w=h?.name)!==null&&w!==void 0?w:"FetchError"}: ${h?.message}`,p+=`

Caused by: ${(k=_?.name)!==null&&k!==void 0?k:"Error"}: ${T}`,C&&(p+=` (${C})`),_?.stack&&(p+=`
${_.stack}`)}else{var O;p=(O=h?.stack)!==null&&O!==void 0?O:""}const B=this.url.toString().length;return h?.name==="AbortError"||h?.code==="ABORT_ERR"?(y="",v="Request was aborted (timeout or manual cancellation)",B>this.urlLengthLimit&&(v+=`. Note: Your request URL is ${B} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(_?.name==="HeadersOverflowError"||_?.code==="UND_ERR_HEADERS_OVERFLOW")&&(y="",v="HTTP headers exceeded server limits (typically 16KB)",B>this.urlLengthLimit&&(v+=`. Your request URL is ${B} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{error:{message:`${(f=h?.name)!==null&&f!==void 0?f:"FetchError"}: ${h?.message}`,details:p,hint:v,code:y},data:null,count:null,status:0,statusText:""}})),d.then(i,n)}returns(){return this}overrideTypes(){return this}},e0=class extends Wg{select(i){let n=!1;const r=(i??"*").split("").map(l=>/\s/.test(l)&&!n?"":(l==='"'&&(n=!n),l)).join("");return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(i,{ascending:n=!0,nullsFirst:r,foreignTable:l,referencedTable:d=l}={}){const h=d?`${d}.order`:"order",f=this.url.searchParams.get(h);return this.url.searchParams.set(h,`${f?`${f},`:""}${i}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(i,{foreignTable:n,referencedTable:r=n}={}){const l=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(l,`${i}`),this}range(i,n,{foreignTable:r,referencedTable:l=r}={}){const d=typeof l>"u"?"offset":`${l}.offset`,h=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(d,`${i}`),this.url.searchParams.set(h,`${n-i+1}`),this}abortSignal(i){return this.signal=i,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:i=!1,verbose:n=!1,settings:r=!1,buffers:l=!1,wal:d=!1,format:h="text"}={}){var f;const p=[i?"analyze":null,n?"verbose":null,r?"settings":null,l?"buffers":null,d?"wal":null].filter(Boolean).join("|"),v=(f=this.headers.get("Accept"))!==null&&f!==void 0?f:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${h}; for="${v}"; options=${p};`),h==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(i){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${i}`),this}};const op=new RegExp("[,()]");var ti=class extends e0{eq(i,n){return this.url.searchParams.append(i,`eq.${n}`),this}neq(i,n){return this.url.searchParams.append(i,`neq.${n}`),this}gt(i,n){return this.url.searchParams.append(i,`gt.${n}`),this}gte(i,n){return this.url.searchParams.append(i,`gte.${n}`),this}lt(i,n){return this.url.searchParams.append(i,`lt.${n}`),this}lte(i,n){return this.url.searchParams.append(i,`lte.${n}`),this}like(i,n){return this.url.searchParams.append(i,`like.${n}`),this}likeAllOf(i,n){return this.url.searchParams.append(i,`like(all).{${n.join(",")}}`),this}likeAnyOf(i,n){return this.url.searchParams.append(i,`like(any).{${n.join(",")}}`),this}ilike(i,n){return this.url.searchParams.append(i,`ilike.${n}`),this}ilikeAllOf(i,n){return this.url.searchParams.append(i,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(i,n){return this.url.searchParams.append(i,`ilike(any).{${n.join(",")}}`),this}regexMatch(i,n){return this.url.searchParams.append(i,`match.${n}`),this}regexIMatch(i,n){return this.url.searchParams.append(i,`imatch.${n}`),this}is(i,n){return this.url.searchParams.append(i,`is.${n}`),this}isDistinct(i,n){return this.url.searchParams.append(i,`isdistinct.${n}`),this}in(i,n){const r=Array.from(new Set(n)).map(l=>typeof l=="string"&&op.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(i,`in.(${r})`),this}notIn(i,n){const r=Array.from(new Set(n)).map(l=>typeof l=="string"&&op.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(i,`not.in.(${r})`),this}contains(i,n){return typeof n=="string"?this.url.searchParams.append(i,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(i,`cs.{${n.join(",")}}`):this.url.searchParams.append(i,`cs.${JSON.stringify(n)}`),this}containedBy(i,n){return typeof n=="string"?this.url.searchParams.append(i,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(i,`cd.{${n.join(",")}}`):this.url.searchParams.append(i,`cd.${JSON.stringify(n)}`),this}rangeGt(i,n){return this.url.searchParams.append(i,`sr.${n}`),this}rangeGte(i,n){return this.url.searchParams.append(i,`nxl.${n}`),this}rangeLt(i,n){return this.url.searchParams.append(i,`sl.${n}`),this}rangeLte(i,n){return this.url.searchParams.append(i,`nxr.${n}`),this}rangeAdjacent(i,n){return this.url.searchParams.append(i,`adj.${n}`),this}overlaps(i,n){return typeof n=="string"?this.url.searchParams.append(i,`ov.${n}`):this.url.searchParams.append(i,`ov.{${n.join(",")}}`),this}textSearch(i,n,{config:r,type:l}={}){let d="";l==="plain"?d="pl":l==="phrase"?d="ph":l==="websearch"&&(d="w");const h=r===void 0?"":`(${r})`;return this.url.searchParams.append(i,`${d}fts${h}.${n}`),this}match(i){return Object.entries(i).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(i,n,r){return this.url.searchParams.append(i,`not.${n}.${r}`),this}or(i,{foreignTable:n,referencedTable:r=n}={}){const l=r?`${r}.or`:"or";return this.url.searchParams.append(l,`(${i})`),this}filter(i,n,r){return this.url.searchParams.append(i,`${n}.${r}`),this}},t0=class{constructor(i,{headers:n={},schema:r,fetch:l,urlLengthLimit:d=8e3}){this.url=i,this.headers=new Headers(n),this.schema=r,this.fetch=l,this.urlLengthLimit=d}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(i,n){const{head:r=!1,count:l}=n??{},d=r?"HEAD":"GET";let h=!1;const f=(i??"*").split("").map(y=>/\s/.test(y)&&!h?"":(y==='"'&&(h=!h),y)).join(""),{url:p,headers:v}=this.cloneRequestState();return p.searchParams.set("select",f),l&&v.append("Prefer",`count=${l}`),new ti({method:d,url:p,headers:v,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}insert(i,{count:n,defaultToNull:r=!0}={}){var l;const d="POST",{url:h,headers:f}=this.cloneRequestState();if(n&&f.append("Prefer",`count=${n}`),r||f.append("Prefer","missing=default"),Array.isArray(i)){const p=i.reduce((v,y)=>v.concat(Object.keys(y)),[]);if(p.length>0){const v=[...new Set(p)].map(y=>`"${y}"`);h.searchParams.set("columns",v.join(","))}}return new ti({method:d,url:h,headers:f,schema:this.schema,body:i,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch,urlLengthLimit:this.urlLengthLimit})}upsert(i,{onConflict:n,ignoreDuplicates:r=!1,count:l,defaultToNull:d=!0}={}){var h;const f="POST",{url:p,headers:v}=this.cloneRequestState();if(v.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),n!==void 0&&p.searchParams.set("on_conflict",n),l&&v.append("Prefer",`count=${l}`),d||v.append("Prefer","missing=default"),Array.isArray(i)){const y=i.reduce((_,j)=>_.concat(Object.keys(j)),[]);if(y.length>0){const _=[...new Set(y)].map(j=>`"${j}"`);p.searchParams.set("columns",_.join(","))}}return new ti({method:f,url:p,headers:v,schema:this.schema,body:i,fetch:(h=this.fetch)!==null&&h!==void 0?h:fetch,urlLengthLimit:this.urlLengthLimit})}update(i,{count:n}={}){var r;const l="PATCH",{url:d,headers:h}=this.cloneRequestState();return n&&h.append("Prefer",`count=${n}`),new ti({method:l,url:d,headers:h,schema:this.schema,body:i,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit})}delete({count:i}={}){var n;const r="DELETE",{url:l,headers:d}=this.cloneRequestState();return i&&d.append("Prefer",`count=${i}`),new ti({method:r,url:l,headers:d,schema:this.schema,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit})}};function dr(i){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},dr(i)}function a0(i,n){if(dr(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var l=r.call(i,n);if(dr(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function n0(i){var n=a0(i,"string");return dr(n)=="symbol"?n:n+""}function s0(i,n,r){return(n=n0(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function up(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),r.push.apply(r,l)}return r}function Ul(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?up(Object(r),!0).forEach(function(l){s0(i,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):up(Object(r)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(r,l))})}return i}var i0=class Bp{constructor(n,{headers:r={},schema:l,fetch:d,timeout:h,urlLengthLimit:f=8e3}={}){this.url=n,this.headers=new Headers(r),this.schemaName=l,this.urlLengthLimit=f;const p=d??globalThis.fetch;h!==void 0&&h>0?this.fetch=(v,y)=>{const _=new AbortController,j=setTimeout(()=>_.abort(),h),S=y?.signal;if(S){if(S.aborted)return clearTimeout(j),p(v,y);const w=()=>{clearTimeout(j),_.abort()};return S.addEventListener("abort",w,{once:!0}),p(v,Ul(Ul({},y),{},{signal:_.signal})).finally(()=>{clearTimeout(j),S.removeEventListener("abort",w)})}return p(v,Ul(Ul({},y),{},{signal:_.signal})).finally(()=>clearTimeout(j))}:this.fetch=p}from(n){if(!n||typeof n!="string"||n.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new t0(new URL(`${this.url}/${n}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}schema(n){return new Bp(this.url,{headers:this.headers,schema:n,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}rpc(n,r={},{head:l=!1,get:d=!1,count:h}={}){var f;let p;const v=new URL(`${this.url}/rpc/${n}`);let y;const _=w=>w!==null&&typeof w=="object"&&(!Array.isArray(w)||w.some(_)),j=l&&Object.values(r).some(_);j?(p="POST",y=r):l||d?(p=l?"HEAD":"GET",Object.entries(r).filter(([w,k])=>k!==void 0).map(([w,k])=>[w,Array.isArray(k)?`{${k.join(",")}}`:`${k}`]).forEach(([w,k])=>{v.searchParams.append(w,k)})):(p="POST",y=r);const S=new Headers(this.headers);return j?S.set("Prefer",h?`count=${h},return=minimal`:"return=minimal"):h&&S.set("Prefer",`count=${h}`),new ti({method:p,url:v,headers:S,schema:this.schemaName,body:y,fetch:(f=this.fetch)!==null&&f!==void 0?f:fetch,urlLengthLimit:this.urlLengthLimit})}};class r0{constructor(){}static detectEnvironment(){var n;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((n=navigator.userAgent)===null||n===void 0)&&n.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const l=r.versions;if(l&&l.node){const d=l.node,h=parseInt(d.replace(/^v/,"").split(".")[0]);return h>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${h} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${h} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const n=this.detectEnvironment();if(n.constructor)return n.constructor;let r=n.error||"WebSocket not supported in this environment.";throw n.workaround&&(r+=`

Suggested solution: ${n.workaround}`),new Error(r)}static createWebSocket(n,r){const l=this.getWebSocketConstructor();return new l(n,r)}static isWebSocketSupported(){try{const n=this.detectEnvironment();return n.type==="native"||n.type==="ws"}catch{return!1}}}const l0="2.95.3",o0=`realtime-js/${l0}`,u0="1.0.0",Hp="2.0.0",cp=Hp,Lc=1e4,c0=1e3,d0=100;var On;(function(i){i[i.connecting=0]="connecting",i[i.open=1]="open",i[i.closing=2]="closing",i[i.closed=3]="closed"})(On||(On={}));var mt;(function(i){i.closed="closed",i.errored="errored",i.joined="joined",i.joining="joining",i.leaving="leaving"})(mt||(mt={}));var ja;(function(i){i.close="phx_close",i.error="phx_error",i.join="phx_join",i.reply="phx_reply",i.leave="phx_leave",i.access_token="access_token"})(ja||(ja={}));var Bc;(function(i){i.websocket="websocket"})(Bc||(Bc={}));var ss;(function(i){i.Connecting="connecting",i.Open="open",i.Closing="closing",i.Closed="closed"})(ss||(ss={}));class h0{constructor(n){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=n??[]}encode(n,r){if(n.event===this.BROADCAST_EVENT&&!(n.payload instanceof ArrayBuffer)&&typeof n.payload.event=="string")return r(this._binaryEncodeUserBroadcastPush(n));let l=[n.join_ref,n.ref,n.topic,n.event,n.payload];return r(JSON.stringify(l))}_binaryEncodeUserBroadcastPush(n){var r;return this._isArrayBuffer((r=n.payload)===null||r===void 0?void 0:r.payload)?this._encodeBinaryUserBroadcastPush(n):this._encodeJsonUserBroadcastPush(n)}_encodeBinaryUserBroadcastPush(n){var r,l;const d=(l=(r=n.payload)===null||r===void 0?void 0:r.payload)!==null&&l!==void 0?l:new ArrayBuffer(0);return this._encodeUserBroadcastPush(n,this.BINARY_ENCODING,d)}_encodeJsonUserBroadcastPush(n){var r,l;const d=(l=(r=n.payload)===null||r===void 0?void 0:r.payload)!==null&&l!==void 0?l:{},f=new TextEncoder().encode(JSON.stringify(d)).buffer;return this._encodeUserBroadcastPush(n,this.JSON_ENCODING,f)}_encodeUserBroadcastPush(n,r,l){var d,h;const f=n.topic,p=(d=n.ref)!==null&&d!==void 0?d:"",v=(h=n.join_ref)!==null&&h!==void 0?h:"",y=n.payload.event,_=this.allowedMetadataKeys?this._pick(n.payload,this.allowedMetadataKeys):{},j=Object.keys(_).length===0?"":JSON.stringify(_);if(v.length>255)throw new Error(`joinRef length ${v.length} exceeds maximum of 255`);if(p.length>255)throw new Error(`ref length ${p.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`topic length ${f.length} exceeds maximum of 255`);if(y.length>255)throw new Error(`userEvent length ${y.length} exceeds maximum of 255`);if(j.length>255)throw new Error(`metadata length ${j.length} exceeds maximum of 255`);const S=this.USER_BROADCAST_PUSH_META_LENGTH+v.length+p.length+f.length+y.length+j.length,w=new ArrayBuffer(this.HEADER_LENGTH+S);let k=new DataView(w),O=0;k.setUint8(O++,this.KINDS.userBroadcastPush),k.setUint8(O++,v.length),k.setUint8(O++,p.length),k.setUint8(O++,f.length),k.setUint8(O++,y.length),k.setUint8(O++,j.length),k.setUint8(O++,r),Array.from(v,T=>k.setUint8(O++,T.charCodeAt(0))),Array.from(p,T=>k.setUint8(O++,T.charCodeAt(0))),Array.from(f,T=>k.setUint8(O++,T.charCodeAt(0))),Array.from(y,T=>k.setUint8(O++,T.charCodeAt(0))),Array.from(j,T=>k.setUint8(O++,T.charCodeAt(0)));var B=new Uint8Array(w.byteLength+l.byteLength);return B.set(new Uint8Array(w),0),B.set(new Uint8Array(l),w.byteLength),B.buffer}decode(n,r){if(this._isArrayBuffer(n)){let l=this._binaryDecode(n);return r(l)}if(typeof n=="string"){const l=JSON.parse(n),[d,h,f,p,v]=l;return r({join_ref:d,ref:h,topic:f,event:p,payload:v})}return r({})}_binaryDecode(n){const r=new DataView(n),l=r.getUint8(0),d=new TextDecoder;switch(l){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(n,r,d)}}_decodeUserBroadcast(n,r,l){const d=r.getUint8(1),h=r.getUint8(2),f=r.getUint8(3),p=r.getUint8(4);let v=this.HEADER_LENGTH+4;const y=l.decode(n.slice(v,v+d));v=v+d;const _=l.decode(n.slice(v,v+h));v=v+h;const j=l.decode(n.slice(v,v+f));v=v+f;const S=n.slice(v,n.byteLength),w=p===this.JSON_ENCODING?JSON.parse(l.decode(S)):S,k={type:this.BROADCAST_EVENT,event:_,payload:w};return f>0&&(k.meta=JSON.parse(j)),{join_ref:null,ref:null,topic:y,event:this.BROADCAST_EVENT,payload:k}}_isArrayBuffer(n){var r;return n instanceof ArrayBuffer||((r=n?.constructor)===null||r===void 0?void 0:r.name)==="ArrayBuffer"}_pick(n,r){return!n||typeof n!="object"?{}:Object.fromEntries(Object.entries(n).filter(([l])=>r.includes(l)))}}class $p{constructor(n,r){this.callback=n,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=n,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Je;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})(Je||(Je={}));const dp=(i,n,r={})=>{var l;const d=(l=r.skipTypes)!==null&&l!==void 0?l:[];return n?Object.keys(n).reduce((h,f)=>(h[f]=f0(f,i,n,d),h),{}):{}},f0=(i,n,r,l)=>{const d=n.find(p=>p.name===i),h=d?.type,f=r[i];return h&&!l.includes(h)?Vp(h,f):Hc(f)},Vp=(i,n)=>{if(i.charAt(0)==="_"){const r=i.slice(1,i.length);return y0(n,r)}switch(i){case Je.bool:return m0(n);case Je.float4:case Je.float8:case Je.int2:case Je.int4:case Je.int8:case Je.numeric:case Je.oid:return p0(n);case Je.json:case Je.jsonb:return v0(n);case Je.timestamp:return g0(n);case Je.abstime:case Je.date:case Je.daterange:case Je.int4range:case Je.int8range:case Je.money:case Je.reltime:case Je.text:case Je.time:case Je.timestamptz:case Je.timetz:case Je.tsrange:case Je.tstzrange:return Hc(n);default:return Hc(n)}},Hc=i=>i,m0=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},p0=i=>{if(typeof i=="string"){const n=parseFloat(i);if(!Number.isNaN(n))return n}return i},v0=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch{return i}return i},y0=(i,n)=>{if(typeof i!="string")return i;const r=i.length-1,l=i[r];if(i[0]==="{"&&l==="}"){let h;const f=i.slice(1,r);try{h=JSON.parse("["+f+"]")}catch{h=f?f.split(","):[]}return h.map(p=>Vp(n,p))}return i},g0=i=>typeof i=="string"?i.replace(" ","T"):i,Gp=i=>{const n=new URL(i);return n.protocol=n.protocol.replace(/^ws/i,"http"),n.pathname=n.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),n.pathname===""||n.pathname==="/"?n.pathname="/api/broadcast":n.pathname=n.pathname+"/api/broadcast",n.href};class Sc{constructor(n,r,l={},d=Lc){this.channel=n,this.event=r,this.payload=l,this.timeout=d,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(n){this.timeout=n,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(n){this.payload=Object.assign(Object.assign({},this.payload),n)}receive(n,r){var l;return this._hasReceived(n)&&r((l=this.receivedResp)===null||l===void 0?void 0:l.response),this.recHooks.push({status:n,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const n=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},n),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(n,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:n,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:n,response:r}){this.recHooks.filter(l=>l.status===n).forEach(l=>l.callback(r))}_hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}}var hp;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(hp||(hp={}));class or{constructor(n,r){this.channel=n,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const l=r?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(l.state,{},d=>{const{onJoin:h,onLeave:f,onSync:p}=this.caller;this.joinRef=this.channel._joinRef(),this.state=or.syncState(this.state,d,h,f),this.pendingDiffs.forEach(v=>{this.state=or.syncDiff(this.state,v,h,f)}),this.pendingDiffs=[],p()}),this.channel._on(l.diff,{},d=>{const{onJoin:h,onLeave:f,onSync:p}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(d):(this.state=or.syncDiff(this.state,d,h,f),p())}),this.onJoin((d,h,f)=>{this.channel._trigger("presence",{event:"join",key:d,currentPresences:h,newPresences:f})}),this.onLeave((d,h,f)=>{this.channel._trigger("presence",{event:"leave",key:d,currentPresences:h,leftPresences:f})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(n,r,l,d){const h=this.cloneDeep(n),f=this.transformState(r),p={},v={};return this.map(h,(y,_)=>{f[y]||(v[y]=_)}),this.map(f,(y,_)=>{const j=h[y];if(j){const S=_.map(B=>B.presence_ref),w=j.map(B=>B.presence_ref),k=_.filter(B=>w.indexOf(B.presence_ref)<0),O=j.filter(B=>S.indexOf(B.presence_ref)<0);k.length>0&&(p[y]=k),O.length>0&&(v[y]=O)}else p[y]=_}),this.syncDiff(h,{joins:p,leaves:v},l,d)}static syncDiff(n,r,l,d){const{joins:h,leaves:f}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return l||(l=()=>{}),d||(d=()=>{}),this.map(h,(p,v)=>{var y;const _=(y=n[p])!==null&&y!==void 0?y:[];if(n[p]=this.cloneDeep(v),_.length>0){const j=n[p].map(w=>w.presence_ref),S=_.filter(w=>j.indexOf(w.presence_ref)<0);n[p].unshift(...S)}l(p,_,v)}),this.map(f,(p,v)=>{let y=n[p];if(!y)return;const _=v.map(j=>j.presence_ref);y=y.filter(j=>_.indexOf(j.presence_ref)<0),n[p]=y,d(p,y,v),y.length===0&&delete n[p]}),n}static map(n,r){return Object.getOwnPropertyNames(n).map(l=>r(l,n[l]))}static transformState(n){return n=this.cloneDeep(n),Object.getOwnPropertyNames(n).reduce((r,l)=>{const d=n[l];return"metas"in d?r[l]=d.metas.map(h=>(h.presence_ref=h.phx_ref,delete h.phx_ref,delete h.phx_ref_prev,h)):r[l]=d,r},{})}static cloneDeep(n){return JSON.parse(JSON.stringify(n))}onJoin(n){this.caller.onJoin=n}onLeave(n){this.caller.onLeave=n}onSync(n){this.caller.onSync=n}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var fp;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(fp||(fp={}));var ur;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes",i.SYSTEM="system"})(ur||(ur={}));var Fa;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(Fa||(Fa={}));class ii{constructor(n,r={config:{}},l){var d,h;if(this.topic=n,this.params=r,this.socket=l,this.bindings={},this.state=mt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=n.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new Sc(this,ja.join,this.params,this.timeout),this.rejoinTimer=new $p(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=mt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(f=>f.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=mt.closed,this.socket._remove(this)}),this._onError(f=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,f),this.state=mt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=mt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",f=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,f),this.state=mt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ja.reply,{},(f,p)=>{this._trigger(this._replyEventName(p),f)}),this.presence=new or(this),this.broadcastEndpointURL=Gp(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((h=(d=this.params.config)===null||d===void 0?void 0:d.broadcast)===null||h===void 0)&&h.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(n,r=this.timeout){var l,d,h;if(this.socket.isConnected()||this.socket.connect(),this.state==mt.closed){const{config:{broadcast:f,presence:p,private:v}}=this.params,y=(d=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(w=>w.filter))!==null&&d!==void 0?d:[],_=!!this.bindings[ur.PRESENCE]&&this.bindings[ur.PRESENCE].length>0||((h=this.params.config.presence)===null||h===void 0?void 0:h.enabled)===!0,j={},S={broadcast:f,presence:Object.assign(Object.assign({},p),{enabled:_}),postgres_changes:y,private:v};this.socket.accessTokenValue&&(j.access_token=this.socket.accessTokenValue),this._onError(w=>n?.(Fa.CHANNEL_ERROR,w)),this._onClose(()=>n?.(Fa.CLOSED)),this.updateJoinPayload(Object.assign({config:S},j)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:w})=>{var k;if(this.socket._isManualToken()||this.socket.setAuth(),w===void 0){n?.(Fa.SUBSCRIBED);return}else{const O=this.bindings.postgres_changes,B=(k=O?.length)!==null&&k!==void 0?k:0,T=[];for(let C=0;C<B;C++){const L=O[C],{filter:{event:X,schema:G,table:z,filter:I}}=L,Y=w&&w[C];if(Y&&Y.event===X&&ii.isFilterValueEqual(Y.schema,G)&&ii.isFilterValueEqual(Y.table,z)&&ii.isFilterValueEqual(Y.filter,I))T.push(Object.assign(Object.assign({},L),{id:Y.id}));else{this.unsubscribe(),this.state=mt.errored,n?.(Fa.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=T,n&&n(Fa.SUBSCRIBED);return}}).receive("error",w=>{this.state=mt.errored,n?.(Fa.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(w).join(", ")||"error")))}).receive("timeout",()=>{n?.(Fa.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(n,r={}){return await this.send({type:"presence",event:"track",payload:n},r.timeout||this.timeout)}async untrack(n={}){return await this.send({type:"presence",event:"untrack"},n)}on(n,r,l){return this.state===mt.joined&&n===ur.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(async()=>await this.subscribe())),this._on(n,r,l)}async httpSend(n,r,l={}){var d;if(r==null)return Promise.reject("Payload is required for httpSend()");const h={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(h.Authorization=`Bearer ${this.socket.accessTokenValue}`);const f={method:"POST",headers:h,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})},p=await this._fetchWithTimeout(this.broadcastEndpointURL,f,(d=l.timeout)!==null&&d!==void 0?d:this.timeout);if(p.status===202)return{success:!0};let v=p.statusText;try{const y=await p.json();v=y.error||y.message||v}catch{}return Promise.reject(new Error(v))}async send(n,r={}){var l,d;if(!this._canPush()&&n.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:h,payload:f}=n,p={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(p.Authorization=`Bearer ${this.socket.accessTokenValue}`);const v={method:"POST",headers:p,body:JSON.stringify({messages:[{topic:this.subTopic,event:h,payload:f,private:this.private}]})};try{const y=await this._fetchWithTimeout(this.broadcastEndpointURL,v,(l=r.timeout)!==null&&l!==void 0?l:this.timeout);return await((d=y.body)===null||d===void 0?void 0:d.cancel()),y.ok?"ok":"error"}catch(y){return y.name==="AbortError"?"timed out":"error"}}else return new Promise(h=>{var f,p,v;const y=this._push(n.type,n,r.timeout||this.timeout);n.type==="broadcast"&&!(!((v=(p=(f=this.params)===null||f===void 0?void 0:f.config)===null||p===void 0?void 0:p.broadcast)===null||v===void 0)&&v.ack)&&h("ok"),y.receive("ok",()=>h("ok")),y.receive("error",()=>h("error")),y.receive("timeout",()=>h("timed out"))})}updateJoinPayload(n){this.joinPush.updatePayload(n)}unsubscribe(n=this.timeout){this.state=mt.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ja.close,"leave",this._joinRef())};this.joinPush.destroy();let l=null;return new Promise(d=>{l=new Sc(this,ja.leave,{},n),l.receive("ok",()=>{r(),d("ok")}).receive("timeout",()=>{r(),d("timed out")}).receive("error",()=>{d("error")}),l.send(),this._canPush()||l.trigger("ok",{})}).finally(()=>{l?.destroy()})}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=mt.closed,this.bindings={}}async _fetchWithTimeout(n,r,l){const d=new AbortController,h=setTimeout(()=>d.abort(),l),f=await this.socket.fetch(n,Object.assign(Object.assign({},r),{signal:d.signal}));return clearTimeout(h),f}_push(n,r,l=this.timeout){if(!this.joinedOnce)throw`tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let d=new Sc(this,n,r,l);return this._canPush()?d.send():this._addToPushBuffer(d),d}_addToPushBuffer(n){if(n.startTimeout(),this.pushBuffer.push(n),this.pushBuffer.length>d0){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(n,r,l){return r}_isMember(n){return this.topic===n}_joinRef(){return this.joinPush.ref}_trigger(n,r,l){var d,h;const f=n.toLocaleLowerCase(),{close:p,error:v,leave:y,join:_}=ja;if(l&&[p,v,y,_].indexOf(f)>=0&&l!==this._joinRef())return;let S=this._onMessage(f,r,l);if(r&&!S)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(f)?(d=this.bindings.postgres_changes)===null||d===void 0||d.filter(w=>{var k,O,B;return((k=w.filter)===null||k===void 0?void 0:k.event)==="*"||((B=(O=w.filter)===null||O===void 0?void 0:O.event)===null||B===void 0?void 0:B.toLocaleLowerCase())===f}).map(w=>w.callback(S,l)):(h=this.bindings[f])===null||h===void 0||h.filter(w=>{var k,O,B,T,C,L;if(["broadcast","presence","postgres_changes"].includes(f))if("id"in w){const X=w.id,G=(k=w.filter)===null||k===void 0?void 0:k.event;return X&&((O=r.ids)===null||O===void 0?void 0:O.includes(X))&&(G==="*"||G?.toLocaleLowerCase()===((B=r.data)===null||B===void 0?void 0:B.type.toLocaleLowerCase()))}else{const X=(C=(T=w?.filter)===null||T===void 0?void 0:T.event)===null||C===void 0?void 0:C.toLocaleLowerCase();return X==="*"||X===((L=r?.event)===null||L===void 0?void 0:L.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===f}).map(w=>{if(typeof S=="object"&&"ids"in S){const k=S.data,{schema:O,table:B,commit_timestamp:T,type:C,errors:L}=k;S=Object.assign(Object.assign({},{schema:O,table:B,commit_timestamp:T,eventType:C,new:{},old:{},errors:L}),this._getPayloadRecords(k))}w.callback(S,l)})}_isClosed(){return this.state===mt.closed}_isJoined(){return this.state===mt.joined}_isJoining(){return this.state===mt.joining}_isLeaving(){return this.state===mt.leaving}_replyEventName(n){return`chan_reply_${n}`}_on(n,r,l){const d=n.toLocaleLowerCase(),h={type:d,filter:r,callback:l};return this.bindings[d]?this.bindings[d].push(h):this.bindings[d]=[h],this}_off(n,r){const l=n.toLocaleLowerCase();return this.bindings[l]&&(this.bindings[l]=this.bindings[l].filter(d=>{var h;return!(((h=d.type)===null||h===void 0?void 0:h.toLocaleLowerCase())===l&&ii.isEqual(d.filter,r))})),this}static isEqual(n,r){if(Object.keys(n).length!==Object.keys(r).length)return!1;for(const l in n)if(n[l]!==r[l])return!1;return!0}static isFilterValueEqual(n,r){return(n??void 0)===(r??void 0)}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(n){this._on(ja.close,{},n)}_onError(n){this._on(ja.error,{},r=>n(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(n=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=mt.joining,this.joinPush.resend(n))}_getPayloadRecords(n){const r={new:{},old:{}};return(n.type==="INSERT"||n.type==="UPDATE")&&(r.new=dp(n.columns,n.record)),(n.type==="UPDATE"||n.type==="DELETE")&&(r.old=dp(n.columns,n.old_record)),r}}const wc=()=>{},Ml={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},b0=[1e3,2e3,5e3,1e4],_0=1e4,x0=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class j0{constructor(n,r){var l;if(this.accessTokenValue=null,this.apiKey=null,this._manuallySetToken=!1,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Lc,this.transport=null,this.heartbeatIntervalMs=Ml.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=wc,this.ref=0,this.reconnectTimer=null,this.vsn=cp,this.logger=wc,this.conn=null,this.sendBuffer=[],this.serializer=new h0,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._heartbeatSentAt=null,this._resolveFetch=d=>d?(...h)=>d(...h):(...h)=>fetch(...h),!(!((l=r?.params)===null||l===void 0)&&l.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${n}/${Bc.websocket}`,this.httpEndpoint=Gp(n),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=r0.createWebSocket(this.endpointURL())}catch(n){this._setConnectionState("disconnected");const r=n.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(n,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const l=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(l),this._setConnectionState("disconnected")},typeof this.conn.close=="function"&&(n?this.conn.close(n,r??""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(n){const r=await n.unsubscribe();return r==="ok"&&this._remove(n),this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const n=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),n}log(n,r,l){this.logger(n,r,l)}connectionState(){switch(this.conn&&this.conn.readyState){case On.connecting:return ss.Connecting;case On.open:return ss.Open;case On.closing:return ss.Closing;default:return ss.Closed}}isConnected(){return this.connectionState()===ss.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(n,r={config:{}}){const l=`realtime:${n}`,d=this.getChannels().find(h=>h.topic===l);if(d)return d;{const h=new ii(`realtime:${n}`,r,this);return this.channels.push(h),h}}push(n){const{topic:r,event:l,payload:d,ref:h}=n,f=()=>{this.encode(n,p=>{var v;(v=this.conn)===null||v===void 0||v.send(p)})};this.log("push",`${r} ${l} (${h})`,d),this.isConnected()?f():this.sendBuffer.push(f)}async setAuth(n=null){this._authPromise=this._performAuth(n);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){var n;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this._heartbeatSentAt=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this._wasManualDisconnect=!1,(n=this.conn)===null||n===void 0||n.close(c0,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},Ml.HEARTBEAT_TIMEOUT_FALLBACK);return}this._heartbeatSentAt=Date.now(),this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this._setAuthSafely("heartbeat")}onHeartbeat(n){this.heartbeatCallback=n}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}_makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}_leaveOpenTopic(n){let r=this.channels.find(l=>l.topic===n&&(l._isJoined()||l._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${n}"`),r.unsubscribe())}_remove(n){this.channels=this.channels.filter(r=>r.topic!==n.topic)}_onConnMessage(n){this.decode(n.data,r=>{if(r.topic==="phoenix"&&r.event==="phx_reply"&&r.ref&&r.ref===this.pendingHeartbeatRef){const y=this._heartbeatSentAt?Date.now()-this._heartbeatSentAt:void 0;try{this.heartbeatCallback(r.payload.status==="ok"?"ok":"error",y)}catch(_){this.log("error","error in heartbeat callback",_)}this._heartbeatSentAt=null,this.pendingHeartbeatRef=null}const{topic:l,event:d,payload:h,ref:f}=r,p=f?`(${f})`:"",v=h.status||"";this.log("receive",`${v} ${l} ${d} ${p}`.trim(),h),this.channels.filter(y=>y._isMember(l)).forEach(y=>y._trigger(d,h,f)),this._triggerStateCallbacks("message",r)})}_clearTimer(n){var r;n==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):n==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=n=>this._onConnError(n),this.conn.onmessage=n=>this._onConnMessage(n),this.conn.onclose=n=>this._onConnClose(n),this.conn.readyState===On.open&&this._onConnOpen())}_teardownConnection(){if(this.conn){if(this.conn.readyState===On.open||this.conn.readyState===On.connecting)try{this.conn.close()}catch(n){this.log("error","Error closing connection",n)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this._terminateWorker(),this.channels.forEach(n=>n.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(r=>{this.log("error","error waiting for auth on connect",r),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const n=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(n),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this._terminateWorker()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_onConnClose(n){var r;this._setConnectionState("disconnected"),this.log("transport","close",n),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",n)}_onConnError(n){this._setConnectionState("disconnected"),this.log("transport",`${n}`),this._triggerChanError(),this._triggerStateCallbacks("error",n);try{this.heartbeatCallback("error")}catch(r){this.log("error","error in heartbeat callback",r)}}_triggerChanError(){this.channels.forEach(n=>n._trigger(ja.error))}_appendParams(n,r){if(Object.keys(r).length===0)return n;const l=n.match(/\?/)?"&":"?",d=new URLSearchParams(r);return`${n}${l}${d}`}_workerObjectUrl(n){let r;if(n)r=n;else{const l=new Blob([x0],{type:"application/javascript"});r=URL.createObjectURL(l)}return r}_setConnectionState(n,r=!1){this._connectionState=n,n==="connecting"?this._wasManualDisconnect=!1:n==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(n=null){let r,l=!1;if(n)r=n,l=!0;else if(this.accessToken)try{r=await this.accessToken()}catch(d){this.log("error","Error fetching access token from callback",d),r=this.accessTokenValue}else r=this.accessTokenValue;l?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(d=>{const h={access_token:r,version:o0};r&&d.updateJoinPayload(h),d.joinedOnce&&d._isJoined()&&d._push(ja.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(n="general"){this._isManualToken()||this.setAuth().catch(r=>{this.log("error",`Error setting auth in ${n}`,r)})}_triggerStateCallbacks(n,r){try{this.stateChangeCallbacks[n].forEach(l=>{try{l(r)}catch(d){this.log("error",`error in ${n} callback`,d)}})}catch(l){this.log("error",`error triggering ${n} callbacks`,l)}}_setupReconnectionTimer(){this.reconnectTimer=new $p(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Ml.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(n){var r,l,d,h,f,p,v,y,_,j,S,w;switch(this.transport=(r=n?.transport)!==null&&r!==void 0?r:null,this.timeout=(l=n?.timeout)!==null&&l!==void 0?l:Lc,this.heartbeatIntervalMs=(d=n?.heartbeatIntervalMs)!==null&&d!==void 0?d:Ml.HEARTBEAT_INTERVAL,this.worker=(h=n?.worker)!==null&&h!==void 0?h:!1,this.accessToken=(f=n?.accessToken)!==null&&f!==void 0?f:null,this.heartbeatCallback=(p=n?.heartbeatCallback)!==null&&p!==void 0?p:wc,this.vsn=(v=n?.vsn)!==null&&v!==void 0?v:cp,n?.params&&(this.params=n.params),n?.logger&&(this.logger=n.logger),(n?.logLevel||n?.log_level)&&(this.logLevel=n.logLevel||n.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(y=n?.reconnectAfterMs)!==null&&y!==void 0?y:(k=>b0[k-1]||_0),this.vsn){case u0:this.encode=(_=n?.encode)!==null&&_!==void 0?_:((k,O)=>O(JSON.stringify(k))),this.decode=(j=n?.decode)!==null&&j!==void 0?j:((k,O)=>O(JSON.parse(k)));break;case Hp:this.encode=(S=n?.encode)!==null&&S!==void 0?S:this.serializer.encode.bind(this.serializer),this.decode=(w=n?.decode)!==null&&w!==void 0?w:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=n?.workerUrl}}}var hr=class extends Error{constructor(i,n){super(i),this.name="IcebergError",this.status=n.status,this.icebergType=n.icebergType,this.icebergCode=n.icebergCode,this.details=n.details,this.isCommitStateUnknown=n.icebergType==="CommitStateUnknownException"||[500,502,504].includes(n.status)&&n.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function S0(i,n,r){const l=new URL(n,i);if(r)for(const[d,h]of Object.entries(r))h!==void 0&&l.searchParams.set(d,h);return l.toString()}async function w0(i){return!i||i.type==="none"?{}:i.type==="bearer"?{Authorization:`Bearer ${i.token}`}:i.type==="header"?{[i.name]:i.value}:i.type==="custom"?await i.getHeaders():{}}function E0(i){const n=i.fetchImpl??globalThis.fetch;return{async request({method:r,path:l,query:d,body:h,headers:f}){const p=S0(i.baseUrl,l,d),v=await w0(i.auth),y=await n(p,{method:r,headers:{...h?{"Content-Type":"application/json"}:{},...v,...f},body:h?JSON.stringify(h):void 0}),_=await y.text(),j=(y.headers.get("content-type")||"").includes("application/json"),S=j&&_?JSON.parse(_):_;if(!y.ok){const w=j?S:void 0,k=w?.error;throw new hr(k?.message??`Request failed with status ${y.status}`,{status:y.status,icebergType:k?.type,icebergCode:k?.code,details:w})}return{status:y.status,headers:y.headers,data:S}}}}function Ll(i){return i.join("")}var T0=class{constructor(i,n=""){this.client=i,this.prefix=n}async listNamespaces(i){const n=i?{parent:Ll(i.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:n})).data.namespaces.map(l=>({namespace:l}))}async createNamespace(i,n){const r={namespace:i.namespace,properties:n?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:r})).data}async dropNamespace(i){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ll(i.namespace)}`})}async loadNamespaceMetadata(i){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ll(i.namespace)}`})).data.properties}}async namespaceExists(i){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ll(i.namespace)}`}),!0}catch(n){if(n instanceof hr&&n.status===404)return!1;throw n}}async createNamespaceIfNotExists(i,n){try{return await this.createNamespace(i,n)}catch(r){if(r instanceof hr&&r.status===409)return;throw r}}};function Js(i){return i.join("")}var A0=class{constructor(i,n="",r){this.client=i,this.prefix=n,this.accessDelegation=r}async listTables(i){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Js(i.namespace)}/tables`})).data.identifiers}async createTable(i,n){const r={};return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Js(i.namespace)}/tables`,body:n,headers:r})).data.metadata}async updateTable(i,n){const r=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Js(i.namespace)}/tables/${i.name}`,body:n});return{"metadata-location":r.data["metadata-location"],metadata:r.data.metadata}}async dropTable(i,n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Js(i.namespace)}/tables/${i.name}`,query:{purgeRequested:String(n?.purge??!1)}})}async loadTable(i){const n={};return this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Js(i.namespace)}/tables/${i.name}`,headers:n})).data.metadata}async tableExists(i){const n={};this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Js(i.namespace)}/tables/${i.name}`,headers:n}),!0}catch(r){if(r instanceof hr&&r.status===404)return!1;throw r}}async createTableIfNotExists(i,n){try{return await this.createTable(i,n)}catch(r){if(r instanceof hr&&r.status===409)return await this.loadTable({namespace:i.namespace,name:n.name});throw r}}},O0=class{constructor(i){let n="v1";i.catalogName&&(n+=`/${i.catalogName}`);const r=i.baseUrl.endsWith("/")?i.baseUrl:`${i.baseUrl}/`;this.client=E0({baseUrl:r,auth:i.auth,fetchImpl:i.fetch}),this.accessDelegation=i.accessDelegation?.join(","),this.namespaceOps=new T0(this.client,n),this.tableOps=new A0(this.client,n,this.accessDelegation)}async listNamespaces(i){return this.namespaceOps.listNamespaces(i)}async createNamespace(i,n){return this.namespaceOps.createNamespace(i,n)}async dropNamespace(i){await this.namespaceOps.dropNamespace(i)}async loadNamespaceMetadata(i){return this.namespaceOps.loadNamespaceMetadata(i)}async listTables(i){return this.tableOps.listTables(i)}async createTable(i,n){return this.tableOps.createTable(i,n)}async updateTable(i,n){return this.tableOps.updateTable(i,n)}async dropTable(i,n){await this.tableOps.dropTable(i,n)}async loadTable(i){return this.tableOps.loadTable(i)}async namespaceExists(i){return this.namespaceOps.namespaceExists(i)}async tableExists(i){return this.tableOps.tableExists(i)}async createNamespaceIfNotExists(i,n){return this.namespaceOps.createNamespaceIfNotExists(i,n)}async createTableIfNotExists(i,n){return this.tableOps.createTableIfNotExists(i,n)}},eo=class extends Error{constructor(i,n="storage",r,l){super(i),this.__isStorageError=!0,this.namespace=n,this.name=n==="vectors"?"StorageVectorsError":"StorageError",this.status=r,this.statusCode=l}};function to(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}var Bl=class extends eo{constructor(i,n,r,l="storage"){super(i,l,n,r),this.name=l==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},Kp=class extends eo{constructor(i,n,r="storage"){super(i,r),this.name=r==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=n}};const N0=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),C0=i=>{if(typeof i!="object"||i===null)return!1;const n=Object.getPrototypeOf(i);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},$c=i=>{if(Array.isArray(i))return i.map(r=>$c(r));if(typeof i=="function"||i!==Object(i))return i;const n={};return Object.entries(i).forEach(([r,l])=>{const d=r.replace(/([-_][a-z])/gi,h=>h.toUpperCase().replace(/[-_]/g,""));n[d]=$c(l)}),n},k0=i=>!i||typeof i!="string"||i.length===0||i.length>100||i.trim()!==i||i.includes("/")||i.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(i);function fr(i){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fr(i)}function R0(i,n){if(fr(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var l=r.call(i,n);if(fr(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function z0(i){var n=R0(i,"string");return fr(n)=="symbol"?n:n+""}function D0(i,n,r){return(n=z0(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function mp(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),r.push.apply(r,l)}return r}function ye(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?mp(Object(r),!0).forEach(function(l){D0(i,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):mp(Object(r)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(r,l))})}return i}const pp=i=>{var n;return i.msg||i.message||i.error_description||(typeof i.error=="string"?i.error:(n=i.error)===null||n===void 0?void 0:n.message)||JSON.stringify(i)},q0=async(i,n,r,l)=>{if(i&&typeof i=="object"&&"status"in i&&"ok"in i&&typeof i.status=="number"&&!r?.noResolveJson){const d=i,h=d.status||500;if(typeof d.json=="function")d.json().then(f=>{const p=f?.statusCode||f?.code||h+"";n(new Bl(pp(f),h,p,l))}).catch(()=>{if(l==="vectors"){const f=h+"";n(new Bl(d.statusText||`HTTP ${h} error`,h,f,l))}else{const f=h+"";n(new Bl(d.statusText||`HTTP ${h} error`,h,f,l))}});else{const f=h+"";n(new Bl(d.statusText||`HTTP ${h} error`,h,f,l))}}else n(new Kp(pp(i),i,l))},U0=(i,n,r,l)=>{const d={method:i,headers:n?.headers||{}};return i==="GET"||i==="HEAD"||!l?ye(ye({},d),r):(C0(l)?(d.headers=ye({"Content-Type":"application/json"},n?.headers),d.body=JSON.stringify(l)):d.body=l,n?.duplex&&(d.duplex=n.duplex),ye(ye({},d),r))};async function sr(i,n,r,l,d,h,f){return new Promise((p,v)=>{i(r,U0(n,l,d,h)).then(y=>{if(!y.ok)throw y;if(l?.noResolveJson)return y;if(f==="vectors"){const _=y.headers.get("content-type");if(y.headers.get("content-length")==="0"||y.status===204)return{};if(!_||!_.includes("application/json"))return{}}return y.json()}).then(y=>p(y)).catch(y=>q0(y,v,l,f))})}function Yp(i="storage"){return{get:async(n,r,l,d)=>sr(n,"GET",r,l,d,void 0,i),post:async(n,r,l,d,h)=>sr(n,"POST",r,d,h,l,i),put:async(n,r,l,d,h)=>sr(n,"PUT",r,d,h,l,i),head:async(n,r,l,d)=>sr(n,"HEAD",r,ye(ye({},l),{},{noResolveJson:!0}),d,void 0,i),remove:async(n,r,l,d,h)=>sr(n,"DELETE",r,d,h,l,i)}}const M0=Yp("storage"),{get:mr,post:xa,put:Vc,head:L0,remove:Wc}=M0,Wt=Yp("vectors");var ci=class{constructor(i,n={},r,l="storage"){this.shouldThrowOnError=!1,this.url=i,this.headers=n,this.fetch=N0(r),this.namespace=l}throwOnError(){return this.shouldThrowOnError=!0,this}async handleOperation(i){var n=this;try{return{data:await i(),error:null}}catch(r){if(n.shouldThrowOnError)throw r;if(to(r))return{data:null,error:r};throw r}}},B0=class{constructor(i,n){this.downloadFn=i,this.shouldThrowOnError=n}then(i,n){return this.execute().then(i,n)}async execute(){var i=this;try{return{data:(await i.downloadFn()).body,error:null}}catch(n){if(i.shouldThrowOnError)throw n;if(to(n))return{data:null,error:n};throw n}}};let Qp;Qp=Symbol.toStringTag;var H0=class{constructor(i,n){this.downloadFn=i,this.shouldThrowOnError=n,this[Qp]="BlobDownloadBuilder",this.promise=null}asStream(){return new B0(this.downloadFn,this.shouldThrowOnError)}then(i,n){return this.getPromise().then(i,n)}catch(i){return this.getPromise().catch(i)}finally(i){return this.getPromise().finally(i)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var i=this;try{return{data:await(await i.downloadFn()).blob(),error:null}}catch(n){if(i.shouldThrowOnError)throw n;if(to(n))return{data:null,error:n};throw n}}};const $0={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},vp={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var V0=class extends ci{constructor(i,n={},r,l){super(i,n,l,"storage"),this.bucketId=r}async uploadOrUpdate(i,n,r,l){var d=this;return d.handleOperation(async()=>{let h;const f=ye(ye({},vp),l);let p=ye(ye({},d.headers),i==="POST"&&{"x-upsert":String(f.upsert)});const v=f.metadata;typeof Blob<"u"&&r instanceof Blob?(h=new FormData,h.append("cacheControl",f.cacheControl),v&&h.append("metadata",d.encodeMetadata(v)),h.append("",r)):typeof FormData<"u"&&r instanceof FormData?(h=r,h.has("cacheControl")||h.append("cacheControl",f.cacheControl),v&&!h.has("metadata")&&h.append("metadata",d.encodeMetadata(v))):(h=r,p["cache-control"]=`max-age=${f.cacheControl}`,p["content-type"]=f.contentType,v&&(p["x-metadata"]=d.toBase64(d.encodeMetadata(v))),(typeof ReadableStream<"u"&&h instanceof ReadableStream||h&&typeof h=="object"&&"pipe"in h&&typeof h.pipe=="function")&&!f.duplex&&(f.duplex="half")),l?.headers&&(p=ye(ye({},p),l.headers));const y=d._removeEmptyFolders(n),_=d._getFinalPath(y),j=await(i=="PUT"?Vc:xa)(d.fetch,`${d.url}/object/${_}`,h,ye({headers:p},f?.duplex?{duplex:f.duplex}:{}));return{path:y,id:j.Id,fullPath:j.Key}})}async upload(i,n,r){return this.uploadOrUpdate("POST",i,n,r)}async uploadToSignedUrl(i,n,r,l){var d=this;const h=d._removeEmptyFolders(i),f=d._getFinalPath(h),p=new URL(d.url+`/object/upload/sign/${f}`);return p.searchParams.set("token",n),d.handleOperation(async()=>{let v;const y=ye({upsert:vp.upsert},l),_=ye(ye({},d.headers),{"x-upsert":String(y.upsert)});return typeof Blob<"u"&&r instanceof Blob?(v=new FormData,v.append("cacheControl",y.cacheControl),v.append("",r)):typeof FormData<"u"&&r instanceof FormData?(v=r,v.append("cacheControl",y.cacheControl)):(v=r,_["cache-control"]=`max-age=${y.cacheControl}`,_["content-type"]=y.contentType),{path:h,fullPath:(await Vc(d.fetch,p.toString(),v,{headers:_})).Key}})}async createSignedUploadUrl(i,n){var r=this;return r.handleOperation(async()=>{let l=r._getFinalPath(i);const d=ye({},r.headers);n?.upsert&&(d["x-upsert"]="true");const h=await xa(r.fetch,`${r.url}/object/upload/sign/${l}`,{},{headers:d}),f=new URL(r.url+h.url),p=f.searchParams.get("token");if(!p)throw new eo("No token returned by API");return{signedUrl:f.toString(),path:i,token:p}})}async update(i,n,r){return this.uploadOrUpdate("PUT",i,n,r)}async move(i,n,r){var l=this;return l.handleOperation(async()=>await xa(l.fetch,`${l.url}/object/move`,{bucketId:l.bucketId,sourceKey:i,destinationKey:n,destinationBucket:r?.destinationBucket},{headers:l.headers}))}async copy(i,n,r){var l=this;return l.handleOperation(async()=>({path:(await xa(l.fetch,`${l.url}/object/copy`,{bucketId:l.bucketId,sourceKey:i,destinationKey:n,destinationBucket:r?.destinationBucket},{headers:l.headers})).Key}))}async createSignedUrl(i,n,r){var l=this;return l.handleOperation(async()=>{let d=l._getFinalPath(i),h=await xa(l.fetch,`${l.url}/object/sign/${d}`,ye({expiresIn:n},r?.transform?{transform:r.transform}:{}),{headers:l.headers});const f=r?.download?`&download=${r.download===!0?"":r.download}`:"";return{signedUrl:encodeURI(`${l.url}${h.signedURL}${f}`)}})}async createSignedUrls(i,n,r){var l=this;return l.handleOperation(async()=>{const d=await xa(l.fetch,`${l.url}/object/sign/${l.bucketId}`,{expiresIn:n,paths:i},{headers:l.headers}),h=r?.download?`&download=${r.download===!0?"":r.download}`:"";return d.map(f=>ye(ye({},f),{},{signedUrl:f.signedURL?encodeURI(`${l.url}${f.signedURL}${h}`):null}))})}download(i,n,r){const l=typeof n?.transform<"u"?"render/image/authenticated":"object",d=this.transformOptsToQueryString(n?.transform||{}),h=d?`?${d}`:"",f=this._getFinalPath(i),p=()=>mr(this.fetch,`${this.url}/${l}/${f}${h}`,{headers:this.headers,noResolveJson:!0},r);return new H0(p,this.shouldThrowOnError)}async info(i){var n=this;const r=n._getFinalPath(i);return n.handleOperation(async()=>$c(await mr(n.fetch,`${n.url}/object/info/${r}`,{headers:n.headers})))}async exists(i){var n=this;const r=n._getFinalPath(i);try{return await L0(n.fetch,`${n.url}/object/${r}`,{headers:n.headers}),{data:!0,error:null}}catch(l){if(n.shouldThrowOnError)throw l;if(to(l)&&l instanceof Kp){const d=l.originalError;if([400,404].includes(d?.status))return{data:!1,error:l}}throw l}}getPublicUrl(i,n){const r=this._getFinalPath(i),l=[],d=n?.download?`download=${n.download===!0?"":n.download}`:"";d!==""&&l.push(d);const h=typeof n?.transform<"u"?"render/image":"object",f=this.transformOptsToQueryString(n?.transform||{});f!==""&&l.push(f);let p=l.join("&");return p!==""&&(p=`?${p}`),{data:{publicUrl:encodeURI(`${this.url}/${h}/public/${r}${p}`)}}}async remove(i){var n=this;return n.handleOperation(async()=>await Wc(n.fetch,`${n.url}/object/${n.bucketId}`,{prefixes:i},{headers:n.headers}))}async list(i,n,r){var l=this;return l.handleOperation(async()=>{const d=ye(ye(ye({},$0),n),{},{prefix:i||""});return await xa(l.fetch,`${l.url}/object/list/${l.bucketId}`,d,{headers:l.headers},r)})}async listV2(i,n){var r=this;return r.handleOperation(async()=>{const l=ye({},i);return await xa(r.fetch,`${r.url}/object/list-v2/${r.bucketId}`,l,{headers:r.headers},n)})}encodeMetadata(i){return JSON.stringify(i)}toBase64(i){return typeof Buffer<"u"?Buffer.from(i).toString("base64"):btoa(i)}_getFinalPath(i){return`${this.bucketId}/${i.replace(/^\/+/,"")}`}_removeEmptyFolders(i){return i.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(i){const n=[];return i.width&&n.push(`width=${i.width}`),i.height&&n.push(`height=${i.height}`),i.resize&&n.push(`resize=${i.resize}`),i.format&&n.push(`format=${i.format}`),i.quality&&n.push(`quality=${i.quality}`),n.join("&")}};const G0="2.95.3",br={"X-Client-Info":`storage-js/${G0}`};var K0=class extends ci{constructor(i,n={},r,l){const d=new URL(i);l?.useNewHostname&&/supabase\.(co|in|red)$/.test(d.hostname)&&!d.hostname.includes("storage.supabase.")&&(d.hostname=d.hostname.replace("supabase.","storage.supabase."));const h=d.href.replace(/\/$/,""),f=ye(ye({},br),n);super(h,f,r,"storage")}async listBuckets(i){var n=this;return n.handleOperation(async()=>{const r=n.listBucketOptionsToQueryString(i);return await mr(n.fetch,`${n.url}/bucket${r}`,{headers:n.headers})})}async getBucket(i){var n=this;return n.handleOperation(async()=>await mr(n.fetch,`${n.url}/bucket/${i}`,{headers:n.headers}))}async createBucket(i,n={public:!1}){var r=this;return r.handleOperation(async()=>await xa(r.fetch,`${r.url}/bucket`,{id:i,name:i,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:r.headers}))}async updateBucket(i,n){var r=this;return r.handleOperation(async()=>await Vc(r.fetch,`${r.url}/bucket/${i}`,{id:i,name:i,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:r.headers}))}async emptyBucket(i){var n=this;return n.handleOperation(async()=>await xa(n.fetch,`${n.url}/bucket/${i}/empty`,{},{headers:n.headers}))}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Wc(n.fetch,`${n.url}/bucket/${i}`,{},{headers:n.headers}))}listBucketOptionsToQueryString(i){const n={};return i&&("limit"in i&&(n.limit=String(i.limit)),"offset"in i&&(n.offset=String(i.offset)),i.search&&(n.search=i.search),i.sortColumn&&(n.sortColumn=i.sortColumn),i.sortOrder&&(n.sortOrder=i.sortOrder)),Object.keys(n).length>0?"?"+new URLSearchParams(n).toString():""}},Y0=class extends ci{constructor(i,n={},r){const l=i.replace(/\/$/,""),d=ye(ye({},br),n);super(l,d,r,"storage")}async createBucket(i){var n=this;return n.handleOperation(async()=>await xa(n.fetch,`${n.url}/bucket`,{name:i},{headers:n.headers}))}async listBuckets(i){var n=this;return n.handleOperation(async()=>{const r=new URLSearchParams;i?.limit!==void 0&&r.set("limit",i.limit.toString()),i?.offset!==void 0&&r.set("offset",i.offset.toString()),i?.sortColumn&&r.set("sortColumn",i.sortColumn),i?.sortOrder&&r.set("sortOrder",i.sortOrder),i?.search&&r.set("search",i.search);const l=r.toString(),d=l?`${n.url}/bucket?${l}`:`${n.url}/bucket`;return await mr(n.fetch,d,{headers:n.headers})})}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Wc(n.fetch,`${n.url}/bucket/${i}`,{},{headers:n.headers}))}from(i){var n=this;if(!k0(i))throw new eo("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const r=new O0({baseUrl:this.url,catalogName:i,auth:{type:"custom",getHeaders:async()=>n.headers},fetch:this.fetch}),l=this.shouldThrowOnError;return new Proxy(r,{get(d,h){const f=d[h];return typeof f!="function"?f:async(...p)=>{try{return{data:await f.apply(d,p),error:null}}catch(v){if(l)throw v;return{data:null,error:v}}}}})}},Q0=class extends ci{constructor(i,n={},r){const l=i.replace(/\/$/,""),d=ye(ye({},br),{},{"Content-Type":"application/json"},n);super(l,d,r,"vectors")}async createIndex(i){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/CreateIndex`,i,{headers:n.headers})||{})}async getIndex(i,n){var r=this;return r.handleOperation(async()=>await Wt.post(r.fetch,`${r.url}/GetIndex`,{vectorBucketName:i,indexName:n},{headers:r.headers}))}async listIndexes(i){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/ListIndexes`,i,{headers:n.headers}))}async deleteIndex(i,n){var r=this;return r.handleOperation(async()=>await Wt.post(r.fetch,`${r.url}/DeleteIndex`,{vectorBucketName:i,indexName:n},{headers:r.headers})||{})}},X0=class extends ci{constructor(i,n={},r){const l=i.replace(/\/$/,""),d=ye(ye({},br),{},{"Content-Type":"application/json"},n);super(l,d,r,"vectors")}async putVectors(i){var n=this;if(i.vectors.length<1||i.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/PutVectors`,i,{headers:n.headers})||{})}async getVectors(i){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/GetVectors`,i,{headers:n.headers}))}async listVectors(i){var n=this;if(i.segmentCount!==void 0){if(i.segmentCount<1||i.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(i.segmentIndex!==void 0&&(i.segmentIndex<0||i.segmentIndex>=i.segmentCount))throw new Error(`segmentIndex must be between 0 and ${i.segmentCount-1}`)}return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/ListVectors`,i,{headers:n.headers}))}async queryVectors(i){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/QueryVectors`,i,{headers:n.headers}))}async deleteVectors(i){var n=this;if(i.keys.length<1||i.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/DeleteVectors`,i,{headers:n.headers})||{})}},J0=class extends ci{constructor(i,n={},r){const l=i.replace(/\/$/,""),d=ye(ye({},br),{},{"Content-Type":"application/json"},n);super(l,d,r,"vectors")}async createBucket(i){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/CreateVectorBucket`,{vectorBucketName:i},{headers:n.headers})||{})}async getBucket(i){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/GetVectorBucket`,{vectorBucketName:i},{headers:n.headers}))}async listBuckets(i={}){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/ListVectorBuckets`,i,{headers:n.headers}))}async deleteBucket(i){var n=this;return n.handleOperation(async()=>await Wt.post(n.fetch,`${n.url}/DeleteVectorBucket`,{vectorBucketName:i},{headers:n.headers})||{})}},P0=class extends J0{constructor(i,n={}){super(i,n.headers||{},n.fetch)}from(i){return new Z0(this.url,this.headers,i,this.fetch)}async createBucket(i){var n=()=>super.createBucket,r=this;return n().call(r,i)}async getBucket(i){var n=()=>super.getBucket,r=this;return n().call(r,i)}async listBuckets(i={}){var n=()=>super.listBuckets,r=this;return n().call(r,i)}async deleteBucket(i){var n=()=>super.deleteBucket,r=this;return n().call(r,i)}},Z0=class extends Q0{constructor(i,n,r,l){super(i,n,l),this.vectorBucketName=r}async createIndex(i){var n=()=>super.createIndex,r=this;return n().call(r,ye(ye({},i),{},{vectorBucketName:r.vectorBucketName}))}async listIndexes(i={}){var n=()=>super.listIndexes,r=this;return n().call(r,ye(ye({},i),{},{vectorBucketName:r.vectorBucketName}))}async getIndex(i){var n=()=>super.getIndex,r=this;return n().call(r,r.vectorBucketName,i)}async deleteIndex(i){var n=()=>super.deleteIndex,r=this;return n().call(r,r.vectorBucketName,i)}index(i){return new I0(this.url,this.headers,this.vectorBucketName,i,this.fetch)}},I0=class extends X0{constructor(i,n,r,l,d){super(i,n,d),this.vectorBucketName=r,this.indexName=l}async putVectors(i){var n=()=>super.putVectors,r=this;return n().call(r,ye(ye({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async getVectors(i){var n=()=>super.getVectors,r=this;return n().call(r,ye(ye({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async listVectors(i={}){var n=()=>super.listVectors,r=this;return n().call(r,ye(ye({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async queryVectors(i){var n=()=>super.queryVectors,r=this;return n().call(r,ye(ye({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async deleteVectors(i){var n=()=>super.deleteVectors,r=this;return n().call(r,ye(ye({},i),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}},F0=class extends K0{constructor(i,n={},r,l){super(i,n,r,l)}from(i){return new V0(this.url,this.headers,i,this.fetch)}get vectors(){return new P0(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Y0(this.url+"/iceberg",this.headers,this.fetch)}};const Xp="2.95.3",ai=30*1e3,Gc=3,Ec=Gc*ai,W0="http://localhost:9999",eb="supabase.auth.token",tb={"X-Client-Info":`gotrue-js/${Xp}`},Kc="X-Supabase-Api-Version",Jp={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},ab=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,nb=600*1e3;class pr extends Error{constructor(n,r,l){super(n),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=l}}function he(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class sb extends pr{constructor(n,r,l){super(n,r,l),this.name="AuthApiError",this.status=r,this.code=l}}function ib(i){return he(i)&&i.name==="AuthApiError"}class is extends pr{constructor(n,r){super(n),this.name="AuthUnknownError",this.originalError=r}}class en extends pr{constructor(n,r,l,d){super(n,l,d),this.name=r,this.status=l}}class Ft extends en{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Tc(i){return he(i)&&i.name==="AuthSessionMissingError"}class Ps extends en{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Hl extends en{constructor(n){super(n,"AuthInvalidCredentialsError",400,void 0)}}class $l extends en{constructor(n,r=null){super(n,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function rb(i){return he(i)&&i.name==="AuthImplicitGrantRedirectError"}class yp extends en{constructor(n,r=null){super(n,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class lb extends en{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Yc extends en{constructor(n,r){super(n,"AuthRetryableFetchError",r,void 0)}}function Ac(i){return he(i)&&i.name==="AuthRetryableFetchError"}class gp extends en{constructor(n,r,l){super(n,"AuthWeakPasswordError",r,"weak_password"),this.reasons=l}}class Qc extends en{constructor(n){super(n,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ql="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),bp=` 	
\r=`.split(""),ob=(()=>{const i=new Array(128);for(let n=0;n<i.length;n+=1)i[n]=-1;for(let n=0;n<bp.length;n+=1)i[bp[n].charCodeAt(0)]=-2;for(let n=0;n<Ql.length;n+=1)i[Ql[n].charCodeAt(0)]=n;return i})();function _p(i,n,r){if(i!==null)for(n.queue=n.queue<<8|i,n.queuedBits+=8;n.queuedBits>=6;){const l=n.queue>>n.queuedBits-6&63;r(Ql[l]),n.queuedBits-=6}else if(n.queuedBits>0)for(n.queue=n.queue<<6-n.queuedBits,n.queuedBits=6;n.queuedBits>=6;){const l=n.queue>>n.queuedBits-6&63;r(Ql[l]),n.queuedBits-=6}}function Pp(i,n,r){const l=ob[i];if(l>-1)for(n.queue=n.queue<<6|l,n.queuedBits+=6;n.queuedBits>=8;)r(n.queue>>n.queuedBits-8&255),n.queuedBits-=8;else{if(l===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`)}}function xp(i){const n=[],r=f=>{n.push(String.fromCodePoint(f))},l={utf8seq:0,codepoint:0},d={queue:0,queuedBits:0},h=f=>{db(f,l,r)};for(let f=0;f<i.length;f+=1)Pp(i.charCodeAt(f),d,h);return n.join("")}function ub(i,n){if(i<=127){n(i);return}else if(i<=2047){n(192|i>>6),n(128|i&63);return}else if(i<=65535){n(224|i>>12),n(128|i>>6&63),n(128|i&63);return}else if(i<=1114111){n(240|i>>18),n(128|i>>12&63),n(128|i>>6&63),n(128|i&63);return}throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`)}function cb(i,n){for(let r=0;r<i.length;r+=1){let l=i.charCodeAt(r);if(l>55295&&l<=56319){const d=(l-55296)*1024&65535;l=(i.charCodeAt(r+1)-56320&65535|d)+65536,r+=1}ub(l,n)}}function db(i,n,r){if(n.utf8seq===0){if(i<=127){r(i);return}for(let l=1;l<6;l+=1)if((i>>7-l&1)===0){n.utf8seq=l;break}if(n.utf8seq===2)n.codepoint=i&31;else if(n.utf8seq===3)n.codepoint=i&15;else if(n.utf8seq===4)n.codepoint=i&7;else throw new Error("Invalid UTF-8 sequence");n.utf8seq-=1}else if(n.utf8seq>0){if(i<=127)throw new Error("Invalid UTF-8 sequence");n.codepoint=n.codepoint<<6|i&63,n.utf8seq-=1,n.utf8seq===0&&r(n.codepoint)}}function ri(i){const n=[],r={queue:0,queuedBits:0},l=d=>{n.push(d)};for(let d=0;d<i.length;d+=1)Pp(i.charCodeAt(d),r,l);return new Uint8Array(n)}function hb(i){const n=[];return cb(i,r=>n.push(r)),new Uint8Array(n)}function rs(i){const n=[],r={queue:0,queuedBits:0},l=d=>{n.push(d)};return i.forEach(d=>_p(d,r,l)),_p(null,r,l),n.join("")}function fb(i){return Math.round(Date.now()/1e3)+i}function mb(){return Symbol("auth-callback")}const St=()=>typeof window<"u"&&typeof document<"u",ts={tested:!1,writable:!1},Zp=()=>{if(!St())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ts.tested)return ts.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),ts.tested=!0,ts.writable=!0}catch{ts.tested=!0,ts.writable=!1}return ts.writable};function pb(i){const n={},r=new URL(i);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((d,h)=>{n[h]=d})}catch{}return r.searchParams.forEach((l,d)=>{n[d]=l}),n}const Ip=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),vb=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",ni=async(i,n,r)=>{await i.setItem(n,JSON.stringify(r))},as=async(i,n)=>{const r=await i.getItem(n);if(!r)return null;try{return JSON.parse(r)}catch{return r}},jt=async(i,n)=>{await i.removeItem(n)};class ao{constructor(){this.promise=new ao.promiseConstructor((n,r)=>{this.resolve=n,this.reject=r})}}ao.promiseConstructor=Promise;function Vl(i){const n=i.split(".");if(n.length!==3)throw new Qc("Invalid JWT structure");for(let l=0;l<n.length;l++)if(!ab.test(n[l]))throw new Qc("JWT not in base64url format");return{header:JSON.parse(xp(n[0])),payload:JSON.parse(xp(n[1])),signature:ri(n[2]),raw:{header:n[0],payload:n[1]}}}async function yb(i){return await new Promise(n=>{setTimeout(()=>n(null),i)})}function gb(i,n){return new Promise((l,d)=>{(async()=>{for(let h=0;h<1/0;h++)try{const f=await i(h);if(!n(h,null,f)){l(f);return}}catch(f){if(!n(h,f)){d(f);return}}})()})}function bb(i){return("0"+i.toString(16)).substr(-2)}function _b(){const n=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=r.length;let d="";for(let h=0;h<56;h++)d+=r.charAt(Math.floor(Math.random()*l));return d}return crypto.getRandomValues(n),Array.from(n,bb).join("")}async function xb(i){const r=new TextEncoder().encode(i),l=await crypto.subtle.digest("SHA-256",r),d=new Uint8Array(l);return Array.from(d).map(h=>String.fromCharCode(h)).join("")}async function jb(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const r=await xb(i);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Zs(i,n,r=!1){const l=_b();let d=l;r&&(d+="/PASSWORD_RECOVERY"),await ni(i,`${n}-code-verifier`,d);const h=await jb(l);return[h,l===h?"plain":"s256"]}const Sb=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function wb(i){const n=i.headers.get(Kc);if(!n||!n.match(Sb))return null;try{return new Date(`${n}T00:00:00.0Z`)}catch{return null}}function Eb(i){if(!i)throw new Error("Missing exp claim");const n=Math.floor(Date.now()/1e3);if(i<=n)throw new Error("JWT has expired")}function Tb(i){switch(i){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Ab=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Is(i){if(!Ab.test(i))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Oc(){const i={};return new Proxy(i,{get:(n,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const l=r.toString();if(l==="Symbol(Symbol.toPrimitive)"||l==="Symbol(Symbol.toStringTag)"||l==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(n,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(n,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Ob(i,n){return new Proxy(i,{get:(r,l,d)=>{if(l==="__isInsecureUserWarningProxy")return!0;if(typeof l=="symbol"){const h=l.toString();if(h==="Symbol(Symbol.toPrimitive)"||h==="Symbol(Symbol.toStringTag)"||h==="Symbol(util.inspect.custom)"||h==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(r,l,d)}return!n.value&&typeof l=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),n.value=!0),Reflect.get(r,l,d)}})}function jp(i){return JSON.parse(JSON.stringify(i))}const ns=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),Nb=[502,503,504];async function Sp(i){var n;if(!vb(i))throw new Yc(ns(i),0);if(Nb.includes(i.status))throw new Yc(ns(i),i.status);let r;try{r=await i.json()}catch(h){throw new is(ns(h),h)}let l;const d=wb(i);if(d&&d.getTime()>=Jp["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?l=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(l=r.error_code),l){if(l==="weak_password")throw new gp(ns(r),i.status,((n=r.weak_password)===null||n===void 0?void 0:n.reasons)||[]);if(l==="session_not_found")throw new Ft}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((h,f)=>h&&typeof f=="string",!0))throw new gp(ns(r),i.status,r.weak_password.reasons);throw new sb(ns(r),i.status||500,l)}const Cb=(i,n,r,l)=>{const d={method:i,headers:n?.headers||{}};return i==="GET"?d:(d.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},n?.headers),d.body=JSON.stringify(l),Object.assign(Object.assign({},d),r))};async function ve(i,n,r,l){var d;const h=Object.assign({},l?.headers);h[Kc]||(h[Kc]=Jp["2024-01-01"].name),l?.jwt&&(h.Authorization=`Bearer ${l.jwt}`);const f=(d=l?.query)!==null&&d!==void 0?d:{};l?.redirectTo&&(f.redirect_to=l.redirectTo);const p=Object.keys(f).length?"?"+new URLSearchParams(f).toString():"",v=await kb(i,n,r+p,{headers:h,noResolveJson:l?.noResolveJson},{},l?.body);return l?.xform?l?.xform(v):{data:Object.assign({},v),error:null}}async function kb(i,n,r,l,d,h){const f=Cb(n,l,d,h);let p;try{p=await i(r,Object.assign({},f))}catch(v){throw console.error(v),new Yc(ns(v),0)}if(p.ok||await Sp(p),l?.noResolveJson)return p;try{return await p.json()}catch(v){await Sp(v)}}function _a(i){var n;let r=null;Db(i)&&(r=Object.assign({},i),i.expires_at||(r.expires_at=fb(i.expires_in)));const l=(n=i.user)!==null&&n!==void 0?n:i;return{data:{session:r,user:l},error:null}}function wp(i){const n=_a(i);return!n.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((r,l)=>r&&typeof l=="string",!0)&&(n.data.weak_password=i.weak_password),n}function Nn(i){var n;return{data:{user:(n=i.user)!==null&&n!==void 0?n:i},error:null}}function Rb(i){return{data:i,error:null}}function zb(i){const{action_link:n,email_otp:r,hashed_token:l,redirect_to:d,verification_type:h}=i,f=Wl(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),p={action_link:n,email_otp:r,hashed_token:l,redirect_to:d,verification_type:h},v=Object.assign({},f);return{data:{properties:p,user:v},error:null}}function Ep(i){return i}function Db(i){return i.access_token&&i.refresh_token&&i.expires_in}const Nc=["global","local","others"];class qb{constructor({url:n="",headers:r={},fetch:l}){this.url=n,this.headers=r,this.fetch=Ip(l),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(n,r=Nc[0]){if(Nc.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Nc.join(", ")}`);try{return await ve(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:n,noResolveJson:!0}),{data:null,error:null}}catch(l){if(he(l))return{data:null,error:l};throw l}}async inviteUserByEmail(n,r={}){try{return await ve(this.fetch,"POST",`${this.url}/invite`,{body:{email:n,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Nn})}catch(l){if(he(l))return{data:{user:null},error:l};throw l}}async generateLink(n){try{const{options:r}=n,l=Wl(n,["options"]),d=Object.assign(Object.assign({},l),r);return"newEmail"in l&&(d.new_email=l?.newEmail,delete d.newEmail),await ve(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:d,headers:this.headers,xform:zb,redirectTo:r?.redirectTo})}catch(r){if(he(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(n){try{return await ve(this.fetch,"POST",`${this.url}/admin/users`,{body:n,headers:this.headers,xform:Nn})}catch(r){if(he(r))return{data:{user:null},error:r};throw r}}async listUsers(n){var r,l,d,h,f,p,v;try{const y={nextPage:null,lastPage:0,total:0},_=await ve(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(r=n?.page)===null||r===void 0?void 0:r.toString())!==null&&l!==void 0?l:"",per_page:(h=(d=n?.perPage)===null||d===void 0?void 0:d.toString())!==null&&h!==void 0?h:""},xform:Ep});if(_.error)throw _.error;const j=await _.json(),S=(f=_.headers.get("x-total-count"))!==null&&f!==void 0?f:0,w=(v=(p=_.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&v!==void 0?v:[];return w.length>0&&(w.forEach(k=>{const O=parseInt(k.split(";")[0].split("=")[1].substring(0,1)),B=JSON.parse(k.split(";")[1].split("=")[1]);y[`${B}Page`]=O}),y.total=parseInt(S)),{data:Object.assign(Object.assign({},j),y),error:null}}catch(y){if(he(y))return{data:{users:[]},error:y};throw y}}async getUserById(n){Is(n);try{return await ve(this.fetch,"GET",`${this.url}/admin/users/${n}`,{headers:this.headers,xform:Nn})}catch(r){if(he(r))return{data:{user:null},error:r};throw r}}async updateUserById(n,r){Is(n);try{return await ve(this.fetch,"PUT",`${this.url}/admin/users/${n}`,{body:r,headers:this.headers,xform:Nn})}catch(l){if(he(l))return{data:{user:null},error:l};throw l}}async deleteUser(n,r=!1){Is(n);try{return await ve(this.fetch,"DELETE",`${this.url}/admin/users/${n}`,{headers:this.headers,body:{should_soft_delete:r},xform:Nn})}catch(l){if(he(l))return{data:{user:null},error:l};throw l}}async _listFactors(n){Is(n.userId);try{const{data:r,error:l}=await ve(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/factors`,{headers:this.headers,xform:d=>({data:{factors:d},error:null})});return{data:r,error:l}}catch(r){if(he(r))return{data:null,error:r};throw r}}async _deleteFactor(n){Is(n.userId),Is(n.id);try{return{data:await ve(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/factors/${n.id}`,{headers:this.headers}),error:null}}catch(r){if(he(r))return{data:null,error:r};throw r}}async _listOAuthClients(n){var r,l,d,h,f,p,v;try{const y={nextPage:null,lastPage:0,total:0},_=await ve(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(r=n?.page)===null||r===void 0?void 0:r.toString())!==null&&l!==void 0?l:"",per_page:(h=(d=n?.perPage)===null||d===void 0?void 0:d.toString())!==null&&h!==void 0?h:""},xform:Ep});if(_.error)throw _.error;const j=await _.json(),S=(f=_.headers.get("x-total-count"))!==null&&f!==void 0?f:0,w=(v=(p=_.headers.get("link"))===null||p===void 0?void 0:p.split(","))!==null&&v!==void 0?v:[];return w.length>0&&(w.forEach(k=>{const O=parseInt(k.split(";")[0].split("=")[1].substring(0,1)),B=JSON.parse(k.split(";")[1].split("=")[1]);y[`${B}Page`]=O}),y.total=parseInt(S)),{data:Object.assign(Object.assign({},j),y),error:null}}catch(y){if(he(y))return{data:{clients:[]},error:y};throw y}}async _createOAuthClient(n){try{return await ve(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:n,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(he(r))return{data:null,error:r};throw r}}async _getOAuthClient(n){try{return await ve(this.fetch,"GET",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(he(r))return{data:null,error:r};throw r}}async _updateOAuthClient(n,r){try{return await ve(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${n}`,{body:r,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(he(l))return{data:null,error:l};throw l}}async _deleteOAuthClient(n){try{return await ve(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(he(r))return{data:null,error:r};throw r}}async _regenerateOAuthClientSecret(n){try{return await ve(this.fetch,"POST",`${this.url}/admin/oauth/clients/${n}/regenerate_secret`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(he(r))return{data:null,error:r};throw r}}}function Tp(i={}){return{getItem:n=>i[n]||null,setItem:(n,r)=>{i[n]=r},removeItem:n=>{delete i[n]}}}const Fs={debug:!!(globalThis&&Zp()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Fp extends Error{constructor(n){super(n),this.isAcquireTimeout=!0}}class Ub extends Fp{}async function Mb(i,n,r){Fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",i,n);const l=new globalThis.AbortController;return n>0&&setTimeout(()=>{l.abort(),Fs.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",i)},n),await Promise.resolve().then(()=>globalThis.navigator.locks.request(i,n===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:l.signal},async d=>{if(d){Fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",i,d.name);try{return await r()}finally{Fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",i,d.name)}}else{if(n===0)throw Fs.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",i),new Ub(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);if(Fs.debug)try{const h=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(h,null,"  "))}catch(h){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",h)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}function Lb(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Wp(i){if(!/^0x[a-fA-F0-9]{40}$/.test(i))throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);return i.toLowerCase()}function Bb(i){return parseInt(i,16)}function Hb(i){const n=new TextEncoder().encode(i);return"0x"+Array.from(n,l=>l.toString(16).padStart(2,"0")).join("")}function $b(i){var n;const{chainId:r,domain:l,expirationTime:d,issuedAt:h=new Date,nonce:f,notBefore:p,requestId:v,resources:y,scheme:_,uri:j,version:S}=i;{if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);if(!l)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(f&&f.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`);if(!j)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(S!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${S}`);if(!((n=i.statement)===null||n===void 0)&&n.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${i.statement}`)}const w=Wp(i.address),k=_?`${_}://${l}`:l,O=i.statement?`${i.statement}
`:"",B=`${k} wants you to sign in with your Ethereum account:
${w}

${O}`;let T=`URI: ${j}
Version: ${S}
Chain ID: ${r}${f?`
Nonce: ${f}`:""}
Issued At: ${h.toISOString()}`;if(d&&(T+=`
Expiration Time: ${d.toISOString()}`),p&&(T+=`
Not Before: ${p.toISOString()}`),v&&(T+=`
Request ID: ${v}`),y){let C=`
Resources:`;for(const L of y){if(!L||typeof L!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${L}`);C+=`
- ${L}`}T+=C}return`${B}
${T}`}class ct extends Error{constructor({message:n,code:r,cause:l,name:d}){var h;super(n,{cause:l}),this.__isWebAuthnError=!0,this.name=(h=d??(l instanceof Error?l.name:void 0))!==null&&h!==void 0?h:"Unknown Error",this.code=r}}class Xl extends ct{constructor(n,r){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r,message:n}),this.name="WebAuthnUnknownError",this.originalError=r}}function Vb({error:i,options:n}){var r,l,d;const{publicKey:h}=n;if(!h)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(n.signal instanceof AbortSignal)return new ct({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else if(i.name==="ConstraintError"){if(((r=h.authenticatorSelection)===null||r===void 0?void 0:r.requireResidentKey)===!0)return new ct({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:i});if(n.mediation==="conditional"&&((l=h.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new ct({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:i});if(((d=h.authenticatorSelection)===null||d===void 0?void 0:d.userVerification)==="required")return new ct({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:i})}else{if(i.name==="InvalidStateError")return new ct({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:i});if(i.name==="NotAllowedError")return new ct({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="NotSupportedError")return h.pubKeyCredParams.filter(p=>p.type==="public-key").length===0?new ct({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:i}):new ct({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:i});if(i.name==="SecurityError"){const f=window.location.hostname;if(ev(f)){if(h.rp.id!==f)return new ct({message:`The RP ID "${h.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new ct({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="TypeError"){if(h.user.id.byteLength<1||h.user.id.byteLength>64)return new ct({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:i})}else if(i.name==="UnknownError")return new ct({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new ct({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}function Gb({error:i,options:n}){const{publicKey:r}=n;if(!r)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(n.signal instanceof AbortSignal)return new ct({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else{if(i.name==="NotAllowedError")return new ct({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="SecurityError"){const l=window.location.hostname;if(ev(l)){if(r.rpId!==l)return new ct({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new ct({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="UnknownError")return new ct({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new ct({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}class Kb{createNewAbortSignal(){if(this.controller){const r=new Error("Cancelling existing WebAuthn API call for new one");r.name="AbortError",this.controller.abort(r)}const n=new AbortController;return this.controller=n,n.signal}cancelCeremony(){if(this.controller){const n=new Error("Manually cancelling existing WebAuthn API call");n.name="AbortError",this.controller.abort(n),this.controller=void 0}}}const Yb=new Kb;function Qb(i){if(!i)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(i);const{challenge:n,user:r,excludeCredentials:l}=i,d=Wl(i,["challenge","user","excludeCredentials"]),h=ri(n).buffer,f=Object.assign(Object.assign({},r),{id:ri(r.id).buffer}),p=Object.assign(Object.assign({},d),{challenge:h,user:f});if(l&&l.length>0){p.excludeCredentials=new Array(l.length);for(let v=0;v<l.length;v++){const y=l[v];p.excludeCredentials[v]=Object.assign(Object.assign({},y),{id:ri(y.id).buffer,type:y.type||"public-key",transports:y.transports})}}return p}function Xb(i){if(!i)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(i);const{challenge:n,allowCredentials:r}=i,l=Wl(i,["challenge","allowCredentials"]),d=ri(n).buffer,h=Object.assign(Object.assign({},l),{challenge:d});if(r&&r.length>0){h.allowCredentials=new Array(r.length);for(let f=0;f<r.length;f++){const p=r[f];h.allowCredentials[f]=Object.assign(Object.assign({},p),{id:ri(p.id).buffer,type:p.type||"public-key",transports:p.transports})}}return h}function Jb(i){var n;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const r=i;return{id:i.id,rawId:i.id,response:{attestationObject:rs(new Uint8Array(i.response.attestationObject)),clientDataJSON:rs(new Uint8Array(i.response.clientDataJSON))},type:"public-key",clientExtensionResults:i.getClientExtensionResults(),authenticatorAttachment:(n=r.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function Pb(i){var n;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const r=i,l=i.getClientExtensionResults(),d=i.response;return{id:i.id,rawId:i.id,response:{authenticatorData:rs(new Uint8Array(d.authenticatorData)),clientDataJSON:rs(new Uint8Array(d.clientDataJSON)),signature:rs(new Uint8Array(d.signature)),userHandle:d.userHandle?rs(new Uint8Array(d.userHandle)):void 0},type:"public-key",clientExtensionResults:l,authenticatorAttachment:(n=r.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function ev(i){return i==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(i)}function Ap(){var i,n;return!!(St()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((i=navigator?.credentials)===null||i===void 0?void 0:i.create)=="function"&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.get)=="function")}async function Zb(i){try{const n=await navigator.credentials.create(i);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new Xl("Browser returned unexpected credential type",n)}:{data:null,error:new Xl("Empty credential response",n)}}catch(n){return{data:null,error:Vb({error:n,options:i})}}}async function Ib(i){try{const n=await navigator.credentials.get(i);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new Xl("Browser returned unexpected credential type",n)}:{data:null,error:new Xl("Empty credential response",n)}}catch(n){return{data:null,error:Gb({error:n,options:i})}}}const Fb={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Wb={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Jl(...i){const n=d=>d!==null&&typeof d=="object"&&!Array.isArray(d),r=d=>d instanceof ArrayBuffer||ArrayBuffer.isView(d),l={};for(const d of i)if(d)for(const h in d){const f=d[h];if(f!==void 0)if(Array.isArray(f))l[h]=f;else if(r(f))l[h]=f;else if(n(f)){const p=l[h];n(p)?l[h]=Jl(p,f):l[h]=Jl(f)}else l[h]=f}return l}function e_(i,n){return Jl(Fb,i,n||{})}function t_(i,n){return Jl(Wb,i,n||{})}class a_{constructor(n){this.client=n,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(n){return this.client.mfa.enroll(Object.assign(Object.assign({},n),{factorType:"webauthn"}))}async _challenge({factorId:n,webauthn:r,friendlyName:l,signal:d},h){var f;try{const{data:p,error:v}=await this.client.mfa.challenge({factorId:n,webauthn:r});if(!p)return{data:null,error:v};const y=d??Yb.createNewAbortSignal();if(p.webauthn.type==="create"){const{user:_}=p.webauthn.credential_options.publicKey;if(!_.name){const j=l;if(j)_.name=`${_.id}:${j}`;else{const w=(await this.client.getUser()).data.user,k=((f=w?.user_metadata)===null||f===void 0?void 0:f.name)||w?.email||w?.id||"User";_.name=`${_.id}:${k}`}}_.displayName||(_.displayName=_.name)}switch(p.webauthn.type){case"create":{const _=e_(p.webauthn.credential_options.publicKey,h?.create),{data:j,error:S}=await Zb({publicKey:_,signal:y});return j?{data:{factorId:n,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:j}},error:null}:{data:null,error:S}}case"request":{const _=t_(p.webauthn.credential_options.publicKey,h?.request),{data:j,error:S}=await Ib(Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:_,signal:y}));return j?{data:{factorId:n,challengeId:p.id,webauthn:{type:p.webauthn.type,credential_response:j}},error:null}:{data:null,error:S}}}}catch(p){return he(p)?{data:null,error:p}:{data:null,error:new is("Unexpected error in challenge",p)}}}async _verify({challengeId:n,factorId:r,webauthn:l}){return this.client.mfa.verify({factorId:r,challengeId:n,webauthn:l})}async _authenticate({factorId:n,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:d}={}},h){if(!r)return{data:null,error:new pr("rpId is required for WebAuthn authentication")};try{if(!Ap())return{data:null,error:new is("Browser does not support WebAuthn",null)};const{data:f,error:p}=await this.challenge({factorId:n,webauthn:{rpId:r,rpOrigins:l},signal:d},{request:h});if(!f)return{data:null,error:p};const{webauthn:v}=f;return this._verify({factorId:n,challengeId:f.challengeId,webauthn:{type:v.type,rpId:r,rpOrigins:l,credential_response:v.credential_response}})}catch(f){return he(f)?{data:null,error:f}:{data:null,error:new is("Unexpected error in authenticate",f)}}}async _register({friendlyName:n,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:d}={}},h){if(!r)return{data:null,error:new pr("rpId is required for WebAuthn registration")};try{if(!Ap())return{data:null,error:new is("Browser does not support WebAuthn",null)};const{data:f,error:p}=await this._enroll({friendlyName:n});if(!f)return await this.client.mfa.listFactors().then(_=>{var j;return(j=_.data)===null||j===void 0?void 0:j.all.find(S=>S.factor_type==="webauthn"&&S.friendly_name===n&&S.status!=="unverified")}).then(_=>_?this.client.mfa.unenroll({factorId:_?.id}):void 0),{data:null,error:p};const{data:v,error:y}=await this._challenge({factorId:f.id,friendlyName:f.friendly_name,webauthn:{rpId:r,rpOrigins:l},signal:d},{create:h});return v?this._verify({factorId:f.id,challengeId:v.challengeId,webauthn:{rpId:r,rpOrigins:l,type:v.webauthn.type,credential_response:v.webauthn.credential_response}}):{data:null,error:y}}catch(f){return he(f)?{data:null,error:f}:{data:null,error:new is("Unexpected error in register",f)}}}}Lb();const n_={url:W0,storageKey:eb,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:tb,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:1e4};async function Op(i,n,r){return await r()}const Ws={};class vr{get jwks(){var n,r;return(r=(n=Ws[this.storageKey])===null||n===void 0?void 0:n.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(n){Ws[this.storageKey]=Object.assign(Object.assign({},Ws[this.storageKey]),{jwks:n})}get jwks_cached_at(){var n,r;return(r=(n=Ws[this.storageKey])===null||n===void 0?void 0:n.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(n){Ws[this.storageKey]=Object.assign(Object.assign({},Ws[this.storageKey]),{cachedAt:n})}constructor(n){var r,l,d;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const h=Object.assign(Object.assign({},n_),n);if(this.storageKey=h.storageKey,this.instanceID=(r=vr.nextInstanceID[this.storageKey])!==null&&r!==void 0?r:0,vr.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!h.debug,typeof h.debug=="function"&&(this.logger=h.debug),this.instanceID>0&&St()){const f=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(f),this.logDebugMessages&&console.trace(f)}if(this.persistSession=h.persistSession,this.autoRefreshToken=h.autoRefreshToken,this.admin=new qb({url:h.url,headers:h.headers,fetch:h.fetch}),this.url=h.url,this.headers=h.headers,this.fetch=Ip(h.fetch),this.lock=h.lock||Op,this.detectSessionInUrl=h.detectSessionInUrl,this.flowType=h.flowType,this.hasCustomAuthorizationHeader=h.hasCustomAuthorizationHeader,this.throwOnError=h.throwOnError,this.lockAcquireTimeout=h.lockAcquireTimeout,h.lock?this.lock=h.lock:this.persistSession&&St()&&(!((l=globalThis?.navigator)===null||l===void 0)&&l.locks)?this.lock=Mb:this.lock=Op,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new a_(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(h.storage?this.storage=h.storage:Zp()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Tp(this.memoryStorage)),h.userStorage&&(this.userStorage=h.userStorage)):(this.memoryStorage={},this.storage=Tp(this.memoryStorage)),St()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(f){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",f)}(d=this.broadcastChannel)===null||d===void 0||d.addEventListener("message",async f=>{this._debug("received broadcast notification from other tab or client",f);try{await this._notifyAllSubscribers(f.data.event,f.data.session,!1)}catch(p){this._debug("#broadcastChannel","error",p)}})}this.initialize().catch(f=>{this._debug("#initialize()","error",f)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(n){if(this.throwOnError&&n&&n.error)throw n.error;return n}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Xp}) ${new Date().toISOString()}`}_debug(...n){return this.logDebugMessages&&this.logger(this._logPrefix(),...n),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var n;try{let r={},l="none";if(St()&&(r=pb(window.location.href),this._isImplicitGrantCallback(r)?l="implicit":await this._isPKCECallback(r)&&(l="pkce")),St()&&this.detectSessionInUrl&&l!=="none"){const{data:d,error:h}=await this._getSessionFromURL(r,l);if(h){if(this._debug("#_initialize()","error detecting session from URL",h),rb(h)){const v=(n=h.details)===null||n===void 0?void 0:n.code;if(v==="identity_already_exists"||v==="identity_not_found"||v==="single_identity_not_deletable")return{error:h}}return{error:h}}const{session:f,redirectType:p}=d;return this._debug("#_initialize()","detected session in URL",f,"redirect type",p),await this._saveSession(f),setTimeout(async()=>{p==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",f):await this._notifyAllSubscribers("SIGNED_IN",f)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return he(r)?this._returnResult({error:r}):this._returnResult({error:new is("Unexpected error during initialization",r)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(n){var r,l,d;try{const h=await ve(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(l=(r=n?.options)===null||r===void 0?void 0:r.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:(d=n?.options)===null||d===void 0?void 0:d.captchaToken}},xform:_a}),{data:f,error:p}=h;if(p||!f)return this._returnResult({data:{user:null,session:null},error:p});const v=f.session,y=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",v)),this._returnResult({data:{user:y,session:v},error:null})}catch(h){if(he(h))return this._returnResult({data:{user:null,session:null},error:h});throw h}}async signUp(n){var r,l,d;try{let h;if("email"in n){const{email:_,password:j,options:S}=n;let w=null,k=null;this.flowType==="pkce"&&([w,k]=await Zs(this.storage,this.storageKey)),h=await ve(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:S?.emailRedirectTo,body:{email:_,password:j,data:(r=S?.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:S?.captchaToken},code_challenge:w,code_challenge_method:k},xform:_a})}else if("phone"in n){const{phone:_,password:j,options:S}=n;h=await ve(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:_,password:j,data:(l=S?.data)!==null&&l!==void 0?l:{},channel:(d=S?.channel)!==null&&d!==void 0?d:"sms",gotrue_meta_security:{captcha_token:S?.captchaToken}},xform:_a})}else throw new Hl("You must provide either an email or phone number and a password");const{data:f,error:p}=h;if(p||!f)return await jt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p});const v=f.session,y=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",v)),this._returnResult({data:{user:y,session:v},error:null})}catch(h){if(await jt(this.storage,`${this.storageKey}-code-verifier`),he(h))return this._returnResult({data:{user:null,session:null},error:h});throw h}}async signInWithPassword(n){try{let r;if("email"in n){const{email:h,password:f,options:p}=n;r=await ve(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:h,password:f,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:wp})}else if("phone"in n){const{phone:h,password:f,options:p}=n;r=await ve(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:h,password:f,gotrue_meta_security:{captcha_token:p?.captchaToken}},xform:wp})}else throw new Hl("You must provide either an email or phone number and a password");const{data:l,error:d}=r;if(d)return this._returnResult({data:{user:null,session:null},error:d});if(!l||!l.session||!l.user){const h=new Ps;return this._returnResult({data:{user:null,session:null},error:h})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:Object.assign({user:l.user,session:l.session},l.weak_password?{weakPassword:l.weak_password}:null),error:d})}catch(r){if(he(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOAuth(n){var r,l,d,h;return await this._handleProviderSignIn(n.provider,{redirectTo:(r=n.options)===null||r===void 0?void 0:r.redirectTo,scopes:(l=n.options)===null||l===void 0?void 0:l.scopes,queryParams:(d=n.options)===null||d===void 0?void 0:d.queryParams,skipBrowserRedirect:(h=n.options)===null||h===void 0?void 0:h.skipBrowserRedirect})}async exchangeCodeForSession(n){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(n))}async signInWithWeb3(n){const{chain:r}=n;switch(r){case"ethereum":return await this.signInWithEthereum(n);case"solana":return await this.signInWithSolana(n);default:throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}}async signInWithEthereum(n){var r,l,d,h,f,p,v,y,_,j,S;let w,k;if("message"in n)w=n.message,k=n.signature;else{const{chain:O,wallet:B,statement:T,options:C}=n;let L;if(St())if(typeof B=="object")L=B;else{const ie=window;if("ethereum"in ie&&typeof ie.ethereum=="object"&&"request"in ie.ethereum&&typeof ie.ethereum.request=="function")L=ie.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof B!="object"||!C?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");L=B}const X=new URL((r=C?.url)!==null&&r!==void 0?r:window.location.href),G=await L.request({method:"eth_requestAccounts"}).then(ie=>ie).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!G||G.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const z=Wp(G[0]);let I=(l=C?.signInWithEthereum)===null||l===void 0?void 0:l.chainId;if(!I){const ie=await L.request({method:"eth_chainId"});I=Bb(ie)}const Y={domain:X.host,address:z,statement:T,uri:X.href,version:"1",chainId:I,nonce:(d=C?.signInWithEthereum)===null||d===void 0?void 0:d.nonce,issuedAt:(f=(h=C?.signInWithEthereum)===null||h===void 0?void 0:h.issuedAt)!==null&&f!==void 0?f:new Date,expirationTime:(p=C?.signInWithEthereum)===null||p===void 0?void 0:p.expirationTime,notBefore:(v=C?.signInWithEthereum)===null||v===void 0?void 0:v.notBefore,requestId:(y=C?.signInWithEthereum)===null||y===void 0?void 0:y.requestId,resources:(_=C?.signInWithEthereum)===null||_===void 0?void 0:_.resources};w=$b(Y),k=await L.request({method:"personal_sign",params:[Hb(w),z]})}try{const{data:O,error:B}=await ve(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:k},!((j=n.options)===null||j===void 0)&&j.captchaToken?{gotrue_meta_security:{captcha_token:(S=n.options)===null||S===void 0?void 0:S.captchaToken}}:null),xform:_a});if(B)throw B;if(!O||!O.session||!O.user){const T=new Ps;return this._returnResult({data:{user:null,session:null},error:T})}return O.session&&(await this._saveSession(O.session),await this._notifyAllSubscribers("SIGNED_IN",O.session)),this._returnResult({data:Object.assign({},O),error:B})}catch(O){if(he(O))return this._returnResult({data:{user:null,session:null},error:O});throw O}}async signInWithSolana(n){var r,l,d,h,f,p,v,y,_,j,S,w;let k,O;if("message"in n)k=n.message,O=n.signature;else{const{chain:B,wallet:T,statement:C,options:L}=n;let X;if(St())if(typeof T=="object")X=T;else{const z=window;if("solana"in z&&typeof z.solana=="object"&&("signIn"in z.solana&&typeof z.solana.signIn=="function"||"signMessage"in z.solana&&typeof z.solana.signMessage=="function"))X=z.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof T!="object"||!L?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");X=T}const G=new URL((r=L?.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in X&&X.signIn){const z=await X.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},L?.signInWithSolana),{version:"1",domain:G.host,uri:G.href}),C?{statement:C}:null));let I;if(Array.isArray(z)&&z[0]&&typeof z[0]=="object")I=z[0];else if(z&&typeof z=="object"&&"signedMessage"in z&&"signature"in z)I=z;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in I&&"signature"in I&&(typeof I.signedMessage=="string"||I.signedMessage instanceof Uint8Array)&&I.signature instanceof Uint8Array)k=typeof I.signedMessage=="string"?I.signedMessage:new TextDecoder().decode(I.signedMessage),O=I.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in X)||typeof X.signMessage!="function"||!("publicKey"in X)||typeof X!="object"||!X.publicKey||!("toBase58"in X.publicKey)||typeof X.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");k=[`${G.host} wants you to sign in with your Solana account:`,X.publicKey.toBase58(),...C?["",C,""]:[""],"Version: 1",`URI: ${G.href}`,`Issued At: ${(d=(l=L?.signInWithSolana)===null||l===void 0?void 0:l.issuedAt)!==null&&d!==void 0?d:new Date().toISOString()}`,...!((h=L?.signInWithSolana)===null||h===void 0)&&h.notBefore?[`Not Before: ${L.signInWithSolana.notBefore}`]:[],...!((f=L?.signInWithSolana)===null||f===void 0)&&f.expirationTime?[`Expiration Time: ${L.signInWithSolana.expirationTime}`]:[],...!((p=L?.signInWithSolana)===null||p===void 0)&&p.chainId?[`Chain ID: ${L.signInWithSolana.chainId}`]:[],...!((v=L?.signInWithSolana)===null||v===void 0)&&v.nonce?[`Nonce: ${L.signInWithSolana.nonce}`]:[],...!((y=L?.signInWithSolana)===null||y===void 0)&&y.requestId?[`Request ID: ${L.signInWithSolana.requestId}`]:[],...!((j=(_=L?.signInWithSolana)===null||_===void 0?void 0:_.resources)===null||j===void 0)&&j.length?["Resources",...L.signInWithSolana.resources.map(I=>`- ${I}`)]:[]].join(`
`);const z=await X.signMessage(new TextEncoder().encode(k),"utf8");if(!z||!(z instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");O=z}}try{const{data:B,error:T}=await ve(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:k,signature:rs(O)},!((S=n.options)===null||S===void 0)&&S.captchaToken?{gotrue_meta_security:{captcha_token:(w=n.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:_a});if(T)throw T;if(!B||!B.session||!B.user){const C=new Ps;return this._returnResult({data:{user:null,session:null},error:C})}return B.session&&(await this._saveSession(B.session),await this._notifyAllSubscribers("SIGNED_IN",B.session)),this._returnResult({data:Object.assign({},B),error:T})}catch(B){if(he(B))return this._returnResult({data:{user:null,session:null},error:B});throw B}}async _exchangeCodeForSession(n){const r=await as(this.storage,`${this.storageKey}-code-verifier`),[l,d]=(r??"").split("/");try{if(!l&&this.flowType==="pkce")throw new lb;const{data:h,error:f}=await ve(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:n,code_verifier:l},xform:_a});if(await jt(this.storage,`${this.storageKey}-code-verifier`),f)throw f;if(!h||!h.session||!h.user){const p=new Ps;return this._returnResult({data:{user:null,session:null,redirectType:null},error:p})}return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",h.session)),this._returnResult({data:Object.assign(Object.assign({},h),{redirectType:d??null}),error:f})}catch(h){if(await jt(this.storage,`${this.storageKey}-code-verifier`),he(h))return this._returnResult({data:{user:null,session:null,redirectType:null},error:h});throw h}}async signInWithIdToken(n){try{const{options:r,provider:l,token:d,access_token:h,nonce:f}=n,p=await ve(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:d,access_token:h,nonce:f,gotrue_meta_security:{captcha_token:r?.captchaToken}},xform:_a}),{data:v,error:y}=p;if(y)return this._returnResult({data:{user:null,session:null},error:y});if(!v||!v.session||!v.user){const _=new Ps;return this._returnResult({data:{user:null,session:null},error:_})}return v.session&&(await this._saveSession(v.session),await this._notifyAllSubscribers("SIGNED_IN",v.session)),this._returnResult({data:v,error:y})}catch(r){if(he(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOtp(n){var r,l,d,h,f;try{if("email"in n){const{email:p,options:v}=n;let y=null,_=null;this.flowType==="pkce"&&([y,_]=await Zs(this.storage,this.storageKey));const{error:j}=await ve(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:p,data:(r=v?.data)!==null&&r!==void 0?r:{},create_user:(l=v?.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:v?.captchaToken},code_challenge:y,code_challenge_method:_},redirectTo:v?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:j})}if("phone"in n){const{phone:p,options:v}=n,{data:y,error:_}=await ve(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:p,data:(d=v?.data)!==null&&d!==void 0?d:{},create_user:(h=v?.shouldCreateUser)!==null&&h!==void 0?h:!0,gotrue_meta_security:{captcha_token:v?.captchaToken},channel:(f=v?.channel)!==null&&f!==void 0?f:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:y?.message_id},error:_})}throw new Hl("You must provide either an email or phone number.")}catch(p){if(await jt(this.storage,`${this.storageKey}-code-verifier`),he(p))return this._returnResult({data:{user:null,session:null},error:p});throw p}}async verifyOtp(n){var r,l;try{let d,h;"options"in n&&(d=(r=n.options)===null||r===void 0?void 0:r.redirectTo,h=(l=n.options)===null||l===void 0?void 0:l.captchaToken);const{data:f,error:p}=await ve(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},n),{gotrue_meta_security:{captcha_token:h}}),redirectTo:d,xform:_a});if(p)throw p;if(!f)throw new Error("An error occurred on token verification.");const v=f.session,y=f.user;return v?.access_token&&(await this._saveSession(v),await this._notifyAllSubscribers(n.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",v)),this._returnResult({data:{user:y,session:v},error:null})}catch(d){if(he(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signInWithSSO(n){var r,l,d,h,f;try{let p=null,v=null;this.flowType==="pkce"&&([p,v]=await Zs(this.storage,this.storageKey));const y=await ve(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in n?{provider_id:n.providerId}:null),"domain"in n?{domain:n.domain}:null),{redirect_to:(l=(r=n.options)===null||r===void 0?void 0:r.redirectTo)!==null&&l!==void 0?l:void 0}),!((d=n?.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:n.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:p,code_challenge_method:v}),headers:this.headers,xform:Rb});return!((h=y.data)===null||h===void 0)&&h.url&&St()&&!(!((f=n.options)===null||f===void 0)&&f.skipBrowserRedirect)&&window.location.assign(y.data.url),this._returnResult(y)}catch(p){if(await jt(this.storage,`${this.storageKey}-code-verifier`),he(p))return this._returnResult({data:null,error:p});throw p}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async n=>{const{data:{session:r},error:l}=n;if(l)throw l;if(!r)throw new Ft;const{error:d}=await ve(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return this._returnResult({data:{user:null,session:null},error:d})})}catch(n){if(he(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async resend(n){try{const r=`${this.url}/resend`;if("email"in n){const{email:l,type:d,options:h}=n,{error:f}=await ve(this.fetch,"POST",r,{headers:this.headers,body:{email:l,type:d,gotrue_meta_security:{captcha_token:h?.captchaToken}},redirectTo:h?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:f})}else if("phone"in n){const{phone:l,type:d,options:h}=n,{data:f,error:p}=await ve(this.fetch,"POST",r,{headers:this.headers,body:{phone:l,type:d,gotrue_meta_security:{captcha_token:h?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:f?.message_id},error:p})}throw new Hl("You must provide either an email or phone number and a type")}catch(r){if(he(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async r=>r))}async _acquireLock(n,r){this._debug("#_acquireLock","begin",n);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),d=(async()=>(await l,await r()))();return this.pendingInLock.push((async()=>{try{await d}catch{}})()),d}return await this.lock(`lock:${this.storageKey}`,n,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=r();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const d=[...this.pendingInLock];await Promise.all(d),this.pendingInLock.splice(0,d.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(n){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await n(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let n=null;const r=await as(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?n=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!n)return{data:{session:null},error:null};const l=n.expires_at?n.expires_at*1e3-Date.now()<Ec:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",n.expires_at),!l){if(this.userStorage){const f=await as(this.userStorage,this.storageKey+"-user");f?.user?n.user=f.user:n.user=Oc()}if(this.storage.isServer&&n.user&&!n.user.__isUserNotAvailableProxy){const f={value:this.suppressGetSessionWarning};n.user=Ob(n.user,f),f.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:n},error:null}}const{data:d,error:h}=await this._callRefreshToken(n.refresh_token);return h?this._returnResult({data:{session:null},error:h}):this._returnResult({data:{session:d},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(n){if(n)return await this._getUser(n);await this.initializePromise;const r=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return r.data.user&&(this.suppressGetSessionWarning=!0),r}async _getUser(n){try{return n?await ve(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:n,xform:Nn}):await this._useSession(async r=>{var l,d,h;const{data:f,error:p}=r;if(p)throw p;return!(!((l=f.session)===null||l===void 0)&&l.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Ft}:await ve(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(h=(d=f.session)===null||d===void 0?void 0:d.access_token)!==null&&h!==void 0?h:void 0,xform:Nn})})}catch(r){if(he(r))return Tc(r)&&(await this._removeSession(),await jt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:r});throw r}}async updateUser(n,r={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(n,r))}async _updateUser(n,r={}){try{return await this._useSession(async l=>{const{data:d,error:h}=l;if(h)throw h;if(!d.session)throw new Ft;const f=d.session;let p=null,v=null;this.flowType==="pkce"&&n.email!=null&&([p,v]=await Zs(this.storage,this.storageKey));const{data:y,error:_}=await ve(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r?.emailRedirectTo,body:Object.assign(Object.assign({},n),{code_challenge:p,code_challenge_method:v}),jwt:f.access_token,xform:Nn});if(_)throw _;return f.user=y.user,await this._saveSession(f),await this._notifyAllSubscribers("USER_UPDATED",f),this._returnResult({data:{user:f.user},error:null})})}catch(l){if(await jt(this.storage,`${this.storageKey}-code-verifier`),he(l))return this._returnResult({data:{user:null},error:l});throw l}}async setSession(n){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(n))}async _setSession(n){try{if(!n.access_token||!n.refresh_token)throw new Ft;const r=Date.now()/1e3;let l=r,d=!0,h=null;const{payload:f}=Vl(n.access_token);if(f.exp&&(l=f.exp,d=l<=r),d){const{data:p,error:v}=await this._callRefreshToken(n.refresh_token);if(v)return this._returnResult({data:{user:null,session:null},error:v});if(!p)return{data:{user:null,session:null},error:null};h=p}else{const{data:p,error:v}=await this._getUser(n.access_token);if(v)return this._returnResult({data:{user:null,session:null},error:v});h={access_token:n.access_token,refresh_token:n.refresh_token,user:p.user,token_type:"bearer",expires_in:l-r,expires_at:l},await this._saveSession(h),await this._notifyAllSubscribers("SIGNED_IN",h)}return this._returnResult({data:{user:h.user,session:h},error:null})}catch(r){if(he(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}}async refreshSession(n){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(n))}async _refreshSession(n){try{return await this._useSession(async r=>{var l;if(!n){const{data:f,error:p}=r;if(p)throw p;n=(l=f.session)!==null&&l!==void 0?l:void 0}if(!n?.refresh_token)throw new Ft;const{data:d,error:h}=await this._callRefreshToken(n.refresh_token);return h?this._returnResult({data:{user:null,session:null},error:h}):d?this._returnResult({data:{user:d.user,session:d},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(r){if(he(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async _getSessionFromURL(n,r){try{if(!St())throw new $l("No browser detected.");if(n.error||n.error_description||n.error_code)throw new $l(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new yp("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new $l("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!n.code)throw new yp("No code detected.");const{data:C,error:L}=await this._exchangeCodeForSession(n.code);if(L)throw L;const X=new URL(window.location.href);return X.searchParams.delete("code"),window.history.replaceState(window.history.state,"",X.toString()),{data:{session:C.session,redirectType:null},error:null}}const{provider_token:l,provider_refresh_token:d,access_token:h,refresh_token:f,expires_in:p,expires_at:v,token_type:y}=n;if(!h||!p||!f||!y)throw new $l("No session defined in URL");const _=Math.round(Date.now()/1e3),j=parseInt(p);let S=_+j;v&&(S=parseInt(v));const w=S-_;w*1e3<=ai&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${j}s`);const k=S-j;_-k>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",k,S,_):_-k<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",k,S,_);const{data:O,error:B}=await this._getUser(h);if(B)throw B;const T={provider_token:l,provider_refresh_token:d,access_token:h,expires_in:j,expires_at:S,refresh_token:f,token_type:y,user:O.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:T,redirectType:n.type},error:null})}catch(l){if(he(l))return this._returnResult({data:{session:null,redirectType:null},error:l});throw l}}_isImplicitGrantCallback(n){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),n):!!(n.access_token||n.error_description)}async _isPKCECallback(n){const r=await as(this.storage,`${this.storageKey}-code-verifier`);return!!(n.code&&r)}async signOut(n={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(n))}async _signOut({scope:n}={scope:"global"}){return await this._useSession(async r=>{var l;const{data:d,error:h}=r;if(h&&!Tc(h))return this._returnResult({error:h});const f=(l=d.session)===null||l===void 0?void 0:l.access_token;if(f){const{error:p}=await this.admin.signOut(f,n);if(p&&!(ib(p)&&(p.status===404||p.status===401||p.status===403)||Tc(p)))return this._returnResult({error:p})}return n!=="others"&&(await this._removeSession(),await jt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(n){const r=mb(),l={id:r,callback:n,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,l),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:l}}}async _emitInitialSession(n){return await this._useSession(async r=>{var l,d;try{const{data:{session:h},error:f}=r;if(f)throw f;await((l=this.stateChangeEmitters.get(n))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",h)),this._debug("INITIAL_SESSION","callback id",n,"session",h)}catch(h){await((d=this.stateChangeEmitters.get(n))===null||d===void 0?void 0:d.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",n,"error",h),console.error(h)}})}async resetPasswordForEmail(n,r={}){let l=null,d=null;this.flowType==="pkce"&&([l,d]=await Zs(this.storage,this.storageKey,!0));try{return await ve(this.fetch,"POST",`${this.url}/recover`,{body:{email:n,code_challenge:l,code_challenge_method:d,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(h){if(await jt(this.storage,`${this.storageKey}-code-verifier`),he(h))return this._returnResult({data:null,error:h});throw h}}async getUserIdentities(){var n;try{const{data:r,error:l}=await this.getUser();if(l)throw l;return this._returnResult({data:{identities:(n=r.user.identities)!==null&&n!==void 0?n:[]},error:null})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}}async linkIdentity(n){return"token"in n?this.linkIdentityIdToken(n):this.linkIdentityOAuth(n)}async linkIdentityOAuth(n){var r;try{const{data:l,error:d}=await this._useSession(async h=>{var f,p,v,y,_;const{data:j,error:S}=h;if(S)throw S;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,n.provider,{redirectTo:(f=n.options)===null||f===void 0?void 0:f.redirectTo,scopes:(p=n.options)===null||p===void 0?void 0:p.scopes,queryParams:(v=n.options)===null||v===void 0?void 0:v.queryParams,skipBrowserRedirect:!0});return await ve(this.fetch,"GET",w,{headers:this.headers,jwt:(_=(y=j.session)===null||y===void 0?void 0:y.access_token)!==null&&_!==void 0?_:void 0})});if(d)throw d;return St()&&!(!((r=n.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(l?.url),this._returnResult({data:{provider:n.provider,url:l?.url},error:null})}catch(l){if(he(l))return this._returnResult({data:{provider:n.provider,url:null},error:l});throw l}}async linkIdentityIdToken(n){return await this._useSession(async r=>{var l;try{const{error:d,data:{session:h}}=r;if(d)throw d;const{options:f,provider:p,token:v,access_token:y,nonce:_}=n,j=await ve(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(l=h?.access_token)!==null&&l!==void 0?l:void 0,body:{provider:p,id_token:v,access_token:y,nonce:_,link_identity:!0,gotrue_meta_security:{captcha_token:f?.captchaToken}},xform:_a}),{data:S,error:w}=j;return w?this._returnResult({data:{user:null,session:null},error:w}):!S||!S.session||!S.user?this._returnResult({data:{user:null,session:null},error:new Ps}):(S.session&&(await this._saveSession(S.session),await this._notifyAllSubscribers("USER_UPDATED",S.session)),this._returnResult({data:S,error:w}))}catch(d){if(await jt(this.storage,`${this.storageKey}-code-verifier`),he(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}})}async unlinkIdentity(n){try{return await this._useSession(async r=>{var l,d;const{data:h,error:f}=r;if(f)throw f;return await ve(this.fetch,"DELETE",`${this.url}/user/identities/${n.identity_id}`,{headers:this.headers,jwt:(d=(l=h.session)===null||l===void 0?void 0:l.access_token)!==null&&d!==void 0?d:void 0})})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}}async _refreshAccessToken(n){const r=`#_refreshAccessToken(${n.substring(0,5)}...)`;this._debug(r,"begin");try{const l=Date.now();return await gb(async d=>(d>0&&await yb(200*Math.pow(2,d-1)),this._debug(r,"refreshing attempt",d),await ve(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:n},headers:this.headers,xform:_a})),(d,h)=>{const f=200*Math.pow(2,d);return h&&Ac(h)&&Date.now()+f-l<ai})}catch(l){if(this._debug(r,"error",l),he(l))return this._returnResult({data:{session:null,user:null},error:l});throw l}finally{this._debug(r,"end")}}_isValidSession(n){return typeof n=="object"&&n!==null&&"access_token"in n&&"refresh_token"in n&&"expires_at"in n}async _handleProviderSignIn(n,r){const l=await this._getUrlForProvider(`${this.url}/authorize`,n,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",n,"options",r,"url",l),St()&&!r.skipBrowserRedirect&&window.location.assign(l),{data:{provider:n,url:l},error:null}}async _recoverAndRefresh(){var n,r;const l="#_recoverAndRefresh()";this._debug(l,"begin");try{const d=await as(this.storage,this.storageKey);if(d&&this.userStorage){let f=await as(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!f&&(f={user:d.user},await ni(this.userStorage,this.storageKey+"-user",f)),d.user=(n=f?.user)!==null&&n!==void 0?n:Oc()}else if(d&&!d.user&&!d.user){const f=await as(this.storage,this.storageKey+"-user");f&&f?.user?(d.user=f.user,await jt(this.storage,this.storageKey+"-user"),await ni(this.storage,this.storageKey,d)):d.user=Oc()}if(this._debug(l,"session from storage",d),!this._isValidSession(d)){this._debug(l,"session is not valid"),d!==null&&await this._removeSession();return}const h=((r=d.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Ec;if(this._debug(l,`session has${h?"":" not"} expired with margin of ${Ec}s`),h){if(this.autoRefreshToken&&d.refresh_token){const{error:f}=await this._callRefreshToken(d.refresh_token);f&&(console.error(f),Ac(f)||(this._debug(l,"refresh failed with a non-retryable error, removing the session",f),await this._removeSession()))}}else if(d.user&&d.user.__isUserNotAvailableProxy===!0)try{const{data:f,error:p}=await this._getUser(d.access_token);!p&&f?.user?(d.user=f.user,await this._saveSession(d),await this._notifyAllSubscribers("SIGNED_IN",d)):this._debug(l,"could not get user data, skipping SIGNED_IN notification")}catch(f){console.error("Error getting user data:",f),this._debug(l,"error getting user data, skipping SIGNED_IN notification",f)}else await this._notifyAllSubscribers("SIGNED_IN",d)}catch(d){this._debug(l,"error",d),console.error(d);return}finally{this._debug(l,"end")}}async _callRefreshToken(n){var r,l;if(!n)throw new Ft;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const d=`#_callRefreshToken(${n.substring(0,5)}...)`;this._debug(d,"begin");try{this.refreshingDeferred=new ao;const{data:h,error:f}=await this._refreshAccessToken(n);if(f)throw f;if(!h.session)throw new Ft;await this._saveSession(h.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",h.session);const p={data:h.session,error:null};return this.refreshingDeferred.resolve(p),p}catch(h){if(this._debug(d,"error",h),he(h)){const f={data:null,error:h};return Ac(h)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(f),f}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(h),h}finally{this.refreshingDeferred=null,this._debug(d,"end")}}async _notifyAllSubscribers(n,r,l=!0){const d=`#_notifyAllSubscribers(${n})`;this._debug(d,"begin",r,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:n,session:r});const h=[],f=Array.from(this.stateChangeEmitters.values()).map(async p=>{try{await p.callback(n,r)}catch(v){h.push(v)}});if(await Promise.all(f),h.length>0){for(let p=0;p<h.length;p+=1)console.error(h[p]);throw h[0]}}finally{this._debug(d,"end")}}async _saveSession(n){this._debug("#_saveSession()",n),this.suppressGetSessionWarning=!0,await jt(this.storage,`${this.storageKey}-code-verifier`);const r=Object.assign({},n),l=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!l&&r.user&&await ni(this.userStorage,this.storageKey+"-user",{user:r.user});const d=Object.assign({},r);delete d.user;const h=jp(d);await ni(this.storage,this.storageKey,h)}else{const d=jp(r);await ni(this.storage,this.storageKey,d)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await jt(this.storage,this.storageKey),await jt(this.storage,this.storageKey+"-code-verifier"),await jt(this.storage,this.storageKey+"-user"),this.userStorage&&await jt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const n=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{n&&St()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",n)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const n=setInterval(()=>this._autoRefreshTokenTick(),ai);this.autoRefreshTicker=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n);const r=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=r,r&&typeof r=="object"&&typeof r.unref=="function"?r.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(r)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const n=this.autoRefreshTicker;this.autoRefreshTicker=null,n&&clearInterval(n);const r=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,r&&clearTimeout(r)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const n=Date.now();try{return await this._useSession(async r=>{const{data:{session:l}}=r;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const d=Math.floor((l.expires_at*1e3-n)/ai);this._debug("#_autoRefreshTokenTick()",`access token expires in ${d} ticks, a tick lasts ${ai}ms, refresh threshold is ${Gc} ticks`),d<=Gc&&await this._callRefreshToken(l.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(n){if(n.isAcquireTimeout||n instanceof Fp)this._debug("auto refresh token tick lock not available");else throw n}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!St()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(n){this._debug("#visibilityChangedCallback","error",n)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(n){console.error("_handleVisibilityChange",n)}}async _onVisibilityChanged(n){const r=`#_onVisibilityChanged(${n})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),n||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(n,r,l){const d=[`provider=${encodeURIComponent(r)}`];if(l?.redirectTo&&d.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),l?.scopes&&d.push(`scopes=${encodeURIComponent(l.scopes)}`),this.flowType==="pkce"){const[h,f]=await Zs(this.storage,this.storageKey),p=new URLSearchParams({code_challenge:`${encodeURIComponent(h)}`,code_challenge_method:`${encodeURIComponent(f)}`});d.push(p.toString())}if(l?.queryParams){const h=new URLSearchParams(l.queryParams);d.push(h.toString())}return l?.skipBrowserRedirect&&d.push(`skip_http_redirect=${l.skipBrowserRedirect}`),`${n}?${d.join("&")}`}async _unenroll(n){try{return await this._useSession(async r=>{var l;const{data:d,error:h}=r;return h?this._returnResult({data:null,error:h}):await ve(this.fetch,"DELETE",`${this.url}/factors/${n.factorId}`,{headers:this.headers,jwt:(l=d?.session)===null||l===void 0?void 0:l.access_token})})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}}async _enroll(n){try{return await this._useSession(async r=>{var l,d;const{data:h,error:f}=r;if(f)return this._returnResult({data:null,error:f});const p=Object.assign({friendly_name:n.friendlyName,factor_type:n.factorType},n.factorType==="phone"?{phone:n.phone}:n.factorType==="totp"?{issuer:n.issuer}:{}),{data:v,error:y}=await ve(this.fetch,"POST",`${this.url}/factors`,{body:p,headers:this.headers,jwt:(l=h?.session)===null||l===void 0?void 0:l.access_token});return y?this._returnResult({data:null,error:y}):(n.factorType==="totp"&&v.type==="totp"&&(!((d=v?.totp)===null||d===void 0)&&d.qr_code)&&(v.totp.qr_code=`data:image/svg+xml;utf-8,${v.totp.qr_code}`),this._returnResult({data:v,error:null}))})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}}async _verify(n){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async r=>{var l;const{data:d,error:h}=r;if(h)return this._returnResult({data:null,error:h});const f=Object.assign({challenge_id:n.challengeId},"webauthn"in n?{webauthn:Object.assign(Object.assign({},n.webauthn),{credential_response:n.webauthn.type==="create"?Jb(n.webauthn.credential_response):Pb(n.webauthn.credential_response)})}:{code:n.code}),{data:p,error:v}=await ve(this.fetch,"POST",`${this.url}/factors/${n.factorId}/verify`,{body:f,headers:this.headers,jwt:(l=d?.session)===null||l===void 0?void 0:l.access_token});return v?this._returnResult({data:null,error:v}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:v}))})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}})}async _challenge(n){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async r=>{var l;const{data:d,error:h}=r;if(h)return this._returnResult({data:null,error:h});const f=await ve(this.fetch,"POST",`${this.url}/factors/${n.factorId}/challenge`,{body:n,headers:this.headers,jwt:(l=d?.session)===null||l===void 0?void 0:l.access_token});if(f.error)return f;const{data:p}=f;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Qb(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Xb(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}})}async _challengeAndVerify(n){const{data:r,error:l}=await this._challenge({factorId:n.factorId});return l?this._returnResult({data:null,error:l}):await this._verify({factorId:n.factorId,challengeId:r.id,code:n.code})}async _listFactors(){var n;const{data:{user:r},error:l}=await this.getUser();if(l)return{data:null,error:l};const d={all:[],phone:[],totp:[],webauthn:[]};for(const h of(n=r?.factors)!==null&&n!==void 0?n:[])d.all.push(h),h.status==="verified"&&d[h.factor_type].push(h);return{data:d,error:null}}async _getAuthenticatorAssuranceLevel(n){var r,l,d,h;if(n)try{const{payload:w}=Vl(n);let k=null;w.aal&&(k=w.aal);let O=k;const{data:{user:B},error:T}=await this.getUser(n);if(T)return this._returnResult({data:null,error:T});((l=(r=B?.factors)===null||r===void 0?void 0:r.filter(X=>X.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(O="aal2");const L=w.amr||[];return{data:{currentLevel:k,nextLevel:O,currentAuthenticationMethods:L},error:null}}catch(w){if(he(w))return this._returnResult({data:null,error:w});throw w}const{data:{session:f},error:p}=await this.getSession();if(p)return this._returnResult({data:null,error:p});if(!f)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:v}=Vl(f.access_token);let y=null;v.aal&&(y=v.aal);let _=y;((h=(d=f.user.factors)===null||d===void 0?void 0:d.filter(w=>w.status==="verified"))!==null&&h!==void 0?h:[]).length>0&&(_="aal2");const S=v.amr||[];return{data:{currentLevel:y,nextLevel:_,currentAuthenticationMethods:S},error:null}}async _getAuthorizationDetails(n){try{return await this._useSession(async r=>{const{data:{session:l},error:d}=r;return d?this._returnResult({data:null,error:d}):l?await ve(this.fetch,"GET",`${this.url}/oauth/authorizations/${n}`,{headers:this.headers,jwt:l.access_token,xform:h=>({data:h,error:null})}):this._returnResult({data:null,error:new Ft})})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}}async _approveAuthorization(n,r){try{return await this._useSession(async l=>{const{data:{session:d},error:h}=l;if(h)return this._returnResult({data:null,error:h});if(!d)return this._returnResult({data:null,error:new Ft});const f=await ve(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:d.access_token,body:{action:"approve"},xform:p=>({data:p,error:null})});return f.data&&f.data.redirect_url&&St()&&!r?.skipBrowserRedirect&&window.location.assign(f.data.redirect_url),f})}catch(l){if(he(l))return this._returnResult({data:null,error:l});throw l}}async _denyAuthorization(n,r){try{return await this._useSession(async l=>{const{data:{session:d},error:h}=l;if(h)return this._returnResult({data:null,error:h});if(!d)return this._returnResult({data:null,error:new Ft});const f=await ve(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:d.access_token,body:{action:"deny"},xform:p=>({data:p,error:null})});return f.data&&f.data.redirect_url&&St()&&!r?.skipBrowserRedirect&&window.location.assign(f.data.redirect_url),f})}catch(l){if(he(l))return this._returnResult({data:null,error:l});throw l}}async _listOAuthGrants(){try{return await this._useSession(async n=>{const{data:{session:r},error:l}=n;return l?this._returnResult({data:null,error:l}):r?await ve(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,xform:d=>({data:d,error:null})}):this._returnResult({data:null,error:new Ft})})}catch(n){if(he(n))return this._returnResult({data:null,error:n});throw n}}async _revokeOAuthGrant(n){try{return await this._useSession(async r=>{const{data:{session:l},error:d}=r;return d?this._returnResult({data:null,error:d}):l?(await ve(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:l.access_token,query:{client_id:n.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Ft})})}catch(r){if(he(r))return this._returnResult({data:null,error:r});throw r}}async fetchJwk(n,r={keys:[]}){let l=r.keys.find(p=>p.kid===n);if(l)return l;const d=Date.now();if(l=this.jwks.keys.find(p=>p.kid===n),l&&this.jwks_cached_at+nb>d)return l;const{data:h,error:f}=await ve(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(f)throw f;return!h.keys||h.keys.length===0||(this.jwks=h,this.jwks_cached_at=d,l=h.keys.find(p=>p.kid===n),!l)?null:l}async getClaims(n,r={}){try{let l=n;if(!l){const{data:w,error:k}=await this.getSession();if(k||!w.session)return this._returnResult({data:null,error:k});l=w.session.access_token}const{header:d,payload:h,signature:f,raw:{header:p,payload:v}}=Vl(l);r?.allowExpired||Eb(h.exp);const y=!d.alg||d.alg.startsWith("HS")||!d.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(d.kid,r?.keys?{keys:r.keys}:r?.jwks);if(!y){const{error:w}=await this.getUser(l);if(w)throw w;return{data:{claims:h,header:d,signature:f},error:null}}const _=Tb(d.alg),j=await crypto.subtle.importKey("jwk",y,_,!0,["verify"]);if(!await crypto.subtle.verify(_,j,f,hb(`${p}.${v}`)))throw new Qc("Invalid JWT signature");return{data:{claims:h,header:d,signature:f},error:null}}catch(l){if(he(l))return this._returnResult({data:null,error:l});throw l}}}vr.nextInstanceID={};const s_=vr,i_="2.95.3";let lr="";typeof Deno<"u"?lr="deno":typeof document<"u"?lr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?lr="react-native":lr="node";const r_={"X-Client-Info":`supabase-js-${lr}/${i_}`},l_={headers:r_},o_={schema:"public"},u_={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},c_={};function yr(i){"@babel/helpers - typeof";return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yr(i)}function d_(i,n){if(yr(i)!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var l=r.call(i,n);if(yr(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function h_(i){var n=d_(i,"string");return yr(n)=="symbol"?n:n+""}function f_(i,n,r){return(n=h_(n))in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}function Np(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),r.push.apply(r,l)}return r}function nt(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Np(Object(r),!0).forEach(function(l){f_(i,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):Np(Object(r)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(r,l))})}return i}const m_=i=>i?(...n)=>i(...n):(...n)=>fetch(...n),p_=()=>Headers,v_=(i,n,r)=>{const l=m_(r),d=p_();return async(h,f)=>{var p;const v=(p=await n())!==null&&p!==void 0?p:i;let y=new d(f?.headers);return y.has("apikey")||y.set("apikey",i),y.has("Authorization")||y.set("Authorization",`Bearer ${v}`),l(h,nt(nt({},f),{},{headers:y}))}};function y_(i){return i.endsWith("/")?i:i+"/"}function g_(i,n){var r,l;const{db:d,auth:h,realtime:f,global:p}=i,{db:v,auth:y,realtime:_,global:j}=n,S={db:nt(nt({},v),d),auth:nt(nt({},y),h),realtime:nt(nt({},_),f),storage:{},global:nt(nt(nt({},j),p),{},{headers:nt(nt({},(r=j?.headers)!==null&&r!==void 0?r:{}),(l=p?.headers)!==null&&l!==void 0?l:{})}),accessToken:async()=>""};return i.accessToken?S.accessToken=i.accessToken:delete S.accessToken,S}function b_(i){const n=i?.trim();if(!n)throw new Error("supabaseUrl is required.");if(!n.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(y_(n))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var __=class extends s_{constructor(i){super(i)}},x_=class{constructor(i,n,r){var l,d;this.supabaseUrl=i,this.supabaseKey=n;const h=b_(i);if(!n)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",h),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",h),this.storageUrl=new URL("storage/v1",h),this.functionsUrl=new URL("functions/v1",h);const f=`sb-${h.hostname.split(".")[0]}-auth-token`,p={db:o_,realtime:c_,auth:nt(nt({},u_),{},{storageKey:f}),global:l_},v=g_(r??{},p);if(this.storageKey=(l=v.auth.storageKey)!==null&&l!==void 0?l:"",this.headers=(d=v.global.headers)!==null&&d!==void 0?d:{},v.accessToken)this.accessToken=v.accessToken,this.auth=new Proxy({},{get:(_,j)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(j)} is not possible`)}});else{var y;this.auth=this._initSupabaseAuthClient((y=v.auth)!==null&&y!==void 0?y:{},this.headers,v.global.fetch)}this.fetch=v_(n,this._getAccessToken.bind(this),v.global.fetch),this.realtime=this._initRealtimeClient(nt({headers:this.headers,accessToken:this._getAccessToken.bind(this)},v.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(_=>this.realtime.setAuth(_)).catch(_=>console.warn("Failed to set initial Realtime auth token:",_)),this.rest=new i0(new URL("rest/v1",h).href,{headers:this.headers,schema:v.db.schema,fetch:this.fetch,timeout:v.db.timeout,urlLengthLimit:v.db.urlLengthLimit}),this.storage=new F0(this.storageUrl.href,this.headers,this.fetch,r?.storage),v.accessToken||this._listenForAuthEvents()}get functions(){return new Ig(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(i){return this.rest.from(i)}schema(i){return this.rest.schema(i)}rpc(i,n={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(i,n,r)}channel(i,n={config:{}}){return this.realtime.channel(i,n)}getChannels(){return this.realtime.getChannels()}removeChannel(i){return this.realtime.removeChannel(i)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var i=this,n,r;if(i.accessToken)return await i.accessToken();const{data:l}=await i.auth.getSession();return(n=(r=l.session)===null||r===void 0?void 0:r.access_token)!==null&&n!==void 0?n:i.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:i,persistSession:n,detectSessionInUrl:r,storage:l,userStorage:d,storageKey:h,flowType:f,lock:p,debug:v,throwOnError:y},_,j){const S={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new __({url:this.authUrl.href,headers:nt(nt({},S),_),storageKey:h,autoRefreshToken:i,persistSession:n,detectSessionInUrl:r,storage:l,userStorage:d,flowType:f,lock:p,debug:v,throwOnError:y,fetch:j,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(i){return new j0(this.realtimeUrl.href,nt(nt({},i),{},{params:nt(nt({},{apikey:this.supabaseKey}),i?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((i,n)=>{this._handleTokenChanged(i,"CLIENT",n?.access_token)})}_handleTokenChanged(i,n,r){(i==="TOKEN_REFRESHED"||i==="SIGNED_IN")&&this.changedAccessToken!==r?(this.changedAccessToken=r,this.realtime.setAuth(r)):i==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const tv=(i,n,r)=>new x_(i,n,r);function j_(){if(typeof window<"u")return!1;const i=globalThis.process;if(!i)return!1;const n=i.version;if(n==null)return!1;const r=n.match(/^v(\d+)\./);return r?parseInt(r[1],10)<=18:!1}j_()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
import { recordFields } from "./record-details-chart-original-v2.js";
import {
  DailyPhotoEditor,
  EntryPhotoGallery,
  saveEntryWithPhotos,
  flushDeletedPhotos,
} from "./daily-photos-chart-original-v2.js";
import {createDailyChart} from "./daily-chart-original-v2.js";
const DailyProductionChart=createDailyChart(K,{TableViewport:Zl,ArrowRight:dt});
const Pe = createDemoClient();
function S_(){return Pe;}
const si = () => ({
    works: [],
    members: [],
    operators: [],
    fronts: [],
    teams: [],
    types: [],
    services: [],
    plans: [],
    entries: [],
    entry_photos: [],
    lots: [],
    movements: [],
    audit: [],
  }),
  fe = (i, n = 0) =>
    new Intl.NumberFormat("pt-BR", { maximumFractionDigits: n }).format(i),
  Ee = (i) =>
    i
      ? new Date(i.slice(0, 10) + "T12:00:00").toLocaleDateString("pt-BR")
      : "—",
  Sa = () =>
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date()),
  $t = {
    inspecao: "Aguardando inspeção",
    aprovado: "Aprovadas, não liberadas",
    liberado: "Liberadas na fábrica",
    retrabalho: "Aguardando retrabalho",
    reinspecao: "Retrabalhadas em reinspeção",
    rejeitado: "Rejeitadas",
    campo: "Disponíveis em campo",
    instalado: "Instaladas",
  };
function oi(i, n, r) {
  const l = Object.fromEntries(Object.keys($t).map((d) => [d, 0]));
  for (const d of i.filter((h) => h.lot_id === n && h.date <= r))
    (d.destination in l && (l[d.destination] += Number(d.quantity)),
      d.source in l && (l[d.source] -= Number(d.quantity)));
  return l;
}
function ea(i, n, r, l, d = "") {
  const h = n.filter(
      (S) => S.plan_id === i.id && S.date <= l && (!d || S.team_id === d),
    ),
    f = h.filter((S) => S.date >= r),
    p = (S, w) => S.reduce((k, O) => k + Number(O[w] || 0), 0),
    v = p(f, "quantity"),
    y = p(f, "target"),
    _ = p(f, "hh"),
    j = p(h, "quantity");
  return {
    quantity: v,
    target: y,
    hh: _,
    accumulated: j,
    balance: i.total - j,
    progress: i.total ? (j / i.total) * 100 : null,
    achievement: y ? (v / y) * 100 : null,
    productivity: _ ? v / _ : null,
  };
}
function w_() {
  return si();
}
function Pl({ children: i, tone: n = "neutral" }) {
  return o.jsxs("span", {
    className: "badge " + n,
    children: [o.jsx("span", {}), i],
  });
}
function Cc({ title: i, subtitle: n, onClose: r, children: l }) {
  const d = K.useRef(null);
  return (
    K.useEffect(() => {
      const h = document.activeElement;
      d.current?.querySelector("input,select,button")?.focus();
      function f(p) {
        if ((p.key === "Escape" && r(), p.key === "Tab")) {
          const v = Array.from(
              d.current?.querySelectorAll(
                "button,input,select,textarea,a[href]",
              ) || [],
            ).filter((j) => !j.hasAttribute("disabled")),
            y = v[0],
            _ = v[v.length - 1];
          p.shiftKey && document.activeElement === y
            ? (p.preventDefault(), _?.focus())
            : !p.shiftKey &&
              document.activeElement === _ &&
              (p.preventDefault(), y?.focus());
        }
      }
      return (
        document.addEventListener("keydown", f),
        (document.body.style.overflow = "hidden"),
        () => {
          (document.removeEventListener("keydown", f),
            (document.body.style.overflow = ""),
            h?.focus());
        }
      );
    }, []),
    o.jsx("div", {
      className: "modal-backdrop",
      onMouseDown: (h) => {
        h.target === h.currentTarget && r();
      },
      children: o.jsxs("div", {
        ref: d,
        className: "modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": i,
        children: [
          o.jsxs("div", {
            className: "modal-head",
            children: [
              o.jsxs("div", {
                children: [
                  o.jsx("h2", { children: i }),
                  n && o.jsx("p", { children: n }),
                ],
              }),
              o.jsx("button", {
                className: "icon-button",
                onClick: r,
                "aria-label": "Fechar",
                children: o.jsx(Uc, { size: 20 }),
              }),
            ],
          }),
          o.jsx("div", { className: "modal-body", children: l }),
        ],
      }),
    })
  );
}
function ReadableRecordFields({ fields }) {
  return fields.length
    ? o.jsx("dl", {
        className: "record-fields",
        children: fields.map((field, index) =>
          o.jsxs(
            "div",
            {
              className: field.children
                ? "record-field record-field-group"
                : "record-field",
              children: [
                o.jsx("dt", { children: `${field.label}:` }),
                o.jsx("dd", {
                  children: field.children?.length
                    ? o.jsx(ReadableRecordFields, { fields: field.children })
                    : field.value,
                }),
              ],
            },
            `${field.label}-${index}`,
          ),
        ),
      })
    : o.jsx("p", {
        className: "form-note",
        children: "Nenhum dado de negócio disponível para este registro.",
      });
}
function E_({ fields: i, initial: n = {}, onSave: r, onCancel: l, note: d }) {
  const [h, f] = K.useState(n),
    [p, v] = K.useState(""),
    [y, _] = K.useState(!1);
  return o.jsxs("form", {
    onSubmit: async (j) => {
      (j.preventDefault(), _(!0), v(""));
      try {
        const S = {};
        for (const w of i) {
          const k = h[w.key] ?? "";
          S[w.key] = w.type === "number" ? (k === "" ? null : Number(k)) : k;
        }
        await r(S);
      } catch (S) {
        v(S.message || "Não foi possível salvar.");
      } finally {
        _(!1);
      }
    },
    children: [
      d &&
        o.jsxs("div", {
          className: "form-note",
          children: [o.jsx(ka, { size: 17 }), d],
        }),
      o.jsx("div", {
        className: "form-grid",
        children: i.map((j) =>
          o.jsxs(
            "label",
            {
              className: j.wide ? "wide" : "",
              children: [
                j.label,
                j.required !== !1 &&
                  o.jsx("span", { className: "required", children: " *" }),
                j.options
                  ? o.jsxs("select", {
                      required: j.required !== !1,
                      value: h[j.key] ?? "",
                      onChange: (S) => f({ ...h, [j.key]: S.target.value }),
                      children: [
                        o.jsx("option", { value: "", children: "Selecione…" }),
                        j.options.map((S) =>
                          o.jsx(
                            "option",
                            { value: S.value, children: S.label },
                            S.value,
                          ),
                        ),
                      ],
                    })
                  : j.type === "textarea"
                    ? o.jsx("textarea", {
                        rows: 3,
                        value: h[j.key] ?? "",
                        onChange: (S) => f({ ...h, [j.key]: S.target.value }),
                      })
                    : o.jsx("input", {
                        type: j.type || "text",
                        required: j.required !== !1,
                        min: j.min,
                        max: j.max,
                        step: j.step || (j.type === "number" ? "any" : void 0),
                        value: h[j.key] ?? "",
                        onChange: (S) => f({ ...h, [j.key]: S.target.value }),
                      }),
                j.hint && o.jsx("small", { children: j.hint }),
              ],
            },
            j.key,
          ),
        ),
      }),
      h.headcount &&
        o.jsxs("div", {
          className: "form-note",
          children: [
            "Homem-hora: ",
            fe(
              Number(h.headcount) *
                (Number(h.normal_hours || 0) + Number(h.extra_hours || 0)),
              2,
            ),
            " h · jornada igual por colaborador.",
          ],
        }),
      p &&
        o.jsxs("div", {
          role: "alert",
          className: "error",
          children: [o.jsx(ka, { size: 17 }), p],
        }),
      o.jsxs("div", {
        className: "form-actions",
        children: [
          o.jsx("button", {
            type: "button",
            className: "button secondary",
            onClick: l,
            children: "Cancelar",
          }),
          o.jsx("button", {
            className: "button primary",
            disabled: y,
            children: y
              ? o.jsxs(o.Fragment, {
                  children: [
                    o.jsx(yt, { size: 16, className: "spin" }),
                    "Salvando…",
                  ],
                })
              : "Salvar registro",
          }),
        ],
      }),
    ],
  });
}
function Zl({
  children: i,
  label: n = "Tabela de registros",
  hint: r = "Deslize a tabela para ver todas as colunas.",
}) {
  const l = K.useRef(null),
    d = K.useId(),
    [h, f] = K.useState(!1);
  return (
    K.useEffect(() => {
      const p = l.current;
      if (!p) return;
      const v = () => f(p.scrollWidth > p.clientWidth + 1);
      v();
      const y = typeof ResizeObserver < "u" ? new ResizeObserver(v) : null;
      return (
        y?.observe(p),
        p.firstElementChild && y?.observe(p.firstElementChild),
        window.addEventListener("resize", v),
        () => {
          (y?.disconnect(), window.removeEventListener("resize", v));
        }
      );
    }, []),
    o.jsxs("div", {
      className: "table-viewport",
      children: [
        h &&
          o.jsxs("p", {
            id: d,
            className: "table-scroll-hint",
            children: [o.jsx($g, { size: 15 }), r],
          }),
        o.jsx("div", {
          ref: l,
          className: "table-scroll",
          tabIndex: h ? 0 : void 0,
          role: h ? "region" : void 0,
          "aria-label": h ? n : void 0,
          "aria-describedby": h ? d : void 0,
          children: i,
        }),
      ],
    })
  );
}
function Ca({
  rows: i,
  columns: n,
  actions: r,
  searchPlaceholder: l = "Buscar nos registros…",
}) {
  const [d, h] = K.useState(""),
    [f, p] = K.useState(0),
    [v, y] = K.useState({ key: "", asc: !0 });
  K.useEffect(() => p(0), [d, i.length]);
  const _ = i
      .filter((w) =>
        JSON.stringify(w)
          .toLocaleLowerCase("pt-BR")
          .includes(d.toLocaleLowerCase("pt-BR")),
      )
      .sort((w, k) => {
        if (!v.key) return 0;
        const O = w[v.key],
          B = k[v.key];
        return (
          (typeof O == "number"
            ? O - B
            : String(O ?? "").localeCompare(String(B ?? ""), "pt-BR")) *
          (v.asc ? 1 : -1)
        );
      }),
    j = Math.max(1, Math.ceil(_.length / 8)),
    S = Math.min(f, j - 1);
  return o.jsxs("div", {
    className: "table-card",
    children: [
      o.jsxs("div", {
        className: "table-toolbar",
        children: [
          o.jsxs("div", {
            className: "search-field",
            children: [
              o.jsx(Gg, { size: 17 }),
              o.jsx("input", {
                "aria-label": "Buscar registros",
                placeholder: l,
                value: d,
                onChange: (w) => h(w.target.value),
              }),
            ],
          }),
          o.jsxs("span", { children: [fe(_.length), " registros"] }),
          o.jsxs("div", {
            className: "mobile-table-sort",
            children: [
              o.jsxs("label", {
                children: [
                  o.jsx("span", { children: "Ordenar por" }),
                  o.jsxs("select", {
                    "aria-label": "Ordenar registros",
                    value: v.key,
                    onChange: (event) => y({ ...v, key: event.target.value }),
                    children: [
                      o.jsx("option", {
                        value: "",
                        children: "Ordem original",
                      }),
                      ...n.map((column) =>
                        o.jsx(
                          "option",
                          { value: column.key, children: column.label },
                          column.key,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              o.jsx("button", {
                type: "button",
                className: "button secondary",
                disabled: !v.key,
                "aria-label": "Inverter ordem dos registros",
                onClick: () => y({ ...v, asc: !v.asc }),
                children: v.asc ? "Crescente" : "Decrescente",
              }),
            ],
          }),
        ],
      }),
      o.jsxs(Zl, {
        children: [
          o.jsxs("table", {
            className: "responsive-records-table",
            role: "table",
            children: [
              o.jsx("thead", {
                role: "rowgroup",
                children: o.jsxs("tr", {
                  role: "row",
                  children: [
                    n.map((w) =>
                      o.jsx(
                        "th",
                        {
                          role: "columnheader",
                          scope: "col",
                          children: o.jsxs("button", {
                            "aria-label": "Ordenar por " + w.label,
                            onClick: () =>
                              y({
                                key: w.key,
                                asc: v.key === w.key ? !v.asc : !0,
                              }),
                            children: [w.label, o.jsx(Rg, { size: 12 })],
                          }),
                        },
                        w.key,
                      ),
                    ),
                    r &&
                      o.jsx("th", {
                        className: "table-actions-cell",
                        role: "columnheader",
                        scope: "col",
                        children: "Ações",
                      }),
                  ],
                }),
              }),
              o.jsx("tbody", {
                role: "rowgroup",
                children: _.slice(S * 8, S * 8 + 8).map((w, k) =>
                  o.jsxs(
                    "tr",
                    {
                      role: "row",
                      children: [
                        n.map((O) =>
                          o.jsx(
                            "td",
                            {
                              role: "cell",
                              "data-label": O.label,
                              children: o.jsx("div", {
                                className: "table-cell-value",
                                children: O.render
                                  ? O.render(w)
                                  : String(w[O.key] ?? "—"),
                              }),
                            },
                            O.key,
                          ),
                        ),
                        r &&
                          o.jsx("td", {
                            className: "table-actions-cell",
                            role: "cell",
                            "data-label": "Ações",
                            children: o.jsx("div", {
                              className: "row-actions",
                              children: r(w),
                            }),
                          }),
                      ],
                    },
                    w.id || k,
                  ),
                ),
              }),
            ],
          }),
          !_.length &&
            o.jsxs("div", {
              className: "empty",
              children: [
                o.jsx(Mg, {}),
                o.jsx("h3", { children: "Nenhum registro encontrado" }),
                o.jsx("p", {
                  children:
                    "Altere os filtros ou cadastre o primeiro registro.",
                }),
              ],
            }),
        ],
      }),
      o.jsxs("div", {
        className: "pagination",
        children: [
          o.jsxs("span", {
            children: [
              _.length ? `${S * 8 + 1}–${Math.min(S * 8 + 8, _.length)}` : 0,
              " de ",
              _.length,
            ],
          }),
          o.jsxs("div", {
            children: [
              o.jsx("button", {
                disabled: !S,
                onClick: () => p(S - 1),
                "aria-label": "Página anterior",
                children: o.jsx(zp, { size: 16 }),
              }),
              o.jsxs("span", { children: ["Página ", S + 1, " de ", j] }),
              o.jsx("button", {
                disabled: S >= j - 1,
                onClick: () => p(S + 1),
                "aria-label": "Próxima página",
                children: o.jsx(cr, { size: 16 }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function no(i, n) {
  return i.plans.filter(
    (r) =>
      (!n.front || r.front_id === n.front) &&
      (!n.service || r.service_id === n.service) &&
      (!n.type || r.type_id === n.type),
  );
}
function T_({ d: i, work: n, f: r, onNavigate: l, onDetails: d }) {
  const h = no(i, r),
    f = (M) => i.services.find((se) => se.id === M),
    p = (M) => i.types.find((se) => se.id === M),
    v = h.find((M) => f(M.service_id)?.name === "Concretagem") || h[0],
    y = v ? ea(v, i.entries, r.from, r.to, r.team) : null,
    _ = i.entries.filter(
      (M) =>
        h.some((se) => se.id === M.plan_id) &&
        M.date >= r.from &&
        M.date <= r.to &&
        (!r.team || M.team_id === r.team),
    ),
    j = r.type || v?.type_id || i.types[0]?.id,
    S = i.lots.filter(
      (M) => M.cast_date <= r.to && (!r.type || M.type_id === r.type),
    ),
    w = {};
  S.filter((M) => M.type_id === j).forEach((M) => {
    const se = oi(i.movements, M.id, r.to);
    for (const re in se) w[re] = (w[re] || 0) + se[re];
  });
  const k = !!(r.team || r.service || r.front),
    O = i.plans.length && i.plans.every((M) => Number(M.weight) > 0),
    B = i.plans.reduce((M, se) => M + Number(se.weight || 0), 0),
    T = O
      ? i.plans.reduce(
          (M, se) =>
            M +
            ((ea(se, i.entries, "0000-01-01", r.to).progress || 0) *
              se.weight) /
              B,
          0,
        )
      : null,
    C = h.filter((M) => f(M.service_id)?.unit === "m"),
    L = C.reduce(
      (M, se) => M + ea(se, i.entries, r.from, r.to, r.team).accumulated,
      0,
    ),
    X = _.reduce((M, se) => M + Number(se.hh), 0),
    z = Array.from(
      new Set(
        i.entries
          .filter(
            (M) =>
              M.plan_id === v?.id &&
              M.date >= r.from &&
              M.date <= r.to &&
              (!r.team || M.team_id === r.team),
          )
          .map((M) => M.date),
      ),
    )
      .sort()
      .map((M) => {
        const se = _.filter((re) => re.plan_id === v?.id && re.date === M);
        return {
          date: M,
          quantity: se.reduce((re, F) => re + Number(F.quantity), 0),
          target: se.reduce((re, F) => re + Number(F.target), 0),
        };
      }),
    I = Math.max(1, ...z.flatMap((M) => [M.quantity, M.target])) * 1.25,
    Y = [];
  for (const M of h) {
    const se = ea(M, i.entries, r.from, r.to, r.team);
    (se.achievement !== null &&
      se.achievement < 100 &&
      Y.push({
        title: "Produção abaixo da meta",
        description: `${p(M.type_id)?.name} · ${f(M.service_id)?.name}: ${fe(se.achievement, 1)}% da meta`,
        rows: _.filter((re) => re.plan_id === M.id),
      }),
      se.balance < 0 &&
        Y.push({
          title: "Quantidade acima do previsto",
          description: `${p(M.type_id)?.name}: saldo de ${fe(se.balance)} ${f(M.service_id)?.unit}. Revise o planejamento.`,
          rows: i.entries.filter((re) => re.plan_id === M.id),
        }));
  }
  const ie = _.filter((M) => M.interference);
  (ie.length &&
    Y.push({
      title: "Interferências na operação",
      description: `${ie.length} lançamento(s) com paralisações ou interferências.`,
      rows: ie,
    }),
    (w.retrabalho || 0) + (w.rejeitado || 0) > 0 &&
      !k &&
      Y.push({
        title: "Peças que precisam de atenção",
        description: `${fe(w.retrabalho || 0)} em retrabalho e ${fe(w.rejeitado || 0)} rejeitadas.`,
        rows: i.movements.filter(
          (M) =>
            ["retrabalho", "rejeitado"].includes(M.destination) &&
            M.date <= r.to,
        ),
      }),
    !k &&
      S.length &&
      !w.liberado &&
      Y.push({
        title: "Sem peças liberadas na fábrica",
        description: "Verifique a liberação antes de programar novos envios.",
        rows: i.lots,
      }));
  const Te = [..._].sort((M, se) => se.date.localeCompare(M.date)).slice(0, 5);
  return o.jsxs(o.Fragment, {
    children: [
      o.jsxs("section", {
        className: "project-banner",
        children: [
          o.jsxs("div", {
            children: [
              o.jsxs("div", {
                className: "eyebrow",
                children: [
                  o.jsx("span", { className: "gold-dot" }),
                  n.code,
                  " ",
                  o.jsx("span", { className: "separator", children: "/" }),
                  " ACOMPANHAMENTO DA OBRA",
                ],
              }),
              o.jsx("h2", { children: n.name }),
              o.jsxs("div", {
                className: "project-meta",
                children: [
                  o.jsxs("span", {
                    children: [o.jsx(Up, { size: 14 }), n.location],
                  }),
                  o.jsxs("span", {
                    children: [
                      o.jsx(Gl, { size: 14 }),
                      Ee(n.start_date),
                      " — ",
                      Ee(n.end_date),
                    ],
                  }),
                  o.jsx(Pl, { tone: "green", children: n.status }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "project-progress",
            children: [
              o.jsxs("span", {
                children: [
                  "Avanço físico geral ",
                  o.jsxs("small", { children: ["até ", Ee(r.to)] }),
                ],
              }),
              T !== null
                ? o.jsxs(o.Fragment, {
                    children: [
                      o.jsxs("strong", {
                        children: [fe(T, 1), o.jsx("small", { children: "%" })],
                      }),
                      o.jsx("div", {
                        className: "progress-track",
                        children: o.jsx("i", {
                          style: { width: Math.min(100, T) + "%" },
                        }),
                      }),
                      o.jsx("small", {
                        children: "Ponderado pelo planejamento · obra completa",
                      }),
                    ],
                  })
                : o.jsxs(o.Fragment, {
                    children: [
                      o.jsx("strong", {
                        className: "no-progress",
                        children: "A configurar",
                      }),
                      o.jsx("small", {
                        children: "Defina os pesos de todas as atividades.",
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "section-line",
        children: [
          o.jsxs("h3", {
            children: [
              "Os números da sua obra",
              o.jsx("span", {
                children: "Uma visão clara, da fábrica ao campo.",
              }),
            ],
          }),
          o.jsxs("span", {
            className: "scope-label",
            children: [
              o.jsx("span", {}),
              "Período de ",
              Ee(r.from),
              " a ",
              Ee(r.to),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "metrics",
        children: [
          o.jsxs("button", {
            className: "metric",
            onClick: () =>
              d(
                "Produção da atividade selecionada",
                _.filter((M) => M.plan_id === v?.id),
              ),
            children: [
              o.jsxs("div", {
                className: "metric-top",
                children: [
                  o.jsx("span", { children: "Produção no período" }),
                  o.jsx("div", {
                    className: "metric-icon gold",
                    children: o.jsx(Zc, { size: 19 }),
                  }),
                ],
              }),
              o.jsxs("strong", {
                children: [
                  y ? fe(y.quantity) : "—",
                  " ",
                  o.jsx("small", { children: v ? f(v.service_id)?.unit : "" }),
                ],
              }),
              o.jsx("p", {
                children: v
                  ? `${f(v.service_id)?.name} · ${p(v.type_id)?.name} · ${i.fronts.find((M) => M.id === v.front_id)?.name}`
                  : "Sem atividade planejada",
              }),
              o.jsxs("div", {
                className: "metric-bottom",
                children: [
                  o.jsx("span", {
                    className: "trend",
                    children:
                      y?.achievement !== null && y
                        ? o.jsxs(o.Fragment, {
                            children: [
                              o.jsx(Qg, { size: 14 }),
                              fe(y.achievement, 1),
                              "% da meta",
                            ],
                          })
                        : "Sem meta definida",
                  }),
                  o.jsx(rr, { size: 16 }),
                ],
              }),
            ],
          }),
          o.jsxs("button", {
            className: "metric",
            onClick: () => l("estoque"),
            children: [
              o.jsxs("div", {
                className: "metric-top",
                children: [
                  o.jsx("span", { children: "Disponíveis na fábrica" }),
                  o.jsx("div", {
                    className: "metric-icon green",
                    children: o.jsx(Vg, { size: 19 }),
                  }),
                ],
              }),
              o.jsxs("strong", {
                children: [
                  k ? "—" : fe(w.liberado || 0),
                  " ",
                  o.jsx("small", { children: "peças" }),
                ],
              }),
              o.jsx("p", {
                children: k
                  ? "Consulte sem filtro de equipe, frente e serviço"
                  : `Liberadas · ${p(j)?.name || "sem tipo cadastrado"}`,
              }),
              o.jsxs("div", {
                className: "metric-bottom",
                children: [
                  o.jsxs("span", {
                    children: [
                      "Posição em ",
                      Ee(r.to),
                      " · ",
                      p(j)?.name || "sem tipo",
                    ],
                  }),
                  o.jsx(rr, { size: 16 }),
                ],
              }),
            ],
          }),
          o.jsxs("button", {
            className: "metric",
            onClick: () => l("campo"),
            children: [
              o.jsxs("div", {
                className: "metric-top",
                children: [
                  o.jsx("span", { children: "Muro concluído" }),
                  o.jsx("div", {
                    className: "metric-icon blue",
                    children: o.jsx(Ug, { size: 19 }),
                  }),
                ],
              }),
              o.jsxs("strong", {
                children: [
                  C.length ? fe(L, 1) : "—",
                  " ",
                  o.jsx("small", { children: "m" }),
                ],
              }),
              o.jsxs("p", { children: ["Acumulado até ", Ee(r.to)] }),
              o.jsxs("div", {
                className: "metric-bottom",
                children: [
                  o.jsx("span", {
                    children: C.length
                      ? `${C.length} atividade(s) em metros`
                      : "Sem atividade em metros neste escopo",
                  }),
                  o.jsx(rr, { size: 16 }),
                ],
              }),
            ],
          }),
          o.jsxs("button", {
            className: "metric",
            onClick: () => l("equipes"),
            children: [
              o.jsxs("div", {
                className: "metric-top",
                children: [
                  o.jsx("span", { children: "Homem-hora" }),
                  o.jsx("div", {
                    className: "metric-icon gray",
                    children: o.jsx(qg, { size: 19 }),
                  }),
                ],
              }),
              o.jsxs("strong", {
                children: [fe(X, 1), " ", o.jsx("small", { children: "h" })],
              }),
              o.jsx("p", {
                children: "Horas efetivamente registradas no período",
              }),
              o.jsxs("div", {
                className: "metric-bottom",
                children: [
                  o.jsxs("span", {
                    children: [_.length, " lançamentos considerados"],
                  }),
                  o.jsx(rr, { size: 16 }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "dashboard-grid",
        children: [
          o.jsx(DailyProductionChart, {d:i, work:n, f:r, client:Pe, onDetails:d, onNavigate:l}),
          o.jsxs("section", {
            className: "panel",
            children: [
              o.jsxs("div", {
                className: "panel-head",
                children: [
                  o.jsxs("div", {
                    children: [
                      o.jsx("h3", { children: "Avanço por atividade" }),
                      o.jsxs("p", {
                        children: [
                          "Acumulado até ",
                          Ee(r.to),
                          r.team ? " · equipe selecionada" : "",
                        ],
                      }),
                    ],
                  }),
                  o.jsx(Dc, { size: 19, className: "muted" }),
                ],
              }),
              o.jsxs("div", {
                className: "activity-list",
                children: [
                  h.slice(0, 5).map((M) => {
                    const se = ea(M, i.entries, r.from, r.to, r.team);
                    return o.jsxs(
                      "button",
                      {
                        onClick: () =>
                          d(
                            `${f(M.service_id)?.name} · ${p(M.type_id)?.name}`,
                            i.entries.filter(
                              (re) =>
                                re.plan_id === M.id &&
                                re.date <= r.to &&
                                (!r.team || re.team_id === r.team),
                            ),
                          ),
                        children: [
                          o.jsxs("div", {
                            children: [
                              o.jsxs("span", {
                                children: [
                                  p(M.type_id)?.name,
                                  o.jsx("small", {
                                    children: f(M.service_id)?.name,
                                  }),
                                ],
                              }),
                              o.jsxs("strong", {
                                className: se.balance < 0 ? "text-red" : "",
                                children: [
                                  fe(se.progress || 0, 1),
                                  o.jsx("small", { children: "%" }),
                                ],
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className: "progress-track",
                            children: o.jsx("i", {
                              style: {
                                width: Math.min(100, se.progress || 0) + "%",
                              },
                            }),
                          }),
                          o.jsxs("p", {
                            children: [
                              fe(se.accumulated),
                              " de ",
                              fe(M.total),
                              " ",
                              f(M.service_id)?.unit,
                              o.jsxs("span", {
                                children: ["Saldo: ", fe(se.balance)],
                              }),
                            ],
                          }),
                        ],
                      },
                      M.id,
                    );
                  }),
                  !h.length &&
                    o.jsx("div", {
                      className: "empty",
                      children:
                        "Cadastre as metas da obra para acompanhar o avanço.",
                    }),
                ],
              }),
            ],
          }),
          o.jsxs("section", {
            className: "panel",
            children: [
              o.jsxs("div", {
                className: "panel-head",
                children: [
                  o.jsxs("div", {
                    children: [
                      o.jsx("h3", { children: "Estoque por tipo de peça" }),
                      o.jsxs("p", {
                        children: [
                          "Posição em ",
                          Ee(r.to),
                          " · fábrica e campo",
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    className: "text-button",
                    onClick: () => l("estoque"),
                    children: ["Detalhes ", o.jsx(cr, { size: 15 })],
                  }),
                ],
              }),
              k
                ? o.jsx("div", {
                    className: "empty",
                    children:
                      "O estoque não é atribuído a equipe, frente ou serviço. Limpe esses filtros para consultar.",
                  })
                : o.jsx("div", {
                    className: "stock-list",
                    children: i.types
                      .filter((M) => !r.type || M.id === r.type)
                      .map((M) => {
                        const se = S.filter((F) => F.type_id === M.id),
                          re = {};
                        return (
                          se.forEach((F) => {
                            for (const [ge, $] of Object.entries(
                              oi(i.movements, F.id, r.to),
                            ))
                              re[ge] = (re[ge] || 0) + $;
                          }),
                          o.jsxs(
                            "div",
                            {
                              children: [
                                o.jsx("div", {
                                  className: "piece-symbol",
                                  children: o.jsx(Dc, { size: 20 }),
                                }),
                                o.jsxs("div", {
                                  children: [
                                    o.jsx("strong", { children: M.name }),
                                    o.jsxs("small", {
                                      children: [
                                        fe(re.liberado || 0),
                                        " liberadas ",
                                        o.jsx("span", { children: "·" }),
                                        " ",
                                        fe(re.campo || 0),
                                        " em campo",
                                      ],
                                    }),
                                  ],
                                }),
                                o.jsxs("strong", {
                                  children: [
                                    fe(
                                      se.reduce(
                                        (F, ge) => F + Number(ge.quantity),
                                        0,
                                      ),
                                    ),
                                    o.jsx("small", { children: "produzidas" }),
                                  ],
                                }),
                              ],
                            },
                            M.id,
                          )
                        );
                      }),
                  }),
              o.jsxs("div", {
                className: "panel-bottom",
                children: [
                  o.jsx(np, { size: 15 }),
                  "Cada peça é contabilizada uma única vez na fabricação.",
                ],
              }),
            ],
          }),
          o.jsxs("section", {
            className: "panel alerts",
            children: [
              o.jsxs("div", {
                className: "panel-head",
                children: [
                  o.jsxs("div", {
                    children: [
                      o.jsxs("h3", {
                        children: [
                          "Atenção à operação ",
                          o.jsx("span", {
                            className: "count-badge",
                            children: Y.length,
                          }),
                        ],
                      }),
                      o.jsx("p", {
                        children: "Alertas gerados a partir dos registros",
                      }),
                    ],
                  }),
                  o.jsx(ka, { size: 19, className: "gold-text" }),
                ],
              }),
              Y.length
                ? o.jsx("div", {
                    className: "alert-list",
                    children: Y.slice(0, 3).map((M, se) =>
                      o.jsxs(
                        "button",
                        {
                          onClick: () => d(M.title, M.rows),
                          children: [
                            o.jsx("span", {
                              className: "alert-symbol",
                              children: o.jsx(ka, { size: 17 }),
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("strong", { children: M.title }),
                                o.jsx("p", { children: M.description }),
                              ],
                            }),
                            o.jsx(cr, { size: 16 }),
                          ],
                        },
                        se,
                      ),
                    ),
                  })
                : o.jsxs("div", {
                    className: "empty",
                    children: [
                      o.jsx(np, {}),
                      o.jsx("h3", { children: "Tudo certo por aqui" }),
                      o.jsx("p", {
                        children:
                          "Nenhum desvio encontrado no escopo selecionado.",
                      }),
                    ],
                  }),
              o.jsx("div", {
                className: "panel-bottom",
                children: Y.length
                  ? "Clique em um alerta para consultar sua origem."
                  : "Os alertas são atualizados a cada lançamento.",
              }),
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className: "panel recent",
        children: [
          o.jsxs("div", {
            className: "panel-head",
            children: [
              o.jsxs("div", {
                children: [
                  o.jsx("h3", { children: "Últimos lançamentos" }),
                  o.jsx("p", {
                    children: "A operação da obra, em tempo real.",
                  }),
                ],
              }),
              o.jsxs("button", {
                className: "text-button",
                onClick: () => l("relatorios"),
                children: ["Ver todos os registros ", o.jsx(dt, { size: 15 })],
              }),
            ],
          }),
          o.jsxs(Zl, {
            label: "Últimos lançamentos",
            children: [
              o.jsxs("table", {
                children: [
                  o.jsx("thead", {
                    children: o.jsxs("tr", {
                      children: [
                        o.jsx("th", { children: "DATA" }),
                        o.jsx("th", { children: "ATIVIDADE / TIPO" }),
                        o.jsx("th", { children: "EQUIPE" }),
                        o.jsx("th", { children: "REALIZADO" }),
                        o.jsx("th", { children: "META" }),
                        o.jsx("th", { children: "DESEMPENHO" }),
                      ],
                    }),
                  }),
                  o.jsx("tbody", {
                    children: Te.map((M) => {
                      const se = i.plans.find((F) => F.id === M.plan_id),
                        re = f(se?.service_id);
                      return o.jsxs(
                        "tr",
                        {
                          children: [
                            o.jsx("td", { children: Ee(M.date) }),
                            o.jsxs("td", {
                              children: [
                                o.jsx("strong", { children: re?.name }),
                                o.jsx("small", {
                                  children: p(se?.type_id)?.name,
                                }),
                              ],
                            }),
                            o.jsx("td", {
                              children: i.teams.find((F) => F.id === M.team_id)
                                ?.name,
                            }),
                            o.jsx("td", {
                              children: o.jsxs("strong", {
                                children: [
                                  fe(M.quantity),
                                  " ",
                                  o.jsx("span", {
                                    className: "muted",
                                    children: re?.unit,
                                  }),
                                ],
                              }),
                            }),
                            o.jsxs("td", {
                              children: [fe(M.target), " ", re?.unit],
                            }),
                            o.jsx("td", {
                              children: o.jsx(Pl, {
                                tone: M.target
                                  ? M.quantity >= M.target
                                    ? "green"
                                    : "amber"
                                  : "neutral",
                                children: M.target
                                  ? fe((M.quantity / M.target) * 100, 1) + "%"
                                  : "Sem meta",
                              }),
                            }),
                          ],
                        },
                        M.id,
                      );
                    }),
                  }),
                ],
              }),
              !Te.length &&
                o.jsx("div", {
                  className: "empty",
                  children: "Nenhum lançamento neste período.",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function so({ children: i, wide: n = !1 }) {
  return o.jsxs("div", {
    className: "login-page",
    children: [
      o.jsxs("div", {
        className: "login-story",
        children: [
          o.jsx("a", {
            className: "brand",
            href: "/",
            children: o.jsx("img", {
              src: "/logo-concreserv.svg",
              alt: "Concreserv — Concreto & Serviços",
            }),
          }),
          o.jsxs("div", {
            className: "login-illustration",
            children: [
              o.jsx("div", { className: "slab s1" }),
              o.jsx("div", { className: "slab s2" }),
              o.jsx("div", { className: "slab s3" }),
              o.jsx("div", { className: "slab s4" }),
              o.jsx("div", { className: "slab s5" }),
              o.jsx("div", { className: "slab s6" }),
              o.jsxs("div", {
                className: "illustration-label",
                children: [o.jsx(Dc, { size: 19 }), " DA FÁBRICA AO CAMPO"],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "login-copy",
            children: [
              o.jsx("span", {
                className: "eyebrow",
                children: "PRECISÃO EM CADA ETAPA",
              }),
              o.jsxs("h1", {
                children: [
                  "Grandes obras.",
                  o.jsx("br", {}),
                  " ",
                  "Controle em cada detalhe.",
                ],
              }),
              o.jsxs("p", {
                children: [
                  "Produção, qualidade e montagem conectadas.",
                  o.jsx("br", {}),
                  "Tudo o que sua obra precisa para avançar.",
                ],
              }),
            ],
          }),
          o.jsxs("footer", {
            children: [
              o.jsx("img", {
                src: "/logo-concreserv.svg",
                alt: "Concreserv — Concreto & Serviços",
              }),
              o.jsx("span", { children: "GESTÃO DE OBRAS E PRÉ-MOLDADOS" }),
            ],
          }),
        ],
      }),
      o.jsxs("main", {
        className: "login-form-side",
        children: [
          o.jsx("div", {
            className: "login-box" + (n ? " signup-box" : ""),
            children: i,
          }),
          o.jsxs("footer", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Concreserv. Todos os direitos reservados.",
            ],
          }),
        ],
      }),
    ],
  });
}
function gr(i) {
  const n = i.code || "",
    r = i.message || "";
  return n === "email_not_confirmed" || /Email not confirmed/i.test(r)
    ? "Confirme seu e-mail antes de entrar. Você pode reenviar a confirmação abaixo."
    : n === "invalid_credentials" || /Invalid login/i.test(r)
      ? "E-mail ou senha incorretos. Verifique e tente novamente."
      : n === "signup_disabled" || /Signups not allowed/i.test(r)
        ? "O cadastro está temporariamente indisponível. Fale com o responsável da Concreserv."
        : /rate_limit|over_email|over_request/.test(n) ||
            /rate limit|too many|after \d+ seconds/i.test(r)
          ? "Aguarde um minuto antes de tentar novamente."
          : n === "otp_expired" || /expired|invalid.*token/i.test(r)
            ? "O código ou link expirou. Solicite uma nova confirmação."
            : n === "same_password"
              ? "Escolha uma senha diferente da atual."
              : n === "weak_password"
                ? "Escolha uma senha mais forte, com pelo menos 8 caracteres, letras e números."
                : n === "email_address_invalid" || n === "validation_failed"
                  ? "Confira o e-mail e os dados informados."
                  : "Não foi possível concluir. Tente novamente em instantes ou fale com o responsável da Concreserv.";
}
const av = () => location.origin + "/confirmar-email";
function ed(i, n) {
  return i !== n
    ? "As senhas não coincidem."
    : i.length < 8
      ? "Use uma senha com pelo menos 8 caracteres."
      : new TextEncoder().encode(i).length > 72
        ? "Use uma senha de até 72 bytes. Caracteres acentuados podem ocupar mais de um byte."
        : "";
}
function td({ email: i, onBack: n, initialCooldown: r = 60 }) {
  const [l, d] = K.useState(""),
    [h, f] = K.useState(""),
    [p, v] = K.useState(""),
    [y, _] = K.useState(!1),
    [j, S] = K.useState(!1),
    [w, k] = K.useState(r);
  return (
    K.useEffect(() => {
      if (w <= 0) return;
      const O = setTimeout(() => k((B) => B - 1), 1e3);
      return () => clearTimeout(O);
    }, [w]),
    j
      ? o.jsxs(o.Fragment, {
          children: [
            o.jsx("span", {
              className: "login-lock",
              children: o.jsx(ui, { size: 23 }),
            }),
            o.jsx("h2", { children: "E-mail confirmado!" }),
            o.jsx("p", {
              children:
                "Sua conta de analista está pronta. As obras serão exibidas conforme a liberação do administrador.",
            }),
            o.jsxs("a", {
              className: "button primary login-submit",
              href: "/demo/consulta",
              children: ["Acessar plataforma ", o.jsx(dt, { size: 18 })],
            }),
          ],
        })
      : o.jsxs(o.Fragment, {
          children: [
            o.jsx("span", {
              className: "login-lock",
              children: o.jsx(Ic, { size: 23 }),
            }),
            o.jsx("div", {
              className: "eyebrow",
              children: "CONFIRMAÇÃO DE E-MAIL",
            }),
            o.jsx("h2", { children: "Confira seu e-mail" }),
            o.jsxs("p", {
              children: [
                "Se houver um cadastro pendente para ",
                o.jsx("strong", { children: i }),
                ", o código chegará nesse endereço. Confira também a caixa de spam e digite o código abaixo.",
              ],
            }),
            o.jsxs("form", {
              onSubmit: async (O) => {
                (O.preventDefault(), _(!0), f(""), v(""));
                try {
                  const { data: B, error: T } = await Pe.auth.verifyOtp({
                    email: i,
                    token: l,
                    type: "email",
                  });
                  if (T) throw T;
                  if (!B.user?.email_confirmed_at)
                    throw new Error("Confirmação incompleta");
                  (S(!0), d(""));
                } catch (B) {
                  f(gr(B));
                } finally {
                  _(!1);
                }
              },
              children: [
                o.jsxs("label", {
                  children: [
                    "Código de confirmação",
                    o.jsx("input", {
                      className: "verification-code",
                      required: !0,
                      inputMode: "numeric",
                      autoComplete: "one-time-code",
                      pattern: "[0-9]{6,10}",
                      minLength: 6,
                      maxLength: 10,
                      value: l,
                      onChange: (O) => d(O.target.value.replace(/\D/g, "")),
                      placeholder: "Código recebido por e-mail",
                    }),
                  ],
                }),
                h &&
                  o.jsx("div", {
                    className: "error",
                    role: "alert",
                    children: h,
                  }),
                p &&
                  o.jsx("div", {
                    className: "success",
                    role: "status",
                    children: p,
                  }),
                o.jsx("button", {
                  className: "button primary login-submit",
                  disabled: y,
                  children: y
                    ? o.jsx(yt, { size: 18, className: "spin" })
                    : o.jsxs(o.Fragment, {
                        children: [
                          "Confirmar e-mail ",
                          o.jsx(dt, { size: 18 }),
                        ],
                      }),
                }),
              ],
            }),
            o.jsxs("button", {
              className: "back-link",
              disabled: y || w > 0,
              onClick: async () => {
                (_(!0), f(""), v(""));
                try {
                  const { error: O } = await Pe.auth.resend({
                    type: "signup",
                    email: i,
                    options: { emailRedirectTo: av() },
                  });
                  if (O) throw O;
                  (v(
                    "Se houver uma confirmação pendente, enviaremos um novo e-mail. Confira também a caixa de spam.",
                  ),
                    k(60));
                } catch (O) {
                  f(gr(O));
                } finally {
                  _(!1);
                }
              },
              children: ["Reenviar confirmação", w > 0 ? ` (${w}s)` : ""],
            }),
            n
              ? o.jsx("button", {
                  className: "back-link",
                  disabled: y,
                  onClick: n,
                  children: "Corrigir meus dados",
                })
              : null,
            o.jsx("a", {
              className: "back-link",
              href: "/demo/entrar",
              children: "Voltar ao login",
            }),
          ],
        })
  );
}
function Cp({
  admin: i,
  reset: n,
  provisional: r = !1,
  onDemo: l,
  onRecovery: d,
}) {
  const [h, f] = K.useState(""),
    [p, v] = K.useState(""),
    [y, _] = K.useState(""),
    [j, S] = K.useState(!1),
    [w, k] = K.useState(!1),
    [O, B] = K.useState(""),
    [T, C] = K.useState(!1),
    [L, X] = K.useState(""),
    [G, z] = K.useState(!1);
  return o.jsx(so, {
    children: w
      ? o.jsx(td, { email: h.trim().toLowerCase(), initialCooldown: 0 })
      : o.jsxs(o.Fragment, {
          children: [
            o.jsx("span", {
              className: "login-lock",
              children: o.jsx(qc, { size: 22 }),
            }),
            o.jsx("div", {
              className: "eyebrow",
              children: i ? "PORTAL ADMINISTRATIVO" : "PORTAL DO ANALISTA",
            }),
            o.jsx("h2", {
              children: r
                ? "Troque sua senha provisória"
                : n
                  ? "Defina sua nova senha"
                  : "Bem-vindo à Concreserv",
            }),
            o.jsx("p", {
              children: r
                ? "Defina uma nova senha antes de acessar suas obras. Mínimo de 8 caracteres."
                : n
                  ? "Escolha uma senha com pelo menos 8 caracteres."
                  : "Entre com seu e-mail e senha para acompanhar suas obras.",
            }),
            o.jsxs("form", {
              onSubmit: async (I) => {
                (I.preventDefault(), z(!0), B(""), X(""), C(!1));
                try {
                  if (n) {
                    const Y = ed(p, y);
                    if (Y) {
                      B(Y);
                      return;
                    }
                    const { error: ie } = await Pe.auth.updateUser({
                      password: p,
                    });
                    if (ie) throw ie;
                    (await Pe.auth.signOut(),
                      v(""),
                      _(""),
                      X(
                        "Senha atualizada. Acesse novamente com sua nova senha.",
                      ));
                  } else {
                    const { error: Y } = await Pe.auth.signInWithPassword({
                      email: h.trim(),
                      password: p,
                    });
                    if (Y) throw (C(Y.code === "email_not_confirmed"), Y);
                  }
                } catch (Y) {
                  B(gr(Y));
                } finally {
                  z(!1);
                }
              },
              children: [
                !n &&
                  o.jsxs("label", {
                    children: [
                      "E-mail",
                      o.jsx("input", {
                        type: "email",
                        required: !0,
                        autoComplete: "username",
                        maxLength: 254,
                        placeholder: "seu.email@empresa.com.br",
                        value: h,
                        onChange: (I) => f(I.target.value),
                      }),
                    ],
                  }),
                o.jsxs("label", {
                  children: [
                    n ? "Nova senha" : "Senha",
                    o.jsxs("div", {
                      className: "password-input",
                      children: [
                        o.jsx("input", {
                          type: j ? "text" : "password",
                          required: !0,
                          minLength: n ? 8 : 1,
                          maxLength: n ? 72 : void 0,
                          autoComplete: n ? "new-password" : "current-password",
                          placeholder: n
                            ? "Mínimo de 8 caracteres"
                            : "Digite sua senha",
                          value: p,
                          onChange: (I) => v(I.target.value),
                        }),
                        o.jsx("button", {
                          type: "button",
                          onClick: () => S(!j),
                          "aria-label": j ? "Ocultar senha" : "Mostrar senha",
                          children: j
                            ? o.jsx(Fl, { size: 19 })
                            : o.jsx(ls, { size: 19 }),
                        }),
                      ],
                    }),
                  ],
                }),
                n &&
                  o.jsxs("label", {
                    children: [
                      "Confirme a nova senha",
                      o.jsx("input", {
                        type: "password",
                        required: !0,
                        minLength: 8,
                        maxLength: 72,
                        autoComplete: "new-password",
                        value: y,
                        onChange: (I) => _(I.target.value),
                      }),
                    ],
                  }),
                !n &&
                  o.jsx("button", {
                    type: "button",
                    className: "forgot-link",
                    onClick: d,
                    children: "Esqueci minha senha",
                  }),
                O &&
                  o.jsx("div", {
                    className: "error",
                    role: "alert",
                    children: O,
                  }),
                T &&
                  o.jsx("button", {
                    type: "button",
                    className: "back-link",
                    onClick: () => k(!0),
                    children: "Confirmar meu e-mail",
                  }),
                L &&
                  o.jsxs("div", {
                    className: "success",
                    role: "status",
                    children: [o.jsx(ui, { size: 18 }), L],
                  }),
                n && L
                  ? o.jsxs("a", {
                      className: "button primary login-submit",
                      href: "/demo/entrar",
                      children: ["Voltar ao login ", o.jsx(dt, { size: 18 })],
                    })
                  : o.jsxs("button", {
                      className: "button primary login-submit",
                      disabled: G,
                      children: [
                        G
                          ? o.jsx(yt, { size: 18, className: "spin" })
                          : n
                            ? "Atualizar senha"
                            : "Acessar plataforma",
                        !G && o.jsx(dt, { size: 18 }),
                      ],
                    }),
              ],
            }),
            !n &&
              o.jsxs(o.Fragment, {
                children: [
                  o.jsxs("p", {
                    className: "login-switch signup-link",
                    children: [
                      "Não tem cadastro? ",
                      o.jsx("a", {
                        href: "/demo/cadastro",
                        children: "Crie sua conta como Analista",
                      }),
                    ],
                  }),
                  l &&
                    o.jsxs(o.Fragment, {
                      children: [
                        o.jsx("div", {
                          className: "login-divider",
                          children: o.jsx("span", {
                            children: "Conheça a plataforma",
                          }),
                        }),
                        o.jsxs("button", {
                          className: "button secondary demo-button",
                          onClick: l,
                          children: [
                            "Explorar demonstração ",
                            o.jsx(dt, { size: 16 }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            o.jsxs("div", {
              className: "secure-note",
              children: [
                o.jsx(li, { size: 15 }),
                "Acesso seguro e restrito às suas obras.",
              ],
            }),
          ],
        }),
  });
}
function kc(i) {
  return i.code === "otp_expired" ||
    /expired|invalid.*token/i.test(i.message || "")
    ? "Código inválido ou expirado. Solicite um novo código de recuperação."
    : ["session_not_found", "session_expired", "bad_jwt"].includes(
          i.code || "",
        ) || /Auth session missing/i.test(i.message || "")
      ? "Sua validação expirou. Solicite um novo código para alterar a senha."
      : gr(i);
}
function A_({ legacySession: i = null, onBack: n }) {
  const [r] = K.useState(S_),
    [l, d] = K.useState(""),
    [h, f] = K.useState(!1),
    [p, v] = K.useState(""),
    [y, _] = K.useState(null),
    [j, S] = K.useState(""),
    [w, k] = K.useState(""),
    [O, B] = K.useState(!1),
    [T, C] = K.useState(!1),
    [L, X] = K.useState(0),
    [G, z] = K.useState(""),
    [I, Y] = K.useState(""),
    [ie, Te] = K.useState(!1),
    [M, se] = K.useState(!1),
    re = K.useRef(!0),
    F = K.useRef(!1),
    ge = K.useRef(!1);
  (K.useEffect(
    () => (
      (re.current = !0),
      () => {
        ((re.current = !1), r.auth.stopAutoRefresh());
      }
    ),
    [r],
  ),
    K.useEffect(() => {
      if (L <= 0) return;
      const x = setTimeout(() => X((H) => H - 1), 1e3);
      return () => clearTimeout(x);
    }, [L]),
    K.useEffect(() => {
      if (!i?.access_token || !i.user?.id) return;
      if (F.current && !ge.current) {
        z(
          "Há uma recuperação em andamento. Termine esta etapa ou volte ao login para recomeçar.",
        );
        return;
      }
      let x = !0;
      return (
        (ge.current = !0),
        (F.current = !0),
        C(!0),
        z(""),
        Y(""),
        _(null),
        S(""),
        k(""),
        v(""),
        Te(!1),
        se(!1),
        r.auth
          .setSession({
            access_token: i.access_token,
            refresh_token: i.refresh_token,
          })
          .then(({ data: H, error: te }) => {
            if (x) {
              if (te || !H.user || H.user.id !== i.user.id) {
                z(
                  "O link de recuperação não pôde ser validado. Solicite um código abaixo.",
                );
                return;
              }
              (d(H.user.email || ""), _(H.user.id), v(""));
            }
          })
          .catch(() => {
            x &&
              z("Não foi possível validar o link. Solicite um código abaixo.");
          })
          .finally(() => {
            x && ((ge.current = !1), (F.current = !1), C(!1));
          }),
        () => {
          ((x = !1),
            ge.current &&
              ((ge.current = !1), (F.current = !1), re.current && C(!1)));
        }
      );
    }, [r, i]));
  async function $() {
    if (!(F.current || L > 0)) {
      ((F.current = !0), C(!0), z(""), Y(""));
      try {
        const x = l.trim().toLowerCase(),
          { error: H } = await r.auth.resetPasswordForEmail(x, {
            redirectTo: location.origin + "/demo/redefinir-senha",
          });
        if (H) throw H;
        re.current &&
          (d(x),
          f(!0),
          v(""),
          X(60),
          Y(
            "Se houver uma conta para esse e-mail, enviaremos um código de recuperação. Confira também a caixa de spam.",
          ));
      } catch (x) {
        re.current && z(kc(x));
      } finally {
        ((F.current = !1), re.current && C(!1));
      }
    }
  }
  async function ee() {
    if (!F.current) {
      ((F.current = !0), C(!0), z(""), Y(""));
      try {
        const { data: x, error: H } = await r.auth.verifyOtp({
          email: l,
          token: p,
          type: "recovery",
        });
        if (H) throw H;
        if (
          !x.session?.access_token ||
          !x.user?.id ||
          x.session.user.id !== x.user.id
        )
          throw new Error("Sessão de recuperação inválida");
        re.current && (_(x.user.id), d(x.user.email || l), v(""));
      } catch (x) {
        re.current && z(kc(x));
      } finally {
        ((F.current = !1), re.current && C(!1));
      }
    }
  }
  async function oe() {
    let x = !1;
    try {
      const { error: H } = await r.auth.signOut({ scope: "global" });
      H && (x = !0);
    } catch {
      x = !0;
    }
    try {
      const { error: H } = await Pe.auth.signOut({ scope: "local" });
      H && (x = !0);
    } catch {
      x = !0;
    }
    re.current && se(x);
  }
  async function Se() {
    if (!y || F.current) return;
    const x = ed(j, w);
    if (x) {
      z(x);
      return;
    }
    ((F.current = !0), C(!0), z(""));
    try {
      const { data: H, error: te } = await r.auth.getUser();
      if (te) throw te;
      if (H.user?.id !== y) throw new Error("Sessão de recuperação inválida");
      const ae = await r.auth.updateUser({ password: j });
      if (ae.error) throw ae.error;
      (re.current && (Te(!0), S(""), k(""), v("")), await oe());
    } catch (H) {
      re.current && z(kc(H));
    } finally {
      ((F.current = !1), re.current && C(!1));
    }
  }
  async function P() {
    if (!F.current) {
      if (y || i) {
        ((F.current = !0), C(!0));
        try {
          const { error: x } = await r.auth.signOut({ scope: "local" });
          if (x) throw x;
          if (i) {
            const { error: H } = await Pe.auth.signOut({ scope: "local" });
            if (H) throw H;
          }
        } catch {
          re.current &&
            z("Não foi possível encerrar a validação. Tente novamente.");
          return;
        } finally {
          ((F.current = !1), re.current && C(!1));
        }
      }
      n();
    }
  }
  return o.jsxs(so, {
    children: [
      o.jsx("span", {
        className: "login-lock",
        children: ie
          ? o.jsx(ui, { size: 23 })
          : y
            ? o.jsx(qc, { size: 23 })
            : h
              ? o.jsx(Ic, { size: 23 })
              : o.jsx(qc, { size: 23 }),
      }),
      o.jsx("div", { className: "eyebrow", children: "RECUPERAÇÃO DE ACESSO" }),
      o.jsx("h2", {
        children: ie
          ? "Senha alterada!"
          : y
            ? "Defina sua nova senha"
            : h
              ? "Digite o código recebido"
              : "Recupere seu acesso",
      }),
      ie
        ? o.jsxs(o.Fragment, {
            children: [
              o.jsx("p", {
                children:
                  "Sua senha foi atualizada. Entre novamente usando a nova senha.",
              }),
              T
                ? o.jsxs("div", {
                    className: "success",
                    role: "status",
                    children: [
                      o.jsx(yt, { className: "spin", size: 17 }),
                      "Finalizando a recuperação…",
                    ],
                  })
                : M
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsx("div", {
                          className: "error",
                          role: "alert",
                          children:
                            "A senha já foi alterada, mas não conseguimos encerrar a sessão. Tente finalizar novamente.",
                        }),
                        o.jsxs("button", {
                          className: "button primary login-submit",
                          onClick: async () => {
                            if (!F.current) {
                              ((F.current = !0), C(!0));
                              try {
                                await oe();
                              } finally {
                                ((F.current = !1), re.current && C(!1));
                              }
                            }
                          },
                          children: [
                            "Finalizar recuperação ",
                            o.jsx(dt, { size: 18 }),
                          ],
                        }),
                      ],
                    })
                  : o.jsxs("a", {
                      className: "button primary login-submit",
                      href: "/demo/entrar",
                      children: ["Voltar ao login ", o.jsx(dt, { size: 18 })],
                    }),
            ],
          })
        : y
          ? o.jsxs(o.Fragment, {
              children: [
                o.jsxs("p", {
                  children: [
                    "Crie uma senha para ",
                    o.jsx("strong", { children: l }),
                    ", com pelo menos 8 caracteres.",
                  ],
                }),
                o.jsxs("form", {
                  onSubmit: (x) => {
                    (x.preventDefault(), Se());
                  },
                  children: [
                    o.jsxs("label", {
                      children: [
                        "Nova senha",
                        o.jsxs("div", {
                          className: "password-input",
                          children: [
                            o.jsx("input", {
                              required: !0,
                              minLength: 8,
                              maxLength: 72,
                              type: O ? "text" : "password",
                              autoComplete: "new-password",
                              placeholder: "Mínimo de 8 caracteres",
                              value: j,
                              disabled: T,
                              onChange: (x) => S(x.target.value),
                            }),
                            o.jsx("button", {
                              type: "button",
                              "aria-label": O
                                ? "Ocultar senha"
                                : "Mostrar senha",
                              onClick: () => B(!O),
                              children: O
                                ? o.jsx(Fl, { size: 18 })
                                : o.jsx(ls, { size: 18 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("label", {
                      children: [
                        "Confirme a nova senha",
                        o.jsx("input", {
                          required: !0,
                          minLength: 8,
                          maxLength: 72,
                          type: "password",
                          autoComplete: "new-password",
                          value: w,
                          disabled: T,
                          onChange: (x) => k(x.target.value),
                        }),
                      ],
                    }),
                    G &&
                      o.jsx("div", {
                        className: "error",
                        role: "alert",
                        children: G,
                      }),
                    o.jsx("button", {
                      className: "button primary login-submit",
                      disabled: T,
                      children: T
                        ? o.jsx(yt, { className: "spin", size: 18 })
                        : o.jsxs(o.Fragment, {
                            children: [
                              "Salvar nova senha ",
                              o.jsx(dt, { size: 18 }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            })
          : h
            ? o.jsxs(o.Fragment, {
                children: [
                  o.jsxs("p", {
                    children: [
                      "Digite o código de recuperação enviado para ",
                      o.jsx("strong", { children: l }),
                      ".",
                    ],
                  }),
                  o.jsxs("form", {
                    onSubmit: (x) => {
                      (x.preventDefault(), ee());
                    },
                    children: [
                      o.jsxs("label", {
                        children: [
                          "Código de recuperação",
                          o.jsx("input", {
                            className: "verification-code",
                            required: !0,
                            minLength: 6,
                            maxLength: 10,
                            pattern: "[0-9]{6,10}",
                            inputMode: "numeric",
                            autoComplete: "one-time-code",
                            value: p,
                            disabled: T,
                            onChange: (x) =>
                              v(x.target.value.replace(/\D/g, "")),
                            placeholder: "Código recebido por e-mail",
                          }),
                        ],
                      }),
                      G &&
                        o.jsx("div", {
                          className: "error",
                          role: "alert",
                          children: G,
                        }),
                      I &&
                        o.jsx("div", {
                          className: "success",
                          role: "status",
                          children: I,
                        }),
                      o.jsx("button", {
                        className: "button primary login-submit",
                        disabled: T,
                        children: T
                          ? o.jsx(yt, { className: "spin", size: 18 })
                          : o.jsxs(o.Fragment, {
                              children: [
                                "Validar código ",
                                o.jsx(dt, { size: 18 }),
                              ],
                            }),
                      }),
                    ],
                  }),
                  o.jsxs("button", {
                    className: "back-link",
                    disabled: T || L > 0,
                    onClick: () => void $(),
                    children: ["Reenviar código", L > 0 ? ` (${L}s)` : ""],
                  }),
                  o.jsx("button", {
                    className: "back-link",
                    disabled: T,
                    onClick: () => {
                      (f(!1), v(""), z(""), Y(""));
                    },
                    children: "Corrigir e-mail",
                  }),
                ],
              })
            : o.jsxs(o.Fragment, {
                children: [
                  o.jsx("p", {
                    children:
                      "Informe seu e-mail. Enviaremos um código para você definir uma nova senha aqui no site.",
                  }),
                  o.jsxs("form", {
                    onSubmit: (x) => {
                      (x.preventDefault(), $());
                    },
                    children: [
                      o.jsxs("label", {
                        children: [
                          "E-mail",
                          o.jsx("input", {
                            type: "email",
                            required: !0,
                            maxLength: 254,
                            autoComplete: "email",
                            value: l,
                            disabled: T,
                            onChange: (x) => d(x.target.value),
                          }),
                        ],
                      }),
                      G &&
                        o.jsx("div", {
                          className: "error",
                          role: "alert",
                          children: G,
                        }),
                      o.jsx("button", {
                        className: "button primary login-submit",
                        disabled: T || L > 0,
                        children: T
                          ? o.jsx(yt, { className: "spin", size: 18 })
                          : o.jsxs(o.Fragment, {
                              children: [
                                "Enviar código",
                                L > 0 ? ` (${L}s)` : "",
                                o.jsx(dt, { size: 18 }),
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
      !ie &&
        o.jsxs("button", {
          className: "back-link",
          disabled: T,
          onClick: () => void P(),
          children: [o.jsx(zp, { size: 15 }), "Voltar ao login"],
        }),
      o.jsxs("div", {
        className: "secure-note",
        children: [
          o.jsx(li, { size: 15 }),
          "Código individual, com validade limitada e uso único.",
        ],
      }),
    ],
  });
}
function O_() {
  const [i, n] = K.useState(""),
    [r, l] = K.useState(""),
    [d, h] = K.useState(""),
    [f, p] = K.useState(""),
    [v, y] = K.useState(""),
    [_, j] = K.useState(""),
    [S, w] = K.useState(!1),
    [k, O] = K.useState(!1),
    [B, T] = K.useState(""),
    [C, L] = K.useState(!1);
  return o.jsx(so, {
    wide: !0,
    children: C
      ? o.jsx(td, { email: r.trim().toLowerCase(), onBack: () => L(!1) })
      : o.jsxs(o.Fragment, {
          children: [
            o.jsx("span", {
              className: "login-lock",
              children: o.jsx(Xg, { size: 23 }),
            }),
            o.jsx("div", {
              className: "eyebrow",
              children: "CADASTRO DE ANALISTA",
            }),
            o.jsx("h2", { children: "Crie sua conta" }),
            o.jsx("p", {
              children:
                "Acompanhe as obras liberadas para você. O perfil de analista permite somente consultas.",
            }),
            o.jsxs("form", {
              onSubmit: async (X) => {
                (X.preventDefault(), T(""));
                const G = ed(v, _);
                if (G) {
                  T(G);
                  return;
                }
                if (i.trim().length < 3) {
                  T("Informe seu nome completo.");
                  return;
                }
                const z = f.replace(/\D/g, "");
                if (f.trim() && (z.length < 10 || z.length > 15)) {
                  T("Informe o telefone com DDD, ou deixe o campo vazio.");
                  return;
                }
                O(!0);
                try {
                  const { data: I, error: Y } = await Pe.auth.signUp({
                    email: r.trim().toLowerCase(),
                    password: v,
                    options: {
                      emailRedirectTo: av(),
                      data: {
                        full_name: i.trim(),
                        company: d.trim(),
                        phone: f.trim(),
                      },
                    },
                  });
                  if (Y) throw Y;
                  if (I.session) {
                    (await Pe.auth.signOut(),
                      T(
                        "A confirmação de e-mail precisa estar habilitada. Fale com o responsável antes de continuar.",
                      ));
                    return;
                  }
                  (y(""), j(""), L(!0));
                } catch (I) {
                  T(gr(I));
                } finally {
                  O(!1);
                }
              },
              children: [
                o.jsxs("label", {
                  children: [
                    "Nome completo *",
                    o.jsx("input", {
                      required: !0,
                      autoComplete: "name",
                      minLength: 3,
                      maxLength: 120,
                      value: i,
                      onChange: (X) => n(X.target.value),
                      placeholder: "Seu nome completo",
                    }),
                  ],
                }),
                o.jsxs("label", {
                  children: [
                    "E-mail *",
                    o.jsx("input", {
                      type: "email",
                      required: !0,
                      autoComplete: "email",
                      maxLength: 254,
                      value: r,
                      onChange: (X) => l(X.target.value),
                      placeholder: "seu.email@empresa.com.br",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "signup-optional",
                  children: [
                    o.jsxs("label", {
                      children: [
                        "Empresa (opcional)",
                        o.jsx("input", {
                          autoComplete: "organization",
                          maxLength: 120,
                          value: d,
                          onChange: (X) => h(X.target.value),
                        }),
                      ],
                    }),
                    o.jsxs("label", {
                      children: [
                        "Telefone (opcional)",
                        o.jsx("input", {
                          type: "tel",
                          autoComplete: "tel",
                          maxLength: 30,
                          value: f,
                          onChange: (X) => p(X.target.value),
                          placeholder: "(11) 99999-9999",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("label", {
                  children: [
                    "Senha *",
                    o.jsxs("div", {
                      className: "password-input",
                      children: [
                        o.jsx("input", {
                          type: S ? "text" : "password",
                          required: !0,
                          minLength: 8,
                          maxLength: 72,
                          autoComplete: "new-password",
                          value: v,
                          onChange: (X) => y(X.target.value),
                          placeholder: "Pelo menos 8 caracteres",
                        }),
                        o.jsx("button", {
                          type: "button",
                          "aria-label": S ? "Ocultar senha" : "Mostrar senha",
                          onClick: () => w(!S),
                          children: S
                            ? o.jsx(Fl, { size: 18 })
                            : o.jsx(ls, { size: 18 }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("label", {
                  children: [
                    "Confirme a senha *",
                    o.jsx("input", {
                      type: "password",
                      required: !0,
                      minLength: 8,
                      maxLength: 72,
                      autoComplete: "new-password",
                      value: _,
                      onChange: (X) => j(X.target.value),
                    }),
                  ],
                }),
                B &&
                  o.jsx("div", {
                    className: "error",
                    role: "alert",
                    children: B,
                  }),
                o.jsx("button", {
                  className: "button primary login-submit",
                  disabled: k,
                  children: k
                    ? o.jsx(yt, { size: 18, className: "spin" })
                    : o.jsxs(o.Fragment, {
                        children: ["Criar conta ", o.jsx(dt, { size: 18 })],
                      }),
                }),
              ],
            }),
            o.jsxs("p", {
              className: "login-switch",
              children: [
                "Já tem cadastro? ",
                o.jsx("a", {
                  href: "/demo/entrar",
                  children: "Entrar na minha conta",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "secure-note",
              children: [
                o.jsx(li, { size: 15 }),
                "Confirme seu e-mail para concluir o cadastro.",
              ],
            }),
          ],
        }),
  });
}
function N_() {
  const [i, n] = K.useState("loading"),
    [r, l] = K.useState(""),
    [d, h] = K.useState(!1);
  return (
    K.useEffect(() => {
      let f = !0;
      const p = new URLSearchParams(location.hash.slice(1)),
        v =
          p.has("error") ||
          p.has("error_code") ||
          new URLSearchParams(location.search).has("error");
      return (
        Pe.auth
          .getSession()
          .then(({ data: y, error: _ }) => {
            if (!f) return;
            const j = !v && !_ && !!y.session?.user.email_confirmed_at;
            (n(j ? "done" : "error"),
              history.replaceState({}, "", "/confirmar-email"));
          })
          .catch(() => f && n("error")),
        () => {
          f = !1;
        }
      );
    }, []),
    o.jsx(so, {
      children: d
        ? o.jsx(td, { email: r.trim().toLowerCase(), initialCooldown: 0 })
        : o.jsxs(o.Fragment, {
            children: [
              o.jsx("span", {
                className: "login-lock",
                children:
                  i === "loading"
                    ? o.jsx(yt, { className: "spin", size: 23 })
                    : i === "done"
                      ? o.jsx(ui, { size: 23 })
                      : o.jsx(Ic, { size: 23 }),
              }),
              o.jsx("h2", {
                children:
                  i === "loading"
                    ? "Confirmando seu e-mail…"
                    : i === "done"
                      ? "E-mail confirmado!"
                      : "Confirme seu e-mail",
              }),
              o.jsx("p", {
                children:
                  i === "loading"
                    ? "Aguarde um instante."
                    : i === "done"
                      ? "Sua conta está pronta. As obras serão exibidas conforme a liberação do administrador."
                      : "Informe o e-mail do cadastro para digitar seu código. Se já confirmou sua conta, acesse o login.",
              }),
              i === "done"
                ? o.jsxs("a", {
                    className: "button primary login-submit",
                    href: "/demo/consulta",
                    children: ["Acessar plataforma ", o.jsx(dt, { size: 18 })],
                  })
                : i === "error"
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsxs("a", {
                          className: "button primary login-submit",
                          href: "/demo/entrar",
                          children: [
                            "Ir para o login ",
                            o.jsx(dt, { size: 18 }),
                          ],
                        }),
                        o.jsxs("form", {
                          onSubmit: (f) => {
                            (f.preventDefault(), h(!0));
                          },
                          children: [
                            o.jsxs("label", {
                              children: [
                                "E-mail do cadastro",
                                o.jsx("input", {
                                  type: "email",
                                  required: !0,
                                  autoComplete: "email",
                                  value: r,
                                  onChange: (f) => l(f.target.value),
                                }),
                              ],
                            }),
                            o.jsx("button", {
                              className: "button secondary login-submit",
                              children: "Continuar com meu código",
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
            ],
          }),
    })
  );
}
const Il = [
  "Fabricação de placas",
  "Fabricação de pilares",
  "Execução em campo",
];
function Xc(i) {
  return (
    {
      "Corte, dobra e montagem das armaduras": "Armação",
      Escavações: "Escavação",
      "Instalação dos pilares": "Instalação de pilares",
      "Fixação dos pilares": "Fixação de pilares",
      "Grauteamento dos pilares": "Grauteamento de pilares",
    }[i] || i
  );
}
function C_(i, n, r, l) {
  const d = i.entries
      .filter((p) => p.plan_id === n?.id && p.date <= r.date && p.id !== l)
      .reduce((p, v) => p + Number(v.quantity), 0),
    h = Number(r.quantity || 0),
    f =
      Number(r.headcount || 0) *
      (Number(r.normal_hours || 0) + Number(r.extra_hours || 0));
  return {
    accumulated: d + h,
    balance: n ? Number(n.total) - d - h : null,
    hh: f,
    productivity: f ? h / f : null,
  };
}
function k_({
  d: i,
  initial: n = {},
  stageHint: r,
  onSave: l,
  onCancel: d,
  onPlanning: h,
  onTeams: f,
}) {
  const p = i.plans.find((P) => P.id === n.plan_id),
    v = (P) => i.services.find((x) => x.id === P?.service_id)?.stage,
    y = v(p) || r || v(i.plans[0]) || Il[0],
    [_, j] = K.useState(y),
    [S, w] = K.useState(p?.id || i.plans.find((P) => v(P) === y)?.id || ""),
    k = i.plans.find((P) => P.id === S),
    O = i.services.find((P) => P.id === k?.service_id),
    B = O?.unit || "un",
    [T, C] = K.useState({
      date: Sa(),
      team_id: i.teams.length === 1 ? i.teams[0].id : "",
      target: k?.daily_target ?? "",
      quantity: "",
      headcount: "",
      normal_hours: 8,
      extra_hours: 0,
      volume: "",
      lot_id: "",
      ...n,
      notes: [
        n.notes,
        n.interference && n.interference !== n.notes ? n.interference : "",
      ].filter(Boolean).join(`
`),
    }),
    L = T.team_id || (i.teams.length === 1 ? i.teams[0].id : ""),
    [X, G] = K.useState(!!n.interference),
    [z, I] = K.useState(!1),
    [Y, ie] = K.useState(""),
    [photoDrafts, setPhotoDrafts] = K.useState(() =>
      (i.entry_photos || [])
        .filter((photo) => photo.entry_id === n.id)
        .sort((a, b) => a.position - b.position),
    ),
    [photoBusy, setPhotoBusy] = K.useState(false),
    entryIdentifier = K.useRef(n.id || crypto.randomUUID()),
    savingLock = K.useRef(false),
    Te = i.plans.filter((P) => v(P) === _),
    M = i.services.filter((P) => Te.some((x) => x.service_id === P.id)),
    se = i.types.filter((P) =>
      Te.some((x) => x.service_id === k?.service_id && x.type_id === P.id),
    ),
    re = Te.filter(
      (P) => P.service_id === k?.service_id && P.type_id === k?.type_id,
    ),
    F = i.lots.filter((P) => P.type_id === k?.type_id && P.cast_date <= T.date),
    ge = C_(i, k, T, n.id),
    $ = (P, x) => C((H) => ({ ...H, [P]: x })),
    ee = (P) => {
      (w(P?.id || ""),
        C((x) => ({
          ...x,
          target: P?.daily_target ?? "",
          lot_id: "",
          volume: "",
        })),
        ie(""));
    },
    oe = (P) => Number(T[P] || 0),
    Se = (P, x, H = 0, te = "any") =>
      o.jsxs("label", {
        children: [
          x,
          " *",
          o.jsx("input", {
            type: "number",
            required: !0,
            value: T[P],
            min: H,
            step: te,
            max: P.endsWith("hours") ? 24 : void 0,
            onChange: (ae) => $(P, ae.target.value),
          }),
        ],
      });
  return o.jsxs("form", {
    className: "daily-form",
    onSubmit: async (P) => {
      if (savingLock.current || photoBusy) {
        P.preventDefault();
        return;
      }
      if ((P.preventDefault(), ie(""), !k)) {
        ie(
          "Defina a quantidade prevista desta atividade em Planejamento e metas.",
        );
        return;
      }
      if (T.date > Sa()) {
        ie("A data de execução não pode ser futura.");
        return;
      }
      if (oe("normal_hours") + oe("extra_hours") > 24) {
        ie(
          "A soma das horas normais e extras não pode exceder 24 horas por colaborador.",
        );
        return;
      }
      if (O?.requires_volume && (T.volume === "" || T.volume === null)) {
        ie("Informe o volume de concreto em m³.");
        return;
      }
      if (T.lot_id && !F.some((x) => x.id === T.lot_id)) {
        ie("O lote deve corresponder ao tipo de peça e à data de execução.");
        return;
      }
      if (
        photoDrafts.length !== 2 &&
        !(n.id && n.photo_requirement !== 2 && photoDrafts.length === 0)
      ) {
        ie("Adicione exatamente 2 fotos da obra antes de salvar o lançamento.");
        return;
      }
      savingLock.current = true;
      I(!0);
      try {
        await l({
          _entry_id: entryIdentifier.current,
          _photos: photoDrafts,
          date: T.date,
          plan_id: k.id,
          team_id: L,
          lot_id: T.lot_id || null,
          target: oe("target"),
          quantity: oe("quantity"),
          headcount: oe("headcount"),
          normal_hours: oe("normal_hours"),
          extra_hours: oe("extra_hours"),
          volume: O?.requires_volume
            ? oe("volume")
            : T.volume === ""
              ? null
              : Number(T.volume),
          notes: T.notes || "",
          interference: X ? T.notes || "Interferência registrada" : "",
        });
      } catch (x) {
        ie(x.message || "Não foi possível salvar o lançamento.");
      } finally {
        savingLock.current = false;
        I(!1);
      }
    },
    children: [
      o.jsx("div", {
        className: "form-section-label",
        children: "1. O que foi executado",
      }),
      o.jsxs("div", {
        className: "form-grid",
        children: [
          o.jsxs("label", {
            children: [
              "Data *",
              o.jsx("input", {
                type: "date",
                required: !0,
                max: Sa(),
                value: T.date,
                onChange: (P) => $("date", P.target.value),
              }),
            ],
          }),
          o.jsxs("label", {
            children: [
              "Frente de serviço *",
              o.jsx("select", {
                value: _,
                onChange: (P) => {
                  (j(P.target.value),
                    ee(i.plans.find((x) => v(x) === P.target.value)));
                },
                children: Il.map((P) =>
                  o.jsx(
                    "option",
                    {
                      value: P,
                      children:
                        P === "Execução em campo" ? "Montagem em campo" : P,
                    },
                    P,
                  ),
                ),
              }),
            ],
          }),
          !!Te.length &&
            o.jsxs(o.Fragment, {
              children: [
                o.jsxs("label", {
                  children: [
                    "Serviço executado *",
                    o.jsx("select", {
                      value: k?.service_id || "",
                      onChange: (P) =>
                        ee(
                          Te.find(
                            (x) =>
                              x.service_id === P.target.value &&
                              x.type_id === k?.type_id,
                          ) || Te.find((x) => x.service_id === P.target.value),
                        ),
                      children: M.map((P) =>
                        o.jsx(
                          "option",
                          { value: P.id, children: Xc(P.name) },
                          P.id,
                        ),
                      ),
                    }),
                  ],
                }),
                o.jsxs("label", {
                  children: [
                    "Tipo de peça *",
                    o.jsx("select", {
                      value: k?.type_id || "",
                      onChange: (P) =>
                        ee(
                          Te.find(
                            (x) =>
                              x.service_id === k?.service_id &&
                              x.type_id === P.target.value,
                          ),
                        ),
                      children: se.map((P) =>
                        o.jsx(
                          "option",
                          { value: P.id, children: P.name },
                          P.id,
                        ),
                      ),
                    }),
                  ],
                }),
                re.length > 1 &&
                  o.jsxs("label", {
                    className: "wide",
                    children: [
                      "Trecho da obra *",
                      o.jsx("select", {
                        value: S,
                        onChange: (P) =>
                          ee(i.plans.find((x) => x.id === P.target.value)),
                        children: re.map((P) =>
                          o.jsx(
                            "option",
                            {
                              value: P.id,
                              children: i.fronts.find(
                                (x) => x.id === P.front_id,
                              )?.name,
                            },
                            P.id,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      !Te.length &&
        o.jsxs("div", {
          className: "entry-setup",
          children: [
            o.jsx(Mp, { size: 22 }),
            o.jsx("h3", { children: "Defina primeiro o total previsto" }),
            o.jsx("p", {
              children:
                "Cadastre a meta desta frente uma vez no planejamento. Depois, o lançamento diário calcula o acumulado, o avanço e o saldo automaticamente.",
            }),
            o.jsx("button", {
              type: "button",
              className: "button secondary",
              onClick: () => h(_, { ...T, plan_id: k?.id }),
              children: "Definir metas desta obra",
            }),
          ],
        }),
      !!Te.length &&
        !i.teams.length &&
        o.jsxs("div", {
          className: "entry-setup",
          children: [
            o.jsx(Lp, { size: 22 }),
            o.jsx("h3", { children: "Cadastre a equipe responsável" }),
            o.jsx("p", {
              children:
                "A equipe identifica quem executou o serviço e permite acompanhar a produtividade.",
            }),
            o.jsx("button", {
              type: "button",
              className: "button secondary",
              onClick: () => f(_, { ...T, plan_id: k?.id }),
              children: "Cadastrar equipe",
            }),
          ],
        }),
      !!Te.length &&
        !!i.teams.length &&
        o.jsxs(o.Fragment, {
          children: [
            o.jsxs("div", {
              className: "form-section-label",
              children: [
                "2. Produção do dia ",
                o.jsxs("span", {
                  children: [
                    "Unidade: ",
                    B,
                    " · ",
                    i.fronts.find((P) => P.id === k?.front_id)?.name,
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "form-grid",
              children: [
                o.jsxs("label", {
                  className: "wide",
                  children: [
                    "Equipe responsável *",
                    o.jsxs("select", {
                      required: !0,
                      value: L,
                      onChange: (P) => $("team_id", P.target.value),
                      children: [
                        o.jsx("option", {
                          value: "",
                          children: "Selecione a equipe",
                        }),
                        i.teams.map((P) =>
                          o.jsx(
                            "option",
                            { value: P.id, children: P.name },
                            P.id,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                Se("target", `Meta diária (${B})`),
                Se(
                  "quantity",
                  `Produção realizada (${B})`,
                  0,
                  B === "un" ? "1" : "any",
                ),
                O?.requires_volume && Se("volume", "Volume de concreto (m³)"),
              ],
            }),
            o.jsx("div", {
              className: "form-section-label",
              children: "3. Efetivo e horas trabalhadas",
            }),
            o.jsxs("div", {
              className: "form-grid",
              children: [
                Se("headcount", "Efetivo (colaboradores)", 1, "1"),
                Se("normal_hours", "Horas normais por colaborador"),
                Se("extra_hours", "Horas extras por colaborador"),
              ],
            }),
            o.jsx("p", {
              className: "entry-hint",
              children:
                "As horas são por colaborador. O cálculo considera jornada igual para toda a equipe.",
            }),
            o.jsxs("div", {
              className: "entry-calculations",
              "aria-label": "Indicadores calculados automaticamente",
              children: [
                o.jsxs("div", {
                  children: [
                    o.jsx("span", { children: "Produção acumulada" }),
                    o.jsxs("strong", {
                      children: [fe(ge.accumulated, 2), " ", B],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("span", { children: "Saldo a executar" }),
                    o.jsxs("strong", {
                      className:
                        ge.balance !== null && ge.balance < 0 ? "text-red" : "",
                      children: [fe(ge.balance ?? 0, 2), " ", B],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("span", { children: "Homem-hora" }),
                    o.jsxs("strong", { children: [fe(ge.hh, 2), " h"] }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("span", { children: "Produtividade do dia" }),
                    o.jsx("strong", {
                      children:
                        ge.productivity === null
                          ? "Sem horas definidas"
                          : `${fe(ge.productivity, 3)} ${B}/h`,
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("p", {
              className: "entry-hint",
              children: [
                "Acumulado e saldo desta atividade, tipo e trecho até a data informada. ",
                ge.balance !== null && ge.balance < 0
                  ? "A produção ultrapassa o previsto. Revise a meta total."
                  : "",
              ],
            }),
            o.jsx("div", {
              className: "form-grid",
              children: o.jsxs("label", {
                className: "wide",
                children: [
                  "Observações (opcional)",
                  o.jsx("textarea", {
                    rows: 3,
                    placeholder:
                      "Interferências, paralisações e outras ocorrências do dia…",
                    value: T.notes,
                    onChange: (P) => $("notes", P.target.value),
                  }),
                ],
              }),
            }),
            o.jsxs("label", {
              className: "entry-checkbox",
              children: [
                o.jsx("input", {
                  type: "checkbox",
                  checked: X,
                  onChange: (P) => G(P.target.checked),
                }),
                "Houve interferência ou paralisação neste lançamento",
              ],
            }),
            !!F.length &&
              o.jsxs("details", {
                className: "entry-details",
                open: !!n.lot_id,
                children: [
                  o.jsx("summary", {
                    children: "Vincular a um lote (opcional)",
                  }),
                  o.jsxs("label", {
                    children: [
                      "Lote de fabricação",
                      o.jsxs("select", {
                        value: T.lot_id || "",
                        onChange: (P) => $("lot_id", P.target.value),
                        children: [
                          o.jsx("option", {
                            value: "",
                            children: "Sem vínculo com lote",
                          }),
                          F.map((P) =>
                            o.jsxs(
                              "option",
                              {
                                value: P.id,
                                children: [
                                  P.code,
                                  " · concretagem em ",
                                  P.cast_date.split("-").reverse().join("/"),
                                ],
                              },
                              P.id,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("p", {
                    children:
                      "O vínculo mantém a rastreabilidade. Este lançamento não cria novas peças no estoque.",
                  }),
                ],
              }),
          ],
        }),
      k &&
        i.teams.length > 0 &&
        o.jsx(DailyPhotoEditor, {
          photos: photoDrafts,
          onChange: (photos) => {
            setPhotoDrafts(photos);
            ie("");
          },
          onBusy: setPhotoBusy,
          disabled: z,
          legacy: !!n.id && n.photo_requirement !== 2,
        }),
      Y &&
        o.jsxs("div", {
          role: "alert",
          className: "error",
          children: [o.jsx(ka, { size: 17 }), Y],
        }),
      o.jsxs("div", {
        className: "form-actions",
        children: [
          o.jsx("button", {
            className: "button secondary",
            type: "button",
            onClick: d,
            children: "Cancelar",
          }),
          o.jsx("button", {
            className: "button primary",
            disabled: z || photoBusy || !k || !i.teams.length,
            children: z
              ? o.jsxs(o.Fragment, {
                  children: [
                    o.jsx(yt, { size: 16, className: "spin" }),
                    "Salvando…",
                  ],
                })
              : "Salvar lançamento",
          }),
        ],
      }),
    ],
  });
}
function R_({ d: i, initial: n = {}, stageHint: r, onSave: l, onCancel: d }) {
  const h = i.services.find((G) => G.id === n.service_id)?.stage || r || Il[0],
    f = (G) =>
      i.services
        .filter((z) => z.stage === G)
        .sort((z, I) => {
          const Y = (ie) =>
            Xc(ie) === "Armação"
              ? 0
              : ie === "Concretagem"
                ? 1
                : ie === "Desforma"
                  ? 2
                  : 3;
          return Y(z.name) - Y(I.name);
        }),
    p = (G) =>
      i.types.filter(
        (z) =>
          G === "Execução em campo" ||
          z.category === (G === "Fabricação de placas" ? "Placas" : "Pilares"),
      ),
    [v, y] = K.useState(h),
    [_, j] = K.useState({
      service_id: f(h)[0]?.id || "",
      type_id: p(h)[0]?.id || "",
      front_id: i.fronts[0]?.id || "",
      total: "",
      daily_target: "",
      weight: "",
      ...n,
    }),
    [S, w] = K.useState(""),
    [k, O] = K.useState(!1),
    B = !!n.id && i.entries.some((G) => G.plan_id === n.id),
    T = i.services.find((G) => G.id === _.service_id),
    C = T?.unit || "un",
    L = (G, z) => j((I) => ({ ...I, [G]: z })),
    X = i.entries
      .filter((G) => G.plan_id === n.id)
      .reduce((G, z) => G + Number(z.quantity), 0);
  return o.jsxs("form", {
    className: "daily-form",
    onSubmit: async (G) => {
      (G.preventDefault(), w(""));
      const z = Number(_.total),
        I = Number(_.daily_target),
        Y = _.weight === "" || _.weight === null ? null : Number(_.weight);
      if (!_.front_id || !T || !_.type_id) {
        w("Escolha serviço, tipo e trecho da obra.");
        return;
      }
      if (!Number.isFinite(z) || z <= 0 || !Number.isFinite(I) || I < 0) {
        w("Informe um total previsto maior que zero e uma meta diária válida.");
        return;
      }
      if (C === "un" && (!Number.isInteger(z) || !Number.isInteger(I))) {
        w("Quantidades de peças devem ser números inteiros.");
        return;
      }
      if (Y !== null && (!Number.isFinite(Y) || Y <= 0)) {
        w("O peso do avanço geral deve ser maior que zero ou ficar em branco.");
        return;
      }
      if (
        i.plans.some(
          (ie) =>
            ie.id !== n.id &&
            ie.front_id === _.front_id &&
            ie.type_id === _.type_id &&
            ie.service_id === _.service_id,
        )
      ) {
        w(
          "Esta atividade e tipo já têm planejamento neste trecho. Edite a meta existente.",
        );
        return;
      }
      O(!0);
      try {
        await l({
          service_id: _.service_id,
          type_id: _.type_id,
          front_id: _.front_id,
          total: z,
          daily_target: I,
          weight: Y,
        });
      } catch (ie) {
        w(ie.message || "Não foi possível salvar a meta.");
      } finally {
        O(!1);
      }
    },
    children: [
      o.jsx("div", {
        className: "form-note",
        children:
          "Defina aqui o total previsto para a obra. Nos lançamentos diários, você informa apenas o que a equipe executou.",
      }),
      B &&
        o.jsx("div", {
          className: "form-note",
          children:
            "Esta atividade já possui lançamentos. Serviço, tipo e trecho ficam preservados; você pode ajustar as quantidades e o peso.",
        }),
      o.jsxs("div", {
        className: "form-grid",
        children: [
          o.jsxs("label", {
            children: [
              "Frente de serviço *",
              o.jsx("select", {
                disabled: B,
                value: v,
                onChange: (G) => {
                  const z = G.target.value;
                  (y(z),
                    j((I) => ({
                      ...I,
                      service_id: f(z)[0]?.id || "",
                      type_id: p(z)[0]?.id || "",
                    })));
                },
                children: Il.map((G) =>
                  o.jsx(
                    "option",
                    {
                      value: G,
                      children:
                        G === "Execução em campo" ? "Montagem em campo" : G,
                    },
                    G,
                  ),
                ),
              }),
            ],
          }),
          o.jsxs("label", {
            children: [
              "Serviço *",
              o.jsx("select", {
                required: !0,
                disabled: B,
                value: _.service_id,
                onChange: (G) => L("service_id", G.target.value),
                children: f(v).map((G) =>
                  o.jsx("option", { value: G.id, children: Xc(G.name) }, G.id),
                ),
              }),
            ],
          }),
          o.jsxs("label", {
            children: [
              "Tipo de peça *",
              o.jsx("select", {
                required: !0,
                disabled: B,
                value: _.type_id,
                onChange: (G) => L("type_id", G.target.value),
                children: p(v).map((G) =>
                  o.jsx("option", { value: G.id, children: G.name }, G.id),
                ),
              }),
            ],
          }),
          i.fronts.length > 1 &&
            o.jsxs("label", {
              children: [
                "Trecho da obra *",
                o.jsx("select", {
                  disabled: B,
                  value: _.front_id,
                  onChange: (G) => L("front_id", G.target.value),
                  children: i.fronts.map((G) =>
                    o.jsx("option", { value: G.id, children: G.name }, G.id),
                  ),
                }),
              ],
            }),
          o.jsxs("label", {
            children: [
              "Quantidade total prevista (",
              C,
              ") *",
              o.jsx("input", {
                type: "number",
                required: !0,
                min: C === "un" ? 1 : 0.001,
                step: C === "un" ? "1" : "any",
                value: _.total,
                onChange: (G) => L("total", G.target.value),
              }),
            ],
          }),
          o.jsxs("label", {
            children: [
              "Meta diária de referência (",
              C,
              ") *",
              o.jsx("input", {
                type: "number",
                required: !0,
                min: "0",
                step: C === "un" ? "1" : "any",
                value: _.daily_target,
                onChange: (G) => L("daily_target", G.target.value),
              }),
            ],
          }),
        ],
      }),
      o.jsx("p", {
        className: "entry-hint",
        children:
          "O lançamento traz esta meta preenchida, permitindo ajuste para o dia.",
      }),
      (!i.services.length || !i.types.length) &&
        o.jsx("div", {
          className: "error",
          children:
            "Cadastre os serviços e tipos de peças nas abas do planejamento antes de definir metas.",
        }),
      i.fronts.length === 1 &&
        o.jsxs("p", {
          className: "entry-hint",
          children: [
            "Trecho: ",
            i.fronts[0].name,
            ". O vínculo é preenchido automaticamente.",
          ],
        }),
      !i.fronts.length &&
        o.jsx("div", {
          className: "error",
          children:
            "Cadastre um trecho em Planejamento e metas → Trechos da obra antes de salvar.",
        }),
      !!n.id &&
        o.jsxs("p", {
          className: "entry-hint",
          children: [
            "Já executado nesta atividade: ",
            fe(X, 2),
            " ",
            C,
            ". ",
            Number(_.total) < X
              ? "O novo total está abaixo do executado; o saldo negativo será sinalizado."
              : "",
          ],
        }),
      o.jsxs("details", {
        className: "entry-details",
        children: [
          o.jsx("summary", {
            children: "Configurar avanço físico geral (opcional)",
          }),
          o.jsxs("label", {
            children: [
              "Peso desta atividade",
              o.jsx("input", {
                type: "number",
                step: "any",
                value: _.weight ?? "",
                onChange: (G) => L("weight", G.target.value),
              }),
            ],
          }),
          o.jsx("p", {
            children:
              "Use pesos para indicar a participação de cada atividade no avanço da obra. O avanço geral só aparece quando todas as atividades têm peso definido. Não é necessário configurar isso para começar a lançar produção.",
          }),
        ],
      }),
      S &&
        o.jsxs("div", {
          className: "error",
          role: "alert",
          children: [o.jsx(ka, { size: 17 }), S],
        }),
      o.jsxs("div", {
        className: "form-actions",
        children: [
          o.jsx("button", {
            type: "button",
            className: "button secondary",
            onClick: d,
            children: "Cancelar",
          }),
          o.jsx("button", {
            className: "button primary",
            disabled: k || !i.fronts.length || !T || !_.type_id,
            children: k
              ? o.jsxs(o.Fragment, {
                  children: [
                    o.jsx(yt, { size: 16, className: "spin" }),
                    "Salvando…",
                  ],
                })
              : "Salvar meta",
          }),
        ],
      }),
    ],
  });
}
const z_ = [
  { source: "inspecao", destination: "aprovado", label: "Aprovar na inspeção" },
  {
    source: "inspecao",
    destination: "retrabalho",
    label: "Encaminhar para retrabalho",
  },
  {
    source: "inspecao",
    destination: "rejeitado",
    label: "Rejeitar na inspeção",
  },
  {
    source: "retrabalho",
    destination: "reinspecao",
    label: "Concluir retrabalho e enviar à reinspeção",
  },
  {
    source: "reinspecao",
    destination: "aprovado",
    label: "Aprovar na reinspeção",
  },
  {
    source: "reinspecao",
    destination: "retrabalho",
    label: "Devolver para retrabalho",
  },
  {
    source: "reinspecao",
    destination: "rejeitado",
    label: "Rejeitar na reinspeção",
  },
  {
    source: "aprovado",
    destination: "liberado",
    label: "Liberar para montagem",
  },
  {
    source: "liberado",
    destination: "campo",
    label: "Enviar da fábrica para o campo",
  },
  {
    source: "campo",
    destination: "instalado",
    label: "Registrar instalação em campo",
  },
];
function D_({ d: i, responsible: n = "", onSave: r, onCancel: l, onLot: d }) {
  const [h, f] = K.useState(i.lots[0]?.id || ""),
    [p, v] = K.useState(Sa()),
    [y, _] = K.useState(""),
    [j, S] = K.useState(""),
    [w, k] = K.useState(n),
    [O, B] = K.useState(""),
    [T, C] = K.useState(!1),
    [L, X] = K.useState(""),
    G = i.lots.some((F) => F.id === h) ? h : i.lots[0]?.id || "",
    z = i.lots.find((F) => F.id === G),
    I = i.movements
      .filter((F) => F.lot_id === G)
      .reduce((F, ge) => (ge.date > F ? ge.date : F), z?.cast_date || ""),
    Y = oi(i.movements, G, p),
    ie = z_.filter((F) => (Y[F.source] || 0) > 0),
    Te = (F) => F.source + "-" + F.destination,
    M = ie.find((F) => Te(F) === y) || ie[0],
    se = M ? Y[M.source] : 0,
    re = !!p && p >= I && p <= Sa();
  return o.jsxs("form", {
    className: "daily-form",
    onSubmit: async (F) => {
      if ((F.preventDefault(), X(""), !z || !M)) {
        X("Este lote não possui saldo para a operação.");
        return;
      }
      if (!re) {
        X("Use uma data entre a última movimentação do lote e hoje.");
        return;
      }
      const ge = Number(j);
      if (!Number.isInteger(ge) || ge <= 0 || ge > se) {
        X(`Informe uma quantidade inteira de 1 a ${fe(se)} peças.`);
        return;
      }
      if (w.trim().length < 2) {
        X("Informe o responsável pela operação.");
        return;
      }
      C(!0);
      try {
        await r({
          lot_id: z.id,
          source: M.source,
          destination: M.destination,
          quantity: ge,
          date: p,
          responsible: w.trim(),
          notes: O.trim(),
        });
      } catch ($) {
        X($.message || "Não foi possível registrar a operação.");
      } finally {
        C(!1);
      }
    },
    children: [
      i.lots.length
        ? o.jsxs(o.Fragment, {
            children: [
              o.jsxs("div", {
                className: "form-grid",
                children: [
                  o.jsxs("label", {
                    className: "wide",
                    children: [
                      "Lote *",
                      o.jsx("select", {
                        value: G,
                        onChange: (F) => {
                          (f(F.target.value), _(""), S(""), X(""));
                        },
                        children: i.lots.map((F) =>
                          o.jsxs(
                            "option",
                            {
                              value: F.id,
                              children: [
                                F.code,
                                " · ",
                                i.types.find((ge) => ge.id === F.type_id)?.name,
                                " · concretagem ",
                                Ee(F.cast_date),
                              ],
                            },
                            F.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  o.jsxs("label", {
                    children: [
                      "Data da operação *",
                      o.jsx("input", {
                        type: "date",
                        required: !0,
                        min: I,
                        max: Sa(),
                        value: p,
                        onChange: (F) => {
                          (v(F.target.value), S(""), X(""));
                        },
                      }),
                    ],
                  }),
                  o.jsxs("label", {
                    children: [
                      "Responsável *",
                      o.jsx("input", {
                        required: !0,
                        minLength: 2,
                        value: w,
                        onChange: (F) => k(F.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("p", {
                className: "entry-hint",
                children: [
                  "Último registro deste lote: ",
                  Ee(I),
                  ". As movimentações seguem ordem de data.",
                ],
              }),
              !re &&
                o.jsxs("div", {
                  className: "error",
                  role: "alert",
                  children: ["Use uma data entre ", Ee(I), " e hoje."],
                }),
              ie.length
                ? o.jsxs(o.Fragment, {
                    children: [
                      o.jsxs("div", {
                        className: "form-grid",
                        children: [
                          o.jsxs("label", {
                            className: "wide",
                            children: [
                              "O que deseja registrar? *",
                              o.jsx("select", {
                                value: M ? Te(M) : "",
                                onChange: (F) => {
                                  (_(F.target.value), S(""), X(""));
                                },
                                children: ie.map((F) =>
                                  o.jsxs(
                                    "option",
                                    {
                                      value: Te(F),
                                      children: [
                                        F.label,
                                        " · ",
                                        fe(Y[F.source]),
                                        " disponíveis",
                                      ],
                                    },
                                    Te(F),
                                  ),
                                ),
                              }),
                            ],
                          }),
                          o.jsxs("label", {
                            children: [
                              "Quantidade de peças *",
                              o.jsx("input", {
                                type: "number",
                                required: !0,
                                min: "1",
                                max: se,
                                step: "1",
                                value: j,
                                onChange: (F) => S(F.target.value),
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "movement-summary",
                        children: [
                          o.jsxs("span", {
                            children: [
                              M && $t[M.source],
                              " ",
                              o.jsx("strong", { children: "→" }),
                              " ",
                              M && $t[M.destination],
                            ],
                          }),
                          o.jsxs("strong", {
                            children: [fe(se), " peças disponíveis"],
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: "form-grid",
                        children: o.jsxs("label", {
                          className: "wide",
                          children: [
                            "Observações / resultado da inspeção (opcional)",
                            o.jsx("textarea", {
                              rows: 3,
                              value: O,
                              onChange: (F) => B(F.target.value),
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : o.jsxs("div", {
                    className: "entry-setup",
                    children: [
                      o.jsx(Yl, { size: 24 }),
                      o.jsx("h3", {
                        children: "Nenhuma operação disponível nesta data",
                      }),
                      o.jsx("p", {
                        children:
                          "As peças podem estar instaladas ou rejeitadas. Consulte a rastreabilidade do lote para conferir os registros.",
                      }),
                    ],
                  }),
              o.jsx("div", {
                className: "form-note",
                style: { marginTop: 20 },
                children:
                  "A operação será registrada no histórico. O saldo é validado novamente pelo banco antes de confirmar.",
              }),
            ],
          })
        : o.jsxs("div", {
            className: "entry-setup",
            children: [
              o.jsx(Yl, { size: 24 }),
              o.jsx("h3", {
                children: "Registre primeiro as peças fabricadas",
              }),
              o.jsx("p", {
                children:
                  "O lote reúne peças do mesmo tipo e data de concretagem e permite acompanhar inspeção, liberação e envio.",
              }),
              o.jsx("button", {
                type: "button",
                className: "button secondary",
                onClick: d,
                children: "Registrar lote de fabricação",
              }),
            ],
          }),
      L &&
        o.jsxs("div", {
          className: "error",
          role: "alert",
          children: [o.jsx(ka, { size: 17 }), L],
        }),
      o.jsxs("div", {
        className: "form-actions",
        children: [
          o.jsx("button", {
            className: "button secondary",
            type: "button",
            onClick: l,
            children: "Cancelar",
          }),
          o.jsx("button", {
            className: "button primary",
            disabled: T || !z || !M || !re,
            children: T
              ? o.jsxs(o.Fragment, {
                  children: [
                    o.jsx(yt, { size: 16, className: "spin" }),
                    "Registrando…",
                  ],
                })
              : "Confirmar operação",
          }),
        ],
      }),
    ],
  });
}
function q_({ d: i, onAction: n }) {
  if (i.entries.length) return null;
  const r = [
    {
      kind: "plans",
      title: "Definir metas",
      description: "Informe o total previsto por serviço e tipo de peça.",
      done: !!i.plans.length,
      icon: Mp,
    },
    {
      kind: "teams",
      title: "Cadastrar equipe",
      description: "Identifique a equipe e seu responsável.",
      done: !!i.teams.length,
      icon: Lp,
    },
    {
      kind: "entries",
      title: "Lançar a primeira produção",
      description: "Registre o dia, a atividade e a quantidade executada.",
      done: !1,
      icon: Dg,
    },
  ];
  return o.jsxs("section", {
    className: "setup-guide",
    "aria-label": "Preparação da obra",
    children: [
      o.jsxs("div", {
        children: [
          o.jsx("h2", { children: "Prepare sua obra para começar" }),
          o.jsx("p", {
            children:
              "Os tipos de peças e serviços já estão disponíveis. Faltam estes passos para acompanhar a operação.",
          }),
        ],
      }),
      o.jsx("div", {
        className: "setup-steps",
        children: r.map((l) =>
          o.jsxs(
            "div",
            {
              className: l.done ? "complete" : "",
              children: [
                o.jsx("span", {
                  className: "setup-step-icon",
                  children: l.done
                    ? o.jsx(ui, { size: 20 })
                    : o.jsx(l.icon, { size: 20 }),
                }),
                o.jsx("h3", { children: l.title }),
                o.jsx("p", { children: l.description }),
                l.done
                  ? o.jsx("small", { children: "Concluído" })
                  : o.jsxs("button", {
                      className: "text-button",
                      disabled:
                        l.kind === "entries" &&
                        (!i.plans.length || !i.teams.length),
                      onClick: () => n(l.kind),
                      children: [
                        l.kind === "entries" ? "Registrar produção" : "Começar",
                        o.jsx(dt, { size: 14 }),
                      ],
                    }),
              ],
            },
            l.kind,
          ),
        ),
      }),
    ],
  });
}
function U_() {
  return o.jsx(so, {
    children: o.jsxs(o.Fragment, {
      children: [
        o.jsx("h2", { children: "Crie sua conta como Analista" }),
        o.jsx("p", {
          children:
            "Cadastre seu e-mail e confirme sua conta. Depois, contato@example.invalid poderá definir seu perfil e liberar acesso às obras.",
        }),
        o.jsx("a", {
          href: "/demo/cadastro",
          className: "button primary",
          children: "Criar minha conta",
        }),
      ],
    }),
  });
}

function nv({ mode: i, d: n, f: r }) {
  const d = no(n, r).filter(
      (O) =>
        i !== "wall" ||
        n.services.find((B) => B.id === O.service_id)?.unit === "m",
    ),
    [h, f] = K.useState(""),
    p = d.find((O) => O.id === h) || d[0],
    v = (O) =>
      `${n.services.find((B) => B.id === O.service_id)?.name} · ${n.types.find((B) => B.id === O.type_id)?.name}`;
  if (i === "quality") {
    if (r.front || r.team || r.service) return null;
    const O = r.type || n.types.find((G) => G.id === h)?.id || n.types[0]?.id,
      B = n.lots.filter((G) => G.cast_date <= r.to && G.type_id === O),
      T = {};
    B.forEach((G) => {
      for (const [z, I] of Object.entries(oi(n.movements, G.id, r.to)))
        T[z] = (T[z] || 0) + I;
    });
    const C = Object.values(T).reduce((G, z) => G + z, 0),
      L = [
        "#dc4141",
        "#80a58d",
        "#526859",
        "#dc956a",
        "#a39bb7",
        "#be6c65",
        "#7d9cba",
        "#4e677c",
      ];
    let X = 0;
    return o.jsxs("section", {
      className: "panel analysis-panel",
      children: [
        o.jsxs("div", {
          className: "panel-head",
          children: [
            o.jsxs("div", {
              children: [
                o.jsx("h3", {
                  children: "Distribuição das situações de qualidade",
                }),
                o.jsxs("p", {
                  children: [
                    "Posição em ",
                    Ee(r.to),
                    " · ",
                    n.types.find((G) => G.id === O)?.name || "sem tipo de peça",
                  ],
                }),
              ],
            }),
            !r.type &&
              o.jsx("select", {
                "aria-label": "Tipo de peça na distribuição",
                value: O || "",
                onChange: (G) => f(G.target.value),
                children: n.types.map((G) =>
                  o.jsx("option", { value: G.id, children: G.name }, G.id),
                ),
              }),
          ],
        }),
        o.jsxs("div", {
          className: "quality-layout",
          children: [
            o.jsx("div", {
              className: "donut-wrap",
              children: o.jsxs("svg", {
                viewBox: "0 0 160 160",
                role: "img",
                "aria-label": "Distribuição do estoque por situação",
                children: [
                  o.jsx("circle", {
                    cx: "80",
                    cy: "80",
                    r: "60",
                    fill: "none",
                    stroke: "#f0f0ed",
                    strokeWidth: "20",
                  }),
                  Object.entries($t).map(([G, z], I) => {
                    const Y = C ? ((T[G] || 0) / C) * 100 : 0,
                      ie = X;
                    return (
                      (X += Y),
                      o.jsx(
                        "circle",
                        {
                          cx: "80",
                          cy: "80",
                          r: "60",
                          pathLength: "100",
                          fill: "none",
                          stroke: L[I],
                          strokeWidth: "20",
                          strokeDasharray: `${Y} ${100 - Y}`,
                          strokeDashoffset: -ie,
                          transform: "rotate(-90 80 80)",
                          children: o.jsxs("title", {
                            children: [z, ": ", fe(T[G] || 0), " peças"],
                          }),
                        },
                        G,
                      )
                    );
                  }),
                  o.jsx("text", {
                    x: "80",
                    y: "78",
                    textAnchor: "middle",
                    className: "donut-value",
                    children: fe(C),
                  }),
                  o.jsx("text", {
                    x: "80",
                    y: "99",
                    textAnchor: "middle",
                    className: "donut-label",
                    children: "peças únicas",
                  }),
                ],
              }),
            }),
            o.jsx("div", {
              className: "quality-legend",
              children: Object.entries($t).map(([G, z], I) =>
                o.jsxs(
                  "div",
                  {
                    children: [
                      o.jsx("i", { style: { background: L[I] } }),
                      o.jsx("span", { children: z }),
                      o.jsx("strong", { children: fe(T[G] || 0) }),
                    ],
                  },
                  G,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  }
  if (!p)
    return o.jsx("div", {
      className: "empty chart-empty",
      children: "Sem atividade no escopo selecionado.",
    });
  const y = n.services.find((O) => O.id === p.service_id)?.unit;
  if (i === "productivity") {
    const O = n.teams
        .filter((T) => !r.team || r.team === T.id)
        .map((T) => ({
          name: T.name,
          value: ea(
            p,
            n.entries.filter((C) => C.team_id === T.id),
            r.from,
            r.to,
          ).productivity,
        })),
      B = Math.max(1, ...O.map((T) => T.value || 0));
    return o.jsxs("section", {
      className: "panel analysis-panel",
      children: [
        o.jsxs("div", {
          className: "panel-head",
          children: [
            o.jsxs("div", {
              children: [
                o.jsx("h3", { children: "Produtividade por equipe" }),
                o.jsx("p", {
                  children:
                    "Mesma atividade, tipo e unidade · produção total ÷ HH total",
                }),
              ],
            }),
            o.jsx("select", {
              "aria-label": "Atividade de produtividade",
              value: p.id,
              onChange: (T) => f(T.target.value),
              children: d.map((T) =>
                o.jsx("option", { value: T.id, children: v(T) }, T.id),
              ),
            }),
          ],
        }),
        o.jsx("div", {
          className: "horizontal-chart",
          children: O.map((T) =>
            o.jsxs(
              "div",
              {
                children: [
                  o.jsx("span", { children: T.name }),
                  o.jsx("div", {
                    className: "progress-track",
                    children: o.jsx("i", {
                      style: { width: ((T.value || 0) / B) * 100 + "%" },
                    }),
                  }),
                  o.jsx("strong", {
                    children:
                      T.value === null
                        ? "Sem HH"
                        : fe(T.value, 3) + " " + y + "/h",
                  }),
                ],
              },
              T.name,
            ),
          ),
        }),
      ],
    });
  }
  const _ = n.entries.filter(
      (O) =>
        O.plan_id === p.id &&
        O.date <= r.to &&
        (!r.team || O.team_id === r.team),
    ),
    S = Array.from(
      new Set(_.filter((O) => O.date >= r.from).map((O) => O.date)),
    )
      .sort()
      .map((O) => ({
        date: O,
        value: _.filter((B) => B.date <= O).reduce(
          (B, T) => B + Number(T.quantity),
          0,
        ),
      })),
    w = Math.max(1, ...S.map((O) => O.value)) * 1.1,
    k = S.map(
      (O, B) =>
        `${50 + (B / Math.max(1, S.length - 1)) * 900},${210 - (O.value / w) * 170}`,
    );
  return o.jsxs("section", {
    className: "panel analysis-panel",
    children: [
      o.jsxs("div", {
        className: "panel-head",
        children: [
          o.jsxs("div", {
            children: [
              o.jsx("h3", {
                children:
                  i === "wall"
                    ? "Evolução do muro concluído"
                    : "Evolução da produção acumulada",
              }),
              o.jsxs("p", {
                children: [v(p), " · ", y, " · acumulado até cada data"],
              }),
            ],
          }),
          o.jsx("select", {
            "aria-label": "Atividade do gráfico acumulado",
            value: p.id,
            onChange: (O) => f(O.target.value),
            children: d.map((O) =>
              o.jsx("option", { value: O.id, children: v(O) }, O.id),
            ),
          }),
        ],
      }),
      S.length
        ? o.jsx(Zl, {
            label: "Gráfico de evolução acumulada",
            hint: "Deslize o gráfico para ver todo o período.",
            children: o.jsxs("svg", {
              className: "line-chart",
              viewBox: "0 0 1000 255",
              role: "img",
              "aria-label": "Evolução acumulada",
              children: [
                o.jsx("defs", {
                  children: o.jsxs("linearGradient", {
                    id: "area",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      o.jsx("stop", {
                        offset: "0%",
                        stopColor: "#df272c",
                        stopOpacity: ".25",
                      }),
                      o.jsx("stop", {
                        offset: "100%",
                        stopColor: "#df272c",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
                [0, 0.5, 1].map((O) =>
                  o.jsxs(
                    "g",
                    {
                      children: [
                        o.jsx("line", {
                          x1: "50",
                          y1: 210 - O * 170,
                          x2: "950",
                          y2: 210 - O * 170,
                          stroke: "#e9e9e5",
                          strokeDasharray: "4 4",
                        }),
                        o.jsx("text", {
                          x: "40",
                          y: 214 - O * 170,
                          textAnchor: "end",
                          fontSize: "11",
                          fill: "#81857f",
                          children: fe(w * O),
                        }),
                      ],
                    },
                    O,
                  ),
                ),
                o.jsx("polygon", {
                  points: `50,210 ${k.join(" ")} ${50 + (S.length > 1 ? 900 : 0)},210`,
                  fill: "url(#area)",
                }),
                o.jsx("polyline", {
                  points: k.join(" "),
                  fill: "none",
                  stroke: "#df272c",
                  strokeWidth: "3",
                }),
                S.map((O, B) => {
                  const T = 50 + (B / Math.max(1, S.length - 1)) * 900,
                    C = 210 - (O.value / w) * 170;
                  return o.jsxs(
                    "g",
                    {
                      children: [
                        o.jsx("circle", {
                          cx: T,
                          cy: C,
                          r: "4",
                          fill: "#df272c",
                          children: o.jsxs("title", {
                            children: [Ee(O.date), ": ", fe(O.value), " ", y],
                          }),
                        }),
                        (B % Math.ceil(S.length / 10) === 0 ||
                          B === S.length - 1) &&
                          o.jsxs("text", {
                            x: T,
                            y: "242",
                            textAnchor: "middle",
                            fontSize: "11",
                            fill: "#81857f",
                            children: [
                              O.date.slice(8),
                              "/",
                              O.date.slice(5, 7),
                            ],
                          }),
                      ],
                    },
                    O.date,
                  );
                }),
              ],
            }),
          })
        : o.jsx("div", {
            className: "empty",
            children: "Sem lançamentos no período selecionado.",
          }),
    ],
  });
}
function M_(i, n, r, l, d) {
  const h = i.utils.book_new(),
    f = no(n, l),
    p = (T, C) => n[T].find((L) => L.id === C),
    v = n.entries.filter(
      (T) =>
        T.date >= l.from &&
        T.date <= l.to &&
        (!l.team || T.team_id === l.team) &&
        f.some((C) => C.id === T.plan_id),
    ),
    y = f.map((T) => {
      const C = ea(T, n.entries, l.from, l.to, l.team);
      return {
        Serviço: p("services", T.service_id)?.name,
        Tipo: p("types", T.type_id)?.name,
        Trecho: p("fronts", T.front_id)?.name,
        Unidade: p("services", T.service_id)?.unit,
        "Total previsto": T.total,
        "Meta do período": C.target,
        "Realizado no período": C.quantity,
        "Acumulado até a data final": C.accumulated,
        Saldo: C.balance,
        "Cumprimento da meta (%)": C.achievement ?? "Sem meta definida",
        "Avanço (%)": C.progress ?? "Sem previsto",
        "Homem-hora": C.hh,
        "Produtividade (unidade/h)": C.productivity ?? "Sem homem-hora",
      };
    }),
    _ = (T) =>
      T.map((C) => {
        const L = n.plans.find((G) => G.id === C.plan_id),
          X = ea(L, n.entries, "0001-01-01", C.date, l.team);
        return {
          Data: Ee(C.date),
          "Frente de serviço": p("services", L.service_id)?.stage,
          Trecho: p("fronts", L.front_id)?.name,
          Equipe: p("teams", C.team_id)?.name,
          Serviço: p("services", L.service_id)?.name,
          Tipo: p("types", L.type_id)?.name,
          Unidade: p("services", L.service_id)?.unit,
          "Meta diária": C.target,
          Realizado: C.quantity,
          "Acumulado até o dia": X.accumulated,
          "Saldo até o dia": X.balance,
          Efetivo: C.headcount,
          "Horas normais por colaborador": C.normal_hours,
          "Horas extras por colaborador": C.extra_hours,
          "Homem-hora": C.hh,
          "Produtividade (unidade/h)": C.hh
            ? C.quantity / C.hh
            : "Sem homem-hora",
          "Volume de concreto (m³)": C.volume ?? "",
          Observações: [
            C.notes,
            C.interference && C.interference !== C.notes ? C.interference : "",
          ]
            .filter(Boolean)
            .join(" · "),
        };
      }),
    j = !!(l.team || l.service || l.front);
  function S(T) {
    return n.lots
      .filter(
        (C) =>
          C.cast_date <= l.to &&
          (!l.type || C.type_id === l.type) &&
          p("types", C.type_id)?.category === T,
      )
      .map((C) => {
        const L = oi(n.movements, C.id, l.to);
        return {
          Lote: C.code,
          Tipo: p("types", C.type_id)?.name,
          "Data de concretagem": Ee(C.cast_date),
          "Quantidade produzida (peças únicas)": C.quantity,
          ...Object.fromEntries(
            Object.entries($t).map(([X, G]) => [G, L[X] || 0]),
          ),
          "Retrabalhos realizados (eventos em peças)": n.movements
            .filter(
              (X) =>
                X.lot_id === C.id &&
                X.destination === "reinspecao" &&
                X.date <= l.to,
            )
            .reduce((X, G) => X + Number(G.quantity), 0),
          "Enviadas ao campo (acumulado)": n.movements
            .filter(
              (X) =>
                X.lot_id === C.id &&
                X.destination === "campo" &&
                X.date <= l.to,
            )
            .reduce((X, G) => X + Number(G.quantity), 0),
        };
      });
  }
  function w(T, C) {
    const L = i.utils.aoa_to_sheet([
      ["Concreserv", T],
      [r?.name || "Obra selecionada", d ? "DEMONSTRAÇÃO" : "DADOS REAIS"],
      ["Período", Ee(l.from) + " a " + Ee(l.to)],
      ["Trecho da obra", l.front ? p("fronts", l.front)?.name : "Todos"],
      ["Equipe", l.team ? p("teams", l.team)?.name : "Todas"],
      ["Serviço", l.service ? p("services", l.service)?.name : "Todos"],
      ["Tipo", l.type ? p("types", l.type)?.name : "Todos"],
      [],
    ]);
    for (const X of C)
      (i.utils.sheet_add_aoa(L, [[X.title]], { origin: -1 }),
        X.rows.length
          ? i.utils.sheet_add_json(L, X.rows, { origin: -1 })
          : i.utils.sheet_add_aoa(
              L,
              [["Sem registros no escopo selecionado."]],
              { origin: -1 },
            ),
        i.utils.sheet_add_aoa(L, [[]], { origin: -1 }));
    ((L["!cols"] = Array.from({ length: 25 }, () => ({ wch: 24 }))),
      i.utils.book_append_sheet(h, L, T));
  }
  const k = n.plans.length > 0 && n.plans.every((T) => Number(T.weight) > 0),
    O = n.plans.reduce((T, C) => T + Number(C.weight || 0), 0);
  w("Dashboard Geral", [
    {
      title: "Avanço físico geral — obra completa até a data final",
      rows: [
        {
          "Avanço ponderado (%)": k
            ? n.plans.reduce(
                (T, C) =>
                  T +
                  ((ea(C, n.entries, "0001-01-01", l.to).progress || 0) *
                    C.weight) /
                    O,
                0,
              )
            : "Pesos ainda não configurados",
        },
      ],
    },
    {
      title:
        "Metas e desempenho por serviço, tipo e trecho — sem somar unidades distintas",
      rows: y,
    },
  ]);
  for (const T of ["Placas", "Pilares"]) {
    const C = "Fabricação de " + T.toLowerCase();
    w("Produção de " + T, [
      {
        title: "Lançamentos diários de fabricação",
        rows: _(
          v.filter(
            (L) =>
              p("services", n.plans.find((X) => X.id === L.plan_id)?.service_id)
                ?.stage === C,
          ),
        ),
      },
      {
        title:
          "Qualidade e estoque — posição na data final, em peças por lote e tipo",
        rows: j
          ? [
              {
                Aviso:
                  "Estoque não atribuído a equipe, serviço ou trecho. Limpe esses filtros para incluir os saldos.",
              },
            ]
          : S(T),
      },
    ]);
  }
  w("Montagem em Campo", [
    {
      title:
        "Escavação, instalação, fixação, grauteamento, montagem e metros concluídos",
      rows: _(
        v.filter(
          (T) =>
            p("services", n.plans.find((C) => C.id === T.plan_id)?.service_id)
              ?.stage === "Execução em campo",
        ),
      ),
    },
  ]);
  const B = f
    .flatMap((T) =>
      n.teams
        .filter((C) => !l.team || C.id === l.team)
        .map((C) => {
          const L = ea(
            T,
            n.entries.filter((X) => X.team_id === C.id),
            l.from,
            l.to,
          );
          return {
            s: L,
            row: {
              Equipe: C.name,
              Serviço: p("services", T.service_id)?.name,
              Tipo: p("types", T.type_id)?.name,
              Trecho: p("fronts", T.front_id)?.name,
              Unidade: p("services", T.service_id)?.unit,
              Produção: L.quantity,
              "Homem-hora": L.hh,
              "Produtividade (unidade/h)": L.productivity ?? "Sem homem-hora",
            },
          };
        }),
    )
    .filter((T) => T.s.quantity || T.s.hh)
    .map((T) => T.row);
  return (
    w("Efetivo e Produtividade", [
      {
        title:
          "Produtividade consolidada = produção total ÷ homem-hora total, por atividade e equipe",
        rows: B,
      },
      {
        title:
          "Efetivo por lançamento — não somar como pessoas únicas; horas por colaborador",
        rows: _(v),
      },
    ]),
    h
  );
}
const Jc = [
    {
      id: "resumo",
      label: "Dashboard geral",
      hint: "Resumo e alertas da obra",
      icon: Lg,
      pages: ["dashboard"],
    },
    {
      id: "producao",
      label: "Produção e montagem",
      hint: "Placas, pilares e campo",
      icon: Zc,
      pages: ["placas", "pilares", "campo"],
    },
    {
      id: "pecas",
      label: "Peças e estoque",
      hint: "Inspeções, saldos e envios",
      icon: Yl,
      pages: ["qualidade", "estoque", "movimentacoes"],
    },
    {
      id: "obra",
      label: "Organizar obra",
      hint: "Metas e equipes",
      icon: ei,
      pages: ["planejamento", "equipes"],
    },
    {
      id: "controle",
      label: "Controle",
      hint: "Obras, usuários e acessos",
      icon: Kg,
      pages: ["obras", "usuarios"],
    },
    {
      id: "relatorios",
      label: "Relatórios",
      hint: "Resultados e histórico",
      icon: Dp,
      pages: ["relatorios", "historico"],
    },
  ],
  Kl = {
    dashboard: {
      label: "Dashboard geral",
      description:
        "Veja o andamento da obra e os pontos que precisam de atenção.",
    },
    placas: {
      label: "Produção de placas",
      description: "Registre e acompanhe os serviços de fabricação das placas.",
    },
    pilares: {
      label: "Produção de pilares",
      description:
        "Registre e acompanhe os serviços de fabricação dos pilares.",
    },
    campo: {
      label: "Montagem em campo",
      description: "Acompanhe escavação, instalação, fixação e montagem.",
    },
    qualidade: {
      label: "Qualidade e inspeções",
      description: "Confira as peças aprovadas, rejeitadas e em retrabalho.",
    },
    estoque: {
      label: "Estoque",
      description:
        "Veja as peças disponíveis na fábrica, em campo e instaladas.",
    },
    movimentacoes: {
      label: "Movimentações",
      description:
        "Consulte inspeções, liberações, envios e instalações registrados.",
    },
    obras: {
      label: "Obras",
      description:
        "Cadastre e acompanhe suas obras. Administradores podem editar e excluir as obras sob sua responsabilidade.",
    },
    planejamento: {
      label: "Planejamento e metas",
      description: "Defina o total previsto e a meta diária de cada serviço.",
    },
    usuarios: {
      label: "Usuários e acessos",
      description:
        "Consulte as contas e escolha quais obras cada analista pode acompanhar.",
    },
    equipes: {
      label: "Equipes",
      description:
        "Organize as equipes ou consulte seu efetivo e produtividade.",
    },
    relatorios: {
      label: "Resultados",
      description: "Consulte os resultados e exporte os dados da obra.",
    },
    historico: {
      label: "Histórico de alterações",
      description: "Veja quem alterou os registros e quando.",
    },
  };
function sv(i) {
  return Jc.find((n) => n.pages.includes(i)) || Jc[0];
}
function L_({ page: i, onNavigate: n }) {
  const r = sv(i);
  return o.jsx("nav", {
    "aria-label": "Menu principal",
    className: "main-navigation",
    children: Jc.map((l) =>
      o.jsxs(
        "button",
        {
          className: "nav-item category-nav " + (r.id === l.id ? "active" : ""),
          "aria-label": l.label,
          "aria-current": r.id === l.id ? "page" : void 0,
          onClick: () => n(r.id === l.id ? i : l.pages[0]),
          children: [
            o.jsx(l.icon, { size: 19 }),
            o.jsxs("span", {
              children: [
                o.jsx("strong", { children: l.label }),
                o.jsx("small", { children: l.hint }),
              ],
            }),
            o.jsx(cr, { size: 14 }),
          ],
        },
        l.id,
      ),
    ),
  });
}
function B_({ page: i, onNavigate: n, canManageUsers: r = !1 }) {
  const l = sv(i),
    d = l.pages.filter((h) => h !== "usuarios" || r);
  return d.length < 2
    ? null
    : o.jsx("nav", {
        className: "section-navigation",
        "aria-label": "Páginas de " + l.label,
        children: d.map((h) =>
          o.jsx(
            "button",
            {
              onClick: () => n(h),
              "aria-current": i === h ? "page" : void 0,
              className: i === h ? "active" : "",
              children: Kl[h].label,
            },
            h,
          ),
        ),
      });
}
function Rc(i, n, r, l = "producao") {
  let d = { ...i };
  if (
    ((["qualidade", "estoque", "movimentacoes"].includes(n) ||
      (n === "relatorios" && ["estoque", "qualidade"].includes(l))) &&
      (d = { ...d, front: "", team: "", service: "" }),
    n === "historico" || n === "obras" || n === "usuarios")
  )
    return { ...d, front: "", team: "", service: "", type: "" };
  const h =
    n === "placas"
      ? "Fabricação de placas"
      : n === "pilares"
        ? "Fabricação de pilares"
        : n === "campo"
          ? "Execução em campo"
          : "";
  return (
    h &&
      (d.service &&
        r.services.find((f) => f.id === d.service)?.stage !== h &&
        (d.service = ""),
      d.type &&
        h !== "Execução em campo" &&
        r.types.find((f) => f.id === d.type)?.category !==
          (n === "placas" ? "Placas" : "Pilares") &&
        (d.type = "")),
    d
  );
}
function iv(i, n, r) {
  return i.movements
    .filter(
      (l) =>
        l.date >= n.from && l.date <= n.to && r.some((d) => d.id === l.lot_id),
    )
    .map((l) => ({
      ...l,
      lot_code: i.lots.find((d) => d.id === l.lot_id)?.code,
      type_name: r.find((d) => d.id === l.lot_id)?.type_name,
    }))
    .sort(
      (l, d) =>
        d.date.localeCompare(l.date) ||
        String(d.created_at || "").localeCompare(String(l.created_at || "")),
    );
}
function H_({
  page: i,
  d: n,
  f: r,
  rows: l,
  admin: d,
  onAction: h,
  onDetails: f,
  onClear: p,
}) {
  const v = !!(r.front || r.team || r.service),
    y = [
      {
        key: "code",
        label: "Lote / tipo",
        render: (j) =>
          o.jsxs(o.Fragment, {
            children: [
              o.jsx("strong", { children: j.code }),
              o.jsxs("small", {
                children: [j.type_name, " · concretagem ", Ee(j.cast_date)],
              }),
            ],
          }),
      },
      ...(i === "qualidade"
        ? [
            { key: "inspecao", label: "Aguardando inspeção" },
            { key: "aprovado", label: "Aprovadas" },
            { key: "retrabalho", label: "Em retrabalho" },
            { key: "reinspecao", label: "Em reinspeção" },
            { key: "rejeitado", label: "Rejeitadas" },
            { key: "liberado", label: "Liberadas na fábrica" },
          ]
        : [
            { key: "quantity", label: "Produzidas" },
            { key: "liberado", label: "Disponíveis na fábrica" },
            { key: "campo", label: "Disponíveis em campo" },
            { key: "instalado", label: "Instaladas" },
          ]),
    ],
    _ = (j) =>
      f("Rastreabilidade · " + j.code, [
        {
          Lote: j.code,
          Tipo: j.type_name,
          "Data de concretagem": Ee(j.cast_date),
          "Peças produzidas": j.quantity,
          ...Object.fromEntries(
            Object.entries($t).map(([S, w]) => [w, j[S] || 0]),
          ),
        },
        ...n.movements
          .filter((S) => S.lot_id === j.id && S.date <= r.to)
          .sort(
            (S, w) =>
              S.date.localeCompare(w.date) ||
              String(S.created_at || "").localeCompare(
                String(w.created_at || ""),
              ),
          )
          .map((S) => ({
            Data: Ee(S.date),
            Origem: $t[S.source] || "Fabricação",
            Destino: $t[S.destination],
            Quantidade: S.quantity,
            Responsável: S.responsible,
            Observações: S.notes,
          })),
      ]);
  return v
    ? o.jsxs("div", {
        className: "empty",
        children: [
          o.jsx(Yl, {}),
          o.jsx("h3", {
            children: "Consulte o estoque por obra e tipo de peça",
          }),
          o.jsx("p", {
            children:
              "Os saldos não são atribuídos a equipe, serviço ou trecho.",
          }),
          o.jsx("button", {
            className: "button secondary",
            onClick: p,
            children: "Ajustar filtros",
          }),
        ],
      })
    : o.jsxs(o.Fragment, {
        children: [
          o.jsxs("div", {
            className: "section-line",
            children: [
              o.jsxs("h3", {
                children: [
                  i === "qualidade"
                    ? "Situação de qualidade por lote"
                    : i === "movimentacoes"
                      ? "Operações registradas"
                      : "Saldo de peças por lote",
                  o.jsx("span", {
                    children:
                      i === "movimentacoes"
                        ? `${Ee(r.from)} a ${Ee(r.to)}`
                        : `Posição em ${Ee(r.to)} · quantidades em peças`,
                  }),
                ],
              }),
              d &&
                o.jsxs("div", {
                  className: "inline-actions",
                  children: [
                    i !== "movimentacoes" &&
                      o.jsxs("button", {
                        className: "button secondary",
                        onClick: () => h("lots"),
                        children: [
                          o.jsx(Wa, { size: 16 }),
                          "Registrar fabricação",
                        ],
                      }),
                    o.jsxs("button", {
                      className: "button primary",
                      onClick: () => h("move"),
                      children: [
                        o.jsx(Wa, { size: 16 }),
                        i === "qualidade"
                          ? "Registrar inspeção"
                          : "Movimentar peças",
                      ],
                    }),
                  ],
                }),
            ],
          }),
          i === "movimentacoes"
            ? o.jsx(Ca, {
                rows: iv(n, r, l),
                columns: [
                  { key: "date", label: "Data", render: (j) => Ee(j.date) },
                  {
                    key: "lot_code",
                    label: "Lote / tipo",
                    render: (j) =>
                      o.jsxs(o.Fragment, {
                        children: [
                          o.jsx("strong", { children: j.lot_code }),
                          o.jsx("small", { children: j.type_name }),
                        ],
                      }),
                  },
                  {
                    key: "source",
                    label: "Origem",
                    render: (j) => $t[j.source] || "Fabricação",
                  },
                  {
                    key: "destination",
                    label: "Destino",
                    render: (j) => $t[j.destination],
                  },
                  { key: "quantity", label: "Peças" },
                  { key: "responsible", label: "Responsável" },
                  { key: "notes", label: "Observações" },
                ],
              })
            : o.jsx(Ca, {
                rows: l,
                columns: y,
                actions: (j) =>
                  o.jsx("button", {
                    className: "icon-button",
                    "aria-label": "Ver histórico do lote",
                    title: "Situação completa e histórico do lote",
                    onClick: () => _(j),
                    children: o.jsx(qp, { size: 17 }),
                  }),
              }),
          o.jsx("p", {
            className: "page-footnote",
            children:
              i === "movimentacoes"
                ? "Cada operação mantém a origem, o destino e o responsável."
                : i === "qualidade"
                  ? "Peça aprovada ainda precisa ser liberada para montagem. Abra o histórico do lote para ver todas as etapas."
                  : "O envio reduz o saldo da fábrica; a instalação consome o saldo em campo. O histórico mostra todas as situações do lote.",
          }),
        ],
      });
}
function $_({
  d: i,
  f: n,
  view: r,
  onView: l,
  entries: d,
  productivity: h,
  admin: f,
  onAdd: p,
  actions: v,
}) {
  return o.jsxs(o.Fragment, {
    children: [
      o.jsxs("nav", {
        className: "tabs",
        "aria-label": "Consultas de equipes",
        children: [
          o.jsx("button", {
            className: r === "equipes" ? "active" : "",
            "aria-current": r === "equipes" ? "page" : void 0,
            onClick: () => l("equipes"),
            children: "Equipes cadastradas",
          }),
          o.jsx("button", {
            className: r === "desempenho" ? "active" : "",
            "aria-current": r === "desempenho" ? "page" : void 0,
            onClick: () => l("desempenho"),
            children: "Efetivo e produtividade",
          }),
        ],
      }),
      r === "equipes"
        ? o.jsxs(o.Fragment, {
            children: [
              o.jsxs("div", {
                className: "section-line",
                children: [
                  o.jsxs("h3", {
                    children: [
                      "Equipes da obra",
                      o.jsx("span", {
                        children:
                          "Quem executa os serviços e quem responde pela equipe.",
                      }),
                    ],
                  }),
                  f &&
                    o.jsxs("button", {
                      className: "button primary",
                      onClick: p,
                      children: [o.jsx(Wa, { size: 16 }), "Nova equipe"],
                    }),
                ],
              }),
              o.jsx(Ca, {
                rows: i.teams,
                columns: [
                  { key: "name", label: "Equipe" },
                  { key: "leader", label: "Responsável" },
                ],
                actions: v,
              }),
            ],
          })
        : o.jsxs(o.Fragment, {
            children: [
              o.jsx(nv, { mode: "productivity", d: i, f: n }),
              o.jsx(Ca, {
                rows: h,
                columns: [
                  { key: "team_name", label: "Equipe" },
                  { key: "activity", label: "Atividade / tipo / trecho" },
                  {
                    key: "quantity",
                    label: "Realizado",
                    render: (y) => `${fe(y.quantity, 2)} ${y.unit}`,
                  },
                  {
                    key: "hh",
                    label: "Homem-hora",
                    render: (y) => `${fe(y.hh, 2)} h`,
                  },
                  {
                    key: "productivity",
                    label: "Produtividade",
                    render: (y) =>
                      y.productivity === null
                        ? "Sem horas definidas"
                        : `${fe(y.productivity, 3)} ${y.unit}/h`,
                  },
                ],
              }),
              o.jsxs("details", {
                className: "support-details",
                children: [
                  o.jsx("summary", {
                    children: "Consultar efetivo e horas por lançamento",
                  }),
                  o.jsx(Ca, {
                    rows: d,
                    columns: [
                      { key: "date", label: "Data", render: (y) => Ee(y.date) },
                      { key: "team_name", label: "Equipe" },
                      { key: "activity", label: "Serviço" },
                      { key: "headcount", label: "Efetivo" },
                      { key: "normal_hours", label: "Horas normais / pessoa" },
                      { key: "extra_hours", label: "Horas extras / pessoa" },
                      { key: "hh", label: "Homem-hora" },
                    ],
                  }),
                  o.jsx("p", {
                    className: "page-footnote",
                    children:
                      "O efetivo é informado por lançamento e não deve ser somado como pessoas únicas.",
                  }),
                ],
              }),
            ],
          }),
    ],
  });
}
const V_ = K.lazy(() =>
    ir(() => import("./users-chart-original-v2.js"), __vite__mapDeps([0, 1])).then(
      (i) => ({ default: i.UsersView }),
    ),
  ),
  kp = () => Sa().slice(0, 7) + "-01";
async function zc(i, n) {
  let r = [],
    l = 0;
  for (;;) {
    let d = Pe.from(i)
      .select("*")
      .order("id")
      .range(l, l + 999);
    n && (d = d.eq("work_id", n));
    const { data: h, error: f } = await d;
    if (f) throw f;
    if (((r = r.concat(h || [])), !h || h.length < 1e3)) return r;
    l += 1e3;
  }
}
function redirectRemovedDemo() {
  if (location.pathname.startsWith("/demonstracao"))
    history.replaceState({}, "", "/demo/entrar");
}
redirectRemovedDemo();

function G_() {
  const [i, n] = K.useState(false),
    [r, l] = K.useState("equipes"),
    [d, h] = K.useState(!1),
    [f, p] = K.useState(null),
    [v, y] = K.useState(),
    [_, j] = K.useState(!1),
    [S, w] = K.useState(),
    [k, O] = K.useState(null),
    [B, T] = K.useState(""),
    [C, L] = K.useState(null),
    [X, G] = K.useState(!1),
    [z, I] = K.useState(
      location.pathname.split("/").filter(Boolean).pop() || "dashboard",
    ),
    [Y, ie] = K.useState(si),
    [Te, M] = K.useState(""),
    [se, re] = K.useState(!1),
    [F, ge] = K.useState(0),
    [$, ee] = K.useState(""),
    [oe, Se] = K.useState(""),
    [P, x] = K.useState(!1),
    [H, te] = K.useState(!1),
    [ae, be] = K.useState("metas"),
    [de, De] = K.useState("producao"),
    [W, Ne] = K.useState({
      from: kp(),
      to: Sa(),
      front: "",
      team: "",
      service: "",
      type: "",
    }),
    [ze, zt] = K.useState(null),
    [Cn, kn] = K.useState(null),
    [wt, ta] = K.useState(null),
    [ma, os] = K.useState(!1),
    [accountPermissions, setAccountPermissions] = K.useState(null),
    [deleteWorkName, setDeleteWorkName] = K.useState(""),
    [deletePending, setDeletePending] = K.useState(false),
    deleteInFlight = K.useRef(false),
    _r = [
      "/",
      "/demo/entrar",
      "/demo",
      "/demo/cadastro",
      "/demo/redefinir-senha",
    ].includes(location.pathname),
    tn = location.pathname === "/demo/redefinir-senha",
    Dt = (b) => {
      (history.pushState({}, "", b),
        I(b.split("/").filter(Boolean).pop() || "dashboard"));
    },
    Vt = (b, A = "equipes") => {
      (x(!1),
        be("metas"),
        te(!1),
        b === "equipes" && l(A),
        Ne((ne) =>
          b === "equipes" && A === "equipes"
            ? { ...ne, front: "", team: "", service: "", type: "" }
            : Rc(ne, b, Y, de),
        ),
        Dt(
          i
            ? "/demonstracao/" + b
            : Gt || (b === "usuarios" && Ra)
              ? "/demo/" + b
              : b === "dashboard"
                ? "/demo/consulta"
                : "/demo/consulta/" + b,
        ));
    },
    io = () => {
      (n(false), ie(si()), M(""), ee(""), Dt("/demo/entrar"));
    },
    di = () => {
      (ie(si()),
        M(""),
        n(!1),
        ee(""),
        Ne({
          from: kp(),
          to: Sa(),
          front: "",
          team: "",
          service: "",
          type: "",
        }),
        Dt("/demo/entrar"));
    },
    Qe = (b) => {
      (Se(b), setTimeout(() => Se(""), 5e3));
    };
  (K.useEffect(() => {
    if (!window.matchMedia) return;
    const b = window.matchMedia("(max-width: 1100px)"),
      A = () => {
        b.matches || x(!1);
      };
    return (
      b.addEventListener("change", A),
      () => b.removeEventListener("change", A)
    );
  }, []),
    K.useEffect(() => {
      if (!P) return;
      const b = document.activeElement,
        A = document.getElementById("primary-sidebar"),
        ne = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const ue = () =>
        A?.querySelector(".mobile-close")?.focus({ preventScroll: !0 });
      let Xe = requestAnimationFrame(() => {
        Xe = requestAnimationFrame(ue);
      });
      const et = (Ze) => {
        Ze.target === A &&
          Ze.propertyName === "transform" &&
          !A?.contains(document.activeElement) &&
          ue();
      };
      A?.addEventListener("transitionend", et);
      const Ot = () =>
          Array.from(
            A?.querySelectorAll("button:not(:disabled),a[href]") || [],
          ).filter((Ze) => Ze.getClientRects().length > 0),
        Nt = (Ze) => {
          if (Ze.key === "Escape") (Ze.preventDefault(), x(!1));
          else if (Ze.key === "Tab") {
            const Ct = Ot(),
              kt = Ct[0],
              na = Ct[Ct.length - 1];
            A?.contains(document.activeElement)
              ? Ze.shiftKey && document.activeElement === kt
                ? (Ze.preventDefault(), na?.focus())
                : !Ze.shiftKey &&
                  document.activeElement === na &&
                  (Ze.preventDefault(), kt?.focus())
              : (Ze.preventDefault(), (Ze.shiftKey ? na : kt)?.focus());
          }
        };
      return (
        document.addEventListener("keydown", Nt),
        () => {
          (cancelAnimationFrame(Xe),
            A?.removeEventListener("transitionend", et),
            (document.body.style.overflow = ne),
            document.removeEventListener("keydown", Nt),
            b?.isConnected && b.focus());
        }
      );
    }, [P]),
    K.useEffect(() => {
      const {
        data: { subscription: b },
      } = Pe.auth.onAuthStateChange((ne, ue) => {
        (L(ue?.user || null),
          G(!0),
          ne === "PASSWORD_RECOVERY" && ue?.access_token
            ? (p(ue),
              location.pathname !== "/demo/redefinir-senha" &&
                Dt("/demo/redefinir-senha"))
            : (ne === "SIGNED_IN" || ne === "SIGNED_OUT") && p(null));
      });
      Pe.auth.getSession().then(({ data: ne, error: ue }) => {
        (ue &&
          ee("Não foi possível validar sua sessão. Tente entrar novamente."),
          L(ne.session?.user || null),
          G(!0));
      });
      const A = () => {
        redirectRemovedDemo();
        (I(location.pathname.split("/").filter(Boolean).pop() || "dashboard"),
          n(false));
      };
      return (
        window.addEventListener("popstate", A),
        () => {
          (b.unsubscribe(), window.removeEventListener("popstate", A));
        }
      );
    }, []),
    K.useEffect(() => {
      let b = !0;
      if (!(!X || location.pathname === "/ativar-conta")) {
        if ((h(!1), i)) {
          (ie(w_()),
            M("demo"),
            re(!1),
            Ne({
              from: "2026-11-01",
              to: "2026-11-13",
              front: "",
              team: "",
              service: "",
              type: "",
            }));
          return;
        }
        if (!C) {
          setAccountPermissions(null);
          (ie(si()), M(""));
          return;
        }
        return (
          re(!0),
          Promise.all([
            zc("cc_works"),
            Pe.from("cc_members").select("*"),
            Pe.from("cc_operators").select("*"),
            Pe.rpc("cc_account_permissions"),
          ])
            .then(([A, ne, ue, permissionsResult]) => {
              if (ne.error) throw ne.error;
              if (ue.error) throw ue.error;
              if (permissionsResult.error) throw permissionsResult.error;
              if (
                !permissionsResult.data ||
                typeof permissionsResult.data.is_staff !== "boolean"
              )
                throw new Error("Não foi possível verificar suas permissões.");
              if (b) setAccountPermissions(permissionsResult.data);
              b &&
                (ie((Xe) => ({
                  ...si(),
                  works: A,
                  members: ne.data || [],
                  operators: ue.data || [],
                })),
                h(!0),
                M((Xe) => (A.some((et) => et.id === Xe) ? Xe : A[0]?.id || "")),
                ee(""));
            })
            .catch((A) => b && ee(A.message))
            .finally(() => b && re(!1)),
          () => {
            b = !1;
          }
        );
      }
    }, [C?.id, i, X]),
    K.useEffect(() => {
      let b = !0;
      if (i || !C || !Te) return;
      (re(!0), ee(""));
      const A = [
        "fronts",
        "teams",
        "types",
        "services",
        "plans",
        "entries",
        "entry_photos",
        "lots",
        "movements",
        "audit",
      ];
      return (
        Promise.all(A.map((ne) => zc("cc_" + ne, Te)))
          .then((ne) => {
            b &&
              ie((ue) => ({
                ...ue,
                ...Object.fromEntries(A.map((Xe, et) => [Xe, ne[et]])),
              }));
          })
          .catch((ne) => b && ee(ne.message))
          .finally(() => b && re(!1)),
        () => {
          b = !1;
        }
      );
    }, [Te, C?.id, i, F]),
    K.useEffect(() => {
      let b = !0;
      if (!C || i) {
        O(!1);
        return;
      }
      return (
        O(null),
        T(""),
        Pe.rpc("cc_password_change_required").then(({ data: A, error: ne }) => {
          b &&
            (ne
              ? T(
                  "Não foi possível verificar a segurança da sua conta. Recarregue para tentar novamente.",
                )
              : (O(!!A), !A && flushDeletedPhotos(Pe)));
        }),
        () => {
          b = !1;
        }
      );
    }, [C?.id, i]));
  const ro = i ? "demo" : Y.members.find((b) => b.work_id === Te)?.role,
    pa = accountPermissions?.is_staff === true,
    Gt = pa || ro === "admin",
    Ra = !i && accountPermissions?.can_manage_users === true,
    lo = Y.works.filter(
      (b) =>
        pa || Y.members.some((A) => A.work_id === b.id && A.role === "admin"),
    ),
    Rn = Gt || (z === "usuarios" && Ra);
  K.useEffect(() => {
    if (
      C &&
      !i &&
      d &&
      !se &&
      !tn &&
      location.pathname !== "/confirmar-email"
    ) {
      const b = pa || Y.members.some((A) => A.role === "admin");
      if (z === "usuarios" && !Ra) {
        (Dt("/demo/consulta"),
          Qe("A gestão de usuários é restrita aos administradores."));
        return;
      }
      location.pathname === "/demo/entrar" ||
      location.pathname === "/demo" ||
      location.pathname === "/" ||
      location.pathname === "/demo/cadastro"
        ? Dt(b ? "/demo/dashboard" : "/demo/consulta")
        : location.pathname.startsWith("/demo") &&
          !b &&
          (Dt("/demo/consulta"),
          Qe("Seu acesso é de analista, somente para consulta."));
    }
  }, [Y.members, Y.operators, C, se, i, d, z, pa, Ra]);
  const va = Y.works.find((b) => b.id === Te),
    hi = Kl[z]?.label || "Dashboard geral";
  K.useEffect(() => {
    Ne((b) => {
      const A = Rc(b, z, Y, de);
      return Object.entries(A).some(([ne, ue]) => b[ne] !== ue) ? A : b;
    });
  }, [z, de, Y.services, Y.types]);
  const Ke = (b, A, ne = "name") => Y[b].find((ue) => ue.id === A)?.[ne] || "—",
    Et = (b) =>
      `${Ke("services", b.service_id)} · ${Ke("types", b.type_id)} · ${Ke("fronts", b.front_id)}`,
    Kt = no(Y, W),
    ht = Y.entries
      .filter(
        (b) =>
          b.date >= W.from &&
          b.date <= W.to &&
          (!W.team || b.team_id === W.team) &&
          Kt.some((A) => A.id === b.plan_id),
      )
      .map((b) => {
        const A = Y.plans.find((ue) => ue.id === b.plan_id),
          ne = ea(A, Y.entries, "0001-01-01", b.date, W.team);
        return {
          ...b,
          accumulated: ne.accumulated,
          balance: ne.balance,
          activity: Ke("services", A.service_id),
          type_name: Ke("types", A.type_id),
          front_name: Ke("fronts", A.front_id),
          team_name: Ke("teams", b.team_id),
          unit: Ke("services", A.service_id, "unit"),
          stage: Ke("services", A.service_id, "stage"),
          achievement: b.target ? (b.quantity / b.target) * 100 : null,
          productivity: b.hh ? b.quantity / b.hh : null,
        };
      }),
    xr = [
      { key: "date", label: "Data", render: (b) => Ee(b.date) },
      {
        key: "activity",
        label: "Serviço / tipo",
        render: (b) =>
          o.jsxs(o.Fragment, {
            children: [
              o.jsx("strong", { children: b.activity }),
              o.jsxs("small", { children: [b.type_name, " · ", b.front_name] }),
            ],
          }),
      },
      { key: "team_name", label: "Equipe" },
      {
        key: "quantity",
        label: "Realizado",
        render: (b) =>
          o.jsxs("strong", { children: [fe(b.quantity, 2), " ", b.unit] }),
      },
      {
        key: "target",
        label: "Meta",
        render: (b) => `${fe(b.target, 2)} ${b.unit}`,
      },
      {
        key: "accumulated",
        label: "Acumulado até o dia",
        render: (b) => `${fe(b.accumulated, 2)} ${b.unit}`,
      },
      {
        key: "balance",
        label: "Saldo até o dia",
        render: (b) =>
          o.jsxs("strong", {
            className: b.balance < 0 ? "text-red" : "",
            children: [fe(b.balance, 2), " ", b.unit],
          }),
      },
      { key: "hh", label: "Homem-hora", render: (b) => `${fe(b.hh, 2)} h` },
      {
        key: "productivity",
        label: "Produtividade",
        render: (b) =>
          b.productivity === null
            ? "Sem horas definidas"
            : `${fe(b.productivity, 3)} ${b.unit}/h`,
      },
      {
        key: "achievement",
        label: "Cumprimento",
        render: (b) =>
          o.jsx(Pl, {
            tone:
              b.achievement === null
                ? "neutral"
                : b.achievement >= 100
                  ? "green"
                  : "amber",
            children:
              b.achievement === null ? "Sem meta" : fe(b.achievement, 1) + "%",
          }),
      },
    ],
    us = Y.lots
      .filter((b) => b.cast_date <= W.to && (!W.type || b.type_id === W.type))
      .map((b) => ({
        ...b,
        type_name: Ke("types", b.type_id),
        ...oi(Y.movements, b.id, W.to),
        sent: Y.movements
          .filter(
            (A) =>
              A.lot_id === b.id && A.destination === "campo" && A.date <= W.to,
          )
          .reduce((A, ne) => A + Number(ne.quantity), 0),
        reworked: Y.movements
          .filter(
            (A) =>
              A.lot_id === b.id &&
              A.destination === "reinspecao" &&
              A.date <= W.to,
          )
          .reduce((A, ne) => A + Number(ne.quantity), 0),
      }));
  Y.entries.filter(
    (b) =>
      Kt.some((A) => A.id === b.plan_id) &&
      b.date <= W.to &&
      (!W.team || b.team_id === W.team),
  );
  const cs = Kt.map((b) => ({
      ...b,
      activity: Et(b),
      unit: Ke("services", b.service_id, "unit"),
      ...ea(b, Y.entries, W.from, W.to, W.team),
    })),
    an = Kt.flatMap((b) =>
      Y.teams
        .filter((A) => !W.team || A.id === W.team)
        .map((A) => {
          const ne = ea(
            b,
            Y.entries.filter((ue) => ue.team_id === A.id),
            W.from,
            W.to,
          );
          return {
            id: b.id + A.id,
            activity: Et(b),
            team_name: A.name,
            unit: Ke("services", b.service_id, "unit"),
            ...ne,
          };
        }),
    ).filter((b) => b.hh || b.quantity),
    ds = [
      {
        key: "code",
        label: "Lote / tipo",
        render: (b) =>
          o.jsxs(o.Fragment, {
            children: [
              o.jsx("strong", { children: b.code }),
              o.jsx("small", { children: b.type_name }),
            ],
          }),
      },
      { key: "quantity", label: "Produzidas" },
      { key: "inspecao", label: "Inspeção" },
      { key: "aprovado", label: "Aprovadas" },
      { key: "liberado", label: "Liberadas" },
      { key: "retrabalho", label: "Retrabalho" },
      { key: "reinspecao", label: "Reinspeção" },
      { key: "rejeitado", label: "Rejeitadas" },
      { key: "campo", label: "Em campo" },
      { key: "instalado", label: "Instaladas" },
    ],
    zn = ht
      .filter((b) =>
        z === "placas"
          ? b.stage === "Fabricação de placas"
          : z === "pilares"
            ? b.stage === "Fabricação de pilares"
            : z === "campo"
              ? b.stage === "Execução em campo"
              : !0,
      )
      .sort((b, A) => A.date.localeCompare(b.date)),
    wa =
      de === "estoque" || de === "qualidade"
        ? us
        : de === "metas"
          ? cs
          : de === "produtividade"
            ? an
            : de === "montagem"
              ? ht.filter((b) => b.stage === "Execução em campo")
              : ht;
  function hs() {
    return z === "relatorios"
      ? wa
      : z === "movimentacoes"
        ? iv(Y, W, us)
        : ["qualidade", "estoque"].includes(z)
          ? us
          : z === "planejamento"
            ? ae === "metas"
              ? cs
              : Y[ae]
            : z === "equipes"
              ? r === "equipes"
                ? Y.teams
                : an
              : z === "obras"
                ? Y.works
                : z === "historico"
                  ? Y.audit.filter(
                      (b) =>
                        b.at.slice(0, 10) >= W.from &&
                        b.at.slice(0, 10) <= W.to,
                    )
                  : z === "dashboard"
                    ? ht
                    : zn;
  }
  const Dn = (b) =>
    b.map((A) =>
      "quantity" in A && "plan_id" in A
        ? {
            Data: Ee(A.date),
            Serviço: A.activity,
            Tipo: A.type_name,
            Trecho: A.front_name,
            Equipe: A.team_name,
            Produção: A.quantity,
            Unidade: A.unit,
            Meta: A.target,
            "Acumulado até o dia": A.accumulated,
            "Saldo até o dia": A.balance,
            Efetivo: A.headcount,
            "Horas normais por pessoa": A.normal_hours,
            "Horas extras por pessoa": A.extra_hours,
            "Homem-hora": A.hh,
            Produtividade: A.productivity ?? "Sem homem-hora",
            "Volume concreto m³": A.volume ?? "",
            Observações: [
              A.notes,
              A.interference && A.interference !== A.notes
                ? A.interference
                : "",
            ]
              .filter(Boolean)
              .join(" · "),
          }
        : "source" in A && "destination" in A
          ? {
              Data: Ee(A.date),
              Lote: A.lot_code,
              Tipo: A.type_name,
              Origem: $t[A.source] || "Fabricação",
              Destino: $t[A.destination],
              Peças: A.quantity,
              Responsável: A.responsible,
              Observações: A.notes,
            }
          : "cast_date" in A
            ? {
                Lote: A.code,
                Tipo: A.type_name,
                Concretagem: Ee(A.cast_date),
                Produzidas: A.quantity,
                ...Object.fromEntries(
                  Object.entries($t).map(([ne, ue]) => [ue, A[ne] || 0]),
                ),
                "Enviadas acumuladas": A.sent,
                "Eventos de retrabalho": A.reworked,
              }
            : "accumulated" in A
              ? {
                  Atividade: A.activity,
                  Equipe: A.team_name || "Todas",
                  Unidade: A.unit,
                  "Produção período": A.quantity,
                  "Meta período": A.target,
                  Acumulado: A.accumulated,
                  Saldo: A.balance,
                  "Avanço %": A.progress,
                  "Homem-hora": A.hh,
                  Produtividade: A.productivity ?? "Sem homem-hora",
                }
              : Object.fromEntries(
                  Object.entries(A).filter(
                    ([ne, ue]) =>
                      !ne.endsWith("_id") &&
                      ne !== "id" &&
                      typeof ue != "object",
                  ),
                ),
    );
  async function fs(b) {
    os(!0);
    try {
      if (
        aa &&
        (["estoque", "qualidade", "movimentacoes"].includes(z) ||
          (z === "relatorios" && ["estoque", "qualidade"].includes(de)))
      )
        throw new Error(
          "Limpe os filtros de frente, equipe e serviço antes de exportar o estoque.",
        );
      const A =
          ["estoque", "qualidade"].includes(z) ||
          (z === "relatorios" && ["estoque", "qualidade"].includes(de)),
        ne = z !== "obras" && za,
        ue = ne
          ? A
            ? "Posição de estoque em " + Ee(W.to)
            : z === "historico"
              ? "Alterações no período"
              : z === "movimentacoes"
                ? "Movimentações no período"
                : "Registros no período"
          : "Cadastro completo da obra",
        Xe = Dn(hs());
      if (!Xe.length)
        throw new Error(
          "Não há registros no escopo selecionado para exportar.",
        );
      if (b === "xlsx") {
        const et = await ir(() => import("./xlsx-9RuxFWz6.js"), []),
          Ot = et.utils.book_new();
        (et.utils.book_append_sheet(Ot, et.utils.json_to_sheet(Xe), "Dados"),
          et.utils.book_append_sheet(
            Ot,
            et.utils.json_to_sheet([
              {
                Obra: va?.name || "Obras autorizadas",
                Período: ne
                  ? `${Ee(W.from)} a ${Ee(W.to)}`
                  : "Não se aplica ao cadastro",
                Trecho: W.front ? Ke("fronts", W.front) : "Todas",
                Equipe: W.team ? Ke("teams", W.team) : "Todas",
                Serviço: W.service ? Ke("services", W.service) : "Todos",
                Tipo: W.type ? Ke("types", W.type) : "Todos",
                Consulta: ue,
                Ambiente: i ? "DEMONSTRAÇÃO" : "REAL",
              },
            ]),
            "Escopo",
          ),
          et.writeFile(Ot, `Concreserv-${z}-${W.to}.xlsx`));
      } else {
        const { jsPDF: et } = await ir(async () => {
            const { jsPDF: kt } = await import(
              "./jspdf.es.min-B9X4pUp4.js"
            ).then((na) => na.j);
            return { jsPDF: kt };
          }, []),
          { default: Ot } = await ir(async () => {
            const { default: kt } = await import(
              "./jspdf.plugin.autotable-iy_ebv8X.js"
            );
            return { default: kt };
          }, []),
          Nt = new et({ orientation: "landscape" }),
          Ze = new Image();
        ((Ze.src = "/logo-concreserv.svg"), await Ze.decode());
        const Ct = document.createElement("canvas");
        ((Ct.width = 1060),
          (Ct.height = 224),
          Ct.getContext("2d").drawImage(Ze, 0, 0, 1060, 224),
          Nt.addImage(Ct.toDataURL("image/png"), "PNG", 14, 7, 48, 10.2),
          Nt.setFontSize(10),
          Nt.text(
            `${hi} | ${va?.name || "Obras autorizadas"}${i ? " | DEMONSTRAÇÃO" : ""}`,
            14,
            26,
          ),
          Nt.text(
            ne ? `Período: ${Ee(W.from)} a ${Ee(W.to)} | ${ue}` : ue,
            14,
            33,
          ),
          Nt.text(
            `Trecho: ${W.front ? Ke("fronts", W.front) : "Todas"} | Equipe: ${W.team ? Ke("teams", W.team) : "Todas"} | Tipo: ${W.type ? Ke("types", W.type) : "Todos"}`,
            14,
            40,
          ),
          Nt.text(
            `Serviço: ${W.service ? Ke("services", W.service) : "Todos"}`,
            14,
            46,
          ),
          Ot(Nt, {
            head: [Object.keys(Xe[0])],
            body: Xe.map((kt) => Object.values(kt).map(String)),
            startY: 52,
            styles: { fontSize: 6, cellPadding: 2 },
            headStyles: { fillColor: [47, 48, 48] },
          }),
          Nt.save(`Concreserv-${z}-${W.to}.pdf`));
      }
      Qe("Relatório exportado com os filtros e permissões atuais.");
    } catch (A) {
      Qe(A.message);
    } finally {
      os(!1);
    }
  }
  async function fi() {
    os(!0);
    try {
      const b = await ir(() => import("./xlsx-9RuxFWz6.js"), []);
      (b.writeFile(
        M_(b, Y, va, W, i),
        `Concreserv-controle-diario-${W.to}.xlsx`,
      ),
        Qe(
          "Controle exportado em cinco abas, respeitando a obra e os filtros selecionados.",
        ));
    } catch (b) {
      Qe(b.message || "Não foi possível exportar o controle.");
    } finally {
      os(!1);
    }
  }
  const Ea = () => {
      (zt(null), y(void 0), w(void 0), j(!1));
    },
    Tt = (b, A) => {
      if ((y(void 0), w(void 0), j(!1), !Gt && !(b === "works" && pa))) {
        ta({
          title: "Demonstração em modo de consulta",
          rows: [
            {
              Informação:
                "Os dados demonstrativos são separados da operação real. Entre com uma conta autorizada para cadastrar ou alterar registros.",
            },
          ],
        });
        return;
      }
      zt({ kind: b, row: A });
    },
    oo = (b) => Y[b].map((A) => ({ value: A.id, label: A.name || A.code })),
    jr = (b) =>
      b === "works"
        ? [
            { key: "name", label: "Nome da obra" },
            { key: "client", label: "Cliente" },
            { key: "location", label: "Localização" },
            { key: "start_date", label: "Início previsto", type: "date" },
            { key: "end_date", label: "Término previsto", type: "date" },
            ...(ze?.row
              ? [
                  {
                    key: "status",
                    label: "Status",
                    options: [
                      "Planejada",
                      "Em andamento",
                      "Pausada",
                      "Concluída",
                    ].map((A) => ({ value: A, label: A })),
                  },
                ]
              : []),
          ]
        : b === "teams"
          ? [
              { key: "name", label: "Nome da equipe" },
              { key: "leader", label: "Líder responsável" },
            ]
          : b === "fronts"
            ? [{ key: "name", label: "Nome do trecho" }]
            : b === "types"
              ? [
                  { key: "name", label: "Nome do tipo de peça" },
                  { key: "dimension", label: "Dimensão" },
                  {
                    key: "category",
                    label: "Categoria",
                    options: ["Placas", "Pilares"].map((A) => ({
                      value: A,
                      label: A,
                    })),
                  },
                ]
              : b === "services"
                ? [
                    { key: "code", label: "Código" },
                    { key: "name", label: "Descrição" },
                    {
                      key: "stage",
                      label: "Etapa",
                      options: [
                        "Fabricação de placas",
                        "Fabricação de pilares",
                        "Execução em campo",
                      ].map((A) => ({ value: A, label: A })),
                    },
                    {
                      key: "unit",
                      label: "Unidade",
                      options: ["un", "m", "m³"].map((A) => ({
                        value: A,
                        label: A,
                      })),
                    },
                    {
                      key: "requires_volume",
                      label: "Exige volume de concreto?",
                      options: [
                        { value: "true", label: "Sim — concretagem" },
                        { value: "false", label: "Não" },
                      ],
                    },
                  ]
                : b === "lots"
                  ? [
                      { key: "code", label: "Identificação do lote" },
                      {
                        key: "type_id",
                        label: "Tipo de peça",
                        options: oo("types"),
                      },
                      {
                        key: "cast_date",
                        label: "Data da concretagem",
                        type: "date",
                      },
                      {
                        key: "quantity",
                        label: "Quantidade de peças novas",
                        type: "number",
                        min: 1,
                        step: "1",
                      },
                      {
                        key: "notes",
                        label: "Observações",
                        type: "textarea",
                        required: !1,
                        wide: !0,
                      },
                    ]
                  : [];
  async function qn(b, A) {
    let ne;
    if (b === "works") {
      if (A.end_date < A.start_date)
        throw new Error("O término deve ser igual ou posterior ao início.");
      ze?.row
        ? (ne = await Pe.from("cc_works")
            .update(A)
            .eq("id", ze.row.id)
            .select())
        : (ne = await Pe.rpc("cc_create_work_auto", {
            p_name: A.name,
            p_client: A.client,
            p_location: A.location,
            p_start: A.start_date,
            p_end: A.end_date,
          }));
    } else if (b === "lots")
      ne = await Pe.rpc("cc_create_lot", {
        p_work: Te,
        p_type: A.type_id,
        p_code: A.code,
        p_date: A.cast_date,
        p_quantity: A.quantity,
        p_notes: A.notes,
      });
    else if (b === "move")
      ne = await Pe.rpc("cc_move", {
        p_lot: A.lot_id,
        p_source: A.source,
        p_destination: A.destination,
        p_quantity: A.quantity,
        p_date: A.date,
        p_responsible: A.responsible,
        p_notes: A.notes,
      });
    else if (b === "entries") {
      const { _entry_id, _photos = [], ...entry } = A;
      ne = {
        data: [
          await saveEntryWithPhotos(
            Pe,
            Te,
            ze?.row?.id || _entry_id,
            entry,
            _photos,
          ),
        ],
      };
    } else {
      (b === "services" && (A.requires_volume = A.requires_volume === "true"),
        ze?.row
          ? (ne = await Pe.from("cc_" + b)
              .update({ ...A, work_id: Te })
              .eq("id", ze.row.id)
              .select())
          : (ne = await Pe.from("cc_" + b)
              .insert({ ...A, work_id: Te })
              .select()));
    }
    if (ne.error) {
      const ue = ne.error,
        Xe = ue.message.includes("row-level security")
          ? "Você não tem permissão para alterar esta obra."
          : ue.code === "23505"
            ? "Já existe um registro com esse código ou combinação de atividade, frente e tipo."
            : ue.code === "23503"
              ? "Os registros selecionados não pertencem à mesma obra ou possuem dependências."
              : ue.code === "23514"
                ? b === "move"
                  ? "Essa transição de situação não é permitida. Siga a sequência de inspeção, liberação, envio e instalação."
                  : "Verifique datas e quantidades. Não são aceitas datas de execução futuras, valores negativos ou jornadas acima de 24 horas por pessoa."
                : ue.message;
      throw new Error(Xe);
    }
    if (ze?.row && Array.isArray(ne.data) && !ne.data.length)
      throw new Error("Registro não alterado. Verifique suas permissões.");
    if (["plans", "teams"].includes(b) && Array.isArray(ne.data)) {
      const ue = ne.data;
      ie((Xe) => ({
        ...Xe,
        [b]: [
          ...Xe[b].filter((et) => !ue.some((Ot) => Ot.id === et.id)),
          ...ue,
        ],
      }));
    }
    if (v && ["plans", "teams"].includes(b)) {
      const ue =
        b === "plans" && Array.isArray(ne.data) && ne.data[0]
          ? { ...S, plan_id: ne.data[0].id, target: ne.data[0].daily_target }
          : S;
      (w(ue),
        b === "plans" && !Y.teams.length
          ? (Vt("equipes"), zt({ kind: "teams" }))
          : (Vt(
              v === "Fabricação de placas"
                ? "placas"
                : v === "Fabricação de pilares"
                  ? "pilares"
                  : "campo",
            ),
            zt({ kind: "entries", stageHint: v, draft: ue })));
    } else _ && b === "lots" ? (zt({ kind: "move" }), j(!1)) : Ea();
    if (b === "works") {
      const ue = await zc("cc_works"),
        { data: Xe } = await Pe.from("cc_members").select("*");
      (ie((et) => ({ ...et, works: ue, members: Xe || [] })),
        ze?.row || M(typeof ne.data == "string" ? ne.data : ue[0]?.id));
    }
    (ge((ue) => ue + 1),
      Qe(
        "Registro salvo. Indicadores atualizados e alteração registrada no histórico.",
      ));
  }
  async function deleteSelectedRecord() {
    if (!Cn || deleteInFlight.current) return;
    const selected = Cn;
    if (selected.table === "works" && deleteWorkName !== selected.row.name)
      return;
    deleteInFlight.current = true;
    setDeletePending(true);
    try {
      if (selected.table === "works") {
        const result = await Pe.rpc("cc_delete_work", {
          p_work: selected.row.id,
          p_expected_name: deleteWorkName,
        });
        if (result.error) throw result.error;
        if (result.data !== true)
          throw new Error(
            "Não foi possível confirmar a exclusão. Atualize a lista de obras.",
          );
        kn(null);
        setDeleteWorkName("");
        // Keep the visible list accurate even if the subsequent refresh fails.
        ie((current) => ({
          ...si(),
          works: current.works.filter((work) => work.id !== selected.row.id),
          members: current.members.filter(
            (member) => member.work_id !== selected.row.id,
          ),
          operators: current.operators,
        }));
        M((current) => (current === selected.row.id ? "" : current));
        Ne({
          from: kp(),
          to: Sa(),
          front: "",
          team: "",
          service: "",
          type: "",
        });
        try {
          const [works, members] = await Promise.all([
            zc("cc_works"),
            Pe.from("cc_members").select("*"),
          ]);
          if (members.error) throw members.error;
          ie((current) => ({ ...current, works, members: members.data || [] }));
          M((current) =>
            works.some((work) => work.id === current)
              ? current
              : works[0]?.id || "",
          );
        } catch {
          Qe(
            "A obra foi excluída. Atualize a página para recarregar as demais obras.",
          );
          ge((current) => current + 1);
          return;
        }
        Qe(
          "Obra e dados vinculados excluídos. As contas de acesso foram preservadas.",
        );
      } else {
        const { error, data } = await Pe.from("cc_" + selected.table)
          .delete()
          .eq("id", selected.row.id)
          .select();
        if (error) throw error;
        if (!data?.length)
          throw new Error("Registro não excluído. Verifique suas permissões.");
        kn(null);
        Qe("Registro excluído. Histórico preservado.");
      }
      await flushDeletedPhotos(Pe);
      ge((current) => current + 1);
    } catch (error) {
      Qe(
        error.code === "42501"
          ? "Você não tem permissão para excluir esta obra."
          : error.message?.includes("foreign key")
            ? "Este registro possui dependências e não pode ser excluído."
            : error.message || "Não foi possível excluir. Tente novamente.",
      );
    } finally {
      deleteInFlight.current = false;
      setDeletePending(false);
    }
  }
  const Un = (b) => (A) =>
      o.jsxs(o.Fragment, {
        children: [
          o.jsxs("button", {
            className: "icon-button",
            title: "Consultar registro",
            "aria-label": "Consultar registro",
            onClick: () =>
              ta({ title: "Detalhes do registro", rows: [A], kind: b }),
            children: [
              o.jsx(ls, { size: 16 }),
              o.jsx("span", {
                className: "row-action-label",
                children: "Consultar",
              }),
            ],
          }),
          Gt &&
            o.jsxs(o.Fragment, {
              children: [
                o.jsxs("button", {
                  className: "icon-button",
                  title: "Editar",
                  "aria-label": "Editar",
                  onClick: () => Tt(b, A),
                  children: [
                    o.jsx(sp, { size: 15 }),
                    o.jsx("span", {
                      className: "row-action-label",
                      children: "Editar",
                    }),
                  ],
                }),
                o.jsxs("button", {
                  className: "icon-button danger",
                  title: "Excluir",
                  "aria-label": "Excluir",
                  onClick: () => kn({ table: b, row: A }),
                  children: [
                    o.jsx(Yg, { size: 15 }),
                    o.jsx("span", {
                      className: "row-action-label",
                      children: "Excluir",
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    za =
      !(z === "planejamento" && ae !== "metas") &&
      !(z === "equipes" && r === "equipes"),
    mi =
      ["qualidade", "estoque", "movimentacoes"].includes(z) ||
      (z === "relatorios" && ["estoque", "qualidade"].includes(de)),
    nn = [
      ["front", "Trecho da obra", "fronts"],
      ["team", "Equipe", "teams"],
      ["service", "Serviço", "services"],
      ["type", "Tipo de peça", "types"],
    ].filter(([b]) => za && z !== "historico" && (!mi || b === "type")),
    Sr = (b) =>
      Y[b].filter((A) => {
        const ne =
          z === "placas"
            ? "Fabricação de placas"
            : z === "pilares"
              ? "Fabricação de pilares"
              : z === "campo"
                ? "Execução em campo"
                : "";
        return ne && b === "services"
          ? A.stage === ne
          : ne && ne !== "Execução em campo" && b === "types"
            ? A.category === (z === "placas" ? "Placas" : "Pilares")
            : !0;
      }),
    aa = !!(W.front || W.team || W.service);
  let He;
  return (
    z === "usuarios"
      ? (He = Ra
          ? o.jsx(K.Suspense, {
              fallback: o.jsxs("div", {
                className: "content-loading",
                children: [
                  o.jsx(yt, { className: "spin" }),
                  o.jsx("p", { children: "Carregando usuários…" }),
                ],
              }),
              children: o.jsx(V_, {
                works: lo,
                permissions: accountPermissions,
              }),
            })
          : o.jsxs("div", {
              className: "empty large",
              children: [
                o.jsx(li, { size: 38 }),
                o.jsx("h2", {
                  children: "Acesso restrito aos administradores",
                }),
                o.jsx("p", {
                  children:
                    "Entre com uma conta administrativa para consultar usuários e acessos.",
                }),
              ],
            }))
      : z === "obras"
        ? (He = o.jsxs("div", {
            className: "work-grid",
            children: [
              Y.works.map((b) =>
                o.jsxs(
                  "article",
                  {
                    className: "work-card",
                    children: [
                      o.jsx("div", {
                        className: "work-art work-cover",
                        children: o.jsx("img", {
                          src: "/obra-concreserv.png",
                          alt: "Peças pré-moldadas de concreto da Concreserv",
                          width: 2098,
                          height: 749,
                          loading: "lazy",
                          decoding: "async",
                        }),
                      }),
                      o.jsxs("div", {
                        className: "work-card-body",
                        children: [
                          o.jsx("span", {
                            className: "work-code",
                            children: b.code,
                          }),
                          o.jsx(Pl, {
                            tone:
                              b.status === "Em andamento" ? "green" : "neutral",
                            children: b.status,
                          }),
                          o.jsx("h2", { children: b.name }),
                          o.jsxs("p", {
                            children: [o.jsx(Up, { size: 14 }), b.location],
                          }),
                          o.jsxs("p", {
                            children: [o.jsx(ei, { size: 14 }), b.client],
                          }),
                          o.jsxs("p", {
                            children: [
                              o.jsx(Gl, { size: 14 }),
                              Ee(b.start_date),
                              " — ",
                              Ee(b.end_date),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsxs("button", {
                                className: "text-button",
                                onClick: () => {
                                  (M(b.id),
                                    Ne((A) => ({
                                      ...A,
                                      front: "",
                                      team: "",
                                      service: "",
                                      type: "",
                                    })),
                                    Vt("dashboard"));
                                },
                                children: [
                                  "Acompanhar obra ",
                                  o.jsx(dt, { size: 16 }),
                                ],
                              }),
                              (pa ||
                                Y.members.some(
                                  (A) =>
                                    A.work_id === b.id && A.role === "admin",
                                )) &&
                                o.jsxs(o.Fragment, {
                                  children: [
                                    o.jsx("button", {
                                      className: "icon-button",
                                      "aria-label": "Editar obra",
                                      title: "Editar obra",
                                      onClick: () => {
                                        (M(b.id),
                                          zt({ kind: "works", row: b }));
                                      },
                                      children: o.jsx(sp, { size: 16 }),
                                    }),
                                    o.jsx("button", {
                                      className: "icon-button danger",
                                      "aria-label": "Excluir obra",
                                      title: "Excluir obra",
                                      onClick: () => {
                                        setDeleteWorkName("");
                                        kn({ table: "works", row: b });
                                      },
                                      children: o.jsx(Yg, { size: 16 }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  b.id,
                ),
              ),
              !Y.works.length &&
                o.jsxs("div", {
                  className: "empty",
                  children: [
                    o.jsx(ei, {}),
                    o.jsx("h3", { children: "Nenhuma obra vinculada" }),
                    o.jsx("p", {
                      children: pa
                        ? "Crie sua primeira obra para começar."
                        : "Solicite ao responsável a vinculação da sua conta a uma obra.",
                    }),
                  ],
                }),
            ],
          }))
        : z === "planejamento"
          ? (He = o.jsxs(o.Fragment, {
              children: [
                o.jsxs("div", {
                  className: "tabs",
                  children: [
                    o.jsx("button", {
                      className: ae === "metas" ? "active" : "",
                      onClick: () => {
                        (be("metas"), te(!1));
                      },
                      children: "Metas da obra",
                    }),
                    o.jsx("button", {
                      className: ae !== "metas" ? "active" : "",
                      onClick: () => {
                        (be("types"),
                          te(!1),
                          Ne({
                            ...W,
                            front: "",
                            team: "",
                            service: "",
                            type: "",
                          }));
                      },
                      children: "Cadastros de apoio",
                    }),
                  ],
                }),
                ae !== "metas" &&
                  o.jsx("nav", {
                    className: "support-categories",
                    "aria-label": "Categorias de cadastro",
                    children: [
                      [
                        "types",
                        "Tipos de peças",
                        "Dimensões das placas e pilares",
                      ],
                      [
                        "services",
                        "Catálogo de serviços",
                        "Atividades e unidades de medida",
                      ],
                      ["fronts", "Trechos da obra", "Locais de execução"],
                    ].map(([b, A, ne]) =>
                      o.jsxs(
                        "button",
                        {
                          className: ae === b ? "active" : "",
                          "aria-current": ae === b ? "page" : void 0,
                          onClick: () => be(b),
                          children: [
                            o.jsx("strong", { children: A }),
                            o.jsx("small", { children: ne }),
                            o.jsxs("span", {
                              children: [Y[b].length, " cadastros"],
                            }),
                          ],
                        },
                        b,
                      ),
                    ),
                  }),
                o.jsxs("div", {
                  className: "section-line",
                  children: [
                    o.jsxs("h3", {
                      children: [
                        ae === "metas"
                          ? "Planejamento da obra"
                          : ae === "fronts"
                            ? "Trechos da obra"
                            : ae === "services"
                              ? "Catálogo de serviços"
                              : "Tipos e dimensões",
                        o.jsx("span", {
                          children:
                            ae === "metas"
                              ? "Quantidades previstas por atividade. Saldos negativos ficam sinalizados."
                              : "Cadastros exclusivos da obra selecionada.",
                        }),
                      ],
                    }),
                    Gt &&
                      o.jsxs("button", {
                        className: "button secondary",
                        onClick: () => Tt(ae === "metas" ? "plans" : ae),
                        children: [o.jsx(Wa, { size: 16 }), "Adicionar"],
                      }),
                  ],
                }),
                ae === "metas"
                  ? o.jsx(Ca, {
                      rows: cs,
                      columns: [
                        { key: "activity", label: "Atividade / tipo / frente" },
                        {
                          key: "total",
                          label: "Previsto",
                          render: (b) => `${fe(b.total, 2)} ${b.unit}`,
                        },
                        {
                          key: "accumulated",
                          label: "Executado até a data",
                          render: (b) => `${fe(b.accumulated, 2)} ${b.unit}`,
                        },
                        {
                          key: "balance",
                          label: "Saldo",
                          render: (b) =>
                            o.jsxs("strong", {
                              className: b.balance < 0 ? "text-red" : "",
                              children: [fe(b.balance, 2), " ", b.unit],
                            }),
                        },
                        {
                          key: "progress",
                          label: "Avanço",
                          render: (b) => `${fe(b.progress, 1)}%`,
                        },
                        {
                          key: "weight",
                          label: "Peso",
                          render: (b) => b.weight || "Não definido",
                        },
                      ],
                      actions: Un("plans"),
                    })
                  : o.jsx(Ca, {
                      rows: Y[ae],
                      columns:
                        ae === "services"
                          ? [
                              { key: "code", label: "Código" },
                              { key: "name", label: "Descrição" },
                              { key: "stage", label: "Etapa" },
                              { key: "unit", label: "Unidade" },
                            ]
                          : ae === "types"
                            ? [
                                { key: "name", label: "Tipo de peça" },
                                { key: "dimension", label: "Dimensão" },
                                { key: "category", label: "Categoria" },
                              ]
                            : [{ key: "name", label: "Frente / trecho" }],
                      actions: Un(ae),
                    }),
              ],
            }))
          : ["placas", "pilares", "campo"].includes(z)
            ? (He = o.jsxs(o.Fragment, {
                children: [
                  o.jsxs("div", {
                    className: "info-strip",
                    children: [
                      o.jsx(Zc, { size: 18 }),
                      o.jsxs("span", {
                        children: [
                          "Lançamentos registram a execução de cada atividade. ",
                          o.jsx("strong", {
                            children:
                              "A fabricação de peças únicas é contabilizada pelos lotes.",
                          }),
                          " Concretagem, desforma e retrabalho não criam peças adicionais.",
                        ],
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "mini-stat-grid",
                    children: cs
                      .filter(
                        (b) =>
                          Ke("services", b.service_id, "stage") ===
                          (z === "campo"
                            ? "Execução em campo"
                            : z === "placas"
                              ? "Fabricação de placas"
                              : "Fabricação de pilares"),
                      )
                      .map((b) =>
                        o.jsxs(
                          "div",
                          {
                            className: "mini-stat",
                            children: [
                              o.jsx("span", { children: b.activity }),
                              o.jsxs("strong", {
                                children: [
                                  fe(b.quantity, 2),
                                  " ",
                                  o.jsx("small", { children: b.unit }),
                                ],
                              }),
                              o.jsxs("p", {
                                children: [
                                  "Período · ",
                                  b.achievement === null
                                    ? "Sem meta definida"
                                    : fe(b.achievement, 1) + "% da meta",
                                ],
                              }),
                            ],
                          },
                          b.id,
                        ),
                      ),
                  }),
                  o.jsxs("div", {
                    className: "section-line",
                    children: [
                      o.jsxs("h3", {
                        children: [
                          "Lançamentos de produção",
                          o.jsx("span", {
                            children:
                              "Período selecionado · clique no registro para consultar os detalhes.",
                          }),
                        ],
                      }),
                      Gt &&
                        o.jsxs("div", {
                          className: "inline-actions",
                          children: [
                            o.jsxs("button", {
                              className: "button secondary",
                              onClick: () => Tt("lots"),
                              children: [o.jsx(Wa, { size: 16 }), "Novo lote"],
                            }),
                            o.jsxs("button", {
                              className: "button primary",
                              onClick: () => Tt("entries"),
                              children: [
                                o.jsx(Wa, { size: 16 }),
                                "Novo lançamento",
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  o.jsx(Ca, { rows: zn, columns: xr, actions: Un("entries") }),
                ],
              }))
            : ["estoque", "qualidade", "movimentacoes"].includes(z)
              ? (He = o.jsx(H_, {
                  page: z,
                  d: Y,
                  f: W,
                  rows: us,
                  admin: Gt,
                  onAction: (b) => Tt(b),
                  onDetails: (b, A) => ta({ title: b, rows: A }),
                  onClear: () => Ne({ ...W, front: "", team: "", service: "" }),
                }))
              : z === "equipes"
                ? (He = o.jsx($_, {
                    d: Y,
                    f: W,
                    view: r,
                    onView: (b) => {
                      (l(b),
                        te(!1),
                        b === "equipes" &&
                          Ne({
                            ...W,
                            front: "",
                            team: "",
                            service: "",
                            type: "",
                          }));
                    },
                    entries: ht,
                    productivity: an,
                    admin: Gt,
                    onAdd: () => Tt("teams"),
                    actions: Un("teams"),
                  }))
                : z === "relatorios"
                  ? (He = o.jsxs(o.Fragment, {
                      children: [
                        o.jsxs("div", {
                          className: "report-hero",
                          children: [
                            o.jsx("div", {
                              className: "report-icon",
                              children: o.jsx(Dp, { size: 32 }),
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("h2", { children: "Resultados da obra" }),
                                o.jsx("p", {
                                  children:
                                    "Baixe esta consulta ou o controle completo em cinco abas.",
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "inline-actions",
                              children: [
                                o.jsxs("button", {
                                  className: "button secondary",
                                  disabled: ma,
                                  onClick: fi,
                                  children: [
                                    o.jsx(es, { size: 16 }),
                                    "Excel completo (5 abas)",
                                  ],
                                }),
                                o.jsxs("button", {
                                  className: "button secondary",
                                  disabled: ma,
                                  onClick: () => fs("xlsx"),
                                  children: [
                                    o.jsx(es, { size: 16 }),
                                    "Excel desta consulta",
                                  ],
                                }),
                                o.jsxs("button", {
                                  className: "button primary",
                                  disabled: ma,
                                  onClick: () => fs("pdf"),
                                  children: [
                                    o.jsx(es, { size: 16 }),
                                    "PDF desta consulta",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "tabs",
                          children: [
                            ["producao", "Produção"],
                            ["metas", "Metas × realizado"],
                            ["estoque", "Estoque"],
                            ["qualidade", "Qualidade"],
                            ["montagem", "Montagem"],
                            ["produtividade", "Produtividade"],
                          ].map(([b, A]) =>
                            o.jsx(
                              "button",
                              {
                                className: de === b ? "active" : "",
                                onClick: () => {
                                  (De(b),
                                    Ne((ne) => Rc(ne, "relatorios", Y, b)),
                                    te(!1));
                                },
                                children: A,
                              },
                              b,
                            ),
                          ),
                        }),
                        o.jsxs("details", {
                          className: "support-details report-chart",
                          children: [
                            o.jsx("summary", {
                              children: "Ver gráfico desta consulta",
                            }),
                            o.jsx(nv, {
                              mode:
                                de === "produtividade"
                                  ? "productivity"
                                  : de === "qualidade" || de === "estoque"
                                    ? "quality"
                                    : de === "montagem"
                                      ? "wall"
                                      : "cumulative",
                              d: Y,
                              f: W,
                            }),
                          ],
                        }),
                        (de === "estoque" || de === "qualidade") && aa
                          ? o.jsx("div", {
                              className: "empty",
                              children:
                                "Limpe os filtros de frente, equipe e serviço para consultar o estoque.",
                            })
                          : o.jsx(Ca, {
                              rows: wa,
                              columns:
                                de === "estoque" || de === "qualidade"
                                  ? ds
                                  : de === "metas"
                                    ? [
                                        { key: "activity", label: "Atividade" },
                                        {
                                          key: "target",
                                          label: "Meta do período",
                                        },
                                        {
                                          key: "quantity",
                                          label: "Realizado no período",
                                        },
                                        { key: "unit", label: "Unidade" },
                                        {
                                          key: "accumulated",
                                          label: "Acumulado até a data",
                                        },
                                        { key: "balance", label: "Saldo" },
                                        {
                                          key: "achievement",
                                          label: "Meta %",
                                          render: (b) =>
                                            b.achievement === null
                                              ? "Sem meta"
                                              : fe(b.achievement, 1) + "%",
                                        },
                                      ]
                                    : de === "produtividade"
                                      ? [
                                          {
                                            key: "activity",
                                            label: "Atividade",
                                          },
                                          { key: "team_name", label: "Equipe" },
                                          {
                                            key: "quantity",
                                            label: "Produção",
                                          },
                                          { key: "hh", label: "HH" },
                                          {
                                            key: "productivity",
                                            label: "Produtividade",
                                            render: (b) =>
                                              b.productivity === null
                                                ? "Sem HH"
                                                : `${fe(b.productivity, 3)} ${b.unit}/h`,
                                          },
                                        ]
                                      : xr,
                            }),
                      ],
                    }))
                  : z === "historico"
                    ? (He = o.jsxs(o.Fragment, {
                        children: [
                          o.jsxs("div", {
                            className: "info-strip",
                            children: [
                              o.jsx(qp, { size: 19 }),
                              o.jsx("span", {
                                children:
                                  "Histórico imutável mantido pelo banco de dados. Inclui autor, data e o conteúdo antes e depois de cada alteração. O período se refere à data da alteração; os demais filtros operacionais não se aplicam.",
                              }),
                            ],
                          }),
                          o.jsx(Ca, {
                            rows: Y.audit
                              .filter(
                                (b) =>
                                  b.at.slice(0, 10) >= W.from &&
                                  b.at.slice(0, 10) <= W.to,
                              )
                              .map((b) => ({
                                ...b,
                                module_label:
                                  {
                                    cc_works: "Obras",
                                    cc_members: "Acessos de usuários",
                                    cc_plans: "Metas",
                                    cc_entries: "Produção",
                                    cc_teams: "Equipes",
                                    cc_fronts: "Trechos",
                                    cc_services: "Serviços",
                                    cc_types: "Tipos de peças",
                                    cc_lots: "Fabricação de lotes",
                                    cc_movements: "Inspeções e movimentações",
                                  }[b.table_name] || "Registros da obra",
                                actor_label:
                                  b.user_id === C?.id
                                    ? C?.email
                                    : b.user_id
                                      ? "Outro usuário autorizado"
                                      : "Configuração inicial",
                              })),
                            columns: [
                              {
                                key: "at",
                                label: "Data e hora",
                                render: (b) =>
                                  new Date(b.at).toLocaleString("pt-BR", {
                                    timeZone: "America/Sao_Paulo",
                                  }),
                              },
                              { key: "module_label", label: "Área" },
                              {
                                key: "action",
                                label: "Ação",
                                render: (b) =>
                                  ({
                                    INSERT: "Cadastro",
                                    UPDATE: "Atualização",
                                    DELETE: "Exclusão",
                                  })[b.action] || b.action,
                              },
                              { key: "actor_label", label: "Responsável" },
                            ],
                            actions: (b) =>
                              o.jsxs("button", {
                                className: "icon-button",
                                "aria-label": "Ver alterações",
                                onClick: () =>
                                  ta({
                                    title: "Histórico de alterações",
                                    rows: [
                                      {
                                        "Data e hora": new Date(
                                          b.at,
                                        ).toLocaleString("pt-BR", {
                                          timeZone: "America/Sao_Paulo",
                                        }),
                                        Responsável: b.actor_label,
                                        Área: b.module_label,
                                        action: b.action,
                                        before_data: b.before_data,
                                        after_data: b.after_data,
                                      },
                                    ],
                                  }),
                                children: [
                                  o.jsx(ls, { size: 16 }),
                                  o.jsx("span", {
                                    className: "row-action-label",
                                    children: "Ver alterações",
                                  }),
                                ],
                              }),
                          }),
                        ],
                      }))
                    : (He = va
                        ? o.jsxs(o.Fragment, {
                            children: [
                              Gt && o.jsx(q_, { d: Y, onAction: (b) => Tt(b) }),
                              o.jsx(T_, {
                                d: Y,
                                work: va,
                                f: W,
                                onNavigate: (b) =>
                                  Vt(
                                    b,
                                    b === "equipes" ? "desempenho" : void 0,
                                  ),
                                onDetails: (b, A) => ta({ title: b, rows: A }),
                              }),
                            ],
                          })
                        : null),
    location.pathname === "/ativar-conta"
      ? o.jsx(U_, {})
      : location.pathname === "/confirmar-email"
        ? o.jsx(N_, {})
        : location.pathname === "/demo/cadastro" && !C
          ? o.jsx(O_, {})
          : X
            ? tn
              ? o.jsx(A_, {
                  legacySession: f,
                  onBack: () => {
                    (p(null), Dt("/demo/entrar"));
                  },
                })
              : C && !i && k === null && !tn
                ? o.jsx("div", {
                    className: "full-loading",
                    children: B
                      ? o.jsxs("div", {
                          className: "empty",
                          children: [
                            o.jsx(ka, {}),
                            o.jsx("p", { children: B }),
                            o.jsx("button", {
                              className: "button secondary",
                              onClick: () => location.reload(),
                              children: "Recarregar",
                            }),
                          ],
                        })
                      : o.jsxs(o.Fragment, {
                          children: [
                            o.jsx(yt, { className: "spin" }),
                            "Verificando sua conta…",
                          ],
                        }),
                  })
                : k && C && !i
                  ? o.jsx(Cp, { admin: !0, reset: !0, provisional: !0 })
                  : !C && !i
                    ? o.jsx(Cp, {
                        admin: location.pathname.startsWith("/demo"),
                        reset: !1,
                        onRecovery: () => Dt("/demo/redefinir-senha"),
                      })
                    : C && !i && _r && !tn && !d
                      ? o.jsx("div", {
                          className: "full-loading",
                          children: $
                            ? o.jsxs("div", {
                                className: "empty",
                                children: [
                                  o.jsx("p", { children: $ }),
                                  o.jsx("button", {
                                    className: "button secondary",
                                    onClick: () => location.reload(),
                                    children: "Tentar novamente",
                                  }),
                                ],
                              })
                            : o.jsxs(o.Fragment, {
                                children: [
                                  o.jsx(yt, { className: "spin" }),
                                  "Verificando seu acesso…",
                                ],
                              }),
                        })
                      : o.jsxs("div", {
                          className: "app-shell",
                          children: [
                            P &&
                              o.jsx("div", {
                                className: "sidebar-overlay",
                                onClick: () => x(!1),
                              }),
                            o.jsxs("aside", {
                              id: "primary-sidebar",
                              "aria-label": "Navegação da plataforma",
                              className: "sidebar " + (P ? "mobile-open" : ""),
                              children: [
                                o.jsxs("div", {
                                  className: "sidebar-brand",
                                  children: [
                                    o.jsx("a", {
                                      href: "/",
                                      onClick: (b) => {
                                        (b.preventDefault(), Vt("dashboard"));
                                      },
                                      className: "brand",
                                      children: o.jsx("img", {
                                        src: "/logo-concreserv.svg",
                                        alt: "Concreserv — Concreto & Serviços",
                                      }),
                                    }),
                                    o.jsx("button", {
                                      className: "mobile-close icon-button",
                                      onClick: () => x(!1),
                                      "aria-label": "Fechar menu",
                                      children: o.jsx(Uc, { size: 20 }),
                                    }),
                                    o.jsx("small", {
                                      children: "GESTÃO DE OBRAS",
                                    }),
                                  ],
                                }),
                                o.jsxs("div", {
                                  className: "workspace-label",
                                  children: [
                                    o.jsx("span", {
                                      className: "workspace-icon",
                                      children: o.jsx(ei, { size: 16 }),
                                    }),
                                    o.jsxs("div", {
                                      children: [
                                        o.jsx("strong", {
                                          children: i
                                            ? "Ambiente demonstrativo"
                                            : Rn
                                              ? "Painel administrativo"
                                              : "Portal do analista",
                                        }),
                                        o.jsx("small", {
                                          children: i
                                            ? "Dados ilustrativos · somente leitura"
                                            : Rn
                                              ? "Dados fictícios · simulação local"
                                              : "Acompanhamento das suas obras",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o.jsx("span", {
                                  className: "nav-caption",
                                  children: "NAVEGAÇÃO",
                                }),
                                o.jsx(L_, { page: z, onNavigate: Vt }),
                                o.jsx("div", {
                                  className: "sidebar-bottom",
                                  children: o.jsxs("button", {
                                    className: "user-profile",
                                    onClick: async () => {
                                      if (i) di();
                                      else {
                                        const { error: b } =
                                          await Pe.auth.signOut();
                                        if (b) {
                                          Qe(
                                            "Não foi possível sair. Tente novamente.",
                                          );
                                          return;
                                        }
                                        Dt("/demo/entrar");
                                      }
                                    },
                                    children: [
                                      o.jsx("span", {
                                        className: "avatar",
                                        children: i
                                          ? "CV"
                                          : (C?.email || "U")
                                              .slice(0, 2)
                                              .toUpperCase(),
                                      }),
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("strong", {
                                            children: i
                                              ? "Visitante"
                                              : C?.email?.split("@")[0],
                                          }),
                                          o.jsx("small", {
                                            children: i
                                              ? "Entrar na minha conta"
                                              : Rn
                                                ? "Administrador"
                                                : "Analista · somente consulta",
                                          }),
                                        ],
                                      }),
                                      o.jsx(Bg, { size: 17 }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "main-shell",
                              children: [
                                o.jsxs("header", {
                                  className: "topbar",
                                  children: [
                                    o.jsx("button", {
                                      className: "icon-button mobile-menu",
                                      "aria-label": "Abrir menu",
                                      "aria-expanded": P,
                                      "aria-controls": "primary-sidebar",
                                      onClick: () => x(!0),
                                      children: o.jsx(Hg, { size: 22 }),
                                    }),
                                    o.jsxs("div", {
                                      className: "breadcrumbs",
                                      children: [
                                        "Gestão de obras ",
                                        o.jsx(cr, { size: 14 }),
                                        o.jsx("strong", { children: hi }),
                                      ],
                                    }),
                                    o.jsxs("div", {
                                      className: "topbar-right",
                                      children: [
                                        o.jsxs("span", {
                                          className: "live-indicator",
                                          children: [
                                            o.jsx("i", {}),
                                            i
                                              ? "Demonstração"
                                              : "Dados demonstrativos",
                                          ],
                                        }),
                                        o.jsxs("span", {
                                          className: "header-date",
                                          children: [
                                            o.jsx(Gl, { size: 15 }),
                                            new Date().toLocaleDateString(
                                              "pt-BR",
                                              {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                timeZone: "America/Sao_Paulo",
                                              },
                                            ),
                                          ],
                                        }),
                                        o.jsx("span", {
                                          className: "avatar small",
                                          children: i
                                            ? "CV"
                                            : (C?.email || "U")
                                                .slice(0, 2)
                                                .toUpperCase(),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o.jsxs("main", {
                                  className: "main-content",
                                  children: [
                                    i &&
                                      o.jsxs("div", {
                                        className: "demo-strip",
                                        children: [
                                          o.jsxs("span", {
                                            children: [
                                              o.jsx(ls, { size: 15 }),
                                              o.jsx("strong", {
                                                children:
                                                  "Você está explorando uma demonstração.",
                                              }),
                                              " Os dados são ilustrativos e não pertencem a uma obra real.",
                                            ],
                                          }),
                                          o.jsxs("button", {
                                            onClick: di,
                                            children: [
                                              "Acessar minha conta ",
                                              o.jsx(rr, { size: 15 }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    o.jsxs("div", {
                                      className: "page-heading",
                                      children: [
                                        o.jsxs("div", {
                                          children: [
                                            o.jsxs("div", {
                                              className: "eyebrow",
                                              children: [
                                                "CONCRESERV ",
                                                o.jsx("span", {
                                                  className: "separator",
                                                  children: "/",
                                                }),
                                                i
                                                  ? "VISÃO DEMONSTRATIVA"
                                                  : Rn
                                                    ? "ADMINISTRAÇÃO"
                                                    : "ACOMPANHAMENTO",
                                              ],
                                            }),
                                            o.jsx("h1", { children: hi }),
                                            o.jsx("p", {
                                              children:
                                                Kl[z]?.description ||
                                                Kl.dashboard.description,
                                            }),
                                          ],
                                        }),
                                        o.jsx("div", {
                                          className: "heading-actions",
                                          children:
                                            z === "obras" && pa
                                              ? o.jsxs("button", {
                                                  className: "button primary",
                                                  onClick: () => Tt("works"),
                                                  children: [
                                                    o.jsx(Wa, { size: 17 }),
                                                    "Nova obra",
                                                  ],
                                                })
                                              : o.jsxs(o.Fragment, {
                                                  children: [
                                                    z !== "relatorios" &&
                                                      z !== "usuarios" &&
                                                      o.jsxs("button", {
                                                        className:
                                                          "button secondary",
                                                        disabled:
                                                          ma ||
                                                          !va ||
                                                          (aa &&
                                                            [
                                                              "estoque",
                                                              "qualidade",
                                                              "movimentacoes",
                                                            ].includes(z)),
                                                        onClick: () =>
                                                          ta({
                                                            title:
                                                              "Exportar relatório",
                                                            rows: [],
                                                          }),
                                                        children: [
                                                          o.jsx(es, {
                                                            size: 16,
                                                          }),
                                                          "Exportar",
                                                        ],
                                                      }),
                                                    Gt &&
                                                      !!va &&
                                                      z === "dashboard" &&
                                                      o.jsxs("button", {
                                                        className:
                                                          "button primary",
                                                        onClick: () =>
                                                          Tt("entries"),
                                                        children: [
                                                          o.jsx(Wa, {
                                                            size: 17,
                                                          }),
                                                          "Novo lançamento",
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                        }),
                                      ],
                                    }),
                                    o.jsx(B_, {
                                      page: z,
                                      onNavigate: Vt,
                                      canManageUsers: Ra,
                                    }),
                                    $ &&
                                      o.jsxs("div", {
                                        className: "error",
                                        role: "alert",
                                        children: [
                                          o.jsx(ka, { size: 17 }),
                                          $,
                                          o.jsx("button", {
                                            onClick: () => ge((b) => b + 1),
                                            children: "Tentar novamente",
                                          }),
                                        ],
                                      }),
                                    z !== "obras" &&
                                      z !== "usuarios" &&
                                      o.jsxs("div", {
                                        className:
                                          "filter-bar " +
                                          (za ? "" : "compact-scope"),
                                        children: [
                                          o.jsxs("div", {
                                            className: "work-select",
                                            children: [
                                              o.jsx(ei, { size: 18 }),
                                              o.jsxs("div", {
                                                children: [
                                                  o.jsx("span", {
                                                    children:
                                                      "OBRA SELECIONADA",
                                                  }),
                                                  o.jsx("select", {
                                                    "aria-label":
                                                      "Obra selecionada",
                                                    value: Te,
                                                    onChange: (b) => {
                                                      (M(b.target.value),
                                                        Ne({
                                                          ...W,
                                                          front: "",
                                                          team: "",
                                                          service: "",
                                                          type: "",
                                                        }));
                                                    },
                                                    children: Y.works.length
                                                      ? Y.works.map((b) =>
                                                          o.jsx(
                                                            "option",
                                                            {
                                                              value: b.id,
                                                              children: b.name,
                                                            },
                                                            b.id,
                                                          ),
                                                        )
                                                      : o.jsx("option", {
                                                          value: "",
                                                          children:
                                                            "Nenhuma obra vinculada",
                                                        }),
                                                  }),
                                                ],
                                              }),
                                              o.jsx(zg, { size: 15 }),
                                            ],
                                          }),
                                          za &&
                                            o.jsxs("div", {
                                              className: "period-filter",
                                              children: [
                                                o.jsx(Gl, { size: 16 }),
                                                o.jsx("input", {
                                                  type: "date",
                                                  "aria-label": "Data inicial",
                                                  value: W.from,
                                                  onChange: (b) => {
                                                    b.target.value &&
                                                      b.target.value <= W.to &&
                                                      Ne({
                                                        ...W,
                                                        from: b.target.value,
                                                      });
                                                  },
                                                }),
                                                o.jsx("span", {
                                                  children: "até",
                                                }),
                                                o.jsx("input", {
                                                  type: "date",
                                                  "aria-label": "Data final",
                                                  value: W.to,
                                                  onChange: (b) => {
                                                    b.target.value &&
                                                      b.target.value >=
                                                        W.from &&
                                                      Ne({
                                                        ...W,
                                                        to: b.target.value,
                                                      });
                                                  },
                                                }),
                                              ],
                                            }),
                                          nn.length > 0 &&
                                            o.jsxs("button", {
                                              "aria-label": "Filtros",
                                              "aria-expanded": H,
                                              "aria-controls":
                                                "filtros-da-consulta",
                                              className:
                                                "filter-toggle " +
                                                (H ? "selected" : ""),
                                              onClick: () => te(!H),
                                              children: [
                                                o.jsx(Kg, { size: 16 }),
                                                "Filtros",
                                                nn.filter(([b]) => W[b])
                                                  .length > 0 &&
                                                  o.jsx("span", {
                                                    className: "filter-count",
                                                    children: nn.filter(
                                                      ([b]) => W[b],
                                                    ).length,
                                                  }),
                                              ],
                                            }),
                                          o.jsx("button", {
                                            className:
                                              "icon-button refresh-button",
                                            "aria-label": "Atualizar dados",
                                            onClick: () => {
                                              i
                                                ? Qe(
                                                    "Os dados demonstrativos já estão atualizados.",
                                                  )
                                                : ge((b) => b + 1);
                                            },
                                            children: o.jsx(ip, {
                                              size: 16,
                                              className: se ? "spin" : "",
                                            }),
                                          }),
                                        ],
                                      }),
                                    z !== "obras" &&
                                      z !== "usuarios" &&
                                      H &&
                                      nn.length > 0 &&
                                      o.jsxs("div", {
                                        id: "filtros-da-consulta",
                                        className: "expanded-filters",
                                        children: [
                                          nn.map(([b, A, ne]) =>
                                            o.jsxs(
                                              "label",
                                              {
                                                children: [
                                                  A,
                                                  o.jsxs("select", {
                                                    value: W[b],
                                                    onChange: (ue) =>
                                                      Ne({
                                                        ...W,
                                                        [b]: ue.target.value,
                                                      }),
                                                    children: [
                                                      o.jsx("option", {
                                                        value: "",
                                                        children: "Todos",
                                                      }),
                                                      Sr(ne).map((ue) =>
                                                        o.jsx(
                                                          "option",
                                                          {
                                                            value: ue.id,
                                                            children: ue.name,
                                                          },
                                                          ue.id,
                                                        ),
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              b,
                                            ),
                                          ),
                                          o.jsxs("button", {
                                            className: "text-button",
                                            onClick: () =>
                                              Ne({
                                                ...W,
                                                front: "",
                                                team: "",
                                                service: "",
                                                type: "",
                                              }),
                                            children: [
                                              o.jsx(ip, { size: 14 }),
                                              "Limpar",
                                            ],
                                          }),
                                        ],
                                      }),
                                    se
                                      ? o.jsxs("div", {
                                          className: "content-loading",
                                          children: [
                                            o.jsx(yt, { className: "spin" }),
                                            o.jsx("p", {
                                              children:
                                                "Buscando os dados da sua obra…",
                                            }),
                                          ],
                                        })
                                      : !va && z !== "obras" && z !== "usuarios"
                                        ? o.jsxs("div", {
                                            className: "empty large",
                                            children: [
                                              o.jsx(ei, { size: 40 }),
                                              o.jsx("h2", {
                                                children: pa
                                                  ? "Seu próximo projeto começa aqui."
                                                  : "Sua conta está pronta para consulta.",
                                              }),
                                              o.jsx("p", {
                                                children: pa
                                                  ? "Cadastre uma obra, configure a equipe e defina as metas para começar a acompanhar a operação."
                                                  : "Aguarde a liberação das suas obras pelo administrador da Concreserv. Seu perfil de analista permite somente consultas.",
                                              }),
                                              pa &&
                                                o.jsxs("button", {
                                                  className: "button primary",
                                                  onClick: () => Tt("works"),
                                                  children: [
                                                    o.jsx(Wa, { size: 17 }),
                                                    "Cadastrar primeira obra",
                                                  ],
                                                }),
                                            ],
                                          })
                                        : He,
                                    o.jsxs("footer", {
                                      className: "page-footer",
                                      children: [
                                        o.jsxs("span", {
                                          className: "footer-brand",
                                          children: [
                                            o.jsx("img", {
                                              src: "/logo-concreserv.svg",
                                              alt: "Concreserv — Concreto & Serviços",
                                            }),
                                            o.jsxs("span", {
                                              children: [
                                                "© ",
                                                new Date().getFullYear(),
                                                " ",
                                                o.jsx("i", { children: "·" }),
                                                " Da fábrica ao campo.",
                                              ],
                                            }),
                                          ],
                                        }),
                                        o.jsx("span", {
                                          children: i
                                            ? "Dados demonstrativos · referência em 13/11/2026"
                                            : Y.entries.length
                                              ? "Último lançamento: " +
                                                Ee(
                                                  [...Y.entries].sort((b, A) =>
                                                    A.date.localeCompare(
                                                      b.date,
                                                    ),
                                                  )[0].date,
                                                )
                                              : "Nenhum lançamento registrado",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            oe &&
                              o.jsxs("div", {
                                className: "toast",
                                role: "status",
                                children: [
                                  o.jsx(ui, { size: 19 }),
                                  oe,
                                  o.jsx("button", {
                                    "aria-label": "Fechar notificação",
                                    onClick: () => Se(""),
                                    children: o.jsx(Uc, { size: 16 }),
                                  }),
                                ],
                              }),
                            ze &&
                              o.jsx(
                                Cc,
                                {
                                  title: ze.row
                                    ? "Editar registro"
                                    : {
                                        works: "Nova obra",
                                        teams: "Nova equipe",
                                        fronts: "Novo trecho da obra",
                                        types: "Novo tipo de peça",
                                        services: "Novo serviço",
                                        plans: "Planejar atividade",
                                        entries: "Novo lançamento diário",
                                        lots: "Registrar fabricação de lote",
                                        move: "Inspeção e movimentação de peças",
                                      }[ze.kind] || "Novo registro",
                                  subtitle: va?.name,
                                  onClose: Ea,
                                  children:
                                    ze.kind === "plans"
                                      ? o.jsx(R_, {
                                          d: Y,
                                          initial: ze.row,
                                          stageHint: ze.stageHint,
                                          onCancel: Ea,
                                          onSave: (b) => qn("plans", b),
                                        })
                                      : ze.kind === "move"
                                        ? o.jsx(D_, {
                                            d: Y,
                                            responsible: C?.email || "",
                                            onCancel: Ea,
                                            onLot: () => {
                                              (j(!0), zt({ kind: "lots" }));
                                            },
                                            onSave: (b) => qn("move", b),
                                          })
                                        : ze.kind === "entries"
                                          ? o.jsx(k_, {
                                              d: Y,
                                              initial: ze.row || ze.draft,
                                              stageHint:
                                                ze.stageHint ||
                                                (z === "placas"
                                                  ? "Fabricação de placas"
                                                  : z === "pilares"
                                                    ? "Fabricação de pilares"
                                                    : z === "campo"
                                                      ? "Execução em campo"
                                                      : void 0),
                                              onCancel: Ea,
                                              onPlanning: (b, A) => {
                                                (y(b),
                                                  w(A),
                                                  Vt("planejamento"),
                                                  zt({
                                                    kind: "plans",
                                                    stageHint: b,
                                                  }));
                                              },
                                              onTeams: (b, A) => {
                                                (y(b),
                                                  w(A),
                                                  Vt("equipes"),
                                                  zt({ kind: "teams" }));
                                              },
                                              onSave: (b) => qn("entries", b),
                                            })
                                          : o.jsx(E_, {
                                              fields: jr(ze.kind),
                                              initial: {
                                                front_id:
                                                  Y.fronts.length === 1
                                                    ? Y.fronts[0].id
                                                    : "",
                                                date: Sa(),
                                                cast_date: Sa(),
                                                normal_hours: 8,
                                                extra_hours: 0,
                                                notes: "",
                                                interference: "",
                                                requires_volume: "false",
                                                ...ze.row,
                                                ...(typeof ze.row
                                                  ?.requires_volume == "boolean"
                                                  ? {
                                                      requires_volume: String(
                                                        ze.row.requires_volume,
                                                      ),
                                                    }
                                                  : {}),
                                              },
                                              note:
                                                ze.kind === "works"
                                                  ? "Informe os dados da obra. A referência interna será gerada automaticamente."
                                                  : ze.kind === "move"
                                                    ? "Somente transições válidas e quantidades com saldo disponível são aceitas. Movimentações e inspeções são definitivas e preservam o histórico."
                                                    : void 0,
                                              onCancel: Ea,
                                              onSave: (b) => qn(ze.kind, b),
                                            }),
                                },
                                ze.kind + "-" + (ze.row?.id || "new"),
                              ),
                            Cn &&
                              o.jsx(Cc, {
                                title:
                                  Cn.table === "works"
                                    ? "Excluir obra?"
                                    : "Excluir registro?",
                                subtitle:
                                  Cn.table === "works"
                                    ? `${Cn.row.name} · ${Cn.row.code}`
                                    : "A exclusão será registrada no histórico da obra.",
                                onClose: () => {
                                  if (!deleteInFlight.current) kn(null);
                                },
                                children: o.jsxs("div", {
                                  className: "confirm-content",
                                  children: [
                                    o.jsx(ka, { size: 32 }),
                                    o.jsx("p", {
                                      children:
                                        Cn.table === "works"
                                          ? "Esta ação exclui a obra e todos os seus planejamentos, lançamentos, equipes, lotes, movimentações, acessos à obra e histórico. As contas dos usuários serão mantidas. A exclusão não pode ser desfeita pelo site."
                                          : "Confirme a exclusão deste registro. Os indicadores serão recalculados. Registros que possuem dependências não podem ser excluídos.",
                                    }),
                                    Cn.table === "works" &&
                                      o.jsxs("label", {
                                        className: "delete-work-confirmation",
                                        children: [
                                          o.jsxs("span", {
                                            children: [
                                              "Para confirmar, digite ",
                                              o.jsx("strong", {
                                                children: Cn.row.name,
                                              }),
                                            ],
                                          }),
                                          o.jsx("input", {
                                            value: deleteWorkName,
                                            onChange: (event) =>
                                              setDeleteWorkName(
                                                event.target.value,
                                              ),
                                            disabled: deletePending,
                                            autoComplete: "off",
                                            "aria-label":
                                              "Digite o nome da obra para confirmar",
                                          }),
                                        ],
                                      }),
                                    o.jsxs("div", {
                                      className: "form-actions",
                                      children: [
                                        o.jsx("button", {
                                          className: "button secondary",
                                          disabled: deletePending,
                                          onClick: () => kn(null),
                                          children: "Cancelar",
                                        }),
                                        o.jsx("button", {
                                          className: "button danger-button",
                                          disabled:
                                            deletePending ||
                                            (Cn.table === "works" &&
                                              deleteWorkName !== Cn.row.name),
                                          onClick: deleteSelectedRecord,
                                          children: deletePending
                                            ? "Excluindo…"
                                            : "Confirmar exclusão",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            wt &&
                              o.jsx(Cc, {
                                title: wt.title,
                                subtitle:
                                  wt.title === "Exportar relatório"
                                    ? "Os dados exportados respeitam a obra, os filtros e o seu perfil."
                                    : wt.rows.length === 1
                                      ? "Informações do registro selecionado."
                                      : `${wt.rows.length} registros no período consultado.`,
                                onClose: () => ta(null),
                                children:
                                  wt.title === "Exportar relatório"
                                    ? o.jsxs("div", {
                                        className: "export-options",
                                        children: [
                                          za &&
                                            z !== "obras" &&
                                            o.jsxs("button", {
                                              className: "button secondary",
                                              disabled: ma,
                                              onClick: fi,
                                              children: [
                                                o.jsx(es, { size: 18 }),
                                                "Controle completo (5 abas)",
                                              ],
                                            }),
                                          o.jsxs("button", {
                                            className: "button secondary",
                                            disabled: ma,
                                            onClick: () => fs("xlsx"),
                                            children: [
                                              o.jsx(es, { size: 18 }),
                                              "Exportar Excel (.xlsx)",
                                            ],
                                          }),
                                          o.jsxs("button", {
                                            className: "button primary",
                                            disabled: ma,
                                            onClick: () => fs("pdf"),
                                            children: [
                                              o.jsx(es, { size: 18 }),
                                              "Exportar PDF",
                                            ],
                                          }),
                                        ],
                                      })
                                    : o.jsx("div", {
                                        className: "details-list",
                                        children: wt.rows.length
                                          ? wt.rows.map((row, index) =>
                                              o.jsxs(
                                                "article",
                                                {
                                                  className: "record-sheet",
                                                  "aria-label": `Dados do registro ${index + 1}`,
                                                  children: [
                                                    wt.rows.length > 1 &&
                                                      o.jsx("h3", {
                                                        children: `Registro ${index + 1}`,
                                                      }),
                                                    o.jsx(
                                                      ReadableRecordFields,
                                                      {
                                                        fields: recordFields(
                                                          row,
                                                          Y,
                                                          wt.kind,
                                                        ),
                                                      },
                                                    ),
                                                    row.plan_id &&
                                                      o.jsx(EntryPhotoGallery, {
                                                        photos: (
                                                          Y.entry_photos || []
                                                        )
                                                          .filter(
                                                            (photo) =>
                                                              photo.entry_id ===
                                                              row.id,
                                                          )
                                                          .sort(
                                                            (a, b) =>
                                                              a.position -
                                                              b.position,
                                                          ),
                                                      }),
                                                  ],
                                                },
                                                row.id || index,
                                              ),
                                            )
                                          : o.jsx("div", {
                                              className: "empty",
                                              children:
                                                "Nenhum registro no escopo consultado.",
                                            }),
                                      }),
                              }),
                          ],
                        })
            : o.jsxs("div", {
                className: "full-loading",
                children: [
                  o.jsx(yt, { className: "spin" }),
                  "Carregando Concreserv…",
                ],
              })
  );
}
Tg.createRoot(document.getElementById("root")).render(
  o.jsx(bg.StrictMode, { children: o.jsx(G_, {}) }),
);
export {
  Pl as B,
  ui as C,
  ls as E,
  yt as L,
  Cc as M,
  ip as R,
  Gg as S,
  Zl as T,
  Lp as U,
  ir as _,
  ka as a,
  zp as b,
  cr as c,
  K_ as d,
  fe as f,
  pg as g,
  o as j,
  K as r,
  Pe as s,
};
