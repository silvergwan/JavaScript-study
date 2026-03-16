// 한 줄 → 중괄호 없음 → return 자동
const isEnoughBalance = (amount, balance) => amount <= balance;

console.log(isEnoughBalance(50000, 100000)); // true
console.log(isEnoughBalance(150000, 100000)); // false


// 여러 줄 → 중괄호 있음 → return 직접 써야 함
const transferMoney = (amount, balance) => {
  if (amount <= 0) return "자연수를 입력해주세요";
  if (amount > balance) return "잔액이 부족합니다";
  return `${amount}원 송금 완료`;
};
