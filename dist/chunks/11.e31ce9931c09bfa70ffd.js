(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[11],{718:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return m}));var n=r(0),c=r(49),a=r(188),o=r.n(a),i=r(33),s=o()(i.b),l=function(e){var t=s.getCurrencyConfig(),r=Object(c.applyFilters)("woocommerce_admin_report_currency",t,e);return o()(r)},m=Object(n.createContext)(s)},727:function(e,t,r){"use strict";var n=r(14),c=r.n(n),a=r(13),o=r.n(a),i=r(16),s=r.n(i),l=r(17),m=r.n(l),u=r(6),d=r.n(u),f=r(0),p=r(4),b=r.n(p),_=r(1),y=r.n(_),O=r(701),h=r(68);r(729);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var c=d()(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return m()(this,r)}}var j=function(e){s()(r,e);var t=v(r);function r(){return c()(this,r),t.apply(this,arguments)}return o()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.menu,n=e.subtitle,c=e.title,a=e.unreadMessages,o=b()({"woocommerce-layout__inbox-panel-header":n,"woocommerce-layout__activity-panel-header":!n},t),i=a||0;return Object(f.createElement)("div",{className:o},Object(f.createElement)("div",{className:"woocommerce-layout__inbox-title"},Object(f.createElement)(O.a,{variant:"title.small"},c),Object(f.createElement)(O.a,{variant:"button"},i>0&&Object(f.createElement)("span",{className:"woocommerce-layout__inbox-badge"},a))),Object(f.createElement)("div",{className:"woocommerce-layout__inbox-subtitle"},n&&Object(f.createElement)(O.a,{variant:"body.small"},n)),r&&Object(f.createElement)("div",{className:"woocommerce-layout__activity-panel-header-menu"},r))}}]),r}(f.Component);j.propTypes={className:y.a.string,unreadMessages:y.a.number,title:y.a.string.isRequired,subtitle:y.a.string,menu:y.a.shape({type:y.a.oneOf([h.EllipsisMenu])})},t.a=j},729:function(e,t,r){},730:function(e,t,r){"use strict";r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return R}));var n=r(14),c=r.n(n),a=r(13),o=r.n(a),i=r(16),s=r.n(i),l=r(17),m=r.n(l),u=r(6),d=r.n(u),f=r(0),p=r(4),b=r.n(p),_=r(90),y=r.n(_),O=r(15),h=r.n(O),v=r(1),j=r.n(v),E=r(68),g=(r(731),r(2));function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var c=d()(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return m()(this,r)}}var N=function(e){s()(r,e);var t=w(r);function r(){return c()(this,r),t.apply(this,arguments)}return o()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.hasAction,n=e.hasDate,c=e.hasSubtitle,a=e.lines,o=b()("woocommerce-activity-card is-loading",t);return Object(f.createElement)("div",{className:o,"aria-hidden":!0},Object(f.createElement)("span",{className:"woocommerce-activity-card__icon"},Object(f.createElement)("span",{className:"is-placeholder"})),Object(f.createElement)("div",{className:"woocommerce-activity-card__header"},Object(f.createElement)("div",{className:"woocommerce-activity-card__title is-placeholder"}),c&&Object(f.createElement)("div",{className:"woocommerce-activity-card__subtitle is-placeholder"}),n&&Object(f.createElement)("div",{className:"woocommerce-activity-card__date"},Object(f.createElement)("span",{className:"is-placeholder"}))),Object(f.createElement)("div",{className:"woocommerce-activity-card__body"},Object(g.range)(a).map((function(e){return Object(f.createElement)("span",{className:"is-placeholder",key:e})}))),r&&Object(f.createElement)("div",{className:"woocommerce-activity-card__actions"},Object(f.createElement)("span",{className:"is-placeholder"})))}}]),r}(f.Component);N.propTypes={className:j.a.string,hasAction:j.a.bool,hasDate:j.a.bool,hasSubtitle:j.a.bool,lines:j.a.number},N.defaultProps={hasAction:!1,hasDate:!1,hasSubtitle:!1,lines:1};var R=N;function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var c=d()(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return m()(this,r)}}var k=function(e){s()(r,e);var t=S(r);function r(){return c()(this,r),t.apply(this,arguments)}return o()(r,[{key:"render",value:function(){var e=this.props,t=e.actions,r=e.className,n=e.children,c=e.date,a=e.icon,o=e.subtitle,i=e.title,s=e.unread,l=b()("woocommerce-activity-card",r),m=Array.isArray(t)?t:[t];return Object(f.createElement)("section",{className:l},s&&Object(f.createElement)("span",{className:"woocommerce-activity-card__unread"}),a&&Object(f.createElement)("span",{className:"woocommerce-activity-card__icon","aria-hidden":!0},a),Object(f.createElement)("header",{className:"woocommerce-activity-card__header"},Object(f.createElement)(E.H,{className:"woocommerce-activity-card__title"},i),o&&Object(f.createElement)("div",{className:"woocommerce-activity-card__subtitle"},o),c&&Object(f.createElement)("span",{className:"woocommerce-activity-card__date"},h.a.utc(c).fromNow())),Object(f.createElement)(E.Section,{className:"woocommerce-activity-card__body"},n),t&&Object(f.createElement)("footer",{className:"woocommerce-activity-card__actions"},m.map((function(e,t){return Object(f.cloneElement)(e,{key:t})}))))}}]),r}(f.Component);k.propTypes={actions:j.a.oneOfType([j.a.arrayOf(j.a.element),j.a.element]),className:j.a.string,children:j.a.node.isRequired,date:j.a.string,icon:j.a.node,subtitle:j.a.node,title:j.a.oneOfType([j.a.string,j.a.node]).isRequired,unread:j.a.bool},k.defaultProps={icon:Object(f.createElement)(y.a,{icon:"notice-outline",size:48}),unread:!1}},731:function(e,t,r){},886:function(e,t,r){},912:function(e,t,r){"use strict";r.r(t);var n=r(14),c=r.n(n),a=r(13),o=r.n(a),i=r(16),s=r.n(i),l=r(17),m=r.n(l),u=r(6),d=r.n(u),f=r(0),p=r(3),b=r(72),_=r(270),y=r(24),O=r(90),h=r.n(O),v=r(1),j=r.n(v),E=r(40),g=r.n(E),w=r(2),N=r(68),R=r(32),S=r(33),k=r(41),T=r(61),x=r(730),A=r(727),C=r(37),L=r.n(C),q=r(60),D=r.n(q),P=r(4),F=r.n(P),I=(r(886),function(e){var t=e.href,r=e.type,n=e.className,c=e.children,a=D()(e,["href","type","className","children"]),o=F()("woocommerce-layout__activity-panel-outbound-link",n);return Object(f.createElement)(N.Link,L()({href:t,type:r,className:o},a),c,Object(f.createElement)(h.a,{icon:"arrow-right"}))});I.propTypes={href:j.a.string.isRequired,type:j.a.oneOf(["wp-admin","wc-admin","external"]).isRequired,className:j.a.string},I.defaultProps={type:"wp-admin"};var M=I,U=r(415),Y=r(718);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var c=d()(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return m()(this,r)}}var B=function(e){s()(r,e);var t=z(r);function r(){return c()(this,r),t.apply(this,arguments)}return o()(r,[{key:"recordOrderEvent",value:function(e){Object(T.recordEvent)("activity_panel_orders_".concat(e),{})}},{key:"renderEmptyCard",value:function(){var e=this;return this.props.hasNonActionableOrders?Object(f.createElement)(x.a,{className:"woocommerce-empty-activity-card",title:Object(p.__)("You have no orders to fulfill","woocommerce-admin"),icon:Object(f.createElement)(h.a,{icon:"checkmark",size:48})},Object(p.__)("Good job, you've fulfilled all of your new orders!","woocommerce-admin")):Object(f.createElement)(x.a,{className:"woocommerce-empty-activity-card",title:Object(p.__)("You have no orders to fulfill","woocommerce-admin"),icon:Object(f.createElement)(h.a,{icon:"time",size:48}),actions:Object(f.createElement)(b.a,{href:"https://docs.woocommerce.com/document/managing-orders/",isSecondary:!0,onClick:function(){return e.recordOrderEvent("learn_more")},target:"_blank"},Object(p.__)("Learn more","woocommerce-admin"))},Object(p.__)("You're still waiting for your customers to make their first orders. While you wait why not learn how to manage orders?","woocommerce-admin"))}},{key:"renderOrders",value:function(){var e=this,t=this.props.orders,r=this.context;if(0===t.length)return this.renderEmptyCard();var n=function(e){var t=(e.extended_info||{}).customer||{},r=t.first_name,n=t.last_name;if(!r&&!n)return"";var c=[r,n].join(" ");return Object(p.sprintf)(Object(p.__)("placed by {{customerLink}}%(customerName)s{{/customerLink}}","woocommerce-admin"),{customerName:c})},c=function(t){var r=t.extended_info,c=t.order_id,a=t.order_number,o=(r||{}).customer,i=o.customer_id?Object(R.getNewPath)({},"/analytics/customers",{filter:"single_customer",customers:o.customer_id}):null;return Object(f.createElement)(f.Fragment,null,g()({mixedString:Object(p.sprintf)(Object(p.__)("Order {{orderLink}}#%(orderNumber)s{{/orderLink}} %(customerString)s {{destinationFlag/}}","woocommerce-admin"),{orderNumber:a,customerString:n(t)}),components:{orderLink:Object(f.createElement)(N.Link,{href:Object(S.f)("post.php?action=edit&post="+c),onClick:function(){return e.recordOrderEvent("order_number")},type:"wp-admin"}),destinationFlag:o.country?Object(f.createElement)(N.Flag,{code:o.country,round:!1}):null,customerLink:i?Object(f.createElement)(N.Link,{href:i,onClick:function(){return e.recordOrderEvent("customer_name")},type:"wc-admin"}):Object(f.createElement)("span",null)}}))},a=[];return t.forEach((function(t){var n=t.extended_info||{},o=n&&n.products?n.products.length:0,i=t.total_sales;a.push(Object(f.createElement)(x.a,{key:t.order_id,className:"woocommerce-order-activity-card",title:c(t),date:t.date_created_gmt,subtitle:Object(f.createElement)("div",null,Object(f.createElement)("span",null,Object(p.sprintf)(Object(p._n)("%d product","%d products",o,"woocommerce-admin"),o)),Object(f.createElement)("span",null,r.formatAmount(i))),actions:Object(f.createElement)(b.a,{isSecondary:!0,href:Object(S.f)("post.php?action=edit&post="+t.order_id),onClick:function(){return e.recordOrderEvent("orders_begin_fulfillment")}},Object(p.__)("Begin fulfillment"))},Object(f.createElement)(N.OrderStatus,{order:t,orderStatusMap:Object(S.g)("orderStatuses",{})})))})),Object(f.createElement)(f.Fragment,null,a,Object(f.createElement)(M,{href:"edit.php?post_type=shop_order",onClick:function(){return e.recordOrderEvent("orders_manage")}},Object(p.__)("Manage all orders","woocommerce-admin")))}},{key:"render",value:function(){var e=this.props,t=e.orders,r=e.isRequesting,n=e.isError,c=e.orderStatuses;if(n){if(!c.length)return Object(f.createElement)(N.EmptyContent,{title:Object(p.__)("You currently don't have any actionable statuses. To display orders here, select orders that require further review in settings.","woocommerce-admin"),actionLabel:Object(p.__)("Settings","woocommerce-admin"),actionURL:Object(S.f)("admin.php?page=wc-admin&path=/analytics/settings")});var a=Object(p.__)("There was an error getting your orders. Please try again.","woocommerce-admin"),o=Object(p.__)("Reload","woocommerce-admin");return Object(f.createElement)(f.Fragment,null,Object(f.createElement)(N.EmptyContent,{title:a,actionLabel:o,actionURL:null,actionCallback:function(){window.location.reload()}}))}var i=r||t.length?Object(p.__)("Orders","woocommerce-admin"):Object(p.__)("No orders to fulfill","woocommerce-admin");return Object(f.createElement)(f.Fragment,null,Object(f.createElement)(A.a,{title:i}),Object(f.createElement)(N.Section,null,r?Object(f.createElement)(x.b,{className:"woocommerce-order-activity-card",hasAction:!0,hasDate:!0,lines:2}):this.renderOrders()))}}]),r}(f.Component);B.propTypes={orders:j.a.array.isRequired,isError:j.a.bool,isRequesting:j.a.bool},B.defaultProps={orders:[],isError:!1,isRequesting:!1},B.contextType=Y.a;t.default=Object(_.a)(Object(y.withSelect)((function(e,t){var r=t.hasActionableOrders,n=e(k.ITEMS_STORE_NAME),c=n.getItems,a=n.getItemsError,o=n.getItemsTotalCount,i=e(k.REPORTS_STORE_NAME),s=i.getReportItems,l=i.getReportItemsError,m=i.isResolving,u=(0,e(k.SETTINGS_STORE_NAME).getSetting)("wc_admin","wcAdminSettings",{}).woocommerce_actionable_order_statuses,d=void 0===u?U.a:u;if(!d.length)return{orders:[],isError:!0,isRequesting:!1,orderStatuses:d};if(r){var f={page:1,per_page:k.QUERY_DEFAULTS.pageSize,status:d,_fields:["id","date_created_gmt","status"]},p=Array.from(c("orders",f).values()),b=m("getItems",["orders",f]);if(b)return{isError:Boolean(a("orders",f)),isRequesting:b,orderStatuses:d};var _={page:1,per_page:k.QUERY_DEFAULTS.pageSize,extended_info:!0,order_includes:Object(w.map)(p,"id"),_fields:["order_id","order_number","status","data_created_gmt","total_sales","extended_info.customer","extended_info.products"]},y=s("orders",_).data,O=Boolean(l("orders",_)),h=m("getReportItems",["orders",_]),v=[];if(y&&y.length){var j=Object(w.keyBy)(p,"id");v=y.map((function(e){return Object(w.merge)({},e,j[e.order_id]||{})}))}return{orders:v,isError:O,isRequesting:h,orderStatuses:d}}var E={page:1,per_page:1,_fields:["id"]};return c("orders",E),{hasNonActionableOrders:o("orders",E)>0,isError:Boolean(a("orders",E)),isRequesting:m("getItems",["orders",E]),orderStatuses:d}})))(B)}}]);