/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{429:function(t,e,n){"use strict";n.r(e);n(52),n(229),n(104),n(42),n(53),n(15),n(41),n(81),n(103);var o=n(24),r=(n(228),n(23)),l=n(361),c=n.n(l);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m="https://gis.officialapp.website",f=new r.a,y={data:function(){return{datanya:"",pilih:"",visible:5,kategoris:[],temp1:0,temp2:10,pagination:1,pembagiannya:10,orderBy:"",orderWith:!0,searchItem:"",kategori:["","WEB","ANDROID/IOS","IOT","DESKTOP","PWA","SIDE-PROJECT","AUTOMATION","OTHER"]}},layout:"a-2",computed:{jumlahPagination:function(){return this.datanya.length/10},tombolPagination:function(){var data=this.pagination,t=[data-2,data-1,data,data+1,data+2];return(-1!=t.indexOf(-1)||-1!=t.indexOf(0))&&(t=[1,2,3,4,5]),t},filteredData:function(){var t=this,e=this,data=this.datanya;if(this.orderBy.length>0&&(data=this.$_.orderBy(data,["title"],[this.orderBy])),null!=data[0]){var n=Object.keys(data[0]);data=(data=data.filter((function(e,i,a){var o=!1;if(n.filter((function(n){"string"==typeof e[n]?-1!=e[n].toLowerCase().indexOf(t.searchItem.toLowerCase())&&(o=!0):null!=e[n]&&-1!=e[n].toString().indexOf(t.searchItem)&&(o=!0)})),o)return e}))).filter((function(n,i,a){return console.log(n.type==e.pilih),n.type==t.pilih||""==t.pilih?n:void 0}))}return data}},methods:{visibilityChanged:function(data){this.visible=this.visible+100},tes:function(){var data=this.datanya[0].judul.toLowerCase().split(" ").join("-")+"-1".split("-");console.log(data[data.length-1])},pagPrev:function(){this.pembagiannya=10,this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.pembagiannya,this.temp1=Math.ceil(this.temp2)-this.pembagiannya},pagNext:function(){this.pembagiannya=10,this.pagination=this.pagination+1,this.pagination>this.jumlahPagination+1&&(this.pagination=Math.ceil(this.jumlahPagination)),this.temp2=this.pagination*this.pembagiannya,this.temp1=Math.ceil(this.temp2)-this.pembagiannya},changePagination:function(t){this.pembagiannya=10,this.pagination=t,this.temp2=this.pagination*this.pembagiannya,this.temp2=Math.ceil(this.temp2),this.temp1=this.temp2-this.pembagiannya,this.temp1=Math.ceil(this.temp1)}},mounted:function(){var t=this;f.collection("app_portofolio_project",!1,m).doc().select("select * from app_portofolio_project where iduser='".concat(this.$store.state.id,"'")).then((function(e){console.log(e);var n=e;n=n.map((function(t){return d(d({},t),{},{urutan:parseInt(t.urutan)})})),n=c.a.orderBy(n,"urutan","asc"),t.datanya=n,t.$forceUpdate()})),f.collection("app_portofolio_project_kategori",!1,m).doc().select("select * from app_portofolio_project_kategori").then((function(e){console.log(e),e=e.map((function(t){return t.kategori})),t.kategori=e,t.kategori.unshift(""),t.$forceUpdate()}))}},v=n(7),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"\n        p-3\n        ml-1\n        mr-1\n        shadow-lg\n        rounded-lg\n        animate__animated animate__fadeIn\n      ",staticStyle:{"font-family":"Titillium Web","line-height":"1",background:"black",color:"white"},style:""+t.$store.state.data.layout.background2},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchItem,expression:"searchItem"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"search",name:"search",placeholder:"search"},domProps:{value:t.searchItem},on:{input:function(e){e.target.composing||(t.searchItem=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-6 text-right"},[t._v("\n          Total : "),n("button",{staticClass:"btn btn-sm btn-style9  ",style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[t._v(t._s(t.filteredData.length))])]),t._v(" "),n("div",{staticClass:"col-12"},[n("br"),t._v(" "),t._l(t.kategori,(function(e,o){return n("button",{key:o+"kategori",staticClass:"btn btn-sm  ml-2 mt-1 text-xs p-1",class:e==t.pilih?"btn-danger":"btn-warning",attrs:{type:"button"},on:{click:function(n){t.pilih=e,t.pembagiannya=100,t.pagination=1}}},[t._v(t._s(""==e?"- ALL -":e))])}))],2)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"}),t._v(" "),t._l(t.filteredData,(function(e,o){return n("div",{key:o,staticClass:"col-sm-6 text-white"},[n("nuxt-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/a-2/project/"+e.judul.toLowerCase().split(" ").join("-")+"-"+e.id}},[n("div",{staticClass:"\n                shadow\n                rounded-lg\n                p-2\n                mt-3\n                anim\n                hover:bg-orange-300\n                hover:opacity-75\n                cursor-pointer\n              ",staticStyle:{"min-height":"380px","box-shadow":"2px 2px 3px 1px"}},[n("div",{staticClass:"text-center p-3"},[n("img",{key:e.gambar,staticClass:"mx-auto kinoLightBox img-fluid rounded-lg shadow-lg",staticStyle:{height:"250px"},attrs:{src:e.gambar}})]),t._v(" "),n("p",{staticClass:"pl-2 font-bold text-capitalize text-white",staticStyle:{"font-size":"14px"}},[t._v("\n                "+t._s(e.judul)+"\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-style9 text-xs ",staticStyle:{position:"absolute",right:"20px",bottom:"20px","font-size":"10px"},style:""+(t.$store.state.data.layout?t.$store.state.data.layout.button_color:""),attrs:{type:"button"}},[t._v(t._s(e.type))])])])],1)}))],2),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}]},[t._v("...")])])])]),t._v(" "),n("div",{staticClass:"float-right"})]),t._v(" "),n("h1",{staticStyle:{"font-size":"1px",opacity:"0.1"}},[t._v("\n      Project TA_Maliki / Taufik Akbar Maliki my project PORTOFOLIO WEBSITE\n      OFFICIAL\n    ")])])}),[],!1,null,null,null);e.default=component.exports}}]);