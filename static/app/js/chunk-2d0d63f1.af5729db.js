(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{lg4:"Адміністратор"===t.role,lg6:"НТЗ"===t.role,md12:"Адміністратор"===t.role,md6:"НТЗ"===t.role,sm12:""}},[n("material-card",{staticClass:"pb-4",attrs:{color:"green",title:"Напрямки Підготовки"}},[n("v-layout",{staticClass:"mt-2 pl-2 pr-2",attrs:{nowrap:""}},[n("v-flex",{attrs:{md12:""}},[n("span",{staticClass:"font-weight-bold"},[t._v("\n              Кількість Напрямків\n            ")]),n("span",{staticClass:"font-weight-bold"},[t._v("\n              - "+t._s(t.directionsCount)+"\n            ")])])],1)],1)],1),"Адміністратор"===t.role?n("v-flex",{attrs:{lg4:"Адміністратор"===t.role,lg6:"НТЗ"===t.role,md12:"Адміністратор"===t.role,md6:"НТЗ"===t.role,sm12:""}},[n("material-card",{staticClass:"pb-4",attrs:{color:"green",title:"НТЗ"}},[n("v-layout",{staticClass:"mt-2 pl-2 pr-2",attrs:{nowrap:""}},[n("v-flex",{attrs:{md12:""}},[n("span",{staticClass:"font-weight-bold"},[t._v("\n              Кількість НТЗ\n            ")]),n("span",{staticClass:"font-weight-bold"},[t._v("\n              - "+t._s(t.organisationsCount)+"\n            ")])])],1)],1)],1):t._e(),n("v-flex",{attrs:{lg4:"Адміністратор"===t.role,lg6:"НТЗ"===t.role,md12:"Адміністратор"===t.role,md6:"НТЗ"===t.role,sm12:""}},[n("material-card",{staticClass:"pb-4",attrs:{color:"green",title:"Сертифікати"}},[n("v-layout",{staticClass:"mt-2 pl-2 pr-2",attrs:{wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("span",{staticClass:"font-weight-bold"},[t._v("\n              Cертіфікатів в обробці\n            ")]),n("span",{staticClass:"font-weight-bold"},[t._v("\n              - "+t._s(t.certsInReviewCount)+",\n            ")])]),n("v-flex",{attrs:{md12:""}},[n("span",{staticClass:"font-weight-bold"},[t._v("\n              Виданих сертіфікатів\n            ")]),n("span",{staticClass:"font-weight-bold"},[t._v("\n              - "+t._s(t.issuedCertCount)+"\n            ")])])],1)],1)],1)],1)],1)},e=[],o={data:function(){return{issuedCertCount:0,certsInReviewCount:0,organisationsCount:0,directionsCount:0,role:gUserRole}},mounted:function(){var t=this;axios.get("/mariner/api/dashInfo/").then(function(s){var n=s.data.dashInfo[0];"Адміністратор"===t.role&&(t.organisationsCount=n.trainigOrganisations.length),t.directionsCount=n.trainigDirectionsCount,t.certsInReviewCount=n.certsInReviewCount,t.issuedCertCount=n.certCount}).catch(function(t){console.log(t)})},methods:{}},l=o,r=n("2877"),i=Object(r["a"])(l,a,e,!1,null,null,null);s["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0d63f1.af5729db.js.map