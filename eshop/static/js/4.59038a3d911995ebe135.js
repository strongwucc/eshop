webpackJsonp([4],{AQf5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Xxa5"),r=e.n(a),n=e("exGp"),i=e.n(n),o=e("gRE1"),c=e.n(o),l=e("Dd8w"),u=e.n(l),_=e("NYxO"),h=e("ra3+"),d=e("Uoa1"),p=e("44dg"),f=e("i84Q"),v={data:function(){return{showLoading:!0,checkoutData:null,totalAmount:null,shopCart:null,showPayWay:!1,payWay:"online",showAlert:!1,alertText:null}},created:function(){this.INIT_BUYCART(),this.shopCart=this.cartList},mounted:function(){this.initData(),!this.userInfo||this.userInfo.member_id},components:{headTop:h.a,alertTip:d.a,loading:p.a},computed:u()({},Object(_.d)(["cartList","remarkText","inputText","userInfo","choosedStore"]),{storeSelected:function(){return!(!this.choosedStore||!this.choosedStore.store_id)},remarklist:function(){var t="";return this.remarkText&&c()(this.remarkText).forEach(function(s){t+=s[1]+"，"}),this.inputText?t+this.inputText:t.substr(0,t.lastIndexOf("，"))}}),methods:u()({},Object(_.c)(["INIT_BUYCART","SAVE_ORDER_PARAM","ORDER_SUCCESS"]),{initData:function(){var t=this;return i()(r.a.mark(function s(){var e,a;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:e=[],a=0,c()(t.shopCart).forEach(function(t){c()(t).forEach(function(t){c()(t).forEach(function(t){e.push({attrs:[],extra:{},id:t.id,name:t.name,price:t.price,quantity:t.num,sku_id:t.sku_id,specs:[t.specs],stock:t.stock}),a+=t.num*t.price})})}),t.checkoutData=e,t.totalAmount=a.toFixed(2),t.showLoading=!1;case 6:case"end":return s.stop()}},s,t)}))()},confrimOrder:function(){var t=this;return i()(r.a.mark(function s(){var e,a;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.choosedStore){s.next=6;break}return t.showAlert=!0,t.alertText="请选择自提门店",s.abrupt("return");case 6:if(t.checkoutData){s.next=10;break}return t.showAlert=!0,t.alertText="购物车为空",s.abrupt("return");case 10:return e=[],t.checkoutData.forEach(function(t){var s={};s.goods_bn=t.sku_id,s.num=t.quantity,e.push(s)}),s.next=14,Object(f.c)({store_id:t.choosedStore.store_id,goods_data:e,pay_type:t.payWay,remark_text:t.remarkText,input_text:t.inputText});case 14:if("0000"!==(a=s.sent).return_code){s.next=20;break}t.ORDER_SUCCESS(a.data),t.$router.push("/confirmOrder/payment"),s.next=23;break;case 20:return t.showAlert=!0,t.alertText=a.return_msg,s.abrupt("return",!1);case 23:case"end":return s.stop()}},s,t)}))()},showPayWayFun:function(){this.showPayWay=!this.showPayWay},choosePayWay:function(t){this.showPayWay=!this.showPayWay,this.payWay=t}}),watch:{userInfo:function(t){t&&t.user_id&&this.initAddress()}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"confirmOrderContainer"},[t.showLoading?t._e():e("section",[e("head-top",{attrs:{"head-title":"确认订单",goBack:"true","signin-up":"confirmOrder"}}),t._v(" "),e("router-link",{staticClass:"store_container",attrs:{to:{path:"/confirmOrder/stores"}}},[e("div",{staticClass:"store_empty_left"},[e("svg",{staticClass:"location_icon"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#location"}})]),t._v(" "),t.storeSelected?e("div",{staticClass:"store_detail_container"},[e("header",[e("span",[t._v(t._s(t.choosedStore.store_name))]),t._v(" "),e("span",[t._v(t._s(t.choosedStore.tel))])]),t._v(" "),e("div",{staticClass:"store_detail"},[e("p",[t._v(t._s(t.choosedStore.addr))])])]):e("div",{staticClass:"add_store"},[t._v("请选择自提门店")])]),t._v(" "),e("svg",{staticClass:"store_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])]),t._v(" "),e("section",{staticClass:"food_list"},[t.shopCart?e("ul",{staticClass:"food_list_ul"},t._l(t.checkoutData,function(s){return e("li",{key:s.sku_id,staticClass:"food_item_style"},[e("p",{staticClass:"food_name ellipsis"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"num_price"},[e("span",[t._v("x "+t._s(s.quantity))]),t._v(" "),e("span",[t._v("¥"+t._s(s.price))])])])})):t._e(),t._v(" "),e("div",{staticClass:"food_item_style total_price"},[e("p",{staticClass:"food_name ellipsis"},[t._v("订单 ¥"+t._s(t.totalAmount))]),t._v(" "),e("div",{staticClass:"num_price"},[e("span",[t._v("待支付 ¥"+t._s(t.totalAmount))])])])]),t._v(" "),e("section",{staticClass:"pay_way container_style"},[e("header",{staticClass:"header_style"},[e("span",[t._v("支付方式")]),t._v(" "),e("div",{staticClass:"more_type",on:{click:t.showPayWayFun}},[e("span",[t._v(t._s("online"===t.payWay?"在线支付":"现金支付"))]),t._v(" "),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])]),t._v(" "),e("section",{staticClass:"pay_way container_style"},[e("router-link",{staticClass:"header_style",attrs:{to:{path:"/confirmOrder/remark"}}},[e("span",[t._v("备注")]),t._v(" "),e("div",{staticClass:"more_type"},[e("span",{staticClass:"ellipsis"},[t._v(t._s(t.remarkText||t.inputText?t.remarklist:"口味、偏好等"))]),t._v(" "),e("svg",{staticClass:"address_empty_right"},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])],1),t._v(" "),e("section",{staticClass:"confrim_order"},[e("p",[t._v("待支付 ¥"+t._s(t.totalAmount))]),t._v(" "),e("p",{on:{click:t.confrimOrder}},[t._v("确认下单")])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showPayWay?e("div",{staticClass:"cover",on:{click:t.showPayWayFun}}):t._e()]),t._v(" "),e("transition",{attrs:{name:"slid_up"}},[t.showPayWay?e("div",{staticClass:"choose_type_Container"},[e("header",[t._v("支付方式")]),t._v(" "),e("ul",[e("li",{class:{choose:"offline"==t.payWay}},[e("span",[t._v("现金支付")]),t._v(" "),e("svg",{staticClass:"address_empty_right",on:{click:function(s){t.choosePayWay("offline")}}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})])]),t._v(" "),e("li",{class:{choose:"online"==t.payWay}},[e("span",[t._v("在线支付")]),t._v(" "),e("svg",{staticClass:"address_empty_right",on:{click:function(s){t.choosePayWay("online")}}},[e("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})])])])]):t._e()])],1),t._v(" "),t.showLoading?e("loading"):t._e(),t._v(" "),t.showAlert?e("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:function(s){t.showAlert=!1}}}):t._e(),t._v(" "),e("transition",{attrs:{name:"router-slid",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var y=e("VU/8")(v,m,!1,function(t){e("Ul/t")},"data-v-f9d13858",null);s.default=y.exports},TmV0:function(t,s,e){e("fZOM"),t.exports=e("FeBl").Object.values},"Ul/t":function(t,s){},fZOM:function(t,s,e){var a=e("kM2E"),r=e("mbce")(!1);a(a.S,"Object",{values:function(t){return r(t)}})},gRE1:function(t,s,e){t.exports={default:e("TmV0"),__esModule:!0}},mbce:function(t,s,e){var a=e("lktj"),r=e("TcQ7"),n=e("NpIQ").f;t.exports=function(t){return function(s){for(var e,i=r(s),o=a(i),c=o.length,l=0,u=[];c>l;)n.call(i,e=o[l++])&&u.push(t?[e,i[e]]:i[e]);return u}}}});
//# sourceMappingURL=4.59038a3d911995ebe135.js.map