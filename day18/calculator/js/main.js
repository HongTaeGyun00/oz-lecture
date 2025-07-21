import calculate, {
  appendNumber,
  setOperator,
  subDisplay,
  resetCalculator, // calculate 대신 resetCalculator를 Clear 함수로 사용할 것
  VALID_NUMBERS,
  VALID_OPERATORS,
} from "./index.js"; // calculate는 export default이므로 이름 없이 import

// 키보드 이벤트 처리
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (VALID_NUMBERS.includes(key)) {
    appendNumber(key);
  } else if (VALID_OPERATORS.includes(key)) {
    setOperator(key);
  } else if (key === "Enter") {
    event.preventDefault(); // Enter 키 기본 동작(폼 제출 등) 방지
    calculate();
  } else if (key === "Backspace") {
    subDisplay();
  } else if (key === "Escape") {
    // Esc 키로 초기화
    resetCalculator();
  }
});

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", () => {
  resetCalculator(); // 페이지 로드 시 계산기 초기화
});
