/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */

import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
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
    created_at: {
      title: 'Establishment time',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

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
            rows: [...res.data, { money: null }],
            total: res.data.length,
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

  const searchApi2 = params => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
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
          <Tooltip placement="top" title="使用valueType">
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
          {row?.labels?.map(({ name, color }) => (
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
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('Booking success');
              }}
            >
              Booking
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div>
      <Search
        schema={schema}
        displayType="row"
        api={[
          {
            name: 'Full data',
            api: searchApi,
          },
          {
            name: 'Mine Data',
            api: searchApi2,
          },
        ]}
      />
      <Table
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            View Logs
          </Button>,
          <Button key="out" onClick={showData}>
            Export Data
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render！')}
          >
            <PlusOutlined />
            Create
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);
