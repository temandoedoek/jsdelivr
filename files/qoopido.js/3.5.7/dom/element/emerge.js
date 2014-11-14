/*!
* Qoopido.js library v3.5.7, 2014-10-14
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.register("dom/element/emerge",t,["../element","../../function/merge","../../function/unique/uuid"])}(function(t,e,i,o,r,n,l){"use strict";function p(t){var e,i=d[t];for(e in i)"length"!==e&&g.call(i[e]);0===i.length&&(r.element.clearInterval(c[t]),delete c[t])}function s(){a.left=0,a.top=0,a.right=r.innerWidth||m.clientWidth,a.bottom=r.innerHeight||m.clientHeight}function h(){var t=this,e=t._settings.threshold,i=e!==l?e:m.clientWidth*t._settings.auto,o=e!==l?e:m.clientHeight*t._settings.auto;t._viewport.left=a.left-i,t._viewport.top=a.top-o,t._viewport.right=a.right+i,t._viewport.bottom=a.bottom+o}function g(){var t,e=this,i=!1,o=2;!e.isVisible()||"hidden"===e.getStyle("visibility")&&e._settings.visibility!==!1||(t=e.element.getBoundingClientRect(),(t.bottom>=e._viewport.top&&t.bottom<=e._viewport.bottom||t.top>=e._viewport.top&&t.top<=e._viewport.bottom||e._viewport.bottom>=t.top&&e._viewport.bottom<=t.bottom||e._viewport.top>=t.top&&e._viewport.top<=t.bottom)&&(t.left>=e._viewport.left&&t.left<=e._viewport.right||t.right>=e._viewport.left&&t.right<=e._viewport.right||e._viewport.left>=t.left&&e._viewport.left<=t.right||e._viewport.right>=t.left&&e._viewport.right<=t.right)&&((0===e._settings.threshold||(t.bottom>=a.top&&t.bottom<=a.bottom||t.top>=a.top&&t.top<=a.bottom||a.bottom>=t.top&&a.bottom<=t.bottom||a.top>=t.top&&a.top<=t.bottom)&&(t.left>=a.left&&t.left<=a.right||t.right>=a.left&&t.right<=a.right||a.left>=t.left&&a.left<=t.right||a.right>=t.left&&a.right<=t.right))&&(o=1),i=!0)),(i!==e._state||i===!0&&o!==e._priority)&&v.call(e,i,o)}function v(t,e){var i=this;i._state=t,i._priority=e,i._settings.recur!==!0&&i.remove(),t===!0?i.emit(f,e):i.emit(w)}var _,u={interval:50,threshold:"auto",recur:!0,auto:1,visibility:!0},m=r.document.documentElement,a={},c={},d={},f="emerged",w="demerged",b="resize orientationchange";if(r=t["dom/element"].create(r),"CSS1Compat"!==n.compatMode)throw"[Qoopido.js] Not in standards mode";return _=t["dom/element"].extend({_quid:null,_viewport:null,_settings:null,_state:null,_priority:null,_constructor:function(e,i){var o=this;_._parent._constructor.call(o,e),i=t["function/merge"]({},u,i||{}),"auto"===i.threshold&&delete i.threshold,c[i.interval]===l&&(d[i.interval]=d[i.interval]||{length:0},c[i.interval]=r.element.setInterval(function(){p(i.interval)},i.interval)),o._quid=t["function/unique/uuid"](),o._viewport={},o._settings=i,o._state=!1,o._priority=2,d[i.interval][o._quid]=o,d[i.interval].length++,r.on(b,function(){h.call(o)}),h.call(o)},remove:function(){var t=this;delete d[t._settings.interval][t._quid],d[t._settings.interval].length--}}),r.on(b,s),s(),_});