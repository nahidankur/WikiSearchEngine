(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n(14),s=n.n(r),i=n(4),d=n.n(i),u=n(15),j=n(5),l=n(16),o=n.n(l),p=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),i=Object(j.a)(s,2),l=i[0],p=i[1];console.log(l),Object(a.useEffect)((function(){n&&function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://en.wikipedia.org/w/api.php",{params:{action:"query",list:"search",format:"json",origin:"*",srsearch:n}});case 2:t=e.sent,c=t.data,p(c.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]);var h=l.map((function(e){return Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{className:"right floated content",children:Object(c.jsx)("a",{className:"ui primary button",href:"https://en.wikipedia.org?curid=".concat(e.pageid),children:"Read More"})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"header",children:[" ",e.title," "]}),Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"ui center aligned grey inverted segment",children:Object(c.jsxs)("div",{className:"ui inverted transparent icon input",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search from Wikipedia...",value:n,onChange:function(e){return r(e.target.value)}}),Object(c.jsx)("i",{className:"search icon"})]})}),Object(c.jsx)("div",{className:"ui raised segment",children:Object(c.jsx)("div",{className:"ui relaxed divided list",children:h})})]})},h=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(p,{})})};s.a.render(Object(c.jsx)(h,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.00c7327a.chunk.js.map