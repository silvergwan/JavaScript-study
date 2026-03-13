function sendMessage(from, text) {
  // 인자: from, text
  console.log(from + ": " + text);
}

sendMessage("은관", "안녕!"); // 은관: 안녕!
sendMessage("은관", "무슨 일 있어?"); // 은관: 무슨 일 있어?
sendMessage("은관"); // 은관: undefined

// 매개변수에는 기본값이 들어갈 수 있다( 위 상황 방지 위해 )
