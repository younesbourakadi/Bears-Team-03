(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){},36:function(e,a,t){e.exports=t(61)},41:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(16),c=t.n(r),i=(t(41),t(43),t(17)),o=t(21),s=t(33);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=t(13),u="FETCH_USERS_REQUEST",h="FETCH_USERS_SUCCESS",d="FETCH_USERS_FAILURE",E="REGISTER_USER_REQUEST",p="REGISTER_USER_SUCCESS",g="REGISTER_USER_FAILURE",f="LOGIN_REQUEST",v="LOGIN_SUCCESS",y="LOGIN_FAILURE",b="CREATE_PROJECT_REQUEST",C="CREATE_PROJECT_SUCCESS",j="CREATE_PROJECT_FAILURE",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:!1,error:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f:return e;case v:return Object(m.a)({},e,{error:null},a.payload);case y:return Object(m.a)({},e,a.payload);case"LOGOUT":return{isLoggedIn:!1,error:null};default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"GENERAL_FAILURE":default:return e}},O=Object(i.c)({authState:k,errorState:N,users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];switch((arguments.length>1?arguments[1]:void 0).type){case u:case h:case d:default:return e}},registrationStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:null,isPending:!1},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(m.a)({},e,{isPending:!0});case p:return Object(m.a)({},e,{isPending:!1,newUser:a.payload});case g:return Object(m.a)({},e,{isPending:!1,error:a.payload});default:return e}}}),x=t(64),S=t(66),w=t(62),P=t(14),T=t(8),R=t(9),F=t(12),A=t(10),U=t(11),L=t(7),I=t(2),G=function(e){function a(e){var t;return Object(T.a)(this,a),(t=Object(F.a)(this,Object(A.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(L.a)(Object(L.a)(t))),t.handleMultipleChange=t.handleMultipleChange.bind(Object(L.a)(Object(L.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(L.a)(Object(L.a)(t))),t.state={user:{fullname:"",email:"",password:"",gender:"",streetAddress:"",city:"",stateOrProvince:"",zipCode:"",country:"",phone:"",volunteerField:[""],days:[""],hours:[""]},validate:{email:"",password:""}},t}return Object(U.a)(a,e),Object(R.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value,l=this.state.user;this.setState({user:Object(m.a)({},l,Object(P.a)({},t,n))})}},{key:"handleMultipleChange",value:function(e){for(var a=e.target,t=a.name,n=a.options,l=this.state.user,r=[],c=0,i=n.length;c<i;c++)n[c].selected&&r.push(n[c].value);this.setState({user:Object(m.a)({},l,Object(P.a)({},t,r))})}},{key:"validateEmail",value:function(e){var a=this.state.validate;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?a.email="has-success":a.email="has-danger",this.setState({validate:a})}},{key:"validatePassword",value:function(e){var a=this.state.validate;/^.{6,}$/.test(e.target.value)?a.password="has-success":a.password="has-danger",this.setState({validate:a})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.register(this.state.user)}},{key:"render",value:function(){var e=this,a=this.state,t=a.user,n=a.validate;return l.a.createElement(I.d,{className:"RegistrationPage"},l.a.createElement("h2",null,"Sign Up"),l.a.createElement(I.e,{className:"form",onSubmit:this.handleSubmit},l.a.createElement(I.g,null,l.a.createElement(I.j,null,"Email"),l.a.createElement(I.i,{type:"email",name:"email",id:"email",placeholder:"myemail@email.com",value:t.email,valid:"has-success"===n.email,invalid:"has-danger"===n.email,onChange:function(a){e.validateEmail(a),e.handleChange(a)}}),l.a.createElement(I.f,{valid:!0},"That's a tasty looking email you've got there."),l.a.createElement(I.f,null,"Uh oh! Looks like there is an issue with your email. Please input a correct email.")),l.a.createElement(I.g,null,l.a.createElement(I.j,null,"Full name:"),l.a.createElement(I.i,{type:"text",name:"fullname",id:"fullname",placeholder:"Example Joe",value:t.fullname,onChange:this.handleChange}),l.a.createElement(I.f,null,"Please input your full name.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"password"},"Password:"),l.a.createElement(I.i,{type:"password",name:"password",id:"password",placeholder:"********",value:t.password,valid:"has-success"===n.password,invalid:"has-danger"===n.password,onChange:function(a){e.validatePassword(a),e.handleChange(a)}}),l.a.createElement(I.f,{valid:!0},"That is a good password! :)"),l.a.createElement(I.f,null,"Please input a password that is at least 6 characters long."),l.a.createElement(I.h,null,"At least 6 characters long")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"gender"},"Gender:"),l.a.createElement(I.i,{type:"select",name:"gender",value:t.gender,onChange:this.handleChange},l.a.createElement("option",{value:"male"},"Male"),l.a.createElement("option",{value:"female"},"Female"),l.a.createElement("option",{value:"other"},"Other")),l.a.createElement(I.f,null,"Please input your gender.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"streetAddress"},"Address:"),l.a.createElement(I.i,{type:"name",name:"streetAddress",label:"Address",placeholder:"123 Main Street",value:t.streetAddress,onChange:this.handleChange}),l.a.createElement(I.f,null,"Please input your address.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"city"},"City:"),l.a.createElement(I.i,{type:"text",name:"city",label:"City",placeholder:"ExampleCity",value:t.city,onChange:this.handleChange}),l.a.createElement(I.f,null,"Please input your city.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"stateOrProvince"},"State/Province/Region:"),l.a.createElement(I.i,{type:"text",name:"stateOrProvince",label:"State or Province",placeholder:"exampleState",value:t.stateOrProvince,onChange:this.handleChange}),l.a.createElement(I.f,null,"Please input your state.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"zipCode"},"ZIP:"),l.a.createElement(I.i,{type:"text",name:"zipCode",label:"Zip Code",placeholder:"exampleZIP",value:t.zipCode,onChange:this.handleChange}),l.a.createElement(I.f,null,"Please input your ZIP code.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"country"},"Country/Region:"),l.a.createElement(I.i,{type:"text",name:"country",label:"Country",placeholder:"exampleCountry",value:t.country,onChange:this.handleChange}),l.a.createElement(I.f,null,"Please input your country.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"phone"},"Phone number:"),l.a.createElement(I.i,{type:"text",name:"phone",label:"Phone Number",placeholder:"+36-20-233-7788",value:t.phone,onChange:this.handleChange}),l.a.createElement(I.f,null,"Please input your phone number.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"volunteerField"},"What Global Goals do you want to support?"),l.a.createElement(I.i,{type:"select",name:"volunteerField",multiple:!0,value:t.volunteerField,onChange:this.handleMultipleChange},l.a.createElement("option",{value:"1"},"1. No Poverty"),l.a.createElement("option",{value:"2"},"2. Zero Hunger"),l.a.createElement("option",{value:"3"},"3. Good Health and Well Being"),l.a.createElement("option",{value:"4"},"4. Quality Education"),l.a.createElement("option",{value:"5"},"5. Gender Equality"),l.a.createElement("option",{value:"6"},"6. Clean Water and Sanitation"),l.a.createElement("option",{value:"7"},"7. Affordable and Clean Energy"),l.a.createElement("option",{value:"8"},"8. Decent Work and Economic Growth"),l.a.createElement("option",{value:"9"},"9. Industry, Innovation and Infrastructure"),l.a.createElement("option",{value:"10"},"10. Reduced Inequalities"),l.a.createElement("option",{value:"11"},"11. Sustainable Cities and Communities"),l.a.createElement("option",{value:"12"},"12. Responsible Consumption and Production"),l.a.createElement("option",{value:"13"},"13. Climate Action"),l.a.createElement("option",{value:"14"},"14. Life Below Water"),l.a.createElement("option",{value:"15"},"15. Life On Land"),l.a.createElement("option",{value:"16"},"16. Peace, Justice and Strong Institutions"),l.a.createElement("option",{value:"17"},"17. Partnerships for the Goals")),l.a.createElement(I.f,null,"Please pick at least one goal.")),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"days"},"Select on what days are you available:"),l.a.createElement(I.i,{type:"select",name:"days",multiple:!0,value:t.days,onChange:this.handleMultipleChange},l.a.createElement("option",{value:"monday"},"Monday"),l.a.createElement("option",{value:"tuesday"},"Tuesday"),l.a.createElement("option",{value:"wednesday"},"Wednesday"),l.a.createElement("option",{value:"thursday"},"Thursday"),l.a.createElement("option",{value:"friday"},"Friday"),l.a.createElement("option",{value:"saturday"},"Saturday"),l.a.createElement("option",{value:"sunday"},"Sunday")),l.a.createElement(I.f,null,"Please pick at least one day.")),l.a.createElement(I.q,{form:!0},l.a.createElement(I.b,{md:6},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"hours"},"Start Time:"),l.a.createElement(I.i,{type:"time",name:"hours",value:t.hours,onChange:this.handleChange})),l.a.createElement(I.f,null,"Please input a valid start time.")),l.a.createElement(I.b,{md:6},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"hours"},"End Time:"),l.a.createElement(I.i,{type:"time",name:"hours",value:t.hours,onChange:this.handleChange})),l.a.createElement(I.f,null,"Please input a valid end time."))),l.a.createElement(I.g,{check:!0},l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",value:t.adult})," ","I am an adult"),l.a.createElement(I.f,null,"You need to be an adult to use our service.")),l.a.createElement(I.g,{check:!0},l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",value:t.adult})," ","I agree to the Terms of Service"),l.a.createElement(I.f,null,"You need to accept our Terms of Service to use our service.")),l.a.createElement(I.a,{color:"primary"},"Sign Up")))}}]),a}(l.a.Component),_=t(27),D=(t(49),function(e){function a(e){var t;return Object(T.a)(this,a),(t=Object(F.a)(this,Object(A.a)(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),t.props.publish(t.state)},t.handleChange=function(e){t.setState(Object(P.a)({},e.target.id,e.target.value))},t.handleMultipleChange=function(e){for(var a=e.target,n=a.name,l=a.options,r=[],c=0,i=l.length;c<i;c++)l[c].selected&&r.push(l[c].value);t.setState(Object(P.a)({},n,r))},t.handleCheckboxGroup=function(e){var a=t.state.workDays,n=Object(_.a)(a),l=n.indexOf(e.target.value);-1===l?n.push(e.target.value):n.splice(l,1),t.setState({workDays:Object(_.a)(n)})},t.state={name:"",customer:"",dueDate:"",from:"",to:"",description:"",involvedFields:[],address:"",country:"",email:"",phone:"",workDays:[]},t}return Object(U.a)(a,e),Object(R.a)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.customer,n=e.dueDate,r=e.from,c=e.to,i=e.description,o=e.involvedFields,s=e.address,m=e.country,u=e.email,h=e.phone,d=e.workDays;return l.a.createElement(I.b,{xl:{size:8,offset:2},md:{size:10,offset:1}},l.a.createElement("h2",null,"CREATE A NEW PROJECT"),l.a.createElement(I.d,{className:"form-frame"},l.a.createElement(I.e,{onSubmit:this.handleSubmit},l.a.createElement(I.q,{form:!0},l.a.createElement(I.b,{md:6},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"name"},"Due date ( announce )"),l.a.createElement(I.i,{type:"date",id:"dueDate",value:n,onChange:this.handleChange}))),l.a.createElement(I.b,{md:6},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"customer"},"Customer"),l.a.createElement(I.i,{type:"select",name:"customer",id:"customer",value:t,onChange:this.handleChange},l.a.createElement("option",null,"myCompany"),l.a.createElement("option",null,"myOtherCompany"))))),l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"name"},"Name"),l.a.createElement(I.i,{type:"text",id:"name",placeholder:"myProject",value:a,onChange:this.handleChange})),l.a.createElement(I.g,null,l.a.createElement(I.q,null,l.a.createElement(I.b,{md:6},l.a.createElement(I.j,{for:"description"},"Short description"),l.a.createElement(I.i,{type:"textarea",name:"text",id:"description",placeholder:"Please provide a brief description (max 200 chars)",maxLength:"200",rows:"2",style:{lineHeight:"1.7"},value:i,onChange:this.handleChange})),l.a.createElement(I.b,{md:6},l.a.createElement(I.j,{for:"involvedFields"},"Involved Fields"),l.a.createElement(I.i,{type:"select",name:"involvedFields",id:"involvedFields",value:o,onChange:this.handleMultipleChange,multiple:!0},l.a.createElement("option",null,"Field one"),l.a.createElement("option",null,"Field two"),l.a.createElement("option",null,"Field three"),l.a.createElement("option",null,"Field four"),l.a.createElement("option",null,"Field five"),l.a.createElement("option",null,"Field six"),l.a.createElement("option",null,"Field seven"),l.a.createElement("option",null,"Field eight"),l.a.createElement("option",null,"Field nine"),l.a.createElement("option",null,"Field ten"))))),l.a.createElement(I.q,{form:!0},l.a.createElement(I.b,{md:8},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"address"},"Address / area"),l.a.createElement(I.i,{type:"text",id:"address",value:s,onChange:this.handleChange}))),l.a.createElement(I.b,{md:4},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"country"},"Country"),l.a.createElement(I.i,{type:"text",id:"country",value:m,onChange:this.handleChange})))),l.a.createElement(I.j,{for:"workDays"},"Weekly work time"),l.a.createElement(I.q,null,l.a.createElement(I.b,{md:6,onChange:this.handleTest},l.a.createElement(I.g,{check:!0},l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",id:"workDays",value:"mon",checked:d.includes("mon"),onChange:this.handleCheckboxGroup}),"monday"),l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",id:"workDays",value:"tue",checked:d.includes("tue"),onChange:this.handleCheckboxGroup}),"tuesday"),l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",id:"workDays",value:"wed",checked:d.includes("wed"),onChange:this.handleCheckboxGroup}),"wednesday"),l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",id:"workDays",value:"thu",checked:d.includes("thu"),onChange:this.handleCheckboxGroup}),"thursday"),l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",id:"workDays",value:"fri",checked:d.includes("fri"),onChange:this.handleCheckboxGroup}),"friday"),l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",id:"workDays",value:"sat",checked:d.includes("sat"),onChange:this.handleCheckboxGroup}),"saturday"),l.a.createElement(I.j,{check:!0},l.a.createElement(I.i,{type:"checkbox",id:"workDays",value:"sun",checked:d.includes("tue"),onChange:this.handleCheckboxGroup}),"sunday"))),l.a.createElement(I.b,{md:3,sm:6},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"from"},"From"),l.a.createElement(I.i,{type:"time",id:"from",value:r,onChange:this.handleChange}))),l.a.createElement(I.b,{md:3,sm:6},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"to"},"To "),l.a.createElement(I.i,{type:"time",id:"to",value:c,onChange:this.handleChange})))),l.a.createElement("hr",null),l.a.createElement("h6",null,"CONTACTS"),l.a.createElement(I.q,{form:!0},l.a.createElement(I.b,{md:8},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"email"},"Email"),l.a.createElement(I.i,{type:"email",id:"email",value:u,onChange:this.handleChange}))),l.a.createElement(I.b,{md:4},l.a.createElement(I.g,null,l.a.createElement(I.j,{for:"phone"},"Phone"),l.a.createElement(I.i,{type:"text",id:"phone",pattern:"\\d+",value:h,onChange:this.handleChange}),l.a.createElement(I.h,{color:"muted"},"Insert number only")))),l.a.createElement(I.a,{color:"secondary",type:"submit",block:!0},"Publish the announce"))))}}]),a}(l.a.Component)),q=function(e){function a(e){var t;return Object(T.a)(this,a),(t=Object(F.a)(this,Object(A.a)(a).call(this,e))).state={email:"",password:""},t}return Object(U.a)(a,e),Object(R.a)(a,[{key:"signUP",value:function(){this.props.login(this.state)}},{key:"render",value:function(){var e=this;return l.a.createElement(I.b,{xl:{size:8,offset:2},md:{size:10,offset:1}},l.a.createElement("h2",null,"LOG IN"),l.a.createElement(I.g,null,l.a.createElement(I.j,null,"Email"),l.a.createElement(I.i,{type:"email",placeholder:"email",onChange:function(a){return e.setState({email:a.target.value})}})),l.a.createElement(I.g,null,l.a.createElement(I.j,null,"Password"),l.a.createElement(I.i,{type:"password",placeholder:"password",onChange:function(a){return e.setState({password:a.target.value})}})),l.a.createElement(I.a,{color:"primary",block:!0,type:"button",onClick:function(){return e.signUP()}},"Login"))}}]),a}(n.Component),W=t(63),M=t(54),z=(t(51),function(e){function a(e){var t;return Object(T.a)(this,a),(t=Object(F.a)(this,Object(A.a)(a).call(this,e))).toggle=t.toggle.bind(Object(L.a)(Object(L.a)(t))),t.state={isOpen:!1},t}return Object(U.a)(a,e),Object(R.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props.auth.isLoggedIn;return l.a.createElement(I.n,{color:"light",light:!0,expand:"md",className:"fixed-top"},l.a.createElement(I.o,{tag:W.a,to:"/"},"Volunteer Manager App"),l.a.createElement(I.p,{onClick:this.toggle}),l.a.createElement(I.c,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(I.k,{className:"ml-auto",navbar:!0},l.a.createElement(I.l,null,l.a.createElement(I.m,{tag:M.a,to:"/"},"Home")),l.a.createElement(I.l,null,l.a.createElement(I.m,{href:"#"},"Search")),e?l.a.createElement(l.a.Fragment,null,l.a.createElement(I.l,null,l.a.createElement(I.a,{color:"primary",tag:M.a,to:"/create-project"},"Create project")),l.a.createElement(I.l,null,l.a.createElement(I.m,{onClick:this.props.logout},"Logout"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(I.l,null,l.a.createElement(I.m,{activeClassName:"active",tag:M.a,to:"/register"},"Register")),l.a.createElement(I.l,null,l.a.createElement(I.a,{color:"primary",tag:M.a,to:"/login"},"Login"))))))}}]),a}(n.Component)),J=t(35),B=t(65),H=function(e){var a=e.component,t=e.auth,n=Object(J.a)(e,["component","auth"]);return l.a.createElement(w.a,Object.assign({},n,{render:function(e){return t.isLoggedIn?l.a.createElement(a,e):l.a.createElement(B.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Z=(t(30),function(e){function a(){return Object(T.a)(this,a),Object(F.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(U.a)(a,e),Object(R.a)(a,[{key:"render",value:function(){var e="https://www.youtube.com/embed/"+this.props.video+"?autoplay="+this.props.autoplay+"&rel="+this.props.rel+"&modestbranding="+this.props.modest;return l.a.createElement("div",{className:"video"},l.a.createElement("iframe",{className:"player",type:"text/html",width:"100%",height:"100%",src:e}))}}]),a}(l.a.Component)),Q=function(e){function a(e){var t;return Object(T.a)(this,a),(t=Object(F.a)(this,Object(A.a)(a).call(this,e))).state={},t}return Object(U.a)(a,e),Object(R.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"jumbo"},l.a.createElement(I.d,null,l.a.createElement("div",{className:"intro-text"},l.a.createElement("div",{className:"intro-lead-in"},"Make the world a better place"),l.a.createElement("div",{className:"intro-heading text-uppercase"},"one project at a time"),l.a.createElement("p",{className:"lead"},l.a.createElement(I.a,{className:"text-uppercase",color:"primary",size:"xl",href:"/register"},"Volunteer Now"))))),l.a.createElement("section",{id:"services"},l.a.createElement(I.d,null,l.a.createElement(I.q,null,l.a.createElement(I.b,{lg:"12",className:"text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},"Why choose us"),l.a.createElement("h3",{className:"section-subheading text-muted"},"Things that make us unique."))),l.a.createElement(I.q,{className:"text-center"},l.a.createElement(I.b,{md:"4"},l.a.createElement("span",{className:"fa-stack fa-4x"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x text-primary"}),l.a.createElement("i",{className:"fab fa-osi fa-stack-1x fa-inverse"})),l.a.createElement("h4",{className:"service-heading"},"Open source"),l.a.createElement("p",{className:"text-muted"},"Completely open source, anyone can contribute. There are no secrets.")),l.a.createElement(I.b,{md:"4"},l.a.createElement("span",{className:"fa-stack fa-4x"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x text-primary"}),l.a.createElement("i",{className:"fas fa-globe-europe fa-stack-1x fa-inverse"})),l.a.createElement("h4",{className:"service-heading"},"For Everyone"),l.a.createElement("p",{className:"text-muted"},"Anyone in the world can use it to create opportunities and help others in need.")),l.a.createElement(I.b,{md:"4"},l.a.createElement("span",{className:"fa-stack fa-4x"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x text-primary"}),l.a.createElement("i",{className:"fas fa-laptop fa-stack-1x fa-inverse"})),l.a.createElement("h4",{className:"service-heading"},"Responsive Design"),l.a.createElement("p",{className:"text-muted"},"No matter where you are accessing the site you get the best possible experience."))))),l.a.createElement("section",{id:"why"},l.a.createElement(I.d,null,l.a.createElement(I.q,null,l.a.createElement(I.b,{lg:"12",className:"text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},"Why we fight"),l.a.createElement("h3",{className:"section-subheading text-muted"},"What motivates us to keep going no matter what")),l.a.createElement(Z,{video:"RpqVmvMCmp0",autoplay:"0",rel:"0",modest:"1"})))),l.a.createElement("section",{className:"bg-light",id:"team"},l.a.createElement(I.d,null,l.a.createElement(I.q,null,l.a.createElement(I.b,{lg:"12",className:"text-center"},l.a.createElement("h2",{className:"section-heading text-uppercase"},"Our Amazing Team"),l.a.createElement("h3",{className:"section-subheading text-muted"},"Who contributed the most to this project."))),l.a.createElement(I.q,null,l.a.createElement(I.b,{sm:"4"},l.a.createElement("div",{className:"team-member"},l.a.createElement("img",{className:"mx-auto rounded-circle",src:"https://avatars0.githubusercontent.com/u/36927605?s=400&v=4",alt:"Avatar of Layer"}),l.a.createElement("h4",null,"Layer"),l.a.createElement("p",{className:"text-muted"},"Lead Developer"),l.a.createElement("ul",{className:"list-inline social-buttons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/R-Layer"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-envelope"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-linkedin-in"})))))),l.a.createElement(I.b,{sm:"4"},l.a.createElement("div",{className:"team-member"},l.a.createElement("img",{className:"mx-auto rounded-circle",src:"https://avatars1.githubusercontent.com/u/25263346?s=400&u=fcc274f868d5a5b72cc5639d5e7781514e750c1f&v=4",alt:"Avatar of Nick"}),l.a.createElement("h4",null,"Nick"),l.a.createElement("p",{className:"text-muted"},"Lead Designer, Developer"),l.a.createElement("ul",{className:"list-inline social-buttons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/mikitor"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"mailto:torbics.miklos@gmail.com?Subject=Hello"},l.a.createElement("i",{className:"fa fa-envelope"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"http://hu.linkedin.com/in/miklostorbics"},l.a.createElement("i",{className:"fab fa-linkedin-in"})))))),l.a.createElement(I.b,{sm:"4"},l.a.createElement("div",{className:"team-member"},l.a.createElement("img",{className:"mx-auto rounded-circle",src:"https://avatars0.githubusercontent.com/u/17518675?s=400&v=4",alt:"Avatar of Phrixus"}),l.a.createElement("h4",null,"Phrixus"),l.a.createElement("p",{className:"text-muted"},"Developer"),l.a.createElement("ul",{className:"list-inline social-buttons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/younesbourakadi"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fa fa-envelope"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-linkedin-in"}))))))),l.a.createElement(I.q,null,l.a.createElement(I.b,{lg:"8",className:"mx-auto text-center"},l.a.createElement("p",{className:"large text-muted"},"We created this project during Chingu Voyage-7. To learn more visit ",l.a.createElement("a",{href:"https://chingu.io/"},"Chingu.io")," and our ",l.a.createElement("a",{href:"https://github.com/chingu-voyage7/Bears-Team-03"},"Github page"),"."))))),l.a.createElement("footer",null,l.a.createElement(I.d,null,l.a.createElement(I.q,null,l.a.createElement(I.b,{md:"4"},l.a.createElement("span",{className:"copyright"},"Made with ",l.a.createElement("i",{className:"fa fa-heart"})," by ",l.a.createElement("a",{href:"https://github.com/chingu-voyage7/Bears-Team-03"},"Bears Team 03")," in 2019")),l.a.createElement(I.b,{md:"4"},l.a.createElement("ul",{className:"list-inline social-buttons social-buttons-inverse"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/chingu-voyage7/Bears-Team-03"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-facebook-f"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-linkedin-in"}))))),l.a.createElement(I.b,{md:"4"},l.a.createElement("ul",{className:"list-inline quicklinks"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},"Privacy Policy")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"#"},"Terms of Use"))))))))}}]),a}(l.a.Component),V=function(e){var a=e.registerUser,t=e.loginUser,n=e.logoutUser,r=e.createProject,c=e.auth;return l.a.createElement(x.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{auth:c,logout:n}),l.a.createElement(S.a,null,l.a.createElement(w.a,{exact:!0,path:"/",component:Q}),l.a.createElement(w.a,{path:"/login",render:function(e){return l.a.createElement(q,Object.assign({},e,{login:t}))}}),l.a.createElement(w.a,{path:"/register",render:function(e){return l.a.createElement(G,Object.assign({},e,{register:a}))}}),l.a.createElement(H,{path:"/create-project",component:D,publish:r,auth:c}))))},$=Object(o.b)(function(e){return{users:e.users,errors:e.errorState,auth:e.authState}},function(e){return{registerUser:function(a){return e((t=a,function(e){e({type:E});var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("/user/register",a).then(function(e){return e.json()}).then(function(a){a.fail?e({type:g,payload:a.fail}):(console.log("testSuccess",a),e({type:p,payload:a}))}).catch(function(a){return e({type:"GENERAL_FAILURE",payload:a})})}));var t},fetchUsers:function(){return e(function(e){e({type:u}),fetch("/user/get-all").then(function(e){return e.json()}).then(function(a){a.fail?e({type:d,payload:a.fail}):e({type:h,payload:a})}).catch(function(a){return e({type:"GENERAL_FAILURE",payload:a})})})},loginUser:function(a){return e(function(e){return function(a){a({type:f});var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("/login",t).then(function(e){return e.json()}).then(function(e){e.fail?a({type:y,payload:e.fail}):(localStorage.setItem("accessToken",e.token),a({type:v,payload:{isLoggedIn:!0}}))}).catch(function(e){return a({type:"GENERAL_FAILURE",payload:e})})}}(a))},logoutUser:function(){return e((localStorage.removeItem("accessToken"),{type:"LOGOUT"}))},createProject:function(a){return e(function(e){return function(a){a({type:b});var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.accessToken},body:JSON.stringify(e)};console.log("projectdata",e),fetch("/project/create-one",t).then(function(e){return e.json()}).then(function(e){e.fail?a({type:j,payload:e.fail}):a({type:C,payload:e})}).catch(function(e){return a({type:"GENERAL_FAILURE",payload:e})})}}(a))}}})(V),Y=Object(i.d)(O,Object(i.a)(s.a));c.a.render(l.a.createElement(o.a,{store:Y},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.3a889ed5.chunk.js.map