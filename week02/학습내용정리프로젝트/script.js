const getPhoneFortune = (phone) => {
  const extracted = extractNum(phone); // 전화번호에서 숫자 추출
  const splited = splitNum(extracted); // 숫자 하나씩 나누기
  const changed = changeNum(splited); // 숫자 하나씩 숫자형 배열로 넣기
  const sum = calcSum(changed); // 숫자 합산
  const fortune = FORTUNES[sum]; // 운세 배열 안에서 합산이랑 똑같은 객체 찾기
  return fortune || "유효한 전화번호를 입력해주세요"; // return
};

const extractNum = (phone) => {
  const extracted = phone.replace(/[^0-9]/g, "");
  return extracted;
};

const splitNum = (extracted) => {
  const splited = extracted.split("");
  return splited;
};

const changeNum = (splited) => {
  const changed = splited.map(Number);
  return changed;
};

const calcSum = (changed) => {
  return changed.reduce((sum, currentNum) => sum + currentNum, 0);
};

console.log(getPhoneFortune("010-9999-9999"));
