/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */
import React from 'react';
import { Column, Search, withChart, useChart } from 'chart-render';
import { Card, Button } from 'antd';

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
  const loading = useChart(state => state.loading);
  const refresh = useChart(state => state.refresh);

  return (
    <Card
      title={
        <Button loading={loading} onClick={refresh}>
          Manual refresh
        </Button>
      }
      extra={<Search hidden searchOnMount={false} api={api} />}
    >
      <Column />
    </Card>
  );
};

export default withChart(App);
