(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],d=0,v=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&v.push(o[n][0]),o[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[[s("v-card",[s("v-img",{attrs:{height:"190",src:a("8dda")}},[s("v-row",[s("v-col",{staticClass:"text-center white--text",attrs:{cols:"12",sm:"12"}},[s("h3",[t._v("DG Solutions")])])],1),s("v-btn",{attrs:{bottom:"",right:"",absolute:"",large:"",icon:""}},[s("v-switch",{attrs:{flat:"",inset:"",loading:"dark",dense:""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1),s("router-view"),s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":200,"offset-y":""},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}})],1),s("v-footer",{attrs:{fixed:"",dark:"",bottom:"",right:"",small:"",height:"28",color:"black d-flex white--text"}},[s("span",[t._v("© DG Solutions 2020")])])]],2)},r=[],n={name:"chat",props:{source:String},data:()=>({menu:!1}),methods:{onLogout(){this.$store.dispatch("SET_TOKEN",null)}}},i=n,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),v=a("8336"),p=a("b0af"),m=a("62ad"),h=a("553a"),f=a("adda"),g=a("e449"),b=a("0fd9"),w=a("b73d"),x=Object(l["a"])(i,o,r,!1,null,null,null),y=x.exports;u()(x,{VApp:d["a"],VBtn:v["a"],VCard:p["a"],VCol:m["a"],VFooter:h["a"],VImg:f["a"],VMenu:g["a"],VRow:b["a"],VSwitch:w["a"]});var k=a("2f62");s["a"].use(k["a"]);const _={state:{name:null,login:null,password:null},getters:{name:t=>t.name,login:t=>t.login,password:t=>t.password},mutations:{setName(t,e){t.name=e},setLogin(t,e){t.login=e},setPassword(t,e){t.password=e}}};let C="SET_TOKEN";const V={state:{token:""},mutations:{[C](t,e){t.token=e}}},$=new k["a"].Store({modules:{modlogin:_,modtoken:V}});var j=$,S=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{height:"400"}},[a("v-container",[a("v-col",{attrs:{cols:"12",sm:"4"}}),a("v-col",{attrs:{cols:"12",sm:"4"}}),a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{filled:"",autocomplete:"off",rules:[t.rules.required,t.rules.email],label:"Login","prepend-icon":"mdi-account"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),a("v-text-field",{staticClass:"input-group--focused",attrs:{autocomplete:"off",filled:"",label:"Senha",type:t.show1?"text":"password",rules:[t.rules.required],name:"input-10-2","prepend-icon":"mdi-lock","append-icon":t.show1?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"4"}}),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[a("router-link",{attrs:{to:t.rota}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"primary"},on:{click:function(e){t.validate(),t.validateLogin()}}},[t._v("Login")])],1),a("router-link",{attrs:{to:"cadastro"}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"green"}},[t._v("Criar Conta")])],1)],1)],1)],1),a("v-snackbar",{staticClass:"text-center ma-2",attrs:{color:"red",absolute:"",top:"","multi-line":"",app:"",vertical:"",tag:"","hide-details":"",text:"",shaped:"",elevation:"24"},model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}},[t._v(" "+t._s(t.print)+" ")])],1)},O=[];const T=function(t){j.dispatch("SET_TOKEN",t)},E=function(){return j.state.auth.token};var q={setToken:T,getToken:E},L={props:{},data:()=>({print:"Login ou Senha Incorreto!  Tente novamente.",rota:"",valid:!0,bar:!1,show1:!1,login:null,password:null,rules:{required:t=>!!t||"Required.",min:t=>t.length>=8||"Min 8 characters",counter:t=>t.length<=20||"Max 20 characters",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}),methods:{validateLogin(){this.$refs.form.validate()&&this.login==this.$store.state.modlogin.login&&this.password==this.$store.state.modlogin.password&&(this.rota="chat")},authService(){let t="a23dd343...sde343231";q.setToken(t),t=q.getToken()},validate(){this.bar=!0}}},P=L,I=a("a523"),N=a("4bd4"),B=a("2db4"),z=a("8654"),D=Object(l["a"])(P,M,O,!1,null,null,null),F=D.exports;u()(D,{VBtn:v["a"],VCard:p["a"],VCol:m["a"],VContainer:I["a"],VForm:N["a"],VRow:b["a"],VSnackbar:B["a"],VTextField:z["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{height:"400"}},[a("v-form",[a("v-container",[a("v-row",{attrs:{justify:"space-around"}},[a("v-btn",{staticClass:"d-flex justify-center",attrs:{fab:"",dark:"",width:"26",height:"26",color:"primary"},on:{click:function(e){return t.voltar()}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left")])],1)],1),a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{filled:"",label:"Nome",clearable:"",rules:[t.rules.required]},model:{value:t.vname,callback:function(e){t.vname=e},expression:"vname"}}),a("v-text-field",{attrs:{filled:"",autocomplete:"off",rules:[t.rules.required,t.rules.email],label:"E-mail/Login",clearable:""},model:{value:t.vlogin,callback:function(e){t.vlogin=e},expression:"vlogin"}}),a("v-text-field",{attrs:{autocomplete:"off",filled:"",rules:[t.rules.required],type:t.show1?"text":"password",label:"password","append-icon":t.show1?"mdi-eye":"mdi-eye-off",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.vpassword,callback:function(e){t.vpassword=e},expression:"vpassword"}})],1),a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{disabled:!t.valid,dark:"",color:"green"},on:{click:t.validate}},[t._v("Cadastrar")]),a("v-snackbar",{staticClass:"text-center ma-2",attrs:{color:"green",absolute:"",top:"","multi-line":"",app:"",vertical:"",tag:"",outlined:"","hide-details":"",text:"",shaped:"",elevation:"24"},model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}},[t._v(" "+t._s(t.print)+" ")])],1)],1)],1)],1)],1)],1)},A=[],Z=a("bc3a"),H=a.n(Z),K={name:"cadastro",components:{},props:{},data:()=>({vlogin:null,vpassword:null,vname:null,valid:!0,show1:!1,bar:!1,print:"Sucesso no cadastro! Seja muito bem-vindo!.",timeout:2e3,rules:{required:t=>!!t||"Required.",min:t=>t.length>=8||"Min 8 characters",counter:t=>t.length<=20||"Max 20 characters",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}),computed:{...Object(k["c"])(["name","login","password"]),...Object(k["b"])("name","login","password"),name:{get(){return this.$store.state.name},set(t){this.$store.commit("setName",t)}},login:{get(){return this.$store.state.login},set(t){this.$store.commit("setLogin",t)}},password:{get(){return this.$store.state.password},set(t){this.$store.commit("setPassword",t)}}},methods:{registra(){H.a.post("http://localhost:3000/cadastro",{nome:this.nome,login:this.login,password:this.password}).then((function(){}))},voltar(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},validate(){this.$refs.form.validate()&&(this.name=this.vname,this.login=this.vlogin,this.password=this.vpassword,this.bar=!0,setTimeout(()=>{this.voltar()},1600))}}},G=K,J=a("132d"),X=Object(l["a"])(G,R,A,!1,null,null,null),Q=X.exports;u()(X,{VBtn:v["a"],VCard:p["a"],VCol:m["a"],VContainer:I["a"],VForm:N["a"],VIcon:J["a"],VRow:b["a"],VSnackbar:B["a"],VTextField:z["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{height:"400"}},[a("v-container",[a("div",{staticClass:"overflow-hidden"},[a("v-btn",{attrs:{color:"primary",width:"28",height:"28",fab:"",dark:"",absolute:"",right:""},on:{click:function(e){t.active=!t.active}}},[a("v-icon",[t._v("mdi-account-circle")])],1),a("v-bottom-navigation",{attrs:{"input-value":t.active,fixed:"",right:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("v-card",{staticClass:"mx-auto pa-4 subtitle-2 text-center ",attrs:{autocomplete:"off","solo-inverted":"",height:"200",width:"500"}},[a("h4",[a("v-btn",{attrs:{disabled:"",width:"100"}},[a("v-card",{staticClass:"d-flex justify-center",attrs:{height:"12"}},[t._v(t._s(t.connections+1)+" connections")])],1)],1)])],1)],1),a("v-row",{attrs:{justify:"space-around"}},[a("v-btn",{staticClass:"d-flex justify-center",attrs:{fab:"",dark:"",width:"26",height:"26",color:"primary",left:"",absolute:""},on:{click:function(e){return t.voltar()}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left")])],1),a("v-btn",{staticClass:"d-flex flex-row-reverse",attrs:{fab:"",dark:"",small:"",color:"primary",width:"22",height:"22"},on:{click:t.limparBox}},[t._v("X")])],1),a("v-row",[a("v-col",{attrs:{cols:"12",justify:"space-around"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-card",{staticClass:"mx-auto pa-4 message_card subtitle-2 text-center ",attrs:{autocomplete:"off","solo-inverted":"",elevation:s?24:6,height:"220",width:"520"}},[a("v-card-text",{staticClass:"mx-auto pa-4 message_card subtitle-2"},[a("div",{staticClass:"col-lg-8 offset-lg-2"},[t.ready?a("div",t._l(t.info,(function(e,s){return a("p",{key:s},[t._v(" "+t._s(e.username)+" "+t._s(e.type)+" ")])})),0):t._e(),a("ul",{staticClass:"list-group list-group-flush text-right"},[t.typing?a("small",{staticClass:"text-white"},[t._v(t._s(t.typing)+" is typing")]):t._e(),t._l(t.messages,(function(e,s){return a("div",{key:s,staticClass:"list-group-item"},[a("v-card",{staticClass:"col-lg-11 offset-lg-12"},[a("span",{class:{"float-left ":1===t.message.type}},[t._v(" "+t._s(e.message)+" "),a("small",{staticClass:"primary--text"},[t._v(":"+t._s(e.user))])])])],1)}))],2)])])],1)]}}])}),a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-col",{attrs:{cols:"12",sm:"5"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[a("v-text-field",{attrs:{autocomplete:"off","append-outer-icon":(t.newMessage,"mdi-send"),filled:"","clear-icon":"mdi-close-circle",clearable:"",label:"Digite uma mensagem...",type:"text",height:"50",rounded:""},on:{"click:append-outer":t.send},model:{value:t.newMessage,callback:function(e){t.newMessage=e},expression:"newMessage"}})],1)])],1)],1)],1)],1)],1)},W=[],Y={props:["userID"],name:"chat",data:()=>({active:!0,contact:!1,isConnected:!1,typing:!1,ready:!1,username:"",message:"",socketMessage:"",newMessage:"",print:[],messages:[],info:[],value:1,connections:0}),methods:{limparBox(){this.messages=[]},voltar(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},created(){let{userID:t}=this.$route.params;t in this.$store.state.directMessages&&this.$store.dispatch("clearNotifications",t)},send(){""==!this.newMessage&&(this.username=this.$store.state.modlogin.name,this.messages.push({message:this.newMessage,type:0,user:this.username}),this.newMessage="",this.newMessage=null)}},updated(){var t=document.querySelector(".message_card");t.scrollTop=document.body.offsetHeight*window.innerHeight,window.scrollTo(0,t)}},tt=Y,et=a("b81c"),at=a("99d9"),st=a("ce87"),ot=Object(l["a"])(tt,U,W,!1,null,null,null),rt=ot.exports;u()(ot,{VBottomNavigation:et["a"],VBtn:v["a"],VCard:p["a"],VCardText:at["a"],VCol:m["a"],VContainer:I["a"],VHover:st["a"],VIcon:J["a"],VRow:b["a"],VTextField:z["a"]}),s["a"].use(S["a"]);var nt=new S["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:F},{path:"/cadastro",name:"cadastro",component:Q},{path:"/chat",name:"chat",component:rt}]}),it=a("f309");s["a"].use(it["a"]);var lt=new it["a"]({icons:{iconfont:"mdi"}});new s["a"]({axios:H.a,vuetify:lt,router:nt,store:j,render:t=>t(y)}).$mount("#app")},"8dda":function(t,e,a){t.exports=a.p+"img/dg.ff5770b9.jpg"}});
//# sourceMappingURL=app.a5a7c2c7.js.map