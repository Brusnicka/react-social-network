"use strict";(self.webpackChunkreact_social_network=self.webpackChunkreact_social_network||[]).push([[403],{7403:function(t,e,s){s.r(e),s.d(e,{default:function(){return F}});var n=s(1413),r=s(5671),i=s(3144),o=s(136),u=s(8347),a=s(2791),l="Profile_item__QTNb2",c="ProfileInfo_descriptionBlock__rR-Br",p="ProfileInfo_profileImage__O6NDb",d=s(2495),f=s(7280),h=s(885),x=s(184),j=function(t){var e=(0,a.useState)(!1),s=(0,h.Z)(e,2),n=s[0],r=s[1],i=(0,a.useState)(t.status),o=(0,h.Z)(i,2),u=o[0],l=o[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,x.jsxs)("div",{children:[!n&&(0,x.jsx)("div",{children:(0,x.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"---"})}),n&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},onBlur:function(){r(!1),t.updateStatus(u)},autoFocus:!0,value:u})})]})},v=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)("img",{className:p,src:null!=e.photos.large?e.photos.large:f}),(0,x.jsx)("div",{children:e.fullName}),(0,x.jsx)("div",{children:e.aboutMe}),(0,x.jsx)(j,{status:s,updateStatus:n})]})}):(0,x.jsx)(d.Z,{})},m=s(6508),g="MyPosts_postsBlock__bws95",P="MyPosts_posts__xkQCF",_="Post_item__C456R",k=function(t){return(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("img",{src:f,alt:"profilePic"}),t.message,(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"Like"})," ",t.likeCount]}),(0,x.jsx)("div",{children:(0,x.jsx)("span",{children:"Dislike"})})]})},Z=s(6139),S=s(704),C=s(5304),w=s(8323),N=(0,C.D)(10),b=(0,S.Z)({form:"newPost"})((function(t){return(0,x.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,x.jsx)("div",{children:(0,x.jsx)(Z.Z,{placeholder:"Type your post here",name:"newPostText",component:w.N,fieldType:"textarea",validate:[C.C,N]})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"Add New"})})]})})),y=function(t){console.log("Render");var e=t.posts.map((function(t){return(0,x.jsx)(k,{message:t.message,likeCount:t.likeCount},t.id)}));return(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)("h3",{children:"My posts"}),(0,x.jsx)(b,{onSubmit:function(e){t.addPost(e.newPostText),e.newPostText=""}}),(0,x.jsx)("div",{className:P,children:e})]})},T=s(8687),A=(0,T.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){return t((0,m.Wl)(e))}}}))(y),D=function(t){return(0,x.jsxs)("main",{className:l,children:[(0,x.jsx)(v,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,x.jsx)(A,{})]})},I=s(6871),M=s(1103),B=s(7781),R=function(t){(0,o.Z)(s,t);var e=(0,u.Z)(s);function s(){return(0,r.Z)(this,s),e.apply(this,arguments)}return(0,i.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.signedUserId),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,x.jsx)(D,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(a.Component);var F=(0,B.qC)((0,T.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,signedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:m.Ai,getStatus:m.lR,updateStatus:m.Nf}),(function(t){return function(e){var s=(0,I.TH)(),r=(0,I.s0)(),i=(0,I.UO)();return(0,x.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{router:{location:s,navigate:r,params:i}}))}}),M.D)(R)},1103:function(t,e,s){s.d(e,{D:function(){return f}});var n=s(1413),r=s(5671),i=s(3144),o=s(136),u=s(8347),a=s(2791),l=s(6871),c=s(8687),p=s(184),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){(0,o.Z)(a,e);var s=(0,u.Z)(a);function a(){return(0,r.Z)(this,a),s.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(t,(0,n.Z)({},this.props)):(0,p.jsx)(l.Fg,{to:"/login"})}}]),a}(a.Component);return(0,c.$j)(d)(e)}},7280:function(t,e,s){t.exports=s.p+"static/media/avatarPlaceholder.e9563ec482a44fa91ecf.png"}}]);
//# sourceMappingURL=403.ec28f1f6.chunk.js.map