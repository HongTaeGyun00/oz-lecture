import calculateOperation from "./operations.js";
import {
  resetDisplay as inputResetDisplay,
  setDisplay as inputSetDisplay,
  subDisplay as inputSubDisplay,
  appendNumber as inputAppendNumber,
  setOperator as inputSetOperator,
  VALID_NUMBERS,
  VALID_OPERATORS,
} from "./input.js";
import { showError, removeError } from "./error.js";
import saveHistory from "./history.js";

// 전역 상태 변수들
let history = [];
let currentInput = "0";
let firstNumber = null;
let operator = null;
let isError = false;
let isResultDisplayed = false;

// DOM 요소 참조
const displayElement = document.getElementById("display");
const resultElement = document.getElementById("result");
const historyListElement = document.getElementById("historyList");

// 디스플레이 업데이트 (DOM 직접 조작)
const updateMainDisplay = (value) => {
  if (displayElement) {
    displayElement.textContent = value;
  }
};

// 메인 디스플레이 리셋
const resetMainDisplay = () => {
  currentInput = inputResetDisplay();
  updateMainDisplay(currentInput);
  isResultDisplayed = false;
};

// 숫자 입력 처리 (main.js에서 호출될 함수)
const appendNumber = (number) => {
  try {
    removeError();
    currentInput = inputAppendNumber(number, currentInput, isResultDisplayed);
    updateMainDisplay(currentInput);
    isResultDisplayed = false;
    isError = false;
  } catch (error) {
    showError(error.message);
    isError = true;
  }
};

// 연산자 설정 처리 (main.js에서 호출될 함수)
const setOperator = (op) => {
  try {
    if (isError) return;

    operator = inputSetOperator(op, currentInput, firstNumber);

    if (firstNumber !== null && currentInput !== "0" && currentInput !== "") {
      try {
        const result = calculateOperation(
          firstNumber,
          Number(currentInput),
          operator
        );
        history = saveHistory(
          firstNumber,
          operator,
          Number(currentInput),
          result,
          history
        );
        updateResultDisplay(result);
        firstNumber = result;
        currentInput = "0";
        updateMainDisplay(currentInput);
        isResultDisplayed = true;
        removeError();
        isError = false;
      } catch (calcError) {
        showError(calcError.message);
        isError = true;
        resetCalculator();
      }
    } else {
      if (currentInput !== "0" && currentInput !== "") {
        firstNumber = Number(currentInput);
      }
      currentInput = "0";
      updateMainDisplay(currentInput);
      isResultDisplayed = false;
      removeError();
      isError = false;
    }
  } catch (error) {
    showError(error.message);
    isError = true;
  }
};

// 백스페이스 (DEL) 처리 (main.js에서 호출될 함수)
const subDisplay = () => {
  try {
    if (isError) {
      removeError();
      isError = false;
      resetMainDisplay();
      return;
    }

    currentInput = inputSubDisplay(currentInput);
    updateMainDisplay(currentInput);
    isResultDisplayed = false;
  } catch (error) {
    showError(error.message);
    isError = true;
  }
};

// 결과창 업데이트 (DOM 직접 조작)
const updateResultDisplay = (result) => {
  resultElement.classList.remove("d-none", "alert-danger");
  resultElement.classList.add("alert-info");
  resultElement.textContent = `결과: ${result}`;
};

// 결과창 숨김
const clearResultDisplay = () => {
  resultElement.classList.add("d-none");
  resultElement.classList.remove("alert-info", "alert-danger");
  resultElement.textContent = "";
};

// 계산기 전체 초기화
const resetCalculator = () => {
  history = [];
  currentInput = "0";
  firstNumber = null;
  operator = null;
  isError = false;
  isResultDisplayed = false;
  updateMainDisplay(currentInput);
  clearResultDisplay();
  if (historyListElement) {
    historyListElement.innerHTML = "";
  }
  removeError();
};

export default function calculate() {
  try {
    if (isError) return;

    if (firstNumber === null || operator === null || currentInput === "") {
      throw new Error("계산에 필요한 값이 부족합니다.");
    }

    const secondNumber = Number(currentInput);
    if (isNaN(secondNumber)) {
      throw new Error("유효한 숫자를 입력하세요.");
    }

    const result = calculateOperation(firstNumber, secondNumber, operator);
    history = saveHistory(firstNumber, operator, secondNumber, result, history);

    updateResultDisplay(result);
    updateMainDisplay(result.toString());

    // 계산 후 다음 입력을 위한 초기화
    currentInput = result.toString();
    firstNumber = null;
    operator = null;
    isResultDisplayed = true;
    isError = false;
    removeError();
  } catch (error) {
    showError(error.message);
    isError = true;
    firstNumber = null;
    operator = null;
  }
}

// 외부에서 사용될 함수/상수들 export
export {
  appendNumber,
  setOperator,
  subDisplay,
  resetCalculator,
  VALID_NUMBERS,
  VALID_OPERATORS,
  history,
  currentInput,
  firstNumber,
  operator,
  isError,
};
