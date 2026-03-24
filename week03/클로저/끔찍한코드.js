let balance = 1000000; // 전역에 잔액이 있다

function deposit(amount) {
  balance += amount;
}

function withdraw(amount) {
  balance -= amount;
}

// let balance = 0; 때리면 한순간에 잔액 삭제