// 함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근할 수 있습니다.

function callName() {
  let name = "은관";

  console.log(name);
}

callName(); // 요건 "은관" 나오고
console.log(name); // ReferenceError가 출력됨
