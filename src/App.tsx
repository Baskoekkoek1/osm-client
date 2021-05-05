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
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <TeamsTable />
          <TeamsSchedule />
          <ResetButton />
        </div>
      )}
    </div>
  );
}

export default App;
