(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-a-2-index~9251a63c"],{"11d7":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"font-semibold text-2xl text-yellow-400"},[t._v(" - "+t._s(t.datanya.nama)+" ")]),a("p",{staticClass:"font-semibold text-2xl text-white ml-5",domProps:{innerHTML:t._s(t.datanya.title)}}),a("p",{staticClass:"font-semibold text-lg text-white ml-5",domProps:{innerHTML:t._s(t.datanya.tentang)}}),a("hr"),a("p",{staticClass:"text-white font-semibold text-lg italic underline"},[t._v("PENGALAMAN KERJA")]),t._l(t.pengalaman,(function(e,o){return a("div",{key:o+"pengalaman",staticClass:"text-white text-lg"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v(" "+t._s(e.lama_kerja)+" ")]),a("div",{staticClass:"col-8"},[t._v(" "+t._s(e.posisi)+" "),a("br"),t._v(" "+t._s(e.tempat_kerja)+" ")])])])})),a("hr"),a("p",{staticClass:"text-white font-semibold text-lg italic underline"},[t._v("PENDIDIKAN")]),t._l(t.pendidikan,(function(e,o){return a("div",{key:o+"pengalaman",staticClass:"text-white text-lg"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v(" "+t._s(e.lama_pendidikan)+" ")]),a("div",{staticClass:"col-8"},[t._v(" "+t._s(e.pendidikan)+" "),a("br"),t._v(" "+t._s(e.sekolah)+" ")])])])}))],2)},i=[],n=a("4b97"),s=new n["a"],l="https://gis.officialapp.my.id",c={layout:"a-2",data:function(){return{datanya:[],pengalaman:[],pendidikan:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;s.collection("app_portofolio_about",!1,l).doc().select("select * from app_portofolio_about where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.datanya=e[0],t.$forceUpdate()})),s.collection("app_portofolio_pendidikan",!1,l).doc().select("select * from app_portofolio_pendidikan where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.pendidikan=e,t.$forceUpdate()})),s.collection("app_portofolio_pengalaman",!1,l).doc().select("select * from app_portofolio_pengalaman where iduser='".concat(this.$store.state.id,"'")).then((function(e){t.pengalaman=e,t.$forceUpdate()}))},test:function(){s.collection("app_portofolio_about",!1,l).doc().select("select * from app_portofolio_about where iduser='".concat(this.$store.state.id,"'")).then((function(t){console.log(t)}))}}},d=c,p=a("2877"),r=Object(p["a"])(d,o,i,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=page-a-2-index~9251a63c.4a86c7de.js.map