// 에러 메시지 출력
const showError = (message) => {
  const resultElement = document.getElementById("result");
  resultElement.classList.remove("d-none", "alert-info");
  resultElement.classList.add("alert-danger");
  resultElement.textContent = `오류: ${message}`;
};

// 에러 메시지 제거
const removeError = () => {
  const resultElement = document.getElementById("result");
  resultElement.classList.add("d-none"); // 오류 메시지 숨기기
  resultElement.classList.remove("alert-danger", "alert-info");
  resultElement.textContent = "";
};

export { showError, removeError };
