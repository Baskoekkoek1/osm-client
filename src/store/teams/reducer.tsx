const initialState = {
  all_teams: [],
  all_matches: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "TEAMS_FETCHED":
      return { ...state, all_teams: action.payload };
    case "MATCH_PLAYED":
      return {
        ...state,
        all_matches: [...state.all_matches, action.payload],
      };
    case "RESET_MATCHES":
      return {
        ...state,
        all_matches: [],
      };
    case "RESULTS_FETCHED":
      return {
        ...state,
        all_matches: action.payload,
      };
    default:
      return state;
  }
}
