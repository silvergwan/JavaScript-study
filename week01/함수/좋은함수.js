//좋은 코드는! 아래에

async function handleBudget(userId, income, expenses) {
  // 예산 처리
  const user = await findUserOrThrow(userId); // findUserOrThrow가 실행될 때까지 기다림, 왜(유저를 안 찾으면 할 수 있는게 없음)
  const remaining = calcRemaining(income, expenses); // 잔액 계산, 매개변수(수입, 지출[배열])
  await updateBudgetStatus(userId, remaining); // 예산 상태 업데이트
  await notifyIfDangerous(user, remaining); // 위험하면알림
  return remaining; //잔액 반환
}

// 유저 조회
async function findUserOrThrow(userId) {
  const user = await db.find(userId); // user가 db에서 find를 했을 때 해당하는 userId가 없으면?
  if (!user) throw new Error("유저 없음"); // 에러 배출(유저 없음)
  return user; // else 유저 반환
}

// 잔액 계산
function calcRemaining(income, expenses) {
  const total = expenses.reduce((sum, amount) => sum + amount, 0); // 총지출 = 비용배열[]에서 reduce 돌림,배열.reduce((합계, 배열에서 현재값) => 합계 + 배열에서 현재값, 합계 기본 값)
  return income - total; //수입 빼기 - 총지출
}

// 상태 업데이트
async function updateBudgetStatus(userId, remaining) {
  const status = remaining < 0 ? "위험" : "안전"; // 상태 = 잔액이 0보다 작으면 "위험" 아니면 "안전"
  await db.update(userId, { status }); // db에서 user 상태 업데이트를 기다림 -> 다음 로직 위해서
}

// 위험할 때 알림
async function notifyIfDangerous(user, remaining) {
  if (remaining < 0) {
    // 만약 잔액이 0보다 적으면
    await mailer.send(user.email, "지출이 수입을 초과했습니다"); //이메일 발송(user.email, "지출 수입 초과 메시지 발송")
  }
}

// handleBudget() 함수만 읽어도 유저 찾고 → 잔액 계산하고 → 상태 업데이트하고 → 위험하면 알림
