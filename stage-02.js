const input = require('sync-input');

let earnings = {
  "Bubblegum": 202,
  "Toffee": 118,
  "Ice cream": 2250,
  "Milk Chocolate": 1680,
  "Doughnut": 1075,
  "Pancake": 80
};

let totalIncome = 0;

console.log("Earned amount:");

for (let key in earnings) {
  console.log(key + ": $" + earnings[key]);
  totalIncome += earnings[key];
}
    
console.log("Income: $" + totalIncome);
