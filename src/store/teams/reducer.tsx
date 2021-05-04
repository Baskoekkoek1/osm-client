import { Team } from "./types";

const initialState = {
  all_teams: [],
  all_matches: [],
};

export default function reducer(state = initialState, action: any) {
  const homeTeam = action.payload?.homeTeam;
  const awayTeam = action.payload?.awayTeam;
  const homeGoals = action.payload?.homeScore;
  const awayGoals = action.payload?.awayScore;
  // console.log("reducer", action.payload);
  switch (action.type) {
    case "TEAMS_FETCHED":
      return { ...state, all_teams: action.payload };
    case "MATCH_PLAYED":
      // console.log("reduces", action.payload);
      return {
        ...state,
        all_matches: [...state.all_matches, action.payload],
      };
    default:
      // console.log("default");
      return state;
  }
}
