(function(e){function t(t){for(var o,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2474ac40":"02774859","chunk-24544a14":"6d943307","chunk-56cf2c77":"0982a839","chunk-d30e418e":"22c4ab3a"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-24544a14":1,"chunk-56cf2c77":1,"chunk-d30e418e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2474ac40":"31d6cfe0","chunk-24544a14":"7ff358b2","chunk-56cf2c77":"4773d78b","chunk-d30e418e":"318597a4"}[e]+".css",r=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){a[e]=0}));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header-container"},[o("header",[o("div",[o("div",{staticClass:"header-logo",on:{click:e.handleHeaderClick}},[o("img",{staticClass:"logo-img",attrs:{src:n("4952"),alt:""}})]),o("a",{staticClass:"cnode-link",attrs:{href:"https://cnodejs.org"}},[e._v("CNode社区官方版入口←")]),o("button",{staticClass:"iconfont nav-icon",class:this.$store.state.isShowNavTab?"icon-guanbi":"icon-daohanglan",on:{click:e.handleNavButtonClick}})])]),o("transition",{attrs:{name:"slide"}},[o("nav",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.isShowNavTab&&"mobile"===this.$store.state.currentDevice,expression:"this.$store.state.isShowNavTab && this.$store.state.currentDevice === 'mobile'"}],staticClass:"nav-container"},[o("NavBar")],1)])],1)},a=[],r=n("d000"),c={name:"Header",components:{NavBar:r["a"]},data:function(){return{}},methods:{handleNavButtonClick:function(){this.$store.commit("CHNAGE_HEADER_NAV_SHOW")},handleHeaderClick:function(){this.$router.push({name:"articlelist",params:{tab:"all"}})}}},i=c,s=(n("4298"),n("2877")),u=Object(s["a"])(i,o,a,!1,null,"8f431424",null);t["a"]=u.exports},"0b9b":function(e,t,n){},"343d":function(e,t,n){},"3db4":function(e,t,n){},4298:function(e,t,n){"use strict";var o=n("0b9b"),a=n.n(o);a.a},4952:function(e,t,n){e.exports=n.p+"img/cnodejs-logo.8c56deda.svg"},"4a93":function(e,t,n){},"4e47":function(e,t,n){"use strict";var o=n("343d"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("transition",{attrs:{name:"routerview"}},[n("router-view",{staticClass:"router-view"})],1),n("ScrollTop",{attrs:{show:e.isShowScrollTopButton}})],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scroll-top-tag",style:{display:e.show?"block":"none"},on:{click:e.srcollToTop}},[e._v("↑")])},i=[],s={name:"ScrollTop",props:{show:{type:Boolean,default:!1}},methods:{srcollToTop:function(){var e=null;e=requestAnimationFrame(function t(){var n=document.documentElement.scrollTop;n>0?(document.documentElement.scrollTop-=100,e=requestAnimationFrame(t)):cancelAnimationFrame(e)})}}},u=s,l=(n("5e89"),n("2877")),d=Object(l["a"])(u,c,i,!1,null,"108f57e6",null),h=d.exports,f=n("0418"),m=function(e,t){var n;return function(){n||(n=setTimeout(function(){e(),n=null},t))}},p={name:"app",data:function(){return{isShowScrollTopButton:!1}},components:{Header:f["a"],ScrollTop:h},methods:{onResizeChange:function(){var e=this;window.addEventListener("resize",function(){e.checkDevice()})},checkDevice:function(){var e=document.documentElement.clientWidth||document.body.clientHeight;e<768?this.$store.commit("CHANGE_DEVICE","mobile"):this.$store.commit("CHANGE_DEVICE","computer")},onScrollChange:function(){var e=this;window.addEventListener("scroll",m(function(){var t=document.documentElement.scrollTop||document.body.scrollTop;e.isShowScrollTopButton=t>700},500))}},created:function(){this.checkDevice()},mounted:function(){this.onResizeChange(),this.onScrollChange()}},v=p,b=(n("f81d"),Object(l["a"])(v,a,r,!1,null,"958993da",null)),g=b.exports,w=n("8c4f");o["a"].use(w["a"]);var k=new w["a"]({mode:"history",base:"",routes:[{path:"/",redirect:{path:"/all"}},{path:"/:tab",name:"articlelist",component:function(){return Promise.all([n.e("chunk-2474ac40"),n.e("chunk-24544a14")]).then(n.bind(null,"bc13"))}},{path:"/topic/content",name:"articlecontent",component:function(){return Promise.all([n.e("chunk-2474ac40"),n.e("chunk-d30e418e")]).then(n.bind(null,"cf8e"))}},{path:"/topic/author",name:"author",component:function(){return Promise.all([n.e("chunk-2474ac40"),n.e("chunk-56cf2c77")]).then(n.bind(null,"5f7c"))}}]}),T=n("2f62");o["a"].use(T["a"]);var C=new T["a"].Store({state:{isShowNavTab:!1,currentDevice:"",isComputer:"",isMobile:"",navTab:[{id:"all",icon:"&#xe6ef;",name:"全部"},{id:"good",icon:"&#xe66e;",name:"精华"},{id:"share",icon:"&#xe604;",name:"分享"},{id:"ask",icon:"&#xe603;",name:"问答"},{id:"job",icon:"&#xe600;",name:"招聘"},{id:"dev",icon:"&#xe600;",name:"客户端测试"}],tag:{all:"全部",share:"分享",ask:"问答",good:"精华",job:"工作",dev:"测试"}},mutations:{CHNAGE_HEADER_NAV_SHOW:function(e){e.isShowNavTab=!e.isShowNavTab},CHANGE_DEVICE:function(e,t){e.currentDevice=t}},actions:{}});n("3db4"),n("5bc9");o["a"].config.productionTip=!1,new o["a"]({router:k,store:C,render:function(e){return e(g)}}).$mount("#app")},"5bc9":function(e,t,n){},"5e89":function(e,t,n){"use strict";var o=n("b118"),a=n.n(o);a.a},b118:function(e,t,n){},d000:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar-container",class:{"nav-shadow":e.shadow}},[n("ul",e._l(e.navBarTab,function(t){return n("li",{key:t.id,class:e.$route.params.tab===t.id?"nav-item item-selected":"nav-item",on:{click:function(n){return e.handleTabClick(t.id)}}},[n("i",{staticClass:"iconfont icon",domProps:{innerHTML:e._s(t.icon)}}),e._v("\n        "+e._s(t.name)+"\n    ")])}),0)])},a=[],r={name:"NavBar",props:{shadow:Boolean},data:function(){return{navBarTab:this.$store.state.navTab,currentTab:this.$route.params.tab?this.$route.params.tab:"all"}},methods:{handleTabClick:function(e){this.$router.push({name:"articlelist",params:{tab:e}}),this.currentTab=e,window.scrollTo(0,0),this.$store.commit("CHNAGE_HEADER_NAV_SHOW")}},watch:{"$route.params.id":function(e){newValue&&(this.currentTab=e)}}},c=r,i=(n("4e47"),n("2877")),s=Object(i["a"])(c,o,a,!1,null,"7a76a744",null);t["a"]=s.exports},f81d:function(e,t,n){"use strict";var o=n("4a93"),a=n.n(o);a.a}});