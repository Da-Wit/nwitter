(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{27:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),u=n.n(c),i=n(4),l=n(12),o=n(1),s=n(2),m=n.n(s),p=n(7),f=n(13);n(33),n(35),n(44);f.initializeApp({apiKey:"AIzaSyDRz1IQXWbwEZIugjtoiesoa_ZKLaU-Hqg",authDomain:"nwitter-e1239.firebaseapp.com",databaseURL:"https://nwitter-e1239.firebaseio.com",projectId:"nwitter-e1239",storageBucket:"nwitter-e1239.appspot.com",messagingSenderId:"1096065739346",appId:"1:1096065739346:web:8ab9a754686919b4e88d8b"});var d=f.auth(),b=f.firestore(),h=f,E=f.storage(),v=function(e){var t=e.userObj,n=e.refreshUser,c=Object(a.useState)(t.displayName),u=Object(i.a)(c,2),l=u[0],s=u[1],f=Object(o.f)(),h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","desc").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){h()}));var E=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===l){e.next=4;break}return e.next=4,t.updateProfile({displayName:l});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{type:"text",placeholder:"Display name",onChange:function(e){s(e.target.value)},value:l}),r.a.createElement("input",{type:"submit",value:"Update Profile"})),r.a.createElement("button",{onClick:function(){d.signOut(),n(),f.push("/")}},"Log out"))},g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),o=l[0],s=l[1],f=Object(a.useState)(!0),b=Object(i.a)(f,2),h=b[0],E=b[1],v=Object(a.useState)(""),g=Object(i.a)(v,2),w=g[0],O=g[1],j=function(e){var t=e.target,n=t.name,a=t.value;"email"===n&&c(a),"password"===n&&s(a)},x=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,d.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,d.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),O(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:x},r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,value:n,name:"email",onChange:j}),r.a.createElement("input",{type:"password",placeholder:"Password",required:!0,value:o,name:"password",onChange:j}),r.a.createElement("input",{type:"submit",value:h?"Create Account":"Sign In"}),w),r.a.createElement("div",{onClick:function(){E((function(e){return!e}))}},h?"Sign In":"Create Account"))},w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,d.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement("button",{name:"google",onClick:e},"Continue with Google"),r.a.createElement("button",{name:"github",onClick:e},"Continue with Github")))},O=n(26),j=function(e){var t=e.nweetObj,n=e.isOwner,c=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,b.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,E.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=Object(a.useState)(!1),l=Object(i.a)(u,2),o=l[0],s=l[1],f=Object(a.useState)(t.text),d=Object(i.a)(f,2),h=d[0],v=d[1],g=function(){return s((function(e){return!e}))},w=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,b.doc("nweets/".concat(t.id)).update({text:h});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,o&&n?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w},r.a.createElement("input",{value:h,type:"text",placeholder:"Edit your nweet",maxLength:120,required:!0,onChange:function(e){v(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Update Nweet"})),r.a.createElement("button",{onClick:g},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:c},"Delete Nweet"),r.a.createElement("button",{onClick:g},"Edit Nweet"))))},x=n(46),y=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],l=c[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),f=s[0],d=s[1],h=function(){var e=Object(p.a)(m.a.mark((function e(n){var a,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===f){e.next=10;break}return r=E.ref().child("".concat(t.uid,"/").concat(Object(x.a)())),e.next=6,r.putString(f,"data_url");case 6:return c=e.sent,e.next=9,c.ref.getDownloadURL();case 9:a=e.sent;case 10:return i={text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=13,b.collection("nweets").add(i);case 13:l(""),d("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:h},r.a.createElement("input",{value:u,onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){d(e.currentTarget.result)},n.readAsDataURL(t)}}),r.a.createElement("input",{type:"submit",value:"Nweet"}),f&&r.a.createElement("div",null,r.a.createElement("img",{src:f,width:"50px",height:"50px"}),r.a.createElement("button",{onClick:function(){d(null)}},"Clear")))},k=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){b.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));l(t)}))}),[]),r.a.createElement("div",null,r.a.createElement(y,{userObj:t}),r.a.createElement("div",null,u.map((function(e){return r.a.createElement(j,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},S=function(e){var t=e.userObj;return console.log(t),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/profile"},t.displayName,"'s Profile"))))},C=function(e){var t=e.isLoggedIn,n=e.refreshUser,a=e.userObj;return r.a.createElement(l.a,null,t&&r.a.createElement(S,{userObj:a}),r.a.createElement(o.c,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(k,{userObj:a})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(v,{userObj:a,refreshUser:n}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(w,null)))))};var I=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(null),l=Object(i.a)(u,2),o=l[0],s=l[1];return Object(a.useEffect)((function(){d.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,n?r.a.createElement(C,{isLoggedIn:Boolean(o),refreshUser:function(){var e=d.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userObj:o}):"Initializing...")};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.39300f82.chunk.js.map