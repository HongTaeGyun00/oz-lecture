var Name = "홍태균";
let myName = `제 이름은 ${Name}입니다.`;
console.log(myName);

let Age = 26;
let myAge = `제 나이는 ${Age}살입니다.`;
console.log(myAge);

const isDeveloper = true;
console.log("개발자 여부:", isDeveloper);

const hobbies = ["독서", "게임", "코딩", "음악감상"];
const hobbiesString = "저의 취미는\n" + hobbies.join(", ") + " 입니다.";
console.log(hobbiesString);

const personalInfo = {
  name: Name,
  age: Age,
  mbti: "ISFJ",
  isStudent: false,
  hobbies: ["독서", "게임", "코딩", "음악감상"],
};
console.log("\n--- 객체 리터럴 (개인 정보) ---");
console.log(personalInfo);

const profileSentence = `안녕하세요! 저는 ${personalInfo.name}이고, ${
  personalInfo.age
}살입니다. ${personalInfo.isStudent ? "학생" : "개발자"}이며, MBTI는 ${
  personalInfo.mbti
}입니다.`;
console.log("프로필 문장:", profileSentence);

console.log("\n--- typeof 연산자 결과 ---");
console.log("Name 변수의 타입:", typeof Name);
console.log("Age 변수의 타입:", typeof Age);
console.log("isDeveloper 변수의 타입:", typeof isDeveloper);
console.log("hobbies 변수의 타입:", typeof hobbies);
console.log("personalInfo 변수의 타입:", typeof personalInfo);
