(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6766"],{"1cec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":"","pt-0":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("material-card",[a("v-form",[a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Name","prepend-inner-icon":"mdi-web"},model:{value:t.first_name_en,callback:function(e){t.first_name_en=e},expression:"first_name_en"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Surname","prepend-inner-icon":"mdi-web"},model:{value:t.last_name_en,callback:function(e){t.last_name_en=e},expression:"last_name_en"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"Iм'я"},model:{value:t.first_name_ukr,callback:function(e){t.first_name_ukr=e},expression:"first_name_ukr"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"Прiзвище"},model:{value:t.last_name_ukr,callback:function(e){t.last_name_ukr=e},expression:"last_name_ukr"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"По батькові"},model:{value:t.second_name_ukr,callback:function(e){t.second_name_ukr=e},expression:"second_name_ukr"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-menu",{ref:"birthdayDatepicker",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Дата народження",readonly:"","prepend-inner-icon":"mdi-calendar-range"},model:{value:t.born,callback:function(e){t.born=e},expression:"born"}},n))]}}]),model:{value:t.birthdayDatepicker,callback:function(e){t.birthdayDatepicker=e},expression:"birthdayDatepicker"}},[a("v-date-picker",{ref:"birthdayPicker",attrs:{"no-title":"",locale:"uk",max:new Date((new Date).setFullYear((new Date).getFullYear()-16)).toISOString().substr(0,10),min:"1950-01-01"},on:{change:t.saveBirthday},model:{value:t.bornNotFormatted,callback:function(e){t.bornNotFormatted=e},expression:"bornNotFormatted"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"ІПН",mask:"#### #### ####"},model:{value:t.inn,callback:function(e){t.inn=e},expression:"inn"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Дата видачі","prepend-inner-icon":"mdi-calendar-range",readonly:""},model:{value:t.date_of_issue,callback:function(e){t.date_of_issue=e},expression:"date_of_issue"}},n))]}}]),model:{value:t.issueDatepicker,callback:function(e){t.issueDatepicker=e},expression:"issueDatepicker"}},[a("v-date-picker",{attrs:{"no-title":"",locale:"uk",min:(new Date).toISOString().substr(0,10),max:new Date((new Date).setDate((new Date).getDate()+5)).toISOString().substr(0,10),"allowed-dates":t.allowedIssueDates},on:{input:t.selectIssueDate},model:{value:t.issueNotFormatted,callback:function(e){t.issueNotFormatted=e},expression:"issueNotFormatted"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Дійсний до","prepend-inner-icon":"mdi-calendar-range",readonly:""},model:{value:t.valid_date,callback:function(e){t.valid_date=e},expression:"valid_date"}},n))]}}]),model:{value:t.validDatepicker,callback:function(e){t.validDatepicker=e},expression:"validDatepicker"}},[a("v-date-picker",{attrs:{min:t.minValidDate,"no-title":"",locale:"uk"},on:{input:function(e){t.validDatepicker=!1}},model:{value:t.validNotFormatted,callback:function(e){t.validNotFormatted=e},expression:"validNotFormatted"}})],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("v-combobox",{attrs:{items:t.directions,label:"Напрямок підготовки","item-text":"caption","item-value":"value"},model:{value:t.training_direction,callback:function(e){t.training_direction=e},expression:"training_direction"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"Номер бланку документу",mask:"##########"},model:{value:t.form_number,callback:function(e){t.form_number=e},expression:"form_number"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"Номер сертифікату",mask:"#####"},model:{value:t.certf_number,callback:function(e){t.certf_number=e},expression:"certf_number"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-select",{attrs:{items:t.statuses,label:"Статус","item-text":"caption","item-value":"value"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","text-xs-right":""}},[a("v-btn",{staticClass:"mx-0",attrs:{to:"/certificates",color:"success",flat:""}},[t._v("\n                  Вiдхилити\n                ")]),a("v-btn",{staticClass:"mx-0 font-weight-light ml-1",attrs:{color:"success"},on:{click:t.saveCertificate}},[t._v("\n                  Зберегти\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],r=(a("6762"),a("2fdb"),a("28a5"),a("768b")),s=(a("ac6a"),a("a481"),{data:function(){return{minValidDate:(new Date).toISOString().substr(0,10),inn:null,certf_number:null,first_name_ukr:null,last_name_ukr:null,second_name_ukr:null,form_number:null,last_name_en:null,first_name_en:null,born:null,bornNotFormatted:null,birthdayDatepicker:!1,date_of_issue:null,issueNotFormatted:null,issueDatepicker:!1,valid_date:null,validNotFormatted:null,validDatepicker:!1,training_direction:null,directions:[],status:null,statuses:[{caption:"Чернетка",value:0},{caption:"Обробка",value:1},{caption:"Видан",value:2},{caption:"Анульований",value:3}]}},watch:{birthdayDatepicker:function(t){var e=this;t&&setTimeout(function(){return e.$refs.birthdayPicker.activePicker="YEAR"})},bornNotFormatted:function(t){this.born=this.formatDate(this.bornNotFormatted)},issueNotFormatted:function(t){this.date_of_issue=this.formatDate(this.issueNotFormatted)},validNotFormatted:function(t){this.valid_date=this.formatDate(this.validNotFormatted)},first_name_en:function(t){var e=this,a=/[^[a-zA-Z\-\'\s]/g;this.$nextTick(function(){var n=e.capitalize(t.replace(a,""));e.$set(e,"first_name_en",n)})},last_name_en:function(t){var e=this,a=/[^[a-zA-Z\-\'\s]/g;this.$nextTick(function(){var n=e.capitalize(t.replace(a,""));e.$set(e,"last_name_en",n)})},first_name_ukr:function(t){var e=this,a=/[^а-щА-ЩЬьЮюЯяЇїІіЄєҐґ -\/'\/]/g;this.$nextTick(function(){var n=e.capitalize(t.replace(a,""));e.$set(e,"first_name_ukr",n),e.$set(e,"first_name_en",e.translitToEn(n))})},second_name_ukr:function(t){var e=this,a=/[^а-щА-ЩЬьЮюЯяЇїІіЄєҐґ -\/'\/]/g;this.$nextTick(function(){var n=e.capitalize(t.replace(a,""));e.$set(e,"second_name_ukr",n)})},last_name_ukr:function(t){var e=this,a=/[^а-щА-ЩЬьЮюЯяЇїІіЄєҐґ -\/'\/]/g;this.$nextTick(function(){var n=e.capitalize(t.replace(a,""));e.$set(e,"last_name_ukr",n),e.$set(e,"last_name_en",e.translitToEn(n))})}},mounted:function(){var t=this,e=[axios.get("/mariner/api/directions/")];this.$route.params.id&&"new"!==this.$route.params.id&&e.push(axios.get("/mariner/api/certificates/".concat(this.$route.params.id))),axios.all(e).then(axios.spread(function(e,a){var n=e.data.directions;n.forEach(function(e){t.directions.push({caption:e.direction_title,value:e.id})});var i=a.data;console.log(i),t.born=t.formatDate(i.born),t.certf_number=i.certf_number,t.date_of_issue=t.formatDate(i.date_of_issue),t.first_name_en=i.first_name_en,t.first_name_ukr=i.first_name_ukr,t.form_number=i.form_number,t.inn=i.inn,t.last_name_ukr=i.last_name_ukr,t.ntz_number=i.ntz_number,t.second_name_ukr=i.second_name_ukr,t.status=i.status,t.training_direction={caption:i.training_direction.direction_title,value:i.training_direction.id},t.valid_date=t.formatDate(i.valid_date)})).catch(function(t){console.log(t)})},methods:{saveBirthday:function(t){this.$refs.birthdayDatepicker.save(t)},resetFormatDate:function(t){if(!t)return null;var e=t.split("."),a=Object(r["a"])(e,3),n=a[0],i=a[1],s=a[2];return"".concat(s,"-").concat(i,"-").concat(n)},saveCertificate:function(){var t=this,e={first_name_en:this.first_name_en,last_name_en:this.last_name_en,last_name_ukr:this.last_name_ukr,first_name_ukr:this.first_name_ukr,second_name_ukr:this.second_name_ukr,born:this.resetFormatDate(this.born),inn:this.inn,date_of_issue:this.resetFormatDate(this.date_of_issue),valid_date:this.resetFormatDate(this.valid_date),training_direction:this.training_direction.value,form_number:this.form_number,certf_number:this.certf_number,status:this.status},a=this.$route.params.id&&"new"===this.$route.params.id?"":this.$route.params.id;console.log(e),axios.post("/mariner/api/certificates/".concat(a),e).then(function(e){t.$router.push("/mariner/app/certificates")}).catch(function(t){console.log(t)})},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(r["a"])(e,3),n=a[0],i=a[1],s=a[2];return"".concat(s,".").concat(i,".").concat(n)},capitalize:function(t){return t.toLowerCase().split("-").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join("-").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join(" ")},translitToEn:function(t,e){var a={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","є":"ie","ж":"zh","з":"z","и":"y","і":"i","ї":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"kh","ц":"ts","ч":"ch","ш":"sh","щ":"shch","ы":"y","э":"e","ю":"iu","я":"ia"},n=[];if(t.length>0){t=t.replace(/й/g,"i").replace(/Й/g,"Y").replace(/Є/g,"Ye").replace(/Ї/g,"Yi").replace(/Ю/g,"Yu").replace(/Я/g,"Ya").replace(/[ъь]+/g,"");for(var i=0;i<t.length;++i)n.push(a[t[i]]||void 0==a[t[i].toLowerCase()]&&t[i]||a[t[i].toLowerCase()].replace(/^(.)/,function(t){return t.toUpperCase()}));return n.join("")}return""},allowedIssueDates:function(t){return![0,6].includes(new Date(t).getDay())},selectIssueDate:function(t){this.issueDatepicker=!1,this.minValidDate=t,this.validNotFormatted=new Date(new Date(t).setFullYear(new Date(t).getFullYear()+5)).toISOString().substr(0,10)}}}),o=s,l=a("2877"),c=Object(l["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b6766.3ce7bf9b.js.map