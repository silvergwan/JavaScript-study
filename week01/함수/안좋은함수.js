// 함수 하나 = 역할 하나.  

async function handleBudget(userId, income, expenses) { //예산 처리
    const user = await db.find(userId) //유저 찾기
    if (!user) throw new Error("유저 없음") //만약에 유저가 없으면?
    
    let total = 0 // 지출을 합하는 변수
    for (let i = 0; i < expenses.length; i++) { // 반복문, expense[비용 배열] 길이 만큼 받복
        total += expenses[i] //  총 지출에 비용 배열에 있는 값들을 더해줌
    }
    
    const remaining = income - total // 이제 잔액 = 수입 - 지출
    
    if (remaining < 0) { // 만약 잔액이 0보다 적으면
        await db.update(userId, { status: "위험" }) // db 업데이트, user의 상태를 위험으로 변경
        await mailer.send(user.email, "지출이 수입을 초과했습니다") // 이메일 발송
    } else { // 아니면
        await db.update(userId, { status: "안전" }) // db 업데이트, user의 상태를 안전으로 변경
    }
    
    return remaining // 잔액 반환
}

// 이런 코드는 좋지 않다, 한눈에 파악이 힘들기 떄문.

