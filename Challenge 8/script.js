'use strict';

const checks = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tip;

function calcTip(check) {
    if (check >= 50 && check <= 300) {
        return tip = check * 0.15 ;
    }
    else {
        return tip = check * 0.20 ;
    }
}

const tips = [];
const totals = [];

for (let i = 0; i < checks.length; i++) {
    tips[i] = calcTip(checks[i]);
    totals[i] = checks[i] + tips[i];
}

console.log(tips);
console.log(totals);

function calcAverage(array) {
    const reducer = (acc, cur) => acc + cur;
    const sum = array.reduce(reducer);
    return sum / array.length;
}

console.log(calcAverage(totals));