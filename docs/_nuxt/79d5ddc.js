(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{436:function(t,e,l){"use strict";l.r(e);l(228);var o=new(l(23).a),r="https://gis.officialapp.website",c={data:function(){return{sertifikat:[],seminar:[],award:[]}},layout:"a-3",methods:{},mounted:function(){var t=this;o.collection("app_portofolio_sertifikat",!1,r).doc().select("select * from app_portofolio_sertifikat where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.sertifikat=e,t.$forceUpdate()})),o.collection("app_portofolio_seminar",!1,r).doc().select("select * from app_portofolio_seminar where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.seminar=e,t.$forceUpdate()})),o.collection("app_portofolio_award",!1,r).doc().select("select * from app_portofolio_award where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.award=e,t.$forceUpdate()}))}},n=l(7),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"  p-3 ml-1 mr-1  shadow-lg rounded-lg animate__animated animate__zoomIn",staticStyle:{"font-family":"Titillium Web","line-height":"1.0",background:"black"},style:""+t.$store.state.data.layout.background_card2},[l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},t._l(t.sertifikat,(function(e,o){return l("div",{key:o+"sertifikat",staticClass:"row"},[l("div",{staticClass:"col-3 text-center"},[l("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{height:"80px",width:"80px"},attrs:{src:e.gambar}})]),t._v(" "),l("div",{staticClass:"col-9"},[l("p",{staticClass:"font-bold p-3"},[t._v(t._s(e.judul))]),t._v(" "),l("p",{staticClass:"pl-2 "},[t._v("Credential ID  : "),l("b",[t._v(t._s(e.credential))]),t._v(" Date : "+t._s(e.tanggal_expire))]),t._v(" "),l("p",{staticClass:"pl-2 mt-2"},[t._v("Credential URL : "),l("a",{attrs:{href:e.link}},[t._v(t._s(e.link))])]),t._v(" "),l("hr",{staticClass:"style4 mt-4 mb-4"})])])})),0),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"col-12"},t._l(t.seminar,(function(e,o){return l("div",{key:o+"sertifikat",staticClass:"row"},[l("div",{staticClass:"col-12"},[l("p",{staticClass:"font-bold p-3"},[t._v(t._s(e.judul))]),t._v(" "),l("p",{staticClass:"pl-5 ",domProps:{innerHTML:t._s(e.keterangan)}}),t._v(" "),l("hr",{staticClass:"style4 mt-4 mb-4"})])])})),0),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"col-12"},t._l(t.award,(function(e,o){return l("div",{key:o+"sertifikat",staticClass:"row"},[l("div",{staticClass:"col-12"},[l("p",{staticClass:"font-bold p-3"},[t._v(t._s(e.judul))]),t._v(" "),l("p",{staticClass:"pl-5 ",domProps:{innerHTML:t._s(e.keterangan)}}),t._v(" "),l("hr",{staticClass:"style4 mt-4 mb-4"})])])})),0)])]),t._v(" "),l("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Sertifikat TA_Maliki / Taufik Akbar Maliki PORTOFOLIO WEBSITE OFFICIAL")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"font-semibold text-2xl p-3"},[this._v("SEMINAR")]),this._v(" "),e("hr",{staticClass:"style16"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("p",{staticClass:"font-semibold text-2xl p-3"},[this._v("AWARD")]),this._v(" "),e("hr",{staticClass:"style16"})])}],!1,null,null,null);e.default=component.exports}}]);