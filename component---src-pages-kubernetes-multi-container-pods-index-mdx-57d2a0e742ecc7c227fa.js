(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),o=a("NmYn"),c=a.n(o),b=a("OKom"),l=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,c=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),i=r===n,o=new RegExp(n+"(?!-)"),b=a.replace(o,r);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(u.b)(N.Link,{className:f.link,to:""+b},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},n}(i.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,O=s.tabs,j=s.title,N=s.theme,f=s.description,x=s.keywords,k=n.data.site.pathPrefix,P=k?r.pathname.replace(k,""):r.pathname,w=O?P.split("/").slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:O,homepage:!1,theme:N,pageTitle:j,pageDescription:f,pageKeywords:x,titleType:d},Object(u.b)(m,{title:i?Object(u.b)(i,null):j,label:"label",tabs:O}),O&&Object(u.b)(v,{slug:P,tabs:O,currentTab:w}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:r,slug:P,tabs:O,currentTab:w}),Object(u.b)(b.a,null))}},"7cj7":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=c("AnchorLinks"),l=c("AnchorLink"),s=c("Tabs"),p=c("Tab"),d={_frontmatter:o},u=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(u,i({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(l,{mdxType:"AnchorLink"},"Multi-Containers Pod"),Object(n.b)(l,{mdxType:"AnchorLink"},"Activities")),Object(n.b)("h1",null,"Multi-Containers Pod"),Object(n.b)("p",null,"Container images solve many real-world problems with existing packaging and deployment tools, but in addition to these significant benefits, containers offer us an opportunity to fundamentally re-think the way we build distributed applications. Just as service oriented architectures (SOA) encouraged the decomposition of applications into modular, focused services, containers should encourage the further decomposition of these services into closely cooperating modular containers.  By virtue of establishing a boundary, containers enable users to build their services using modular, reusable components, and this in turn leads to services that are more reliable, more scalable and faster to build than applications built from monolithic containers."),Object(n.b)("h2",null,"Resources"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"OpenShift")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IKS")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent"}),"Sidecar Logging")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/"}),"Shared Volume Communication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"}),"Toolkit Patterns")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45406.pdf"}),"Brendan Burns Paper"))),Object(n.b)("h2",null,"References"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  volumes:\n  - name: shared-data\n    emptyDir: {}\n  containers:\n  - name: app\n    image: bitnami/nginx\n    volumeMounts:\n      - name: shared-data\n        mountPath: /app\n    ports:\n    - containerPort: 8080\n  - name: sidecard\n    image: busybox\n    volumeMounts:\n    - name: shared-data\n      mountPath: /pod-data\n    command: ['sh', '-c', 'echo Hello from the side container > /pod-data/index.html && sleep 3600']\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  shareProcessNamespace: true\n  containers:\n  - name: app\n    image: bitnami/nginx\n    ports:\n    - containerPort: 8080\n  - name: sidecard\n    image: busybox\n    securityContext:\n      capabilities:\n        add:\n        - SYS_PTRACE\n    stdin: true\n    tty: true\n")),Object(n.b)(s,{mdxType:"Tabs"},Object(n.b)(p,{label:"OpenShift",mdxType:"Tab"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Attach Pods Together "),"  "),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"oc attach -it my-pod -c sidecard\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"ps ax\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kill -HUP 7\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"ps ax\n"))),Object(n.b)(p,{label:"IKS",mdxType:"Tab"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"}," Attach Pods Together ")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kubectl attach -it my-pod -c sidecard\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"ps ax\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kill -HUP 7\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"ps ax\n")))),Object(n.b)("h2",null,"Activities"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Link"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},Object(n.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:"left"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Multiple Containers"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Build a container using legacy container image."),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"../activities/labs/lab3"}),"Multiple Containers"))))))}m.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-multi-container-pods-index-mdx-57d2a0e742ecc7c227fa.js.map