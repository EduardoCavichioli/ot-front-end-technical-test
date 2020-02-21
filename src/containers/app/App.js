import React, { useState, useEffect } from 'react';
import './App.css';

import { getJsonDataFromApi } from '../../services/getData';
const MY_DATA_URL = 'https://demo6922545.mockable.io/';

function App() {
  const [myData, setMyData] = useState({});

  useEffect(() => {
    getJsonDataFromApi(MY_DATA_URL)
      .then((response) => {
        if (response) {
          console.log(response);
          setMyData(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Feel free to edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
