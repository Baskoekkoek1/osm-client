export interface TeamsState {
  [index: number]: {
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
  };
}

export type TeamsAction = any;
