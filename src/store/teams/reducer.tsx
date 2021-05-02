const initialState = {
  all_teams: [],
  all_matches: [],
};

export default function reducer(state = initialState, action: any) {
  // console.log("reducer", action.payload);
  switch (action.type) {
    case "TEAMS_FETCHED":
      return { ...state, all_teams: action.payload };
    case "MATCH_PLAYED":
      console.log("reduces", action.payload);
      return {
        ...state,
        all_matches: [...state.all_matches, action.payload],
      };
    default:
      // console.log("default");
      return state;
  }
}
