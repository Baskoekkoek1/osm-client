import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../store/teams/actions";
import { selectSortedTeams } from "../../store/teams/selectors";
import styles from "../../index.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function TeamsTable() {
  const dispatch = useDispatch();
  const sortedTeams = useSelector(selectSortedTeams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  const renderTooltip = (offense: number, defense: number) => (
    <Tooltip id="button-tooltip">
      Offense: {offense} <br />
      Defense: {defense}
    </Tooltip>
  );
  return (
    <div className={styles.tableContainer}>
      <h2>
        <strong>Group A</strong>
      </h2>
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
          {sortedTeams.map((team, i) => {
            return (
              <tr key={team.id}>
                <td>{i + 1}</td>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip(team.offense, team.defense)}
                >
                  <td>{team.name}</td>
                </OverlayTrigger>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td>{team.draw}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalsFor - team.goalsAgainst}</td>
                <td>
                  <strong>{team.points}</strong>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
