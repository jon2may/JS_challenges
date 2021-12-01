'use strict';

function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

const scoreDauphins1 = calcAverage(44,23,71);
const scoreDauphins2 = calcAverage(85,54,41);

const scoreKoalas1 = calcAverage(65,54,49);
const scoreKoalas2 = calcAverage(23,34,27);

console.log(scoreDauphins1);
console.log(scoreDauphins2);
console.log(scoreKoalas1);
console.log(scoreKoalas2);

function checkWinner(dauphins,koalas) {
    if (dauphins > koalas) {
        console.log(`L'équipe Dauphins gagne (${scoreDauphins1} vs ${scoreKoalas1}).`);
    }
    else if (koalas > dauphins) {
        console.log(`L'équipe Koalas gagne (${scoreKoalas1} vs ${scoreDauphins1}).`);
    }
    else {
        console.log("Pas de gagnants !");
    }
}

checkWinner(scoreDauphins1,scoreKoalas1);