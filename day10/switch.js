let food = "melon";

switch (food) {
  case "apple":
  case "melon":
  case "banana":
  case "cherry":
    console.log("fruit");
    break;

  default:
    console.log("not food");
    break;
}

let score = 90;
let grade;
if (score >= 90 && score <= 100) {
  grade = "A++";
}

console.log("grade", grade);
