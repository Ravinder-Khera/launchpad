(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{4934:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset",function(){return t(6489)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,l=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),c=t(387),s=t(7190);var u={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var g=(r=l.default.Children.only(h))&&"object"===typeof r&&r.ref,j=o(s.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],N=l.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);l.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,w,b,t,n]);var E={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,m,v,y,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var _="undefined"!==typeof b?b:n&&n.locale,I=n&&n.isLocaleDomain&&i.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);E.href=I||i.addBasePath(i.addLocale(p,_,n&&n.defaultLocale))}return l.default.cloneElement(r,E)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(r?r.current:null),2),m=h[0],v=h[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),s.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,l=n.elements;return l.set(e,r),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var r=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:t}))}),[n,m,t,d]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[y,d]};var a=t(7294),l=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map,s=[]},6489:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(1664);r.default=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"authincation section-padding",children:(0,n.jsx)("div",{className:"container h-100",children:(0,n.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:(0,n.jsxs)("div",{className:"col-xl-4 col-md-5",children:[(0,n.jsxs)("div",{className:"mini-logo text-center my-3",children:[(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"./images/logo.png",alt:""})})}),(0,n.jsx)("h4",{className:"card-title mt-5",children:"Reset Password"})]}),(0,n.jsx)("div",{className:"auth-form card",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("form",{className:"row g-3",children:[(0,n.jsxs)("div",{className:"col-12",children:[(0,n.jsx)("label",{className:"form-label",children:"Email"}),(0,n.jsx)("input",{type:"text",className:"form-control",placeholder:"***********"})]}),(0,n.jsx)("div",{className:"text-center mt-4",children:(0,n.jsx)("a",{className:"btn btn-primary btn-block w-100",children:"Submit"})})]}),(0,n.jsx)("div",{className:"new-account mt-3",children:(0,n.jsxs)("p",{children:["Don't get code?",(0,n.jsx)(o.default,{href:"/otp-1",children:(0,n.jsx)("a",{className:"text-primary",children:"Resend"})})]})})]})})]})})})})})}},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=4934,e(e.s=r);var r}));var r=e.O();_N_E=r}]);