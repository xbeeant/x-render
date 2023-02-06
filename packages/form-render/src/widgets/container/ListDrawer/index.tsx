



import React, { useState, useRef } from 'react';
import { Space, Table, Form, Button, Popconfirm } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, PlusOutlined } from '@ant-design/icons';
import type { FormListFieldData, FormListOperation, TableColumnsType } from 'antd';
import FormDrawer from './drawerForm';
import { useTranslation } from 'react-i18next';
import './index.less';

interface Props {
  schema: any;
  fields: FormListFieldData[];
  operation: FormListOperation;
  prefix: string;
  [key: string]: any
};

const TableList: React.FC<Props> = (props: any) => {
  const {
    schema,
    fields,
    rootPath,
    renderCore,
    readOnly,
    widgets,
    addBtnProps,
    delConfirmProps,
    actionColumnProps,
    pagination,

    hideDelete,
    hideCopy,
    hideMove,
    hideAdd,
    hideEdit,

    addItem,
    copyItem,
    moveItem,
    removeItem,
  } = props;

  const form = Form.useFormInstance();
  const { t } = useTranslation()

  const paginationConfig = {
    size: 'small',
    hideOnSinglePage: true,
    ...pagination,
  };

  const columnSchema = schema?.items?.properties || {};

  const [visible, setVisible] = useState(false);
  const [itemData, setItemData] = useState(null);
  const indexRef = useRef(null);

  const handleCopy = (name: number) => {
    const value = form.getFieldValue(rootPath.concat(name));
    copyItem(value);
  };

  const handleAdd = () => {
    indexRef.current = -1;
    setVisible(true);
  };

  const handleDrawerClose = (data: any) => {
    setVisible(false);
    setItemData(null);
    if (!data) {
      return;
    }
   
    if (indexRef.current === -1) {
      addItem(data);
    } else {
      form.setFieldValue([...rootPath, indexRef.current], data);
    }
    indexRef.current === null;
  };

  const columns: TableColumnsType<FormListFieldData> = Object.keys(columnSchema).map(dataIndex => {
    const { title } = columnSchema[dataIndex];
    return {
      dataIndex,
      title,
      render: (_, field) => {
        const fieldSchema = {
          type: 'object',
          properties: {
            [dataIndex]: {
              ...columnSchema[dataIndex],
              noStyle: true,
              readOnly: true,
            }
          }
        };
        return renderCore({ schema: fieldSchema, parentPath: [field.name], rootPath });
      }
    }
  });

  if (!readOnly) {
    columns.push({
      title: actionColumnProps.colHeaderText,
      width: 170,
      render: (_, field) => (
        <Form.Item>
          <Space>
            {!hideCopy && <a onClick={() => handleCopy(field.name)}>{actionColumnProps.copyText}</a>}
            {!hideEdit && <a onClick={() => {
              setVisible(true);
              indexRef.current = field.name;
              setItemData(form.getFieldValue(rootPath.concat(field.name)));
            }}>{t('edit')}</a>}
            {!hideDelete && (
              <Popconfirm
                {...delConfirmProps}
                onConfirm={() => removeItem(field.name)}
              >
                <a>{actionColumnProps.delText}</a>
              </Popconfirm>
            )}
            {!hideMove && (
              <>
                <ArrowUpOutlined style={{ color: '#1890ff' }} onClick={() => moveItem(field.name, field.name - 1)} />
                <ArrowDownOutlined style={{ color: '#1890ff' }} onClick={() => moveItem(field.name, field.name + 1)} />
              </>
            )}
          </Space>
        </Form.Item>
      )
    });
  }

  return (
    <div className='fr-list-drawer'>
      <Table
        size='middle'
        dataSource={fields}
        columns={columns}
        style={{ marginBottom: '12px' }}
        scroll={{ x: 'max-content' }}
        pagination={paginationConfig}
      />
      {(!schema.max || fields.length < schema.max) && !hideAdd && (
        <Button
          icon={<PlusOutlined />}
          onClick={handleAdd}
          {...addBtnProps}
        />
      )}
      {visible && (
        <FormDrawer
          schema={schema}
          data={itemData}
          widgets={widgets}
          onClose={handleDrawerClose}
        />
      )}
    </div>
  );
}

export default TableList;



