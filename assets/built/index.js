!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(){"use strict";var e,t={exports:{}};e=t,function(t,a){var i=function(e,t,a){var i,n;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in n=e.lazySizesConfig||e.lazysizesConfig||{},a)t in n||(n[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:n,noSupport:!0};var r,s,o,l,c,d,u,f,m,h,g,v,p,y,z,b,C,A,E,w,_,N,M,L,S,x,F,W,B,P,R,T,$,k,D,H,I,O,j,q,Q,U,G,J,K,V=t.documentElement,X=e.HTMLPictureElement,Y="addEventListener",Z="getAttribute",ee=e[Y].bind(e),te=e.setTimeout,ae=e.requestAnimationFrame||te,ie=e.requestIdleCallback,ne=/^picture$/i,re=["load","error","lazyincluded","_lazyloaded"],se={},oe=Array.prototype.forEach,le=function(e,t){return se[t]||(se[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),se[t].test(e[Z]("class")||"")&&se[t]},ce=function(e,t){le(e,t)||e.setAttribute("class",(e[Z]("class")||"").trim()+" "+t)},de=function(e,t){var a;(a=le(e,t))&&e.setAttribute("class",(e[Z]("class")||"").replace(a," "))},ue=function(e,t,a){var i=a?Y:"removeEventListener";a&&ue(e,t),re.forEach((function(a){e[i](a,t)}))},fe=function(e,a,n,r,s){var o=t.createEvent("Event");return n||(n={}),n.instance=i,o.initEvent(a,!r,!s),o.detail=n,e.dispatchEvent(o),o},me=function(t,a){var i;!X&&(i=e.picturefill||n.pf)?(a&&a.src&&!t[Z]("srcset")&&t.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},he=function(e,t){return(getComputedStyle(e,null)||{})[t]},ge=function(e,t,a){for(a=a||e.offsetWidth;a<n.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},ve=(U=[],G=Q=[],J=function(){var e=G;for(G=Q.length?U:Q,j=!0,q=!1;e.length;)e.shift()();j=!1},K=function(e,a){j&&!a?e.apply(this,arguments):(G.push(e),q||(q=!0,(t.hidden?te:ae)(J)))},K._lsFlush=J,K),pe=function(e,t){return t?function(){ve(e)}:function(){var t=this,a=arguments;ve((function(){e.apply(t,a)}))}},ye=function(e){var t,i=0,r=n.throttleDelay,s=n.ricTimeout,o=function(){t=!1,i=a.now(),e()},l=ie&&s>49?function(){ie(o,{timeout:s}),s!==n.ricTimeout&&(s=n.ricTimeout)}:pe((function(){te(o)}),!0);return function(e){var n;(e=!0===e)&&(s=33),t||(t=!0,(n=r-(a.now()-i))<0&&(n=0),e||n<9?l():te(l,n))}},ze=function(e){var t,i,n=99,r=function(){t=null,e()},s=function(){var e=a.now()-i;e<n?te(s,n-e):(ie||r)(r)};return function(){i=a.now(),t||(t=te(s,n))}},be=(C=/^img$/i,A=/^iframe$/i,E="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),w=0,_=0,N=0,M=-1,L=function(e){N--,(!e||N<0||!e.target)&&(N=0)},S=function(e){return null==b&&(b="hidden"==he(t.body,"visibility")),b||!("hidden"==he(e.parentNode,"visibility")&&"hidden"==he(e,"visibility"))},x=function(e,a){var i,n=e,r=S(e);for(v-=a,z+=a,p-=a,y+=a;r&&(n=n.offsetParent)&&n!=t.body&&n!=V;)(r=(he(n,"opacity")||1)>0)&&"visible"!=he(n,"overflow")&&(i=n.getBoundingClientRect(),r=y>i.left&&p<i.right&&z>i.top-1&&v<i.bottom+1);return r},W=ye(F=function(){var e,a,r,s,o,l,u,m,C,A,L,F,W=i.elements;if((f=n.loadMode)&&N<8&&(e=W.length)){for(a=0,M++;a<e;a++)if(W[a]&&!W[a]._lazyRace)if(!E||i.prematureUnveil&&i.prematureUnveil(W[a]))D(W[a]);else if((m=W[a][Z]("data-expand"))&&(l=1*m)||(l=_),A||(A=!n.expand||n.expand<1?V.clientHeight>500&&V.clientWidth>500?500:370:n.expand,i._defEx=A,L=A*n.expFactor,F=n.hFac,b=null,_<L&&N<1&&M>2&&f>2&&!t.hidden?(_=L,M=0):_=f>1&&M>1&&N<6?A:w),C!==l&&(h=innerWidth+l*F,g=innerHeight+l,u=-1*l,C=l),r=W[a].getBoundingClientRect(),(z=r.bottom)>=u&&(v=r.top)<=g&&(y=r.right)>=u*F&&(p=r.left)<=h&&(z||y||p||v)&&(n.loadHidden||S(W[a]))&&(d&&N<3&&!m&&(f<3||M<4)||x(W[a],l))){if(D(W[a]),o=!0,N>9)break}else!o&&d&&!s&&N<4&&M<4&&f>2&&(c[0]||n.preloadAfterLoad)&&(c[0]||!m&&(z||y||p||v||"auto"!=W[a][Z](n.sizesAttr)))&&(s=c[0]||W[a]);s&&!o&&D(s)}}),P=pe(B=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(L(e),ce(t,n.loadedClass),de(t,n.loadingClass),ue(t,R),fe(t,"lazyloaded"))}),R=function(e){P({target:e.target})},T=function(e,t){var a=e.getAttribute("data-load-mode")||n.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)},$=function(e){var t,a=e[Z](n.srcsetAttr);(t=n.customMedia[e[Z]("data-media")||e[Z]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},k=pe((function(e,t,a,i,r){var s,o,l,c,d,f;(d=fe(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(a?ce(e,n.autosizesClass):e.setAttribute("sizes",i)),o=e[Z](n.srcsetAttr),s=e[Z](n.srcAttr),r&&(c=(l=e.parentNode)&&ne.test(l.nodeName||"")),f=t.firesLoad||"src"in e&&(o||s||c),d={target:e},ce(e,n.loadingClass),f&&(clearTimeout(u),u=te(L,2500),ue(e,R,!0)),c&&oe.call(l.getElementsByTagName("source"),$),o?e.setAttribute("srcset",o):s&&!c&&(A.test(e.nodeName)?T(e,s):e.src=s),r&&(o||c)&&me(e,{src:s})),e._lazyRace&&delete e._lazyRace,de(e,n.lazyClass),ve((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ce(e,n.fastLoadedClass),B(d),e._lazyCache=!0,te((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&N--}),!0)})),D=function(e){if(!e._lazyRace){var t,a=C.test(e.nodeName),i=a&&(e[Z](n.sizesAttr)||e[Z]("sizes")),r="auto"==i;(!r&&d||!a||!e[Z]("src")&&!e.srcset||e.complete||le(e,n.errorClass)||!le(e,n.lazyClass))&&(t=fe(e,"lazyunveilread").detail,r&&Ce.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,N++,k(e,t,r,i,a))}},H=ze((function(){n.loadMode=3,W()})),O=function(){d||(a.now()-m<999?te(O,999):(d=!0,n.loadMode=3,W(),ee("scroll",I,!0)))},{_:function(){m=a.now(),i.elements=t.getElementsByClassName(n.lazyClass),c=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),ee("scroll",W,!0),ee("resize",W,!0),ee("pageshow",(function(e){if(e.persisted){var a=t.querySelectorAll("."+n.loadingClass);a.length&&a.forEach&&ae((function(){a.forEach((function(e){e.complete&&D(e)}))}))}})),e.MutationObserver?new MutationObserver(W).observe(V,{childList:!0,subtree:!0,attributes:!0}):(V[Y]("DOMNodeInserted",W,!0),V[Y]("DOMAttrModified",W,!0),setInterval(W,999)),ee("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[Y](e,W,!0)})),/d$|^c/.test(t.readyState)?O():(ee("load",O),t[Y]("DOMContentLoaded",W),te(O,2e4)),i.elements.length?(F(),ve._lsFlush()):W()},checkElems:W,unveil:D,_aLSL:I=function(){3==n.loadMode&&(n.loadMode=2),H()}}),Ce=(s=pe((function(e,t,a,i){var n,r,s;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),ne.test(t.nodeName||""))for(r=0,s=(n=t.getElementsByTagName("source")).length;r<s;r++)n[r].setAttribute("sizes",i);a.detail.dataAttr||me(e,a.detail)})),o=function(e,t,a){var i,n=e.parentNode;n&&(a=ge(e,n,a),(i=fe(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=i.detail.width)&&a!==e._lazysizesWidth&&s(e,n,i,a))},{_:function(){r=t.getElementsByClassName(n.autosizesClass),ee("resize",l)},checkElems:l=ze((function(){var e,t=r.length;if(t)for(e=0;e<t;e++)o(r[e])})),updateElem:o}),Ae=function(){!Ae.i&&t.getElementsByClassName&&(Ae.i=!0,Ce._(),be._())};return te((function(){n.init&&Ae()})),i={cfg:n,autoSizer:Ce,loader:be,init:Ae,uP:me,aC:ce,rC:de,hC:le,fire:fe,gW:ge,rAF:ve}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{});var a=t.exports;!function(e){!function(t,i){if(t){var n=function(){i(t.lazySizes),t.removeEventListener("lazyunveilread",n,!0)};i=i.bind(null,t,t.document),e.exports?i(a):t.lazySizes?n():t.addEventListener("lazyunveilread",n,!0)}}("undefined"!=typeof window?window:0,(function(e,t,a){if(e.addEventListener){var i=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,n=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,r=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,s=/^picture$/i,o=a.cfg,l={getParent:function(t,a){var i=t,n=t.parentNode;return a&&"prev"!=a||!n||!s.test(n.nodeName||"")||(n=n.parentNode),"self"!=a&&(i="prev"==a?t.previousElementSibling:a&&(n.closest||e.jQuery)&&(n.closest?n.closest(a):jQuery(n).closest(a)[0])||n),i},getFit:function(e){var t,a,i=getComputedStyle(e,null)||{},s=i.content||i.fontFamily,o={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!o.fit&&s&&(t=s.match(n))&&(o.fit=t[1]),o.fit?(!(a=e._lazysizesParentContainer||e.getAttribute("data-parent-container"))&&s&&(t=s.match(r))&&(a=t[1]),o.parent=l.getParent(e,a)):o.fit=i.objectFit,o},getImageRatio:function(t){var a,n,r,l,c,d,u,f=t.parentNode,m=f&&s.test(f.nodeName||"")?f.querySelectorAll("source, img"):[t];for(a=0;a<m.length;a++)if(n=(t=m[a]).getAttribute(o.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",r=t._lsMedia||t.getAttribute("media"),r=o.customMedia[t.getAttribute("data-media")||r]||r,n&&(!r||(e.matchMedia&&matchMedia(r)||{}).matches)){(l=parseFloat(t.getAttribute("data-aspectratio")))||((c=n.match(i))?"w"==c[2]?(d=c[1],u=c[3]):(d=c[3],u=c[1]):(d=t.getAttribute("width"),u=t.getAttribute("height")),l=d/u);break}return l},calculateSize:function(e,t){var a,i,n,r=this.getFit(e),s=r.fit,o=r.parent;return"width"==s||("contain"==s||"cover"==s)&&(i=this.getImageRatio(e))?(o?t=o.clientWidth:o=e,n=t,"width"==s?n=t:(a=t/o.clientHeight)&&("cover"==s&&a<i||"contain"==s&&a>i)&&(n=t*(i/a)),n):t}};a.parentFit=l,t.addEventListener("lazybeforesizes",(function(e){if(!e.defaultPrevented&&e.detail.instance==a){var t=e.target;e.detail.width=l.calculateSize(t,e.detail.width)}}))}}))}({exports:{}})}();
//# sourceMappingURL=index.js.map
