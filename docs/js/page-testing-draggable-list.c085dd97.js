(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-draggable-list"],{"2af6":function(t,e,s){},"5f5b":function(t,e,s){"use strict";var a=s("2af6"),i=s.n(a);i.a},f616:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-secondary button",on:{click:t.add}},[t._v("Add")]),s("draggable",{staticClass:"list-group",attrs:{tag:"ul",list:t.list,handle:".handle"}},t._l(t.list,(function(e,a){return s("li",{key:e.name,staticClass:"list-group-item"},[s("i",{staticClass:"fa fa-align-justify handle"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"item.text"}],staticClass:"form-control ml-2",attrs:{type:"text"},domProps:{value:e.text},on:{input:function(s){s.target.composing||t.$set(e,"text",s.target.value)}}}),s("i",{staticClass:"fa fa-times close",on:{click:function(e){return t.removeAt(a)}}})])})),0),t._v(" "+t._s(t.list)+" ")],1)},i=[],n=(s("a434"),s("310e")),l=s.n(n),o=2,c={components:{draggable:l.a},data:function(){return{list:[{text:"",id:0},{text:"",id:1},{text:"",id:2}]}},methods:{removeAt:function(t){this.list.splice(t,1)},add:function(){o++,this.list.push({id:o,text:""})}}},r=c,u=(s("5f5b"),s("2877")),d=Object(u["a"])(r,a,i,!1,null,"1fcef94d",null);e["default"]=d.exports}}]);
//# sourceMappingURL=page-testing-draggable-list.c085dd97.js.map