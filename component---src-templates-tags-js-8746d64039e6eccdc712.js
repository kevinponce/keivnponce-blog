(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(0),M=a.n(n),i=a(218),r=a(223),c=a(227);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=t.site.siteMetadata.title,o=t.allMarkdownRemark.edges,u=t.arduinoIcon,N=t.gatsbyIcon,l=t.googleMapsIcon,s=t.jsIcon,g=t.postgresIcon,L=t.pythonIcon,j=t.raspberryIcon,I=t.rubyIcon;return M.a.createElement(i.a,{location:this.props.location,title:n},M.a.createElement(r.a,{title:"All posts"}),M.a.createElement(c.a,{posts:o,pageContext:a,prefixUrl:"/tags/"+a.tag+"/",arduinoIcon:u,gatsbyIcon:N,googleMapsIcon:l,postgresIcon:g,pythonIcon:L,raspberryIcon:j,rubyIcon:I,jsIcon:s}))},n}(M.a.Component);t.default=o;var u="3992239250"},216:function(e,t,a){var n;e.exports=(n=a(219))&&n.default||n},217:function(e,t,a){"use strict";var n=a(0),M=a.n(n),i=a(66),r=a.n(i);a.d(t,"a",function(){return r.a});a(216),a(9).default.enqueue,M.a.createContext({})},218:function(e,t,a){"use strict";var n=a(0),M=a.n(n),i=(a(199),a(217)),r=a(220),c=a.n(r),o=a(221),u=a.n(o),N=a(222),l=a.n(N);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this,a=this.props,n=a.location,r=a.children;return M.a.createElement("div",{className:"l-site "+(this.state.isOpen?"is-open":"")},M.a.createElement("div",{className:"l-nav"},M.a.createElement("nav",{className:"nav"},M.a.createElement("div",{className:"menu close "+(this.state.isOpen?"":"hide")},M.a.createElement("div",{className:"menu-hamburger",onClick:function(e){e.preventDefault(),t.setState({isOpen:!t.state.isOpen})}})),M.a.createElement("ul",null,M.a.createElement("li",{className:"nav-primary logo"},M.a.createElement(i.a,{to:"/"},"Kevin Ponce.")),M.a.createElement("li",{className:"nav-primary"},M.a.createElement(i.a,((e={to:"/blogs",style:{color:0===n.pathname.indexOf("/blog")||0===n.pathname.indexOf("/tags")?"#69D2E7":"#fff"}}).to="/blogs",e),"BLOG")),M.a.createElement("li",{className:"nav-primary"},M.a.createElement(i.a,{style:{color:0===n.pathname.indexOf("/about")?"#F9D423":"#fff"},to:"/about"},"ABOUT")),M.a.createElement("li",{className:"nav-secondary social-link-wrapper"},M.a.createElement("a",{href:"https://github.com/kevinponce"},M.a.createElement("img",{src:c.a,className:"icon",alt:"github icon"}),M.a.createElement("span",null,"GITHUB"))),M.a.createElement("li",{className:"nav-secondary social-link-wrapper"},M.a.createElement("a",{href:"https://twitter.com/KevinPonce88"},M.a.createElement("img",{src:u.a,className:"icon",alt:"twitter icon"}),M.a.createElement("span",null,"TWITTER"))),M.a.createElement("li",{className:"nav-secondary social-link-wrapper"},M.a.createElement("a",{href:"https://codepen.io/kevinponce"},M.a.createElement("img",{src:l.a,className:"icon",alt:"codepen icon"}),M.a.createElement("span",null,"CODEPEN")))))),M.a.createElement("div",{className:"l-page"},M.a.createElement("div",{className:"menu "+(this.state.isOpen?"hide":"")},M.a.createElement("div",{className:"menu-hamburger dark",onClick:function(e){e.preventDefault(),t.setState({isOpen:!t.state.isOpen})}})),M.a.createElement("div",{className:"child-wrapper"},r)))},n}(M.a.Component);t.a=s},219:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),M=a.n(n),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?M.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},220:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJnaXRodWIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1naXRodWIgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiI+PC9wYXRoPjwvc3ZnPg=="},221:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ0d2l0dGVyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtdHdpdHRlciBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6Ij48L3BhdGg+PC9zdmc+"},222:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJjb2RlcGVuIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY29kZXBlbiBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01MDIuMjg1IDE1OS43MDRsLTIzNC0xNTZjLTcuOTg3LTQuOTE1LTE2LjUxMS00Ljk2LTI0LjU3MSAwbC0yMzQgMTU2QzMuNzE0IDE2My43MDMgMCAxNzAuODQ3IDAgMTc3Ljk4OXYxNTUuOTk5YzAgNy4xNDMgMy43MTQgMTQuMjg2IDkuNzE1IDE4LjI4NmwyMzQgMTU2LjAyMmM3Ljk4NyA0LjkxNSAxNi41MTEgNC45NiAyNC41NzEgMGwyMzQtMTU2LjAyMmM2LTMuOTk5IDkuNzE1LTExLjE0MyA5LjcxNS0xOC4yODZWMTc3Ljk4OWMtLjAwMS03LjE0Mi0zLjcxNS0xNC4yODYtOS43MTYtMTguMjg1ek0yNzggNjMuMTMxbDE3Mi4yODYgMTE0Ljg1OC03Ni44NTcgNTEuNDI5TDI3OCAxNjUuNzAzVjYzLjEzMXptLTQ0IDB2MTAyLjU3MmwtOTUuNDI5IDYzLjcxNS03Ni44NTctNTEuNDI5TDIzNCA2My4xMzF6TTQ0IDIxOS4xMzJsNTUuMTQzIDM2Ljg1N0w0NCAyOTIuODQ2di03My43MTR6bTE5MCAyMjkuNzE1TDYxLjcxNCAzMzMuOTg5bDc2Ljg1Ny01MS40MjlMMjM0IDM0Ni4yNzV2MTAyLjU3MnptMjItMTQwLjg1OGwtNzcuNzE1LTUyIDc3LjcxNS01MiA3Ny43MTUgNTItNzcuNzE1IDUyem0yMiAxNDAuODU4VjM0Ni4yNzVsOTUuNDI5LTYzLjcxNSA3Ni44NTcgNTEuNDI5TDI3OCA0NDguODQ3em0xOTAtMTU2LjAwMWwtNTUuMTQzLTM2Ljg1N0w0NjggMjE5LjEzMnY3My43MTR6Ij48L3BhdGg+PC9zdmc+"},223:function(e,t,a){"use strict";var n=a(224),M=a(0),i=a.n(M),r=a(225),c=a.n(r);function o(e){var t=e.description,a=e.lang,M=e.meta,r=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:r},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:u}].concat(M)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},224:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Ponce Blog",description:"Kevin Ponce Blog",author:"Kevin Ponce"}}}}},227:function(e,t,a){"use strict";a(91),a(133),a(67),a(13),a(38),a(226);var n=a(0),M=a.n(n),i=a(217),r=(a(200),a(228)),c=a.n(r),o=a(231),u=a.n(o);function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).renderHeader=a.renderHeader.bind(N(a)),a.renderPosts=a.renderPosts.bind(N(a)),a.pagination=a.pagination.bind(N(a)),a.state={mounted:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.setState({mounted:!0})},r.renderHeader=function(e){var t,a=this.props,n=a.arduinoIcon,i=a.gatsbyIcon,r=a.googleMapsIcon,o=a.jsIcon,u=a.postgresIcon,N=a.pythonIcon,l=a.raspberryIcon,s=a.rubyIcon,g=e.frontmatter.header;if(g){var L=g.type,j=g.icon,I=g.bgColor;return"icon"===L&&("gatsby"===j?t=M.a.createElement(c.a,{fixed:i.childImageSharp.fixed}):"python"===j?t=M.a.createElement(c.a,{fixed:N.childImageSharp.fixed}):"ruby"===j?t=M.a.createElement(c.a,{fixed:s.childImageSharp.fixed}):"arduino"===j?t=M.a.createElement(c.a,{fixed:n.childImageSharp.fixed}):"raspberry"===j?t=M.a.createElement(c.a,{fixed:l.childImageSharp.fixed}):"postgres"===j?t=M.a.createElement(c.a,{fixed:u.childImageSharp.fixed}):"google-maps"===j?t=M.a.createElement(c.a,{fixed:r.childImageSharp.fixed}):"js"===j&&(t=M.a.createElement(c.a,{fixed:o.childImageSharp.fixed})),void 0!==t)?M.a.createElement("div",{className:"blog-post-header"},M.a.createElement("div",{className:"blog-post-header-no-image",style:{backgroundColor:I}},t)):void 0}},r.renderPosts=function(){var e=this;return this.props.posts.map(function(t){var a=t.node,n=a.frontmatter.title||a.fields.slug,r=a.frontmatter.tags||[];return M.a.createElement("div",{className:"blog-post-wrapper pds-blogs pds-blogs-blogs-card",key:a.fields.slug},M.a.createElement("div",{className:"blog-post"},e.renderHeader(a),M.a.createElement("div",{className:"blog-post-description"},M.a.createElement(i.a,{style:{boxShadow:"none"},to:"/blog/"+a.fields.slug}," ",n),M.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}}),M.a.createElement("div",{className:"tags-wrapper"},r.map(function(e){return M.a.createElement(i.a,{style:{boxShadow:"none"},to:"/tags/"+e,key:a.fields.slug+"-"+e},u.a.startCase(u.a.toLower(e.split("-").join(" "))))})))))})},r.pagination=function(){var e=this,t=this.props.pageContext,a=t.currentPage,n=t.numPages,r=1===a,c=a===n,o=this.props.prefixUrl+(a-1==1?"":(a-1).toString()),u=this.props.prefixUrl+(a+1).toString();return n<=1?M.a.createElement("div",null):M.a.createElement("ul",null,!r&&M.a.createElement("li",null,M.a.createElement(i.a,{to:o,rel:"prev"},M.a.createElement(MaterialIcon,{icon:"chevron_left",size:22,color:"#fff"}))),Array.from({length:n},function(t,n){return M.a.createElement("li",{key:"pagination-number"+(n+1)},M.a.createElement(i.a,{to:""+e.props.prefixUrl+(0===n?"":n+1),style:{color:"#ffffff",background:n+1===a?"#69D2E7":""}},n+1))}),!c&&M.a.createElement("li",null,M.a.createElement(i.a,{to:u,rel:"next"},M.a.createElement(MaterialIcon,{icon:"chevron_right",size:22,color:"#fff"}))))},r.render=function(){return M.a.createElement("div",{className:"blogs-wrapper"},this.pagination())},n}(M.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-templates-tags-js-8746d64039e6eccdc712.js.map