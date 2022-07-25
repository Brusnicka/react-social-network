"use strict";(self.webpackChunkreact_social_network=self.webpackChunkreact_social_network||[]).push([[901],{7901:function(e,t,n){n.r(t),n.d(t,{default:function(){return je}});var r,s=n(1413),i=n(5671),o=n(3144),a=n(136),l=n(3668),c=n(2791),u="Profile_item__QTNb2",d=n(885),h=n(2495),p=n(7280),x=n(4554),f=n(890),j=n(5914),m=n(184),g=function(e){var t=(0,c.useState)(!1),n=(0,d.Z)(t,2),r=n[0],s=n[1],i=(0,c.useState)(e.status),o=(0,d.Z)(i,2),a=o[0],l=o[1];(0,c.useEffect)((function(){l(e.status)}),[e.status]);return(0,m.jsxs)(x.Z,{children:[!r&&(0,m.jsx)(f.Z,{sx:{cursor:"pointer"},variant:"subtitle1",onDoubleClick:function(){s(!0)},children:e.status||"---"}),r&&(0,m.jsx)(j.Z,{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(a)},autoFocus:!0,value:a})]})},b=n(5705),v=n(132),Z="ProfileInfo_contactItem__5sIzw",k="ProfileInfo_cancelButton__OfPrC",P="ProfileInfo_validationError__QnTRP",_="ErrorMessageWrapper_errorMessage__fC6z9",S=function(e){return(0,m.jsx)("div",{children:(0,m.jsx)("span",{className:_,children:e})})},y=n(5289),w=n(5661),N=n(9157),M=n(6151),C=v.Ry().shape({fullName:v.Z_().min(2,"Must be longer than 2 characters !").max(25,"Must be shorter than 50 characters !").required("Required !"),lookingForAJobDescription:v.Z_().min(2,"Must be longer than 2 characters !").max(50,"Must be shorter than 50 characters !").required("Required !"),aboutMe:v.Z_().min(2,"Must be longer than 2 characters !").max(50,"Must be shorter than 50 characters !").required("Required !")}),F=function(e){var t=e.editMode,n=e.profile,r=e.handleSubmit,s=e.goToViewMode,i=JSON.parse(JSON.stringify(n)),o=Object.keys(n.contacts);return o.forEach((function(e){null===i.contacts[e]&&(i.contacts[e]="")})),console.log(i),(0,m.jsxs)("div",{children:[(0,m.jsx)(b.J9,{initialValues:i,validationSchema:C,onSubmit:function(e,t){var n=t.setStatus,i=t.setSubmitting;r(e,n,i,s)},children:function(e){var n=e.status,r=e.isSubmitting;return(0,m.jsxs)(y.Z,{open:t,children:[(0,m.jsx)(w.Z,{children:"Change profile data"}),(0,m.jsx)(N.Z,{children:(0,m.jsxs)(b.l0,{children:[(0,m.jsx)("div",{children:(0,m.jsx)(b.gN,{name:"fullName",type:"text",placeholder:"Full name"})}),(0,m.jsx)(b.Bc,{name:"fullName",children:S}),(0,m.jsx)("div",{children:(0,m.jsx)("br",{})}),(0,m.jsxs)("div",{children:[(0,m.jsx)(b.gN,{name:"lookingForAJob",type:"checkbox",id:"lookingForAJob"}),(0,m.jsxs)("label",{htmlFor:"lookingForAJob",children:[(0,m.jsx)("b",{children:" Looking for a job"})," "]})]}),(0,m.jsx)("div",{children:(0,m.jsx)("br",{})}),(0,m.jsx)("div",{children:(0,m.jsx)(b.gN,{name:"lookingForAJobDescription",as:"textarea",placeholder:"My professional skills"})}),(0,m.jsx)(b.Bc,{name:"lookingForAJobDescription",children:S}),(0,m.jsx)("div",{children:(0,m.jsx)("br",{})}),(0,m.jsx)("div",{children:(0,m.jsx)(b.gN,{name:"aboutMe",as:"textarea",placeholder:"About me"})}),(0,m.jsx)(b.Bc,{name:"aboutMe",children:S}),(0,m.jsx)("div",{children:(0,m.jsx)("br",{})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts"}),":"]}),(0,m.jsx)(b.F2,{name:"contacts",render:function(){return(0,m.jsx)("div",{children:o.map((function(e){return function(e){return(0,m.jsxs)("div",{className:Z,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:e}),":"]}),(0,m.jsx)("div",{children:(0,m.jsx)(b.gN,{name:"contacts.".concat(e),type:"text",id:e,placeholder:e})})]},e)}(e)}))})}}),(0,m.jsx)("div",{children:(0,m.jsx)("br",{})}),n&&(0,m.jsx)("div",{className:P,children:(0,m.jsxs)("b",{children:[" ",n," - with setStatus "]})}),(0,m.jsx)(M.Z,{variant:"text",type:"submit",disabled:r,children:r?"Please wait...":"Save"}),(0,m.jsx)(M.Z,{variant:"text",sx:{color:"red"},onClick:s,type:"button",className:k,children:" Cancel"})]})})]})}}),(0,m.jsx)("div",{children:(0,m.jsx)("br",{})})]})},A=n(3767),I=n(4721),T=n(6655),z=n(1783),J=n(6719),O=n(4523),D=n(9970),q=n(3136),B=n(255),R=n(6398),E=function(e){var t=e.contactName,n=e.contactValue;return(0,m.jsxs)(f.Z,{display:"flex",alignItems:"center",padding:"10px",margin:"5px",sx:{maxWidth:"450px",marginLeft:"60px"},children:["facebook"===t?(0,m.jsx)(T.Z,{fontSize:"large"}):"website"===t?(0,m.jsx)(z.Z,{fontSize:"large"}):"vk"===t?(0,m.jsx)(J.Z,{fontSize:"large"}):"twitter"===t?(0,m.jsx)(O.Z,{fontSize:"large"}):"instagram"===t?(0,m.jsx)(D.Z,{fontSize:"large"}):"youtube"===t?(0,m.jsx)(q.Z,{fontSize:"large"}):"github"===t?(0,m.jsx)(B.Z,{fontSize:"large"}):"mainLink"===t?(0,m.jsx)(R.Z,{fontSize:"large"}):t,": ",n]})},W=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return(0,m.jsx)(x.Z,{children:(0,m.jsxs)(A.Z,{direction:"column",spacing:1,children:[(0,m.jsx)(I.Z,{orientation:"horizontal",flexItem:!0}),(0,m.jsxs)(f.Z,{sx:{fontWeight:"bold"},children:["Looking for a job: ",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&(0,m.jsxs)(f.Z,{sx:{fontWeight:"bold"},children:["My professional skills : ",t.lookingForAJobDescription]}),(0,m.jsxs)(f.Z,{sx:{fontWeight:"bold"},children:[" About me : ",t.aboutMe]}),(0,m.jsx)(I.Z,{orientation:"horizontal",flexItem:!0}),(0,m.jsxs)(f.Z,{sx:{fontWeight:"bold"},children:["Contacts: ",Object.keys(t.contacts).map((function(e){return(0,m.jsx)(E,{contactName:e,contactValue:t.contacts[e]},e)}))]}),n&&(0,m.jsx)(M.Z,{variant:"contained",onClick:r,children:"Edit profile"})]})})},L=n(3400),U=n(3044),V=function(e){var t=e.isOwner,n=e.profile,r=e.status,s=e.updateStatus,i=e.updatePhoto,o=e.updateProfile,a=(0,c.useState)(!1),l=(0,d.Z)(a,2),u=l[0],j=l[1];if(!n)return(0,m.jsx)(h.Z,{});return(0,m.jsxs)(x.Z,{children:[(0,m.jsxs)(A.Z,{direction:"row",spacing:2,alignItems:"center",sx:{marginTop:"20px",marginBottom:"20px"},children:[t?(0,m.jsxs)(L.Z,{flex:2,sx:{width:"150px"},color:"primary","aria-label":"upload picture",component:"label",children:[(0,m.jsx)("input",{hidden:!0,type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}}),(0,m.jsx)(U.Z,{src:null!=n.photos.large?n.photos.large:p,alt:"Avatar",sx:{width:"150px",height:"150px"}})]}):(0,m.jsx)(U.Z,{flex:2,src:null!=n.photos.large?n.photos.large:p,alt:"Avatar",sx:{width:"150px",height:"150px"}}),(0,m.jsxs)(A.Z,{direction:"column",flex:4,spacing:1,alignItems:"left",children:[(0,m.jsx)(f.Z,{variant:"h6",children:n.fullName}),(0,m.jsx)(g,{status:r,updateStatus:s})]})]}),u?(0,m.jsx)(F,{profile:n,handleSubmit:function(e,t,n,r){o(e,t,n,r)},editMode:u,goToViewMode:function(){j(!1)}}):(0,m.jsx)(W,{profile:n,goToEditMode:function(){j(!0)},isOwner:t})]})},Q=n(6508),$="MyPosts_postsBlock__bws95",H="MyPosts_posts__xkQCF",Y="Post_item__C456R",G=function(e){return(0,m.jsxs)("div",{className:Y,children:[(0,m.jsx)("img",{src:p,alt:"profilePic"}),e.message,(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:"Like"})," ",e.likeCount]}),(0,m.jsx)("div",{children:(0,m.jsx)("span",{children:"Dislike"})})]})},K=n(6139),X=n(704),ee=function(e){if(!e)return"Field is required"},te=n(5987),ne="FormControls_formControl__FdFpZ",re="FormControls_error__4FBFc",se=["input","meta"],ie=function(e){var t=e.input,n=e.meta,r=n.touched,i=n.error,o=(0,te.Z)(e,se),a=r&&i;return(0,m.jsxs)("div",{className:ne+" "+(a?re:""),children:[(0,m.jsx)(o.fieldType,(0,s.Z)((0,s.Z)({},t),o)),a&&(0,m.jsx)("span",{children:i})]})},oe=(r=10,function(e){if(e&&e.length>r)return"Max length is ".concat(r," symbols")}),ae=(0,X.Z)({form:"newPost"})((function(e){return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(K.Z,{placeholder:"Type your post here",name:"newPostText",component:ie,fieldType:"textarea",validate:[ee,oe]})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Add New"})})]})})),le=function(e){console.log("Render");var t=e.posts.map((function(e){return(0,m.jsx)(G,{message:e.message,likeCount:e.likeCount},e.id)}));return(0,m.jsxs)("div",{className:$,children:[(0,m.jsx)("h3",{children:"My posts"}),(0,m.jsx)(ae,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}}),(0,m.jsx)("div",{className:H,children:t})]})},ce=n(8687),ue=(0,ce.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){return e((0,Q.Wl)(t))}}}))(le),de=function(e){return(0,m.jsxs)("main",{className:u,children:[(0,m.jsx)(V,{updatePhoto:e.updatePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,updateProfile:e.updateProfile}),(0,m.jsx)(ue,{})]})},he=n(6871),pe=n(1103),xe=n(7781),fe=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.signedUserId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.router.params.userId!==e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)(de,(0,s.Z)((0,s.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,updatePhoto:this.props.updatePhoto,updateProfile:this.props.updateProfile}))}}]),n}(c.Component);var je=(0,xe.qC)((0,ce.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,signedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:Q.Ai,getStatus:Q.lR,updateStatus:Q.Nf,updatePhoto:Q.tU,updateProfile:Q.ck}),(function(e){return function(t){var n=(0,he.TH)(),r=(0,he.s0)(),i=(0,he.UO)();return(0,m.jsx)(e,(0,s.Z)((0,s.Z)({},t),{},{router:{location:n,navigate:r,params:i}}))}}),pe.D)(fe)},1103:function(e,t,n){n.d(t,{D:function(){return p}});var r=n(1413),s=n(5671),i=n(3144),o=n(136),a=n(3668),l=n(2791),c=n(6871),u=n(8687),d=n(184),h=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){(0,o.Z)(l,t);var n=(0,a.Z)(l);function l(){return(0,s.Z)(this,l),n.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,r.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(h)(t)}},7280:function(e,t,n){e.exports=n.p+"static/media/avatarPlaceholder.e9563ec482a44fa91ecf.png"}}]);
//# sourceMappingURL=901.838d8089.chunk.js.map