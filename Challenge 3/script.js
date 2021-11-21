'use strict';

// EXERCICE 1

const bernard1 = {
    weight: 78, 
    height: 1.69
}

const bernard2 = {
    weight: 95, 
    height: 1.88
}

const marcel1 = {
    weight: 92, 
    height: 1.95
}

const marcel2 = {
    weight: 85, 
    height: 1.76
}

function calculIMC(weight, height) {
    const IMC = weight / (height * height);
    return IMC; 
}

let bernardIMC1 = calculIMC(bernard1.weight, bernard1.height);
let bernardIMC2 = calculIMC(bernard2.weight, bernard2.height);
let marcelIMC1 = calculIMC(marcel1.weight, marcel1.height);
let marcelIMC2 = calculIMC(marcel2.weight, marcel2.height);

console.log(bernardIMC1);
console.log(bernardIMC2);
console.log(marcelIMC1);
console.log(marcelIMC2);

// EXERCICE 2

let bernardHigherIMC1 = bernardIMC1 > marcelIMC1;

if (bernardHigherIMC1) {
    console.log(`Bernard a un IMC (${bernardIMC1}) plus grand que celui de Marcel (${marcelIMC1}).`);
}
else {
    console.log(`Marcel a un IMC (${marcelIMC1}) plus grand que celui de Bernard (${bernardIMC1}).`);
}

let bernardHigherIMC2 = bernardIMC2 > marcelIMC2;

if (bernardHigherIMC2) {
    console.log(`Bernard a un IMC (${bernardIMC2}) plus grand que celui de Marcel (${marcelIMC2}).`);
}
else {
    console.log(`Marcel a un IMC (${marcelIMC2}) plus grand que celui de Bernard (${bernardIMC2}).`);
}

// EXERCICE 3

// Avec if...else
if (bernardIMC1 < 22) {
    console.log('Vous êtes en insuffisance pondérale');
}
else if (bernardIMC1 > 22 && bernardIMC1 < 27) {
    console.log('Vous avez un poids normal');
}
else if (bernardIMC1 > 27 && bernardIMC1 < 32) {
    console.log('Vous êtes en surpoids');
}
else {
    console.log("C'est chaud pour vous là !");
}

// Avec switch
switch (marcelIMC1) {
    case marcelIMC1 < 22 :
        console.log('Vous êtes en insuffisance pondérale');
        break;
    case marcelIMC1 > 22 && marcelIMC1 < 27 :
        console.log('Vous avez un poids normal');
        break;
    case marcelIMC1 > 27 && marcelIMC1 < 32 :
        console.log('Vous êtes en surpoids');
        break;
    case marcelIMC1 > 32 :
        console.log("C'est chaud pour vous là !");
        break;
}