(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{364:function(t,e,l){"use strict";l.r(e);var n=new(l(23).a),o="https://gis.officialapp.website",c={data:function(){return{skill:[],subskill:[]}},mounted:function(){var t=this;n.collection("app_portofolio_skill",!1,o).doc().select("select * from app_portofolio_skill  where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.skill=e,t.$forceUpdate()})),n.collection("app_portofolio_subskill",!1,o).doc().select("select * from app_portofolio_subskill  where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.subskill=e,t.$forceUpdate()}))}},r=l(7),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row"},[t._m(0),t._v(" "),l("div",{staticClass:"col-12"},[t.subskill.length>0?l("div",{staticClass:"row"},[t._l(t.subskill,(function(e,n){return l("div",{key:n+"subskill",staticClass:"col-6"},[l("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(e.title))]),t._v(" "),l("div",{staticClass:"rounded-lg shadow-lg animate__animated animate__flipInX ",staticStyle:{width:"100%"},style:"background-color:#ddd;"},[l("div",{staticClass:"rounded-l-lg pt-1 pr-2",staticStyle:{"text-align":"right","font-size":"12px"},style:"width:"+e.persen+"%;background:"+e.warna+";"},[t._v(t._s(e.persen)+"%")])])])})),t._v(" "),t._m(1),t._v(" "),t._l(t.skill,(function(e,n){return l("div",{key:n+"skill",staticClass:"col-12 "},[l("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(e.title))]),t._v(" "),l("div",{staticClass:"rounded-lg shadow-lg animate__animated animate__flipInX ",staticStyle:{width:"100%"},style:"background-color:#ddd;"},[l("div",{staticClass:"rounded-l-lg   pt-1 pr-2",staticStyle:{"text-align":"right","font-size":"12px"},style:"width:"+e.persen+"%;background:"+e.warna+";"},[t._v(t._s(e.persen)+"%")])]),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("br")])}))],2):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"pl-2 pt-2 text-lg font-semibold underline"},[this._v("Keahlian / Skill")]),this._v(" "),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"font-semibold p-3 underline mt-2"},[this._v("Main Skill/Keahlian")])])}],!1,null,null,null);e.default=component.exports},365:function(t,e,l){"use strict";l.r(e);var n=new(l(23).a),o="https://gis.officialapp.website",c={data:function(){return{skill:[],subskill:[],warnaskill:"lightblue",warnasubskill:"lightgreen"}},mounted:function(){var t=this;n.collection("app_portofolio_skill",!1,o).doc().select("select * from app_portofolio_skill  where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.skill=e,t.warnaskill=e[0].warna,t.$forceUpdate()})),n.collection("app_portofolio_subskill",!1,o).doc().select("select * from app_portofolio_subskill  where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.subskill=e,t.warnasubskill=e[0].warna,t.$forceUpdate()}))}},r=l(7),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row"},[t._m(0),t._v(" "),l("div",{staticClass:"col-12"},[t.subskill.length>0?l("div",{staticClass:"row"},[t._l(t.subskill,(function(e,n){return l("div",{key:n+"subskill",staticClass:"col-6"},[l("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(e.title))]),t._v(" "),l("div",{staticClass:"animate__animated animate__flipInX ",staticStyle:{width:"100%"}},[t._l(Math.round(10*e.persen/100),(function(e,n){return l("button",{key:n+"circle",staticClass:"btn btn-sm btn-dark rounded-circle ml-1",staticStyle:{height:"18px",width:"18px"},style:"background:"+t.warnasubskill+";",attrs:{type:"button"}})})),t._v(" "),t._l(10-Math.round(10*e.persen/100),(function(t,e){return l("button",{key:e+"circle2",staticClass:"btn btn-sm rounded-circle ml-1",staticStyle:{height:"18px",width:"18px",background:"lightgrey"},attrs:{type:"button"}})}))],2)])})),t._v(" "),t._m(1),t._v(" "),t._l(t.skill,(function(e,n){return l("div",{key:n+"skill",staticClass:"col-12 "},[l("p",{staticClass:"p-2  text-xs font-bold animate__animated animate__flipInX ",staticStyle:{"font-size":"10px"}},[t._v(t._s(e.title))]),t._v(" "),t._l(Math.round(10*e.persen/100),(function(e,n){return l("button",{key:n+"circle",staticClass:"btn btn-sm btn-dark rounded-circle ml-1",staticStyle:{height:"18px",width:"18px"},style:"background:"+t.warnaskill+";",attrs:{type:"button"}})})),t._v(" "),t._l(10-Math.round(10*e.persen/100),(function(t,e){return l("button",{key:e+"circle2",staticClass:"btn btn-sm rounded-circle ml-1",staticStyle:{height:"18px",width:"18px",background:"lightgrey"},attrs:{type:"button"}})}))],2)})),t._v(" "),t._m(2)],2):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"pl-2 pt-2 text-lg font-semibold underline"},[this._v("Keahlian / Skill")]),this._v(" "),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"font-semibold p-3 underline mt-2"},[this._v("Main Skill/Keahlian")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("br"),this._v(" "),e("br"),this._v(" "),e("br")])}],!1,null,null,null);e.default=component.exports},370:function(t,e,l){var content=l(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(18).default)("42171086",content,!0,{sourceMap:!1})},385:function(t,e,l){"use strict";l(370)},386:function(t,e,l){(e=l(17)(!1)).push([t.i,"",""]),t.exports=e},439:function(t,e,l){"use strict";l.r(e);l(228);var n=new(l(23).a),o="https://gis.officialapp.website",c={data:function(){return{activity:[],service:[]}},layout:"a-4",methods:{},mounted:function(){var t=this;n.collection("app_portofolio_activity",!1,o).doc().select("select * from app_portofolio_activity where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.activity=e,t.$forceUpdate()})),n.collection("app_portofolio_service",!1,o).doc().select("select * from app_portofolio_service where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.service=e,t.$forceUpdate()}))}},r=(l(385),l(7)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-3 ml-1 mr-1  shadow-lg rounded-lg animate__animated animate__fadeIn ",staticStyle:{"font-family":"Titillium Web","line-height":"1.0"},style:""+t.$store.state.data.layout.background_card2},[l("div",{staticClass:"row"},[t._m(0),t._v(" "),l("div",{staticClass:"col-12 p-2"},[l("div",{staticClass:"row"},t._l(t.service,(function(e,n){return l("div",{key:n+"service",staticClass:"col-sm-3 animate__animated animate__flipInY animate__delay-1s mt-3",class:"order-"+e.urutan},[l("div",{staticClass:"text-center"},[l("button",{staticClass:"btn btn-sm btn-style8",style:"background: rgb(64,180,231);\nbackground: linear-gradient(0deg, rgba(64,180,231,1) 0%, rgba(1,29,108,1) 100%);",attrs:{type:"button",name:"",id:""}},[l("span",{staticClass:"typcn text-4xl text-white",class:""+e.icon})]),t._v(" "),l("br"),t._v(" "),l("br")]),t._v(" "),l("p",{staticClass:"text-center font-bold  italic",staticStyle:{"font-size":"15px"}},[t._v(t._s(e.title))]),t._v(" "),l("hr",{staticClass:"mt-1 mb-1"}),t._v(" "),l("p",{staticClass:"text-center font-bold text-sm",staticStyle:{"font-size":"13px"}},[t._v(t._s(e.detail))])])})),0),t._v(" "),l("br")]),t._v(" "),l("div",{staticClass:"col-12"},["1"==t.$store.state.data.layout.skilltype?l("div",[l("Skill")],1):"2"==t.$store.state.data.layout.skilltype?l("div",[l("Skill2")],1):t._e()]),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("br"),t._v(" "),l("div",[t.activity.length>0?l("div",[l("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"kinoLightBox img-fluid ",attrs:{src:t.activity[0].gambar,alt:""}})]):t._e()])]),t._v(" "),l("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Portofolio TA_Maliki / Taufik Akbar Maliki PORTOFOLIO WEBSITE OFFICIAL")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"pl-2 pt-2 text-lg font-semibold underline"},[this._v("My Services")]),this._v(" "),e("br")])}],!1,null,"fa0b176e",null);e.default=component.exports;installComponents(component,{Skill:l(364).default,Skill2:l(365).default})}}]);