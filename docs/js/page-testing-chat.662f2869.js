(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-chat"],{"03a0":function(t,e,n){var i=n("25bb"),s=n("d309");t.exports={distanceInWords:i(),format:s()}},"25bb":function(t,e){function n(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function e(e,n,i){var s;return i=i||{},s="string"===typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),i.addSuffix?i.comparison>0?"dalam waktu "+s:s+" yang lalu":s}return{localize:e}}t.exports=n},"2a26":function(t,e,n){"use strict";var i=n("4048"),s=n.n(i);s.a},4048:function(t,e,n){},"498a":function(t,e,n){"use strict";var i=n("23e7"),s=n("58a8").trim,a=n("c8d2");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return s(this)}})},"53c5":function(t,e,n){t.exports=n.p+"img/arrow-down-thick.7c008be8.svg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),s=n("5899"),a="["+s+"]",o=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"80f4":function(t,e,n){"use strict";var i=n("8055"),s=n.n(i),a=(n("7e59"),s()("https://infolayanans.now.sh"));e["a"]=a},"99af":function(t,e,n){"use strict";var i=n("23e7"),s=n("d039"),a=n("e8b5"),o=n("861d"),r=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),g=n("2d00"),m=d("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",b=g>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=f("concat"),y=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},x=!b||!v;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,i,s,a,o=r(this),f=l(o,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?o:arguments[e],y(a)){if(s=c(a.length),d+s>h)throw TypeError(p);for(n=0;n<s;n++,d++)n in a&&u(f,d,a[n])}else{if(d>=h)throw TypeError(p);u(f,d++,a)}return f.length=d,f}})},b684:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.test}},[t._v("test")]),i("a",{key:"1",staticClass:"btns btns-sm rounded-lg hover:bg-black hover:text-white",staticStyle:{position:"fixed",top:"10px",right:"10px"},attrs:{href:"javascript:;",onclick:"document.location.hash='pos1';"},on:{click:t.goDown}},[i("img",{attrs:{src:n("53c5"),alt:""}})]),i("ul",{ref:"messages",staticClass:"messages font-times",attrs:{id:"chatnya"}},[0==t.messages.length?i("li",[i("hr",{staticClass:"style13"}),i("div",{staticClass:"text-center"},[t._v("kosong")]),i("div",{staticClass:"text-center"},[t._v("Mulai Chat Sekarang")]),i("hr",{staticClass:"style13"})]):t._e(),t._l(t.messages,(function(e,n){return e.room==t.$route.query.room?i("li",{key:n,staticClass:"message font-times rounded-lg p-2",staticStyle:{"box-shadow":"1px 2px 4px black","margin-bottom":"10px"}},[i("div",{staticClass:"text-right",staticStyle:{"font-size":"12px","font-family":"times new roman"}},[i("p",{staticStyle:{"font-size":"13px",position:"absolute",left:"50px","font-weight":"bold"}},[t._v(t._s(e.name))]),i("p",[t._v(t._s(t.distanceToNow(e.createdAt)))])]),i("p",{staticStyle:{"font-size":"14px","word-wrap":"break-word","line-height":"1.5","text-align":"justify"}},[i("img",{staticClass:"rounded-full",staticStyle:{width:"30px",height:"30px","box-shadow":"1px 2px 2px gray","margin-bottom":"6px"},attrs:{src:-1!=e.picture.indexOf("http")?e.picture:t.$store.state.url+e.picture,alt:""}}),i("span",{staticStyle:{"margin-left":"12px"},domProps:{innerHTML:t._s(e.text)}})])]):t._e()}))],2),i("div",{staticStyle:{"margin-left":"30px"}},[i("Uploader",{on:{upload:function(e){return t.upload(e)},resetInput:t.resetImg}})],1),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"pos1",type:"text",placeholder:"Type here..."},domProps:{value:t.message},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)},input:function(e){e.target.composing||(t.message=e.target.value)}}})])])])])},s=[],a=(n("b0c0"),n("498a"),n("bf19"),n("53ca")),o=n("bc3a"),r=n.n(o),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"uploadContainer hoverable text-center flex flex-wrap flex-row"},[i("div",{staticClass:"text-center",staticStyle:{cursor:"pointer"},on:{click:t.upload}},t._l(t.imgList,(function(e,n){return i("img",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],key:n,staticClass:"imgInput myImage imgSize",staticStyle:{"z-index":"100","margin-left":"10%"},attrs:{src:e,id:"imgKu"+n},on:{click:function(e){return t.zoomIn(e)}}})})),0),i("div",{staticClass:"text-center cursor-pointer",staticStyle:{position:"static"}},[t.imgList.length<1?i("label",{staticClass:"cursor-pointer",staticStyle:{"font-size":"12px",color:"black",position:"absolute","margin-left":"5px","margin-top":"0px"},attrs:{for:"file2"}},[i("img",{attrs:{src:n("d17f")}})]):t._e(),i("input",{ref:"uploader",staticClass:"cursor-pointer",class:{"d-none":t.imgList.length>0},attrs:{id:"file2",type:"file"},on:{input:function(e){return e.preventDefault(),t.ambil(e)}}})]),i("section",{staticStyle:{"margin-left":"20px"}},[i("button",{staticClass:"btn btn-sm btn-outline-success waves-effect d-none",attrs:{type:"button"},on:{click:t.upload}},[t._v("Browse")]),i("button",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],staticClass:"btn btn-sm btn-outline-danger waves-effect",attrs:{type:"button",id:"rest"},on:{click:t.reset}},[t._v("Reset")])])])])},u=[],l=(n("99af"),n("c740"),n("4160"),n("159b"),{data:function(){return{imgList:[],count:0,imgFiles:[],imgs:[]}},watch:{imgList:function(){var t=this;setTimeout((function(){0==t.imgList.length&&t.$emit("resetInput",!0)}),300)}},methods:{zoomIn:function(t){console.log(t.target.classList.toggle("zoomIn"))},hilang:function(t,e){var n=this,i=t.target.src,s=this.imgList.findIndex((function(t){return t==i}));delete this.imgList[s];var a=0;this.$el.querySelector("#imgKu"+e).classList.add("hilang"),this.$el.querySelectorAll(".myImage").forEach((function(t){t.classList.contains("hilang")&&a++})),a>0&&this.count++,this.count==this.$el.querySelectorAll(".myImage").length&&setTimeout((function(){n.$el.querySelector("#rest").click()}),300)},reset:function(){this.$el.querySelector("#file2").style.display="initial",this.$el.querySelectorAll(".myImage").forEach((function(t){t.style.display="none"})),this.imgList=[],this.count=0},upload:function(t){var e=1;this.imgList.length>0?(this.$el.querySelectorAll(".myImage").forEach((function(n){t.target!=n?e+=1:e*=-100})),e>0&&this.$refs.uploader.click()):this.$refs.uploader.click()},ambil:function(t){var e,n,i=this,s=this;t.target.files[0].size>1e7?alert("File yang di upload tidak sesuai kriteria"):t.target.files.length>0&&function(){for(var a,o=[],c=[],u="null",l=0;l<t.target.files.length;l++)i.imgs.push(t.target.files[l]),e=t.target.files[l],n=new FileReader,n.onload=function(t){o.push(t.target.result)},n.readAsDataURL(e),a=t.target.files[l],u=a.size<1e6?30:a.size<2e6?25:a.size<3e6?20:a.size<4e6?15:10,i.$daycaca.compress(a,u,(function(t){i.gambar=t,i.$urltofile(t,a.name,a.type).then((function(t){var e=new FormData,n=[];n[0]=t,e.append("file",t),r.a.post("http://localhost:3000/api/data/upload",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){c.push("".concat(s.$store.state.url).concat(t.data.data))}))}))}));i.imgList=o,console.log(t.target),setTimeout((function(){i.$emit("upload",c)}),1e3)}()}}}),f=l,d=(n("2a26"),n("2877")),g=Object(d["a"])(f,c,u,!1,null,null,null),m=g.exports,h=n("80f4"),p=n("03a0"),b={data:function(){return{messages:[],message:"",imgs:[],img:""}},components:{Uploader:m},watch:{messages:"scrollToBottom"},beforeMount:function(){var t=this;h["a"].on("new-message",(function(e){t.messages.push(e),"object"==("undefined"===typeof cordova?"undefined":Object(a["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.notification.local.schedule({title:"pesan baru",text:"ada pesan baru ...",foreground:!0,badge:1,sound:"file://resources/audio/beep.mp3",led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]}),navigator.notification.beep(1)}))}))},mounted:function(){var t=this;h["a"].emit("last-messages",(function(e){t.messages=e})),this.scrollToBottom()},methods:{distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:p,includeSeconds:!0})},goDown:function(){window.scrollTo(0,this.$el.querySelector("input").offsetTop)},resetImg:function(){this.imgs=[],this.img=""},upload:function(t){var e=this;this.imgs=t,setTimeout((function(){var t='<br><img class="img-thumbnail" src=\''.concat(e.imgs,"'/>");e.img=t,console.log(e.img)}),1e3)},sendMessage:function(){if(this.message.trim()){this.imgs.length>0&&(this.message=this.message+this.img);var t={name:this.$store.state.user?this.$store.state.user.name:"unknown",room:this.$route.query.room,text:this.message.trim(),picture:this.$store.state.user?this.$store.state.user.picture:"./nofound.png",createdAt:(new Date).toJSON(),createdBy:this.$store.state.user._id};this.messages.push(t),this.message="",h["a"].emit("send-message",t)}},scrollToBottom:function(){var t=this;this.$nextTick((function(){t.$el.querySelector("#chatnya").scrollTop=t.$el.querySelector("#chatnya").scrollHeight}))},test:function(){r.a.get("/api/test/random").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},v=b,y=(n("bc7d"),Object(d["a"])(v,i,s,!1,null,null,null));e["default"]=y.exports},bc7d:function(t,e,n){"use strict";var i=n("e7e6"),s=n.n(i);s.a},bf19:function(t,e,n){"use strict";var i=n("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},c740:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").findIndex,a=n("44d2"),o=n("ae40"),r="findIndex",c=!0,u=o(r);r in[]&&Array(1)[r]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},c8d2:function(t,e,n){var i=n("d039"),s=n("5899"),a="​᠎";t.exports=function(t){return i((function(){return!!s[t]()||a[t]()!=a||s[t].name!==t}))}},d17f:function(t,e,n){t.exports=n.p+"img/image.9604208c.svg"},d309:function(t,e,n){var i=n("90e5");function s(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],s=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],o=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],r=["AM","PM"],c=["am","pm"],u=["a.m.","p.m."],l={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return s[t.getDay()]},dddd:function(t){return o[t.getDay()]},A:function(t){return t.getHours()/12>=1?r[1]:r[0]},a:function(t){return t.getHours()/12>=1?c[1]:c[0]},aa:function(t){return t.getHours()/12>=1?u[1]:u[0]}},f=["M","D","DDD","d","Q","W"];return f.forEach((function(t){l[t+"o"]=function(e,n){return a(n[t](e))}})),{formatters:l,formattingTokensRegExp:i(l)}}function a(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=s},e7e6:function(t,e,n){}}]);
//# sourceMappingURL=page-testing-chat.662f2869.js.map