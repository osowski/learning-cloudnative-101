(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),r=a.n(i),o=a("NmYn"),c=a.n(o),l=a("OKom"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=i.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0}),r=i===n,o=new RegExp(n+"(?!-)"),l=a.replace(o,i);return Object(u.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(u.b)(v.Link,{className:N.link,to:""+l},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},i))))))},n}(r.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,p=t.titleType,O=s.tabs,j=s.title,v=s.theme,N=s.description,w=s.keywords,C=n.data.site.pathPrefix,x=C?i.pathname.replace(C,""):i.pathname,T=O?x.split("/").slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:O,homepage:!1,theme:v,pageTitle:j,pageDescription:N,pageKeywords:w,titleType:p},Object(u.b)(m,{title:r?Object(u.b)(r,null):j,label:"label",tabs:O}),O&&Object(u.b)(g,{slug:x,tabs:O,currentTab:T}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:d})),Object(u.b)(f.a,{pageContext:t,location:i,slug:x,tabs:O,currentTab:T}),Object(u.b)(l.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":""}}}')},sfM8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},c={_frontmatter:o},l=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(l,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Problem"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a pod definition named ",Object(n.b)("inlineCode",{parentName:"li"},"yoda-service-pod.yml"),", and then create a pod in the cluster using this definition to make sure it works.")),Object(n.b)("p",null,"The specifications are as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The current image for the container is ",Object(n.b)("inlineCode",{parentName:"li"},"bitnami/nginx"),". You do not need a custom command or args."),Object(n.b)("li",{parentName:"ul"},"There is some configuration data the container will need:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"yoda.baby.power=100000000")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"yoda.strength=10")))),Object(n.b)("li",{parentName:"ul"},"It will expect to find this data in a file at ",Object(n.b)("inlineCode",{parentName:"li"},"/etc/yoda-service/yoda.cfg"),". Store the configuration data in a ConfigMap called ",Object(n.b)("inlineCode",{parentName:"li"},"yoda-service-config")," and provide it to the container as a mounted volume."),Object(n.b)("li",{parentName:"ul"},"The container should expect to use ",Object(n.b)("inlineCode",{parentName:"li"},"64Mi")," of memory and ",Object(n.b)("inlineCode",{parentName:"li"},"250m")," CPU (use resource requests)."),Object(n.b)("li",{parentName:"ul"},"The container should be limited to ",Object(n.b)("inlineCode",{parentName:"li"},"128Mi")," of memory and ",Object(n.b)("inlineCode",{parentName:"li"},"500m")," CPU (use resource limits)."),Object(n.b)("li",{parentName:"ul"},"The container needs access to a database password in order to authenticate with a backend database server. The password is ",Object(n.b)("inlineCode",{parentName:"li"},"0penSh1ftRul3s!"),". It should be stored as a Kubernetes secret called ",Object(n.b)("inlineCode",{parentName:"li"},"yoda-db-password")," and passed to the container as an ",Object(n.b)("em",{parentName:"li"},"environment variable")," called ",Object(n.b)("inlineCode",{parentName:"li"},"DB_PASSWORD"),"."),Object(n.b)("li",{parentName:"ul"},"The container will need to access the Kubernetes API using the ServiceAccount ",Object(n.b)("inlineCode",{parentName:"li"},"yoda-svc"),". Create the service account if it doesn’t already exist, and configure the pod to use it.")),Object(n.b)("h2",null,"Verification"),Object(n.b)("p",null,"To verify your setup is complete, check ",Object(n.b)("inlineCode",{parentName:"p"},"/etc/yoda-service")," for the ",Object(n.b)("inlineCode",{parentName:"p"},"yoda.cfg")," file and use the ",Object(n.b)("inlineCode",{parentName:"p"},"cat")," command to check it’s contents."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl exec -it yoda-service /bin/bash\ncd /etc/yoda-service\ncat yoda.cfg\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-2-index-mdx-7936223660fc07c0f28a.js.map