export const defaultFixture = [
  {
    id: "F1",
    name: "Final - Match",
    nextMatchId: null,
    nextLooserMatchId: null,
    tournamentRoundText: "4",
    startTime: "--",
    state: null,
    participants: [],
  },
  {
    id: "SF_M1",
    name: "Semi Final - Match 1",
    nextMatchId: "F1",
    nextLooserMatchId: null,
    tournamentRoundText: "3",
    startTime: "--",
    state: null,
    participants: [],
  },
  {
    id: "SF_M2",
    name: "Semi Final - Match 2",
    nextMatchId: "F1",
    nextLooserMatchId: null,
    tournamentRoundText: "3",
    startTime: "--",
    state: null,
    participants: [],
  },
  {
    id: "R2_M1",
    name: "Round 2 - Match 1",
    nextMatchId: "SF_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "--",
    state: null,
    participants: [],
  },
  {
    id: "R2_M2",
    name: "Round 2 - Match 2",
    nextMatchId: "SF_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "--",
    state: null,
    participants: [],
  },
  {
    id: "R2_M3",
    name: "Round 2 - Match 3",
    nextMatchId: "SF_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "--",
    state: null,
    participants: [],
  },
  {
    id: "R2_M4",
    name: "Round 2 - Match 4",
    nextMatchId: "SF_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "--",
    state: null,
    participants: [],
  },
  {
    id: "R1_M1",
    name: "Round 1 - Match 1",
    nextMatchId: "R2_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "1",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "AQUILA_1",
        picture: null,
      },
      {
        id: "2",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Draco",
        name: "DRACO_1",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M2",
    name: "Round 1 - Match 2",
    nextMatchId: "R2_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "3",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Taurus",
        name: "TAURUS_1",
        picture: null,
      },
      {
        id: "4",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "PHOENIX_1",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M3",
    name: "Round 1 - Match 3",
    nextMatchId: "R2_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "5",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "PHOENIX_3",
        picture: null,
      },
      {
        id: "6",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "AQUILA_3",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M4",
    name: "Round 1 - Match 4",
    nextMatchId: "R2_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "7",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Taurus",
        name: "TAURUS_3",
        picture: null,
      },
      {
        id: "8",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Draco",
        name: "DRACO_3",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M5",
    name: "Round 1 - Match 5",
    nextMatchId: "R2_M3",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "9",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Taurus",
        name: "TAURUS_2",
        picture: null,
      },
      {
        id: "10",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "PHOENIX_2",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M6",
    name: "Round 1 - Match 6",
    nextMatchId: "R2_M3",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "11",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "AQUILA_2",
        picture: null,
      },
      {
        id: "12",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Draco",
        name: "DRACO_2",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M7",
    name: "Round 1 - Match 7",
    nextMatchId: "R2_M4",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "13",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Taurus",
        name: "TAURUS_4",
        picture: null,
      },
      {
        id: "14",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "AQUILA_4",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M8",
    name: "Round 1 - Match 8",
    nextMatchId: "R2_M4",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "2024-01-27",
    state: null,
    participants: [
      {
        id: "15",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Draco",
        name: "DRACO_4",
        picture: null,
      },
      {
        id: "16",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "PHOENIX_4",
        picture: null,
      },
    ],
  },
];
