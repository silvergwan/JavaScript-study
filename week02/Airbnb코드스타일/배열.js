// for 쓰지 말고
for (let i = 0; i < numbers.length; i++) {
  // ...
}

// 함수형 메서드 사용
const sum = numbers.reduce((total, num) => total + num, 0);
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
