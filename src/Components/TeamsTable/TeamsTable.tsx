import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTeams } from "../../store/teams/actions";

export default function TeamsTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <div>
      <h1>table</h1>
    </div>
  );
}
