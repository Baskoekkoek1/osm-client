import React, { useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import { selectAllMatches, selectAllTeams } from "../../store/teams/selectors";
import styles from "../../index.module.scss";
import { Button } from "react-bootstrap";
import { Team } from "../../store/teams/types";
import { fetchResults, simulateMatch } from "../../store/teams/actions";

export default function TeamsSchedule() {
  const dispatch = useDispatch();
  const allTeams: any = useSelector(selectAllTeams);
  const unsortAllTeams: any = allTeams.sort((a: Team, b: Team) => {
    return a.id - b.id;
  });

  const allTeamnames: any = unsortAllTeams.map((team: Team) => {
    return team.name;
  });
  const allMatches: any = useSelector(selectAllMatches);

  const match1 = allMatches.find(
    (match: any) =>
      match.homeTeam.name === allTeamnames[0] &&
      match.awayTeam.name === allTeamnames[1]
  );
  const match2 = allMatches.find(
    (match: any) =>
      match.homeTeam.name === allTeamnames[2] &&
      match.awayTeam.name === allTeamnames[3]
  );
  const match3 = allMatches.find(
    (match: any) =>
      match.homeTeam.name === allTeamnames[2] &&
      match.awayTeam.name === allTeamnames[0]
  );
  const match4 = allMatches.find(
    (match: any) =>
      match.homeTeam.name === allTeamnames[1] &&
      match.awayTeam.name === allTeamnames[3]
  );
  const match5 = allMatches.find(
    (match: any) =>
      match.homeTeam.name === allTeamnames[3] &&
      match.awayTeam.name === allTeamnames[0]
  );
  const match6 = allMatches.find(
    (match: any) =>
      match.homeTeam.name === allTeamnames[2] &&
      match.awayTeam.name === allTeamnames[1]
  );

  const handleClick = (teamA: string, teamB: string) => {
    dispatch(simulateMatch(teamA, teamB));
  };

  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  return (
    <div className={styles.tableContainer}>
      <h2>
        <strong>Schedule</strong>
      </h2>

      <Table striped bordered>
        <tbody>
          <tr>
            <td>{allTeamnames[0]}</td>
            <td>
              {match1?.homeScore} - {match1?.awayScore}
            </td>
            <td>{allTeamnames[1]}</td>
            {match1 ? (
              <td></td>
            ) : (
              <td>
                <Button
                  onClick={() => {
                    handleClick(allTeamnames[0], allTeamnames[1]);
                  }}
                >
                  Sim Match
                </Button>
              </td>
            )}
          </tr>
          <tr>
            <td>{allTeamnames[2]}</td>
            <td>
              {match2?.homeScore} - {match2?.awayScore}
            </td>
            <td>{allTeamnames[3]}</td>
            {match2 ? (
              <td></td>
            ) : (
              <td>
                <Button
                  onClick={() => {
                    handleClick(allTeamnames[2], allTeamnames[3]);
                  }}
                >
                  Sim Match
                </Button>
              </td>
            )}
          </tr>
          <tr>
            <td>{allTeamnames[2]}</td>
            <td>
              {match3?.homeScore} - {match3?.awayScore}
            </td>
            <td>{allTeamnames[0]}</td>
            {match3 ? (
              <td></td>
            ) : (
              <td>
                <Button
                  onClick={() => {
                    handleClick(allTeamnames[2], allTeamnames[0]);
                  }}
                >
                  Sim Match
                </Button>
              </td>
            )}
          </tr>
          <tr>
            <td>{allTeamnames[1]}</td>
            <td>
              {match4?.homeScore} - {match4?.awayScore}
            </td>
            <td>{allTeamnames[3]}</td>
            {match4 ? (
              <td></td>
            ) : (
              <td>
                <Button
                  onClick={() => {
                    handleClick(allTeamnames[1], allTeamnames[3]);
                  }}
                >
                  Sim Match
                </Button>
              </td>
            )}
          </tr>
          <tr>
            <td>{allTeamnames[3]}</td>
            <td>
              {match5?.homeScore} - {match5?.awayScore}
            </td>
            <td>{allTeamnames[0]}</td>
            {match5 ? (
              <td></td>
            ) : (
              <td>
                <Button
                  onClick={() => {
                    handleClick(allTeamnames[3], allTeamnames[0]);
                  }}
                >
                  Sim Match
                </Button>
              </td>
            )}
          </tr>
          <tr>
            <td>{allTeamnames[2]}</td>
            <td>
              {match6?.homeScore} - {match6?.awayScore}
            </td>
            <td>{allTeamnames[1]}</td>
            {match6 ? (
              <td></td>
            ) : (
              <td>
                <Button
                  onClick={() => {
                    handleClick(allTeamnames[2], allTeamnames[1]);
                  }}
                >
                  Play Match
                </Button>
              </td>
            )}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
