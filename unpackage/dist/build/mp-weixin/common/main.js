(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"4dae":function(e,t,n){"use strict";n.r(t);var o=n("90cc"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},5016:function(e,t,n){},"77a9":function(e,t,n){"use strict";n.r(t);var o=n("4dae");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("9de0");var u,a,c,f,i=n("f0c5"),l=Object(i["a"])(o["default"],u,a,!1,null,null,null,!1,c,f);t["default"]=l.exports},"90cc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=o},"9de0":function(e,t,n){"use strict";var o=n("5016"),r=n.n(o);r.a},a0cb:function(e,t,n){"use strict";(function(e,t){n("e7ad");var o=i(n("66fd")),r=i(n("77a9")),u=i(n("a685")),a=i(n("4929")),c=i(n("881b")),f=i(n("6bb8"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n("e8b3");o.default.config.productionTip=!1,r.default.mpType="app",o.default.use(a.default),o.default.mixin(s);var b=e.getUpdateManager();b.onCheckForUpdate((function(e){})),b.onUpdateReady((function(t){e.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&b.applyUpdate()}})})),b.onUpdateFailed((function(e){}));var O=new o.default(d({store:u.default},r.default));o.default.use(c.default,O),o.default.use(f.default,O),t(O).$mount()}).call(this,n("543d")["default"],n("543d")["createApp"])}},[["a0cb","common/runtime","common/vendor"]]]);