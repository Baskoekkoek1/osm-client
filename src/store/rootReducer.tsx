import { combineReducers } from "redux";
import teams from "./teams/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  teams,
  appState,
});
