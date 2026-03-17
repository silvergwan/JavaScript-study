// 콜백은 무조건 화살표
[1, 2, 3].map(function (x) {
  return x * 2;
});

// good
[1, 2, 3].map((x) => x * 2);
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
