(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n("q1tI"),o=n.n(r),i=n("b0oO"),a=n("YFqc"),s=n.n(a),u=o.a.createElement,l=function(e){return u("li",null,u(s.a,{href:"/p/[id]",as:"/p/".concat(e.id)},u("a",null,e.id)))};function f(){return u("div",null,u(i.a,null),u("ul",null,u(l,{id:"Hello Next.js"})))}},YFqc:function(e,t,n){e.exports=n("cTJO")},b0oO:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),s=o.a.createElement,u={marginRight:15};t.a=function(){return s("div",null,s(a.a,{href:"/"},s("a",{style:u},"Home")),s(a.a,{href:"/about"},s("a",{style:u},"About")))}},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),u=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var f,c=l(n("LX0d")),p=n("CxY0"),h=u(n("q1tI")),v=(l(n("17x9")),l(n("nOHt"))),d=(n("P5f7"),n("g/15"));function w(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new c.default,m=window.IntersectionObserver;function g(){return f||(m?f=new m(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=i(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}(function(e,t){return{href:w(e),as:t?w(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),s=s?(0,p.resolve)(u,s):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,p.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),h.default.cloneElement(i,a)}}]),t}(h.Component);b.propTypes=void 0;var k=b;t.default=k},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);