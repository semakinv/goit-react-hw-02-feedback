(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){e.exports={shell:"App_shell__3QlhT"}},18:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=n(1),u=n(2),i=n(4),s=n(3),d=n(5),p=n(12),b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={good:n.props.good,neutral:n.props.neutral,bad:n.props.bad},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad,o=e.total,c=e.positivePercentage;return r.a.createElement("section",null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",n),r.a.createElement("p",null,"Bad: ",a),r.a.createElement("p",null,"Total:",o),r.a.createElement("p",null,"Positive feedback: ",c," %"))}}]),t}(a.Component),m=n(7),h=n(8);function f(){var e=Object(m.a)(["\n  list-style: none;\n  display: inline;\n"]);return f=function(){return e},e}function g(){var e=Object(m.a)(["\n  margin: 5px;\n  padding: 2px;\n  border-radius: 5px;\n\n  &::first-letter {\n    text-transform: uppercase;\n  }\n"]);return g=function(){return e},e}var v=h.a.button(g()),E=h.a.li(f()),k=function(e){var t=e.onLeaveFeedback,n=e.options;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,Object.keys(n).map((function(e){return r.a.createElement(E,{key:e},r.a.createElement(v,{type:"button",onClick:t},e))}))))},j=function(e){var t=e.children,n=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n),t)},O=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t))},y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={good:n.props.good,neutral:n.props.neutral,bad:n.props.bad},n.handleIncrement=function(e){var t=e.target.textContent;n.setState((function(e){return Object(p.a)({},t,e[t]+1)}))},n.countTotalFeedback=function(e){return e.good+e.neutral+e.bad},n.countPositiveFeedbackPercentage=function(e){return Math.round(100*e.good/(e.good+e.neutral+e.bad))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{title:"Please leave feedback"},r.a.createElement(k,{options:this.state,onLeaveFeedback:this.handleIncrement})),r.a.createElement(j,{title:"Statistics"},this.countTotalFeedback(this.state)>0?r.a.createElement(b,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(this.state),positivePercentage:this.countPositiveFeedbackPercentage(this.state)}):r.a.createElement(O,{message:"No feedback given"})))}}]),t}(a.Component),F=n(16),P=n.n(F),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=P.a.shell;return r.a.createElement("section",{className:e},r.a.createElement(y,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad}))}}]),t}(a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c3eef83b.chunk.js.map