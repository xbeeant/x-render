import React, { useState } from 'react';
import { Popconfirm, Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import type { FormListFieldData } from 'antd';
import './index.less';
import { useTranslation } from 'react-i18next';

const TabPane = Tabs.TabPane

interface ListTabProps {
  fields: FormListFieldData[];
  schema: any;
  delConfirmProps: any;
  renderCore: any;
  rootPath: any;
  [key: string]: any;
};

const TabList: React.FC<ListTabProps> = (props) => {
  const {
    schema,
    fields,
    rootPath,
    renderCore,
    readOnly,

    delConfirmProps,
    tabName,

    hideDelete,
    hideAdd,

    addItem,
    removeItem,
  } = props;

  const [activeKey, setActiveKey] = useState('0');
  const { t } = useTranslation()

  const getCurrentTabPaneName = idx => {
    return tabName instanceof Array
      ? tabName[idx] || idx + 1
      : `${tabName || t('item')} ${idx + 1}`;
  };

  const handleDelete = (targetKey: number) => {
    removeItem(targetKey);
    setActiveKey(`${targetKey > 1 ? targetKey - 1 : 0}`);
  }

  const handleEdit = (targetKey, action) => {
    if (action === 'add') {
      if ((!schema.max || fields.length < schema.max) && !readOnly && !hideAdd) {
        addItem()
        const currentKey = fields.length;
        setActiveKey(`${currentKey}`);
      }
    } else if (action === 'remove') {
      return null
    } else {
      return null;
    }
  };

  const renderClose = (name) => {
    return !readOnly && !hideDelete ? (
      <Popconfirm
        onConfirm={() => handleDelete(name)}
        {...delConfirmProps}
      >
        <CloseOutlined />
      </Popconfirm>
    ) : <></>
  }

  return (
    <>
      <Tabs
        className='fr-tab-list'
        type={'editable-card'}
        onChange={setActiveKey}
        activeKey={activeKey + ''}
        onEdit={handleEdit}
        hideAdd={readOnly || hideAdd}
      >
        {fields.map(({ key, name }) => {
          return (
            <TabPane
              tab={getCurrentTabPaneName(name)}
              key={name}
              className='fr-list-item'
              closeIcon={renderClose(name)}
            >
              <div style={{ flex: 1 }}>
                {renderCore({ schema, parentPath: [name], rootPath: [...rootPath, name] })}
              </div>
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
}

export default TabList;
