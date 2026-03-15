// pow(x,n) 함수 만들기

// x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// 내 정답

function pow(x, n) {
  // 함수 선언
  if (n < 0) {
    // 만약 제곱수가 0보다 작으면
    console.log("자연수를 입력하세요");
    return; // 함수 종료
  }

  const result = x ** n; // 제곱 결과 계산

  return result;
}

console.log(pow(3, 2)); // 3의 2제곱은?

// 근데 이건 그냥 코드가 완벽한데, 나보다 나을 수가 없음.

// 해답 :

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`${n}은 양의 정수이어야 합니다.`);
} else {
  alert(pow(x, n));
}
