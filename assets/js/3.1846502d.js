(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{315:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(t,n,e){var i=e(25),r=e(21),u="["+e(315)+"]",a=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),o=function(t){return function(n){var e=r(i(n));return 1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},317:function(t,n,e){"use strict";var i=e(1),r=e(316).trim;i({target:"String",proto:!0,forced:e(318)("trim")},{trim:function(){return r(this)}})},318:function(t,n,e){var i=e(2),r=e(315);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},328:function(t,n,e){"use strict";var i=e(329),r=e.n(i);n.default=r.a},329:function(t,n){},330:function(t,n,e){"use strict";var i=e(331),r=e.n(i);n.default=r.a},331:function(t,n){},332:function(t,n,e){"use strict";var i=e(333),r=e.n(i);n.default=r.a},333:function(t,n){},338:function(t,n,e){},339:function(t,n,e){},340:function(t,n,e){},341:function(t,n,e){},346:function(t,n,e){"use strict";e(338)},347:function(t,n,e){"use strict";var i=e(360),r=e(328),u=(e(348),e(46)),a=Object(u.a)(r.default,i.a,i.b,!1,null,"2993508a",null);n.default=a.exports},348:function(t,n,e){"use strict";e(339)},349:function(t,n,e){"use strict";var i=e(361),r=e(330),u=(e(350),e(46)),a=Object(u.a)(r.default,i.a,i.b,!1,null,"15b8aaf6",null);n.default=a.exports},350:function(t,n,e){"use strict";e(340)},351:function(t,n,e){"use strict";var i=e(362),r=e(332),u=(e(352),e(46)),a=Object(u.a)(r.default,i.a,i.b,!1,null,"788b342d",null);n.default=a.exports},352:function(t,n,e){"use strict";e(341)},353:function(t,n,e){},359:function(t,n,e){"use strict";e(96),e(97),e(73);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"GuluSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},r=(e(346),e(46)),u=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"0cffeec4",null);n.a=u.exports},360:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},r=[]},361:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},r=[]},362:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},r=[]},365:function(t,n,e){"use strict";e(353)},368:function(t,n,e){"use strict";var i={name:"GuluSider",data:function(){return{visible:!0}}},r=(e(365),e(46)),u=Object(r.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("button",{on:{click:function(n){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"61051a32",null);n.a=u.exports},390:function(t,n,e){},431:function(t,n,e){"use strict";e(390)},456:function(t,n,e){"use strict";e.r(n);e(317),e(47),e(71);var i=e(359),r=e(347),u=e(351),a=e(349),c=e(368),o={components:{GLayout:i.a,GHeader:r.default,GFooter:u.default,GContent:a.default,GSider:c.a},data:function(){return{content:'\n          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n            <g-header style="height: 50px; background:lightskyblue;">\n              header\n            </g-header>\n            <g-layout>\n              <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">\n                sider\n              </g-sider>\n              <g-content style="height: 100px; background:deepskyblue;">\n                content\n              </g-content>\n            </g-layout>\n            <g-footer style="height: 50px; background:lightskyblue;">\n              footer\n            </g-footer>\n          </g-layout>\n      '.replace(/^ {8}/gm,"").trim()}}},s=(e(431),e(46)),l=Object(s.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),e("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),e("g-layout",[e("g-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[t._v("\n        sider\n      ")]),t._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")])],1),t._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"5f47148c",null);n.default=l.exports}}]);