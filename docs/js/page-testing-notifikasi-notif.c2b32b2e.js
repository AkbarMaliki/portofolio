(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-notifikasi-notif"],{"03a0":function(t,e,n){var a=n("25bb"),o=n("d309");t.exports={distanceInWords:a(),format:o()}},"25bb":function(t,e){function n(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function e(e,n,a){var o;return a=a||{},o="string"===typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),a.addSuffix?a.comparison>0?"dalam waktu "+o:o+" yang lalu":o}return{localize:e}}t.exports=n},"80f4":function(t,e,n){"use strict";var a=n("8055"),o=n.n(a),r=(n("7e59"),o()("https://infolayanans.now.sh"));e["a"]=r},"99af":function(t,e,n){"use strict";var a=n("23e7"),o=n("d039"),r=n("e8b5"),i=n("861d"),u=n("7b0b"),s=n("50c4"),c=n("8418"),d=n("65f0"),f=n("1dde"),l=n("b622"),h=n("2d00"),p=l("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",g=h>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),k=f("concat"),v=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},w=!g||!k;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,a,o,r,i=u(this),f=d(i,0),l=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?i:arguments[e],v(r)){if(o=s(r.length),l+o>b)throw TypeError(m);for(n=0;n<o;n++,l++)n in r&&c(f,l,r[n])}else{if(l>=b)throw TypeError(m);c(f,l++,r)}return f.length=l,f}})},a8c8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"btn btn-sm btn-danger shadow-lg",on:{click:t.dibaca}},[t._v(t._s(t.notifn))]),n("div",{staticStyle:{"overflow-y":"scroll",height:"400px"}},t._l(t.notifs,(function(e,a){return n("div",{key:a+"notifikasi",staticClass:"p-2 shadow-inner rounded-lg border-1 cursor-pointer",on:{click:function(n){return t.$router.push(e.link)}}},[t._v(t._s(e.text)+" "),n("br"),n("span",{staticClass:"text-xs"},[t._v(t._s(t.distanceToNow(e.tanggal))+" yang lalu")])])})),0)])},o=[],r=(n("99af"),n("4de4"),n("9911"),n("bc3a")),i=n.n(r),u=n("80f4"),s=n("03a0"),c={data:function(){return{notifs:[],notifn:[]}},beforeMount:function(){var t=this;u["a"].on("new-message",(function(e){e.target_id==t.$store.state.users.id&&"driver"==e.app&&(t.refreshNotif(),document.addEventListener("deviceready",(function(){cordova.plugins.notification.local.schedule({title:"BTN Banjarbaru",text:e.text}),cordova.plugins.notification.local.on("click",(function(n,a){setTimeout((function(){t.$router.push(e.link)}),1e3)}))})))}))},methods:{refreshNotif:function(){var t=this,e=new FormData;e.append("data","select * from notifikasi where id_user='".concat(this.$store.state.users.id,"' AND app='driver' order by id desc")),e.append("database"," infolay3_test"),i.a.post("https://infolayanan.site/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){var n=e.data.filter((function(t){return"false"==t.dibaca}));t.notifs=e.data,t.notifn=n.length,t.$forceUpdate()}))},dibaca:function(){var t=this,e=new FormData;e.append("data","update notifikasi set dibaca='true' where id_user='".concat(this.$store.state.users.id,"' AND app='driver'")),e.append("database"," infolay3_test"),i.a.post("https://infolayanan.site/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.refreshNotif(),t.$forceUpdate()}))},dibacas:function(t){var e=this,n=new FormData;n.append("data","update notifikasi set dibaca='true' where id_user='".concat(this.$store.state.users.id,"' AND app='driver' AND button=").concat(t)),n.append("database"," infolay3_test"),i.a.post("https://infolayanan.site/api/mysql/auto.php",n,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){e.refreshNotif(),e.$forceUpdate()}))},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:s,includeSeconds:!0})}},mounted:function(){this.refreshNotif()}},d=c,f=n("2877"),l=Object(f["a"])(d,a,o,!1,null,null,null);e["default"]=l.exports},d309:function(t,e,n){var a=n("90e5");function o(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],o=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],i=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],u=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],d={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return o[t.getDay()]},dddd:function(t){return i[t.getDay()]},A:function(t){return t.getHours()/12>=1?u[1]:u[0]},a:function(t){return t.getHours()/12>=1?s[1]:s[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},f=["M","D","DDD","d","Q","W"];return f.forEach((function(t){d[t+"o"]=function(e,n){return r(n[t](e))}})),{formatters:d,formattingTokensRegExp:a(d)}}function r(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=o}}]);
//# sourceMappingURL=page-testing-notifikasi-notif.c2b32b2e.js.map