// 가상의 API 요청 함수들 (Promise 반환)
const checkBalance = (id) =>
  new Promise((resolve) => setTimeout(() => resolve(100000), 100)); // 잔액 10만원
const transferMoney = (to, amount) =>
  new Promise((resolve) => setTimeout(() => resolve(true), 200));

async function tossTransfer(toUser, amount) {
  console.log("1. [동기] 송금 프로세스 시작");

  try {
    // await를 만나는 순간, tossTransfer 함수의 제어권을 이벤트 루프에 넘깁니다.
    const balance = await checkBalance("myId");
    console.log(`2. [비동기 완료] 잔액 확인 완료: ${balance}원`);

    if (balance < amount) {
      console.log("잔액이 부족합니다.");
      return;
    }

    const success = await transferMoney(toUser, amount);
    if (success) {
      console.log(`3. [비동기 완료] ${toUser}님에게 ${amount}원 송금 완료!`);
    }
  } catch (error) {
    console.error("송금 중 오류 발생:", error);
  }
}

// 실행부
tossTransfer("김토스", 50000);
console.log("4. [동기] 메인 화면 애니메이션 실행 중...");
