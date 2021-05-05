// export interface TeamsState {
//   [index: number]: {
//     name: string;
//     offense: number;
//     defense: number;
//     played: number;
//     won: number;
//     lost: number;
//     draw: number;
//     points: number;
//     goalsFor: number;
//     goalsAgainst: number;
//   };
// }

import { NumberLiteralType } from "typescript";

// export type TeamsAction = any;

export interface State {
  teams: {
    all_teams: [
      {
        id: number;
        name: string;
        offense: number;
        defense: number;
        played: number;
        won: number;
        lost: number;
        draw: number;
        points: number;
        opponents: Team[];
        goalsFor: number;
        goalsAgainst: number;
      }
    ];
    all_matches: {
      homeTeam: Team;
      awayTeam: Team;
      homeScore: number;
      awayScore: number;
    };
  };
}

export interface Team {
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

export interface Match {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
}
