(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-firebase-crud-index"],{"07e1":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v(" "+t._s(t.vdata)+" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v("BUKU")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"title"}},[t._v("Your title")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.title,expression:"vdata.title"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"title",name:"title",placeholder:"title"},domProps:{value:t.vdata.title},on:{input:function(a){a.target.composing||t.$set(t.vdata,"title",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"keterangan"}},[t._v("Your keterangan")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.keterangan,expression:"vdata.keterangan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"keterangan",name:"keterangan",placeholder:"keterangan"},domProps:{value:t.vdata.keterangan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"keterangan",a.target.value)}}})]),e("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.create}},[t._v("Simpan")])])]),t._l(t.datanya,(function(a,n){return e("p",{key:n},[t._v(t._s(a.title))])}))],2)},i=[],o=(e("4160"),e("159b"),e("5530")),s=e("8aa5"),r=e.n(s),l=r.a.firestore(),c={data:function(){return{datanya:[],pilih:{},vdata:{}}},methods:{getData:function(){var t=this;l.collection("buku").onSnapshot((function(a){var e=[];a.forEach((function(t){e.push(Object(o["a"])({id:t.id},t.data()))})),t.datanya=e}))},create:function(){l.collection("buku").doc().set(this.vdata)},update:function(){l.collection("buku").doc(this.pilih.id).set(this.vdata,{merge:!0}).then((function(t){console.log("edit berhasil")}))},deletes:function(){l.collection("buku").doc(this.pilih.id).delete().then((function(t){console.log("delete berhasil")}))}},mounted:function(){this.getData(),this.$store.dispatch("ceklogin"),console.log(r.a.auth().currentUser),this.vdata.uid=this.$store.state.users.uid,this.vdata.updateAt=new Date,this.$forceUpdate()}},d=c,u=e("2877"),v=Object(u["a"])(d,n,i,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=page-testing-firebase-crud-index.0424dc59.js.map