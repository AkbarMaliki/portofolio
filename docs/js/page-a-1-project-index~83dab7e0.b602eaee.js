(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-a-1-project-index~83dab7e0"],{fedd:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"\n        p-3\n        ml-1\n        mr-1\n        \n        shadow-lg\n        rounded-lg\n        animate__animated animate__fadeIn\n      ",staticStyle:{"font-family":"Titillium Web","line-height":"1",background:"black"},style:""+t.$store.state.data.layout.background_card2},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchItem,expression:"searchItem"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.searchItem},on:{input:function(i){i.target.composing||(t.searchItem=i.target.value)}}})]),a("div",{staticClass:"col-6 text-right"},[t._v(" Total : "),a("button",{staticClass:"btn btn-sm btn-style9  ",style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[t._v(t._s(t.filteredData.length))])]),a("div",{staticClass:"col-12"},[a("br"),t._l(t.kategori,(function(i,e){return a("button",{key:e+"kategori",staticClass:"btn btn-sm  ml-2 mt-1 text-xs p-1",class:i==t.pilih?"btn-warning":"btn-dark",attrs:{type:"button"},on:{click:function(a){t.pilih=i,t.pembagiannya=100,t.pagination=1}}},[t._v(t._s(""==i?"- ALL -":i))])}))],2)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"}),t._l(t.filteredData,(function(i,e){return a("div",{key:e,staticClass:"col-sm-6 "},[a("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/a-1/project/"+i.judul.toLowerCase().split(" ").join("-")+"-"+i.id}},[a("div",{staticClass:"\n                shadow\n                rounded-lg\n                p-2\n                mt-3\n                anim\n                hover:bg-yellow-200\n                cursor-pointer\n                bg-white\n              ",staticStyle:{"min-height":"380px","box-shadow":"2px 2px 3px 1px"}},[a("div",{staticClass:"text-center p-3"},[a("img",{key:i.gambar,staticClass:"mx-auto kinoLightBox img-fluid rounded-lg shadow-lg",staticStyle:{height:"250px"},attrs:{src:i.gambar}})]),a("p",{staticClass:"pl-2 font-bold text-capitalize",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(i.judul)+" ")]),a("button",{staticClass:"btn btn-sm btn-style9 text-xs ",staticStyle:{position:"absolute",right:"20px",bottom:"20px","font-size":"10px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[t._v(t._s(i.type))])])])],1)}))],2),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}]},[t._v("...")])])])]),a("div",{staticClass:"float-right"})]),a("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v(" Project TA_Maliki / Taufik Akbar Maliki my project PORTOFOLIO WEBSITE OFFICIAL ")])])},n=[],s=a("5530"),o=(a("c975"),a("b64b"),a("4de4"),a("d3b7"),a("25f0"),a("0d03"),a("a15b"),a("1276"),a("ac1f"),a("d81d"),a("e25e"),a("bc3a"),a("4b97")),r=a("2ef0"),l=a.n(r),c="https://gis.officialapp.my.id",p=new o["a"],h={data:function(){return{datanya:"",pilih:"",visible:5,kategoris:[],temp1:0,temp2:10,pagination:1,pembagiannya:10,orderBy:"",orderWith:!0,searchItem:"",kategori:["","WEB","ANDROID/IOS","IOT","DESKTOP","PWA","SIDE-PROJECT","AUTOMATION","OTHER"]}},layout:"a-1",computed:{jumlahPagination:function(){var t=this.datanya;return t.length/10},tombolPagination:function(){var t=this.pagination,i=t-2,a=t-1,e=t,n=t+1,s=t+2,o=[i,a,e,n,s];return(-1!=o.indexOf(-1)||-1!=o.indexOf(0))&&(o=[1,2,3,4,5]),o},filteredData:function(){var t=this,i=this,a=this.datanya;//! search fungsi
if(//! order fungsi
this.orderBy.length>0&&(a=this.$_.orderBy(a,["title"],[this.orderBy])),void 0!=a[0]){var e=Object.keys(a[0]);a=a.filter((function(i,a,n){var s=!1;if(e.filter((function(a){"string"===typeof i[a]?-1!=i[a].toLowerCase().indexOf(t.searchItem.toLowerCase())&&(s=!0):void 0!=i[a]&&-1!=i[a].toString().indexOf(t.searchItem)&&(s=!0)})),s)return i})),a=a.filter((function(a,e,n){return console.log(a.type==i.pilih),a["type"]==t.pilih||""==t.pilih?a:void 0}))}return a}},methods:{visibilityChanged:function(t){this.visible=this.visible+100},tes:function(){var t=this.datanya[0].judul.toLowerCase().split(" ").join("-")+"-1".split("-");console.log(t[t.length-1])},pagPrev:function(){this.pembagiannya=10,this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.pembagiannya,this.temp1=Math.ceil(this.temp2)-this.pembagiannya},pagNext:function(){this.pembagiannya=10,this.pagination=this.pagination+1,this.pagination>this.jumlahPagination+1&&(this.pagination=Math.ceil(this.jumlahPagination)),this.temp2=this.pagination*this.pembagiannya,this.temp1=Math.ceil(this.temp2)-this.pembagiannya},changePagination:function(t){this.pembagiannya=10,this.pagination=t,this.temp2=this.pagination*this.pembagiannya,this.temp2=Math.ceil(this.temp2),this.temp1=this.temp2-this.pembagiannya,this.temp1=Math.ceil(this.temp1)}},mounted:function(){var t=this;p.collection("app_portofolio_project",!1,c).doc().select("select * from app_portofolio_project where iduser='".concat(this.$store.state.id,"'")).then((function(i){console.log(i);var a=i;a=a.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{urutan:parseInt(t.urutan)})})),a=l.a.orderBy(a,"urutan","asc"),t.datanya=a,t.$forceUpdate()})),p.collection("app_portofolio_project_kategori",!1,c).doc().select("select * from app_portofolio_project_kategori").then((function(i){console.log(i),i=i.map((function(t){return t.kategori})),t.kategori=i,t.kategori.unshift(""),t.$forceUpdate()}))}},d=h,u=a("2877"),m=Object(u["a"])(d,e,n,!1,null,null,null);i["default"]=m.exports}}]);
//# sourceMappingURL=page-a-1-project-index~83dab7e0.b602eaee.js.map