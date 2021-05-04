import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../store/teams/actions";
import { selectAllTeams, selectSortedTeams } from "../../store/teams/selectors";
import styles from "../../index.module.scss";
import { Team } from "../../store/teams/types";

export default function TeamsTable() {
  const dispatch = useDispatch();

  const allTeams = useSelector(selectAllTeams);
  // const sortedTeams = useSelector(selectSortedTeams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <div className={styles.tableContainer}>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Pl</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>
              <strong>Pts</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* @ts-ignore */}
          {allTeams.map((team, i) => {
            return (
              <tr key={team.id}>
                <td>{i + 1}</td>
                <td>{team.name}</td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td>{team.draw}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalsFor - team.goalsAgainst}</td>
                <td>{team.points}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
