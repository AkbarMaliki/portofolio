(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-admin-layout-index~c7bc5a37"],{"21ee":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow p-3 rounded-lg"},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})]),t._v(" Untuk mendapatkan gradient Color Kunjungi > "),t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"button_color"}},[t._v("button_color")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.button_color,expression:"vdata.button_color"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"button_color",name:"button_color",placeholder:"button_color"},domProps:{value:t.vdata.button_color},on:{input:function(a){a.target.composing||t.$set(t.vdata,"button_color",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"font_color"}},[t._v("font_color")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.font_color,expression:"vdata.font_color"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"font_color",name:"font_color",placeholder:"font_color"},domProps:{value:t.vdata.font_color},on:{input:function(a){a.target.composing||t.$set(t.vdata,"font_color",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"background_color"}},[t._v("background_color")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.background_color,expression:"vdata.background_color"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"background_color",name:"background_color",placeholder:"ambil color nya di : https://cssgradient.io/"},domProps:{value:t.vdata.background_color},on:{input:function(a){a.target.composing||t.$set(t.vdata,"background_color",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"background_card"}},[t._v("background_card Kiri (untuk layout type 3,4)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.background_card,expression:"vdata.background_card"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"background_card",name:"background_card",placeholder:"ambil color nya di : https://cssgradient.io/"},domProps:{value:t.vdata.background_card},on:{input:function(a){a.target.composing||t.$set(t.vdata,"background_card",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"background_card2"}},[t._v("background_card Kanan")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.background_card2,expression:"vdata.background_card2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"background_card2",name:"background_card2",placeholder:"ambil color nya di : https://cssgradient.io/"},domProps:{value:t.vdata.background_card2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"background_card2",a.target.value)}}})])]),e("div",{staticClass:"col-6"},[e("p",[t._v("Layout type")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.typelayout,expression:"vdata.typelayout"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"typelayout",a.target.multiple?e:e[0])}}},[e("option",[t._v("1")]),e("option",[t._v("2")]),e("option",[t._v("3")]),e("option",[t._v("4")]),e("option",[t._v("5")])]),"3"==t.vdata.typelayout||"4"==t.vdata.typelayout?e("div",[e("p",[t._v("Main Photo type")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.photo,expression:"vdata.photo"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"photo",a.target.multiple?e:e[0])}}},[e("option",[t._v("lingkaran")]),e("option",[t._v("kotak")])])]):t._e(),e("p",[t._v("Skill view type")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.skilltype,expression:"vdata.skilltype"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"skilltype",a.target.multiple?e:e[0])}}},[e("option",[t._v("1")]),e("option",[t._v("2")])]),e("p",[t._v("Particle")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.particle,expression:"vdata.particle"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"particle",a.target.multiple?e:e[0])}}},[e("option",[t._v("particle1")]),e("option",[t._v("particle2")]),e("option",[t._v("particle3")]),e("option",[t._v("particle4")]),e("option",[t._v("particle5")]),e("option",[t._v("particle6")])]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"particle_point"}},[t._v("particle_point")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.particle_point,expression:"vdata.particle_point"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"particle_point",name:"particle_point",placeholder:"particle_point"},domProps:{value:t.vdata.particle_point},on:{input:function(a){a.target.composing||t.$set(t.vdata,"particle_point",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"particle_line"}},[t._v("particle_line")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.particle_line,expression:"vdata.particle_line"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"particle_line",name:"particle_line",placeholder:"particle_line"},domProps:{value:t.vdata.particle_line},on:{input:function(a){a.target.composing||t.$set(t.vdata,"particle_line",a.target.value)}}})])])]),e("div",{staticClass:"mt-3 p-3"},[e("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-info"}),t._v(" Proses "+t._s(t.btn)+" ")]),e("div",{staticClass:"float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(a){t.btn="tambah",t.vdata={}}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.btn="delete"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete ")])])])])]),e("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[e("div",{staticClass:"shadow rounded-lg"},[t.datanya.length>0?e("div",{staticClass:"p-2"},[e("div",{staticClass:"text-right"},[e("vue-json-excel",{attrs:{data:t.datanya}},[e("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v(" Export "),e("span",{staticClass:"typcn typcn-chart-area"})])])],1),e("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:[""]},on:{selected:t.ambil}})],1):t._e()])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"text-red-400 font-semibold text-xs"},[e("a",{attrs:{href:"https://cssgradient.io/",target:"__blank"}},[t._v("https://cssgradient.io/")])])}],r=e("1da1"),i=(e("96cf"),e("4b97")),s=e("6be6"),l=new i["a"],c="https://gis.officialapp.website",d={components:{Btables:s["a"]},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},layout:"app_admin",methods:{upload:function(){var t=this,a=document.querySelector("#filenya");l.collection("tbuser",!1,c).upload(a,!0,!0).then((function(a){console.log(a),t.vdata.gambar=a,t.$forceUpdate()}))},getData:function(){var t=this;l.collection("app_portofolio_layout",!1,c).doc().select("select * from app_portofolio_layout where iduser='".concat(this.$store.state.users.id,"'")).then((function(a){a.length>0&&(t.vdata=a[0],t.btn="update"),t.datanya=a,t.$forceUpdate()}))},ambil:function(t){this.vdata=t,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t,e.vdata.iduser=t.$store.state.users.id,!confirm("Apakah yakin proses dilanjutkan ?")){a.next=20;break}if("tambah"!=t.btn){a.next=10;break}return delete t.vdata.id,a.next=7,l.collection("app_portofolio_layout",!0,c).doc().set(t.vdata);case 7:e.getData(),a.next=20;break;case 10:if("update"!=t.btn){a.next=16;break}return a.next=13,l.collection("app_portofolio_layout",!0,c).doc().set(t.vdata);case 13:e.getData(),a.next=20;break;case 16:if("delete"!=t.btn){a.next=20;break}return a.next=19,l.collection("app_portofolio_layout",!0,c).doc(t.vdata.id)["delete"]();case 19:e.getData();case 20:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.getData();case 1:case"end":return a.stop()}}),a)})))()}},p=d,u=e("2877"),v=Object(u["a"])(p,o,n,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=page-admin-layout-index~c7bc5a37.3fe747f1.js.map