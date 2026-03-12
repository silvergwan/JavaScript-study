// 주로 자바스크립트에선 let 키워드를 사용해 변수를 생성합니다.

let name = "최은관";
let age = "19";
let home = "대구";

console.log(home);
home = "서울";
// 원하면 마음대로 값을 바꿀 수 있다.
console.log(home);

// 변화하지 않는 변수(상수)를 선언할 땐, let 대신 const를 사용합니다.
const myBirthday = "02.04.2008";

// TypeError: Assignment to constant variable.
// myBirthday = "14.01.2007";

