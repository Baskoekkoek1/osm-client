import axios from "axios";
import { apiUrl } from "../../config/constants";

export const teamsFetched = (data: object[]) => {
  console.log("action");
  return {
    type: "TEAMS_FETCHED",
    payload: data,
  };
};

export const fetchTeams = () => {
  return async function thunk(dispatch: Function, getState: Function) {
    const response = await axios.get(`${apiUrl}/teams/all`);
    console.log("repsonse", response.data);
    dispatch(teamsFetched(response.data));
  };
};
