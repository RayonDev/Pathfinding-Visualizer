(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],[,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var i=e(0),c=e(1),r=e.n(c),a=e(7),o=e.n(a),s=(e(13),e(14),e(2)),u=e(3),d=e(5),j=e(4),f=(e(15),function(t){Object(d.a)(e,t);var n=Object(j.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var t=this.props,n=t.col,e=t.row;t.isFinish,t.isStart,t.isWall;return Object(i.jsx)("div",{id:"node-".concat(e,"-").concat(n),className:"node"})}}]),e}(c.Component)),l=(e(16),function(t){Object(d.a)(e,t);var n=Object(j.a)(e);function e(t){var i;return Object(s.a)(this,e),(i=n.call(this,t)).state={nodes:[]},i}return Object(u.a)(e,[{key:"componentDidMount",value:function(){for(var t=[],n=0;n<15;n++){for(var e=[],i=0;i<50;i++)e.push([]);t.push(e)}this.setState({nodes:t})}},{key:"render",value:function(){var t=this.state.nodes;return Object(i.jsx)("div",{className:"griglia",children:t.map((function(t,n){return Object(i.jsx)("div",{children:t.map((function(t,n){return Object(i.jsx)(f,{})}))})}))})}}]),e}(c.Component));var h=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(l,{})})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;e(t),i(t),c(t),r(t),a(t)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),p()}],[[17,1,2]]]);
//# sourceMappingURL=main.b2baf33c.chunk.js.map