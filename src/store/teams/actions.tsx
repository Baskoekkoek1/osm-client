import { Match } from "@testing-library/dom";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";
import { Team } from "./types";

export const teamsFetched = (data: Team[]) => {
  return {
    type: "TEAMS_FETCHED",
    payload: data,
  };
};

export const resultsFetched = (data: Match[]) => {
  return {
    type: "RESULTS_FETCHED",
    payload: data,
  };
};

export const fetchTeams = () => {
  return async function thunk(dispatch: Function, getState: Function) {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/teams/all`);
    dispatch(teamsFetched(response.data));
    dispatch(appDoneLoading());
  };
};

export const fetchResults = () => {
  return async function thunk(dispatch: Function, getState: Function) {
    const response = await axios.get(`${apiUrl}/teams/results`);
    dispatch(resultsFetched(response.data));
  };
};

export const matchPlayed = (match: object) => {
  return {
    type: "MATCH_PLAYED",
    payload: match,
  };
};

export const resetMatches = () => {
  return {
    type: "RESET_MATCHES",
    payload: null,
  };
};

export const reset = () => {
  return async function thunk(dispatch: Function, getState: Function) {
    const response = await axios.put(`${apiUrl}/teams/reset`);
    dispatch(teamsFetched(response.data));
    dispatch(resetMatches());
  };
};

export const simulateMatch = (teamA: string, teamB: string) => {
  return async function thunk(dispatch: Function, getState: Function) {
    const state: any = getState();
    const allTeams: Team[] = state.teams.all_teams;
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
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
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

    const matchResult = {
      homeTeam: team1,
      awayTeam: team2,
      homeScore: resultTeam1,
      awayScore: resultTeam2,
    };

    try {
      const response = await axios.put(`${apiUrl}/teams/match`, {
        matchResult,
      });
      dispatch(teamsFetched(response.data.allTeams));
      dispatch(matchPlayed(response.data.thisMatch));
    } catch {}
  };
};
