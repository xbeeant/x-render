/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */

import { InfoCircleOutlined } from '@ant-design/icons';
import { message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import { ProColumnsType } from 'table-render/src/interface';
import request from 'umi-request';

const schema = {
  type: 'object',
  labelWidth: 80,
  properties: {
    state: {
      title: 'Hotel Status',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['In business', 'Closed'],
      width: '33%',
      widget: 'select',
    },
    labels: {
      title: 'Hotel Star',
      type: 'string',
      width: '33%',
    },
  },
};

interface RecordType {
  id: number;
  number: number;
  address: string;
  title: string;
  room: number;
  money: number;
  state: string;
  created_at: string;
  labels: Array<{ name: string; color: string }>;
}

const Demo = () => {
  // This means that tableState.dataSource matches Array<RecordType>
  const { tableState, refresh } = useTable<RecordType>();

  const searchApi = (params, sorter) => {
    console.group(sorter);
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
          };
        }
      })
      .catch(e => {
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // The use of ProColumnsType is similar to antd
  const columns: ProColumnsType<RecordType> = [
    {
      title: 'Hotel Name',
      dataIndex: 'title',
      valueType: 'code',
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
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: 'Establishment time',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: 'Operate',
      render: () => (
        <a
          onClick={() => {
            message.success('Booking Success');
          }}
        >
          Booking
        </a>
      ),
    },
  ];

  return (
    <div>
      {/* This means that the return value of the api must match the RecordType */}
      <Search<RecordType> schema={schema} displayType="row" api={searchApi} />
      {/* Similar to antd, used in conjunction with ProColumnsType */}
      <Table<RecordType>
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);
