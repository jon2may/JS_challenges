'use strict';

const dolphinsScores = [96, 108, 89, 97, 112, 101, 97, 112, 101];
const koalasScores = [88, 91, 110, 109, 95, 123, 109, 95, 106];

// Calcul de la moyenne des Dauphins
let dolphinsSum = 0;
for (let i= 0; i < dolphinsScores.length; i++) {
    dolphinsSum += dolphinsScores[i];
}
console.log(dolphinsSum);

let dolphinsAverageScore = dolphinsSum / dolphinsScores.length;
console.log(dolphinsAverageScore);

// Calcul de la moyenne des Koalas
let koalasSum = 0;
for (let i= 0; i < koalasScores.length; i++) {
    koalasSum += koalasScores[i];
}
console.log(koalasSum);

let koalasAverageScore = koalasSum / koalasScores.length;
console.log(koalasAverageScore);

// Comparer les moyennes

if (dolphinsAverageScore || koalasAverageScore > 100) {
    if (dolphinsAverageScore > koalasAverageScore ) {
        console.log('Les Dauphins remportent la compétition.');
    }
    else if (koalasAverageScore > dolphinsAverageScore ) {
        console.log('Les Koalas remportent la compétition.');
    }
    else {
        console.log('Les deux équipes sont à égalité.');
    }
}
else {
    console.log("Il n'y a pas de gagnant !");
}