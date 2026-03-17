// 콜백 예시

function transferMoney(amount, balance, onSuccess, onFail) {
  // 송금 함수(금액, 성공(함수), 실패(함수))
  if (amount <= 0) {
    // 송금 금액이 0보다 작으면
    onFail("자연수를 입력해주세요");
    return; // 얼리 리턴
  }
  if (amount > balance) {
    // 송금 금액이 잔액보다 크면
    onFail("송금하려는 금액이 잔액보다 큽니다.");
    return; // 얼리 리턴
  }
  onSuccess(amount); //이 정도면 무조건 성공
}

transferMoney(
  // 함수 호출
  50000, // 송금 금액
  100000, // 잔액
  (amount) => console.log(`${amount}원 송금 완료`),
  (reason) => console.log(`송금 실패 ${reason}`),
);
