/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */

import React from 'react';
import { Search, Table, withTable } from 'table-render';

const Demo = () => {
  const searchApi = params => {
    return {
      rows: [],
      total: 0,
    };
  };

  // The use of ProColumnsType is similar to antd
  const columns = [];

  return (
    <div>
      <Search hidden displayType="row" api={searchApi} />
      {/* Similar to antd, used in conjunction with ProColumnsType */}
      <Table
        style={false}
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);
