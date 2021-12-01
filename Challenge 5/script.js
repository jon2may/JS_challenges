'use strict';

// Calculer le pourboire en fonction du montant de la facture

let check;
let tip;

function tipCalculator(check) {
    if (check >= 50 || check <= 300) {
        return tip = check * 0.15 ;
    }
    else {
        return tip = check * 0.20 ;
    }
}

console.log(tipCalculator(275));

// Écrire dans la console une phrase contenant toutes les informations

check = 275;
let checkTotal = check + tip ;

console.log("La note était de " + check + ", le pourboire de " + tip + " et la valeur totale était de " + checkTotal + " .");