(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-pwa-index"],{1148:function(t,e,n){"use strict";var i=n("a691"),o=n("1d80");t.exports="".repeat||function(t){var e=String(o(this)),n="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(n+=e);return n}},"12b7":function(t,e,n){},"26ee":function(t,e,n){"use strict";var i=n("cc47"),o=n.n(i);o.a},"38cf":function(t,e,n){var i=n("23e7"),o=n("1148");i({target:"String",proto:!0},{repeat:o})},"5cc6":function(t,e,n){var i=n("74e8");i("Uint8",(function(t){return function(e,n,i){return t(this,e,n,i)}}))},"706d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.multi?[n("div",{staticClass:"uploadContainer hoverable text-center flex flex-wrap flex-row",staticStyle:{padding:"10px"}},[n("div",{staticClass:"imgInputContainer",staticStyle:{cursor:"pointer","margin-left":"0px"},on:{click:t.upload}},t._l(t.imgList,(function(e,i){return n("img",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],key:i,staticClass:"imgInput myImage",staticStyle:{height:"90px",width:"60px","z-index":"100"},attrs:{src:e,id:"imgKu"+i},on:{click:function(e){return t.hilang(e,i)}}})})),0),n("div",{staticClass:"text-center cursor-pointer",staticStyle:{position:"static"}},[t.imgList.length<1?n("label",{staticStyle:{"font-size":"12px",color:"black",position:"absolute","margin-left":"13px","margin-top":"23px"},attrs:{for:"file"}},[t._v("Drag/Drop file")]):t._e(),n("input",{ref:"uploader",staticClass:"cursor-pointer",class:{"d-none":t.imgList.length>0},attrs:{id:"file",type:"file",multiple:""},on:{input:function(e){return e.preventDefault(),t.ambil(e)}}})]),n("section",{staticStyle:{"margin-left":"20px"}},[n("button",{staticClass:"btn btn-sm btn-outline-success waves-effect d-none",attrs:{type:"button"},on:{click:t.upload}},[t._v("Browse")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],staticClass:"btn btn-sm btn-outline-danger waves-effect",attrs:{type:"button",id:"rest"},on:{click:t.reset}},[t._v("Reset")])])])]:[n("div",{staticClass:"uploadContainer hoverable text-center flex flex-wrap flex-row",staticStyle:{padding:"10px"}},[n("div",{staticClass:"imgInputContainer",staticStyle:{cursor:"pointer","margin-left":"0px"},on:{click:t.upload}},t._l(t.imgList,(function(e,i){return n("img",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],key:i,staticClass:"imgInput myImage",staticStyle:{height:"90px",width:"60px","z-index":"100"},attrs:{src:e,id:"imgKu"+i},on:{click:function(e){return t.hilang(e,i)}}})})),0),n("div",{staticClass:"text-center cursor-pointer",staticStyle:{position:"static"}},[t.imgList.length<1?n("label",{staticStyle:{"font-size":"12px",color:"black",position:"absolute","margin-left":"13px","margin-top":"23px"},attrs:{for:"file"}},[t._v("Drag/Drop file")]):t._e(),n("input",{ref:"uploader",staticClass:"cursor-pointer",class:{"d-none":t.imgList.length>0},attrs:{id:"file",type:"file"},on:{input:function(e){return e.preventDefault(),t.ambil(e)}}})]),n("section",{staticStyle:{"margin-left":"20px"}},[n("button",{staticClass:"btn btn-sm btn-outline-success waves-effect d-none",attrs:{type:"button"},on:{click:t.upload}},[t._v("Browse")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],staticClass:"btn btn-sm btn-outline-danger waves-effect",attrs:{type:"button",id:"rest"},on:{click:t.reset}},[t._v("Reset")])])])]],2)},o=[],s=(n("c740"),n("4160"),n("b0c0"),n("159b"),{data:function(){return{imgList:[],count:0,imgFiles:[],imgs:[]}},props:{multi:{type:Boolean,required:!1,default:!0}},watch:{imgList:function(){var t=this;setTimeout((function(){0==t.imgList.length&&t.$emit("resetInput",!0)}),300)}},methods:{hilang:function(t,e){var n=this,i=t.target.src,o=this.imgList.findIndex((function(t){return t==i}));delete this.imgList[o];var s=0;this.$el.querySelector("#imgKu"+e).classList.add("hilang"),this.$el.querySelectorAll(".myImage").forEach((function(t){t.classList.contains("hilang")&&s++})),s>0&&this.count++,this.count==this.$el.querySelectorAll(".myImage").length&&setTimeout((function(){n.$el.querySelector("#rest").click()}),300)},reset:function(){this.$el.querySelector("#file").style.display="initial",this.$el.querySelectorAll(".myImage").forEach((function(t){t.style.display="none"})),this.imgList=[],this.count=0},upload:function(t){var e=1;this.imgList.length>0?(this.$el.querySelectorAll(".myImage").forEach((function(n){t.target!=n?e+=1:e*=-100})),e>0&&this.$refs.uploader.click()):this.$refs.uploader.click()},ambil:function(t){var e,n,i=this;t.target.files[0].size>1e7?alert("File yang di upload tidak sesuai kriteria"):t.target.files.length>0&&function(){for(var o,s=[],a=[],r="null",l=0;l<t.target.files.length;l++)i.imgs.push(t.target.files[l]),e=t.target.files[l],n=new FileReader,n.onload=function(t){s.push(t.target.result)},n.readAsDataURL(e),o=t.target.files[l],r=o.size<1e6?30:o.size<2e6?25:o.size<3e6?20:o.size<4e6?15:10,i.$daycaca.compress(o,r,(function(t){i.gambar=t,i.$urltofile(t,o.name,o.type).then((function(t){a.push(t)}))}));i.imgList=s,console.log(t.target),i.$emit("upload",a)}()}}}),a=s,r=n("2877"),l=Object(r["a"])(a,i,o,!1,null,null,null);e["a"]=l.exports},a200:function(t,e,n){"use strict";var i=n("12b7"),o=n.n(i);o.a},b8e1:function(t,e,n){"use strict";n.r(e);var i,o,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/testing/pwa/pwa")}}},[t._v("SEMUA PWA INSTALLASI DAN NOTIFIKASI")]),n("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/testing/pwa/pwa_php")}}},[t._v("SEMUA PWA INSTALLASI DAN NOTIFIKASI BUAT PHP")]),n("connect"),n("subscribe"),n("install"),n("Prompt"),n("button",{staticClass:"aktif-notif hover:bg-white hover:text-black bg-yellow p-2 border-solid rounded-lg",attrs:{type:"button"},on:{click:function(e){return t.install()}}},[t._v("Install")]),n("div",{staticClass:"container flex flex-wrap mx-auto px-4"},[n("div",{staticClass:"w-full sm:w-1/2 rounded-lg p-2",staticStyle:{"box-shadow":"1px 2px 4px gray"}},[n("h2",[t._v("Daftar Mendapatkan Notifikasi")]),n("br"),n("button",{staticClass:"aktif-notif hover:bg-white hover:text-black bg-blue p-2 border-solid rounded-lg",attrs:{type:"button"},on:{click:t.permission}},[t._v("Subscribe")]),n("br")]),n("div",{staticClass:"w-full sm:w-1/2 rounded-lg p-2",staticStyle:{"box-shadow":"1px 2px 4px gray"}},[n("h2",[t._v("Kirim Notifikasi")]),n("br"),n("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.kirim(e)}}},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"title"}},[t._v("title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"title",type:"text",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(e){e.target.composing||t.$set(t.vdata,"title",e.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"content"}},[t._v("content")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.content,expression:"vdata.content"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"content",type:"text",placeholder:"content"},domProps:{value:t.vdata.content},on:{input:function(e){e.target.composing||t.$set(t.vdata,"content",e.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"content"}},[t._v("url")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.url,expression:"vdata.url"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"url",type:"text",placeholder:"url"},domProps:{value:t.vdata.url},on:{input:function(e){e.target.composing||t.$set(t.vdata,"url",e.target.value)}}})]),n("button",{staticClass:"hover:bg-white hover:text-black bg-green-light p-2 border-solid rounded-lg",attrs:{type:"submit"}},[t._v("Notifikasi")])])])]),n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:function(e){return t.showAddToHomeScreen()}}},[t._v("ADD TO HOME")])],1)},a=[],r=(n("d3b7"),n("ac1f"),n("38cf"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("bf19"),n("706d")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:["network",t.online?"online":"offline"]},[n("div",{staticClass:"circle"}),t._v(" "+t._s(t.online?"online":"offline")+" ")])])},c=[],u={data:function(){return{online:!0}},mounted:function(){window.navigator?(this.online=Boolean(window.navigator.onLine),window.addEventListener("offline",this._toggleNetworkStatus),window.addEventListener("online",this._toggleNetworkStatus)):this.online=!1},methods:{_toggleNetworkStatus:function(t){var e=t.type;this.online="online"===e}},destroyed:function(){window.removeEventListener("offline",this._toggleNetworkStatus),window.removeEventListener("online",this._toggleNetworkStatus)}},p=u,d=(n("a200"),n("2877")),f=Object(d["a"])(p,l,c,!1,null,null,null),g=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.aktif?[n("div",{staticClass:"tips",staticStyle:{width:"100%"}},[n("button",{staticClass:"btn btn-sm btn-outline-success btn-block font-times",attrs:{type:"button"},on:{click:t.subscribe}},[t._v(" Subscribe "),n("span",{staticClass:"typcn typcn-bell",staticStyle:{"font-size":"20px"}})]),n("span",{staticClass:"tipstextT"},[t._v("Aktifkan Notifikasi")])])]:[t._m(0)]],2)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips",staticStyle:{width:"100%"}},[n("button",{staticClass:"btn btn-sm btn-outline-secondary btn-block font-times",attrs:{type:"button",disabled:""}},[t._v(" Subscribe "),n("span",{staticClass:"typcn typcn-bell",staticStyle:{"font-size":"20px"}})]),n("span",{staticClass:"tipstextT"},[t._v("Sudah Subscribe")])])}],h=(n("7e59"),{data:function(){return{aktif:!0}},mounted:function(){var t=this;if(this.$nuxt.$on("subscribe",(function(e){t.aktif=!1})),"Notification"in window){var e=localStorage.getItem("subscribe");t.aktif=!e}else console.log("This browser does not support desktop notification")},methods:{subscribe:function(){var t=this;"Notification"in window?Notification.requestPermission((function(e){"granted"!==e?console.log("notifikasi tidak di perbolehkan"):(t.confPushSub(),console.log("notifikasi aktif"))})):alert("notifikasi tidak didukung ")},confPushSub:function(){var t=this;"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){console.log(e),e.pushManager.getSubscription().then((function(n){null===n?e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t.urlB64ToUint8Array("BJUSmaFFmfjl8uvxY2h2A_-gccjB9AH68pwEm347rwiDhugF4KxznF5mSNS7JRa4Lah-QzPzQLuvjG1AaQJYE-U")}).then((function(t){return console.log("Subscribe OK:",t),fetch("https://infolayanans.now.sh/api/pwa/subscription",{method:"POST",body:JSON.stringify(t.toJSON()),headers:{"Content-Type":"application/json",Accept:"application/json"}})})).then((function(){t.aktif=!1,localStorage.setItem("subscribe",!0),t.newNotif("Berhasil Subscribe")})).catch((function(t){console.log("Subscribe Error:",t)})):t.newNotif("Subscribtion sudah ada")}))}))},newNotif:function(t){var e={body:t,icon:"https://infolayanans.space/api/icon.png",dir:"ltr",lang:"en-US",vibrate:[100,50,200],badge:"https://infolayanans.space/api/icon.png"};//! cara memunculkan notifikasi dengan windows object
//! cara menjalankan notifikasi dari service worker melalui navigator
"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.showNotification("Subscribe",e)}))},urlB64ToUint8Array:function(t){for(var e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=window.atob(n),o=new Uint8Array(i.length),s=0;s<i.length;++s)o[s]=i.charCodeAt(s);return o}}}),v=h,y=Object(d["a"])(v,b,m,!1,null,null,null),w=y.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"countainer-pwa-promt"},[n("span",{staticClass:"typcn typcn-chevron-left cursor-pointer",staticStyle:{"font-size":"34px",position:"absolute","margin-top":"16px","margin-left":"-30px"},on:{mouseover:t.slideIt,click:t.slideIt}}),n("span",{staticClass:"typcn typcn-chevron-left cursor-pointer",staticStyle:{"font-size":"34px",position:"absolute","margin-top":"16px","margin-left":"-38px"},on:{mouseover:t.slideIt,click:t.slideIt}}),n("div",{staticClass:"pwa-ui"},[n("install"),n("subscribe")],1)])])},k=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-sm btn-outline-danger btn-block font-times",attrs:{type:"button"},on:{click:t.install}},[t._v(" Install Dekstop "),n("span",{staticClass:"typcn typcn-device-laptop",staticStyle:{"font-size":"20px"}})])])},C=[],_=(n("7e59"),{mounted:function(){window.addEventListener("beforeinstallprompt",(function(t){return console.log("beforeinstallprompt Event fired"),t.preventDefault(),i=t,!1}))},methods:{install:function(){void 0!==i&&(i.prompt(),i.userChoice.then((function(t){console.log(t.outcome),"dismissed"==t.outcome?console.log("User cancelled home screen install"):console.log("User added to home screen"),i=null})))}}}),L=_,N=Object(d["a"])(L,x,C,!1,null,null,null),A=N.exports,I={methods:{slideIt:function(){this.$el.querySelector(".countainer-pwa-promt").classList.toggle("slideNya")}},mounted:function(){var t=this,e=localStorage.getItem("pwaPrompt");e?this.$el.querySelector(".countainer-pwa-promt").classList.add("slideNya"):(this.$el.querySelector(".countainer-pwa-promt").classList.remove("slideNya"),setTimeout((function(){t.$el.querySelector(".countainer-pwa-promt").classList.add("slideNya"),localStorage.setItem("pwaPrompt",!0)}),3500))},components:{Subscribe:w,Install:A}},$=I,E=(n("26ee"),Object(d["a"])($,S,k,!1,null,"20893fcb",null)),T=E.exports,U=n("bc3a"),O=n.n(U),P=n("7e59"),z={data:function(){return{modal:!1,img:[],vdata:{url:"http://localhost:3000"}}},components:{Subscribe:w,Install:A,Prompt:T,connect:g,Uploader:r["a"]},mounted:function(){document.addEventListener("deviceready",(function(){cordova}),!1),console.log("test"),setTimeout((function(){window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),o=t,this.showAddToHomeScreen()}))}),1e3)},methods:{cek:function(){console.log(this.img)},install:function(){alert("install"),void 0!==o&&(o.prompt(),o.userChoice.then((function(t){console.log(t.outcome),"dismissed"==t.outcome?console.log("User cancelled home screen install"):console.log("User added to home screen"),o=null})))},kirim:function(){O.a.post("http://localhost:3000/api/pwa/notifikasi",this.vdata).then((function(t){console.log(t)}))},showAddToHomeScreen:function(){var t=this,e=document.querySelector(".ad2hs-prompt");e.style.display="block",e.addEventListener("click",t.addToHomeScreen)},addToHomeScreen:function(){var t=document.querySelector(".ad2hs-prompt");t.style.display="none",o.prompt(),o.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),o=null}))},permission:function(){var t=this;"Notification"in window?Notification.requestPermission((function(e){"granted"!==e?console.log("notifikasi tidak di perbolehkan"):(t.confPushSub(),console.log("notifikasi aktif"))})):alert("notifikasi tidak didukung ")},confPushSub:function(){var t=this;"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){console.log(e),e.pushManager.getSubscription().then((function(n){null===n?e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t.urlB64ToUint8Array(P.publicKey)}).then((function(t){return console.log("Subscribe OK:",t),fetch("http://localhost:3000/api/pwa/subscription",{method:"POST",body:JSON.stringify(t.toJSON()),headers:{"Content-Type":"application/json",Accept:"application/json"}})})).then((function(){t.newNotif("Berhasil Subscribe"),console.log("Server Stored Subscription.")})).catch((function(t){console.log("Subscribe Error:",t)})):t.newNotif("Subscribtion sudah ada")}))}))},newNotif:function(t){var e={body:t,icon:"../icons/app-icon-96x96.png",image:"../icon.png",dir:"ltr",lang:"en-US",vibrate:[100,50,200],badge:"../icon.png",
//! advance option
actions:[//! list aksi saat notifikasi di pilih
{action:"confirm",title:"Yes",icon:"../icon.png"},{action:"cancel",title:"No",icon:"../icon.png"}]};//! cara memunculkan notifikasi dengan windows object
//! cara menjalankan notifikasi dari service worker melalui navigator
"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.showNotification("Subscribe",e)}))},urlB64ToUint8Array:function(t){for(var e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=window.atob(n),o=new Uint8Array(i.length),s=0;s<i.length;++s)o[s]=i.charCodeAt(s);return o}}},D=z,q=Object(d["a"])(D,s,a,!1,null,null,null);e["default"]=q.exports},bf19:function(t,e,n){"use strict";var i=n("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},c740:function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").findIndex,s=n("44d2"),a=n("ae40"),r="findIndex",l=!0,c=a(r);r in[]&&Array(1)[r]((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s(r)},cc47:function(t,e,n){}}]);
//# sourceMappingURL=page-testing-pwa-index.30c74e53.js.map