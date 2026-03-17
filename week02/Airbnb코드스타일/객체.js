// bad
const obj = { Newjeans: Newjeans };
const copy = Object.assign({}, original, { c: 3 });

// good
const obje = { Newjeans }; // 프로퍼티 단축
const copyy = { ...original, c: 3 }; // 무조건 spread 연산자
