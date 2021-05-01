import { State } from "./types";

export const selectAllTeams = (state: State) => state.teams.all_teams;
