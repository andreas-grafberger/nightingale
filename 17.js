(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{131:function(t,e,i){"use strict";i.r(e);var n=i(1),s=i.n(n),a=i(357),r=i(322);e.default=function(t){return Object(r.a)("protvista-navigation",a.a),s.a.createElement(n.Fragment,null,s.a.createElement("protvista-navigation",{length:"456",displaystart:"34",displayend:"400",highlightStart:"23",highlightEnd:"45"}))}},322:function(t,e,i){"use strict";e.a=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)}},357:function(t,e,i){"use strict";var n=i(399);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,t)})(t)}function h(t,e,i){return(h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,i){var n=[null];n.push.apply(n,e);var s=new(Function.bind.apply(t,n));return i&&l(s,i.prototype),s}).apply(null,arguments)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=10,p=10,d=10,f=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=r(this,c(e).call(this)))._x=null,t.dontDispatch=!1,t}var i,s,h;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,o(HTMLElement)),i=e,h=[{key:"observedAttributes",get:function(){return["length","displaystart","displayend","highlightStart","highlightEnd","width"]}}],(s=[{key:"connectedCallback",value:function(){this.style.display="block",this.style.width="100%",this.width=this.offsetWidth,this._length=parseFloat(this.getAttribute("length")),this._displaystart=parseFloat(this.getAttribute("displaystart"))||1,this._displayend=parseFloat(this.getAttribute("displayend"))||this._length,this._highlightStart=parseFloat(this.getAttribute("highlightStart")),this._highlightEnd=parseFloat(this.getAttribute("highlightEnd")),this._onResize=this._onResize.bind(this),this._createNavRuler()}},{key:"disconnectedCallback",value:function(){this._ro?this._ro.unobserve(this):window.removeEventListener(this._onResize)}},{key:"attributeChangedCallback",value:function(t,e,i){e!==i&&(this["_".concat(t)]=parseFloat(i),this._updateNavRuler())}},{key:"_createNavRuler",value:function(){var t=this;this._x=Object(n.e)().range([d,this.width-u]),this._x.domain([1,this._length]),this._svg=Object(n.f)(this).append("div").attr("class","").append("svg").attr("id","").attr("width",this.width).attr("height",40),this._xAxis=Object(n.a)(this._x),this._displaystartLabel=this._svg.append("text").attr("class","start-label").attr("x",0).attr("y",40-p),this._displayendLabel=this._svg.append("text").attr("class","end-label").attr("x",this.width).attr("y",40-p).attr("text-anchor","end"),this._axis=this._svg.append("g").attr("class","x axis").call(this._xAxis),this._viewport=Object(n.b)().extent([[d,0],[this.width-u,20.4]]).on("brush",function(){n.c.selection&&(t._displaystart=Object(n.d)("d")(t._x.invert(n.c.selection[0])),t._displayend=Object(n.d)("d")(t._x.invert(n.c.selection[1])),t.dontDispatch||t.dispatchEvent(new CustomEvent("change",{detail:{displayend:t._displayend,displaystart:t._displaystart,extra:{transform:n.c.transform}},bubbles:!0,cancelable:!0})),t._updateLabels(),t._updatePolygon())}),this._brushG=this._svg.append("g").attr("class","brush").call(this._viewport),this._brushG.call(this._viewport.move,[this._x(this._displaystart),this._x(this._displayend)]),this.polygon=this._svg.append("polygon").attr("class","zoom-polygon").attr("fill","#777").attr("fill-opacity","0.3"),this._updateNavRuler(),"ResizeObserver"in window&&(this._ro=new ResizeObserver(this._onResize),this._ro.observe(this)),window.addEventListener("resize",this._onResize)}},{key:"_onResize",value:function(){this.width=this.offsetWidth,this._x=this._x.range([d,this.width-u]),this._svg.attr("width",this.width),this._axis.call(this._xAxis),this._viewport.extent([[d,0],[this.width-u,20.4]]),this._brushG.call(this._viewport),this._updateNavRuler()}},{key:"_updateNavRuler",value:function(){this._x&&(this._updatePolygon(),this._updateLabels(),this._brushG&&(this.dontDispatch=!0,this._brushG.call(this._viewport.move,[this._x(this._displaystart),this._x(this._displayend)]),this.dontDispatch=!1))}},{key:"_updateLabels",value:function(){this._displaystartLabel&&this._displaystartLabel.text(this._displaystart),this._displayendLabel&&this._displayendLabel.attr("x",this.width).text(this._displayend)}},{key:"_updatePolygon",value:function(){this.polygon&&this.polygon.attr("points","".concat(this._x(this._displaystart),",").concat(20,"\n        ").concat(this._x(this._displayend),",").concat(20,"\n        ").concat(this.width,",").concat(40,"\n        0,").concat(40))}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}},{key:"isManaged",get:function(){return!0}}])&&a(i.prototype,s),h&&a(i,h),e}(),_=function(){customElements.define("protvista-navigation",f)};window.customElements?_():document.addEventListener("WebComponentsReady",function(){_()});e.a=f}}]);