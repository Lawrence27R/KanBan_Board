import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ProjectsData, contextMenuItems, ProjectsGrid } from '../data/dummy';
import { Header } from '../components';

const Projects = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const [data, setData] = useState(ProjectsData);

  const addOrder = () => {
    const order = {
      OrderID: data.length + 1,
      CustomerID: 'ALFKI',
      OrderDate: new Date(),
      ShipName: 'Around the Horn',
      Freight: 32.38,
    };
    setData([...data, order]);
  };

  const deleteOrder = (args) => {
    const selectedRecords = args.data;
    const deleteIds = selectedRecords.map((record) => record.OrderID);
    const updatedData = data.filter((record) => !deleteIds.includes(record.OrderID));
    setData(updatedData);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Projects" />
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={addOrder}>Add Order</button>
      <GridComponent
        id="gridcomp"
        dataSource={data}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={['Delete']}
        toolbarClick={deleteOrder}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ProjectsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Projects;
