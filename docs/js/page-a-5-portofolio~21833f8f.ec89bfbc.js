(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-a-5-portofolio~21833f8f"],{"73bb":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-12"},[t.subskill.length>0?e("div",{staticClass:"row"},[t._l(t.subskill,(function(i,s){return e("div",{key:s+"subskill",staticClass:"col-6"},[e("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(i.title))]),e("div",{staticClass:"animate__animated animate__flipInX ",staticStyle:{width:"100%"}},[t._l(Math.round(10*i.persen/100),(function(i,s){return e("button",{key:s+"circle",staticClass:"btn btn-sm btn-dark rounded-circle ml-1",staticStyle:{height:"18px",width:"18px"},style:"background:"+t.warnasubskill+";",attrs:{type:"button"}})})),t._l(10-Math.round(10*i.persen/100),(function(t,i){return e("button",{key:i+"circle2",staticClass:"btn btn-sm rounded-circle ml-1",staticStyle:{height:"18px",width:"18px",background:"lightgrey"},attrs:{type:"button"}})}))],2)])})),t._m(1),t._l(t.skill,(function(i,s){return e("div",{key:s+"skill",staticClass:"col-12 "},[e("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(i.title))]),t._l(Math.round(10*i.persen/100),(function(i,s){return e("button",{key:s+"circle",staticClass:"btn btn-sm btn-dark rounded-circle ml-1",staticStyle:{height:"18px",width:"18px"},style:"background:"+t.warnaskill+";",attrs:{type:"button"}})})),t._l(10-Math.round(10*i.persen/100),(function(t,i){return e("button",{key:i+"circle2",staticClass:"btn btn-sm rounded-circle ml-1",staticStyle:{height:"18px",width:"18px",background:"lightgrey"},attrs:{type:"button"}})}))],2)})),t._m(2)],2):t._e()])])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"pl-2 pt-2 text-lg font-semibold underline"},[t._v("Keahlian / Skill")]),e("br")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"font-semibold p-3 underline mt-2"},[t._v("Main Skill/Keahlian")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12"},[e("br"),e("br"),e("br")])}],l=e("4b97"),n=new l["a"],o="https://gis.officialapp.my.id",c={data:function(){return{skill:[],subskill:[],warnaskill:"lightblue",warnasubskill:"lightgreen"}},mounted:function(){var t=this;n.collection("app_portofolio_skill",!1,o).doc().select("select * from app_portofolio_skill  where iduser='".concat(this.$store.state.id,"'")).then((function(i){t.skill=i,t.warnaskill=i[0].warna,t.$forceUpdate()})),n.collection("app_portofolio_subskill",!1,o).doc().select("select * from app_portofolio_subskill  where iduser='".concat(this.$store.state.id,"'")).then((function(i){t.subskill=i,t.warnasubskill=i[0].warna,t.$forceUpdate()}))}},r=c,d=e("2877"),u=Object(d["a"])(r,s,a,!1,null,null,null);i["a"]=u.exports},"9d7c":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"p-3 ml-1 mr-1  shadow-lg rounded-lg animate__animated animate__fadeIn ",staticStyle:{"font-family":"Titillium Web","line-height":"1.0"},style:""+t.$store.state.data.layout.background_card2},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-12 p-2"},[e("div",{staticClass:"row"},t._l(t.service,(function(i,s){return e("div",{key:s+"service",staticClass:"col-sm-3 animate__animated animate__flipInY animate__delay-1s mt-3",class:"order-"+i.urutan},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-style8",style:"background: rgb(64,180,231);\nbackground: linear-gradient(0deg, rgba(64,180,231,1) 0%, rgba(1,29,108,1) 100%);",attrs:{type:"button",name:"",id:""}},[e("span",{staticClass:"typcn text-4xl text-white",class:""+i.icon})]),e("br"),e("br")]),e("p",{staticClass:"text-center font-bold  italic",staticStyle:{"font-size":"15px"}},[t._v(t._s(i.title))]),e("hr",{staticClass:"mt-1 mb-1"}),t._v(" "),e("p",{staticClass:"text-center font-bold text-sm",staticStyle:{"font-size":"13px"}},[t._v(t._s(i.detail))])])})),0),e("br")]),e("div",{staticClass:"col-12"},["1"==t.$store.state.data.layout.skilltype?e("div",[e("Skill")],1):"2"==t.$store.state.data.layout.skilltype?e("div",[e("Skill2")],1):t._e()]),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",[t.activity.length>0?e("div",[e("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid mt-5",attrs:{src:t.activity[0].gambar,alt:""}})]):t._e()])]),e("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Portofolio TA_Maliki / Taufik Akbar Maliki PORTOFOLIO WEBSITE OFFICIAL")])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"pl-2 pt-2 text-lg font-semibold underline"},[t._v("My Services")]),e("br")])}],l=(e("bc3a"),e("4b97")),n=e("d995"),o=e("73bb"),c=new l["a"],r="https://gis.officialapp.my.id",d={components:{Skill:n["a"],Skill2:o["a"]},data:function(){return{activity:[],service:[]}},layout:"a-5",methods:{},mounted:function(){var t=this;c.collection("app_portofolio_activity",!1,r).doc().select("select * from app_portofolio_activity where iduser='".concat(this.$store.state.id,"'")).then((function(i){t.activity=i,t.$forceUpdate()})),c.collection("app_portofolio_service",!1,r).doc().select("select * from app_portofolio_service where iduser='".concat(this.$store.state.id,"'")).then((function(i){t.service=i,t.$forceUpdate()}))}},u=d,p=(e("a4f6"),e("2877")),_=Object(p["a"])(u,s,a,!1,null,"3c0ade6d",null);i["default"]=_.exports},a4f6:function(t,i,e){"use strict";e("c60f")},c60f:function(t,i,e){},d995:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-12"},[t.subskill.length>0?e("div",{staticClass:"row"},[t._l(t.subskill,(function(i,s){return e("div",{key:s+"subskill",staticClass:"col-6"},[e("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(i.title))]),e("div",{staticClass:"rounded-lg shadow-lg animate__animated animate__flipInX ",staticStyle:{width:"100%"},style:"background-color:#ddd;"},[e("div",{staticClass:"rounded-l-lg pt-1 pr-2",staticStyle:{"text-align":"right","font-size":"12px"},style:"width:"+i.persen+"%;background:"+i.warna+";"},[t._v(t._s(i.persen)+"%")])])])})),t._m(1),t._l(t.skill,(function(i,s){return e("div",{key:s+"skill",staticClass:"col-12 "},[e("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(i.title))]),e("div",{staticClass:"rounded-lg shadow-lg animate__animated animate__flipInX ",staticStyle:{width:"100%"},style:"background-color:#ddd;"},[e("div",{staticClass:"rounded-l-lg   pt-1 pr-2",staticStyle:{"text-align":"right","font-size":"12px"},style:"width:"+i.persen+"%;background:"+i.warna+";"},[t._v(t._s(i.persen)+"%")])]),e("br"),e("br"),e("br")])}))],2):t._e()])])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"pl-2 pt-2 text-lg font-semibold underline"},[t._v("Keahlian / Skill")]),e("br")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"font-semibold p-3 underline mt-2"},[t._v("Main Skill/Keahlian")])])}],l=e("4b97"),n=new l["a"],o="https://gis.officialapp.my.id",c={data:function(){return{skill:[],subskill:[]}},mounted:function(){var t=this;n.collection("app_portofolio_skill",!1,o).doc().select("select * from app_portofolio_skill  where iduser='".concat(this.$store.state.id,"'")).then((function(i){t.skill=i,t.$forceUpdate()})),n.collection("app_portofolio_subskill",!1,o).doc().select("select * from app_portofolio_subskill  where iduser='".concat(this.$store.state.id,"'")).then((function(i){t.subskill=i,t.$forceUpdate()}))}},r=c,d=e("2877"),u=Object(d["a"])(r,s,a,!1,null,null,null);i["a"]=u.exports}}]);
//# sourceMappingURL=page-a-5-portofolio~21833f8f.ec89bfbc.js.map