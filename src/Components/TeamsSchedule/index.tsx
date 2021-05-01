import React from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import { selectAllTeams } from "../../store/teams/selectors";
import styles from "../../index.module.scss";
import { Button } from "react-bootstrap";

export default function TeamsSchedule() {
  interface Team {
    id: number;
    name: string;
    offense: number;
    defense: number;
    played: number;
    won: number;
    lost: number;
    draw: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    opponents: object[];
  }

  const allTeams: any = useSelector(selectAllTeams);
  const allTeamnames: any = allTeams.map((team: Team) => {
    return team.name;
  });

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
              <Button>Sim Match</Button>
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
