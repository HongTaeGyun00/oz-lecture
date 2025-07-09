const MAX_SCORE = 105;
let score;
var GRADE;

// 사용자 입력
score = parseInt(prompt("점수를 입력하세요."));

if (isNaN(score) || score < 0 || score > MAX_SCORE) {
  console.log(
    "⚠️ 잘못된 점수 입력입니다. 0에서 100 사이의 숫자를 입력해주세요."
  );
  // 잘못된 입력 시 함수 실행을 중단합니다.
  throw new Error(
    "Invalid score input. Please enter a number between 0 and 100."
  );
}

// 최종점수 계산 (5점 추가)
let FINALSCORE = score;
FINALSCORE += 5;
console.log("Final Score:", FINALSCORE);

// 등급 결정 (if문)
if (FINALSCORE >= 100) {
  GRADE = "S";
} else if (FINALSCORE >= 90) {
  GRADE = "A";
} else if (FINALSCORE >= 80) {
  GRADE = "B";
} else if (FINALSCORE >= 70) {
  GRADE = "C";
} else if (FINALSCORE >= 60) {
  GRADE = "D";
} else {
  GRADE = "F";
}
console.log("Grade:", GRADE);

// 합격/불합격 여부 결정 (삼항연산자)
const STATUS = FINALSCORE >= 60 ? "Pass" : "Fail";
console.log("Status:", STATUS);

// 등급에 따른 consol.log() 출력 (switch문)
let GradeMessage = "";

switch (GRADE) {
  case "S":
    GradeMessage = "Super!!";
    break;
  case "A":
    GradeMessage = "Excellent work!";
    break;
  case "B":
    GradeMessage = "Good job!";
    break;
  case "C":
    GradeMessage = "Satisfactory performance.";
    break;
  case "D":
    GradeMessage = "Needs improvement.";
    break;
  case "F":
    GradeMessage = "Please try harder!";
    break;
}

console.log("Message:", GradeMessage);
