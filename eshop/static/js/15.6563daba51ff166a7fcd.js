webpackJsonp([15],{"7dU0":function(t,e){},M5CR:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),i=r("exGp"),s=r.n(i),o=r("Dd8w"),c=r.n(o),u=r("ra3+"),l=r("NYxO"),d=r("i84Q"),_=r("Uoa1"),m=r("44dg"),v={data:function(){return{payDetail:!1,showAlert:!1,alertText:null,countNum:0,timeLimit:900,gotoOrders:!1,confirmStatus:!1,showLoading:!1}},components:{headTop:u.a,alertTip:_.a,loading:m.a},created:function(){this.initData(),this.shopid&&this.CLEAR_CART(this.shopid)},mounted:function(){},beforeDestroy:function(){clearInterval(this.timer),clearInterval(this.confirmTimer)},props:[],computed:c()({},Object(l.d)(["orderMessage","userInfo","storeId","cartPrice"]),{remaining:function(){var t=parseInt(this.countNum/60);t<10&&(t="0"+t);var e=parseInt(this.countNum%60);return e<10&&(e="0"+e),"00 : "+t+" : "+e}}),methods:c()({},Object(l.c)(["CLEAR_CART"]),{initData:function(){var t=this;return s()(n.a.mark(function e(){var r,a,i,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading=!0,e.next=3,Object(d.o)({order_id:t.orderMessage.order_id});case 3:r=e.sent,t.showLoading=!1,"0000"===r.return_code?(t.payDetail=r.data,"0"!==r.data.pay_status&&(t.showAlert=!0,t.alertText="怎么回事？该订单已支付了哦！"),a=parseInt(t.payDetail.createtime),i=new Date,s=parseInt(i.getTime().toString().substr(0,10)),a+t.timeLimit<=s&&(t.showAlert=!0,t.alertText="哎呀，订单过期了哦！"),t.countNum=t.timeLimit+a-s,t.remainingTime(),t.queryConfirmTime()):(t.showAlert=!0,t.alertText=t.payDetail.return_msg);case 6:case"end":return e.stop()}},e,t)}))()},queryConfirm:function(){var t=this;return s()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.o)({order_id:t.orderMessage.order_id});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,t)}))()},queryConfirmTime:function(){clearInterval(this.confirmTimer);var t=this;this.confirmTimer=setInterval(function(){t.queryConfirm().then(function(e){"0000"===e.return_code&&"1"===e.data.confirm_status&&(t.confirmStatus=!0,clearInterval(t.confirmTimer))})},2e3)},remainingTime:function(){var t=this;clearInterval(this.timer),this.timer=setInterval(function(){t.countNum--,0===t.countNum&&(clearInterval(t.timer),t.showAlert=!0,t.alertText="支付超时")},1e3)},confrimPay:function(){var t=this;return s()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading=!0,e.next=3,Object(d.n)({order_id:t.orderMessage.order_id,pay_type:"wx",source:"eshop"});case 3:r=e.sent,t.showLoading=!1,"0000"===r.return_code?window.location.href=r.data.pay_url:(t.showAlert=!0,t.alertText=r.return_msg);case 6:case"end":return e.stop()}},e,t)}))()},closeTipFun:function(){this.showAlert=!1}})},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating_page"},[r("head-top",{attrs:{"head-title":"付款","go-back":"true"}}),t._v(" "),r("section",{staticClass:"show_time_amount"},[r("section",[r("header",{staticClass:"time_last"},[t._v("支付剩余时间")]),t._v(" "),r("p",{staticClass:"time"},[t._v(t._s(t.remaining))])])]),t._v(" "),t.payDetail?r("div",{staticClass:"order_info"},[t._v("订单信息")]):t._e(),t._v(" "),t.payDetail?r("section",{staticClass:"order_info_list"},[r("section",{staticClass:"order_item"},[t._m(0),t._v(" "),r("span",{staticClass:"order_no"},[t._v(t._s(t.payDetail.order_id))])]),t._v(" "),r("section",{staticClass:"order_item"},[t._m(1),t._v(" "),r("span",{staticClass:"order_amount"},[t._v("￥"+t._s(parseFloat(t.payDetail.total_amount).toFixed(2)))])]),t._v(" "),r("section",{staticClass:"order_item"},[t._m(2),t._v(" "),r("span",{staticClass:"order_payment"},[t._v(t._s("-1"===t.payDetail.payment?"到店支付":"在线支付"))])])]):t._e(),t._v(" "),r("p",{staticClass:"determine",on:{click:t.confrimPay}},[t._v("确认支付")]),t._v(" "),r("transition",{attrs:{name:"zoom","enter-active-class":"zoomIn","leave-active-class":"zoomOut"}},[t.confirmStatus?r("img",{staticClass:"confirmMark",attrs:{src:""}}):t._e()]),t._v(" "),t.showAlert?r("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:t.closeTipFun}}):t._e(),t._v(" "),r("loading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order_icon_contaienr"},[e("span",[this._v("订单号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order_icon_contaienr"},[e("span",[this._v("订单金额")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order_icon_contaienr"},[e("span",[this._v("支付方式")])])}]};var p=r("VU/8")(v,h,!1,function(t){r("7dU0")},"data-v-0a8edb44",null);e.default=p.exports}});
//# sourceMappingURL=15.6563daba51ff166a7fcd.js.map