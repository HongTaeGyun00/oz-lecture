// 후치연산
let increment = 10;
console.log("1", increment);
increment++;
console.log("2", increment);
console.log("3", increment++);
console.log("4", increment);

let decrement = 10;
console.log("dec1", decrement);
decrement--;
console.log("dec2", decrement);
console.log("dec3", decrement--);
console.log("dec4", decrement);

// 전치연산
let incFirst = 10;
console.log("incFirst1", incFirst);
++incFirst;
console.log("incFirst2", incFirst);
console.log("incFirst3", ++incFirst);
console.log("incFirst4", incFirst);

let decFirst = 10;
console.log("decFirst1", decFirst);
--decFirst;
console.log("decFirst2", decFirst);
console.log("decFirst3", --decFirst);
console.log("decFirst4", decFirst);

// console.log(++a) 전차연산
let a = 10;
a = a + 1;
console.log(a);

// console.log(b++) 후치연산
let b = 10;
console.log(b);
b = b + 1;

// 불가
// let c = c++;

// 단항 부정 연산자
let num = -10;
num = -num;
console.log("-(-10)", num);

let num2 = 10;
num2 = -num2;
console.log("-(10)", num2);

let num3 = 10;
-num3;
console.log(num3);
