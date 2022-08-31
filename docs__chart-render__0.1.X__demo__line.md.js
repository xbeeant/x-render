(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6sD2":function(E,a,e){"use strict";e.r(a);var r=e("q1tI"),t=e.n(r),n=e("dEAq"),l=e.n(n),s=e("H1Ra"),u=e("nKUr"),v=e.n(u),o=t.a.memo(d=>{var i=d.demos;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"markdown",children:[Object(u.jsxs)("h2",{id:"\u57FA\u672C\u7528\u6CD5",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u7528\u6CD5"]}),Object(u.jsxs)("h3",{id:"\u5355\u6307\u6807-\u5355\u7EF4\u5EA6",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u5355\u6307\u6807-\u5355\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u5355\u6307\u6807 \u5355\u7EF4\u5EA6"]}),Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:["\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"y \u8F74"}),"\u3002"]})}),Object(u.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/BuatJtOJ7/ff0e3f12-bc8a-49c9-bc60-175a8dbbdc82.png",style:{border:"1px solid #ebedf1"}}),Object(u.jsx)(s.a,{code:`/**
 * transform: true
 * defaultShowCode: true
 */
import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`,lang:"js"}),Object(u.jsxs)("h3",{id:"\u5355\u6307\u6807-\u53CC\u7EF4\u5EA6",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u5355\u6307\u6807-\u53CC\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u5355\u6307\u6807 \u53CC\u7EF4\u5EA6"]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7B2C\u4E00\u7EF4\u5EA6\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"y \u8F74"}),"\uFF0C\u7B2C\u4E8C\u7EF4\u5EA6\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"\u7CFB\u5217"}),"\u3002"]}),Object(u.jsxs)("li",{children:["\u6570\u636E\u4E0A\uFF0C\u6570\u636E\u6761\u6570\u662F ",Object(u.jsx)("code",{children:"\u300C\u5355\u6307\u6807 \u5355\u7EF4\u5EA6\u300D"})," \u7684\u4E24\u500D\u3002"]})]}),Object(u.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/LhXumsY5L/e5193c0f-900b-409c-ad4e-5fbf537b66bd.png",style:{border:"1px solid #ebedf1"}}),Object(u.jsx)(s.a,{code:`/**
 * transform: true
 * defaultShowCode: true
 */
import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`,lang:"js"}),Object(u.jsxs)("h3",{id:"\u53CC\u6307\u6807-\u53CC\u7EF4\u5EA6",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u53CC\u6307\u6807-\u53CC\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u53CC\u6307\u6807 \u53CC\u7EF4\u5EA6"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u4F1A\u4EE5\u53CC y \u8F74\u6298\u7EBF\u56FE\u5C55\u793A\u3002"}),Object(u.jsxs)("li",{children:["\u7B2C\u4E00\u7EF4\u5EA6\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u7B2C\u4E8C\u7EF4\u5EA6\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"\u7CFB\u5217"}),"\uFF0C\u7B2C\u4E00\u6307\u6807\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"\u5DE6 y \u8F74"}),"\uFF0C\u7B2C\u4E8C\u6307\u6807\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"\u53F3 y \u8F74"}),"\u3002"]})]}),Object(u.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/A7OshJhkm/e54b3e35-0005-4956-8423-02791179b574.png",style:{border:"1px solid #ebedf1"}}),Object(u.jsx)(s.a,{code:`/**
 * transform: true
 * defaultShowCode: true
 */
import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`,lang:"js"}),Object(u.jsxs)("h3",{id:"\u591A\u6307\u6807-\u5355\u7EF4\u5EA6",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u591A\u6307\u6807-\u5355\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u591A\u6307\u6807 \u5355\u7EF4\u5EA6"]}),Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:["\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",Object(u.jsx)("code",{children:"x \u8F74"}),"\uFF0C\u6307\u6807\u5206 ",Object(u.jsx)("code",{children:"\u7CFB\u5217"})," \u5C55\u793A\u3002"]})}),Object(u.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/NAOxh8EbB/7d536bd3-4b63-45c9-a96c-d918a61d9b56.png",style:{border:"1px solid #ebedf1"}}),Object(u.jsx)(s.a,{code:`/**
 * transform: true
 * defaultShowCode: true
 */
import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`,lang:"js"}),Object(u.jsxs)("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u9AD8\u7EA7\u7528\u6CD5"]}),Object(u.jsxs)("h3",{id:"\u767E\u5206\u6BD4\u5806\u53E0\u9762\u79EF\u56FE",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u767E\u5206\u6BD4\u5806\u53E0\u9762\u79EF\u56FE","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u767E\u5206\u6BD4\u5806\u53E0\u9762\u79EF\u56FE"]}),Object(u.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/XIcTikHf5/6b57f951-5f44-4cab-9b7c-8f70aa4f3207.png",style:{border:"1px solid #ebedf1"}}),Object(u.jsx)(s.a,{code:`/**
 * transform: true
 * defaultShowCode: true
 */
import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`,lang:"js"})]})})});a.default=d=>{var i=t.a.useContext(n.context),j=i.demos;return t.a.useEffect(()=>{var c;d!=null&&(c=d.location)!==null&&c!==void 0&&c.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(d.location.hash.slice(1)))},[]),Object(u.jsx)(o,{demos:j})}}}]);
