(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{357:function(t,e,o){var content=o(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("54520980",content,!0,{sourceMap:!1})},358:function(t,e,o){"use strict";o.r(e);o(52),o(43),o(229),o(42),o(53),o(15),o(41),o(81),o(140),o(48),o(54),o(20);var r=o(5),n={props:["tables","hide","cari"],data:function(){return{ready:!1,datanya:[],keys:[],perPage:10,search:"",selected:{status:!1}}},watch:{selected:function(){window.scrollTo(0,0),this.selected&&this.$emit("selected",JSON.parse(JSON.stringify(this.selected)))},tables:function(){this.getData(),this.$forceUpdate()}},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t,t.tables&&(t.datanya=t.tables,t.datanya.forEach((function(t){t.id&&(t.id=parseInt(t.id))})),o.keys=Object.keys(t.datanya[0]),o.keys=o.keys.map((function(t){return{field:t,label:t.toUpperCase()}})),t.ready=!0,t.$forceUpdate()),t.$forceUpdate();case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t,t.$nuxt.$on("getData",(function(){o.getData()})),t.getData();case 3:case"end":return e.stop()}}),e)})))()},computed:{hides:function(){var data=this.hide?this.hide:[];return data.push("createdAt","updateAt"),data},caris:function(){return this.cari?this.cari:[""]},td:function(){var t=this,data=this.datanya,e=Object.keys(data[0]);return data=data.filter((function(o,i,a){var r=!1;if(e.filter((function(e){"string"==typeof o[e]?-1!=o[e].toLowerCase().indexOf(t.search.toLowerCase())&&(r=!0):null!=o[e]&&-1!=o[e].toString().indexOf(t.search)&&(r=!0)})),r)return o}))}}},l=(o(359),o(7)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.ready?o("section",[t.selected?o("div"):t._e(),t._v(" "),o("div",{staticClass:"scrollbarnya",staticStyle:{overflow:"scroll",padding:"10px"}},[o("div",{staticClass:"sm-form float-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"form-control",staticStyle:{width:"20vw"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.perPage=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),o("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),o("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),o("option",{attrs:{value:"1000"}},[t._v("semua")])]),t._v(" "),o("b-table",{attrs:{data:t.td,"sticky-header":!1,selected:t.selected,"per-page":t.perPage,bordered:!0,striped:!0,narrowed:!0,hoverable:!0,"mobile-cards":!1,paginated:!0,"sort-icon":"arrow-up","sort-icon-size":"is-small","pagination-simple":!1,"default-sort-direction":"asc","pagination-rounded":!0,"default-sort":"id"},on:{"update:selected":function(e){t.selected=e}}},t._l(t.keys,(function(e,r){return o("b-table-column",{key:r+"keys",attrs:{visible:!t.hides.includes(e.field),searchable:t.caris.includes(e.field),field:e.field,label:e.label,sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){return["link"!=e.field?o("span",{staticClass:"text-md"},[t._v("\r\n                "+t._s(r.row[e.field])+"\r\n            ")]):o("span",[o("a",{staticClass:"text-sm",attrs:{href:r.row[e.field],target:"__blank"}},[o("button",{staticClass:"text-sm btn btn-sm btn-dark btn-block",attrs:{type:"button",name:"",id:""}},[o("span",{staticClass:"typcn typcn-download"}),t._v(" Download")])])])]}}],null,!0)})})),1)],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,o){"use strict";o(357)},360:function(t,e,o){(e=o(17)(!1)).push([t.i,".scrollbarnya::-webkit-scrollbar{width:5px;height:5px}.scrollbarnya::-webkit-scrollbar-track{box-shadow:inset 0 0 5px transparent;border-radius:5px}.scrollbarnya::-webkit-scrollbar-thumb{cursor:-webkit-grab;cursor:grab;background:#000;border-radius:5px}.scrollbarnya::-webkit-scrollbar-thumb:hover{background:#b30000}",""]),t.exports=e},448:function(t,e,o){"use strict";o.r(e);o(20);var r=o(5),n=o(23),l=o(358),c=new n.a,d="https://gis.officialapp.website",v={components:{Btables:l.default},data:function(){return{selected:!1,vdata:{},btn:"tambah",datanya:[]}},layout:"app_admin",methods:{upload:function(){var t=this,e=document.querySelector("#filenya");c.collection("tbuser",!1,d).upload(e,!0,!0).then((function(e){console.log(e),t.vdata.gambar=e,t.$forceUpdate()}))},getData:function(){var t=this;c.collection("app_portofolio_layout",!1,d).doc().select("select * from app_portofolio_layout where iduser='".concat(this.$store.state.users.id,"'")).then((function(e){e.length>0&&(t.vdata=e[0],t.btn="update"),t.datanya=e,t.$forceUpdate()}))},ambil:function(data){this.vdata=data,this.btn="update",this.$forceUpdate()},submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=t).vdata.iduser=t.$store.state.users.id,!confirm("Apakah yakin proses dilanjutkan ?")){e.next=20;break}if("tambah"!=t.btn){e.next=10;break}return delete t.vdata.id,e.next=7,c.collection("app_portofolio_layout",!0,d).doc().set(t.vdata);case 7:o.getData(),e.next=20;break;case 10:if("update"!=t.btn){e.next=16;break}return e.next=13,c.collection("app_portofolio_layout",!0,d).doc().set(t.vdata);case 13:o.getData(),e.next=20;break;case 16:if("delete"!=t.btn){e.next=20;break}return e.next=19,c.collection("app_portofolio_layout",!0,d).doc(t.vdata.id).delete();case 19:o.getData();case 20:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getData();case 1:case"end":return e.stop()}}),e)})))()}},m=o(7),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[o("div",{staticClass:"shadow p-3 rounded-lg"},[o("div",{staticClass:"sm-form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id",name:"id",placeholder:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(e){e.target.composing||t.$set(t.vdata,"id",e.target.value)}}})]),t._v("\n      Untuk mendapatkan gradient Color Kunjungi > "),t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("div",{staticClass:"sm-form "},[o("label",{attrs:{for:"button_color"}},[t._v("button_color")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.button_color,expression:"vdata.button_color"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"button_color",name:"button_color",placeholder:"button_color"},domProps:{value:t.vdata.button_color},on:{input:function(e){e.target.composing||t.$set(t.vdata,"button_color",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"sm-form "},[o("label",{attrs:{for:"font_color"}},[t._v("font_color")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.font_color,expression:"vdata.font_color"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"font_color",name:"font_color",placeholder:"font_color"},domProps:{value:t.vdata.font_color},on:{input:function(e){e.target.composing||t.$set(t.vdata,"font_color",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"sm-form "},[o("label",{attrs:{for:"background_color"}},[t._v("background_color")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.background_color,expression:"vdata.background_color"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"background_color",name:"background_color",placeholder:"ambil color nya di : https://cssgradient.io/"},domProps:{value:t.vdata.background_color},on:{input:function(e){e.target.composing||t.$set(t.vdata,"background_color",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"sm-form "},[o("label",{attrs:{for:"background_card"}},[t._v("background_card Kiri (untuk layout type 3,4)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.background_card,expression:"vdata.background_card"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"background_card",name:"background_card",placeholder:"ambil color nya di : https://cssgradient.io/"},domProps:{value:t.vdata.background_card},on:{input:function(e){e.target.composing||t.$set(t.vdata,"background_card",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"sm-form "},[o("label",{attrs:{for:"background_card2"}},[t._v("background_card Kanan")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.background_card2,expression:"vdata.background_card2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"background_card2",name:"background_card2",placeholder:"ambil color nya di : https://cssgradient.io/"},domProps:{value:t.vdata.background_card2},on:{input:function(e){e.target.composing||t.$set(t.vdata,"background_card2",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-6"},[o("p",[t._v("Layout type")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.typelayout,expression:"vdata.typelayout"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.vdata,"typelayout",e.target.multiple?o:o[0])}}},[o("option",[t._v("1")]),t._v(" "),o("option",[t._v("2")]),t._v(" "),o("option",[t._v("3")]),t._v(" "),o("option",[t._v("4")]),t._v(" "),o("option",[t._v("5")])]),t._v(" "),"3"==t.vdata.typelayout||"4"==t.vdata.typelayout?o("div",[o("p",[t._v("Main Photo type")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.photo,expression:"vdata.photo"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.vdata,"photo",e.target.multiple?o:o[0])}}},[o("option",[t._v("lingkaran")]),t._v(" "),o("option",[t._v("kotak")])])]):t._e(),t._v(" "),o("p",[t._v("Skill view type")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.skilltype,expression:"vdata.skilltype"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.vdata,"skilltype",e.target.multiple?o:o[0])}}},[o("option",[t._v("1")]),t._v(" "),o("option",[t._v("2")])]),t._v(" "),o("p",[t._v("Particle")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.particle,expression:"vdata.particle"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.vdata,"particle",e.target.multiple?o:o[0])}}},[o("option",[t._v("particle1")]),t._v(" "),o("option",[t._v("particle2")]),t._v(" "),o("option",[t._v("particle3")]),t._v(" "),o("option",[t._v("particle4")]),t._v(" "),o("option",[t._v("particle5")]),t._v(" "),o("option",[t._v("particle6")])]),t._v(" "),o("div",{staticClass:"sm-form "},[o("label",{attrs:{for:"particle_point"}},[t._v("particle_point")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.particle_point,expression:"vdata.particle_point"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"particle_point",name:"particle_point",placeholder:"particle_point"},domProps:{value:t.vdata.particle_point},on:{input:function(e){e.target.composing||t.$set(t.vdata,"particle_point",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"sm-form "},[o("label",{attrs:{for:"particle_line"}},[t._v("particle_line")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.particle_line,expression:"vdata.particle_line"}],staticClass:"form-control form-control-sm",attrs:{type:"color",id:"particle_line",name:"particle_line",placeholder:"particle_line"},domProps:{value:t.vdata.particle_line},on:{input:function(e){e.target.composing||t.$set(t.vdata,"particle_line",e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"mt-3 p-3"},[o("button",{staticClass:"btn btn-sm",class:"tambah"==t.btn?"btn-primary":"update"==t.btn?"btn-success":"btn-danger",attrs:{type:"submit"}},[o("span",{staticClass:"typcn typcn-info"}),t._v(" Proses  "+t._s(t.btn)+"\n          ")]),t._v(" "),o("div",{staticClass:"float-right"},[o("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(e){t.btn="tambah",t.vdata={}}}},[o("span",{staticClass:"typcn typcn-edit"}),t._v(" Tambah\n            ")]),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:"tambah"!=t.btn,expression:"btn!='tambah'"}],staticClass:"ml-3 btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){t.btn="delete"}}},[o("span",{staticClass:"typcn typcn-delete"}),t._v(" Delete\n            ")])])])])]),t._v(" "),o("div",{staticClass:"col-sm-9 p-2",staticStyle:{"font-size":"12px"}},[o("div",{staticClass:"shadow rounded-lg"},[t.datanya.length>0?o("div",{staticClass:"p-2"},[o("div",{staticClass:"text-right"},[o("vue-json-excel",{attrs:{data:t.datanya}},[o("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v("\n                  Export "),o("span",{staticClass:"typcn typcn-chart-area"})])])],1),t._v(" "),o("Btables",{ref:"btable",attrs:{tables:t.datanya,cari:[""],hide:[""]},on:{selected:t.ambil}})],1):t._e()])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"text-red-400 font-semibold text-xs"},[e("a",{attrs:{href:"https://cssgradient.io/",target:"__blank"}},[this._v("https://cssgradient.io/")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Btables:o(358).default})}}]);