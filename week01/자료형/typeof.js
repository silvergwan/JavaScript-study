// typeof 연산자는 인수의 자료형을 반환함.

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object", 자바스크립트 내장 객체이기 때문에 object 반환

typeof console.log;
