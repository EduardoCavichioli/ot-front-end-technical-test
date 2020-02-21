import React from 'react';
import './DataTable.css';
import { geneDataType } from '../../helpers/types';

function DataTable(props) {
  const { data } = props;

  const headers = (
    <tr>
      <th> </th>
      <th>Symbol</th>
      <th>Gene ID</th>
      <th>Gene Name</th>
      <th>Overall Association Score</th>
    </tr>
  );

  const rows = data.map((item) => (
    <tr key={item.id} >
      <td className="expand" >+</td>
      <td>{item.target.gene_info.symbol}</td>
      <td>{item.target.id}</td>
      <td>{item.target.gene_info.name}</td>
      <td>{item.association_score.overall}</td>
    </tr>
  ));

  return (
    <table>
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

DataTable.propTypes = {
  data: geneDataType
}

export default DataTable;
