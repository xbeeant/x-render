/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */
import React from 'react';
import { Column, Search, withChart } from 'chart-render';
import { Card } from 'antd';

const schema = {
  type: 'object',
  properties: {
    os: {
      type: 'string',
      enum: ['Windows', 'MacOS', 'Android', 'iOS'],
      enumNames: ['Windows', 'MacOS', 'Android', 'iOS'],
      props: { placeholder: 'Operating System' },
    },
    location: {
      type: 'string',
      enum: ['Hang Zhou', 'Ning Bo', 'Jia Xing', 'Jing Hua'],
      enumNames: ['Hang Zhou', 'Ning Bo', 'Jia Xing', 'Jing Hua'],
      props: { placeholder: 'IP Location' },
    },
  },
};

const api = ({ filters }) => {
  console.log('filters >>> ', filters);
  return new Promise(resolve =>
    setTimeout(() => {
      const meta = [
        { id: 'ds', name: 'Date', isDim: true },
        { id: 'pv', name: 'PV' },
        { id: 'uv', name: 'UV' },
      ];
      const data = [...new Array(24)].map((_, index) => ({
        ds: `2022-01-${String(index + 1).padStart(2, 0)}`,
        pv: Math.floor(Math.random() * 100) + 100,
        uv: Math.floor(Math.random() * 100),
      }));
      resolve({ meta, data });
    }, 1000)
  );
};

const App = () => {
  return (
    <Card
      title="Visit Trends"
      extra={<Search searchOnChange api={api} schema={schema} />}
    >
      <Column />
    </Card>
  );
};

export default withChart(App);
