(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-socketiophp"],{6239:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.inserts}},[t._v("inserts")]),s("button",{staticClass:"btn btn-sm btn-warning  ",attrs:{type:"button"},on:{click:t.getdata}},[t._v("getdata")]),s("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.deletes}},[t._v("deletes")]),s("br"),t._l(t.messages,(function(e,n){return s("p",{key:n+"item",on:{click:function(s){return t.dipilih(e)}}},[t._v(t._s(e))])}))],2)},i=[],a=(s("bf19"),s("bc3a"),s("cc98")),o=s.n(a),c=s("8055"),l=s.n(c),r=l()("http://localhost:2021"),u={data:function(){return{messages:[],message:"",pilih:{}}},beforeMount:function(){var t=this;r.on("gets-message",(function(t){console.log(t)})),r.on("new-message",(function(e){t.messages.push(e)})),r.on("edit-message",(function(e){console.log(e),t.messages=e,t.forceUpdate()})),r.on("refresh-message",(function(t){r.emit("last-messages",(function(t){that.messages=t,this.forceUpdate()}))}))},mounted:function(){var t=this;r.emit("last-messages",(function(e){t.messages=e})),this.scrollToBottom()},methods:{getdata:function(){r.emit("get-message","data")},dipilih:function(t){this.pilih=t},inserts:function(){var t={id:o()(),room:"pesan",tujuan:"admin",table:"tbuser",text:"taufik akbar maliki",dibaca:"false",status:1,createdAt:(new Date).toJSON(),createdBy:"null"};this.message="",r.emit("send-message",t)},edits:function(t){this.pilih.status=4,this.pilih.Nama="selesai",this.pilih.text="selesai",r.emit("edits-message",this.pilih)},deletes:function(t){var e=this;r.emit("delete-message",this.pilih),r.emit("last-messages",(function(t){e.messages=t,e.forceUpdate(),e.pilih={}}))}}},m=u,p=s("2877"),f=Object(p["a"])(m,n,i,!1,null,null,null);e["default"]=f.exports},bf19:function(t,e,s){"use strict";var n=s("23e7");n({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})}}]);
//# sourceMappingURL=page-testing-socketiophp.1c9f2814.js.map