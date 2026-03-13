// 아래 스크립트의 결과를 예측해 보세요.

let name = "은관";

console.log(`hello ${1}`);

console.log(`hello ${"name"}`);

console.log(`hello ${name}`);

// 내가 푼 답

// hello 1
// hello name
// hello 은관

// 해답

let namee = "은관";

// 표현식은 숫자 1입니다.
console.log(`hello ${1}`); // hello 1

// 표현식은 문자열 "name"입니다.
console.log(`hello ${"name"}`); // hello name

// 표현식 안에 변수가 들어가 있기 때문에, 이 변수가 평가되어 전체 문자열이 반환됩니다.
console.log(`hello ${namee}`); // hello 은관
