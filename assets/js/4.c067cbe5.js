(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{315:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(t,n,e){var r=e(25),i=e(21),u="["+e(315)+"]",a=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),o=function(t){return function(n){var e=i(r(n));return 1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},317:function(t,n,e){"use strict";var r=e(1),i=e(316).trim;r({target:"String",proto:!0,forced:e(318)("trim")},{trim:function(){return i(this)}})},318:function(t,n,e){var r=e(2),i=e(315);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},328:function(t,n,e){"use strict";var r=e(329),i=e.n(r);n.default=i.a},329:function(t,n){},330:function(t,n,e){"use strict";var r=e(331),i=e.n(r);n.default=i.a},331:function(t,n){},332:function(t,n,e){"use strict";var r=e(333),i=e.n(r);n.default=i.a},333:function(t,n){},338:function(t,n,e){},339:function(t,n,e){},340:function(t,n,e){},341:function(t,n,e){},346:function(t,n,e){"use strict";e(338)},347:function(t,n,e){"use strict";var r=e(360),i=e(328),u=(e(348),e(46)),a=Object(u.a)(i.default,r.a,r.b,!1,null,"2993508a",null);n.default=a.exports},348:function(t,n,e){"use strict";e(339)},349:function(t,n,e){"use strict";var r=e(361),i=e(330),u=(e(350),e(46)),a=Object(u.a)(i.default,r.a,r.b,!1,null,"15b8aaf6",null);n.default=a.exports},350:function(t,n,e){"use strict";e(340)},351:function(t,n,e){"use strict";var r=e(362),i=e(332),u=(e(352),e(46)),a=Object(u.a)(i.default,r.a,r.b,!1,null,"788b342d",null);n.default=a.exports},352:function(t,n,e){"use strict";e(341)},353:function(t,n,e){},359:function(t,n,e){"use strict";e(96),e(97),e(73);var r={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"GuluSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(e(346),e(46)),u=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"0cffeec4",null);n.a=u.exports},360:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},i=[]},361:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},i=[]},362:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},i=[]},365:function(t,n,e){"use strict";e(353)},368:function(t,n,e){"use strict";var r={name:"GuluSider",data:function(){return{visible:!0}}},i=(e(365),e(46)),u=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("button",{on:{click:function(n){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"61051a32",null);n.a=u.exports},391:function(t,n,e){},432:function(t,n,e){"use strict";e(391)},457:function(t,n,e){"use strict";e.r(n);e(317),e(47),e(71);var r=e(359),i=e(347),u=e(351),a=e(349),c=e(368),o={components:{GLayout:r.a,GHeader:i.default,GFooter:u.default,GContent:a.default,GSider:c.a},data:function(){return{content:'\n          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n            <g-sider style=" background:#ddd; width:200px; color: black;">\n              sider\n            </g-sider>\n            <g-layout>\n              <g-header style="height: 50px; background:lightskyblue;">\n                header\n              </g-header>\n              <g-content style="height: 100px; background:deepskyblue;">\n                content\n              </g-content>\n              <g-footer style="height: 50px; background:lightskyblue;">\n                footer\n              </g-footer>\n            </g-layout>\n          </g-layout>\n      '.replace(/^ {8}/gm,"").trim()}}},s=(e(432),e(46)),l=Object(s.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),e("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("g-sider",{staticStyle:{background:"#ddd",width:"200px",color:"black"}},[t._v("\n      sider\n    ")]),t._v(" "),e("g-layout",[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        header\n      ")]),t._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")]),t._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        footer\n      ")])],1)],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"fa1c03ea",null);n.default=l.exports}}]);