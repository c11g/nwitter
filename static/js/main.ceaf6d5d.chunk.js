(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{10:function(e,t,a){e.exports={root:"Nweet_root__1ZBPb",content:"Nweet_content__38hvE",text:"Nweet_text__1T_hu",img:"Nweet_img__9Yj4W",buttons:"Nweet_buttons__1jpVR",button:"Nweet_button__14HsJ",input:"Nweet_input__gUppI",edit_buttons:"Nweet_edit_buttons__2SZLS",update:"Nweet_update__2oRq0",cancel:"Nweet_cancel__1UHM6"}},12:function(e,t,a){e.exports={root:"NweetFactory_root__29dYI",input:"NweetFactory_input__3yDsH",file_wrap:"NweetFactory_file_wrap__29HGl",file:"NweetFactory_file__2-61w",file_ui:"NweetFactory_file_ui__15Vgr",submit:"NweetFactory_submit__31tSm",img_wrap:"NweetFactory_img_wrap__5B-9-",img:"NweetFactory_img__3MQv6",clear:"NweetFactory_clear__29454"}},13:function(e,t,a){e.exports={input:"AuthForm_input__3yPNK",submit:"AuthForm_submit__3wRH0",toggle:"AuthForm_toggle__1v1Vl",error:"AuthForm_error__VxXdv"}},19:function(e,t,a){e.exports={root:"Auth_root__3TaIK",buttons:"Auth_buttons__1bcJr",button:"Auth_button__pNioI"}},23:function(e,t,a){e.exports={root:"Navigation_root__U3Pah",menu:"Navigation_menu__3UZDQ"}},28:function(e,t,a){e.exports={root:"Home_root__nHUed",nweet:"Home_nweet__IfOR7"}},29:function(e,t,a){e.exports={root:"App_root__1GFmx",loading:"App_loading__2qlBA"}},36:function(e,t,a){e.exports=a(52)},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),u=a(1),i=a.n(u),s=a(5),l=a(3),m=a(16),p=a(2),f=a(23),_=a.n(f),d=function(e){var t=e.userObj.displayName||"user";return r.a.createElement("nav",{className:_.a.root},r.a.createElement(m.b,{className:_.a.menu,to:"/".concat("nwitter","/")},"Home"),r.a.createElement(m.b,{className:_.a.menu,to:"/".concat("nwitter","/profile")},t,"'s Profile"))},b=a(22),w=a(17);a(46),a(48),a(53);w.initializeApp({apiKey:"AIzaSyBIuY5NBrdTTMoBV1360cHztzxHS3UXSLQ",authDomain:"nwitter-e4060.firebaseapp.com",databaseURL:"HTTPS=nwitter-e4060.firebaseio.com",projectId:"nwitter-e4060",storageBucket:"nwitter-e4060.appspot.com",messagingSenderId:"247677018170",appId:"1:247677018170:web:f59f9d135b5f297bac5503"});var g=w,v=w.auth(),E=w.firestore(),N=w.storage(),h=a(10),O=a.n(h),y=function(e){var t=e.nweet,a=e.isOwner,c=Object(n.useState)(!1),o=Object(l.a)(c,2),u=o[0],m=o[1],p=Object(n.useState)(t.text),f=Object(l.a)(p,2),_=f[0],d=f[1],b=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure you want delete this nweet?")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,E.collection("nweets").doc(t.id).delete();case 5:if(!t.imgUrl){e.next=8;break}return e.next=8,N.refFromURL(t.imgUrl).delete();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){m((function(e){return!e}))},g=function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.collection("nweets").doc(t.id).update({text:_});case 3:w();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:O.a.root},u?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{type:"text",value:_,onChange:function(e){var t=e.target.value;d(t)},className:O.a.input,required:!0}),r.a.createElement("div",{className:O.a.edit_buttons},r.a.createElement("button",{type:"submit",className:O.a.update},"Update"),r.a.createElement("button",{type:"button",onClick:w,className:O.a.cancel},"Cancel")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.content},r.a.createElement("strong",{className:O.a.text},t.text),t.imgUrl&&r.a.createElement("img",{src:t.imgUrl,className:O.a.img,width:"50",alt:""})),a&&r.a.createElement("div",{className:O.a.buttons},r.a.createElement("button",{type:"button",onClick:b,className:O.a.button},"Delete"),r.a.createElement("button",{type:"button",onClick:w,className:O.a.button},"Edit"))))},j=a(54),x=a(12),S=a.n(x),U=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],u=c[1],m=Object(n.useState)(null),p=Object(l.a)(m,2),f=p[0],_=p[1],d=function(){var e=Object(s.a)(i.a.mark((function e(a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o||f){e.next=3;break}return e.abrupt("return");case 3:if(n=null,!f){e.next=12;break}return r=N.ref().child("".concat(t.uid,"/nweets/").concat(Object(j.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return e.next=14,E.collection("nweets").add({text:o,createdAt:Date.now(),creatorId:t.uid,imgUrl:n});case 14:u(""),_(null);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:d,className:S.a.root},r.a.createElement("input",{type:"text",placeholder:"What's on your mind?",value:o,onChange:function(e){var t=e.target.value;u(t)},className:S.a.input}),r.a.createElement("div",{className:S.a.file_wrap},r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.addEventListener("load",(function(e){var t=e.currentTarget.result;_(t)})),a.readAsDataURL(t)},className:S.a.file}),r.a.createElement("div",{className:S.a.file_ui},"Upload Image")),r.a.createElement("button",{type:"submit",className:S.a.submit},"Nweet"),f&&r.a.createElement("div",{className:S.a.img_wrap},r.a.createElement("img",{src:f,alt:"",width:"50",className:S.a.img}),r.a.createElement("button",{type:"button",onClick:function(){return _(null)},className:S.a.clear},"Clear")))},k=a(28),A=a.n(k),P=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){var e=E.collection("nweets").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(b.a)({id:e.id},e.data())}));u(t)}));return function(){return e()}}),[]),r.a.createElement("div",{className:A.a.root},r.a.createElement(U,{userObj:t}),r.a.createElement("div",{className:A.a.nweet},o.map((function(e){return r.a.createElement(y,{key:e.id,nweet:e,isOwner:t.uid===e.creatorId})}))))},F=a(13),R=a.n(F),C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(l.a)(o,2),m=u[0],p=u[1],f=Object(n.useState)(!1),_=Object(l.a)(f,2),d=_[0],b=_[1],w=Object(n.useState)(""),g=Object(l.a)(w,2),E=g[0],N=g[1],h=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&p(n)},O=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=7;break}return e.next=5,v.signInWithEmailAndPassword(a,m);case 5:e.next=9;break;case 7:return e.next=9,v.createUserWithEmailAndPassword(a,m);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),N(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:R.a.root},r.a.createElement("form",{onSubmit:O,className:R.a.form},r.a.createElement("input",{className:R.a.input,name:"email",type:"email",placeholder:"Email",value:a,onChange:h,required:!0}),r.a.createElement("input",{className:R.a.input,name:"password",type:"password",placeholder:"Password",value:m,onChange:h,required:!0}),r.a.createElement("div",{className:R.a.error},E),r.a.createElement("button",{type:"submit",className:R.a.submit},d?"Sign In":"Create Account")),r.a.createElement("button",{type:"button",onClick:function(){return b((function(e){return!e}))},className:R.a.toggle},d?"\uacc4\uc815\uc774 \uc5c6\uc73c\uba74 \uc0c8\ub85c \ub9cc\ub4e4\uc5b4\uc8fc\uc138\uc694.":"\uacc4\uc815\uc774 \uc788\uc73c\uba74 \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694."))},I=a(19),L=a.n(I),D=function(){console.log("Auth fire");var e=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new g.auth.GoogleAuthProvider:"github"===a&&(n=new g.auth.GithubAuthProvider),e.next=4,v.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:L.a.root},r.a.createElement(C,null),r.a.createElement("div",{className:L.a.buttons},r.a.createElement("button",{name:"google",type:"button",onClick:e,className:L.a.button},"Sign In With Google"),r.a.createElement("button",{name:"github",type:"button",onClick:e,className:L.a.button},"Sign In With Github")))},H=a(6),B=a.n(H),T=function(e){var t=e.userObj,a=e.refreshUser,c=Object(p.f)(),o=Object(n.useState)([]),u=Object(l.a)(o,2),m=u[0],f=u[1],_=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("nweets").where("creatorId","==",t.uid).get();case 2:a=e.sent,f(a.docs.map((function(e){return Object(b.a)({id:e.id},e.data())})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_()}),[]);var d=Object(n.useState)(t.displayName||""),w=Object(l.a)(d,2),g=w[0],h=w[1],O=function(){var e=Object(s.a)(i.a.mark((function e(n){var r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName!==g||t.photoURL!==U){e.next=3;break}return e.abrupt("return");case 3:if(r=U,t.photoURL===r){e.next=12;break}return c=N.ref().child("".concat(t.uid,"/profile/").concat(Object(j.a)())),e.next=8,c.putString(U,"data_url");case 8:return o=e.sent,e.next=11,o.ref.getDownloadURL();case 11:r=e.sent;case 12:return e.next=14,v.currentUser.updateProfile({displayName:g,photoURL:r});case 14:a(),C();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=Object(n.useState)(t.photoURL),S=Object(l.a)(x,2),U=S[0],k=S[1],A=Object(n.useState)(!1),P=Object(l.a)(A,2),F=P[0],R=P[1],C=function(){return R((function(e){return!e}))};return r.a.createElement("div",{className:B.a.root},r.a.createElement("div",{className:B.a.profile},U&&r.a.createElement("img",{src:U,className:B.a.img,width:"30",alt:""}),F?r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:B.a.file_wrap},r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.currentTarget.files[0],a=new FileReader;a.addEventListener("load",(function(e){var t=e.currentTarget.result;k(t)})),a.readAsDataURL(t)},className:B.a.file}),r.a.createElement("div",{className:B.a.file_ui},"Edit Image")),r.a.createElement("input",{type:"text",placeholder:"Enter your display name",value:g,onChange:function(e){var t=e.target.value;h(t)},className:B.a.input}),r.a.createElement("button",{className:B.a.update},"Update"),r.a.createElement("button",{type:"button",onClick:C,className:B.a.cancel},"Cancel")):r.a.createElement("div",null,r.a.createElement("strong",{className:B.a.name},t.displayName),r.a.createElement("button",{type:"button",onClick:C,className:B.a.edit},"Edit")),r.a.createElement("button",{type:"button",onClick:function(){v.signOut(),c.push("/".concat("nwitter"))},className:B.a.signout},"Sign Out")),r.a.createElement("div",{className:B.a.nweet},m.map((function(e){return r.a.createElement(y,{key:e.id,nweet:e})}))))},V=function(e){var t=e.isLogin,a=e.userObj,n=e.refreshUser;return console.log("Router fire"),r.a.createElement(m.a,null,t&&r.a.createElement(d,{userObj:a}),r.a.createElement(p.c,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{exact:!0,path:"/".concat("nwitter")},r.a.createElement(P,{userObj:a})),r.a.createElement(p.a,{exact:!0,path:"/".concat("nwitter","/profile")},r.a.createElement(T,{userObj:a,refreshUser:n}))):r.a.createElement(p.a,{exact:!0,path:"/".concat("nwitter")},r.a.createElement(D,null))))},q=a(29),G=a.n(q);var W=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),u=Object(l.a)(o,2),m=u[0],p=u[1];Object(n.useEffect)((function(){var e=v.onAuthStateChanged((function(e){p(e?{displayName:e.displayName,uid:e.uid,photoURL:e.photoURL}:null),c(!0)}));return function(){return e()}}),[]);var f=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=v.currentUser,p({displayName:t.displayName,uid:t.uid,photoURL:t.photoURL});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:G.a.root},a?r.a.createElement(V,{isLogin:Boolean(m),userObj:m,refreshUser:f}):r.a.createElement("div",{className:G.a.loading},"Loading..."))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))},6:function(e,t,a){e.exports={root:"Profile_root__3HEab",nweet:"Profile_nweet__3JqDb",profile:"Profile_profile__piFVH",name:"Profile_name__3A702",img:"Profile_img__27bsV",edit:"Profile_edit__1T_RX",signout:"Profile_signout__1tmbV",file_wrap:"Profile_file_wrap__3syQ7",file:"Profile_file__eOy9A",file_ui:"Profile_file_ui__EGkbu",input:"Profile_input__2kFRs",update:"Profile_update__3FadK",cancel:"Profile_cancel__1qQ2B"}}},[[36,1,2]]]);
//# sourceMappingURL=main.ceaf6d5d.chunk.js.map