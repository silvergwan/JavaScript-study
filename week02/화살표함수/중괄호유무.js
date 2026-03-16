const isEnoughBalance = (amount, balance) => amount <= balance;

console.log(isEnoughBalance(50000, 100000)); // true
console.log(isEnoughBalance(150000, 100000)); // false
