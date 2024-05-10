const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Chelsea",
  sport: "Football",
  year: 2024,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Mauricio Pochettino",
    matches: 38,
  },
  players: [
    {
      name: "Robert Sanchez",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: "Robb",
    },
    {
      name: "Axel Disasi",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Marc Cucurella",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: "Marc",
    },
    {
      name: "Levi Colwill",
      position: "defender",
      number: 26,
      isCaptain: false,
      nickname: "Lecol",
    },
    {
      name: "Beniot Badiashile",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Beniot",
    },
    {
      name: "Thiago Silva",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Raheem Sterling",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Raz",
    },
    {
      name: "Enzo Fernandez",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nicolas Jackson",
      position: "forward",
      number: 15,
      isCaptain: false,
      nickname: "Nico",
    },
    {
      name: "Mykhailo Mudryk",
      position: "forward",
      number: 10,
      isCaptain: false,
      nickname: "Misha",
    },
    {
      name: "Noni Madueke",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "Nonzinoo",
    },
    {
      name: "Romeo Lavia",
      position: "midfielder",
      number: 45,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Malo Gusto",
      position: "defender",
      number: 27,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Conor Gallagher",
      position: "midfielder",
      number: 23,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Reece James",
      position: "defender",
      number: 24,
      isCaptain: true,
      nickname: "Reece",
    },
    {
      name: "Lesley Ugochukwu",
      position: "midfielder",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Carney Chukwuemeka",
      position: "midfielder",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Christopher Nkunku",
      position: "forward",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Djordje Petrovic",
      position: "goalkeeper",
      number: 28,
      isCaptain: false,
      nickname: "Brick Wall",
    },
    {
      name: "Cole Palmer",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: "cold",
    },
    {
      name: "Ben Chilwell",
      position: "defender",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Moises Caicedo",
      position: "midfielder",
      number: 25,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

default: setPlayerCards();

  }
});
