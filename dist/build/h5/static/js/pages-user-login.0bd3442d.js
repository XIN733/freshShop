(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"3bb7":function(t,a,e){"use strict";var n=e("7b03"),o=e.n(n);o.a},"3c45":function(t,a,e){"use strict";e.r(a);var n=e("ce5f"),o=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"454f":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */.container[data-v-631aa68a]{width:100%;min-height:100vh;background-color:#fff;position:relative}.container .bg1[data-v-631aa68a]{position:absolute;top:0;left:0;width:100%;z-index:1}.container .bg2[data-v-631aa68a]{position:absolute;bottom:%?120?%;left:calc(50% - %?250?%);width:%?500?%;z-index:1}.container .form-box[data-v-631aa68a]{position:absolute;top:calc(50% - %?280?%);left:0;z-index:2;width:100%;padding:0 %?50?%;text-align:center}.container .form-box .title[data-v-631aa68a]{font-size:%?50?%;color:#009000;font-weight:700;display:inline-block;margin-bottom:%?20?%}.container .form-box[data-v-631aa68a] .uni-forms-item{width:100%;margin-top:%?40?%;position:relative}.container .form-box[data-v-631aa68a] .uni-forms-item .input{width:100%;height:%?80?%;border:1px solid #009000;border-radius:%?8?%;text-align:left;padding:0 %?30?%;font-size:%?28?%}.container .form-box[data-v-631aa68a] .uni-forms-item .icon{position:absolute;top:calc(50% - %?20?%);right:%?20?%}.container .form-box .btn[data-v-631aa68a]{width:100%;height:%?80?%;line-height:%?80?%;background-color:#009000;border-radius:%?50?%;color:#fff;margin-top:%?50?%;font-size:%?35?%}.container .form-box .tip1[data-v-631aa68a]{font-size:%?26?%;color:#009000;padding:%?20?% 0;margin-top:%?15?%}.container .form-box .tip2[data-v-631aa68a]{font-size:%?26?%;color:#909399;position:fixed;bottom:%?15?%;left:0;width:100%;padding:%?20?% 0}.container .form-box .tip2 uni-text[data-v-631aa68a]{color:#009000}',""]),t.exports=a},"7b03":function(t,a,e){var n=e("454f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("555a78ca",n,!0,{sourceMap:!1,shadowMode:!1})},"8d2e":function(t,a,e){"use strict";e.r(a);var n=e("bd39"),o=e("3c45");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("3bb7");var s=e("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"631aa68a",null,!1,n["a"],void 0);a["default"]=r.exports},bd39:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={uniForms:e("082c").default,uniFormsItem:e("05d2").default,uniIcons:e("dd21").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-image",{staticClass:"bg1",attrs:{src:"http://localhost:3000/public/images/bj/bg1.png",mode:"widthFix"}}),e("v-uni-image",{staticClass:"bg2",attrs:{src:"http://localhost:3000/public/images/bj/bg2.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"form-box"},[e("v-uni-view",{staticClass:"title"},[t._v("用户登录")]),e("uni-forms",{ref:"loginForm",attrs:{rules:t.rules,modelValue:t.loginForm}},[e("uni-forms-item",{staticClass:"input-box",attrs:{name:"username"}},[e("v-uni-input",{staticClass:"input",attrs:{type:"text","label-width":"",placeholder:"请输入用户名"},model:{value:t.loginForm.username,callback:function(a){t.$set(t.loginForm,"username",a)},expression:"loginForm.username"}})],1),e("uni-forms-item",{staticClass:"input-box",attrs:{name:"password"}},[e("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入密码",password:t.showPassword},model:{value:t.loginForm.password,callback:function(a){t.$set(t.loginForm,"password",a)},expression:"loginForm.password"}}),e("uni-icons",{directives:[{name:"show",rawName:"v-show",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"icon",attrs:{type:t.showPassword?"eye-filled":"eye-slash-filled",color:t.showPassword?"#009000":"#999",size:"25"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changePassword.apply(void 0,arguments)}}})],1)],1),e("v-uni-button",{staticClass:"btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickLogin.apply(void 0,arguments)}}},[t._v("登录")]),e("v-uni-view",{staticClass:"tip2",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toRegister.apply(void 0,arguments)}}},[t._v("还没有账号？"),e("v-uni-text",[t._v("马上注册")])],1)],1)],1)},i=[]},ce5f:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e("c7eb")),i=n(e("1da1")),s=n(e("5530")),r=e("26cb"),u={data:function(){return{loginForm:{username:"",password:""},rules:{username:{rules:[{required:!0,errorMessage:"用户名不能为空"}]},password:{rules:[{required:!0,errorMessage:"密码不能为空"}]}},showPassword:!0}},watch:{"loginForm.password":function(t,a){t||(this.showPassword=!0)}},methods:(0,s.default)((0,s.default)({},(0,r.mapMutations)(["setUserInfo","setToken"])),{},{changePassword:function(){this.showPassword=!this.showPassword},clickLogin:function(){var t=this;this.$refs.loginForm.validate().then((function(a){t.submitLogin()})).catch((function(t){console.log("err",t)}))},submitLogin:function(){var t=this;return(0,i.default)((0,o.default)().mark((function a(){var e,n,i;return(0,o.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$api.user.login(t.loginForm);case 2:e=a.sent,200===e.data.code&&(uni.showToast({title:e.data.message,icon:"none",duration:2e3}),t.setToken(e.data.data),t.getUserInfo(e.data.data.userId),n=getCurrentPages(),n.length<=1?uni.switchTab({url:"/pages/user/user"}):(i=n[n.length-2],console.log(i),"pages/user/login"==i.route?uni.switchTab({url:"/pages/user/user"}):uni.navigateBack()));case 4:case"end":return a.stop()}}),a)})))()},getUserInfo:function(t){var a=this;return(0,i.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$api.user.getUserInfo(t);case 2:n=e.sent,200===n.data.code&&a.setUserInfo(n.data.data);case 4:case"end":return e.stop()}}),e)})))()},toRegister:function(){uni.navigateTo({url:"/pages/user/register"})}})};a.default=u}}]);