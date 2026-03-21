function loadData() {
  //데이터 불러오기 예지
  console.log("데이터 요청 시작...");

  // fetch는 브라우저 API를 통해 네트워크 요청을 보냄 (비동기)
  fetch("https://api.example.com/data")
    .then((response) => response.json()) // (A) Microtask로 등록됨
    .then((data) => console.log("결과:", data)) // (B) (A)가 완료된 후 등록됨
    .catch((err) => console.error("에러:", err)); // 에러처리

  console.log("요청은 보냈고, 나는 다음 일을 하러 감!");
}

loadData();

// 실행 순서는

//  console.log("데이터 요청 시작...");
//  console.log("요청은 보냈고, 나는 다음 일을 하러 감!");

// fetch("https://api.example.com/data")
//  .then((response) => response.json()) // (A) Microtask로 등록됨
//  .then((data) => console.log("결과:", data)) // (B) (A)가 완료된 후 등록됨
//  .catch((err) => console.error("에러:", err)); // 에러처리
