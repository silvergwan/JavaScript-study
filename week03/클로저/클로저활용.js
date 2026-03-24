function createAccount(initialBalance) {
  let balance = initialBalance; // 외부에서 절대 접근 불가

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) throw new Error("잔액 부족");
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const myAccount = createAccount(1000000);

myAccount.deposit(500000); // 1500000
myAccount.withdraw(200000); // 1300000

console.log(myAccount.balance); // undefined ← 접근 자체가 불가

// createAccount 내부 함수들 deposit(입급), withdraw(출금)에서 balance(잔액)변수를 참조하기 때문에 가비지컬렉터가 수거할 수 없음
// 이것이 클로저.
// 전역 노출 없이 보호할 때 클로저 패턴이 적합
// 정보 은닉 등의 역할을 함.