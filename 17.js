(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{164:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(574),o=n(589),c=n(590),l=n(708),s=function t(e,n,r){if(!(n.length<=0)){var i=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var s=c.value;if(s.name===n[0])return void t(s.children,n.slice(1),s)}}catch(t){a=!0,o=t}finally{try{i||null==l.return||l.return()}finally{if(a)throw o}}var u={name:n[0],selected:!1,parent:r,children:[]};e.push(u),t(u.children,n.slice(1),u)}};function u(t,e){var n=t.split(", ");s(e,n)}function d(t,e,n){"number"==typeof n?n++:n=1;var r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;l.depth=n,e(l),l.children.length>0&&d(l.children,e,n)}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}}function f(t,e){var n=e.find(function(e){return t.id===e.id});n?t.isoform&&(n.isoform=t.isoform):e.push(t)}function p(t){var e=[],n={};t=t.map(function(t){return t.interactions||(t.interactions=[]),t});var r=!0,i=!1,a=void 0;try{for(var o,c=function(){var e=o.value,n=!0,r=!1,i=void 0;try{for(var a,c=function(){var n=a.value,r=t.find(function(t){return t.accession===n.accession2});if(r&&!r.interactions.find(function(t){return t.id===e.accession})){var i=Object(l.a)(n);i.id=e.accession,r.interactions.push(i)}},s=e.interactions[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)c()}catch(t){r=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}},s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)c()}catch(t){i=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var d=!0,p=!1,h=void 0;try{for(var v,b=function(){var r=v.value;r.filterTerms=[];var i=[],a=!0,o=!1,c=void 0;try{for(var l,s=function(){var e=l.value;"SELF"===e.interactionType?(e.source=r.accession,e.id=r.accession,f(e,i)):t.some(function(t){return t.accession===e.id})&&(e.source=r.accession,f(e,i))},d=r.interactions[Symbol.iterator]();!(a=(l=d.next()).done);a=!0)s()}catch(t){o=!0,c=t}finally{try{a||null==d.return||d.return()}finally{if(o)throw c}}if(r.interactions=i,r.subcellularLocations&&r.subcellularLocations.filter(function(t){return t.locations}).forEach(function(t){var n=!0,i=!1,a=void 0;try{for(var o,c=t.locations[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var l=o.value;u(l.location.value,e);var s=l.location.value.split(", ");r.filterTerms=r.filterTerms.concat(s)}}catch(t){i=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(i)throw a}}}),r.diseases){var p=!0,h=!1,b=void 0;try{for(var y,w=r.diseases[Symbol.iterator]();!(p=(y=w.next()).done);p=!0){var m=y.value;m.diseaseId&&(n[m.diseaseId]={name:m.diseaseId,selected:!1},r.filterTerms.push(m.diseaseId))}}catch(t){h=!0,b=t}finally{try{p||null==w.return||w.return()}finally{if(h)throw b}}}},y=t[Symbol.iterator]();!(d=(v=y.next()).done);d=!0)b()}catch(t){p=!0,h=t}finally{try{d||null==y.return||y.return()}finally{if(p)throw h}}return{data:t,subcellulartreeMenu:e,diseases:Object.values(n)}}function h(t){var e="https://www.ebi.ac.uk/proteins/api/proteins/interaction/".concat(t,".json");return fetch(e).then(function(t){return 404===t.status?null:t.ok?204===t.status?null:t.json():(console.error(new Error("Request Failed: Status = ".concat(t.status,"; URI = ").concat(e,"; Time = ").concat(new Date))),null)}).then(function(t){return t})}var v=n(710),b=n(709),y=function(t,e){if(t){var n="",r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;l.dbReference&&(n+='<p><a href="//www.uniprot.org/uniprot/'.concat(e,"#").concat(l.acronym,'" target="_blank">').concat(l.diseaseId,"</a></p>"))}}catch(t){i=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}return"N/A"},w=function(){Object(a.g)(".interaction-tooltip").style("opacity",0).style("display","none")},m=function(t){if(t){var e='<ul class="tree-list">',n=[];return t.filter(function(t){return t.locations}).forEach(function(t){var e=!0,r=!1,i=void 0;try{for(var a,o=t.locations[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){u(a.value.location.value,n)}}catch(t){r=!0,i=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw i}}}),d(n,function(t){return e+='<li style="margin-left:'.concat(t.depth,'em">').concat(t.name,"</li>")}),"".concat(e,"</ul>")}return"N/A"},g=function(t,e,n){var r=n,i=Object(a.f)(t).append("div").attr("class","interaction-tooltip").style("display","none").style("opacity",0);i.append("span").attr("class","close-interaction-tooltip").text("Close ✖").on("click",w),i.append("div").attr("class","tooltip-content"),Object(a.f)(t).append("p").attr("class","interaction-title").text("".concat(e," has binary interactions with ").concat(r.length-1," proteins"));var o=100,c=0,l=10,s=100,u=18*r.length,d=u,f=Object(v.a)().rangeRound([0,u]),p=Object(b.a)().range([.2,1]),h=Object(a.f)(t).append("svg").attr("width",u+s+c).attr("height",d+o+l).attr("class","interaction-viewer").append("g").attr("class","interaction-viewer-group").attr("transform","translate(".concat(s,",").concat(o,")"));f.domain(r.map(function(t){return t.accession})),p.domain([0,10]);var g=function(t,e){return"//www.ebi.ac.uk/intact/query/id:".concat(t," AND id:").concat(e)},x=function(t){Object(a.f)(void 0).classed("active-cell",!0),Object(a.g)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0.3").attr("x1",0).attr("y1",f(t.source)+f.bandwidth()/2).attr("x2",f(t.id)).attr("y2",f(t.source)+f.bandwidth()/2),Object(a.g)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0.3").attr("x1",f(t.id)+f.bandwidth()/2).attr("y1",0).attr("x2",f(t.id)+f.bandwidth()/2).attr("y2",f(t.source))},k=function(){Object(a.g)("g").classed("active",!1),Object(a.g)("circle").classed("active-cell",!1),Object(a.g)(".active-row").remove()},O=function(e){!function(t,e){t.html("");var n=r.find(function(t){return t.accession===e.source}),i=r.find(function(t){return t.accession===e.id});t.append("h3").text("Interaction"),t.append("p").append("a").attr("href",g(e.interactor1,e.interactor2)).attr("target","_blank").text("Confirmed by ".concat(e.experiments," experiment(s)"));var a=t.append("table").attr("class","interaction-viewer-table"),o=a.append("tr");o.append("th"),o.append("th").text("Interactor 1"),o.append("th").text("Interactor 2");var c=a.append("tr");c.append("td").text("Name").attr("class","interaction-viewer-table_row-header"),c.append("td").text("".concat(n.name)),c.append("td").text("".concat(i.name));var l=a.append("tr");if(l.append("td").text("UniProtKB").attr("class","interaction-viewer-table_row-header"),l.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(n.accession)).text("".concat(n.accession)),l.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(i.accession)).text("".concat(i.accession)),e.chain1||e.chain2){var s=a.append("tr");s.append("td").text("Chain").attr("class","interaction-viewer-table_row-header"),s.append("td").text("".concat(e.chain1?e.chain1:"N/A")),s.append("td").text("".concat(e.chain2?e.chain2:"N/A"))}var u=a.append("tr");u.append("td").text("Pathology").attr("class","interaction-viewer-table_row-header"),u.append("td").html(y(n.diseases,n.accession)),u.append("td").html(y(i.diseases,i.accession));var d=a.append("tr");d.append("td").text("Subcellular location").attr("class","interaction-viewer-table_row-header"),d.append("td").html(m(n.subcellularLocations)),d.append("td").html(m(i.subcellularLocations));var f=a.append("tr");f.append("td").text("IntAct").attr("class","interaction-viewer-table_row-header"),f.append("td").attr("colspan",2).append("a").attr("href",g(e.interactor1,e.interactor2)).attr("target","_blank").text("".concat(e.interactor1,";").concat(e.interactor2))}(Object(a.g)(".tooltip-content"),e),i.style("opacity",.9).style("display","inline").style("left","".concat(Object(a.d)(t)[0]+10,"px")).style("top","".concat(Object(a.d)(t)[1]-15,"px"))};var j=h.selectAll(".interaction-row").data(r).enter().append("g").attr("class","interaction-row").attr("transform",function(t){return"translate(0,".concat(f(t.accession),")")}).each(function(t){if(t.interactions){var e=Object(a.f)(this).selectAll(".cell").data(t.interactions);e.enter().append("circle").attr("class","cell").attr("cx",function(t){return f(t.id)+f.bandwidth()/2}).attr("cy",function(){return f.bandwidth()/2}).attr("r",f.bandwidth()/3).style("fill-opacity",function(t){return p(t.experiments)}).style("display",function(e){return f(t.accession)<f(e.id)?"none":""}).on("click",O).on("mouseover",x).on("mouseout",k),e.exit().remove()}});j.append("rect").attr("x",-s).attr("width",s).attr("height",f.bandwidth()).attr("class","text-highlight"),j.append("text").attr("y",f.bandwidth()/2).attr("dy",".32em").attr("text-anchor","end").text(function(t,e){return r[e].name}).attr("class",function(t,n){return r[n].accession===e?"main-accession":""});var S=h.selectAll(".column").data(r).enter().append("g").attr("class","column").attr("transform",function(t){return"translate(".concat(f(t.accession),", 0)rotate(-90)")});S.append("rect").attr("x",6).attr("width",o).attr("height",f.bandwidth()).attr("class","text-highlight"),S.append("text").attr("x",6).attr("y",f.bandwidth()/2).attr("dy",".32em").attr("text-anchor","start").text(function(t,e){return r[e].name}).attr("class",function(t,n){return r[n].accession===e?"main-accession":""});var _="".concat(f(r[1].accession)," 0,").concat(f(r[r.length-1].accession)," 0,").concat(f(r[r.length-1].accession)," ").concat(f(r[r.length-1].accession),",").concat(f(r[0].accession)," 0");h.append("polyline").attr("points",_).attr("class","hidden-side").attr("transform",function(){return"translate(".concat(f(r[1].accession),", 0)")})};function x(){var t="#".concat(Object(a.f)(this).attr("data-toggle")),e=Object(a.f)(t).style("visibility");Object(a.f)(".dropdown-pane").style("visibility","hidden"),Object(a.f)(t).style("visibility","hidden"===e?"visible":"hidden")}function k(t){return t.toLowerCase().replace(/\s|,|^\d/g,"_")}var O=function(t,e,n,r,i,o){Object(a.f)(t).selectAll(".interaction-filter-container").remove();var c=Object(a.f)(t).append("div").attr("class","interaction-filter-container"),l=!0,s=!1,u=void 0;try{for(var f,p=function(){var t=f.value;if(t.items.length>0){var e=c.append("div").attr("class","interaction-filter");e.append("a").text(t.label).attr("class","button dropdown").attr("data-toggle","iv_".concat(t.name)).on("click",x);var a=e.append("ul").attr("id","iv_".concat(t.name)).attr("class","dropdown-pane");if(a.append("li").text("None").on("click",function(){return i(t.name,t.label)}),"tree"===t.type)d(t.items,function(e){e.type=t.name,n.push(e),a.datum(e).append("li").style("padding-left","".concat(e.depth,"em")).attr("id",function(t){return k(t.name)}).text(function(t){return t.name}).on("click",function(e){return r(e,t.name)})});else{var o=!0,l=!1,s=void 0;try{for(var u,p=t.items[Symbol.iterator]();!(o=(u=p.next()).done);o=!0){var h=u.value;h.type=t.name,n.push(h)}}catch(t){l=!0,s=t}finally{try{o||null==p.return||p.return()}finally{if(l)throw s}}a.selectAll("li").data(t.items).enter().append("li").attr("id",function(t){return k(t.name)}).text(function(t){return t.name.toLowerCase()}).on("click",function(e){r(e,t.name)})}}},h=e[Symbol.iterator]();!(l=(f=h.next()).done);l=!0)p()}catch(t){s=!0,u=t}finally{try{l||null==h.return||h.return()}finally{if(s)throw u}}return c.append("button").attr("class","iv_reset").text("Reset filters").on("click",function(){return o(),!1}),n};n(662);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e,n,r,i,a,o){try{var c=t[a](o),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,i)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(t){var e="function"==typeof Map?new Map:void 0;return(F=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return E(t,arguments,C(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),R(r,t)})(t)}function E(t,e,n){return(E=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&R(i,n.prototype),i}).apply(null,arguments)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var N="ADJACENCY_GRAPH";function P(t,e){return[{name:"subcellularLocations",label:"Subcellular location",type:"tree",items:t},{name:"diseases",label:"Diseases",items:e}]}var T=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=C(e).call(this))||"object"!==j(r)&&"function"!=typeof r?A(n):r).mode=N,t.filters=[],t.nodes=null,t.clickFilter=t.clickFilter.bind(A(t)),t.resetFilter=t.resetFilter.bind(A(t)),t.resetAllFilters=t.resetAllFilters.bind(A(t)),t.updateFilterSelection=t.updateFilterSelection.bind(A(t)),t.filterData=t.filterData.bind(A(t)),t.getNodeByAccession=t.getNodeByAccession.bind(A(t)),t}var n,r,i,l,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,F(HTMLElement)),n=e,r=[{key:"connectedCallback",value:function(){this._accession=this.getAttribute("accession"),this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){"accession"===t&&null!=e&&e!==n&&(this._accession=n,this.render())}},{key:"clickFilter",value:function(t,e){var n;Object(a.g)(".dropdown-pane").style("visibility","hidden"),this.filters.filter(function(t){return t.type===e}).forEach(function(t){return t.selected=!1}),t.selected=!t.selected,Object(a.f)("[data-toggle=iv_".concat(e,"]")).text((n=t.name).length>25?"".concat(n.substr(0,24),"..."):n),this.updateFilterSelection()}},{key:"resetFilter",value:function(t,e){Object(a.g)(".dropdown-pane").style("visibility","hidden"),this.filters.filter(function(e){return e.type===t}).forEach(function(t){return t.selected=!1}),Object(a.f)("[data-toggle=iv_".concat(t,"]")).text(e),this.updateFilterSelection()}},{key:"updateFilterSelection",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,i=this.filters[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;Object(a.f)("#".concat(k(o.name))).classed("active",o.selected)}}catch(t){e=!0,n=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}this.filterData()}},{key:"resetAllFilters",value:function(){this.filters.filter(function(t){return t.selected}).forEach(function(t){return t.selected=!1}),P().forEach(function(t){Object(a.f)("[data-toggle=iv_".concat(t.name,"]")).text(t.label)}),this.updateFilterSelection()}},{key:"getNodeByAccession",value:function(t){return this.nodes.find(function(e){return e.accession===t})}},{key:"filterData",value:function(){var t=this,e=this.filters.filter(function(t){return t.selected}),n=[];Object(a.g)(".cell").attr("opacity",function(r){var i=t.getNodeByAccession(r.source),a=t.getNodeByAccession(r.id),l=function(t,e,n){if(n.length<=0)return!0;var r=Object(o.a)(t.filterTerms,e.filterTerms);return Object(c.a)(r,n.map(function(t){return t.name})).length===n.length}(i,a,e);return l&&(n.push(i.accession),n.push(a.accession)),l?1:.1}),Object(a.g)(".interaction-viewer text").attr("fill-opacity",function(t){return n.includes(t.accession)?1:.1})}},{key:"render",value:(l=regeneratorRuntime.mark(function t(){var e,n,r,i,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this._accession){t.next=2;break}return t.abrupt("return");case 2:return this.style.display="block",this.style.minHeight="6em",Object(a.f)(this).select(".interaction-title").remove(),Object(a.f)(this).select("svg").remove(),Object(a.f)(this).select(".interaction-tooltip").remove(),t.next=9,h(this._accession);case 9:if(!(e=t.sent)){t.next=22;break}n=p(e),r=n.data,i=n.subcellulartreeMenu,o=n.diseases,this.nodes=r,c=void 0,this.dispatchEvent(new CustomEvent("protvista-event",{detail:{loaded:!0,error:c},bubbles:!0})),O(this,P(i,o),this.filters,this.clickFilter,this.resetFilter,this.resetAllFilters),t.t0=this.mode,t.next=t.t0===N?18:"FORCE_DIRECTED_GRAPH"===t.t0?20:21;break;case 18:return g(this,this._accession,e,P(i,o)),t.abrupt("break",22);case 20:case 21:return t.abrupt("break",22);case 22:case"end":return t.stop()}var c},t,this)}),s=function(){var t=this,e=arguments;return new Promise(function(n,r){var i=l.apply(t,e);function a(t){S(i,n,r,a,o,"next",t)}function o(t){S(i,n,r,a,o,"throw",t)}a(void 0)})},function(){return s.apply(this,arguments)})},{key:"accession",set:function(t){this._accession=t},get:function(){return this._accession}}],i=[{key:"observedAttributes",get:function(){return["accession"]}}],r&&_(n.prototype,r),i&&_(n,i),e}(),D=n(110),I=n(49),L=n(664),B=n.n(L);e.default=function(t){return Object(D.a)("interaction-viewer",T),i.a.createElement(r.Fragment,null,i.a.createElement(I.default,{content:B.a}),i.a.createElement("interaction-viewer",{accession:"Q8N1B4"}))}},662:function(t,e,n){var r=n(663);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(76)(r,i);r.locals&&(t.exports=r.locals)},663:function(t,e,n){(t.exports=n(75)(!1)).push([t.i,'@charset "UTF-8";\ninteraction-viewer {\n  position: relative;\n}\n\ninteraction-viewer text {\n  font-family: "Open Sans", sans-serif;\n  fill: black;\n  opacity: 0.75;\n  font-size: 12px;\n}\n\ninteraction-viewer .active text {\n  opacity: 1;\n}\n\ninteraction-viewer .active-row {\n  stroke: #4a90e2;\n}\n\ninteraction-viewer .interaction-tooltip {\n  z-index: 99999;\n  position: absolute;\n  background: #ffffff;\n  padding: 0.5em 1em;\n  border: 1px #979797 solid;\n  box-shadow: 2px 2px 2px #333333;\n  -webkit-transition: all 0.5s;\n  /* Safari */\n  transition: all 0.25s;\n  min-width: 36em;\n}\n\ninteraction-viewer .interaction-tooltip .close-interaction-tooltip {\n  cursor: pointer;\n  float: right;\n  margin-bottom: 0.8em;\n}\n\ninteraction-viewer .interaction-tooltip .tooltip-content {\n  clear: both;\n}\n\ninteraction-viewer .interaction-filter-container {\n  text-align: left;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  #filter-display\n  .filter-selected {\n  margin: 0.2em 0.5em;\n  padding: 0.3em 0.1em;\n  background-color: #f2f2f2;\n  border: 1px solid #e8e8e8;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-block;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  #filter-display\n  .filter-selected::after {\n  content: "✖";\n  margin: 0 0.3em;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter {\n  vertical-align: top;\n  margin-bottom: 0.5em;\n  display: inline-block;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul {\n  border: #e8e8e8 1px solid;\n  max-height: 15em;\n  overflow-y: auto;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li {\n  cursor: pointer;\n  padding: 0.5em 0.5em;\n  border-bottom: #e8e8e8 1px solid;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  .interaction-filter\n  ul\n  li:hover {\n  background-color: #f2f2f2;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  .interaction-filter\n  ul\n  li.active {\n  font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .cell {\n  fill: #4a90e2;\n}\n\ninteraction-viewer .interaction-viewer .cell.active-cell {\n  r: 0.8em;\n  -webkit-transition: all 0.5s;\n  /* Safari */\n  transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer .hidden-side {\n  fill: #e8e8e8;\n}\n\ninteraction-viewer .interaction-viewer .main-accession {\n  font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .text-highlight {\n  fill: #fff;\n  opacity: 0;\n  -webkit-transition: all 0.5s;\n  /* Safari */\n  transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer-table tr:nth-child(even) {\n  background: #f2f2f2;\n}\n\ninteraction-viewer .interaction-viewer-table td,\ninteraction-viewer .interaction-viewer-table th {\n  padding: 0.5em;\n  text-align: center;\n}\n\ninteraction-viewer .interaction-viewer-table th {\n  background-color: #e8e8e8;\n  white-space: nowrap;\n}\n\ninteraction-viewer\n  .interaction-viewer-table\n  .interaction-viewer-table_row-header {\n  font-weight: bold;\n  text-align: right;\n}\n\ninteraction-viewer .button {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 1em 0 0;\n  padding: 0.85em 1em;\n  -webkit-appearance: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n  -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  line-height: 1;\n  text-align: center;\n  cursor: pointer;\n  background-color: #f2f2f2 !important;\n  color: #3a343a;\n  border: 1px solid #e8e8e8;\n}\n\ninteraction-viewer .iv_reset {\n  display: block;\n}\n\ninteraction-viewer .button:hover {\n  color: #3a343a;\n}\n\ninteraction-viewer .button.dropdown::after {\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 0.4em;\n  content: "";\n  border-bottom-width: 0;\n  border-top-style: solid;\n  border-color: #3a343a transparent transparent;\n  position: relative;\n  top: 0.4em;\n  display: inline-block;\n  float: right;\n  margin-left: 1em;\n}\n\ninteraction-viewer .dropdown-pane {\n  position: absolute;\n  z-index: 10;\n  display: block;\n  width: 300px;\n  padding: 1rem;\n  visibility: hidden;\n  border: 1px solid #cacaca;\n  border-radius: 0;\n  background-color: #fefefe;\n}\n\ninteraction-viewer .tree-list {\n  text-align: left;\n  list-style: none;\n}\n\ninteraction-viewer .tree-list li {\n  margin: 0.5em 0;\n}\n',""])},664:function(t,e){t.exports='<h1 id="interaction-viewer">interaction-viewer</h1>\n<p><a href="https://www.npmjs.com/package/interaction-viewer"><img src="https://img.shields.io/npm/v/interaction-viewer.svg" alt="Published on NPM"></a></p>\n<p>An adjacency graph visualisation of protein interaction data.</p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;interaction-viewer accession=&quot;O60941&quot;&gt;&lt;/interaction-viewer&gt;</code></pre>\n<h2 id="api">API</h2>\n<ul>\n<li><code>accession</code> changing the accession will cause the component to fetch the data for the given entry</li>\n</ul>\n<h2 id="dependencies">Dependencies</h2>\n<p>This component uses Custom elements V1 (<a href="https://www.webcomponents.org/polyfills/">https://www.webcomponents.org/polyfills/</a>), which requires the use of a polyfill in certain browsers.</p>\n<h1 id="contact">Contact</h1>\n<p>For support contact <a href="mailto:help@uniprot.org">help@uniprot.org</a> and please put interaction viewer in the subject line.</p>\n<h1 id="license">License</h1>\n<p>Distributed under the Apache License 2.0</p>\n'}}]);