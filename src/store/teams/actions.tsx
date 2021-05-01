import axios from "axios";
import { useSelector } from "react-redux";
import { apiUrl } from "../../config/constants";
import { selectAllTeams } from "./selectors";
import { Team, State } from "./types";

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

export const simulateMatch = (teamA: string, teamB: string) => {
  return async function thunk(dispatch: Function, getState: Function) {
    const state: any = getState();
    const allTeams: Team[] = state.teams.all_teams;
    // console.log("allTeams", allTeams);
    const team1 = allTeams.find((team: Team) => teamA === team.name);
    const team2 = allTeams.find((team: Team) => teamB === team.name);

    const scoreCard = [
      -4,
      -3,
      -2,
      -1,
      -1,
      -1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      4,
      5,
    ];

    const scoreCardOffsetTeam1 = scoreCard.map(
      //@ts-ignore
      (score) => score + (team1.offense - team2.defense)
    );
    const scoreCardOffsetTeam2 = scoreCard.map(
      //@ts-ignore
      (score) => score + (team2.offense - team1.defense)
    );

    const indexTeam1 = Math.floor(Math.random() * scoreCardOffsetTeam1.length);
    const indexTeam2 = Math.floor(Math.random() * scoreCardOffsetTeam2.length);

    const resultTeam1 =
      scoreCardOffsetTeam1[indexTeam1] > 0
        ? scoreCardOffsetTeam1[indexTeam1]
        : 0;
    const resultTeam2 =
      scoreCardOffsetTeam2[indexTeam2] > 0
        ? scoreCardOffsetTeam2[indexTeam2]
        : 0;

    console.log(`The endscore: ${resultTeam1} - ${resultTeam2}`);
  };
};
