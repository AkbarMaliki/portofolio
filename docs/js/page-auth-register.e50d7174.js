(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-auth-register"],{8871:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticStyle:{padding:"0",margin:"0"}},[s("br"),s("br"),s("div",{staticClass:"row justify-content-center animate__animated animate__backInUp"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card"},[a._m(0),s("div",{staticClass:"card-body"},[s("p",{staticClass:"text-center font-bold font-times"},[a._v("REGISTER")]),a.error?s("div",{staticClass:"alert alert-danger"},[a._v(a._s(a.error))]):a._e(),s("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),a.submit(t)}}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[a._v("Name")]),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.name,expression:"vdata.name"}],staticClass:"form-control",attrs:{id:"name",type:"name",name:"name",value:"",required:"",autofocus:""},domProps:{value:a.vdata.name},on:{input:function(t){t.target.composing||a.$set(a.vdata,"name",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[a._v("Username")]),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.email,expression:"vdata.email"}],staticClass:"form-control",attrs:{id:"text",type:"text",name:"email",value:"",required:"",autofocus:""},domProps:{value:a.vdata.email},on:{input:function(t){t.target.composing||a.$set(a.vdata,"email",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[a._v("Password")]),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.password,expression:"vdata.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:a.vdata.password},on:{input:function(t){t.target.composing||a.$set(a.vdata,"password",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[a._v("Reenter Password")]),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.password2,expression:"vdata.password2"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:a.vdata.password2},on:{input:function(t){t.target.composing||a.$set(a.vdata,"password2",t.target.value)}}})]),s("p",{directives:[{name:"show",rawName:"v-show",value:a.vdata.password!=a.vdata.password2,expression:"vdata.password!=vdata.password2"}],staticClass:"font-bold text-red-600 p-1"},[a._v("Password tidak sama!")])]),a._m(1)]),s("hr",{staticClass:"style13"}),s("div",{staticClass:"text-center"},[a._v(" Kembali ke : "),s("button",{staticClass:"btn btn-style9 ",attrs:{type:"submit"},on:{click:function(t){return a.$router.push("/")}}},[s("span",{staticClass:"typcn typcn-key"}),a._v(" Login")])])])])])]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[s("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,192L60,170.7C120,149,240,107,360,106.7C480,107,600,149,720,192C840,235,960,277,1080,261.3C1200,245,1320,171,1380,133.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"}})])])},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card-header"},[e("div",{staticClass:"text-center mx-auto"},[e("img",{staticClass:"kinoLightBox img-fluid ",staticStyle:{height:"30px"},attrs:{src:s("bfac")}})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-8 offset-md-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[s("span",{staticClass:"typcn typcn-key"}),a._v(" Register")])])])}],i=(s("b0c0"),s("8aa5")),o=s.n(i),l=o.a.firestore(),n=(o.a.database(),{data:function(){return{vdata:{name:"",email:"",password:""},error:null}},methods:{submit:function(){var a=this;o.a.auth().createUserWithEmailAndPassword(this.vdata.email+"@gmail.com",this.vdata.password).then((function(t){t.user.updateProfile({displayName:a.vdata.name}).then((function(){var s={uid:t.user.uid,displayName:t.user.displayName,email:t.user.email,emailVerified:t.user.emailVerified,changepassword:"true",unit:{nama_unit:"BELUM ADA"}};l.collection("users").doc(t.user.uid).set(s,{merge:!0}).then((function(t){console.log("Login Berhasil"),a.$router.push("/")}))}))})).catch((function(t){a.error=t.message}))}}}),d=n,c=s("2877"),m=Object(c["a"])(d,e,r,!1,null,null,null);t["default"]=m.exports},bfac:function(a,t,s){a.exports=s.p+"img/logobtn.d4f2a0ff.png"}}]);
//# sourceMappingURL=page-auth-register.e50d7174.js.map