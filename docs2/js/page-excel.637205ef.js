(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-excel"],{"7d56":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"offset-sm-2 col-sm-8"},[a("p",{staticClass:"text-center text-2xl font-bold font-courier"},[t._v("MOHON TUNGGU")]),a("hr",{staticClass:"style16"}),a("p",{staticClass:"text-sm font-bold animated bounce infinite text-center"},[t._v("Loading...")]),a("p",[t._v("File anda sedang proses download ... apabila file tidak terdownload klik ini ")]),a("div",{staticClass:"text-center"},[a("download-excel",{attrs:{data:t.td}},[a("button",{staticClass:"btn btn-sm btn-success  ",attrs:{type:"button",id:"downloadcsv"}},[a("span",{staticClass:"typcn typcn-chart-bar"}),t._v("Download")])])],1)])])])},n=[],o=a("1bdd"),i={data:function(){return{td:[]}},components:{downloadExcel:o["a"]},mounted:function(){console.log(this.$route.query.data),this.td=JSON.parse(this.$route.query.data);var t=this;setTimeout((function(){t.$el.querySelector("#downloadcsv").click()}),1e3)}},l=i,c=a("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=page-excel.637205ef.js.map