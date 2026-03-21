console.log("1. 동기 코드 시작");

setTimeout(() => {
  console.log("2. setTimeout (Macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Promise 1 (Microtask)");
  })
  .then(() => {
    console.log("4. Promise 2 (Microtask)");
  });

console.log("5. 동기 코드 끝");

// 실행순서 :
// 1. 동기 코드 시작
// 5. 동기 코드 끝
// 3. Promise 1 (Microtask)"
// 4. Promise 2 (Microtask)
// 2. setTimeout (Macrotask)"
