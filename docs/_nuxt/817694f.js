(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{366:function(t,e,l){var content=l(377);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(18).default)("40a81ff8",content,!0,{sourceMap:!1})},372:function(t,e,l){t.exports=l.p+"img/fast1.a6d09fd.png"},373:function(t,e,l){t.exports=l.p+"img/lampu1.5ac3952.png"},374:function(t,e,l){t.exports=l.p+"img/res1.4fff205.png"},375:function(t,e,l){t.exports=l.p+"img/rocket1.d713a17.png"},376:function(t,e,l){"use strict";l(366)},377:function(t,e,l){(e=l(17)(!1)).push([t.i,"",""]),t.exports=e},418:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 p-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3 animate__animated animate__flipInY animate__delay-1s"},[n("div",{staticClass:"text-center"},[n("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{"border-radius":"20p"},attrs:{src:l(372)}})]),t._v(" "),n("p",{staticClass:"text-center font-bold underline italic",staticStyle:{"font-size":"13px"}},[t._v("Fast")]),t._v(" "),n("p",{staticClass:"text-center font-bold text-sm",staticStyle:{"font-size":"13px"}},[t._v("Code yang sudah di optimasi dengan cermat")])]),t._v(" "),n("div",{staticClass:"col-sm-3 animate__animated animate__flipInY animate__delay-1s"},[n("div",{staticClass:"text-center font-bold"},[n("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{"border-radius":"20p"},attrs:{src:l(373)}})]),t._v(" "),n("p",{staticClass:"text-center font-bold underline italic",staticStyle:{"font-size":"13px"}},[t._v("Analytics")]),t._v(" "),n("p",{staticClass:"text-center font-bold text-sm",staticStyle:{"font-size":"13px"}},[t._v("Setiap projectnya terhubung secara langsung dengan google analytics")])]),t._v(" "),n("div",{staticClass:"col-sm-3 animate__animated animate__flipInY animate__delay-1s"},[n("div",{staticClass:"text-center font-bold"},[n("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{"border-radius":"20p"},attrs:{src:l(374)}})]),t._v(" "),n("p",{staticClass:"text-center font-bold underline italic",staticStyle:{"font-size":"13px"}},[t._v("Responsive")]),t._v(" "),n("p",{staticClass:"text-center font-bold text-sm",staticStyle:{"font-size":"13px"}},[t._v("Layout ku bisa digunakan di semua device kecil atau besar")])]),t._v(" "),n("div",{staticClass:"col-sm-3 animate__animated animate__flipInY animate__delay-1s"},[n("div",{staticClass:"text-center font-bold"},[n("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{"border-radius":"20p"},attrs:{src:l(375)}})]),t._v(" "),n("p",{staticClass:"text-center font-bold underline italic",staticStyle:{"font-size":"13px"}},[t._v("Cross Platform")]),t._v(" "),n("p",{staticClass:"text-center font-bold text-sm",staticStyle:{"font-size":"13px"}},[t._v("Project ku mudah untuk di gunakan di berbagai platform")])])]),t._v(" "),n("br")])}],o=(l(228),new(l(23).a)),c="https://gis.officialapp.website",r={data:function(){return{skill:[],subskill:[],activity:[]}},layout:"portofolio",methods:{},mounted:function(){var t=this;o.collection("app_portofolio_skill",!1,c).doc().select("select * from app_portofolio_skill").then((function(e){t.skill=e,t.$forceUpdate()})),o.collection("app_portofolio_subskill",!1,c).doc().select("select * from app_portofolio_subskill").then((function(e){t.subskill=e,t.$forceUpdate()})),o.collection("app_portofolio_activity",!1,c).doc().select("select * from app_portofolio_activity").then((function(e){t.activity=e,t.$forceUpdate()}))}},d=(l(376),l(7)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-3 ml-1 mr-1  shadow-lg rounded-lg animate__animated animate__fadeIn",staticStyle:{"font-family":"Titillium Web","line-height":"1.0"}},[l("div",{staticClass:"row"},[t._m(0),t._v(" "),l("div",{staticClass:"col-12"},[t.subskill.length>0?l("div",{staticClass:"row"},[t._l(t.subskill,(function(e,n){return l("div",{key:n+"subskill",staticClass:"col-6"},[l("p",{staticClass:"p-2  text-sm font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"13px"}},[t._v(t._s(e.title))]),t._v(" "),l("div",{staticClass:"rounded-lg shadow-lg animate__animated animate__flipInX ",staticStyle:{width:"100%"},style:"background-color:#ddd;"},[l("div",{staticClass:"rounded-l-lg text-white  pt-2 pr-2",staticStyle:{"text-align":"right"},style:"width:"+e.persen+"%;background:"+e.warna+";"},[t._v(t._s(e.persen)+"%")])])])})),t._v(" "),t._l(t.skill,(function(e,n){return l("div",{key:n+"skill",staticClass:"col-12 "},[l("p",{staticClass:"p-2  text-sm font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"13px"}},[t._v(t._s(e.title))]),t._v(" "),l("div",{staticClass:"rounded-lg shadow-lg animate__animated animate__flipInX ",staticStyle:{width:"100%"},style:"background-color:#ddd;"},[l("div",{staticClass:"rounded-l-lg text-white  pt-2 pr-2",staticStyle:{"text-align":"right"},style:"width:"+e.persen+"%;background:"+e.warna+";"},[t._v(t._s(e.persen)+"%")])])])}))],2):t._e()]),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("div",[t.activity.length>0?l("div",[l("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid ",attrs:{src:t.activity[0].gambar,alt:""}})]):t._e(),t._v(" "),l("p",{staticClass:"p-3 font-times italic underline font-bold"},[t._v("MY STACKS")])])]),t._v(" "),l("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Portofolio TA_Maliki / Taufik Akbar Maliki PORTOFOLIO WEBSITE OFFICIAL")])])}),n,!1,null,"b7889da6",null);e.default=component.exports}}]);