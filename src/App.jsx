import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import DisplaySearch from "./components/DisplaySearch";
import DashBoard from "./components/DashBoard";

const App = () => {
  const [data, setData] = useState([]);

  const handleSearch = (query) => {
    console.log(query.items)
    setData(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {
        data.items ? <DisplaySearch data={data}/> : <DashBoard/>
      }

      {/* {<DisplaySearch data={data} />} */}
    </div>
  );
};

export default App;
