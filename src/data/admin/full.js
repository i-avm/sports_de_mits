export const fullFixture = [
  // Final Match (Round 4)
  {
    id: "F1",
    name: "Final - Match",
    nextMatchId: null,
    nextLooserMatchId: null,
    tournamentRoundText: "4",
    startTime: "7",
    state: "Scheduled",
    participants: [
      {
        id: "P1",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Paris Saint-Germain",
        name: "Kylian Mbappé",
        picture: null,
      },
      {
        id: "P8",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "FC Barcelona",
        name: "Lionel Messi",
        picture: null,
      },
    ],
  },

  // Semi Final 1 (Round 3)
  {
    id: "SF_M1",
    name: "Semi Final - Match 1",
    nextMatchId: "F1",
    nextLooserMatchId: null,
    tournamentRoundText: "3",
    startTime: "5",
    state: "Scheduled",
    participants: [
      {
        id: "P1",
        resultText: "WON",
        isWinner: true,
        status: null,
        house: "Paris Saint-Germain",
        name: "Kylian Mbappé",
        picture: null,
      },
      {
        id: "P3",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Bayern Munich",
        name: "Robert Lewandowski",
        picture: null,
      },
    ],
  },

  // Semi Final 2 (Round 3)
  {
    id: "SF_M2",
    name: "Semi Final - Match 2",
    nextMatchId: "F1",
    nextLooserMatchId: null,
    tournamentRoundText: "3",
    startTime: "6",
    state: "Scheduled",
    participants: [
      {
        id: "P11",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Manchester City",
        name: "Kevin De Bruyne",
        picture: null,
      },
      {
        id: "P8",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "FC Barcelona",
        name: "Lionel Messi",
        picture: null,
      },
    ],
  },

  // Round 2 - Match 1 (Round 2)
  {
    id: "R2_M1",
    name: "Round 2 - Match 1",
    nextMatchId: "SF_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "1",
    state: "Scheduled",
    participants: [
      {
        id: "P1",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Paris Saint-Germain",
        name: "Kylian Mbappé",
        picture: null,
      },
      {
        id: "P2",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Juventus",
        name: "Cristiano Ronaldo",
        picture: null,
      },
    ],
  },

  // Round 2 - Match 2 (Round 2)
  {
    id: "R2_M2",
    name: "Round 2 - Match 2",
    nextMatchId: "SF_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "2",
    state: "Scheduled",
    participants: [
      {
        id: "P3",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Bayern Munich",
        name: "Robert Lewandowski",
        picture: null,
      },
      {
        id: "P4",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Man. City",
        name: "E. Haaland",
        picture: null,
      },
    ],
  },

  // Round 2 - Match 3 (Round 2)
  {
    id: "R2_M3",
    name: "Round 2 - Match 3",
    nextMatchId: "SF_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "3",
    state: "Scheduled",
    participants: [
      {
        id: "P9",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Real Madrid",
        name: "Karim Benzema",
        picture: null,
      },
      {
        id: "P8",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "FC Barcelona",
        name: "Lionel Messi",
        picture: null,
      },
    ],
  },

  // Round 2 - Match 4 (Round 2)
  {
    id: "R2_M4",
    name: "Round 2 - Match 4",
    nextMatchId: "SF_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "4",
    state: "Scheduled",
    participants: [
      {
        id: "P11",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Manchester City",
        name: "Kevin De Bruyne",
        picture: null,
      },
      {
        id: "P12",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Manchester United",
        name: "Bruno Fernandes",
        picture: null,
      },
    ],
  },
];
