export const carromsMensFixtures = [
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
    participants: [
      {
        id: "1",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "Akhil V - Vishnu P",
        picture: null,
      },
      {
        id: "4",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "Sagar - Arun Raj",
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
    startTime: "--",
    state: null,
    participants: [
      {
        id: "8",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Draco",
        name: "Gopal - Abhijith",
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
    startTime: "--",
    state: null,
    participants: [
      {
        id: "10",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "Abin Varghese - Vipindas",
        picture: null,
      },
      {
        id: "11",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "Naseem Mohammed Ali - Dharun Krishna M A",
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
    startTime: "--",
    state: null,
    participants: [
      {
        id: "16",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "Tenwin - Shyam",
        picture: null,
      },
      {
        id: "14",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "Boban Paul - Arjun P V",
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
        name: "Akhil V - Vishnu P",
        picture: null,
      },
      {
        id: "2",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Draco",
        name: "Jibin - Seby",
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
    startTime: "29 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "3",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "Abilash K.J - A P Jagath",
        picture: null,
      },
      {
        id: "4",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Sagar - Arun Raj",
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
    startTime: "",
    state: null,
    participants: [
      {
        id: "5",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Phoenix",
        name: "Vipin Govind - Immanuel",
        picture: null,
      },
      {
        id: "6",
        resultText: null,
        isWinner: false,
        status: null,
        house: "Aquila",
        name: "Shreyas Ramadas P - Yadu Krishnan C",
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
    startTime: "29 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "7",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "Rahul Ramakrishnan P P - Alfin Antony",
        picture: null,
      },
      {
        id: "8",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Draco",
        name: "Gopal - Abhijith",
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
    startTime: "30 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "9",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "Ajayan C - Vyshnav M K",
        picture: null,
      },
      {
        id: "10",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Abin Varghese - Vipindas",
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
    startTime: "28 Jan 2025, 6:00 PM",
    state: "PLAYED",
    participants: [
      {
        id: "11",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Aquila",
        name: "Naseem Mohammed Ali - Dharun Krishna M A",
        picture: null,
      },
      {
        id: "12",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Draco",
        name: "Siddharth - Navneeth",
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
    startTime: "29 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "13",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Taurus",
        name: "Mohammed Roshan Sharafudeen - Arjun P P",
        picture: null,
      },
      {
        id: "14",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Aquila",
        name: "Boban Paul - Arjun P V",
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
    startTime: "29 Jan 2025",
    state: "PLAYED",
    participants: [
      {
        id: "15",
        resultText: "LOST",
        isWinner: false,
        status: "PLAYED",
        house: "Draco",
        name: "Madhav  - Vivin",
        picture: null,
      },
      {
        id: "16",
        resultText: "WON",
        isWinner: true,
        status: "PLAYED",
        house: "Phoenix",
        name: "Tenwin - Shyam",
        picture: null,
      },
    ],
  },
];
