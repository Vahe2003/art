(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("8a23"),r=a.n(i);r.a},"13f8":function(t,e,a){t.exports=a.p+"img/team.d04fceda.jpg"},"14b8":function(t,e,a){"use strict";var i=a("955a"),r=a.n(i);r.a},"1a0c":function(t,e,a){t.exports=a.p+"img/Vahe.0ce7d805.jpg"},"204a":function(t,e,a){t.exports=a.p+"img/carpet.6dd297d0.png"},"244f":function(t,e,a){t.exports=a.p+"img/architecture.f9b7ffe6.jpg"},2912:function(t,e,a){},"2f59":function(t,e,a){"use strict";var i=a("c132"),r=a.n(i);r.a},4230:function(t,e,a){},4935:function(t,e,a){t.exports=a.p+"img/TUMO.82fa371a.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{height:"50",app:"",color:"#3d3d3d",dark:""}},[i("v-btn",{staticClass:"mx-3",attrs:{width:"0",height:"0",to:"/"}},[i("img",{attrs:{src:a("cf05"),height:"100"}})]),i("v-toolbar-title",{staticClass:"display-1"},[t._v("ART")]),i("v-spacer"),i("v-slide-x-reverse-transition",[i("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.searchShow,expression:"searchShow"}],attrs:{clearable:"","hide-details":"",dark:"","single-line":"",label:"Search for Places"}})],1),i("v-btn",{attrs:{icon:""},on:{click:function(e){t.searchShow=!t.searchShow}}},[i("v-icon",[t._v("mdi-magnify")])],1),i("v-toolbar-items",{staticClass:"hidden-md-and-down"},[i("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/"}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-home ")]),t._v(" Home")],1),i("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/about"}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-information ")]),t._v(" About")],1),i("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/browse"}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-map-marker ")]),t._v(" Browse")],1),i("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/contact"}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-help ")]),t._v(" Contact")],1),i("v-btn",{staticClass:"mx-1",attrs:{text:"",to:"/submit"}},[i("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-plus ")]),t._v(" Add")],1)],1),i("v-app-bar-nav-icon",{staticClass:"hidden-lg-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),i("v-navigation-drawer",{attrs:{app:"",dark:"","disable-route-watcher":"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[i("v-list-item",{attrs:{to:"/"}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v("mdi-home ")]),t._v(" Home")],1)],1),i("v-list-item",{attrs:{to:"/about"}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v("mdi-information ")]),t._v(" About")],1)],1),i("v-list-item",{attrs:{to:"/browse"}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v("mdi-map-marker ")]),t._v("Browse")],1)],1),i("v-list-item",{attrs:{to:"/contact"}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v("mdi-help ")]),t._v("Contact")],1)],1),i("v-list-item",{attrs:{to:"/submit"}},[i("v-list-item-title",[i("v-icon",{staticClass:"mr-2",attrs:{dark:""}},[t._v("mdi-plus")]),t._v("Add")],1)],1)],1)],1)],1),i("v-content",[i("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i("router-view")],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{outlined:"",color:"blue"}},t._l(t.cards,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[a("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"","max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.images[0]}},[a("v-card-title",[t._v(t._s(e.title))])],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v("Number "+t._s(e.id))]),a("v-card-text",{staticClass:"text--primary block-with-text"},[t._v(t._s(e.description))]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange",text:""},on:{click:function(a){return t.$router.push({path:"display/"+e.id})}}},[t._v("Explore")])],1)],1)],1)})),1)],1)},o=[],l=(a("a4d3"),a("e01a"),a("96cf"),a("1da1")),c=a("bc3a"),u=a.n(c),d={name:"Cards",props:{color:String},data:function(){return{cards:null}},methods:{getArt:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://armenian-art.herokuapp.com/getArt");case 2:e=t.sent,console.log(e.data),console.log(e.data["cards"]),this.cards=e.data["cards"];case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addLink:function(){this.images.push(this.item),this.item=null},postArt:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("https://armenian-art.herokuapp.com/postArt",{title:this.title,description:this.description,images:this.images});case 2:e=t.sent,a=e.data,this.$router.push("/display/".concat(a));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getArt()}},m=d,v=(a("14b8"),a("2877")),h=a("6544"),p=a.n(h),f=a("8336"),g=a("b0af"),w=a("99d9"),b=a("62ad"),x=a("a523"),y=a("adda"),_=a("0fd9"),k=Object(v["a"])(m,s,o,!1,null,null,null),C=k.exports;p()(k,{VBtn:f["a"],VCard:g["a"],VCardActions:w["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VCol:b["a"],VContainer:x["a"],VImg:y["a"],VRow:_["a"]});var V={data:function(){return{drawer:!1,group:null,searchShow:!1}},watch:{group:function(){this.drawer=!1}}},A=V,S=(a("034f"),a("7496")),j=a("40dc"),T=a("5bc1"),I=a("a75b"),O=a("132d"),M=a("8860"),R=a("da13"),P=a("1baa"),$=a("5d23"),D=a("f774"),z=a("0789"),q=a("2fa4"),E=a("8654"),L=a("2a7f"),U=Object(v["a"])(A,r,n,!1,null,null,null),Y=U.exports;p()(U,{VApp:S["a"],VAppBar:j["a"],VAppBarNavIcon:T["a"],VBtn:f["a"],VContent:I["a"],VIcon:O["a"],VList:M["a"],VListItem:R["a"],VListItemGroup:P["a"],VListItemTitle:$["a"],VNavigationDrawer:D["a"],VSlideXReverseTransition:z["c"],VSpacer:q["a"],VTextField:E["a"],VToolbarItems:L["a"],VToolbarTitle:L["b"]});var N=a("f309");a("5363");i["a"].use(N["a"]);var F=new N["a"]({}),B=a("8c4f"),H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-carousel",{attrs:{dark:"","show-arrows-on-hover":"","hide-delimiters":"",continuous:"",cycle:"",interval:"10000",touch:"",transition:"none"}},t._l(t.items,(function(e,a){return i("v-carousel-item",{key:a,attrs:{lazy:"",src:e.src,transition:"scroll-x-transition","reverse-transition":"scroll-x-reverse-transition"}},[i("v-jumbotron",{attrs:{dark:""}},[i("v-container",{attrs:{"fill-height":""}},[i("v-layout",{attrs:{"align-center":""}},[i("v-flex",{class:{"ma-12":t.$vuetify.breakpoint.smAndDown,"mx-5":t.$vuetify.breakpoint.mdAndUp}},[i("h2",{staticClass:"white-text",class:{"display-1":t.$vuetify.breakpoint.smAndDown,"display-3":t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(e.title))]),i("h3",{staticClass:"subheading white-text",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(e.description))]),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-btn",{attrs:{block:"",rounded:"",dark:"","x-large":"",icon:""},on:{click:function(e){return t.$vuetify.goTo(1e3,t.options)}}},[i("v-icon",[t._v("mdi-arrow-down")])],1)],1)],1)],1)],1)],1)],1)})),1),i("div",{staticClass:"divider"},[i("marquee",{staticClass:"text-uppercase my-2",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.smAndUp},attrs:{behavior:"scroll",direction:"left",scrollamount:"18"}},[t._v(t._s(t.facts[t.fact_id].text)+" ")])],1),i("v-parallax",{attrs:{height:"300",src:a("de59")}},[i("h2",{staticClass:"text-center text-uppercase",class:{"display-0":t.$vuetify.breakpoint.smAndDown,"display-1":t.$vuetify.breakpoint.mdAndUp}},[t._v("The Treasures of Armenia")])]),i("v-container",[i("Cards")],1),i("v-footer",{attrs:{dark:"",padless:""}},[i("v-card",{staticClass:"grey darken-2 white--text text-center",attrs:{flat:"",tile:""}},[i("v-card-text",t._l(t.icons,(function(e){return i("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),i("v-card-text",{staticClass:"white--text pt-0"},[t._v(" This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury. ")]),i("v-divider"),i("v-card-text",{staticClass:"white--text grey darken-3"},[t._v(" "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("TUMO WORKSHOP")])])],1)],1),i("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[i("v-icon",[t._v("mdi-arrow-up")])],1)],1)},G=[],K={name:"Home",data:function(){return{loading:!0,fab:!1,items:[{src:a("244f"),title:"Armenian Architecture",description:"Read More in this website"},{src:a("5f7e"),title:"Armenian Literature",description:"Read More in this website"},{src:a("69e8"),title:"Armenian Music",description:"Read More in this website"},{src:a("204a"),title:"Armenian Carpets",description:"Read More in this website"},{src:a("ffc3"),title:"Armenian Films",description:"Read More in this website"}],icons:["mdi-facebook","mdi-twitter","mdi-google-plus","mdi-linkedin","mdi-instagram"],fact_id:Math.floor(10*Math.random()),facts:[{text:"Interesting fact #1: Chess is a compulsory subject in schools"},{text:"Interesting fact #2: Armenia was the first country to have adopted Christianity as its state religion"},{text:"Interesting fact #3: Armenia is one of the only mono ethnic countries in the world"},{text:"Interesting fact #4: The first church in the world was built in Armenia"},{text:"Interesting fact #5: An estimated 1.5 million Armenians were killed during the Genocide"},{text:"Interesting fact #6: Armenia is one of the oldest wine producing country in the world"},{text:"Interesting fact #7: Armenians bake their lavash underground in a tonir"},{text:"Interesting fact #8: The entire country worships Mt Ararat which is also the national symbol of Armenia"},{text:"Interesting fact #9: The apricot is one of the symbols of Armenia"},{text:"Interesting fact #10: Yerevan is also known as the “pink city”"}]}},components:{Cards:C},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}},computed:{options:function(){return{duration:1e3,offset:90,easing:"easeInOutQuart"}}}},W=K,Z=(a("cccb"),a("5e66")),X=a("3e35"),J=a("ce7e"),Q=a("0e8f"),tt=a("553a"),et=a("a722"),at=a("8b9c"),it=a("269a"),rt=a.n(it),nt=a("f977"),st=Object(v["a"])(W,H,G,!1,null,null,null),ot=st.exports;p()(st,{VBtn:f["a"],VCard:g["a"],VCardText:w["c"],VCarousel:Z["a"],VCarouselItem:X["a"],VCol:b["a"],VContainer:x["a"],VDivider:J["a"],VFlex:Q["a"],VFooter:tt["a"],VIcon:O["a"],VLayout:et["a"],VParallax:at["a"]}),rt()(st,{Scroll:nt["b"]});var lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-parallax",{attrs:{height:"300",src:a("7f11")}},[i("h1",{staticClass:"text-center",staticStyle:{"font-family":"algerian","font-size":"60px"}},[t._v("Our Mission")])]),i("div",{staticClass:"divider"}),i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",xl:"7",lg:"6"}},[i("h2",{staticClass:"mx-12"},[t._v("What are we doing?")]),i("p",{staticClass:"mx-12"},[t._v("Yerevan is the capital of the Republic of Armenia and is the 12th capital of the historical Armenia. It has seen a lot before becoming the capital of Armenia. Yerevan is also one of the most ancient cities of the world. There are numerous museums, monuments, churches in Yerevan which evidence the high spiritual, cultural and scientific status of the city. Due to rich historic and cultural heritage, unique architecture, developing urban infrastructure and the hospitality so characteristic of Armenians, Yerevan attracts more and more tourists expanding the geography of tourism market and strengthening its positions on the map of best touristic directions. Yerevan is a mixture of ancient, old and new. "),i("br"),t._v(" This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury. ")])]),i("v-col",{attrs:{cols:"12",xl:"5",lg:"6"}},[i("v-img",{key:"@/assets/img/about/TUMO.jpg",staticClass:"grey lighten-2",attrs:{src:a("4935")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1),i("div",{staticClass:"divider"}),i("v-parallax",{attrs:{height:"300",src:a("13f8")}},[i("h1",{staticClass:"text-center",staticStyle:{"font-family":"algerian","font-size":"60px"}},[t._v("Our Team")])]),i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[i("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"",color:"#008DD1","max-width":"400"}},[i("v-img",{staticClass:"white--text align-end",attrs:{gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",height:"260px",src:a("1a0c"),"lazy-src":a("1a0c")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}])},[i("v-card-title",{staticStyle:{"font-family":"cursive"}},[t._v("Vahe Khachatryan")])],1),i("v-card",{staticClass:"ma-7",attrs:{color:"#05aeff"}},[i("v-card-text",{staticStyle:{color:"white"}},[t._v("I'm Vahe Khachatryan. I'm 16 years old. I've been living in Armenia since i was born. I've been learning in TUMO for 3 and half years. It's still fun to go there, because without it i wouldn't be making this website :)")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){t.show=!t.show}}},[i("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[i("v-divider"),i("v-card-text",{staticStyle:{color:"white"}},[i("v-row",{staticClass:"mx-12",attrs:{justify:"space-between",align:"center"}},[i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-facebook")])],1),i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-instagram")])],1),i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-twitter")])],1)],1)],1)],1)])],1)],1),i("v-col",{attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[i("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"",color:"#008DD1","max-width":"400"}},[i("v-img",{staticClass:"white--text align-end",attrs:{gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",height:"260px",src:a("91b2"),"lazy-src":a("91b2")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}])},[i("v-card-title",{staticStyle:{"font-family":"cursive"}},[t._v("Gor Margaryan")])],1),i("v-card",{staticClass:"ma-7",attrs:{color:"#05aeff"}},[i("v-card-text",{staticStyle:{color:"white"}},[t._v("I'm Gor Margaryan. I'm 13 years old. I've been living in Armenia since i was born. I've been learning in TUMO for a year. It's still fun to go there, because without it i wouldn't be making this website :)")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){t.show1=!t.show1}}},[i("v-icon",[t._v(t._s(t.show1?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}]},[i("v-divider"),i("v-card-text",{staticStyle:{color:"white"}},[i("v-row",{staticClass:"mx-12",attrs:{justify:"space-between",align:"center"}},[i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-facebook")])],1),i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-instagram")])],1),i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-twitter")])],1)],1)],1)],1)])],1)],1),i("v-col",{attrs:{cols:"12",lg:"4",md:"12",sm:"12"}},[i("v-card",{staticClass:"mx-auto overlay",attrs:{shaped:"",color:"#008DD1","max-width":"400"}},[i("v-img",{staticClass:"white--text align-end",attrs:{gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",height:"260px",src:a("9d5b"),"lazy-src":a("9d5b")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}])},[i("v-card-title",{staticStyle:{"font-family":"cursive"}},[t._v("Ani Avetisyan")])],1),i("v-card",{staticClass:"ma-7",attrs:{color:"#05aeff"}},[i("v-card-text",{staticStyle:{color:"white"}},[t._v("I'm Ani Avetisyan. I'm 14 years old. I've been living in Armenia since i was born. I've been learning in TUMO for 2 years. It's still fun to go there, because without it i wouldn't be making this website :)")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){t.show2=!t.show2}}},[i("v-icon",[t._v(t._s(t.show2?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}]},[i("v-divider"),i("v-card-text",{staticStyle:{color:"white"}},[i("v-row",{staticClass:"mx-12",attrs:{justify:"space-between",align:"center"}},[i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-facebook")])],1),i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-instagram")])],1),i("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v("mdi-twitter")])],1)],1)],1)],1)])],1)],1)],1),i("v-footer",{attrs:{dark:"",padless:""}},[i("v-card",{staticClass:"grey darken-2 white--text text-center",attrs:{flat:"",tile:""}},[i("v-card-text",t._l(t.icons,(function(e){return i("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[i("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),i("v-card-text",{staticClass:"white--text pt-0"},[t._v(" This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury. ")]),i("v-divider"),i("v-card-text",{staticClass:"white--text grey darken-3"},[t._v(" "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("TUMO WORKSHOP")])])],1)],1),i("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[i("v-icon",[t._v("mdi-arrow-up")])],1)],1)},ct=[],ut={name:"About",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-google-plus","mdi-linkedin","mdi-instagram"],show:!1,show1:!1,show2:!1,fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},dt=ut,mt=(a("e76e"),a("490a")),vt=Object(v["a"])(dt,lt,ct,!1,null,null,null),ht=vt.exports;p()(vt,{VBtn:f["a"],VCard:g["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VCol:b["a"],VDivider:J["a"],VExpandTransition:z["a"],VFooter:tt["a"],VIcon:O["a"],VImg:y["a"],VParallax:at["a"],VProgressCircular:mt["a"],VRow:_["a"],VSpacer:q["a"]}),rt()(vt,{Scroll:nt["b"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"grey darken-2 white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v(" This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury. ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text grey darken-3"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("TUMO WORKSHOP")])])],1)],1)],1)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-responsive"},[a("iframe",{attrs:{src:"https://www.google.com/maps/d/embed?mid=1LMt8faTipbwli79OXvEpeyX9e2sww7jM",width:"100%",height:"100%",allowfullscreen:""}})])}],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h2",[t._v("Search and add a pin")]),a("label",[a("gmap-autocomplete",{on:{place_changed:t.setPlace}}),a("button",{on:{click:t.addMarker}},[t._v("Add")])],1),a("br")]),a("br"),a("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,(function(e,i){return a("gmap-marker",{key:i,attrs:{position:e.position},on:{click:function(a){t.center=e.position}}})})),1)],1)},wt=[],bt={name:"GoogleMap",data:function(){return{center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))}}},xt=bt,yt=Object(v["a"])(xt,gt,wt,!1,null,null,null),_t=yt.exports,kt={name:"App",components:{GoogleMap:_t},data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-google-plus","mdi-linkedin","mdi-instagram"]}}},Ct=kt,Vt=(a("2f59"),Object(v["a"])(Ct,pt,ft,!1,null,null,null)),At=Vt.exports;p()(Vt,{VBtn:f["a"],VCard:g["a"],VCardText:w["c"],VDivider:J["a"],VFooter:tt["a"],VIcon:O["a"]});var St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{class:{"ma-0":t.$vuetify.breakpoint.smAndDown,"ma-12":t.$vuetify.breakpoint.mdAndUp},attrs:{outlined:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-container",[i("v-row",[i("v-col",{staticClass:"px-4",attrs:{cols:"12"}},[i("h2",[t._v("Contact Us")]),i("v-text-field",{staticClass:"my-6",attrs:{clearable:"",label:"First Name","aria-required":"",rules:[function(t){return!!t||"Name is required"}]},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}}),i("v-text-field",{staticClass:"my-6",attrs:{clearable:"",label:"Last Name","aria-required":"",rules:[function(t){return!!t||"Last Name is required"}]},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}}),i("v-text-field",{staticClass:"my-6",attrs:{"error-count":"3",clearable:"",type:"email",label:"E-mail","aria-required":"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-textarea",{attrs:{type:"subject",label:"Subject","aria-required":"",rules:[function(t){return!!t||"Subject is required"}]},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),i("v-btn",{attrs:{disabled:!t.valid,loading:t.loading,color:"success"},on:{click:function(e){t.loader="loading",t.alert=!t.alert}}},[t._v("Send the Message")]),i("v-alert",{staticClass:"my-2",attrs:{value:t.alert,color:"success",dark:"",border:"right",icon:"mdi-send",transition:"scale-transition",dismissible:""}},[t._v(" Your Message has been sent ")])],1)],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-img",{attrs:{"aspect-ratio":"1.77",height:"100%",src:a("dc05"),"lazy-src":a("dc05")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)]},proxy:!0}])})],1)],1)],1)],1)],1)},jt=[],Tt={data:function(){return{loader:null,loading:!1,alert:!1,show1:!1,firstname:null,lastname:null,password:null,email:null,email_confirm:null,valid:!0,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},computed:{emailConfirmationRules:function(){var t=this;return[function(){return t.email_confirm===t.email||"E-mail must match"},function(t){return!!t||"Confirmation E-mail is required"}]}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){return t[e]=!1}),3e3),this.loader=null}}},It=Tt,Ot=a("0798"),Mt=a("4bd4"),Rt=a("a844"),Pt=Object(v["a"])(It,St,jt,!1,null,null,null),$t=Pt.exports;p()(Pt,{VAlert:Ot["a"],VBtn:f["a"],VCard:g["a"],VCol:b["a"],VContainer:x["a"],VForm:Mt["a"],VImg:y["a"],VProgressCircular:mt["a"],VRow:_["a"],VTextField:E["a"],VTextarea:Rt["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.loading?a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"primary"}})],1)],1):a("div",[a("v-carousel",{attrs:{dark:"",width:"400","show-arrows-on-hover":"","hide-delimiters":"",continuous:"",cycle:"",interval:"10000"}},t._l(t.info.images,(function(e,i){return a("v-carousel-item",{key:i,attrs:{src:e,transition:"scroll-x-transition","reverse-transition":"scroll-x-reverse-transition"}},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",[a("h2",{staticClass:"display-3 white-text text-center"},[t._v(t._s(t.info.title))])])],1)],1)],1)})),1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h2",[t._v("Description")]),a("p",[t._v(" "+t._s(t.info.description)+" ")])])],1)],1)],1)},zt=[],qt={name:"Display",data:function(){return{info:null,loading:!0}},methods:{getInfo:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:this.$route.params.id},t.next=3,u.a.get("https://armenian-art.herokuapp.com/getInfo",{params:e});case 3:a=t.sent,this.info=a.data["info"],this.loading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.getInfo()}},Et=qt,Lt=(a("f20d"),Object(v["a"])(Et,Dt,zt,!1,null,"179b72aa",null)),Ut=Lt.exports;p()(Lt,{VCarousel:Z["a"],VCarouselItem:X["a"],VCol:b["a"],VContainer:x["a"],VProgressCircular:mt["a"],VRow:_["a"]});var Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card",{staticClass:"pa-8",attrs:{outlined:""}},[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("h2",[t._v("Submit a Piece of Art")]),a("v-text-field",{staticClass:"my-6",attrs:{clearable:"",label:"Title of the piece",outlined:"",rules:[function(t){return!!t||"Title is required"}]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{label:"Description",outlined:"",rules:[function(t){return!!t||"Description is required"}]},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-text-field",{attrs:{label:"Add links to images and click +",outlined:"",rules:t.existsLink,"append-outer-icon":"mdi-plus"},on:{"click:append-outer":t.addLink},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}}),a("v-list",t._l(t.images,(function(e){return a("v-list-item",{key:e},[a("p",[a("b",[t._v("URL: ")]),t._v(" "+t._s(e))])])})),1),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.postArt}},[t._v("Submit")])],1)],1)],1)],1)],1)},Nt=[],Ft={data:function(){return{images:[],item:null,title:null,description:null,valid:!0}},methods:{addLink:function(){this.images.push(this.item),this.item=null},postArt:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("https://armenian-art.herokuapp.com/postArt",{title:this.title,description:this.description,images:this.images});case 2:e=t.sent,a=e.data,this.$router.push("/display/".concat(a));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:{existsLink:function(){var t=this;return[function(){return t.images&&t.images.length>0||"Must provide at least 1 link"}]}}},Bt=Ft,Ht=Object(v["a"])(Bt,Yt,Nt,!1,null,null,null),Gt=Ht.exports;p()(Ht,{VBtn:f["a"],VCard:g["a"],VCol:b["a"],VContainer:x["a"],VForm:Mt["a"],VList:M["a"],VListItem:R["a"],VRow:_["a"],VTextField:E["a"],VTextarea:Rt["a"]}),i["a"].use(B["a"]);var Kt=new B["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:ht},{path:"/browse",name:"browse",component:At},{path:"/display/:id",name:"display",component:Ut},{path:"/contact",name:"contact",component:$t},{path:"/submit",name:"submit",component:Gt}]}),Wt=a("a7fe"),Zt=a.n(Wt),Xt=a("755e");i["a"].config.productionTip=!1,i["a"].use(Xt,{load:{key:"process.env.VUE_APP_GOOGLE_API_KEY",libraries:"places"}}),new i["a"]({vuetify:F,router:Kt,axios:u.a,VueAxios:Zt.a,el:"#app",components:{App:Y},template:"<App/>",render:function(t){return t(Y)}}).$mount("#app")},"5f7e":function(t,e,a){t.exports=a.p+"img/literature.73cdd4f7.jpg"},"69e8":function(t,e,a){t.exports=a.p+"img/music.3dfb225d.jpg"},"7f11":function(t,e,a){t.exports=a.p+"img/mountain.54332ebb.jpg"},"8a23":function(t,e,a){},"91b2":function(t,e,a){t.exports=a.p+"img/Gor.8d0d5dfb.jpg"},"955a":function(t,e,a){},"9d5b":function(t,e,a){t.exports=a.p+"img/Ani.ce353435.jpg"},c132:function(t,e,a){},cccb:function(t,e,a){"use strict";var i=a("4230"),r=a.n(i);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.59253f87.png"},dc05:function(t,e,a){t.exports=a.p+"img/contact.ed13dffe.jpg"},de59:function(t,e,a){t.exports=a.p+"img/hraparak.960fe6ef.jpg"},e76e:function(t,e,a){"use strict";var i=a("2912"),r=a.n(i);r.a},f20d:function(t,e,a){"use strict";var i=a("ff1f"),r=a.n(i);r.a},ff1f:function(t,e,a){},ffc3:function(t,e,a){t.exports=a.p+"img/cinema.c90539e0.jpg"}});
//# sourceMappingURL=app.238c0b8e.js.map