(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-index"],{"4b97":function(t,e,a){"use strict";a("ac6a"),a("456d"),a("96cf");var n=a("3b8d"),r=a("d225"),i=a("b0b4"),o=a("bc3a"),c=a.n(o),s=!1,p="",u="",l=localStorage.getItem("auth._token.local"),f=s?"http://localhost:8080/auto/api2.php":"http://localhost:8080/auto/api.php",d=function(){function t(){Object(r["a"])(this,t)}return Object(i["a"])(t,[{key:"collection",value:function(t){return p=t,this}},{key:"doc",value:function(t){return t&&(u=t),this}},{key:"set",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(t){return Object.keys(t)},a=new FormData,s&&a.append("header",l),a.append("table",p),a.append("data",JSON.stringify(e)),a.append("type","set"),a.append("key",n(e)),t.next=9,c.a.post(f,a).then((function(t){return console.log(t),t.data}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("table",p),s&&a.append("header",l),a.append("select",e),""!=u.length&&a.append("id","".concat(u)),a.append("type","get"),t.next=8,c.a.post(f,a).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,s&&a.append("header",l),a.append("table",p),a.append("select",e),""!=u.length&&a.append("id","".concat(u)),a.append("type","delete"),t.next=8,c.a.post(f,a).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"select",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,s&&a.append("header",l),a.append("table",p),a.append("select",e),""!=u.length&&a.append("id","".concat(u)),a.append("type","select"),t.next=8,c.a.post(f,a).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=d},"50b8":function(t,e,a){},9261:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bg-black",staticStyle:{height:"100vh",width:"100vw","background-color":"black"}},[t.anim?a("div",{staticClass:"text-center",staticStyle:{"padding-top":"180px"}},[t._m(0),a("br"),t._m(1),a("br"),t._m(2)]):a("div",{staticClass:"text-center",staticStyle:{"padding-top":"180px"}},[t._m(3)])]),a("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v(" TA_Maliki / Taufik Akbar Maliki")]),a("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://tamalik.vercel.app/"}},[t._v("-")]),a("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://tamalik.vercel.app/contact"}},[t._v("contact")]),a("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://tamalik.vercel.app/about"}},[t._v("about")]),a("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://tamalik.vercel.app/coffe"}},[t._v("coffe")]),a("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://tamalik.vercel.app/portofolio"}},[t._v("portofolio")]),a("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://tamalik.vercel.app/project"}},[t._v("project")]),a("a",{staticStyle:{"font-size":"1px",opacity:"0.1"},attrs:{href:"https://tamalik.vercel.app/sertifikat"}},[t._v("sertifikat")])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"typewriter"},[a("div",{staticClass:"typewriter-text"},[t._v("WELCOME")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"typewriter"},[a("div",{staticClass:"typewriter-text2"},[t._v("My name is Malik")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"typewriter"},[a("div",{staticClass:"typewriter-text3"},[t._v("I am a Programmer")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"animated bounce infinite"},[t._v("Loading Content...")])])}],i=(a("ac6a"),a("bc3a"),a("8aa5")),o=a.n(i),c=a("4b97"),s=(o.a.firestore(),new c["a"],{data:function(){return{ready:!1,anim:!0}},methods:{},mounted:function(){var t=this,e=this;setTimeout((function(){t.$el.querySelector(".anim").classList.remove("anim")}),4e3),setTimeout((function(){t.$el.querySelectorAll(".typewriter").forEach((function(t){t.classList.add("animate__animated"),t.classList.add("animate__backOutDown")})),setTimeout((function(){e.ready=!0,e.anim=!1,e.$router.push("/about")}),1e3)}),7500)},metaInfo:function(){return{title:"TAUFIK AKBAR MALIKI / TA_MALIKI PORTOFOLIO WEBSITE OFFICIAL",meta:[{hid:"description",name:"description",content:"TAUFIK AKBAR MALIKI / TA_MALIKI PORTOFOLIO WEBSITE OFFICIAL contact sertikat project dan lain lain"},{property:"og:title",content:"TAUFIK AKBAR MALIKI / TA_MALIKI PORTOFOLIO WEBSITE OFFICIAL"},{property:"og:site_name",content:"TA_Maliki"},{property:"og:type",content:"website"},{property:"og:url",content:"https://tamalik.vercel.app/"},{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/taufikakbarmaliki-bba49.appspot.com/o/download.png?alt=media&token=87ccdaaa-d68f-4b67-9394-e1b5738f3920"},{property:"og:description",content:"TAUFIK AKBAR MALIKI / TA_MALIKI PORTOFOLIO WEBSITE OFFICIAL"},{name:"keywords",content:"TA_Maliki,project,portofolio,tentang,sertifikat,my project,Taufik Akbar Maliki"},{name:"robots",content:"index,follow,taufik"},{name:"google-site-verification",content:"HzqT8q0un3APHNEFEXUTWULuDV5fFyBaieEXfX94Efs"}]}}}),p=s,u=(a("c210"),a("2877")),l=Object(u["a"])(p,n,r,!1,null,"096fb268",null);e["default"]=l.exports},b0b4:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a("85f2"),r=a.n(n);function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(t,n.key,n)}}function o(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}},c210:function(t,e,a){"use strict";var n=a("50b8"),r=a.n(n);r.a},d225:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=page-index.26fd25d0.js.map