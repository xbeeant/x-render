/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */

import { InfoCircleOutlined } from '@ant-design/icons';
import { message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: 'Hotel Status',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['In business', 'Closed'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: 'Hotel Star',
      type: 'string',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        // Note that the rows and total must be returned
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // Configure full pass-through antd table
  const columns = [
    {
      title: 'Hotel Name',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: 'Hotel Address',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          Hotel Status
          <Tooltip placement="top" title="Use valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: 'In business',
        closed: 'Closed',
      },
      dataIndex: 'state',
    },
    {
      title: 'Hotel Star',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: 'Hotel GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: 'Operate',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('Booking Success');
              }}
            >
              Booking
            </div>
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table columns={columns} rowKey="id" />
    </div>
  );
};

export default withTable(Demo);
