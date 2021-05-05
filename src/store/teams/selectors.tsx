import { useSelector } from "react-redux";
import { State, Team } from "./types";

const compare = (a: Team, b: Team) => {
  if (a.points < b.points) {
    return 1;
  } else if (a.points > b.points) {
    return -1;
  } else if (a.points === b.points) {
    if (a.goalsFor - a.goalsAgainst < b.goalsFor - b.goalsAgainst) {
      return 1;
    } else if (a.goalsFor - a.goalsAgainst === b.goalsFor - b.goalsAgainst) {
      if (a.goalsFor < b.goalsFor) {
        return 1;
      } else if (a.goalsFor > b.goalsFor) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return -1;
    }
  } else {
    return 0;
  }
};

export const selectAllTeams = (state: State) => state.teams.all_teams;

export const selectAllMatches = (state: State) => state.teams.all_matches;

export const selectSortedTeams = (state: State) => {
  //@ts-ignore
  return [...state.teams.all_teams].sort(compare);
};

export const selectAllTeamNames = (state: any) =>
  [...state.teams.all_teams].map((team) => team.name);
