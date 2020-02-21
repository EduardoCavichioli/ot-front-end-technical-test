import React, { useState, useEffect } from 'react';
import './App.css';

import { getJsonDataFromApi } from '../../services/getData';
import { DataTable } from '../../components';

const MY_DATA_URL = 'https://demo6922545.mockable.io/';

function App() {
  const [geneData, setGeneData] = useState({});

  useEffect(() => {
    getJsonDataFromApi(MY_DATA_URL)
      .then((response) => {
        if (response) {
          setGeneData(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const tableContent = geneData.data
    ? <DataTable data={geneData.data} />
    : <div>Loading</div>;

  return (
    <div className="App">
      <h3>Genes associated with lung carcinoma</h3>
      {tableContent}
    </div>
  );
}

export default App;
