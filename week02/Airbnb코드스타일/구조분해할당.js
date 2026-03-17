// bad
const firstName = user.firstName;
const lastName = user.lastName;

// good
const { myName, yourName } = user;

// 함수 매개변수에서 바로
function getOurName({ myName, yourName }) {
  return `${myName} ${yourName}`;
}
