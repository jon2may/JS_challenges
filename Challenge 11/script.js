'use strict';

const person1 = {
    name : 'Bernard',
    weight : 95,
    height : 1.88,
    calcBMI : function() {
        return this.weight / (this.height * this.height);
    }
}

const person2 = {
    name : 'Marcel',
    weight : 85,
    height : 1.76,
    calcBMI : function() {
        return this.weight / (this.height * this.height);
    }
}

console.log(person1.calcBMI());
console.log(person2.calcBMI());

if (person1.calcBMI() > person2.calcBMI()) {
    console.log(`L'IMC de ${person1.name} (${person1.calcBMI()}) est plus élevé que celui de ${person2.name} (${person2.calcBMI()}).`);
}
else {
    console.log(`L'IMC de ${person2.name} (${person2.calcBMI()}) est plus élevé que celui de ${person1.name} (${person1.calcBMI()}).`);
}