// 변수를 복사해 다른 변수에 할당하는 것처럼 함수를 복사해 다른 변수에 할당할 수도 있음

function sayHi() {
  // 1. 함수 생성
  console.log("안녕");
}

let func = sayHi; // 2. 함수 복사

func(); // Hello     // 3. 복사한 함수를 실행(정상적으로 실행됨)
sayHi(); // Hello    // 원램 함수도 정상적으로 실행됨

console.log(typeof func);
console.log(typeof sayHi);

// typeof를 갈겨도 둘 다 function이다.
