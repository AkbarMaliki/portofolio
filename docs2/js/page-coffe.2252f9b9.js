(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-coffe"],{"4b97":function(t,e,n){"use strict";n("ac6a"),n("456d"),n("96cf");var a=n("3b8d");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n("85f2"),c=n.n(i);function o(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),c()(t,a.key,a)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var u=n("bc3a"),l=n.n(u),p=!1,d="",f="",h=localStorage.getItem("auth._token.local"),b=p?"http://localhost:8080/auto/api2.php":"http://localhost:8080/auto/api.php",m=function(){function t(){r(this,t)}return s(t,[{key:"collection",value:function(t){return d=t,this}},{key:"doc",value:function(t){return t&&(f=t),this}},{key:"set",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=function(t){return Object.keys(t)},n=new FormData,p&&n.append("header",h),n.append("table",d),n.append("data",JSON.stringify(e)),n.append("type","set"),n.append("key",a(e)),t.next=9,l.a.post(b,n).then((function(t){return console.log(t),t.data}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,n.append("table",d),p&&n.append("header",h),n.append("select",e),""!=f.length&&n.append("id","".concat(f)),n.append("type","get"),t.next=8,l.a.post(b,n).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,p&&n.append("header",h),n.append("table",d),n.append("select",e),""!=f.length&&n.append("id","".concat(f)),n.append("type","delete"),t.next=8,l.a.post(b,n).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"select",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new FormData,p&&n.append("header",h),n.append("table",d),n.append("select",e),""!=f.length&&n.append("id","".concat(f)),n.append("type","select"),t.next=8,l.a.post(b,n).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=m},"8df3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"p-3 ml-1 mr-1 bg-white shadow-lg rounded-lg animate__animated animate__zoomIn",staticStyle:{"font-family":"Titillium Web","line-height":"1.0",background:"black"}},[n("br"),n("div",{attrs:{id:"atas"}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("hr",{staticClass:"style16 mt-4 mb-4"}),n("p",{staticClass:"p-3 text-lg font-bold italic"},[t._v("Berbagi itu indah hehee :D")])]),n("div",{staticClass:"col-4"},[n("img",{staticClass:"kinoLightBox img-thumbnail",attrs:{src:"https://static.thenounproject.com/png/113907-200.png"}})]),n("div",{staticClass:"col-8"},[n("p",{staticClass:"p-3 font-bold text-2xl"},[t._v("BNI - 0769831464")]),n("br"),n("br"),n("br"),n("p",{staticClass:"pl-4 font-bold textlg italic"},[t._v("Terima Kasih ...")])])]),n("br"),n("hr",{staticClass:"style16 mt-4 mb-4"}),n("p")]),n("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Contact TA_Maliki / Taufik Akbar Maliki")])])}],i=(n("bc3a"),n("8aa5")),c=n.n(i),o=n("4b97"),s=(c.a.firestore(),new o["a"],{data:function(){return{}},layout:"author",methods:{},mounted:function(){}}),u=s,l=n("2877"),p=Object(l["a"])(u,a,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=page-coffe.2252f9b9.js.map