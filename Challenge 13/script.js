'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// Exercice 1

// 1.
const players1 = game.players[0];
const players2 = game.players[1];

// 2.
const gk = players1[0];
const fieldPlayers = players1.slice(1);

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = players1.slice();
players1Final.push("Thiago", "Coutinho", "Perisic");

// 5.
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

// 6. 
//Pas vraiment sûr d'avoir compris la consigne... Ici, je prends un joueur au hasard et j'indique le nombre de buts qu'il a marqué

let randomPlayer = game.scored[Math.floor(Math.random() * game.scored.length)];

function printGoals() {
    if (randomPlayer === "Lewandowski") {
        return `${randomPlayer} a marqué 2 buts.`
    }
    else {
        return `${randomPlayer} a marqué 1 but.`
    }
}

printGoals();

// 7.
function result() {
    if (team1 < team2) {
        return `L'équipe ${game.team1} a le plus de chance de gagner.`;
    }
    else if (team2 < team1){
        return `L'équipe ${game.team2} a le plus de chance de gagner.`;
    }
    else {
        return `Il y a égalité entre les deux équipes.`;
    }
}

console.log(result());

// Exercice 2

// 1.
for (let i = 0; i < game.scored.length; i++) {
    console.log(`But ${i+1} : ${game.scored[i]}`);
}

// 2.
const turnOddsIntoArray = Object.values(game.odds);

let sum = 0;
function calculAverageOdds() {
    for (let i = 0; i < turnOddsIntoArray.length; i++){
        sum = sum + turnOddsIntoArray[i];
    }
    return sum / turnOddsIntoArray.length
}

console.log(calculAverageOdds());

// 3.
console.log(`Probabilité de victoire pour ${game.team1} : ${team1}`);
console.log(`Probabilité d'égalité' : ${draw}`);
console.log(`Probabilité de victoire pour ${game.team2} : ${team2}`);

// 4.
const scorers = {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
}

// Exercice 3

const gameEvents = [
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🟨 Yellow card"],
    [69, "🟥 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🟨 Yellow card"],
  ];

// 1. ?????? ÉCHEC

const event = [];
for (let i = 0; i < gameEvents.length; i++){
    // Aucune idée de comment faire cet exercice...
}

// 2.
gameEvents.splice(4,1);
console.log(gameEvents);

// 3.
let averageEvent = 90 / gameEvents.length;
console.log(`Un évènement est apparu en moyenne toutes les ${averageEvent} minutes.`);

// 4.
for (let i = 0; i < gameEvents.length; i++){
    if (gameEvents[i][0] < 45){
        console.log(`[PREMIÈRE MOITIÉ] ${gameEvents[i]} : ${gameEvents[i][1]}`);
    }
    else {
        console.log(`[DEUXIÈME MOITIÉ] ${gameEvents[i][0]} : ${gameEvents[i][1]}`);
    }
}