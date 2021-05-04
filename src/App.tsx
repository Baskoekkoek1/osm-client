import React from "react";
import "./App.css";
import TeamsTable from "./Components/TeamsTable";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamsSchedule from "./Components/TeamsSchedule";
import ResetButton from "./Components/ResetButton";

function App() {
  return (
    <div className="App">
      <Header />
      <TeamsTable />
      <TeamsSchedule />
      <ResetButton />
    </div>
  );
}

export default App;
