(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-a-4-sertifikat~8540d0fb"],{fd04:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"  p-3 ml-1 mr-1  shadow-lg rounded-lg animate__animated animate__zoomIn",staticStyle:{"font-family":"Titillium Web","line-height":"1.0",background:"black"},style:""+t.$store.state.data.layout.background_card2},[a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},t._l(t.sertifikat,(function(s,i){return a("div",{key:i+"sertifikat",staticClass:"row"},[a("div",{staticClass:"col-3 text-center"},[a("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{height:"80px",width:"80px"},attrs:{src:s.gambar}})]),a("div",{staticClass:"col-9"},[a("p",{staticClass:"font-bold p-3"},[t._v(t._s(s.judul))]),a("p",{staticClass:"pl-2 "},[t._v("Credential ID : "),a("b",[t._v(t._s(s.credential))]),t._v(" Date : "+t._s(s.tanggal_expire))]),a("p",{staticClass:"pl-2 mt-2"},[t._v("Credential URL : "),a("a",{attrs:{href:s.link}},[t._v(t._s(s.link))])]),a("hr",{staticClass:"style4 mt-4 mb-4"})])])})),0),t._m(0),a("div",{staticClass:"col-12"},t._l(t.seminar,(function(s,i){return a("div",{key:i+"sertifikat",staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"font-bold p-3"},[t._v(t._s(s.judul))]),a("p",{staticClass:"pl-5 ",domProps:{innerHTML:t._s(s.keterangan)}}),a("hr",{staticClass:"style4 mt-4 mb-4"})])])})),0),t._m(1),a("div",{staticClass:"col-12"},t._l(t.award,(function(s,i){return a("div",{key:i+"sertifikat",staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"font-bold p-3"},[t._v(t._s(s.judul))]),a("p",{staticClass:"pl-5 ",domProps:{innerHTML:t._s(s.keterangan)}}),a("hr",{staticClass:"style4 mt-4 mb-4"})])])})),0)])]),a("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("Sertifikat TA_Maliki / Taufik Akbar Maliki PORTOFOLIO WEBSITE OFFICIAL")])])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12"},[a("p",{staticClass:"font-semibold text-2xl p-3"},[t._v("SEMINAR")]),a("hr",{staticClass:"style16"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12"},[a("p",{staticClass:"font-semibold text-2xl p-3"},[t._v("AWARD")]),a("hr",{staticClass:"style16"})])}],l=(a("bc3a"),a("4b97")),o=new l["a"],r="https://gis.officialapp.my.id",c={data:function(){return{sertifikat:[],seminar:[],award:[]}},layout:"a-4",methods:{},mounted:function(){var t=this;o.collection("app_portofolio_sertifikat",!1,r).doc().select("select * from app_portofolio_sertifikat where iduser='".concat(this.$store.state.id,"'")).then((function(s){t.sertifikat=s,t.$forceUpdate()})),o.collection("app_portofolio_seminar",!1,r).doc().select("select * from app_portofolio_seminar where iduser='".concat(this.$store.state.id,"'")).then((function(s){t.seminar=s,t.$forceUpdate()})),o.collection("app_portofolio_award",!1,r).doc().select("select * from app_portofolio_award where iduser='".concat(this.$store.state.id,"'")).then((function(s){t.award=s,t.$forceUpdate()}))}},n=c,d=a("2877"),p=Object(d["a"])(n,i,e,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=page-a-4-sertifikat~8540d0fb.268abe25.js.map