import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const [data, setData] = useState(customersData);

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete'];
  const editing = { allowAdding: true, allowEditing: true, allowDeleting: true };

  const handleAdd = (args) => {
    const newData = [...data];
    newData.push(args.data);
    setData(newData);
  };

  const handleDelete = (args) => {
    const newData = [...data];
    newData.splice(args.rowData.index, 1);
    setData(newData);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Customers" />
      <GridComponent
        dataSource={data}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        actionBegin={(args) => {
          if (args.requestType === 'save') {
            const newData = [...data];
            newData[args.rowIndex] = args.data;
            setData(newData);
          }
        }}
        actionComplete={(args) => {
          if (args.requestType === 'add') {
            handleAdd(args);
          }
          if (args.requestType === 'delete') {
            handleDelete(args);
          }
        }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
