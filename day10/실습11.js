/*
// 문제 1 : 자기소개 객체 만들기
let person1= { name : "이태형", age : '27', city : '서울'}
console.log(person1);

// 문제 2 : 객체의 값(value) 출력하기
const book= {title :"book1", autor: "이태형", page : '777'};

const value2 = Object.values(book);

for(let i = 0; i<=value2.length-1; i++){
  console.log(value2[i])
}

// 문제 3 : 객체 속성 추가 및 삭제하기
const person3 = { name: "이태형", age :'27'};
delete person3.age;
person3.email = "xm30003@naver.com"

console.log(person3)
*/

// 문제 4 : 객체 속성값 계산하기
const product4 = {name:"노트북", pirce : "180",stock:" 3"};


console.log('pirce' in product4);
console.log('stock' in product4);
