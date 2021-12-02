'use strict';

const temperatures = [12, 5, -5, 0, 4];
let day = 1;

for (let i = 0; i < temperatures.length; i++) {
    console.log(`${temperatures[i]} degrés dans ${day} jours`);
    day++;
}