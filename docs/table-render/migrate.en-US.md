---
order: 3
title: 0.x To 1.0
hide: true
---

#### For those who used 0.x before, we have updated TableRender 1.0 as follows, considering the code reasonableness

1. The export of `table-render` has the following changes, `ProTable` is changed to `Table`.

2. `Search` and `Table` no longer need to be wrapped by `TableContainer` component, all the table code can be wrapped by `withTable`, so that the writing is more concise.

3. `searchApi` was originally put on top of `TableContainer` component, but now it is put on `Search`, while `searchApi` is changed to `api`, so that each has its own role.

   ```js

    // Old version
   import { ProTable, Search, TableContainer, useTable } from 'table-render';
   //...
   const TableDemo=(
    <TableContainer searchApi={searchApi}>
      <TableDemo />
    </TableContainer>
   );
   const TableBody = (
     const { refresh } = useTable();
     <>
        <Search schema={searchSchema} />
        <ProTable />
     </>
   );
   export default TableDemo;

   // New version
   import { Table, Search, withTable, useTable } from 'table-render';
   //...
   const TableDemo = (
     const { refresh } = useTable()
     <>
       <Search schema={schema} api={searchApi} />
       <Table headerTitle="Simple Table" columns={columns} rowKey="id" />
     </>
   );
   export default withTable(TableDemo);

   ```
