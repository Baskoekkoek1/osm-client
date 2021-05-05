import React from "react";
import "./App.css";
import TeamsTable from "./Components/TeamsTable";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamsSchedule from "./Components/TeamsSchedule";
import ResetButton from "./Components/ResetButton";
import { useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import Loading from "./Components/Loading";

function App() {
  const isLoading = useSelector(selectAppLoading);

  return (
    <div className="App">
      <Header />
      <TeamsTable />
      {isLoading ? <Loading /> : null}
      <TeamsSchedule />
      <ResetButton />
    </div>
  );
}

export default App;
