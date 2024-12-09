const input = require('sync-input');

let bubbleGum = 202;
let toffee = 118;
let iceCream = 2250;
let milkChocolate = 1680;
let doughnut = 1075;
let pancake = 80;
let income = bubbleGum + toffee + iceCream + milkChocolate + doughnut + pancake;
let output = `
Earned amount:
Bubblegum: $${bubbleGum}
Toffee: $${toffee}
Ice cream: $${iceCream}
Milk Chocolate: $${milkChocolate}
Doughnut: $${doughnut}
Pancake: $${pancake}

Income: $${income}
`;

console.log(output);
