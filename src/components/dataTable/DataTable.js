import React, { useState, useEffect } from 'react';
import './DataTable.css';
import { geneDataType } from '../../helpers/types';

function DataTable(props) {
  const { data } = props;
  const [rows, setRows] = useState(<></>);
  const [expandedRows, setExpandedRows] = useState([]);
  
  const headers = (
    <tr>
      <th> </th>
      <th>Symbol</th>
      <th>Gene ID</th>
      <th>Gene Name</th>
      <th>Overall Association Score</th>
    </tr>
  );

  const handleExpandRow = (rowId) => {
    const isRowExpanded = expandedRows.includes(rowId);

    const newExpandedRows = isRowExpanded
      ? expandedRows.filter((id) => id !== rowId)
      : expandedRows.concat(rowId);

    setExpandedRows(newExpandedRows);
  };

  const renderRow = (item) => {
    const isRowExpanded = expandedRows.includes(item.id);
    const expandedLabel = isRowExpanded ? '-' : '+';

    const itemRow = [
      <tr key={item.id} >
        <td className="expand" onClick={() => handleExpandRow(item.id)}>{expandedLabel}</td>
        <td>{item.target.gene_info.symbol}</td>
        <td>{item.target.id}</td>
        <td>{item.target.gene_info.name}</td>
        <td>{item.association_score.overall}</td>
      </tr>
    ];

    if (isRowExpanded) {
      itemRow.push(
        <tr key={`${item.id}-expanded`} >
          <td colSpan="5" ><div>teste</div></td>
        </tr>
      );
    }
    
    return itemRow;
  };

  useEffect(() => {
    const sortedData = [...data];
    sortedData.sort((a, b) => b.association_score.overall - a.association_score.overall);
    setRows(sortedData.map((item) => renderRow(item)));
  }, [data, expandedRows]);

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
