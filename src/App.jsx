import React, { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import { APIKey, url } from "./api";
import axios from "axios";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${url}${APIKey}`);
      setFetchedData(res.data);
    };
    fetchData();
  }, []);
  console.log(setFetchedData);
  return <CardComponent APIdata={fetchedData} />;
}

export default App;
