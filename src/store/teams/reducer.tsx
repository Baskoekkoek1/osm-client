const initialState = {
  all_teams: [],
};

export default function reducer(state = initialState, action: any) {
  console.log("reducer");
  switch (action.type) {
    case "TEAMS_FETCHED":
      return { all_teams: action.payload };
    default:
      console.log("default");
      return state;
  }
}
