(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-author-index"],{"0b42":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"bg-black",staticStyle:{height:"100vh",width:"100vw"}},[e.anim?n("div",{staticClass:"text-center",staticStyle:{"padding-top":"180px"}},[e._m(0),n("br"),e._m(1),n("br"),e._m(2)]):e._e()])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"typewriter"},[n("div",{staticClass:"typewriter-text"},[e._v("WELCOME")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"typewriter"},[n("div",{staticClass:"typewriter-text2"},[e._v("My name is Malik")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"typewriter"},[n("div",{staticClass:"typewriter-text3"},[e._v("I am a Programmer")])])}],i=(n("4160"),n("159b"),n("bc3a"),n("8aa5")),c=n.n(i),u=n("4b97"),o=(c.a.firestore(),new u["a"],{data:function(){return{ready:!1,anim:!0}},methods:{},mounted:function(){var e=this,t=this;setTimeout((function(){e.$el.querySelector(".anim").classList.remove("anim")}),4e3),setTimeout((function(){e.$el.querySelectorAll(".typewriter").forEach((function(e){e.classList.add("animate__animated"),e.classList.add("animate__backOutDown")})),setTimeout((function(){t.ready=!0,t.anim=!1,t.$router.push("/about")}),1e3)}),7500)}}),s=o,p=(n("6947"),n("2877")),l=Object(p["a"])(s,a,r,!1,null,"55189e76",null);t["default"]=l.exports},"4b97":function(e,t,n){"use strict";n("b64b"),n("96cf");var a=n("1da1");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var u=n("bc3a"),o=n.n(u),s=!1,p="",l="",d=localStorage.getItem("auth._token.local"),f=s?"http://localhost:8080/auto/api2.php":"http://localhost:8080/auto/api.php",h=function(){function e(){r(this,e)}return c(e,[{key:"collection",value:function(e){return p=e,this}},{key:"doc",value:function(e){return e&&(l=e),this}},{key:"set",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=function(e){return Object.keys(e)},n=new FormData,s&&n.append("header",d),n.append("table",p),n.append("data",JSON.stringify(t)),n.append("type","set"),n.append("key",a(t)),e.next=9,o.a.post(f,n).then((function(e){return console.log(e),e.data}));case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("table",p),s&&n.append("header",d),n.append("select",t),""!=l.length&&n.append("id","".concat(l)),n.append("type","get"),e.next=8,o.a.post(f,n).then((function(e){return console.log(e),e.data}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,s&&n.append("header",d),n.append("table",p),n.append("select",t),""!=l.length&&n.append("id","".concat(l)),n.append("type","delete"),e.next=8,o.a.post(f,n).then((function(e){return console.log(e),e.data}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"select",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,s&&n.append("header",d),n.append("table",p),n.append("select",t),""!=l.length&&n.append("id","".concat(l)),n.append("type","select"),e.next=8,o.a.post(f,n).then((function(e){return console.log(e),e.data}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=h},6947:function(e,t,n){"use strict";var a=n("87cc"),r=n.n(a);r.a},"87cc":function(e,t,n){}}]);
//# sourceMappingURL=page-author-index.96d1fd19.js.map