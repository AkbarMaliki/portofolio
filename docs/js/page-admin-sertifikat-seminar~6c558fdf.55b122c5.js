(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-sertifikat-seminar~6c558fdf"],{ae08:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow p-3 rounded-lg"},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"judul"}},[t._v("judul")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.judul,expression:"vdata.judul"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"judul",name:"judul",placeholder:"judul"},domProps:{value:t.vdata.judul},on:{input:function(a){a.target.composing||t.$set(t.vdata,"judul",a.target.value)}}})]),e("p",{staticClass:"p-3 pl-0"},[t._v(" Keterangan ")]),e("wysiwyg",{attrs:{options:{image:{uploadURL:"https://gis.officialapp.website/upload1.php",dropzoneOptions:{}}}},model:{value:t.vdata.keterangan,callback:function(a){t.$set(t.vdata,"keterangan",a)},expression:"vdata.keterangan"}}),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"urutan"}},[t._v("urutan")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.urutan,expression:"vdata.urutan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"urutan",name:"urutan",placeholder:"urutan"},domProps:{value:t.vdata.urutan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"urutan",a.target.value)}}})]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])],1)]),e("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow rounded-lg"},[t.datanya.length>0?e("div",{staticClass:"p-2"},[e("div",{staticClass:"text-right"},[e("vue-json-excel",{attrs:{data:t.datanya}},[e("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v(" Export "),e("span",{staticClass:"typcn typcn-chart-area"})])])],1),e("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:[""]},on:{selected:t.ambil}})],1):t._e()])])])])])},s=[],o=e("1da1"),i=(e("96cf"),e("4b97")),r=e("6be6"),c=new i["a"],l="https://gis.officialapp.website",d={components:{Btables:r["a"]},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},layout:"app_admin",methods:{upload:function(){var t=this,a=document.querySelector("#filenya");c.collection("tbuser",!1,l).upload(a,!0,!0).then((function(a){console.log(a),t.vdata.gambar=a,t.$forceUpdate()}))},getData:function(){var t=this;c.collection("app_portofolio_seminar",!1,l).doc().select("select * from app_portofolio_seminar where iduser='".concat(this.$store.state.users.id,"'")).then((function(a){t.datanya=a,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t,e.vdata.iduser=t.$store.state.users.id,!confirm("Apakah yakin proses dilanjutkan ?")){a.next=20;break}if("tambah"!=t.btn){a.next=10;break}return delete t.vdata.id,a.next=7,c.collection("app_portofolio_seminar",!0,l).doc().set(t.vdata);case 7:e.getData(),a.next=20;break;case 10:if("update"!=t.btn){a.next=16;break}return a.next=13,c.collection("app_portofolio_seminar",!0,l).doc().set(t.vdata);case 13:e.getData(),a.next=20;break;case 16:if("delete"!=t.btn){a.next=20;break}return a.next=19,c.collection("app_portofolio_seminar",!0,l).doc(t.vdata.id)["delete"]();case 19:e.getData();case 20:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.getData();case 1:case"end":return a.stop()}}),a)})))()}},u=d,p=e("2877"),m=Object(p["a"])(u,n,s,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=page-admin-sertifikat-seminar~6c558fdf.55b122c5.js.map