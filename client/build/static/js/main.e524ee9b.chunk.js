(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),r=n(69),a=n.n(r),i=(n(115),n(43)),o=n(12),l=n(16),d=n(24),j=n(110),b=n(75),h="UPDATE_CONTROL",u="UPDATE_SCREENINGS",m=function(e,t){switch(t.type){case h:return Object(l.a)(Object(l.a)({},e),{},{control:Object(b.a)(t.control)});case u:return Object(l.a)(Object(l.a)({},e),{},{screenings:Object(b.a)(t.screenings.screenings)});default:return e}};var O,x,v,p,g=n(1),f=Object(c.createContext)(),w=f.Provider,y=function(e){e.value;var t,n=Object(j.a)(e,["value"]),s=(t={control:[],screenings:[]},Object(c.useReducer)(m,t)),r=Object(d.a)(s,2),a=r[0],i=r[1];return Object(g.jsx)(w,Object(l.a)({value:[a,i]},n))},N=n(172),k=n(109),S=(n(117),n(118),n(97)),C=n(98),D=n(70),I=new(function(){function e(){Object(S.a)(this,e)}return Object(C.a)(e,[{key:"getProfile",value:function(){return Object(D.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(D.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/landing")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),T=n(32),$=n(29),_=n.n($),E=(_()(O||(O=Object(T.a)(["\n  {\n    user {\n      username\n      email\n    }\n  }\n"]))),_()(x||(x=Object(T.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      role\n    }\n  }\n"])))),P=_()(v||(v=Object(T.a)(["\n  {\n    controls {\n      _id\n      documentor\n      credentials\n    }\n  }\n"]))),W=_()(p||(p=Object(T.a)(["\n  {\n    screenings {\n      _id\n      control {\n        _id\n        documentor\n        credentials\n      }\n      symptoms\n      contact\n      positiveTest\n      travel\n      screenDate\n      createdAt\n    }\n  }\n"])));var F=function(){var e=I.loggedIn(),t=Object(N.useQuery)(E).data;return Object(g.jsx)("div",{children:e&&t?Object(g.jsxs)("nav",{className:"nav-wrapper blue darken-1",children:[Object(g.jsx)("a",{href:"/",className:"brand-logo left margin-left",children:"Whatever Works 2.0"}),Object(g.jsxs)("ul",{className:"flex-row right",children:[Object(g.jsx)("li",{className:"mx-1",children:Object(g.jsx)("a",{href:"/",onClick:function(){return I.logout()},children:"Logout"})}),Object(g.jsx)("li",{children:Object(g.jsx)(i.b,{to:"/viewdata",children:"View Data"})}),"admin"===t.me.role?Object(g.jsx)("li",{className:"mx-1",children:Object(g.jsx)("a",{href:"/signup",children:"Create Account"})}):null]})]}):Object(g.jsxs)("nav",{className:"nav-wrapper blue darken-1",children:[Object(g.jsx)("a",{href:"/",className:"brand-logo left margin-left",children:"Whatever Works 2.0"}),Object(g.jsx)("ul",{className:"flex-row right",children:Object(g.jsx)("li",{className:"mx-1",children:Object(g.jsx)(i.b,{to:"/login",children:"Login"})})})]})})};var A=function(){return I.loggedIn(),Object(N.useQuery)(E).data,Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"row body-display",children:[Object(g.jsx)("div",{className:"col s12 m4",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-image",children:[Object(g.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/000/547/940/original/data-analysis-illustration-vector.jpg",alt:""}),Object(g.jsx)("span",{className:"card-title",children:"Card Title"})]}),Object(g.jsx)("div",{className:"card-content",children:Object(g.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."})}),Object(g.jsx)("div",{className:"card-action",children:Object(g.jsx)("a",{href:"/",children:"This is a link"})})]})}),Object(g.jsx)("div",{className:"col s12 m4",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-image",children:[Object(g.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/000/540/087/original/vector-analysis-word-lettering-illustration.jpg",alt:""}),Object(g.jsx)("span",{className:"card-title",children:"Card Title"})]}),Object(g.jsx)("div",{className:"card-content",children:Object(g.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."})}),Object(g.jsx)("div",{className:"card-action",children:Object(g.jsx)("a",{href:"/",children:"This is a link"})})]})}),Object(g.jsx)("div",{className:"col s12 m4",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsxs)("div",{className:"card-image",children:[Object(g.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/000/547/754/non_2x/data-analysis-line-icons-illustration-vector.jpg",alt:""}),Object(g.jsx)("span",{className:"card-title",children:"Card Title"})]}),Object(g.jsx)("div",{className:"card-content",children:Object(g.jsx)("p",{children:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."})}),Object(g.jsx)("div",{className:"card-action",children:Object(g.jsx)("a",{href:"/",children:"This is a link"})})]})})]})})};var L,U,M,Y,Q=function(){var e=I.loggedIn(),t=Object(N.useQuery)(E).data;return Object(g.jsx)("div",{children:e&&t?Object(g.jsxs)("footer",{className:"page-footer blue darken-1",children:[Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col l6 s12",children:[Object(g.jsx)("h5",{className:"white-text",children:"Footer Content"}),Object(g.jsx)("p",{className:"grey-text text-lighten-4",children:"You can use rows and columns here to organize your footer content."})]}),Object(g.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(g.jsx)("h5",{className:"white-text",children:"Links"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"grey-text text-lighten-3",href:"/",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"grey-text text-lighten-3",href:"/landing",children:"Forms"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"View Data"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"grey-text text-lighten-3",href:"#!",children:"Contact Us"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{id:"install_button",hidden:!0,children:"Install"})})]})]})]})}),Object(g.jsx)("div",{className:"footer-copyright",children:Object(g.jsx)("div",{className:"container",children:"\xa9 2021 Whatever Works 2.0"})})]}):Object(g.jsxs)("footer",{className:"page-footer blue darken-1",children:[Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col l6 s12",children:[Object(g.jsx)("h5",{className:"white-text",children:"Footer Content"}),Object(g.jsx)("p",{className:"grey-text text-lighten-4",children:"You can use rows and columns here to organize your footer content."})]}),Object(g.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(g.jsx)("h5",{className:"white-text",children:"Links"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"grey-text text-lighten-3",href:"/",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{className:"grey-text text-lighten-3",href:"/login",children:"Login"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{id:"install_button",hidden:!0,children:"Install"})})]})]})]})}),Object(g.jsx)("div",{className:"footer-copyright",children:Object(g.jsx)("div",{className:"container",children:"\xa9 2021 Whatever Works 2.0"})})]})})},z=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(A,{}),Object(g.jsx)(Q,{})]})},H=n(41),R=n(39),q=n.n(R),B=n(46),V=_()(L||(L=Object(T.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        role\n        email\n      }\n    }\n  }\n"]))),G=_()(U||(U=Object(T.a)(["\n  mutation addUser(\n    $username: String!\n    $email: String!\n    $role: String!\n    $password: String!\n  ) {\n    addUser(\n      username: $username\n      email: $email\n      role: $role\n      password: $password\n    ) {\n      token\n      user {\n        _id\n        username\n        role\n        email\n      }\n    }\n  }\n"]))),J=_()(M||(M=Object(T.a)(["\n  mutation addScreening(\n    $control: ID!\n    $symptoms: String!\n    $contact: String!\n    $positiveTest: String!\n    $travel: String!\n    $screenDate: String!\n  ) {\n    addScreening(\n      control: $control\n      symptoms: $symptoms\n      contact: $contact\n      positiveTest: $positiveTest\n      travel: $travel\n      screenDate: $screenDate\n    ) {\n      control {\n        _id\n        documentor\n        credentials\n      }\n      symptoms\n      contact\n      positiveTest\n      travel\n      screenDate\n    }\n  }\n"])));_()(Y||(Y=Object(T.a)(["\n  mutation addControl(\n    $documentor: String!\n    $screenNum: Int!\n    $credentials: String!\n  ) {\n    Control(\n      documentor: $documentor\n      screenNum: $screenNum\n      credentials: $credentials\n    )\n  }\n"])));var K=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(d.a)(t,2),s=n[0],r=n[1],a=Object(N.useMutation)(V),i=Object(d.a)(a,2),o=i[0],j=i[1].error,b=function(){var e=Object(B.a)(q.a.mark((function e(t){var n,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{email:s.email,password:s.password}});case 4:n=e.sent,c=n.data.login.token,I.login(c),console.log(n),console.log(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,n=t.name,c=t.value;r(Object(l.a)(Object(l.a)({},s),{},Object(H.a)({},n,c)))};return Object(g.jsxs)("div",{className:"my-1",children:[Object(g.jsx)("div",{children:Object(g.jsxs)("div",{id:"card-custom",children:[Object(g.jsx)("h5",{className:"center align",children:"Welcome to whatever works!"}),Object(g.jsxs)("form",{onSubmit:b,children:[Object(g.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(g.jsx)("input",{name:"email",type:"email",id:"email",onChange:h})]}),Object(g.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(g.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(g.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:h})]}),j?Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(g.jsx)("div",{className:"flex-row center-align",children:Object(g.jsx)("button",{type:"submit",className:"waves-effect waves-light btn blue darken-1 login-btn",children:Object(g.jsx)("i",{className:"material-icons center",children:"send"})})})]})]})}),Object(g.jsx)("div",{className:"login-footer",children:Object(g.jsx)(Q,{})})]})};var X=function(e){var t=e.children;return Object(g.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Z=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(X,{children:[Object(g.jsx)("h1",{children:"404 Page Not Found"}),Object(g.jsx)("h1",{children:Object(g.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})};var ee=function(e){var t=Object(c.useState)({email:"",username:"",role:"Admin",password:""}),n=Object(d.a)(t,2),s=n[0],r=n[1],a=Object(N.useMutation)(G),o=Object(d.a)(a,1)[0],j=function(){var e=Object(B.a)(q.a.mark((function e(t){var n,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o({variables:{email:s.email,password:s.password,role:s.role,username:s.username}});case 3:n=e.sent,c=n.data.addUser.token,I.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;r(Object(l.a)(Object(l.a)({},s),{},Object(H.a)({},n,c)))};return Object(g.jsxs)("div",{className:"container my-1",children:[Object(g.jsx)(i.b,{to:"/",children:"\u2190 Go to Homepage"}),Object(g.jsx)("h2",{children:"Create Account"}),Object(g.jsxs)("form",{onSubmit:j,children:[Object(g.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(g.jsx)("input",{placeholder:"Username",name:"username",type:"username",id:"username",onChange:b})]}),Object(g.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(g.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"role",children:"Select User Authorizaion"}),Object(g.jsxs)("select",{className:"browser-default",name:"role",type:"role",id:"role",onChange:b,children:[Object(g.jsx)("option",{value:"admin",children:"Admin"}),Object(g.jsx)("option",{value:"read/write",children:"Read/Write"}),Object(g.jsx)("option",{value:"readOnly",children:"Read Only"})]})]}),Object(g.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(g.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(g.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),Object(g.jsx)("div",{className:"flex-row flex-end",children:Object(g.jsx)("button",{type:"submit",children:"Submit"})})]})]})},te=n(103),ne=n(104),ce=n.n(ne),se=n(105),re=n.n(se),ae=function(){var e=Object(c.useState)({control:"",symptoms:"noSymptom",contact:"no",positiveTest:"no",travel:"no",screenDate:""}),t=Object(d.a)(e,2),n=t[0],s=t[1];console.log(n);var r=Object(N.useMutation)(J),a=Object(d.a)(r,1)[0],i=Object(N.useQuery)(P).data,o=function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,a({variables:{control:n.control,symptoms:n.symptoms,contact:n.contact,positiveTest:n.positiveTest,travel:n.travel,screenDate:n.screenDate}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,r=t.value;s(Object(l.a)(Object(l.a)({},n),{},Object(H.a)({},c,r)))};return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".datepicker");ce.a.DatePicker.getInstance(e,{onSelect:function(e){console.log("onSelect: "+e),s(Object(l.a)(Object(l.a)({},n),{},{screenDate:e}))}})})),Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:o,children:[Object(g.jsxs)("div",{className:"form-margin",children:[Object(g.jsx)("div",{children:Object(g.jsx)(te.DatePicker,{label:"Screening Date",name:"screenDate",id:"screenDate",type:"text",className:"datepicker",value:n.screenDate,onChange:function(e){j({target:{id:"screenDate",name:"screenDate",value:re()(e).format("MMMM DD, YYYY")}})}})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"control",children:"Please select Control for this Screen."}),Object(g.jsxs)("select",{className:"browser-default",name:"control",type:"select",id:"control",onChange:j,children:[Object(g.jsx)("option",{disabled:!0,selected:!0,children:"Select Control"}),i?i.controls.map((function(e){return Object(g.jsxs)("option",{value:e._id,children:[e.documentor," (",e.credentials,") "]},e._id)})):Object(g.jsx)("option",{children:"Loading"})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"symptoms",children:"Do you have any of the following symptoms?"}),Object(g.jsxs)("select",{className:"browser-default",name:"symptoms",type:"select",id:"symptoms",onChange:j,children:[Object(g.jsx)("option",{value:"noSymptom",children:"No Symptoms"}),Object(g.jsx)("option",{value:"cough",children:"New and persistent cough"}),Object(g.jsx)("option",{value:"breath",children:"Shortness of breath or any difficutlty breathing"}),Object(g.jsx)("option",{value:"fever",children:"Fever"})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"contact",children:"Have you been in contact with anyone in the last 14 days who is experiencing these symptoms?"}),Object(g.jsxs)("select",{className:"browser-default",name:"contact",type:"select",id:"contact",onChange:j,children:[Object(g.jsx)("option",{value:"no",children:"No"}),Object(g.jsx)("option",{value:"yes",children:"Yes"})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"positiveTest",children:"Have you been in contact with anyone who has since tested positive for Covid-19?"}),Object(g.jsxs)("select",{className:"browser-default",name:"positiveTest",type:"select",id:"positiveTest",onChange:j,children:[Object(g.jsx)("option",{value:"no",children:"No"}),Object(g.jsx)("option",{value:"yes",children:"Yes"}),Object(g.jsx)("option",{value:"unsure",children:"Unsure"})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"travel",children:"Have you traveled abroad in the last 1-2 months?"}),Object(g.jsxs)("select",{className:"browser-default",name:"travel",type:"select",id:"travel",onChange:j,children:[Object(g.jsx)("option",{value:"no",children:"No"}),Object(g.jsx)("option",{value:"yes",children:"Yes"})]})]})]}),Object(g.jsx)("div",{className:"flex-row flex-end center-align padding-top",children:Object(g.jsx)("button",{type:"submit",className:"waves-effect waves-light btn blue darken-1",children:"Submit"})})]})})},ie=function(){var e,t,n=I.loggedIn(),c=Object(N.useQuery)(E).data;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"form-container",children:n&&c?Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"center-align",children:"COVID Screening Form"}),Object(g.jsx)("div",{children:"admin"===(null===c||void 0===c||null===(e=c.me)||void 0===e?void 0:e.role)||"read/write"===(null===c||void 0===c||null===(t=c.me)||void 0===t?void 0:t.role)?Object(g.jsx)("div",{children:Object(g.jsx)(ae,{})}):Object(g.jsx)("div",{children:Object(g.jsx)("p",{children:"if logged in and user does not have admin or read/write access, default to read only access"})})})]}):Object(g.jsx)("h3",{children:"Please Login to Access your Forms!"})}),Object(g.jsx)("div",{className:"form-footer",children:Object(g.jsx)(Q,{})})]})};function oe(e,t,n){return new Promise((function(c,s){var r,a,i,o=window.indexedDB.open("covid-screening",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("control",{keyPath:"_id"}),t.createObjectStore("screenings",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(s){switch(r=o.result,a=r.transaction(e,"readwrite"),i=a.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(n),c(n);break;case"get":var l=i.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":i.delete(n._id);break;default:console.log("No valid method")}a.oncomplete=function(){r.close()}}}))}var le=function(){var e=Object(c.useContext)(f),t=Object(d.a)(e,2),n=t[0],s=t[1],r=I.loggedIn(),a=Object(N.useQuery)(W),i=a.loading,o=a.error,l=a.data,j=Object(N.useQuery)(P),b=j.loading,m=j.data,O=Object(N.useQuery)(W),x=O.loading,v=O.data;return Object(c.useEffect)((function(){m?(s({type:h,control:m.controls}),m.controls.forEach((function(e){oe("control","put",e)}))):b||oe("control","get").then((function(e){s({type:h,control:e})}))}),[m,b,s]),Object(c.useEffect)((function(){v?(s({type:u,screenings:v}),v.screenings.forEach((function(e){oe("screenings","put",e)}))):x||oe("screenings","get").then((function(e){s({type:u,screenings:e})}))}),[v,x,s]),console.log(n),l?i?Object(g.jsx)("div",{children:"Loading..."}):o?(console.error(o),Object(g.jsx)("div",{children:"Error!"})):Object(g.jsx)("div",{className:"container",children:r&&Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Here are the different forms you've completed:"}),Object(g.jsx)("div",{className:"row",children:l.screenings.map((function(e,t){return Object(g.jsx)("div",{className:"col s12 m4",children:Object(g.jsx)("div",{className:"card blue-grey darken-1",children:Object(g.jsxs)("div",{className:"card-content white-text",children:[Object(g.jsxs)("span",{className:"card-title",children:["Screening Id: ",e._id]}),Object(g.jsxs)("p",{children:["Patient symptoms: ",e.symptoms]}),Object(g.jsxs)("p",{children:["Contact with others: ",e.contact]}),Object(g.jsxs)("p",{children:["Positive covid test: ",e.positiveTest]}),Object(g.jsxs)("p",{children:["Patient travelled: ",e.travel]}),Object(g.jsx)("div",{children:e.control&&Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:["Controller ID: ",e.control._id]}),Object(g.jsxs)("li",{children:["Documentor: ",e.control.documentor]}),Object(g.jsxs)("li",{children:["Credentials: ",e.control.credentials]})]})})]})},e._id)},t)}))})]})}):Object(g.jsx)("div",{children:"No forms have been filled out."})},de=new k.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var je,be=function(){return Object(g.jsx)(N.ApolloProvider,{client:de,children:Object(g.jsx)(i.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(y,{children:[Object(g.jsx)(F,{}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",component:z}),Object(g.jsx)(o.a,{exact:!0,path:"/login",component:K}),Object(g.jsx)(o.a,{exact:!0,path:"/signup",component:ee}),Object(g.jsx)(o.a,{exact:!0,path:"/landing",component:ie}),Object(g.jsx)(o.a,{exact:!0,path:"/viewdata",component:le}),Object(g.jsx)(o.a,{component:Z})]})]})})})})},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var me=document.getElementById("install_button");function Oe(){je.prompt(),me.disabled=!0,je.userChoice.then((function(e){"accepted"===e.outcome?(console.log("PWA setup accepted"),me.hidden=!0):console.log("PWA setup rejected"),me.disabled=!1,je=null}))}a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(be,{})}),document.getElementById("root")),window.addEventListener("beforeinstallprompt",(function(e){console.log("beforeinstallprompt fired"),e.preventDefault(),je=e,me.hidden=!1,me.addEventListener("click",Oe)})),window.addEventListener("appinstalled",(function(e){console.log("appinstalled fired",e)})),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ue(t,e)}))}}()}},[[170,1,2]]]);
//# sourceMappingURL=main.e524ee9b.chunk.js.map