webpackJsonp([5],{"/UQ/":function(t,s){},"7XOk":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Xxa5"),e=a.n(i),n=a("exGp"),r=a.n(n),_=a("Dd8w"),c=a.n(_),o=a("NYxO"),l=a("ra3+"),d=a("i84Q"),v=a("MfVK"),h=a("Uoa1"),u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"alet_container"},[a("section",{staticClass:"tip_text_container"},[t._m(0),t._v(" "),a("p",{staticClass:"tip_text"},[t._v(t._s(t.alertText))]),t._v(" "),a("div",{staticClass:"btns"},[a("div",{staticClass:"confrim",on:{click:t.confirmTip}},[t._v("确认")]),t._v(" "),a("div",{staticClass:"cancel",on:{click:t.closeTip}},[t._v("取消")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip_icon"},[s("span"),this._v(" "),s("span")])}]};var D=a("VU/8")({data:function(){return{positionY:0,timer:null}},mounted:function(){},props:["alertText"],methods:{closeTip:function(){this.$emit("closeTip")},confirmTip:function(){this.$emit("confirmTip")}}},u,!1,function(t){a("/UQ/")},"data-v-784a3ccd",null).exports,f=a("44dg"),m={name:"user_order",data:function(){return{orderId:this.$route.params.order_id,detail:{},showAlert:!1,alertText:null,cancelOrderId:null,showConfirm:!1,confirmText:null,finishOrderId:null,showFinish:!1,finishText:null,duration:2e3,showLoading:!1}},components:{headTop:l.a,alertTip:h.a,confirmTip:D,loading:f.a},computed:c()({},Object(o.d)([])),created:function(){this.getOrderDetail({order_id:this.orderId})},methods:c()({},Object(o.b)({}),{getOrderDetail:function(t){var s=this;return r()(e.a.mark(function a(){var i;return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(d.m)(t);case 2:"0000"===(i=a.sent).return_code&&(s.detail=i.data);case 4:case"end":return a.stop()}},a,s)}))()},goCancel:function(t){var s=this;return r()(e.a.mark(function a(){return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:s.cancelOrderId=t,s.showConfirm=!0,s.confirmText="确认取消？";case 3:case"end":return a.stop()}},a,s)}))()},goPay:function(t){var s=this;return r()(e.a.mark(function a(){var i;return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s.showLoading=!0,a.next=3,Object(d.n)({order_id:t,pay_type:"wx",source:"eshop"});case 3:i=a.sent,s.showLoading=!1,"0000"===i.return_code?window.location.href=i.data.pay_url:(s.showAlert=!0,s.alertText=i.return_msg);case 6:case"end":return a.stop()}},a,s)}))()},goFinish:function(t){var s=this;return r()(e.a.mark(function a(){return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:s.finishOrderId=t,s.showFinish=!0,s.finishText="确认完成？";case 3:case"end":return a.stop()}},a,s)}))()},closeTipFun:function(){this.showAlert=!1},closeConfirmFun:function(){this.showConfirm=!1},doConfirmFun:function(){var t=this;return r()(e.a.mark(function s(){var a;return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.showLoading=!0,t.showConfirm=!1,t.confirmText=null,s.next=5,Object(d.b)({order_id:t.cancelOrderId});case 5:a=s.sent,t.showLoading=!1,"0000"===a.return_code?(t.detail.status="dead",Object(v.Toast)({duration:t.duration,message:"已取消",type:"text"})):(t.showAlert=!0,t.alertText=a.return_msg),t.cancelOrderId=null;case 9:case"end":return s.stop()}},s,t)}))()},closeFinishFun:function(){this.showFinish=!1},doFinishFun:function(){var t=this;return r()(e.a.mark(function s(){var a;return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.showLoading=!0,t.showFinish=!1,t.finishText=null,s.next=5,Object(d.f)({order_id:t.finishOrderId});case 5:a=s.sent,t.showLoading=!1,"0000"===a.return_code?(t.detail.status="finish",Object(v.Toast)({duration:t.duration,message:"已完成",type:"text"})):(t.showAlert=!0,t.alertText=a.return_msg),t.finishOrderId=null;case 9:case"end":return s.stop()}},s,t)}))()}})},p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"Bbg"},[i("head-top",{attrs:{"head-title":"我的订单",goBack:"true"}}),t._v(" "),i("div",{staticClass:"DD_head"},["active"===t.detail.status&&"0"===t.detail.pay_status?[i("img",{staticClass:"DD_head_bg",attrs:{src:a("obNS")}}),t._v(" "),t._m(0)]:t._e(),t._v(" "),"active"===t.detail.status&&"1"===t.detail.pay_status?[i("img",{staticClass:"DD_head_bg",attrs:{src:a("obNS")}}),t._v(" "),t._m(1)]:t._e(),t._v(" "),"finish"===t.detail.status?[i("img",{staticClass:"DD_head_bg",attrs:{src:a("obNS")}}),t._v(" "),t._m(2)]:t._e(),t._v(" "),"dead"===t.detail.status?[i("img",{staticClass:"DD_head_bg",attrs:{src:a("obNS")}}),t._v(" "),t._m(3)]:t._e(),t._v(" "),i("div",{staticStyle:{clear:"both"}})],2),t._v(" "),i("div",{staticClass:"DD_name wbg"},[i("div",{staticClass:"DD_name_div1"},[i("span",[t._v("取货门店："),i("span",{staticClass:"black1"},[t._v(t._s(t.detail.store?t.detail.store.store_name:""))])]),i("span",{staticClass:"DD_tel black1"},[t._v(t._s(t.detail.store?t.detail.store.tel:""))])]),t._v(" "),i("div",{staticClass:"DD_name_div2"},[i("span",[t._v("门店地址："),i("span",{staticClass:"black1"},[t._v(t._s(t.detail.store?t.detail.store.addr:""))])])])]),t._v(" "),i("div",{staticClass:"DD_line"}),t._v(" "),i("div",[i("div",{staticClass:"DD_shang wbg"},[t._v("商品信息")]),t._v(" "),t._l(t.detail.items,function(s,a){return i("div",{key:a,staticClass:"my_order_list"},[i("div",{staticClass:"my_order_leftimg"},[i("img",{staticClass:"my_o_img",attrs:{src:s.goods_image}})]),t._v(" "),i("div",{staticClass:"my_order_right"},[i("div",{staticClass:"my_o_right_one"},[i("span",[t._v(t._s(s.name))]),t._v(" "),i("span",{staticClass:"right glay"},[t._v("X"),i("span",[t._v(t._s(s.nums))])])]),t._v(" "),i("div",{staticClass:"my_guige"},[t._v("规格："),i("span",[t._v(t._s(s.spec_info))])]),t._v(" "),i("div",{staticClass:"right black"},[t._v("￥"+t._s(s.total))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])})],2),t._v(" "),i("div",{staticClass:"wbg"},[i("div",{staticClass:"DD_shang DD_border"},[t._v("订单信息")]),t._v(" "),i("div",{staticClass:"DD_box DD_border"},[i("div",{staticClass:"DD_name1"},[i("span",{staticClass:"DD_border_left"},[t._v("商品合计")]),t._v(" "),i("span",{staticClass:"DD_border_right"},[t._v("￥"+t._s(t.detail.goods_amount))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticClass:"DD_name1"},[i("span",{staticClass:"DD_border_left"},[t._v("运费")]),t._v(" "),i("span",{staticClass:"DD_border_right"},[t._v("￥"+t._s(t.detail.cost_freight))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),t._m(4),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticClass:"DD_name1"},[i("span",{staticClass:"DD_border_left"},[t._v("优惠活动")]),t._v(" "),i("span",{staticClass:"DD_border_right"},[t._v("-￥"+t._s(t.detail.discount))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticClass:"DD_name1"},[i("span",{staticClass:"DD_border_left"},[t._v("应付金额")]),t._v(" "),i("span",{staticClass:"DD_border_right"},[t._v("￥"+t._s(t.detail.total_amount))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}})]),t._v(" "),i("div",{staticClass:"DD_box"},[i("div",{staticClass:"DD_name1"},[i("span",{staticClass:"DD_border_left"},[t._v("订单编号")]),t._v(" "),i("span",{staticClass:"DD_border_right"},[t._v(t._s(t.detail.order_id))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticClass:"DD_name1"},[i("span",{staticClass:"DD_border_left"},[t._v("提交时间")]),t._v(" "),i("span",{staticClass:"DD_border_right"},[t._v(t._s(t.detail.createtime))])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),t._m(5),t._v(" "),i("div",{staticStyle:{clear:"both"}})])]),t._v(" "),i("div",{staticClass:"DD_line height20"}),t._v(" "),i("div",{staticStyle:{height:"70px"}}),t._v(" "),i("div",{staticClass:"DD_o_wid"},[i("div",{staticClass:"my_o_wid_left"},[i("div",{staticClass:"my_o_wid_ying DD_ying"},[t._v("应付金额："),i("span",{staticClass:"my_o_color"},[t._v("￥"),i("span",[t._v(t._s(t.detail.total_amount))])])])]),t._v(" "),i("div",{staticClass:"my_o_wid_left"},["0"===t.detail.pay_status&&"active"===t.detail.status?i("div",{staticClass:"DD_chakan",on:{click:function(s){t.goCancel(t.detail.order_id)}}},[t._v("取消订单")]):t._e(),t._v(" "),"0"===t.detail.pay_status&&"active"===t.detail.status?i("div",{staticClass:"DD_liji",on:{click:function(s){t.goPay(t.detail.order_id)}}},[t._v("立即付款")]):t._e(),t._v(" "),"1"===t.detail.pay_status&&"active"===t.detail.status?i("div",{staticClass:"DD_liji",on:{click:function(s){t.goFinish(t.detail.order_id)}}},[t._v("已完成")]):t._e()]),t._v(" "),i("div",{staticStyle:{clear:"both"}})]),t._v(" "),t.showAlert?i("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:t.closeTipFun}}):t._e(),t._v(" "),t.showConfirm?i("confirm-tip",{attrs:{alertText:t.confirmText},on:{closeTip:t.closeConfirmFun,confirmTip:t.doConfirmFun}}):t._e(),t._v(" "),t.showFinish?i("confirm-tip",{attrs:{alertText:t.finishText},on:{closeTip:t.closeFinishFun,confirmTip:t.doFinishFun}}):t._e(),t._v(" "),i("loading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"DD_head-half"},[s("div",{staticClass:"DD_deng"},[this._v("未支付")]),this._v(" "),s("div",{staticClass:"DD_ZB"},[this._v("该订单正在等着您去支付...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"DD_head-half"},[s("div",{staticClass:"DD_deng"},[this._v("已支付")]),this._v(" "),s("div",{staticClass:"DD_ZB"},[this._v("您的物品正在等着您去取...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"DD_head-half"},[s("div",{staticClass:"DD_deng"},[this._v("已完成")]),this._v(" "),s("div",{staticClass:"DD_ZB"},[this._v("您的订单已完成")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"DD_head-half"},[s("div",{staticClass:"DD_deng"},[this._v("已取消")]),this._v(" "),s("div",{staticClass:"DD_ZB"},[this._v("您的订单已取消")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"DD_name1"},[s("span",{staticClass:"DD_border_left"},[this._v("优惠券")]),this._v(" "),s("span",{staticClass:"DD_border_right"},[this._v("￥0.00")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"DD_name1"},[s("span",{staticClass:"DD_border_left"},[this._v("支付方式")]),this._v(" "),s("span",{staticClass:"DD_border_right"},[this._v("微信支付/会员卡支付")])])}]};var C=a("VU/8")(m,p,!1,function(t){a("Uq0a")},"data-v-664525d8",null);s.default=C.exports},Uq0a:function(t,s){},obNS:function(t,s,a){t.exports=a.p+"static/img/icon_daifahuo@2x.6fdb381.png"}});
//# sourceMappingURL=5.e3a1ebbe3c2d07e19989.js.map