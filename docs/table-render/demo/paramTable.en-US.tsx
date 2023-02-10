/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */

import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
import React, { useEffect } from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import { history } from 'umi';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: 'Hotel Status',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['In business', '已打烊'],
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
  const { form } = useTable();
  useEffect(() => {
    // The actual use of queryParam is a valid parameter taken from the url
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form specific api refer to form-render documentation
      form.setValues(queryParam);
    }
  }, []);

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
          <Tooltip placement="top" title="USE valueType">
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

  const onSearch = search => {
    console.log('onSearch', search);
  };

  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };

  return (
    <div>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="Search when url has params "
        rowKey="id"
        toolbarRender={() => [
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
