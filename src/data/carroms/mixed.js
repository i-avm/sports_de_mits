export const carromsMixedFixtures = [
  {
    id: "F1",
    name: "Final - Match",
    nextMatchId: null,
    nextLooserMatchId: null,
    tournamentRoundText: "4",
    startTime: "13 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "5",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Sagar - Dilsana",
        picture: null,
      },
      {
        id: "14",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Aquila",
        name: "Boban Paul - Maria Francis",
        picture: null,
      },
    ],
  },
  {
    id: "LF1",
    name: "3rd Place match",
    nextMatchId: null,
    nextLooserMatchId: null,
    tournamentRoundText: "4",
    startTime: "13 Feb 2025",
    state: null,
    participants: [
      {
        id: "4",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "Immanuel - Trisha",
        picture: null,
      },
      {
        id: "11",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "Vishnu P - Saranya T P",
        picture: null,
      },
    ],
  },
  {
    id: "SF_M1",
    name: "Semi Final - Match 1",
    nextMatchId: "F1",
    nextLooserMatchId: "LF1",
    tournamentRoundText: "3",
    startTime: "12 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "5",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Sagar - Dilsana",
        picture: null,
      },
      {
        id: "4",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Phoenix",
        name: "Immanuel - Trisha",
        picture: null,
      },
    ],
  },
  {
    id: "SF_M2",
    name: "Semi Final - Match 2",
    nextMatchId: "F1",
    nextLooserMatchId: "LF1",
    tournamentRoundText: "3",
    startTime: "12 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "11",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Aquila",
        name: "Vishnu P - Saranya T P",
        picture: null,
      },
      {
        id: "14",
        resultText: "WON",
        isWinner: false,
        status: "PLAYED",
        house: "Aquila",
        name: "Boban Paul - Maria Francis",
        picture: null,
      },
    ],
  },
  {
    id: "R2_M1",
    name: "Round 2 - Match 1",
    nextMatchId: "SF_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "12 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "1",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Aquila",
        name: "Akhil V - Vinitha Nair",
        picture: null,
      },
      {
        id: "4",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Immanuel - Trisha",
        picture: null,
      },
    ],
  },
  {
    id: "R2_M2",
    name: "Round 2 - Match 2",
    nextMatchId: "SF_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "6 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "5",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Sagar - Dilsana",
        picture: null,
      },
      {
        id: "8",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Draco",
        name: "Potturi Banu Prasad - Priyadharshini",
        picture: null,
      },
    ],
  },
  {
    id: "R2_M3",
    name: "Round 2 - Match 3",
    nextMatchId: "SF_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "6 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "11",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Aquila",
        name: "Vishnu P - Saranya T P",
        picture: null,
      },
      {
        id: "9",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "Rahul Ramakrishnan P P - Sreelekshmi S",
        picture: null,
      },
    ],
  },
  {
    id: "R2_M4",
    name: "Round 2 - Match 4",
    nextMatchId: "SF_M2",
    nextLooserMatchId: null,
    tournamentRoundText: "2",
    startTime: "6 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "14",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Aquila",
        name: "Boban Paul - Maria Francis",
        picture: null,
      },
      {
        id: "16",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Phoenix",
        name: "Vipin Govind - Swetha",
        picture: null,
      },
    ],
  },
  {
    id: "R1_M1",
    name: "Round 1 - Match 1",
    nextMatchId: "R2_M1",
    nextLooserMatchId: null,
    tournamentRoundText: "1",
    startTime: "29 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "1",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Aquila",
        name: "Akhil V - Vinitha Nair ",
        picture: null,
      },
      {
        id: "2",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Draco",
        name: "Abhijith - Mirudhulaa",
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
    startTime: "4 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "3",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "Mohammed Roshan Sharafudeen - Aneeta Mary",
        picture: null,
      },
      {
        id: "4",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Immanuel - Trisha",
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
    startTime: "30 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "5",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Sagar - Dilsana",
        picture: null,
      },
      {
        id: "6",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Aquila",
        name: "Arjun P V - Anju Ani Justus",
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
    startTime: "30 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "7",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "Abilash K.J - Felin Elizabeth Binoy",
        picture: null,
      },
      {
        id: "8",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Draco",
        name: "Potturi Banu Prasad - Priyadharshini",
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
    startTime: "4 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "9",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Taurus",
        name: "Rahul Ramakrishnan P P - Sreelekshmi S",
        picture: null,
      },
      {
        id: "10",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Phoenix",
        name: "Arun Raj - Anju P",
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
    startTime: "4 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "11",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Aquila",
        name: "Vishnu P - Saranya T P",
        picture: null,
      },
      {
        id: "12",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Draco",
        name: "Nikhil - Aishwarya Jathish",
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
    startTime: "30 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "13",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "A P Jagath - Anagha S",
        picture: null,
      },
      {
        id: "14",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Aquila",
        name: "Boban Paul - Maria Francis",
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
    startTime: "4 Feb 2025",
    state: "PLAYED",
    participants: [
      {
        id: "15",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Draco",
        name: "Ajay - Arathy A S",
        picture: null,
      },
      {
        id: "16",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Vipin Govind - Swetha",
        picture: null,
      },
    ],
  },
];
