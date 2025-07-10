// 변수 선언
const MAX_STARS = 10;
let input;
var starsString;

// 입력받은 수만큼 별 찍기
function printStars(count = 1) {
  if (count <= 0) {
    count = 1;
  }

  starsString = "";

  for (let i = 0; i < count; i++) {
    starsString += "*";
  }
  console.log(starsString);
}

// 사용자 입력
let isValidInput = false;
do {
  let inputStr = prompt("출력할 별 갯수를 입력하세요.");

  if (inputStr === null || inputStr.trim() === "") {
    console.log("Invalid input! Enter a number between 1 and 10.");
    continue;
  }
  input = parseInt(inputStr);

  if (isNaN(input) || input < 1 || input > MAX_STARS) {
    console.log("Invalid input! Enter a number between 1 and 10.");
  } else {
    isValidInput = true;
    printStars(input);
  }
} while (!isValidInput);
