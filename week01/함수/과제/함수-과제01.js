// '?'나 '||'를 사용하여 함수 다시 작성하기

// 아래 함수는 매개변수 age가 18보다 큰 경우 true를 반환합니다.
//그 이외의 경우는 컨펌 대화상자를 통해 사용자에게 질문한 후, 해당 결과를 반환합니다.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log("보호자의 동의를 받으셨나요?");
  }
}

// if문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보세요.
// 아래 조건을 충족하는 해답 2개를 작성해야 합니다.

// - 물음표 연산자 ?를 사용하여 본문을 작성
// - OR 연산자 ||를 사용하여 본문을 작성

// 내 정답 :

function checkAge(age) {
  age > 18 ? true : console.log("보호자의 동의를 받으셨나요?");
}
// 풀이: return이 없음

function checkNai(age) {
  age > 18 || console.log("보호자의 동의를 받으셨나요?");
}
// 풀이: 이것 또한 return이 없음.

// 해답 :

// 삼항 연산자, 좋아보임
function checkAge(age) {
  return age > 18 ? true : console.log("보호자의 동의를 받으셨나요?");
}

// OR(||)이 짧기는 한데 , 한 눈에 들어오지는 않음
function checkAge(age) {
  return age > 18 || console.log("보호자의 동의를 받으셨나요?");
}

checkAge(19);
checkAge(17);
