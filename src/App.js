import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { 
  Filter,
  GridComponent,
  Inject,
  Page,
  Sort,
} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import {Data} from './util.js';
// import { data } from './datasource';
import API  from './util';

import './App.css';
export default class App extends React.Component {
  constructor() {
    super(...arguments);
    this.FilterOptions = {
      type: 'Menu',
    };
    this.pageOptions = {
      pageSize: 8,
      pageSizes: true,
    };
    this.state = {
      userData: API,
    };
  }
  onLoad() {
    let gridElement = document.getElementById('grid');
    if (gridElement && gridElement.ej2_instances[0]) {
      let gridInstance = gridElement.ej2_instances[0];
      /** height of the each row */
      const rowHeight = gridInstance.getRowHeight();
      /** Grid height */
      const gridHeight = gridInstance.height;
      /** initial page size */
      const pageSize = gridInstance.pageSettings.pageSize;
      /** new page size is obtained here */
      const pageResize = (gridHeight - pageSize * rowHeight) / rowHeight;
      gridInstance.pageSettings.pageSize = pageSize + Math.round(pageResize);
    }
  }
  //componentDidMount() {
   // (async _ => {
    //  const response = await API;
      //this.setState({
      //  userData: response.data,
      //});
    //})();
  //}
  
  
  
  
  render() {
  console.log(Data)
    // console.log(this.state.userData);

  console.log(API)
    return (
      
      <GridComponent
        dataSource={this.state.userData}
        filterSettings={this.FilterOptions}
        allowFiltering={true}
        height={273}
        allowPaging={true}
        pageSettings={this.pageOptions}
        allowSorting={true}
      >
        <ColumnsDirective>
          <ColumnDirective field="id" width="100" textAlign="Right" />
          <ColumnDirective field="name" width="100" />
          <ColumnDirective field="username" width="100" textAlign="Right" />
          <ColumnDirective
            field="email"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="website" width="100" />
         
        </ColumnsDirective>
        <Inject services={[Filter, Page, Sort]} />
      </GridComponent>
    );
  }
}
