(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{204:function(t,e,M){"use strict";M.r(e),M.d(e,"pageQuery",function(){return j});M(18);var a=M(0),i=M.n(a),n=M(217),N=M(218),u=M(223),c=M(233);M(205);var L=function(t){var e,M;function a(){return t.apply(this,arguments)||this}return M=t,(e=a).prototype=Object.create(M.prototype),e.prototype.constructor=e,e.__proto__=M,a.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,M=this.props.pageContext,a=M.previous,L=M.next;return i.a.createElement(N.a,{location:this.props.location,title:e},i.a.createElement(u.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),i.a.createElement("div",{className:"blog-container"},i.a.createElement("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},t.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})},t.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,a&&i.a.createElement(n.a,{to:"/blog"+a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),i.a.createElement("li",null,L&&i.a.createElement(n.a,{to:"/blog"+L.fields.slug,rel:"next"},L.frontmatter.title," →")))))},a}(i.a.Component);e.default=L;var j="3654438753"},216:function(t,e,M){var a;t.exports=(a=M(219))&&a.default||a},217:function(t,e,M){"use strict";var a=M(0),i=M.n(a),n=M(66),N=M.n(n);M.d(e,"a",function(){return N.a});M(216),M(9).default.enqueue,i.a.createContext({})},218:function(t,e,M){"use strict";var a=M(0),i=M.n(a),n=(M(199),M(217)),N=M(220),u=M.n(N),c=M(221),L=M.n(c),j=M(222),r=M.n(j);var y=function(t){var e,M;function a(e){var M;return(M=t.call(this,e)||this).state={isOpen:!1},M}return M=t,(e=a).prototype=Object.create(M.prototype),e.prototype.constructor=e,e.__proto__=M,a.prototype.render=function(){var t,e=this,M=this.props,a=M.location,N=M.children;return i.a.createElement("div",{className:"l-site "+(this.state.isOpen?"is-open":"")},i.a.createElement("div",{className:"l-nav"},i.a.createElement("nav",{className:"nav"},i.a.createElement("div",{className:"menu close "+(this.state.isOpen?"":"hide")},i.a.createElement("div",{className:"menu-hamburger",onClick:function(t){t.preventDefault(),e.setState({isOpen:!e.state.isOpen})}})),i.a.createElement("ul",null,i.a.createElement("li",{className:"nav-primary logo"},i.a.createElement(n.a,{to:"/"},"Kevin Ponce.")),i.a.createElement("li",{className:"nav-primary"},i.a.createElement(n.a,((t={to:"/blogs",style:{color:0===a.pathname.indexOf("/blog")||0===a.pathname.indexOf("/tags")?"#69D2E7":"#fff"}}).to="/blogs",t),"BLOG")),i.a.createElement("li",{className:"nav-primary"},i.a.createElement(n.a,{style:{color:0===a.pathname.indexOf("/about")?"#F9D423":"#fff"},to:"/about"},"ABOUT")),i.a.createElement("li",{className:"nav-secondary social-link-wrapper"},i.a.createElement("a",{href:"https://github.com/kevinponce"},i.a.createElement("img",{src:u.a,className:"icon",alt:"github icon"}),i.a.createElement("span",null,"GITHUB"))),i.a.createElement("li",{className:"nav-secondary social-link-wrapper"},i.a.createElement("a",{href:"https://twitter.com/KevinPonce88"},i.a.createElement("img",{src:L.a,className:"icon",alt:"twitter icon"}),i.a.createElement("span",null,"TWITTER"))),i.a.createElement("li",{className:"nav-secondary social-link-wrapper"},i.a.createElement("a",{href:"https://codepen.io/kevinponce"},i.a.createElement("img",{src:r.a,className:"icon",alt:"codepen icon"}),i.a.createElement("span",null,"CODEPEN")))))),i.a.createElement("div",{className:"l-page"},i.a.createElement("div",{className:"menu "+(this.state.isOpen?"hide":"")},i.a.createElement("div",{className:"menu-hamburger dark",onClick:function(t){t.preventDefault(),e.setState({isOpen:!e.state.isOpen})}})),i.a.createElement("div",{className:"child-wrapper"},N)))},a}(i.a.Component);e.a=y},219:function(t,e,M){"use strict";M.r(e);M(18);var a=M(0),i=M.n(a),n=M(91);e.default=function(t){var e=t.location,M=t.pageResources;return M?i.a.createElement(n.a,Object.assign({location:e,pageResources:M},M.json)):null}},220:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJnaXRodWIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1naXRodWIgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiI+PC9wYXRoPjwvc3ZnPg=="},221:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ0d2l0dGVyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtdHdpdHRlciBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6Ij48L3BhdGg+PC9zdmc+"},222:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJjb2RlcGVuIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY29kZXBlbiBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01MDIuMjg1IDE1OS43MDRsLTIzNC0xNTZjLTcuOTg3LTQuOTE1LTE2LjUxMS00Ljk2LTI0LjU3MSAwbC0yMzQgMTU2QzMuNzE0IDE2My43MDMgMCAxNzAuODQ3IDAgMTc3Ljk4OXYxNTUuOTk5YzAgNy4xNDMgMy43MTQgMTQuMjg2IDkuNzE1IDE4LjI4NmwyMzQgMTU2LjAyMmM3Ljk4NyA0LjkxNSAxNi41MTEgNC45NiAyNC41NzEgMGwyMzQtMTU2LjAyMmM2LTMuOTk5IDkuNzE1LTExLjE0MyA5LjcxNS0xOC4yODZWMTc3Ljk4OWMtLjAwMS03LjE0Mi0zLjcxNS0xNC4yODYtOS43MTYtMTguMjg1ek0yNzggNjMuMTMxbDE3Mi4yODYgMTE0Ljg1OC03Ni44NTcgNTEuNDI5TDI3OCAxNjUuNzAzVjYzLjEzMXptLTQ0IDB2MTAyLjU3MmwtOTUuNDI5IDYzLjcxNS03Ni44NTctNTEuNDI5TDIzNCA2My4xMzF6TTQ0IDIxOS4xMzJsNTUuMTQzIDM2Ljg1N0w0NCAyOTIuODQ2di03My43MTR6bTE5MCAyMjkuNzE1TDYxLjcxNCAzMzMuOTg5bDc2Ljg1Ny01MS40MjlMMjM0IDM0Ni4yNzV2MTAyLjU3MnptMjItMTQwLjg1OGwtNzcuNzE1LTUyIDc3LjcxNS01MiA3Ny43MTUgNTItNzcuNzE1IDUyem0yMiAxNDAuODU4VjM0Ni4yNzVsOTUuNDI5LTYzLjcxNSA3Ni44NTcgNTEuNDI5TDI3OCA0NDguODQ3em0xOTAtMTU2LjAwMWwtNTUuMTQzLTM2Ljg1N0w0NjggMjE5LjEzMnY3My43MTR6Ij48L3BhdGg+PC9zdmc+"},223:function(t,e,M){"use strict";var a=M(224),i=M(0),n=M.n(i),N=M(225),u=M.n(N);function c(t){var e=t.description,M=t.lang,i=t.meta,N=t.title,c=a.data.site,L=e||c.siteMetadata.description;return n.a.createElement(u.a,{htmlAttributes:{lang:M},title:N,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:L},{property:"og:title",content:N},{property:"og:description",content:L},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:N},{name:"twitter:description",content:L}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},224:function(t){t.exports={data:{site:{siteMetadata:{title:"Kevin Ponce Blog",description:"Kevin Ponce Blog",author:"Kevin Ponce"}}}}},233:function(t,e,M){"use strict";M.d(e,"a",function(){return n}),M.d(e,"b",function(){return N});var a=M(237),i=new(M.n(a).a)({baseFontSize:"18px",baseLineHeight:1.666,headerFontFamily:["adelle-sans","Avenir Next","Helvetica Neue","Segoe UI","Helvetica","Arial","sans-serif"],bodyFontFamily:["Georgia","serif"]}),n=i.rhythm,N=i.scale}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-00a035c12e174d8a4b41.js.map