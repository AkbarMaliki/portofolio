(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-gmap"],{"418e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h2",[e._v("Search and add a pin")]),n("label",[n("gmap-autocomplete",{on:{place_changed:e.setPlace}}),n("button",{on:{click:e.addMarker}},[e._v("Add")])],1),n("br")]),n("br")])},r=[],l={components:{},name:"GoogleMap",data:function(){return{marker:{lat:50.60229509638775,lng:3.0247059387528408},marker2:{lat:200.60229509638776,lng:3.0247059387528408},center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{test:function(){alert("y")},setPlace:function(e){this.currentPlace=e},addMarker:function(){if(this.currentPlace){var e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.places.push(this.currentPlace),this.center=e,this.currentPlace=null}},geolocate:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.center={lat:e.marker.lat,lng:e.marker.lng}}))}}},c=l,o=n("2877"),i=Object(o["a"])(c,a,r,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=page-testing-gmap.b90d7ff5.js.map