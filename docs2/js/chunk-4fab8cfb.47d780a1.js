(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fab8cfb"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,i=0;n<t.length;n++,i+=8)e[i>>>5]|=t[n]<<24-i%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],i=0;i<t.length;i+=3)for(var o=t[i]<<16|t[i+1]<<8|t[i+2],r=0;r<4;r++)8*i+6*r<=8*t.length?n.push(e.charAt(o>>>6*(3-r)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],i=0,o=0;i<t.length;o=++i%4)0!=o&&n.push((e.indexOf(t.charAt(i-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(i))>>>6-2*o);return n}};t.exports=n})()},"03a0":function(t,e,n){var i=n("25bb"),o=n("d309");t.exports={distanceInWords:i(),format:o()}},"044b":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function i(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||i(t)||!!t._isBuffer)}},"244b":function(t,e,n){"use strict";var i=n("68b9"),o=n.n(i);o.a},"25bb":function(t,e){function n(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function e(e,n,i){var o;return i=i||{},o="string"===typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),i.addSuffix?i.comparison>0?"dalam waktu "+o:o+" yang lalu":o}return{localize:e}}t.exports=n},3933:function(t,e,n){t.exports=n.p+"img/icon.9b1db0de.png"},"6821f":function(t,e,n){(function(){var e=n("00d8"),i=n("9a63").utf8,o=n("044b"),r=n("9a63").bin,a=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?r.stringToBytes(t):i.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var s=e.bytesToWords(t),c=8*t.length,u=1732584193,l=-271733879,d=-1732584194,f=271733878,h=0;h<s.length;h++)s[h]=16711935&(s[h]<<8|s[h]>>>24)|4278255360&(s[h]<<24|s[h]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;var g=a._ff,m=a._gg,p=a._hh,b=a._ii;for(h=0;h<s.length;h+=16){var v=u,x=l,y=d,w=f;u=g(u,l,d,f,s[h+0],7,-680876936),f=g(f,u,l,d,s[h+1],12,-389564586),d=g(d,f,u,l,s[h+2],17,606105819),l=g(l,d,f,u,s[h+3],22,-1044525330),u=g(u,l,d,f,s[h+4],7,-176418897),f=g(f,u,l,d,s[h+5],12,1200080426),d=g(d,f,u,l,s[h+6],17,-1473231341),l=g(l,d,f,u,s[h+7],22,-45705983),u=g(u,l,d,f,s[h+8],7,1770035416),f=g(f,u,l,d,s[h+9],12,-1958414417),d=g(d,f,u,l,s[h+10],17,-42063),l=g(l,d,f,u,s[h+11],22,-1990404162),u=g(u,l,d,f,s[h+12],7,1804603682),f=g(f,u,l,d,s[h+13],12,-40341101),d=g(d,f,u,l,s[h+14],17,-1502002290),l=g(l,d,f,u,s[h+15],22,1236535329),u=m(u,l,d,f,s[h+1],5,-165796510),f=m(f,u,l,d,s[h+6],9,-1069501632),d=m(d,f,u,l,s[h+11],14,643717713),l=m(l,d,f,u,s[h+0],20,-373897302),u=m(u,l,d,f,s[h+5],5,-701558691),f=m(f,u,l,d,s[h+10],9,38016083),d=m(d,f,u,l,s[h+15],14,-660478335),l=m(l,d,f,u,s[h+4],20,-405537848),u=m(u,l,d,f,s[h+9],5,568446438),f=m(f,u,l,d,s[h+14],9,-1019803690),d=m(d,f,u,l,s[h+3],14,-187363961),l=m(l,d,f,u,s[h+8],20,1163531501),u=m(u,l,d,f,s[h+13],5,-1444681467),f=m(f,u,l,d,s[h+2],9,-51403784),d=m(d,f,u,l,s[h+7],14,1735328473),l=m(l,d,f,u,s[h+12],20,-1926607734),u=p(u,l,d,f,s[h+5],4,-378558),f=p(f,u,l,d,s[h+8],11,-2022574463),d=p(d,f,u,l,s[h+11],16,1839030562),l=p(l,d,f,u,s[h+14],23,-35309556),u=p(u,l,d,f,s[h+1],4,-1530992060),f=p(f,u,l,d,s[h+4],11,1272893353),d=p(d,f,u,l,s[h+7],16,-155497632),l=p(l,d,f,u,s[h+10],23,-1094730640),u=p(u,l,d,f,s[h+13],4,681279174),f=p(f,u,l,d,s[h+0],11,-358537222),d=p(d,f,u,l,s[h+3],16,-722521979),l=p(l,d,f,u,s[h+6],23,76029189),u=p(u,l,d,f,s[h+9],4,-640364487),f=p(f,u,l,d,s[h+12],11,-421815835),d=p(d,f,u,l,s[h+15],16,530742520),l=p(l,d,f,u,s[h+2],23,-995338651),u=b(u,l,d,f,s[h+0],6,-198630844),f=b(f,u,l,d,s[h+7],10,1126891415),d=b(d,f,u,l,s[h+14],15,-1416354905),l=b(l,d,f,u,s[h+5],21,-57434055),u=b(u,l,d,f,s[h+12],6,1700485571),f=b(f,u,l,d,s[h+3],10,-1894986606),d=b(d,f,u,l,s[h+10],15,-1051523),l=b(l,d,f,u,s[h+1],21,-2054922799),u=b(u,l,d,f,s[h+8],6,1873313359),f=b(f,u,l,d,s[h+15],10,-30611744),d=b(d,f,u,l,s[h+6],15,-1560198380),l=b(l,d,f,u,s[h+13],21,1309151649),u=b(u,l,d,f,s[h+4],6,-145523070),f=b(f,u,l,d,s[h+11],10,-1120210379),d=b(d,f,u,l,s[h+2],15,718787259),l=b(l,d,f,u,s[h+9],21,-343485551),u=u+v>>>0,l=l+x>>>0,d=d+y>>>0,f=f+w>>>0}return e.endian([u,l,d,f])};a._ff=function(t,e,n,i,o,r,a){var s=t+(e&n|~e&i)+(o>>>0)+a;return(s<<r|s>>>32-r)+e},a._gg=function(t,e,n,i,o,r,a){var s=t+(e&i|n&~i)+(o>>>0)+a;return(s<<r|s>>>32-r)+e},a._hh=function(t,e,n,i,o,r,a){var s=t+(e^n^i)+(o>>>0)+a;return(s<<r|s>>>32-r)+e},a._ii=function(t,e,n,i,o,r,a){var s=t+(n^(e|~i))+(o>>>0)+a;return(s<<r|s>>>32-r)+e},a._blocksize=16,a._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var i=e.wordsToBytes(a(t,n));return n&&n.asBytes?i:n&&n.asString?r.bytesToString(i):e.bytesToHex(i)}})()},"68b9":function(t,e,n){},"80f4":function(t,e,n){"use strict";var i=n("8055"),o=n.n(i),r=(n("7e59"),o()("https://infolayanans.now.sh"));e["a"]=r},"8cb2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.busy?i("div",{staticStyle:{width:"100%",height:"1200px",position:"fixed","z-index":"200",background:"radial-gradient(circle, rgba(33,35,57,0.36738445378151263) 0%, rgba(34,33,48,0.33657212885154064) 100%)"}},[i("p",{staticClass:"animated infinite bounce font-bold font-times text-2xl text-black",staticStyle:{"margin-top":"50vh","margin-left":"30vw"}},[t._v("LOADING ...")])]):t._e(),i("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():i("v-touch",{staticStyle:{width:"20px",background:"transparent",height:"100vh",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),i("div",{staticClass:"container-fluid anim shadow-lg",staticStyle:{background:"#343A40"}},[i("div",{staticClass:"row anim"},[i("div",{staticClass:"anim col-4 col-sm-3 col-md-2 p-1 rounded-lg",staticStyle:{position:"fixed",padding:"0",margin:"0",height:"100px"},style:{background:t.bgleft1}},[i("div",{staticClass:"text-center text-white font-bold text-times text-xs",staticStyle:{height:"50px",margin:"none","padding-top":"10px"},style:{background:t.bgleft2}},[i("img",{staticClass:"img-fluid sm:p-4 pt-2",attrs:{src:n("3933")}})]),i("div",{staticClass:"text-center p-1",staticStyle:{"z-index":"100"},style:{background:t.bgleft2}},[t._m(0),i("div",{staticClass:"flex items-center border-b border-b-2 p-2"}),i("br"),i("div",{staticClass:"bord hover:bg-red-500 rounded-t-lg text-left pl-3 ",staticStyle:{"border-top":"2px solid black",color:"white","font-size":"13px"},attrs:{id:"pertamaclick"},on:{click:function(e){return t.muncul(e)}}},[t._v(" Menu "),i("span",{staticClass:"typcn typcn-arrow-down float-right"})]),i("ul",{staticClass:"isaktif sm:pl-4 anim mb-3 text-white animated slideInRight ",staticStyle:{background:"#232E30"}},[i("li",{staticClass:"bord hover:bg-red-500 text-left sm:pl-3",staticStyle:{"font-size":"13px"},on:{click:function(e){return t.$router.push("/driver/admin/user")}}},[t._v(" User "),i("span",{staticClass:"typcn typcn-user"})])]),i("div",{staticClass:"bord hover:bg-red-500 rounded-b-lg text-left pl-3 mt-2",staticStyle:{"border-top":"2px solid black",color:"white","font-size":"13px"},on:{click:function(e){return t.$router.push("/driver/admin")}}},[t._v(" DASHBOARD ")])])]),i("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"col-sm-12":!t.menuTrigger}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12",staticStyle:{padding:"0",margin:"0",position:"fixed","z-index":"100"}},[i("div",{staticClass:"pt-2",staticStyle:{height:"50px",margin:"none",padding:"3px"},style:{background:t.bgrighttop}},[i("button",{staticClass:"btn btn-sm btn-dark ml-3",attrs:{type:"button"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}},[t._m(1)]),i("div",{staticClass:"text-center",staticStyle:{position:"absolute",width:"60%","margin-top":"-33px",left:"20%"}},[i("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{height:"30px"},attrs:{src:n("3933")},on:{click:function(e){return t.$router.push("/driver/admin")}}})]),[i("div",{staticStyle:{position:"absolute",right:"10px",top:"5px"}},[i("button",{staticClass:"btn text-white mr-2",staticStyle:{"margin-top":"4px"},attrs:{type:"button"},on:{click:function(e){t.menuKanan=!t.menuKanan}}},[i("div",{staticClass:"tips"},[i("p",{directives:[{name:"show",rawName:"v-show",value:"0"!=t.notifn,expression:"notifn!='0'"}],staticClass:"btn btn-sm rounded-circle btn-danger text-white absolute font-bold",staticStyle:{right:"20px"}},[t._v(t._s(t.notifn))]),i("i",{staticClass:"fas fa-ellipsis-h"}),i("span",{staticClass:"tipstextB"},[t._v("Profile")])])])])]],2)]),i("div",{staticClass:"col-sm-12",staticStyle:{background:"#eceff4","min-height":"100vh",padding:"0",margin:"0"},on:{click:function(e){t.menuTrigger=!1,t.menuKanan=!1}}},[i("br"),i("br"),i("div",{staticClass:"sm:mt-2 sm:p-2"},[i("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticStyle:{"z-index":"10"}})],1)])])])]),i("transition",{attrs:{tag:"div","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",mode:"in-out"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuKanan,expression:"menuKanan"}],staticClass:" border-1 border-grey shadow-md rounded-bl-lg",staticStyle:{position:"fixed","z-index":"11",right:"0",top:"0",width:"210px",height:"100vh","box-shadow":"1px 1px 2px 1.5px black"}},[i("br"),i("br"),i("br"),i("p",{staticClass:"p-2 border-2 text-sm font-times",on:{click:function(e){t.$router.push("/driver/profile"),t.menuKanan=!t.menuKanan}}},[i("span",{staticClass:"typcn typcn-user"}),t._v(" Profile ")]),i("p",{staticClass:"p-2 border-2 text-sm font-times text-red",on:{click:function(e){t.logout,t.menuKanan=!t.menuKanan}}},[i("span",{staticClass:"typcn typcn-eject"}),t._v(" Logout ")]),i("hr",{staticClass:"style13",staticStyle:{margin:"0"}}),i("p",{staticClass:"text-center font-times"},[t._v("Notifikasi!")]),i("hr",{staticClass:"style13",staticStyle:{margin:"0"}}),i("div",{staticStyle:{"overflow-y":"scroll",height:"400px"}})])])],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:p-3 text-center",staticStyle:{"border-bottom":"1px solid gray"}},[n("br"),n("br"),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips"},[n("i",{staticClass:"fas fa-th",staticStyle:{color:"white","margin-left":"50px"}}),n("span",{staticClass:"tipstextB"},[t._v("Slide")])])}],r=(n("ac6a"),n("bc3a"),n("8aa5")),a=n.n(r),s=(n("6821f"),n("80f4"),a.a.firestore(),n("03a0")),c={components:{},data:function(){return{notifs:[],notifn:0,count:0,bgleft1:"#343A40",bgleft2:"#232e30",bgleft3:"#343A40",bgrighttop:"#1A3B4E",test:1,menuTrigger:!1,menuKanan:!1,bearer:"",busy:!1}},beforeMount:function(){this.$store.state.users||this.$store.dispatch("celogin",{true:!0,false:"/"})},methods:{exits:function(){document.addEventListener("deviceready",(function(t){navigator.app.exitApp()}),!0)},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:s,includeSeconds:!0})},logout:function(){this.$store.dispatch("logout"),localStorage.removeItem("login"),this.$router.push("/")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),this.version()}},mounted:function(){var t=this,e=this;function n(){var t;function e(){alert("idle")}function n(){clearTimeout(t),console.log("idle di reset"),t=setTimeout(e,1e4)}window.onload=n,window.onmousemove=n,window.onmousedown=n,window.ontouchstart=n,window.onclick=n,window.onkeypress=n,window.addEventListener("scroll",n,!0)}n(),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))}},u=c,l=(n("244b"),n("2877")),d=Object(l["a"])(u,i,o,!1,null,"b91f33ec",null);e["default"]=d.exports},"9a63":function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},d309:function(t,e,n){var i=n("90e5");function o(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],o=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],a=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],s=["AM","PM"],c=["am","pm"],u=["a.m.","p.m."],l={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return o[t.getDay()]},dddd:function(t){return a[t.getDay()]},A:function(t){return t.getHours()/12>=1?s[1]:s[0]},a:function(t){return t.getHours()/12>=1?c[1]:c[0]},aa:function(t){return t.getHours()/12>=1?u[1]:u[0]}},d=["M","D","DDD","d","Q","W"];return d.forEach((function(t){l[t+"o"]=function(e,n){return r(n[t](e))}})),{formatters:l,formattingTokensRegExp:i(l)}}function r(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=o}}]);
//# sourceMappingURL=chunk-4fab8cfb.47d780a1.js.map