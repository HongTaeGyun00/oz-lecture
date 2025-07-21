const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_OPERATORS = ["+", "-", "*", "/"];

// 디스플레이를 "0"으로 리셋하는 문자열을 반환
const resetDisplay = () => {
  return "0";
};

// 주어진 텍스트로 디스플레이를 설정하는 문자열을 반환
const setDisplay = (text) => {
  return text;
};

// 현재 입력에서 마지막 문자를 제거한 문자열을 반환
const subDisplay = (currentInput) => {
  const textSubbed = currentInput.slice(0, -1);
  if (textSubbed === "") return "0";
  return textSubbed;
};

// 숫자를 현재 입력에 추가한 문자열을 반환
const appendNumber = (number, currentInput, isResultDisplayed) => {
  if (!VALID_NUMBERS.includes(number)) {
    throw new Error("유효한 숫자를 입력하세요.");
  }

  if (isResultDisplayed || currentInput === "0") {
    return setDisplay(number);
  }
  return setDisplay(currentInput + number);
};

// 연산자의 유효성을 검사하고, 연산자를 반환
const setOperator = (op, currentInput, firstNumber) => {
  if (!VALID_OPERATORS.includes(op)) {
    throw new Error("유효한 연산자를 선택하세요.");
  }
  if (!currentInput && firstNumber === null) {
    throw new Error("숫자를 먼저 입력하세요.");
  }
  return op;
};

export {
  resetDisplay,
  setDisplay,
  subDisplay,
  appendNumber,
  setOperator,
  VALID_NUMBERS,
  VALID_OPERATORS,
};
