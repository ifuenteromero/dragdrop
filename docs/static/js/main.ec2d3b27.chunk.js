(this.webpackJsonpdragdrop=this.webpackJsonpdragdrop||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(6),i=r.n(c),u=(r(12),r(13),r(7)),a=r(5),s=r(0),d=function(e){var t=e.data,r=Object(n.useState)(t),c=Object(a.a)(r,2),i=c[0],d=c[1],o=Object(n.useState)(!1),l=Object(a.a)(o,2),m=l[0],p=l[1],j=Object(n.useRef)(),g=Object(n.useRef)(),b=function e(){p(!1),j.current=null,g.current.removeEventListener("dragend",e),g.current=null},f=function(e){var t=j.current;return t.groupI===e.groupI&&t.itemI===e.itemI?"dragged dnd-item":"dnd-item"},I=function(e,t){var r=j.current;e.target!==g.current&&d((function(e){var n=Object(u.a)(e);return n[t.groupI].items.splice(t.itemI,0,n[r.groupI].items.splice(r.itemI,1)[0]),j.current=t,n}))};return Object(s.jsx)("div",{className:"drag-n-drop",children:i.map((function(e,t){return Object(s.jsxs)("div",{className:"dnd-group",onDragEnter:e.items.length?null:function(e){return I(e,{groupI:t,itemI:0})},children:[Object(s.jsx)("div",{className:"group-title",children:e.title}),e.items.map((function(e,r){return Object(s.jsx)("div",{className:m?f({groupI:t,itemI:r}):"dnd-item",draggable:!0,onDragStart:function(e){return function(e,t){j.current=t,g.current=e.target,g.current.addEventListener("dragend",b),setTimeout((function(){p(!0)}),0)}(e,{groupI:t,itemI:r})},onDragEnter:function(e){return I(e,{groupI:t,itemI:r})},children:Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"ITEM ".concat(e)})})},r)}))]},t)}))})},o=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(d,{data:[{title:"Group 1",items:[1,2,3]},{title:"Group 2",items:[4,5]}]})})})};i.a.render(Object(s.jsx)(o,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ec2d3b27.chunk.js.map