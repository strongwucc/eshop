webpackJsonp([13],{"15qx":function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("Dd8w"),i=s.n(e),c=s("NYxO"),a={name:"user_coupon",data:function(){return{couponId:0,coupon:{},popupVisible:!1,bigCode:!1}},created:function(){var t=this.$route.params.coupon_id;this.coupon=this.coupons[t],this.couponId=t},components:{},computed:Object(c.d)({coupons:function(t){return t.coupons}}),methods:i()({},Object(c.b)([]))},n={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"coupon-container",style:{backgroundColor:t.coupon.color}},[s("wv-flex",{staticClass:"flex-header"},[s("wv-flex-item",[s("wv-header",{attrs:{title:"",fixed:!1,"background-color":t.coupon.color}},[s("div",{staticClass:"btn-back",attrs:{slot:"left"},on:{click:function(o){t.$router.go(-1)}},slot:"left"},[t._v("\n          返回\n        ")])])],1)],1),t._v(" "),s("wv-flex",{staticClass:"flex-body"},[s("wv-flex-item",[s("div",{staticClass:"placeholder"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t.coupon.logo_url}})]),t._v(" "),s("div",{staticClass:"brand-name"},[t._v(t._s(t.coupon.brand_name))]),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.coupon.title))]),t._v(" "),s("div",{staticClass:"sub-title"},[t._v(t._s(t.coupon.sub_title))]),t._v(" "),s("div",{staticClass:"use-button"},[s("wv-button",{style:{backgroundColor:t.coupon.color},attrs:{type:"primary",mini:!0},on:{click:function(o){t.popupVisible=!0}}},[t._v("立即使用")])],1),t._v(" "),s("div",{staticClass:"enter-area"},[s("wv-group",{attrs:{title:""}},[s("wv-cell",{staticClass:"detail-enter",attrs:{title:"优惠券详情","is-link":"",to:"/coudetail/"+t.couponId}})],1)],1)])])],1),t._v(" "),s("wv-popup",{style:{backgroundColor:t.coupon.color},attrs:{visible:t.popupVisible,height:"100%"},on:{"update:visible":function(o){t.popupVisible=o}}},[s("wv-flex",{staticClass:"popup-header"},[s("wv-flex-item",[s("wv-header",{attrs:{title:"",fixed:!1,"background-color":t.coupon.color}},[s("div",{staticClass:"btn-back",attrs:{slot:"left"},on:{click:function(o){t.popupVisible=!1}},slot:"left"},[t._v("\n            返回\n          ")])])],1)],1),t._v(" "),s("wv-flex",[s("wv-flex-item",[s("div",{staticClass:"placeholder"},[s("div",{staticClass:"brand-name"},[t._v(t._s(t.coupon.brand_name))]),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.coupon.sub_title))]),t._v(" "),s("div",{staticClass:"code-image"},[s("img",{attrs:{src:t.coupon.code_url},on:{click:function(o){t.bigCode=!0}}})]),t._v(" "),s("div",{staticClass:"code-no"},[t._v(t._s(t.coupon.code))]),t._v(" "),s("div",{staticClass:"notice"},[t._v(t._s(t.coupon.notice))])])])],1),t._v(" "),s("transition",{attrs:{name:"zoom","enter-active-class":"zoomIn","leave-active-class":"zoomOut"}},[t.bigCode?s("div",{staticClass:"mask",on:{click:function(o){t.bigCode=!1}}},[s("img",{style:{marginTop:t.coupon.code_margin_top},attrs:{src:t.coupon.big_code_url}})]):t._e()])],1)],1)},staticRenderFns:[]};var l=s("VU/8")(a,n,!1,function(t){s("45ls")},"data-v-428a8f21",null);o.default=l.exports},"45ls":function(t,o){}});
//# sourceMappingURL=13.02f5e0a8b2ee8bfadefd.js.map