
import HomePage from './pages/HomePage';
import React from "react";
import DataProvider from './context/DetailContext';

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <HomePage />
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
