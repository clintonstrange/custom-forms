(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),a=n(67),r=n.n(a),i=(n(112),n(45)),l=n(12),o=n(23),d=n(31),j=n(107),h=function(e,t){return t.type,e};var b,m,u,x=n(1),O=Object(c.createContext)(),v=O.Provider,p=function(e){e.value;var t,n=Object(j.a)(e,["value"]),s=(t={},Object(c.useReducer)(h,t)),a=Object(d.a)(s,2),r=a[0],i=a[1];return Object(x.jsx)(v,Object(o.a)({value:[r,i]},n))},g=n(169),f=n(106),w=(n(114),n(115),n(94)),y=n(95),N=n(68),k=new(function(){function e(){Object(w.a)(this,e)}return Object(y.a)(e,[{key:"getProfile",value:function(){return Object(N.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(N.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/landing")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),S=n(39),C=n(30),$=n.n(C),D=($()(b||(b=Object(S.a)(["\n  {\n    user {\n      username\n      email\n    }\n  }\n"]))),$()(m||(m=Object(S.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      role\n    }\n  }\n"])))),I=$()(u||(u=Object(S.a)(["\n  {\n    controls {\n      _id\n      documentor\n      screenNum {\n        _id\n        symptoms\n        contact\n        positiveTest\n        travel\n      }\n      credentials\n    }\n  }\n"])));var T=function(){var e,t=k.loggedIn(),n=Object(g.useQuery)(D).data;return Object(x.jsx)("div",{children:t&&n?Object(x.jsxs)("nav",{className:"nav-wrapper blue darken-1",children:[Object(x.jsx)("a",{href:"/",className:"brand-logo left margin-left",children:"Whatever Works 2.0"}),Object(x.jsxs)("ul",{className:"flex-row right",children:[Object(x.jsx)("li",{className:"mx-1",children:Object(x.jsx)("a",{href:"/",onClick:function(){return k.logout()},children:"Logout"})}),Object(x.jsx)("li",{className:"margin-right",children:"DATA RENDERING LINK HERE"}),"admin"===(null===n||void 0===n||null===(e=n.me)||void 0===e?void 0:e.role)?Object(x.jsx)("li",{className:"mx-1",children:Object(x.jsx)("a",{href:"/signup",children:"Create Account"})}):null]})]}):Object(x.jsxs)("nav",{className:"nav-wrapper blue darken-1",children:[Object(x.jsx)("a",{href:"/",className:"brand-logo left margin-left",children:"Whatever Works 2.0"}),Object(x.jsx)("ul",{className:"flex-row right",children:Object(x.jsx)("li",{className:"mx-1",children:Object(x.jsx)(i.b,{to:"/login",children:"Login"})})})]})})};var W=function(){return k.loggedIn(),Object(g.useQuery)(D).data,Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"row body-display",children:[Object(x.jsx)("div",{className:"col s12 m4",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)("div",{className:"card-image",children:[Object(x.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/000/547/940/original/data-analysis-illustration-vector.jpg",alt:""}),Object(x.jsx)("span",{className:"card-title",children:"Card Title"})]}),Object(x.jsx)("div",{className:"card-content",children:Object(x.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."})}),Object(x.jsx)("div",{className:"card-action",children:Object(x.jsx)("a",{href:"/",children:"This is a link"})})]})}),Object(x.jsx)("div",{className:"col s12 m4",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)("div",{className:"card-image",children:[Object(x.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/000/540/087/original/vector-analysis-word-lettering-illustration.jpg",alt:""}),Object(x.jsx)("span",{className:"card-title",children:"Card Title"})]}),Object(x.jsx)("div",{className:"card-content",children:Object(x.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."})}),Object(x.jsx)("div",{className:"card-action",children:Object(x.jsx)("a",{href:"/",children:"This is a link"})})]})}),Object(x.jsx)("div",{className:"col s12 m4",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)("div",{className:"card-image",children:[Object(x.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/000/547/754/non_2x/data-analysis-line-icons-illustration-vector.jpg",alt:""}),Object(x.jsx)("span",{className:"card-title",children:"Card Title"})]}),Object(x.jsx)("div",{className:"card-content",children:Object(x.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."})}),Object(x.jsx)("div",{className:"card-action",children:Object(x.jsx)("a",{href:"/",children:"This is a link"})})]})})]})})};var F,E,A,L,_=function(){var e=k.loggedIn(),t=Object(g.useQuery)(D).data;return Object(x.jsx)("div",{children:e&&t?Object(x.jsxs)("footer",{className:"page-footer blue darken-1",children:[Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col l6 s12",children:[Object(x.jsx)("h5",{className:"white-text",children:"Footer Content"}),Object(x.jsx)("p",{className:"grey-text text-lighten-4",children:"You can use rows and columns here to organize your footer content."})]}),Object(x.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(x.jsx)("h5",{className:"white-text",children:"Links"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"/landing",children:"Forms"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"View Data"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Contact Us"})})]})]})]})}),Object(x.jsx)("div",{className:"footer-copyright",children:Object(x.jsx)("div",{className:"container",children:"\xa9 2021 Whatever Works 2.0"})})]}):Object(x.jsxs)("footer",{className:"page-footer blue darken-1",children:[Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col l6 s12",children:[Object(x.jsx)("h5",{className:"white-text",children:"Footer Content"}),Object(x.jsx)("p",{className:"grey-text text-lighten-4",children:"You can use rows and columns here to organize your footer content."})]}),Object(x.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(x.jsx)("h5",{className:"white-text",children:"Links"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"grey-text text-lighten-3",href:"/login",children:"Login"})}),Object(x.jsx)("li",{children:Object(x.jsx)("button",{id:"install_button",hidden:!0,children:"Install"})})]})]})]})}),Object(x.jsx)("div",{className:"footer-copyright",children:Object(x.jsx)("div",{className:"container",children:"\xa9 2021 Whatever Works 2.0"})})]})})},P=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(W,{}),Object(x.jsx)(_,{})]})},U=n(40),M=n(38),Y=n.n(M),R=n(46),z=$()(F||(F=Object(S.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        role\n        email\n      }\n    }\n  }\n"]))),H=$()(E||(E=Object(S.a)(["\n  mutation addUser(\n    $username: String!\n    $email: String!\n    $role: String!\n    $password: String!\n  ) {\n    addUser(\n      username: $username\n      email: $email\n      role: $role\n      password: $password\n    ) {\n      token\n      user {\n        _id\n        username\n        role\n        email\n      }\n    }\n  }\n"]))),q=$()(A||(A=Object(S.a)(["\n  mutation addScreening(\n    $control: ID!\n    $symptoms: String!\n    $contact: String!\n    $positiveTest: String!\n    $travel: String!\n    $screenDate: String!\n  ) {\n    addScreening(\n      control: $control\n      symptoms: $symptoms\n      contact: $contact\n      positiveTest: $positiveTest\n      travel: $travel\n      screenDate: $screenDate\n    ) {\n      control {\n        _id\n        documentor\n        credentials\n      }\n      symptoms\n      contact\n      positiveTest\n      travel\n      screenDate\n    }\n  }\n"])));$()(L||(L=Object(S.a)(["\n  mutation addControl(\n    $documentor: String!\n    $screenNum: Int!\n    $credentials: String!\n  ) {\n    Control(\n      documentor: $documentor\n      screenNum: $screenNum\n      credentials: $credentials\n    )\n  }\n"])));var Q=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(d.a)(t,2),s=n[0],a=n[1],r=Object(g.useMutation)(z),i=Object(d.a)(r,2),l=i[0],j=i[1].error,h=function(){var e=Object(R.a)(Y.a.mark((function e(t){var n,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:s.email,password:s.password}});case 4:n=e.sent,c=n.data.login.token,k.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;a(Object(o.a)(Object(o.a)({},s),{},Object(U.a)({},n,c)))};return Object(x.jsxs)("div",{className:"my-1",children:[Object(x.jsx)("div",{children:Object(x.jsxs)("div",{id:"card-custom",children:[Object(x.jsx)("h5",{className:"center align",children:"Welcome to whatever works!"}),Object(x.jsxs)("form",{onSubmit:h,children:[Object(x.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(x.jsx)("input",{name:"email",type:"email",id:"email",onChange:b})]}),Object(x.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(x.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(x.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(x.jsx)("div",{children:Object(x.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(x.jsx)("div",{className:"flex-row center-align",children:Object(x.jsx)("button",{type:"submit",className:"waves-effect waves-light btn blue darken-1 login-btn",children:Object(x.jsx)("i",{className:"material-icons center",children:"send"})})})]})]})}),Object(x.jsx)("div",{className:"login-footer",children:Object(x.jsx)(_,{})})]})};var B=function(e){var t=e.children;return Object(x.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},G=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(B,{children:[Object(x.jsx)("h1",{children:"404 Page Not Found"}),Object(x.jsx)("h1",{children:Object(x.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})};var J=function(e){var t=Object(c.useState)({email:"",username:"",role:"Admin",password:""}),n=Object(d.a)(t,2),s=n[0],a=n[1],r=Object(g.useMutation)(H),l=Object(d.a)(r,1)[0],j=function(){var e=Object(R.a)(Y.a.mark((function e(t){var n,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:s.email,password:s.password,role:s.role,username:s.username}});case 3:n=e.sent,c=n.data.addUser.token,k.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,n=t.name,c=t.value;a(Object(o.a)(Object(o.a)({},s),{},Object(U.a)({},n,c)))};return Object(x.jsxs)("div",{className:"container my-1",children:[Object(x.jsx)(i.b,{to:"/",children:"\u2190 Go to Homepage"}),Object(x.jsx)("h2",{children:"Create Account"}),Object(x.jsxs)("form",{onSubmit:j,children:[Object(x.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(x.jsx)("input",{placeholder:"Username",name:"username",type:"username",id:"username",onChange:h})]}),Object(x.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(x.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:h})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"role",children:"Select User Authorizaion"}),Object(x.jsxs)("select",{className:"browser-default",name:"role",type:"role",id:"role",onChange:h,children:[Object(x.jsx)("option",{value:"admin",children:"Admin"}),Object(x.jsx)("option",{value:"read/write",children:"Read/Write"}),Object(x.jsx)("option",{value:"readOnly",children:"Read Only"})]})]}),Object(x.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(x.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(x.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:h})]}),Object(x.jsx)("div",{className:"flex-row flex-end",children:Object(x.jsx)("button",{type:"submit",children:"Submit"})})]})]})},V=n(100),K=n(101),X=n.n(K),Z=n(102),ee=n.n(Z),te=function(){var e=Object(c.useState)({control:"",symptoms:"noSymptom",contact:"no",positiveTest:"no",travel:"no",screenDate:""}),t=Object(d.a)(e,2),n=t[0],s=t[1];console.log(n);var a=Object(g.useMutation)(q),r=Object(d.a)(a,1)[0],i=Object(g.useQuery)(I).data,l=function(){var e=Object(R.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,r({variables:{control:n.control,symptoms:n.symptoms,contact:n.contact,positiveTest:n.positiveTest,travel:n.travel,screenDate:n.screenDate}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,a=t.value;s(Object(o.a)(Object(o.a)({},n),{},Object(U.a)({},c,a)))};return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".datepicker");X.a.DatePicker.getInstance(e,{onSelect:function(e){console.log("onSelect: "+e),s(Object(o.a)(Object(o.a)({},n),{},{screenDate:e}))}})})),Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:l,children:[Object(x.jsxs)("div",{className:"form-margin",children:[Object(x.jsx)("div",{children:Object(x.jsx)(V.DatePicker,{label:"Screening Date",name:"screenDate",id:"screenDate",type:"text",className:"datepicker",value:n.screenDate,onChange:function(e){j({target:{id:"screenDate",name:"screenDate",value:ee()(e).format("MMMM DD, YYYY")}})}})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"control",children:"Please select Control for this Screen."}),Object(x.jsxs)("select",{className:"browser-default",name:"control",type:"select",id:"control",onChange:j,children:[Object(x.jsx)("option",{disabled:!0,selected:!0,children:"Select Control"}),i?i.controls.map((function(e){return Object(x.jsxs)("option",{value:e._id,children:[e.documentor," (",e.credentials,") "]},e._id)})):Object(x.jsx)("option",{children:"Loading"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"symptoms",children:"Do you have any of the following symptoms?"}),Object(x.jsxs)("select",{className:"browser-default",name:"symptoms",type:"select",id:"symptoms",onChange:j,children:[Object(x.jsx)("option",{value:"noSymptom",children:"No Symptoms"}),Object(x.jsx)("option",{value:"cough",children:"New and persistent cough"}),Object(x.jsx)("option",{value:"breath",children:"Shortness of breath or any difficutlty breathing"}),Object(x.jsx)("option",{value:"fever",children:"Fever"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"contact",children:"Have you been in contact with anyone in the last 14 days who is experiencing these symptoms?"}),Object(x.jsxs)("select",{className:"browser-default",name:"contact",type:"select",id:"contact",onChange:j,children:[Object(x.jsx)("option",{value:"no",children:"No"}),Object(x.jsx)("option",{value:"yes",children:"Yes"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"positiveTest",children:"Have you been in contact with anyone who has since tested positive for Covid-19?"}),Object(x.jsxs)("select",{className:"browser-default",name:"positiveTest",type:"select",id:"positiveTest",onChange:j,children:[Object(x.jsx)("option",{value:"no",children:"No"}),Object(x.jsx)("option",{value:"yes",children:"Yes"}),Object(x.jsx)("option",{value:"unsure",children:"Unsure"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"travel",children:"Have you traveled abroad in the last 1-2 months?"}),Object(x.jsxs)("select",{className:"browser-default",name:"travel",type:"select",id:"travel",onChange:j,children:[Object(x.jsx)("option",{value:"no",children:"No"}),Object(x.jsx)("option",{value:"yes",children:"Yes"})]})]})]}),Object(x.jsx)("div",{className:"flex-row flex-end center-align padding-top",children:Object(x.jsx)("button",{type:"submit",className:"waves-effect waves-light btn blue darken-1",children:"Submit"})})]})})},ne=function(){var e,t,n=k.loggedIn(),c=Object(g.useQuery)(D).data;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"form-container",children:n&&c?Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"center-align",children:"COVID Screening Form"}),Object(x.jsx)("div",{children:"admin"===(null===c||void 0===c||null===(e=c.me)||void 0===e?void 0:e.role)||"read/write"===(null===c||void 0===c||null===(t=c.me)||void 0===t?void 0:t.role)?Object(x.jsx)("div",{children:Object(x.jsx)(te,{})}):Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"if logged in and user does not have admin or read/write access, default to read only access"})})})]}):Object(x.jsx)("h3",{children:"Please Login to Access your Forms!"})}),Object(x.jsx)("div",{className:"form-footer",children:Object(x.jsx)(_,{})})]})},ce=new f.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var se,ae=function(){return Object(x.jsx)(g.ApolloProvider,{client:ce,children:Object(x.jsx)(i.a,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(p,{children:[Object(x.jsx)(T,{}),Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:P}),Object(x.jsx)(l.a,{exact:!0,path:"/login",component:Q}),Object(x.jsx)(l.a,{exact:!0,path:"/signup",component:J}),Object(x.jsx)(l.a,{exact:!0,path:"/landing",component:ne}),Object(x.jsx)(l.a,{component:G})]})]})})})})},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var le=document.getElementById("install_button");function oe(){se.prompt(),le.disabled=!0,se.userChoice.then((function(e){"accepted"===e.outcome?(console.log("PWA setup accepted"),le.hidden=!0):console.log("PWA setup rejected"),le.disabled=!1,se=null}))}r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(ae,{})}),document.getElementById("root")),window.addEventListener("beforeinstallprompt",(function(e){console.log("beforeinstallprompt fired"),e.preventDefault(),se=e,le.hidden=!1,le.addEventListener("click",oe)})),window.addEventListener("appinstalled",(function(e){console.log("appinstalled fired",e)})),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ie(t,e)}))}}()}},[[167,1,2]]]);
//# sourceMappingURL=main.8f609517.chunk.js.map