(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-detail"],{"10dc":function(t,o,i){"use strict";var a=i("6807"),n=i.n(a);n.a},6807:function(t,o,i){var a=i("8b5e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("19d6cb30",a,!0,{sourceMap:!1,shadowMode:!1})},"71cf":function(t,o,i){"use strict";i.r(o);var a=i("9684"),n=i("cef3");for(var e in n)["default"].indexOf(e)<0&&function(t){i.d(o,t,(function(){return n[t]}))}(e);i("10dc");var s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"bcc97b90",null,!1,a["a"],void 0);o["default"]=c.exports},"8ade":function(t,o,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,i("d3b7"),i("159b");var n=a(i("c7eb")),e=a(i("1da1")),s=a(i("5530")),c=i("26cb"),d={data:function(){return{goods:{},details:"",nodes:"",goodsId:""}},onLoad:function(t){this.goodsId=t.goodsId},computed:(0,s.default)((0,s.default)((0,s.default)({},(0,c.mapState)(["userInfo","collectList"])),(0,c.mapGetters)(["goodsNumber"])),{},{star:function(){var t=this;if(this.collectList.length>0){var o=!1;return this.collectList.forEach((function(i){i.user_id==t.userInfo.id&&i.goods_id==t.goodsId&&(o=!0)})),o}return!1}}),methods:(0,s.default)((0,s.default)({},(0,c.mapActions)(["addCartGoods","getCollectList","collectGoods","cancelCollectGoods"])),{},{getGoodsDetail:function(t){var o=this;return(0,e.default)((0,n.default)().mark((function i(){var a;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,o.$api.goods.getGoodsDetail(t);case 2:a=i.sent,200===a.data.code&&(o.goods=a.data.data,o.details=o.goods.detail,o.nodes=o.formatRichText(o.goods.detail.details));case 4:case"end":return i.stop()}}),i)})))()},cartClick:function(){uni.switchTab({url:"/pages/cart/cart"})},starClick:function(){this.star?this.cancelCollectGoods(this.goodsId):this.collectGoods(this.goodsId)},formatRichText:function(t){return t}}),onShow:function(){this.getGoodsDetail(this.goodsId),this.getCollectList()}};o.default=d},"8b5e":function(t,o,i){var a=i("24fb");o=a(!1),o.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */.container[data-v-bcc97b90]{padding-bottom:%?100?%}.container .goods-img[data-v-bcc97b90]{width:100%;background-color:#fff}.container .goods-img .img[data-v-bcc97b90]{width:100%}.container .goods-info[data-v-bcc97b90]{background-color:#fff;padding:0 %?20?% %?20?%}.container .goods-info .title[data-v-bcc97b90]{font-size:%?30?%;font-weight:700}.container .goods-info .dec[data-v-bcc97b90]{font-size:%?24?%;line-height:%?36?%;color:#909399;margin:%?15?% 0 %?20?%}.container .goods-info .price-box[data-v-bcc97b90]{font-size:%?22?%;color:#ff557f}.container .goods-info .price-box .price[data-v-bcc97b90]{font-size:%?35?%}.container .goods-info .text-box[data-v-bcc97b90]{display:flex;align-items:center;margin-top:%?15?%}.container .goods-info .text-box .item[data-v-bcc97b90]{width:50%;font-size:%?24?%;color:#6a6a6a}.container .other[data-v-bcc97b90]{background-color:#fff;font-size:%?26?%;padding-top:%?10?%}.container .other .uni-row[data-v-bcc97b90]{border-bottom:1px solid #ededed;height:%?70?%;line-height:%?70?%}.container .other .uni-row[data-v-bcc97b90]:last-child{border:0}.container .other .uni-row .demo-uni-col[data-v-bcc97b90]{padding-left:%?20?%}.container .goods-comment[data-v-bcc97b90]{margin:%?10?% 0}.container .goods-detail[data-v-bcc97b90]{padding:%?20?% %?20?% %?40?%;background-color:#fff}.container .goods-detail .title[data-v-bcc97b90]{text-align:center;font-size:%?30?%;line-height:%?90?%;position:relative}.container .goods-detail .title[data-v-bcc97b90]::before{content:"";width:%?110?%;height:%?1?%;background-color:#000;position:absolute;top:%?46?%;left:calc(50% - %?190?%)}.container .goods-detail .title[data-v-bcc97b90]::after{content:"";width:%?110?%;height:%?1?%;background-color:#000;position:absolute;top:%?46?%;right:calc(50% - %?190?%)}.container .goods-detail .content[data-v-bcc97b90]{margin-top:%?20?%}.container .goods-detail .h5-content ul[data-v-bcc97b90]{font-size:%?26?%;line-height:%?45?%;margin-bottom:%?20?%}.container .goods-detail .h5-content li[data-v-bcc97b90]{list-style-type:none}.container .goods-detail .h5-content img[data-v-bcc97b90]{width:100%;height:auto;float:left}.container .goods-detail .h5-content p[data-v-bcc97b90]{overflow:hidden}.container .goods-nav[data-v-bcc97b90]{position:fixed;left:0;bottom:0;width:100%;height:%?90?%;background-color:#fff;display:flex;align-items:center;padding:%?10?% %?25?% %?10?% %?10?%}.container .goods-nav .icon-box[data-v-bcc97b90]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 %?20?%}.container .goods-nav .icon-box .text[data-v-bcc97b90]{font-size:%?18?%;color:#3a3a3a;margin-top:%?-4?%}.container .goods-nav .btn[data-v-bcc97b90]{flex:1;background-color:#349d7e;color:#fff;font-size:%?28?%;border-radius:%?50?%;height:100%;margin-left:%?15?%}',""]),t.exports=o},9684:function(t,o,i){"use strict";i.d(o,"b",(function(){return n})),i.d(o,"c",(function(){return e})),i.d(o,"a",(function(){return a}));var a={uniRow:i("b2f6").default,uniCol:i("70d8").default,uniList:i("c159").default,uniListItem:i("17bb").default,uniIcons:i("dd21").default},n=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{staticClass:"img",attrs:{src:t.goods.image,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.goods.title))]),i("v-uni-view",{staticClass:"dec"},[t._v("介绍: "+t._s(t.goods.describe))]),i("v-uni-view",{staticClass:"price-box"},[t._v("￥"),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.goods.price))])],1),i("v-uni-view",{staticClass:"text-box"},[i("v-uni-view",{staticClass:"item"},[t._v("销量: "+t._s(t.goods.sales))]),i("v-uni-view",{staticClass:"item"},[t._v("库存: "+t._s(t.goods.stock))])],1)],1),i("v-uni-view",{staticClass:"other"},[i("uni-row",{staticClass:"label-box"},[i("uni-col",{attrs:{span:5}},[i("v-uni-view",{staticClass:"demo-uni-col dark"},[t._v("规格")])],1),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticClass:"demo-uni-col light"},[t._v(t._s(t.details.norms))])],1)],1),i("uni-row",{staticClass:"label-box"},[i("uni-col",{attrs:{span:5}},[i("v-uni-view",{staticClass:"demo-uni-col dark"},[t._v("品牌")])],1),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticClass:"demo-uni-col light"},[t._v(t._s(t.details.producer))])],1)],1),i("uni-row",{staticClass:"label-box"},[i("uni-col",{attrs:{span:5}},[i("v-uni-view",{staticClass:"demo-uni-col dark"},[t._v("服务")])],1),i("uni-col",{attrs:{span:19}},[i("v-uni-view",{staticClass:"demo-uni-col light"},[t._v("品质保证、不满意包退")])],1)],1)],1),i("v-uni-view",{staticClass:"goods-comment"},[i("uni-list",[i("uni-list-item",{attrs:{showArrow:!0,title:"商品评价",rightText:"查看"}})],1)],1),i("v-uni-view",{staticClass:"goods-detail"},[i("v-uni-view",{staticClass:"title"},[t._v("图文详情")]),i("v-uni-view",{staticClass:"content h5-content"},[i("v-uni-rich-text",{attrs:{nodes:t.nodes}})],1)],1),i("v-uni-view",{staticClass:"goods-nav"},[i("v-uni-view",{staticClass:"icon-box icon-info-box",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.cartClick.apply(void 0,arguments)}}},[i("uni-icons",{staticClass:"cart",attrs:{type:"cart",size:"22"}}),i("v-uni-view",{staticClass:"text"},[t._v("购物车")]),i("v-uni-view",{staticClass:"info"},[t._v(t._s(t.goodsNumber))])],1),i("v-uni-view",{staticClass:"icon-box",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.starClick.apply(void 0,arguments)}}},[i("uni-icons",{staticClass:"star",attrs:{type:t.star?"star-filled":"star",size:"22",color:t.star?"#ff557f":""}}),i("v-uni-view",{staticClass:"text"},[t._v("收藏商品")])],1),i("v-uni-button",{staticClass:"btn",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.addCartGoods(t.goodsId)}}},[t._v("加入购物车")])],1)],1)},e=[]},cef3:function(t,o,i){"use strict";i.r(o);var a=i("8ade"),n=i.n(a);for(var e in a)["default"].indexOf(e)<0&&function(t){i.d(o,t,(function(){return a[t]}))}(e);o["default"]=n.a}}]);