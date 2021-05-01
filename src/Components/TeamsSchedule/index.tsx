import React from "react";
import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux";
import { selectAllTeams } from "../../store/teams/selectors";
import styles from "../../index.module.scss";

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

  //   interface Match {
  //     teamA: string;
  //     teamB: string;
  //   }

  const allTeams: any = useSelector(selectAllTeams);
  const allTeamnames: any = allTeams.map((team: Team) => {
    return team.name;
  });

  //   console.log("allTeams", allTeams);

  //   const makeSchedule = () => {
  //     allTeams.forEach(
  //       (team: Team) =>
  //         (team.opponents = allTeams.filter(
  //           (opponent: Team) => opponent !== team
  //         ))
  //     );

  //     const matches: Match[] = [];

  //     while (allTeams.some((team: Team) => team.opponents.length)) {
  //       allTeams.forEach((team: Team) => {
  //         const match = { teamA: "", teamB: "" };
  //         const opponents = team.opponents;
  //         opponents.map((opponent: any) => {
  //           match.teamA = team.name;
  //           match.teamB = opponent.name;
  //           team.opponents.splice(team.opponents.indexOf(opponent));
  //           opponent.opponents.splice(opponent.opponents.indexOf(opponent));
  //           matches.push(match);
  //         });
  //       });
  //     }

  //     while (allTeams.some((team: Team) => team.opponents.length)) {
  //       const playing: any = [];
  //       for (const team of allTeams) {
  //         console.log("playing", playing);
  //         if (playing.includes(team)) continue;
  //         const opponent = team.opponents.find(
  //           (opponent: Team) => !playing.includes(opponent)
  //         );
  //         if (!opponent) continue;
  //         team.opponents.splice(team.opponents.indexOf(opponent), 1);
  //         opponent.opponents.splice(opponent.opponents.indexOf(opponent), 1);
  //         playing.push(team, opponent);
  //       }
  //       if (playing.length) matches.push(playing.map((team: Team) => team.name));
  //     }
  //     console.log("matches", matches);
  //   };

  //   makeSchedule();

  return (
    <div className={styles.tableContainer}>
      <h1>Schedule</h1>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>{allTeamnames[0]}</td>
            <td>-</td>
            <td>{allTeamnames[1]}</td>
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
