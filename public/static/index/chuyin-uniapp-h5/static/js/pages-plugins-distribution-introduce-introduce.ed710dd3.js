(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-distribution-introduce-introduce"],{"030d":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a},"10b9":function(t,e,i){"use strict";i.r(e);var a=i("a8f2");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var r,o,l,u,s=i("f0c5"),d=Object(s["a"])(a["default"],r,o,!1,null,null,null,!1,l,u);e["default"]=d.exports},"14f4":function(t,e,i){"use strict";var a=i("e72e"),n=i.n(a);n.a},"32f4":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},3671:function(t,e,i){"use strict";i.r(e);var a=i("030d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"36a0":function(t,e,i){"use strict";var a=i("dea4"),n=i.n(a);n.a},"3ee4":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={tuiListCell:i("f268").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.initLoading?t._e():i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-invoice__box "},[i("v-uni-view",t._l(t.level_list,(function(e,a){return i("tui-list-cell",{key:a,attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-title tui-bold"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"tui-input__item"},[i("v-uni-view",{staticClass:"tui-input__title"},[t._v("等级证书")]),i("v-uni-view",{staticClass:"distribution_avatar"},[i("v-uni-image",{attrs:{src:e.images_url,mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"tui-input__item",staticStyle:{"align-items":"flex-start"}},[i("v-uni-view",{staticClass:"tui-input__title"},[t._v("返佣比例")]),i("v-uni-view",{staticClass:"disPlayFlex flexDireColumn"},[i("v-uni-text",[t._v("一级 "+t._s(e.level_rate_one)+"%")]),void 0==t.base.level||t.base.level>0?i("v-uni-text",[t._v("二级 "+t._s(e.level_rate_two)+"%")]):t._e(),void 0==t.base.level||t.base.level>1?i("v-uni-text",[t._v("三级 "+t._s(e.level_rate_three)+"%")]):t._e()],1)],1),i("v-uni-view",{staticClass:"tui-input__item"},[i("v-uni-view",{staticClass:"tui-input__title"},[t._v("消费金额")]),i("v-uni-view",[t._v(t._s(e.rules_msg))])],1)],1)})),1)],1)],1)},r=[]},"42ac":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("31b2"));var n={data:function(){return{initLoading:0,loading:0}},watch:{loading:function(t,e){t>0?uni.showLoading({mask:!0,title:"加载中"}):uni.hideLoading()},initLoading:function(t,e){}},created:function(){},methods:{}};e.default=n},"4cd2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tui-list-cell[data-v-1409a240]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-1409a240]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-1409a240]{background-color:#f1f1f1!important}.tui-list-cell[data-v-1409a240]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-line-left[data-v-1409a240]::after{left:%?30?%!important}.tui-line-right[data-v-1409a240]::after{right:%?30?%!important}.tui-cell-unlined[data-v-1409a240]::after{border-bottom:0!important}.tui-cell-arrow[data-v-1409a240]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-1409a240]::before{right:0!important}.tui-arrow-gray[data-v-1409a240]::before{border-color:#666!important}.tui-arrow-white[data-v-1409a240]::before{border-color:#fff!important}.tui-arrow-warning[data-v-1409a240]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-1409a240]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-1409a240]::before{border-color:#eb0909!important}',""]),t.exports=e},"6cf7":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),r=a(i("5530")),o=i("2f62"),l=a(i("10b9")),u=a(i("9fc0")),s={mixins:[l.default],computed:(0,r.default)({},(0,o.mapGetters)(["cache_shop_user_info_key","cache_config_info_key"])),data:function(){return{detail_list:[{name:"用户昵称",icon:"payment_user_order_no"},{name:"用户昵称",value:"user_name_view"},{name:"订单金额",value:"total_price",isPrice:!0}],id:null,level_list:[],base:{}}},onLoad:function(t){var e=this;this.initLoadingFn((0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadingData();case 2:case"end":return t.stop()}}),t)}))))},onPullDownRefresh:function(){this.loadingData(),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},methods:{loadingData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i={pluginsname:"distribution",pluginscontrol:"introduce",pluginsaction:"index"},e.next=4,t.loadingFn((0,u.default)("/api/plugins/index","POST",i));case 4:a=e.sent,n=a.data,t.level_list=n.level_list,t.base=n.base,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),-100==e.t0.code&&setTimeout((function(){uni.redirectTo({url:"/pages/plugins/distribution/order/order"})}),1500);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}};e.default=s},"78a8":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/*远素间距*/\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.distribution_avatar uni-image[data-v-23ca00ee]{width:%?60?%;height:%?60?%;border-radius:50%}.tui-invoice__box[data-v-23ca00ee]{background-color:#fff;border-radius:%?20?%;overflow:hidden}.tui-title[data-v-23ca00ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-invoice-notice[data-v-23ca00ee]{font-size:%?24?%;font-weight:400;color:#999}.tui-bold[data-v-23ca00ee]{font-weight:700}.tui-attr__box[data-v-23ca00ee]{padding:%?24?% 0}.tui-pbtm__0[data-v-23ca00ee]{padding-bottom:0}.tui-attr-item[data-v-23ca00ee]{max-width:100%;min-width:%?180?%;height:%?64?%;display:-webkit-inline-flex;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f7f7f7;border:%?1?% solid #f7f7f7;padding:0 %?26?%;box-sizing:border-box;border-radius:32px;margin-right:%?32?%;font-size:%?26?%}.tui-attr-item.jr[data-v-23ca00ee]{padding:0 %?6?%;margin-right:%?20?%}.tui-attr-active[data-v-23ca00ee]{background-color:#fcedea;border-color:#e41f19;color:#e41f19;font-weight:700}.tui-tips[data-v-23ca00ee]{color:#999;font-size:%?24?%;font-weight:400}.tui-input__item[data-v-23ca00ee]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;padding-top:%?40?%}.tui-input__title[data-v-23ca00ee]{width:%?196?%;-webkit-flex-shrink:0;flex-shrink:0}.tui-input__item uni-input[data-v-23ca00ee]{font-size:%?28?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.tui-placeholder[data-v-23ca00ee]{color:#bfbfbf}.tui-more__optional[data-v-23ca00ee]{font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.tui-between[data-v-23ca00ee]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-btn__box[data-v-23ca00ee]{padding:%?60?% %?30?% %?80?%}.tui-modal__title[data-v-23ca00ee]{text-align:center;font-weight:700;padding-bottom:%?8?%}.tui-modal__p[data-v-23ca00ee]{font-size:%?26?%;color:#888;padding-top:%?20?%}.tui-modal__btn[data-v-23ca00ee]{width:100%;padding:%?60?% 0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}',""]),t.exports=e},"863e":function(t,e,i){"use strict";i.r(e);var a=i("6cf7"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a0ea:function(t,e,i){"use strict";i.r(e);var a=i("3ee4"),n=i("863e");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("36a0");var o,l=i("f0c5"),u=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"23ca00ee",null,!1,a["a"],o);e["default"]=u.exports},a8f2:function(t,e,i){"use strict";i.r(e);var a=i("42ac"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},dea4:function(t,e,i){var a=i("78a8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3072de81",a,!0,{sourceMap:!1,shadowMode:!1})},e72e:function(t,e,i){var a=i("4cd2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f1200c9a",a,!0,{sourceMap:!1,shadowMode:!1})},f268:function(t,e,i){"use strict";i.r(e);var a=i("32f4"),n=i("3671");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("14f4");var o,l=i("f0c5"),u=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"1409a240",null,!1,a["a"],o);e["default"]=u.exports}}]);