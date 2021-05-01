import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../store/teams/actions";
import { selectAllTeams } from "../../store/teams/selectors";
import styles from "../../index.module.scss";

export default function TeamsTable() {
  const dispatch = useDispatch();

  const allTeams = useSelector(selectAllTeams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <div id={styles.tableContainer}>
      <Table striped bordered>
        <thead>
          <th>Name</th>
          <th>P</th>
          <th>W</th>
          <th>L</th>
          <th>D</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
        </thead>
        <tbody>
          {/* @ts-ignore */}
          {allTeams.map((team) => {
            return (
              <tr>
                <td>{team.name}</td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td>{team.draw}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>###</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
