export default function calculateOperation(
  firstNumber,
  secondNumber,
  operator
) {
  if (operator === "/" && secondNumber === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }

  let result;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      throw new Error("알 수 없는 연산자입니다.");
  }
  return result;
}
