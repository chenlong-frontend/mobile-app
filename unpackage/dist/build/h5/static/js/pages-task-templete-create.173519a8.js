(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-task-templete-create"],{"022c":function(t,e,a){"use strict";a("cb29"),a("d81d"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(t){var e=this;t&&setTimeout((function(){return e.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var t=1,e=this.list;while(e[0][this.childName])e=e[0]?e[0][this.childName]:{},t++;this.columnNum=t}},setColumnData:function(){var t=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var e=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],a=0;a<this.columnNum;a++)0==a?(t[a]=this.list,e=e[this.childName]):(t[a]=e,e=e[this.defaultSelector[a]][this.childName]);else"single-column"==this.mode?t[0]=this.list:t=this.list;this.columnData=t},setSelectValue:function(){for(var t=null,e=0;e<this.columnNum;e++){t=this.columnData[e][this.defaultSelector[e]];var a={value:t?t[this.valueName]:null,label:t?t[this.labelName]:null};t&&t.extra&&(a.extra=t.extra),this.selectValue.push(a)}},columnChange:function(t){var e=this,a=null,n=t.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(t,e){t!=n[e]&&(a=e)})),this.defaultSelector=n;for(var i=a+1;i<this.columnNum;i++)this.columnData[i]=this.columnData[i-1][i-1==a?n[a]:0][this.childName],this.defaultSelector[i]=0;n.map((function(t,a){var i=e.columnData[a][n[a]],l={value:i?i[e.valueName]:null,label:i?i[e.labelName]:null};i&&void 0!==i.extra&&(l.extra=i.extra),e.selectValue.push(l)})),this.lastSelectIndex=n}else if("single-column"==this.mode){var l=this.columnData[0][n[0]],o={value:l?l[this.valueName]:null,label:l?l[this.labelName]:null};l&&void 0!==l.extra&&(o.extra=l.extra),this.selectValue.push(o)}else"mutil-column"==this.mode&&n.map((function(t,a){var i=e.columnData[a][n[a]],l={value:i?i[e.valueName]:null,label:i?i[e.labelName]:null};i&&void 0!==i.extra&&(l.extra=i.extra),e.selectValue.push(l)}))},close:function(){this.$emit("input",!1)},getResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&this.$emit(t,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};e.default=n},"21e8":function(t,e,a){"use strict";a("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{form:{taskName:"",taskTemplateTypeMeta:""},metaList:[],metaShow:!1}},created:function(){var t=this;this.$u.api.getAllMetaInfo().then((function(e){t.metaList=e.map((function(t){return{value:t.taskTemplateType,label:t.taskTemplateType}}))}))},methods:{submit:function(){var t=this;this.$u.api.createTaskTemplate(this.form).then((function(){t.toPage("/pages/task/templete-list")}))},onMetaSelect:function(t){this.form.taskTemplateTypeMeta=t[0].value},toPage:function(t){uni.navigateTo({url:t})}}};e.default=n},2933:function(t,e,a){"use strict";var n=a("ebd3"),i=a.n(n);i.a},4607:function(t,e,a){"use strict";a.r(e);var n=a("91e8"),i=a("6a82");for(var l in i)"default"!==l&&function(t){a.d(e,t,(function(){return i[t]}))}(l);a("2933");var o,u=a("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"60cbc1d1",null,!1,n["a"],o);e["default"]=s.exports},"4e08":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-page-body[data-v-96dc30f0]{background:#f2f2f2}.content[data-v-96dc30f0]{padding-bottom:%?150?%}.form[data-v-96dc30f0]{margin:20px 0;background:#fff;padding:0 %?20?% 0 %?40?%}.bottom[data-v-96dc30f0]{position:fixed;width:100%;bottom:0;padding:%?20?%;z-index:9999;background-color:#fff}body.?%PAGE?%[data-v-96dc30f0]{background:#f2f2f2}',""]),t.exports=e},"578a":function(t,e,a){"use strict";var n=a("afcf"),i=a.n(n);i.a},6275:function(t,e,a){"use strict";a.r(e);var n=a("21e8"),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,(function(){return n[t]}))}(l);e["default"]=i.a},"6a82":function(t,e,a){"use strict";a.r(e);var n=a("022c"),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,(function(){return n[t]}))}(l);e["default"]=i.a},"824a":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return n}));var n={pageHead:a("fce9").default,uForm:a("98a9").default,uFormItem:a("ae6f").default,uInput:a("b7ff").default,uSelect:a("4607").default,uButton:a("7b97").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("page-head",{attrs:{title:"元数据创建"}}),a("v-uni-view",{staticClass:"form"},[a("u-form",[a("u-form-item",{attrs:{"label-width":"150",label:"模板名称"}},[a("u-input",{model:{value:t.form.taskName,callback:function(e){t.$set(t.form,"taskName",e)},expression:"form.taskName"}})],1),a("u-form-item",{attrs:{"label-width":"150",label:"元数据"}},[a("u-input",{attrs:{disabled:!0,value:t.form.taskTemplateTypeMeta},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.metaShow=!0}}})],1)],1)],1),a("u-select",{attrs:{list:t.metaList},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onMetaSelect.apply(void 0,arguments)}},model:{value:t.metaShow,callback:function(e){t.metaShow=e},expression:"metaShow"}}),a("v-uni-view",{staticClass:"bottom"},[a("u-button",{attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},l=[]},"91e8":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return n}));var n={uPopup:a("d3f2").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-select"},[a("u-popup",{attrs:{maskCloseAble:t.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:t.safeAreaInsetBottom,"z-index":t.uZIndex},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("v-uni-view",{staticClass:"u-select"},[a("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:t.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getResult("cancel")}}},[t._v(t._s(t.cancelText))]),a("v-uni-view",{staticClass:"u-select__header__title"},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:t.moving?t.cancelColor:t.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getResult("confirm")}}},[t._v(t._s(t.confirmText))])],1),a("v-uni-view",{staticClass:"u-select__body"},[a("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:t.defaultSelector},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.columnChange.apply(void 0,arguments)},pickstart:function(e){arguments[0]=e=t.$handleEvent(e),t.pickstart.apply(void 0,arguments)},pickend:function(e){arguments[0]=e=t.$handleEvent(e),t.pickend.apply(void 0,arguments)}}},t._l(t.columnData,(function(e,n){return a("v-uni-picker-view-column",{key:n},t._l(e,(function(e,n){return a("v-uni-view",{key:n,staticClass:"u-select__body__picker-view__item"},[a("v-uni-view",{staticClass:"u-line-1"},[t._v(t._s(e[t.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},l=[]},afcf:function(t,e,a){var n=a("4e08");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5897631c",n,!0,{sourceMap:!1,shadowMode:!1})},cb29:function(t,e,a){var n=a("23e7"),i=a("81d5"),l=a("44d2");n({target:"Array",proto:!0},{fill:i}),l("fill")},d6dc:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-page-body[data-v-60cbc1d1]{background:#f2f2f2}.u-select__action[data-v-60cbc1d1]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-60cbc1d1]{position:absolute;right:%?20?%;top:50%;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-60cbc1d1]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-60cbc1d1]{color:#606266}.u-select--border[data-v-60cbc1d1]{-webkit-border-radius:%?6?%;border-radius:%?6?%;-webkit-border-radius:4px;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-60cbc1d1]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-60cbc1d1]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-60cbc1d1]{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.u-select__body__picker-view__item[data-v-60cbc1d1]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}body.?%PAGE?%[data-v-60cbc1d1]{background:#f2f2f2}',""]),t.exports=e},e13b:function(t,e,a){"use strict";a.r(e);var n=a("824a"),i=a("6275");for(var l in i)"default"!==l&&function(t){a.d(e,t,(function(){return i[t]}))}(l);a("578a");var o,u=a("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"96dc30f0",null,!1,n["a"],o);e["default"]=s.exports},ebd3:function(t,e,a){var n=a("d6dc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("73f7de42",n,!0,{sourceMap:!1,shadowMode:!1})}}]);