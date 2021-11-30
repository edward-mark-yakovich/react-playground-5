(()=>{"use strict";var e,t={6708:(e,t,n)=>{var r=n(7294),a=n(3935),i=n(3727),o=n(5671),c=n(3144),l=n(136),s=n(6215),u=n(1120),f=n(5977),d=n(7326);var p=function(e){(0,l.Z)(i,e);var t,n,a=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function i(){var e;return(0,o.Z)(this,i),(e=a.call(this)).increment=e.increment.bind((0,d.Z)(e)),e.state={count:0},e}return(0,c.Z)(i,[{key:"increment",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"ui-counter"},r.createElement("p",{className:"ui-counter__title"},"Counter Widget"),r.createElement("div",{className:"ui-counter__body"},r.createElement("p",{className:"ui-counter__body__name"},this.props.name),r.createElement("p",{className:"ui-counter__body__count"},this.state.count),r.createElement("button",{className:"ui-counter__body__button",onClick:function(){return e.increment()},disabled:3===this.state.count},"Increment")))}}]),i}(r.Component),m=n(9669),v=n.n(m),h=function(e){return 0===Object.keys(e).length};var _=function(e){(0,l.Z)(i,e);var t,n,a=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function i(e){var t,n;if((0,o.Z)(this,i),n=a.call(this),e.staticContext)n.state={isLoading:!1,title:e.staticContext.title,description:e.staticContext.body};else if("undefined"==typeof window||h((null===(t=window.initial_state)||void 0===t?void 0:t.post)||{}))n.state={isLoading:!0,title:"",description:""};else{var r=window.initial_state.post;n.state={isLoading:!1,title:r.title,description:r.body}}return n}return(0,c.Z)(i,[{key:"componentDidMount",value:function(){var e=this;this.state.isLoading&&i.fetchData().then((function(t){e.setState({isLoading:!1,title:t.title,description:t.body})}))}},{key:"render",value:function(){return r.createElement("div",{className:"ui-post"},r.createElement("p",{className:"ui-post__title"},"Post Widget"),this.state.isLoading?"loading...":r.createElement("div",{className:"ui-post__body"},r.createElement("p",{className:"ui-post__body__title"},this.state.title),r.createElement("p",{className:"ui-post__body__description"},this.state.description)))}}],[{key:"fetchData",value:function(){return v().get("https://jsonplaceholder.typicode.com/posts/3").then((function(e){return{title:e.data.title,body:e.data.body}}))}}]),i}(r.Component),y=n(5861),E=n(8152),g=n(7757),b=n.n(g),N=function(e){var t,n,a,i,o,c=(0,r.useState)(1),l=(0,E.Z)(c,2),s=l[0],u=l[1],f={};e.staticContext?f=e.staticContext:"undefined"==typeof window||h((null===(t=window.initial_state)||void 0===t?void 0:t.home)||{})||(f=window.initial_state.home);var d=(0,r.useState)(f),p=(0,E.Z)(d,2),m=p[0],v=p[1];return(0,r.useEffect)((0,y.Z)(b().mark((function e(){var t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h(m)){e.next=5;break}return e.next=3,w();case 3:t=e.sent,v(t);case 5:case"end":return e.stop()}}),e)}))),[]),r.createElement("div",{className:"home"},r.createElement("div",{className:"home-heading"},r.createElement("h1",null,"Home"),r.createElement("p",null,"Playing with React stuff... SSR")),r.createElement("div",{className:"home-intro-top"},r.createElement("div",null,r.createElement("button",{type:"button",onClick:function(){return u(s+1)}},"Set page"),r.createElement("span",null," = ",s," "))),!h(m)&&r.createElement("div",{className:"home-intro"},r.createElement("div",{className:"grid"},r.createElement("div",{className:"home-intro__img"},r.createElement("img",{src:(null==m||null===(n=m._embedded)||void 0===n||null===(a=n["wp:featuredmedia"])||void 0===a?void 0:a[0].source_url)||""})),r.createElement("div",{className:"home-intro__content"},r.createElement("h3",{className:"home-intro__heading",dangerouslySetInnerHTML:{__html:(null==m||null===(i=m.title)||void 0===i?void 0:i.rendered)||""}}),r.createElement("div",{className:"home-intro__copy",dangerouslySetInnerHTML:{__html:(null==m||null===(o=m.excerpt)||void 0===o?void 0:o.rendered)||""}})))))};function w(){return k.apply(this,arguments)}function k(){return(k=(0,y.Z)(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v().get("http://chinonthetank.com/wp-json/wp/v2/pages?_embed&slug=about").then((function(e){return e.data[0]})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){(0,l.Z)(d,e);var t,n,a=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function d(){return(0,o.Z)(this,d),a.call(this)}return(0,c.Z)(d,[{key:"outputNav",value:function(){return r.createElement("div",{className:"ui-app__navigation"},r.createElement(i.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/",exact:!0},"Counter"),r.createElement(i.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/post",exact:!0},"Post"),r.createElement(i.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/home",exact:!0},"Home"))}},{key:"render",value:function(){return r.createElement("div",{className:"ui-app"},this.outputNav(),r.createElement(f.rs,null,r.createElement(f.AW,{path:"/",exact:!0,render:function(){return r.createElement(p,{name:"Monica Geller"})}}),r.createElement(f.AW,{path:"/post",exact:!0,component:_}),r.createElement(f.AW,{path:"/home",exact:!0,component:N})))}}]),d}(r.Component);a.hydrate(r.createElement(i.VK,null,r.createElement(x,null)),document.getElementById("app"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,a,i)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,a,i]=e[u],c=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(c=!1,i<o&&(o=i));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,a,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[o,c,l]=n,s=0;if(o.some((t=>0!==e[t]))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(l)var u=l(r)}for(t&&t(n);s<o.length;s++)i=o[s],r.o(e,i)&&e[i]&&e[i][0](),e[o[s]]=0;return r.O(u)},n=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[736],(()=>r(6708)));a=r.O(a)})();
//# sourceMappingURL=main.js.map