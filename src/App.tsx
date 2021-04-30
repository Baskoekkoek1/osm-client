import React from "react";
import "./App.css";
import TeamsTable from "./Components/TeamsTable/TeamsTable";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <TeamsTable />
    </div>
  );
}

export default App;
