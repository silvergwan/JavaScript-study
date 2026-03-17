// 함수 선언식 — 호이스팅 때문에 어디서 선언됐는지 추적 불가
function foo() {
  // ...
}

// 이름 있는 함수 표현식(fooImpl은 함수 내부 이름)
const foo = function fooImpl() {
  //  ...
};

// 매개변수 기본값은 기본이지
function handleThings(name, opts = {}) {
  // ...
}

// 매개변수 절대 재할당 금지
function f(a) {
  a = 1;
} // 범죄
