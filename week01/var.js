console.log(`실행 결과: ${num}`);

// var는 호이스팅을 지원함, 내 기억과는 다르게 undefined로 있는 척 하네.
// var 쓰면 안되는 이유 중 1
var num = 1;

console.log(`실행 결과: ${num}`);

// 선언이 중복해서 가능하다고?
var code = 10;
var code = 20;
console.log(`code: ${code}`); // 'code: 20'

var code = 10;
if (true) {
  var code = 0;
  var codeName = "Hello JS!";
}
console.log(`code: ${code}`); // 'code: 0'
console.log(`codeName: ${codeName}`); // 'codeName: Hello JS!'

// 조건문 안에서 code = 0을 선언을 하였지만 전역으로 적용되어,
// 조건문 밖에서 호출을 했음에도 10이 아닌 0이 나옴
