(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test"],{"4b97":function(e,t,n){"use strict";n("ac6a"),n("456d"),n("96cf");var a=n("3b8d");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n("85f2"),u=n.n(o);function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),u()(e,a.key,a)}}function i(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}var p=n("bc3a"),s=n.n(p),l=!1,d="",f="",h=localStorage.getItem("auth._token.local"),g=l?"http://localhost:8080/auto/api2.php":"http://localhost:8080/auto/api.php",b=function(){function e(){r(this,e)}return i(e,[{key:"collection",value:function(e){return d=e,this}},{key:"doc",value:function(e){return e&&(f=e),this}},{key:"set",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=function(e){return Object.keys(e)},n=new FormData,l&&n.append("header",h),n.append("table",d),n.append("data",JSON.stringify(t)),n.append("type","set"),n.append("key",a(t)),e.next=9,s.a.post(g,n).then((function(e){return console.log(e),e.data}));case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("table",d),l&&n.append("header",h),n.append("select",t),""!=f.length&&n.append("id","".concat(f)),n.append("type","get"),e.next=8,s.a.post(g,n).then((function(e){return console.log(e),e.data}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,l&&n.append("header",h),n.append("table",d),n.append("select",t),""!=f.length&&n.append("id","".concat(f)),n.append("type","delete"),e.next=8,s.a.post(g,n).then((function(e){return console.log(e),e.data}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"select",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,l&&n.append("header",h),n.append("table",d),n.append("select",t),""!=f.length&&n.append("id","".concat(f)),n.append("type","select"),e.next=8,s.a.post(g,n).then((function(e){return console.log(e),e.data}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=b},bd8c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:"/about"}},[e._v("about")])],1)},r=[],o=(n("bc3a"),n("8aa5")),u=n.n(o),c=n("4b97"),i=(u.a.firestore(),new c["a"],{data:function(){return{}},methods:{},mounted:function(){},metaInfo:function(){return{title:"Tentang TA_Maliki / Taufik Akbar Maliki",meta:[{hid:"description",name:"description",content:"Tentang Taufik akbar maliki / TA_Maliki"},{property:"og:title",content:"Tentang Taufik akbar maliki / TA_Maliki"},{property:"og:site_name",content:"TA_Maliki"},{property:"og:type",content:"website"},{property:"og:url",content:"".concat(this.$store.state.url)},{property:"og:image",content:"".concat(this.$store.state.url,"/Kino.jpg")},{property:"og:description",content:"documentasi ya"},{name:"keywords",content:"blog,portofolio,freelance"},{name:"robots",content:"index,follow"}]}}}),p=i,s=n("2877"),l=Object(s["a"])(p,a,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=page-test.2d7348ce.js.map