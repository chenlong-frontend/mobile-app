(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-select/u-select"],{"1a3b":function(t,e,l){"use strict";var u=l("d5a7"),a=l.n(u);a.a},"2ccf":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(t){var e=this;t&&setTimeout((function(){return e.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){this.moving=!0},pickend:function(){this.moving=!1},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var t=1,e=this.list;while(e[0][this.childName])e=e[0]?e[0][this.childName]:{},t++;this.columnNum=t}},setColumnData:function(){var t=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var e=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],l=0;l<this.columnNum;l++)0==l?(t[l]=this.list,e=e[this.childName]):(t[l]=e,e=e[this.defaultSelector[l]][this.childName]);else"single-column"==this.mode?t[0]=this.list:t=this.list;this.columnData=t},setSelectValue:function(){for(var t=null,e=0;e<this.columnNum;e++){t=this.columnData[e][this.defaultSelector[e]];var l={value:t?t[this.valueName]:null,label:t?t[this.labelName]:null};t&&t.extra&&(l.extra=t.extra),this.selectValue.push(l)}},columnChange:function(t){var e=this,l=null,u=t.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(t,e){t!=u[e]&&(l=e)})),this.defaultSelector=u;for(var a=l+1;a<this.columnNum;a++)this.columnData[a]=this.columnData[a-1][a-1==l?u[l]:0][this.childName],this.defaultSelector[a]=0;u.map((function(t,l){var a=e.columnData[l][u[l]],n={value:a?a[e.valueName]:null,label:a?a[e.labelName]:null};a&&void 0!==a.extra&&(n.extra=a.extra),e.selectValue.push(n)})),this.lastSelectIndex=u}else if("single-column"==this.mode){var n=this.columnData[0][u[0]],i={value:n?n[this.valueName]:null,label:n?n[this.labelName]:null};n&&void 0!==n.extra&&(i.extra=n.extra),this.selectValue.push(i)}else"mutil-column"==this.mode&&u.map((function(t,l){var a=e.columnData[l][u[l]],n={value:a?a[e.valueName]:null,label:a?a[e.labelName]:null};a&&void 0!==a.extra&&(n.extra=a.extra),e.selectValue.push(n)}))},close:function(){this.$emit("input",!1)},getResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.moving||(t&&this.$emit(t,this.selectValue),this.close())},selectHandler:function(){this.$emit("click")}}};e.default=u},4607:function(t,e,l){"use strict";l.r(e);var u=l("ebf0"),a=l("6a82");for(var n in a)"default"!==n&&function(t){l.d(e,t,(function(){return a[t]}))}(n);l("1a3b");var i,s=l("f0c5"),o=Object(s["a"])(a["default"],u["b"],u["c"],!1,null,"690e2e06",null,!1,u["a"],i);e["default"]=o.exports},"6a82":function(t,e,l){"use strict";l.r(e);var u=l("2ccf"),a=l.n(u);for(var n in u)"default"!==n&&function(t){l.d(e,t,(function(){return u[t]}))}(n);e["default"]=a.a},d5a7:function(t,e,l){},ebf0:function(t,e,l){"use strict";l.d(e,"b",(function(){return a})),l.d(e,"c",(function(){return n})),l.d(e,"a",(function(){return u}));var u={uPopup:function(){return l.e("uview-ui/components/u-popup/u-popup").then(l.bind(null,"d3f2"))}},a=function(){var t=this,e=t.$createElement;t._self._c},n=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-select/u-select-create-component',
    {
        'uview-ui/components/u-select/u-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4607"))
        })
    },
    [['uview-ui/components/u-select/u-select-create-component']]
]);
