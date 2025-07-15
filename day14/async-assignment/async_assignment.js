const MAX_TIME = 10;
const MIN_TIME = 1;

let timerInterval;
let currentCount;

var timerInputElement;
var startButtonElement;
var timerDisplayElement;

document.addEventListener("DOMContentLoaded", function () {
  timerInputElement = document.getElementById("timerInput");
  startButtonElement = document.getElementById("startTimer");
  timerDisplayElement = document.getElementById("timerDisplay");
  startButtonElement.addEventListener("click", handleStartButtonClick);
});

function handleStartButtonClick() {
  clearInterval(timerInterval);
  timerDisplayElement.classList.remove("error");

  const inputValue = timerInputElement.value;
  const seconds = Number(inputValue);

  // 입력 유효성 검사:
  if (isNaN(seconds) || seconds < MIN_TIME || seconds > MAX_TIME) {
    timerDisplayElement.textContent = "유효한 숫자(1-10)를 입력하세요!";
    timerDisplayElement.classList.add("error");
    return;
  }
  startTimer(seconds);
}

function startTimer(initialSeconds = 10) {
  currentCount = initialSeconds;

  startButtonElement.disabled = true;

  timerDisplayElement.textContent = `타이머: ${currentCount}초`;

  timerInterval = setInterval(() => {
    currentCount--;

    timerDisplayElement.textContent = `타이머: ${currentCount}초`;

    if (currentCount <= 0) {
      clearInterval(timerInterval);
      timerDisplayElement.textContent = "타이머 종료!";
      startButtonElement.disabled = false;
    }
  }, 1000);
}
