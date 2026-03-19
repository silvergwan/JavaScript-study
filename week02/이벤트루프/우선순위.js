console.log("Start"); // Call Stack 실행중인 코드

setTimeout(() => console.log("Timeout"), 0); // Task Que

Promise.resolve().then(() => console.log("Promise")); // Microtask Queue

console.log("End"); // Call Stack 실행중인 코드

// 제발 기억해!!!
// 1. Call Stack
// 2. Microtask Queue (Promise)
// 3. Task Queue (setTimeout)
