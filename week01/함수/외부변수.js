// 함수 내부에서 함수 외부의 변수인 외부 변수(outer variable)에 접근할 수 있습니다.

let userName = "은관";

function callName() {
  let name = "안녕하세요, " + userName;
  console.log(name);
}

callName();

// 함수 내부에 외부 변수와 똑같은 이름의 변수가 있으면 내부의 변수가 외부의 변수를 덮어씌움
