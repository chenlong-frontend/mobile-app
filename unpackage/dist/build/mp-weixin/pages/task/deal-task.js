(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/task/deal-task"],{"0b8e":function(n,t,e){"use strict";(function(n){e("e7ad");u(e("66fd"));var t=u(e("57f3"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"45bc":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={pageHead:function(){return e.e("components/page-head/page-head").then(e.bind(null,"fce9"))},uCellGroup:function(){return e.e("uview-ui/components/u-cell-group/u-cell-group").then(e.bind(null,"e0aa"))},uCellItem:function(){return e.e("uview-ui/components/u-cell-item/u-cell-item").then(e.bind(null,"6039"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"7b97"))}},o=function(){var n=this,t=n.$createElement;n._self._c},i=[]},"57f3":function(n,t,e){"use strict";e.r(t);var u=e("45bc"),o=e("83d7");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("8f1f");var a,c=e("f0c5"),f=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,"b2d54330",null,!1,u["a"],a);t["default"]=f.exports},"83d7":function(n,t,e){"use strict";e.r(t);var u=e("fb3e"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a},"8f1f":function(n,t,e){"use strict";var u=e("e476"),o=e.n(u);o.a},e476:function(n,t,e){},fb3e:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{insInfo:{},code:null}},mounted:function(){},onLoad:function(n){this.code=n.code,this.getData()},methods:{toPage:function(t){n.navigateTo({url:t})},getData:function(){var n=this;this.$u.api.getTaskInsInfo({workTemplateId:this.code}).then((function(t){n.insInfo=t}))},submit:function(){this.$u.api.finshTaskIns({workTemplateId:this.code}).then((function(){n.switchTab({url:"/pages/task/index"})}))}}};t.default=e}).call(this,e("543d")["default"])}},[["0b8e","common/runtime","common/vendor"]]]);