// min(a, b) 함수 만들기

// a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보세요.

// 만든 함수는 아래와 같이 동작해야 합니다.

// min(2, 5);
// min(3, -1);
// min(1, 1);

// 내 정답

function min(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

console.log(min(2, 5));

// 해답

function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

// ..뭐 차이가 없다고 볼 수 있지
