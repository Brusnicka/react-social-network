/*! For license information please see 194.71a5691f.chunk.js.LICENSE.txt */
(self.webpackChunkreact_social_network=self.webpackChunkreact_social_network||[]).push([[194],{9194:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return B}});var t=r(5671),o=r(3144),i=r(136),u=r(8347),s=r(8687),a=r(6962),l=r(2791),c=r(5987),f=r(4942),p=r(885),g="Paginator_paginator__IEmyw",h="Paginator_pageNumber__cBZ0d",d="Paginator_selectedPage__MSVw8",v=r(1694),y=r.n(v),P=r(184),w=function(n){for(var e=n.totalItemsCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,i=n.portionSize,u=void 0===i?10:i,s=Math.ceil(e/r),a=[],c=1;c<=s;c++)a.push(c);var v=Math.ceil(s/u),w=(0,l.useState)(1),x=(0,p.Z)(w,2),j=x[0],m=x[1],C=(j-1)*u+1,k=j*u;return(0,P.jsxs)("div",{className:g,children:[j>1&&(0,P.jsx)("button",{onClick:function(){m(j-1)},children:"Prev"}),a.filter((function(n){return n>=C&&n<=k})).map((function(n){return(0,P.jsx)("span",{className:y()((0,f.Z)({},d,t===n),h),onClick:function(e){o(n)},children:n},n.id)})),v>j&&(0,P.jsx)("button",{onClick:function(){m(j+1)},children:"Next"})]})},x="Users_userPhoto__FuA11",j=r(7280),m=r(3504),C=function(n){var e=n.user,r=n.followingInProgress,t=n.unfollow,o=n.follow;return(0,P.jsxs)("div",{children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:(0,P.jsxs)(m.OL,{to:"/profile/"+e.id,children:["  ",(0,P.jsx)("img",{className:x,src:null!=e.photos.small?e.photos.small:j,alt:"profilePic"})]})}),(0,P.jsx)("div",{children:e.followed?(0,P.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"Unfollow"}):(0,P.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"Follow"})})]}),(0,P.jsxs)("span",{children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:e.name}),(0,P.jsx)("div",{children:e.status})]}),(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:"user.location.city"}),(0,P.jsx)("div",{children:"user.location.country"})]})]})]})},k=["totalUsersCount","pageSize","currentPage","onPageChanged"],S=function(n){var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,i=(0,c.Z)(n,k);return(0,P.jsxs)("div",{children:[(0,P.jsx)(w,{totalItemsCount:e,pageSize:r,currentPage:t,onPageChanged:o}),i.users.map((function(n){return(0,P.jsx)(C,{user:n,followingInProgress:i.followingInProgress,follow:i.follow,unfollow:i.unfollow},n.id)}))]})},b=r(2495),_=r(7781),z="NOT_FOUND";var U=function(n,e){return n===e};function I(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?U:t,i=r.maxSize,u=void 0===i?1:i,s=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),l=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:z},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return z}return{get:t,put:function(e,o){t(e)===z&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,a);function c(){var e=l.get(arguments);if(e===z){if(e=n.apply(null,arguments),s){var r=l.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return c.clearCache=function(){return l.clear()},c}function F(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function Z(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(s=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=s,c=l.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=F(t),h=n.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return o}var A=Z(I),N=A((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),O=function(n){return n.usersPage.pageSize},E=function(n){return n.usersPage.totalUsersCount},q=function(n){return n.usersPage.currentPage},D=function(n){return n.usersPage.isFetching},M=function(n){return n.usersPage.followingInProgress},R=function(n){(0,i.Z)(r,n);var e=(0,u.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=e.call.apply(e,[this].concat(i))).onPageChanged=function(e){var r=n.props.pageSize;n.props.setCurrentPage(e),n.props.getUsersData(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsersData(e,r)}},{key:"render",value:function(){return(0,P.jsxs)(P.Fragment,{children:[this.props.isFetching?(0,P.jsx)(b.Z,{}):null,(0,P.jsx)(S,{pageSize:this.props.pageSize,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress})]})}}]),r}(l.Component),B=(0,_.qC)((0,s.$j)((function(n){return{users:N(n),pageSize:O(n),totalUsersCount:E(n),currentPage:q(n),isFetching:D(n),followingInProgress:M(n)}}),{acceptFollow:a.Qh,acceptUnfollow:a.Gq,setCurrentPage:a.D4,toggleFollowingInProgress:a.n_,getUsersData:a.Zq,follow:a.ZN,unfollow:a.fv}))(R)},1694:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&n.push(u)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)t.call(r,s)&&r[s]&&n.push(s);else n.push(r.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},7280:function(n,e,r){"use strict";n.exports=r.p+"static/media/avatarPlaceholder.e9563ec482a44fa91ecf.png"}}]);
//# sourceMappingURL=194.71a5691f.chunk.js.map