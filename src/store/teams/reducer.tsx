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
    case "HOMETEAM_WINS":
      const newRankingHomeWin = state.all_teams.map((team: Team) =>
        team.name === homeTeam.name
          ? {
              ...team,
              won: team.won + 1,
              points: team.points + 3,
              played: team.played + 1,
              goalsFor: team.goalsFor + homeGoals,
              goalsAgainst: team.goalsAgainst + awayGoals,
            }
          : team.name === awayTeam.name
          ? {
              ...team,
              lost: team.lost + 1,
              played: team.played + 1,
              goalsFor: team.goalsFor + awayGoals,
              goalsAgainst: team.goalsAgainst + homeGoals,
            }
          : team
      );
      return { ...state, all_teams: newRankingHomeWin };
    case "AWAYTEAM_WINS":
      const newRankingAwayWin = state.all_teams.map((team: Team) =>
        team.name === awayTeam.name
          ? {
              ...team,
              won: team.won + 1,
              points: team.points + 3,
              played: team.played + 1,
              goalsFor: team.goalsFor + awayGoals,
              goalsAgainst: team.goalsAgainst + homeGoals,
            }
          : team.name === homeTeam.name
          ? {
              ...team,
              lost: team.lost + 1,
              played: team.played + 1,
              goalsFor: team.goalsFor + homeGoals,
              goalsAgainst: team.goalsAgainst + awayGoals,
            }
          : team
      );
      return { ...state, all_teams: newRankingAwayWin };
    case "DRAW":
      const newRankingDraw = state.all_teams.map((team: Team) =>
        team.name === homeTeam.name
          ? {
              ...team,
              draw: team.draw + 1,
              points: team.points + 1,
              played: team.played + 1,
              goalsFor: team.goalsFor + homeGoals,
              goalsAgainst: team.goalsAgainst + awayGoals,
            }
          : team.name === awayTeam.name
          ? {
              ...team,
              draw: team.draw + 1,
              points: team.points + 1,
              played: team.played + 1,
              goalsFor: team.goalsFor + awayGoals,
              goalsAgainst: team.goalsAgainst + homeGoals,
            }
          : team
      );
      return { ...state, all_teams: newRankingDraw };
    default:
      // console.log("default");
      return state;
  }
}
