'use strict';
// 1
let tip;

function calcTip(check) {
    if (check >= 50 && check <= 300) {
        return tip = check * 0.15 ;
    }
    else {
        return tip = check * 0.20 ;
    }
}

console.log(calcTip(100));

// 2
const bills = [125, 555, 44];

// 3
const tips = bills.map((element) => {
    return calcTip(element);
});

console.log(tips);

// 4
const totals = [];

for (i=0; i < bills.length; i++) {
    totals[i] = bills[i] + tips[i];
} 

console.log(totals);