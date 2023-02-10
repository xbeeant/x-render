/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */
import React, { useCallback, useState } from 'react';
import { Column, Search, withChart } from 'chart-render';
import { Card, Row, Col } from 'antd';

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
        { id: 'uv', name: 'UV' },
      ];
      const data = [...new Array(24)].map((_, index) => ({
        ds: `2022-01-${String(index + 1).padStart(2, 0)}`,
        uv: Math.floor(Math.random() * 100),
      }));
      resolve({ meta, data });
    }, 1000)
  );
};

const App = () => {
  const [hoveredData, setHoveredData] = useState();

  const onEvent = useCallback((chart, event) => {
    if (event.type === 'plot:click' && event.data?.data) {
      setHoveredData(event?.data?.data);
    }
  }, []);

  return (
    <Card
      title="Visit Trends"
      extra={<Search searchOnChange api={api} schema={schema} />}
    >
      <Row gutter={12}>
        <Col span={8}>
          <h2>Click on the right column👉🏻</h2>
          <h2>Curren selected：</h2>
          <p>ds: {hoveredData?.ds}</p>
          <p>uv: {hoveredData?.uv}</p>
        </Col>
        <Col span={16}>
          <Column onEvent={onEvent} />
        </Col>
      </Row>
    </Card>
  );
};

export default withChart(App);
