(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2d10":function(t,i,e){"use strict";var o=e("da29"),n=e.n(o);n.a},"329c":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?e("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(i,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(o===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/2+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(o)}}})})),1):t._e(),"dot"===t.mode?e("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(i,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(o)}}})})),1):t._e(),"round"===t.mode?e("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(i,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item ",class:[o===t.current&&"uni-swiper__dots-long"],style:{width:(o===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(o)}}})})),1):t._e(),"nav"===t.mode?e("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[e("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?e("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(i,o){return e("v-uni-view",{key:o,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:o===t.current?t.dots.selectedColor:t.dots.color,"background-color":o!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:o!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(o)}}},[e("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(o+1))])],1)})),1):t._e()],2)},n=[]},"34e2":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return o}));var o={uniSwiperDot:e("834a").default,uniGrid:e("553d").default,uniGridItem:e("f05d").default,uniIcons:e("dd21").default},n=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-uni-view",{staticClass:"container"},[o("v-uni-view",{staticClass:"banner-box",style:{"background-color":t.topBackgroundColor,"padding-top":t.navHeight+"px"}},[o("uni-swiper-dot",{attrs:{info:t.banner,current:t.current,field:"content",mode:"dot"}},[o("v-uni-swiper",{staticClass:"banner-swiper",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.banner,(function(t,i){return o("v-uni-swiper-item",{key:t.id},[o("v-uni-view",{staticClass:"swiper-item"},[o("v-uni-image",{staticClass:"img",attrs:{src:t.image}})],1)],1)})),1)],1)],1),o("v-uni-view",{staticClass:"haibao-box"},[o("v-uni-image",{staticClass:"img",attrs:{src:e("903b"),mode:"aspectFill"}})],1),o("v-uni-view",{staticClass:"group-box"},[o("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.group,(function(i,e){return o("uni-grid-item",{key:i.id},[o("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoodsGroup(i.id)}}},[o("v-uni-image",{staticClass:"img",attrs:{src:i.image}}),o("v-uni-text",{staticClass:"text"},[t._v(t._s(i.name))])],1)],1)})),1)],1),o("v-uni-view",{staticClass:"goods-box"},[o("v-uni-view",{staticClass:"title-box"},[o("uni-icons",{attrs:{type:"fire-filled",size:"30",color:"#ff557f"}}),o("v-uni-text",{staticClass:"title"},[t._v("推荐商品")])],1),o("v-uni-view",{staticClass:"goods-list"},t._l(t.goods,(function(i,n){return o("v-uni-view",{key:i.id,staticClass:"goods-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i.id)}}},[o("v-uni-view",{staticClass:"l"},[o("v-uni-image",{staticClass:"img",attrs:{src:i.image}}),o("v-uni-view",{staticClass:"info"},[o("v-uni-view",{staticClass:"name line"},[t._v(t._s(i.title))]),o("v-uni-view",{staticClass:"dec line2"},[t._v(t._s(i.describe))]),o("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(i.price)+"/份")])],1)],1),o("v-uni-view",{staticClass:"r",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.addCartGoods(i.id)}}},[o("v-uni-image",{staticClass:"icon",attrs:{src:e("728d")}})],1)],1)})),1)],1)],1)},r=[]},"3bf6":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */.uni-swiper__warp[data-v-71539c7b]{display:flex;flex:1;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-71539c7b]{position:absolute;bottom:10px;left:0;right:0;display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center}.uni-swiper__dots-item[data-v-71539c7b]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4);cursor:pointer}.uni-swiper__dots-item[data-v-71539c7b]:first-child{margin:0}.uni-swiper__dots-default[data-v-71539c7b]{border-radius:100px}.uni-swiper__dots-long[data-v-71539c7b]{border-radius:50px}.uni-swiper__dots-bar[data-v-71539c7b]{border-radius:50px}.uni-swiper__dots-nav[data-v-71539c7b]{bottom:0;padding:8px 0;display:flex;flex:1;flex-direction:row;justify-content:flex-start;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-71539c7b]{\n  /* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:14px;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-71539c7b]{display:flex;justify-content:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-71539c7b]{color:#fff;font-size:12px;line-height:14px}',""]),t.exports=i},"47c3":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3"),e("14d9"),e("d3b7"),e("159b"),e("a434");var o={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(i,e){i===t&&t.grid.children.splice(e,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};i.default=o},"4efa":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.width?e("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[e("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},n=[]},"553d":function(t,i,e){"use strict";e.r(i);var o=e("e305"),n=e("d2d9");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("ad1b");var d=e("f0c5"),a=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"3ad70c0d",null,!1,o["a"],void 0);i["default"]=a.exports},5764:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var o={name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created:function(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};i.default=o},"58a6":function(t,i,e){"use strict";var o=e("9538"),n=e.n(o);n.a},"5d3d":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */.container .banner-box[data-v-6909f6f4]{width:100%;padding:0 %?20?% %?20?%}.container .banner-box .banner-swiper[data-v-6909f6f4]{width:100%;height:%?300?%;border-radius:%?10?%;overflow:hidden}.container .banner-box .banner-swiper .swiper-item .img[data-v-6909f6f4]{width:100%;height:%?300?%}.container .haibao-box[data-v-6909f6f4]{background-color:#fff;width:100%;height:%?220?%;padding:%?20?%}.container .haibao-box .img[data-v-6909f6f4]{width:100%;height:%?180?%;border-radius:%?100?%}.container .group-box[data-v-6909f6f4]{background-color:#fff;padding:%?12?% 0;margin-top:%?10?%}.container .group-box .uni-grid-item[data-v-6909f6f4]{align-items:center}.container .group-box .uni-grid-item .item[data-v-6909f6f4]{display:flex;flex-direction:column;align-items:center}.container .group-box .uni-grid-item .item .img[data-v-6909f6f4]{width:%?120?%;height:%?120?%;border-radius:50%}.container .group-box .uni-grid-item .item .text[data-v-6909f6f4]{margin-top:%?8?%}.container .goods-box .title-box[data-v-6909f6f4]{display:flex;align-items:center;height:%?70?%;padding:0 %?20?%}.container .goods-box .title-box .title[data-v-6909f6f4]{font-size:%?30?%;font-weight:700;color:#ff557f;margin-left:%?10?%}.container .goods-box .goods-list[data-v-6909f6f4]{padding:0 %?20?%}.container .goods-box .goods-list .goods-item[data-v-6909f6f4]{display:flex;align-items:center;justify-content:space-between;background-color:#fff;border-radius:%?8?%;padding:%?40?%;margin-bottom:%?10?%}.container .goods-box .goods-list .goods-item .l[data-v-6909f6f4]{display:flex;justify-content:flex-start}.container .goods-box .goods-list .goods-item .l .img[data-v-6909f6f4]{width:%?200?%;height:%?200?%;border-radius:%?12?%}.container .goods-box .goods-list .goods-item .l .info[data-v-6909f6f4]{margin-left:%?20?%;width:%?320?%}.container .goods-box .goods-list .goods-item .l .info .name[data-v-6909f6f4]{font-size:%?30?%;font-weight:700;color:#3a3a3a;height:%?50?%;line-height:%?50?%}.container .goods-box .goods-list .goods-item .l .info .dec[data-v-6909f6f4]{font-size:%?22?%;height:%?72?%;line-height:%?36?%;color:#909399;margin:%?15?% 0 %?25?%}.container .goods-box .goods-list .goods-item .l .info .price[data-v-6909f6f4]{font-size:%?26?%;font-weight:700;color:#ff557f;font-family:雅黑}.container .goods-box .goods-list .goods-item .r .icon[data-v-6909f6f4]{width:%?50?%;height:%?50?%}',""]),t.exports=i},6702:function(t,i,e){"use strict";e("7a82");var o=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("c7eb")),r=o(e("1da1")),d=o(e("5530")),a=e("26cb"),s=getApp(),c={data:function(){return{customHeight:s.globalData.customHeight,navHeight:s.globalData.navHeight,isfocus:!1,bs:["#00828B","rgb(255,85,127)","rgb(255,170,0)","rgb(170,0,0)"],topBackgroundColor:"#00828B",current:0,banner:[],group:[],goods:[]}},onLoad:function(){},onShow:function(){this.getData()},methods:(0,d.default)((0,d.default)((0,d.default)({},(0,a.mapMutations)(["setGroupId","setGoodsGroup"])),(0,a.mapActions)(["addCartGoods"])),{},{swiperChange:function(t){this.current=t.detail.current;var i=this.current%4;this.topBackgroundColor=this.bs[i]},getData:function(){var t=this;return(0,r.default)((0,n.default)().mark((function i(){var e,o;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$api.goods.getIndexData();case 2:e=i.sent,200===e.data.code&&(o=e.data.data,t.banner=o.banner,t.group=o.group,t.goods=o.goods,t.setGoodsGroup(o.group));case 4:case"end":return i.stop()}}),i)})))()},toGoodsGroup:function(t){this.setGroupId(t),uni.switchTab({url:"/pages/goods/group"})},toDetail:function(t){uni.navigateTo({url:"/pages/goods/detail?goodsId="+t})}}),onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"/pages/goods/search"})}};i.default=c},"728d":function(t,i,e){t.exports=e.p+"static/img/gouwuche.8a7c085c.png"},"834a":function(t,i,e){"use strict";e.r(i);var o=e("329c"),n=e("a288");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("9676");var d=e("f0c5"),a=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"71539c7b",null,!1,o["a"],void 0);i["default"]=a.exports},"903b":function(t,i,e){t.exports=e.p+"static/img/haibao.9f6f98d9.jpg"},9538:function(t,i,e){var o=e("96cd");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("75fc22e2",o,!0,{sourceMap:!1,shadowMode:!1})},9676:function(t,i,e){"use strict";var o=e("a110"),n=e.n(o);n.a},"96cd":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */.uni-grid-item[data-v-4336d7d8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-4336d7d8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-4336d7d8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-4336d7d8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-4336d7d8]:active{background-color:#f1f1f1}',""]),t.exports=i},a110:function(t,i,e){var o=e("3bf6");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("19eb221e",o,!0,{sourceMap:!1,shadowMode:!1})},a1de:function(t,i,e){"use strict";e.r(i);var o=e("6702"),n=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(r);i["default"]=n.a},a288:function(t,i,e){"use strict";e.r(i);var o=e("5764"),n=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(r);i["default"]=n.a},a692:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3"),e("d401"),e("d3b7"),e("25f0"),e("159b"),e("ac1f"),e("e25e");var o={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(i){t.children.forEach((function(t,e){t.width=i}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var i=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(e){i.width=parseInt((e[0].width-1)/i.column)+"px",t(i.width)}))}}};i.default=o},ac74:function(t,i,e){var o=e("ee86");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("33ddb07a",o,!0,{sourceMap:!1,shadowMode:!1})},ad1b:function(t,i,e){"use strict";var o=e("ac74"),n=e.n(o);n.a},d2d9:function(t,i,e){"use strict";e.r(i);var o=e("a692"),n=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(r);i["default"]=n.a},d89c:function(t,i,e){"use strict";e.r(i);var o=e("47c3"),n=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(r);i["default"]=n.a},da29:function(t,i,e){var o=e("5d3d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("0241e899",o,!0,{sourceMap:!1,shadowMode:!1})},e305:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var o=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-color":this.borderColor},attrs:{id:this.elId}},[this._t("default")],2)],1)},n=[]},ee86:function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */.uni-grid-wrap[data-v-3ad70c0d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-3ad70c0d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-3ad70c0d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=i},f05d:function(t,i,e){"use strict";e.r(i);var o=e("4efa"),n=e("d89c");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("58a6");var d=e("f0c5"),a=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"4336d7d8",null,!1,o["a"],void 0);i["default"]=a.exports},fa76:function(t,i,e){"use strict";e.r(i);var o=e("34e2"),n=e("a1de");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("2d10");var d=e("f0c5"),a=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"6909f6f4",null,!1,o["a"],void 0);i["default"]=a.exports}}]);