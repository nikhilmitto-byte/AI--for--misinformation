(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function ux(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $d={exports:{}},ll={},Yd={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function lM(){if(f0)return pt;f0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=m&&k[m]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function v(k,Q,De){this.props=k,this.context=Q,this.refs=S,this.updater=De||y}v.prototype.isReactComponent={},v.prototype.setState=function(k,Q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Q,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=v.prototype;function R(k,Q,De){this.props=k,this.context=Q,this.refs=S,this.updater=De||y}var T=R.prototype=new x;T.constructor=R,M(T,v.prototype),T.isPureReactComponent=!0;var w=Array.isArray,D=Object.prototype.hasOwnProperty,U={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(k,Q,De){var $,he={},Te=null,Se=null;if(Q!=null)for($ in Q.ref!==void 0&&(Se=Q.ref),Q.key!==void 0&&(Te=""+Q.key),Q)D.call(Q,$)&&!N.hasOwnProperty($)&&(he[$]=Q[$]);var Ae=arguments.length-2;if(Ae===1)he.children=De;else if(1<Ae){for(var Fe=Array(Ae),et=0;et<Ae;et++)Fe[et]=arguments[et+2];he.children=Fe}if(k&&k.defaultProps)for($ in Ae=k.defaultProps,Ae)he[$]===void 0&&(he[$]=Ae[$]);return{$$typeof:r,type:k,key:Te,ref:Se,props:he,_owner:U.current}}function C(k,Q){return{$$typeof:r,type:k.type,key:Q,ref:k.ref,props:k.props,_owner:k._owner}}function b(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function B(k){var Q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(De){return Q[De]})}var K=/\/+/g;function q(k,Q){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):Q.toString(36)}function ne(k,Q,De,$,he){var Te=typeof k;(Te==="undefined"||Te==="boolean")&&(k=null);var Se=!1;if(k===null)Se=!0;else switch(Te){case"string":case"number":Se=!0;break;case"object":switch(k.$$typeof){case r:case e:Se=!0}}if(Se)return Se=k,he=he(Se),k=$===""?"."+q(Se,0):$,w(he)?(De="",k!=null&&(De=k.replace(K,"$&/")+"/"),ne(he,Q,De,"",function(et){return et})):he!=null&&(b(he)&&(he=C(he,De+(!he.key||Se&&Se.key===he.key?"":(""+he.key).replace(K,"$&/")+"/")+k)),Q.push(he)),1;if(Se=0,$=$===""?".":$+":",w(k))for(var Ae=0;Ae<k.length;Ae++){Te=k[Ae];var Fe=$+q(Te,Ae);Se+=ne(Te,Q,De,Fe,he)}else if(Fe=_(k),typeof Fe=="function")for(k=Fe.call(k),Ae=0;!(Te=k.next()).done;)Te=Te.value,Fe=$+q(Te,Ae++),Se+=ne(Te,Q,De,Fe,he);else if(Te==="object")throw Q=String(k),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Se}function ue(k,Q,De){if(k==null)return k;var $=[],he=0;return ne(k,$,"","",function(Te){return Q.call(De,Te,he++)}),$}function Z(k){if(k._status===-1){var Q=k._result;Q=Q(),Q.then(function(De){(k._status===0||k._status===-1)&&(k._status=1,k._result=De)},function(De){(k._status===0||k._status===-1)&&(k._status=2,k._result=De)}),k._status===-1&&(k._status=0,k._result=Q)}if(k._status===1)return k._result.default;throw k._result}var re={current:null},z={transition:null},de={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:z,ReactCurrentOwner:U};function ce(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ue,forEach:function(k,Q,De){ue(k,function(){Q.apply(this,arguments)},De)},count:function(k){var Q=0;return ue(k,function(){Q++}),Q},toArray:function(k){return ue(k,function(Q){return Q})||[]},only:function(k){if(!b(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},pt.Component=v,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=R,pt.StrictMode=n,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,pt.act=ce,pt.cloneElement=function(k,Q,De){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var $=M({},k.props),he=k.key,Te=k.ref,Se=k._owner;if(Q!=null){if(Q.ref!==void 0&&(Te=Q.ref,Se=U.current),Q.key!==void 0&&(he=""+Q.key),k.type&&k.type.defaultProps)var Ae=k.type.defaultProps;for(Fe in Q)D.call(Q,Fe)&&!N.hasOwnProperty(Fe)&&($[Fe]=Q[Fe]===void 0&&Ae!==void 0?Ae[Fe]:Q[Fe])}var Fe=arguments.length-2;if(Fe===1)$.children=De;else if(1<Fe){Ae=Array(Fe);for(var et=0;et<Fe;et++)Ae[et]=arguments[et+2];$.children=Ae}return{$$typeof:r,type:k.type,key:he,ref:Te,props:$,_owner:Se}},pt.createContext=function(k){return k={$$typeof:l,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},pt.createElement=I,pt.createFactory=function(k){var Q=I.bind(null,k);return Q.type=k,Q},pt.createRef=function(){return{current:null}},pt.forwardRef=function(k){return{$$typeof:c,render:k}},pt.isValidElement=b,pt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:Z}},pt.memo=function(k,Q){return{$$typeof:h,type:k,compare:Q===void 0?null:Q}},pt.startTransition=function(k){var Q=z.transition;z.transition={};try{k()}finally{z.transition=Q}},pt.unstable_act=ce,pt.useCallback=function(k,Q){return re.current.useCallback(k,Q)},pt.useContext=function(k){return re.current.useContext(k)},pt.useDebugValue=function(){},pt.useDeferredValue=function(k){return re.current.useDeferredValue(k)},pt.useEffect=function(k,Q){return re.current.useEffect(k,Q)},pt.useId=function(){return re.current.useId()},pt.useImperativeHandle=function(k,Q,De){return re.current.useImperativeHandle(k,Q,De)},pt.useInsertionEffect=function(k,Q){return re.current.useInsertionEffect(k,Q)},pt.useLayoutEffect=function(k,Q){return re.current.useLayoutEffect(k,Q)},pt.useMemo=function(k,Q){return re.current.useMemo(k,Q)},pt.useReducer=function(k,Q,De){return re.current.useReducer(k,Q,De)},pt.useRef=function(k){return re.current.useRef(k)},pt.useState=function(k){return re.current.useState(k)},pt.useSyncExternalStore=function(k,Q,De){return re.current.useSyncExternalStore(k,Q,De)},pt.useTransition=function(){return re.current.useTransition()},pt.version="18.3.1",pt}var d0;function em(){return d0||(d0=1,Yd.exports=lM()),Yd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function uM(){if(h0)return ll;h0=1;var r=em(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,h){var p,m={},_=null,y=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:c,key:_,ref:y,props:m,_owner:s.current}}return ll.Fragment=t,ll.jsx=l,ll.jsxs=l,ll}var p0;function cM(){return p0||(p0=1,$d.exports=uM()),$d.exports}var pe=cM(),le=em();const fM=ux(le);var ec={},Kd={exports:{}},$n={},Zd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function dM(){return m0||(m0=1,(function(r){function e(z,de){var ce=z.length;z.push(de);e:for(;0<ce;){var k=ce-1>>>1,Q=z[k];if(0<s(Q,de))z[k]=de,z[ce]=Q,ce=k;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var de=z[0],ce=z.pop();if(ce!==de){z[0]=ce;e:for(var k=0,Q=z.length,De=Q>>>1;k<De;){var $=2*(k+1)-1,he=z[$],Te=$+1,Se=z[Te];if(0>s(he,ce))Te<Q&&0>s(Se,he)?(z[k]=Se,z[Te]=ce,k=Te):(z[k]=he,z[$]=ce,k=$);else if(Te<Q&&0>s(Se,ce))z[k]=Se,z[Te]=ce,k=Te;else break e}}return de}function s(z,de){var ce=z.sortIndex-de.sortIndex;return ce!==0?ce:z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var f=[],h=[],p=1,m=null,_=3,y=!1,M=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var de=t(h);de!==null;){if(de.callback===null)n(h);else if(de.startTime<=z)n(h),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(h)}}function w(z){if(S=!1,T(z),!M)if(t(f)!==null)M=!0,Z(D);else{var de=t(h);de!==null&&re(w,de.startTime-z)}}function D(z,de){M=!1,S&&(S=!1,x(I),I=-1),y=!0;var ce=_;try{for(T(de),m=t(f);m!==null&&(!(m.expirationTime>de)||z&&!B());){var k=m.callback;if(typeof k=="function"){m.callback=null,_=m.priorityLevel;var Q=k(m.expirationTime<=de);de=r.unstable_now(),typeof Q=="function"?m.callback=Q:m===t(f)&&n(f),T(de)}else n(f);m=t(f)}if(m!==null)var De=!0;else{var $=t(h);$!==null&&re(w,$.startTime-de),De=!1}return De}finally{m=null,_=ce,y=!1}}var U=!1,N=null,I=-1,C=5,b=-1;function B(){return!(r.unstable_now()-b<C)}function K(){if(N!==null){var z=r.unstable_now();b=z;var de=!0;try{de=N(!0,z)}finally{de?q():(U=!1,N=null)}}else U=!1}var q;if(typeof R=="function")q=function(){R(K)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ue=ne.port2;ne.port1.onmessage=K,q=function(){ue.postMessage(null)}}else q=function(){v(K,0)};function Z(z){N=z,U||(U=!0,q())}function re(z,de){I=v(function(){z(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){M||y||(M=!0,Z(D))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(z){switch(_){case 1:case 2:case 3:var de=3;break;default:de=_}var ce=_;_=de;try{return z()}finally{_=ce}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,de){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ce=_;_=z;try{return de()}finally{_=ce}},r.unstable_scheduleCallback=function(z,de,ce){var k=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?k+ce:k):ce=k,z){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ce+Q,z={id:p++,callback:de,priorityLevel:z,startTime:ce,expirationTime:Q,sortIndex:-1},ce>k?(z.sortIndex=ce,e(h,z),t(f)===null&&z===t(h)&&(S?(x(I),I=-1):S=!0,re(w,ce-k))):(z.sortIndex=Q,e(f,z),M||y||(M=!0,Z(D))),z},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(z){var de=_;return function(){var ce=_;_=de;try{return z.apply(this,arguments)}finally{_=ce}}}})(Jd)),Jd}var g0;function hM(){return g0||(g0=1,Zd.exports=dM()),Zd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function pM(){if(_0)return $n;_0=1;var r=em(),e=hM();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function _(i){return f.call(m,i)?!0:f.call(p,i)?!1:h.test(i)?m[i]=!0:(p[i]=!0,!1)}function y(i,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,u,d){if(o===null||typeof o>"u"||y(i,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function S(i,o,u,d,g,E,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=E,this.removeEmptyString=A}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){v[i]=new S(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];v[o]=new S(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){v[i]=new S(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){v[i]=new S(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){v[i]=new S(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){v[i]=new S(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){v[i]=new S(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){v[i]=new S(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){v[i]=new S(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(x,R);v[o]=new S(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(x,R);v[o]=new S(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(x,R);v[o]=new S(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){v[i]=new S(i,1,!1,i.toLowerCase(),null,!1,!1)}),v.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){v[i]=new S(i,1,!1,i.toLowerCase(),null,!0,!0)});function T(i,o,u,d){var g=v.hasOwnProperty(o)?v[o]:null;(g!==null?g.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,u,g,d)&&(u=null),d||g===null?_(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):g.mustUseProperty?i[g.propertyName]=u===null?g.type===3?!1:"":u:(o=g.attributeName,d=g.attributeNamespace,u===null?i.removeAttribute(o):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,d?i.setAttributeNS(d,o,u):i.setAttribute(o,u))))}var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),U=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),z=Symbol.iterator;function de(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var ce=Object.assign,k;function Q(i){if(k===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);k=o&&o[1]||""}return`
`+k+i}var De=!1;function $(i,o){if(!i||De)return"";De=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ie){var d=ie}Reflect.construct(i,[],o)}else{try{o.call()}catch(ie){d=ie}i.call(o.prototype)}else{try{throw Error()}catch(ie){d=ie}i()}}catch(ie){if(ie&&d&&typeof ie.stack=="string"){for(var g=ie.stack.split(`
`),E=d.stack.split(`
`),A=g.length-1,F=E.length-1;1<=A&&0<=F&&g[A]!==E[F];)F--;for(;1<=A&&0<=F;A--,F--)if(g[A]!==E[F]){if(A!==1||F!==1)do if(A--,F--,0>F||g[A]!==E[F]){var H=`
`+g[A].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=A&&0<=F);break}}}finally{De=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?Q(i):""}function he(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=$(i.type,!1),i;case 11:return i=$(i.type.render,!1),i;case 1:return i=$(i.type,!0),i;default:return""}}function Te(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case U:return"Portal";case C:return"Profiler";case I:return"StrictMode";case q:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case K:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ue:return o=i.displayName||null,o!==null?o:Te(i.type)||"Memo";case Z:o=i._payload,i=i._init;try{return Te(i(o))}catch{}}return null}function Se(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(o);case 8:return o===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Fe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function et(i){var o=Fe(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,E=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return g.call(this)},set:function(A){d=""+A,E.call(this,A)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Dt(i){i._valueTracker||(i._valueTracker=et(i))}function _t(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return i&&(d=Fe(i)?i.checked?"true":"false":i.value),i=d,i!==u?(o.setValue(i),!0):!1}function Ft(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function V(i,o){var u=o.checked;return ce({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function In(i,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=Ae(o.value!=null?o.value:u),i._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function mt(i,o){o=o.checked,o!=null&&T(i,"checked",o,!1)}function dt(i,o){mt(i,o);var u=Ae(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Lt(i,o.type,u):o.hasOwnProperty("defaultValue")&&Lt(i,o.type,Ae(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Ye(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function Lt(i,o,u){(o!=="number"||Ft(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var qe=Array.isArray;function O(i,o,u,d){if(i=i.options,o){o={};for(var g=0;g<u.length;g++)o["$"+u[g]]=!0;for(u=0;u<i.length;u++)g=o.hasOwnProperty("$"+i[u].value),i[u].selected!==g&&(i[u].selected=g),g&&d&&(i[u].defaultSelected=!0)}else{for(u=""+Ae(u),o=null,g=0;g<i.length;g++){if(i[g].value===u){i[g].selected=!0,d&&(i[g].defaultSelected=!0);return}o!==null||i[g].disabled||(o=i[g])}o!==null&&(o.selected=!0)}}function P(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ee(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(qe(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:Ae(u)}}function _e(i,o){var u=Ae(o.value),d=Ae(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),d!=null&&(i.defaultValue=""+d)}function xe(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function me(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?me(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,ke=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,g){MSApp.execUnsafeLocalFunction(function(){return i(o,u,d,g)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function ft(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){He.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),we[o]=we[i]})});function Ze(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||we.hasOwnProperty(i)&&we[i]?(""+o).trim():o+"px"}function tt(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,g=Ze(u,o[u],d);u==="float"&&(u="cssFloat"),d?i.setProperty(u,g):i[u]=g}}var Ve=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(i,o){if(o){if(Ve[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ot(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var be=null,fe=null,ge=null;function Ue(i){if(i=qa(i)){if(typeof be!="function")throw Error(t(280));var o=i.stateNode;o&&(o=mu(o),be(i.stateNode,i.type,o))}}function Ne(i){fe?ge?ge.push(i):ge=[i]:fe=i}function at(){if(fe){var i=fe,o=ge;if(ge=fe=null,Ue(i),o)for(i=0;i<o.length;i++)Ue(o[i])}}function Bt(i,o){return i(o)}function cn(){}var Et=!1;function Vn(i,o,u){if(Et)return i(o,u);Et=!0;try{return Bt(i,o,u)}finally{Et=!1,(fe!==null||ge!==null)&&(cn(),at())}}function On(i,o){var u=i.stateNode;if(u===null)return null;var d=mu(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var vo=!1;if(c)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){vo=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{vo=!1}function hr(i,o,u,d,g,E,A,F,H){var ie=Array.prototype.slice.call(arguments,3);try{o.apply(u,ie)}catch(ye){this.onError(ye)}}var pr=!1,bs=null,Ps=!1,Gr=null,$l={onError:function(i){pr=!0,bs=i}};function xo(i,o,u,d,g,E,A,F,H){pr=!1,bs=null,hr.apply($l,arguments)}function Yl(i,o,u,d,g,E,A,F,H){if(xo.apply(this,arguments),pr){if(pr){var ie=bs;pr=!1,bs=null}else throw Error(t(198));Ps||(Ps=!0,Gr=ie)}}function Zi(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function Kl(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Zl(i){if(Zi(i)!==i)throw Error(t(188))}function _f(i){var o=i.alternate;if(!o){if(o=Zi(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,d=o;;){var g=u.return;if(g===null)break;var E=g.alternate;if(E===null){if(d=g.return,d!==null){u=d;continue}break}if(g.child===E.child){for(E=g.child;E;){if(E===u)return Zl(g),i;if(E===d)return Zl(g),o;E=E.sibling}throw Error(t(188))}if(u.return!==d.return)u=g,d=E;else{for(var A=!1,F=g.child;F;){if(F===u){A=!0,u=g,d=E;break}if(F===d){A=!0,d=g,u=E;break}F=F.sibling}if(!A){for(F=E.child;F;){if(F===u){A=!0,u=E,d=g;break}if(F===d){A=!0,d=E,u=g;break}F=F.sibling}if(!A)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function Jl(i){return i=_f(i),i!==null?Ql(i):null}function Ql(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Ql(i);if(o!==null)return o;i=i.sibling}return null}var L=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,G=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Oe=e.unstable_UserBlockingPriority,Be=e.unstable_NormalPriority,it=e.unstable_LowPriority,rt=e.unstable_IdlePriority,$e=null,lt=null;function wt(i){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot($e,i,void 0,(i.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Ke,Vt=Math.log,St=Math.LN2;function Ke(i){return i>>>=0,i===0?32:31-(Vt(i)/St|0)|0}var Zt=64,vt=4194304;function yn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Oi(i,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,g=i.suspendedLanes,E=i.pingedLanes,A=u&268435455;if(A!==0){var F=A&~g;F!==0?d=yn(F):(E&=A,E!==0&&(d=yn(E)))}else A=u&~g,A!==0?d=yn(A):E!==0&&(d=yn(E));if(d===0)return 0;if(o!==0&&o!==d&&(o&g)===0&&(g=d&-d,E=o&-o,g>=E||g===16&&(E&4194240)!==0))return o;if((d&4)!==0&&(d|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)u=31-Tt(o),g=1<<u,d|=i[u],o&=~g;return d}function Fn(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ls(i,o){for(var u=i.suspendedLanes,d=i.pingedLanes,g=i.expirationTimes,E=i.pendingLanes;0<E;){var A=31-Tt(E),F=1<<A,H=g[A];H===-1?((F&u)===0||(F&d)!==0)&&(g[A]=Fn(F,o)):H<=o&&(i.expiredLanes|=F),E&=~F}}function Nt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function kn(){var i=Zt;return Zt<<=1,(Zt&4194240)===0&&(Zt=64),i}function wn(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function en(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Tt(o),i[o]=u}function Tn(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<u;){var g=31-Tt(u),E=1<<g;o[g]=0,d[g]=-1,i[g]=-1,u&=~E}}function Ds(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var d=31-Tt(u),g=1<<d;g&o|i[d]&o&&(i[d]|=o),u&=~g}}var gt=0;function Gm(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Wm,vf,Xm,jm,qm,xf=!1,eu=[],Wr=null,Xr=null,jr=null,La=new Map,Da=new Map,qr=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(i,o){switch(i){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":La.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(o.pointerId)}}function Na(i,o,u,d,g,E){return i===null||i.nativeEvent!==E?(i={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:E,targetContainers:[g]},o!==null&&(o=qa(o),o!==null&&vf(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),i)}function LS(i,o,u,d,g){switch(o){case"focusin":return Wr=Na(Wr,i,o,u,d,g),!0;case"dragenter":return Xr=Na(Xr,i,o,u,d,g),!0;case"mouseover":return jr=Na(jr,i,o,u,d,g),!0;case"pointerover":var E=g.pointerId;return La.set(E,Na(La.get(E)||null,i,o,u,d,g)),!0;case"gotpointercapture":return E=g.pointerId,Da.set(E,Na(Da.get(E)||null,i,o,u,d,g)),!0}return!1}function Ym(i){var o=Ns(i.target);if(o!==null){var u=Zi(o);if(u!==null){if(o=u.tag,o===13){if(o=Kl(u),o!==null){i.blockedOn=o,qm(i.priority,function(){Xm(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function tu(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=Sf(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var d=new u.constructor(u.type,u);bt=d,u.target.dispatchEvent(d),bt=null}else return o=qa(u),o!==null&&vf(o),i.blockedOn=u,!1;o.shift()}return!0}function Km(i,o,u){tu(i)&&u.delete(o)}function DS(){xf=!1,Wr!==null&&tu(Wr)&&(Wr=null),Xr!==null&&tu(Xr)&&(Xr=null),jr!==null&&tu(jr)&&(jr=null),La.forEach(Km),Da.forEach(Km)}function Ua(i,o){i.blockedOn===o&&(i.blockedOn=null,xf||(xf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,DS)))}function Ia(i){function o(g){return Ua(g,i)}if(0<eu.length){Ua(eu[0],i);for(var u=1;u<eu.length;u++){var d=eu[u];d.blockedOn===i&&(d.blockedOn=null)}}for(Wr!==null&&Ua(Wr,i),Xr!==null&&Ua(Xr,i),jr!==null&&Ua(jr,i),La.forEach(o),Da.forEach(o),u=0;u<qr.length;u++)d=qr[u],d.blockedOn===i&&(d.blockedOn=null);for(;0<qr.length&&(u=qr[0],u.blockedOn===null);)Ym(u),u.blockedOn===null&&qr.shift()}var yo=w.ReactCurrentBatchConfig,nu=!0;function NS(i,o,u,d){var g=gt,E=yo.transition;yo.transition=null;try{gt=1,yf(i,o,u,d)}finally{gt=g,yo.transition=E}}function US(i,o,u,d){var g=gt,E=yo.transition;yo.transition=null;try{gt=4,yf(i,o,u,d)}finally{gt=g,yo.transition=E}}function yf(i,o,u,d){if(nu){var g=Sf(i,o,u,d);if(g===null)kf(i,o,d,iu,u),$m(i,d);else if(LS(g,i,o,u,d))d.stopPropagation();else if($m(i,d),o&4&&-1<PS.indexOf(i)){for(;g!==null;){var E=qa(g);if(E!==null&&Wm(E),E=Sf(i,o,u,d),E===null&&kf(i,o,d,iu,u),E===g)break;g=E}g!==null&&d.stopPropagation()}else kf(i,o,d,null,u)}}var iu=null;function Sf(i,o,u,d){if(iu=null,i=X(d),i=Ns(i),i!==null)if(o=Zi(i),o===null)i=null;else if(u=o.tag,u===13){if(i=Kl(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return iu=i,null}function Zm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case Pe:return 1;case Oe:return 4;case Be:case it:return 16;case rt:return 536870912;default:return 16}default:return 16}}var $r=null,Ef=null,ru=null;function Jm(){if(ru)return ru;var i,o=Ef,u=o.length,d,g="value"in $r?$r.value:$r.textContent,E=g.length;for(i=0;i<u&&o[i]===g[i];i++);var A=u-i;for(d=1;d<=A&&o[u-d]===g[E-d];d++);return ru=g.slice(i,1<d?1-d:void 0)}function su(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function ou(){return!0}function Qm(){return!1}function ai(i){function o(u,d,g,E,A){this._reactName=u,this._targetInst=g,this.type=d,this.nativeEvent=E,this.target=A,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(u=i[F],this[F]=u?u(E):E[F]);return this.isDefaultPrevented=(E.defaultPrevented!=null?E.defaultPrevented:E.returnValue===!1)?ou:Qm,this.isPropagationStopped=Qm,this}return ce(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=ou)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=ou)},persist:function(){},isPersistent:ou}),o}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=ai(So),Oa=ce({},So,{view:0,detail:0}),IS=ai(Oa),wf,Tf,Fa,au=ce({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Fa&&(Fa&&i.type==="mousemove"?(wf=i.screenX-Fa.screenX,Tf=i.screenY-Fa.screenY):Tf=wf=0,Fa=i),wf)},movementY:function(i){return"movementY"in i?i.movementY:Tf}}),eg=ai(au),OS=ce({},au,{dataTransfer:0}),FS=ai(OS),kS=ce({},Oa,{relatedTarget:0}),Rf=ai(kS),BS=ce({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),zS=ai(BS),HS=ce({},So,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),VS=ai(HS),GS=ce({},So,{data:0}),tg=ai(GS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qS(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=jS[i])?!!o[i]:!1}function Af(){return qS}var $S=ce({},Oa,{key:function(i){if(i.key){var o=WS[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=su(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?XS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(i){return i.type==="keypress"?su(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?su(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),YS=ai($S),KS=ce({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=ai(KS),ZS=ce({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),JS=ai(ZS),QS=ce({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=ai(QS),tE=ce({},au,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=ai(tE),iE=[9,13,27,32],Cf=c&&"CompositionEvent"in window,ka=null;c&&"documentMode"in document&&(ka=document.documentMode);var rE=c&&"TextEvent"in window&&!ka,ig=c&&(!Cf||ka&&8<ka&&11>=ka),rg=" ",sg=!1;function og(i,o){switch(i){case"keyup":return iE.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Eo=!1;function sE(i,o){switch(i){case"compositionend":return ag(o);case"keypress":return o.which!==32?null:(sg=!0,rg);case"textInput":return i=o.data,i===rg&&sg?null:i;default:return null}}function oE(i,o){if(Eo)return i==="compositionend"||!Cf&&og(i,o)?(i=Jm(),ru=Ef=$r=null,Eo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return ig&&o.locale!=="ko"?null:o.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!aE[i.type]:o==="textarea"}function ug(i,o,u,d){Ne(d),o=du(o,"onChange"),0<o.length&&(u=new Mf("onChange","change",null,u,d),i.push({event:u,listeners:o}))}var Ba=null,za=null;function lE(i){Ag(i,0)}function lu(i){var o=Ao(i);if(_t(o))return i}function uE(i,o){if(i==="change")return o}var cg=!1;if(c){var bf;if(c){var Pf="oninput"in document;if(!Pf){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),Pf=typeof fg.oninput=="function"}bf=Pf}else bf=!1;cg=bf&&(!document.documentMode||9<document.documentMode)}function dg(){Ba&&(Ba.detachEvent("onpropertychange",hg),za=Ba=null)}function hg(i){if(i.propertyName==="value"&&lu(za)){var o=[];ug(o,za,i,X(i)),Vn(lE,o)}}function cE(i,o,u){i==="focusin"?(dg(),Ba=o,za=u,Ba.attachEvent("onpropertychange",hg)):i==="focusout"&&dg()}function fE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return lu(za)}function dE(i,o){if(i==="click")return lu(o)}function hE(i,o){if(i==="input"||i==="change")return lu(o)}function pE(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Fi=typeof Object.is=="function"?Object.is:pE;function Ha(i,o){if(Fi(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var g=u[d];if(!f.call(o,g)||!Fi(i[g],o[g]))return!1}return!0}function pg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function mg(i,o){var u=pg(i);i=0;for(var d;u;){if(u.nodeType===3){if(d=i+u.textContent.length,i<=o&&d>=o)return{node:u,offset:o-i};i=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=pg(u)}}function gg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?gg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function _g(){for(var i=window,o=Ft();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=Ft(i.document)}return o}function Lf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function mE(i){var o=_g(),u=i.focusedElem,d=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&gg(u.ownerDocument.documentElement,u)){if(d!==null&&Lf(u)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var g=u.textContent.length,E=Math.min(d.start,g);d=d.end===void 0?E:Math.min(d.end,g),!i.extend&&E>d&&(g=d,d=E,E=g),g=mg(u,E);var A=mg(u,d);g&&A&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),i.removeAllRanges(),E>d?(i.addRange(o),i.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var gE=c&&"documentMode"in document&&11>=document.documentMode,Mo=null,Df=null,Va=null,Nf=!1;function vg(i,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Nf||Mo==null||Mo!==Ft(d)||(d=Mo,"selectionStart"in d&&Lf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Va&&Ha(Va,d)||(Va=d,d=du(Df,"onSelect"),0<d.length&&(o=new Mf("onSelect","select",null,o,u),i.push({event:o,listeners:d}),o.target=Mo)))}function uu(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var wo={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},Uf={},xg={};c&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function cu(i){if(Uf[i])return Uf[i];if(!wo[i])return i;var o=wo[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in xg)return Uf[i]=o[u];return i}var yg=cu("animationend"),Sg=cu("animationiteration"),Eg=cu("animationstart"),Mg=cu("transitionend"),wg=new Map,Tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(i,o){wg.set(i,o),a(o,[i])}for(var If=0;If<Tg.length;If++){var Of=Tg[If],_E=Of.toLowerCase(),vE=Of[0].toUpperCase()+Of.slice(1);Yr(_E,"on"+vE)}Yr(yg,"onAnimationEnd"),Yr(Sg,"onAnimationIteration"),Yr(Eg,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Mg,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Rg(i,o,u){var d=i.type||"unknown-event";i.currentTarget=u,Yl(d,o,void 0,i),i.currentTarget=null}function Ag(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var d=i[u],g=d.event;d=d.listeners;e:{var E=void 0;if(o)for(var A=d.length-1;0<=A;A--){var F=d[A],H=F.instance,ie=F.currentTarget;if(F=F.listener,H!==E&&g.isPropagationStopped())break e;Rg(g,F,ie),E=H}else for(A=0;A<d.length;A++){if(F=d[A],H=F.instance,ie=F.currentTarget,F=F.listener,H!==E&&g.isPropagationStopped())break e;Rg(g,F,ie),E=H}}}if(Ps)throw i=Gr,Ps=!1,Gr=null,i}function zt(i,o){var u=o[Wf];u===void 0&&(u=o[Wf]=new Set);var d=i+"__bubble";u.has(d)||(Cg(o,i,2,!1),u.add(d))}function Ff(i,o,u){var d=0;o&&(d|=4),Cg(u,i,d,o)}var fu="_reactListening"+Math.random().toString(36).slice(2);function Wa(i){if(!i[fu]){i[fu]=!0,n.forEach(function(u){u!=="selectionchange"&&(xE.has(u)||Ff(u,!1,i),Ff(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[fu]||(o[fu]=!0,Ff("selectionchange",!1,o))}}function Cg(i,o,u,d){switch(Zm(o)){case 1:var g=NS;break;case 4:g=US;break;default:g=yf}u=g.bind(null,o,u,i),g=void 0,!vo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),d?g!==void 0?i.addEventListener(o,u,{capture:!0,passive:g}):i.addEventListener(o,u,!0):g!==void 0?i.addEventListener(o,u,{passive:g}):i.addEventListener(o,u,!1)}function kf(i,o,u,d,g){var E=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var F=d.stateNode.containerInfo;if(F===g||F.nodeType===8&&F.parentNode===g)break;if(A===4)for(A=d.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===g||H.nodeType===8&&H.parentNode===g))return;A=A.return}for(;F!==null;){if(A=Ns(F),A===null)return;if(H=A.tag,H===5||H===6){d=E=A;continue e}F=F.parentNode}}d=d.return}Vn(function(){var ie=E,ye=X(u),Ee=[];e:{var ve=wg.get(i);if(ve!==void 0){var Ie=Mf,Ge=i;switch(i){case"keypress":if(su(u)===0)break e;case"keydown":case"keyup":Ie=YS;break;case"focusin":Ge="focus",Ie=Rf;break;case"focusout":Ge="blur",Ie=Rf;break;case"beforeblur":case"afterblur":Ie=Rf;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=JS;break;case yg:case Sg:case Eg:Ie=zS;break;case Mg:Ie=eE;break;case"scroll":Ie=IS;break;case"wheel":Ie=nE;break;case"copy":case"cut":case"paste":Ie=VS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=ng}var We=(o&4)!==0,tn=!We&&i==="scroll",Y=We?ve!==null?ve+"Capture":null:ve;We=[];for(var W=ie,J;W!==null;){J=W;var Re=J.stateNode;if(J.tag===5&&Re!==null&&(J=Re,Y!==null&&(Re=On(W,Y),Re!=null&&We.push(Xa(W,Re,J)))),tn)break;W=W.return}0<We.length&&(ve=new Ie(ve,Ge,null,u,ye),Ee.push({event:ve,listeners:We}))}}if((o&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",ve&&u!==bt&&(Ge=u.relatedTarget||u.fromElement)&&(Ns(Ge)||Ge[mr]))break e;if((Ie||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ie?(Ge=u.relatedTarget||u.toElement,Ie=ie,Ge=Ge?Ns(Ge):null,Ge!==null&&(tn=Zi(Ge),Ge!==tn||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Ie=null,Ge=ie),Ie!==Ge)){if(We=eg,Re="onMouseLeave",Y="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(We=ng,Re="onPointerLeave",Y="onPointerEnter",W="pointer"),tn=Ie==null?ve:Ao(Ie),J=Ge==null?ve:Ao(Ge),ve=new We(Re,W+"leave",Ie,u,ye),ve.target=tn,ve.relatedTarget=J,Re=null,Ns(ye)===ie&&(We=new We(Y,W+"enter",Ge,u,ye),We.target=J,We.relatedTarget=tn,Re=We),tn=Re,Ie&&Ge)t:{for(We=Ie,Y=Ge,W=0,J=We;J;J=To(J))W++;for(J=0,Re=Y;Re;Re=To(Re))J++;for(;0<W-J;)We=To(We),W--;for(;0<J-W;)Y=To(Y),J--;for(;W--;){if(We===Y||Y!==null&&We===Y.alternate)break t;We=To(We),Y=To(Y)}We=null}else We=null;Ie!==null&&bg(Ee,ve,Ie,We,!1),Ge!==null&&tn!==null&&bg(Ee,tn,Ge,We,!0)}}e:{if(ve=ie?Ao(ie):window,Ie=ve.nodeName&&ve.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ve.type==="file")var je=uE;else if(lg(ve))if(cg)je=hE;else{je=fE;var Je=cE}else(Ie=ve.nodeName)&&Ie.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=dE);if(je&&(je=je(i,ie))){ug(Ee,je,u,ye);break e}Je&&Je(i,ve,ie),i==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&Lt(ve,"number",ve.value)}switch(Je=ie?Ao(ie):window,i){case"focusin":(lg(Je)||Je.contentEditable==="true")&&(Mo=Je,Df=ie,Va=null);break;case"focusout":Va=Df=Mo=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,vg(Ee,u,ye);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":vg(Ee,u,ye)}var Qe;if(Cf)e:{switch(i){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else Eo?og(i,u)&&(st="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(st="onCompositionStart");st&&(ig&&u.locale!=="ko"&&(Eo||st!=="onCompositionStart"?st==="onCompositionEnd"&&Eo&&(Qe=Jm()):($r=ye,Ef="value"in $r?$r.value:$r.textContent,Eo=!0)),Je=du(ie,st),0<Je.length&&(st=new tg(st,i,null,u,ye),Ee.push({event:st,listeners:Je}),Qe?st.data=Qe:(Qe=ag(u),Qe!==null&&(st.data=Qe)))),(Qe=rE?sE(i,u):oE(i,u))&&(ie=du(ie,"onBeforeInput"),0<ie.length&&(ye=new tg("onBeforeInput","beforeinput",null,u,ye),Ee.push({event:ye,listeners:ie}),ye.data=Qe))}Ag(Ee,o)})}function Xa(i,o,u){return{instance:i,listener:o,currentTarget:u}}function du(i,o){for(var u=o+"Capture",d=[];i!==null;){var g=i,E=g.stateNode;g.tag===5&&E!==null&&(g=E,E=On(i,u),E!=null&&d.unshift(Xa(i,E,g)),E=On(i,o),E!=null&&d.push(Xa(i,E,g))),i=i.return}return d}function To(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function bg(i,o,u,d,g){for(var E=o._reactName,A=[];u!==null&&u!==d;){var F=u,H=F.alternate,ie=F.stateNode;if(H!==null&&H===d)break;F.tag===5&&ie!==null&&(F=ie,g?(H=On(u,E),H!=null&&A.unshift(Xa(u,H,F))):g||(H=On(u,E),H!=null&&A.push(Xa(u,H,F)))),u=u.return}A.length!==0&&i.push({event:o,listeners:A})}var yE=/\r\n?/g,SE=/\u0000|\uFFFD/g;function Pg(i){return(typeof i=="string"?i:""+i).replace(yE,`
`).replace(SE,"")}function hu(i,o,u){if(o=Pg(o),Pg(i)!==o&&u)throw Error(t(425))}function pu(){}var Bf=null,zf=null;function Hf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Vf=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(i){return Lg.resolve(null).then(i).catch(wE)}:Vf;function wE(i){setTimeout(function(){throw i})}function Gf(i,o){var u=o,d=0;do{var g=u.nextSibling;if(i.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(d===0){i.removeChild(g),Ia(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=g}while(u);Ia(o)}function Kr(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function Dg(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Ji="__reactFiber$"+Ro,ja="__reactProps$"+Ro,mr="__reactContainer$"+Ro,Wf="__reactEvents$"+Ro,TE="__reactListeners$"+Ro,RE="__reactHandles$"+Ro;function Ns(i){var o=i[Ji];if(o)return o;for(var u=i.parentNode;u;){if(o=u[mr]||u[Ji]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=Dg(i);i!==null;){if(u=i[Ji])return u;i=Dg(i)}return o}i=u,u=i.parentNode}return null}function qa(i){return i=i[Ji]||i[mr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ao(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function mu(i){return i[ja]||null}var Xf=[],Co=-1;function Zr(i){return{current:i}}function Ht(i){0>Co||(i.current=Xf[Co],Xf[Co]=null,Co--)}function kt(i,o){Co++,Xf[Co]=i.current,i.current=o}var Jr={},Rn=Zr(Jr),Gn=Zr(!1),Us=Jr;function bo(i,o){var u=i.type.contextTypes;if(!u)return Jr;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var g={},E;for(E in u)g[E]=o[E];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=g),g}function Wn(i){return i=i.childContextTypes,i!=null}function gu(){Ht(Gn),Ht(Rn)}function Ng(i,o,u){if(Rn.current!==Jr)throw Error(t(168));kt(Rn,o),kt(Gn,u)}function Ug(i,o,u){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var g in d)if(!(g in o))throw Error(t(108,Se(i)||"Unknown",g));return ce({},u,d)}function _u(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Jr,Us=Rn.current,kt(Rn,i),kt(Gn,Gn.current),!0}function Ig(i,o,u){var d=i.stateNode;if(!d)throw Error(t(169));u?(i=Ug(i,o,Us),d.__reactInternalMemoizedMergedChildContext=i,Ht(Gn),Ht(Rn),kt(Rn,i)):Ht(Gn),kt(Gn,u)}var gr=null,vu=!1,jf=!1;function Og(i){gr===null?gr=[i]:gr.push(i)}function AE(i){vu=!0,Og(i)}function Qr(){if(!jf&&gr!==null){jf=!0;var i=0,o=gt;try{var u=gr;for(gt=1;i<u.length;i++){var d=u[i];do d=d(!0);while(d!==null)}gr=null,vu=!1}catch(g){throw gr!==null&&(gr=gr.slice(i+1)),L(Pe,Qr),g}finally{gt=o,jf=!1}}return null}var Po=[],Lo=0,xu=null,yu=0,Si=[],Ei=0,Is=null,_r=1,vr="";function Os(i,o){Po[Lo++]=yu,Po[Lo++]=xu,xu=i,yu=o}function Fg(i,o,u){Si[Ei++]=_r,Si[Ei++]=vr,Si[Ei++]=Is,Is=i;var d=_r;i=vr;var g=32-Tt(d)-1;d&=~(1<<g),u+=1;var E=32-Tt(o)+g;if(30<E){var A=g-g%5;E=(d&(1<<A)-1).toString(32),d>>=A,g-=A,_r=1<<32-Tt(o)+g|u<<g|d,vr=E+i}else _r=1<<E|u<<g|d,vr=i}function qf(i){i.return!==null&&(Os(i,1),Fg(i,1,0))}function $f(i){for(;i===xu;)xu=Po[--Lo],Po[Lo]=null,yu=Po[--Lo],Po[Lo]=null;for(;i===Is;)Is=Si[--Ei],Si[Ei]=null,vr=Si[--Ei],Si[Ei]=null,_r=Si[--Ei],Si[Ei]=null}var li=null,ui=null,Gt=!1,ki=null;function kg(i,o){var u=Ri(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function Bg(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,li=i,ui=Kr(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,li=i,ui=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Is!==null?{id:_r,overflow:vr}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Ri(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,li=i,ui=null,!0):!1;default:return!1}}function Yf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Kf(i){if(Gt){var o=ui;if(o){var u=o;if(!Bg(i,o)){if(Yf(i))throw Error(t(418));o=Kr(u.nextSibling);var d=li;o&&Bg(i,o)?kg(d,u):(i.flags=i.flags&-4097|2,Gt=!1,li=i)}}else{if(Yf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Gt=!1,li=i}}}function zg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;li=i}function Su(i){if(i!==li)return!1;if(!Gt)return zg(i),Gt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Hf(i.type,i.memoizedProps)),o&&(o=ui)){if(Yf(i))throw Hg(),Error(t(418));for(;o;)kg(i,o),o=Kr(o.nextSibling)}if(zg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){ui=Kr(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}ui=null}}else ui=li?Kr(i.stateNode.nextSibling):null;return!0}function Hg(){for(var i=ui;i;)i=Kr(i.nextSibling)}function Do(){ui=li=null,Gt=!1}function Zf(i){ki===null?ki=[i]:ki.push(i)}var CE=w.ReactCurrentBatchConfig;function $a(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,i));var g=d,E=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===E?o.ref:(o=function(A){var F=g.refs;A===null?delete F[E]:F[E]=A},o._stringRef=E,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function Eu(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Vg(i){var o=i._init;return o(i._payload)}function Gg(i){function o(Y,W){if(i){var J=Y.deletions;J===null?(Y.deletions=[W],Y.flags|=16):J.push(W)}}function u(Y,W){if(!i)return null;for(;W!==null;)o(Y,W),W=W.sibling;return null}function d(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function g(Y,W){return Y=as(Y,W),Y.index=0,Y.sibling=null,Y}function E(Y,W,J){return Y.index=J,i?(J=Y.alternate,J!==null?(J=J.index,J<W?(Y.flags|=2,W):J):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function A(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function F(Y,W,J,Re){return W===null||W.tag!==6?(W=Vd(J,Y.mode,Re),W.return=Y,W):(W=g(W,J),W.return=Y,W)}function H(Y,W,J,Re){var je=J.type;return je===N?ye(Y,W,J.props.children,Re,J.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Z&&Vg(je)===W.type)?(Re=g(W,J.props),Re.ref=$a(Y,W,J),Re.return=Y,Re):(Re=ju(J.type,J.key,J.props,null,Y.mode,Re),Re.ref=$a(Y,W,J),Re.return=Y,Re)}function ie(Y,W,J,Re){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Gd(J,Y.mode,Re),W.return=Y,W):(W=g(W,J.children||[]),W.return=Y,W)}function ye(Y,W,J,Re,je){return W===null||W.tag!==7?(W=Ws(J,Y.mode,Re,je),W.return=Y,W):(W=g(W,J),W.return=Y,W)}function Ee(Y,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Vd(""+W,Y.mode,J),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return J=ju(W.type,W.key,W.props,null,Y.mode,J),J.ref=$a(Y,null,W),J.return=Y,J;case U:return W=Gd(W,Y.mode,J),W.return=Y,W;case Z:var Re=W._init;return Ee(Y,Re(W._payload),J)}if(qe(W)||de(W))return W=Ws(W,Y.mode,J,null),W.return=Y,W;Eu(Y,W)}return null}function ve(Y,W,J,Re){var je=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:F(Y,W,""+J,Re);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===je?H(Y,W,J,Re):null;case U:return J.key===je?ie(Y,W,J,Re):null;case Z:return je=J._init,ve(Y,W,je(J._payload),Re)}if(qe(J)||de(J))return je!==null?null:ye(Y,W,J,Re,null);Eu(Y,J)}return null}function Ie(Y,W,J,Re,je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return Y=Y.get(J)||null,F(W,Y,""+Re,je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case D:return Y=Y.get(Re.key===null?J:Re.key)||null,H(W,Y,Re,je);case U:return Y=Y.get(Re.key===null?J:Re.key)||null,ie(W,Y,Re,je);case Z:var Je=Re._init;return Ie(Y,W,J,Je(Re._payload),je)}if(qe(Re)||de(Re))return Y=Y.get(J)||null,ye(W,Y,Re,je,null);Eu(W,Re)}return null}function Ge(Y,W,J,Re){for(var je=null,Je=null,Qe=W,st=W=0,_n=null;Qe!==null&&st<J.length;st++){Qe.index>st?(_n=Qe,Qe=null):_n=Qe.sibling;var Rt=ve(Y,Qe,J[st],Re);if(Rt===null){Qe===null&&(Qe=_n);break}i&&Qe&&Rt.alternate===null&&o(Y,Qe),W=E(Rt,W,st),Je===null?je=Rt:Je.sibling=Rt,Je=Rt,Qe=_n}if(st===J.length)return u(Y,Qe),Gt&&Os(Y,st),je;if(Qe===null){for(;st<J.length;st++)Qe=Ee(Y,J[st],Re),Qe!==null&&(W=E(Qe,W,st),Je===null?je=Qe:Je.sibling=Qe,Je=Qe);return Gt&&Os(Y,st),je}for(Qe=d(Y,Qe);st<J.length;st++)_n=Ie(Qe,Y,st,J[st],Re),_n!==null&&(i&&_n.alternate!==null&&Qe.delete(_n.key===null?st:_n.key),W=E(_n,W,st),Je===null?je=_n:Je.sibling=_n,Je=_n);return i&&Qe.forEach(function(ls){return o(Y,ls)}),Gt&&Os(Y,st),je}function We(Y,W,J,Re){var je=de(J);if(typeof je!="function")throw Error(t(150));if(J=je.call(J),J==null)throw Error(t(151));for(var Je=je=null,Qe=W,st=W=0,_n=null,Rt=J.next();Qe!==null&&!Rt.done;st++,Rt=J.next()){Qe.index>st?(_n=Qe,Qe=null):_n=Qe.sibling;var ls=ve(Y,Qe,Rt.value,Re);if(ls===null){Qe===null&&(Qe=_n);break}i&&Qe&&ls.alternate===null&&o(Y,Qe),W=E(ls,W,st),Je===null?je=ls:Je.sibling=ls,Je=ls,Qe=_n}if(Rt.done)return u(Y,Qe),Gt&&Os(Y,st),je;if(Qe===null){for(;!Rt.done;st++,Rt=J.next())Rt=Ee(Y,Rt.value,Re),Rt!==null&&(W=E(Rt,W,st),Je===null?je=Rt:Je.sibling=Rt,Je=Rt);return Gt&&Os(Y,st),je}for(Qe=d(Y,Qe);!Rt.done;st++,Rt=J.next())Rt=Ie(Qe,Y,st,Rt.value,Re),Rt!==null&&(i&&Rt.alternate!==null&&Qe.delete(Rt.key===null?st:Rt.key),W=E(Rt,W,st),Je===null?je=Rt:Je.sibling=Rt,Je=Rt);return i&&Qe.forEach(function(aM){return o(Y,aM)}),Gt&&Os(Y,st),je}function tn(Y,W,J,Re){if(typeof J=="object"&&J!==null&&J.type===N&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:e:{for(var je=J.key,Je=W;Je!==null;){if(Je.key===je){if(je=J.type,je===N){if(Je.tag===7){u(Y,Je.sibling),W=g(Je,J.props.children),W.return=Y,Y=W;break e}}else if(Je.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Z&&Vg(je)===Je.type){u(Y,Je.sibling),W=g(Je,J.props),W.ref=$a(Y,Je,J),W.return=Y,Y=W;break e}u(Y,Je);break}else o(Y,Je);Je=Je.sibling}J.type===N?(W=Ws(J.props.children,Y.mode,Re,J.key),W.return=Y,Y=W):(Re=ju(J.type,J.key,J.props,null,Y.mode,Re),Re.ref=$a(Y,W,J),Re.return=Y,Y=Re)}return A(Y);case U:e:{for(Je=J.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){u(Y,W.sibling),W=g(W,J.children||[]),W.return=Y,Y=W;break e}else{u(Y,W);break}else o(Y,W);W=W.sibling}W=Gd(J,Y.mode,Re),W.return=Y,Y=W}return A(Y);case Z:return Je=J._init,tn(Y,W,Je(J._payload),Re)}if(qe(J))return Ge(Y,W,J,Re);if(de(J))return We(Y,W,J,Re);Eu(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(u(Y,W.sibling),W=g(W,J),W.return=Y,Y=W):(u(Y,W),W=Vd(J,Y.mode,Re),W.return=Y,Y=W),A(Y)):u(Y,W)}return tn}var No=Gg(!0),Wg=Gg(!1),Mu=Zr(null),wu=null,Uo=null,Jf=null;function Qf(){Jf=Uo=wu=null}function ed(i){var o=Mu.current;Ht(Mu),i._currentValue=o}function td(i,o,u){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===u)break;i=i.return}}function Io(i,o){wu=i,Jf=Uo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(Xn=!0),i.firstContext=null)}function Mi(i){var o=i._currentValue;if(Jf!==i)if(i={context:i,memoizedValue:o,next:null},Uo===null){if(wu===null)throw Error(t(308));Uo=i,wu.dependencies={lanes:0,firstContext:i}}else Uo=Uo.next=i;return o}var Fs=null;function nd(i){Fs===null?Fs=[i]:Fs.push(i)}function Xg(i,o,u,d){var g=o.interleaved;return g===null?(u.next=u,nd(o)):(u.next=g.next,g.next=u),o.interleaved=u,xr(i,d)}function xr(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var es=!1;function id(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jg(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function yr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ts(i,o,u){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Mt&2)!==0){var g=d.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),d.pending=o,xr(i,u)}return g=d.interleaved,g===null?(o.next=o,nd(d)):(o.next=g.next,g.next=o),d.interleaved=o,xr(i,u)}function Tu(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,Ds(i,u)}}function qg(i,o){var u=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var g=null,E=null;if(u=u.firstBaseUpdate,u!==null){do{var A={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};E===null?g=E=A:E=E.next=A,u=u.next}while(u!==null);E===null?g=E=o:E=E.next=o}else g=E=o;u={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:E,shared:d.shared,effects:d.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function Ru(i,o,u,d){var g=i.updateQueue;es=!1;var E=g.firstBaseUpdate,A=g.lastBaseUpdate,F=g.shared.pending;if(F!==null){g.shared.pending=null;var H=F,ie=H.next;H.next=null,A===null?E=ie:A.next=ie,A=H;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==A&&(F===null?ye.firstBaseUpdate=ie:F.next=ie,ye.lastBaseUpdate=H))}if(E!==null){var Ee=g.baseState;A=0,ye=ie=H=null,F=E;do{var ve=F.lane,Ie=F.eventTime;if((d&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ie,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ge=i,We=F;switch(ve=o,Ie=u,We.tag){case 1:if(Ge=We.payload,typeof Ge=="function"){Ee=Ge.call(Ie,Ee,ve);break e}Ee=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=We.payload,ve=typeof Ge=="function"?Ge.call(Ie,Ee,ve):Ge,ve==null)break e;Ee=ce({},Ee,ve);break e;case 2:es=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,ve=g.effects,ve===null?g.effects=[F]:ve.push(F))}else Ie={eventTime:Ie,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(ie=ye=Ie,H=Ee):ye=ye.next=Ie,A|=ve;if(F=F.next,F===null){if(F=g.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,g.lastBaseUpdate=ve,g.shared.pending=null}}while(!0);if(ye===null&&(H=Ee),g.baseState=H,g.firstBaseUpdate=ie,g.lastBaseUpdate=ye,o=g.shared.interleaved,o!==null){g=o;do A|=g.lane,g=g.next;while(g!==o)}else E===null&&(g.shared.lanes=0);zs|=A,i.lanes=A,i.memoizedState=Ee}}function $g(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],g=d.callback;if(g!==null){if(d.callback=null,d=u,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var Ya={},Qi=Zr(Ya),Ka=Zr(Ya),Za=Zr(Ya);function ks(i){if(i===Ya)throw Error(t(174));return i}function rd(i,o){switch(kt(Za,o),kt(Ka,i),kt(Qi,Ya),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Xe(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Xe(o,i)}Ht(Qi),kt(Qi,o)}function Oo(){Ht(Qi),Ht(Ka),Ht(Za)}function Yg(i){ks(Za.current);var o=ks(Qi.current),u=Xe(o,i.type);o!==u&&(kt(Ka,i),kt(Qi,u))}function sd(i){Ka.current===i&&(Ht(Qi),Ht(Ka))}var Xt=Zr(0);function Au(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var od=[];function ad(){for(var i=0;i<od.length;i++)od[i]._workInProgressVersionPrimary=null;od.length=0}var Cu=w.ReactCurrentDispatcher,ld=w.ReactCurrentBatchConfig,Bs=0,jt=null,fn=null,mn=null,bu=!1,Ja=!1,Qa=0,bE=0;function An(){throw Error(t(321))}function ud(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!Fi(i[u],o[u]))return!1;return!0}function cd(i,o,u,d,g,E){if(Bs=E,jt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Cu.current=i===null||i.memoizedState===null?NE:UE,i=u(d,g),Ja){E=0;do{if(Ja=!1,Qa=0,25<=E)throw Error(t(301));E+=1,mn=fn=null,o.updateQueue=null,Cu.current=IE,i=u(d,g)}while(Ja)}if(Cu.current=Du,o=fn!==null&&fn.next!==null,Bs=0,mn=fn=jt=null,bu=!1,o)throw Error(t(300));return i}function fd(){var i=Qa!==0;return Qa=0,i}function er(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?jt.memoizedState=mn=i:mn=mn.next=i,mn}function wi(){if(fn===null){var i=jt.alternate;i=i!==null?i.memoizedState:null}else i=fn.next;var o=mn===null?jt.memoizedState:mn.next;if(o!==null)mn=o,fn=i;else{if(i===null)throw Error(t(310));fn=i,i={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},mn===null?jt.memoizedState=mn=i:mn=mn.next=i}return mn}function el(i,o){return typeof o=="function"?o(i):o}function dd(i){var o=wi(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=fn,g=d.baseQueue,E=u.pending;if(E!==null){if(g!==null){var A=g.next;g.next=E.next,E.next=A}d.baseQueue=g=E,u.pending=null}if(g!==null){E=g.next,d=d.baseState;var F=A=null,H=null,ie=E;do{var ye=ie.lane;if((Bs&ye)===ye)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),d=ie.hasEagerState?ie.eagerState:i(d,ie.action);else{var Ee={lane:ye,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(F=H=Ee,A=d):H=H.next=Ee,jt.lanes|=ye,zs|=ye}ie=ie.next}while(ie!==null&&ie!==E);H===null?A=d:H.next=F,Fi(d,o.memoizedState)||(Xn=!0),o.memoizedState=d,o.baseState=A,o.baseQueue=H,u.lastRenderedState=d}if(i=u.interleaved,i!==null){g=i;do E=g.lane,jt.lanes|=E,zs|=E,g=g.next;while(g!==i)}else g===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function hd(i){var o=wi(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=u.dispatch,g=u.pending,E=o.memoizedState;if(g!==null){u.pending=null;var A=g=g.next;do E=i(E,A.action),A=A.next;while(A!==g);Fi(E,o.memoizedState)||(Xn=!0),o.memoizedState=E,o.baseQueue===null&&(o.baseState=E),u.lastRenderedState=E}return[E,d]}function Kg(){}function Zg(i,o){var u=jt,d=wi(),g=o(),E=!Fi(d.memoizedState,g);if(E&&(d.memoizedState=g,Xn=!0),d=d.queue,pd(e_.bind(null,u,d,i),[i]),d.getSnapshot!==o||E||mn!==null&&mn.memoizedState.tag&1){if(u.flags|=2048,tl(9,Qg.bind(null,u,d,g,o),void 0,null),gn===null)throw Error(t(349));(Bs&30)!==0||Jg(u,o,g)}return g}function Jg(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=jt.updateQueue,o===null?(o={lastEffect:null,stores:null},jt.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function Qg(i,o,u,d){o.value=u,o.getSnapshot=d,t_(o)&&n_(i)}function e_(i,o,u){return u(function(){t_(o)&&n_(i)})}function t_(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!Fi(i,u)}catch{return!0}}function n_(i){var o=xr(i,1);o!==null&&Vi(o,i,1,-1)}function i_(i){var o=er();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:i},o.queue=i,i=i.dispatch=DE.bind(null,jt,i),[o.memoizedState,i]}function tl(i,o,u,d){return i={tag:i,create:o,destroy:u,deps:d,next:null},o=jt.updateQueue,o===null?(o={lastEffect:null,stores:null},jt.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(d=u.next,u.next=i,i.next=d,o.lastEffect=i)),i}function r_(){return wi().memoizedState}function Pu(i,o,u,d){var g=er();jt.flags|=i,g.memoizedState=tl(1|o,u,void 0,d===void 0?null:d)}function Lu(i,o,u,d){var g=wi();d=d===void 0?null:d;var E=void 0;if(fn!==null){var A=fn.memoizedState;if(E=A.destroy,d!==null&&ud(d,A.deps)){g.memoizedState=tl(o,u,E,d);return}}jt.flags|=i,g.memoizedState=tl(1|o,u,E,d)}function s_(i,o){return Pu(8390656,8,i,o)}function pd(i,o){return Lu(2048,8,i,o)}function o_(i,o){return Lu(4,2,i,o)}function a_(i,o){return Lu(4,4,i,o)}function l_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function u_(i,o,u){return u=u!=null?u.concat([i]):null,Lu(4,4,l_.bind(null,o,i),u)}function md(){}function c_(i,o){var u=wi();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&ud(o,d[1])?d[0]:(u.memoizedState=[i,o],i)}function f_(i,o){var u=wi();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&ud(o,d[1])?d[0]:(i=i(),u.memoizedState=[i,o],i)}function d_(i,o,u){return(Bs&21)===0?(i.baseState&&(i.baseState=!1,Xn=!0),i.memoizedState=u):(Fi(u,o)||(u=kn(),jt.lanes|=u,zs|=u,i.baseState=!0),o)}function PE(i,o){var u=gt;gt=u!==0&&4>u?u:4,i(!0);var d=ld.transition;ld.transition={};try{i(!1),o()}finally{gt=u,ld.transition=d}}function h_(){return wi().memoizedState}function LE(i,o,u){var d=ss(i);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},p_(i))m_(o,u);else if(u=Xg(i,o,u,d),u!==null){var g=zn();Vi(u,i,d,g),g_(u,o,d)}}function DE(i,o,u){var d=ss(i),g={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(p_(i))m_(o,g);else{var E=i.alternate;if(i.lanes===0&&(E===null||E.lanes===0)&&(E=o.lastRenderedReducer,E!==null))try{var A=o.lastRenderedState,F=E(A,u);if(g.hasEagerState=!0,g.eagerState=F,Fi(F,A)){var H=o.interleaved;H===null?(g.next=g,nd(o)):(g.next=H.next,H.next=g),o.interleaved=g;return}}catch{}finally{}u=Xg(i,o,g,d),u!==null&&(g=zn(),Vi(u,i,d,g),g_(u,o,d))}}function p_(i){var o=i.alternate;return i===jt||o!==null&&o===jt}function m_(i,o){Ja=bu=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function g_(i,o,u){if((u&4194240)!==0){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,Ds(i,u)}}var Du={readContext:Mi,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},NE={readContext:Mi,useCallback:function(i,o){return er().memoizedState=[i,o===void 0?null:o],i},useContext:Mi,useEffect:s_,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,Pu(4194308,4,l_.bind(null,o,i),u)},useLayoutEffect:function(i,o){return Pu(4194308,4,i,o)},useInsertionEffect:function(i,o){return Pu(4,2,i,o)},useMemo:function(i,o){var u=er();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var d=er();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=LE.bind(null,jt,i),[d.memoizedState,i]},useRef:function(i){var o=er();return i={current:i},o.memoizedState=i},useState:i_,useDebugValue:md,useDeferredValue:function(i){return er().memoizedState=i},useTransition:function(){var i=i_(!1),o=i[0];return i=PE.bind(null,i[1]),er().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var d=jt,g=er();if(Gt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),gn===null)throw Error(t(349));(Bs&30)!==0||Jg(d,o,u)}g.memoizedState=u;var E={value:u,getSnapshot:o};return g.queue=E,s_(e_.bind(null,d,E,i),[i]),d.flags|=2048,tl(9,Qg.bind(null,d,E,u,o),void 0,null),u},useId:function(){var i=er(),o=gn.identifierPrefix;if(Gt){var u=vr,d=_r;u=(d&~(1<<32-Tt(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Qa++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=bE++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},UE={readContext:Mi,useCallback:c_,useContext:Mi,useEffect:pd,useImperativeHandle:u_,useInsertionEffect:o_,useLayoutEffect:a_,useMemo:f_,useReducer:dd,useRef:r_,useState:function(){return dd(el)},useDebugValue:md,useDeferredValue:function(i){var o=wi();return d_(o,fn.memoizedState,i)},useTransition:function(){var i=dd(el)[0],o=wi().memoizedState;return[i,o]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:h_,unstable_isNewReconciler:!1},IE={readContext:Mi,useCallback:c_,useContext:Mi,useEffect:pd,useImperativeHandle:u_,useInsertionEffect:o_,useLayoutEffect:a_,useMemo:f_,useReducer:hd,useRef:r_,useState:function(){return hd(el)},useDebugValue:md,useDeferredValue:function(i){var o=wi();return fn===null?o.memoizedState=i:d_(o,fn.memoizedState,i)},useTransition:function(){var i=hd(el)[0],o=wi().memoizedState;return[i,o]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:h_,unstable_isNewReconciler:!1};function Bi(i,o){if(i&&i.defaultProps){o=ce({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function gd(i,o,u,d){o=i.memoizedState,u=u(d,o),u=u==null?o:ce({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var Nu={isMounted:function(i){return(i=i._reactInternals)?Zi(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var d=zn(),g=ss(i),E=yr(d,g);E.payload=o,u!=null&&(E.callback=u),o=ts(i,E,g),o!==null&&(Vi(o,i,g,d),Tu(o,i,g))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var d=zn(),g=ss(i),E=yr(d,g);E.tag=1,E.payload=o,u!=null&&(E.callback=u),o=ts(i,E,g),o!==null&&(Vi(o,i,g,d),Tu(o,i,g))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=zn(),d=ss(i),g=yr(u,d);g.tag=2,o!=null&&(g.callback=o),o=ts(i,g,d),o!==null&&(Vi(o,i,d,u),Tu(o,i,d))}};function __(i,o,u,d,g,E,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,E,A):o.prototype&&o.prototype.isPureReactComponent?!Ha(u,d)||!Ha(g,E):!0}function v_(i,o,u){var d=!1,g=Jr,E=o.contextType;return typeof E=="object"&&E!==null?E=Mi(E):(g=Wn(o)?Us:Rn.current,d=o.contextTypes,E=(d=d!=null)?bo(i,g):Jr),o=new o(u,E),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Nu,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=E),o}function x_(i,o,u,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==i&&Nu.enqueueReplaceState(o,o.state,null)}function _d(i,o,u,d){var g=i.stateNode;g.props=u,g.state=i.memoizedState,g.refs={},id(i);var E=o.contextType;typeof E=="object"&&E!==null?g.context=Mi(E):(E=Wn(o)?Us:Rn.current,g.context=bo(i,E)),g.state=i.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(gd(i,o,E,u),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&Nu.enqueueReplaceState(g,g.state,null),Ru(i,u,g,d),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Fo(i,o){try{var u="",d=o;do u+=he(d),d=d.return;while(d);var g=u}catch(E){g=`
Error generating stack: `+E.message+`
`+E.stack}return{value:i,source:o,stack:g,digest:null}}function vd(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function xd(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var OE=typeof WeakMap=="function"?WeakMap:Map;function y_(i,o,u){u=yr(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){zu||(zu=!0,Ud=d),xd(i,o)},u}function S_(i,o,u){u=yr(-1,u),u.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var g=o.value;u.payload=function(){return d(g)},u.callback=function(){xd(i,o)}}var E=i.stateNode;return E!==null&&typeof E.componentDidCatch=="function"&&(u.callback=function(){xd(i,o),typeof d!="function"&&(is===null?is=new Set([this]):is.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),u}function E_(i,o,u){var d=i.pingCache;if(d===null){d=i.pingCache=new OE;var g=new Set;d.set(o,g)}else g=d.get(o),g===void 0&&(g=new Set,d.set(o,g));g.has(u)||(g.add(u),i=KE.bind(null,i,o,u),o.then(i,i))}function M_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function w_(i,o,u,d,g){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=yr(-1,1),o.tag=2,ts(u,o,1))),u.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var FE=w.ReactCurrentOwner,Xn=!1;function Bn(i,o,u,d){o.child=i===null?Wg(o,null,u,d):No(o,i.child,u,d)}function T_(i,o,u,d,g){u=u.render;var E=o.ref;return Io(o,g),d=cd(i,o,u,d,E,g),u=fd(),i!==null&&!Xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,Sr(i,o,g)):(Gt&&u&&qf(o),o.flags|=1,Bn(i,o,d,g),o.child)}function R_(i,o,u,d,g){if(i===null){var E=u.type;return typeof E=="function"&&!Hd(E)&&E.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=E,A_(i,o,E,d,g)):(i=ju(u.type,null,d,o,o.mode,g),i.ref=o.ref,i.return=o,o.child=i)}if(E=i.child,(i.lanes&g)===0){var A=E.memoizedProps;if(u=u.compare,u=u!==null?u:Ha,u(A,d)&&i.ref===o.ref)return Sr(i,o,g)}return o.flags|=1,i=as(E,d),i.ref=o.ref,i.return=o,o.child=i}function A_(i,o,u,d,g){if(i!==null){var E=i.memoizedProps;if(Ha(E,d)&&i.ref===o.ref)if(Xn=!1,o.pendingProps=d=E,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Xn=!0);else return o.lanes=i.lanes,Sr(i,o,g)}return yd(i,o,u,d,g)}function C_(i,o,u){var d=o.pendingProps,g=d.children,E=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Bo,ci),ci|=u;else{if((u&1073741824)===0)return i=E!==null?E.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,kt(Bo,ci),ci|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=E!==null?E.baseLanes:u,kt(Bo,ci),ci|=d}else E!==null?(d=E.baseLanes|u,o.memoizedState=null):d=u,kt(Bo,ci),ci|=d;return Bn(i,o,g,u),o.child}function b_(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function yd(i,o,u,d,g){var E=Wn(u)?Us:Rn.current;return E=bo(o,E),Io(o,g),u=cd(i,o,u,d,E,g),d=fd(),i!==null&&!Xn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,Sr(i,o,g)):(Gt&&d&&qf(o),o.flags|=1,Bn(i,o,u,g),o.child)}function P_(i,o,u,d,g){if(Wn(u)){var E=!0;_u(o)}else E=!1;if(Io(o,g),o.stateNode===null)Iu(i,o),v_(o,u,d),_d(o,u,d,g),d=!0;else if(i===null){var A=o.stateNode,F=o.memoizedProps;A.props=F;var H=A.context,ie=u.contextType;typeof ie=="object"&&ie!==null?ie=Mi(ie):(ie=Wn(u)?Us:Rn.current,ie=bo(o,ie));var ye=u.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ee||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==d||H!==ie)&&x_(o,A,d,ie),es=!1;var ve=o.memoizedState;A.state=ve,Ru(o,d,A,g),H=o.memoizedState,F!==d||ve!==H||Gn.current||es?(typeof ye=="function"&&(gd(o,u,ye,d),H=o.memoizedState),(F=es||__(o,u,F,d,ve,H,ie))?(Ee||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=H),A.props=d,A.state=H,A.context=ie,d=F):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{A=o.stateNode,jg(i,o),F=o.memoizedProps,ie=o.type===o.elementType?F:Bi(o.type,F),A.props=ie,Ee=o.pendingProps,ve=A.context,H=u.contextType,typeof H=="object"&&H!==null?H=Mi(H):(H=Wn(u)?Us:Rn.current,H=bo(o,H));var Ie=u.getDerivedStateFromProps;(ye=typeof Ie=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==Ee||ve!==H)&&x_(o,A,d,H),es=!1,ve=o.memoizedState,A.state=ve,Ru(o,d,A,g);var Ge=o.memoizedState;F!==Ee||ve!==Ge||Gn.current||es?(typeof Ie=="function"&&(gd(o,u,Ie,d),Ge=o.memoizedState),(ie=es||__(o,u,ie,d,ve,Ge,H)||!1)?(ye||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,Ge,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,Ge,H)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&ve===i.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&ve===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=Ge),A.props=d,A.state=Ge,A.context=H,d=ie):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&ve===i.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&ve===i.memoizedState||(o.flags|=1024),d=!1)}return Sd(i,o,u,d,E,g)}function Sd(i,o,u,d,g,E){b_(i,o);var A=(o.flags&128)!==0;if(!d&&!A)return g&&Ig(o,u,!1),Sr(i,o,E);d=o.stateNode,FE.current=o;var F=A&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&A?(o.child=No(o,i.child,null,E),o.child=No(o,null,F,E)):Bn(i,o,F,E),o.memoizedState=d.state,g&&Ig(o,u,!0),o.child}function L_(i){var o=i.stateNode;o.pendingContext?Ng(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Ng(i,o.context,!1),rd(i,o.containerInfo)}function D_(i,o,u,d,g){return Do(),Zf(g),o.flags|=256,Bn(i,o,u,d),o.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Md(i){return{baseLanes:i,cachePool:null,transitions:null}}function N_(i,o,u){var d=o.pendingProps,g=Xt.current,E=!1,A=(o.flags&128)!==0,F;if((F=A)||(F=i!==null&&i.memoizedState===null?!1:(g&2)!==0),F?(E=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),kt(Xt,g&1),i===null)return Kf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=d.children,i=d.fallback,E?(d=o.mode,E=o.child,A={mode:"hidden",children:A},(d&1)===0&&E!==null?(E.childLanes=0,E.pendingProps=A):E=qu(A,d,0,null),i=Ws(i,d,u,null),E.return=o,i.return=o,E.sibling=i,o.child=E,o.child.memoizedState=Md(u),o.memoizedState=Ed,i):wd(o,A));if(g=i.memoizedState,g!==null&&(F=g.dehydrated,F!==null))return kE(i,o,A,d,F,g,u);if(E){E=d.fallback,A=o.mode,g=i.child,F=g.sibling;var H={mode:"hidden",children:d.children};return(A&1)===0&&o.child!==g?(d=o.child,d.childLanes=0,d.pendingProps=H,o.deletions=null):(d=as(g,H),d.subtreeFlags=g.subtreeFlags&14680064),F!==null?E=as(F,E):(E=Ws(E,A,u,null),E.flags|=2),E.return=o,d.return=o,d.sibling=E,o.child=d,d=E,E=o.child,A=i.child.memoizedState,A=A===null?Md(u):{baseLanes:A.baseLanes|u,cachePool:null,transitions:A.transitions},E.memoizedState=A,E.childLanes=i.childLanes&~u,o.memoizedState=Ed,d}return E=i.child,i=E.sibling,d=as(E,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=u),d.return=o,d.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=d,o.memoizedState=null,d}function wd(i,o){return o=qu({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Uu(i,o,u,d){return d!==null&&Zf(d),No(o,i.child,null,u),i=wd(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function kE(i,o,u,d,g,E,A){if(u)return o.flags&256?(o.flags&=-257,d=vd(Error(t(422))),Uu(i,o,A,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(E=d.fallback,g=o.mode,d=qu({mode:"visible",children:d.children},g,0,null),E=Ws(E,g,A,null),E.flags|=2,d.return=o,E.return=o,d.sibling=E,o.child=d,(o.mode&1)!==0&&No(o,i.child,null,A),o.child.memoizedState=Md(A),o.memoizedState=Ed,E);if((o.mode&1)===0)return Uu(i,o,A,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var F=d.dgst;return d=F,E=Error(t(419)),d=vd(E,d,void 0),Uu(i,o,A,d)}if(F=(A&i.childLanes)!==0,Xn||F){if(d=gn,d!==null){switch(A&-A){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|A))!==0?0:g,g!==0&&g!==E.retryLane&&(E.retryLane=g,xr(i,g),Vi(d,i,g,-1))}return zd(),d=vd(Error(t(421))),Uu(i,o,A,d)}return g.data==="$?"?(o.flags|=128,o.child=i.child,o=ZE.bind(null,i),g._reactRetry=o,null):(i=E.treeContext,ui=Kr(g.nextSibling),li=o,Gt=!0,ki=null,i!==null&&(Si[Ei++]=_r,Si[Ei++]=vr,Si[Ei++]=Is,_r=i.id,vr=i.overflow,Is=o),o=wd(o,d.children),o.flags|=4096,o)}function U_(i,o,u){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),td(i.return,o,u)}function Td(i,o,u,d,g){var E=i.memoizedState;E===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:g}:(E.isBackwards=o,E.rendering=null,E.renderingStartTime=0,E.last=d,E.tail=u,E.tailMode=g)}function I_(i,o,u){var d=o.pendingProps,g=d.revealOrder,E=d.tail;if(Bn(i,o,d.children,u),d=Xt.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&U_(i,u,o);else if(i.tag===19)U_(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(kt(Xt,d),(o.mode&1)===0)o.memoizedState=null;else switch(g){case"forwards":for(u=o.child,g=null;u!==null;)i=u.alternate,i!==null&&Au(i)===null&&(g=u),u=u.sibling;u=g,u===null?(g=o.child,o.child=null):(g=u.sibling,u.sibling=null),Td(o,!1,g,u,E);break;case"backwards":for(u=null,g=o.child,o.child=null;g!==null;){if(i=g.alternate,i!==null&&Au(i)===null){o.child=g;break}i=g.sibling,g.sibling=u,u=g,g=i}Td(o,!0,u,null,E);break;case"together":Td(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Iu(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Sr(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),zs|=o.lanes,(u&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=as(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=as(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function BE(i,o,u){switch(o.tag){case 3:L_(o),Do();break;case 5:Yg(o);break;case 1:Wn(o.type)&&_u(o);break;case 4:rd(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,g=o.memoizedProps.value;kt(Mu,d._currentValue),d._currentValue=g;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(kt(Xt,Xt.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?N_(i,o,u):(kt(Xt,Xt.current&1),i=Sr(i,o,u),i!==null?i.sibling:null);kt(Xt,Xt.current&1);break;case 19:if(d=(u&o.childLanes)!==0,(i.flags&128)!==0){if(d)return I_(i,o,u);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),kt(Xt,Xt.current),d)break;return null;case 22:case 23:return o.lanes=0,C_(i,o,u)}return Sr(i,o,u)}var O_,Rd,F_,k_;O_=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Rd=function(){},F_=function(i,o,u,d){var g=i.memoizedProps;if(g!==d){i=o.stateNode,ks(Qi.current);var E=null;switch(u){case"input":g=V(i,g),d=V(i,d),E=[];break;case"select":g=ce({},g,{value:void 0}),d=ce({},d,{value:void 0}),E=[];break;case"textarea":g=P(i,g),d=P(i,d),E=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=pu)}ht(u,d);var A;u=null;for(ie in g)if(!d.hasOwnProperty(ie)&&g.hasOwnProperty(ie)&&g[ie]!=null)if(ie==="style"){var F=g[ie];for(A in F)F.hasOwnProperty(A)&&(u||(u={}),u[A]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(s.hasOwnProperty(ie)?E||(E=[]):(E=E||[]).push(ie,null));for(ie in d){var H=d[ie];if(F=g!=null?g[ie]:void 0,d.hasOwnProperty(ie)&&H!==F&&(H!=null||F!=null))if(ie==="style")if(F){for(A in F)!F.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(u||(u={}),u[A]="");for(A in H)H.hasOwnProperty(A)&&F[A]!==H[A]&&(u||(u={}),u[A]=H[A])}else u||(E||(E=[]),E.push(ie,u)),u=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(E=E||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(E=E||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(s.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&zt("scroll",i),E||F===H||(E=[])):(E=E||[]).push(ie,H))}u&&(E=E||[]).push("style",u);var ie=E;(o.updateQueue=ie)&&(o.flags|=4)}},k_=function(i,o,u,d){u!==d&&(o.flags|=4)};function nl(i,o){if(!Gt)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Cn(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,d=0;if(o)for(var g=i.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=d,i.childLanes=u,o}function zE(i,o,u){var d=o.pendingProps;switch($f(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(o),null;case 1:return Wn(o.type)&&gu(),Cn(o),null;case 3:return d=o.stateNode,Oo(),Ht(Gn),Ht(Rn),ad(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Su(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ki!==null&&(Fd(ki),ki=null))),Rd(i,o),Cn(o),null;case 5:sd(o);var g=ks(Za.current);if(u=o.type,i!==null&&o.stateNode!=null)F_(i,o,u,d,g),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return Cn(o),null}if(i=ks(Qi.current),Su(o)){d=o.stateNode,u=o.type;var E=o.memoizedProps;switch(d[Ji]=o,d[ja]=E,i=(o.mode&1)!==0,u){case"dialog":zt("cancel",d),zt("close",d);break;case"iframe":case"object":case"embed":zt("load",d);break;case"video":case"audio":for(g=0;g<Ga.length;g++)zt(Ga[g],d);break;case"source":zt("error",d);break;case"img":case"image":case"link":zt("error",d),zt("load",d);break;case"details":zt("toggle",d);break;case"input":In(d,E),zt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!E.multiple},zt("invalid",d);break;case"textarea":ee(d,E),zt("invalid",d)}ht(u,E),g=null;for(var A in E)if(E.hasOwnProperty(A)){var F=E[A];A==="children"?typeof F=="string"?d.textContent!==F&&(E.suppressHydrationWarning!==!0&&hu(d.textContent,F,i),g=["children",F]):typeof F=="number"&&d.textContent!==""+F&&(E.suppressHydrationWarning!==!0&&hu(d.textContent,F,i),g=["children",""+F]):s.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&zt("scroll",d)}switch(u){case"input":Dt(d),Ye(d,E,!0);break;case"textarea":Dt(d),xe(d);break;case"select":case"option":break;default:typeof E.onClick=="function"&&(d.onclick=pu)}d=g,o.updateQueue=d,d!==null&&(o.flags|=4)}else{A=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=me(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=A.createElement(u,{is:d.is}):(i=A.createElement(u),u==="select"&&(A=i,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):i=A.createElementNS(i,u),i[Ji]=o,i[ja]=d,O_(i,o,!1,!1),o.stateNode=i;e:{switch(A=ot(u,d),u){case"dialog":zt("cancel",i),zt("close",i),g=d;break;case"iframe":case"object":case"embed":zt("load",i),g=d;break;case"video":case"audio":for(g=0;g<Ga.length;g++)zt(Ga[g],i);g=d;break;case"source":zt("error",i),g=d;break;case"img":case"image":case"link":zt("error",i),zt("load",i),g=d;break;case"details":zt("toggle",i),g=d;break;case"input":In(i,d),g=V(i,d),zt("invalid",i);break;case"option":g=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},g=ce({},d,{value:void 0}),zt("invalid",i);break;case"textarea":ee(i,d),g=P(i,d),zt("invalid",i);break;default:g=d}ht(u,g),F=g;for(E in F)if(F.hasOwnProperty(E)){var H=F[E];E==="style"?tt(i,H):E==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ke(i,H)):E==="children"?typeof H=="string"?(u!=="textarea"||H!=="")&&ft(i,H):typeof H=="number"&&ft(i,""+H):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(s.hasOwnProperty(E)?H!=null&&E==="onScroll"&&zt("scroll",i):H!=null&&T(i,E,H,A))}switch(u){case"input":Dt(i),Ye(i,d,!1);break;case"textarea":Dt(i),xe(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Ae(d.value));break;case"select":i.multiple=!!d.multiple,E=d.value,E!=null?O(i,!!d.multiple,E,!1):d.defaultValue!=null&&O(i,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=pu)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Cn(o),null;case 6:if(i&&o.stateNode!=null)k_(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=ks(Za.current),ks(Qi.current),Su(o)){if(d=o.stateNode,u=o.memoizedProps,d[Ji]=o,(E=d.nodeValue!==u)&&(i=li,i!==null))switch(i.tag){case 3:hu(d.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&hu(d.nodeValue,u,(i.mode&1)!==0)}E&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[Ji]=o,o.stateNode=d}return Cn(o),null;case 13:if(Ht(Xt),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Gt&&ui!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Hg(),Do(),o.flags|=98560,E=!1;else if(E=Su(o),d!==null&&d.dehydrated!==null){if(i===null){if(!E)throw Error(t(318));if(E=o.memoizedState,E=E!==null?E.dehydrated:null,!E)throw Error(t(317));E[Ji]=o}else Do(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Cn(o),E=!1}else ki!==null&&(Fd(ki),ki=null),E=!0;if(!E)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Xt.current&1)!==0?dn===0&&(dn=3):zd())),o.updateQueue!==null&&(o.flags|=4),Cn(o),null);case 4:return Oo(),Rd(i,o),i===null&&Wa(o.stateNode.containerInfo),Cn(o),null;case 10:return ed(o.type._context),Cn(o),null;case 17:return Wn(o.type)&&gu(),Cn(o),null;case 19:if(Ht(Xt),E=o.memoizedState,E===null)return Cn(o),null;if(d=(o.flags&128)!==0,A=E.rendering,A===null)if(d)nl(E,!1);else{if(dn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(A=Au(i),A!==null){for(o.flags|=128,nl(E,!1),d=A.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)E=u,i=d,E.flags&=14680066,A=E.alternate,A===null?(E.childLanes=0,E.lanes=i,E.child=null,E.subtreeFlags=0,E.memoizedProps=null,E.memoizedState=null,E.updateQueue=null,E.dependencies=null,E.stateNode=null):(E.childLanes=A.childLanes,E.lanes=A.lanes,E.child=A.child,E.subtreeFlags=0,E.deletions=null,E.memoizedProps=A.memoizedProps,E.memoizedState=A.memoizedState,E.updateQueue=A.updateQueue,E.type=A.type,i=A.dependencies,E.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return kt(Xt,Xt.current&1|2),o.child}i=i.sibling}E.tail!==null&&G()>zo&&(o.flags|=128,d=!0,nl(E,!1),o.lanes=4194304)}else{if(!d)if(i=Au(A),i!==null){if(o.flags|=128,d=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),nl(E,!0),E.tail===null&&E.tailMode==="hidden"&&!A.alternate&&!Gt)return Cn(o),null}else 2*G()-E.renderingStartTime>zo&&u!==1073741824&&(o.flags|=128,d=!0,nl(E,!1),o.lanes=4194304);E.isBackwards?(A.sibling=o.child,o.child=A):(u=E.last,u!==null?u.sibling=A:o.child=A,E.last=A)}return E.tail!==null?(o=E.tail,E.rendering=o,E.tail=o.sibling,E.renderingStartTime=G(),o.sibling=null,u=Xt.current,kt(Xt,d?u&1|2:u&1),o):(Cn(o),null);case 22:case 23:return Bd(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(ci&1073741824)!==0&&(Cn(o),o.subtreeFlags&6&&(o.flags|=8192)):Cn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function HE(i,o){switch($f(o),o.tag){case 1:return Wn(o.type)&&gu(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Oo(),Ht(Gn),Ht(Rn),ad(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return sd(o),null;case 13:if(Ht(Xt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Do()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Ht(Xt),null;case 4:return Oo(),null;case 10:return ed(o.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var Ou=!1,bn=!1,VE=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ko(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){Jt(i,o,d)}else u.current=null}function Ad(i,o,u){try{u()}catch(d){Jt(i,o,d)}}var B_=!1;function GE(i,o){if(Bf=nu,i=_g(),Lf(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var g=d.anchorOffset,E=d.focusNode;d=d.focusOffset;try{u.nodeType,E.nodeType}catch{u=null;break e}var A=0,F=-1,H=-1,ie=0,ye=0,Ee=i,ve=null;t:for(;;){for(var Ie;Ee!==u||g!==0&&Ee.nodeType!==3||(F=A+g),Ee!==E||d!==0&&Ee.nodeType!==3||(H=A+d),Ee.nodeType===3&&(A+=Ee.nodeValue.length),(Ie=Ee.firstChild)!==null;)ve=Ee,Ee=Ie;for(;;){if(Ee===i)break t;if(ve===u&&++ie===g&&(F=A),ve===E&&++ye===d&&(H=A),(Ie=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Ie}u=F===-1||H===-1?null:{start:F,end:H}}else u=null}u=u||{start:0,end:0}}else u=null;for(zf={focusedElem:i,selectionRange:u},nu=!1,ze=o;ze!==null;)if(o=ze,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ze=i;else for(;ze!==null;){o=ze;try{var Ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var We=Ge.memoizedProps,tn=Ge.memoizedState,Y=o.stateNode,W=Y.getSnapshotBeforeUpdate(o.elementType===o.type?We:Bi(o.type,We),tn);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=o.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Jt(o,o.return,Re)}if(i=o.sibling,i!==null){i.return=o.return,ze=i;break}ze=o.return}return Ge=B_,B_=!1,Ge}function il(i,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&i)===i){var E=g.destroy;g.destroy=void 0,E!==void 0&&Ad(o,u,E)}g=g.next}while(g!==d)}}function Fu(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Cd(i){var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof o=="function"?o(i):o.current=i}}function z_(i){var o=i.alternate;o!==null&&(i.alternate=null,z_(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Ji],delete o[ja],delete o[Wf],delete o[TE],delete o[RE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function H_(i){return i.tag===5||i.tag===3||i.tag===4}function V_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||H_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function bd(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=pu));else if(d!==4&&(i=i.child,i!==null))for(bd(i,o,u),i=i.sibling;i!==null;)bd(i,o,u),i=i.sibling}function Pd(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Pd(i,o,u),i=i.sibling;i!==null;)Pd(i,o,u),i=i.sibling}var Sn=null,zi=!1;function ns(i,o,u){for(u=u.child;u!==null;)G_(i,o,u),u=u.sibling}function G_(i,o,u){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount($e,u)}catch{}switch(u.tag){case 5:bn||ko(u,o);case 6:var d=Sn,g=zi;Sn=null,ns(i,o,u),Sn=d,zi=g,Sn!==null&&(zi?(i=Sn,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):Sn.removeChild(u.stateNode));break;case 18:Sn!==null&&(zi?(i=Sn,u=u.stateNode,i.nodeType===8?Gf(i.parentNode,u):i.nodeType===1&&Gf(i,u),Ia(i)):Gf(Sn,u.stateNode));break;case 4:d=Sn,g=zi,Sn=u.stateNode.containerInfo,zi=!0,ns(i,o,u),Sn=d,zi=g;break;case 0:case 11:case 14:case 15:if(!bn&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var E=g,A=E.destroy;E=E.tag,A!==void 0&&((E&2)!==0||(E&4)!==0)&&Ad(u,o,A),g=g.next}while(g!==d)}ns(i,o,u);break;case 1:if(!bn&&(ko(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(F){Jt(u,o,F)}ns(i,o,u);break;case 21:ns(i,o,u);break;case 22:u.mode&1?(bn=(d=bn)||u.memoizedState!==null,ns(i,o,u),bn=d):ns(i,o,u);break;default:ns(i,o,u)}}function W_(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new VE),o.forEach(function(d){var g=JE.bind(null,i,d);u.has(d)||(u.add(d),d.then(g,g))})}}function Hi(i,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var g=u[d];try{var E=i,A=o,F=A;e:for(;F!==null;){switch(F.tag){case 5:Sn=F.stateNode,zi=!1;break e;case 3:Sn=F.stateNode.containerInfo,zi=!0;break e;case 4:Sn=F.stateNode.containerInfo,zi=!0;break e}F=F.return}if(Sn===null)throw Error(t(160));G_(E,A,g),Sn=null,zi=!1;var H=g.alternate;H!==null&&(H.return=null),g.return=null}catch(ie){Jt(g,o,ie)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)X_(o,i),o=o.sibling}function X_(i,o){var u=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Hi(o,i),tr(i),d&4){try{il(3,i,i.return),Fu(3,i)}catch(We){Jt(i,i.return,We)}try{il(5,i,i.return)}catch(We){Jt(i,i.return,We)}}break;case 1:Hi(o,i),tr(i),d&512&&u!==null&&ko(u,u.return);break;case 5:if(Hi(o,i),tr(i),d&512&&u!==null&&ko(u,u.return),i.flags&32){var g=i.stateNode;try{ft(g,"")}catch(We){Jt(i,i.return,We)}}if(d&4&&(g=i.stateNode,g!=null)){var E=i.memoizedProps,A=u!==null?u.memoizedProps:E,F=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{F==="input"&&E.type==="radio"&&E.name!=null&&mt(g,E),ot(F,A);var ie=ot(F,E);for(A=0;A<H.length;A+=2){var ye=H[A],Ee=H[A+1];ye==="style"?tt(g,Ee):ye==="dangerouslySetInnerHTML"?ke(g,Ee):ye==="children"?ft(g,Ee):T(g,ye,Ee,ie)}switch(F){case"input":dt(g,E);break;case"textarea":_e(g,E);break;case"select":var ve=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!E.multiple;var Ie=E.value;Ie!=null?O(g,!!E.multiple,Ie,!1):ve!==!!E.multiple&&(E.defaultValue!=null?O(g,!!E.multiple,E.defaultValue,!0):O(g,!!E.multiple,E.multiple?[]:"",!1))}g[ja]=E}catch(We){Jt(i,i.return,We)}}break;case 6:if(Hi(o,i),tr(i),d&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,E=i.memoizedProps;try{g.nodeValue=E}catch(We){Jt(i,i.return,We)}}break;case 3:if(Hi(o,i),tr(i),d&4&&u!==null&&u.memoizedState.isDehydrated)try{Ia(o.containerInfo)}catch(We){Jt(i,i.return,We)}break;case 4:Hi(o,i),tr(i);break;case 13:Hi(o,i),tr(i),g=i.child,g.flags&8192&&(E=g.memoizedState!==null,g.stateNode.isHidden=E,!E||g.alternate!==null&&g.alternate.memoizedState!==null||(Nd=G())),d&4&&W_(i);break;case 22:if(ye=u!==null&&u.memoizedState!==null,i.mode&1?(bn=(ie=bn)||ye,Hi(o,i),bn=ie):Hi(o,i),tr(i),d&8192){if(ie=i.memoizedState!==null,(i.stateNode.isHidden=ie)&&!ye&&(i.mode&1)!==0)for(ze=i,ye=i.child;ye!==null;){for(Ee=ze=ye;ze!==null;){switch(ve=ze,Ie=ve.child,ve.tag){case 0:case 11:case 14:case 15:il(4,ve,ve.return);break;case 1:ko(ve,ve.return);var Ge=ve.stateNode;if(typeof Ge.componentWillUnmount=="function"){d=ve,u=ve.return;try{o=d,Ge.props=o.memoizedProps,Ge.state=o.memoizedState,Ge.componentWillUnmount()}catch(We){Jt(d,u,We)}}break;case 5:ko(ve,ve.return);break;case 22:if(ve.memoizedState!==null){$_(Ee);continue}}Ie!==null?(Ie.return=ve,ze=Ie):$_(Ee)}ye=ye.sibling}e:for(ye=null,Ee=i;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{g=Ee.stateNode,ie?(E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none"):(F=Ee.stateNode,H=Ee.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Ze("display",A))}catch(We){Jt(i,i.return,We)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=ie?"":Ee.memoizedProps}catch(We){Jt(i,i.return,We)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===i)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===i)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===i)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Hi(o,i),tr(i),d&4&&W_(i);break;case 21:break;default:Hi(o,i),tr(i)}}function tr(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(H_(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(ft(g,""),d.flags&=-33);var E=V_(i);Pd(i,E,g);break;case 3:case 4:var A=d.stateNode.containerInfo,F=V_(i);bd(i,F,A);break;default:throw Error(t(161))}}catch(H){Jt(i,i.return,H)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function WE(i,o,u){ze=i,j_(i)}function j_(i,o,u){for(var d=(i.mode&1)!==0;ze!==null;){var g=ze,E=g.child;if(g.tag===22&&d){var A=g.memoizedState!==null||Ou;if(!A){var F=g.alternate,H=F!==null&&F.memoizedState!==null||bn;F=Ou;var ie=bn;if(Ou=A,(bn=H)&&!ie)for(ze=g;ze!==null;)A=ze,H=A.child,A.tag===22&&A.memoizedState!==null?Y_(g):H!==null?(H.return=A,ze=H):Y_(g);for(;E!==null;)ze=E,j_(E),E=E.sibling;ze=g,Ou=F,bn=ie}q_(i)}else(g.subtreeFlags&8772)!==0&&E!==null?(E.return=g,ze=E):q_(i)}}function q_(i){for(;ze!==null;){var o=ze;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:bn||Fu(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!bn)if(u===null)d.componentDidMount();else{var g=o.elementType===o.type?u.memoizedProps:Bi(o.type,u.memoizedProps);d.componentDidUpdate(g,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var E=o.updateQueue;E!==null&&$g(o,E,d);break;case 3:var A=o.updateQueue;if(A!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}$g(o,A,u)}break;case 5:var F=o.stateNode;if(u===null&&o.flags&4){u=F;var H=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&u.focus();break;case"img":H.src&&(u.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ie=o.alternate;if(ie!==null){var ye=ie.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&Ia(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||o.flags&512&&Cd(o)}catch(ve){Jt(o,o.return,ve)}}if(o===i){ze=null;break}if(u=o.sibling,u!==null){u.return=o.return,ze=u;break}ze=o.return}}function $_(i){for(;ze!==null;){var o=ze;if(o===i){ze=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ze=u;break}ze=o.return}}function Y_(i){for(;ze!==null;){var o=ze;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{Fu(4,o)}catch(H){Jt(o,u,H)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var g=o.return;try{d.componentDidMount()}catch(H){Jt(o,g,H)}}var E=o.return;try{Cd(o)}catch(H){Jt(o,E,H)}break;case 5:var A=o.return;try{Cd(o)}catch(H){Jt(o,A,H)}}}catch(H){Jt(o,o.return,H)}if(o===i){ze=null;break}var F=o.sibling;if(F!==null){F.return=o.return,ze=F;break}ze=o.return}}var XE=Math.ceil,ku=w.ReactCurrentDispatcher,Ld=w.ReactCurrentOwner,Ti=w.ReactCurrentBatchConfig,Mt=0,gn=null,an=null,En=0,ci=0,Bo=Zr(0),dn=0,rl=null,zs=0,Bu=0,Dd=0,sl=null,jn=null,Nd=0,zo=1/0,Er=null,zu=!1,Ud=null,is=null,Hu=!1,rs=null,Vu=0,ol=0,Id=null,Gu=-1,Wu=0;function zn(){return(Mt&6)!==0?G():Gu!==-1?Gu:Gu=G()}function ss(i){return(i.mode&1)===0?1:(Mt&2)!==0&&En!==0?En&-En:CE.transition!==null?(Wu===0&&(Wu=kn()),Wu):(i=gt,i!==0||(i=window.event,i=i===void 0?16:Zm(i.type)),i)}function Vi(i,o,u,d){if(50<ol)throw ol=0,Id=null,Error(t(185));en(i,u,d),((Mt&2)===0||i!==gn)&&(i===gn&&((Mt&2)===0&&(Bu|=u),dn===4&&os(i,En)),qn(i,d),u===1&&Mt===0&&(o.mode&1)===0&&(zo=G()+500,vu&&Qr()))}function qn(i,o){var u=i.callbackNode;Ls(i,o);var d=Oi(i,i===gn?En:0);if(d===0)u!==null&&j(u),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(u!=null&&j(u),o===1)i.tag===0?AE(Z_.bind(null,i)):Og(Z_.bind(null,i)),ME(function(){(Mt&6)===0&&Qr()}),u=null;else{switch(Gm(d)){case 1:u=Pe;break;case 4:u=Oe;break;case 16:u=Be;break;case 536870912:u=rt;break;default:u=Be}u=s0(u,K_.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function K_(i,o){if(Gu=-1,Wu=0,(Mt&6)!==0)throw Error(t(327));var u=i.callbackNode;if(Ho()&&i.callbackNode!==u)return null;var d=Oi(i,i===gn?En:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||o)o=Xu(i,d);else{o=d;var g=Mt;Mt|=2;var E=Q_();(gn!==i||En!==o)&&(Er=null,zo=G()+500,Vs(i,o));do try{$E();break}catch(F){J_(i,F)}while(!0);Qf(),ku.current=E,Mt=g,an!==null?o=0:(gn=null,En=0,o=dn)}if(o!==0){if(o===2&&(g=Nt(i),g!==0&&(d=g,o=Od(i,g))),o===1)throw u=rl,Vs(i,0),os(i,d),qn(i,G()),u;if(o===6)os(i,d);else{if(g=i.current.alternate,(d&30)===0&&!jE(g)&&(o=Xu(i,d),o===2&&(E=Nt(i),E!==0&&(d=E,o=Od(i,E))),o===1))throw u=rl,Vs(i,0),os(i,d),qn(i,G()),u;switch(i.finishedWork=g,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Gs(i,jn,Er);break;case 3:if(os(i,d),(d&130023424)===d&&(o=Nd+500-G(),10<o)){if(Oi(i,0)!==0)break;if(g=i.suspendedLanes,(g&d)!==d){zn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Vf(Gs.bind(null,i,jn,Er),o);break}Gs(i,jn,Er);break;case 4:if(os(i,d),(d&4194240)===d)break;for(o=i.eventTimes,g=-1;0<d;){var A=31-Tt(d);E=1<<A,A=o[A],A>g&&(g=A),d&=~E}if(d=g,d=G()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*XE(d/1960))-d,10<d){i.timeoutHandle=Vf(Gs.bind(null,i,jn,Er),d);break}Gs(i,jn,Er);break;case 5:Gs(i,jn,Er);break;default:throw Error(t(329))}}}return qn(i,G()),i.callbackNode===u?K_.bind(null,i):null}function Od(i,o){var u=sl;return i.current.memoizedState.isDehydrated&&(Vs(i,o).flags|=256),i=Xu(i,o),i!==2&&(o=jn,jn=u,o!==null&&Fd(o)),i}function Fd(i){jn===null?jn=i:jn.push.apply(jn,i)}function jE(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var g=u[d],E=g.getSnapshot;g=g.value;try{if(!Fi(E(),g))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function os(i,o){for(o&=~Dd,o&=~Bu,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-Tt(o),d=1<<u;i[u]=-1,o&=~d}}function Z_(i){if((Mt&6)!==0)throw Error(t(327));Ho();var o=Oi(i,0);if((o&1)===0)return qn(i,G()),null;var u=Xu(i,o);if(i.tag!==0&&u===2){var d=Nt(i);d!==0&&(o=d,u=Od(i,d))}if(u===1)throw u=rl,Vs(i,0),os(i,o),qn(i,G()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Gs(i,jn,Er),qn(i,G()),null}function kd(i,o){var u=Mt;Mt|=1;try{return i(o)}finally{Mt=u,Mt===0&&(zo=G()+500,vu&&Qr())}}function Hs(i){rs!==null&&rs.tag===0&&(Mt&6)===0&&Ho();var o=Mt;Mt|=1;var u=Ti.transition,d=gt;try{if(Ti.transition=null,gt=1,i)return i()}finally{gt=d,Ti.transition=u,Mt=o,(Mt&6)===0&&Qr()}}function Bd(){ci=Bo.current,Ht(Bo)}function Vs(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,EE(u)),an!==null)for(u=an.return;u!==null;){var d=u;switch($f(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&gu();break;case 3:Oo(),Ht(Gn),Ht(Rn),ad();break;case 5:sd(d);break;case 4:Oo();break;case 13:Ht(Xt);break;case 19:Ht(Xt);break;case 10:ed(d.type._context);break;case 22:case 23:Bd()}u=u.return}if(gn=i,an=i=as(i.current,null),En=ci=o,dn=0,rl=null,Dd=Bu=zs=0,jn=sl=null,Fs!==null){for(o=0;o<Fs.length;o++)if(u=Fs[o],d=u.interleaved,d!==null){u.interleaved=null;var g=d.next,E=u.pending;if(E!==null){var A=E.next;E.next=g,d.next=A}u.pending=d}Fs=null}return i}function J_(i,o){do{var u=an;try{if(Qf(),Cu.current=Du,bu){for(var d=jt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}bu=!1}if(Bs=0,mn=fn=jt=null,Ja=!1,Qa=0,Ld.current=null,u===null||u.return===null){dn=1,rl=o,an=null;break}e:{var E=i,A=u.return,F=u,H=o;if(o=En,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,ye=F,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ie=M_(A);if(Ie!==null){Ie.flags&=-257,w_(Ie,A,F,E,o),Ie.mode&1&&E_(E,ie,o),o=Ie,H=ie;var Ge=o.updateQueue;if(Ge===null){var We=new Set;We.add(H),o.updateQueue=We}else Ge.add(H);break e}else{if((o&1)===0){E_(E,ie,o),zd();break e}H=Error(t(426))}}else if(Gt&&F.mode&1){var tn=M_(A);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),w_(tn,A,F,E,o),Zf(Fo(H,F));break e}}E=H=Fo(H,F),dn!==4&&(dn=2),sl===null?sl=[E]:sl.push(E),E=A;do{switch(E.tag){case 3:E.flags|=65536,o&=-o,E.lanes|=o;var Y=y_(E,H,o);qg(E,Y);break e;case 1:F=H;var W=E.type,J=E.stateNode;if((E.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(is===null||!is.has(J)))){E.flags|=65536,o&=-o,E.lanes|=o;var Re=S_(E,F,o);qg(E,Re);break e}}E=E.return}while(E!==null)}t0(u)}catch(je){o=je,an===u&&u!==null&&(an=u=u.return);continue}break}while(!0)}function Q_(){var i=ku.current;return ku.current=Du,i===null?Du:i}function zd(){(dn===0||dn===3||dn===2)&&(dn=4),gn===null||(zs&268435455)===0&&(Bu&268435455)===0||os(gn,En)}function Xu(i,o){var u=Mt;Mt|=2;var d=Q_();(gn!==i||En!==o)&&(Er=null,Vs(i,o));do try{qE();break}catch(g){J_(i,g)}while(!0);if(Qf(),Mt=u,ku.current=d,an!==null)throw Error(t(261));return gn=null,En=0,dn}function qE(){for(;an!==null;)e0(an)}function $E(){for(;an!==null&&!se();)e0(an)}function e0(i){var o=r0(i.alternate,i,ci);i.memoizedProps=i.pendingProps,o===null?t0(i):an=o,Ld.current=null}function t0(i){var o=i;do{var u=o.alternate;if(i=o.return,(o.flags&32768)===0){if(u=zE(u,o,ci),u!==null){an=u;return}}else{if(u=HE(u,o),u!==null){u.flags&=32767,an=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{dn=6,an=null;return}}if(o=o.sibling,o!==null){an=o;return}an=o=i}while(o!==null);dn===0&&(dn=5)}function Gs(i,o,u){var d=gt,g=Ti.transition;try{Ti.transition=null,gt=1,YE(i,o,u,d)}finally{Ti.transition=g,gt=d}return null}function YE(i,o,u,d){do Ho();while(rs!==null);if((Mt&6)!==0)throw Error(t(327));u=i.finishedWork;var g=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var E=u.lanes|u.childLanes;if(Tn(i,E),i===gn&&(an=gn=null,En=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||Hu||(Hu=!0,s0(Be,function(){return Ho(),null})),E=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||E){E=Ti.transition,Ti.transition=null;var A=gt;gt=1;var F=Mt;Mt|=4,Ld.current=null,GE(i,u),X_(u,i),mE(zf),nu=!!Bf,zf=Bf=null,i.current=u,WE(u),ae(),Mt=F,gt=A,Ti.transition=E}else i.current=u;if(Hu&&(Hu=!1,rs=i,Vu=g),E=i.pendingLanes,E===0&&(is=null),wt(u.stateNode),qn(i,G()),o!==null)for(d=i.onRecoverableError,u=0;u<o.length;u++)g=o[u],d(g.value,{componentStack:g.stack,digest:g.digest});if(zu)throw zu=!1,i=Ud,Ud=null,i;return(Vu&1)!==0&&i.tag!==0&&Ho(),E=i.pendingLanes,(E&1)!==0?i===Id?ol++:(ol=0,Id=i):ol=0,Qr(),null}function Ho(){if(rs!==null){var i=Gm(Vu),o=Ti.transition,u=gt;try{if(Ti.transition=null,gt=16>i?16:i,rs===null)var d=!1;else{if(i=rs,rs=null,Vu=0,(Mt&6)!==0)throw Error(t(331));var g=Mt;for(Mt|=4,ze=i.current;ze!==null;){var E=ze,A=E.child;if((ze.flags&16)!==0){var F=E.deletions;if(F!==null){for(var H=0;H<F.length;H++){var ie=F[H];for(ze=ie;ze!==null;){var ye=ze;switch(ye.tag){case 0:case 11:case 15:il(8,ye,E)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,ze=Ee;else for(;ze!==null;){ye=ze;var ve=ye.sibling,Ie=ye.return;if(z_(ye),ye===ie){ze=null;break}if(ve!==null){ve.return=Ie,ze=ve;break}ze=Ie}}}var Ge=E.alternate;if(Ge!==null){var We=Ge.child;if(We!==null){Ge.child=null;do{var tn=We.sibling;We.sibling=null,We=tn}while(We!==null)}}ze=E}}if((E.subtreeFlags&2064)!==0&&A!==null)A.return=E,ze=A;else e:for(;ze!==null;){if(E=ze,(E.flags&2048)!==0)switch(E.tag){case 0:case 11:case 15:il(9,E,E.return)}var Y=E.sibling;if(Y!==null){Y.return=E.return,ze=Y;break e}ze=E.return}}var W=i.current;for(ze=W;ze!==null;){A=ze;var J=A.child;if((A.subtreeFlags&2064)!==0&&J!==null)J.return=A,ze=J;else e:for(A=W;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Fu(9,F)}}catch(je){Jt(F,F.return,je)}if(F===A){ze=null;break e}var Re=F.sibling;if(Re!==null){Re.return=F.return,ze=Re;break e}ze=F.return}}if(Mt=g,Qr(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot($e,i)}catch{}d=!0}return d}finally{gt=u,Ti.transition=o}}return!1}function n0(i,o,u){o=Fo(u,o),o=y_(i,o,1),i=ts(i,o,1),o=zn(),i!==null&&(en(i,1,o),qn(i,o))}function Jt(i,o,u){if(i.tag===3)n0(i,i,u);else for(;o!==null;){if(o.tag===3){n0(o,i,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))){i=Fo(u,i),i=S_(o,i,1),o=ts(o,i,1),i=zn(),o!==null&&(en(o,1,i),qn(o,i));break}}o=o.return}}function KE(i,o,u){var d=i.pingCache;d!==null&&d.delete(o),o=zn(),i.pingedLanes|=i.suspendedLanes&u,gn===i&&(En&u)===u&&(dn===4||dn===3&&(En&130023424)===En&&500>G()-Nd?Vs(i,0):Dd|=u),qn(i,o)}function i0(i,o){o===0&&((i.mode&1)===0?o=1:(o=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var u=zn();i=xr(i,o),i!==null&&(en(i,o,u),qn(i,u))}function ZE(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),i0(i,u)}function JE(i,o){var u=0;switch(i.tag){case 13:var d=i.stateNode,g=i.memoizedState;g!==null&&(u=g.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),i0(i,u)}var r0;r0=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||Gn.current)Xn=!0;else{if((i.lanes&u)===0&&(o.flags&128)===0)return Xn=!1,BE(i,o,u);Xn=(i.flags&131072)!==0}else Xn=!1,Gt&&(o.flags&1048576)!==0&&Fg(o,yu,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Iu(i,o),i=o.pendingProps;var g=bo(o,Rn.current);Io(o,u),g=cd(null,o,d,i,g,u);var E=fd();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Wn(d)?(E=!0,_u(o)):E=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,id(o),g.updater=Nu,o.stateNode=g,g._reactInternals=o,_d(o,d,i,u),o=Sd(null,o,d,!0,E,u)):(o.tag=0,Gt&&E&&qf(o),Bn(null,o,g,u),o=o.child),o;case 16:d=o.elementType;e:{switch(Iu(i,o),i=o.pendingProps,g=d._init,d=g(d._payload),o.type=d,g=o.tag=eM(d),i=Bi(d,i),g){case 0:o=yd(null,o,d,i,u);break e;case 1:o=P_(null,o,d,i,u);break e;case 11:o=T_(null,o,d,i,u);break e;case 14:o=R_(null,o,d,Bi(d.type,i),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Bi(d,g),yd(i,o,d,g,u);case 1:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Bi(d,g),P_(i,o,d,g,u);case 3:e:{if(L_(o),i===null)throw Error(t(387));d=o.pendingProps,E=o.memoizedState,g=E.element,jg(i,o),Ru(o,d,null,u);var A=o.memoizedState;if(d=A.element,E.isDehydrated)if(E={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=E,o.memoizedState=E,o.flags&256){g=Fo(Error(t(423)),o),o=D_(i,o,d,u,g);break e}else if(d!==g){g=Fo(Error(t(424)),o),o=D_(i,o,d,u,g);break e}else for(ui=Kr(o.stateNode.containerInfo.firstChild),li=o,Gt=!0,ki=null,u=Wg(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Do(),d===g){o=Sr(i,o,u);break e}Bn(i,o,d,u)}o=o.child}return o;case 5:return Yg(o),i===null&&Kf(o),d=o.type,g=o.pendingProps,E=i!==null?i.memoizedProps:null,A=g.children,Hf(d,g)?A=null:E!==null&&Hf(d,E)&&(o.flags|=32),b_(i,o),Bn(i,o,A,u),o.child;case 6:return i===null&&Kf(o),null;case 13:return N_(i,o,u);case 4:return rd(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=No(o,null,d,u):Bn(i,o,d,u),o.child;case 11:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Bi(d,g),T_(i,o,d,g,u);case 7:return Bn(i,o,o.pendingProps,u),o.child;case 8:return Bn(i,o,o.pendingProps.children,u),o.child;case 12:return Bn(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,g=o.pendingProps,E=o.memoizedProps,A=g.value,kt(Mu,d._currentValue),d._currentValue=A,E!==null)if(Fi(E.value,A)){if(E.children===g.children&&!Gn.current){o=Sr(i,o,u);break e}}else for(E=o.child,E!==null&&(E.return=o);E!==null;){var F=E.dependencies;if(F!==null){A=E.child;for(var H=F.firstContext;H!==null;){if(H.context===d){if(E.tag===1){H=yr(-1,u&-u),H.tag=2;var ie=E.updateQueue;if(ie!==null){ie=ie.shared;var ye=ie.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),ie.pending=H}}E.lanes|=u,H=E.alternate,H!==null&&(H.lanes|=u),td(E.return,u,o),F.lanes|=u;break}H=H.next}}else if(E.tag===10)A=E.type===o.type?null:E.child;else if(E.tag===18){if(A=E.return,A===null)throw Error(t(341));A.lanes|=u,F=A.alternate,F!==null&&(F.lanes|=u),td(A,u,o),A=E.sibling}else A=E.child;if(A!==null)A.return=E;else for(A=E;A!==null;){if(A===o){A=null;break}if(E=A.sibling,E!==null){E.return=A.return,A=E;break}A=A.return}E=A}Bn(i,o,g.children,u),o=o.child}return o;case 9:return g=o.type,d=o.pendingProps.children,Io(o,u),g=Mi(g),d=d(g),o.flags|=1,Bn(i,o,d,u),o.child;case 14:return d=o.type,g=Bi(d,o.pendingProps),g=Bi(d.type,g),R_(i,o,d,g,u);case 15:return A_(i,o,o.type,o.pendingProps,u);case 17:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Bi(d,g),Iu(i,o),o.tag=1,Wn(d)?(i=!0,_u(o)):i=!1,Io(o,u),v_(o,d,g),_d(o,d,g,u),Sd(null,o,d,!0,i,u);case 19:return I_(i,o,u);case 22:return C_(i,o,u)}throw Error(t(156,o.tag))};function s0(i,o){return L(i,o)}function QE(i,o,u,d){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(i,o,u,d){return new QE(i,o,u,d)}function Hd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function eM(i){if(typeof i=="function")return Hd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===K)return 11;if(i===ue)return 14}return 2}function as(i,o){var u=i.alternate;return u===null?(u=Ri(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function ju(i,o,u,d,g,E){var A=2;if(d=i,typeof i=="function")Hd(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case N:return Ws(u.children,g,E,o);case I:A=8,g|=8;break;case C:return i=Ri(12,u,o,g|2),i.elementType=C,i.lanes=E,i;case q:return i=Ri(13,u,o,g),i.elementType=q,i.lanes=E,i;case ne:return i=Ri(19,u,o,g),i.elementType=ne,i.lanes=E,i;case re:return qu(u,g,E,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:A=10;break e;case B:A=9;break e;case K:A=11;break e;case ue:A=14;break e;case Z:A=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Ri(A,u,o,g),o.elementType=i,o.type=d,o.lanes=E,o}function Ws(i,o,u,d){return i=Ri(7,i,d,o),i.lanes=u,i}function qu(i,o,u,d){return i=Ri(22,i,d,o),i.elementType=re,i.lanes=u,i.stateNode={isHidden:!1},i}function Vd(i,o,u){return i=Ri(6,i,null,o),i.lanes=u,i}function Gd(i,o,u){return o=Ri(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function tM(i,o,u,d,g){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Wd(i,o,u,d,g,E,A,F,H){return i=new tM(i,o,u,F,H),o===1?(o=1,E===!0&&(o|=8)):o=0,E=Ri(3,null,null,o),i.current=E,E.stateNode=i,E.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(E),i}function nM(i,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:d==null?null:""+d,children:i,containerInfo:o,implementation:u}}function o0(i){if(!i)return Jr;i=i._reactInternals;e:{if(Zi(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Wn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(Wn(u))return Ug(i,u,o)}return o}function a0(i,o,u,d,g,E,A,F,H){return i=Wd(u,d,!0,i,g,E,A,F,H),i.context=o0(null),u=i.current,d=zn(),g=ss(u),E=yr(d,g),E.callback=o??null,ts(u,E,g),i.current.lanes=g,en(i,g,d),qn(i,d),i}function $u(i,o,u,d){var g=o.current,E=zn(),A=ss(g);return u=o0(u),o.context===null?o.context=u:o.pendingContext=u,o=yr(E,A),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=ts(g,o,A),i!==null&&(Vi(i,g,A,E),Tu(i,g,A)),A}function Yu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function l0(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function Xd(i,o){l0(i,o),(i=i.alternate)&&l0(i,o)}function iM(){return null}var u0=typeof reportError=="function"?reportError:function(i){console.error(i)};function jd(i){this._internalRoot=i}Ku.prototype.render=jd.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));$u(i,o,null,null)},Ku.prototype.unmount=jd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Hs(function(){$u(null,i,null,null)}),o[mr]=null}};function Ku(i){this._internalRoot=i}Ku.prototype.unstable_scheduleHydration=function(i){if(i){var o=jm();i={blockedOn:null,target:i,priority:o};for(var u=0;u<qr.length&&o!==0&&o<qr[u].priority;u++);qr.splice(u,0,i),u===0&&Ym(i)}};function qd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Zu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function c0(){}function rM(i,o,u,d,g){if(g){if(typeof d=="function"){var E=d;d=function(){var ie=Yu(A);E.call(ie)}}var A=a0(o,d,i,0,null,!1,!1,"",c0);return i._reactRootContainer=A,i[mr]=A.current,Wa(i.nodeType===8?i.parentNode:i),Hs(),A}for(;g=i.lastChild;)i.removeChild(g);if(typeof d=="function"){var F=d;d=function(){var ie=Yu(H);F.call(ie)}}var H=Wd(i,0,!1,null,null,!1,!1,"",c0);return i._reactRootContainer=H,i[mr]=H.current,Wa(i.nodeType===8?i.parentNode:i),Hs(function(){$u(o,H,u,d)}),H}function Ju(i,o,u,d,g){var E=u._reactRootContainer;if(E){var A=E;if(typeof g=="function"){var F=g;g=function(){var H=Yu(A);F.call(H)}}$u(o,A,i,g)}else A=rM(u,o,i,g,d);return Yu(A)}Wm=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=yn(o.pendingLanes);u!==0&&(Ds(o,u|1),qn(o,G()),(Mt&6)===0&&(zo=G()+500,Qr()))}break;case 13:Hs(function(){var d=xr(i,1);if(d!==null){var g=zn();Vi(d,i,1,g)}}),Xd(i,1)}},vf=function(i){if(i.tag===13){var o=xr(i,134217728);if(o!==null){var u=zn();Vi(o,i,134217728,u)}Xd(i,134217728)}},Xm=function(i){if(i.tag===13){var o=ss(i),u=xr(i,o);if(u!==null){var d=zn();Vi(u,i,o,d)}Xd(i,o)}},jm=function(){return gt},qm=function(i,o){var u=gt;try{return gt=i,o()}finally{gt=u}},be=function(i,o,u){switch(o){case"input":if(dt(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==i&&d.form===i.form){var g=mu(d);if(!g)throw Error(t(90));_t(d),dt(d,g)}}}break;case"textarea":_e(i,u);break;case"select":o=u.value,o!=null&&O(i,!!u.multiple,o,!1)}},Bt=kd,cn=Hs;var sM={usingClientEntryPoint:!1,Events:[qa,Ao,mu,Ne,at,kd]},al={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oM={bundleType:al.bundleType,version:al.version,rendererPackageName:al.rendererPackageName,rendererConfig:al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Jl(i),i===null?null:i.stateNode},findFiberByHostInstance:al.findFiberByHostInstance||iM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{$e=Qu.inject(oM),lt=Qu}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sM,$n.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(o))throw Error(t(200));return nM(i,o,null,u)},$n.createRoot=function(i,o){if(!qd(i))throw Error(t(299));var u=!1,d="",g=u0;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Wd(i,1,!1,null,null,u,!1,d,g),i[mr]=o.current,Wa(i.nodeType===8?i.parentNode:i),new jd(o)},$n.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Jl(o),i=i===null?null:i.stateNode,i},$n.flushSync=function(i){return Hs(i)},$n.hydrate=function(i,o,u){if(!Zu(o))throw Error(t(200));return Ju(null,i,o,!0,u)},$n.hydrateRoot=function(i,o,u){if(!qd(i))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,g=!1,E="",A=u0;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(E=u.identifierPrefix),u.onRecoverableError!==void 0&&(A=u.onRecoverableError)),o=a0(o,null,i,1,u??null,g,!1,E,A),i[mr]=o.current,Wa(i),d)for(i=0;i<d.length;i++)u=d[i],g=u._getVersion,g=g(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,g]:o.mutableSourceEagerHydrationData.push(u,g);return new Ku(o)},$n.render=function(i,o,u){if(!Zu(o))throw Error(t(200));return Ju(null,i,o,!1,u)},$n.unmountComponentAtNode=function(i){if(!Zu(i))throw Error(t(40));return i._reactRootContainer?(Hs(function(){Ju(null,null,i,!1,function(){i._reactRootContainer=null,i[mr]=null})}),!0):!1},$n.unstable_batchedUpdates=kd,$n.unstable_renderSubtreeIntoContainer=function(i,o,u,d){if(!Zu(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Ju(i,o,u,!1,d)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var v0;function mM(){if(v0)return Kd.exports;v0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Kd.exports=pM(),Kd.exports}var x0;function gM(){if(x0)return ec;x0=1;var r=mM();return ec.createRoot=r.createRoot,ec.hydrateRoot=r.hydrateRoot,ec}var _M=gM();const vM=ux(_M);/**
 * react-router v7.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var y0="popstate";function S0(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function xM(r={}){function e(n,s){var h;let a=(h=s.state)==null?void 0:h.masked,{pathname:l,search:c,hash:f}=a||n.location;return Wh("",{pathname:l,search:c,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default",a?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function t(n,s){return typeof s=="string"?s:Ml(s)}return SM(e,t,null,r)}function Kt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function cr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yM(){return Math.random().toString(36).substring(2,10)}function E0(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Wh(r,e,t=null,n,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ra(e):e,state:t,key:e&&e.key||n||yM(),unstable_mask:s}}function Ml({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ra(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substring(n),r=r.substring(0,n)),r&&(e.pathname=r)}return e}function SM(r,e,t,n={}){let{window:s=document.defaultView,v5Compat:a=!1}=n,l=s.history,c="POP",f=null,h=p();h==null&&(h=0,l.replaceState({...l.state,idx:h},""));function p(){return(l.state||{idx:null}).idx}function m(){c="POP";let v=p(),x=v==null?null:v-h;h=v,f&&f({action:c,location:S.location,delta:x})}function _(v,x){c="PUSH";let R=S0(v)?v:Wh(S.location,v,x);h=p()+1;let T=E0(R,h),w=S.createHref(R.unstable_mask||R);try{l.pushState(T,"",w)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(w)}a&&f&&f({action:c,location:S.location,delta:1})}function y(v,x){c="REPLACE";let R=S0(v)?v:Wh(S.location,v,x);h=p();let T=E0(R,h),w=S.createHref(R.unstable_mask||R);l.replaceState(T,"",w),a&&f&&f({action:c,location:S.location,delta:0})}function M(v){return EM(v)}let S={get action(){return c},get location(){return r(s,l)},listen(v){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(y0,m),f=v,()=>{s.removeEventListener(y0,m),f=null}},createHref(v){return e(s,v)},createURL:M,encodeLocation(v){let x=M(v);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(v){return l.go(v)}};return S}function EM(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Kt(t,"No window.location.(origin|href) available to create URL");let n=typeof r=="string"?r:Ml(r);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=t+n),new URL(n,t)}function cx(r,e,t="/"){return MM(r,e,t,!1)}function MM(r,e,t,n){let s=typeof e=="string"?Ra(e):e,a=Ir(s.pathname||"/",t);if(a==null)return null;let l=fx(r);wM(l);let c=null;for(let f=0;c==null&&f<l.length;++f){let h=IM(a);c=NM(l[f],h,n)}return c}function fx(r,e=[],t=[],n="",s=!1){let a=(l,c,f=s,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&f)return;Kt(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let m=$i([n,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(Kt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),fx(l.children,e,_,m,f)),!(l.path==null&&!l.index)&&e.push({path:m,score:LM(m,l.index),routesMeta:_})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let h of dx(l.path))a(l,c,!0,h)}),e}function dx(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(n.length===0)return s?[a,""]:[a];let l=dx(n.join("/")),c=[];return c.push(...l.map(f=>f===""?a:[a,f].join("/"))),s&&c.push(...l),c.map(f=>r.startsWith("/")&&f===""?"/":f)}function wM(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:DM(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}var TM=/^:[\w-]+$/,RM=3,AM=2,CM=1,bM=10,PM=-2,M0=r=>r==="*";function LM(r,e){let t=r.split("/"),n=t.length;return t.some(M0)&&(n+=PM),e&&(n+=AM),t.filter(s=>!M0(s)).reduce((s,a)=>s+(TM.test(a)?RM:a===""?CM:bM),n)}function DM(r,e){return r.length===e.length&&r.slice(0,-1).every((n,s)=>n===e[s])?r[r.length-1]-e[e.length-1]:0}function NM(r,e,t=!1){let{routesMeta:n}=r,s={},a="/",l=[];for(let c=0;c<n.length;++c){let f=n[c],h=c===n.length-1,p=a==="/"?e:e.slice(a.length)||"/",m=Vc({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},p),_=f.route;if(!m&&h&&t&&!n[n.length-1].route.index&&(m=Vc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},p)),!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:$i([a,m.pathname]),pathnameBase:BM($i([a,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(a=$i([a,m.pathnameBase]))}return l}function Vc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=UM(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:n.reduce((h,{paramName:p,isOptional:m},_)=>{if(p==="*"){let M=c[_]||"";l=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const y=c[_];return m&&!y?h[p]=void 0:h[p]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:r}}function UM(r,e=!1,t=!0){cr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let n=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,f,h,p)=>{if(n.push({paramName:c,isOptional:f!=null}),f){let m=p.charAt(h+l.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(n.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function IM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ir(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}var OM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function FM(r,e="/"){let{pathname:t,search:n="",hash:s=""}=typeof r=="string"?Ra(r):r,a;return t?(t=px(t),t.startsWith("/")?a=w0(t.substring(1),"/"):a=w0(t,e)):a=e,{pathname:a,search:zM(n),hash:HM(s)}}function w0(r,e){let t=Gc(e).split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Qd(r,e,t,n){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kM(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function hx(r){let e=kM(r);return e.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function tm(r,e,t,n=!1){let s;typeof r=="string"?s=Ra(r):(s={...r},Kt(!s.pathname||!s.pathname.includes("?"),Qd("?","pathname","search",s)),Kt(!s.pathname||!s.pathname.includes("#"),Qd("#","pathname","hash",s)),Kt(!s.search||!s.search.includes("#"),Qd("#","search","hash",s)));let a=r===""||s.pathname==="",l=a?"/":s.pathname,c;if(l==null)c=t;else{let m=e.length-1;if(!n&&l.startsWith("..")){let _=l.split("/");for(;_[0]==="..";)_.shift(),m-=1;s.pathname=_.join("/")}c=m>=0?e[m]:"/"}let f=FM(s,c),h=l&&l!=="/"&&l.endsWith("/"),p=(a||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(h||p)&&(f.pathname+="/"),f}var px=r=>r.replace(/\/\/+/g,"/"),$i=r=>px(r.join("/")),Gc=r=>r.replace(/\/+$/,""),BM=r=>Gc(r).replace(/^\/*/,"/"),zM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,HM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,VM=class{constructor(r,e,t,n=!1){this.status=r,this.statusText=e||"",this.internal=n,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function GM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function WM(r){let e=r.map(t=>t.route.path).filter(Boolean);return $i(e)||"/"}var mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gx(r,e){let t=r;if(typeof t!="string"||!OM.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let n=t,s=!1;if(mx)try{let a=new URL(window.location.href),l=t.startsWith("//")?new URL(a.protocol+t):new URL(t),c=Ir(l.pathname,e);l.origin===a.origin&&c!=null?t=c+l.search+l.hash:s=!0}catch{cr(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:s,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _x=["POST","PUT","PATCH","DELETE"];new Set(_x);var XM=["GET",..._x];new Set(XM);var Aa=le.createContext(null);Aa.displayName="DataRouter";var tf=le.createContext(null);tf.displayName="DataRouterState";var vx=le.createContext(!1);function jM(){return le.useContext(vx)}var xx=le.createContext({isTransitioning:!1});xx.displayName="ViewTransition";var qM=le.createContext(new Map);qM.displayName="Fetchers";var $M=le.createContext(null);$M.displayName="Await";var Ii=le.createContext(null);Ii.displayName="Navigation";var Nl=le.createContext(null);Nl.displayName="Location";var zr=le.createContext({outlet:null,matches:[],isDataRoute:!1});zr.displayName="Route";var nm=le.createContext(null);nm.displayName="RouteError";var yx="REACT_ROUTER_ERROR",YM="REDIRECT",KM="ROUTE_ERROR_RESPONSE";function ZM(r){if(r.startsWith(`${yx}:${YM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function JM(r){if(r.startsWith(`${yx}:${KM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new VM(e.status,e.statusText,e.data)}catch{}}function QM(r,{relative:e}={}){Kt(Ul(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:n}=le.useContext(Ii),{hash:s,pathname:a,search:l}=Il(r,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:$i([t,a])),n.createHref({pathname:c,search:l,hash:s})}function Ul(){return le.useContext(Nl)!=null}function Hr(){return Kt(Ul(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(Nl).location}var Sx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ex(r){le.useContext(Ii).static||le.useLayoutEffect(r)}function e1(){let{isDataRoute:r}=le.useContext(zr);return r?h1():t1()}function t1(){Kt(Ul(),"useNavigate() may be used only in the context of a <Router> component.");let r=le.useContext(Aa),{basename:e,navigator:t}=le.useContext(Ii),{matches:n}=le.useContext(zr),{pathname:s}=Hr(),a=JSON.stringify(hx(n)),l=le.useRef(!1);return Ex(()=>{l.current=!0}),le.useCallback((f,h={})=>{if(cr(l.current,Sx),!l.current)return;if(typeof f=="number"){t.go(f);return}let p=tm(f,JSON.parse(a),s,h.relative==="path");r==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:$i([e,p.pathname])),(h.replace?t.replace:t.push)(p,h.state,h)},[e,t,a,s,r])}le.createContext(null);function Il(r,{relative:e}={}){let{matches:t}=le.useContext(zr),{pathname:n}=Hr(),s=JSON.stringify(hx(t));return le.useMemo(()=>tm(r,JSON.parse(s),n,e==="path"),[r,s,n,e])}function n1(r,e){return Mx(r,e)}function Mx(r,e,t){var v;Kt(Ul(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=le.useContext(Ii),{matches:s}=le.useContext(zr),a=s[s.length-1],l=a?a.params:{},c=a?a.pathname:"/",f=a?a.pathnameBase:"/",h=a&&a.route;{let x=h&&h.path||"";Tx(c,!h||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let p=Hr(),m;if(e){let x=typeof e=="string"?Ra(e):e;Kt(f==="/"||((v=x.pathname)==null?void 0:v.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${x.pathname}" was given in the \`location\` prop.`),m=x}else m=p;let _=m.pathname||"/",y=_;if(f!=="/"){let x=f.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(x.length).join("/")}let M=cx(r,{pathname:y});cr(h||M!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),cr(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=a1(M&&M.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:$i([f,n.encodeLocation?n.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:$i([f,n.encodeLocation?n.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),s,t);return e&&S?le.createElement(Nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...m},navigationType:"POP"}},S):S}function i1(){let r=d1(),e=GM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,n="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",r),l=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:a},"ErrorBoundary")," or"," ",le.createElement("code",{style:a},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),t?le.createElement("pre",{style:s},t):null,l)}var r1=le.createElement(i1,null),wx=class extends le.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=JM(r.digest);t&&(r=t)}let e=r!==void 0?le.createElement(zr.Provider,{value:this.props.routeContext},le.createElement(nm.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?le.createElement(s1,{error:r},e):e}};wx.contextType=vx;var eh=new WeakMap;function s1({children:r,error:e}){let{basename:t}=le.useContext(Ii);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let n=ZM(e.digest);if(n){let s=eh.get(e);if(s)throw s;let a=gx(n.location,t);if(mx&&!eh.get(e))if(a.isExternal||n.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:n.replace}));throw eh.set(e,l),l}return le.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return r}function o1({routeContext:r,match:e,children:t}){let n=le.useContext(Aa);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement(zr.Provider,{value:r},t)}function a1(r,e=[],t){let n=t==null?void 0:t.state;if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let s=r,a=n==null?void 0:n.errors;if(a!=null){let p=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);Kt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let l=!1,c=-1;if(t&&n){l=n.renderFallback;for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:_,errors:y}=n,M=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||M){t.isStatic&&(l=!0),c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}}let f=t==null?void 0:t.onError,h=n&&f?(p,m)=>{var _,y;f(p,{location:n.location,params:((y=(_=n.matches)==null?void 0:_[0])==null?void 0:y.params)??{},unstable_pattern:WM(n.matches),errorInfo:m})}:void 0;return s.reduceRight((p,m,_)=>{let y,M=!1,S=null,v=null;n&&(y=a&&m.route.id?a[m.route.id]:void 0,S=m.route.errorElement||r1,l&&(c<0&&_===0?(Tx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,v=null):c===_&&(M=!0,v=m.route.hydrateFallbackElement||null)));let x=e.concat(s.slice(0,_+1)),R=()=>{let T;return y?T=S:M?T=v:m.route.Component?T=le.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=p,le.createElement(o1,{match:m,routeContext:{outlet:p,matches:x,isDataRoute:n!=null},children:T})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?le.createElement(wx,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):R()},null)}function im(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l1(r){let e=le.useContext(Aa);return Kt(e,im(r)),e}function u1(r){let e=le.useContext(tf);return Kt(e,im(r)),e}function c1(r){let e=le.useContext(zr);return Kt(e,im(r)),e}function rm(r){let e=c1(r),t=e.matches[e.matches.length-1];return Kt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function f1(){return rm("useRouteId")}function d1(){var n;let r=le.useContext(nm),e=u1("useRouteError"),t=rm("useRouteError");return r!==void 0?r:(n=e.errors)==null?void 0:n[t]}function h1(){let{router:r}=l1("useNavigate"),e=rm("useNavigate"),t=le.useRef(!1);return Ex(()=>{t.current=!0}),le.useCallback(async(s,a={})=>{cr(t.current,Sx),t.current&&(typeof s=="number"?await r.navigate(s):await r.navigate(s,{fromRouteId:e,...a}))},[r,e])}var T0={};function Tx(r,e,t){!e&&!T0[r]&&(T0[r]=!0,cr(!1,t))}le.memo(p1);function p1({routes:r,future:e,state:t,isStatic:n,onError:s}){return Mx(r,void 0,{state:t,isStatic:n,onError:s})}function Xh(r){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function m1({basename:r="/",children:e=null,location:t,navigationType:n="POP",navigator:s,static:a=!1,unstable_useTransitions:l}){Kt(!Ul(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=le.useMemo(()=>({basename:c,navigator:s,static:a,unstable_useTransitions:l,future:{}}),[c,s,a,l]);typeof t=="string"&&(t=Ra(t));let{pathname:h="/",search:p="",hash:m="",state:_=null,key:y="default",unstable_mask:M}=t,S=le.useMemo(()=>{let v=Ir(h,c);return v==null?null:{location:{pathname:v,search:p,hash:m,state:_,key:y,unstable_mask:M},navigationType:n}},[c,h,p,m,_,y,n,M]);return cr(S!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:le.createElement(Ii.Provider,{value:f},le.createElement(Nl.Provider,{children:e,value:S}))}function g1({children:r,location:e}){return n1(jh(r),e)}function jh(r,e=[]){let t=[];return le.Children.forEach(r,(n,s)=>{if(!le.isValidElement(n))return;let a=[...e,s];if(n.type===le.Fragment){t.push.apply(t,jh(n.props.children,a));return}Kt(n.type===Xh,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=jh(n.props.children,a)),t.push(l)}),t}var Cc="get",bc="application/x-www-form-urlencoded";function nf(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function _1(r){return nf(r)&&r.tagName.toLowerCase()==="button"}function v1(r){return nf(r)&&r.tagName.toLowerCase()==="form"}function x1(r){return nf(r)&&r.tagName.toLowerCase()==="input"}function y1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function S1(r,e){return r.button===0&&(!e||e==="_self")&&!y1(r)}var tc=null;function E1(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var M1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function th(r){return r!=null&&!M1.has(r)?(cr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bc}"`),null):r}function w1(r,e){let t,n,s,a,l;if(v1(r)){let c=r.getAttribute("action");n=c?Ir(c,e):null,t=r.getAttribute("method")||Cc,s=th(r.getAttribute("enctype"))||bc,a=new FormData(r)}else if(_1(r)||x1(r)&&(r.type==="submit"||r.type==="image")){let c=r.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||c.getAttribute("action");if(n=f?Ir(f,e):null,t=r.getAttribute("formmethod")||c.getAttribute("method")||Cc,s=th(r.getAttribute("formenctype"))||th(c.getAttribute("enctype"))||bc,a=new FormData(c,r),!E1()){let{name:h,type:p,value:m}=r;if(p==="image"){let _=h?`${h}.`:"";a.append(`${_}x`,"0"),a.append(`${_}y`,"0")}else h&&a.append(h,m)}}else{if(nf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Cc,n=null,s=bc,l=r}return a&&s==="text/plain"&&(l=a,a=void 0),{action:n,method:t.toLowerCase(),encType:s,formData:a,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Rx(r,e,t,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${n}`:s.pathname=`${s.pathname}.${n}`:s.pathname==="/"?s.pathname=`_root.${n}`:e&&Ir(s.pathname,e)==="/"?s.pathname=`${Gc(e)}/_root.${n}`:s.pathname=`${Gc(s.pathname)}.${n}`,s}async function T1(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function R1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function A1(r,e,t){let n=await Promise.all(r.map(async s=>{let a=e.routes[s.route.id];if(a){let l=await T1(a,t);return l.links?l.links():[]}return[]}));return L1(n.flat(1).filter(R1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function R0(r,e,t,n,s,a){let l=(f,h)=>t[h]?f.route.id!==t[h].route.id:!0,c=(f,h)=>{var p;return t[h].pathname!==f.pathname||((p=t[h].route.path)==null?void 0:p.endsWith("*"))&&t[h].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,h)=>l(f,h)||c(f,h)):a==="data"?e.filter((f,h)=>{var m;let p=n.routes[f.route.id];if(!p||!p.hasLoader)return!1;if(l(f,h)||c(f,h))return!0;if(f.route.shouldRevalidate){let _=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((m=t[0])==null?void 0:m.params)||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function C1(r,e,{includeHydrateFallback:t}={}){return b1(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let a=[s.module];return s.clientActionModule&&(a=a.concat(s.clientActionModule)),s.clientLoaderModule&&(a=a.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(a=a.concat(s.hydrateFallbackModule)),s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function b1(r){return[...new Set(r)]}function P1(r){let e={},t=Object.keys(r).sort();for(let n of t)e[n]=r[n];return e}function L1(r,e){let t=new Set;return new Set(e),r.reduce((n,s)=>{let a=JSON.stringify(P1(s));return t.has(a)||(t.add(a),n.push({key:a,link:s})),n},[])}function om(){let r=le.useContext(Aa);return sm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function D1(){let r=le.useContext(tf);return sm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var am=le.createContext(void 0);am.displayName="FrameworkContext";function lm(){let r=le.useContext(am);return sm(r,"You must render this element inside a <HydratedRouter> element"),r}function N1(r,e){let t=le.useContext(am),[n,s]=le.useState(!1),[a,l]=le.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:h,onMouseLeave:p,onTouchStart:m}=e,_=le.useRef(null);le.useEffect(()=>{if(r==="render"&&l(!0),r==="viewport"){let S=x=>{x.forEach(R=>{l(R.isIntersecting)})},v=new IntersectionObserver(S,{threshold:.5});return _.current&&v.observe(_.current),()=>{v.disconnect()}}},[r]),le.useEffect(()=>{if(n){let S=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(S)}}},[n]);let y=()=>{s(!0)},M=()=>{s(!1),l(!1)};return t?r!=="intent"?[a,_,{}]:[a,_,{onFocus:ul(c,y),onBlur:ul(f,M),onMouseEnter:ul(h,y),onMouseLeave:ul(p,M),onTouchStart:ul(m,y)}]:[!1,_,{}]}function ul(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function U1({page:r,...e}){let t=jM(),{router:n}=om(),s=le.useMemo(()=>cx(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?t?le.createElement(O1,{page:r,matches:s,...e}):le.createElement(F1,{page:r,matches:s,...e}):null}function I1(r){let{manifest:e,routeModules:t}=lm(),[n,s]=le.useState([]);return le.useEffect(()=>{let a=!1;return A1(r,e,t).then(l=>{a||s(l)}),()=>{a=!0}},[r,e,t]),n}function O1({page:r,matches:e,...t}){let n=Hr(),{future:s}=lm(),{basename:a}=om(),l=le.useMemo(()=>{if(r===n.pathname+n.search+n.hash)return[];let c=Rx(r,a,s.unstable_trailingSlashAwareDataRequests,"rsc"),f=!1,h=[];for(let p of e)typeof p.route.shouldRevalidate=="function"?f=!0:h.push(p.route.id);return f&&h.length>0&&c.searchParams.set("_routes",h.join(",")),[c.pathname+c.search]},[a,s.unstable_trailingSlashAwareDataRequests,r,n,e]);return le.createElement(le.Fragment,null,l.map(c=>le.createElement("link",{key:c,rel:"prefetch",as:"fetch",href:c,...t})))}function F1({page:r,matches:e,...t}){let n=Hr(),{future:s,manifest:a,routeModules:l}=lm(),{basename:c}=om(),{loaderData:f,matches:h}=D1(),p=le.useMemo(()=>R0(r,e,h,a,n,"data"),[r,e,h,a,n]),m=le.useMemo(()=>R0(r,e,h,a,n,"assets"),[r,e,h,a,n]),_=le.useMemo(()=>{if(r===n.pathname+n.search+n.hash)return[];let S=new Set,v=!1;if(e.forEach(R=>{var w;let T=a.routes[R.route.id];!T||!T.hasLoader||(!p.some(D=>D.route.id===R.route.id)&&R.route.id in f&&((w=l[R.route.id])!=null&&w.shouldRevalidate)||T.hasClientLoader?v=!0:S.add(R.route.id))}),S.size===0)return[];let x=Rx(r,c,s.unstable_trailingSlashAwareDataRequests,"data");return v&&S.size>0&&x.searchParams.set("_routes",e.filter(R=>S.has(R.route.id)).map(R=>R.route.id).join(",")),[x.pathname+x.search]},[c,s.unstable_trailingSlashAwareDataRequests,f,n,a,p,e,r,l]),y=le.useMemo(()=>C1(m,a),[m,a]),M=I1(m);return le.createElement(le.Fragment,null,_.map(S=>le.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),y.map(S=>le.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),M.map(({key:S,link:v})=>le.createElement("link",{key:S,nonce:t.nonce,...v,crossOrigin:v.crossOrigin??t.crossOrigin})))}function k1(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var B1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{B1&&(window.__reactRouterVersion="7.14.1")}catch{}function z1({basename:r,children:e,unstable_useTransitions:t,window:n}){let s=le.useRef();s.current==null&&(s.current=xM({window:n,v5Compat:!0}));let a=s.current,[l,c]=le.useState({action:a.action,location:a.location}),f=le.useCallback(h=>{t===!1?c(h):le.startTransition(()=>c(h))},[t]);return le.useLayoutEffect(()=>a.listen(f),[a,f]),le.createElement(m1,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a,unstable_useTransitions:t})}var Ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rf=le.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:s,reloadDocument:a,replace:l,unstable_mask:c,state:f,target:h,to:p,preventScrollReset:m,viewTransition:_,unstable_defaultShouldRevalidate:y,...M},S){let{basename:v,navigator:x,unstable_useTransitions:R}=le.useContext(Ii),T=typeof p=="string"&&Ax.test(p),w=gx(p,v);p=w.to;let D=QM(p,{relative:s}),U=Hr(),N=null;if(c){let ue=tm(c,[],U.unstable_mask?U.unstable_mask.pathname:"/",!0);v!=="/"&&(ue.pathname=ue.pathname==="/"?v:$i([v,ue.pathname])),N=x.createHref(ue)}let[I,C,b]=N1(n,M),B=G1(p,{replace:l,unstable_mask:c,state:f,target:h,preventScrollReset:m,relative:s,viewTransition:_,unstable_defaultShouldRevalidate:y,unstable_useTransitions:R});function K(ue){e&&e(ue),ue.defaultPrevented||B(ue)}let q=!(w.isExternal||a),ne=le.createElement("a",{...M,...b,href:(q?N:void 0)||w.absoluteURL||D,onClick:q?K:e,ref:k1(S,C),target:h,"data-discover":!T&&t==="render"?"true":void 0});return I&&!T?le.createElement(le.Fragment,null,ne,le.createElement(U1,{page:D})):ne});rf.displayName="Link";var qh=le.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:s=!1,style:a,to:l,viewTransition:c,children:f,...h},p){let m=Il(l,{relative:h.relative}),_=Hr(),y=le.useContext(tf),{navigator:M,basename:S}=le.useContext(Ii),v=y!=null&&$1(m)&&c===!0,x=M.encodeLocation?M.encodeLocation(m).pathname:m.pathname,R=_.pathname,T=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(R=R.toLowerCase(),T=T?T.toLowerCase():null,x=x.toLowerCase()),T&&S&&(T=Ir(T,S)||T);const w=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let D=R===x||!s&&R.startsWith(x)&&R.charAt(w)==="/",U=T!=null&&(T===x||!s&&T.startsWith(x)&&T.charAt(x.length)==="/"),N={isActive:D,isPending:U,isTransitioning:v},I=D?e:void 0,C;typeof n=="function"?C=n(N):C=[n,D?"active":null,U?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(N):a;return le.createElement(rf,{...h,"aria-current":I,className:C,ref:p,style:b,to:l,viewTransition:c},typeof f=="function"?f(N):f)});qh.displayName="NavLink";var H1=le.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:n,replace:s,state:a,method:l=Cc,action:c,onSubmit:f,relative:h,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:_,...y},M)=>{let{unstable_useTransitions:S}=le.useContext(Ii),v=j1(),x=q1(c,{relative:h}),R=l.toLowerCase()==="get"?"get":"post",T=typeof c=="string"&&Ax.test(c),w=D=>{if(f&&f(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,N=(U==null?void 0:U.getAttribute("formmethod"))||l,I=()=>v(U||D.currentTarget,{fetcherKey:e,method:N,navigate:t,replace:s,state:a,relative:h,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:_});S&&t!==!1?le.startTransition(()=>I()):I()};return le.createElement("form",{ref:M,method:R,action:x,onSubmit:n?f:w,...y,"data-discover":!T&&r==="render"?"true":void 0})});H1.displayName="Form";function V1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cx(r){let e=le.useContext(Aa);return Kt(e,V1(r)),e}function G1(r,{target:e,replace:t,unstable_mask:n,state:s,preventScrollReset:a,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f,unstable_useTransitions:h}={}){let p=e1(),m=Hr(),_=Il(r,{relative:l});return le.useCallback(y=>{if(S1(y,e)){y.preventDefault();let M=t!==void 0?t:Ml(m)===Ml(_),S=()=>p(r,{replace:M,unstable_mask:n,state:s,preventScrollReset:a,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f});h?le.startTransition(()=>S()):S()}},[m,p,_,t,n,s,e,r,a,l,c,f,h])}var W1=0,X1=()=>`__${String(++W1)}__`;function j1(){let{router:r}=Cx("useSubmit"),{basename:e}=le.useContext(Ii),t=f1(),n=r.fetch,s=r.navigate;return le.useCallback(async(a,l={})=>{let{action:c,method:f,encType:h,formData:p,body:m}=w1(a,e);if(l.navigate===!1){let _=l.fetcherKey||X1();await n(_,t,l.action||c,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s(l.action||c,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:t,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,s,e,t])}function q1(r,{relative:e}={}){let{basename:t}=le.useContext(Ii),n=le.useContext(zr);Kt(n,"useFormAction must be used inside a RouteContext");let[s]=n.matches.slice(-1),a={...Il(r||".",{relative:e})},l=Hr();if(r==null){a.search=l.search;let c=new URLSearchParams(a.search),f=c.getAll("index");if(f.some(p=>p==="")){c.delete("index"),f.filter(m=>m).forEach(m=>c.append("index",m));let p=c.toString();a.search=p?`?${p}`:""}}return(!r||r===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:$i([t,a.pathname])),Ml(a)}function $1(r,{relative:e}={}){let t=le.useContext(xx);Kt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Cx("useViewTransitionState"),s=Il(r,{relative:e});if(!t.isTransitioning)return!1;let a=Ir(t.currentLocation.pathname,n)||t.currentLocation.pathname,l=Ir(t.nextLocation.pathname,n)||t.nextLocation.pathname;return Vc(s.pathname,l)!=null||Vc(s.pathname,a)!=null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="171",Y1=0,A0=1,K1=2,bx=1,Z1=2,Cr=3,Ms=0,Zn=1,Lr=2,xs=0,aa=1,C0=2,b0=3,P0=4,J1=5,no=100,Q1=101,ew=102,tw=103,nw=104,iw=200,rw=201,sw=202,ow=203,$h=204,Yh=205,aw=206,lw=207,uw=208,cw=209,fw=210,dw=211,hw=212,pw=213,mw=214,Kh=0,Zh=1,Jh=2,ha=3,Qh=4,ep=5,tp=6,np=7,Px=0,gw=1,_w=2,ys=0,vw=1,xw=2,yw=3,Sw=4,Ew=5,Mw=6,ww=7,Lx=300,pa=301,ma=302,ip=303,rp=304,sf=306,sp=1e3,ro=1001,op=1002,Yi=1003,Tw=1004,nc=1005,or=1006,nh=1007,so=1008,Or=1009,Dx=1010,Nx=1011,wl=1012,cm=1013,po=1014,Dr=1015,Ol=1016,fm=1017,dm=1018,ga=1020,Ux=35902,Ix=1021,Ox=1022,qi=1023,Fx=1024,kx=1025,la=1026,_a=1027,Bx=1028,hm=1029,zx=1030,pm=1031,mm=1033,Pc=33776,Lc=33777,Dc=33778,Nc=33779,ap=35840,lp=35841,up=35842,cp=35843,fp=36196,dp=37492,hp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,xp=37813,yp=37814,Sp=37815,Ep=37816,Mp=37817,wp=37818,Tp=37819,Rp=37820,Ap=37821,Uc=36492,Cp=36494,bp=36495,Hx=36283,Pp=36284,Lp=36285,Dp=36286,Rw=3200,Aw=3201,Cw=0,bw=1,ms="",Pi="srgb",va="srgb-linear",Wc="linear",Ut="srgb",Vo=7680,L0=519,Pw=512,Lw=513,Dw=514,Vx=515,Nw=516,Uw=517,Iw=518,Ow=519,D0=35044,N0="300 es",Nr=2e3,Xc=2001;class Ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,Np=180/Math.PI;function Fl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Fw(r,e){return(r%e+e)%e}function rh(r,e,t){return(1-t)*r+t*e}function cl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*s+e.x,this.y=a*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,s,a,l,c,f,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,f,h)}set(e,t,n,s,a,l,c,f,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[3],f=n[6],h=n[1],p=n[4],m=n[7],_=n[2],y=n[5],M=n[8],S=s[0],v=s[3],x=s[6],R=s[1],T=s[4],w=s[7],D=s[2],U=s[5],N=s[8];return a[0]=l*S+c*R+f*D,a[3]=l*v+c*T+f*U,a[6]=l*x+c*w+f*N,a[1]=h*S+p*R+m*D,a[4]=h*v+p*T+m*U,a[7]=h*x+p*w+m*N,a[2]=_*S+y*R+M*D,a[5]=_*v+y*T+M*U,a[8]=_*x+y*w+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8];return t*l*p-t*c*h-n*a*p+n*c*f+s*a*h-s*l*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],m=p*l-c*h,_=c*f-p*a,y=h*a-l*f,M=t*m+n*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=m*S,e[1]=(s*h-p*n)*S,e[2]=(c*n-s*l)*S,e[3]=_*S,e[4]=(p*t-s*f)*S,e[5]=(s*a-c*t)*S,e[6]=y*S,e[7]=(n*f-h*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,l,c){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*l+h*c)+l+e,-s*h,s*f,-s*(-h*l+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(sh.makeScale(e,t)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new ut;function Gx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kw(){const r=jc("canvas");return r.style.display="block",r}const U0={};function ia(r){r in U0||(U0[r]=!0,console.warn(r))}function Bw(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function zw(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hw(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const I0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vw(){const r={enabled:!0,workingColorSpace:va,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Ut&&(s.r=Ur(s.r),s.g=Ur(s.g),s.b=Ur(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ut&&(s.r=ua(s.r),s.g=ua(s.g),s.b=ua(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?Wc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[va]:{primaries:e,whitePoint:n,transfer:Wc,toXYZ:I0,fromXYZ:O0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:I0,fromXYZ:O0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),r}const At=Vw();function Ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Go;class Gw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Go===void 0&&(Go=jc("canvas")),Go.width=e.width,Go.height=e.height;const n=Go.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Go}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=Ur(a[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ur(t[n]/255)*255):t[n]=Ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ww=0;class Wx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=Fl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?a.push(oh(s[l].image)):a.push(oh(s[l]))}else a=oh(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gw.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xw=0;class Jn extends Ca{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,n=ro,s=ro,a=or,l=so,c=qi,f=Or,h=Jn.DEFAULT_ANISOTROPY,p=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xw++}),this.uuid=Fl(),this.name="",this.source=new Wx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sp:e.x=e.x-Math.floor(e.x);break;case ro:e.x=e.x<0?0:1;break;case op:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sp:e.y=e.y-Math.floor(e.y);break;case ro:e.y=e.y<0?0:1;break;case op:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Lx;Jn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,n=0,s=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const f=e.elements,h=f[0],p=f[4],m=f[8],_=f[1],y=f[5],M=f[9],S=f[2],v=f[6],x=f[10];if(Math.abs(p-_)<.01&&Math.abs(m-S)<.01&&Math.abs(M-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+S)<.1&&Math.abs(M+v)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,w=(y+1)/2,D=(x+1)/2,U=(p+_)/4,N=(m+S)/4,I=(M+v)/4;return T>w&&T>D?T<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(T),s=U/n,a=N/n):w>D?w<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),n=U/s,a=I/s):D<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),n=N/a,s=I/a),this.set(n,s,a,t),this}let R=Math.sqrt((v-M)*(v-M)+(m-S)*(m-S)+(_-p)*(_-p));return Math.abs(R)<.001&&(R=1),this.x=(v-M)/R,this.y=(m-S)/R,this.z=(_-p)/R,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jw extends Ca{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mo extends jw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xx extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=ro,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qw extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yi,this.minFilter=Yi,this.wrapR=ro,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,l,c){let f=n[s+0],h=n[s+1],p=n[s+2],m=n[s+3];const _=a[l+0],y=a[l+1],M=a[l+2],S=a[l+3];if(c===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=S;return}if(m!==S||f!==_||h!==y||p!==M){let v=1-c;const x=f*_+h*y+p*M+m*S,R=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const D=Math.sqrt(T),U=Math.atan2(D,x*R);v=Math.sin(v*U)/D,c=Math.sin(c*U)/D}const w=c*R;if(f=f*v+_*w,h=h*v+y*w,p=p*v+M*w,m=m*v+S*w,v===1-c){const D=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=D,h*=D,p*=D,m*=D}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,l){const c=n[s],f=n[s+1],h=n[s+2],p=n[s+3],m=a[l],_=a[l+1],y=a[l+2],M=a[l+3];return e[t]=c*M+p*m+f*y-h*_,e[t+1]=f*M+p*_+h*m-c*y,e[t+2]=h*M+p*y+c*_-f*m,e[t+3]=p*M-c*m-f*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,l=e._order,c=Math.cos,f=Math.sin,h=c(n/2),p=c(s/2),m=c(a/2),_=f(n/2),y=f(s/2),M=f(a/2);switch(l){case"XYZ":this._x=_*p*m+h*y*M,this._y=h*y*m-_*p*M,this._z=h*p*M+_*y*m,this._w=h*p*m-_*y*M;break;case"YXZ":this._x=_*p*m+h*y*M,this._y=h*y*m-_*p*M,this._z=h*p*M-_*y*m,this._w=h*p*m+_*y*M;break;case"ZXY":this._x=_*p*m-h*y*M,this._y=h*y*m+_*p*M,this._z=h*p*M+_*y*m,this._w=h*p*m-_*y*M;break;case"ZYX":this._x=_*p*m-h*y*M,this._y=h*y*m+_*p*M,this._z=h*p*M-_*y*m,this._w=h*p*m+_*y*M;break;case"YZX":this._x=_*p*m+h*y*M,this._y=h*y*m+_*p*M,this._z=h*p*M-_*y*m,this._w=h*p*m-_*y*M;break;case"XZY":this._x=_*p*m-h*y*M,this._y=h*y*m-_*p*M,this._z=h*p*M+_*y*m,this._w=h*p*m+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],l=t[1],c=t[5],f=t[9],h=t[2],p=t[6],m=t[10],_=n+c+m;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-h)*y,this._z=(l-s)*y}else if(n>c&&n>m){const y=2*Math.sqrt(1+n-c-m);this._w=(p-f)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(a+h)/y}else if(c>m){const y=2*Math.sqrt(1+c-n-m);this._w=(a-h)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-n-c);this._w=(l-s)/y,this._x=(a+h)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,l=e._w,c=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+l*c+s*h-a*f,this._y=s*p+l*f+a*c-n*h,this._z=a*p+l*h+n*f-s*c,this._w=l*p-n*c-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,c),m=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=l*m+this._w*_,this._x=n*m+this._x*_,this._y=s*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,n=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(F0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(F0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,l=e.y,c=e.z,f=e.w,h=2*(l*s-c*n),p=2*(c*t-a*s),m=2*(a*n-l*t);return this.x=t+f*h+l*m-c*p,this.y=n+f*p+c*h-a*m,this.z=s+f*m+a*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,l=t.x,c=t.y,f=t.z;return this.x=s*f-a*c,this.y=a*l-n*f,this.z=n*c-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ah=new te,F0=new kl;class Bl{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Gi):Gi.fromBufferAttribute(a,l),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ic.copy(n.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),rc.subVectors(this.max,fl),Wo.subVectors(e.a,fl),Xo.subVectors(e.b,fl),jo.subVectors(e.c,fl),us.subVectors(Xo,Wo),cs.subVectors(jo,Xo),Xs.subVectors(Wo,jo);let t=[0,-us.z,us.y,0,-cs.z,cs.y,0,-Xs.z,Xs.y,us.z,0,-us.x,cs.z,0,-cs.x,Xs.z,0,-Xs.x,-us.y,us.x,0,-cs.y,cs.x,0,-Xs.y,Xs.x,0];return!lh(t,Wo,Xo,jo,rc)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,Wo,Xo,jo,rc))?!1:(sc.crossVectors(us,cs),t=[sc.x,sc.y,sc.z],lh(t,Wo,Xo,jo,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mr=[new te,new te,new te,new te,new te,new te,new te,new te],Gi=new te,ic=new Bl,Wo=new te,Xo=new te,jo=new te,us=new te,cs=new te,Xs=new te,fl=new te,rc=new te,sc=new te,js=new te;function lh(r,e,t,n,s){for(let a=0,l=r.length-3;a<=l;a+=3){js.fromArray(r,a);const c=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),f=e.dot(js),h=t.dot(js),p=n.dot(js);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>c)return!1}return!0}const $w=new Bl,dl=new te,uh=new te;class of{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$w.setFromPoints(e).getCenter(n);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dl.subVectors(e,this.center);const t=dl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dl,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dl.copy(e.center).add(uh)),this.expandByPoint(dl.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new te,ch=new te,oc=new te,fs=new te,fh=new te,ac=new te,dh=new te;class jx{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ch.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(ch);const a=e.distanceTo(t)*.5,l=-this.direction.dot(oc),c=fs.dot(this.direction),f=-fs.dot(oc),h=fs.lengthSq(),p=Math.abs(1-l*l);let m,_,y,M;if(p>0)if(m=l*f-c,_=l*c-f,M=a*p,m>=0)if(_>=-M)if(_<=M){const S=1/p;m*=S,_*=S,y=m*(m+l*_+2*c)+_*(l*m+_+2*f)+h}else _=a,m=Math.max(0,-(l*_+c)),y=-m*m+_*(_+2*f)+h;else _=-a,m=Math.max(0,-(l*_+c)),y=-m*m+_*(_+2*f)+h;else _<=-M?(m=Math.max(0,-(-l*a+c)),_=m>0?-a:Math.min(Math.max(-a,-f),a),y=-m*m+_*(_+2*f)+h):_<=M?(m=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+h):(m=Math.max(0,-(l*a+c)),_=m>0?a:Math.min(Math.max(-a,-f),a),y=-m*m+_*(_+2*f)+h);else _=l>0?-a:a,m=Math.max(0,-(l*_+c)),y=-m*m+_*(_+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(ch).addScaledVector(oc,_),y}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const n=wr.dot(this.direction),s=wr.dot(wr)-n*n,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,l,c,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return h>=0?(n=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(n=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,l=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,l=(e.min.y-_.y)*p),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),m>=0?(c=(e.min.z-_.z)*m,f=(e.max.z-_.z)*m):(c=(e.max.z-_.z)*m,f=(e.min.z-_.z)*m),n>f||c>s)||((c>n||n!==n)&&(n=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,s,a){fh.subVectors(t,e),ac.subVectors(n,e),dh.crossVectors(fh,ac);let l=this.direction.dot(dh),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;fs.subVectors(this.origin,e);const f=c*this.direction.dot(ac.crossVectors(fs,ac));if(f<0)return null;const h=c*this.direction.dot(fh.cross(fs));if(h<0||f+h>l)return null;const p=-c*fs.dot(dh);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,n,s,a,l,c,f,h,p,m,_,y,M,S,v){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,c,f,h,p,m,_,y,M,S,v)}set(e,t,n,s,a,l,c,f,h,p,m,_,y,M,S,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=a,x[5]=l,x[9]=c,x[13]=f,x[2]=h,x[6]=p,x[10]=m,x[14]=_,x[3]=y,x[7]=M,x[11]=S,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qo.setFromMatrixColumn(e,0).length(),a=1/qo.setFromMatrixColumn(e,1).length(),l=1/qo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(s),h=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const _=l*p,y=l*m,M=c*p,S=c*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=y+M*h,t[5]=_-S*h,t[9]=-c*f,t[2]=S-_*h,t[6]=M+y*h,t[10]=l*f}else if(e.order==="YXZ"){const _=f*p,y=f*m,M=h*p,S=h*m;t[0]=_+S*c,t[4]=M*c-y,t[8]=l*h,t[1]=l*m,t[5]=l*p,t[9]=-c,t[2]=y*c-M,t[6]=S+_*c,t[10]=l*f}else if(e.order==="ZXY"){const _=f*p,y=f*m,M=h*p,S=h*m;t[0]=_-S*c,t[4]=-l*m,t[8]=M+y*c,t[1]=y+M*c,t[5]=l*p,t[9]=S-_*c,t[2]=-l*h,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const _=l*p,y=l*m,M=c*p,S=c*m;t[0]=f*p,t[4]=M*h-y,t[8]=_*h+S,t[1]=f*m,t[5]=S*h+_,t[9]=y*h-M,t[2]=-h,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const _=l*f,y=l*h,M=c*f,S=c*h;t[0]=f*p,t[4]=S-_*m,t[8]=M*m+y,t[1]=m,t[5]=l*p,t[9]=-c*p,t[2]=-h*p,t[6]=y*m+M,t[10]=_-S*m}else if(e.order==="XZY"){const _=l*f,y=l*h,M=c*f,S=c*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=_*m+S,t[5]=l*p,t[9]=y*m-M,t[2]=M*m-y,t[6]=c*p,t[10]=S*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yw,e,Kw)}lookAt(e,t,n){const s=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ds.crossVectors(n,fi),ds.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ds.crossVectors(n,fi)),ds.normalize(),lc.crossVectors(fi,ds),s[0]=ds.x,s[4]=lc.x,s[8]=fi.x,s[1]=ds.y,s[5]=lc.y,s[9]=fi.y,s[2]=ds.z,s[6]=lc.z,s[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],c=n[4],f=n[8],h=n[12],p=n[1],m=n[5],_=n[9],y=n[13],M=n[2],S=n[6],v=n[10],x=n[14],R=n[3],T=n[7],w=n[11],D=n[15],U=s[0],N=s[4],I=s[8],C=s[12],b=s[1],B=s[5],K=s[9],q=s[13],ne=s[2],ue=s[6],Z=s[10],re=s[14],z=s[3],de=s[7],ce=s[11],k=s[15];return a[0]=l*U+c*b+f*ne+h*z,a[4]=l*N+c*B+f*ue+h*de,a[8]=l*I+c*K+f*Z+h*ce,a[12]=l*C+c*q+f*re+h*k,a[1]=p*U+m*b+_*ne+y*z,a[5]=p*N+m*B+_*ue+y*de,a[9]=p*I+m*K+_*Z+y*ce,a[13]=p*C+m*q+_*re+y*k,a[2]=M*U+S*b+v*ne+x*z,a[6]=M*N+S*B+v*ue+x*de,a[10]=M*I+S*K+v*Z+x*ce,a[14]=M*C+S*q+v*re+x*k,a[3]=R*U+T*b+w*ne+D*z,a[7]=R*N+T*B+w*ue+D*de,a[11]=R*I+T*K+w*Z+D*ce,a[15]=R*C+T*q+w*re+D*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],l=e[1],c=e[5],f=e[9],h=e[13],p=e[2],m=e[6],_=e[10],y=e[14],M=e[3],S=e[7],v=e[11],x=e[15];return M*(+a*f*m-s*h*m-a*c*_+n*h*_+s*c*y-n*f*y)+S*(+t*f*y-t*h*_+a*l*_-s*l*y+s*h*p-a*f*p)+v*(+t*h*m-t*c*y-a*l*m+n*l*y+a*c*p-n*h*p)+x*(-s*c*p-t*f*m+t*c*_+s*l*m-n*l*_+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],m=e[9],_=e[10],y=e[11],M=e[12],S=e[13],v=e[14],x=e[15],R=m*v*h-S*_*h+S*f*y-c*v*y-m*f*x+c*_*x,T=M*_*h-p*v*h-M*f*y+l*v*y+p*f*x-l*_*x,w=p*S*h-M*m*h+M*c*y-l*S*y-p*c*x+l*m*x,D=M*m*f-p*S*f-M*c*_+l*S*_+p*c*v-l*m*v,U=t*R+n*T+s*w+a*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=R*N,e[1]=(S*_*a-m*v*a-S*s*y+n*v*y+m*s*x-n*_*x)*N,e[2]=(c*v*a-S*f*a+S*s*h-n*v*h-c*s*x+n*f*x)*N,e[3]=(m*f*a-c*_*a-m*s*h+n*_*h+c*s*y-n*f*y)*N,e[4]=T*N,e[5]=(p*v*a-M*_*a+M*s*y-t*v*y-p*s*x+t*_*x)*N,e[6]=(M*f*a-l*v*a-M*s*h+t*v*h+l*s*x-t*f*x)*N,e[7]=(l*_*a-p*f*a+p*s*h-t*_*h-l*s*y+t*f*y)*N,e[8]=w*N,e[9]=(M*m*a-p*S*a-M*n*y+t*S*y+p*n*x-t*m*x)*N,e[10]=(l*S*a-M*c*a+M*n*h-t*S*h-l*n*x+t*c*x)*N,e[11]=(p*c*a-l*m*a-p*n*h+t*m*h+l*n*y-t*c*y)*N,e[12]=D*N,e[13]=(p*S*s-M*m*s+M*n*_-t*S*_-p*n*v+t*m*v)*N,e[14]=(M*c*s-l*S*s-M*n*f+t*S*f+l*n*v-t*c*v)*N,e[15]=(l*m*s-p*c*s+p*n*f-t*m*f-l*n*_+t*c*_)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,l=e.x,c=e.y,f=e.z,h=a*l,p=a*c;return this.set(h*l+n,h*c-s*f,h*f+s*c,0,h*c+s*f,p*c+n,p*f-s*l,0,h*f-s*c,p*f+s*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,l){return this.set(1,n,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,l=t._y,c=t._z,f=t._w,h=a+a,p=l+l,m=c+c,_=a*h,y=a*p,M=a*m,S=l*p,v=l*m,x=c*m,R=f*h,T=f*p,w=f*m,D=n.x,U=n.y,N=n.z;return s[0]=(1-(S+x))*D,s[1]=(y+w)*D,s[2]=(M-T)*D,s[3]=0,s[4]=(y-w)*U,s[5]=(1-(_+x))*U,s[6]=(v+R)*U,s[7]=0,s[8]=(M+T)*N,s[9]=(v-R)*N,s[10]=(1-(_+S))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=qo.set(s[0],s[1],s[2]).length();const l=qo.set(s[4],s[5],s[6]).length(),c=qo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Wi.copy(this);const h=1/a,p=1/l,m=1/c;return Wi.elements[0]*=h,Wi.elements[1]*=h,Wi.elements[2]*=h,Wi.elements[4]*=p,Wi.elements[5]*=p,Wi.elements[6]*=p,Wi.elements[8]*=m,Wi.elements[9]*=m,Wi.elements[10]*=m,t.setFromRotationMatrix(Wi),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,s,a,l,c=Nr){const f=this.elements,h=2*a/(t-e),p=2*a/(n-s),m=(t+e)/(t-e),_=(n+s)/(n-s);let y,M;if(c===Nr)y=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(c===Xc)y=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=h,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,a,l,c=Nr){const f=this.elements,h=1/(t-e),p=1/(n-s),m=1/(l-a),_=(t+e)*h,y=(n+s)*p;let M,S;if(c===Nr)M=(l+a)*m,S=-2*m;else if(c===Xc)M=a*m,S=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=S,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qo=new te,Wi=new sn,Yw=new te(0,0,0),Kw=new te(1,1,1),ds=new te,lc=new te,fi=new te,k0=new sn,B0=new kl;class Fr{constructor(e=0,t=0,n=0,s=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],l=s[4],c=s[8],f=s[1],h=s[5],p=s[9],m=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return k0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return B0.setFromEuler(this),this.setFromQuaternion(B0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class qx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zw=0;const z0=new te,$o=new kl,Tr=new sn,uc=new te,hl=new te,Jw=new te,Qw=new kl,H0=new te(1,0,0),V0=new te(0,1,0),G0=new te(0,0,1),W0={type:"added"},eT={type:"removed"},Yo={type:"childadded",child:null},hh={type:"childremoved",child:null};class Qn extends Ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new te,t=new Fr,n=new kl,s=new te(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new ut}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(G0,e)}translateOnAxis(e,t){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(G0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uc.copy(e):uc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(hl,uc,this.up):Tr.lookAt(uc,hl,this.up),this.quaternion.setFromRotationMatrix(Tr),s&&(Tr.extractRotation(s.matrixWorld),$o.setFromRotationMatrix(Tr),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(W0),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eT),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(W0),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,Jw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,Qw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(e.materials,this.material[f]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(a(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),m=l(e.shapes),_=l(e.skeletons),y=l(e.animations),M=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Qn.DEFAULT_UP=new te(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new te,Rr=new te,ph=new te,Ar=new te,Ko=new te,Zo=new te,X0=new te,mh=new te,gh=new te,_h=new te,vh=new rn,xh=new rn,yh=new rn;class ji{constructor(e=new te,t=new te,n=new te){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xi.subVectors(e,t),s.cross(Xi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Xi.subVectors(s,t),Rr.subVectors(n,t),ph.subVectors(e,t);const l=Xi.dot(Xi),c=Xi.dot(Rr),f=Xi.dot(ph),h=Rr.dot(Rr),p=Rr.dot(ph),m=l*h-c*c;if(m===0)return a.set(0,0,0),null;const _=1/m,y=(h*f-c*p)*_,M=(l*p-c*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,n,s,a,l,c,f){return this.getBarycoord(e,t,n,s,Ar)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ar.x),f.addScaledVector(l,Ar.y),f.addScaledVector(c,Ar.z),f)}static getInterpolatedAttribute(e,t,n,s,a,l){return vh.setScalar(0),xh.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(vh,a.x),l.addScaledVector(xh,a.y),l.addScaledVector(yh,a.z),l}static isFrontFacing(e,t,n,s){return Xi.subVectors(n,t),Rr.subVectors(e,t),Xi.cross(Rr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Xi.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return ji.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let l,c;Ko.subVectors(s,n),Zo.subVectors(a,n),mh.subVectors(e,n);const f=Ko.dot(mh),h=Zo.dot(mh);if(f<=0&&h<=0)return t.copy(n);gh.subVectors(e,s);const p=Ko.dot(gh),m=Zo.dot(gh);if(p>=0&&m<=p)return t.copy(s);const _=f*m-p*h;if(_<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(Ko,l);_h.subVectors(e,a);const y=Ko.dot(_h),M=Zo.dot(_h);if(M>=0&&y<=M)return t.copy(a);const S=y*h-f*M;if(S<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(n).addScaledVector(Zo,c);const v=p*M-y*m;if(v<=0&&m-p>=0&&y-M>=0)return X0.subVectors(a,s),c=(m-p)/(m-p+(y-M)),t.copy(s).addScaledVector(X0,c);const x=1/(v+S+_);return l=S*x,c=_*x,t.copy(n).addScaledVector(Ko,l).addScaledVector(Zo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},cc={h:0,s:0,l:0};function Sh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=Fw(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Sh(l,a,e+1/3),this.g=Sh(l,a,e),this.b=Sh(l,a,e-1/3)}return At.toWorkingColorSpace(this,s),this}setStyle(e,t=Pi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pi){const n=$x[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return At.fromWorkingColorSpace(Ln.copy(this),e),Math.round(xt(Ln.r*255,0,255))*65536+Math.round(xt(Ln.g*255,0,255))*256+Math.round(xt(Ln.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,a=Ln.b,l=Math.max(n,s,a),c=Math.min(n,s,a);let f,h;const p=(c+l)/2;if(c===l)f=0,h=0;else{const m=l-c;switch(h=p<=.5?m/(l+c):m/(2-l-c),l){case n:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-n)/m+2;break;case a:f=(n-s)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Pi){At.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==Pi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(cc);const n=rh(hs.h,cc.h,t),s=rh(hs.s,cc.s,t),a=rh(hs.l,cc.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ct;Ct.NAMES=$x;let tT=0;class zl extends Ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=aa,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Yh,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(n.blending=this.blending),this.side!==Ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$h&&(n.blendSrc=this.blendSrc),this.blendDst!==Yh&&(n.blendDst=this.blendDst),this.blendEquation!==no&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gm extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=Px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new te,fc=new Pt;class Ui{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=D0,this.updateRanges=[],this.gpuType=Dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),a=Yn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==D0&&(e.usage=this.usage),e}}class Yx extends Ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kx extends Ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ur extends Ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nT=0;const Ai=new sn,Eh=new Qn,Jo=new te,di=new Bl,pl=new Bl,vn=new te;class dr extends Ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gx(e)?Kx:Yx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ut().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,n){return Ai.makeTranslation(e,t,n),this.applyMatrix4(Ai),this}scale(e,t,n){return Ai.makeScale(e,t,n),this.applyMatrix4(Ai),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ur(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];di.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new of);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];pl.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(di.min,pl.min),di.expandByPoint(vn),vn.addVectors(di.max,pl.max),di.expandByPoint(vn)):(di.expandByPoint(pl.min),di.expandByPoint(pl.max))}di.getCenter(n);let s=0;for(let a=0,l=e.count;a<l;a++)vn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(vn));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],f=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)vn.fromBufferAttribute(c,h),f&&(Jo.fromBufferAttribute(e,h),vn.add(Jo)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],f=[];for(let I=0;I<n.count;I++)c[I]=new te,f[I]=new te;const h=new te,p=new te,m=new te,_=new Pt,y=new Pt,M=new Pt,S=new te,v=new te;function x(I,C,b){h.fromBufferAttribute(n,I),p.fromBufferAttribute(n,C),m.fromBufferAttribute(n,b),_.fromBufferAttribute(a,I),y.fromBufferAttribute(a,C),M.fromBufferAttribute(a,b),p.sub(h),m.sub(h),y.sub(_),M.sub(_);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(S.copy(p).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(B),v.copy(m).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(B),c[I].add(S),c[C].add(S),c[b].add(S),f[I].add(v),f[C].add(v),f[b].add(v))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let I=0,C=R.length;I<C;++I){const b=R[I],B=b.start,K=b.count;for(let q=B,ne=B+K;q<ne;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new te,w=new te,D=new te,U=new te;function N(I){D.fromBufferAttribute(s,I),U.copy(D);const C=c[I];T.copy(C),T.sub(D.multiplyScalar(D.dot(C))).normalize(),w.crossVectors(U,C);const B=w.dot(f[I])<0?-1:1;l.setXYZW(I,T.x,T.y,T.z,B)}for(let I=0,C=R.length;I<C;++I){const b=R[I],B=b.start,K=b.count;for(let q=B,ne=B+K;q<ne;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const s=new te,a=new te,l=new te,c=new te,f=new te,h=new te,p=new te,m=new te;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),S=e.getX(_+1),v=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,v),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),c.add(p),f.add(p),h.add(p),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(S,f.x,f.y,f.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),l.fromBufferAttribute(t,_+2),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,f){const h=c.array,p=c.itemSize,m=c.normalized,_=new h.constructor(f.length*p);let y=0,M=0;for(let S=0,v=f.length;S<v;S++){c.isInterleavedBufferAttribute?y=f[S]*c.data.stride+c.offset:y=f[S]*p;for(let x=0;x<p;x++)_[M++]=h[y++]}return new Ui(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,n=this.index.array,s=this.attributes;for(const c in s){const f=s[c],h=e(f,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let p=0,m=h.length;p<m;p++){const _=h[p],y=e(_,n);f.push(y)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,_=h.length;m<_;m++){const y=h[m];p.push(y.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let _=0,y=m.length;_<y;_++)p.push(m[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new sn,qs=new jx,dc=new of,q0=new te,hc=new te,pc=new te,mc=new te,Mh=new te,gc=new te,$0=new te,_c=new te;class ar extends Qn{constructor(e=new dr,t=new gm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){gc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=c[f],m=a[f];p!==0&&(Mh.fromBufferAttribute(m,e),l?gc.addScaledVector(Mh,p):gc.addScaledVector(Mh.sub(t),p))}t.add(gc)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(a),qs.copy(e.ray).recast(e.near),!(dc.containsPoint(qs.origin)===!1&&(qs.intersectSphere(dc,q0)===null||qs.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(j0.copy(a).invert(),qs.copy(e.ray).applyMatrix4(j0),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,_=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const v=_[M],x=l[v.materialIndex],R=Math.max(v.start,y.start),T=Math.min(c.count,Math.min(v.start+v.count,y.start+y.count));for(let w=R,D=T;w<D;w+=3){const U=c.getX(w),N=c.getX(w+1),I=c.getX(w+2);s=vc(this,x,e,n,h,p,m,U,N,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),S=Math.min(c.count,y.start+y.count);for(let v=M,x=S;v<x;v+=3){const R=c.getX(v),T=c.getX(v+1),w=c.getX(v+2);s=vc(this,l,e,n,h,p,m,R,T,w),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const v=_[M],x=l[v.materialIndex],R=Math.max(v.start,y.start),T=Math.min(f.count,Math.min(v.start+v.count,y.start+y.count));for(let w=R,D=T;w<D;w+=3){const U=w,N=w+1,I=w+2;s=vc(this,x,e,n,h,p,m,U,N,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),S=Math.min(f.count,y.start+y.count);for(let v=M,x=S;v<x;v+=3){const R=v,T=v+1,w=v+2;s=vc(this,l,e,n,h,p,m,R,T,w),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function iT(r,e,t,n,s,a,l,c){let f;if(e.side===Zn?f=n.intersectTriangle(l,a,s,!0,c):f=n.intersectTriangle(s,a,l,e.side===Ms,c),f===null)return null;_c.copy(c),_c.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(_c);return h<t.near||h>t.far?null:{distance:h,point:_c.clone(),object:r}}function vc(r,e,t,n,s,a,l,c,f,h){r.getVertexPosition(c,hc),r.getVertexPosition(f,pc),r.getVertexPosition(h,mc);const p=iT(r,e,t,n,hc,pc,mc,$0);if(p){const m=new te;ji.getBarycoord($0,hc,pc,mc,m),s&&(p.uv=ji.getInterpolatedAttribute(s,c,f,h,m,new Pt)),a&&(p.uv1=ji.getInterpolatedAttribute(a,c,f,h,m,new Pt)),l&&(p.normal=ji.getInterpolatedAttribute(l,c,f,h,m,new te),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:h,normal:new te,materialIndex:0};ji.getNormal(hc,pc,mc,_.normal),p.face=_,p.barycoord=m}return p}class Hl extends dr{constructor(e=1,t=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const c=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const f=[],h=[],p=[],m=[];let _=0,y=0;M("z","y","x",-1,-1,n,t,e,l,a,0),M("z","y","x",1,-1,n,t,-e,l,a,1),M("x","z","y",1,1,e,n,t,s,l,2),M("x","z","y",1,-1,e,n,-t,s,l,3),M("x","y","z",1,-1,e,t,n,s,a,4),M("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(f),this.setAttribute("position",new ur(h,3)),this.setAttribute("normal",new ur(p,3)),this.setAttribute("uv",new ur(m,2));function M(S,v,x,R,T,w,D,U,N,I,C){const b=w/N,B=D/I,K=w/2,q=D/2,ne=U/2,ue=N+1,Z=I+1;let re=0,z=0;const de=new te;for(let ce=0;ce<Z;ce++){const k=ce*B-q;for(let Q=0;Q<ue;Q++){const De=Q*b-K;de[S]=De*R,de[v]=k*T,de[x]=ne,h.push(de.x,de.y,de.z),de[S]=0,de[v]=0,de[x]=U>0?1:-1,p.push(de.x,de.y,de.z),m.push(Q/N),m.push(1-ce/I),re+=1}}for(let ce=0;ce<I;ce++)for(let k=0;k<N;k++){const Q=_+k+ue*ce,De=_+k+ue*(ce+1),$=_+(k+1)+ue*(ce+1),he=_+(k+1)+ue*ce;f.push(Q,De,he),f.push(De,$,he),z+=6}c.addGroup(y,z,C),y+=z,_+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=xa(r[t]);for(const s in n)e[s]=n[s]}return e}function rT(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Zx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const sT={clone:xa,merge:Hn};var oT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ws extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oT,this.fragmentShader=aT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=rT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jx extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new te,Y0=new Pt,K0=new Pt;class Li extends Jx{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Np*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Np*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,Y0,K0),t.subVectors(K0,Y0)}setViewOffset(e,t,n,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ih*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;a+=l.offsetX*s/f,t-=l.offsetY*n/h,s*=l.width/f,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qo=-90,ea=1;class lT extends Qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Li(Qo,ea,e,t);s.layers=this.layers,this.add(s);const a=new Li(Qo,ea,e,t);a.layers=this.layers,this.add(a);const l=new Li(Qo,ea,e,t);l.layers=this.layers,this.add(l);const c=new Li(Qo,ea,e,t);c.layers=this.layers,this.add(c);const f=new Li(Qo,ea,e,t);f.layers=this.layers,this.add(f);const h=new Li(Qo,ea,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,l,c,f]=t;for(const h of t)this.remove(h);if(e===Nr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Xc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,h,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(m,_,y),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Qx extends Jn{constructor(e,t,n,s,a,l,c,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:pa,super(e,t,n,s,a,l,c,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uT extends mo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:or}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hl(5,5,5),a=new ws({name:"CubemapFromEquirect",uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:xs});a.uniforms.tEquirect.value=t;const l=new ar(s,a),c=t.minFilter;return t.minFilter===so&&(t.minFilter=or),new lT(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(a)}}class cT extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wh=new te,fT=new te,dT=new ut;class Qs{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=wh.subVectors(n,t).cross(fT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dT.getNormalMatrix(e),s=this.coplanarPoint(wh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new of,xc=new te;class ey{constructor(e=new Qs,t=new Qs,n=new Qs,s=new Qs,a=new Qs,l=new Qs){this.planes=[e,t,n,s,a,l]}set(e,t,n,s,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nr){const n=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],f=s[3],h=s[4],p=s[5],m=s[6],_=s[7],y=s[8],M=s[9],S=s[10],v=s[11],x=s[12],R=s[13],T=s[14],w=s[15];if(n[0].setComponents(f-a,_-h,v-y,w-x).normalize(),n[1].setComponents(f+a,_+h,v+y,w+x).normalize(),n[2].setComponents(f+l,_+p,v+M,w+R).normalize(),n[3].setComponents(f-l,_-p,v-M,w-R).normalize(),n[4].setComponents(f-c,_-m,v-S,w-T).normalize(),t===Nr)n[5].setComponents(f+c,_+m,v+S,w+T).normalize();else if(t===Xc)n[5].setComponents(c,m,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xc.x=s.normal.x>0?e.max.x:e.min.x,xc.y=s.normal.y>0?e.max.y:e.min.y,xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ty extends zl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z0=new sn,Up=new jx,yc=new of,Sc=new te;class hT extends Qn{constructor(e=new dr,t=new ty){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yc.copy(n.boundingSphere),yc.applyMatrix4(s),yc.radius+=a,e.ray.intersectsSphere(yc)===!1)return;Z0.copy(s).invert(),Up.copy(e.ray).applyMatrix4(Z0);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=n.index,m=n.attributes.position;if(h!==null){const _=Math.max(0,l.start),y=Math.min(h.count,l.start+l.count);for(let M=_,S=y;M<S;M++){const v=h.getX(M);Sc.fromBufferAttribute(m,v),J0(Sc,v,f,s,e,t,this)}}else{const _=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let M=_,S=y;M<S;M++)Sc.fromBufferAttribute(m,M),J0(Sc,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function J0(r,e,t,n,s,a,l){const c=Up.distanceSqToPoint(r);if(c<t){const f=new te;Up.closestPointToPoint(r,f),f.applyMatrix4(n);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class Ec extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ny extends Jn{constructor(e,t,n,s,a,l,c,f,h,p=la){if(p!==la&&p!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===la&&(n=po),n===void 0&&p===_a&&(n=ga),super(null,s,a,l,c,f,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Yi,this.minFilter=f!==void 0?f:Yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _m extends dr{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],l=[];c(s),h(n),p(),this.setAttribute("position",new ur(a,3)),this.setAttribute("normal",new ur(a.slice(),3)),this.setAttribute("uv",new ur(l,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(R){const T=new te,w=new te,D=new te;for(let U=0;U<t.length;U+=3)y(t[U+0],T),y(t[U+1],w),y(t[U+2],D),f(T,w,D,R)}function f(R,T,w,D){const U=D+1,N=[];for(let I=0;I<=U;I++){N[I]=[];const C=R.clone().lerp(w,I/U),b=T.clone().lerp(w,I/U),B=U-I;for(let K=0;K<=B;K++)K===0&&I===U?N[I][K]=C:N[I][K]=C.clone().lerp(b,K/B)}for(let I=0;I<U;I++)for(let C=0;C<2*(U-I)-1;C++){const b=Math.floor(C/2);C%2===0?(_(N[I][b+1]),_(N[I+1][b]),_(N[I][b])):(_(N[I][b+1]),_(N[I+1][b+1]),_(N[I+1][b]))}}function h(R){const T=new te;for(let w=0;w<a.length;w+=3)T.x=a[w+0],T.y=a[w+1],T.z=a[w+2],T.normalize().multiplyScalar(R),a[w+0]=T.x,a[w+1]=T.y,a[w+2]=T.z}function p(){const R=new te;for(let T=0;T<a.length;T+=3){R.x=a[T+0],R.y=a[T+1],R.z=a[T+2];const w=v(R)/2/Math.PI+.5,D=x(R)/Math.PI+.5;l.push(w,1-D)}M(),m()}function m(){for(let R=0;R<l.length;R+=6){const T=l[R+0],w=l[R+2],D=l[R+4],U=Math.max(T,w,D),N=Math.min(T,w,D);U>.9&&N<.1&&(T<.2&&(l[R+0]+=1),w<.2&&(l[R+2]+=1),D<.2&&(l[R+4]+=1))}}function _(R){a.push(R.x,R.y,R.z)}function y(R,T){const w=R*3;T.x=e[w+0],T.y=e[w+1],T.z=e[w+2]}function M(){const R=new te,T=new te,w=new te,D=new te,U=new Pt,N=new Pt,I=new Pt;for(let C=0,b=0;C<a.length;C+=9,b+=6){R.set(a[C+0],a[C+1],a[C+2]),T.set(a[C+3],a[C+4],a[C+5]),w.set(a[C+6],a[C+7],a[C+8]),U.set(l[b+0],l[b+1]),N.set(l[b+2],l[b+3]),I.set(l[b+4],l[b+5]),D.copy(R).add(T).add(w).divideScalar(3);const B=v(D);S(U,b+0,R,B),S(N,b+2,T,B),S(I,b+4,w,B)}}function S(R,T,w,D){D<0&&R.x===1&&(l[T]=R.x-1),w.x===0&&w.z===0&&(l[T]=D/2/Math.PI+.5)}function v(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _m(e.vertices,e.indices,e.radius,e.details)}}class vm extends _m{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vm(e.radius,e.detail)}}class af extends dr{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,l=t/2,c=Math.floor(n),f=Math.floor(s),h=c+1,p=f+1,m=e/c,_=t/f,y=[],M=[],S=[],v=[];for(let x=0;x<p;x++){const R=x*_-l;for(let T=0;T<h;T++){const w=T*m-a;M.push(w,-R,0),S.push(0,0,1),v.push(T/c),v.push(1-x/f)}}for(let x=0;x<f;x++)for(let R=0;R<c;R++){const T=R+h*x,w=R+h*(x+1),D=R+1+h*(x+1),U=R+1+h*x;y.push(T,w,U),y.push(w,D,U)}this.setIndex(y),this.setAttribute("position",new ur(M,3)),this.setAttribute("normal",new ur(S,3)),this.setAttribute("uv",new ur(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.width,e.height,e.widthSegments,e.heightSegments)}}class pT extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mT extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gT extends Jx{constructor(e=-1,t=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _T extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Q0(r,e,t,n){const s=vT(n);switch(t){case Ix:return r*e;case Fx:return r*e;case kx:return r*e*2;case Bx:return r*e/s.components*s.byteLength;case hm:return r*e/s.components*s.byteLength;case zx:return r*e*2/s.components*s.byteLength;case pm:return r*e*2/s.components*s.byteLength;case Ox:return r*e*3/s.components*s.byteLength;case qi:return r*e*4/s.components*s.byteLength;case mm:return r*e*4/s.components*s.byteLength;case Pc:case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lp:case cp:return Math.max(r,16)*Math.max(e,8)/4;case ap:case up:return Math.max(r,8)*Math.max(e,8)/2;case fp:case dp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _p:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Cp:case bp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hx:case Pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lp:case Dp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vT(r){switch(r){case Or:case Dx:return{byteLength:1,components:1};case wl:case Nx:case Ol:return{byteLength:2,components:1};case fm:case dm:return{byteLength:2,components:4};case po:case cm:case Dr:return{byteLength:4,components:1};case Ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iy(){let r=null,e=!1,t=null,n=null;function s(a,l){t(a,l),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function xT(r){const e=new WeakMap;function t(c,f){const h=c.array,p=c.usage,m=h.byteLength,_=r.createBuffer();r.bindBuffer(f,_),r.bufferData(f,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,f,h){const p=f.array,m=f.updateRanges;if(r.bindBuffer(h,c),m.length===0)r.bufferSubData(h,0,p);else{m.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<m.length;y++){const M=m[_],S=m[y];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++_,m[_]=S)}m.length=_+1;for(let y=0,M=m.length;y<M;y++){const S=m[y];r.bufferSubData(h,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(r.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:s,remove:a,update:l}}var yT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ET=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_R=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ER=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:yT,alphahash_pars_fragment:ST,alphamap_fragment:ET,alphamap_pars_fragment:MT,alphatest_fragment:wT,alphatest_pars_fragment:TT,aomap_fragment:RT,aomap_pars_fragment:AT,batching_pars_vertex:CT,batching_vertex:bT,begin_vertex:PT,beginnormal_vertex:LT,bsdfs:DT,iridescence_fragment:NT,bumpmap_pars_fragment:UT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:OT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:kT,color_fragment:BT,color_pars_fragment:zT,color_pars_vertex:HT,color_vertex:VT,common:GT,cube_uv_reflection_fragment:WT,defaultnormal_vertex:XT,displacementmap_pars_vertex:jT,displacementmap_vertex:qT,emissivemap_fragment:$T,emissivemap_pars_fragment:YT,colorspace_fragment:KT,colorspace_pars_fragment:ZT,envmap_fragment:JT,envmap_common_pars_fragment:QT,envmap_pars_fragment:eR,envmap_pars_vertex:tR,envmap_physical_pars_fragment:dR,envmap_vertex:nR,fog_vertex:iR,fog_pars_vertex:rR,fog_fragment:sR,fog_pars_fragment:oR,gradientmap_pars_fragment:aR,lightmap_pars_fragment:lR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:cR,lights_pars_begin:fR,lights_toon_fragment:hR,lights_toon_pars_fragment:pR,lights_phong_fragment:mR,lights_phong_pars_fragment:gR,lights_physical_fragment:_R,lights_physical_pars_fragment:vR,lights_fragment_begin:xR,lights_fragment_maps:yR,lights_fragment_end:SR,logdepthbuf_fragment:ER,logdepthbuf_pars_fragment:MR,logdepthbuf_pars_vertex:wR,logdepthbuf_vertex:TR,map_fragment:RR,map_pars_fragment:AR,map_particle_fragment:CR,map_particle_pars_fragment:bR,metalnessmap_fragment:PR,metalnessmap_pars_fragment:LR,morphinstance_vertex:DR,morphcolor_vertex:NR,morphnormal_vertex:UR,morphtarget_pars_vertex:IR,morphtarget_vertex:OR,normal_fragment_begin:FR,normal_fragment_maps:kR,normal_pars_fragment:BR,normal_pars_vertex:zR,normal_vertex:HR,normalmap_pars_fragment:VR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:WR,clearcoat_pars_fragment:XR,iridescence_pars_fragment:jR,opaque_fragment:qR,packing:$R,premultiplied_alpha_fragment:YR,project_vertex:KR,dithering_fragment:ZR,dithering_pars_fragment:JR,roughnessmap_fragment:QR,roughnessmap_pars_fragment:eA,shadowmap_pars_fragment:tA,shadowmap_pars_vertex:nA,shadowmap_vertex:iA,shadowmask_pars_fragment:rA,skinbase_vertex:sA,skinning_pars_vertex:oA,skinning_vertex:aA,skinnormal_vertex:lA,specularmap_fragment:uA,specularmap_pars_fragment:cA,tonemapping_fragment:fA,tonemapping_pars_fragment:dA,transmission_fragment:hA,transmission_pars_fragment:pA,uv_pars_fragment:mA,uv_pars_vertex:gA,uv_vertex:_A,worldpos_vertex:vA,background_vert:xA,background_frag:yA,backgroundCube_vert:SA,backgroundCube_frag:EA,cube_vert:MA,cube_frag:wA,depth_vert:TA,depth_frag:RA,distanceRGBA_vert:AA,distanceRGBA_frag:CA,equirect_vert:bA,equirect_frag:PA,linedashed_vert:LA,linedashed_frag:DA,meshbasic_vert:NA,meshbasic_frag:UA,meshlambert_vert:IA,meshlambert_frag:OA,meshmatcap_vert:FA,meshmatcap_frag:kA,meshnormal_vert:BA,meshnormal_frag:zA,meshphong_vert:HA,meshphong_frag:VA,meshphysical_vert:GA,meshphysical_frag:WA,meshtoon_vert:XA,meshtoon_frag:jA,points_vert:qA,points_frag:$A,shadow_vert:YA,shadow_frag:KA,sprite_vert:ZA,sprite_frag:JA},Le={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},ir={basic:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Hn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Hn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Hn([Le.points,Le.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Hn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Hn([Le.common,Le.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Hn([Le.sprite,Le.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Hn([Le.common,Le.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Hn([Le.lights,Le.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ir.physical={uniforms:Hn([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Mc={r:0,b:0,g:0},Ys=new Fr,QA=new sn;function eC(r,e,t,n,s,a,l){const c=new Ct(0);let f=a===!0?0:1,h,p,m=null,_=0,y=null;function M(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function S(T){let w=!1;const D=M(T);D===null?x(c,f):D&&D.isColor&&(x(D,1),w=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(T,w){const D=M(w);D&&(D.isCubeTexture||D.mapping===sf)?(p===void 0&&(p=new ar(new Hl(1,1,1),new ws({name:"BackgroundCubeMaterial",uniforms:xa(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ys.copy(w.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(Ys)),p.material.toneMapped=At.getTransfer(D.colorSpace)!==Ut,(m!==D||_!==D.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,m=D,_=D.version,y=r.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new ar(new af(2,2),new ws({name:"BackgroundMaterial",uniforms:xa(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=At.getTransfer(D.colorSpace)!==Ut,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(m!==D||_!==D.version||y!==r.toneMapping)&&(h.material.needsUpdate=!0,m=D,_=D.version,y=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function x(T,w){T.getRGB(Mc,Zx(r)),n.buffers.color.setClear(Mc.r,Mc.g,Mc.b,w,l)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(T,w=1){c.set(T),f=w,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,x(c,f)},render:S,addToRenderList:v,dispose:R}}function tC(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=_(null);let a=s,l=!1;function c(b,B,K,q,ne){let ue=!1;const Z=m(q,K,B);a!==Z&&(a=Z,h(a.object)),ue=y(b,q,K,ne),ue&&M(b,q,K,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(ue||l)&&(l=!1,w(b,B,K,q),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function f(){return r.createVertexArray()}function h(b){return r.bindVertexArray(b)}function p(b){return r.deleteVertexArray(b)}function m(b,B,K){const q=K.wireframe===!0;let ne=n[b.id];ne===void 0&&(ne={},n[b.id]=ne);let ue=ne[B.id];ue===void 0&&(ue={},ne[B.id]=ue);let Z=ue[q];return Z===void 0&&(Z=_(f()),ue[q]=Z),Z}function _(b){const B=[],K=[],q=[];for(let ne=0;ne<t;ne++)B[ne]=0,K[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:q,object:b,attributes:{},index:null}}function y(b,B,K,q){const ne=a.attributes,ue=B.attributes;let Z=0;const re=K.getAttributes();for(const z in re)if(re[z].location>=0){const ce=ne[z];let k=ue[z];if(k===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(k=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(k=b.instanceColor)),ce===void 0||ce.attribute!==k||k&&ce.data!==k.data)return!0;Z++}return a.attributesNum!==Z||a.index!==q}function M(b,B,K,q){const ne={},ue=B.attributes;let Z=0;const re=K.getAttributes();for(const z in re)if(re[z].location>=0){let ce=ue[z];ce===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const k={};k.attribute=ce,ce&&ce.data&&(k.data=ce.data),ne[z]=k,Z++}a.attributes=ne,a.attributesNum=Z,a.index=q}function S(){const b=a.newAttributes;for(let B=0,K=b.length;B<K;B++)b[B]=0}function v(b){x(b,0)}function x(b,B){const K=a.newAttributes,q=a.enabledAttributes,ne=a.attributeDivisors;K[b]=1,q[b]===0&&(r.enableVertexAttribArray(b),q[b]=1),ne[b]!==B&&(r.vertexAttribDivisor(b,B),ne[b]=B)}function R(){const b=a.newAttributes,B=a.enabledAttributes;for(let K=0,q=B.length;K<q;K++)B[K]!==b[K]&&(r.disableVertexAttribArray(K),B[K]=0)}function T(b,B,K,q,ne,ue,Z){Z===!0?r.vertexAttribIPointer(b,B,K,ne,ue):r.vertexAttribPointer(b,B,K,q,ne,ue)}function w(b,B,K,q){S();const ne=q.attributes,ue=K.getAttributes(),Z=B.defaultAttributeValues;for(const re in ue){const z=ue[re];if(z.location>=0){let de=ne[re];if(de===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){const ce=de.normalized,k=de.itemSize,Q=e.get(de);if(Q===void 0)continue;const De=Q.buffer,$=Q.type,he=Q.bytesPerElement,Te=$===r.INT||$===r.UNSIGNED_INT||de.gpuType===cm;if(de.isInterleavedBufferAttribute){const Se=de.data,Ae=Se.stride,Fe=de.offset;if(Se.isInstancedInterleavedBuffer){for(let et=0;et<z.locationSize;et++)x(z.location+et,Se.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let et=0;et<z.locationSize;et++)v(z.location+et);r.bindBuffer(r.ARRAY_BUFFER,De);for(let et=0;et<z.locationSize;et++)T(z.location+et,k/z.locationSize,$,ce,Ae*he,(Fe+k/z.locationSize*et)*he,Te)}else{if(de.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)x(z.location+Se,de.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Se=0;Se<z.locationSize;Se++)v(z.location+Se);r.bindBuffer(r.ARRAY_BUFFER,De);for(let Se=0;Se<z.locationSize;Se++)T(z.location+Se,k/z.locationSize,$,ce,k*he,k/z.locationSize*Se*he,Te)}}else if(Z!==void 0){const ce=Z[re];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(z.location,ce);break;case 3:r.vertexAttrib3fv(z.location,ce);break;case 4:r.vertexAttrib4fv(z.location,ce);break;default:r.vertexAttrib1fv(z.location,ce)}}}}R()}function D(){I();for(const b in n){const B=n[b];for(const K in B){const q=B[K];for(const ne in q)p(q[ne].object),delete q[ne];delete B[K]}delete n[b]}}function U(b){if(n[b.id]===void 0)return;const B=n[b.id];for(const K in B){const q=B[K];for(const ne in q)p(q[ne].object),delete q[ne];delete B[K]}delete n[b.id]}function N(b){for(const B in n){const K=n[B];if(K[b.id]===void 0)continue;const q=K[b.id];for(const ne in q)p(q[ne].object),delete q[ne];delete K[b.id]}}function I(){C(),l=!0,a!==s&&(a=s,h(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:I,resetDefaultState:C,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:S,enableAttribute:v,disableUnusedAttributes:R}}function nC(r,e,t){let n;function s(h){n=h}function a(h,p){r.drawArrays(n,h,p),t.update(p,n,1)}function l(h,p,m){m!==0&&(r.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function c(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let y=0;for(let M=0;M<m;M++)y+=p[M];t.update(y,n,1)}function f(h,p,m,_){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)l(h[M],p[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(n,h,0,p,0,_,0,m);let M=0;for(let S=0;S<m;S++)M+=p[S]*_[S];t.update(M,n,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function iC(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(N){return!(N!==qi&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const I=N===Ol&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Or&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Dr&&!I)}function f(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=M>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:D,maxSamples:U}}function rC(r){const e=this;let t=null,n=0,s=!1,a=!1;const l=new Qs,c=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const y=m.length!==0||_||n!==0||s;return s=_,n=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,y){const M=m.clippingPlanes,S=m.clipIntersection,v=m.clipShadows,x=r.get(m);if(!s||M===null||M.length===0||a&&!v)a?p(null):h();else{const R=a?0:n,T=R*4;let w=x.clippingState||null;f.value=w,w=p(M,_,T,y);for(let D=0;D!==T;++D)w[D]=t[D];x.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,y,M){const S=m!==null?m.length:0;let v=null;if(S!==0){if(v=f.value,M!==!0||v===null){const x=y+S*4,R=_.matrixWorldInverse;c.getNormalMatrix(R),(v===null||v.length<x)&&(v=new Float32Array(x));for(let T=0,w=y;T!==S;++T,w+=4)l.copy(m[T]).applyMatrix4(R,c),l.normal.toArray(v,w),v[w+3]=l.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}function sC(r){let e=new WeakMap;function t(l,c){return c===ip?l.mapping=pa:c===rp&&(l.mapping=ma),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===ip||c===rp)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new uT(f.height);return h.fromEquirectangularTexture(r,l),e.set(l,h),l.addEventListener("dispose",s),t(h.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ra=4,ev=[.125,.215,.35,.446,.526,.582],io=20,Th=new gT,tv=new Ct;let Rh=null,Ah=0,Ch=0,bh=!1;const eo=(1+Math.sqrt(5))/2,ta=1/eo,nv=[new te(-eo,ta,0),new te(eo,ta,0),new te(-ta,0,eo),new te(ta,0,eo),new te(0,eo,-ta),new te(0,eo,ta),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Rh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rh,Ah,Ch),this._renderer.xr.enabled=bh,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:or,minFilter:or,generateMipmaps:!1,type:Ol,format:qi,colorSpace:va,depthBuffer:!1},s=rv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rv(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oC(a)),this._blurMaterial=aC(a,e,t)}return s}_compileMaterial(e){const t=new ar(this._lodPlanes[0],e);this._renderer.compile(t,Th)}_sceneToCubeUV(e,t,n,s){const c=new Li(90,1,t,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(tv),p.toneMapping=ys,p.autoClear=!1;const y=new gm({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),M=new ar(new Hl,y);let S=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,S=!0):(y.color.copy(tv),S=!0);for(let x=0;x<6;x++){const R=x%3;R===0?(c.up.set(0,f[x],0),c.lookAt(h[x],0,0)):R===1?(c.up.set(0,0,f[x]),c.lookAt(0,h[x],0)):(c.up.set(0,f[x],0),c.lookAt(0,0,h[x]));const T=this._cubeSize;wc(s,R*T,x>2?T:0,T,T),p.setRenderTarget(s),S&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===pa||e.mapping===ma;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new ar(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;wc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,Th)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=nv[(s-a-1)%nv.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",a),this._halfBlur(l,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,l,c){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new ar(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*io-1),S=a/M,v=isFinite(a)?1+Math.floor(p*S):io;v>io&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${io}`);const x=[];let R=0;for(let N=0;N<io;++N){const I=N/S,C=Math.exp(-I*I/2);x.push(C),N===0?R+=C:N<v&&(R+=2*C)}for(let N=0;N<x.length;N++)x[N]=x[N]/R;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=x,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:T}=this;_.dTheta.value=M,_.mipInt.value=T-n;const w=this._sizeLods[s],D=3*w*(s>T-ra?s-T+ra:0),U=4*(this._cubeSize-w);wc(t,D,U,3*w,2*w),f.setRenderTarget(t),f.render(m,Th)}}function oC(r){const e=[],t=[],n=[];let s=r;const a=r-ra+1+ev.length;for(let l=0;l<a;l++){const c=Math.pow(2,s);t.push(c);let f=1/c;l>r-ra?f=ev[l-r+ra-1]:l===0&&(f=0),n.push(f);const h=1/(c-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,M=6,S=3,v=2,x=1,R=new Float32Array(S*M*y),T=new Float32Array(v*M*y),w=new Float32Array(x*M*y);for(let U=0;U<y;U++){const N=U%3*2/3-1,I=U>2?0:-1,C=[N,I,0,N+2/3,I,0,N+2/3,I+1,0,N,I,0,N+2/3,I+1,0,N,I+1,0];R.set(C,S*M*U),T.set(_,v*M*U);const b=[U,U,U,U,U,U];w.set(b,x*M*U)}const D=new dr;D.setAttribute("position",new Ui(R,S)),D.setAttribute("uv",new Ui(T,v)),D.setAttribute("faceIndex",new Ui(w,x)),e.push(D),s>ra&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rv(r,e,t){const n=new mo(r,e,t);return n.texture.mapping=sf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function aC(r,e,t){const n=new Float32Array(io),s=new te(0,1,0);return new ws({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function sv(){return new ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function ov(){return new ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function xm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lC(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,h=f===ip||f===rp,p=f===pa||f===ma;if(h||p){let m=e.get(c);const _=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new iv(r)),m=h?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const y=c.image;return h&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new iv(r)),m=h?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function s(c){let f=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&f++;return f===h}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function uC(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ia("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cC(r,e,t,n){const s={},a=new WeakMap;function l(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",l),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(m,_){return s[_.id]===!0||(_.addEventListener("dispose",l),s[_.id]=!0,t.memory.geometries++),_}function f(m){const _=m.attributes;for(const y in _)e.update(_[y],r.ARRAY_BUFFER)}function h(m){const _=[],y=m.index,M=m.attributes.position;let S=0;if(y!==null){const R=y.array;S=y.version;for(let T=0,w=R.length;T<w;T+=3){const D=R[T+0],U=R[T+1],N=R[T+2];_.push(D,U,U,N,N,D)}}else if(M!==void 0){const R=M.array;S=M.version;for(let T=0,w=R.length/3-1;T<w;T+=3){const D=T+0,U=T+1,N=T+2;_.push(D,U,U,N,N,D)}}else return;const v=new(Gx(_)?Kx:Yx)(_,1);v.version=S;const x=a.get(m);x&&e.remove(x),a.set(m,v)}function p(m){const _=a.get(m);if(_){const y=m.index;y!==null&&_.version<y.version&&h(m)}else h(m);return a.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function fC(r,e,t){let n;function s(_){n=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function f(_,y){r.drawElements(n,y,a,_*l),t.update(y,n,1)}function h(_,y,M){M!==0&&(r.drawElementsInstanced(n,y,a,_*l,M),t.update(y,n,M))}function p(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,_,0,M);let v=0;for(let x=0;x<M;x++)v+=y[x];t.update(v,n,1)}function m(_,y,M,S){if(M===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<_.length;x++)h(_[x]/l,y[x],S[x]);else{v.multiDrawElementsInstancedWEBGL(n,y,0,a,_,0,S,0,M);let x=0;for(let R=0;R<M;R++)x+=y[R]*S[R];t.update(x,n,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function dC(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hC(r,e,t){const n=new WeakMap,s=new rn;function a(l,c,f){const h=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let _=n.get(c);if(_===void 0||_.count!==m){let b=function(){I.dispose(),n.delete(c),c.removeEventListener("dispose",b)};var y=b;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let w=0;M===!0&&(w=1),S===!0&&(w=2),v===!0&&(w=3);let D=c.attributes.position.count*w,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const N=new Float32Array(D*U*4*m),I=new Xx(N,D,U,m);I.type=Dr,I.needsUpdate=!0;const C=w*4;for(let B=0;B<m;B++){const K=x[B],q=R[B],ne=T[B],ue=D*U*4*B;for(let Z=0;Z<K.count;Z++){const re=Z*C;M===!0&&(s.fromBufferAttribute(K,Z),N[ue+re+0]=s.x,N[ue+re+1]=s.y,N[ue+re+2]=s.z,N[ue+re+3]=0),S===!0&&(s.fromBufferAttribute(q,Z),N[ue+re+4]=s.x,N[ue+re+5]=s.y,N[ue+re+6]=s.z,N[ue+re+7]=0),v===!0&&(s.fromBufferAttribute(ne,Z),N[ue+re+8]=s.x,N[ue+re+9]=s.y,N[ue+re+10]=s.z,N[ue+re+11]=ne.itemSize===4?s.w:1)}}_={count:m,texture:I,size:new Pt(D,U)},n.set(c,_),c.addEventListener("dispose",b)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let M=0;for(let v=0;v<h.length;v++)M+=h[v];const S=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",h)}f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:a}}function pC(r,e,t,n){let s=new WeakMap;function a(f){const h=n.render.frame,p=f.geometry,m=e.get(f,p);if(s.get(m)!==h&&(e.update(m),s.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==h&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return m}function l(){s=new WeakMap}function c(f){const h=f.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const ry=new Jn,av=new ny(1,1),sy=new Xx,oy=new qw,ay=new Qx,lv=[],uv=[],cv=new Float32Array(16),fv=new Float32Array(9),dv=new Float32Array(4);function ba(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=lv[s];if(a===void 0&&(a=new Float32Array(s),lv[s]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(a,c)}return a}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function lf(r,e){let t=uv[e];t===void 0&&(t=new Int32Array(e),uv[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function _C(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function vC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function xC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;dv.set(n),r.uniformMatrix2fv(this.addr,!1,dv),pn(t,n)}}function yC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;fv.set(n),r.uniformMatrix3fv(this.addr,!1,fv),pn(t,n)}}function SC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;cv.set(n),r.uniformMatrix4fv(this.addr,!1,cv),pn(t,n)}}function EC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function MC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function wC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function TC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function RC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function AC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function CC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function bC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function PC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(av.compareFunction=Vx,a=av):a=ry,t.setTexture2D(e||a,s)}function LC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||oy,s)}function DC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ay,s)}function NC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sy,s)}function UC(r){switch(r){case 5126:return mC;case 35664:return gC;case 35665:return _C;case 35666:return vC;case 35674:return xC;case 35675:return yC;case 35676:return SC;case 5124:case 35670:return EC;case 35667:case 35671:return MC;case 35668:case 35672:return wC;case 35669:case 35673:return TC;case 5125:return RC;case 36294:return AC;case 36295:return CC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return PC;case 35679:case 36299:case 36307:return LC;case 35680:case 36300:case 36308:case 36293:return DC;case 36289:case 36303:case 36311:case 36292:return NC}}function IC(r,e){r.uniform1fv(this.addr,e)}function OC(r,e){const t=ba(e,this.size,2);r.uniform2fv(this.addr,t)}function FC(r,e){const t=ba(e,this.size,3);r.uniform3fv(this.addr,t)}function kC(r,e){const t=ba(e,this.size,4);r.uniform4fv(this.addr,t)}function BC(r,e){const t=ba(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zC(r,e){const t=ba(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function HC(r,e){const t=ba(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function VC(r,e){r.uniform1iv(this.addr,e)}function GC(r,e){r.uniform2iv(this.addr,e)}function WC(r,e){r.uniform3iv(this.addr,e)}function XC(r,e){r.uniform4iv(this.addr,e)}function jC(r,e){r.uniform1uiv(this.addr,e)}function qC(r,e){r.uniform2uiv(this.addr,e)}function $C(r,e){r.uniform3uiv(this.addr,e)}function YC(r,e){r.uniform4uiv(this.addr,e)}function KC(r,e,t){const n=this.cache,s=e.length,a=lf(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||ry,a[l])}function ZC(r,e,t){const n=this.cache,s=e.length,a=lf(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||oy,a[l])}function JC(r,e,t){const n=this.cache,s=e.length,a=lf(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||ay,a[l])}function QC(r,e,t){const n=this.cache,s=e.length,a=lf(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||sy,a[l])}function eb(r){switch(r){case 5126:return IC;case 35664:return OC;case 35665:return FC;case 35666:return kC;case 35674:return BC;case 35675:return zC;case 35676:return HC;case 5124:case 35670:return VC;case 35667:case 35671:return GC;case 35668:case 35672:return WC;case 35669:case 35673:return XC;case 5125:return jC;case 36294:return qC;case 36295:return $C;case 36296:return YC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return ZC;case 35680:case 36300:case 36308:case 36293:return JC;case 36289:case 36303:case 36311:case 36292:return QC}}class tb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=UC(t.type)}}class nb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eb(t.type)}}class ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function hv(r,e){r.seq.push(e),r.map[e.id]=e}function rb(r,e,t){const n=r.name,s=n.length;for(Ph.lastIndex=0;;){const a=Ph.exec(n),l=Ph.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&l+2===s){hv(t,h===void 0?new tb(c,r,e):new nb(c,r,e));break}else{let m=t.map[c];m===void 0&&(m=new ib(c),hv(t,m)),t=m}}}class Ic{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);rb(a,l,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,l=t.length;a!==l;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function pv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sb=37297;let ob=0;function ab(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const mv=new ut;function lb(r){At._getMatrix(mv,At.workingColorSpace,r);const e=`mat3( ${mv.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case Wc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ab(r.getShaderSource(e),l)}else return s}function ub(r,e){const t=lb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cb(r,e){let t;switch(e){case vw:t="Linear";break;case xw:t="Reinhard";break;case yw:t="Cineon";break;case Sw:t="ACESFilmic";break;case Mw:t="AgX";break;case ww:t="Neutral";break;case Ew:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tc=new te;function fb(){At.getLuminanceCoefficients(Tc);const r=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function db(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function hb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),l=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function _l(r){return r!==""}function _v(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(r){return r.replace(mb,_b)}const gb=new Map;function _b(r,e){let t=ct[e];if(t===void 0){const n=gb.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ip(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xv(r){return r.replace(vb,xb)}function xb(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function yv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bx?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Z1?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function Sb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case pa:case ma:e="ENVMAP_TYPE_CUBE";break;case sf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ma:e="ENVMAP_MODE_REFRACTION";break}return e}function Mb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Px:e="ENVMAP_BLENDING_MULTIPLY";break;case gw:e="ENVMAP_BLENDING_MIX";break;case _w:e="ENVMAP_BLENDING_ADD";break}return e}function wb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tb(r,e,t,n){const s=r.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=yb(t),h=Sb(t),p=Eb(t),m=Mb(t),_=wb(t),y=db(t),M=hb(a),S=s.createProgram();let v,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(_l).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(_l).join(`
`),x.length>0&&(x+=`
`)):(v=[yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),x=[yv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ys?"#define TONE_MAPPING":"",t.toneMapping!==ys?ct.tonemapping_pars_fragment:"",t.toneMapping!==ys?cb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_l).join(`
`)),l=Ip(l),l=_v(l,t),l=vv(l,t),c=Ip(c),c=_v(c,t),c=vv(c,t),l=xv(l),c=xv(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=R+v+l,w=R+x+c,D=pv(s,s.VERTEX_SHADER,T),U=pv(s,s.FRAGMENT_SHADER,w);s.attachShader(S,D),s.attachShader(S,U),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function N(B){if(r.debug.checkShaderErrors){const K=s.getProgramInfoLog(S).trim(),q=s.getShaderInfoLog(D).trim(),ne=s.getShaderInfoLog(U).trim();let ue=!0,Z=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,S,D,U);else{const re=gv(s,D,"vertex"),z=gv(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+K+`
`+re+`
`+z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||ne==="")&&(Z=!1);Z&&(B.diagnostics={runnable:ue,programLog:K,vertexShader:{log:q,prefix:v},fragmentShader:{log:ne,prefix:x}})}s.deleteShader(D),s.deleteShader(U),I=new Ic(s,S),C=pb(s,S)}let I;this.getUniforms=function(){return I===void 0&&N(this),I};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,sb)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=U,this}let Rb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cb(e),t.set(e,n)),n}}class Cb{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}}function bb(r,e,t,n,s,a,l){const c=new qx,f=new Ab,h=new Set,p=[],m=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(C){return h.add(C),C===0?"uv":`uv${C}`}function v(C,b,B,K,q){const ne=K.fog,ue=q.geometry,Z=C.isMeshStandardMaterial?K.environment:null,re=(C.isMeshStandardMaterial?t:e).get(C.envMap||Z),z=re&&re.mapping===sf?re.image.height:null,de=M[C.type];C.precision!==null&&(y=s.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const ce=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,k=ce!==void 0?ce.length:0;let Q=0;ue.morphAttributes.position!==void 0&&(Q=1),ue.morphAttributes.normal!==void 0&&(Q=2),ue.morphAttributes.color!==void 0&&(Q=3);let De,$,he,Te;if(de){const Et=ir[de];De=Et.vertexShader,$=Et.fragmentShader}else De=C.vertexShader,$=C.fragmentShader,f.update(C),he=f.getVertexShaderID(C),Te=f.getFragmentShaderID(C);const Se=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Fe=q.isInstancedMesh===!0,et=q.isBatchedMesh===!0,Dt=!!C.map,_t=!!C.matcap,Ft=!!re,V=!!C.aoMap,In=!!C.lightMap,mt=!!C.bumpMap,dt=!!C.normalMap,Ye=!!C.displacementMap,Lt=!!C.emissiveMap,qe=!!C.metalnessMap,O=!!C.roughnessMap,P=C.anisotropy>0,ee=C.clearcoat>0,_e=C.dispersion>0,xe=C.iridescence>0,me=C.sheen>0,Xe=C.transmission>0,Ce=P&&!!C.anisotropyMap,ke=ee&&!!C.clearcoatMap,ft=ee&&!!C.clearcoatNormalMap,we=ee&&!!C.clearcoatRoughnessMap,He=xe&&!!C.iridescenceMap,Ze=xe&&!!C.iridescenceThicknessMap,tt=me&&!!C.sheenColorMap,Ve=me&&!!C.sheenRoughnessMap,ht=!!C.specularMap,ot=!!C.specularColorMap,bt=!!C.specularIntensityMap,X=Xe&&!!C.transmissionMap,be=Xe&&!!C.thicknessMap,fe=!!C.gradientMap,ge=!!C.alphaMap,Ue=C.alphaTest>0,Ne=!!C.alphaHash,at=!!C.extensions;let Bt=ys;C.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Bt=r.toneMapping);const cn={shaderID:de,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:$,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:et,batchingColor:et&&q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&q.instanceColor!==null,instancingMorph:Fe&&q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:va,alphaToCoverage:!!C.alphaToCoverage,map:Dt,matcap:_t,envMap:Ft,envMapMode:Ft&&re.mapping,envMapCubeUVHeight:z,aoMap:V,lightMap:In,bumpMap:mt,normalMap:dt,displacementMap:_&&Ye,emissiveMap:Lt,normalMapObjectSpace:dt&&C.normalMapType===bw,normalMapTangentSpace:dt&&C.normalMapType===Cw,metalnessMap:qe,roughnessMap:O,anisotropy:P,anisotropyMap:Ce,clearcoat:ee,clearcoatMap:ke,clearcoatNormalMap:ft,clearcoatRoughnessMap:we,dispersion:_e,iridescence:xe,iridescenceMap:He,iridescenceThicknessMap:Ze,sheen:me,sheenColorMap:tt,sheenRoughnessMap:Ve,specularMap:ht,specularColorMap:ot,specularIntensityMap:bt,transmission:Xe,transmissionMap:X,thicknessMap:be,gradientMap:fe,opaque:C.transparent===!1&&C.blending===aa&&C.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ue,alphaHash:Ne,combine:C.combine,mapUv:Dt&&S(C.map.channel),aoMapUv:V&&S(C.aoMap.channel),lightMapUv:In&&S(C.lightMap.channel),bumpMapUv:mt&&S(C.bumpMap.channel),normalMapUv:dt&&S(C.normalMap.channel),displacementMapUv:Ye&&S(C.displacementMap.channel),emissiveMapUv:Lt&&S(C.emissiveMap.channel),metalnessMapUv:qe&&S(C.metalnessMap.channel),roughnessMapUv:O&&S(C.roughnessMap.channel),anisotropyMapUv:Ce&&S(C.anisotropyMap.channel),clearcoatMapUv:ke&&S(C.clearcoatMap.channel),clearcoatNormalMapUv:ft&&S(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&S(C.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&S(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&S(C.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&S(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&S(C.sheenRoughnessMap.channel),specularMapUv:ht&&S(C.specularMap.channel),specularColorMapUv:ot&&S(C.specularColorMap.channel),specularIntensityMapUv:bt&&S(C.specularIntensityMap.channel),transmissionMapUv:X&&S(C.transmissionMap.channel),thicknessMapUv:be&&S(C.thicknessMap.channel),alphaMapUv:ge&&S(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(dt||P),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(Dt||ge),fog:!!ne,useFog:C.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Ae,skinning:q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Dt&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Ut,decodeVideoTextureEmissive:Lt&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Ut,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Lr,flipSided:C.side===Zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:at&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&C.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return cn.vertexUv1s=h.has(1),cn.vertexUv2s=h.has(2),cn.vertexUv3s=h.has(3),h.clear(),cn}function x(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)b.push(B),b.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(R(b,C),T(b,C),b.push(r.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function R(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function T(C,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reverseDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),C.push(c.mask)}function w(C){const b=M[C.type];let B;if(b){const K=ir[b];B=sT.clone(K.uniforms)}else B=C.uniforms;return B}function D(C,b){let B;for(let K=0,q=p.length;K<q;K++){const ne=p[K];if(ne.cacheKey===b){B=ne,++B.usedTimes;break}}return B===void 0&&(B=new Tb(r,b,C,a),p.push(B)),B}function U(C){if(--C.usedTimes===0){const b=p.indexOf(C);p[b]=p[p.length-1],p.pop(),C.destroy()}}function N(C){f.remove(C)}function I(){f.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:w,acquireProgram:D,releaseProgram:U,releaseShaderCache:N,programs:p,dispose:I}}function Pb(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let c=r.get(l);return c===void 0&&(c={},r.set(l,c)),c}function n(l){r.delete(l)}function s(l,c,f){r.get(l)[c]=f}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Lb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Sv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ev(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function l(m,_,y,M,S,v){let x=r[e];return x===void 0?(x={id:m.id,object:m,geometry:_,material:y,groupOrder:M,renderOrder:m.renderOrder,z:S,group:v},r[e]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=S,x.group=v),e++,x}function c(m,_,y,M,S,v){const x=l(m,_,y,M,S,v);y.transmission>0?n.push(x):y.transparent===!0?s.push(x):t.push(x)}function f(m,_,y,M,S,v){const x=l(m,_,y,M,S,v);y.transmission>0?n.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(m,_){t.length>1&&t.sort(m||Lb),n.length>1&&n.sort(_||Sv),s.length>1&&s.sort(_||Sv)}function p(){for(let m=e,_=r.length;m<_;m++){const y=r[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:f,finish:p,sort:h}}function Db(){let r=new WeakMap;function e(n,s){const a=r.get(n);let l;return a===void 0?(l=new Ev,r.set(n,[l])):s>=a.length?(l=new Ev,a.push(l)):l=a[s],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function Nb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Ct};break;case"SpotLight":t={position:new te,direction:new te,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function Ub(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ib=0;function Ob(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fb(r){const e=new Nb,t=Ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new te);const s=new te,a=new sn,l=new sn;function c(h){let p=0,m=0,_=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let y=0,M=0,S=0,v=0,x=0,R=0,T=0,w=0,D=0,U=0,N=0;h.sort(Ob);for(let C=0,b=h.length;C<b;C++){const B=h[C],K=B.color,q=B.intensity,ne=B.distance,ue=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=K.r*q,m+=K.g*q,_+=K.b*q;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(B.sh.coefficients[Z],q);N++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const re=B.shadow,z=t.get(B);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,n.directionalShadow[y]=z,n.directionalShadowMap[y]=ue,n.directionalShadowMatrix[y]=B.shadow.matrix,R++}n.directional[y]=Z,y++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(K).multiplyScalar(q),Z.distance=ne,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,n.spot[S]=Z;const re=B.shadow;if(B.map&&(n.spotLightMap[D]=B.map,D++,re.updateMatrices(B),B.castShadow&&U++),n.spotLightMatrix[S]=re.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=ue,w++}S++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy(K).multiplyScalar(q),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),n.rectArea[v]=Z,v++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const re=B.shadow,z=t.get(B);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,z.shadowCameraNear=re.camera.near,z.shadowCameraFar=re.camera.far,n.pointShadow[M]=z,n.pointShadowMap[M]=ue,n.pointShadowMatrix[M]=B.shadow.matrix,T++}n.point[M]=Z,M++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar(q),Z.groundColor.copy(B.groundColor).multiplyScalar(q),n.hemi[x]=Z,x++}}v>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=_;const I=n.hash;(I.directionalLength!==y||I.pointLength!==M||I.spotLength!==S||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==R||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==D||I.numLightProbes!==N)&&(n.directional.length=y,n.spot.length=S,n.rectArea.length=v,n.point.length=M,n.hemi.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+D-U,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=N,I.directionalLength=y,I.pointLength=M,I.spotLength=S,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=R,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=D,I.numLightProbes=N,n.version=Ib++)}function f(h,p){let m=0,_=0,y=0,M=0,S=0;const v=p.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const T=h[x];if(T.isDirectionalLight){const w=n.directional[m];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),m++}else if(T.isSpotLight){const w=n.spot[y];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),y++}else if(T.isRectAreaLight){const w=n.rectArea[M];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(v),l.identity(),a.copy(T.matrixWorld),a.premultiply(v),l.extractRotation(a),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),M++}else if(T.isPointLight){const w=n.point[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(v),_++}else if(T.isHemisphereLight){const w=n.hemi[S];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(v),S++}}}return{setup:c,setupView:f,state:n}}function Mv(r){const e=new Fb(r),t=[],n=[];function s(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function l(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:l}}function kb(r){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let c;return l===void 0?(c=new Mv(r),e.set(s,[c])):a>=l.length?(c=new Mv(r),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hb(r,e,t){let n=new ey;const s=new Pt,a=new Pt,l=new rn,c=new pT({depthPacking:Aw}),f=new mT,h={},p=t.maxTextureSize,m={[Ms]:Zn,[Zn]:Ms,[Lr]:Lr},_=new ws({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Bb,fragmentShader:zb}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new dr;M.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ar(M,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bx;let x=this.type;this.render=function(U,N,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||U.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),K=r.state;K.setBlending(xs),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=x!==Cr&&this.type===Cr,ne=x===Cr&&this.type!==Cr;for(let ue=0,Z=U.length;ue<Z;ue++){const re=U[ue],z=re.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const de=z.getFrameExtents();if(s.multiply(de),a.copy(z.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/de.x),s.x=a.x*de.x,z.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/de.y),s.y=a.y*de.y,z.mapSize.y=a.y)),z.map===null||q===!0||ne===!0){const k=this.type!==Cr?{minFilter:Yi,magFilter:Yi}:{};z.map!==null&&z.map.dispose(),z.map=new mo(s.x,s.y,k),z.map.texture.name=re.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ce=z.getViewportCount();for(let k=0;k<ce;k++){const Q=z.getViewport(k);l.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),K.viewport(l),z.updateMatrices(re,k),n=z.getFrustum(),w(N,I,z.camera,re,this.type)}z.isPointLightShadow!==!0&&this.type===Cr&&R(z,I),z.needsUpdate=!1}x=this.type,v.needsUpdate=!1,r.setRenderTarget(C,b,B)};function R(U,N){const I=e.update(S);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new mo(s.x,s.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(N,null,I,_,S,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(N,null,I,y,S,null)}function T(U,N,I,C){let b=null;const B=I.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)b=B;else if(b=I.isPointLight===!0?f:c,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const K=b.uuid,q=N.uuid;let ne=h[K];ne===void 0&&(ne={},h[K]=ne);let ue=ne[q];ue===void 0&&(ue=b.clone(),ne[q]=ue,N.addEventListener("dispose",D)),b=ue}if(b.visible=N.visible,b.wireframe=N.wireframe,C===Cr?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:m[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=r.properties.get(b);K.light=I}return b}function w(U,N,I,C,b){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&b===Cr)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,U.matrixWorld);const q=e.update(U),ne=U.material;if(Array.isArray(ne)){const ue=q.groups;for(let Z=0,re=ue.length;Z<re;Z++){const z=ue[Z],de=ne[z.materialIndex];if(de&&de.visible){const ce=T(U,de,C,b);U.onBeforeShadow(r,U,N,I,q,ce,z),r.renderBufferDirect(I,null,q,ce,U,z),U.onAfterShadow(r,U,N,I,q,ce,z)}}}else if(ne.visible){const ue=T(U,ne,C,b);U.onBeforeShadow(r,U,N,I,q,ue,null),r.renderBufferDirect(I,null,q,ue,U,null),U.onAfterShadow(r,U,N,I,q,ue,null)}}const K=U.children;for(let q=0,ne=K.length;q<ne;q++)w(K[q],N,I,C,b)}function D(U){U.target.removeEventListener("dispose",D);for(const I in h){const C=h[I],b=U.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const Vb={[Kh]:Zh,[Jh]:tp,[Qh]:np,[ha]:ep,[Zh]:Kh,[tp]:Jh,[np]:Qh,[ep]:ha};function Gb(r,e){function t(){let X=!1;const be=new rn;let fe=null;const ge=new rn(0,0,0,0);return{setMask:function(Ue){fe!==Ue&&!X&&(r.colorMask(Ue,Ue,Ue,Ue),fe=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,Ne,at,Bt,cn){cn===!0&&(Ue*=Bt,Ne*=Bt,at*=Bt),be.set(Ue,Ne,at,Bt),ge.equals(be)===!1&&(r.clearColor(Ue,Ne,at,Bt),ge.copy(be))},reset:function(){X=!1,fe=null,ge.set(-1,0,0,0)}}}function n(){let X=!1,be=!1,fe=null,ge=null,Ue=null;return{setReversed:function(Ne){if(be!==Ne){const at=e.get("EXT_clip_control");be?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Ue;Ue=null,this.setClear(Bt)}be=Ne},getReversed:function(){return be},setTest:function(Ne){Ne?Se(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Ne){fe!==Ne&&!X&&(r.depthMask(Ne),fe=Ne)},setFunc:function(Ne){if(be&&(Ne=Vb[Ne]),ge!==Ne){switch(Ne){case Kh:r.depthFunc(r.NEVER);break;case Zh:r.depthFunc(r.ALWAYS);break;case Jh:r.depthFunc(r.LESS);break;case ha:r.depthFunc(r.LEQUAL);break;case Qh:r.depthFunc(r.EQUAL);break;case ep:r.depthFunc(r.GEQUAL);break;case tp:r.depthFunc(r.GREATER);break;case np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Ne}},setLocked:function(Ne){X=Ne},setClear:function(Ne){Ue!==Ne&&(be&&(Ne=1-Ne),r.clearDepth(Ne),Ue=Ne)},reset:function(){X=!1,fe=null,ge=null,Ue=null,be=!1}}}function s(){let X=!1,be=null,fe=null,ge=null,Ue=null,Ne=null,at=null,Bt=null,cn=null;return{setTest:function(Et){X||(Et?Se(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Et){be!==Et&&!X&&(r.stencilMask(Et),be=Et)},setFunc:function(Et,Vn,On){(fe!==Et||ge!==Vn||Ue!==On)&&(r.stencilFunc(Et,Vn,On),fe=Et,ge=Vn,Ue=On)},setOp:function(Et,Vn,On){(Ne!==Et||at!==Vn||Bt!==On)&&(r.stencilOp(Et,Vn,On),Ne=Et,at=Vn,Bt=On)},setLocked:function(Et){X=Et},setClear:function(Et){cn!==Et&&(r.clearStencil(Et),cn=Et)},reset:function(){X=!1,be=null,fe=null,ge=null,Ue=null,Ne=null,at=null,Bt=null,cn=null}}}const a=new t,l=new n,c=new s,f=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,y=[],M=null,S=!1,v=null,x=null,R=null,T=null,w=null,D=null,U=null,N=new Ct(0,0,0),I=0,C=!1,b=null,B=null,K=null,q=null,ne=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,re=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(z)[1]),Z=re>=1):z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Z=re>=2);let de=null,ce={};const k=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),De=new rn().fromArray(k),$=new rn().fromArray(Q);function he(X,be,fe,ge){const Ue=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(X,Ne),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<fe;at++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(be+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return Ne}const Te={};Te[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(r.DEPTH_TEST),l.setFunc(ha),mt(!1),dt(A0),Se(r.CULL_FACE),V(xs);function Se(X){p[X]!==!0&&(r.enable(X),p[X]=!0)}function Ae(X){p[X]!==!1&&(r.disable(X),p[X]=!1)}function Fe(X,be){return m[X]!==be?(r.bindFramebuffer(X,be),m[X]=be,X===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=be),X===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=be),!0):!1}function et(X,be){let fe=y,ge=!1;if(X){fe=_.get(be),fe===void 0&&(fe=[],_.set(be,fe));const Ue=X.textures;if(fe.length!==Ue.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,at=Ue.length;Ne<at;Ne++)fe[Ne]=r.COLOR_ATTACHMENT0+Ne;fe.length=Ue.length,ge=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,ge=!0);ge&&r.drawBuffers(fe)}function Dt(X){return M!==X?(r.useProgram(X),M=X,!0):!1}const _t={[no]:r.FUNC_ADD,[Q1]:r.FUNC_SUBTRACT,[ew]:r.FUNC_REVERSE_SUBTRACT};_t[tw]=r.MIN,_t[nw]=r.MAX;const Ft={[iw]:r.ZERO,[rw]:r.ONE,[sw]:r.SRC_COLOR,[$h]:r.SRC_ALPHA,[fw]:r.SRC_ALPHA_SATURATE,[uw]:r.DST_COLOR,[aw]:r.DST_ALPHA,[ow]:r.ONE_MINUS_SRC_COLOR,[Yh]:r.ONE_MINUS_SRC_ALPHA,[cw]:r.ONE_MINUS_DST_COLOR,[lw]:r.ONE_MINUS_DST_ALPHA,[dw]:r.CONSTANT_COLOR,[hw]:r.ONE_MINUS_CONSTANT_COLOR,[pw]:r.CONSTANT_ALPHA,[mw]:r.ONE_MINUS_CONSTANT_ALPHA};function V(X,be,fe,ge,Ue,Ne,at,Bt,cn,Et){if(X===xs){S===!0&&(Ae(r.BLEND),S=!1);return}if(S===!1&&(Se(r.BLEND),S=!0),X!==J1){if(X!==v||Et!==C){if((x!==no||w!==no)&&(r.blendEquation(r.FUNC_ADD),x=no,w=no),Et)switch(X){case aa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case C0:r.blendFunc(r.ONE,r.ONE);break;case b0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case P0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case aa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case C0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case b0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case P0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,T=null,D=null,U=null,N.set(0,0,0),I=0,v=X,C=Et}return}Ue=Ue||be,Ne=Ne||fe,at=at||ge,(be!==x||Ue!==w)&&(r.blendEquationSeparate(_t[be],_t[Ue]),x=be,w=Ue),(fe!==R||ge!==T||Ne!==D||at!==U)&&(r.blendFuncSeparate(Ft[fe],Ft[ge],Ft[Ne],Ft[at]),R=fe,T=ge,D=Ne,U=at),(Bt.equals(N)===!1||cn!==I)&&(r.blendColor(Bt.r,Bt.g,Bt.b,cn),N.copy(Bt),I=cn),v=X,C=!1}function In(X,be){X.side===Lr?Ae(r.CULL_FACE):Se(r.CULL_FACE);let fe=X.side===Zn;be&&(fe=!fe),mt(fe),X.blending===aa&&X.transparent===!1?V(xs):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),a.setMask(X.colorWrite);const ge=X.stencilWrite;c.setTest(ge),ge&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(X){b!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),b=X)}function dt(X){X!==Y1?(Se(r.CULL_FACE),X!==B&&(X===A0?r.cullFace(r.BACK):X===K1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),B=X}function Ye(X){X!==K&&(Z&&r.lineWidth(X),K=X)}function Lt(X,be,fe){X?(Se(r.POLYGON_OFFSET_FILL),(q!==be||ne!==fe)&&(r.polygonOffset(be,fe),q=be,ne=fe)):Ae(r.POLYGON_OFFSET_FILL)}function qe(X){X?Se(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function O(X){X===void 0&&(X=r.TEXTURE0+ue-1),de!==X&&(r.activeTexture(X),de=X)}function P(X,be,fe){fe===void 0&&(de===null?fe=r.TEXTURE0+ue-1:fe=de);let ge=ce[fe];ge===void 0&&(ge={type:void 0,texture:void 0},ce[fe]=ge),(ge.type!==X||ge.texture!==be)&&(de!==fe&&(r.activeTexture(fe),de=fe),r.bindTexture(X,be||Te[X]),ge.type=X,ge.texture=be)}function ee(){const X=ce[de];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(X){De.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),De.copy(X))}function Ve(X){$.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),$.copy(X))}function ht(X,be){let fe=h.get(be);fe===void 0&&(fe=new WeakMap,h.set(be,fe));let ge=fe.get(X);ge===void 0&&(ge=r.getUniformBlockIndex(be,X.name),fe.set(X,ge))}function ot(X,be){const ge=h.get(be).get(X);f.get(be)!==ge&&(r.uniformBlockBinding(be,ge,X.__bindingPointIndex),f.set(be,ge))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},de=null,ce={},m={},_=new WeakMap,y=[],M=null,S=!1,v=null,x=null,R=null,T=null,w=null,D=null,U=null,N=new Ct(0,0,0),I=0,C=!1,b=null,B=null,K=null,q=null,ne=null,De.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Ae,bindFramebuffer:Fe,drawBuffers:et,useProgram:Dt,setBlending:V,setMaterial:In,setFlipSided:mt,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:Lt,setScissorTest:qe,activeTexture:O,bindTexture:P,unbindTexture:ee,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:He,texImage3D:Ze,updateUBOMapping:ht,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:we,texSubImage2D:me,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ke,scissor:tt,viewport:Ve,reset:bt}}function Wb(r,e,t,n,s,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,p=new WeakMap;let m;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,P){return y?new OffscreenCanvas(O,P):jc("canvas")}function S(O,P,ee){let _e=1;const xe=qe(O);if((xe.width>ee||xe.height>ee)&&(_e=ee/Math.max(xe.width,xe.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const me=Math.floor(_e*xe.width),Xe=Math.floor(_e*xe.height);m===void 0&&(m=M(me,Xe));const Ce=P?M(me,Xe):m;return Ce.width=me,Ce.height=Xe,Ce.getContext("2d").drawImage(O,0,0,me,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+me+"x"+Xe+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),O;return O}function v(O){return O.generateMipmaps}function x(O){r.generateMipmap(O)}function R(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(O,P,ee,_e,xe=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let me=P;if(P===r.RED&&(ee===r.FLOAT&&(me=r.R32F),ee===r.HALF_FLOAT&&(me=r.R16F),ee===r.UNSIGNED_BYTE&&(me=r.R8)),P===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(me=r.R8UI),ee===r.UNSIGNED_SHORT&&(me=r.R16UI),ee===r.UNSIGNED_INT&&(me=r.R32UI),ee===r.BYTE&&(me=r.R8I),ee===r.SHORT&&(me=r.R16I),ee===r.INT&&(me=r.R32I)),P===r.RG&&(ee===r.FLOAT&&(me=r.RG32F),ee===r.HALF_FLOAT&&(me=r.RG16F),ee===r.UNSIGNED_BYTE&&(me=r.RG8)),P===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(me=r.RG8UI),ee===r.UNSIGNED_SHORT&&(me=r.RG16UI),ee===r.UNSIGNED_INT&&(me=r.RG32UI),ee===r.BYTE&&(me=r.RG8I),ee===r.SHORT&&(me=r.RG16I),ee===r.INT&&(me=r.RG32I)),P===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(me=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(me=r.RGB16UI),ee===r.UNSIGNED_INT&&(me=r.RGB32UI),ee===r.BYTE&&(me=r.RGB8I),ee===r.SHORT&&(me=r.RGB16I),ee===r.INT&&(me=r.RGB32I)),P===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),ee===r.UNSIGNED_INT&&(me=r.RGBA32UI),ee===r.BYTE&&(me=r.RGBA8I),ee===r.SHORT&&(me=r.RGBA16I),ee===r.INT&&(me=r.RGBA32I)),P===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),P===r.RGBA){const Xe=xe?Wc:At.getTransfer(_e);ee===r.FLOAT&&(me=r.RGBA32F),ee===r.HALF_FLOAT&&(me=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(me=Xe===Ut?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function w(O,P){let ee;return O?P===null||P===po||P===ga?ee=r.DEPTH24_STENCIL8:P===Dr?ee=r.DEPTH32F_STENCIL8:P===wl&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===po||P===ga?ee=r.DEPTH_COMPONENT24:P===Dr?ee=r.DEPTH_COMPONENT32F:P===wl&&(ee=r.DEPTH_COMPONENT16),ee}function D(O,P){return v(O)===!0||O.isFramebufferTexture&&O.minFilter!==Yi&&O.minFilter!==or?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function U(O){const P=O.target;P.removeEventListener("dispose",U),I(P),P.isVideoTexture&&p.delete(P)}function N(O){const P=O.target;P.removeEventListener("dispose",N),b(P)}function I(O){const P=n.get(O);if(P.__webglInit===void 0)return;const ee=O.source,_e=_.get(ee);if(_e){const xe=_e[P.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(O),Object.keys(_e).length===0&&_.delete(ee)}n.remove(O)}function C(O){const P=n.get(O);r.deleteTexture(P.__webglTexture);const ee=O.source,_e=_.get(ee);delete _e[P.__cacheKey],l.memory.textures--}function b(O){const P=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(P.__webglFramebuffer[_e]))for(let xe=0;xe<P.__webglFramebuffer[_e].length;xe++)r.deleteFramebuffer(P.__webglFramebuffer[_e][xe]);else r.deleteFramebuffer(P.__webglFramebuffer[_e]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[_e])}else{if(Array.isArray(P.__webglFramebuffer))for(let _e=0;_e<P.__webglFramebuffer.length;_e++)r.deleteFramebuffer(P.__webglFramebuffer[_e]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let _e=0;_e<P.__webglColorRenderbuffer.length;_e++)P.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[_e]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ee=O.textures;for(let _e=0,xe=ee.length;_e<xe;_e++){const me=n.get(ee[_e]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),l.memory.textures--),n.remove(ee[_e])}n.remove(O)}let B=0;function K(){B=0}function q(){const O=B;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),B+=1,O}function ne(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function ue(O,P){const ee=n.get(O);if(O.isVideoTexture&&Ye(O),O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(ee,O,P);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+P)}function Z(O,P){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){$(ee,O,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+P)}function re(O,P){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){$(ee,O,P);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+P)}function z(O,P){const ee=n.get(O);if(O.version>0&&ee.__version!==O.version){he(ee,O,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+P)}const de={[sp]:r.REPEAT,[ro]:r.CLAMP_TO_EDGE,[op]:r.MIRRORED_REPEAT},ce={[Yi]:r.NEAREST,[Tw]:r.NEAREST_MIPMAP_NEAREST,[nc]:r.NEAREST_MIPMAP_LINEAR,[or]:r.LINEAR,[nh]:r.LINEAR_MIPMAP_NEAREST,[so]:r.LINEAR_MIPMAP_LINEAR},k={[Pw]:r.NEVER,[Ow]:r.ALWAYS,[Lw]:r.LESS,[Vx]:r.LEQUAL,[Dw]:r.EQUAL,[Iw]:r.GEQUAL,[Nw]:r.GREATER,[Uw]:r.NOTEQUAL};function Q(O,P){if(P.type===Dr&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===or||P.magFilter===nh||P.magFilter===nc||P.magFilter===so||P.minFilter===or||P.minFilter===nh||P.minFilter===nc||P.minFilter===so)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,de[P.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,de[P.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,de[P.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,ce[P.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,ce[P.minFilter]),P.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,k[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Yi||P.minFilter!==nc&&P.minFilter!==so||P.type===Dr&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function De(O,P){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",U));const _e=P.source;let xe=_.get(_e);xe===void 0&&(xe={},_.set(_e,xe));const me=ne(P);if(me!==O.__cacheKey){xe[me]===void 0&&(xe[me]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,ee=!0),xe[me].usedTimes++;const Xe=xe[O.__cacheKey];Xe!==void 0&&(xe[O.__cacheKey].usedTimes--,Xe.usedTimes===0&&C(P)),O.__cacheKey=me,O.__webglTexture=xe[me].texture}return ee}function $(O,P,ee){let _e=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(_e=r.TEXTURE_3D);const xe=De(O,P),me=P.source;t.bindTexture(_e,O.__webglTexture,r.TEXTURE0+ee);const Xe=n.get(me);if(me.version!==Xe.__version||xe===!0){t.activeTexture(r.TEXTURE0+ee);const Ce=At.getPrimaries(At.workingColorSpace),ke=P.colorSpace===ms?null:At.getPrimaries(P.colorSpace),ft=P.colorSpace===ms||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let we=S(P.image,!1,s.maxTextureSize);we=Lt(P,we);const He=a.convert(P.format,P.colorSpace),Ze=a.convert(P.type);let tt=T(P.internalFormat,He,Ze,P.colorSpace,P.isVideoTexture);Q(_e,P);let Ve;const ht=P.mipmaps,ot=P.isVideoTexture!==!0,bt=Xe.__version===void 0||xe===!0,X=me.dataReady,be=D(P,we);if(P.isDepthTexture)tt=w(P.format===_a,P.type),bt&&(ot?t.texStorage2D(r.TEXTURE_2D,1,tt,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,tt,we.width,we.height,0,He,Ze,null));else if(P.isDataTexture)if(ht.length>0){ot&&bt&&t.texStorage2D(r.TEXTURE_2D,be,tt,ht[0].width,ht[0].height);for(let fe=0,ge=ht.length;fe<ge;fe++)Ve=ht[fe],ot?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,He,Ze,Ve.data):t.texImage2D(r.TEXTURE_2D,fe,tt,Ve.width,Ve.height,0,He,Ze,Ve.data);P.generateMipmaps=!1}else ot?(bt&&t.texStorage2D(r.TEXTURE_2D,be,tt,we.width,we.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,He,Ze,we.data)):t.texImage2D(r.TEXTURE_2D,0,tt,we.width,we.height,0,He,Ze,we.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ot&&bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,tt,ht[0].width,ht[0].height,we.depth);for(let fe=0,ge=ht.length;fe<ge;fe++)if(Ve=ht[fe],P.format!==qi)if(He!==null)if(ot){if(X)if(P.layerUpdates.size>0){const Ue=Q0(Ve.width,Ve.height,P.format,P.type);for(const Ne of P.layerUpdates){const at=Ve.data.subarray(Ne*Ue/Ve.data.BYTES_PER_ELEMENT,(Ne+1)*Ue/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,Ne,Ve.width,Ve.height,1,He,at)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,we.depth,He,Ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,tt,Ve.width,Ve.height,we.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,we.depth,He,Ze,Ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,tt,Ve.width,Ve.height,we.depth,0,He,Ze,Ve.data)}else{ot&&bt&&t.texStorage2D(r.TEXTURE_2D,be,tt,ht[0].width,ht[0].height);for(let fe=0,ge=ht.length;fe<ge;fe++)Ve=ht[fe],P.format!==qi?He!==null?ot?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,He,Ve.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,tt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,He,Ze,Ve.data):t.texImage2D(r.TEXTURE_2D,fe,tt,Ve.width,Ve.height,0,He,Ze,Ve.data)}else if(P.isDataArrayTexture)if(ot){if(bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,tt,we.width,we.height,we.depth),X)if(P.layerUpdates.size>0){const fe=Q0(we.width,we.height,P.format,P.type);for(const ge of P.layerUpdates){const Ue=we.data.subarray(ge*fe/we.data.BYTES_PER_ELEMENT,(ge+1)*fe/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,we.width,we.height,1,He,Ze,Ue)}P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,He,Ze,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,we.width,we.height,we.depth,0,He,Ze,we.data);else if(P.isData3DTexture)ot?(bt&&t.texStorage3D(r.TEXTURE_3D,be,tt,we.width,we.height,we.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,He,Ze,we.data)):t.texImage3D(r.TEXTURE_3D,0,tt,we.width,we.height,we.depth,0,He,Ze,we.data);else if(P.isFramebufferTexture){if(bt)if(ot)t.texStorage2D(r.TEXTURE_2D,be,tt,we.width,we.height);else{let fe=we.width,ge=we.height;for(let Ue=0;Ue<be;Ue++)t.texImage2D(r.TEXTURE_2D,Ue,tt,fe,ge,0,He,Ze,null),fe>>=1,ge>>=1}}else if(ht.length>0){if(ot&&bt){const fe=qe(ht[0]);t.texStorage2D(r.TEXTURE_2D,be,tt,fe.width,fe.height)}for(let fe=0,ge=ht.length;fe<ge;fe++)Ve=ht[fe],ot?X&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,He,Ze,Ve):t.texImage2D(r.TEXTURE_2D,fe,tt,He,Ze,Ve);P.generateMipmaps=!1}else if(ot){if(bt){const fe=qe(we);t.texStorage2D(r.TEXTURE_2D,be,tt,fe.width,fe.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,He,Ze,we)}else t.texImage2D(r.TEXTURE_2D,0,tt,He,Ze,we);v(P)&&x(_e),Xe.__version=me.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function he(O,P,ee){if(P.image.length!==6)return;const _e=De(O,P),xe=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ee);const me=n.get(xe);if(xe.version!==me.__version||_e===!0){t.activeTexture(r.TEXTURE0+ee);const Xe=At.getPrimaries(At.workingColorSpace),Ce=P.colorSpace===ms?null:At.getPrimaries(P.colorSpace),ke=P.colorSpace===ms||Xe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ft=P.isCompressedTexture||P.image[0].isCompressedTexture,we=P.image[0]&&P.image[0].isDataTexture,He=[];for(let ge=0;ge<6;ge++)!ft&&!we?He[ge]=S(P.image[ge],!0,s.maxCubemapSize):He[ge]=we?P.image[ge].image:P.image[ge],He[ge]=Lt(P,He[ge]);const Ze=He[0],tt=a.convert(P.format,P.colorSpace),Ve=a.convert(P.type),ht=T(P.internalFormat,tt,Ve,P.colorSpace),ot=P.isVideoTexture!==!0,bt=me.__version===void 0||_e===!0,X=xe.dataReady;let be=D(P,Ze);Q(r.TEXTURE_CUBE_MAP,P);let fe;if(ft){ot&&bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,Ze.width,Ze.height);for(let ge=0;ge<6;ge++){fe=He[ge].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){const Ne=fe[Ue];P.format!==qi?tt!==null?ot?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,Ne.width,Ne.height,tt,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,ht,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,Ne.width,Ne.height,tt,Ve,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,ht,Ne.width,Ne.height,0,tt,Ve,Ne.data)}}}else{if(fe=P.mipmaps,ot&&bt){fe.length>0&&be++;const ge=qe(He[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(we){ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He[ge].width,He[ge].height,tt,Ve,He[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,He[ge].width,He[ge].height,0,tt,Ve,He[ge].data);for(let Ue=0;Ue<fe.length;Ue++){const at=fe[Ue].image[ge].image;ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,at.width,at.height,tt,Ve,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,ht,at.width,at.height,0,tt,Ve,at.data)}}else{ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,tt,Ve,He[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,tt,Ve,He[ge]);for(let Ue=0;Ue<fe.length;Ue++){const Ne=fe[Ue];ot?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,tt,Ve,Ne.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,ht,tt,Ve,Ne.image[ge])}}}v(P)&&x(r.TEXTURE_CUBE_MAP),me.__version=xe.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Te(O,P,ee,_e,xe,me){const Xe=a.convert(ee.format,ee.colorSpace),Ce=a.convert(ee.type),ke=T(ee.internalFormat,Xe,Ce,ee.colorSpace),ft=n.get(P),we=n.get(ee);if(we.__renderTarget=P,!ft.__hasExternalTextures){const He=Math.max(1,P.width>>me),Ze=Math.max(1,P.height>>me);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,me,ke,He,Ze,P.depth,0,Xe,Ce,null):t.texImage2D(xe,me,ke,He,Ze,0,Xe,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),dt(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,xe,we.__webglTexture,0,mt(P)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,xe,we.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(O,P,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,O),P.depthBuffer){const _e=P.depthTexture,xe=_e&&_e.isDepthTexture?_e.type:null,me=w(P.stencilBuffer,xe),Xe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=mt(P);dt(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,me,P.width,P.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,me,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,me,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,O)}else{const _e=P.textures;for(let xe=0;xe<_e.length;xe++){const me=_e[xe],Xe=a.convert(me.format,me.colorSpace),Ce=a.convert(me.type),ke=T(me.internalFormat,Xe,Ce,me.colorSpace),ft=mt(P);ee&&dt(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,ke,P.width,P.height):dt(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,ke,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ke,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=n.get(P.depthTexture);_e.__renderTarget=P,(!_e.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ue(P.depthTexture,0);const xe=_e.__webglTexture,me=mt(P);if(P.depthTexture.format===la)dt(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(P.depthTexture.format===_a)dt(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Fe(O){const P=n.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==O.depthTexture){const _e=O.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),_e){const xe=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,_e.removeEventListener("dispose",xe)};_e.addEventListener("dispose",xe),P.__depthDisposeCallback=xe}P.__boundDepthTexture=_e}if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ae(P.__webglFramebuffer,O)}else if(ee){P.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[_e]),P.__webglDepthbuffer[_e]===void 0)P.__webglDepthbuffer[_e]=r.createRenderbuffer(),Se(P.__webglDepthbuffer[_e],O,!1);else{const xe=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=P.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,me)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=r.createRenderbuffer(),Se(P.__webglDepthbuffer,O,!1);else{const _e=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=P.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function et(O,P,ee){const _e=n.get(O);P!==void 0&&Te(_e.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Fe(O)}function Dt(O){const P=O.texture,ee=n.get(O),_e=n.get(P);O.addEventListener("dispose",N);const xe=O.textures,me=O.isWebGLCubeRenderTarget===!0,Xe=xe.length>1;if(Xe||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=P.version,l.memory.textures++),me){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let ke=0;ke<P.mipmaps.length;ke++)ee.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<P.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const ft=n.get(xe[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),l.memory.textures++)}if(O.samples>0&&dt(O)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const ke=xe[Ce];ee.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const ft=a.convert(ke.format,ke.colorSpace),we=a.convert(ke.type),He=T(ke.internalFormat,ft,we,ke.colorSpace,O.isXRRenderTarget===!0),Ze=mt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,He,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(ee.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Q(r.TEXTURE_CUBE_MAP,P);for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)Te(ee.__webglFramebuffer[Ce][ke],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else Te(ee.__webglFramebuffer[Ce],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);v(P)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const ft=xe[Ce],we=n.get(ft);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),Q(r.TEXTURE_2D,ft),Te(ee.__webglFramebuffer,O,ft,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),v(ft)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,_e.__webglTexture),Q(Ce,P),P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)Te(ee.__webglFramebuffer[ke],O,P,r.COLOR_ATTACHMENT0,Ce,ke);else Te(ee.__webglFramebuffer,O,P,r.COLOR_ATTACHMENT0,Ce,0);v(P)&&x(Ce),t.unbindTexture()}O.depthBuffer&&Fe(O)}function _t(O){const P=O.textures;for(let ee=0,_e=P.length;ee<_e;ee++){const xe=P[ee];if(v(xe)){const me=R(O),Xe=n.get(xe).__webglTexture;t.bindTexture(me,Xe),x(me),t.unbindTexture()}}}const Ft=[],V=[];function In(O){if(O.samples>0){if(dt(O)===!1){const P=O.textures,ee=O.width,_e=O.height;let xe=r.COLOR_BUFFER_BIT;const me=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=n.get(O),Ce=P.length>1;if(Ce)for(let ke=0;ke<P.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let ke=0;ke<P.length;ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[ke]);const ft=n.get(P[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,ee,_e,0,0,ee,_e,xe,r.NEAREST),f===!0&&(Ft.length=0,V.length=0,Ft.push(r.COLOR_ATTACHMENT0+ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ft.push(me),V.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,V)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<P.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[ke]);const ft=n.get(P[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const P=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function mt(O){return Math.min(s.maxSamples,O.samples)}function dt(O){const P=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ye(O){const P=l.render.frame;p.get(O)!==P&&(p.set(O,P),O.update())}function Lt(O,P){const ee=O.colorSpace,_e=O.format,xe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==va&&ee!==ms&&(At.getTransfer(ee)===Ut?(_e!==qi||xe!==Or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),P}function qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=ue,this.setTexture2DArray=Z,this.setTexture3D=re,this.setTextureCube=z,this.rebindTextures=et,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=In,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=dt}function Xb(r,e){function t(n,s=ms){let a;const l=At.getTransfer(s);if(n===Or)return r.UNSIGNED_BYTE;if(n===fm)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dm)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ux)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Dx)return r.BYTE;if(n===Nx)return r.SHORT;if(n===wl)return r.UNSIGNED_SHORT;if(n===cm)return r.INT;if(n===po)return r.UNSIGNED_INT;if(n===Dr)return r.FLOAT;if(n===Ol)return r.HALF_FLOAT;if(n===Ix)return r.ALPHA;if(n===Ox)return r.RGB;if(n===qi)return r.RGBA;if(n===Fx)return r.LUMINANCE;if(n===kx)return r.LUMINANCE_ALPHA;if(n===la)return r.DEPTH_COMPONENT;if(n===_a)return r.DEPTH_STENCIL;if(n===Bx)return r.RED;if(n===hm)return r.RED_INTEGER;if(n===zx)return r.RG;if(n===pm)return r.RG_INTEGER;if(n===mm)return r.RGBA_INTEGER;if(n===Pc||n===Lc||n===Dc||n===Nc)if(l===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ap||n===lp||n===up||n===cp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===up)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fp||n===dp||n===hp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===fp||n===dp)return l===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===hp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pp||n===mp||n===gp||n===_p||n===vp||n===xp||n===yp||n===Sp||n===Ep||n===Mp||n===wp||n===Tp||n===Rp||n===Ap)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===pp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_p)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ep)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rp)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ap)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Cp||n===bp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Uc)return l===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hx||n===Pp||n===Lp||n===Dp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Uc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Pp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ga?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const jb={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,l=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const S of e.hand.values()){const v=t.getJointPose(S,n),x=this._getHandJoint(h,S);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],_=p.position.distanceTo(m.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ec;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Jn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ws({vertexShader:qb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ar(new af(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kb extends Ca{constructor(e,t){super();const n=this;let s=null,a=1,l=null,c="local-floor",f=1,h=null,p=null,m=null,_=null,y=null,M=null;const S=new Yb,v=t.getContextAttributes();let x=null,R=null;const T=[],w=[],D=new Pt;let U=null;const N=new Li;N.viewport=new rn;const I=new Li;I.viewport=new rn;const C=[N,I],b=new _T;let B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=T[$];return he===void 0&&(he=new Lh,T[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=T[$];return he===void 0&&(he=new Lh,T[$]=he),he.getGripSpace()},this.getHand=function($){let he=T[$];return he===void 0&&(he=new Lh,T[$]=he),he.getHandSpace()};function q($){const he=w.indexOf($.inputSource);if(he===-1)return;const Te=T[he];Te!==void 0&&(Te.update($.inputSource,$.frame,h||l),Te.dispatchEvent({type:$.type,data:$.inputSource}))}function ne(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ue);for(let $=0;$<T.length;$++){const he=w[$];he!==null&&(w[$]=null,T[$].disconnect(he))}B=null,K=null,S.reset(),e.setRenderTarget(x),y=null,_=null,m=null,s=null,R=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ue),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new mo(y.framebufferWidth,y.framebufferHeight,{format:qi,type:Or,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let he=null,Te=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?_a:la,Te=v.stencil?ga:po);const Ae={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};m=new XRWebGLBinding(s,t),_=m.createProjectionLayer(Ae),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new mo(_.textureWidth,_.textureHeight,{format:qi,type:Or,depthTexture:new ny(_.textureWidth,_.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await s.requestReferenceSpace(c),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ue($){for(let he=0;he<$.removed.length;he++){const Te=$.removed[he],Se=w.indexOf(Te);Se>=0&&(w[Se]=null,T[Se].disconnect(Te))}for(let he=0;he<$.added.length;he++){const Te=$.added[he];let Se=w.indexOf(Te);if(Se===-1){for(let Fe=0;Fe<T.length;Fe++)if(Fe>=w.length){w.push(Te),Se=Fe;break}else if(w[Fe]===null){w[Fe]=Te,Se=Fe;break}if(Se===-1)break}const Ae=T[Se];Ae&&Ae.connect(Te)}}const Z=new te,re=new te;function z($,he,Te){Z.setFromMatrixPosition(he.matrixWorld),re.setFromMatrixPosition(Te.matrixWorld);const Se=Z.distanceTo(re),Ae=he.projectionMatrix.elements,Fe=Te.projectionMatrix.elements,et=Ae[14]/(Ae[10]-1),Dt=Ae[14]/(Ae[10]+1),_t=(Ae[9]+1)/Ae[5],Ft=(Ae[9]-1)/Ae[5],V=(Ae[8]-1)/Ae[0],In=(Fe[8]+1)/Fe[0],mt=et*V,dt=et*In,Ye=Se/(-V+In),Lt=Ye*-V;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const qe=et+Ye,O=Dt+Ye,P=mt-Lt,ee=dt+(Se-Lt),_e=_t*Dt/O*qe,xe=Ft*Dt/O*qe;$.projectionMatrix.makePerspective(P,ee,_e,xe,qe,O),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function de($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let he=$.near,Te=$.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Te=S.depthFar)),b.near=I.near=N.near=he,b.far=I.far=N.far=Te,(B!==b.near||K!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),B=b.near,K=b.far),N.layers.mask=$.layers.mask|2,I.layers.mask=$.layers.mask|4,b.layers.mask=N.layers.mask|I.layers.mask;const Se=$.parent,Ae=b.cameras;de(b,Se);for(let Fe=0;Fe<Ae.length;Fe++)de(Ae[Fe],Se);Ae.length===2?z(b,N,I):b.projectionMatrix.copy(N.projectionMatrix),ce($,b,Se)};function ce($,he,Te){Te===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(Te.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Np*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function($){f=$,_!==null&&(_.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(b)};let k=null;function Q($,he){if(p=he.getViewerPose(h||l),M=he,p!==null){const Te=p.views;y!==null&&(e.setRenderTargetFramebuffer(R,y.framebuffer),e.setRenderTarget(R));let Se=!1;Te.length!==b.cameras.length&&(b.cameras.length=0,Se=!0);for(let Fe=0;Fe<Te.length;Fe++){const et=Te[Fe];let Dt=null;if(y!==null)Dt=y.getViewport(et);else{const Ft=m.getViewSubImage(_,et);Dt=Ft.viewport,Fe===0&&(e.setRenderTargetTextures(R,Ft.colorTexture,_.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(R))}let _t=C[Fe];_t===void 0&&(_t=new Li,_t.layers.enable(Fe),_t.viewport=new rn,C[Fe]=_t),_t.matrix.fromArray(et.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(et.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Fe===0&&(b.matrix.copy(_t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Se===!0&&b.cameras.push(_t)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Fe=m.getDepthInformation(Te[0]);Fe&&Fe.isValid&&Fe.texture&&S.init(e,Fe,s.renderState)}}for(let Te=0;Te<T.length;Te++){const Se=w[Te],Ae=T[Te];Se!==null&&Ae!==void 0&&Ae.update(Se,he,h||l)}k&&k($,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),M=null}const De=new iy;De.setAnimationLoop(Q),this.setAnimationLoop=function($){k=$},this.dispose=function(){}}}const Ks=new Fr,Zb=new sn;function Jb(r,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function n(v,x){x.color.getRGB(v.fogColor.value,Zx(r)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function s(v,x,R,T,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(v,x):x.isMeshToonMaterial?(a(v,x),m(v,x)):x.isMeshPhongMaterial?(a(v,x),p(v,x)):x.isMeshStandardMaterial?(a(v,x),_(v,x),x.isMeshPhysicalMaterial&&y(v,x,w)):x.isMeshMatcapMaterial?(a(v,x),M(v,x)):x.isMeshDepthMaterial?a(v,x):x.isMeshDistanceMaterial?(a(v,x),S(v,x)):x.isMeshNormalMaterial?a(v,x):x.isLineBasicMaterial?(l(v,x),x.isLineDashedMaterial&&c(v,x)):x.isPointsMaterial?f(v,x,R,T):x.isSpriteMaterial?h(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Zn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Zn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const R=e.get(x),T=R.envMap,w=R.envMapRotation;T&&(v.envMap.value=T,Ks.copy(w),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),v.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(Ks)),v.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function l(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function c(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function f(v,x,R,T){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*R,v.scale.value=T*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function h(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function m(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function _(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function y(v,x,R){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=R.texture,v.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,x){x.matcap&&(v.matcap.value=x.matcap)}function S(v,x){const R=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(R.matrixWorld),v.nearDistance.value=R.shadow.camera.near,v.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qb(r,e,t,n){let s={},a={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,T){const w=T.program;n.uniformBlockBinding(R,w)}function h(R,T){let w=s[R.id];w===void 0&&(M(R),w=p(R),s[R.id]=w,R.addEventListener("dispose",v));const D=T.program;n.updateUBOMapping(R,D);const U=e.render.frame;a[R.id]!==U&&(_(R),a[R.id]=U)}function p(R){const T=m();R.__bindingPointIndex=T;const w=r.createBuffer(),D=R.__size,U=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,D,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,w),w}function m(){for(let R=0;R<c;R++)if(l.indexOf(R)===-1)return l.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const T=s[R.id],w=R.uniforms,D=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let U=0,N=w.length;U<N;U++){const I=Array.isArray(w[U])?w[U]:[w[U]];for(let C=0,b=I.length;C<b;C++){const B=I[C];if(y(B,U,C,D)===!0){const K=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let ne=0;for(let ue=0;ue<q.length;ue++){const Z=q[ue],re=S(Z);typeof Z=="number"||typeof Z=="boolean"?(B.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,K+ne,B.__data)):Z.isMatrix3?(B.__data[0]=Z.elements[0],B.__data[1]=Z.elements[1],B.__data[2]=Z.elements[2],B.__data[3]=0,B.__data[4]=Z.elements[3],B.__data[5]=Z.elements[4],B.__data[6]=Z.elements[5],B.__data[7]=0,B.__data[8]=Z.elements[6],B.__data[9]=Z.elements[7],B.__data[10]=Z.elements[8],B.__data[11]=0):(Z.toArray(B.__data,ne),ne+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,T,w,D){const U=R.value,N=T+"_"+w;if(D[N]===void 0)return typeof U=="number"||typeof U=="boolean"?D[N]=U:D[N]=U.clone(),!0;{const I=D[N];if(typeof U=="number"||typeof U=="boolean"){if(I!==U)return D[N]=U,!0}else if(I.equals(U)===!1)return I.copy(U),!0}return!1}function M(R){const T=R.uniforms;let w=0;const D=16;for(let N=0,I=T.length;N<I;N++){const C=Array.isArray(T[N])?T[N]:[T[N]];for(let b=0,B=C.length;b<B;b++){const K=C[b],q=Array.isArray(K.value)?K.value:[K.value];for(let ne=0,ue=q.length;ne<ue;ne++){const Z=q[ne],re=S(Z),z=w%D,de=z%re.boundary,ce=z+de;w+=de,ce!==0&&D-ce<re.storage&&(w+=D-ce),K.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=re.storage}}}const U=w%D;return U>0&&(w+=D-U),R.__size=w,R.__cache={},this}function S(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function v(R){const T=R.target;T.removeEventListener("dispose",v);const w=l.indexOf(T.__bindingPointIndex);l.splice(w,1),r.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function x(){for(const R in s)r.deleteBuffer(s[R]);l=[],s={},a={}}return{bind:f,update:h,dispose:x}}class eP{constructor(e={}){const{canvas:t=kw(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const M=new Uint32Array(4),S=new Int32Array(4);let v=null,x=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pi,this.toneMapping=ys,this.toneMappingExposure=1;const w=this;let D=!1,U=0,N=0,I=null,C=-1,b=null;const B=new rn,K=new rn;let q=null;const ne=new Ct(0);let ue=0,Z=t.width,re=t.height,z=1,de=null,ce=null;const k=new rn(0,0,Z,re),Q=new rn(0,0,Z,re);let De=!1;const $=new ey;let he=!1,Te=!1;const Se=new sn,Ae=new sn,Fe=new te,et=new rn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ft(){return I===null?z:1}let V=n;function In(L,j){return t.getContext(L,j)}try{const L={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${um}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),V===null){const j="webgl2";if(V=In(j,L),V===null)throw In(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let mt,dt,Ye,Lt,qe,O,P,ee,_e,xe,me,Xe,Ce,ke,ft,we,He,Ze,tt,Ve,ht,ot,bt,X;function be(){mt=new uC(V),mt.init(),ot=new Xb(V,mt),dt=new iC(V,mt,e,ot),Ye=new Gb(V,mt),dt.reverseDepthBuffer&&_&&Ye.buffers.depth.setReversed(!0),Lt=new dC(V),qe=new Pb,O=new Wb(V,mt,Ye,qe,dt,ot,Lt),P=new sC(w),ee=new lC(w),_e=new xT(V),bt=new tC(V,_e),xe=new cC(V,_e,Lt,bt),me=new pC(V,xe,_e,Lt),tt=new hC(V,dt,O),we=new rC(qe),Xe=new bb(w,P,ee,mt,dt,bt,we),Ce=new Jb(w,qe),ke=new Db,ft=new kb(mt),Ze=new eC(w,P,ee,Ye,me,y,f),He=new Hb(w,me,dt),X=new Qb(V,Lt,dt,Ye),Ve=new nC(V,mt,Lt),ht=new fC(V,mt,Lt),Lt.programs=Xe.programs,w.capabilities=dt,w.extensions=mt,w.properties=qe,w.renderLists=ke,w.shadowMap=He,w.state=Ye,w.info=Lt}be();const fe=new Kb(w,V);this.xr=fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const L=mt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=mt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(Z,re,!1))},this.getSize=function(L){return L.set(Z,re)},this.setSize=function(L,j,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=L,re=j,t.width=Math.floor(L*z),t.height=Math.floor(j*z),se===!0&&(t.style.width=L+"px",t.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(Z*z,re*z).floor()},this.setDrawingBufferSize=function(L,j,se){Z=L,re=j,z=se,t.width=Math.floor(L*se),t.height=Math.floor(j*se),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,j,se,ae){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,j,se,ae),Ye.viewport(B.copy(k).multiplyScalar(z).round())},this.getScissor=function(L){return L.copy(Q)},this.setScissor=function(L,j,se,ae){L.isVector4?Q.set(L.x,L.y,L.z,L.w):Q.set(L,j,se,ae),Ye.scissor(K.copy(Q).multiplyScalar(z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(L){Ye.setScissorTest(De=L)},this.setOpaqueSort=function(L){de=L},this.setTransparentSort=function(L){ce=L},this.getClearColor=function(L){return L.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(L=!0,j=!0,se=!0){let ae=0;if(L){let G=!1;if(I!==null){const Me=I.texture.format;G=Me===mm||Me===pm||Me===hm}if(G){const Me=I.texture.type,Pe=Me===Or||Me===po||Me===wl||Me===ga||Me===fm||Me===dm,Oe=Ze.getClearColor(),Be=Ze.getClearAlpha(),it=Oe.r,rt=Oe.g,$e=Oe.b;Pe?(M[0]=it,M[1]=rt,M[2]=$e,M[3]=Be,V.clearBufferuiv(V.COLOR,0,M)):(S[0]=it,S[1]=rt,S[2]=$e,S[3]=Be,V.clearBufferiv(V.COLOR,0,S))}else ae|=V.COLOR_BUFFER_BIT}j&&(ae|=V.DEPTH_BUFFER_BIT),se&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ze.dispose(),ke.dispose(),ft.dispose(),qe.dispose(),P.dispose(),ee.dispose(),me.dispose(),bt.dispose(),X.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",vo),fe.removeEventListener("sessionend",Vr),hr.stop()};function ge(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const L=Lt.autoReset,j=He.enabled,se=He.autoUpdate,ae=He.needsUpdate,G=He.type;be(),Lt.autoReset=L,He.enabled=j,He.autoUpdate=se,He.needsUpdate=ae,He.type=G}function Ne(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function at(L){const j=L.target;j.removeEventListener("dispose",at),Bt(j)}function Bt(L){cn(L),qe.remove(L)}function cn(L){const j=qe.get(L).programs;j!==void 0&&(j.forEach(function(se){Xe.releaseProgram(se)}),L.isShaderMaterial&&Xe.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,se,ae,G,Me){j===null&&(j=Dt);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Oe=Kl(L,j,se,ae,G);Ye.setMaterial(ae,Pe);let Be=se.index,it=1;if(ae.wireframe===!0){if(Be=xe.getWireframeAttribute(se),Be===void 0)return;it=2}const rt=se.drawRange,$e=se.attributes.position;let lt=rt.start*it,wt=(rt.start+rt.count)*it;Me!==null&&(lt=Math.max(lt,Me.start*it),wt=Math.min(wt,(Me.start+Me.count)*it)),Be!==null?(lt=Math.max(lt,0),wt=Math.min(wt,Be.count)):$e!=null&&(lt=Math.max(lt,0),wt=Math.min(wt,$e.count));const Tt=wt-lt;if(Tt<0||Tt===1/0)return;bt.setup(G,ae,Oe,se,Be);let Vt,St=Ve;if(Be!==null&&(Vt=_e.get(Be),St=ht,St.setIndex(Vt)),G.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*Ft()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(G.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),Ye.setLineWidth(Ke*Ft()),G.isLineSegments?St.setMode(V.LINES):G.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else G.isPoints?St.setMode(V.POINTS):G.isSprite&&St.setMode(V.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)St.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ke=G._multiDrawStarts,Zt=G._multiDrawCounts,vt=G._multiDrawCount,yn=Be?_e.get(Be).bytesPerElement:1,Oi=qe.get(ae).currentProgram.getUniforms();for(let Fn=0;Fn<vt;Fn++)Oi.setValue(V,"_gl_DrawID",Fn),St.render(Ke[Fn]/yn,Zt[Fn])}else if(G.isInstancedMesh)St.renderInstances(lt,Tt,G.count);else if(se.isInstancedBufferGeometry){const Ke=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Zt=Math.min(se.instanceCount,Ke);St.renderInstances(lt,Tt,Zt)}else St.render(lt,Tt)};function Et(L,j,se){L.transparent===!0&&L.side===Lr&&L.forceSinglePass===!1?(L.side=Zn,L.needsUpdate=!0,xo(L,j,se),L.side=Ms,L.needsUpdate=!0,xo(L,j,se),L.side=Lr):xo(L,j,se)}this.compile=function(L,j,se=null){se===null&&(se=L),x=ft.get(se),x.init(j),T.push(x),se.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),L!==se&&L.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const ae=new Set;return L.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const Oe=Me[Pe];Et(Oe,se,G),ae.add(Oe)}else Et(Me,se,G),ae.add(Me)}),T.pop(),x=null,ae},this.compileAsync=function(L,j,se=null){const ae=this.compile(L,j,se);return new Promise(G=>{function Me(){if(ae.forEach(function(Pe){qe.get(Pe).currentProgram.isReady()&&ae.delete(Pe)}),ae.size===0){G(L);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Vn=null;function On(L){Vn&&Vn(L)}function vo(){hr.stop()}function Vr(){hr.start()}const hr=new iy;hr.setAnimationLoop(On),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(L){Vn=L,fe.setAnimationLoop(L),L===null?hr.stop():hr.start()},fe.addEventListener("sessionstart",vo),fe.addEventListener("sessionend",Vr),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,j,I),x=ft.get(L,T.length),x.init(j),T.push(x),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,he=we.init(this.clippingPlanes,Te),v=ke.get(L,R.length),v.init(),R.push(v),fe.enabled===!0&&fe.isPresenting===!0){const Me=w.xr.getDepthSensingMesh();Me!==null&&pr(Me,j,-1/0,w.sortObjects)}pr(L,j,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(de,ce),_t=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,_t&&Ze.addToRenderList(v,L),this.info.render.frame++,he===!0&&we.beginShadows();const se=x.state.shadowsArray;He.render(se,L,j),he===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=v.opaque,G=v.transmissive;if(x.setupLights(),j.isArrayCamera){const Me=j.cameras;if(G.length>0)for(let Pe=0,Oe=Me.length;Pe<Oe;Pe++){const Be=Me[Pe];Ps(ae,G,L,Be)}_t&&Ze.render(L);for(let Pe=0,Oe=Me.length;Pe<Oe;Pe++){const Be=Me[Pe];bs(v,L,Be,Be.viewport)}}else G.length>0&&Ps(ae,G,L,j),_t&&Ze.render(L),bs(v,L,j);I!==null&&(O.updateMultisampleRenderTarget(I),O.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(w,L,j),bt.resetDefaultState(),C=-1,b=null,T.pop(),T.length>0?(x=T[T.length-1],he===!0&&we.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function pr(L,j,se,ae){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||$.intersectsSprite(L)){ae&&et.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ae);const Pe=me.update(L),Oe=L.material;Oe.visible&&v.push(L,Pe,Oe,se,et.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||$.intersectsObject(L))){const Pe=me.update(L),Oe=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),et.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),et.copy(Pe.boundingSphere.center)),et.applyMatrix4(L.matrixWorld).applyMatrix4(Ae)),Array.isArray(Oe)){const Be=Pe.groups;for(let it=0,rt=Be.length;it<rt;it++){const $e=Be[it],lt=Oe[$e.materialIndex];lt&&lt.visible&&v.push(L,Pe,lt,se,et.z,$e)}}else Oe.visible&&v.push(L,Pe,Oe,se,et.z,null)}}const Me=L.children;for(let Pe=0,Oe=Me.length;Pe<Oe;Pe++)pr(Me[Pe],j,se,ae)}function bs(L,j,se,ae){const G=L.opaque,Me=L.transmissive,Pe=L.transparent;x.setupLightsView(se),he===!0&&we.setGlobalState(w.clippingPlanes,se),ae&&Ye.viewport(B.copy(ae)),G.length>0&&Gr(G,j,se),Me.length>0&&Gr(Me,j,se),Pe.length>0&&Gr(Pe,j,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ps(L,j,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new mo(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ol:Or,minFilter:so,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Me=x.state.transmissionRenderTarget[ae.id],Pe=ae.viewport||B;Me.setSize(Pe.z,Pe.w);const Oe=w.getRenderTarget();w.setRenderTarget(Me),w.getClearColor(ne),ue=w.getClearAlpha(),ue<1&&w.setClearColor(16777215,.5),w.clear(),_t&&Ze.render(se);const Be=w.toneMapping;w.toneMapping=ys;const it=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),he===!0&&we.setGlobalState(w.clippingPlanes,ae),Gr(L,se,ae),O.updateMultisampleRenderTarget(Me),O.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let $e=0,lt=j.length;$e<lt;$e++){const wt=j[$e],Tt=wt.object,Vt=wt.geometry,St=wt.material,Ke=wt.group;if(St.side===Lr&&Tt.layers.test(ae.layers)){const Zt=St.side;St.side=Zn,St.needsUpdate=!0,$l(Tt,se,ae,Vt,St,Ke),St.side=Zt,St.needsUpdate=!0,rt=!0}}rt===!0&&(O.updateMultisampleRenderTarget(Me),O.updateRenderTargetMipmap(Me))}w.setRenderTarget(Oe),w.setClearColor(ne,ue),it!==void 0&&(ae.viewport=it),w.toneMapping=Be}function Gr(L,j,se){const ae=j.isScene===!0?j.overrideMaterial:null;for(let G=0,Me=L.length;G<Me;G++){const Pe=L[G],Oe=Pe.object,Be=Pe.geometry,it=ae===null?Pe.material:ae,rt=Pe.group;Oe.layers.test(se.layers)&&$l(Oe,j,se,Be,it,rt)}}function $l(L,j,se,ae,G,Me){L.onBeforeRender(w,j,se,ae,G,Me),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),G.onBeforeRender(w,j,se,ae,L,Me),G.transparent===!0&&G.side===Lr&&G.forceSinglePass===!1?(G.side=Zn,G.needsUpdate=!0,w.renderBufferDirect(se,j,ae,G,L,Me),G.side=Ms,G.needsUpdate=!0,w.renderBufferDirect(se,j,ae,G,L,Me),G.side=Lr):w.renderBufferDirect(se,j,ae,G,L,Me),L.onAfterRender(w,j,se,ae,G,Me)}function xo(L,j,se){j.isScene!==!0&&(j=Dt);const ae=qe.get(L),G=x.state.lights,Me=x.state.shadowsArray,Pe=G.state.version,Oe=Xe.getParameters(L,G.state,Me,j,se),Be=Xe.getProgramCacheKey(Oe);let it=ae.programs;ae.environment=L.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(L.isMeshStandardMaterial?ee:P).get(L.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,it===void 0&&(L.addEventListener("dispose",at),it=new Map,ae.programs=it);let rt=it.get(Be);if(rt!==void 0){if(ae.currentProgram===rt&&ae.lightsStateVersion===Pe)return Zi(L,Oe),rt}else Oe.uniforms=Xe.getUniforms(L),L.onBeforeCompile(Oe,w),rt=Xe.acquireProgram(Oe,Be),it.set(Be,rt),ae.uniforms=Oe.uniforms;const $e=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&($e.clippingPlanes=we.uniform),Zi(L,Oe),ae.needsLights=_f(L),ae.lightsStateVersion=Pe,ae.needsLights&&($e.ambientLightColor.value=G.state.ambient,$e.lightProbe.value=G.state.probe,$e.directionalLights.value=G.state.directional,$e.directionalLightShadows.value=G.state.directionalShadow,$e.spotLights.value=G.state.spot,$e.spotLightShadows.value=G.state.spotShadow,$e.rectAreaLights.value=G.state.rectArea,$e.ltc_1.value=G.state.rectAreaLTC1,$e.ltc_2.value=G.state.rectAreaLTC2,$e.pointLights.value=G.state.point,$e.pointLightShadows.value=G.state.pointShadow,$e.hemisphereLights.value=G.state.hemi,$e.directionalShadowMap.value=G.state.directionalShadowMap,$e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,$e.spotShadowMap.value=G.state.spotShadowMap,$e.spotLightMatrix.value=G.state.spotLightMatrix,$e.spotLightMap.value=G.state.spotLightMap,$e.pointShadowMap.value=G.state.pointShadowMap,$e.pointShadowMatrix.value=G.state.pointShadowMatrix),ae.currentProgram=rt,ae.uniformsList=null,rt}function Yl(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=Ic.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function Zi(L,j){const se=qe.get(L);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function Kl(L,j,se,ae,G){j.isScene!==!0&&(j=Dt),O.resetTextureUnits();const Me=j.fog,Pe=ae.isMeshStandardMaterial?j.environment:null,Oe=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:va,Be=(ae.isMeshStandardMaterial?ee:P).get(ae.envMap||Pe),it=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),$e=!!se.morphAttributes.position,lt=!!se.morphAttributes.normal,wt=!!se.morphAttributes.color;let Tt=ys;ae.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=w.toneMapping);const Vt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,St=Vt!==void 0?Vt.length:0,Ke=qe.get(ae),Zt=x.state.lights;if(he===!0&&(Te===!0||L!==b)){const en=L===b&&ae.id===C;we.setState(ae,L,en)}let vt=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Zt.state.version||Ke.outputColorSpace!==Oe||G.isBatchedMesh&&Ke.batching===!1||!G.isBatchedMesh&&Ke.batching===!0||G.isBatchedMesh&&Ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ke.instancing===!1||!G.isInstancedMesh&&Ke.instancing===!0||G.isSkinnedMesh&&Ke.skinning===!1||!G.isSkinnedMesh&&Ke.skinning===!0||G.isInstancedMesh&&Ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ke.instancingMorph===!1&&G.morphTexture!==null||Ke.envMap!==Be||ae.fog===!0&&Ke.fog!==Me||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==rt||Ke.morphTargets!==$e||Ke.morphNormals!==lt||Ke.morphColors!==wt||Ke.toneMapping!==Tt||Ke.morphTargetsCount!==St)&&(vt=!0):(vt=!0,Ke.__version=ae.version);let yn=Ke.currentProgram;vt===!0&&(yn=xo(ae,j,G));let Oi=!1,Fn=!1,Ls=!1;const Nt=yn.getUniforms(),kn=Ke.uniforms;if(Ye.useProgram(yn.program)&&(Oi=!0,Fn=!0,Ls=!0),ae.id!==C&&(C=ae.id,Fn=!0),Oi||b!==L){Ye.buffers.depth.getReversed()?(Se.copy(L.projectionMatrix),zw(Se),Hw(Se),Nt.setValue(V,"projectionMatrix",Se)):Nt.setValue(V,"projectionMatrix",L.projectionMatrix),Nt.setValue(V,"viewMatrix",L.matrixWorldInverse);const Tn=Nt.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,Fe.setFromMatrixPosition(L.matrixWorld)),dt.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Fn=!0,Ls=!0)}if(G.isSkinnedMesh){Nt.setOptional(V,G,"bindMatrix"),Nt.setOptional(V,G,"bindMatrixInverse");const en=G.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Nt.setValue(V,"boneTexture",en.boneTexture,O))}G.isBatchedMesh&&(Nt.setOptional(V,G,"batchingTexture"),Nt.setValue(V,"batchingTexture",G._matricesTexture,O),Nt.setOptional(V,G,"batchingIdTexture"),Nt.setValue(V,"batchingIdTexture",G._indirectTexture,O),Nt.setOptional(V,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(V,"batchingColorTexture",G._colorsTexture,O));const wn=se.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&tt.update(G,se,yn),(Fn||Ke.receiveShadow!==G.receiveShadow)&&(Ke.receiveShadow=G.receiveShadow,Nt.setValue(V,"receiveShadow",G.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(kn.envMap.value=Be,kn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(kn.envMapIntensity.value=j.environmentIntensity),Fn&&(Nt.setValue(V,"toneMappingExposure",w.toneMappingExposure),Ke.needsLights&&Zl(kn,Ls),Me&&ae.fog===!0&&Ce.refreshFogUniforms(kn,Me),Ce.refreshMaterialUniforms(kn,ae,z,re,x.state.transmissionRenderTarget[L.id]),Ic.upload(V,Yl(Ke),kn,O)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ic.upload(V,Yl(Ke),kn,O),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Nt.setValue(V,"center",G.center),Nt.setValue(V,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(V,"normalMatrix",G.normalMatrix),Nt.setValue(V,"modelMatrix",G.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const en=ae.uniformsGroups;for(let Tn=0,Ds=en.length;Tn<Ds;Tn++){const gt=en[Tn];X.update(gt,yn),X.bind(gt,yn)}}return yn}function Zl(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function _f(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,j,se){qe.get(L.texture).__webglTexture=j,qe.get(L.depthTexture).__webglTexture=se;const ae=qe.get(L);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,j){const se=qe.get(L);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,se=0){I=L,U=j,N=se;let ae=!0,G=null,Me=!1,Pe=!1;if(L){const Be=qe.get(L);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(V.FRAMEBUFFER,null),ae=!1;else if(Be.__webglFramebuffer===void 0)O.setupRenderTarget(L);else if(Be.__hasExternalTextures)O.rebindTextures(L,qe.get(L.texture).__webglTexture,qe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const $e=L.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&qe.has($e)&&(L.width!==$e.image.width||L.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(L)}}const it=L.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const rt=qe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?G=rt[j][se]:G=rt[j],Me=!0):L.samples>0&&O.useMultisampledRTT(L)===!1?G=qe.get(L).__webglMultisampledFramebuffer:Array.isArray(rt)?G=rt[se]:G=rt,B.copy(L.viewport),K.copy(L.scissor),q=L.scissorTest}else B.copy(k).multiplyScalar(z).floor(),K.copy(Q).multiplyScalar(z).floor(),q=De;if(Ye.bindFramebuffer(V.FRAMEBUFFER,G)&&ae&&Ye.drawBuffers(L,G),Ye.viewport(B),Ye.scissor(K),Ye.setScissorTest(q),Me){const Be=qe.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,se)}else if(Pe){const Be=qe.get(L.texture),it=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,se||0,it)}C=-1},this.readRenderTargetPixels=function(L,j,se,ae,G,Me,Pe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=qe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){Ye.bindFramebuffer(V.FRAMEBUFFER,Oe);try{const Be=L.texture,it=Be.format,rt=Be.type;if(!dt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-ae&&se>=0&&se<=L.height-G&&V.readPixels(j,se,ae,G,ot.convert(it),ot.convert(rt),Me)}finally{const Be=I!==null?qe.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(L,j,se,ae,G,Me,Pe){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=qe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){const Be=L.texture,it=Be.format,rt=Be.type;if(!dt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=L.width-ae&&se>=0&&se<=L.height-G){Ye.bindFramebuffer(V.FRAMEBUFFER,Oe);const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,Me.byteLength,V.STREAM_READ),V.readPixels(j,se,ae,G,ot.convert(it),ot.convert(rt),0);const lt=I!==null?qe.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,lt);const wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Bw(V,wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Me),V.deleteBuffer($e),V.deleteSync(wt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,j=null,se=0){L.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,L=arguments[1]);const ae=Math.pow(2,-se),G=Math.floor(L.image.width*ae),Me=Math.floor(L.image.height*ae),Pe=j!==null?j.x:0,Oe=j!==null?j.y:0;O.setTexture2D(L,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Pe,Oe,G,Me),Ye.unbindTexture()};const Jl=V.createFramebuffer(),Ql=V.createFramebuffer();this.copyTextureToTexture=function(L,j,se=null,ae=null,G=0,Me=null){L.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,L=arguments[1],j=arguments[2],Me=arguments[3]||0,se=null),Me===null&&(G!==0?(ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=G,G=0):Me=0);let Pe,Oe,Be,it,rt,$e,lt,wt,Tt;const Vt=L.isCompressedTexture?L.mipmaps[Me]:L.image;if(se!==null)Pe=se.max.x-se.min.x,Oe=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,it=se.min.x,rt=se.min.y,$e=se.isBox3?se.min.z:0;else{const wn=Math.pow(2,-G);Pe=Math.floor(Vt.width*wn),Oe=Math.floor(Vt.height*wn),L.isDataArrayTexture?Be=Vt.depth:L.isData3DTexture?Be=Math.floor(Vt.depth*wn):Be=1,it=0,rt=0,$e=0}ae!==null?(lt=ae.x,wt=ae.y,Tt=ae.z):(lt=0,wt=0,Tt=0);const St=ot.convert(j.format),Ke=ot.convert(j.type);let Zt;j.isData3DTexture?(O.setTexture3D(j,0),Zt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),Zt=V.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),Zt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Oi=V.getParameter(V.UNPACK_SKIP_PIXELS),Fn=V.getParameter(V.UNPACK_SKIP_ROWS),Ls=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Vt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,it),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$e);const Nt=L.isDataArrayTexture||L.isData3DTexture,kn=j.isDataArrayTexture||j.isData3DTexture;if(L.isDepthTexture){const wn=qe.get(L),en=qe.get(j),Tn=qe.get(wn.__renderTarget),Ds=qe.get(en.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let gt=0;gt<Be;gt++)Nt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(L).__webglTexture,G,$e+gt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,Me,Tt+gt)),V.blitFramebuffer(it,rt,Pe,Oe,lt,wt,Pe,Oe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(G!==0||L.isRenderTargetTexture||qe.has(L)){const wn=qe.get(L),en=qe.get(j);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,Jl),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ql);for(let Tn=0;Tn<Be;Tn++)Nt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,wn.__webglTexture,G,$e+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wn.__webglTexture,G),kn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,en.__webglTexture,Me,Tt+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,en.__webglTexture,Me),G!==0?V.blitFramebuffer(it,rt,Pe,Oe,lt,wt,Pe,Oe,V.COLOR_BUFFER_BIT,V.NEAREST):kn?V.copyTexSubImage3D(Zt,Me,lt,wt,Tt+Tn,it,rt,Pe,Oe):V.copyTexSubImage2D(Zt,Me,lt,wt,it,rt,Pe,Oe);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kn?L.isDataTexture||L.isData3DTexture?V.texSubImage3D(Zt,Me,lt,wt,Tt,Pe,Oe,Be,St,Ke,Vt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Zt,Me,lt,wt,Tt,Pe,Oe,Be,St,Vt.data):V.texSubImage3D(Zt,Me,lt,wt,Tt,Pe,Oe,Be,St,Ke,Vt):L.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Me,lt,wt,Pe,Oe,St,Ke,Vt.data):L.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Me,lt,wt,Vt.width,Vt.height,St,Vt.data):V.texSubImage2D(V.TEXTURE_2D,Me,lt,wt,Pe,Oe,St,Ke,Vt);V.pixelStorei(V.UNPACK_ROW_LENGTH,vt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Oi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ls),Me===0&&j.generateMipmaps&&V.generateMipmap(Zt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(L,j,se=null,ae=null,G=0){return L.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,L=arguments[2],j=arguments[3],G=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,j,se,ae,G)},this.initRenderTarget=function(L){qe.get(L).__webglFramebuffer===void 0&&O.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?O.setTextureCube(L,0):L.isData3DTexture?O.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?O.setTexture2DArray(L,0):O.setTexture2D(L,0),Ye.unbindTexture()},this.resetState=function(){U=0,N=0,I=null,Ye.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function tP(){const r=le.useRef(null);return le.useEffect(()=>{const e=r.current,t=new cT,n=new Li(55,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=42;const s=new eP({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.setSize(window.innerWidth,window.innerHeight),e.appendChild(s.domElement);const a=620,l=new Float32Array(a*3),c=new Float32Array(a*3),f=new Ct("#67e8f9"),h=new Ct("#34d399");for(let x=0;x<a;x+=1){const R=x*3;l[R]=(Math.random()-.5)*90,l[R+1]=(Math.random()-.5)*58,l[R+2]=(Math.random()-.5)*44;const T=f.clone().lerp(h,Math.random());c[R]=T.r,c[R+1]=T.g,c[R+2]=T.b}const p=new dr;p.setAttribute("position",new Ui(l,3)),p.setAttribute("color",new Ui(c,3));const m=new ty({size:.13,transparent:!0,opacity:.72,vertexColors:!0,depthWrite:!1}),_=new hT(p,m);t.add(_);const y=new ar(new vm(10,3),new gm({color:"#67e8f9",wireframe:!0,transparent:!0,opacity:.12}));y.position.set(20,-6,-16),t.add(y);let M;const S=()=>{_.rotation.y+=9e-4,_.rotation.x+=25e-5,y.rotation.y+=.0022,y.rotation.x+=8e-4,s.render(t,n),M=window.requestAnimationFrame(S)},v=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",v),S(),()=>{window.cancelAnimationFrame(M),window.removeEventListener("resize",v),p.dispose(),m.dispose(),y.geometry.dispose(),y.material.dispose(),s.dispose(),e.removeChild(s.domElement)}},[]),pe.jsx("div",{ref:r,className:"pointer-events-none fixed inset-0 z-0 opacity-90","aria-hidden":"true"})}function br(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ly(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _i={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tl={duration:.5,overwrite:!1,delay:0},ym,Mn,Wt,Di=1e8,Ot=1/Di,Op=Math.PI*2,nP=Op/4,iP=0,uy=Math.sqrt,rP=Math.cos,sP=Math.sin,xn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},kr=function(e){return typeof e=="number"},Sm=function(e){return typeof e>"u"},fr=function(e){return typeof e=="object"},ei=function(e){return e!==!1},Em=function(){return typeof window<"u"},Rc=function(e){return Qt(e)||xn(e)},cy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,oP=/random\([^)]+\)/g,aP=/,\s*/g,wv=/(?:-?\.?\d|\.)+/gi,fy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dy=/[+-]=-?[.\d]+/,lP=/[^,'"\[\]\s]+/gi,uP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$t,nr,Fp,Mm,vi={},qc={},hy,py=function(e){return(qc=ya(e,vi))&&oi},wm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Rl=function(e,t){return!t&&console.warn(e)},my=function(e,t){return e&&(vi[e]=t)&&qc&&(qc[e]=t)||vi},Al=function(){return 0},cP={suppressEvents:!0,isStart:!0,kill:!1},Oc={suppressEvents:!0,kill:!1},fP={suppressEvents:!0},Tm={},Ss=[],kp={},gy,hi={},Nh={},Tv=30,Fc=[],Rm="",Am=function(e){var t=e[0],n,s;if(fr(t)||Qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Fc.length;s--&&!Fc[s].targetTest(t););n=Fc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new ky(e[s],n)))||e.splice(s,1);return e},lo=function(e){return e._gsap||Am(Ni(e))[0]._gsap},_y=function(e,t,n){return(n=e[t])&&Qt(n)?e[t]():Sm(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},ca=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},dP=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},$c=function(){var e=Ss.length,t=Ss.slice(0),n,s;for(kp={},Ss.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Cm=function(e){return!!(e._initted||e._startAt||e.add)},vy=function(e,t,n,s){Ss.length&&!Mn&&$c(),e.render(t,n,!!(Mn&&t<0&&Cm(e))),Ss.length&&!Mn&&$c()},xy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lP).length<2?t:xn(e)?e.trim():e},yy=function(e){return e},xi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hP=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},ya=function(e,t){for(var n in t)e[n]=t[n];return e},Rv=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Yc=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},yl=function(e){var t=e.parent||$t,n=e.keyframes?hP(Un(e.keyframes)):xi;if(ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},pP=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},Sy=function(e,t,n,s,a){var l=e[s],c;if(a)for(c=t[a];l&&l[a]>c;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=l,t.parent=t._dp=e,t},uf=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},Ts=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},uo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},mP=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bp=function(e,t,n,s){return e._startAt&&(Mn?e._startAt.revert(Oc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},gP=function r(e){return!e||e._ts&&r(e.parent)},Av=function(e){return e._repeat?Sa(e._tTime,e=e.duration()+e._rDelay)*e:0},Sa=function(e,t){var n=Math.floor(e=qt(e/t));return e&&n===e?n-1:n},Kc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},cf=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},ff=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),cf(e),n._dirty||uo(n,e)),e},Ey=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Kc(e.rawTime(),t),(!t._dur||Vl(0,t.totalDuration(),n)-t._tTime>Ot)&&t.render(n,!0)),uo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ot}},sr=function(e,t,n,s){return t.parent&&Ts(t),t._start=qt((kr(n)?n:n||e!==$t?bi(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sy(e,t,"_first","_last",e._sort?"_start":0),zp(t)||(e._recent=t),s||Ey(e,t),e._ts<0&&ff(e,e._tTime),e},My=function(e,t){return(vi.ScrollTrigger||wm("scrollTrigger",t))&&vi.ScrollTrigger.create(t,e)},wy=function(e,t,n,s,a){if(Pm(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gy!==pi.frame)return Ss.push(e),e._lazy=[a,s],1},_P=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},zp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vP=function(e,t,n,s){var a=e.ratio,l=t<0||!t&&(!e._start&&_P(e)&&!(!e._initted&&zp(e))||(e._ts<0||e._dp._ts<0)&&!zp(e))?0:1,c=e._rDelay,f=0,h,p,m;if(c&&e._repeat&&(f=Vl(0,e._tDur,t),p=Sa(f,c),e._yoyo&&p&1&&(l=1-l),p!==Sa(e._tTime,c)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||Mn||s||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&wy(e,t,s,n,f))return;for(m=e._zTime,e._zTime=t||(n?Ot:0),n||(n=t&&!m),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,h=e._pt;h;)h.r(l,h.d),h=h._next;t<0&&Bp(e,t,n,!0),e._onUpdate&&!n&&mi(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Ts(e,1),!n&&!Mn&&(mi(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xP=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Ea=function(e,t,n,s){var a=e._repeat,l=qt(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:qt(l*(a+1)+e._rDelay*a):l,c>0&&!s&&ff(e,e._tTime=e._tDur*c),e.parent&&cf(e),n||uo(e.parent,e),e},Cv=function(e){return e instanceof Kn?uo(e):Ea(e,e._dur)},yP={_start:0,endTime:Al,totalDuration:Al},bi=function r(e,t,n){var s=e.labels,a=e._recent||yP,l=e.duration()>=Di?a.endTime(!1):e._dur,c,f,h;return xn(t)&&(isNaN(t)||t in s)?(f=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in s||(s[t]=l),s[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(f=f/100*(Un(n)?n[0]:n).totalDuration()),c>1?r(e,t.substr(0,c-1),n)+f:l+f)):t==null?l:+t},Sl=function(e,t,n){var s=kr(t[1]),a=(s?2:1)+(e<2?0:1),l=t[a],c,f;if(s&&(l.duration=t[1]),l.parent=n,e){for(c=l,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=ei(f.vars.inherit)&&f.parent;l.immediateRender=ei(c.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new un(t[0],l,t[a+1])},Cs=function(e,t){return e||e===0?t(e):t},Vl=function(e,t,n){return n<e?e:n>t?t:n},Dn=function(e,t){return!xn(e)||!(t=uP.exec(e))?"":t[1]},SP=function(e,t,n){return Cs(n,function(s){return Vl(e,t,s)})},Hp=[].slice,Ty=function(e,t){return e&&fr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fr(e[0]))&&!e.nodeType&&e!==nr},EP=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var a;return xn(s)&&!t||Ty(s,1)?(a=n).push.apply(a,Ni(s)):n.push(s)})||n},Ni=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):xn(e)&&!n&&(Fp||!Ma())?Hp.call((t||Mm).querySelectorAll(e),0):Un(e)?EP(e,n):Ty(e)?Hp.call(e,0):e?[e]:[]},Vp=function(e){return e=Ni(e)[0]||Rl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ni(t,n.querySelectorAll?n:n===e?Rl("Invalid scope")||Mm.createElement("div"):e)}},Ry=function(e){return e.sort(function(){return .5-Math.random()})},Ay=function(e){if(Qt(e))return e;var t=fr(e)?e:{each:e},n=co(t.ease),s=t.from||0,a=parseFloat(t.base)||0,l={},c=s>0&&s<1,f=isNaN(s)||c,h=t.axis,p=s,m=s;return xn(s)?p=m={center:.5,edges:.5,end:1}[s]||0:!c&&f&&(p=s[0],m=s[1]),function(_,y,M){var S=(M||t).length,v=l[S],x,R,T,w,D,U,N,I,C;if(!v){if(C=t.grid==="auto"?0:(t.grid||[1,Di])[1],!C){for(N=-Di;N<(N=M[C++].getBoundingClientRect().left)&&C<S;);C<S&&C--}for(v=l[S]=[],x=f?Math.min(C,S)*p-.5:s%C,R=C===Di?0:f?S*m/C-.5:s/C|0,N=0,I=Di,U=0;U<S;U++)T=U%C-x,w=R-(U/C|0),v[U]=D=h?Math.abs(h==="y"?w:T):uy(T*T+w*w),D>N&&(N=D),D<I&&(I=D);s==="random"&&Ry(v),v.max=N-I,v.min=I,v.v=S=(parseFloat(t.amount)||parseFloat(t.each)*(C>S?S-1:h?h==="y"?S/C:C:Math.max(C,S/C))||0)*(s==="edges"?-1:1),v.b=S<0?a-S:a,v.u=Dn(t.amount||t.each)||0,n=n&&S<0?IP(n):n}return S=(v[_]-v.min)/v.max||0,qt(v.b+(n?n(S):S)*v.v)+v.u}},Gp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=qt(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(kr(n)?0:Dn(n))}},Cy=function(e,t){var n=Un(e),s,a;return!n&&fr(e)&&(s=n=e.radius||Di,e.values?(e=Ni(e.values),(a=!kr(e[0]))&&(s*=s)):e=Gp(e.increment)),Cs(t,n?Qt(e)?function(l){return a=e(l),Math.abs(a-l)<=s?a:l}:function(l){for(var c=parseFloat(a?l.x:l),f=parseFloat(a?l.y:0),h=Di,p=0,m=e.length,_,y;m--;)a?(_=e[m].x-c,y=e[m].y-f,_=_*_+y*y):_=Math.abs(e[m]-c),_<h&&(h=_,p=m);return p=!s||h<=s?e[p]:l,a||p===l||kr(l)?p:p+Dn(l)}:Gp(e))},by=function(e,t,n,s){return Cs(Un(e)?!t:n===!0?!!(n=0):!s,function(){return Un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},MP=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(a,l){return l(a)},s)}},wP=function(e,t){return function(n){return e(parseFloat(n))+(t||Dn(n))}},TP=function(e,t,n){return Ly(e,t,0,1,n)},Py=function(e,t,n){return Cs(n,function(s){return e[~~t(s)]})},RP=function r(e,t,n){var s=t-e;return Un(e)?Py(e,r(0,e.length),t):Cs(n,function(a){return(s+(a-e)%s)%s+e})},AP=function r(e,t,n){var s=t-e,a=s*2;return Un(e)?Py(e,r(0,e.length-1),t):Cs(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>s?a-l:l)})},Cl=function(e){return e.replace(oP,function(t){var n=t.indexOf("[")+1,s=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(aP);return by(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},Ly=function(e,t,n,s,a){var l=t-e,c=s-n;return Cs(a,function(f){return n+((f-e)/l*c||0)})},CP=function r(e,t,n,s){var a=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!a){var l=xn(e),c={},f,h,p,m,_;if(n===!0&&(s=1)&&(n=null),l)e={p:e},t={p:t};else if(Un(e)&&!Un(t)){for(p=[],m=e.length,_=m-2,h=1;h<m;h++)p.push(r(e[h-1],e[h]));m--,a=function(M){M*=m;var S=Math.min(_,~~M);return p[S](M-S)},n=t}else s||(e=ya(Un(e)?[]:{},e));if(!p){for(f in t)bm.call(c,e,f,"get",t[f]);a=function(M){return Nm(M,c)||(l?e.p:e)}}}return Cs(n,a)},bv=function(e,t,n){var s=e.labels,a=Di,l,c,f;for(l in s)c=s[l]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=l,a=c);return f},mi=function(e,t,n){var s=e.vars,a=s[t],l=Wt,c=e._ctx,f,h,p;if(a)return f=s[t+"Params"],h=s.callbackScope||e,n&&Ss.length&&$c(),c&&(Wt=c),p=f?a.apply(h,f):a.call(h),Wt=l,p},vl=function(e){return Ts(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&mi(e,"onInterrupt"),e},oa,Dy=[],Ny=function(e){if(e)if(e=!e.name&&e.default||e,Em()||e.headless){var t=e.name,n=Qt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Al,render:Nm,add:bm,kill:XP,modifier:WP,rawVars:0},l={targetTest:0,get:0,getSetter:Dm,aliases:{},register:0};if(Ma(),e!==s){if(hi[t])return;xi(s,xi(Yc(e,a),l)),ya(s.prototype,ya(a,Yc(e,l))),hi[s.prop=t]=s,e.targetTest&&(Fc.push(s),Tm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}my(t,s),e.register&&e.register(oi,s,ni)}else Dy.push(e)},It=255,xl={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},Uh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},Uy=function(e,t,n){var s=e?kr(e)?[e>>16,e>>8&It,e&It]:0:xl.black,a,l,c,f,h,p,m,_,y,M;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xl[e])s=xl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),c=e.charAt(3),e="#"+a+a+l+l+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&It,s&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(s=M=e.match(wv),!t)f=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,l=p<=.5?p*(h+1):p+h-p*h,a=p*2-l,s.length>3&&(s[3]*=1),s[0]=Uh(f+1/3,a,l),s[1]=Uh(f,a,l),s[2]=Uh(f-1/3,a,l);else if(~e.indexOf("="))return s=e.match(fy),n&&s.length<4&&(s[3]=1),s}else s=e.match(wv)||xl.transparent;s=s.map(Number)}return t&&!M&&(a=s[0]/It,l=s[1]/It,c=s[2]/It,m=Math.max(a,l,c),_=Math.min(a,l,c),p=(m+_)/2,m===_?f=h=0:(y=m-_,h=p>.5?y/(2-m-_):y/(m+_),f=m===a?(l-c)/y+(l<c?6:0):m===l?(c-a)/y+2:(a-l)/y+4,f*=60),s[0]=~~(f+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),n&&s.length<4&&(s[3]=1),s},Iy=function(e){var t=[],n=[],s=-1;return e.split(Es).forEach(function(a){var l=a.match(sa)||[];t.push.apply(t,l),n.push(s+=l.length+1)}),t.c=n,t},Pv=function(e,t,n){var s="",a=(e+s).match(Es),l=t?"hsla(":"rgba(",c=0,f,h,p,m;if(!a)return e;if(a=a.map(function(_){return(_=Uy(_,t,1))&&l+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(p=Iy(e),f=n.c,f.join(s)!==p.c.join(s)))for(h=e.replace(Es,"1").split(sa),m=h.length-1;c<m;c++)s+=h[c]+(~f.indexOf(c)?a.shift()||l+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(Es),m=h.length-1;c<m;c++)s+=h[c]+a[c];return s+h[m]},Es=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xl)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),bP=/hsl[a]?\(/,Oy=function(e){var t=e.join(" "),n;if(Es.lastIndex=0,Es.test(t))return n=bP.test(t),e[1]=Pv(e[1],n),e[0]=Pv(e[0],n,Iy(e[1])),!0},bl,pi=(function(){var r=Date.now,e=500,t=33,n=r(),s=n,a=1e3/240,l=a,c=[],f,h,p,m,_,y,M=function S(v){var x=r()-s,R=v===!0,T,w,D,U;if((x>e||x<0)&&(n+=x-t),s+=x,D=s-n,T=D-l,(T>0||R)&&(U=++m.frame,_=D-m.time*1e3,m.time=D=D/1e3,l+=T+(T>=a?4:a-T),w=1),R||(f=h(S)),w)for(y=0;y<c.length;y++)c[y](D,_,U,v)};return m={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(v){return _/(1e3/(v||60))},wake:function(){hy&&(!Fp&&Em()&&(nr=Fp=window,Mm=nr.document||{},vi.gsap=oi,(nr.gsapVersions||(nr.gsapVersions=[])).push(oi.version),py(qc||nr.GreenSockGlobals||!nr.gsap&&nr||{}),Dy.forEach(Ny)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),h=p||function(v){return setTimeout(v,l-m.time*1e3+1|0)},bl=1,M(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),bl=0,h=Al},lagSmoothing:function(v,x){e=v||1/0,t=Math.min(x||33,e)},fps:function(v){a=1e3/(v||240),l=m.time*1e3+a},add:function(v,x,R){var T=x?function(w,D,U,N){v(w,D,U,N),m.remove(T)}:v;return m.remove(v),c[R?"unshift":"push"](T),Ma(),T},remove:function(v,x){~(x=c.indexOf(v))&&c.splice(x,1)&&y>=x&&y--},_listeners:c},m})(),Ma=function(){return!bl&&pi.wake()},yt={},PP=/^[\d.\-M][\d.\-,\s]/,LP=/["']/g,DP=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],a=1,l=n.length,c,f,h;a<l;a++)f=n[a],c=a!==l-1?f.lastIndexOf(","):f.length,h=f.substr(0,c),t[s]=isNaN(h)?h.replace(LP,"").trim():+h,s=f.substr(c+1).trim();return t},NP=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},UP=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[DP(t[1])]:NP(e).split(",").map(xy)):yt._CE&&PP.test(e)?yt._CE("",e):n},IP=function(e){return function(t){return 1-e(1-t)}},co=function(e,t){return e&&(Qt(e)?e:yt[e]||UP(e))||t},_o=function(e,t,n,s){n===void 0&&(n=function(f){return 1-t(1-f)}),s===void 0&&(s=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:s},l;return ti(e,function(c){yt[c]=vi[c]=a,yt[l=c.toLowerCase()]=n;for(var f in a)yt[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=yt[c+"."+f]=a[f]}),a},Fy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ih=function r(e,t,n){var s=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/Op*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*sP((p-l)*a)+1},f=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:Fy(c);return a=Op/a,f.config=function(h,p){return r(e,h,p)},f},Oh=function r(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},s=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Fy(n);return s.config=function(a){return r(e,a)},s};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;_o(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;_o("Elastic",Ih("in"),Ih("out"),Ih());(function(r,e){var t=1/e,n=2*t,s=2.5*t,a=function(c){return c<t?r*c*c:c<n?r*Math.pow(c-1.5/e,2)+.75:c<s?r*(c-=2.25/e)*c+.9375:r*Math.pow(c-2.625/e,2)+.984375};_o("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);_o("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});_o("Circ",function(r){return-(uy(1-r*r)-1)});_o("Sine",function(r){return r===1?1:-rP(r*nP)+1});_o("Back",Oh("in"),Oh("out"),Oh());yt.SteppedEase=yt.steps=vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),a=t?1:0,l=1-Ot;return function(c){return((s*Vl(0,l,c)|0)+a)*n}}};Tl.ease=yt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rm+=r+","+r+"Params,"});var ky=function(e,t){this.id=iP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_y,this.set=t?t.getSetter:Dm},Pl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ea(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),bl||pi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(Ma(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(ff(this,n),!a._dp||a.parent||Ey(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&sr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ot||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vy(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Av(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Av(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,s):this._repeat?Sa(this._tTime,a)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Kc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ot?0:this._rts,this.totalTime(Vl(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),cf(this),mP(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ma(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=qt(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&sr(s,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kc(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=fP);var s=Mn;return Mn=n,Cm(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=s,this},e.globalTime=function(n){for(var s=this,a=arguments.length?n:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Cv(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(bi(this,n),ei(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,ei(s)),this._dur||(this._zTime=-Ot),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=s&&a<this.endTime(!0)-Ot)},e.eventCallback=function(n,s,a){var l=this.vars;return arguments.length>1?(s?(l[n]=s,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=s)):delete l[n],this):l[n]},e.then=function(n){var s=this,a=s._prom;return new Promise(function(l){var c=Qt(n)?n:yy,f=function(){var p=s.then;s.then=null,a&&a(),Qt(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),l(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},e.kill=function(){vl(this)},r})();xi(Pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var Kn=(function(r){ly(e,r);function e(n,s){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=ei(n.sortChildren),$t&&sr(n.parent||$t,br(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&My(br(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,l){return Sl(0,arguments,this),this},t.from=function(s,a,l){return Sl(1,arguments,this),this},t.fromTo=function(s,a,l,c){return Sl(2,arguments,this),this},t.set=function(s,a,l){return a.duration=0,a.parent=this,yl(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new un(s,a,bi(this,l),1),this},t.call=function(s,a,l){return sr(this,un.delayedCall(0,s,a),l)},t.staggerTo=function(s,a,l,c,f,h,p){return l.duration=a,l.stagger=l.stagger||c,l.onComplete=h,l.onCompleteParams=p,l.parent=this,new un(s,l,bi(this,f)),this},t.staggerFrom=function(s,a,l,c,f,h,p){return l.runBackwards=1,yl(l).immediateRender=ei(l.immediateRender),this.staggerTo(s,a,l,c,f,h,p)},t.staggerFromTo=function(s,a,l,c,f,h,p,m){return c.startAt=l,yl(c).immediateRender=ei(c.immediateRender),this.staggerTo(s,a,c,f,h,p,m)},t.render=function(s,a,l){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:qt(s),m=this._zTime<0!=s<0&&(this._initted||!h),_,y,M,S,v,x,R,T,w,D,U,N;if(this!==$t&&p>f&&s>=0&&(p=f),p!==this._tTime||l||m){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),_=p,w=this._start,T=this._ts,x=!T,m&&(h||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(U=this._yoyo,v=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(v*100+s,a,l);if(_=qt(p%v),p===f?(S=this._repeat,_=h):(D=qt(p/v),S=~~D,S&&S===D&&(_=h,S--),_>h&&(_=h)),D=Sa(this._tTime,v),!c&&this._tTime&&D!==S&&this._tTime-D*v-this._dur<=0&&(D=S),U&&S&1&&(_=h-_,N=1),S!==D&&!this._lock){var I=U&&D&1,C=I===(U&&S&1);if(S<D&&(I=!I),c=I?0:p%h?h:p,this._lock=1,this.render(c||(N?0:qt(S*v)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,D=S),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,C&&(this._lock=2,c=I?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=xP(this,qt(c),qt(_)),R&&(p-=_-(_=R._start))),this._tTime=p,this._time=_,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&h&&!a&&!D&&(mi(this,"onStart"),this._tTime!==p))return this;if(_>=c&&s>=0)for(y=this._first;y;){if(M=y._next,(y._act||_>=y._start)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,a,l);if(y.render(y._ts>0?(_-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(_-y._start)*y._ts,a,l),_!==this._time||!this._ts&&!x){R=0,M&&(p+=this._zTime=-Ot);break}}y=M}else{y=this._last;for(var b=s<0?s:_;y;){if(M=y._prev,(y._act||b<=y._end)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,a,l);if(y.render(y._ts>0?(b-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(b-y._start)*y._ts,a,l||Mn&&Cm(y)),_!==this._time||!this._ts&&!x){R=0,M&&(p+=this._zTime=b?-Ot:Ot);break}}y=M}}if(R&&!a&&(this.pause(),R.render(_>=c?0:-Ot)._zTime=_>=c?1:-1,this._ts))return this._start=w,cf(this),this.render(s,a,l);this._onUpdate&&!a&&mi(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(w===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&Ts(this,1),!a&&!(s<0&&!c)&&(p||c||!f)&&(mi(this,p===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var l=this;if(kr(a)||(a=bi(this,a,s)),!(s instanceof Pl)){if(Un(s))return s.forEach(function(c){return l.add(c,a)}),this;if(xn(s))return this.addLabel(s,a);if(Qt(s))s=un.delayedCall(0,s);else return this}return this!==s?sr(this,s,a):this},t.getChildren=function(s,a,l,c){s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=-Di);for(var f=[],h=this._first;h;)h._start>=c&&(h instanceof un?a&&f.push(h):(l&&f.push(h),s&&f.push.apply(f,h.getChildren(!0,a,l)))),h=h._next;return f},t.getById=function(s){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===s)return a[l]},t.remove=function(s){return xn(s)?this.removeLabel(s):Qt(s)?this.killTweensOf(s):(s.parent===this&&uf(this,s),s===this._recent&&(this._recent=this._last),uo(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(pi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=bi(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,l){var c=un.delayedCall(0,a||Al,l);return c.data="isPause",this._hasPause=1,sr(this,c,bi(this,s))},t.removePause=function(s){var a=this._first;for(s=bi(this,s);a;)a._start===s&&a.data==="isPause"&&Ts(a),a=a._next},t.killTweensOf=function(s,a,l){for(var c=this.getTweensOf(s,l),f=c.length;f--;)gs!==c[f]&&c[f].kill(s,a);return this},t.getTweensOf=function(s,a){for(var l=[],c=Ni(s),f=this._first,h=kr(a),p;f;)f instanceof un?dP(f._targets,c)&&(h?(!gs||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&l.push(f):(p=f.getTweensOf(c,a)).length&&l.push.apply(l,p),f=f._next;return l},t.tweenTo=function(s,a){a=a||{};var l=this,c=bi(l,s),f=a,h=f.startAt,p=f.onStart,m=f.onStartParams,_=f.immediateRender,y,M=un.to(l,xi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale())||Ot,onStart:function(){if(l.pause(),!y){var v=a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale());M._dur!==v&&Ea(M,v,0,1).render(M._time,!0,!0),y=1}p&&p.apply(M,m||[])}},a));return _?M.render(0):M},t.tweenFromTo=function(s,a,l){return this.tweenTo(a,xi({startAt:{time:bi(this,s)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),bv(this,bi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),bv(this,bi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(s,a,l){l===void 0&&(l=0);var c=this._first,f=this.labels,h;for(s=qt(s);c;)c._start>=l&&(c._start+=s,c._end+=s),c=c._next;if(a)for(h in f)f[h]>=l&&(f[h]+=s);return uo(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),uo(this)},t.totalDuration=function(s){var a=0,l=this,c=l._last,f=Di,h,p,m;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-s:s));if(l._dirty){for(m=l.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&l._sort&&c._ts&&!l._lock?(l._lock=1,sr(l,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!m&&!l._dp||m&&m.smoothChildTiming)&&(l._start+=qt(p/l._ts),l._time-=p,l._tTime-=p),l.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=h;Ea(l,l===$t&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(s){if($t._ts&&(vy($t,Kc(s,$t)),gy=pi.frame),pi.frame>=Tv){Tv+=_i.autoSleep||120;var a=$t._first;if((!a||!a._ts)&&_i.autoSleep&&pi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||pi.sleep()}}},e})(Pl);xi(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var OP=function(e,t,n,s,a,l,c){var f=new ni(this._pt,e,t,0,1,Wy,null,a),h=0,p=0,m,_,y,M,S,v,x,R;for(f.b=n,f.e=s,n+="",s+="",(x=~s.indexOf("random("))&&(s=Cl(s)),l&&(R=[n,s],l(R,e,t),n=R[0],s=R[1]),_=n.match(Dh)||[];m=Dh.exec(s);)M=m[0],S=s.substring(h,m.index),y?y=(y+1)%5:S.substr(-5)==="rgba("&&(y=1),M!==_[p++]&&(v=parseFloat(_[p-1])||0,f._pt={_next:f._pt,p:S||p===1?S:",",s:v,c:M.charAt(1)==="="?ca(v,M)-v:parseFloat(M)-v,m:y&&y<4?Math.round:0},h=Dh.lastIndex);return f.c=h<s.length?s.substring(h,s.length):"",f.fp=c,(dy.test(s)||x)&&(f.e=0),this._pt=f,f},bm=function(e,t,n,s,a,l,c,f,h,p){Qt(s)&&(s=s(a||0,e,l));var m=e[t],_=n!=="get"?n:Qt(m)?h?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,y=Qt(m)?h?HP:Vy:Lm,M;if(xn(s)&&(~s.indexOf("random(")&&(s=Cl(s)),s.charAt(1)==="="&&(M=ca(_,s)+(Dn(_)||0),(M||M===0)&&(s=M))),!p||_!==s||Wp)return!isNaN(_*s)&&s!==""?(M=new ni(this._pt,e,t,+_||0,s-(_||0),typeof m=="boolean"?GP:Gy,0,y),h&&(M.fp=h),c&&M.modifier(c,this,e),this._pt=M):(!m&&!(t in e)&&wm(t,s),OP.call(this,e,t,_,s,y,f||_i.stringFilter,h))},FP=function(e,t,n,s,a){if(Qt(e)&&(e=El(e,a,t,n,s)),!fr(e)||e.style&&e.nodeType||Un(e)||cy(e))return xn(e)?El(e,a,t,n,s):e;var l={},c;for(c in e)l[c]=El(e[c],a,t,n,s);return l},By=function(e,t,n,s,a,l){var c,f,h,p;if(hi[e]&&(c=new hi[e]).init(a,c.rawVars?t[e]:FP(t[e],s,a,l,n),n,s,l)!==!1&&(n._pt=f=new ni(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==oa))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=f;return c},gs,Wp,Pm=function r(e,t,n){var s=e.vars,a=s.ease,l=s.startAt,c=s.immediateRender,f=s.lazy,h=s.onUpdate,p=s.runBackwards,m=s.yoyoEase,_=s.keyframes,y=s.autoRevert,M=e._dur,S=e._startAt,v=e._targets,x=e.parent,R=x&&x.data==="nested"?x.vars.targets:v,T=e._overwrite==="auto"&&!ym,w=e.timeline,D=s.easeReverse||m,U,N,I,C,b,B,K,q,ne,ue,Z,re,z;if(w&&(!_||!a)&&(a="none"),e._ease=co(a,Tl.ease),e._rEase=D&&(co(D)||e._ease),e._from=!w&&!!s.runBackwards,e._from&&(e.ratio=1),!w||_&&!s.stagger){if(q=v[0]?lo(v[0]).harness:0,re=q&&s[q.prop],U=Yc(s,Tm),S&&(S._zTime<0&&S.progress(1),t<0&&p&&c&&!y?S.render(-1,!0):S.revert(p&&M?Oc:cP),S._lazy=0),l){if(Ts(e._startAt=un.set(v,xi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!S&&ei(f),startAt:null,delay:0,onUpdate:h&&function(){return mi(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!c&&!y)&&e._startAt.revert(Oc),c&&M&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&M&&!S){if(t&&(c=!1),I=xi({overwrite:!1,data:"isFromStart",lazy:c&&!S&&ei(f),immediateRender:c,stagger:0,parent:x},U),re&&(I[q.prop]=re),Ts(e._startAt=un.set(v,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Oc):e._startAt.render(-1,!0)),e._zTime=t,!c)r(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,f=M&&ei(f)||f&&!M,N=0;N<v.length;N++){if(b=v[N],K=b._gsap||Am(v)[N]._gsap,e._ptLookup[N]=ue={},kp[K.id]&&Ss.length&&$c(),Z=R===v?N:R.indexOf(b),q&&(ne=new q).init(b,re||U,e,Z,R)!==!1&&(e._pt=C=new ni(e._pt,b,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(de){ue[de]=C}),ne.priority&&(B=1)),!q||re)for(I in U)hi[I]&&(ne=By(I,U,e,Z,b,R))?ne.priority&&(B=1):ue[I]=C=bm.call(e,b,I,"get",U[I],Z,R,0,s.stringFilter);e._op&&e._op[N]&&e.kill(b,e._op[N]),T&&e._pt&&(gs=e,$t.killTweensOf(b,ue,e.globalTime(t)),z=!e.parent,gs=0),e._pt&&f&&(kp[K.id]=1)}B&&Xy(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!z,_&&t<=0&&w.render(Di,!0,!0)},kP=function(e,t,n,s,a,l,c,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,_,y;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,y=e._targets.length;y--;){if(p=_[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Wp=1,e.vars[t]="+=0",Pm(e,c),Wp=0,f?Rl(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(y=h.length;y--;)m=h[y],p=m._pt||m,p.s=(s||s===0)&&!a?s:p.s+(s||0)+l*p.c,p.c=n-p.s,m.e&&(m.e=nn(n)+Dn(m.e)),m.b&&(m.b=p.s+Dn(m.b))},BP=function(e,t){var n=e[0]?lo(e[0]).harness:0,s=n&&n.aliases,a,l,c,f;if(!s)return t;a=ya({},t);for(l in s)if(l in a)for(f=s[l].split(","),c=f.length;c--;)a[f[c]]=a[l];return a},zP=function(e,t,n,s){var a=t.ease||s||"power1.inOut",l,c;if(Un(t))c=n[e]||(n[e]=[]),t.forEach(function(f,h){return c.push({t:h/(t.length-1)*100,v:f,e:a})});else for(l in t)c=n[l]||(n[l]=[]),l==="ease"||c.push({t:parseFloat(e),v:t[l],e:a})},El=function(e,t,n,s,a){return Qt(e)?e.call(t,n,s,a):xn(e)&&~e.indexOf("random(")?Cl(e):e},zy=Rm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hy={};ti(zy+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hy[r]=1});var un=(function(r){ly(e,r);function e(n,s,a,l){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=r.call(this,l?s:yl(s))||this;var f=c.vars,h=f.duration,p=f.delay,m=f.immediateRender,_=f.stagger,y=f.overwrite,M=f.keyframes,S=f.defaults,v=f.scrollTrigger,x=s.parent||$t,R=(Un(n)||cy(n)?kr(n[0]):"length"in s)?[n]:Ni(n),T,w,D,U,N,I,C,b;if(c._targets=R.length?Am(R):Rl("GSAP target "+n+" not found. https://gsap.com",!_i.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,M||_||Rc(h)||Rc(p)){s=c.vars;var B=s.easeReverse||s.yoyoEase;if(T=c.timeline=new Kn({data:"nested",defaults:S||{},targets:x&&x.data==="nested"?x.vars.targets:R}),T.kill(),T.parent=T._dp=br(c),T._start=0,_||Rc(h)||Rc(p)){if(U=R.length,C=_&&Ay(_),fr(_))for(N in _)~zy.indexOf(N)&&(b||(b={}),b[N]=_[N]);for(w=0;w<U;w++)D=Yc(s,Hy),D.stagger=0,B&&(D.easeReverse=B),b&&ya(D,b),I=R[w],D.duration=+El(h,br(c),w,I,R),D.delay=(+El(p,br(c),w,I,R)||0)-c._delay,!_&&U===1&&D.delay&&(c._delay=p=D.delay,c._start+=p,D.delay=0),T.to(I,D,C?C(w,I,R):0),T._ease=yt.none;T.duration()?h=p=0:c.timeline=0}else if(M){yl(xi(T.vars.defaults,{ease:"none"})),T._ease=co(M.ease||s.ease||"none");var K=0,q,ne,ue;if(Un(M))M.forEach(function(Z){return T.to(R,Z,">")}),T.duration();else{D={};for(N in M)N==="ease"||N==="easeEach"||zP(N,M[N],D,M.easeEach);for(N in D)for(q=D[N].sort(function(Z,re){return Z.t-re.t}),K=0,w=0;w<q.length;w++)ne=q[w],ue={ease:ne.e,duration:(ne.t-(w?q[w-1].t:0))/100*h},ue[N]=ne.v,T.to(R,ue,K),K+=ue.duration;T.duration()<h&&T.to({},{duration:h-T.duration()})}}h||c.duration(h=T.duration())}else c.timeline=0;return y===!0&&!ym&&(gs=br(c),$t.killTweensOf(R),gs=0),sr(x,br(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(m||!h&&!M&&c._start===qt(x._time)&&ei(m)&&gP(br(c))&&x.data!=="nested")&&(c._tTime=-Ot,c.render(Math.max(0,-p)||0)),v&&My(br(c),v),c}var t=e.prototype;return t.render=function(s,a,l){var c=this._time,f=this._tDur,h=this._dur,p=s<0,m=s>f-Ot&&!p?f:s<Ot?0:s,_,y,M,S,v,x,R,T;if(!h)vP(this,s,a,l);else if(m!==this._tTime||!s||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=m,T=this.timeline,this._repeat){if(S=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(S*100+s,a,l);if(_=qt(m%S),m===f?(M=this._repeat,_=h):(v=qt(m/S),M=~~v,M&&M===v?(_=h,M--):_>h&&(_=h)),x=this._yoyo&&M&1,x&&(_=h-_),v=Sa(this._tTime,S),_===c&&!l&&this._initted&&M===v)return this._tTime=m,this;M!==v&&this.vars.repeatRefresh&&!x&&!this._lock&&_!==S&&this._initted&&(this._lock=l=1,this.render(qt(S*M),!0).invalidate()._lock=0)}if(!this._initted){if(wy(this,p?s:_,l,a,m))return this._tTime=0,this;if(c!==this._time&&!(l&&this.vars.repeatRefresh&&M!==v))return this;if(h!==this._dur)return this.render(s,a,l)}if(this._rEase){var w=_<c;if(w!==this._inv){var D=w?c:h-c;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=D?(w?-1:1)/D:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=R=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=R=this._ease(_/h);if(this._from&&(this.ratio=R=1-R),this._tTime=m,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&m&&!a&&!v&&(mi(this,"onStart"),this._tTime!==m))return this;for(y=this._pt;y;)y.r(R,y.d),y=y._next;T&&T.render(s<0?s:T._dur*T._ease(_/this._dur),a,l)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&Bp(this,s,a,l),mi(this,"onUpdate")),this._repeat&&M!==v&&this.vars.onRepeat&&!a&&this.parent&&mi(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&Bp(this,s,!0,!0),(s||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Ts(this,1),!a&&!(p&&!c)&&(m||c||x)&&(mi(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,l,c,f){bl||pi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Pm(this,h),p=this._ease(h/this._dur),kP(this,s,a,l,c,p,h,f)?this.resetTo(s,a,l,c,1):(ff(this,0),this.parent||Sy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?vl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,gs&&gs.vars.overwrite!==!0)._first||vl(this),this.parent&&l!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/l,0,1),this}var c=this._targets,f=s?Ni(s):c,h=this._ptLookup,p=this._pt,m,_,y,M,S,v,x;if((!a||a==="all")&&pP(c,f))return a==="all"&&(this._pt=0),vl(this);for(m=this._op=this._op||[],a!=="all"&&(xn(a)&&(S={},ti(a,function(R){return S[R]=1}),a=S),a=BP(c,a)),x=c.length;x--;)if(~f.indexOf(c[x])){_=h[x],a==="all"?(m[x]=a,M=_,y={}):(y=m[x]=m[x]||{},M=a);for(S in M)v=_&&_[S],v&&((!("kill"in v.d)||v.d.kill(S)===!0)&&uf(this,v,"_pt"),delete _[S]),y!=="all"&&(y[S]=1)}return this._initted&&!this._pt&&p&&vl(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return Sl(1,arguments)},e.delayedCall=function(s,a,l,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:c})},e.fromTo=function(s,a,l){return Sl(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,l){return $t.killTweensOf(s,a,l)},e})(Pl);xi(un.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(r){un[r]=function(){var e=new Kn,t=Hp.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Lm=function(e,t,n){return e[t]=n},Vy=function(e,t,n){return e[t](n)},HP=function(e,t,n,s){return e[t](s.fp,n)},VP=function(e,t,n){return e.setAttribute(t,n)},Dm=function(e,t){return Qt(e[t])?Vy:Sm(e[t])&&e.setAttribute?VP:Lm},Gy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},GP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Wy=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Nm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},WP=function(e,t,n,s){for(var a=this._pt,l;a;)l=a._next,a.p===s&&a.modifier(e,t,n),a=l},XP=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?uf(this,t,"_pt"):t.dep||(n=1),t=s;return!n},jP=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},Xy=function(e){for(var t=e._pt,n,s,a,l;t;){for(n=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:l)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:l=t,t=n}e._pt=a},ni=(function(){function r(t,n,s,a,l,c,f,h,p){this.t=n,this.s=a,this.c=l,this.p=s,this.r=c||Gy,this.d=f||this,this.set=h||Lm,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,s,a){this.mSet=this.mSet||this.set,this.set=jP,this.m=n,this.mt=a,this.tween=s},r})();ti(Rm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Tm[r]=1});vi.TweenMax=vi.TweenLite=un;vi.TimelineLite=vi.TimelineMax=Kn;$t=new Kn({sortChildren:!1,defaults:Tl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_i.stringFilter=Oy;var fo=[],kc={},qP=[],Lv=0,$P=0,Fh=function(e){return(kc[e]||qP).map(function(t){return t()})},Xp=function(){var e=Date.now(),t=[];e-Lv>2&&(Fh("matchMediaInit"),fo.forEach(function(n){var s=n.queries,a=n.conditions,l,c,f,h;for(c in s)l=nr.matchMedia(s[c]).matches,l&&(f=1),l!==a[c]&&(a[c]=l,h=1);h&&(n.revert(),f&&t.push(n))}),Fh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Lv=e,Fh("matchMedia"))},jy=(function(){function r(t,n){this.selector=n&&Vp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$P++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,s,a){Qt(n)&&(a=s,s=n,n=Qt);var l=this,c=function(){var h=Wt,p=l.selector,m;return h&&h!==l&&h.data.push(l),a&&(l.selector=Vp(a)),Wt=l,m=s.apply(l,arguments),Qt(m)&&l._r.push(m),Wt=h,l.selector=p,l.isReverted=!1,m};return l.last=c,n===Qt?c(l,function(f){return l.add(null,f)}):n?l[n]=c:c},e.ignore=function(n){var s=Wt;Wt=null,n(this),Wt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof r?n.push.apply(n,s.getTweens()):s instanceof un&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var a=this;if(n?(function(){for(var c=a.getTweens(),f=a.data.length,h;f--;)h=a.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)h=a.data[f],h instanceof Kn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof un)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var l=fo.length;l--;)fo[l].id===this.id&&fo.splice(l,1)},e.revert=function(n){this.kill(n||{})},r})(),YP=(function(){function r(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=r.prototype;return e.add=function(n,s,a){fr(n)||(n={matches:n});var l=new jy(0,a||this.scope),c=l.conditions={},f,h,p;Wt&&!l.selector&&(l.selector=Wt.selector),this.contexts.push(l),s=l.add("onMatch",s),l.queries=n;for(h in n)h==="all"?p=1:(f=nr.matchMedia(n[h]),f&&(fo.indexOf(l)<0&&fo.push(l),(c[h]=f.matches)&&(p=1),f.addListener?f.addListener(Xp):f.addEventListener("change",Xp)));return p&&s(l,function(m){return l.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},r})(),Zc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Ny(s)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,t){return $t.getTweensOf(e,t)},getProperty:function(e,t,n,s){xn(e)&&(e=Ni(e)[0]);var a=lo(e||{}).get,l=n?yy:xy;return n==="native"&&(n=""),e&&(t?l((hi[t]&&hi[t].get||a)(e,t,n,s)):function(c,f,h){return l((hi[c]&&hi[c].get||a)(e,c,f,h))})},quickSetter:function(e,t,n){if(e=Ni(e),e.length>1){var s=e.map(function(p){return oi.quickSetter(p,t,n)}),a=s.length;return function(p){for(var m=a;m--;)s[m](p)}}e=e[0]||{};var l=hi[t],c=lo(e),f=c.harness&&(c.harness.aliases||{})[t]||t,h=l?function(p){var m=new l;oa._pt=0,m.init(e,n?p+n:p,oa,0,[e]),m.render(1,m),oa._pt&&Nm(1,oa)}:c.set(e,f);return l?h:function(p){return h(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var s,a=oi.to(e,xi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),l=function(f,h,p){return a.resetTo(t,f,h,p)};return l.tween=a,l},isTweening:function(e){return $t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=co(e.ease,Tl.ease)),Rv(Tl,e||{})},config:function(e){return Rv(_i,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,a=e.defaults,l=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!hi[c]&&!vi[c]&&Rl(t+" effect requires "+c+" plugin.")}),Nh[t]=function(c,f,h){return n(Ni(c),xi(f||{},a),h)},l&&(Kn.prototype[t]=function(c,f,h){return this.add(Nh[t](c,fr(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){yt[e]=co(t)},parseEase:function(e,t){return arguments.length?co(e,t):yt},getById:function(e){return $t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Kn(e),s,a;for(n.smoothChildTiming=ei(e.smoothChildTiming),$t.remove(n),n._dp=0,n._time=n._tTime=$t._time,s=$t._first;s;)a=s._next,(t||!(!s._dur&&s instanceof un&&s.vars.onComplete===s._targets[0]))&&sr(n,s,s._start-s._delay),s=a;return sr($t,n,0),n},context:function(e,t){return e?new jy(e,t):Wt},matchMedia:function(e){return new YP(e)},matchMediaRefresh:function(){return fo.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Xp()},addEventListener:function(e,t){var n=kc[e]||(kc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kc[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:RP,wrapYoyo:AP,distribute:Ay,random:by,snap:Cy,normalize:TP,getUnit:Dn,clamp:SP,splitColor:Uy,toArray:Ni,selector:Vp,mapRange:Ly,pipe:MP,unitize:wP,interpolate:CP,shuffle:Ry},install:py,effects:Nh,ticker:pi,updateRoot:Kn.updateRoot,plugins:hi,globalTimeline:$t,core:{PropTween:ni,globals:my,Tween:un,Timeline:Kn,Animation:Pl,getCache:lo,_removeLinkedListItem:uf,reverting:function(){return Mn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return ym=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Zc[r]=un[r]});pi.add(Kn.updateRoot);oa=Zc.to({},{duration:0});var KP=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ZP=function(e,t){var n=e._targets,s,a,l;for(s in t)for(a=n.length;a--;)l=e._ptLookup[a][s],l&&(l=l.d)&&(l._pt&&(l=KP(l,s)),l&&l.modifier&&l.modifier(t[s],e,n[a],s))},kh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,a,l){l._onInit=function(c){var f,h;if(xn(a)&&(f={},ti(a,function(p){return f[p]=1}),a=f),t){f={};for(h in a)f[h]=t(a[h]);a=f}ZP(c,a)}}}},oi=Zc.registerPlugin({name:"attr",init:function(e,t,n,s,a){var l,c,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",c=this.add(e,"setAttribute",(f||0)+"",t[l],s,a,0,0,l),c.op=l,c.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kh("roundProps",Gp),kh("modifiers"),kh("snap",Cy))||Zc;un.version=Kn.version=oi.version="3.15.0";hy=1;Em()&&Ma();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dv,_s,fa,Um,oo,Nv,Im,JP=function(){return typeof window<"u"},Br={},to=180/Math.PI,da=Math.PI/180,na=Math.atan2,Uv=1e8,Om=/([A-Z])/g,QP=/(left|right|width|margin|padding|x)/i,e2=/[\s,\(]\S/,lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},t2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},i2=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r2=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},qy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$y=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},s2=function(e,t,n){return e.style[t]=n},o2=function(e,t,n){return e.style.setProperty(t,n)},a2=function(e,t,n){return e._gsap[t]=n},l2=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},u2=function(e,t,n,s,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},c2=function(e,t,n,s,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},Yt="transform",ii=Yt+"Origin",f2=function r(e,t){var n=this,s=this.target,a=s.style,l=s._gsap;if(e in Br&&a){if(this.tfm=this.tfm||{},e!=="transform")e=lr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Pr(s,c)}):this.tfm[e]=l.x?l[e]:Pr(s,e),e===ii&&(this.tfm.zOrigin=l.zOrigin);else return lr.transform.split(",").forEach(function(c){return r.call(n,c,t)});if(this.props.indexOf(Yt)>=0)return;l.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Yt}(a||t)&&this.props.push(e,t,a[e])},Yy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},d2=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Om,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)s[l]=this.tfm[l];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Im(),(!a||!a.isStart)&&!n[Yt]&&(Yy(n),s.zOrigin&&n[ii]&&(n[ii]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Ky=function(e,t){var n={target:e,props:[],revert:d2,save:f2};return e._gsap||oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},Zy,qp=function(e,t){var n=_s.createElementNS?_s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_s.createElement(e);return n&&n.style?n:_s.createElement(e)},gi=function r(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Om,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&r(e,wa(t)||t,1)||""},Iv="O,Moz,ms,Ms,Webkit".split(","),wa=function(e,t,n){var s=t||oo,a=s.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Iv[l]+e in a););return l<0?null:(l===3?"ms":l>=0?Iv[l]:"")+e},$p=function(){JP()&&window.document&&(Dv=window,_s=Dv.document,fa=_s.documentElement,oo=qp("div")||{style:{}},qp("div"),Yt=wa(Yt),ii=Yt+"Origin",oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zy=!!wa("perspective"),Im=oi.core.reverting,Um=1)},Ov=function(e){var t=e.ownerSVGElement,n=qp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",n.appendChild(s),fa.appendChild(n);try{a=s.getBBox()}catch{}return n.removeChild(s),fa.removeChild(n),a},Fv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Jy=function(e){var t,n;try{t=e.getBBox()}catch{t=Ov(e),n=1}return t&&(t.width||t.height)||n||(t=Ov(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fv(e,["x","cx","x1"])||0,y:+Fv(e,["y","cy","y1"])||0,width:0,height:0}:t},Qy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jy(e))},Rs=function(e,t){if(t){var n=e.style,s;t in Br&&t!==ii&&(t=Yt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(Om,"-$1").toLowerCase())):n.removeAttribute(t)}},vs=function(e,t,n,s,a,l){var c=new ni(e._pt,t,n,0,1,l?$y:qy);return e._pt=c,c.b=s,c.e=a,e._props.push(n),c},kv={deg:1,rad:1,turn:1},h2={grid:1,flex:1},As=function r(e,t,n,s){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",c=oo.style,f=QP.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),m=100,_=s==="px",y=s==="%",M,S,v,x;if(s===l||!a||kv[s]||kv[l])return a;if(l!=="px"&&!_&&(a=r(e,t,n,"px")),x=e.getCTM&&Qy(e),(y||l==="%")&&(Br[t]||~t.indexOf("adius")))return M=x?e.getBBox()[f?"width":"height"]:e[p],nn(y?a/M*m:a/100*M);if(c[f?"width":"height"]=m+(_?l:s),S=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(S=(e.ownerSVGElement||{}).parentNode),(!S||S===_s||!S.appendChild)&&(S=_s.body),v=S._gsap,v&&y&&v.width&&f&&v.time===pi.time&&!v.uncache)return nn(a/v.width*m);if(y&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=m+s,M=e[p],R?e.style[t]=R:Rs(e,t)}else(y||l==="%")&&!h2[gi(S,"display")]&&(c.position=gi(e,"position")),S===e&&(c.position="static"),S.appendChild(oo),M=oo[p],S.removeChild(oo),c.position="absolute";return f&&y&&(v=lo(S),v.time=pi.time,v.width=S[p]),nn(_?M*a/m:M&&a?m/M*a:0)},Pr=function(e,t,n,s){var a;return Um||$p(),t in lr&&t!=="transform"&&(t=lr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Br[t]&&t!=="transform"?(a=Dl(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Qc(gi(e,ii))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=Jc[t]&&Jc[t](e,t,n)||gi(e,t)||_y(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?As(e,t,a,n)+n:a},p2=function(e,t,n,s){if(!n||n==="none"){var a=wa(t,e,1),l=a&&gi(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=gi(e,"borderTopColor"))}var c=new ni(this._pt,e.style,t,0,1,Wy),f=0,h=0,p,m,_,y,M,S,v,x,R,T,w,D;if(c.b=n,c.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=gi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(S=e.style[t],e.style[t]=s,s=gi(e,t)||s,S?e.style[t]=S:Rs(e,t)),p=[n,s],Oy(p),n=p[0],s=p[1],_=n.match(sa)||[],D=s.match(sa)||[],D.length){for(;m=sa.exec(s);)v=m[0],R=s.substring(f,m.index),M?M=(M+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(M=1),v!==(S=_[h++]||"")&&(y=parseFloat(S)||0,w=S.substr((y+"").length),v.charAt(1)==="="&&(v=ca(y,v)+w),x=parseFloat(v),T=v.substr((x+"").length),f=sa.lastIndex-T.length,T||(T=T||_i.units[t]||w,f===s.length&&(s+=T,c.e+=T)),w!==T&&(y=As(e,t,S,T)||0),c._pt={_next:c._pt,p:R||h===1?R:",",s:y,c:x-y,m:M&&M<4||t==="zIndex"?Math.round:0});c.c=f<s.length?s.substring(f,s.length):""}else c.r=t==="display"&&s==="none"?$y:qy;return dy.test(s)&&(c.e=0),this._pt=c,c},Bv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m2=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=Bv[n]||n,t[1]=Bv[s]||s,t.join(" ")},g2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,a=t.u,l=n._gsap,c,f,h;if(a==="all"||a===!0)s.cssText="",f=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Br[c]&&(f=1,c=c==="transformOrigin"?ii:Yt),Rs(n,c);f&&(Rs(n,Yt),l&&(l.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Dl(n,1),l.uncache=1,Yy(s)))}},Jc={clearProps:function(e,t,n,s,a){if(a.data!=="isFromStart"){var l=e._pt=new ni(e._pt,t,n,0,0,g2);return l.u=s,l.pr=-10,l.tween=a,e._props.push(n),1}}},Ll=[1,0,0,1,0,0],eS={},tS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zv=function(e){var t=gi(e,Yt);return tS(t)?Ll:t.substr(7).match(fy).map(nn)},Fm=function(e,t){var n=e._gsap||lo(e),s=e.style,a=zv(e),l,c,f,h;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Ll:a):(a===Ll&&!e.offsetParent&&e!==fa&&!n.svg&&(f=s.display,s.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,fa.appendChild(e)),a=zv(e),f?s.display=f:Rs(e,"display"),h&&(c?l.insertBefore(e,c):l?l.appendChild(e):fa.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Yp=function(e,t,n,s,a,l){var c=e._gsap,f=a||Fm(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,m=c.xOffset||0,_=c.yOffset||0,y=f[0],M=f[1],S=f[2],v=f[3],x=f[4],R=f[5],T=t.split(" "),w=parseFloat(T[0])||0,D=parseFloat(T[1])||0,U,N,I,C;n?f!==Ll&&(N=y*v-M*S)&&(I=w*(v/N)+D*(-S/N)+(S*R-v*x)/N,C=w*(-M/N)+D*(y/N)-(y*R-M*x)/N,w=I,D=C):(U=Jy(e),w=U.x+(~T[0].indexOf("%")?w/100*U.width:w),D=U.y+(~(T[1]||T[0]).indexOf("%")?D/100*U.height:D)),s||s!==!1&&c.smooth?(x=w-h,R=D-p,c.xOffset=m+(x*y+R*S)-x,c.yOffset=_+(x*M+R*v)-R):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=D,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!n,e.style[ii]="0px 0px",l&&(vs(l,c,"xOrigin",h,w),vs(l,c,"yOrigin",p,D),vs(l,c,"xOffset",m,c.xOffset),vs(l,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+D)},Dl=function(e,t){var n=e._gsap||new ky(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,a=n.scaleX<0,l="px",c="deg",f=getComputedStyle(e),h=gi(e,ii)||"0",p,m,_,y,M,S,v,x,R,T,w,D,U,N,I,C,b,B,K,q,ne,ue,Z,re,z,de,ce,k,Q,De,$,he;return p=m=_=S=v=x=R=T=w=0,y=M=1,n.svg=!!(e.getCTM&&Qy(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[Yt]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Yt]!=="none"?f[Yt]:"")),s.scale=s.rotate=s.translate="none"),N=Fm(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),h=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",re=""):re=!t&&e.getAttribute("data-svg-origin"),Yp(e,re||h,!!re||n.originIsAbsolute,n.smooth!==!1,N)),D=n.xOrigin||0,U=n.yOrigin||0,N!==Ll&&(B=N[0],K=N[1],q=N[2],ne=N[3],p=ue=N[4],m=Z=N[5],N.length===6?(y=Math.sqrt(B*B+K*K),M=Math.sqrt(ne*ne+q*q),S=B||K?na(K,B)*to:0,R=q||ne?na(q,ne)*to+S:0,R&&(M*=Math.abs(Math.cos(R*da))),n.svg&&(p-=D-(D*B+U*q),m-=U-(D*K+U*ne))):(he=N[6],De=N[7],ce=N[8],k=N[9],Q=N[10],$=N[11],p=N[12],m=N[13],_=N[14],I=na(he,Q),v=I*to,I&&(C=Math.cos(-I),b=Math.sin(-I),re=ue*C+ce*b,z=Z*C+k*b,de=he*C+Q*b,ce=ue*-b+ce*C,k=Z*-b+k*C,Q=he*-b+Q*C,$=De*-b+$*C,ue=re,Z=z,he=de),I=na(-q,Q),x=I*to,I&&(C=Math.cos(-I),b=Math.sin(-I),re=B*C-ce*b,z=K*C-k*b,de=q*C-Q*b,$=ne*b+$*C,B=re,K=z,q=de),I=na(K,B),S=I*to,I&&(C=Math.cos(I),b=Math.sin(I),re=B*C+K*b,z=ue*C+Z*b,K=K*C-B*b,Z=Z*C-ue*b,B=re,ue=z),v&&Math.abs(v)+Math.abs(S)>359.9&&(v=S=0,x=180-x),y=nn(Math.sqrt(B*B+K*K+q*q)),M=nn(Math.sqrt(Z*Z+he*he)),I=na(ue,Z),R=Math.abs(I)>2e-4?I*to:0,w=$?1/($<0?-$:$):0),n.svg&&(re=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!tS(gi(e,Yt)),re&&e.setAttribute("transform",re))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(y*=-1,R+=S<=0?180:-180,S+=S<=0?180:-180):(M*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=_+l,n.scaleX=nn(y),n.scaleY=nn(M),n.rotation=nn(S)+c,n.rotationX=nn(v)+c,n.rotationY=nn(x)+c,n.skewX=R+c,n.skewY=T+c,n.transformPerspective=w+l,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(s[ii]=Qc(h)),n.xOffset=n.yOffset=0,n.force3D=_i.force3D,n.renderTransform=n.svg?v2:Zy?nS:_2,n.uncache=0,n},Qc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bh=function(e,t,n){var s=Dn(t);return nn(parseFloat(t)+parseFloat(As(e,"x",n+"px",s)))+s},_2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,nS(e,t)},Zs="0deg",ml="0px",Js=") ",nS=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.z,h=n.rotation,p=n.rotationY,m=n.rotationX,_=n.skewX,y=n.skewY,M=n.scaleX,S=n.scaleY,v=n.transformPerspective,x=n.force3D,R=n.target,T=n.zOrigin,w="",D=x==="auto"&&e&&e!==1||x===!0;if(T&&(m!==Zs||p!==Zs)){var U=parseFloat(p)*da,N=Math.sin(U),I=Math.cos(U),C;U=parseFloat(m)*da,C=Math.cos(U),l=Bh(R,l,N*C*-T),c=Bh(R,c,-Math.sin(U)*-T),f=Bh(R,f,I*C*-T+T)}v!==ml&&(w+="perspective("+v+Js),(s||a)&&(w+="translate("+s+"%, "+a+"%) "),(D||l!==ml||c!==ml||f!==ml)&&(w+=f!==ml||D?"translate3d("+l+", "+c+", "+f+") ":"translate("+l+", "+c+Js),h!==Zs&&(w+="rotate("+h+Js),p!==Zs&&(w+="rotateY("+p+Js),m!==Zs&&(w+="rotateX("+m+Js),(_!==Zs||y!==Zs)&&(w+="skew("+_+", "+y+Js),(M!==1||S!==1)&&(w+="scale("+M+", "+S+Js),R.style[Yt]=w||"translate(0, 0)"},v2=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.rotation,h=n.skewX,p=n.skewY,m=n.scaleX,_=n.scaleY,y=n.target,M=n.xOrigin,S=n.yOrigin,v=n.xOffset,x=n.yOffset,R=n.forceCSS,T=parseFloat(l),w=parseFloat(c),D,U,N,I,C;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=da,h*=da,D=Math.cos(f)*m,U=Math.sin(f)*m,N=Math.sin(f-h)*-_,I=Math.cos(f-h)*_,h&&(p*=da,C=Math.tan(h-p),C=Math.sqrt(1+C*C),N*=C,I*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),D*=C,U*=C)),D=nn(D),U=nn(U),N=nn(N),I=nn(I)):(D=m,I=_,U=N=0),(T&&!~(l+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(T=As(y,"x",l,"px"),w=As(y,"y",c,"px")),(M||S||v||x)&&(T=nn(T+M-(M*D+S*N)+v),w=nn(w+S-(M*U+S*I)+x)),(s||a)&&(C=y.getBBox(),T=nn(T+s/100*C.width),w=nn(w+a/100*C.height)),C="matrix("+D+","+U+","+N+","+I+","+T+","+w+")",y.setAttribute("transform",C),R&&(y.style[Yt]=C)},x2=function(e,t,n,s,a){var l=360,c=xn(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?to:1),h=f-s,p=s+h+"deg",m,_;return c&&(m=a.split("_")[1],m==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-l)),m==="cw"&&h<0?h=(h+l*Uv)%l-~~(h/l)*l:m==="ccw"&&h>0&&(h=(h-l*Uv)%l-~~(h/l)*l)),e._pt=_=new ni(e._pt,t,n,s,h,t2),_.e=p,_.u="deg",e._props.push(n),_},Hv=function(e,t){for(var n in t)e[n]=t[n];return e},y2=function(e,t,n){var s=Hv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,c,f,h,p,m,_,y,M;s.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),l[Yt]=t,c=Dl(n,1),Rs(n,Yt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Yt],l[Yt]=t,c=Dl(n,1),l[Yt]=h);for(f in Br)h=s[f],p=c[f],h!==p&&a.indexOf(f)<0&&(y=Dn(h),M=Dn(p),m=y!==M?As(n,f,h,M):parseFloat(h),_=parseFloat(p),e._pt=new ni(e._pt,c,f,m,_-m,jp),e._pt.u=M||0,e._props.push(f));Hv(c,s)};ti("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",s="Bottom",a="Left",l=(e<3?[t,n,s,a]:[t+a,t+n,s+n,s+a]).map(function(c){return e<2?r+c:"border"+c+r});Jc[e>1?"border"+r:r]=function(c,f,h,p,m){var _,y;if(arguments.length<4)return _=l.map(function(M){return Pr(c,M,h)}),y=_.join(" "),y.split(_[0]).length===5?_[0]:y;_=(p+"").split(" "),y={},l.forEach(function(M,S){return y[M]=_[S]=_[S]||_[(S-1)/2|0]}),c.init(f,y,m)}});var iS={name:"css",register:$p,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,a){var l=this._props,c=e.style,f=n.vars.startAt,h,p,m,_,y,M,S,v,x,R,T,w,D,U,N,I,C;Um||$p(),this.styles=this.styles||Ky(e),I=this.styles.props,this.tween=n;for(S in t)if(S!=="autoRound"&&(p=t[S],!(hi[S]&&By(S,t,n,s,e,a)))){if(y=typeof p,M=Jc[S],y==="function"&&(p=p.call(n,s,e,a),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=Cl(p)),M)M(this,e,S,p,n)&&(N=1);else if(S.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(S)+"").trim(),p+="",Es.lastIndex=0,Es.test(h)||(v=Dn(h),x=Dn(p),x?v!==x&&(h=As(e,S,h,x)+x):v&&(p+=v)),this.add(c,"setProperty",h,p,s,a,0,0,S),l.push(S),I.push(S,0,c[S]);else if(y!=="undefined"){if(f&&S in f?(h=typeof f[S]=="function"?f[S].call(n,s,e,a):f[S],xn(h)&&~h.indexOf("random(")&&(h=Cl(h)),Dn(h+"")||h==="auto"||(h+=_i.units[S]||Dn(Pr(e,S))||""),(h+"").charAt(1)==="="&&(h=Pr(e,S))):h=Pr(e,S),_=parseFloat(h),R=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),m=parseFloat(p),S in lr&&(S==="autoAlpha"&&(_===1&&Pr(e,"visibility")==="hidden"&&m&&(_=0),I.push("visibility",0,c.visibility),vs(this,c,"visibility",_?"inherit":"hidden",m?"inherit":"hidden",!m)),S!=="scale"&&S!=="transform"&&(S=lr[S],~S.indexOf(",")&&(S=S.split(",")[0]))),T=S in Br,T){if(this.styles.save(S),C=p,y==="string"&&p.substring(0,6)==="var(--"){if(p=gi(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=p,p=gi(e,"perspective"),b?e.style.perspective=b:Rs(e,"perspective")}m=parseFloat(p)}if(w||(D=e._gsap,D.renderTransform&&!t.parseTransform||Dl(e,t.parseTransform),U=t.smoothOrigin!==!1&&D.smooth,w=this._pt=new ni(this._pt,c,Yt,0,1,D.renderTransform,D,0,-1),w.dep=1),S==="scale")this._pt=new ni(this._pt,D,"scaleY",D.scaleY,(R?ca(D.scaleY,R+m):m)-D.scaleY||0,jp),this._pt.u=0,l.push("scaleY",S),S+="X";else if(S==="transformOrigin"){I.push(ii,0,c[ii]),p=m2(p),D.svg?Yp(e,p,0,U,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==D.zOrigin&&vs(this,D,"zOrigin",D.zOrigin,x),vs(this,c,S,Qc(h),Qc(p)));continue}else if(S==="svgOrigin"){Yp(e,p,1,U,0,this);continue}else if(S in eS){x2(this,D,S,_,R?ca(_,R+p):p);continue}else if(S==="smoothOrigin"){vs(this,D,"smooth",D.smooth,p);continue}else if(S==="force3D"){D[S]=p;continue}else if(S==="transform"){y2(this,p,e);continue}}else S in c||(S=wa(S)||S);if(T||(m||m===0)&&(_||_===0)&&!e2.test(p)&&S in c)v=(h+"").substr((_+"").length),m||(m=0),x=Dn(p)||(S in _i.units?_i.units[S]:v),v!==x&&(_=As(e,S,h,x)),this._pt=new ni(this._pt,T?D:c,S,_,(R?ca(_,R+m):m)-_,!T&&(x==="px"||S==="zIndex")&&t.autoRound!==!1?r2:jp),this._pt.u=x||0,T&&C!==p?(this._pt.b=h,this._pt.e=C,this._pt.r=i2):v!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=n2);else if(S in c)p2.call(this,e,S,h,R?R+p:p);else if(S in e)this.add(e,S,h||e[S],R?R+p:p,s,a);else if(S!=="parseTransform"){wm(S,p);continue}T||(S in c?I.push(S,0,c[S]):typeof e[S]=="function"?I.push(S,2,e[S]()):I.push(S,1,h||e[S])),l.push(S)}}N&&Xy(this)},render:function(e,t){if(t.tween._time||!Im())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pr,aliases:lr,getSetter:function(e,t,n){var s=lr[t];return s&&s.indexOf(",")<0&&(t=s),t in Br&&t!==ii&&(e._gsap.x||Pr(e,"x"))?n&&Nv===n?t==="scale"?l2:a2:(Nv=n||{})&&(t==="scale"?u2:c2):e.style&&!Sm(e.style[t])?s2:~t.indexOf("-")?o2:Dm(e,t)},core:{_removeProperty:Rs,_getMatrix:Fm}};oi.utils.checkPrefix=wa;oi.core.getStyleSaver=Ky;(function(r,e,t,n){var s=ti(r+","+e+","+t,function(a){Br[a]=1});ti(e,function(a){_i.units[a]="deg",eS[a]=1}),lr[s[13]]=r+","+e,ti(n,function(a){var l=a.split(":");lr[l[1]]=s[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){_i.units[r]="px"});oi.registerPlugin(iS);var rr=oi.registerPlugin(iS)||oi;rr.core.Tween;function rS(r,e){return function(){return r.apply(e,arguments)}}const{toString:S2}=Object.prototype,{getPrototypeOf:km}=Object,{iterator:df,toStringTag:sS}=Symbol,hf=(r=>e=>{const t=S2.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ki=r=>(r=r.toLowerCase(),e=>hf(e)===r),pf=r=>e=>typeof e===r,{isArray:Pa}=Array,Ta=pf("undefined");function Gl(r){return r!==null&&!Ta(r)&&r.constructor!==null&&!Ta(r.constructor)&&ri(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const oS=Ki("ArrayBuffer");function E2(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&oS(r.buffer),e}const M2=pf("string"),ri=pf("function"),aS=pf("number"),Wl=r=>r!==null&&typeof r=="object",w2=r=>r===!0||r===!1,Bc=r=>{if(hf(r)!=="object")return!1;const e=km(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(sS in r)&&!(df in r)},T2=r=>{if(!Wl(r)||Gl(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},R2=Ki("Date"),A2=Ki("File"),C2=r=>!!(r&&typeof r.uri<"u"),b2=r=>r&&typeof r.getParts<"u",P2=Ki("Blob"),L2=Ki("FileList"),D2=r=>Wl(r)&&ri(r.pipe);function N2(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Vv=N2(),Gv=typeof Vv.FormData<"u"?Vv.FormData:void 0,U2=r=>{let e;return r&&(Gv&&r instanceof Gv||ri(r.append)&&((e=hf(r))==="formdata"||e==="object"&&ri(r.toString)&&r.toString()==="[object FormData]"))},I2=Ki("URLSearchParams"),[O2,F2,k2,B2]=["ReadableStream","Request","Response","Headers"].map(Ki),z2=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xl(r,e,{allOwnKeys:t=!1}={}){if(r===null||typeof r>"u")return;let n,s;if(typeof r!="object"&&(r=[r]),Pa(r))for(n=0,s=r.length;n<s;n++)e.call(null,r[n],n,r);else{if(Gl(r))return;const a=t?Object.getOwnPropertyNames(r):Object.keys(r),l=a.length;let c;for(n=0;n<l;n++)c=a[n],e.call(null,r[c],c,r)}}function lS(r,e){if(Gl(r))return null;e=e.toLowerCase();const t=Object.keys(r);let n=t.length,s;for(;n-- >0;)if(s=t[n],e===s.toLowerCase())return s;return null}const ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,uS=r=>!Ta(r)&&r!==ao;function Kp(){const{caseless:r,skipUndefined:e}=uS(this)&&this||{},t={},n=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const l=r&&lS(t,a)||a;Bc(t[l])&&Bc(s)?t[l]=Kp(t[l],s):Bc(s)?t[l]=Kp({},s):Pa(s)?t[l]=s.slice():(!e||!Ta(s))&&(t[l]=s)};for(let s=0,a=arguments.length;s<a;s++)arguments[s]&&Xl(arguments[s],n);return t}const H2=(r,e,t,{allOwnKeys:n}={})=>(Xl(e,(s,a)=>{t&&ri(s)?Object.defineProperty(r,a,{value:rS(s,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,a,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),r),V2=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),G2=(r,e,t,n)=>{r.prototype=Object.create(e.prototype,n),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{value:e.prototype}),t&&Object.assign(r.prototype,t)},W2=(r,e,t,n)=>{let s,a,l;const c={};if(e=e||{},r==null)return e;do{for(s=Object.getOwnPropertyNames(r),a=s.length;a-- >0;)l=s[a],(!n||n(l,r,e))&&!c[l]&&(e[l]=r[l],c[l]=!0);r=t!==!1&&km(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e},X2=(r,e,t)=>{r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;const n=r.indexOf(e,t);return n!==-1&&n===t},j2=r=>{if(!r)return null;if(Pa(r))return r;let e=r.length;if(!aS(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=r[e];return t},q2=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&km(Uint8Array)),$2=(r,e)=>{const n=(r&&r[df]).call(r);let s;for(;(s=n.next())&&!s.done;){const a=s.value;e.call(r,a[0],a[1])}},Y2=(r,e)=>{let t;const n=[];for(;(t=r.exec(e))!==null;)n.push(t);return n},K2=Ki("HTMLFormElement"),Z2=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,s){return n.toUpperCase()+s}),Wv=(({hasOwnProperty:r})=>(e,t)=>r.call(e,t))(Object.prototype),J2=Ki("RegExp"),cS=(r,e)=>{const t=Object.getOwnPropertyDescriptors(r),n={};Xl(t,(s,a)=>{let l;(l=e(s,a,r))!==!1&&(n[a]=l||s)}),Object.defineProperties(r,n)},Q2=r=>{cS(r,(e,t)=>{if(ri(r)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=r[t];if(ri(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},eL=(r,e)=>{const t={},n=s=>{s.forEach(a=>{t[a]=!0})};return Pa(r)?n(r):n(String(r).split(e)),t},tL=()=>{},nL=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e;function iL(r){return!!(r&&ri(r.append)&&r[sS]==="FormData"&&r[df])}const rL=r=>{const e=new Array(10),t=(n,s)=>{if(Wl(n)){if(e.indexOf(n)>=0)return;if(Gl(n))return n;if(!("toJSON"in n)){e[s]=n;const a=Pa(n)?[]:{};return Xl(n,(l,c)=>{const f=t(l,s+1);!Ta(f)&&(a[c]=f)}),e[s]=void 0,a}}return n};return t(r,0)},sL=Ki("AsyncFunction"),oL=r=>r&&(Wl(r)||ri(r))&&ri(r.then)&&ri(r.catch),fS=((r,e)=>r?setImmediate:e?((t,n)=>(ao.addEventListener("message",({source:s,data:a})=>{s===ao&&a===t&&n.length&&n.shift()()},!1),s=>{n.push(s),ao.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ri(ao.postMessage)),aL=typeof queueMicrotask<"u"?queueMicrotask.bind(ao):typeof process<"u"&&process.nextTick||fS,lL=r=>r!=null&&ri(r[df]),oe={isArray:Pa,isArrayBuffer:oS,isBuffer:Gl,isFormData:U2,isArrayBufferView:E2,isString:M2,isNumber:aS,isBoolean:w2,isObject:Wl,isPlainObject:Bc,isEmptyObject:T2,isReadableStream:O2,isRequest:F2,isResponse:k2,isHeaders:B2,isUndefined:Ta,isDate:R2,isFile:A2,isReactNativeBlob:C2,isReactNative:b2,isBlob:P2,isRegExp:J2,isFunction:ri,isStream:D2,isURLSearchParams:I2,isTypedArray:q2,isFileList:L2,forEach:Xl,merge:Kp,extend:H2,trim:z2,stripBOM:V2,inherits:G2,toFlatObject:W2,kindOf:hf,kindOfTest:Ki,endsWith:X2,toArray:j2,forEachEntry:$2,matchAll:Y2,isHTMLForm:K2,hasOwnProperty:Wv,hasOwnProp:Wv,reduceDescriptors:cS,freezeMethods:Q2,toObjectSet:eL,toCamelCase:Z2,noop:tL,toFiniteNumber:nL,findKey:lS,global:ao,isContextDefined:uS,isSpecCompliantForm:iL,toJSONObject:rL,isAsyncFn:sL,isThenable:oL,setImmediate:fS,asap:aL,isIterable:lL};let nt=class dS extends Error{static from(e,t,n,s,a,l){const c=new dS(e.message,t||e.code,n,s,a);return c.cause=e,c.name=e.name,e.status!=null&&c.status==null&&(c.status=e.status),l&&Object.assign(c,l),c}constructor(e,t,n,s,a){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),a&&(this.response=a,this.status=a.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:oe.toJSONObject(this.config),code:this.code,status:this.status}}};nt.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";nt.ERR_BAD_OPTION="ERR_BAD_OPTION";nt.ECONNABORTED="ECONNABORTED";nt.ETIMEDOUT="ETIMEDOUT";nt.ERR_NETWORK="ERR_NETWORK";nt.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";nt.ERR_DEPRECATED="ERR_DEPRECATED";nt.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";nt.ERR_BAD_REQUEST="ERR_BAD_REQUEST";nt.ERR_CANCELED="ERR_CANCELED";nt.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";nt.ERR_INVALID_URL="ERR_INVALID_URL";const uL=null;function Zp(r){return oe.isPlainObject(r)||oe.isArray(r)}function hS(r){return oe.endsWith(r,"[]")?r.slice(0,-2):r}function zh(r,e,t){return r?r.concat(e).map(function(s,a){return s=hS(s),!t&&a?"["+s+"]":s}).join(t?".":""):e}function cL(r){return oe.isArray(r)&&!r.some(Zp)}const fL=oe.toFlatObject(oe,{},null,function(e){return/^is[A-Z]/.test(e)});function mf(r,e,t){if(!oe.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,t=oe.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,v){return!oe.isUndefined(v[S])});const n=t.metaTokens,s=t.visitor||p,a=t.dots,l=t.indexes,f=(t.Blob||typeof Blob<"u"&&Blob)&&oe.isSpecCompliantForm(e);if(!oe.isFunction(s))throw new TypeError("visitor must be a function");function h(M){if(M===null)return"";if(oe.isDate(M))return M.toISOString();if(oe.isBoolean(M))return M.toString();if(!f&&oe.isBlob(M))throw new nt("Blob is not supported. Use a Buffer instead.");return oe.isArrayBuffer(M)||oe.isTypedArray(M)?f&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function p(M,S,v){let x=M;if(oe.isReactNative(e)&&oe.isReactNativeBlob(M))return e.append(zh(v,S,a),h(M)),!1;if(M&&!v&&typeof M=="object"){if(oe.endsWith(S,"{}"))S=n?S:S.slice(0,-2),M=JSON.stringify(M);else if(oe.isArray(M)&&cL(M)||(oe.isFileList(M)||oe.endsWith(S,"[]"))&&(x=oe.toArray(M)))return S=hS(S),x.forEach(function(T,w){!(oe.isUndefined(T)||T===null)&&e.append(l===!0?zh([S],w,a):l===null?S:S+"[]",h(T))}),!1}return Zp(M)?!0:(e.append(zh(v,S,a),h(M)),!1)}const m=[],_=Object.assign(fL,{defaultVisitor:p,convertValue:h,isVisitable:Zp});function y(M,S){if(!oe.isUndefined(M)){if(m.indexOf(M)!==-1)throw Error("Circular reference detected in "+S.join("."));m.push(M),oe.forEach(M,function(x,R){(!(oe.isUndefined(x)||x===null)&&s.call(e,x,oe.isString(R)?R.trim():R,S,_))===!0&&y(x,S?S.concat(R):[R])}),m.pop()}}if(!oe.isObject(r))throw new TypeError("data must be an object");return y(r),e}function Xv(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Bm(r,e){this._pairs=[],r&&mf(r,this,e)}const pS=Bm.prototype;pS.append=function(e,t){this._pairs.push([e,t])};pS.toString=function(e){const t=e?function(n){return e.call(this,n,Xv)}:Xv;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function dL(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function mS(r,e,t){if(!e)return r;const n=t&&t.encode||dL,s=oe.isFunction(t)?{serialize:t}:t,a=s&&s.serialize;let l;if(a?l=a(e,s):l=oe.isURLSearchParams(e)?e.toString():new Bm(e,s).toString(n),l){const c=r.indexOf("#");c!==-1&&(r=r.slice(0,c)),r+=(r.indexOf("?")===-1?"?":"&")+l}return r}class jv{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){oe.forEach(this.handlers,function(n){n!==null&&e(n)})}}const zm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},hL=typeof URLSearchParams<"u"?URLSearchParams:Bm,pL=typeof FormData<"u"?FormData:null,mL=typeof Blob<"u"?Blob:null,gL={isBrowser:!0,classes:{URLSearchParams:hL,FormData:pL,Blob:mL},protocols:["http","https","file","blob","url","data"]},Hm=typeof window<"u"&&typeof document<"u",Jp=typeof navigator=="object"&&navigator||void 0,_L=Hm&&(!Jp||["ReactNative","NativeScript","NS"].indexOf(Jp.product)<0),vL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xL=Hm&&window.location.href||"http://localhost",yL=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Hm,hasStandardBrowserEnv:_L,hasStandardBrowserWebWorkerEnv:vL,navigator:Jp,origin:xL},Symbol.toStringTag,{value:"Module"})),Nn={...yL,...gL};function SL(r,e){return mf(r,new Nn.classes.URLSearchParams,{visitor:function(t,n,s,a){return Nn.isNode&&oe.isBuffer(t)?(this.append(n,t.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...e})}function EL(r){return oe.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ML(r){const e={},t=Object.keys(r);let n;const s=t.length;let a;for(n=0;n<s;n++)a=t[n],e[a]=r[a];return e}function gS(r){function e(t,n,s,a){let l=t[a++];if(l==="__proto__")return!0;const c=Number.isFinite(+l),f=a>=t.length;return l=!l&&oe.isArray(s)?s.length:l,f?(oe.hasOwnProp(s,l)?s[l]=[s[l],n]:s[l]=n,!c):((!s[l]||!oe.isObject(s[l]))&&(s[l]=[]),e(t,n,s[l],a)&&oe.isArray(s[l])&&(s[l]=ML(s[l])),!c)}if(oe.isFormData(r)&&oe.isFunction(r.entries)){const t={};return oe.forEachEntry(r,(n,s)=>{e(EL(n),s,t,0)}),t}return null}function wL(r,e,t){if(oe.isString(r))try{return(e||JSON.parse)(r),oe.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}const jl={transitional:zm,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",s=n.indexOf("application/json")>-1,a=oe.isObject(e);if(a&&oe.isHTMLForm(e)&&(e=new FormData(e)),oe.isFormData(e))return s?JSON.stringify(gS(e)):e;if(oe.isArrayBuffer(e)||oe.isBuffer(e)||oe.isStream(e)||oe.isFile(e)||oe.isBlob(e)||oe.isReadableStream(e))return e;if(oe.isArrayBufferView(e))return e.buffer;if(oe.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return SL(e,this.formSerializer).toString();if((c=oe.isFileList(e))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return mf(c?{"files[]":e}:e,f&&new f,this.formSerializer)}}return a||s?(t.setContentType("application/json",!1),wL(e)):e}],transformResponse:[function(e){const t=this.transitional||jl.transitional,n=t&&t.forcedJSONParsing,s=this.responseType==="json";if(oe.isResponse(e)||oe.isReadableStream(e))return e;if(e&&oe.isString(e)&&(n&&!this.responseType||s)){const l=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(c){if(l)throw c.name==="SyntaxError"?nt.from(c,nt.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nn.classes.FormData,Blob:Nn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};oe.forEach(["delete","get","head","post","put","patch"],r=>{jl.headers[r]={}});const TL=oe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),RL=r=>{const e={};let t,n,s;return r&&r.split(`
`).forEach(function(l){s=l.indexOf(":"),t=l.substring(0,s).trim().toLowerCase(),n=l.substring(s+1).trim(),!(!t||e[t]&&TL[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},qv=Symbol("internals"),AL=r=>!/[\r\n]/.test(r);function _S(r,e){if(!(r===!1||r==null)){if(oe.isArray(r)){r.forEach(t=>_S(t,e));return}if(!AL(String(r)))throw new Error(`Invalid character in header content ["${e}"]`)}}function gl(r){return r&&String(r).trim().toLowerCase()}function CL(r){let e=r.length;for(;e>0;){const t=r.charCodeAt(e-1);if(t!==10&&t!==13)break;e-=1}return e===r.length?r:r.slice(0,e)}function zc(r){return r===!1||r==null?r:oe.isArray(r)?r.map(zc):CL(String(r))}function bL(r){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(r);)e[n[1]]=n[2];return e}const PL=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function Hh(r,e,t,n,s){if(oe.isFunction(n))return n.call(this,e,t);if(s&&(e=t),!!oe.isString(e)){if(oe.isString(n))return e.indexOf(n)!==-1;if(oe.isRegExp(n))return n.test(e)}}function LL(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function DL(r,e){const t=oe.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+t,{value:function(s,a,l){return this[n].call(this,e,s,a,l)},configurable:!0})})}let si=class{constructor(e){e&&this.set(e)}set(e,t,n){const s=this;function a(c,f,h){const p=gl(f);if(!p)throw new Error("header name must be a non-empty string");const m=oe.findKey(s,p);(!m||s[m]===void 0||h===!0||h===void 0&&s[m]!==!1)&&(_S(c,f),s[m||f]=zc(c))}const l=(c,f)=>oe.forEach(c,(h,p)=>a(h,p,f));if(oe.isPlainObject(e)||e instanceof this.constructor)l(e,t);else if(oe.isString(e)&&(e=e.trim())&&!PL(e))l(RL(e),t);else if(oe.isObject(e)&&oe.isIterable(e)){let c={},f,h;for(const p of e){if(!oe.isArray(p))throw TypeError("Object iterator must return a key-value pair");c[h=p[0]]=(f=c[h])?oe.isArray(f)?[...f,p[1]]:[f,p[1]]:p[1]}l(c,t)}else e!=null&&a(t,e,n);return this}get(e,t){if(e=gl(e),e){const n=oe.findKey(this,e);if(n){const s=this[n];if(!t)return s;if(t===!0)return bL(s);if(oe.isFunction(t))return t.call(this,s,n);if(oe.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=gl(e),e){const n=oe.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Hh(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let s=!1;function a(l){if(l=gl(l),l){const c=oe.findKey(n,l);c&&(!t||Hh(n,n[c],c,t))&&(delete n[c],s=!0)}}return oe.isArray(e)?e.forEach(a):a(e),s}clear(e){const t=Object.keys(this);let n=t.length,s=!1;for(;n--;){const a=t[n];(!e||Hh(this,this[a],a,e,!0))&&(delete this[a],s=!0)}return s}normalize(e){const t=this,n={};return oe.forEach(this,(s,a)=>{const l=oe.findKey(n,a);if(l){t[l]=zc(s),delete t[a];return}const c=e?LL(a):String(a).trim();c!==a&&delete t[a],t[c]=zc(s),n[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return oe.forEach(this,(n,s)=>{n!=null&&n!==!1&&(t[s]=e&&oe.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(s=>n.set(s)),n}static accessor(e){const n=(this[qv]=this[qv]={accessors:{}}).accessors,s=this.prototype;function a(l){const c=gl(l);n[c]||(DL(s,l),n[c]=!0)}return oe.isArray(e)?e.forEach(a):a(e),this}};si.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);oe.reduceDescriptors(si.prototype,({value:r},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(n){this[t]=n}}});oe.freezeMethods(si);function Vh(r,e){const t=this||jl,n=e||t,s=si.from(n.headers);let a=n.data;return oe.forEach(r,function(c){a=c.call(t,a,s.normalize(),e?e.status:void 0)}),s.normalize(),a}function vS(r){return!!(r&&r.__CANCEL__)}let ql=class extends nt{constructor(e,t,n){super(e??"canceled",nt.ERR_CANCELED,t,n),this.name="CanceledError",this.__CANCEL__=!0}};function xS(r,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?r(t):e(new nt("Request failed with status code "+t.status,[nt.ERR_BAD_REQUEST,nt.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function NL(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function UL(r,e){r=r||10;const t=new Array(r),n=new Array(r);let s=0,a=0,l;return e=e!==void 0?e:1e3,function(f){const h=Date.now(),p=n[a];l||(l=h),t[s]=f,n[s]=h;let m=a,_=0;for(;m!==s;)_+=t[m++],m=m%r;if(s=(s+1)%r,s===a&&(a=(a+1)%r),h-l<e)return;const y=p&&h-p;return y?Math.round(_*1e3/y):void 0}}function IL(r,e){let t=0,n=1e3/e,s,a;const l=(h,p=Date.now())=>{t=p,s=null,a&&(clearTimeout(a),a=null),r(...h)};return[(...h)=>{const p=Date.now(),m=p-t;m>=n?l(h,p):(s=h,a||(a=setTimeout(()=>{a=null,l(s)},n-m)))},()=>s&&l(s)]}const ef=(r,e,t=3)=>{let n=0;const s=UL(50,250);return IL(a=>{const l=a.loaded,c=a.lengthComputable?a.total:void 0,f=l-n,h=s(f),p=l<=c;n=l;const m={loaded:l,total:c,progress:c?l/c:void 0,bytes:f,rate:h||void 0,estimated:h&&c&&p?(c-l)/h:void 0,event:a,lengthComputable:c!=null,[e?"download":"upload"]:!0};r(m)},t)},$v=(r,e)=>{const t=r!=null;return[n=>e[0]({lengthComputable:t,total:r,loaded:n}),e[1]]},Yv=r=>(...e)=>oe.asap(()=>r(...e)),OL=Nn.hasStandardBrowserEnv?((r,e)=>t=>(t=new URL(t,Nn.origin),r.protocol===t.protocol&&r.host===t.host&&(e||r.port===t.port)))(new URL(Nn.origin),Nn.navigator&&/(msie|trident)/i.test(Nn.navigator.userAgent)):()=>!0,FL=Nn.hasStandardBrowserEnv?{write(r,e,t,n,s,a,l){if(typeof document>"u")return;const c=[`${r}=${encodeURIComponent(e)}`];oe.isNumber(t)&&c.push(`expires=${new Date(t).toUTCString()}`),oe.isString(n)&&c.push(`path=${n}`),oe.isString(s)&&c.push(`domain=${s}`),a===!0&&c.push("secure"),oe.isString(l)&&c.push(`SameSite=${l}`),document.cookie=c.join("; ")},read(r){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function kL(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function BL(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function yS(r,e,t){let n=!kL(e);return r&&(n||t==!1)?BL(r,e):e}const Kv=r=>r instanceof si?{...r}:r;function go(r,e){e=e||{};const t={};function n(h,p,m,_){return oe.isPlainObject(h)&&oe.isPlainObject(p)?oe.merge.call({caseless:_},h,p):oe.isPlainObject(p)?oe.merge({},p):oe.isArray(p)?p.slice():p}function s(h,p,m,_){if(oe.isUndefined(p)){if(!oe.isUndefined(h))return n(void 0,h,m,_)}else return n(h,p,m,_)}function a(h,p){if(!oe.isUndefined(p))return n(void 0,p)}function l(h,p){if(oe.isUndefined(p)){if(!oe.isUndefined(h))return n(void 0,h)}else return n(void 0,p)}function c(h,p,m){if(m in e)return n(h,p);if(m in r)return n(void 0,h)}const f={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(h,p,m)=>s(Kv(h),Kv(p),m,!0)};return oe.forEach(Object.keys({...r,...e}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;const m=oe.hasOwnProp(f,p)?f[p]:s,_=m(r[p],e[p],p);oe.isUndefined(_)&&m!==c||(t[p]=_)}),t}const SS=r=>{const e=go({},r);let{data:t,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:a,headers:l,auth:c}=e;if(e.headers=l=si.from(l),e.url=mS(yS(e.baseURL,e.url,e.allowAbsoluteUrls),r.params,r.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),oe.isFormData(t)){if(Nn.hasStandardBrowserEnv||Nn.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(oe.isFunction(t.getHeaders)){const f=t.getHeaders(),h=["content-type","content-length"];Object.entries(f).forEach(([p,m])=>{h.includes(p.toLowerCase())&&l.set(p,m)})}}if(Nn.hasStandardBrowserEnv&&(n&&oe.isFunction(n)&&(n=n(e)),n||n!==!1&&OL(e.url))){const f=s&&a&&FL.read(a);f&&l.set(s,f)}return e},zL=typeof XMLHttpRequest<"u",HL=zL&&function(r){return new Promise(function(t,n){const s=SS(r);let a=s.data;const l=si.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:h}=s,p,m,_,y,M;function S(){y&&y(),M&&M(),s.cancelToken&&s.cancelToken.unsubscribe(p),s.signal&&s.signal.removeEventListener("abort",p)}let v=new XMLHttpRequest;v.open(s.method.toUpperCase(),s.url,!0),v.timeout=s.timeout;function x(){if(!v)return;const T=si.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),D={data:!c||c==="text"||c==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:T,config:r,request:v};xS(function(N){t(N),S()},function(N){n(N),S()},D),v=null}"onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(x)},v.onabort=function(){v&&(n(new nt("Request aborted",nt.ECONNABORTED,r,v)),v=null)},v.onerror=function(w){const D=w&&w.message?w.message:"Network Error",U=new nt(D,nt.ERR_NETWORK,r,v);U.event=w||null,n(U),v=null},v.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const D=s.transitional||zm;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),n(new nt(w,D.clarifyTimeoutError?nt.ETIMEDOUT:nt.ECONNABORTED,r,v)),v=null},a===void 0&&l.setContentType(null),"setRequestHeader"in v&&oe.forEach(l.toJSON(),function(w,D){v.setRequestHeader(D,w)}),oe.isUndefined(s.withCredentials)||(v.withCredentials=!!s.withCredentials),c&&c!=="json"&&(v.responseType=s.responseType),h&&([_,M]=ef(h,!0),v.addEventListener("progress",_)),f&&v.upload&&([m,y]=ef(f),v.upload.addEventListener("progress",m),v.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(p=T=>{v&&(n(!T||T.type?new ql(null,r,v):T),v.abort(),v=null)},s.cancelToken&&s.cancelToken.subscribe(p),s.signal&&(s.signal.aborted?p():s.signal.addEventListener("abort",p)));const R=NL(s.url);if(R&&Nn.protocols.indexOf(R)===-1){n(new nt("Unsupported protocol "+R+":",nt.ERR_BAD_REQUEST,r));return}v.send(a||null)})},VL=(r,e)=>{const{length:t}=r=r?r.filter(Boolean):[];if(e||t){let n=new AbortController,s;const a=function(h){if(!s){s=!0,c();const p=h instanceof Error?h:this.reason;n.abort(p instanceof nt?p:new ql(p instanceof Error?p.message:p))}};let l=e&&setTimeout(()=>{l=null,a(new nt(`timeout of ${e}ms exceeded`,nt.ETIMEDOUT))},e);const c=()=>{r&&(l&&clearTimeout(l),l=null,r.forEach(h=>{h.unsubscribe?h.unsubscribe(a):h.removeEventListener("abort",a)}),r=null)};r.forEach(h=>h.addEventListener("abort",a));const{signal:f}=n;return f.unsubscribe=()=>oe.asap(c),f}},GL=function*(r,e){let t=r.byteLength;if(t<e){yield r;return}let n=0,s;for(;n<t;)s=n+e,yield r.slice(n,s),n=s},WL=async function*(r,e){for await(const t of XL(r))yield*GL(t,e)},XL=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},Zv=(r,e,t,n)=>{const s=WL(r,e);let a=0,l,c=f=>{l||(l=!0,n&&n(f))};return new ReadableStream({async pull(f){try{const{done:h,value:p}=await s.next();if(h){c(),f.close();return}let m=p.byteLength;if(t){let _=a+=m;t(_)}f.enqueue(new Uint8Array(p))}catch(h){throw c(h),h}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Jv=64*1024,{isFunction:Ac}=oe,jL=(({Request:r,Response:e})=>({Request:r,Response:e}))(oe.global),{ReadableStream:Qv,TextEncoder:ex}=oe.global,tx=(r,...e)=>{try{return!!r(...e)}catch{return!1}},qL=r=>{r=oe.merge.call({skipUndefined:!0},jL,r);const{fetch:e,Request:t,Response:n}=r,s=e?Ac(e):typeof fetch=="function",a=Ac(t),l=Ac(n);if(!s)return!1;const c=s&&Ac(Qv),f=s&&(typeof ex=="function"?(M=>S=>M.encode(S))(new ex):async M=>new Uint8Array(await new t(M).arrayBuffer())),h=a&&c&&tx(()=>{let M=!1;const S=new Qv,v=new t(Nn.origin,{body:S,method:"POST",get duplex(){return M=!0,"half"}}).headers.has("Content-Type");return S.cancel(),M&&!v}),p=l&&c&&tx(()=>oe.isReadableStream(new n("").body)),m={stream:p&&(M=>M.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(M=>{!m[M]&&(m[M]=(S,v)=>{let x=S&&S[M];if(x)return x.call(S);throw new nt(`Response type '${M}' is not supported`,nt.ERR_NOT_SUPPORT,v)})});const _=async M=>{if(M==null)return 0;if(oe.isBlob(M))return M.size;if(oe.isSpecCompliantForm(M))return(await new t(Nn.origin,{method:"POST",body:M}).arrayBuffer()).byteLength;if(oe.isArrayBufferView(M)||oe.isArrayBuffer(M))return M.byteLength;if(oe.isURLSearchParams(M)&&(M=M+""),oe.isString(M))return(await f(M)).byteLength},y=async(M,S)=>{const v=oe.toFiniteNumber(M.getContentLength());return v??_(S)};return async M=>{let{url:S,method:v,data:x,signal:R,cancelToken:T,timeout:w,onDownloadProgress:D,onUploadProgress:U,responseType:N,headers:I,withCredentials:C="same-origin",fetchOptions:b}=SS(M),B=e||fetch;N=N?(N+"").toLowerCase():"text";let K=VL([R,T&&T.toAbortSignal()],w),q=null;const ne=K&&K.unsubscribe&&(()=>{K.unsubscribe()});let ue;try{if(U&&h&&v!=="get"&&v!=="head"&&(ue=await y(I,x))!==0){let k=new t(S,{method:"POST",body:x,duplex:"half"}),Q;if(oe.isFormData(x)&&(Q=k.headers.get("content-type"))&&I.setContentType(Q),k.body){const[De,$]=$v(ue,ef(Yv(U)));x=Zv(k.body,Jv,De,$)}}oe.isString(C)||(C=C?"include":"omit");const Z=a&&"credentials"in t.prototype,re={...b,signal:K,method:v.toUpperCase(),headers:I.normalize().toJSON(),body:x,duplex:"half",credentials:Z?C:void 0};q=a&&new t(S,re);let z=await(a?B(q,b):B(S,re));const de=p&&(N==="stream"||N==="response");if(p&&(D||de&&ne)){const k={};["status","statusText","headers"].forEach(he=>{k[he]=z[he]});const Q=oe.toFiniteNumber(z.headers.get("content-length")),[De,$]=D&&$v(Q,ef(Yv(D),!0))||[];z=new n(Zv(z.body,Jv,De,()=>{$&&$(),ne&&ne()}),k)}N=N||"text";let ce=await m[oe.findKey(m,N)||"text"](z,M);return!de&&ne&&ne(),await new Promise((k,Q)=>{xS(k,Q,{data:ce,headers:si.from(z.headers),status:z.status,statusText:z.statusText,config:M,request:q})})}catch(Z){throw ne&&ne(),Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)?Object.assign(new nt("Network Error",nt.ERR_NETWORK,M,q,Z&&Z.response),{cause:Z.cause||Z}):nt.from(Z,Z&&Z.code,M,q,Z&&Z.response)}}},$L=new Map,ES=r=>{let e=r&&r.env||{};const{fetch:t,Request:n,Response:s}=e,a=[n,s,t];let l=a.length,c=l,f,h,p=$L;for(;c--;)f=a[c],h=p.get(f),h===void 0&&p.set(f,h=c?new Map:qL(e)),p=h;return h};ES();const Vm={http:uL,xhr:HL,fetch:{get:ES}};oe.forEach(Vm,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const nx=r=>`- ${r}`,YL=r=>oe.isFunction(r)||r===null||r===!1;function KL(r,e){r=oe.isArray(r)?r:[r];const{length:t}=r;let n,s;const a={};for(let l=0;l<t;l++){n=r[l];let c;if(s=n,!YL(n)&&(s=Vm[(c=String(n)).toLowerCase()],s===void 0))throw new nt(`Unknown adapter '${c}'`);if(s&&(oe.isFunction(s)||(s=s.get(e))))break;a[c||"#"+l]=s}if(!s){const l=Object.entries(a).map(([f,h])=>`adapter ${f} `+(h===!1?"is not supported by the environment":"is not available in the build"));let c=t?l.length>1?`since :
`+l.map(nx).join(`
`):" "+nx(l[0]):"as no adapter specified";throw new nt("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s}const MS={getAdapter:KL,adapters:Vm};function Gh(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new ql(null,r)}function ix(r){return Gh(r),r.headers=si.from(r.headers),r.data=Vh.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),MS.getAdapter(r.adapter||jl.adapter,r)(r).then(function(n){return Gh(r),n.data=Vh.call(r,r.transformResponse,n),n.headers=si.from(n.headers),n},function(n){return vS(n)||(Gh(r),n&&n.response&&(n.response.data=Vh.call(r,r.transformResponse,n.response),n.response.headers=si.from(n.response.headers))),Promise.reject(n)})}const wS="1.15.0",gf={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{gf[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});const rx={};gf.transitional=function(e,t,n){function s(a,l){return"[Axios v"+wS+"] Transitional option '"+a+"'"+l+(n?". "+n:"")}return(a,l,c)=>{if(e===!1)throw new nt(s(l," has been removed"+(t?" in "+t:"")),nt.ERR_DEPRECATED);return t&&!rx[l]&&(rx[l]=!0,console.warn(s(l," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,l,c):!0}};gf.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function ZL(r,e,t){if(typeof r!="object")throw new nt("options must be an object",nt.ERR_BAD_OPTION_VALUE);const n=Object.keys(r);let s=n.length;for(;s-- >0;){const a=n[s],l=e[a];if(l){const c=r[a],f=c===void 0||l(c,a,r);if(f!==!0)throw new nt("option "+a+" must be "+f,nt.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new nt("Unknown option "+a,nt.ERR_BAD_OPTION)}}const Hc={assertOptions:ZL,validators:gf},Ci=Hc.validators;let ho=class{constructor(e){this.defaults=e||{},this.interceptors={request:new jv,response:new jv}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const a=(()=>{if(!s.stack)return"";const l=s.stack.indexOf(`
`);return l===-1?"":s.stack.slice(l+1)})();try{if(!n.stack)n.stack=a;else if(a){const l=a.indexOf(`
`),c=l===-1?-1:a.indexOf(`
`,l+1),f=c===-1?"":a.slice(c+1);String(n.stack).endsWith(f)||(n.stack+=`
`+a)}}catch{}}throw n}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=go(this.defaults,t);const{transitional:n,paramsSerializer:s,headers:a}=t;n!==void 0&&Hc.assertOptions(n,{silentJSONParsing:Ci.transitional(Ci.boolean),forcedJSONParsing:Ci.transitional(Ci.boolean),clarifyTimeoutError:Ci.transitional(Ci.boolean),legacyInterceptorReqResOrdering:Ci.transitional(Ci.boolean)},!1),s!=null&&(oe.isFunction(s)?t.paramsSerializer={serialize:s}:Hc.assertOptions(s,{encode:Ci.function,serialize:Ci.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Hc.assertOptions(t,{baseUrl:Ci.spelling("baseURL"),withXsrfToken:Ci.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let l=a&&oe.merge(a.common,a[t.method]);a&&oe.forEach(["delete","get","head","post","put","patch","common"],M=>{delete a[M]}),t.headers=si.concat(l,a);const c=[];let f=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(t)===!1)return;f=f&&S.synchronous;const v=t.transitional||zm;v&&v.legacyInterceptorReqResOrdering?c.unshift(S.fulfilled,S.rejected):c.push(S.fulfilled,S.rejected)});const h=[];this.interceptors.response.forEach(function(S){h.push(S.fulfilled,S.rejected)});let p,m=0,_;if(!f){const M=[ix.bind(this),void 0];for(M.unshift(...c),M.push(...h),_=M.length,p=Promise.resolve(t);m<_;)p=p.then(M[m++],M[m++]);return p}_=c.length;let y=t;for(;m<_;){const M=c[m++],S=c[m++];try{y=M(y)}catch(v){S.call(this,v);break}}try{p=ix.call(this,y)}catch(M){return Promise.reject(M)}for(m=0,_=h.length;m<_;)p=p.then(h[m++],h[m++]);return p}getUri(e){e=go(this.defaults,e);const t=yS(e.baseURL,e.url,e.allowAbsoluteUrls);return mS(t,e.params,e.paramsSerializer)}};oe.forEach(["delete","get","head","options"],function(e){ho.prototype[e]=function(t,n){return this.request(go(n||{},{method:e,url:t,data:(n||{}).data}))}});oe.forEach(["post","put","patch"],function(e){function t(n){return function(a,l,c){return this.request(go(c||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}ho.prototype[e]=t(),ho.prototype[e+"Form"]=t(!0)});let JL=class TS{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(a){t=a});const n=this;this.promise.then(s=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](s);n._listeners=null}),this.promise.then=s=>{let a;const l=new Promise(c=>{n.subscribe(c),a=c}).then(s);return l.cancel=function(){n.unsubscribe(a)},l},e(function(a,l,c){n.reason||(n.reason=new ql(a,l,c),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=n=>{e.abort(n)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new TS(function(s){e=s}),cancel:e}}};function QL(r){return function(t){return r.apply(null,t)}}function eD(r){return oe.isObject(r)&&r.isAxiosError===!0}const Qp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Qp).forEach(([r,e])=>{Qp[e]=r});function RS(r){const e=new ho(r),t=rS(ho.prototype.request,e);return oe.extend(t,ho.prototype,e,{allOwnKeys:!0}),oe.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return RS(go(r,s))},t}const on=RS(jl);on.Axios=ho;on.CanceledError=ql;on.CancelToken=JL;on.isCancel=vS;on.VERSION=wS;on.toFormData=mf;on.AxiosError=nt;on.Cancel=on.CanceledError;on.all=function(e){return Promise.all(e)};on.spread=QL;on.isAxiosError=eD;on.mergeConfig=go;on.AxiosHeaders=si;on.formToJSON=r=>gS(oe.isHTMLForm(r)?new FormData(r):r);on.getAdapter=MS.getAdapter;on.HttpStatusCode=Qp;on.default=on;const{Axios:RD,AxiosError:AD,CanceledError:CD,isCancel:bD,CancelToken:PD,VERSION:LD,all:DD,Cancel:ND,isAxiosError:UD,spread:ID,toFormData:OD,AxiosHeaders:FD,HttpStatusCode:kD,formToJSON:BD,getAdapter:zD,mergeConfig:HD}=on,sx=on.create({baseURL:"http://localhost:5000",timeout:45e3});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AS=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=le.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:s="",children:a,iconNode:l,...c},f)=>le.createElement("svg",{ref:f,...nD,width:e,height:e,stroke:r,strokeWidth:n?Number(t)*24/Number(e):t,className:AS("lucide",s),...c},[...l.map(([h,p])=>le.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=(r,e)=>{const t=le.forwardRef(({className:n,...s},a)=>le.createElement(iD,{ref:a,iconNode:e,className:AS(`lucide-${tD(r)}`,n),...s}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=yi("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=yi("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=yi("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=yi("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=yi("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=yi("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=yi("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=yi("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=yi("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=yi("SendHorizontal",[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=yi("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=yi("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=yi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function pD({file:r,preview:e,onFile:t,onSubmit:n,onClear:s,loading:a}){const l=le.useRef(null),[c,f]=le.useState(!1),h=p=>{const m=p==null?void 0:p[0];m&&t(m)};return pe.jsxs("form",{onSubmit:n,className:"glass rounded-lg p-5",children:[pe.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[pe.jsx(ox,{className:"h-5 w-5 text-mint"}),pe.jsx("h2",{className:"text-xl font-bold",children:"Image Analysis"})]}),pe.jsx("button",{type:"button",onClick:()=>{var p;return(p=l.current)==null?void 0:p.click()},onDragOver:p=>{p.preventDefault(),f(!0)},onDragLeave:()=>f(!1),onDrop:p=>{p.preventDefault(),f(!1),h(p.dataTransfer.files)},className:`relative grid min-h-72 w-full place-items-center rounded-lg border border-dashed p-4 text-left transition ${c?"border-mint bg-mint/12":"border-white/16 bg-black/25 hover:border-mint/60"}`,children:e?pe.jsx("img",{src:e,alt:"Uploaded preview",className:"max-h-64 w-full rounded-md object-contain"}):pe.jsxs("span",{className:"flex flex-col items-center gap-4 text-center",children:[pe.jsx("span",{className:"grid h-14 w-14 place-items-center rounded-lg border border-mint/35 bg-mint/10",children:pe.jsx(ox,{className:"h-7 w-7 text-mint"})}),pe.jsxs("span",{children:[pe.jsx("span",{className:"block text-base font-bold text-white",children:"Drop an image here"}),pe.jsx("span",{className:"mt-1 block text-sm text-slate-400",children:"PNG, JPG, or WebP screenshots and visuals"})]})]})}),pe.jsx("input",{ref:l,type:"file",accept:"image/png,image/jpeg,image/webp",className:"hidden",onChange:p=>h(p.target.files)}),pe.jsxs("div",{className:"mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[pe.jsx("p",{className:"truncate text-sm text-slate-400",children:r?r.name:"No image selected"}),pe.jsxs("div",{className:"flex gap-2",children:[r&&pe.jsxs("button",{type:"button",onClick:s,className:"inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/12 px-4 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10",children:[pe.jsx(hD,{className:"h-4 w-4"}),"Clear"]}),pe.jsxs("button",{type:"submit",disabled:a||!r,className:"analyze-button inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-mint px-5 py-3 text-sm font-extrabold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-45",children:["Analyze Image",pe.jsx(CS,{className:"h-4 w-4"})]})]})]})]})}function mD({label:r="Analyzing signal"}){return pe.jsxs("div",{className:"flex items-center gap-3 text-sm font-semibold text-cyan-100",children:[pe.jsx("span",{className:"h-5 w-5 animate-spin rounded-full border-2 border-cyanline/25 border-t-cyanline"}),pe.jsx("span",{children:r})]})}function bS(){const r=({isActive:e})=>`rounded-md px-3 py-2 text-sm font-semibold transition ${e?"bg-white/14 text-white":"text-slate-300 hover:bg-white/10 hover:text-white"}`;return pe.jsxs("header",{className:"mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8",children:[pe.jsxs(rf,{to:"/",className:"flex items-center gap-3",children:[pe.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-lg border border-cyanline/40 bg-cyanline/12",children:pe.jsx(dD,{className:"h-5 w-5 text-cyanline"})}),pe.jsx("span",{className:"text-lg font-extrabold tracking-tight",children:"SignalCheck AI"})]}),pe.jsxs("nav",{className:"flex items-center gap-2",children:[pe.jsx(qh,{to:"/",className:r,children:"Home"}),pe.jsx(qh,{to:"/detector",className:r,children:"Detector"})]})]})}const lx={Real:{color:"text-mint",bg:"bg-mint",border:"border-mint/35",icon:sD},Fake:{color:"text-danger",bg:"bg-danger",border:"border-danger/35",icon:fD},Uncertain:{color:"text-warning",bg:"bg-warning",border:"border-warning/35",icon:oD}};function gD(r){var e;return Math.max(0,Math.min(100,Number(((e=String(r||"0").match(/\d+/))==null?void 0:e[0])||0)))}function _D({result:r}){if(!r)return null;const e=lx[r.verdict]||lx.Uncertain,t=e.icon,n=gD(r.confidence),s=async()=>{await navigator.clipboard.writeText(JSON.stringify(r,null,2))};return pe.jsxs("article",{className:`result-card glass rounded-lg border ${e.border} p-5`,children:[pe.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",children:[pe.jsxs("div",{className:"flex items-center gap-3",children:[pe.jsx("span",{className:`grid h-12 w-12 place-items-center rounded-lg border ${e.border} bg-white/8`,children:pe.jsx(t,{className:`h-6 w-6 ${e.color}`})}),pe.jsxs("div",{children:[pe.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-400",children:"Verdict"}),pe.jsx("h3",{className:`text-3xl font-extrabold ${e.color}`,children:r.verdict})]})]}),pe.jsxs("button",{type:"button",onClick:s,className:"inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/12 px-3 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10",children:[pe.jsx(aD,{className:"h-4 w-4"}),"Copy JSON"]})]}),pe.jsxs("div",{className:"mt-6",children:[pe.jsxs("div",{className:"mb-2 flex items-center justify-between text-sm font-bold",children:[pe.jsx("span",{className:"text-slate-300",children:"Confidence"}),pe.jsx("span",{className:e.color,children:r.confidence})]}),pe.jsx("div",{className:"h-3 overflow-hidden rounded-full bg-white/10",children:pe.jsx("div",{className:`h-full rounded-full ${e.bg}`,style:{width:`${n}%`}})})]}),pe.jsxs("div",{className:"mt-6 rounded-lg border border-white/10 bg-black/25 p-4",children:[pe.jsx("p",{className:"text-sm font-bold text-slate-300",children:"Reason"}),pe.jsx("p",{className:"mt-2 leading-7 text-slate-100",children:r.reason})]})]})}function vD({value:r,onChange:e,onSubmit:t,loading:n}){return pe.jsxs("form",{onSubmit:t,className:"glass rounded-lg p-5",children:[pe.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[pe.jsx(uD,{className:"h-5 w-5 text-cyanline"}),pe.jsx("h2",{className:"text-xl font-bold",children:"Text Analysis"})]}),pe.jsx("textarea",{value:r,onChange:s=>e(s.target.value),className:"min-h-56 w-full resize-y rounded-lg border border-white/12 bg-black/30 p-4 text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyanline/70 focus:ring-2 focus:ring-cyanline/20",placeholder:"Paste a news article, social post, claim, or headline with context..."}),pe.jsxs("div",{className:"mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[pe.jsxs("p",{className:"text-sm text-slate-400",children:[r.trim().length," characters"]}),pe.jsxs("button",{type:"submit",disabled:n||r.trim().length<20,className:"analyze-button inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyanline px-5 py-3 text-sm font-extrabold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-45",children:["Analyze Text",pe.jsx(CS,{className:"h-4 w-4"})]})]})]})}function xD(r){return new Promise((e,t)=>{const n=new FileReader;n.onload=()=>{const s=String(n.result||"");e(s.split(",")[1])},n.onerror=t,n.readAsDataURL(r)})}function yD(){const r=le.useRef(null),[e,t]=le.useState(""),[n,s]=le.useState(null),[a,l]=le.useState(""),[c,f]=le.useState(null),[h,p]=le.useState(""),[m,_]=le.useState("");le.useEffect(()=>{const x=[],R=rr.context(()=>{rr.from(".detector-panel",{opacity:0,y:24,duration:.7,stagger:.1,ease:"power3.out"}),rr.utils.toArray(".analyze-button").forEach(T=>{const w=()=>rr.to(T,{y:-2,duration:.18}),D=()=>rr.to(T,{y:0,duration:.18});T.addEventListener("mouseenter",w),T.addEventListener("mouseleave",D),x.push([T,w,D])})},r);return()=>{x.forEach(([T,w,D])=>{T.removeEventListener("mouseenter",w),T.removeEventListener("mouseleave",D)}),R.revert()}},[]),le.useEffect(()=>{c&&rr.fromTo(".result-card",{y:28,opacity:0},{y:0,opacity:1,duration:.55,ease:"power3.out"})},[c]);const y=async x=>{var R,T;x.preventDefault(),p("text"),_(""),f(null);try{const{data:w}=await sx.post("/analyze-text",{text:e});f(w)}catch(w){_(((T=(R=w.response)==null?void 0:R.data)==null?void 0:T.error)||"Text analysis failed. Check the server and API key.")}finally{p("")}},M=x=>{if(!x.type.startsWith("image/")){_("Please upload a valid image file.");return}_(""),s(x),a&&URL.revokeObjectURL(a),l(URL.createObjectURL(x))},S=()=>{a&&URL.revokeObjectURL(a),s(null),l("")},v=async x=>{var R,T;if(x.preventDefault(),!!n){p("image"),_(""),f(null);try{const w=await xD(n),{data:D}=await sx.post("/analyze-image",{imageBase64:w,mimeType:n.type});f(D)}catch(w){_(((T=(R=w.response)==null?void 0:R.data)==null?void 0:T.error)||"Image analysis failed. Check the server and API key.")}finally{p("")}}};return pe.jsxs("main",{ref:r,className:"min-h-screen subtle-grid",children:[pe.jsx(bS,{}),pe.jsxs("section",{className:"mx-auto w-full max-w-7xl px-5 pb-14 pt-4 sm:px-8",children:[pe.jsxs("div",{className:"detector-panel mb-8 max-w-3xl",children:[pe.jsx("p",{className:"text-sm font-bold uppercase tracking-[0.2em] text-cyanline",children:"Real-time detector"}),pe.jsx("h1",{className:"mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl",children:"Analyze text and images"}),pe.jsx("p",{className:"mt-4 leading-8 text-slate-300",children:"Choose the input type, submit it to the Express API, and receive a structured Gemini verdict with confidence and reasoning."})]}),pe.jsxs("div",{className:"grid gap-5 lg:grid-cols-2",children:[pe.jsx("div",{className:"detector-panel",children:pe.jsx(vD,{value:e,onChange:t,onSubmit:y,loading:h==="text"})}),pe.jsx("div",{className:"detector-panel",children:pe.jsx(pD,{file:n,preview:a,onFile:M,onSubmit:v,onClear:S,loading:h==="image"})})]}),pe.jsxs("div",{className:"mt-6 min-h-20",children:[h&&pe.jsx("div",{className:"glass rounded-lg p-5",children:pe.jsx(mD,{label:h==="text"?"Checking article signals":"Inspecting image integrity"})}),m&&pe.jsx("div",{className:"rounded-lg border border-danger/35 bg-danger/10 p-4 font-semibold text-rose-100",children:m}),pe.jsx(_D,{result:c})]})]})]})}function SD(){const r=le.useRef(null);return le.useEffect(()=>{const e=rr.context(()=>{rr.from(".hero-item",{y:28,opacity:0,duration:.8,stagger:.12,ease:"power3.out"}),rr.to(".cta-button",{scale:1.025,duration:1.8,repeat:-1,yoyo:!0,ease:"sine.inOut"})},r);return()=>e.revert()},[]),pe.jsxs("main",{ref:r,className:"min-h-screen subtle-grid",children:[pe.jsx(bS,{}),pe.jsxs("section",{className:"mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-10 px-5 pb-12 pt-6 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]",children:[pe.jsxs("div",{children:[pe.jsx("p",{className:"hero-item mb-4 inline-flex rounded-md border border-cyanline/30 bg-cyanline/10 px-3 py-2 text-sm font-bold text-cyan-100",children:"AI-powered claim and media verification"}),pe.jsx("h1",{className:"hero-item max-w-4xl text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl",children:"SignalCheck AI"}),pe.jsx("p",{className:"hero-item mt-6 max-w-2xl text-lg leading-8 text-slate-300",children:"Analyze news copy, viral claims, screenshots, and suspicious images with Gemini-backed reasoning, confidence scoring, and demo-ready visual feedback."}),pe.jsxs("div",{className:"hero-item mt-8 flex flex-col gap-3 sm:flex-row",children:[pe.jsxs(rf,{to:"/detector",className:"cta-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyanline px-6 py-3 text-base font-extrabold text-slate-950 transition hover:bg-cyan-200",children:["Open Detector",pe.jsx(rD,{className:"h-5 w-5"})]}),pe.jsx("a",{href:"#capabilities",className:"inline-flex min-h-12 items-center justify-center rounded-lg border border-white/14 px-6 py-3 text-base font-bold text-slate-100 transition hover:bg-white/10",children:"View Capabilities"})]})]}),pe.jsx("div",{className:"hero-item glass rounded-lg p-5",children:pe.jsxs("div",{className:"rounded-lg border border-white/10 bg-black/28 p-5",children:[pe.jsxs("div",{className:"flex items-center justify-between",children:[pe.jsx("span",{className:"text-sm font-bold uppercase tracking-[0.2em] text-slate-400",children:"Live Signal"}),pe.jsx(ax,{className:"h-5 w-5 text-mint"})]}),pe.jsx("div",{className:"mt-7 space-y-4",children:[["Source consistency","86%"],["Image integrity","71%"],["Claim ambiguity","34%"],["Manipulation risk","18%"]].map(([e,t])=>pe.jsxs("div",{children:[pe.jsxs("div",{className:"mb-2 flex justify-between text-sm",children:[pe.jsx("span",{className:"text-slate-300",children:e}),pe.jsx("span",{className:"font-bold text-white",children:t})]}),pe.jsx("div",{className:"h-2 rounded-full bg-white/10",children:pe.jsx("div",{className:"h-2 rounded-full bg-cyanline",style:{width:t}})})]},e))})]})})]}),pe.jsx("section",{id:"capabilities",className:"mx-auto grid w-full max-w-7xl gap-4 px-5 pb-16 sm:px-8 md:grid-cols-3",children:[[lD,"Text Detection","Classifies pasted news as Fake, Real, or Uncertain with a concise explanation."],[cD,"Image Detection","Checks uploaded media for AI-generation or manipulation signals through Gemini Vision."],[ax,"Explainable Output","Displays JSON-ready verdicts, confidence bars, color coding, and copyable results."]].map(([e,t,n])=>pe.jsxs("div",{className:"glass rounded-lg p-5",children:[pe.jsx(e,{className:"h-7 w-7 text-cyanline"}),pe.jsx("h2",{className:"mt-5 text-xl font-bold",children:t}),pe.jsx("p",{className:"mt-3 leading-7 text-slate-300",children:n})]},t))})]})}function ED(){return pe.jsxs("div",{className:"min-h-screen overflow-x-hidden bg-ink text-white",children:[pe.jsx(tP,{}),pe.jsx("div",{className:"relative z-10",children:pe.jsxs(g1,{children:[pe.jsx(Xh,{path:"/",element:pe.jsx(SD,{})}),pe.jsx(Xh,{path:"/detector",element:pe.jsx(yD,{})})]})})]})}vM.createRoot(document.getElementById("root")).render(pe.jsx(fM.StrictMode,{children:pe.jsx(z1,{children:pe.jsx(ED,{})})}));
