(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1onL":function(e,t,r){e.exports=r.p+"static/tania-avatar-98e2c1a8c2893157248f6b5ee16d10d4.jpg"},RXBc:function(e,t,r){"use strict";r.r(t);r("f3/d");var n=r("q1tI"),o=r.n(n),a=r("TJpk"),i=r.n(a);r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=u(this,d(t).call(this,e))).$=o.a.createRef(),r._=o.a.createRef(),r}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return o.a.createElement("span",{ref:this.$},o.a.createElement("a",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.props,{ref:this._}),this.props.children))}},{key:"componentDidMount",value:function(){this.paint()}},{key:"getSnapshotBeforeUpdate",value:function(){return this.reset(),null}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){this.reset()}},{key:"paint",value:function(){var e=this,t=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(null,"q01k")).then((function(r){(0,r.render)(t.appendChild(e._.current),(function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}}))}))}},{key:"reset",value:function(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}])&&l(n.prototype,a),i&&l(n,i),t}(n.PureComponent),h=r("Wbzz"),g=r("83Zx"),b=r("lPsB");var v=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.projects;return o.a.createElement("section",{className:"projects"},e.map((function(e){return o.a.createElement("div",{className:"each",key:e.title},o.a.createElement("h2",null,o.a.createElement("a",{className:"project-link",href:e.source,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:"project-icon"},e.icon),o.a.createElement("div",{className:"project-title"},e.title))),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"buttons"},o.a.createElement(m,{href:e.source,"data-size":"large","data-show-count":"true"},"Source"),e.path&&o.a.createElement("a",{className:"button",href:e.path,target:"_blank",rel:"noopener noreferrer"},"View")))})))},n}(n.Component);var y=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.data;return o.a.createElement("section",{className:"simple-posts"},e.map((function(e){return o.a.createElement("a",{href:e.path,key:e.title,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:"each"},o.a.createElement("h2",null,o.a.createElement("img",{src:e.img,alt:e.title}),e.title)))})))},n}(n.Component),w=r("EYWl"),E=r("IpnI"),k=r.n(E),x=[],C=[],_=[],N=[],j=r("1onL"),O=r.n(j);r.d(t,"default",(function(){return z})),r.d(t,"pageQuery",(function(){return F}));var z=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.data,t=e.latest.edges,r=e.popular.edges;return o.a.createElement(g.a,null,o.a.createElement(i.a,{title:k.a.siteTitle+" – Developer & Writer"}),o.a.createElement(w.a,null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"lead"},o.a.createElement("div",{className:"elevator"},o.a.createElement("h1",null,"Hey, I'm Samuel"),o.a.createElement("p",null,"I'm a  software developer working on"," ",o.a.createElement("a",{href:"https://github.com/samuelbartels20",target:"_blank",rel:"noopener noreferrer"},"open source")," ","and ",o.a.createElement(h.Link,{to:"/blog"},"writing")," about modern JavaScript, Java, Python and Web development. 💾"),o.a.createElement("div",{className:"social-buttons"},o.a.createElement(m,{href:"https://github.com/samuelbartels20","data-size":"large","data-show-count":"true"},"samuelbartels20"))),o.a.createElement("div",{className:"newsletter-section"},o.a.createElement("img",{src:O.a,className:"newsletter-avatar",alt:"Samuel"}),o.a.createElement("div",null,o.a.createElement("h3",null,"Get updates"),o.a.createElement("p",null,"Open source projects and development tutorials"),o.a.createElement("a",{className:"button",href:"https://samuelbartels.substack.com"},"Subscribe"))))),o.a.createElement("div",{className:"container front-page"},o.a.createElement("section",{className:"section"},o.a.createElement("h2",null,"Latest Articles",o.a.createElement(h.Link,{to:"/blog",className:"view-all"},"View all")),o.a.createElement(b.a,{simple:!0,postEdges:t})),o.a.createElement("section",{className:"section"},o.a.createElement("h2",null,"Most Popular",o.a.createElement(h.Link,{to:"/categories/popular",className:"view-all"},"View all")),o.a.createElement(b.a,{simple:!0,postEdges:r})),o.a.createElement("section",{className:"section"},o.a.createElement(v,{projects:x})),o.a.createElement("section",{className:"section"},o.a.createElement(y,{simple:!0,data:_})),o.a.createElement("section",{className:"section"},o.a.createElement(y,{simple:!0,data:C})),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"quotations"},N.map((function(e){return o.a.createElement("blockquote",{className:"quotation",key:e.name},o.a.createElement("p",null,e.quote),o.a.createElement("cite",null,"— ",e.name))}))))))},n}(n.Component),F="111868579"},WLL4:function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},jm62:function(e,t,r){var n=r("XKFU"),o=r("mQtv"),a=r("aCFj"),i=r("EemH"),c=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=a(e),l=i.f,s=o(n),u={},d=0;s.length>d;)void 0!==(r=l(n,t=s[d++]))&&c(u,t,r);return u}})},lPsB:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("Z2Ku"),r("L9s1"),r("0mN4");var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("9eSz"),c=r.n(i),l=r("wd/R"),s=r.n(l),u=r("QDog");var d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.getPostList=function(){return this.props.postEdges.map((function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,thumbnail:e.node.frontmatter.thumbnail,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,categories:e.node.frontmatter.categories}}))},i.render=function(){var e=this.props.simple,t=this.getPostList();return o.a.createElement("section",{className:"posts "+(e?"simple":"")},t.map((function(t){var r;t.thumbnail&&(r=t.thumbnail.childImageSharp.fixed);var n=t.categories.includes("Popular"),i=Object(u.b)(t.date),l=s()(t.date)>s()().subtract(1,"months");return o.a.createElement(a.Link,{to:t.path,key:t.title},o.a.createElement("div",{className:"each"},r?o.a.createElement(c.a,{fixed:r}):o.a.createElement("div",null),o.a.createElement("div",{className:"each-list-item"},o.a.createElement("h2",null,t.title),!e&&o.a.createElement("div",{className:"excerpt"},i)),l&&o.a.createElement("div",{className:"alert"},o.a.createElement("div",{className:"new"},"New!")),n&&!e&&!l&&o.a.createElement("div",{className:"alert"},o.a.createElement("div",{className:"popular"},"Popular"))))})))},n}(n.Component)},mQtv:function(e,t,r){var n=r("kJMx"),o=r("JiEa"),a=r("y3w9"),i=r("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(a(e)),r=o.f;return r?t.concat(r(e)):t}},q01k:function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return C}));r("f3/d"),r("pIFo"),r("KKXr");var n=window.document,o=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,c=function(e){return function(t,r,n){var o=e.createElement(t);if(r)for(var a in r){var i=r[a];null!=i&&(null!=o[a]?o[a]=i:o.setAttribute(a,i))}if(n)for(var c=0,l=n.length;c<l;c++){var s=n[c];o.appendChild("string"==typeof s?e.createTextNode(s):s)}return o}},l=c(n),s=function(e,t){return{}.hasOwnProperty.call(e,t)},u=i&&i.prototype&&"withCredentials"in i.prototype,d=u&&a&&a.prototype.attachShadow&&!a.prototype.attachShadow.prototype,p=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},f=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},m={light:".btn{color:#24292e;background-color:#eff3f6;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5');border-color:#cdcfd1;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0');background-position:-0.5em;border-color:#acaeb0;border-color:rgba(27,31,35,.35)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;background-image:none;border-color:#acaeb0;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226');border-color:#2b3138;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21');background-position:-0.5em;border-color:#252b30;border-color:rgba(27,31,35,.5)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;background-image:none;border-color:#252b30;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},h=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+m[s(m,t)?t:e]+"}"},g=function(e){if(null==e)return m.light;var t=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.decodeURIComponent);for(var o={},a=e.split(t),i=0,c=a.length;i<c;++i){var l=a[i];if(""!==l){var s=l.split(r);o[n(s[0])]=null!=s[1]?n(s.slice(1).join(r)):void 0}}return o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return m[s(m,t["no-preference"])?t["no-preference"]:"light"]+h("light",t.light)+h("dark",t.dark)},b={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},v={},y=function(e,t){var r=v[e]||(v[e]=[]);if(!(r.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete v[e];t=r.shift();)t.apply(null,arguments)}));if(u){var o=new i;p(o,"abort",n),p(o,"error",n),p(o,"load",(function(){var e;try{e=JSON.parse(o.responseText)}catch(t){return void n(t)}n(200!==o.status,e)})),o.open("GET",e),o.send()}else{var a=this||window;a._=function(e){a._=null,n(200!==e.meta.status,e.data)};var l=c(a.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};p(l,"load",s),p(l,"error",s),l.readyState&&function(e,t,r){p(e,"readystatechange",(function n(o){if(t.test(e.readyState))return f(e,"readystatechange",n),r(o)}))}(l,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(l)}}},w=function(e,t,r){var n=c(e.ownerDocument),o=e.appendChild(n("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+g(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.ownerDocument.createTextNode(a));var i,l,u=n("a",{className:"btn",href:t.href,target:"_blank",rel:"noopener",innerHTML:(i=t["data-icon"],l=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),s(b,i)||(i="mark-github"),'<svg viewBox="0 0 '+b[i].width+" "+b[i].height+'" class="octicon octicon-'+i+'" style="width: '+l*b[i].width/b[i].height+"px; height: "+l+'px;" aria-hidden="true">'+b[i].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",n("span",{},[t["data-text"]||""])]),d=e.appendChild(n("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[u])),p=u.hostname.split(".").reverse();if(""===p[0]&&p.shift(),"com"!==p[0]||"github"!==p[1])return u.href="#",u.target="_self",void r(d);var f=p.length,m=(" /"+u.pathname).split(/\/+/);if(((2===f||3===f&&"gist"===p[2])&&"archive"===m[3]||2===f&&"releases"===m[3]&&"download"===m[4]||3===f&&"codeload"===p[2])&&(u.target="_top"),/^true$/i.test(t["data-show-count"])&&2===f){var h,v;if(!m[2]&&m[1])h=v="followers";else if(!m[3]&&m[2])v="stargazers_count",h="stargazers";else if(m[4]||"subscription"!==m[3])if(m[4]||"fork"!==m[3]){if("issues"!==m[3])return void r(d);v="open_issues_count",h="issues"}else v="forks_count",h="network/members";else v="subscribers_count",h="watchers";var w=m[2]?"/repos/"+m[1]+"/"+m[2]:"/users/"+m[1];y.call(this,"https://api.github.com"+w,(function(e,t){if(!e){var o=t[v];d.appendChild(n("a",{className:"social-count",href:t.html_url+"/"+h,target:"_blank",rel:"noopener","aria-label":o+" "+v.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(d)}))}else r(d)},E=window.devicePixelRatio||1,k=function(e){return(E>1?o.ceil(o.round(e*E)/E*2)/2:o.ceil(e))||0},x=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},C=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],n=0,o=r.length;n<o;n++){var a="data-"+r[n];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),d){var r=l("span",{title:e.title||void 0});w(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var a=l("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});x(a,[0,0]),a.style.border="none";p(a,"load",(function r(){var i,c=a.contentWindow;try{i=c.document.body}catch(l){return void n.body.appendChild(a.parentNode.removeChild(a))}f(a,"load",r),w.call(c,i,e,(function(r){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=o.max(t,k(n.width)),r=o.max(r,k(n.height))}return[t,r]}(r);a.parentNode.removeChild(a),function(e,t,r){p(e,t,(function n(o){return f(e,t,n),r(o)}))}(a,"load",(function(){x(a,n)})),a.src="https://unpkg.com/github-buttons@2.6.0/dist/buttons.html#"+(a.name=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.encodeURIComponent);var o=[];for(var a in e){var i=e[a];null!=i&&o.push(n(a)+r+n(i))}return o.join(t)}(e)),t(a)}))})),n.body.appendChild(a)}}}}]);
//# sourceMappingURL=component---src-pages-index-js-139df35e5fd88c0525fb.js.map