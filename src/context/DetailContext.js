import React from "react";

export const DetailContext = React.createContext();

function DataProvider({ children }) {


  const [data, setData] = React.useState({
   url:''
  });

  const updateData = (newData) => {
   
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <DetailContext.Provider value={{ data, updateData }}>
      {children}
    </DetailContext.Provider>
  );
}

export default DataProvider;
