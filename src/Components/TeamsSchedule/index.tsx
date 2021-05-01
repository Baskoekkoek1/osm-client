import React from "react";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTeams } from "../../store/teams/selectors";
import styles from "../../index.module.scss";
import { Button } from "react-bootstrap";
import { Team } from "../../store/teams/types";
import { simulateMatch } from "../../store/teams/actions";

export default function TeamsSchedule() {
  const allTeams: any = useSelector(selectAllTeams);
  const allTeamnames: any = allTeams.map((team: Team) => {
    return team.name;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(simulateMatch(allTeamnames[0], allTeamnames[2]));
  };

  return (
    <div className={styles.tableContainer}>
      <h1>Schedule</h1>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>{allTeamnames[0]}</td>
            <td>-</td>
            <td>{allTeamnames[1]}</td>
            <td>
              <Button onClick={handleClick}>Sim Match</Button>
            </td>
          </tr>
          <tr>
            <td>{allTeamnames[2]}</td>
            <td>-</td>
            <td>{allTeamnames[3]}</td>
          </tr>
          <tr>
            <td>{allTeamnames[2]}</td>
            <td>-</td>
            <td>{allTeamnames[0]}</td>
          </tr>
          <tr>
            <td>{allTeamnames[1]}</td>
            <td>-</td>
            <td>{allTeamnames[3]}</td>
          </tr>
          <tr>
            <td>{allTeamnames[3]}</td>
            <td>-</td>
            <td>{allTeamnames[0]}</td>
          </tr>
          <tr>
            <td>{allTeamnames[2]}</td>
            <td>-</td>
            <td>{allTeamnames[1]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
